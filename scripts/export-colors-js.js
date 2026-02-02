const fs = require('fs');
const colors = JSON.parse(fs.readFileSync('/Users/linyazhou/young-design-system/tokens/colors-extracted.json', 'utf-8'));

// 输出所有颜色的 JavaScript 数据
console.log('const ALL_COLORS = ' + JSON.stringify(colors.light, null, 2) + ';');
