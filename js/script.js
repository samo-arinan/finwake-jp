/**
 * フィネガンズ・ウェイク日本語版
 * JavaScript機能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 縦書き/横書き切替
    const toggleModeButton = document.getElementById('toggle-mode');
    const chapterContent = document.querySelector('.chapter-content');
    
    if (toggleModeButton && chapterContent) {
        toggleModeButton.addEventListener('click', function() {
            chapterContent.classList.toggle('vertical-text');
            
            // ボタンテキストの更新
            if (chapterContent.classList.contains('vertical-text')) {
                toggleModeButton.textContent = '横書きに切替';
            } else {
                toggleModeButton.textContent = '縦書きに切替';
            }
            
            // 並列表示の調整
            const parallelTexts = document.querySelectorAll('.parallel-text');
            parallelTexts.forEach(function(pt) {
                if (chapterContent.classList.contains('vertical-text')) {
                    pt.style.flexDirection = 'column';
                } else {
                    pt.style.flexDirection = 'row';
                }
            });
        });
    }
    
    // ルビ表示/非表示
    const toggleRubyButton = document.getElementById('toggle-ruby');
    
    if (toggleRubyButton) {
        toggleRubyButton.addEventListener('click', function() {
            const rtElements = document.querySelectorAll('rt');
            let areVisible = true;
            
            // 現在の状態を確認
            if (rtElements.length > 0 && rtElements[0].style.display === 'none') {
                areVisible = false;
            }
            
            // 表示/非表示の切替
            rtElements.forEach(rt => {
                rt.style.display = areVisible ? 'none' : '';
            });
            
            // ボタンテキストの更新
            toggleRubyButton.textContent = areVisible ? 'ルビを表示' : 'ルビを非表示';
        });
    }
    
    // 注釈表示/非表示
    const toggleNotesButton = document.getElementById('toggle-notes');
    const notesPanel = document.querySelector('.notes-panel');
    
    if (toggleNotesButton && notesPanel) {
        toggleNotesButton.addEventListener('click', function() {
            if (notesPanel.style.display === 'none' || notesPanel.style.display === '') {
                notesPanel.style.display = 'block';
                toggleNotesButton.textContent = '注釈を非表示';
            } else {
                notesPanel.style.display = 'none';
                toggleNotesButton.textContent = '注釈を表示';
            }
        });
    }
    
    // 個別の注釈へのクリックイベント
    const noteSpans = document.querySelectorAll('.note');
    
    if (noteSpans.length > 0) {
        noteSpans.forEach(note => {
            note.addEventListener('click', function() {
                // data-note属性から注釈テキストを取得
                const noteText = this.getAttribute('data-note');
                
                if (noteText) {
                    // 注釈パネルが非表示なら表示
                    if (notesPanel.style.display === 'none' || notesPanel.style.display === '') {
                        notesPanel.style.display = 'block';
                        if (toggleNotesButton) {
                            toggleNotesButton.textContent = '注釈を非表示';
                        }
                    }
                    
                    // 注釈番号からID取得
                    const noteId = this.textContent.replace('※', '');
                    const noteItem = document.getElementById('note' + noteId);
                    
                    if (noteItem) {
                        // 該当注釈にスクロール
                        noteItem.scrollIntoView({ behavior: 'smooth' });
                        
                        // ハイライト効果
                        noteItem.classList.add('highlight');
                        setTimeout(() => {
                            noteItem.classList.remove('highlight');
                        }, 2000);
                    }
                }
            });
        });
    }
    
    // 原文/訳文並列表示切替
    const toggleParallelButton = document.getElementById('toggle-parallel');
    
    if (toggleParallelButton) {
        toggleParallelButton.addEventListener('click', function() {
            const originalTexts = document.querySelectorAll('.original');
            let areVisible = true;
            
            // 現在の状態を確認
            if (originalTexts.length > 0 && originalTexts[0].style.display === 'none') {
                areVisible = false;
            }
            
            // 表示/非表示の切替
            originalTexts.forEach(original => {
                original.style.display = areVisible ? 'none' : '';
            });
            
            // 訳文の幅調整
            const translations = document.querySelectorAll('.translation');
            translations.forEach(translation => {
                translation.style.flex = areVisible ? '1' : '2';
            });
            
            // ボタンテキストの更新
            toggleParallelButton.textContent = areVisible ? '原文を表示' : '原文を非表示';
        });
    }
});
