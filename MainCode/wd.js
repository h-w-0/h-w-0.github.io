const article = `
+ 你好啊
我是H_W，没钱没技术没实力于是用github建了个私站。
版式来自[*https://backrooms-wiki-cn.wikidot.com/theme:morning-star 觐见黎明]，爱来自叶芷。

+ 我的一些站

              <div class="site-grid">

    <a href="https://lostmedia.wikidot.com" class="site-card">
      <img src="https://lostmedia.wikidot.com/local--files/start/cn-logo-2.svg" alt="失传媒体中文维基">
      <p>失传媒体中文维基</p>
    </a>
                      <a href="https://backrooms-to-dv.wikidot.com/" class="site-card">
      <img src="http://backrooms-to-dv.wikidot.com/local--files/start/logo" alt="后室TODV">
      <p>后室TODV</p>
    </a>
                                        <a href="https://backrooms-arch-cn.wikidot.com/" class="site-card">
      <img src="https://backrooms-arch-cn.wikidot.com/local--files/start/ArchCnLogo.svg" alt="后室中文死文备份">
      <p>后室中文死文备份</p>
    </a>
                    </div>

                    + 最近的一些玩意

都是些自用的玩意
                  //想念Listpages//
[[[search-tool|自用搜索工具]]]
[[[crom-search|Crom搜索工具]]]
[[[ddscq|迭代生成器]]]
[[[srt-to-article|SRT字幕转文章]]]
                  

`;

// 转换函数
function convertToHtml(text) {
    let lines = text.split('\n');
    let html = [];
    let inDiv = false;
    let currentDivClass = '';
    
    lines.forEach(line => {
        // 处理标题
        if (line.startsWith('+ ')) {
            const level = line.match(/^\++/)[0].length;
            const titleText = line.replace(/^\++\s*/, '');
            const className = level === 1 ? ' class="meta-title"' : '';
            html.push(`<h${level}${className}><span>${titleText}</span></h${level}>`);
            return;
        }
        
        // 处理div开始标签
        if (line.startsWith('[[div class="') && line.endsWith('"]]')) {
            currentDivClass = line.match(/"(.*?)"/)[1];
            html.push(`<div class="${currentDivClass}">`);
            inDiv = true;
            return;
        }
        
        // 处理div结束标签
        if (line === '[[/div]]') {
            html.push('</div>');
            inDiv = false;
            currentDivClass = '';
            return;
        }
        
        // 处理空行
        if (line.trim() === '') {
            return;
        }
        
        // 处理普通行（包含文本样式和链接）
        let processedLine = line;
        
        // 处理链接 - 简易链接 [[[good|简易链接]]]
        processedLine = processedLine.replace(/\[\[\[(.*?)\|(.*?)\]\]\]/g, (match, path, text) => {
            return `<a href="/${path}">${text}</a>`;
        });
        
        // 处理链接 - 新窗口打开 [*url 文本]
        processedLine = processedLine.replace(/\[(\*?)(https?:\/\/[^\s]+)\s+([^\]]+)\]/g, (match, isNewWindow, url, text) => {
            const target = isNewWindow ? ' target="_blank"' : '';
            return `<a href="${url}"${target}>${text}</a>`;
        });
        
        // 处理文本样式 - 粗体
        processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // 处理文本样式 - 斜体
        processedLine = processedLine.replace(/\/\/(.*?)\/\//g, '<em>$1</em>');
        
        // 处理文本样式 - 等宽
        processedLine = processedLine.replace(/\{\{(.*?)\}\}/g, '<tt>$1</tt>');
        
        // 在同一行的不同元素之间添加换行
        processedLine = processedLine.replace(/(<\/\w+>)(<\w+)/g, '$1<br>\n$2');
        
        // 包裹段落标签
        html.push(`<p>${processedLine}</p>`);
    });
    
    return html.join('\n');
}

// 执行转换并插入到页面
document.addEventListener('DOMContentLoaded', () => {
    const pageContent = document.getElementById('page-content');
    if (pageContent) {
        pageContent.innerHTML = convertToHtml(article);
    } else {
        console.error('未找到id为page-content的元素');
    }
});
