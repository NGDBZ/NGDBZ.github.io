// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.style.opacity = '0';
                
                img.onload = function() {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        img.style.opacity = '0';
        imageObserver.observe(img);
    });
    
    // 为现有图片添加加载动画
    const existingImages = document.querySelectorAll('img:not([data-src])');
    existingImages.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.onload = function() {
                img.style.transition = 'opacity 0.5s ease';
                img.style.opacity = '1';
            };
        }
    });
});
