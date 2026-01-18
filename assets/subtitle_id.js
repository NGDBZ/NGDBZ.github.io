// 为标题添加锚点ID
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach(heading => {
        const text = heading.textContent.trim();
        const id = text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        
        heading.id = id;
        
        // 添加锚点链接
        heading.style.cursor = 'pointer';
        heading.style.position = 'relative';
        
        heading.addEventListener('click', function() {
            const url = window.location.origin + window.location.pathname + '#' + id;
            navigator.clipboard.writeText(url).then(() => {
                // 显示复制成功提示
                const toast = document.createElement('div');
                toast.textContent = '链接已复制到剪贴板';
                toast.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    z-index: 10000;
                    opacity: 0;
                    transform: translateY(-20px);
                    transition: all 0.3s ease;
                `;
                
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.style.opacity = '1';
                    toast.style.transform = 'translateY(0)';
                }, 10);
                
                setTimeout(() => {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        document.body.removeChild(toast);
                    }, 300);
                }, 2000);
            });
        });
    });
});
