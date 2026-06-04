/**
 * MLN131 - Cổng học tập lịch sử tri thức
 * Logic điều khiển chính (Vanilla JS)
 */

// 1. Quản lý trạng thái & Đồng bộ LocalStorage
let appState = {
    currentTab: 'overview',
    completedChapters: [], // Danh sách ID chương đã đọc
    flashcardProgress: {}, // Trạng thái thẻ: { term: 'known' | 'review' }
    quizHighScores: {}, // Điểm cao nhất trắc nghiệm: { chapterId: score }
    theme: 'dark',
    streak: 0,
    lastActiveDate: ''
};

// Kiểm tra và di chuyển dữ liệu cũ nếu có
function migrateOldState() {
    const oldStateStr = localStorage.getItem('mln131_portal_state');
    if (oldStateStr) {
        try {
            const oldState = JSON.parse(oldStateStr);
            if (oldState.readChapters && !localStorage.getItem('MLN131_completedChapters')) {
                localStorage.setItem('MLN131_completedChapters', JSON.stringify(oldState.readChapters));
            }
            if (oldState.theme && !localStorage.getItem('MLN131_theme')) {
                localStorage.setItem('MLN131_theme', oldState.theme);
            }
            localStorage.removeItem('mln131_portal_state');
            showToast("Đồng bộ dữ liệu học tập thành công!");
        } catch (e) {
            console.error("Migration error:", e);
        }
    }
}

// Tải trạng thái từ LocalStorage
function loadState() {
    migrateOldState();
    
    appState.completedChapters = JSON.parse(localStorage.getItem('MLN131_completedChapters')) || [];
    appState.flashcardProgress = JSON.parse(localStorage.getItem('MLN131_flashcardProgress')) || {};
    appState.quizHighScores = JSON.parse(localStorage.getItem('MLN131_quizHighScores')) || {};
    appState.theme = localStorage.getItem('MLN131_theme') || 'dark';
    appState.streak = parseInt(localStorage.getItem('MLN131_streak')) || 0;
    appState.lastActiveDate = localStorage.getItem('MLN131_lastActiveDate') || '';
    
    updateStreak();
}

// Lưu trạng thái vào LocalStorage
function saveState(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Cập nhật và lưu streak
function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    if (appState.lastActiveDate === today) return; // Đã check-in hôm nay
    
    if (appState.lastActiveDate) {
        const lastDate = new Date(appState.lastActiveDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            appState.streak++;
        } else if (diffDays > 1) {
            appState.streak = 1; // Đứt chuỗi, bắt đầu lại
        }
    } else {
        appState.streak = 1; // Lần đầu tiên học
    }
    
    appState.lastActiveDate = today;
    localStorage.setItem('MLN131_streak', appState.streak.toString());
    localStorage.setItem('MLN131_lastActiveDate', today);
}

// 2. Toast Notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '<i class="fa-solid fa-info-circle"></i>';
    if (type === 'success') icon = '<i class="fa-solid fa-circle-check"></i>';
    if (type === 'warning') icon = '<i class="fa-solid fa-exclamation-triangle"></i>';
    
    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 3. Quản lý Theme & Khởi tạo Giao diện
function initTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    };
    
    applyTheme(appState.theme);
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            appState.theme = body.classList.contains('dark-theme') ? 'light' : 'dark';
            localStorage.setItem('MLN131_theme', appState.theme);
            applyTheme(appState.theme);
            showToast(`Đã chuyển sang Chế độ ${appState.theme === 'dark' ? 'Tối' : 'Sáng'}`, 'success');
        });
    }
}

// 4. SPA Tab Switching & Scroll Progress
function initRouting() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    appState.currentTab = tabId;
    
    // Cập nhật trạng thái active của menu
    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Cập nhật tab hiển thị
    document.querySelectorAll('.tab-pane').forEach(pane => {
        if (pane.id === tabId) {
            pane.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            pane.classList.remove('active');
        }
    });
    
    // Kích hoạt nạp dữ liệu đặc thù của từng tab
    if (tabId === 'overview') {
        renderOverviewDashboard();
    } else if (tabId === 'chapters') {
        initChaptersTab();
    } else if (tabId === 'flashcards') {
        initFlashcardsTab();
    } else if (tabId === 'quiz') {
        initQuizTab();
    } else if (tabId === 'review') {
        renderReviewMode();
    } else if (tabId === 'glossary') {
        renderGlossary();
    }
}

