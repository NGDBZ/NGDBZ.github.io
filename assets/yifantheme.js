// 主题增强功能
document.addEventListener('DOMContentLoaded', function() {
    // 增强主题切换动画
    const originalModeSwitch = window.modeSwitch;
    if (typeof originalModeSwitch === 'function') {
        window.modeSwitch = function() {
            // 添加切换动画
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            originalModeSwitch();
            
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        };
    }
    
    // 添加主题色自定义
    const themeColors = {
        light: {
            primary: '#667eea',
            secondary: '#764ba2',
            accent: '#f093fb'
        },
        dark: {
            primary: '#4c63d2',
            secondary: '#5a3d8b',
            accent: '#d8477f'
        }
    };
    
    // 动态更新CSS变量
    function updateThemeColors(mode) {
        const colors = themeColors[mode] || themeColors.light;
        const root = document.documentElement;
        
        root.style.setProperty('--primary-color', colors.primary);
        root.style.setProperty('--secondary-color', colors.secondary);
        root.style.setProperty('--accent-color', colors.accent);
    }
    
    // 监听主题变化
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-color-mode') {
                const mode = document.documentElement.getAttribute('data-color-mode');
                updateThemeColors(mode);
            }
        });
    });
    
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-color-mode']
    });
    
    // 初始化主题色
    const currentMode = document.documentElement.getAttribute('data-color-mode') || 'light';
    updateThemeColors(currentMode);
    
    // 添加主题切换音效（可选）
    function playSwitchSound() {
        // 创建简单的音效
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // 为主题切换按钮添加音效
    const themeSwitchButton = document.querySelector('[onclick="modeSwitch()"]');
    if (themeSwitchButton) {
        themeSwitchButton.addEventListener('click', playSwitchSound);
    }
    
    // 添加主题偏好记忆
    function saveThemePreference(theme) {
        localStorage.setItem('user-theme-preference', theme);
    }
    
    function loadThemePreference() {
        const saved = localStorage.getItem('user-theme-preference');
        if (saved && ['light', 'dark', 'auto'].includes(saved)) {
            return saved;
        }
        return 'light';
    }
    
    // 应用保存的主题偏好
    const savedTheme = loadThemePreference();
    if (savedTheme !== 'light') {
        setTimeout(() => {
            if (typeof window.modeSwitch === 'function') {
                window.modeSwitch();
            }
        }, 100);
    }
});
