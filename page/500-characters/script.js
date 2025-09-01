// 核心元素
        const inputText = document.getElementById('inputText');
        const splitBtn = document.getElementById('splitBtn');
        const clearBtn = document.getElementById('clearBtn');
        const charCount = document.getElementById('charCount');
        const segmentCount = document.getElementById('segmentCount');
        const segmentsContainer = document.getElementById('segments');

        // 更新字符计数
        inputText.addEventListener('input', () => {
            charCount.textContent = inputText.value.length;
        });

        // 分割按钮事件
        splitBtn.addEventListener('click', () => {
            const text = inputText.value.trim();
            if (!text) return;

            const sentences = splitToSentences(text);
            const segments = combineToSegments(sentences, 500);
            displaySegments(segments);
        });

        // 清空按钮事件
        clearBtn.addEventListener('click', () => {
            inputText.value = '';
            segmentsContainer.innerHTML = '';
            charCount.textContent = '0';
            segmentCount.textContent = '0';
        });

        // 分割成句子
        function splitToSentences(text) {
            const sentenceEndings = /([.!?]+)/g;
            const parts = text.split(sentenceEndings);
            const sentences = [];
            
            for (let i = 0; i < parts.length; i += 2) {
                const content = parts[i]?.trim() || '';
                const punctuation = parts[i + 1]?.trim() || '';
                if (content) {
                    sentences.push(`${content} ${punctuation}`.trim() + ' ');
                }
            }
            return sentences;
        }

        // 组合成不超过500字符的片段
        function combineToSegments(sentences, maxChars) {
            const segments = [];
            let current = '';

            sentences.forEach(sentence => {
                if (sentence.length > maxChars) {
                    if (current) {
                        segments.push(current.trim());
                        current = '';
                    }
                    segments.push(...splitLongSentence(sentence, maxChars));
                    return;
                }

                if (current.length + sentence.length <= maxChars) {
                    current += sentence;
                } else {
                    segments.push(current.trim());
                    current = sentence;
                }
            });

            if (current.trim()) segments.push(current.trim());
            return segments;
        }

        // 处理超长句子
        function splitLongSentence(sentence, maxChars) {
            const segments = [];
            let remaining = sentence.trim();

            while (remaining.length > maxChars) {
                let splitIdx = remaining.lastIndexOf(' ', maxChars);
                if (splitIdx === -1) splitIdx = maxChars;
                segments.push(remaining.substring(0, splitIdx).trim());
                remaining = remaining.substring(splitIdx).trim();
            }
            if (remaining) segments.push(remaining);
            return segments;
        }

        // 显示片段
        function displaySegments(segments) {
            segmentsContainer.innerHTML = '';
            segmentCount.textContent = segments.length;

            segments.forEach((seg, idx) => {
                const div = document.createElement('div');
                div.className = 'segment';
                div.innerHTML = `
                    <div class="stats">片段 ${idx + 1}（${seg.length} 字符）</div>
                    <p>${seg}</p>
                    <button onclick="copyText('${escapeQuote(seg)}', this)">复制</button>
                `;
                segmentsContainer.appendChild(div);
            });
        }

        // 复制文本功能
        function copyText(text, btn) {
            navigator.clipboard.writeText(text).then(() => {
                const originalText = btn.textContent;
                btn.textContent = '已复制！';
                setTimeout(() => btn.textContent = originalText, 1500);
            });
        }

        // 转义引号
        function escapeQuote(str) {
            return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }
