// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const menuButton = document.getElementById('menu-toggle');
    const sideBar = document.getElementById('nav-side');
    const mainContent = document.getElementById('main-content');
    
    // 侧边栏切换功能
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        sideBar.classList.toggle('active');
    });
    
    // 点击主内容区域关闭侧边栏（移动设备）
    mainContent.addEventListener('click', function() {
        if (window.innerWidth <= 1024 && sideBar.classList.contains('active')) {
            sideBar.classList.remove('active');
        }
    });
    
    // 点击外部区域关闭侧边栏
    document.addEventListener('click', function(e) {
        const isClickInsideSidebar = sideBar.contains(e.target);
        const isClickOnMenuButton = e.target === menuButton || menuButton.contains(e.target);
        
        // 在移动端关闭侧边栏
        if (window.innerWidth <= 1024 && 
            !isClickInsideSidebar && 
            !isClickOnMenuButton && 
            sideBar.classList.contains('active')) {
            sideBar.classList.remove('active');
        }
    });
    
    // 窗口大小改变时的处理
    window.addEventListener('resize', function() {
        // 在大屏幕上确保侧边栏默认收起
        if (window.innerWidth > 1024) {
            sideBar.classList.remove('active');
        }
    });
});