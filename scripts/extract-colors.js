/**
 * 提取 Figma Design Tokens 并转换为简化格式
 */

const fs = require('fs');
const path = require('path');

// 读取文件
const lightTokens = JSON.parse(
  fs.readFileSync('/Users/linyazhou/Desktop/年轻版ColorToken/Light.tokens.json', 'utf-8')
);
const darkTokens = JSON.parse(
  fs.readFileSync('/Users/linyazhou/Desktop/年轻版ColorToken/Dark.tokens.json', 'utf-8')
);

// 递归提取颜色值
function extractColors(obj, prefix = '') {
  const colors = {};

  for (const [key, value] of Object.entries(obj)) {
    // 跳过元数据
    if (key.startsWith('$')) continue;

    const currentPath = prefix ? `${prefix}/${key}` : key;

    if (value.$type === 'color' && value.$value) {
      // 提取颜色值
      colors[currentPath] = {
        hex: value.$value.hex,
        description: value.$extensions?.['com.figma.codeSyntax']?.iOS || currentPath,
        alias: value.$extensions?.['com.figma.aliasData']?.targetVariableName || null
      };
    } else if (typeof value === 'object' && !value.$type) {
      // 递归处理嵌套对象
      Object.assign(colors, extractColors(value, currentPath));
    }
  }

  return colors;
}

// 提取浅色和深色模式的颜色
const lightColors = extractColors(lightTokens);
const darkColors = extractColors(darkTokens);

// 生成统计信息
console.log('=== 颜色提取统计 ===');
console.log(`浅色模式: ${Object.keys(lightColors).length} 个颜色`);
console.log(`深色模式: ${Object.keys(darkColors).length} 个颜色`);

// 按类别分组
const categories = {
  Bg: [],
  Border: [],
  Btn: [],
  Icon: [],
  Text: []
};

Object.keys(lightColors).forEach(path => {
  const category = path.split('/')[0];
  if (categories[category]) {
    categories[category].push(path);
  }
});

console.log('\n=== 颜色分类 ===');
Object.entries(categories).forEach(([cat, paths]) => {
  console.log(`${cat}: ${paths.length} 个`);
});

// 生成简化的 JSON
const output = {
  light: {},
  dark: {}
};

// 转换为扁平化的变量名
Object.entries(lightColors).forEach(([path, data]) => {
  const varName = path.toLowerCase().replace(/\//g, '-');
  output.light[varName] = data.hex;
});

Object.entries(darkColors).forEach(([path, data]) => {
  const varName = path.toLowerCase().replace(/\//g, '-');
  output.dark[varName] = data.hex;
});

// 输出前 20 个示例
console.log('\n=== 浅色模式示例（前 20 个）===');
Object.entries(output.light).slice(0, 20).forEach(([name, hex]) => {
  console.log(`  ${name}: ${hex}`);
});

// 保存简化版本
const outputPath = '/Users/linyazhou/young-design-system/tokens/colors-extracted.json';
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`\n✅ 已保存到: ${outputPath}`);

// 生成详细的映射表
const detailedOutput = {
  light: lightColors,
  dark: darkColors,
  categories
};

fs.writeFileSync(
  '/Users/linyazhou/young-design-system/tokens/colors-detailed.json',
  JSON.stringify(detailedOutput, null, 2)
);

console.log('✅ 详细版本已保存到: colors-detailed.json');
