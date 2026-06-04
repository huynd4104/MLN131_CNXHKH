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
    theme: 'dark',
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
        eyebrow: 'Triển lãm Vũ trụ Tri thức MLN131',
        title: 'Vũ trụ tri thức Chủ nghĩa xã hội khoa học',
        subtitle: 'Hành trình khám phá 7 hành tinh lý luận xã hội.'
    },
    chapters: {
        eyebrow: 'Hành tinh Tri thức',
        title: 'Khám phá hành tinh',
        subtitle: 'Mô hình hóa lý luận, tình huống thực tế và kiến thức chi tiết.'
    },
    flashcards: {
        eyebrow: 'Trạm tín hiệu tri thức',
        title: 'Thẻ nhớ thuật ngữ',
        subtitle: 'Nhận dạng sóng tín hiệu thuật ngữ cốt lõi từng chương.'
    },
    quiz: {
        eyebrow: 'Nhiệm vụ thử thách',
        title: 'Quiz ôn tập',
        subtitle: 'Tham gia nhiệm vụ thử thách tri thức và nhận phản hồi trực tiếp.'
    },
    review: {
        eyebrow: 'Chế độ tóm tắt vũ trụ',
        title: 'Ôn thi nhanh',
        subtitle: 'Tóm tắt cực gọn các tín hiệu tri thức cốt lõi.'
    },
    glossary: {
        eyebrow: 'Trạm thu phát vệ tinh',
        title: 'Tra cứu thuật ngữ',
        subtitle: 'Truy lục nhanh các khái niệm khoa học chính trị.'
    }
};

const HERO_ORBIT_POINTS = [
    { x: 168, y: -18, size: 68 },
    { x: 58, y: 148, size: 58 },
    { x: -158, y: 104, size: 62 },
    { x: -184, y: -78, size: 58 },
    { x: -36, y: -174, size: 64 },
    { x: 178, y: 104, size: 56 },
    { x: 118, y: -154, size: 60 }
];

