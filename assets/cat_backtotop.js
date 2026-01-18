// 返回顶部按钮 - 猫咪样式
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.createElement('div');
    backToTop.innerHTML = `
        <div id="cat-back-to-top" style="
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
        ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
        </div>
    `;
    document.body.appendChild(backToTop);

    const catButton = document.getElementById('cat-back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            catButton.style.opacity = '1';
            catButton.style.visibility = 'visible';
        } else {
            catButton.style.opacity = '0';
            catButton.style.visibility = 'hidden';
        }
    });

    catButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    catButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    catButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
