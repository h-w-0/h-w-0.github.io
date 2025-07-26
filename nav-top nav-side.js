document.addEventListener('DOMContentLoaded', function() {
    // 处理nav-top
    const navTop = document.getElementById('nav-top');
    if (navTop) {
        const navTopContent = `
            <div class="open-menu">
                <p><a href="#" id="menu-toggle"><i class="fas fa-bars"></i></a></p>
            </div>
            <ul>
                <li class="nav-item">
                    <a href="javascript:;">导航</a>
                    <ul>
                        <li><a href="/">主页</a></li>
                        <li><a href="https://lostmedia.wikidot.com/" target="_blank">失传媒体中文维基</a></li>
                        <li><a href="https://backrooms-to-dv.wikidot.com/" target="_blank">后室TODV</a></li>
                        <li><a href="https://backrooms-wiki-cn.wikidot.com/" target="_blank">后室中文</a></li>
                        <li><a href="https://brsandbox-pro.wikidot.com/" target="_blank">后室沙盒Pro</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">占位</a>
                    <ul>
                        <li><a href="#">占位</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">占位</a>
                    <ul>
                        <li><a href="#">占位</a></li>
                    </ul>
                </li>
            </ul>
        `;
        navTop.innerHTML = navTopContent;
    }

    // 处理nav-side
    const navSide = document.getElementById('nav-side');
    if (navSide) {
        const navSideContent = `
            <div class="sidebar-content">
                <h3>个人网站</h3>
                
                    <h3>社交媒体</h3>
                    <ul>
                        <li>
                            <a href="https://lostmedia.wikidot.com/" target="_blank">
                                失传媒体中文维基
                            </a>
                        </li>
                        <li>
                            <a href="https://backrooms-to-dv.wikidot.com/" target="_blank">
                                后室TODV
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="social-links">
                    <h3>社交媒体</h3>
                    <ul>
                        <li>
                            <a href="https://www.bilibili.com/" target="_blank">
                                <i class="fab fa-bilibili"></i> B站个人主页
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/h-w-0" target="_blank">
                                <i class="fab fa-github"></i> GitHub页面
                            </a>
                        </li>
                        <li>
                            <a href="https://www.wikidot.com/user:info/h-w" target="_blank">
                                <i class="fas fa-user-circle"></i> Wikidot个人页面
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
        navSide.innerHTML = navSideContent;
    }
});
    