const PLANET_VISUALS = {
    1: { secondary: '#FBBF24', tertiary: '#A78BFA', deep: '#071A33', motifClass: 'motif-origin' },
    2: { secondary: '#F97316', tertiary: '#38BDF8', deep: '#210A12', motifClass: 'motif-worker' },
    3: { secondary: '#22D3EE', tertiary: '#FDE68A', deep: '#211A05', motifClass: 'motif-transition' },
    4: { secondary: '#60A5FA', tertiary: '#FBBF24', deep: '#061B18', motifClass: 'motif-democracy' },
    5: { secondary: '#EC4899', tertiary: '#38BDF8', deep: '#130B2F', motifClass: 'motif-social' },
    6: { secondary: '#A78BFA', tertiary: '#FDE68A', deep: '#062532', motifClass: 'motif-harmony' },
    7: { secondary: '#F43F5E', tertiary: '#FBBF24', deep: '#2A0B20', motifClass: 'motif-habitat' }
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
        : 'dark';
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
    document.body.dataset.activeTab = tabId;
    document.body.classList.toggle('cosmic-scene-tab', tabId === 'overview' || tabId === 'chapters');

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

function getPlanetVisualConfig(chapter) {
    return PLANET_VISUALS[chapter.id] || PLANET_VISUALS[1];
}

function getPlanetVisualStyle(chapter) {
    const config = getPlanetVisualConfig(chapter);
    const theme = chapter.colorTheme || {};
    return [
        getChapterStyle(chapter),
        `--planet-accent:${theme.accent || '#38BDF8'}`,
        `--planet-secondary:${config.secondary}`,
        `--planet-tertiary:${config.tertiary}`,
        `--planet-deep:${config.deep}`
    ].join(';');
}

function getPlanetMotifClass(chapter) {
    return getPlanetVisualConfig(chapter).motifClass;
}

function trimText(value, limit = 150) {
    const text = String(value || '').trim();
    if (text.length <= limit) return text;
    return `${text.slice(0, limit).trim()}...`;
}

function getHeroPlanetStyle(chapter, index) {
    const point = HERO_ORBIT_POINTS[index] || HERO_ORBIT_POINTS[0];
    return [
        getPlanetVisualStyle(chapter),
        `--orbit-x:${point.x}px`,
        `--orbit-y:${point.y}px`,
        `--node-size:${point.size}px`
    ].join(';');
}

function buildHeroPlanetNodes() {
    return CHAPTERS_DATA.map((chapter, index) => `
        <button class="landing-planet-node ${getPlanetMotifClass(chapter)}" type="button" style="${getHeroPlanetStyle(chapter, index)}" data-chapter-index="${index}" aria-label="Khám phá ${htmlEscape(chapter.planet.name)}">
            <span class="landing-planet-sphere" aria-hidden="true"></span>
            <span class="landing-planet-code">${htmlEscape(chapter.planet.number || String(chapter.id).padStart(2, '0'))}</span>
            <span class="landing-planet-tooltip">
                <strong>${htmlEscape(chapter.planet.name)}</strong>
                <small>${htmlEscape(chapter.stationName || chapter.shortTitle)}</small>
            </span>
        </button>
    `).join('');
}

function buildMobilePlanetStrip() {
    return CHAPTERS_DATA.map((chapter, index) => `
        <button class="mobile-planet-chip ${getPlanetMotifClass(chapter)}" type="button" style="${getPlanetVisualStyle(chapter)}" data-chapter-index="${index}">
            <span class="mobile-planet-orb" aria-hidden="true"></span>
            <span>
                <strong>${htmlEscape(chapter.planet.number || String(chapter.id).padStart(2, '0'))}</strong>
                ${htmlEscape(chapter.stationName || chapter.shortTitle)}
            </span>
        </button>
    `).join('');
}

function buildPlanetVisualHtml(chapter) {
    const ideas = getKeyIdeas(chapter);
    const satelliteIcons = ['fa-lightbulb', 'fa-satellite-dish', 'fa-crosshairs'];
    return `
        <div class="cosmic-planet-visual ${getPlanetMotifClass(chapter)}" style="${getPlanetVisualStyle(chapter)}" aria-label="Mô hình hành tinh ${htmlEscape(chapter.planet.name)}">
            <div class="planet-particle-field" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="planet-glow" aria-hidden="true"></div>
            <div class="planet-orbit-ring planet-orbit-ring-a" aria-hidden="true"></div>
            <div class="planet-orbit-ring planet-orbit-ring-b" aria-hidden="true"></div>
            <div class="planet-orbit-ring planet-orbit-ring-c" aria-hidden="true"></div>
            <div class="planet-core">
                <div class="planet-surface"></div>
                <div class="planet-rim-light"></div>
                <div class="planet-shadow"></div>
                <div class="planet-atmosphere"></div>
            </div>
            ${ideas.map((idea, ideaIndex) => `
                <button class="planet-satellite sat-${ideaIndex + 1}" type="button" aria-label="${htmlEscape(idea.title)}">
                    <i class="fa-solid ${satelliteIcons[ideaIndex] || 'fa-circle-dot'}"></i>
                    <span>${htmlEscape(idea.title)}</span>
                </button>
            `).join('')}
            <div class="planet-motif-layer" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span>
            </div>
        </div>
    `;
}

function buildCoordinateRailHtml() {
    return CHAPTERS_DATA.map((chapter, index) => {
        const completed = appState.completedChapters.includes(chapter.id);
        const keywords = getKeywords(chapter).slice(0, 2);
        return `
            <button class="coordinate-item ${index === appState.selectedChapterIndex ? 'active' : ''} ${completed ? 'completed' : ''}" type="button" style="${getPlanetVisualStyle(chapter)}" data-chapter-index="${index}">
                <span class="coordinate-dot ${getPlanetMotifClass(chapter)}" aria-hidden="true"></span>
                <span class="coordinate-copy">
                    <span class="coordinate-code">${htmlEscape(chapter.planet.orbitLabel || `Planet ${chapter.id}`)}</span>
                    <strong>${htmlEscape(chapter.stationName || chapter.shortTitle)}</strong>
                    <span class="coordinate-keywords">${keywords.map((keyword) => `<em>${htmlEscape(keyword)}</em>`).join('')}</span>
                </span>
                <span class="coordinate-status">${completed ? 'Đã học' : 'Chưa học'}</span>
            </button>
        `;
    }).join('');
}

function buildMissionCardsHtml(chapter) {
    const examTip = (chapter.examTips || [])[0] || 'Nắm câu hỏi trung tâm, keyword và 3 ý chính trước khi đọc chi tiết.';
    const cards = [
        {
            icon: 'fa-stopwatch',
            label: 'Quick Scan',
            title: '3 phút nắm chương',
            text: trimText(chapter.quickUnderstand || chapter.description, 145)
        },
        {
            icon: 'fa-compass-drafting',
            label: 'Meaning Signal',
            title: 'Vì sao cần học',
            text: trimText(chapter.whyItMatters || chapter.objectives?.knowledge || '', 145)
        },
        {
            icon: 'fa-bolt',
            label: 'Exam Pulse',
            title: 'Ôn thi trong 60 giây',
            text: trimText(examTip, 145)
        }
    ];

    return cards.map((card) => `
        <article class="mission-card">
            <span class="mission-card-icon"><i class="fa-solid ${card.icon}"></i></span>
            <span class="mission-card-label">${htmlEscape(card.label)}</span>
            <h3>${htmlEscape(card.title)}</h3>
            <p>${htmlEscape(card.text)}</p>
        </article>
    `).join('');
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
            <!-- 1. Cosmic Hero -->
            <section class="cosmic-landing-scene" aria-label="MLN131 Cosmic Knowledge Exhibition">
                <div class="cosmic-landing-nebula" aria-hidden="true"></div>
                <div class="landing-copy">
                    <span class="hero-kicker"><i class="fa-solid fa-shuttle-space"></i> MLN131 Cosmic Knowledge Exhibition</span>
                    <h2>Vũ trụ tri thức Chủ nghĩa xã hội khoa học</h2>
                    <p class="hero-lead">Khám phá 7 hành tinh lý luận qua bản đồ tri thức điện ảnh, tương tác và dễ ôn tập.</p>
                    <div class="hero-actions">
                        <button class="btn btn-primary" type="button" data-action="start-journey">
                            <i class="fa-solid fa-rocket"></i> Bắt đầu khám phá
                        </button>
                        <button class="btn btn-secondary" type="button" data-action="scroll-galaxy">
                            <i class="fa-solid fa-circle-nodes"></i> Mở bản đồ vũ trụ
                        </button>
                        <button class="btn btn-quiet" type="button" data-tab-target="review">
                            <i class="fa-solid fa-bolt"></i> Ôn tập nhanh
                        </button>
                    </div>
                    <div class="landing-signal-chips" aria-label="Từ khóa nổi bật">
                        <span>Giai cấp công nhân</span>
                        <span>Dân chủ</span>
                        <span>Nhà nước</span>
                        <span>Dân tộc</span>
                        <span>Gia đình</span>
                    </div>
                </div>
                <div class="landing-galaxy-stage" aria-label="Bản đồ vũ trụ 7 hành tinh">
                    <div class="galaxy-core-glow" aria-hidden="true"></div>
                    <div class="landing-orbit orbit-a" aria-hidden="true"></div>
                    <div class="landing-orbit orbit-b" aria-hidden="true"></div>
                    <div class="landing-orbit orbit-c" aria-hidden="true"></div>
                    <div class="landing-orbit orbit-d" aria-hidden="true"></div>
                    <div class="knowledge-core">
                        <span>MLN131</span>
                        <strong>CNXHKH</strong>
                    </div>
                    <div class="floating-keyword-container" aria-hidden="true">
                        <span class="floating-chip" style="left: 8%; top: 18%; animation-delay: 0s;">Quy luật</span>
                        <span class="floating-chip" style="right: 12%; top: 14%; animation-delay: 2s;">Đoàn kết</span>
                        <span class="floating-chip" style="left: 12%; bottom: 20%; animation-delay: 4s;">Pháp quyền</span>
                        <span class="floating-chip" style="right: 10%; bottom: 18%; animation-delay: 1s;">Quá độ</span>
                        <span class="floating-chip" style="left: 46%; top: 7%; animation-delay: 3s;">1848</span>
                    </div>
                    ${buildHeroPlanetNodes()}
                </div>
                <div class="mobile-planet-strip" aria-label="7 hành tinh tri thức">
                    ${buildMobilePlanetStrip()}
                </div>
            </section>

            <hr class="cosmic-divider">

            <!-- 2. Galaxy Highlights -->
            <section>
                <div class="section-heading">
                    <h2>Mô-đun khám phá tri thức</h2>
                    <p>Các phương thức trực quan sinh động giúp tối ưu hóa việc tiếp thu tri thức lý luận.</p>
                </div>
                <div class="quick-actions" style="margin-top: 14px;">
                    <div class="glass-panel" style="padding: 16px; display: flex; flex-direction: column; gap: 8px;">
                        <span style="font-size: 1.5rem; color: var(--primary);"><i class="fa-solid fa-circle-nodes"></i></span>
                        <h4 style="margin: 0; font-size: 0.95rem;">Mô hình hóa khái niệm</h4>
                        <p style="margin: 0; font-size: 0.8rem; color: var(--text-muted);">Trực quan hóa lý luận dưới dạng dòng chảy, chòm sao liên kết mạng lưới hoặc sơ đồ lộ trình bay.</p>
                    </div>
                    <div class="glass-panel" style="padding: 16px; display: flex; flex-direction: column; gap: 8px;">
                        <span style="font-size: 1.5rem; color: var(--secondary);"><i class="fa-solid fa-satellite-dish"></i></span>
                        <h4 style="margin: 0; font-size: 0.95rem;">Tín hiệu thực tiễn Việt Nam</h4>
                        <p style="margin: 0; font-size: 0.8rem; color: var(--text-muted);">Kết nối lý luận trực tiếp với các tình huống, chính sách thực tế sinh động tại Việt Nam.</p>
                    </div>
                    <div class="glass-panel" style="padding: 16px; display: flex; flex-direction: column; gap: 8px;">
                        <span style="font-size: 1.5rem; color: var(--success);"><i class="fa-solid fa-gamepad"></i></span>
                        <h4 style="margin: 0; font-size: 0.95rem;">Tương tác học tập</h4>
                        <p style="margin: 0; font-size: 0.8rem; color: var(--text-muted);">Tham gia lắp ráp mô-đun, đưa ra quyết định kịch bản và thắp sáng chòm sao lịch sử.</p>
                    </div>
                </div>
            </section>

            <hr class="cosmic-divider">

            <!-- 3. Galaxy Map - 7 Knowledge Planets -->
            <section id="galaxyMapSection">
                <div class="section-heading">
                    <h2>Bản đồ 7 hành tinh tri thức</h2>
                    <p>Khám phá hệ thống 7 hành tinh lý luận lớn của môn học Chủ nghĩa xã hội khoa học.</p>
                </div>
                <div class="galaxy-map-path" id="galaxyMapPath"></div>
            </section>

            <hr class="cosmic-divider">

            <!-- 4. Concept Model Preview -->
            <section>
                <div class="section-heading">
                    <h2>Xem trước mô hình không gian</h2>
                    <p>Các khái niệm lý luận được biểu diễn dưới dạng sơ đồ chuyển động trực quan.</p>
                </div>
                <div class="quick-actions" style="margin-top: 14px;">
                    <div class="glass-panel" style="padding: 16px; cursor: pointer;" data-chapter-preview="0">
                        <span style="font-size: 0.72rem; font-weight: 800; color: #38BDF8; text-transform: uppercase;">Planet 01 · Flow Model</span>
                        <h4 style="margin: 6px 0; font-family: var(--font-serif); font-size: 1.05rem;">Từ không tưởng đến khoa học</h4>
                        <p style="margin: 0 0 10px; font-size: 0.78rem; color: var(--text-secondary);">Dòng chảy năng lượng lý luận kết nối ước mơ với cơ sở khoa học biện chứng.</p>
                        <span style="font-size: 0.78rem; font-weight: 700; color: #38BDF8;">Xem mô hình <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div class="glass-panel" style="padding: 16px; cursor: pointer;" data-chapter-preview="1">
                        <span style="font-size: 0.72rem; font-weight: 800; color: #DC2626; text-transform: uppercase;">Planet 02 · Network Model</span>
                        <h4 style="margin: 6px 0; font-family: var(--font-serif); font-size: 1.05rem;">Sứ mệnh của giai cấp công nhân</h4>
                        <p style="margin: 0 0 10px; font-size: 0.78rem; color: var(--text-secondary);">Chòm sao liên kết địa vị sản xuất hiện đại và tổ chức Đảng tiên phong.</p>
                        <span style="font-size: 0.78rem; font-weight: 700; color: #DC2626;">Xem mô hình <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div class="glass-panel" style="padding: 16px; cursor: pointer;" data-chapter-preview="4">
                        <span style="font-size: 0.72rem; font-weight: 800; color: #8B5CF6; text-transform: uppercase;">Planet 05 · Network Model</span>
                        <h4 style="margin: 6px 0; font-family: var(--font-serif); font-size: 1.05rem;">Cơ cấu và liên minh giai cấp</h4>
                        <p style="margin: 0 0 10px; font-size: 0.78rem; color: var(--text-secondary);">Mạng lưới chòm sao kết nối đại đoàn kết giữa công, nông và trí thức.</p>
                        <span style="font-size: 0.78rem; font-weight: 700; color: #8B5CF6;">Xem mô hình <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </section>

            <hr class="cosmic-divider">

            <!-- 5. Orbit Timeline Unlock -->
            <section>
                <div class="timeline-header-block">
                    <div class="section-heading" style="margin-bottom: 0;">
                        <h2>Khai phá quỹ đạo lịch sử</h2>
                        <p>Click thắp sáng các vì sao trên dải thiên hà thời gian để mở khóa các mốc hình thành CNXHKH.</p>
                    </div>
                    <div class="timeline-unlock-counter" id="timelineCounterDisplay">Đã mở: 0/8 sao</div>
                </div>
                <div class="orbit-timeline-path" id="orbitTimeline"></div>
            </section>

            <hr class="cosmic-divider">

            <!-- 6. Media Learning Station -->
            <section>
                <div class="section-heading">
                    <h2>Trạm phát sóng bài giảng (Media Station)</h2>
                    <p>Theo dõi các sóng tín hiệu bài giảng tóm tắt của từng hành tinh tri thức.</p>
                </div>
                <div class="media-station-grid" id="mediaStationGrid" style="margin-top: 14px;"></div>
            </section>

            <hr class="cosmic-divider">

            <!-- 7. Case Study Signals -->
            <section>
                <div class="section-heading">
                    <h2>Tín hiệu thực tiễn Việt Nam</h2>
                    <p>Nhận tín hiệu kết nối lý luận lý thuyết với bối cảnh xã hội sinh động tại Việt Nam.</p>
                </div>
                <div class="media-station-grid" id="caseStudyGrid" style="margin-top: 14px;"></div>
            </section>

            <hr class="cosmic-divider">

            <!-- 8. Study Tools Dock -->
            <section>
                <div class="section-heading">
                    <h2>Bảng công cụ ôn tập (Study Tools Dock)</h2>
                    <p>Truy cập nhanh các công cụ bổ trợ học tập và ôn thi trắc nghiệm.</p>
                </div>
                <div class="study-tools-dock-panel" style="margin-top: 14px;">
                    <div class="tools-grid">
                        <div class="tool-dock-card" data-tab-target="flashcards">
                            <span class="tool-dock-icon"><i class="fa-solid fa-microchip"></i></span>
                            <div class="tool-dock-info">
                                <h4>Thẻ nhớ thuật ngữ</h4>
                                <p>${knownTerms}/${totalTerms} thẻ đã thuộc</p>
                            </div>
                        </div>
                        <div class="tool-dock-card" data-tab-target="quiz">
                            <span class="tool-dock-icon" style="background: rgba(16, 185, 129, 0.1); color: #10B981;"><i class="fa-solid fa-circle-question"></i></span>
                            <div class="tool-dock-info">
                                <h4>Quiz ôn tập</h4>
                                <p>Thử thách trắc nghiệm</p>
                            </div>
                        </div>
                        <div class="tool-dock-card" data-tab-target="review">
                            <span class="tool-dock-icon" style="background: rgba(236, 72, 153, 0.1); color: #EC4899;"><i class="fa-solid fa-bolt"></i></span>
                            <div class="tool-dock-info">
                                <h4>Ôn thi nhanh</h4>
                                <p>Tóm tắt 60 giây</p>
                            </div>
                        </div>
                        <div class="tool-dock-card" data-tab-target="glossary">
                            <span class="tool-dock-icon" style="background: rgba(6, 182, 212, 0.1); color: #06B6D4;"><i class="fa-solid fa-satellite"></i></span>
                            <div class="tool-dock-info">
                                <h4>Tra cứu nhanh</h4>
                                <p>Satellite Terminal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="cosmic-divider">

            <!-- 9. Continue Mission -->
            <section class="progress-panel glass-panel" style="padding: 20px;">
                <div class="progress-panel-top">
                    <div>
                        <span style="font-size: 0.68rem; font-weight: 800; color: var(--secondary); text-transform: uppercase; letter-spacing: 0.05em;"><i class="fa-solid fa-user-astronaut"></i> Tiến độ thám hiểm</span>
                        <h3 style="margin: 6px 0 2px;">Tiếp tục nhiệm vụ</h3>
                        <p style="margin: 0; font-size: 0.82rem; color: var(--text-secondary);">Hành tinh tiếp theo: ${htmlEscape(nextChapter.planet.name)} · Chuỗi ngày hoạt động: ${appState.streak} ngày</p>
                    </div>
                    <div class="progress-percent" style="color: var(--primary);">${progressPercent}%</div>
                </div>
                <div class="progress-track" style="margin: 14px 0 16px;" aria-label="Tiến độ thám hiểm vũ trụ">
                    <div class="progress-fill" style="width:${progressPercent}%"></div>
                </div>
                <button class="btn btn-primary" type="button" data-action="continue-mission" style="width: 100%;">
                    Khám phá ngay: ${htmlEscape(nextChapter.planet.name)} <i class="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        </div>
    `;

    // Event listeners
    pane.querySelector('[data-action="start-journey"]')?.addEventListener('click', () => {
        appState.selectedChapterIndex = getChapterIndexById(nextChapter.id);
        switchTab('chapters');
    });
    pane.querySelector('[data-action="continue-mission"]')?.addEventListener('click', () => {
        appState.selectedChapterIndex = getChapterIndexById(nextChapter.id);
        switchTab('chapters');
    });
    pane.querySelector('[data-action="scroll-galaxy"]')?.addEventListener('click', () => {
        document.getElementById('galaxyMapSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    pane.querySelectorAll('[data-chapter-preview]').forEach((button) => {
        button.addEventListener('click', () => {
            appState.selectedChapterIndex = Number(button.getAttribute('data-chapter-preview'));
            switchTab('chapters');
        });
    });

    renderGalaxyMap('galaxyMapPath');
    renderTimeline('orbitTimeline');
    renderMediaStation('mediaStationGrid');
    renderCaseStudyGrid('caseStudyGrid');
}

function renderGalaxyMap(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = CHAPTERS_DATA.map((chapter, index) => {
        const completed = appState.completedChapters.includes(chapter.id);
        const keywords = getKeywords(chapter).slice(0, 3);
        const styleTheme = getChapterStyle(chapter);
        return `
            <article class="cosmic-planet-card" style="${styleTheme}">
                <div class="planet-card-header">
                    <span class="planet-card-number" style="background: var(--station-bg); color: var(--station-accent);">${chapter.planet.orbitLabel}</span>
                    <span style="font-size: 0.8rem; font-weight: 700; color: ${completed ? 'var(--success)' : 'var(--text-muted)'}">
                        <i class="${completed ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}"></i> 
                        ${completed ? 'Đã khám phá' : 'Chưa đổ bộ'}
                    </span>
                </div>
                <div class="planet-card-title">
                    <h3>Chương ${chapter.id}: ${htmlEscape(chapter.planet.name)}</h3>
                    <span>${htmlEscape(chapter.title)} (${htmlEscape(chapter.planet.englishName)})</span>
                </div>
                <p class="planet-card-question">
                    <strong>Câu hỏi dẫn đường:</strong> "${htmlEscape(chapter.centralQuestion || chapter.description)}"
                </p>
                <div class="chip-row" style="margin-bottom: 14px;">
                    ${keywords.map((keyword) => `<span class="chip" style="background: var(--station-bg); border-color: var(--station-border); color: var(--text-secondary);">${htmlEscape(keyword)}</span>`).join('')}
                </div>
                <button class="btn btn-sm btn-primary" type="button" style="background: var(--station-accent); border-color: var(--station-accent); color: #FFFFFF;" data-chapter-index="${index}">
                    Khám phá hành tinh <i class="fa-solid fa-arrow-right"></i>
                </button>
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

    // Load unlocked timeline list
    let unlocked = safeParse(localStorage.getItem('MLN131_unlockedTimeline'), [1]); // default: first node is unlocked
    if (!Array.isArray(unlocked) || unlocked.length === 0) {
        unlocked = [1];
    }

    // Update counter
    const counterDisplay = document.getElementById('timelineCounterDisplay');
    if (counterDisplay) {
        counterDisplay.textContent = `Đã mở: ${unlocked.length}/${TIMELINE_DATA.length} tín hiệu`;
    }

    container.innerHTML = TIMELINE_DATA.map((item, index) => {
        const nodeNum = index + 1;
        const isUnlocked = unlocked.includes(nodeNum);
        return `
            <article class="timeline-star-node ${isUnlocked ? 'unlocked' : 'locked'}" data-node-number="${nodeNum}">
                <span class="timeline-star-dot">
                    <i class="${isUnlocked ? 'fa-solid fa-star' : 'fa-solid fa-lock'}"></i>
                </span>
                <div class="timeline-info-wrapper">
                    <h3>
                        <span>Tín hiệu số ${String(nodeNum).padStart(2, '0')}</span>
                        ${htmlEscape(item.title)}
                    </h3>
                    <div class="timeline-info-content">
                        <p>${htmlEscape(item.desc)}</p>
                    </div>
                    <div class="timeline-locked-hint">
                        Nhấp để thu sóng tín hiệu lịch sử này...
                    </div>
                </div>
            </article>
        `;
    }).join('');

    container.querySelectorAll('.timeline-star-node.locked').forEach((node) => {
        node.addEventListener('click', () => {
            const nodeNum = Number(node.getAttribute('data-node-number'));
            let currentUnlocked = safeParse(localStorage.getItem('MLN131_unlockedTimeline'), [1]);
            if (!Array.isArray(currentUnlocked)) currentUnlocked = [1];
            if (!currentUnlocked.includes(nodeNum)) {
                currentUnlocked.push(nodeNum);
                localStorage.setItem('MLN131_unlockedTimeline', JSON.stringify(currentUnlocked));
                showToast(`Đã thắp sáng tín hiệu lịch sử số ${nodeNum}!`, 'success');
                renderTimeline(containerId);
            }
        });
    });
}

function renderMediaStation(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = CHAPTERS_DATA.map((chapter, index) => {
        if (!chapter.media) return '';
        const styleTheme = getChapterStyle(chapter);
        return `
            <article class="media-signal-card" style="${styleTheme}" data-chapter-index="${index}">
                <div class="media-thumbnail-placeholder">
                    <span class="media-planet-label" style="--station-accent: ${chapter.colorTheme.accent || '#38BDF8'}">${htmlEscape(chapter.planet.orbitLabel)}</span>
                    <span class="media-play-btn"><i class="fa-solid fa-play"></i></span>
                </div>
                <div class="media-card-body">
                    <span>${htmlEscape(chapter.media.sourceLabel || 'Media Station')}</span>
                    <h4>${htmlEscape(chapter.media.title)}</h4>
                    <p>${htmlEscape(chapter.media.description)}</p>
                </div>
            </article>
        `;
    }).join('');

    container.querySelectorAll('.media-signal-card').forEach((card) => {
        card.addEventListener('click', () => {
            const index = Number(card.getAttribute('data-chapter-index'));
            const chapter = CHAPTERS_DATA[index];
            if (!chapter || !chapter.media) return;

            let bodyHtml = '';
            if (chapter.media.url) {
                bodyHtml = `
                    <div style="aspect-ratio: 16/9; width: 100%; overflow: hidden; border-radius: 8px; background: #000;">
                        <iframe src="${htmlEscape(chapter.media.url)}" style="width: 100%; height: 100%; border: none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                `;
            } else {
                bodyHtml = `
                    <div style="text-align: center; padding: 32px 16px; border: 1px dashed rgba(56, 189, 248, 0.25); border-radius: 8px; background: rgba(5, 8, 22, 0.4);">
                        <span style="font-size: 2.5rem; color: var(--station-accent, #38BDF8); display: block; margin-bottom: 16px; animation: playPulse 2.5s infinite ease-in-out;">
                            <i class="fa-solid fa-satellite-dish"></i>
                        </span>
                        <h4 style="margin: 0 0 8px; font-size: 1.05rem;">Tín hiệu bài giảng đang được thiết lập</h4>
                        <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
                            Nội dung bài giảng tóm tắt của <strong>${htmlEscape(chapter.planet.name)}</strong> đang được bổ sung và sẽ sớm phát sóng tại Trạm tín hiệu này.
                        </p>
                    </div>
                `;
            }

            showSpaceModal(chapter.media.title, bodyHtml);
        });
    });
}

function renderCaseStudyGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = CHAPTERS_DATA.map((chapter, index) => {
        if (!chapter.caseStudy) return '';
        const styleTheme = getChapterStyle(chapter);
        return `
            <article class="case-study-signal-card" style="${styleTheme}" data-chapter-index="${index}" style="cursor: pointer;">
                <div class="case-signal-header">
                    <h4>${htmlEscape(chapter.caseStudy.title)}</h4>
                    <span class="radar-pulse-icon" style="--station-accent: ${chapter.colorTheme.accent || '#38BDF8'}; --station-bg: ${chapter.colorTheme.softBg || 'rgba(56,189,248,0.1)'}"><i class="fa-solid fa-satellite-dish"></i></span>
                </div>
                <div class="case-signal-body">
                    <p><strong>Tình huống:</strong> ${htmlEscape(chapter.caseStudy.situation)}</p>
                    <div class="case-signal-question">
                        <strong>Câu hỏi tự ngẫm:</strong> "${htmlEscape(chapter.caseStudy.question)}"
                    </div>
                    <div class="case-signal-hints">
                        <h5>Gợi ý phân tích (Liên hệ Việt Nam)</h5>
                        <ul>
                            ${(chapter.caseStudy.analysisHints || []).map(hint => `<li>${htmlEscape(hint)}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    container.querySelectorAll('.case-study-signal-card').forEach((card) => {
        card.addEventListener('click', () => {
            appState.selectedChapterIndex = Number(card.getAttribute('data-chapter-index'));
            switchTab('chapters');
        });
    });
}

function showSpaceModal(title, bodyHtml) {
    let modal = document.getElementById('spaceModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'spaceModal';
        modal.className = 'space-modal-overlay';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="space-modal-panel">
            <header class="space-modal-header">
                <h3>${htmlEscape(title)}</h3>
                <button class="space-modal-close" type="button" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button>
            </header>
            <div class="space-modal-body">
                ${bodyHtml}
            </div>
            <footer class="space-modal-footer">
                <button class="btn btn-secondary space-modal-close-btn" type="button">Đóng</button>
            </footer>
        </div>
    `;

    requestAnimationFrame(() => {
        modal.classList.add('show');
    });

    const closeModal = () => {
        modal.classList.remove('show');
    };

    modal.querySelector('.space-modal-close')?.addEventListener('click', closeModal);
    modal.querySelector('.space-modal-close-btn')?.addEventListener('click', closeModal);
    
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    const escListener = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escListener);
        }
    };
    document.addEventListener('keydown', escListener);
}

function drawNetworkLines(workspace, model, accentColor) {
    const svg = workspace.querySelector('.network-svg');
    if (!svg) return;
    svg.innerHTML = '';
    
    const rect = workspace.getBoundingClientRect();
    
    const getCoords = (nodeId) => {
        const element = workspace.querySelector(`[data-node-id="${nodeId}"]`);
        if (!element) return null;
        const eRect = element.getBoundingClientRect();
        return {
            x: eRect.left + eRect.width / 2 - rect.left,
            y: eRect.top + eRect.height / 2 - rect.top
        };
    };

    if (model.connections && model.connections.length) {
        model.connections.forEach((conn) => {
            const fromCoords = getCoords(conn.from);
            const toCoords = getCoords(conn.to);
            if (fromCoords && toCoords) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', fromCoords.x);
                line.setAttribute('y1', fromCoords.y);
                line.setAttribute('x2', toCoords.x);
                line.setAttribute('y2', toCoords.y);
                line.setAttribute('stroke', accentColor);
                line.setAttribute('stroke-dasharray', '3,3');
                line.setAttribute('stroke-width', '1.5');
                line.setAttribute('opacity', '0.45');
                svg.appendChild(line);
            }
        });
    }
    
    const centerNode = workspace.querySelector('.network-center');
    if (centerNode) {
        const cCoords = getCoords('center');
        if (cCoords) {
            model.nodes.forEach((node) => {
                const sCoords = getCoords(node.id);
                if (sCoords) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', cCoords.x);
                    line.setAttribute('y1', cCoords.y);
                    line.setAttribute('x2', sCoords.x);
                    line.setAttribute('y2', sCoords.y);
                    line.setAttribute('stroke', accentColor);
                    line.setAttribute('stroke-width', '1');
                    line.setAttribute('opacity', '0.25');
                    svg.appendChild(line);
                }
            });
        }
    }
}

window.addEventListener('resize', () => {
    const workspace = document.querySelector('.model-network');
    if (workspace) {
        const chapter = getChapter(appState.selectedChapterIndex);
        if (chapter && chapter.conceptModel && chapter.conceptModel.type === 'network') {
            drawNetworkLines(workspace, chapter.conceptModel, chapter.colorTheme.accent);
        }
    }
});

function renderConceptModelHtml(model, accentColor, chapterId) {
    const type = model.type;
    const isMobile = window.innerWidth < 480;
    
    if (type === 'flow') {
        return `
            <div class="model-flow">
                ${model.nodes.map((node, idx) => `
                    <div class="flow-node-item">
                        <div class="flow-circle" data-node-id="${node.id}" data-chapter-id="${chapterId}" style="--station-accent: ${accentColor}">
                            <i class="${node.icon}"></i>
                        </div>
                        <span class="flow-label">${htmlEscape(node.title)}</span>
                    </div>
                    ${idx < model.nodes.length - 1 ? `<div class="flow-connector" style="--station-accent: ${accentColor}"></div>` : ''}
                `).join('')}
            </div>
        `;
    }
    
    if (type === 'network') {
        const R = isMobile ? 75 : 110;
        const satellites = model.nodes.map((node, i) => {
            const angle = (2 * Math.PI * i) / model.nodes.length - Math.PI / 2;
            const x = Math.round(R * Math.cos(angle));
            const y = Math.round(R * Math.sin(angle));
            return `
                <div class="network-satellite" style="--station-accent: ${accentColor}; left: calc(50% + ${x}px - 25px); top: calc(50% + ${y}px - 25px);" data-node-id="${node.id}" data-chapter-id="${chapterId}" title="${htmlEscape(node.title)}">
                    <i class="${node.icon}"></i>
                </div>
            `;
        }).join('');
        
        return `
            <div class="model-network" style="width: ${R*2 + 100}px; height: ${R*2 + 100}px;">
                <svg style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;" class="network-svg"></svg>
                <div class="network-center" style="--station-accent: ${accentColor}" data-node-id="center" data-chapter-id="${chapterId}">
                    <strong>${htmlEscape(model.title.split(' ')[0])}</strong>
                </div>
                ${satellites}
            </div>
        `;
    }
    
    if (type === 'roadmap') {
        return `
            <div class="model-roadmap">
                <div class="roadmap-path-line"></div>
                ${model.nodes.map((node) => `
                    <div class="roadmap-node-item">
                        <div class="roadmap-marker" data-node-id="${node.id}" data-chapter-id="${chapterId}" style="--station-accent: ${accentColor}">
                            <i class="${node.icon}"></i>
                        </div>
                        <span class="roadmap-node-label">${htmlEscape(node.title)}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (type === 'comparison') {
        return `
            <div class="model-comparison">
                ${model.nodes.map((node) => `
                    <div class="comparison-panel-col" data-node-id="${node.id}" data-chapter-id="${chapterId}" style="--station-accent: ${accentColor}">
                        <h4><i class="${node.icon}"></i> ${htmlEscape(node.title)}</h4>
                        <p>${htmlEscape(node.description)}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (type === 'balance') {
        const R = isMobile ? 85 : 125;
        const satellites = model.nodes.map((node, i) => {
            const angle = (2 * Math.PI * i) / model.nodes.length - Math.PI / 2;
            const x = Math.round(R * Math.cos(angle));
            const y = Math.round(R * Math.sin(angle));
            return `
                <div class="balance-node" style="--station-accent: ${accentColor}; left: calc(50% + ${x}px - 24px); top: calc(50% + ${y}px - 24px);" data-node-id="${node.id}" data-chapter-id="${chapterId}">
                    <i class="${node.icon}"></i>
                </div>
            `;
        }).join('');
        
        return `
            <div class="model-balance" style="width: ${R*2 + 80}px; height: ${R*2 + 80}px;">
                <div class="balance-ring" style="--station-accent: ${accentColor}; width: ${R*2}px; height: ${R*2}px;"></div>
                <div class="balance-center-display" style="--station-accent: ${accentColor}" data-node-id="center" data-chapter-id="${chapterId}">
                    <strong>Cân bằng<br>Hài hòa</strong>
                </div>
                ${satellites}
            </div>
        `;
    }
    
    if (type === 'house') {
        return `
            <div class="model-house">
                ${model.nodes.map((node) => `
                    <div class="house-compartment" data-node-id="${node.id}" data-chapter-id="${chapterId}" style="--station-accent: ${accentColor}">
                        <span class="house-icon"><i class="${node.icon}"></i></span>
                        <h4>${htmlEscape(node.title)}</h4>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    return '';
}

function attachConceptModelEvents(container, chapter) {
    const model = chapter.conceptModel;
    const detailPanel = container.querySelector(`#modelDetailPanel-${chapter.id}`);
    const detailTitle = container.querySelector(`#modelDetailTitle-${chapter.id}`);
    const detailDesc = container.querySelector(`#modelDetailDesc-${chapter.id}`);
    
    if (!detailPanel || !detailTitle || !detailDesc) return;
    
    const nodesList = container.querySelectorAll('[data-node-id]');
    
    nodesList.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const nodeId = el.getAttribute('data-node-id');
            
            nodesList.forEach((n) => n.classList.remove('active'));
            el.classList.add('active');
            
            if (nodeId === 'center') {
                detailTitle.textContent = model.title;
                detailDesc.textContent = model.description;
                detailPanel.classList.add('show');
            } else {
                const nodeData = model.nodes.find((n) => n.id === nodeId);
                if (nodeData) {
                    detailTitle.innerHTML = `<i class="${nodeData.icon}"></i> ${htmlEscape(nodeData.title)}`;
                    detailDesc.textContent = nodeData.description;
                    detailPanel.classList.add('show');
                }
            }
        });
    });

    if (model.nodes.length > 0) {
        const firstNodeEl = container.querySelector(`[data-node-id="${model.nodes[0].id}"]`);
        if (firstNodeEl) {
            firstNodeEl.click();
        }
    }
}

function renderChaptersTab() {
    const pane = document.getElementById('chapters');
    if (!pane) return;


    const selected = getChapter(appState.selectedChapterIndex);
    pane.innerHTML = `
        <div class="planet-exploration-page" style="${getPlanetVisualStyle(selected)}">
            <select class="chapter-picker planet-mobile-picker" id="chapterPicker" aria-label="Chọn hành tinh">
                ${CHAPTERS_DATA.map((chapter, index) => `
                    <option value="${index}" ${index === appState.selectedChapterIndex ? 'selected' : ''}>
                        ${chapter.planet.orbitLabel}: ${chapter.stationName || chapter.shortTitle}
                    </option>
                `).join('')}
            </select>
            <div class="planet-exploration-layout">
                <aside class="planet-coordinate-rail" aria-label="Planet Coordinates">
                    <div class="coordinate-rail-header">
                        <span>Planet Coordinates</span>
                        <strong>7 trạm tri thức</strong>
                    </div>
                    <div class="planet-coordinate-list">
                        ${buildCoordinateRailHtml()}
                    </div>
                </aside>
                <article class="chapter-story planet-explorer" id="chapterStory">
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
        <section class="planet-exploration-scene ${getPlanetMotifClass(chapter)}" style="${getPlanetVisualStyle(chapter)}">
            <div class="planet-scene-backdrop" aria-hidden="true"></div>
            <div class="planet-hero-visual">
                <div class="story-meta">
                    <span class="story-badge"><i class="${htmlEscape(chapter.icon || 'fa-solid fa-book')}"></i> ${htmlEscape(chapter.planet.orbitLabel || `Planet ${chapter.id}`)}</span>
                    <span class="story-badge">${completed ? 'Đã hoàn thành' : 'Đang khám phá'}</span>
                </div>
                ${buildPlanetVisualHtml(chapter)}
            </div>
            <aside class="mission-briefing-panel">
                <span class="briefing-kicker">Mission Briefing</span>
                <div class="briefing-planet-number">${htmlEscape(chapter.planet.number || String(chapter.id).padStart(2, '0'))}</div>
                <h2>${htmlEscape(chapter.planet.name)}</h2>
                <p class="briefing-chapter-title">${htmlEscape(chapter.title)}</p>
                <div class="briefing-question">
                    <span>Câu hỏi trung tâm</span>
                    <strong>${htmlEscape(chapter.centralQuestion || chapter.description)}</strong>
                </div>
                <p class="briefing-summary">${htmlEscape(chapter.oneLineSummary || chapter.description)}</p>
                <div class="briefing-actions">
                    <button class="btn btn-primary" type="button" data-action="jump-model"><i class="fa-solid fa-diagram-project"></i> Xem mô hình</button>
                    <button class="btn btn-secondary" type="button" data-action="jump-missions"><i class="fa-solid fa-stopwatch"></i> Học nhanh</button>
                    <button class="btn btn-quiet" type="button" data-action="chapter-quiz"><i class="fa-solid fa-circle-question"></i> Làm quiz</button>
                </div>
            </aside>
        </section>

        <section class="mission-card-deck" id="missionCards" style="${getPlanetVisualStyle(chapter)}">
            ${buildMissionCardsHtml(chapter)}
        </section>

        <!-- Concept Model Section -->
        <section class="concept-model-section" id="conceptModelSection" style="margin-top: 24px;">
            <div class="section-heading">
                <h3>Mô hình khái niệm hành tinh</h3>
                <p>Khám phá cấu trúc lý luận dưới dạng tương tác trực quan (Click vào các nút để xem chi tiết).</p>
            </div>
            <div class="concept-model-container" style="${getChapterStyle(chapter)}">
                <h4 style="margin: 0 0 8px; font-family: var(--font-serif);">${htmlEscape(chapter.conceptModel.title)}</h4>
                <p class="concept-model-desc">${htmlEscape(chapter.conceptModel.description)}</p>
                <div class="model-workspace">
                    ${renderConceptModelHtml(chapter.conceptModel, chapter.colorTheme.accent, chapter.id)}
                </div>
                <div class="model-detail-panel" id="modelDetailPanel-${chapter.id}">
                    <h4 id="modelDetailTitle-${chapter.id}"></h4>
                    <p id="modelDetailDesc-${chapter.id}"></p>
                </div>
            </div>
        </section>

        <!-- Side-by-side Comparison Section -->
        ${chapter.comparison ? `
            <section class="comparison-section" style="margin-top: 24px;">
                <div class="section-heading">
                    <h3>So sánh đối chiếu lý luận</h3>
                    <p>${htmlEscape(chapter.comparison.title)} (Điểm khác biệt cốt lõi: ${htmlEscape(chapter.comparison.keyDifference)})</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 14px; ${window.innerWidth >= 640 ? 'grid-template-columns: 1fr 1fr;' : ''}">
                    <article class="glass-panel" style="padding: 16px; border-left: 4px solid var(--primary);">
                        <h4 style="margin: 0 0 10px; font-family: var(--font-serif); font-size: 1.05rem; color: var(--primary);">${htmlEscape(chapter.comparison.left.label)}</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                            ${chapter.comparison.left.points.map(pt => `<li style="margin-bottom: 6px;">${htmlEscape(pt)}</li>`).join('')}
                        </ul>
                    </article>
                    <article class="glass-panel" style="padding: 16px; border-left: 4px solid var(--success);">
                        <h4 style="margin: 0 0 10px; font-family: var(--font-serif); font-size: 1.05rem; color: var(--success);">${htmlEscape(chapter.comparison.right.label)}</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                            ${chapter.comparison.right.points.map(pt => `<li style="margin-bottom: 6px;">${htmlEscape(pt)}</li>`).join('')}
                        </ul>
                    </article>
                </div>
            </section>
        ` : ''}

        <!-- Mini Interactions Section -->
        ${chapter.id === 1 ? `
            <section class="interaction-section" style="margin-top: 24px;">
                <div class="section-heading">
                    <h3>Tương tác vũ trụ: Lắp ráp lý luận (Build the Concept)</h3>
                    <p>Lắp ráp các mảnh ghép lý luận để thắp sáng trạm tri thức khởi nguồn.</p>
                </div>
                <div class="interaction-workspace" id="interactionWorkspace-${chapter.id}" style="${getChapterStyle(chapter)}">
                    <div class="interaction-title">
                        <i class="fa-solid fa-gears"></i> ${htmlEscape(COSMIC_INTERACTIONS.buildConcept.question)}
                    </div>
                    <div class="interaction-options" style="margin-bottom: 12px; display: grid; gap: 8px;">
                        ${COSMIC_INTERACTIONS.buildConcept.options.map(opt => `
                            <button class="interaction-option-btn" type="button" data-option-id="${opt.id}" style="width: 100%; text-align: left;">
                                <i class="fa-regular fa-square" style="margin-right: 8px;"></i> ${htmlEscape(opt.text)}
                            </button>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary" type="button" id="submitBuildConceptBtn" style="width: 100%;">
                        Kiểm tra lắp ráp <i class="fa-solid fa-circle-check"></i>
                    </button>
                    <div class="interaction-feedback-panel" id="interactionFeedback-${chapter.id}"></div>
                </div>
            </section>
        ` : ''}

        ${chapter.id === 6 ? `
            <section class="interaction-section" style="margin-top: 24px;">
                <div class="section-heading">
                    <h3>Tương tác vũ trụ: Quyết định kịch bản (Decision Scenario)</h3>
                    <p>Đóng vai trò cán bộ địa phương để giải quyết các vấn đề thực tiễn phức tạp.</p>
                </div>
                <div class="interaction-workspace" id="interactionWorkspace-${chapter.id}" style="${getChapterStyle(chapter)}">
                    <div class="interaction-title">
                        <i class="fa-solid fa-user-astronaut"></i> ${htmlEscape(COSMIC_INTERACTIONS.decisionScenario.title)}
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.45;">
                        <strong>Tình huống:</strong> ${htmlEscape(COSMIC_INTERACTIONS.decisionScenario.situation)}
                    </p>
                    <div class="interaction-question">
                        <strong>Nhiệm vụ:</strong> ${htmlEscape(COSMIC_INTERACTIONS.decisionScenario.question)}
                    </div>
                    <div class="interaction-options" style="display: grid; gap: 8px;">
                        ${COSMIC_INTERACTIONS.decisionScenario.options.map(opt => `
                            <button class="interaction-option-btn decision-option-btn" type="button" data-option-id="${opt.id}" style="width: 100%; text-align: left;">
                                ${htmlEscape(opt.text)}
                            </button>
                        `).join('')}
                    </div>
                    <div class="interaction-feedback-panel" id="interactionFeedback-${chapter.id}"></div>
                </div>
            </section>
        ` : ''}

        <!-- Specific Planet Media Section -->
        ${chapter.media ? `
            <section class="planet-media-section" style="margin-top: 24px;">
                <div class="section-heading">
                    <h3>Trạm phát sóng bài giảng hành tinh</h3>
                </div>
                <div class="media-station-grid" style="margin-top: 14px;">
                    <article class="media-signal-card" style="${getChapterStyle(chapter)}" id="planetMediaCard-${chapter.id}">
                        <div class="media-thumbnail-placeholder">
                            <span class="media-planet-label" style="--station-accent: ${chapter.colorTheme.accent || '#38BDF8'}">${htmlEscape(chapter.planet.orbitLabel)}</span>
                            <span class="media-play-btn"><i class="fa-solid fa-play"></i></span>
                        </div>
                        <div class="media-card-body">
                            <span>${htmlEscape(chapter.media.sourceLabel || 'Media Station')}</span>
                            <h4>${htmlEscape(chapter.media.title)}</h4>
                            <p>${htmlEscape(chapter.media.description)}</p>
                        </div>
                    </article>
                </div>
            </section>
        ` : ''}

        <!-- Specific Planet Case Section -->
        ${chapter.caseStudy ? `
            <section class="planet-case-section" style="margin-top: 24px;">
                <div class="section-heading">
                    <h3>Tín hiệu thực tiễn Việt Nam</h3>
                </div>
                <div class="case-study-signal-card" style="${getChapterStyle(chapter)}">
                    <div class="case-signal-header">
                        <h4>${htmlEscape(chapter.caseStudy.title)}</h4>
                        <span class="radar-pulse-icon" style="--station-accent: ${chapter.colorTheme.accent || '#38BDF8'}; --station-bg: ${chapter.colorTheme.softBg || 'rgba(56,189,248,0.1)'}"><i class="fa-solid fa-satellite-dish"></i></span>
                    </div>
                    <div class="case-signal-body">
                        <p><strong>Tình huống:</strong> ${htmlEscape(chapter.caseStudy.situation)}</p>
                        <div class="case-signal-question">
                            <strong>Câu hỏi tự ngẫm:</strong> "${htmlEscape(chapter.caseStudy.question)}"
                        </div>
                        <div class="case-signal-hints">
                            <h5>Gợi ý phân tích (Liên hệ Việt Nam)</h5>
                            <ul>
                                ${(chapter.caseStudy.analysisHints || []).map(hint => `<li>${htmlEscape(hint)}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        ` : ''}

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

        <section class="space-panel-accordion" id="chapterDetails" style="${getChapterStyle(chapter)}">
            <details class="learn-accordion">
                <summary>Trạm 1: Mục tiêu hành tinh (Tổng quan)</summary>
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
                <summary>Trạm 2: Bản đồ kiến thức hành tinh (Chi tiết)</summary>
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
                <summary>Trạm 3: Thuật ngữ hành tinh (Quan trọng)</summary>
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
                <summary>Trạm 4: Tín hiệu thực tiễn Việt Nam</summary>
                <div class="accordion-body">
                    <div class="vietnam-box">${htmlEscape(chapter.vietnamConnection || '')}</div>
                </div>
            </details>

            <details class="learn-accordion">
                <summary>Trạm 5: Trắc nghiệm tự đánh giá & Ôn thi 60s</summary>
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

    // Concept model nodes click listeners
    const conceptContainer = scope.querySelector('.concept-model-container');
    if (conceptContainer) {
        attachConceptModelEvents(conceptContainer, chapter);
    }
    
    // Draw network lines if type is network
    const networkWorkspace = scope.querySelector('.model-network');
    if (networkWorkspace && chapter.conceptModel && chapter.conceptModel.type === 'network') {
        setTimeout(() => {
            drawNetworkLines(networkWorkspace, chapter.conceptModel, chapter.colorTheme.accent);
        }, 100);
    }

    // Specific planet media card modal click
    const planetMediaCard = scope.querySelector(`#planetMediaCard-${chapter.id}`);
    if (planetMediaCard && chapter.media) {
        planetMediaCard.addEventListener('click', () => {
            let bodyHtml = '';
            if (chapter.media.url) {
                bodyHtml = `
                    <div style="aspect-ratio: 16/9; width: 100%; overflow: hidden; border-radius: 8px; background: #000;">
                        <iframe src="${htmlEscape(chapter.media.url)}" style="width: 100%; height: 100%; border: none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                `;
            } else {
                bodyHtml = `
                    <div style="text-align: center; padding: 32px 16px; border: 1px dashed rgba(56, 189, 248, 0.25); border-radius: 8px; background: rgba(5, 8, 22, 0.4);">
                        <span style="font-size: 2.5rem; color: var(--station-accent, #38BDF8); display: block; margin-bottom: 16px; animation: playPulse 2.5s infinite ease-in-out;">
                            <i class="fa-solid fa-satellite-dish"></i>
                        </span>
                        <h4 style="margin: 0 0 8px; font-size: 1.05rem;">Tín hiệu bài giảng đang được thiết lập</h4>
                        <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
                            Nội dung bài giảng tóm tắt của <strong>${htmlEscape(chapter.planet.name)}</strong> đang được bổ sung và sẽ sớm phát sóng tại Trạm tín hiệu này.
                        </p>
                    </div>
                `;
            }
            showSpaceModal(chapter.media.title, bodyHtml);
        });
    }

    // Build the Concept (Chapter 1)
    if (chapter.id === 1) {
        const workspace = scope.querySelector(`#interactionWorkspace-${chapter.id}`);
        const optionBtns = workspace?.querySelectorAll('.interaction-option-btn');
        const submitBtn = workspace?.querySelector('#submitBuildConceptBtn');
        const feedbackPanel = workspace?.querySelector(`#interactionFeedback-${chapter.id}`);

        let selectedOptionIds = [];

        optionBtns?.forEach((btn) => {
            btn.addEventListener('click', () => {
                const optId = btn.getAttribute('data-option-id');
                if (selectedOptionIds.includes(optId)) {
                    selectedOptionIds = selectedOptionIds.filter(id => id !== optId);
                    btn.classList.remove('selected');
                    const icon = btn.querySelector('i');
                    if (icon) {
                        icon.className = 'fa-regular fa-square';
                    }
                } else {
                    selectedOptionIds.push(optId);
                    btn.classList.add('selected');
                    const icon = btn.querySelector('i');
                    if (icon) {
                        icon.className = 'fa-regular fa-square-check';
                    }
                }
            });
        });

        submitBtn?.addEventListener('click', () => {
            if (!feedbackPanel) return;
            const correctIds = ['opt1', 'opt2', 'opt3'];
            const isCorrect = selectedOptionIds.length === 3 && selectedOptionIds.every(id => correctIds.includes(id));

            feedbackPanel.className = 'interaction-feedback-panel show';
            if (isCorrect) {
                feedbackPanel.classList.add('success');
                feedbackPanel.innerHTML = `
                    <strong><i class="fa-solid fa-circle-check"></i> Lắp ráp thành công!</strong><br>
                    ${htmlEscape(COSMIC_INTERACTIONS.buildConcept.correctExplanation)}
                `;
                showToast("Lắp ráp mô-đun tri thức thành công!", "success");
            } else {
                feedbackPanel.classList.add('error');
                
                let feedbackText = "Lắp ráp chưa chính xác. Bạn cần chọn đúng 3 tiền đề trực tiếp lý luận & khoa học.";
                const incorrectSelected = selectedOptionIds.filter(id => !correctIds.includes(id));
                if (incorrectSelected.length > 0) {
                    const firstIncorrectOpt = COSMIC_INTERACTIONS.buildConcept.options.find(o => o.id === incorrectSelected[0]);
                    if (firstIncorrectOpt) {
                        feedbackText += `<br><span style="font-size: 0.78rem; opacity: 0.9;">Gợi ý: "${firstIncorrectOpt.text}" - ${firstIncorrectOpt.feedback}</span>`;
                    }
                }
                
                feedbackPanel.innerHTML = `
                    <strong><i class="fa-solid fa-circle-xmark"></i> Chưa hoàn thành!</strong><br>
                    ${feedbackText}
                `;
            }
        });
    }

    // Decision Scenario (Chapter 6)
    if (chapter.id === 6) {
        const workspace = scope.querySelector(`#interactionWorkspace-${chapter.id}`);
        const optionBtns = workspace?.querySelectorAll('.decision-option-btn');
        const feedbackPanel = workspace?.querySelector(`#interactionFeedback-${chapter.id}`);

        optionBtns?.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (!feedbackPanel) return;
                const optId = btn.getAttribute('data-option-id');
                const opt = COSMIC_INTERACTIONS.decisionScenario.options.find(o => o.id === optId);
                if (!opt) return;

                optionBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');

                feedbackPanel.className = 'interaction-feedback-panel show';
                if (opt.isCorrect) {
                    feedbackPanel.classList.add('success');
                    feedbackPanel.innerHTML = `
                        <strong><i class="fa-solid fa-circle-check"></i> Quyết định xuất sắc!</strong><br>
                        ${htmlEscape(opt.feedback)}
                    `;
                    showToast("Giải quyết kịch bản thực tiễn thành công!", "success");
                } else {
                    feedbackPanel.classList.add('error');
                    feedbackPanel.innerHTML = `
                        <strong><i class="fa-solid fa-triangle-exclamation"></i> Lựa chọn chưa tối ưu!</strong><br>
                        ${htmlEscape(opt.feedback)}
                    `;
                }
            });
        });
    }

    scope.querySelector('[data-action="jump-model"]')?.addEventListener('click', () => {
        scope.querySelector('#conceptModelSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    scope.querySelector('[data-action="jump-missions"]')?.addEventListener('click', () => {
        scope.querySelector('#missionCards')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    scope.querySelectorAll('[data-action="open-detail"]').forEach((button) => button.addEventListener('click', () => {
        const firstDetail = scope.querySelector('#chapterDetails details');
        if (firstDetail) firstDetail.open = true;
        firstDetail?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));

    scope.querySelectorAll('[data-action="chapter-quiz"]').forEach((button) => button.addEventListener('click', () => {
        switchTab('quiz');
        startQuizMode(chapter.id);
    }));

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
