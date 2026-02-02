/**
 * 单选框交互组件
 * 功能：让单选框支持循环切换（选中 ↔ 未选中）
 * 使用场景：协议勾选等需要取消选中的场景
 */

/**
 * 初始化单选框的循环切换功能
 * @param {string} radioId - 单选框input元素的id
 * @param {string} containerSelector - 单选框容器的选择器（默认：.yds-radio）
 */
function initRadioToggle(radioId, containerSelector = '.yds-radio') {
  const radio = document.getElementById(radioId);

  if (!radio) {
    console.error(`未找到id为 "${radioId}" 的单选框元素`);
    return;
  }

  const radioContainer = radio.closest(containerSelector);

  if (!radioContainer) {
    console.error(`未找到单选框容器 "${containerSelector}"`);
    return;
  }

  // 阻止浏览器的默认单选框行为，完全手动控制
  radioContainer.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认行为

    // 切换状态：未选中 → 选中 → 未选中 → 选中 ...
    if (radio.checked) {
      // 当前选中，切换到未选中
      radio.checked = false;
      radioContainer.classList.remove('yds-radio--checked');
    } else {
      // 当前未选中，切换到选中
      radio.checked = true;
      radioContainer.classList.add('yds-radio--checked');
    }
  });
}

/**
 * 页面加载完成后自动初始化所有标记的单选框
 * 使用方式：在HTML中给单选框添加 data-radio-toggle 属性
 *
 * 示例：
 * <input type="radio" id="agreement" data-radio-toggle>
 *
 * 页面加载后会自动初始化，无需手动调用
 */
document.addEventListener('DOMContentLoaded', function() {
  // 查找所有带有 data-radio-toggle 属性的单选框
  const radios = document.querySelectorAll('input[type="radio"][data-radio-toggle]');

  radios.forEach(function(radio) {
    const radioId = radio.id;

    if (!radioId) {
      console.warn('单选框缺少id属性，跳过初始化');
      return;
    }

    // 自动初始化该单选框
    initRadioToggle(radioId);
  });
});

// 导出到全局，以便手动调用
window.initRadioToggle = initRadioToggle;
