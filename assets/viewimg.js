// 图片查看器
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.markdown-body img, img[src]');
    
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function(e) {
            e.preventDefault();
            
            const viewer = document.createElement('div');
            viewer.innerHTML = `
                <div id="image-viewer" style="
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                ">
                    <img src="${this.src}" style="
                        max-width: 90%;
                        max-height: 90%;
                        object-fit: contain;
                        border-radius: 8px;
                        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                        cursor: zoom-out;
                    " />
                    <div style="
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        color: white;
                        font-size: 24px;
                        cursor: pointer;
                        background: rgba(255,255,255,0.1);
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">×</div>
                </div>
            `;
            
            document.body.appendChild(viewer);
            
            setTimeout(() => {
                document.getElementById('image-viewer').style.opacity = '1';
            }, 10);
            
            const viewerDiv = document.getElementById('image-viewer');
            viewerDiv.addEventListener('click', function() {
                this.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(viewer);
                }, 300);
            });
        });
    });
});
