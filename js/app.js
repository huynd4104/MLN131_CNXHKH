/**
 * MLN131 Learning Journey
 * Vanilla JS render logic with backward-compatible localStorage state.
 */

let appState = {
    currentTab: 'overview',
    selectedChapterIndex: 0,
    completedChapters: [],
    flashcardProgress: {},
    quizHighScores: {},
    theme: 'light',
    streak: 0,
    lastActiveDate: ''
};

let selectedFlashcardChapterId = 'all';
let flashcardsList = [];
let currentCardIndex = 0;

let activeQuizQuestions = [];
let activeQuizIndex = 0;
let activeQuizSelectedAnswer = null;
let activeQuizIsChecked = false;
let activeQuizScore = 0;
let activeQuizChapterId = null;

let glossaryQuery = '';
let glossaryChapterFilter = 'all';

const TAB_META = {
    overview: {
        eyebrow: 'Chủ nghĩa xã hội khoa học',
        title: 'MLN131 Learning Journey',
        subtitle: 'Hành trình khám phá 7 trạm tri thức xã hội.'
    },
    chapters: {
        eyebrow: 'Story pages',
        title: '7 chương học',
        subtitle: 'Hỏi, hiểu nhanh, nắm ý chính rồi mới mở phần chi tiết.'
    },
    flashcards: {
        eyebrow: 'Micro-learning',
        title: 'Thẻ nhớ thuật ngữ',
        subtitle: 'Lật thẻ, tự đánh dấu và ôn lại những khái niệm chưa chắc.'
    },
    quiz: {
        eyebrow: 'Practice game',
        title: 'Quiz ôn tập',
        subtitle: 'Mỗi câu một màn hình, có phản hồi và giải thích ngay.'
    },
    review: {
        eyebrow: '60 giây mỗi chương',
        title: 'Ôn thi nhanh',
        subtitle: 'Tóm tắt cực gọn để nhớ ý chính trước khi làm quiz.'
    },
    glossary: {
        eyebrow: 'Tra cứu',
        title: 'Từ điển thuật ngữ',
        subtitle: 'Tìm nhanh khái niệm theo chương hoặc từ khóa.'
    }
};

function htmlEscape(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function safeParse(value, fallback) {
    try {
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        console.warn('LocalStorage parse fallback:', error);
        return fallback;
    }
}

function saveState(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function migrateOldState() {
    const oldStateStr = localStorage.getItem('mln131_portal_state');
    if (!oldStateStr) return;

    try {
        const oldState = JSON.parse(oldStateStr);
        if (oldState.readChapters && !localStorage.getItem('MLN131_completedChapters')) {
            localStorage.setItem('MLN131_completedChapters', JSON.stringify(oldState.readChapters));
        }
        if (oldState.flashcardProgress && !localStorage.getItem('MLN131_flashcardProgress')) {
            localStorage.setItem('MLN131_flashcardProgress', JSON.stringify(oldState.flashcardProgress));
        }
        if (oldState.quizHighScores && !localStorage.getItem('MLN131_quizHighScores')) {
            localStorage.setItem('MLN131_quizHighScores', JSON.stringify(oldState.quizHighScores));
        }
        if (oldState.theme && !localStorage.getItem('MLN131_theme')) {
            localStorage.setItem('MLN131_theme', oldState.theme);
        }
        localStorage.removeItem('mln131_portal_state');
    } catch (error) {
        console.error('Migration error:', error);
    }
}

function loadState() {
    migrateOldState();

    appState.completedChapters = safeParse(localStorage.getItem('MLN131_completedChapters'), []);
    appState.flashcardProgress = safeParse(localStorage.getItem('MLN131_flashcardProgress'), {});
    appState.quizHighScores = safeParse(localStorage.getItem('MLN131_quizHighScores'), {});
    appState.theme = ['light', 'dark'].includes(localStorage.getItem('MLN131_theme'))
        ? localStorage.getItem('MLN131_theme')
        : 'light';
    appState.streak = parseInt(localStorage.getItem('MLN131_streak') || '0', 10) || 0;
    appState.lastActiveDate = localStorage.getItem('MLN131_lastActiveDate') || '';
    updateStreak();
}

function updateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (appState.lastActiveDate === today) return;

    if (!appState.lastActiveDate) {
        appState.streak = 1;
    } else {
        const previous = new Date(appState.lastActiveDate);
        const current = new Date(today);
        const diffDays = Math.round((current - previous) / (1000 * 60 * 60 * 24));
        appState.streak = diffDays === 1 ? appState.streak + 1 : 1;
    }

    appState.lastActiveDate = today;
    localStorage.setItem('MLN131_streak', String(appState.streak));
    localStorage.setItem('MLN131_lastActiveDate', today);
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const iconMap = {
        success: 'fa-circle-check',
        warning: 'fa-triangle-exclamation',
        info: 'fa-circle-info'
    };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid ${iconMap[type] || iconMap.info}"></i><span>${htmlEscape(message)}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 220);
    }, 2600);
}

function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    applyTheme(appState.theme);

    themeToggleBtn?.addEventListener('click', () => {
        appState.theme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        localStorage.setItem('MLN131_theme', appState.theme);
        applyTheme(appState.theme);
        showToast(appState.theme === 'dark' ? 'Đã bật dark mode' : 'Đã bật light mode', 'success');
    });
}

function applyTheme(theme) {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme !== 'dark');
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = theme === 'dark'
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    }
}

function initRouting() {
    document.querySelectorAll('[data-tab]').forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const tabId = item.getAttribute('data-tab');
            if (tabId) switchTab(tabId);
        });
    });
}

