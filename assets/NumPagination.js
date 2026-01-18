// 数字分页
document.addEventListener('DOMContentLoaded', function() {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    
    const currentPage = parseInt(new URLSearchParams(window.location.search).get('page') || '1');
    const totalPages = Math.ceil(document.querySelectorAll('.post-item').length / 10);
    
    if (totalPages <= 1) return;
    
    let paginationHTML = '<div class="pagination-numbers" style="display: flex; gap: 8px; align-items: center; justify-content: center; margin: 20px 0;">';
    
    // 上一页
    if (currentPage > 1) {
        paginationHTML += `<a href="?page=${currentPage - 1}" style="
            padding: 8px 12px;
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
        ">上一页</a>`;
    }
    
    // 页码
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<a href="?page=1" style="
            padding: 8px 12px;
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
        ">1</a>`;
        if (startPage > 2) {
            paginationHTML += '<span style="padding: 8px;">...</span>';
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const isActive = i === currentPage;
        paginationHTML += `<a href="?page=${i}" style="
            padding: 8px 12px;
            background: ${isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(102, 126, 234, 0.1)'};
            color: ${isActive ? 'white' : '#667eea'};
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
            font-weight: ${isActive ? 'bold' : 'normal'};
        ">${i}</a>`;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += '<span style="padding: 8px;">...</span>';
        }
        paginationHTML += `<a href="?page=${totalPages}" style="
            padding: 8px 12px;
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
        ">${totalPages}</a>`;
    }
    
    // 下一页
    if (currentPage < totalPages) {
        paginationHTML += `<a href="?page=${currentPage + 1}" style="
            padding: 8px 12px;
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
        ">下一页</a>`;
    }
    
    paginationHTML += '</div>';
    
    paginationContainer.innerHTML = paginationHTML;
    
    // 添加悬停效果
    const pageLinks = paginationContainer.querySelectorAll('a');
    pageLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.style.background.includes('gradient')) {
                this.style.background = 'rgba(102, 126, 234, 0.2)';
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.style.background.includes('gradient')) {
                this.style.background = 'rgba(102, 126, 234, 0.1)';
                this.style.transform = 'translateY(0)';
            }
        });
    });
});