// Scroll Progress Bar & Back to top
function initScrollEffects() {
    const progressBar = document.getElementById('scrollProgressBar');
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrolled + "%";
        }
        
        if (backToTopBtn) {
            if (winScroll > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// 5. Tổng quan Dashboard Render (Tab 1)
function renderOverviewDashboard() {
    // 5.1 Cập nhật thông số học tập
    const completedNum = appState.completedChapters.length;
    const totalChapters = CHAPTERS_DATA.length;
    const progressPercent = Math.round((completedNum / totalChapters) * 100);
    
    const countDom = document.getElementById('completedCount');
    const percentDom = document.getElementById('progressPercent');
    const circleDom = document.getElementById('progressCircleVal');
    
    if (countDom) countDom.textContent = `${completedNum}/${totalChapters}`;
    if (percentDom) percentDom.textContent = `${progressPercent}%`;
    if (circleDom) {
        // Perimeter = 2 * PI * r = 2 * 3.1415 * 55 = 345.5
        const offset = 345.5 - (345.5 * progressPercent) / 100;
        circleDom.style.strokeDashoffset = offset;
    }
    
    // Thẻ Flashcard đã thuộc
    const knownCardsCount = Object.values(appState.flashcardProgress).filter(v => v === 'known').length;
    const flashcardTotalCount = CHAPTERS_DATA.reduce((acc, c) => acc + c.keyTerms.length, 0);
    const flashcardProgressDom = document.getElementById('learnedCardsCount');
    if (flashcardProgressDom) {
        flashcardProgressDom.textContent = `${knownCardsCount}/${flashcardTotalCount}`;
    }
    
    // Chuỗi Streak
    const streakDom = document.getElementById('streakCount');
    if (streakDom) streakDom.textContent = appState.streak;
    
    // Điểm trắc nghiệm cao nhất trung bình
    const highScoresValues = Object.values(appState.quizHighScores);
    const averageScore = highScoresValues.length > 0 
        ? Math.round(highScoresValues.reduce((a, b) => a + b, 0) / highScoresValues.length) 
        : 0;
    const quizScoreDom = document.getElementById('quizAverageScore');
    if (quizScoreDom) quizScoreDom.textContent = `${averageScore}%`;
    
    // 5.2 Render 7 Chương học dạng Card có menu chủ đề và tiến độ
    const grid = document.getElementById('chapterSummaryGrid');
    if (grid) {
        grid.innerHTML = '';
        CHAPTERS_DATA.forEach((chapter, index) => {
            const isCompleted = appState.completedChapters.includes(chapter.id);
            const card = document.createElement('div');
            card.className = `card-item ${isCompleted ? 'completed' : ''}`;
            
            // Lấy danh sách 3 mục đầu dòng I, II, III làm danh mục tóm tắt
            const sectionTitles = chapter.sections.map(s => s.title);
            
            card.innerHTML = `
                <div class="card-badge-row">
                    <span class="chapter-no">Chương ${chapter.id}</span>
                    <span class="status-badge">
                        ${isCompleted ? '<i class="fa-solid fa-circle-check"></i> Đã học' : '<i class="fa-regular fa-circle"></i> Chưa đọc'}
                    </span>
                </div>
                <h4>${chapter.title}</h4>
                <p>${chapter.description}</p>
                <div class="card-topics">
                    <span class="topic-item">I. ${sectionTitles[0] ? sectionTitles[0].substring(0, 30) + '...' : ''}</span>
                    <span class="topic-item">II. ${sectionTitles[1] ? sectionTitles[1].substring(0, 30) + '...' : ''}</span>
                    <span class="topic-item">III. ${sectionTitles[2] ? sectionTitles[2].substring(0, 30) + '...' : ''}</span>
                </div>
                <div class="card-footer-actions">
                    <button class="btn btn-sm btn-outline btn-read" data-index="${index}">Học Bài</button>
                    <button class="btn btn-sm btn-outline btn-quiz-link" data-id="${chapter.id}">Trắc Nghiệm</button>
                </div>
            `;
            
            card.querySelector('.btn-read').addEventListener('click', (e) => {
                e.stopPropagation();
                appState.selectedChapterIndex = index;
                switchTab('chapters');
            });
            
            card.querySelector('.btn-quiz-link').addEventListener('click', (e) => {
                e.stopPropagation();
                switchTab('quiz');
                startQuizMode(chapter.id);
            });
            
            grid.appendChild(card);
        });
    }
    
    // 5.3 Render Dòng thời gian lịch sử tri thức
    renderTimeline();
    
    // 5.4 Render Sơ đồ tư duy toàn môn học (Concept Map)
    renderConceptMap();
}

// Dòng thời gian (Timeline)
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    container.innerHTML = '';
    
    TIMELINE_DATA.forEach((item, index) => {
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.innerHTML = `
            <div class="timeline-dot"><i class="${item.icon}"></i></div>
            <div class="timeline-info">
                <h5>${item.title}</h5>
                <p>${item.desc}</p>
            </div>
        `;
        container.appendChild(node);
    });
}

// Sơ đồ tư duy (Concept Map)
function renderConceptMap() {
    const container = document.getElementById('conceptMapContainer');
    if (!container) return;
    container.innerHTML = '';
    
    // Tạo node trung tâm
    const centerNode = document.createElement('div');
    centerNode.className = 'mindmap-node center-node';
    centerNode.innerHTML = `
        <h5>Chủ nghĩa xã hội khoa học</h5>
        <span>Lý luận và thực tiễn</span>
    `;
    container.appendChild(centerNode);
    
    // Tạo lưới các nhánh
    const branchesContainer = document.createElement('div');
    branchesContainer.className = 'mindmap-branches-grid';
    
    CONCEPT_MAP_DATA.forEach(branch => {
        const node = document.createElement('div');
        node.className = 'mindmap-node branch-node';
        node.setAttribute('data-id', branch.id);
        
        node.innerHTML = `
            <h6>Chương ${branch.chapterId}: ${branch.label}</h6>
            <p class="node-tooltip">${branch.desc}</p>
            <div class="node-keywords">
                ${branch.keywords.map(kw => `<span>${kw}</span>`).join('')}
            </div>
            <button class="btn btn-xs btn-primary">Đi đến bài học <i class="fa-solid fa-chevron-right"></i></button>
        `;
        
        node.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            appState.selectedChapterIndex = branch.chapterId - 1;
            switchTab('chapters');
        });
        
        branchesContainer.appendChild(node);
    });
    
    container.appendChild(branchesContainer);
}