function switchTab(tabId, options = {}) {
    if (!TAB_META[tabId]) tabId = 'overview';
    appState.currentTab = tabId;

    document.querySelectorAll('.nav-item').forEach((item) => {
        item.classList.toggle('active', item.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-pane').forEach((pane) => {
        pane.classList.toggle('active', pane.id === tabId);
    });

    updateHeader(tabId);

    if (tabId === 'overview') renderOverview();
    if (tabId === 'chapters') renderChaptersTab();
    if (tabId === 'flashcards') initFlashcardsTab();
    if (tabId === 'quiz') initQuizTab();
    if (tabId === 'review') renderReviewMode();
    if (tabId === 'glossary') renderGlossary();

    if (!options.skipScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateHeader(tabId) {
    const meta = TAB_META[tabId] || TAB_META.overview;
    const eyebrow = document.getElementById('pageEyebrow');
    const title = document.getElementById('pageTitle');
    const subtitle = document.getElementById('pageSubtitle');
    if (eyebrow) eyebrow.textContent = meta.eyebrow;
    if (title) title.textContent = meta.title;
    if (subtitle) subtitle.textContent = meta.subtitle;
}

function initScrollEffects() {
    const progressBar = document.getElementById('scrollProgressBar');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (backToTopBtn) backToTopBtn.classList.toggle('show', window.scrollY > 420);
    }, { passive: true });

    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function getChapter(indexOrId) {
    if (typeof indexOrId === 'number' && indexOrId >= 0 && indexOrId < CHAPTERS_DATA.length) {
        return CHAPTERS_DATA[indexOrId];
    }
    return CHAPTERS_DATA.find((chapter) => chapter.id === indexOrId) || CHAPTERS_DATA[0];
}

function getChapterIndexById(id) {
    return Math.max(0, CHAPTERS_DATA.findIndex((chapter) => chapter.id === Number(id)));
}

function getChapterStyle(chapter) {
    const theme = chapter.colorTheme || {};
    return [
        `--station-accent:${theme.accent || '#A32626'}`,
        `--station-bg:${theme.softBg || 'rgba(163, 38, 38, 0.1)'}`,
        `--station-border:${theme.border || 'rgba(16, 42, 67, 0.12)'}`
    ].join(';');
}

function getKeywords(chapter) {
    if (Array.isArray(chapter.keywords) && chapter.keywords.length) return chapter.keywords.slice(0, 5);
    return (chapter.keyTerms || []).slice(0, 5).map((item) => item.term);
}

function getKeyIdeas(chapter) {
    if (Array.isArray(chapter.keyIdeas) && chapter.keyIdeas.length) return chapter.keyIdeas.slice(0, 3);
    return (chapter.sections || []).slice(0, 3).map((section) => ({
        title: section.title,
        shortExplain: section.summary,
        visualHint: section.takeaway
    }));
}

function getNextChapter() {
    return CHAPTERS_DATA.find((chapter) => !appState.completedChapters.includes(chapter.id)) || CHAPTERS_DATA[0];
}

function getAllTerms() {
    return CHAPTERS_DATA.flatMap((chapter) => (chapter.keyTerms || []).map((term) => ({
        ...term,
        chapterId: chapter.id,
        chapterTitle: chapter.shortTitle,
        stationName: chapter.stationName
    })));
}

function getKnownCardsCount() {
    return Object.values(appState.flashcardProgress).filter((value) => value === 'known').length;
}

function renderOverview() {
    const pane = document.getElementById('overview');
    if (!pane) return;

    const completed = appState.completedChapters.length;
    const progressPercent = Math.round((completed / CHAPTERS_DATA.length) * 100);
    const nextChapter = getNextChapter();
    const totalTerms = getAllTerms().length;
    const knownTerms = getKnownCardsCount();

    pane.innerHTML = `
        <div class="page-stack">
            <section class="learning-hero">
                <div class="hero-copy">
                    <span class="hero-kicker"><i class="fa-solid fa-compass"></i> MLN131 Learning Journey</span>
                    <h2>Hành trình khám phá Chủ nghĩa xã hội khoa học</h2>
                    <p class="hero-lead">Đi qua 7 trạm tri thức bằng câu hỏi dẫn nhập, ví dụ gần đời sống, thẻ nhớ và quiz ngắn để học nhẹ hơn nhưng vẫn nắm chắc ý chính.</p>
                    <div class="hero-actions">
                        <button class="btn btn-primary" type="button" data-action="start-journey">
                            Bắt đầu hành trình <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <button class="btn btn-secondary" type="button" data-tab-target="review">
                            <i class="fa-solid fa-bolt"></i> Ôn thi nhanh
                        </button>
                        <button class="btn btn-quiet" type="button" data-action="scroll-roadmap">
                            <i class="fa-solid fa-map"></i> Khám phá 7 chương
                        </button>
                    </div>
                </div>
                <div class="hero-visual" aria-label="Bản đồ hành trình 7 chương">
                    <div class="journey-line" aria-hidden="true"></div>
                    ${CHAPTERS_DATA.map((chapter, index) => `
                        <button class="hero-node" type="button" style="${getChapterStyle(chapter)}" data-chapter-index="${index}">
                            <span class="hero-node-number">${String(chapter.id).padStart(2, '0')}</span>
                            <span>
                                <strong>${htmlEscape(chapter.stationName || chapter.shortTitle)}</strong>
                                <span>${htmlEscape(chapter.shortTitle)}</span>
                            </span>
                        </button>
                    `).join('')}
                </div>
            </section>

            <section class="progress-panel">
                <div class="progress-panel-top">
                    <div>
                        <h3>Tiến độ hành trình</h3>
                        <p>Trạm tiếp theo: ${htmlEscape(nextChapter.stationName || nextChapter.shortTitle)} · ${knownTerms}/${totalTerms} thuật ngữ đã thuộc · streak ${appState.streak} ngày</p>
                    </div>
                    <div class="progress-percent">${progressPercent}%</div>
                </div>
                <div class="progress-track" aria-label="Tiến độ học tập">
                    <div class="progress-fill" style="width:${progressPercent}%"></div>
                </div>
            </section>

            <section class="quick-actions" aria-label="Lối học nhanh">
                <button class="quick-action" type="button" data-tab-target="review">
                    <i class="fa-solid fa-bolt"></i>
                    <span><strong>Ôn thi nhanh</strong><span>5 ý, 5 keyword, 3 câu hỏi mỗi chương</span></span>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                <button class="quick-action" type="button" data-tab-target="flashcards">
                    <i class="fa-solid fa-layer-group"></i>
                    <span><strong>Học thuật ngữ</strong><span>Lật thẻ và đánh dấu biết rồi/chưa chắc</span></span>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                <button class="quick-action" type="button" data-tab-target="quiz">
                    <i class="fa-solid fa-gamepad"></i>
                    <span><strong>Làm quiz</strong><span>Mỗi câu một card, có giải thích sau đáp án</span></span>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </section>

            <section id="roadmapSection">
                <div class="section-heading">
                    <h2>Learning Path 7 trạm tri thức</h2>
                    <p>Mỗi trạm mở ra một câu hỏi trung tâm và vài keyword để bạn định hướng trước khi học sâu.</p>
                </div>
                <div class="journey-roadmap" id="journeyRoadmap"></div>
            </section>

            <section>
                <div class="section-heading">
                    <h2>Knowledge Branches</h2>
                    <p>Các nhánh kiến thức giúp bạn đi từ bức tranh tổng thể vào từng chương.</p>
                </div>
                <div class="knowledge-branches" id="knowledgeBranches"></div>
            </section>

            <section>
                <div class="section-heading">
                    <h2>Dòng chảy hình thành CNXHKH</h2>
                    <p>Nhìn tiến trình lý luận như một chuỗi mốc ngắn, có nhịp đọc.</p>
                </div>
                <div class="timeline-wrapper" id="timelineContainer"></div>
            </section>
        </div>
    `;

    pane.querySelector('[data-action="start-journey"]')?.addEventListener('click', () => {
        appState.selectedChapterIndex = getChapterIndexById(nextChapter.id);
        switchTab('chapters');
    });
    pane.querySelector('[data-action="scroll-roadmap"]')?.addEventListener('click', () => {
        document.getElementById('roadmapSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    pane.querySelectorAll('[data-tab-target]').forEach((button) => {
        button.addEventListener('click', () => switchTab(button.getAttribute('data-tab-target')));
    });
    pane.querySelectorAll('[data-chapter-index]').forEach((button) => {
        button.addEventListener('click', () => {
            appState.selectedChapterIndex = Number(button.getAttribute('data-chapter-index'));
            switchTab('chapters');
        });
    });

    renderJourneyRoadmap('journeyRoadmap');
    renderKnowledgeBranches('knowledgeBranches');
    renderTimeline('timelineContainer');
}

function renderJourneyRoadmap(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = CHAPTERS_DATA.map((chapter, index) => {
        const completed = appState.completedChapters.includes(chapter.id);
        const keywords = getKeywords(chapter).slice(0, 3);
        return `
            <article class="station-card" style="${getChapterStyle(chapter)}">
                <div class="station-head">
                    <span class="station-number">${String(chapter.id).padStart(2, '0')}</span>
                    <div class="station-title">
                        <span>${htmlEscape(chapter.stationName || chapter.shortTitle)}</span>
                        <h3>${htmlEscape(chapter.shortTitle)}</h3>
                    </div>
                </div>
                <p>${htmlEscape(chapter.oneLineSummary || chapter.description)}</p>
                <div class="chip-row">
                    ${keywords.map((keyword) => `<span class="chip">${htmlEscape(keyword)}</span>`).join('')}
                </div>
                <div class="station-footer">
                    <span class="mini-progress ${completed ? 'completed' : ''}">
                        <span class="dot"></span>${completed ? 'Đã qua trạm' : 'Chưa hoàn thành'}
                    </span>
                    <button class="btn btn-sm btn-secondary" type="button" data-chapter-index="${index}">
                        Học chương này <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </article>
        `;
    }).join('');

    container.querySelectorAll('[data-chapter-index]').forEach((button) => {
        button.addEventListener('click', () => {
            appState.selectedChapterIndex = Number(button.getAttribute('data-chapter-index'));
            switchTab('chapters');
        });
    });
}

function renderTimeline(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = TIMELINE_DATA.map((item, index) => `
        <article class="timeline-node">
            <span class="timeline-dot"><i class="${htmlEscape(item.icon)}"></i></span>
            <div class="timeline-info">
                <h3>${String(index + 1).padStart(2, '0')}. ${htmlEscape(item.title)}</h3>
                <p>${htmlEscape(shortText(item.desc, 172))}</p>
            </div>
        </article>
    `).join('');
}

function renderKnowledgeBranches(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <article class="branch-center">
            <strong>Chủ nghĩa xã hội khoa học</strong>
            <span>Lý luận về con đường, lực lượng và quy luật xây dựng xã hội mới.</span>
        </article>
        ${CHAPTERS_DATA.map((chapter, index) => `
            <article class="branch-card" style="${getChapterStyle(chapter)}">
                <div class="station-head">
                    <span class="station-number"><i class="${htmlEscape(chapter.icon || 'fa-solid fa-book')}"></i></span>
                    <div class="station-title">
                        <span>Nhánh ${chapter.id}</span>
                        <h3>${htmlEscape(chapter.stationName || chapter.shortTitle)}</h3>
                    </div>
                </div>
                <p>${htmlEscape(chapter.centralQuestion || chapter.description)}</p>
                <div class="chip-row">
                    ${getKeywords(chapter).slice(0, 3).map((keyword) => `<span class="chip">${htmlEscape(keyword)}</span>`).join('')}
                </div>
                <button class="btn btn-sm btn-quiet" type="button" data-chapter-index="${index}">
                    Học ngay <i class="fa-solid fa-arrow-right"></i>
                </button>
            </article>
        `).join('')}
    `;

    container.querySelectorAll('[data-chapter-index]').forEach((button) => {
        button.addEventListener('click', () => {
            appState.selectedChapterIndex = Number(button.getAttribute('data-chapter-index'));
            switchTab('chapters');
        });
    });
}

function renderChaptersTab() {
    const pane = document.getElementById('chapters');
    if (!pane) return;

    const selected = getChapter(appState.selectedChapterIndex);
    pane.innerHTML = `
        <div class="page-stack">
            <div class="section-heading">
                <h2>Story page theo từng chương</h2>
                <p>Bắt đầu bằng câu hỏi trung tâm, sau đó mở rộng từng lớp kiến thức.</p>
            </div>
            <div class="chapters-layout">
                <aside class="chapter-selector">
                    <select class="chapter-picker" id="chapterPicker" aria-label="Chọn chương">
                        ${CHAPTERS_DATA.map((chapter, index) => `
                            <option value="${index}" ${index === appState.selectedChapterIndex ? 'selected' : ''}>
                                Chương ${chapter.id}: ${chapter.stationName || chapter.shortTitle}
                            </option>
                        `).join('')}
                    </select>
                    <div class="chapter-list">
                        ${CHAPTERS_DATA.map((chapter, index) => `
                            <button class="chapter-list-item ${index === appState.selectedChapterIndex ? 'active' : ''}" type="button" style="${getChapterStyle(chapter)}" data-chapter-index="${index}">
                                <span>Chương ${chapter.id}</span>
                                <strong>${htmlEscape(chapter.stationName || chapter.shortTitle)}</strong>
                                <small class="muted">${appState.completedChapters.includes(chapter.id) ? 'Đã học' : 'Chưa học'}</small>
                            </button>
                        `).join('')}
                    </div>
                </aside>
                <article class="chapter-story" id="chapterStory">
                    ${buildChapterStoryHtml(selected, appState.selectedChapterIndex)}
                </article>
            </div>
        </div>
    `;

    pane.querySelector('#chapterPicker')?.addEventListener('change', (event) => {
        appState.selectedChapterIndex = Number(event.target.value);
        renderChaptersTab();
    });
    pane.querySelectorAll('[data-chapter-index]').forEach((button) => {
        button.addEventListener('click', () => {
            appState.selectedChapterIndex = Number(button.getAttribute('data-chapter-index'));
            renderChaptersTab();
        });
    });
    attachChapterStoryEvents(pane);
}

function buildChapterStoryHtml(chapter, index) {
    const completed = appState.completedChapters.includes(chapter.id);
    return `
        <section class="story-hero" style="${getChapterStyle(chapter)}">
            <div class="story-meta">
                <span class="story-badge"><i class="${htmlEscape(chapter.icon || 'fa-solid fa-book')}"></i> Chương ${chapter.id}</span>
                <span class="story-badge">${completed ? 'Đã hoàn thành' : 'Đang khám phá'}</span>
            </div>
            <h2>${htmlEscape(chapter.stationName || chapter.title)}</h2>
            <p class="central-question">${htmlEscape(chapter.centralQuestion || chapter.description)}</p>
            <p class="muted">${htmlEscape(chapter.oneLineSummary || chapter.description)}</p>
        </section>

        <section class="micro-grid" style="${getChapterStyle(chapter)}">
            <article class="micro-card">
                <h3>3 phút nắm chương</h3>
                <p>${htmlEscape(chapter.quickUnderstand || chapter.description)}</p>
            </article>
            <article class="micro-card">
                <h3>Vì sao cần học?</h3>
                <p>${htmlEscape(chapter.whyItMatters || chapter.objectives?.knowledge || '')}</p>
            </article>
            <article class="micro-card">
                <h3>Ôn thi trong 60 giây</h3>
                <p>${htmlEscape((chapter.examTips || [])[0] || 'Nắm câu hỏi trung tâm, keyword và 3 ý chính trước khi đọc chi tiết.')}</p>
            </article>
        </section>

        <section>
            <div class="section-heading">
                <h3>3 ý chính cần nắm</h3>
            </div>
            <div class="idea-grid" style="${getChapterStyle(chapter)}">
                ${getKeyIdeas(chapter).map((idea, ideaIndex) => `
                    <article class="idea-card">
                        <h3>${ideaIndex + 1}. ${htmlEscape(idea.title)}</h3>
                        <p>${htmlEscape(idea.shortExplain)}</p>
                        <span class="idea-hint">${htmlEscape(idea.visualHint || '')}</span>
                    </article>
                `).join('')}
            </div>
        </section>

        <section>
            <div class="section-heading">
                <h3>5 keyword cần nhớ</h3>
            </div>
            <div class="chip-row" style="${getChapterStyle(chapter)}">
                ${getKeywords(chapter).map((keyword) => `<span class="chip">${htmlEscape(keyword)}</span>`).join('')}
            </div>
        </section>

        <section class="story-actions" style="${getChapterStyle(chapter)}">
            <button class="btn btn-primary" type="button" data-action="open-detail">Đọc chi tiết <i class="fa-solid fa-chevron-down"></i></button>
            <button class="btn btn-secondary" type="button" data-action="chapter-quiz">Làm quiz chương này</button>
            <button class="btn ${completed ? 'btn-quiet' : 'btn-success'}" type="button" data-action="toggle-complete">
                ${completed ? 'Đánh dấu học lại' : 'Đánh dấu đã học'}
            </button>
        </section>

        <section class="detail-accordion" id="chapterDetails" style="${getChapterStyle(chapter)}">
            <details class="learn-accordion">
                <summary>Tổng quan học phần</summary>
                <div class="accordion-body">
                    <div class="content-section">
                        <h4>Kiến thức</h4>
                        <p>${htmlEscape(chapter.objectives?.knowledge || '')}</p>
                    </div>
                    <div class="content-section">
                        <h4>Kỹ năng</h4>
                        <p>${htmlEscape(chapter.objectives?.skills || '')}</p>
                    </div>
                    <div class="content-section">
                        <h4>Thái độ</h4>
                        <p>${htmlEscape(chapter.objectives?.attitude || '')}</p>
                    </div>
                </div>
            </details>

            <details class="learn-accordion">
                <summary>Nội dung chi tiết</summary>
                <div class="accordion-body">
                    ${(chapter.sections || []).map((section) => `
                        <div class="content-section">
                            <h4>${htmlEscape(section.title)}</h4>
                            <p>${htmlEscape(section.summary)}</p>
                            <ul>
                                ${(section.keyPoints || []).map((point) => `<li>${htmlEscape(point)}</li>`).join('')}
                            </ul>
                            <div class="takeaway-box"><strong>Ý nghĩa cốt lõi:</strong> ${htmlEscape(section.takeaway || '')}</div>
                        </div>
                    `).join('')}
                </div>
            </details>

            <details class="learn-accordion">
                <summary>Thuật ngữ quan trọng</summary>
                <div class="accordion-body">
                    <div class="term-grid">
                        ${(chapter.keyTerms || []).map((term) => `
                            <article class="term-card">
                                <h3>${htmlEscape(term.term)}</h3>
                                <p>${htmlEscape(term.definition)}</p>
                                <span class="idea-hint">${htmlEscape(term.memoryHint || '')}</span>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </details>

            <details class="learn-accordion">
                <summary>Liên hệ Việt Nam</summary>
                <div class="accordion-body">
                    <div class="vietnam-box">${htmlEscape(chapter.vietnamConnection || '')}</div>
                </div>
            </details>

            <details class="learn-accordion">
                <summary>Ôn tập nhanh</summary>
                <div class="accordion-body">
                    <div class="self-check-box">
                        <strong>Tự kiểm tra:</strong>
                        <ul class="compact-list">
                            ${(chapter.quizzes || []).slice(0, 3).map((quiz) => `<li>${htmlEscape(quiz.question)}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="content-section">
                        <h4>Câu hỏi tự luận hay gặp</h4>
                        <ol class="compact-list">
                            ${(chapter.essayQuestions || []).map((question) => `<li>${htmlEscape(question)}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="content-section">
                        <h4>5 ý thi cử</h4>
                        <ul class="compact-list">
                            ${(chapter.examTips || []).slice(0, 5).map((tip) => `<li>${htmlEscape(tip)}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </details>
        </section>

        <nav class="chapter-nav-row" aria-label="Chuyển chương">
            <button class="btn btn-quiet" type="button" data-action="prev-chapter" ${index === 0 ? 'disabled' : ''}>
                <i class="fa-solid fa-arrow-left"></i> Chương trước
            </button>
            <button class="btn btn-quiet" type="button" data-action="next-chapter" ${index === CHAPTERS_DATA.length - 1 ? 'disabled' : ''}>
                Chương sau <i class="fa-solid fa-arrow-right"></i>
            </button>
        </nav>
    `;
}

function attachChapterStoryEvents(scope) {
    const chapter = getChapter(appState.selectedChapterIndex);

    scope.querySelector('[data-action="open-detail"]')?.addEventListener('click', () => {
        const firstDetail = scope.querySelector('#chapterDetails details');
        if (firstDetail) firstDetail.open = true;
        firstDetail?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    scope.querySelector('[data-action="chapter-quiz"]')?.addEventListener('click', () => {
        switchTab('quiz');
        startQuizMode(chapter.id);
    });

    scope.querySelector('[data-action="toggle-complete"]')?.addEventListener('click', () => {
        if (appState.completedChapters.includes(chapter.id)) {
            appState.completedChapters = appState.completedChapters.filter((id) => id !== chapter.id);
            showToast(`Đã chuyển Chương ${chapter.id} về trạng thái học lại`, 'warning');
        } else {
            appState.completedChapters.push(chapter.id);
            showToast(`Đã hoàn thành Chương ${chapter.id}`, 'success');
        }
        saveState('MLN131_completedChapters', appState.completedChapters);
        renderChaptersTab();
    });

    scope.querySelector('[data-action="prev-chapter"]')?.addEventListener('click', () => {
        if (appState.selectedChapterIndex > 0) {
            appState.selectedChapterIndex--;
            renderChaptersTab();
        }
    });

    scope.querySelector('[data-action="next-chapter"]')?.addEventListener('click', () => {
        if (appState.selectedChapterIndex < CHAPTERS_DATA.length - 1) {
            appState.selectedChapterIndex++;
            renderChaptersTab();
        }
    });
}

function initFlashcardsTab() {
    const pane = document.getElementById('flashcards');
    if (!pane) return;

    buildFlashcardsList();
    pane.innerHTML = `
        <div class="flashcards-container">
            <div class="tool-header">
                <h2>Flashcards thuật ngữ</h2>
                <p>35 thuật ngữ cốt lõi được gom thành các thẻ học ngắn theo từng chương.</p>
            </div>
            <div class="tool-controls">
                <select class="select-control" id="flashcardChapterFilter" aria-label="Lọc flashcard theo chương">
                    <option value="all">Tất cả chương</option>
                    ${CHAPTERS_DATA.map((chapter) => `
                        <option value="${chapter.id}" ${String(chapter.id) === String(selectedFlashcardChapterId) ? 'selected' : ''}>
                            Chương ${chapter.id}: ${chapter.stationName || chapter.shortTitle}
                        </option>
                    `).join('')}
                </select>
            </div>
            <div class="stats-grid">
                <div class="stat-tile"><strong id="knownCardsStats">0</strong><span>Đã thuộc</span></div>
                <div class="stat-tile"><strong id="reviewCardsStats">0</strong><span>Chưa chắc</span></div>
                <div class="stat-tile"><strong id="remainingCardsStats">0</strong><span>Còn lại</span></div>
            </div>
            <div class="flashcard-stage" id="flashcardStage"></div>
        </div>
    `;

    pane.querySelector('#flashcardChapterFilter')?.addEventListener('change', (event) => {
        selectedFlashcardChapterId = event.target.value;
        currentCardIndex = 0;
        buildFlashcardsList();
        renderFlashcardStage();
    });

    updateFlashcardProgressStats();
    renderFlashcardStage();
}

function buildFlashcardsList() {
    flashcardsList = [];
    CHAPTERS_DATA.forEach((chapter) => {
        if (selectedFlashcardChapterId !== 'all' && String(chapter.id) !== String(selectedFlashcardChapterId)) return;
        (chapter.keyTerms || []).forEach((term) => {
            flashcardsList.push({
                chapterId: chapter.id,
                chapterTitle: chapter.shortTitle,
                stationName: chapter.stationName,
                term: term.term,
                definition: term.definition,
                memoryHint: term.memoryHint
            });
        });
    });

    if (currentCardIndex > flashcardsList.length) currentCardIndex = 0;
}

function renderFlashcardStage() {
    const stage = document.getElementById('flashcardStage');
    if (!stage) return;

    if (!flashcardsList.length) {
        stage.innerHTML = `<div class="empty-state"><i class="fa-solid fa-layer-group"></i><strong>Không có thẻ trong bộ lọc này</strong></div>`;
        return;
    }

    if (currentCardIndex >= flashcardsList.length) {
        stage.innerHTML = `
            <div class="completion-card">
                <i class="fa-solid fa-circle-check" style="color:var(--success);font-size:2.4rem"></i>
                <h3>Hoàn thành lượt thẻ</h3>
                <p class="muted">Bạn đã đi hết ${flashcardsList.length} thẻ trong bộ lọc hiện tại.</p>
                <div class="button-row">
                    <button class="btn btn-primary" type="button" data-action="restart-deck">Ôn lại bộ thẻ</button>
                    <button class="btn btn-secondary" type="button" data-tab-target="quiz">Làm quiz</button>
                </div>
            </div>
        `;
        stage.querySelector('[data-action="restart-deck"]')?.addEventListener('click', () => {
            currentCardIndex = 0;
            renderFlashcardStage();
        });
        stage.querySelector('[data-tab-target="quiz"]')?.addEventListener('click', () => switchTab('quiz'));
        return;
    }

    const card = flashcardsList[currentCardIndex];
    const status = appState.flashcardProgress[card.term];
    stage.innerHTML = `
        <div class="deck-meta">
            <span>${currentCardIndex + 1}/${flashcardsList.length}</span>
            <span>${status === 'known' ? 'Đã thuộc' : status === 'review' ? 'Chưa chắc' : 'Chưa đánh dấu'}</span>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard-inner" id="flashcardInner">
                <div class="flashcard-face flashcard-front">
                    <span class="card-category">Chương ${card.chapterId} · ${htmlEscape(card.stationName || card.chapterTitle)}</span>
                    <h3 class="card-title-word">${htmlEscape(card.term)}</h3>
                    <span class="flip-prompt"><i class="fa-solid fa-rotate"></i> Mặt trước thuật ngữ</span>
                </div>
                <div class="flashcard-face flashcard-back">
                    <span class="card-category">Định nghĩa</span>
                    <p class="card-definition-text">${htmlEscape(card.definition)}</p>
                    <div class="card-hint-box"><strong>Nhớ nhanh:</strong> ${htmlEscape(card.memoryHint || '')}</div>
                </div>
            </div>
        </div>
        <div class="flashcard-actions">
            <button class="btn btn-danger" type="button" data-action="mark-review">Chưa chắc</button>
            <button class="btn btn-quiet circle-btn" type="button" data-action="prev-card" aria-label="Thẻ trước" ${currentCardIndex === 0 ? 'disabled' : ''}>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="btn btn-quiet circle-btn" type="button" data-action="next-card" aria-label="Thẻ sau" ${currentCardIndex === flashcardsList.length - 1 ? 'disabled' : ''}>
                <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button class="btn btn-success" type="button" data-action="mark-known">Biết rồi</button>
        </div>
    `;

    stage.querySelector('#flashcardInner')?.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('flipped');
    });
    stage.querySelector('[data-action="prev-card"]')?.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            renderFlashcardStage();
        }
    });
    stage.querySelector('[data-action="next-card"]')?.addEventListener('click', () => {
        if (currentCardIndex < flashcardsList.length - 1) {
            currentCardIndex++;
            renderFlashcardStage();
        }
    });
    stage.querySelector('[data-action="mark-review"]')?.addEventListener('click', () => markFlashcardStatus('review'));
    stage.querySelector('[data-action="mark-known"]')?.addEventListener('click', () => markFlashcardStatus('known'));
}

function markFlashcardStatus(status) {
    const card = flashcardsList[currentCardIndex];
    if (!card) return;

    appState.flashcardProgress[card.term] = status;
    saveState('MLN131_flashcardProgress', appState.flashcardProgress);
    showToast(status === 'known' ? 'Đã đánh dấu biết rồi' : 'Đã đưa vào nhóm chưa chắc', status === 'known' ? 'success' : 'info');
    updateFlashcardProgressStats();
    currentCardIndex++;
    renderFlashcardStage();
}

function updateFlashcardProgressStats() {
    const allTerms = getAllTerms();
    const known = allTerms.filter((term) => appState.flashcardProgress[term.term] === 'known').length;
    const review = allTerms.filter((term) => appState.flashcardProgress[term.term] === 'review').length;
    const remaining = allTerms.length - known - review;

    const knownDom = document.getElementById('knownCardsStats');
    const reviewDom = document.getElementById('reviewCardsStats');
    const remainingDom = document.getElementById('remainingCardsStats');
    if (knownDom) knownDom.textContent = known;
    if (reviewDom) reviewDom.textContent = review;
    if (remainingDom) remainingDom.textContent = remaining;
}

function initQuizTab() {
    const pane = document.getElementById('quiz');
    if (!pane) return;

    pane.innerHTML = `
        <div class="quiz-container">
            <div class="tool-header">
                <h2>Quiz ôn tập</h2>
                <p>Luyện từng chương hoặc thử 10 câu ngẫu nhiên trước khi ôn phần tự luận.</p>
            </div>
            <div class="quiz-layout">
                <aside class="quiz-setup">
                    <label>
                        <strong>Chọn bộ câu hỏi</strong>
                        <select class="select-control" id="quizChapterFilter">
                            <option value="all">Ôn thi nhanh 10 câu</option>
                            ${CHAPTERS_DATA.map((chapter) => `
                                <option value="${chapter.id}">Chương ${chapter.id}: ${chapter.stationName || chapter.shortTitle}</option>
                            `).join('')}
                        </select>
                    </label>
                    <button class="btn btn-primary" type="button" id="startQuizBtn">
                        Bắt đầu quiz <i class="fa-solid fa-play"></i>
                    </button>
                    <button class="btn btn-quiet" type="button" id="resetQuizBtn">
                        Chọn lại đề
                    </button>
                    <div class="quiz-stats">
                        <div class="stat-tile"><strong id="quizTotalQuestions">0</strong><span>Số câu</span></div>
                        <div class="stat-tile"><strong id="quizCompletedCount">0</strong><span>Đã làm</span></div>
                        <div class="stat-tile"><strong id="quizCorrectCount">0</strong><span>Đúng</span></div>
                    </div>
                </aside>
                <section id="quizStage" class="quiz-stage"></section>
            </div>
        </div>
    `;

    pane.querySelector('#startQuizBtn')?.addEventListener('click', () => {
        const filterValue = pane.querySelector('#quizChapterFilter')?.value || 'all';
        startQuizMode(filterValue === 'all' ? null : Number(filterValue));
    });
    pane.querySelector('#resetQuizBtn')?.addEventListener('click', resetQuizUI);
    renderQuizStage();
}

function startQuizMode(chapterId) {
    activeQuizChapterId = chapterId;
    activeQuizIndex = 0;
    activeQuizSelectedAnswer = null;
    activeQuizIsChecked = false;
    activeQuizScore = 0;
    activeQuizQuestions = [];

    if (chapterId === null) {
        activeQuizQuestions = CHAPTERS_DATA.flatMap((chapter) => (chapter.quizzes || []).map((quiz) => ({
            ...quiz,
            categoryName: `Chương ${chapter.id}: ${chapter.stationName || chapter.shortTitle}`
        }))).sort(() => 0.5 - Math.random()).slice(0, 10);
    } else {
        const chapter = getChapter(chapterId);
        activeQuizQuestions = (chapter.quizzes || []).map((quiz) => ({
            ...quiz,
            categoryName: `Chương ${chapter.id}: ${chapter.stationName || chapter.shortTitle}`
        }));
    }

    if (!activeQuizQuestions.length) {
        showToast('Không có câu hỏi cho bộ lọc này', 'warning');
        return;
    }

    renderQuizStage();
}

function renderQuizStage(showResults = false) {
    const stage = document.getElementById('quizStage');
    if (!stage) return;

    updateQuizStats();

    if (showResults) {
        const total = activeQuizQuestions.length;
        const percent = total ? Math.round((activeQuizScore / total) * 100) : 0;
        const feedback = getQuizFeedback(percent);
        stage.className = 'quiz-result-card';
        stage.innerHTML = `
            <i class="fa-solid fa-trophy" style="color:var(--secondary);font-size:2.6rem"></i>
            <h3>Hoàn thành quiz</h3>
            <div class="result-score">${activeQuizScore}/${total}</div>
            <p>${htmlEscape(feedback)}</p>
            <div class="button-row">
                <button class="btn btn-primary" type="button" data-action="restart-quiz">Làm lại</button>
                <button class="btn btn-secondary" type="button" data-tab-target="review">Xem ôn nhanh</button>
            </div>
        `;
        stage.querySelector('[data-action="restart-quiz"]')?.addEventListener('click', () => startQuizMode(activeQuizChapterId));
        stage.querySelector('[data-tab-target="review"]')?.addEventListener('click', () => switchTab('review'));
        saveQuizHighScore(percent);
        return;
    }

    stage.className = 'quiz-stage';

    if (!activeQuizQuestions.length) {
        stage.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-circle-question"></i>
                <strong>Sẵn sàng luyện tập</strong>
                <span>Chọn bộ câu hỏi rồi bắt đầu quiz.</span>
            </div>
        `;
        return;
    }

    const quiz = activeQuizQuestions[activeQuizIndex];
    const progress = Math.round((activeQuizIndex / activeQuizQuestions.length) * 100);
    const key = activeQuizChapterId === null ? 'quick10' : `chapter_${activeQuizChapterId}`;
    const highScore = appState.quizHighScores[key] || 0;

    stage.innerHTML = `
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
        <div class="quiz-meta">
            <span>Câu ${activeQuizIndex + 1}/${activeQuizQuestions.length}</span>
            <span>${htmlEscape(quiz.categoryName)}</span>
            <span>Kỷ lục ${highScore}%</span>
        </div>
        <h3 class="question-text">${htmlEscape(quiz.question)}</h3>
        <div class="quiz-options-list">
            ${quiz.options.map((option, index) => {
                let stateClass = '';
                if (activeQuizIsChecked && index === quiz.correctAnswer) stateClass = 'correct';
                if (activeQuizIsChecked && index === activeQuizSelectedAnswer && index !== quiz.correctAnswer) stateClass = 'incorrect';
                if (!activeQuizIsChecked && index === activeQuizSelectedAnswer) stateClass = 'selected';
                return `
                    <button class="quiz-option ${stateClass}" type="button" data-answer-index="${index}">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${htmlEscape(option)}</span>
                    </button>
                `;
            }).join('')}
        </div>
        ${activeQuizIsChecked ? `
            <div class="quiz-explanation">
                <h3>${activeQuizSelectedAnswer === quiz.correctAnswer ? 'Đúng rồi' : 'Chưa đúng'}</h3>
                <p>${htmlEscape(quiz.explanation)}</p>
            </div>
        ` : ''}
        <div class="button-row">
            <button class="btn btn-primary" type="button" id="quizNextBtn" ${activeQuizSelectedAnswer === null ? 'disabled' : ''}>
                ${activeQuizIsChecked ? (activeQuizIndex === activeQuizQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo') : 'Kiểm tra đáp án'}
            </button>
        </div>
    `;

    stage.querySelectorAll('[data-answer-index]').forEach((button) => {
        button.addEventListener('click', () => {
            if (activeQuizIsChecked) return;
            activeQuizSelectedAnswer = Number(button.getAttribute('data-answer-index'));
            renderQuizStage();
        });
    });
    stage.querySelector('#quizNextBtn')?.addEventListener('click', handleQuizNext);
}

function handleQuizNext() {
    const quiz = activeQuizQuestions[activeQuizIndex];
    if (!quiz || activeQuizSelectedAnswer === null) return;

    if (!activeQuizIsChecked) {
        activeQuizIsChecked = true;
        if (activeQuizSelectedAnswer === quiz.correctAnswer) {
            activeQuizScore++;
            showToast('Chính xác', 'success');
        } else {
            showToast('Xem lại giải thích nhé', 'warning');
        }
        renderQuizStage();
        return;
    }

    if (activeQuizIndex >= activeQuizQuestions.length - 1) {
        renderQuizStage(true);
        return;
    }

    activeQuizIndex++;
    activeQuizSelectedAnswer = null;
    activeQuizIsChecked = false;
    renderQuizStage();
}

function updateQuizStats() {
    const total = activeQuizQuestions.length;
    const completed = activeQuizIsChecked ? activeQuizIndex + 1 : activeQuizIndex;
    const totalDom = document.getElementById('quizTotalQuestions');
    const completedDom = document.getElementById('quizCompletedCount');
    const correctDom = document.getElementById('quizCorrectCount');
    if (totalDom) totalDom.textContent = total;
    if (completedDom) completedDom.textContent = completed;
    if (correctDom) correctDom.textContent = activeQuizScore;
}

function saveQuizHighScore(percent) {
    const key = activeQuizChapterId === null ? 'quick10' : `chapter_${activeQuizChapterId}`;
    if (percent > (appState.quizHighScores[key] || 0)) {
        appState.quizHighScores[key] = percent;
        saveState('MLN131_quizHighScores', appState.quizHighScores);
        showToast('Đã lưu kỷ lục mới', 'success');
    }
}

function getQuizFeedback(percent) {
    if (percent >= 90) return 'Rất chắc. Bạn có thể chuyển sang ôn tự luận hoặc flashcard khó.';
    if (percent >= 70) return 'Nền tảng ổn. Hãy xem lại các câu sai và làm thêm một lượt.';
    if (percent >= 50) return 'Bạn đã nắm được một phần. Nên quay lại 3 ý chính và keyword của chương.';
    return 'Cần ôn lại từ story page trước, sau đó làm quiz lại với nhịp chậm hơn.';
}

function resetQuizUI() {
    activeQuizQuestions = [];
    activeQuizIndex = 0;
    activeQuizSelectedAnswer = null;
    activeQuizIsChecked = false;
    activeQuizScore = 0;
    activeQuizChapterId = null;
    renderQuizStage();
}

function renderReviewMode() {
    const pane = document.getElementById('review');
    if (!pane) return;

    pane.innerHTML = `
        <div class="review-container">
            <div class="tool-header">
                <h2>Ôn thi nhanh theo chương</h2>
                <p>Bản nhắc nhanh cho từng chương trước khi làm quiz hoặc chuẩn bị thuyết trình.</p>
            </div>
            <div class="review-list">
                ${CHAPTERS_DATA.map((chapter, index) => {
                    const tips = [
                        ...getKeyIdeas(chapter).map((idea) => idea.shortExplain),
                        ...(chapter.examTips || [])
                    ].slice(0, 5);
                    return `
                        <details class="review-card" style="${getChapterStyle(chapter)}" ${index === 0 ? 'open' : ''}>
                            <summary>
                                <span class="station-number">${String(chapter.id).padStart(2, '0')}</span>
                                <span>
                                    <h3>${htmlEscape(chapter.stationName || chapter.shortTitle)}</h3>
                                    <p>${htmlEscape(chapter.oneLineSummary || chapter.description)}</p>
                                </span>
                            </summary>
                            <div class="review-body">
                                <div class="content-section">
                                    <h4>5 ý cần nhớ</h4>
                                    <ul class="compact-list">${tips.map((tip) => `<li>${htmlEscape(tip)}</li>`).join('')}</ul>
                                </div>
                                <div class="chip-row">
                                    ${getKeywords(chapter).map((keyword) => `<span class="chip">${htmlEscape(keyword)}</span>`).join('')}
                                </div>
                                <div class="content-section">
                                    <h4>3 câu hỏi hay gặp</h4>
                                    <ol class="compact-list">
                                        ${(chapter.essayQuestions || []).slice(0, 3).map((question) => `<li>${htmlEscape(question)}</li>`).join('')}
                                    </ol>
                                </div>
                                <button class="btn btn-secondary" type="button" data-quiz-chapter="${chapter.id}">
                                    Làm quiz chương này <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </details>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    pane.querySelectorAll('[data-quiz-chapter]').forEach((button) => {
        button.addEventListener('click', () => {
            switchTab('quiz');
            startQuizMode(Number(button.getAttribute('data-quiz-chapter')));
        });
    });
}

function renderGlossary() {
    const pane = document.getElementById('glossary');
    if (!pane) return;

    pane.innerHTML = `
        <div class="glossary-container">
            <div class="tool-header">
                <h2>Tra cứu thuật ngữ</h2>
                <p>Tìm lại khái niệm, định nghĩa và gợi ý ghi nhớ trong toàn bộ môn học.</p>
            </div>
            <div class="glossary-toolbar">
                <input class="text-control" type="search" id="glossaryFilterInput" placeholder="Nhập từ khóa cần tìm..." value="${htmlEscape(glossaryQuery)}">
                <select class="select-control" id="glossaryChapterFilter">
                    <option value="all">Tất cả chương</option>
                    ${CHAPTERS_DATA.map((chapter) => `
                        <option value="${chapter.id}" ${String(chapter.id) === String(glossaryChapterFilter) ? 'selected' : ''}>
                            Chương ${chapter.id}: ${chapter.stationName || chapter.shortTitle}
                        </option>
                    `).join('')}
                </select>
            </div>
            <div class="glossary-grid" id="glossaryGrid"></div>
        </div>
    `;

    const input = pane.querySelector('#glossaryFilterInput');
    input?.addEventListener('input', (event) => {
        glossaryQuery = event.target.value.trim();
        filterGlossaryContent();
    });
    pane.querySelector('#glossaryChapterFilter')?.addEventListener('change', (event) => {
        glossaryChapterFilter = event.target.value;
        filterGlossaryContent();
    });
    input?.focus();
    filterGlossaryContent();
}

function filterGlossaryContent() {
    const grid = document.getElementById('glossaryGrid');
    if (!grid) return;

    const query = glossaryQuery.toLowerCase();
    const terms = getAllTerms().filter((item) => {
        const matchesChapter = glossaryChapterFilter === 'all' || String(item.chapterId) === String(glossaryChapterFilter);
        const haystack = `${item.term} ${item.definition} ${item.memoryHint} ${item.chapterTitle} ${item.stationName}`.toLowerCase();
        return matchesChapter && (!query || haystack.includes(query));
    });

    if (!terms.length) {
        grid.innerHTML = `<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><strong>Không tìm thấy thuật ngữ phù hợp</strong></div>`;
        return;
    }

    grid.innerHTML = terms.map((item) => `
        <article class="glossary-card">
            <span class="muted">Chương ${item.chapterId} · ${htmlEscape(item.stationName || item.chapterTitle)}</span>
            <h3>${highlightText(item.term, glossaryQuery)}</h3>
            <p>${highlightText(item.definition, glossaryQuery)}</p>
            <div class="card-hint-box"><strong>Nhớ nhanh:</strong> ${highlightText(item.memoryHint || '', glossaryQuery)}</div>
        </article>
    `).join('');
}

function highlightText(text, query) {
    const escaped = htmlEscape(text);
    const trimmed = String(query || '').trim();
    if (!trimmed) return escaped;
    const safeQuery = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return escaped.replace(new RegExp(`(${safeQuery})`, 'gi'), '<mark class="highlight">$1</mark>');
}

function initGlobalSearch() {
    const input = document.getElementById('globalSearch');
    if (!input) return;

    input.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return;
        const value = input.value.trim();
        if (!value) return;
        glossaryQuery = value;
        glossaryChapterFilter = 'all';
        switchTab('glossary');
    });
}

function shortText(text, maxLength) {
    const normalized = String(text || '').trim();
    if (normalized.length <= maxLength) return normalized;
    return `${normalized.slice(0, maxLength - 1).trim()}…`;
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initTheme();
    initRouting();
    initScrollEffects();
    initGlobalSearch();
    switchTab('overview', { skipScroll: true });
});

window.switchTab = switchTab;
