document.addEventListener('DOMContentLoaded', function() {
    // 顶栏
    const navTop = document.getElementById('top-bar');
    if (navTop) {
        const navTopContent = `

<div class="top-bar">
  <ul>
    <li>
      <a href="javascript:;">自己站导航</a>
      <ul>
        <li>
          <a href="https://lostmedia.wikidot.com/">失传媒体中文维基</a>
          <ul>
            <li><a href="https://lostmedia.wikidot.com/forum:recent-posts">最近发帖</a></li>
          </ul>
        </li>
        <li>
          <a href="https://backrooms-to-dv.wikidot.com/">后室TODV</a>
          <ul>
            <li><a href="https://backrooms-to-dv.wikidot.com/forum:recent-posts">最近发帖</a></li>
          </ul>
        </li>
        <li><a href="https://backrooms-arch-cn.wikidot.com/">后室被删除页面记录</a></li>
        <li><a href="https://h-w-0.wikidot.com/">荒废的私站</a></li>
        <li><a href="https://lostmedia.cn/">失传媒体CN域名</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:;">常用站导航</a>
      <ul>
        <li>
          <a href="https://backrooms-wiki-cn.wikidot.com/">后室中文</a>
          <ul>
            <li><a href="https://backrooms-wiki-cn.wikidot.com/forum:recent-posts">最近发帖</a></li>
          </ul>
        </li>
        <li>
          <a href="https://scp-wiki-cn.wikidot.com/">SCP基金会</a>
          <ul>
            <li><a href="https://scp-wiki-cn.wikidot.com/forum:recent-posts">最近发帖</a></li>
          </ul>
        </li>
        <li><a href="https://brsandbox-pro.wikidot.com/">后室沙盒Pro</a></li>
        <li><a href="https://brsandbox-mini.wikidot.com/">后室沙盒Mini</a></li>
      </ul>
    </li>
    <li><a href="/">主页</a></li>
  </ul>
</div>

<div class="mobile-top-bar">
  <div class="open-menu">
    <p><a href="#side-bar">≡</a></p>
  </div>
  <ul>
    <li>
      <a href="javascript:;">自己站导航</a>
      <ul>
        <li><a href="https://lostmedia.wikidot.com/">失传媒体中文维基</a></li>
        <li><a href="https://backrooms-to-dv.wikidot.com/">后室TODV</a></li>
        <li><a href="https://backrooms-arch-cn.wikidot.com/">后室被删除页面记录</a></li>
        <li><a href="https://h-w-0.wikidot.com/">荒废的私站</a></li>
        <li><a href="https://lostmedia.cn/">失传媒体CN域名</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:;">常用站导航</a>
      <ul>
        <li><a href="https://backrooms-wiki-cn.wikidot.com/">后室中文</a></li>
        <li><a href="https://scp-wiki-cn.wikidot.com/">基金会中文</a></li>
        <li><a href="https://brsandbox-pro.wikidot.com/">后室沙盒Pro</a></li>
        <li><a href="https://brsandbox-mini.wikidot.com/">后室沙盒Mini</a></li>
        <li><a href="https://backrooms-wiki-cn.wikidot.com/forum:recent-posts">BKR最近发帖</a></li>
        <li><a href="https://scp-wiki-cn.wikidot.com/forum:recent-posts">SCP最近发帖</a></li>
        <li><a href="https://lostmedia.wikidot.com/forum:recent-posts">LM最近发帖</a></li>
      </ul>
    </li>
    <li><a href="/">主页</a></li>
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
</div>
<div style="clear:both; height: 0px; font-size: 1px"></div>
<div class="side-block">

<div class="heading">
<p>导航</p>
</div>
<div class="menu-item icon home">
<p><a href="/">主页</a></p>
</div>
<div class="menu-item icon home">
<p><a href="/search-tool">搜索工具</a></p>
</div>

<div class="image-container aligncenter"><img src="https://count.getloli.com/get/@h-w-0?theme=rule34" alt="累计访问" class="image"></div>

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
    
