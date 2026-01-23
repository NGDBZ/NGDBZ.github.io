// 替换 Powered by 文本 - 增强版
(function() {
    function replacePoweredBy() {
        const footer2 = document.getElementById('footer2');
        if (!footer2) return;

        const spans = footer2.querySelectorAll('span');
        for (const sp of spans) {
            if (sp.textContent && sp.textContent.includes('Powered by')) {
                // 检查是否已经被替换过
                if (!sp.textContent.includes('Algorithm_Lu')) {
                    sp.innerHTML = "Powered by <a href=\"https://space.bilibili.com/164694842?spm_id_from=333.1007.0.0\" target=\"_blank\">Algorithm_Lu</a>";
                    console.log('✅ Powered by 已替换为 Algorithm_Lu');
                }
                return true;
            }
        }
        return false;
    }

    // 多次尝试替换
    function tryReplace() {
        if (!replacePoweredBy()) {
            console.log('⏳ 等待 Powered by 元素出现...');
        }
    }

    // DOMContentLoaded 时执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryReplace);
    } else {
        tryReplace();
    }

    // 延迟执行多次，确保覆盖 Gmeek 的修改
    setTimeout(tryReplace, 500);
    setTimeout(tryReplace, 1000);
    setTimeout(tryReplace, 2000);

    // 使用 MutationObserver 监听 DOM 变化
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                const footer2 = document.getElementById('footer2');
                if (footer2 && footer2.textContent.includes('Powered by') && !footer2.textContent.includes('Algorithm_Lu')) {
                    tryReplace();
                }
            }
        });
    });

    // 开始观察整个 document
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

    console.log('🚀 Powered by 替换脚本已启动');
})();