// 6. Chi tiết chương học (Tab 2)
function initChaptersTab() {
    const listContainer = document.getElementById('chapterSelectorList');
    if (listContainer) {
        listContainer.innerHTML = '';
        CHAPTERS_DATA.forEach((chapter, index) => {
            const isCompleted = appState.completedChapters.includes(chapter.id);
            const item = document.createElement('div');
            item.className = `list-chapter-item ${isCompleted ? 'completed' : ''} ${appState.selectedChapterIndex === index ? 'active' : ''}`;
            item.innerHTML = `
                <span class="chapter-num">Chương ${chapter.id}</span>
                <span class="chapter-title">${chapter.title}</span>
            `;
            item.addEventListener('click', () => {
                selectChapter(index);
            });
            listContainer.appendChild(item);
        });
    }
    
    // Mặc định chọn chương đầu tiên nếu chưa chọn chương nào
    if (appState.selectedChapterIndex === null || appState.selectedChapterIndex === undefined) {
        selectChapter(0);
    } else {
        selectChapter(appState.selectedChapterIndex);
    }
    
    // Đăng ký sự kiện nút Đã học
    const markReadBtn = document.getElementById('markReadBtn');
    if (markReadBtn) {
        // Gỡ bỏ các event cũ để không bị lặp
        const newMarkBtn = markReadBtn.cloneNode(true);
        markReadBtn.parentNode.replaceChild(newMarkBtn, markReadBtn);
        
        newMarkBtn.addEventListener('click', () => {
            const index = appState.selectedChapterIndex;
            const chapter = CHAPTERS_DATA[index];
            const hasCompleted = appState.completedChapters.includes(chapter.id);
            
            if (hasCompleted) {
                appState.completedChapters = appState.completedChapters.filter(id => id !== chapter.id);
                showToast(`Đã bỏ đánh dấu hoàn thành Chương ${chapter.id}`, 'warning');
            } else {
                appState.completedChapters.push(chapter.id);
                showToast(`Chúc mừng! Bạn đã học xong Chương ${chapter.id}`, 'success');
            }
            
            saveState('MLN131_completedChapters', appState.completedChapters);
            initChaptersTab(); // Render lại danh sách
        });
    }
    
    // Nút trắc nghiệm ôn tập
    const takeQuizBtn = document.getElementById('takeQuizForChapter');
    if (takeQuizBtn) {
        const newQuizBtn = takeQuizBtn.cloneNode(true);
        takeQuizBtn.parentNode.replaceChild(newQuizBtn, takeQuizBtn);
        
        newQuizBtn.addEventListener('click', () => {
            const chapter = CHAPTERS_DATA[appState.selectedChapterIndex];
            switchTab('quiz');
            startQuizMode(chapter.id);
        });
    }
    
    // Nút điều hướng chuyển chương (Trước / Sau)
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');
    
    if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', () => {
            if (appState.selectedChapterIndex > 0) {
                selectChapter(appState.selectedChapterIndex - 1);
            }
        });
    }
    
    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', () => {
            if (appState.selectedChapterIndex < CHAPTERS_DATA.length - 1) {
                selectChapter(appState.selectedChapterIndex + 1);
            }
        });
    }
}

