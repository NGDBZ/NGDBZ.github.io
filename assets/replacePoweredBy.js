// 替换 Powered by 文本
document.addEventListener('DOMContentLoaded', function() {
    function replacePoweredBy() {
        // 查找 footer2 元素
        const footer2 = document.getElementById('footer2');
        if (!footer2) return;

        // 查找包含 "Powered by" 的 span 元素
        const spans = footer2.querySelectorAll('span');
        for (const sp of spans) {
            if (sp.textContent && sp.textContent.includes('Powered by')) {
                sp.innerHTML = "Powered by <a href=\"https://space.bilibili.com/164694842?spm_id_from=333.1007.0.0\" target=\"_blank\">Algorithm_Lu</a>";
                return;
            }
        }

        // 如果没找到 span，直接替换整个 footer2 的 HTML
        if (footer2.textContent && footer2.textContent.includes('Powered by')) {
            footer2.innerHTML = footer2.innerHTML.replace(
                /Powered by[\s\S]*/,
                "Powered by <a href=\"https://space.bilibili.com/164694842?spm_id_from=333.1007.0.0\" target=\"_blank\">Algorithm_Lu</a>"
            );
        }
    }

    // 页面加载完成后立即执行
    replacePoweredBy();
    
    // 为了确保在动态内容加载后也能生效，延迟再执行一次
    setTimeout(replacePoweredBy, 100);
});
