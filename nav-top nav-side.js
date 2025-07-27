document.addEventListener('DOMContentLoaded', function() {
    // 顶栏
    const navTop = document.getElementById('top-bar');
    if (navTop) {
        const navTopContent = `

<div class="top-bar">
//电脑端
<ul>
<li><a href="javascript:;">自己站导航
</a><ul>
<li><a href="https://lostmedia.wikidot.com/">失传媒体中文维基</a>
<ul>
<li><a href="https://lostmedia.wikidot.com/forum:recent-posts">最近发帖</a></li>
</ul></li>
<li><a href="https://backrooms-to-dv.wikidot.com/">后室TODV</a>
<ul>
<li><a href="https://backrooms-to-dv.wikidot.com/forum:recent-posts">最近发帖</a></li>
</ul></li>
<li><a href="https://backrooms-arch-cn.wikidot.com/">后室被删除页面记录</a></li>
<li><a href="https://h-w-0.wikidot.com/">荒废的私站</a></li>
<li><a href="https://lostmedia.cn/">失传媒体CN域名</a></li>
</ul>
</li>



<li><a href="javascript:;">常用站导航
</a><ul>
<li><a href="https://backrooms-wiki-cn.wikidot.com/">后室中文</a>
<ul>
<li><a href="https://backrooms-wiki-cn.wikidot.com/forum:recent-posts">最近发帖</a></li>
</ul></li>

<li><a href="https://scp-wiki-cn.wikidot.com/">SCP基金会</a>
<ul>
<li><a href="https://scp-wiki-cn.wikidot.com/forum:recent-posts">最近发帖</a></li>
</ul></li>
<li><a href="https://brsandbox-pro.wikidot.com/">后室沙盒Pro</a></li>
<li><a href="https://brsandbox-mini.wikidot.com/">后室沙盒Mini</a></li>
</ul>
</li>
<li><a href="/">主页</li>
</ul>
</li>
</ul>
</div>

//手机端

<div class="mobile-top-bar">
<div class="open-menu">
<p><a href="#side-bar">≡</a></p>
</div>
<ul>

<li><a href="javascript:;">自己站导航
</a><ul>
<li><a href="https://lostmedia.wikidot.com/">失传媒体中文维基</a></li>
<li><a href="https://backrooms-to-dv.wikidot.com/">后室TODV</a></li>
<li><a href="https://backrooms-arch-cn.wikidot.com/">后室被删除页面记录</a></li>
<li><a href="https://h-w-0.wikidot.com/">荒废的私站</a></li>
<li><a href="https://lostmedia.cn/">失传媒体CN域名</a></li>
</ul>
</li>

<li><a href="javascript:;">常用站导航
</a><ul>
<li><a href="https://backrooms-wiki-cn.wikidot.com/">后室中文</a></li>
<li><a href="https://scp-wiki-cn.wikidot.com/">基金会中文</a></li>
<li><a href="https://brsandbox-pro.wikidot.com/">后室沙盒Pro</a></li>
<li><a href="https://brsandbox-mini.wikidot.com/">后室沙盒Mini</a></li>
<li><a href="https://backrooms-wiki-cn.wikidot.com/forum:recent-posts">BKR最近发帖</a></li>
<li><a href="https://scp-wiki-cn.wikidot.com/forum:recent-posts">SCP最近发帖</a></li>
<li><a href="https://lostmedia.wikidot.com/forum:recent-posts">LM最近发帖</a></li>
</ul>
</li>

<li><a href="/">主页</li>

</ul>
</div>

            
        `;
        navTop.innerHTML = navTopContent;
    }

    // 侧栏
    const navSide = document.getElementById('side-bar');
    if (navSide) {
        const navSideContent = `



<div class="side-block media" style="padding: 10px 0;">
<div style="text-align: center;"><img src="./HW的代码测试页 - 失传媒体中文维基_files/cn-logo-whitebg.png" style="visibility: hidden;transform: scale(0);" alt="Logo" width="0" class="image"><a href="https://lostmediawiki.com/Home" target="_blank"><img src="./HW的代码测试页 - 失传媒体中文维基_files/LMW" alt="LMW" width="50px" class="image"></a><br>
<a href="https://lostwaves-finest.fandom.com/wiki/Lostwave%27s_Finest_Wiki:Home" target="_blank"><img src="./HW的代码测试页 - 失传媒体中文维基_files/Fandom" alt="Fandom" width="50px" class="image"></a><br>
<a href="https://lostmedia.wikidot.com/group" target="_blank"><img src="./HW的代码测试页 - 失传媒体中文维基_files/qq.png" alt="QQ" width="50px" class="image"></a></div>
</div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div class="side-block">
<div class="heading">
<p>站点导航</p>
</div>
<div class="menu-item icon home">
<p><a href="https://lostmedia.wikidot.com/start">主页</a></p>
</div>
<div class="menu-item icon join">
<p><a href="https://lostmedia.wikidot.com/system:join">加入网站</a></p>
</div>
<div class="menu-item icon search">
<p><a href="https://lostmedia.wikidot.com/search:sites">聚合搜索</a> | <a href="https://lostmedia.wikidot.com/search:title">标题搜索</a></p>
</div>


<div class="menu-item"><a href="http://notifications.wikidot.com/notify:8108397/edit/true/title/H_W%20(8108397)">论坛回复提醒系统</a> | <a href="https://lostmedia.wikidot.com/notification-guide">使用教程</a></div>
<div class="menu-item icon"><a href="https://lostmedia.wikidot.com/setting:8108397/edit/true/title/h-w%E7%9A%84%E8%AE%BE%E7%BD%AE%E9%A1%B5">个性网站设置</a></div>

</div>
<div class="side-block">
<div class="heading">
<p>域名</p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/">lostmedia.wikidot.com</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.cn/">lostmedia.cn</a></p>
</div>
</div>
<div class="side-block">
<div class="heading">
<p>图书馆</p>
</div>
<div class="menu-item icon all">
<p><a href="https://lostmedia.wikidot.com/all">所有页面</a> | <a href="https://lostmedia.wikidot.com/most-recently-created">最近创建</a></p>
</div>
<div class="menu-item icon random">
<p><a href="https://lostmedia.wikidot.com/system:random">随机页面</a></p>
</div>
<div class="menu-item icon tags-apply">
<p><a href="https://lostmedia.wikidot.com/system:page-tags">标签云</a></p>
</div>
</div>
<div class="side-block">
<div class="heading">
<p>社区交流</p>
</div>
<div class="menu-item icon forum forum-recent">
<p><a href="https://lostmedia.wikidot.com/forum:start">讨论区</a> | <a href="https://lostmedia.wikidot.com/forum:recent-posts">最近新增的帖子</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/notice">通告</a> | <a href="https://lostmedia.wikidot.com/forum/c-7851843/">失传媒体求助板块</a></p>
</div>
<div class="menu-item icon qq">
<p><a href="https://lostmedia.wikidot.com/group" target="_blank">站外讨论群及群组</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/for-search">搜索资源分享</a></p>
</div>
</div>
<div class="side-block">
<div class="heading">
<p>状态分类</p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E4%B8%A2%E5%A4%B1">丢失</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E9%83%A8%E5%88%86%E5%8F%91%E7%8E%B0">部分发现</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E5%8F%91%E7%8E%B0">发现</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E6%9D%A5%E6%BA%90%E4%B8%8D%E6%98%8E">来源不明</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E9%83%A8%E5%88%86%E7%A1%AE%E5%AE%9A">部分确定</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E6%9D%A5%E6%BA%90%E7%A1%AE%E5%AE%9A">来源确定</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E5%AD%98%E5%9C%A8%E6%80%A7%E5%BE%85%E5%AE%9A">存在性待定</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E4%B8%8D%E5%AD%98%E5%9C%A8">不存在</a></p>
</div>
</div>
<div class="side-block">
<div class="heading">
<p>类型分类</p>
</div>
<div class="menu-item icon audio-animation">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E9%9F%B3%E9%A2%91">音频</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E5%8A%A8%E7%94%BB">动画</a></p>
</div>
<div class="menu-item icon film-episode">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E7%94%B5%E5%BD%B1">电影</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E5%89%A7%E9%9B%86">剧集</a></p>
</div>
<div class="menu-item icon video-image">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E8%A7%86%E9%A2%91">视频</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E5%9B%BE%E5%83%8F">图像</a></p>
</div>
<div class="menu-item icon game-app">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E6%B8%B8%E6%88%8F">游戏</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E5%BA%94%E7%94%A8">应用</a></p>
</div>
<div class="menu-item icon comic-text">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E6%BC%AB%E7%94%BB">漫画</a> | <a href="https://lostmedia.wikidot.com/all/tag/%E6%96%87%E6%9C%AC">文本</a></p>
</div>
<div class="menu-item icon">
<p><a href="https://lostmedia.wikidot.com/all/tag/%E5%85%B6%E4%BB%96">其他</a></p>
</div>
</div>
<div class="side-block">
<div class="heading">
<p>一键存档当前页</p>
</div>
<div class="list-pages-box">    <div class="list-pages-item">


<div class="menu-item">
<p><a href="https://web.archive.org/save/https://lostmedia.wikidot.com/hw" target="_blank">一键存档当前页</a></p>
</div>
</div>
    
    
    
    </div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/system:archive" target="_blank">自定义网址存档</a> | <a href="https://web.archive.org/save/https://lostmedia.wikidot.com/" target="_blank">存档主页</a></p>
</div>
</div>
<div class="side-block">
<div class="heading">
<p>管理</p>
</div>
<div class="menu-item">
<p><a class="newpage" href="https://lostmedia.wikidot.com/_admin">后台管理</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/system:recent-change">最近的编辑</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/urls">页面URL复查</a> | <a href="https://lostmedia.wikidot.com/workshop">工房</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/system:list-all-categories">分类一览</a> | <a href="https://lostmedia.wikidot.com/system:members">成员一览</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/statistics:size">字数排行</a> | <a href="https://lostmedia.wikidot.com/statistics:main">统计页</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/_template">_template</a> | <a href="https://lostmedia.wikidot.com/system:theme">站点版式</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/component:css">组件CSS</a> | <a href="https://lostmedia.wikidot.com/component:link-icon">图标CSS</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/component:tool">底部工具</a> | <a href="https://lostmedia.wikidot.com/component:show">主页展出</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/nav:side">侧栏</a> | <a href="https://lostmedia.wikidot.com/nav:top">顶栏</a></p>
</div>
<div class="menu-item">
<p><a href="https://lostmedia.wikidot.com/system:cc">站点授权</a></p>
</div>
</div>
<div class="list-pages-box">    <div class="list-pages-item">


<p style="text-align: center;"><strong>全站累计访问</strong></p>
<div class="nav-img">
<div class="image-container aligncenter"><a href="https://statcounter.com/p13041244/summary/daily-psvn-labels-line-last7days/?setlang=zh_CN&amp;guest=1" target="_blank"><img src="./HW的代码测试页 - 失传媒体中文维基_files/saved_resource" alt="0" class="image"></a></div>
</div>
<p style="text-align: center;"><strong>当前页累计访问</strong></p>
</div>
    
    
    
    </div>
<div style="height: 150px;"></div>
<br>
<a class="close-menu" href="###"><br>
<img src="https://scp-wiki.wdfiles.com/local--files/nav%3Aside/black.png" style="z-index=-1; opacity: 0.3;" alt="black.png" class="image"><br></a> 














<div style="clear:both; height: 0px; font-size: 1px"></div>
<div class="list-pages-box">    
    
    
    
    </div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div class="list-pages-box">    
    
    
    
    </div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div class="list-pages-box">    
    
    
    
    </div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div class="list-pages-box">    <div class="list-pages-item">




</div>
    
    
    
    </div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div class="list-pages-box">    
    
    
    
    </div>

<div style="clear:both; height: 0px; font-size: 1px"></div>



                        






        `;
        navSide.innerHTML = navSideContent;
    }
});
    