function selectChapter(index) {
    appState.selectedChapterIndex = index;
    
    // Cập nhật active class ở danh sách bên trái
    document.querySelectorAll('.list-chapter-item').forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Hiển thị nội dung
    const emptyViewer = document.getElementById('emptyContentViewer');
    const chapterBody = document.getElementById('chapterBody');
    if (emptyViewer) emptyViewer.classList.add('hidden');
    if (chapterBody) {
        chapterBody.classList.remove('hidden');
        // Cho phép cuộn ngang slide view trên mobile
        const layout = document.querySelector('.chapters-layout');
        if (layout) layout.classList.add('show-content');
    }
    
    const chapter = CHAPTERS_DATA[index];
    
    // 1. Header
    const badge = document.getElementById('viewChapterBadge');
    const title = document.getElementById('viewChapterTitle');
    const desc = document.getElementById('viewChapterDesc');
    const statusText = document.getElementById('readStatusText');
    const markReadBtn = document.getElementById('markReadBtn');
    
    if (badge) badge.textContent = `Chương ${chapter.id}`;
    if (title) title.textContent = chapter.title;
    if (desc) desc.textContent = chapter.description;
    
    const isCompleted = appState.completedChapters.includes(chapter.id);
    if (statusText) {
        statusText.innerHTML = isCompleted 
            ? '<i class="fa-solid fa-circle-check text-success"></i> Đã hoàn thành chương' 
            : '<i class="fa-regular fa-circle text-muted"></i> Chưa hoàn thành';
    }
    if (markReadBtn) {
        if (isCompleted) {
            markReadBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i> Học lại chương này';
            markReadBtn.className = 'btn btn-secondary';
        } else {
            markReadBtn.innerHTML = '<i class="fa-solid fa-check"></i> Đánh dấu hoàn thành';
            markReadBtn.className = 'btn btn-success';
        }
    }
    
    // 2. Mục tiêu học tập
    const objKnow = document.getElementById('objKnowledge');
    const objSkill = document.getElementById('objSkills');
    const objAttitude = document.getElementById('objAttitude');
    
    if (objKnow) objKnow.textContent = chapter.objectives.knowledge;
    if (objSkill) objSkill.textContent = chapter.objectives.skills;
    if (objAttitude) objAttitude.textContent = chapter.objectives.attitude;
    
    // 3. Nội dung tóm tắt (Sections I, II, III)
    const contentAccordion = document.getElementById('chapterSectionsContainer');
    if (contentAccordion) {
        contentAccordion.innerHTML = '';
        const romanNumerals = ['I', 'II', 'III'];
        
        chapter.sections.forEach((sec, idx) => {
            const secCard = document.createElement('div');
            secCard.className = 'chapter-section-card';
            secCard.innerHTML = `
                <h5>${romanNumerals[idx]}. ${sec.title}</h5>
                <p class="section-summary">${sec.summary}</p>
                <ul class="section-points">
                    ${sec.keyPoints.map(pt => `<li><i class="fa-solid fa-chevron-right"></i> ${pt}</li>`).join('')}
                </ul>
                <div class="section-takeaway">
                    <i class="fa-solid fa-lightbulb"></i> <strong>Ý nghĩa cốt lõi:</strong> ${sec.takeaway}
                </div>
            `;
            contentAccordion.appendChild(secCard);
        });
    }
    
    // 4. Sơ đồ kiến thức chương (Concept Map thu nhỏ)
    const nodeContainer = document.getElementById('chapterMapContainer');
    if (nodeContainer) {
        nodeContainer.innerHTML = `
            <div class="map-inner">
                <div class="map-node root-mini">C${chapter.id}</div>
                <div class="map-branches">
                    <div class="map-node branch-mini">I. Cơ sở lý luận</div>
                    <div class="map-node branch-mini">II. Nguyên lý lõi</div>
                    <div class="map-node branch-mini">III. Liên hệ thực tiễn</div>
                </div>
            </div>
        `;
    }
    
    // 5. Thuật ngữ cần nhớ
    const termsContainer = document.getElementById('chapterTermsContainer');
    if (termsContainer) {
        termsContainer.innerHTML = '';
        chapter.keyTerms.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'term-item-box';
            itemDiv.innerHTML = `
                <h6><i class="fa-solid fa-bookmark text-amber"></i> ${item.term}</h6>
                <p class="term-def">${item.definition}</p>
                <span class="term-hint"><i class="fa-regular fa-lightbulb text-gold"></i> Gợi ý: ${item.memoryHint}</span>
            `;
            termsContainer.appendChild(itemDiv);
        });
    }
    
    // 6. Liên hệ Việt Nam
    const vnConnection = document.getElementById('chapterVietnamConnection');
    if (vnConnection) vnConnection.textContent = chapter.vietnamConnection;
    
    // 7. Câu hỏi tự luận
    const essayContainer = document.getElementById('chapterEssayContainer');
    if (essayContainer) {
        essayContainer.innerHTML = '';
        chapter.essayQuestions.forEach((q, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="essay-no">Câu ${idx + 1}:</span> ${q}`;
            essayContainer.appendChild(li);
        });
    }
    
    // Điều khiển ẩn/hiện nút chuyển trang
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');
    if (prevBtn) {
        if (index === 0) prevBtn.setAttribute('disabled', 'true');
        else prevBtn.removeAttribute('disabled');
    }
    if (nextBtn) {
        if (index === CHAPTERS_DATA.length - 1) nextBtn.setAttribute('disabled', 'true');
        else nextBtn.removeAttribute('disabled');
    }
}

// 7. Thẻ ghi nhớ (Flashcards - Tab 3)
let flashcardsList = [];
let currentCardIndex = 0;

function initFlashcardsTab() {
    // Thu thập tất cả thuật ngữ từ các chương
    flashcardsList = [];
    CHAPTERS_DATA.forEach(chapter => {
        chapter.keyTerms.forEach(term => {
            flashcardsList.push({
                chapterId: chapter.id,
                chapterTitle: chapter.shortTitle,
                term: term.term,
                definition: term.definition,
                memoryHint: term.memoryHint
            });
        });
    });
    
    currentCardIndex = 0;
    renderFlashcard();
    updateFlashcardProgressStats();
    
    // Gắn sự kiện lật thẻ
    const innerCard = document.getElementById('flashcardInner');
    if (innerCard) {
        // Clone để làm sạch event cũ
        const newCard = innerCard.cloneNode(true);
        innerCard.parentNode.replaceChild(newCard, innerCard);
        
        newCard.addEventListener('click', () => {
            newCard.classList.toggle('flipped');
        });
    }
    
    // Gắn sự kiện nút đánh giá "Biết rồi" / "Cần ôn lại"
    const knownBtn = document.getElementById('cardKnownBtn');
    const reviewBtn = document.getElementById('cardReviewBtn');
    
    if (knownBtn) {
        const newKnown = knownBtn.cloneNode(true);
        knownBtn.parentNode.replaceChild(newKnown, knownBtn);
        newKnown.addEventListener('click', (e) => {
            e.stopPropagation();
            markFlashcardStatus('known');
        });
    }
    
    if (reviewBtn) {
        const newReview = reviewBtn.cloneNode(true);
        reviewBtn.parentNode.replaceChild(newReview, reviewBtn);
        newReview.addEventListener('click', (e) => {
            e.stopPropagation();
            markFlashcardStatus('review');
        });
    }
    
    // Nút trước / sau của thẻ
    const prevCardBtn = document.getElementById('prevCardBtn');
    const nextCardBtn = document.getElementById('nextCardBtn');
    
    if (prevCardBtn) {
        const newPrev = prevCardBtn.cloneNode(true);
        prevCardBtn.parentNode.replaceChild(newPrev, prevCardBtn);
        newPrev.addEventListener('click', () => {
            if (currentCardIndex > 0) {
                currentCardIndex--;
                renderFlashcard();
            }
        });
    }
    
    if (nextCardBtn) {
        const newNext = nextCardBtn.cloneNode(true);
        nextCardBtn.parentNode.replaceChild(newNext, nextCardBtn);
        newNext.addEventListener('click', () => {
            if (currentCardIndex < flashcardsList.length - 1) {
                currentCardIndex++;
                renderFlashcard();
            }
        });
    }
}

function renderFlashcard() {
    if (flashcardsList.length === 0) return;
    const card = flashcardsList[currentCardIndex];
    
    const cardFrontTitle = document.getElementById('cardFrontTitle');
    const cardFrontCategory = document.getElementById('cardFrontCategory');
    const cardBackDef = document.getElementById('cardBackDef');
    const cardBackHint = document.getElementById('cardBackHint');
    const cardIndexIndicator = document.getElementById('cardIndexIndicator');
    
    if (cardFrontTitle) cardFrontTitle.textContent = card.term;
    if (cardFrontCategory) cardFrontCategory.textContent = `Chương ${card.chapterId}: ${card.chapterTitle}`;
    if (cardBackDef) cardBackDef.textContent = card.definition;
    if (cardBackHint) cardBackHint.textContent = `Gợi ý: ${card.memoryHint}`;
    
    if (cardIndexIndicator) {
        cardIndexIndicator.textContent = `Thẻ ${currentCardIndex + 1}/${flashcardsList.length}`;
    }
    
    // Reset lật thẻ về mặt trước
    const innerCard = document.getElementById('flashcardInner');
    if (innerCard) innerCard.classList.remove('flipped');
    
    // Cập nhật trạng thái viền theo tiến trình đã lưu
    const cardContainer = document.getElementById('flashcardWrapper');
    if (cardContainer) {
        cardContainer.className = 'flashcard-wrapper';
        const status = appState.flashcardProgress[card.term];
        if (status === 'known') cardContainer.classList.add('status-known');
        if (status === 'review') cardContainer.classList.add('status-review');
    }
    
    // Điều khiển nút điều hướng
    const prevBtn = document.getElementById('prevCardBtn');
    const nextBtn = document.getElementById('nextCardBtn');
    if (prevBtn) {
        if (currentCardIndex === 0) prevBtn.setAttribute('disabled', 'true');
        else prevBtn.removeAttribute('disabled');
    }
    if (nextBtn) {
        if (currentCardIndex === flashcardsList.length - 1) nextBtn.setAttribute('disabled', 'true');
        else nextBtn.removeAttribute('disabled');
    }
}

function markFlashcardStatus(status) {
    if (flashcardsList.length === 0) return;
    const card = flashcardsList[currentCardIndex];
    
    appState.flashcardProgress[card.term] = status;
    saveState('MLN131_flashcardProgress', appState.flashcardProgress);
    
    showToast(status === 'known' ? "Đã lưu vào danh sách thuộc!" : "Đã đưa vào danh sách cần ôn tập!", status === 'known' ? 'success' : 'info');
    
    updateFlashcardProgressStats();
    renderFlashcard(); // Cập nhật màu sắc viền
    
    // Tự động chuyển thẻ sau 1 giây
    setTimeout(() => {
        if (currentCardIndex < flashcardsList.length - 1) {
            currentCardIndex++;
            renderFlashcard();
        }
    }, 800);
}

function updateFlashcardProgressStats() {
    const knownCount = Object.values(appState.flashcardProgress).filter(v => v === 'known').length;
    const reviewCount = Object.values(appState.flashcardProgress).filter(v => v === 'review').length;
    const totalCount = flashcardsList.length;
    
    const knownDom = document.getElementById('knownCardsStats');
    const reviewDom = document.getElementById('reviewCardsStats');
    const remainingDom = document.getElementById('remainingCardsStats');
    
    if (knownDom) knownDom.textContent = knownCount;
    if (reviewDom) reviewDom.textContent = reviewCount;
    if (remainingDom) remainingDom.textContent = totalCount - knownCount - reviewCount;
}

// 8. Trắc nghiệm luyện đề (Tab 4)
let activeQuizQuestions = [];
let activeQuizIndex = 0;
let activeQuizSelectedAnswer = null;
let activeQuizIsChecked = false;
let activeQuizScore = 0;
let activeQuizChapterId = null; // null đại diện cho chế độ 10 câu ngẫu nhiên

function initQuizTab() {
    // Thiết lập cấu hình ban đầu: nạp danh mục lọc chương
    const select = document.getElementById('quizChapterFilter');
    if (select && select.options.length <= 1) {
        select.innerHTML = '<option value="all">Ôn thi nhanh (10 câu ngẫu nhiên)</option>';
        CHAPTERS_DATA.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = `Chương ${c.id}: ${c.shortTitle}`;
            select.appendChild(opt);
        });
    }
    
    // Gắn sự kiện nút Bắt đầu trắc nghiệm
    const startBtn = document.getElementById('startQuizBtn');
    if (startBtn) {
        const newStart = startBtn.cloneNode(true);
        startBtn.parentNode.replaceChild(newStart, startBtn);
        newStart.addEventListener('click', () => {
            const filterVal = document.getElementById('quizChapterFilter').value;
            startQuizMode(filterVal === 'all' ? null : parseInt(filterVal));
        });
    }
    
    // Reset/Làm lại từ đầu
    const resetBtn = document.getElementById('resetQuizBtn');
    if (resetBtn) {
        const newReset = resetBtn.cloneNode(true);
        resetBtn.parentNode.replaceChild(newReset, resetBtn);
        newReset.addEventListener('click', () => {
            resetQuizUI();
        });
    }
    
    // Nút Tiếp tục câu tiếp theo
    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', () => {
            handleQuizNext();
        });
    }
    
    // Nút làm lại tại màn hình kết quả
    const restartBtn = document.getElementById('restartQuizBtn');
    if (restartBtn) {
        const newRestart = restartBtn.cloneNode(true);
        restartBtn.parentNode.replaceChild(newRestart, restartBtn);
        newRestart.addEventListener('click', () => {
            startQuizMode(activeQuizChapterId);
        });
    }
}

function startQuizMode(chapterId) {
    activeQuizChapterId = chapterId;
    activeQuizIndex = 0;
    activeQuizSelectedAnswer = null;
    activeQuizIsChecked = false;
    activeQuizScore = 0;
    
    // Thu thập câu hỏi
    activeQuizQuestions = [];
    if (chapterId === null) {
        // Gom tất cả câu hỏi từ 7 chương
        let allQ = [];
        CHAPTERS_DATA.forEach(c => {
            c.quizzes.forEach(q => {
                allQ.push({
                    ...q,
                    categoryName: `Chương ${c.id}: ${c.shortTitle}`
                });
            });
        });
        
        // Trộn ngẫu nhiên và lấy tối đa 10 câu
        allQ.sort(() => 0.5 - Math.random());
        activeQuizQuestions = allQ.slice(0, 10);
    } else {
        // Chỉ lấy câu hỏi chương được chọn
        const chapter = CHAPTERS_DATA.find(c => c.id === chapterId);
        if (chapter) {
            chapter.quizzes.forEach(q => {
                activeQuizQuestions.push({
                    ...q,
                    categoryName: `Chương ${chapter.id}: ${chapter.shortTitle}`
                });
            });
        }
    }
    
    if (activeQuizQuestions.length === 0) {
        showToast("Không tìm thấy câu hỏi trắc nghiệm nào!", "warning");
        return;
    }
    
    // Hiện màn hình trắc nghiệm active, ẩn màn hình cấu hình
    const quizSetup = document.getElementById('quizIntro');
    const quizActive = document.getElementById('quizActive');
    const quizResults = document.getElementById('quizResults');
    
    if (quizSetup) quizSetup.classList.add('hidden');
    if (quizResults) quizResults.classList.add('hidden');
    if (quizActive) quizActive.classList.remove('hidden');
    
    // Hiển thị điểm cao nhất hiện tại của chế độ này
    const key = chapterId === null ? 'quick10' : `chapter_${chapterId}`;
    const highScore = appState.quizHighScores[key] || 0;
    const highScoreDom = document.getElementById('quizActiveHighScore');
    if (highScoreDom) highScoreDom.textContent = `Điểm cao nhất: ${highScore}%`;
    
    renderActiveQuestion();
}

function renderActiveQuestion() {
    if (activeQuizQuestions.length === 0) return;
    const q = activeQuizQuestions[activeQuizIndex];
    
    // Tiến trình (Progress bar)
    const fillDom = document.getElementById('quizProgressFill');
    const numberDom = document.getElementById('questionNumberIndicator');
    const categoryDom = document.getElementById('questionCategoryIndicator');
    const qText = document.getElementById('activeQuestionText');
    const explanationCard = document.getElementById('quizExplanationCard');
    
    if (fillDom) {
        const percent = Math.round((activeQuizIndex / activeQuizQuestions.length) * 100);
        fillDom.style.width = `${percent}%`;
    }
    if (numberDom) numberDom.textContent = `Câu ${activeQuizIndex + 1}/${activeQuizQuestions.length}`;
    if (categoryDom) categoryDom.textContent = q.categoryName;
    if (qText) qText.textContent = q.question;
    if (explanationCard) explanationCard.classList.add('hidden');
    
    activeQuizSelectedAnswer = null;
    activeQuizIsChecked = false;
    
    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.innerHTML = 'Kiểm Tra Đáp Án <i class="fa-solid fa-circle-question"></i>';
    }
    
    // Render danh sách phương án A, B, C, D
    const container = document.getElementById('quizOptionsContainer');
    if (container) {
        container.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        
        q.options.forEach((opt, idx) => {
            const div = document.createElement('div');
            div.className = 'quiz-option';
            div.innerHTML = `
                <span class="option-letter">${letters[idx]}</span>
                <span class="option-text">${opt}</span>
            `;
            
            div.addEventListener('click', () => {
                if (activeQuizIsChecked) return;
                
                document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                
                activeQuizSelectedAnswer = idx;
                if (nextBtn) nextBtn.disabled = false;
            });
            
            container.appendChild(div);
        });
    }
}

function handleQuizNext() {
    const q = activeQuizQuestions[activeQuizIndex];
    const nextBtn = document.getElementById('quizNextBtn');
    
    if (!activeQuizIsChecked) {
        // Bước 1: Kiểm tra đáp án
        activeQuizIsChecked = true;
        const selected = activeQuizSelectedAnswer;
        const correct = q.correctAnswer;
        const isCorrect = (selected === correct);
        
        // Cập nhật lớp giao diện đúng/sai
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((el, idx) => {
            el.classList.remove('selected');
            if (idx === correct) {
                el.classList.add('correct');
            } else if (idx === selected) {
                el.classList.add('incorrect');
            }
        });
        
        if (isCorrect) {
            activeQuizScore++;
            showToast("Chính xác!", "success");
        } else {
            showToast("Rất tiếc, chưa chính xác!", "warning");
        }
        
        // Hiển thị giải thích
        const card = document.getElementById('quizExplanationCard');
        const title = document.getElementById('explanationTitle');
        const text = document.getElementById('explanationText');
        
        if (card) card.classList.remove('hidden');
        if (title) {
            title.innerHTML = isCorrect 
                ? '<i class="fa-solid fa-circle-check text-success"></i> Đáp án chính xác!' 
                : '<i class="fa-solid fa-circle-xmark text-danger"></i> Đáp án chưa chính xác!';
        }
        if (text) text.textContent = q.explanation;
        
        // Đổi tên nút tiếp theo
        if (nextBtn) {
            if (activeQuizIndex === activeQuizQuestions.length - 1) {
                nextBtn.innerHTML = 'Xem Kết Quả <i class="fa-solid fa-trophy"></i>';
            } else {
                nextBtn.innerHTML = 'Câu Tiếp Theo <i class="fa-solid fa-chevron-right"></i>';
            }
        }
    } else {
        // Bước 2: Chuyển câu tiếp theo hoặc kết thúc
        if (activeQuizIndex === activeQuizQuestions.length - 1) {
            showQuizFinalResults();
        } else {
            activeQuizIndex++;
            renderActiveQuestion();
        }
    }
}

function showQuizFinalResults() {
    const quizActive = document.getElementById('quizActive');
    const quizResults = document.getElementById('quizResults');
    if (quizActive) quizActive.classList.add('hidden');
    if (quizResults) quizResults.classList.remove('hidden');
    
    const correctCount = activeQuizScore;
    const totalCount = activeQuizQuestions.length;
    const finalPercent = Math.round((correctCount / totalCount) * 100);
    
    const scoreVal = document.getElementById('finalScoreVal');
    const feedback = document.getElementById('finalScoreFeedback');
    
    if (scoreVal) scoreVal.textContent = `${correctCount}/${totalCount}`;
    
    if (feedback) {
        if (finalPercent === 100) {
            feedback.textContent = "Xuất sắc! Bạn đã đạt điểm tối đa. Hãy tiếp tục ôn tập như thế này nhé!";
        } else if (finalPercent >= 80) {
            feedback.textContent = "Tuyệt vời! Kiến thức rất chắc chắn. Bạn sẵn sàng cho bài kiểm tra chính thức rồi!";
        } else if (finalPercent >= 50) {
            feedback.textContent = "Khá tốt! Bạn có thể xem lại tóm tắt ôn tập để nâng cao điểm số của mình.";
        } else {
            feedback.textContent = "Cần cố gắng thêm! Hãy xem lại Nội dung bài học và lật thêm Flashcard trước khi thi nhé.";
        }
    }
    
    // Lưu điểm cao nhất vào LocalStorage
    const key = activeQuizChapterId === null ? 'quick10' : `chapter_${activeQuizChapterId}`;
    const prevHigh = appState.quizHighScores[key] || 0;
    if (finalPercent > prevHigh) {
        appState.quizHighScores[key] = finalPercent;
        saveState('MLN131_quizHighScores', appState.quizHighScores);
        showToast("Tuyệt đỉnh! Kỷ lục điểm số mới!", "success");
    }
}

function resetQuizUI() {
    const quizSetup = document.getElementById('quizIntro');
    const quizActive = document.getElementById('quizActive');
    const quizResults = document.getElementById('quizResults');
    
    if (quizSetup) quizSetup.classList.remove('hidden');
    if (quizActive) quizActive.classList.add('hidden');
    if (quizResults) quizResults.classList.add('hidden');
}

// 9. Tóm tắt ôn thi nhanh (Review Mode - Tab 5)
function renderReviewMode() {
    const container = document.getElementById('reviewModeCardsContainer');
    if (!container) return;
    container.innerHTML = '';
    
    CHAPTERS_DATA.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'review-chapter-card';
        
        // Gom các điểm cần nhớ từ 3 section của chương
        const keyPointsList = [];
        chapter.sections.forEach(s => {
            if (s.keyPoints[0]) keyPointsList.push(s.keyPoints[0]);
        });
        // Bổ sung thêm ý từ danh sách thi cử để đủ 5 ý cốt lõi
        const finalTips = [...keyPointsList, ...chapter.examTips.slice(0, 5 - keyPointsList.length)];
        
        card.innerHTML = `
            <div class="review-card-header">
                <span class="badge">Chương ${chapter.id}</span>
                <h4>${chapter.title}</h4>
            </div>
            
            <div class="review-section">
                <h6><i class="fa-solid fa-star text-gold"></i> 5 Ý chính trọng tâm khi đi thi:</h6>
                <ul>
                    ${finalTips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="review-section">
                <h6><i class="fa-solid fa-tags text-primary"></i> 5 Thuật ngữ then chốt:</h6>
                <div class="review-terms-flex">
                    ${chapter.keyTerms.map(term => `
                        <div class="mini-term" title="${term.definition}">
                            <strong>${term.term}</strong>: <span>${term.definition.substring(0, 75)}...</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="review-section">
                <h6><i class="fa-solid fa-circle-question text-info"></i> 3 Câu hỏi tự luận cốt lõi:</h6>
                <ol>
                    ${chapter.essayQuestions.slice(0, 3).map(q => `<li>${q}</li>`).join('')}
                </ol>
            </div>
        `;
        container.appendChild(card);
    });
}

// 10. Tra cứu Thuật ngữ & Search Engine (Tab 6)
function renderGlossary() {
    filterGlossaryContent('');
    
    // Đăng ký thanh tìm kiếm cục bộ tại trang từ điển
    const glossaryInput = document.getElementById('glossaryFilterInput');
    if (glossaryInput) {
        glossaryInput.addEventListener('input', (e) => {
            filterGlossaryContent(e.target.value.toLowerCase().trim());
        });
    }
}

// Tìm kiếm nâng cao có Highlight kết quả tìm kiếm
function filterGlossaryContent(query) {
    const grid = document.getElementById('glossaryListGrid');
    const emptyState = document.getElementById('glossaryEmptyState');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Thu thập toàn bộ thuật ngữ của 7 chương
    let allTerms = [];
    CHAPTERS_DATA.forEach(c => {
        c.keyTerms.forEach(t => {
            allTerms.push({
                chapterName: `Chương ${c.id}: ${c.shortTitle}`,
                term: t.term,
                definition: t.definition,
                memoryHint: t.memoryHint
            });
        });
    });
    
    // Lọc theo từ khóa tìm kiếm
    const filtered = allTerms.filter(item => {
        return item.term.toLowerCase().includes(query) || 
               item.definition.toLowerCase().includes(query) || 
               item.chapterName.toLowerCase().includes(query);
    });
    
    if (filtered.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        
        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'glossary-card';
            
            // Xử lý highlight chữ khớp
            let termHtml = item.term;
            let defHtml = item.definition;
            
            if (query !== '') {
                const regex = new RegExp(`(${query})`, 'gi');
                termHtml = item.term.replace(regex, '<mark class="highlight">$1</mark>');
                defHtml = item.definition.replace(regex, '<mark class="highlight">$1</mark>');
            }
            
            card.innerHTML = `
                <span class="chapter-no" style="font-size:0.75rem; color:var(--text-muted); margin-bottom:4px; display:block;">
                    ${item.chapterName}
                </span>
                <h4>${termHtml}</h4>
                <p>${defHtml}</p>
                <div class="card-hint-text" style="font-size:0.8rem; color:var(--text-muted); border-top: 1px dashed var(--border-color); padding-top:6px; margin-top:8px;">
                    <i class="fa-regular fa-lightbulb text-gold"></i> Gợi ý: ${item.memoryHint}
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// Global search bar (Header)
function initGlobalSearch() {
    const input = document.getElementById('globalSearch');
    if (!input) return;
    
    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') return;
        
        // Chuyển sang tab glossary và điền nội dung tìm kiếm vào ô lọc
        switchTab('glossary');
        const localInput = document.getElementById('glossaryFilterInput');
        if (localInput) {
            localInput.value = e.target.value;
            filterGlossaryContent(query);
        }
    });
}

// 11. Đăng ký các thành phần giao diện khác khi khởi động
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initTheme();
    initRouting();
    initScrollEffects();
    initGlobalSearch();
    
    // Gắn sự kiện nút di động quay lại danh sách chương
    const backBtn = document.getElementById('chapterMobileBackBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            const layout = document.querySelector('.chapters-layout');
            if (layout) layout.classList.remove('show-content');
        });
    }
    
    // Render mặc định Dashboard
    renderOverviewDashboard();
});
