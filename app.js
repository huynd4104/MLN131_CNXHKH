// Course Curriculum Data (Chủ nghĩa xã hội khoa học)
const chaptersData = [
    {
        id: 1,
        title: "Nhập môn Chủ nghĩa xã hội khoa học",
        core: "Chương này giới thiệu về sự ra đời, phát triển, đối tượng, phương pháp nghiên cứu và ý nghĩa của Chủ nghĩa xã hội khoa học (CNXHKH) - một trong ba bộ phận cấu thành chủ nghĩa Mác-Lênin. CNXHKH ra đời vào những năm 40 của thế kỷ XIX, đánh dấu bởi tác phẩm Tuyên ngôn của Đảng Cộng sản (1848) do C.Mác và Ph.Ăngghen soạn thảo. Nó phát triển qua các giai đoạn lịch sử của Marx-Engels, Lenin, và sự vận dụng sáng tạo trong thời kỳ hiện đại.",
        definitions: [
            { term: "Chủ nghĩa xã hội không tưởng", def: "Hệ thống các học thuyết phê phán chủ nghĩa tư bản, mong muốn xây dựng xã hội tốt đẹp hơn nhưng chưa chỉ ra được quy luật vận động khách quan của xã hội và chưa tìm được lực lượng cách mạng tiên phong thực hiện." },
            { term: "Đối tượng nghiên cứu", def: "Những quy luật và tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa." },
            { term: "Điều kiện khách quan ra đời", def: "Sự phát triển mạnh mẽ của phương thức sản xuất tư bản chủ nghĩa (Cách mạng công nghiệp) tạo ra mâu thuẫn giai cấp sâu sắc giữa Vô sản và Tư sản." }
        ],
        practice: "Việc giảng dạy và nghiên cứu CNXHKH tại Việt Nam đóng vai trò then chốt trong việc giáo dục chính trị, củng cố niềm tin vào định hướng xã hội chủ nghĩa của Đảng Cộng sản Việt Nam, đồng thời phản bác các luận điệu xuyên tạc của các thế lực thù địch."
    },
    {
        id: 2,
        title: "Sứ mệnh lịch sử của giai cấp công nhân",
        core: "Giai cấp công nhân là lực lượng sản xuất tiên tiến nhất, đại biểu cho phương thức sản xuất hiện đại. Sứ mệnh lịch sử thế giới của giai cấp công nhân là xóa bỏ chế độ tư bản chủ nghĩa, xóa bỏ chế độ người bóc lột người, giải phóng giai cấp mình và toàn nhân loại, xây dựng xã hội cộng sản chủ nghĩa.",
        definitions: [
            { term: "Giai cấp công nhân", def: "Tập đoàn xã hội ổn định, hình thành và phát triển cùng với quá trình của nền công nghiệp hiện đại; là lực lượng trực tiếp hoặc gián tiếp vận hành máy móc công nghiệp có trình độ xã hội hóa ngày càng cao." },
            { term: "Đặc điểm chính trị - xã hội", def: "Tính tiên phong cách mạng, tính tổ chức và kỷ luật cao, tính triệt để cách mạng, có tinh thần quốc tế chân chính." },
            { term: "Điều kiện chủ quan quyết định", def: "Sự ra đời của Đảng Cộng sản - đội tiên phong lãnh đạo giai cấp công nhân và nhân dân lao động đấu tranh cách mạng." }
        ],
        practice: "Hiện nay ở Việt Nam, giai cấp công nhân đang phát triển nhanh về số lượng và chất lượng, giữ vai trò đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và là cơ sở chính trị vững chắc của Đảng."
    },
    {
        id: 3,
        title: "Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội",
        core: "Chủ nghĩa xã hội là giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa. Thời kỳ quá độ lên CNXHKH là tất yếu khách quan đối với mọi quốc gia đi lên CNXH, là thời kỳ cải biến cách mạng sâu sắc toàn diện trên tất cả các lĩnh vực để xây dựng các cơ sở vật chất, kỹ thuật và tinh thần của xã hội mới.",
        definitions: [
            { term: "Thời kỳ quá độ", def: "Thời kỳ lịch sử đặc thù đan xen giữa các yếu tố của xã hội cũ (tư bản chủ nghĩa) và xã hội mới (xã hội chủ nghĩa) đang hình thành, phát sinh trên tất cả các mặt kinh tế, chính trị, văn hóa, xã hội." },
            { term: "Quá độ trực tiếp", def: "Đi lên CNXH từ các nước tư bản chủ nghĩa phát triển cao (chưa có tiền lệ lịch sử)." },
            { term: "Quá độ gián tiếp", def: "Đi lên CNXH từ các nước tiền tư bản hoặc tư bản trung bình, bỏ qua chế độ tư bản chủ nghĩa (như thực tế ở Việt Nam, Liên Xô cũ, Trung Quốc)." }
        ],
        practice: "Việt Nam quá độ lên chủ nghĩa xã hội theo phương thức gián tiếp: bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa."
    },
    {
        id: 4,
        title: "Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa",
        core: "Dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất so với dân chủ tư sản, phản ánh quyền lực thực sự thuộc về nhân dân. Nhà nước xã hội chủ nghĩa là công cụ chuyên chính vô sản, mang bản chất của giai cấp công nhân, vừa trấn áp kẻ thù vừa tổ chức xây dựng xã hội mới.",
        definitions: [
            { term: "Dân chủ xã hội chủ nghĩa", def: "Nền dân chủ phản ánh bản chất chính trị lãnh đạo của giai cấp công nhân, có cơ sở kinh tế là chế độ công hữu về tư liệu sản xuất chủ yếu, bảo đảm nhân dân là chủ thể quyền lực thực sự." },
            { term: "Nhà nước pháp quyền XHCN", def: "Nhà nước quản lý xã hội bằng hiến pháp và pháp luật, đặt dưới sự lãnh đạo của Đảng Cộng sản, hướng tới mục tiêu tối cao là phục vụ nhân dân." },
            { term: "Bản chất kinh tế của dân chủ XHCN", def: "Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện nguyên tắc phân phối theo lao động là chủ đạo." }
        ],
        practice: "Việt Nam không ngừng hoàn thiện nền dân chủ xã hội chủ nghĩa và xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng Cộng sản."
    },
    {
        id: 5,
        title: "Cơ cấu xã hội - giai cấp và liên minh giai cấp",
        core: "Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan và mối quan hệ giữa chúng trong hệ thống sản xuất. Trong thời kỳ quá độ, liên minh giai cấp giữa công nhân, nông dân và tầng lớp trí thức là nhân tố quyết định thắng lợi của sự nghiệp xây dựng chủ nghĩa xã hội.",
        definitions: [
            { term: "Cơ cấu xã hội - giai cấp", def: "Sự phân chia dân cư thành các giai cấp, tầng lớp khác nhau dựa trên các quan hệ sản xuất nhất định, có vị trí và vai trò khác nhau trong hệ thống phân công lao động xã hội." },
            { term: "Liên minh công - nông - trí thức", def: "Sự liên kết chặt chẽ về chính trị, kinh tế, văn hóa và tư tưởng giữa giai cấp công nhân với nông dân và trí thức dưới sự lãnh đạo của Đảng Cộng sản." },
            { term: "Nội dung liên minh kinh tế", def: "Sự hợp tác giữa công nghiệp - nông nghiệp - khoa học kỹ thuật nhằm đáp ứng nhu cầu lợi ích kinh tế khách quan của các giai cấp, tầng lớp liên minh." }
        ],
        practice: "Tại Việt Nam, liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức luôn được xác định là nền tảng vững chắc của khối Đại đoàn kết toàn dân tộc."
    },
    {
        id: 6,
        title: "Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ",
        core: "Dân tộc và tôn giáo là những vấn đề nhạy cảm, phức tạp và có tầm ảnh hưởng lâu dài. Giải quyết đúng đắn vấn đề dân tộc dựa trên Cương lĩnh dân tộc của Lênin (Bình đẳng, Tự quyết, Liên hiệp) và thực hiện chính sách tự do tín ngưỡng tôn giáo lành mạnh, đoàn kết các tôn giáo dưới mái nhà chung Tổ quốc.",
        definitions: [
            { term: "Cương lĩnh dân tộc của Lênin", def: "Ba nguyên tắc cơ bản: Các dân tộc hoàn toàn bình đẳng; Các dân tộc được quyền tự quyết; Liên hiệp công nhân tất cả các dân tộc." },
            { term: "Bản chất của tôn giáo", def: "Một hình thái ý thức xã hội phản ánh một cách hoang đường, hư ảo lực lượng bên ngoài chi phối cuộc sống con người vào thế giới siêu nhiên." },
            { term: "Nguyên tắc giải quyết tôn giáo", def: "Tôn trọng tự do tín ngưỡng và không tín ngưỡng; Đoàn kết tôn giáo đồng hành với dân tộc; Phân biệt mặt chính trị và tư tưởng; Khắc phục dần ảnh hưởng tiêu cực của tôn giáo." }
        ],
        practice: "Chính sách của Việt Nam luôn tôn trọng quyền bình đẳng giữa các dân tộc anh em và bảo đảm quyền tự do tín ngưỡng, tôn giáo của người dân, đồng thời kiên quyết đấu tranh chống lợi dụng dân tộc, tôn giáo chống phá đất nước."
    },
    {
        id: 7,
        title: "Vấn đề gia đình trong thời kỳ quá độ",
        core: "Gia đình là tế bào của xã hội, cái nôi nuôi dưỡng nhân cách và là pháo đài vững chắc bảo tồn các giá trị văn hóa tốt đẹp. Trong thời kỳ quá độ, gia đình có sự biến đổi sâu sắc về quy mô, chức năng và các mối quan hệ nhưng vẫn đóng vai trò nền tảng phát triển xã hội lành mạnh.",
        definitions: [
            { term: "Gia đình", def: "Hình thức cộng đồng xã hội đặc biệt, được hình thành trên cơ sở quan hệ hôn nhân và huyết thống hoặc quan hệ nuôi dưỡng, gắn bó bởi các quyền lợi và nghĩa vụ pháp lý, đạo đức giữa các thành viên." },
            { term: "Bốn chức năng cơ bản", def: "Tái sản xuất ra con người; Nuôi dưỡng, giáo dục; Kinh tế và tổ chức tiêu dùng; Thỏa mãn nhu cầu tâm - sinh lý và duy trì tình cảm." },
            { term: "Cơ sở xây dựng gia đình mới", def: "Cơ sở kinh tế - xã hội (chế độ công hữu); Cơ sở chính trị - xã hội (nhà nước nhân dân); Cơ sở văn hóa - tư tưởng (hệ tư tưởng mới); Chế độ hôn nhân tiến bộ (tự nguyện, một vợ một chồng, bình đẳng)." }
        ],
        practice: "Việt Nam hiện nay rất chú trọng xây dựng gia đình văn hóa, thúc đẩy bình đẳng giới, bảo vệ trẻ em và chăm sóc người cao tuổi trước những thách thức biến đổi gia đình trong thời đại số."
    }
];

// Quiz Questions Data
const quizQuestions = [
    {
        id: 1,
        chapterId: 1,
        category: "Chương 1: Nhập môn CNXHKH",
        question: "Chủ nghĩa xã hội khoa học ra đời vào thời gian nào?",
        options: [
            "Giữa thế kỷ XVIII",
            "Đầu thế kỷ XIX",
            "Giữa thế kỷ XIX",
            "Đầu thế kỷ XX"
        ],
        correctAnswer: 2,
        explanation: "Chủ nghĩa xã hội khoa học ra đời vào những năm 40 của thế kỷ XIX (năm 1848 với sự xuất hiện của tác phẩm Tuyên ngôn của Đảng Cộng sản)."
    },
    {
        id: 2,
        chapterId: 2,
        category: "Chương 2: Giai cấp công nhân",
        question: "Ai là người phát hiện và luận giải một cách khoa học về sứ mệnh lịch sử của giai cấp công nhân?",
        options: [
            "C.Mác và Ph.Ăngghen",
            "V.I.Lênin",
            "Hêghen và Phoiơbắc",
            "Các nhà xã hội chủ nghĩa không tưởng Pháp"
        ],
        correctAnswer: 0,
        explanation: "C.Mác và Ph.Ăngghen là những người đầu tiên phát hiện và luận giải một cách khoa học về sứ mệnh lịch sử thế giới của giai cấp công nhân dựa trên lý luận duy vật lịch sử."
    },
    {
        id: 3,
        chapterId: 3,
        category: "Chương 3: Thời kỳ quá độ",
        question: "Đặc điểm nổi bật nhất của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
            "Giai cấp công nhân đã hoàn thành việc xóa bỏ giai cấp hoàn toàn",
            "Sự tồn tại đan xen giữa những nhân tố của xã hội mới và tàn dư của xã hội cũ",
            "Nền kinh tế hoàn toàn phát triển theo quan hệ xã hội chủ nghĩa đồng bộ",
            "Không còn bất kỳ hình thức đấu tranh giai cấp nào"
        ],
        correctAnswer: 1,
        explanation: "Đặc điểm nổi bật nhất của thời kỳ quá độ là sự tồn tại đan xen, đấu tranh giữa những mảnh vụn, nhân tố của xã hội mới (XHCN) đang phát sinh và tàn dư của xã hội cũ (TBCN) trên tất cả các mặt."
    },
    {
        id: 4,
        chapterId: 4,
        category: "Chương 4: Dân chủ & Nhà nước",
        question: "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa được thể hiện như thế nào?",
        options: [
            "Sự thỏa hiệp chính trị giữa các giai cấp thống trị cũ và mới",
            "Thực hiện đa nguyên chính trị, đa đảng đối lập tự do",
            "Sự lãnh đạo của giai cấp công nhân thông qua Đảng Cộng sản nhằm bảo đảm quyền lực thực sự thuộc về nhân dân",
            "Sự cai trị độc quyền tư sản của bộ máy chính quyền quan liêu"
        ],
        correctAnswer: 2,
        explanation: "Bản chất chính trị của dân chủ XHCN là sự lãnh đạo chính trị của giai cấp công nhân thông qua Đảng Cộng sản đối với toàn xã hội, nhằm thực hiện quyền lực và lợi ích của toàn thể nhân dân lao động."
    },
    {
        id: 5,
        chapterId: 5,
        category: "Chương 5: Cơ cấu xã hội & Liên minh",
        question: "Nội dung liên minh nào giữ vai trò quyết định nhất, là nền tảng vật chất vững chắc nhất của liên minh công - nông - trí thức?",
        options: [
            "Liên minh về chính trị",
            "Liên minh về kinh tế",
            "Liên minh về văn hóa - xã hội",
            "Liên minh về tư tưởng lý luận"
        ],
        correctAnswer: 1,
        explanation: "Liên minh về kinh tế là nội dung quyết định nhất vì nó là cơ sở vật chất - kỹ thuật, đáp ứng các lợi ích kinh tế thiết thực hàng ngày của công nhân, nông dân và trí thức."
    },
    {
        id: 6,
        chapterId: 6,
        category: "Chương 6: Dân tộc & Tôn giáo",
        question: "Nguyên tắc nào sau đây KHÔNG thuộc Cương lĩnh dân tộc của V.I.Lênin?",
        options: [
            "Các dân tộc hoàn toàn bình đẳng",
            "Các dân tộc được quyền tự quyết",
            "Liên hiệp công nhân tất cả các dân tộc",
            "Đồng hóa các dân tộc thiểu số vào dân tộc đa số"
        ],
        correctAnswer: 3,
        explanation: "Cương lĩnh dân tộc của V.I.Lênin gồm 3 nội dung: Bình đẳng dân tộc, Quyền tự quyết dân tộc, và Liên hiệp công nhân tất cả các dân tộc. Đồng hóa dân tộc là chính sách phản động."
    },
    {
        id: 7,
        chapterId: 7,
        category: "Chương 7: Vấn đề Gia đình",
        question: "Chức năng nào được coi là chức năng đặc thù, tự nhiên và không thể thay thế của gia đình?",
        options: [
            "Chức năng nuôi dưỡng, giáo dục con cái",
            "Chức năng tái sản xuất ra con người",
            "Chức năng kinh tế và tổ chức tiêu dùng",
            "Chức năng thỏa mãn nhu cầu tâm sinh lý và duy trì tình cảm"
        ],
        correctAnswer: 1,
        explanation: "Tái sản xuất ra con người (sinh sản, bảo tồn nòi giống) là chức năng đặc thù tự nhiên của gia đình, không một tổ chức xã hội nào khác có thể thay thế được."
    }
];

// App State Management
let appState = {
    currentTab: 'overview',
    readChapters: [], // Array of chapter IDs (numbers)
    selectedChapterIndex: null,
    
    // Quiz State
    quizActive: false,
    quizCurrentQuestionIndex: 0,
    quizSelectedAnswer: null,
    quizIsChecked: false,
    quizResults: {
        correct: 0,
        incorrect: 0,
        completed: 0,
        answers: [] // Array of selected option indexes or nulls
    },
    
    // UI Settings
    theme: 'dark' // 'dark' or 'light'
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadStateFromStorage();
    initTheme();
    initRouting();
    initOverviewTab();
    initChaptersTab();
    initQuizTab();
    initGlossaryTab();
    initGlobalSearch();
    updateUIProgress();
});

// Load state from LocalStorage
function loadStateFromStorage() {
    const savedState = localStorage.getItem('mln131_portal_state');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            appState.readChapters = parsed.readChapters || [];
            appState.quizResults = parsed.quizResults || { correct: 0, incorrect: 0, completed: 0, answers: [] };
            appState.theme = parsed.theme || 'dark';
        } catch (e) {
            console.error("Error parsing saved state:", e);
        }
    }
}

// Save state to LocalStorage
function saveStateToStorage() {
    const stateToSave = {
        readChapters: appState.readChapters,
        quizResults: appState.quizResults,
        theme: appState.theme
    };
    localStorage.setItem('mln131_portal_state', JSON.stringify(stateToSave));
}

// Theme management
function initTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeToggleBtn');
    
    if (appState.theme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            appState.theme = 'light';
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            appState.theme = 'dark';
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
        saveStateToStorage();
    });
}

// Tab navigation routing
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
    
    // Update active nav button
    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update visible tab pane
    document.querySelectorAll('.tab-pane').forEach(pane => {
        if (pane.id === tabId) {
            pane.classList.add('active');
        } else {
            pane.classList.remove('active');
        }
    });

    // Custom headers per tab
    const title = document.getElementById('pageTitle');
    const subtitle = document.getElementById('pageSubtitle');
    
    if (tabId === 'overview') {
        title.textContent = 'Cổng Học Tập MLN131';
        subtitle.textContent = 'Chủ nghĩa xã hội khoa học - Lý luận & Thực tiễn';
        initOverviewTab();
    } else if (tabId === 'chapters') {
        title.textContent = 'Giáo Trình Học Phần';
        subtitle.textContent = 'Xem chi tiết nội dung cốt lõi của từng chương';
        if (appState.selectedChapterIndex !== null) {
            selectChapter(appState.selectedChapterIndex);
        }
    } else if (tabId === 'quiz') {
        title.textContent = 'Đánh Giá Năng Lực';
        subtitle.textContent = 'Hệ thống câu hỏi luyện thi trắc nghiệm học phần';
        updateQuizStatsUI();
    } else if (tabId === 'glossary') {
        title.textContent = 'Thuật Ngữ Trọng Tâm';
        subtitle.textContent = 'Từ điển tra cứu nhanh các khái niệm học thuật';
        filterGlossary('');
    }
}

// Global search bar
function initGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) return;

        // If we are on glossary tab, redirect to glossary filter
        if (appState.currentTab === 'glossary') {
            document.getElementById('glossaryFilterInput').value = e.target.value;
            filterGlossary(query);
        } else {
            // Auto switch to glossary tab to show results if user searches something globally
            switchTab('glossary');
            document.getElementById('glossaryFilterInput').value = e.target.value;
            filterGlossary(query);
        }
    });
}

// Overview tab rendering
function initOverviewTab() {
    const grid = document.getElementById('chapterSummaryGrid');
    grid.innerHTML = '';
    
    chaptersData.forEach((chapter, index) => {
        const isCompleted = appState.readChapters.includes(chapter.id);
        const card = document.createElement('div');
        card.className = `card-item ${isCompleted ? 'completed' : ''}`;
        
        card.innerHTML = `
            <div class="card-badge-row">
                <span class="chapter-no">Chương ${chapter.id}</span>
                <span class="status-badge">${isCompleted ? '<i class="fa-solid fa-check"></i> Đã đọc' : 'Chưa đọc'}</span>
            </div>
            <h4>${chapter.title}</h4>
            <p>${chapter.core}</p>
        `;
        
        card.addEventListener('click', () => {
            appState.selectedChapterIndex = index;
            switchTab('chapters');
        });
        
        grid.appendChild(card);
    });
    
    updateUIProgress();
}

// Progress calculation and UI update
function updateUIProgress() {
    const readCount = appState.readChapters.length;
    const totalCount = chaptersData.length;
    const readPercent = Math.round((readCount / totalCount) * 100);
    
    // Update progress texts
    document.getElementById('completedCount').textContent = `${readCount}/${totalCount}`;
    document.getElementById('progressPercent').textContent = `${readPercent}%`;
    
    // Update SVG circle stroke dashoffset
    // Perimeter = 345.5. Offset = 345.5 - (345.5 * percent / 100)
    const circle = document.getElementById('progressCircleVal');
    if (circle) {
        const offset = 345.5 - (345.5 * readPercent / 100);
        circle.style.strokeDashoffset = offset;
    }
    
    // Update Quiz Score on overview card
    const totalQ = quizQuestions.length;
    const correctQ = appState.quizResults.correct;
    const scorePercent = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 0;
    document.getElementById('quizScore').textContent = `${scorePercent}%`;
}

// Chapters tab rendering and actions
function initChaptersTab() {
    const listContainer = document.getElementById('chapterSelectorList');
    listContainer.innerHTML = '';
    
    chaptersData.forEach((chapter, index) => {
        const isCompleted = appState.readChapters.includes(chapter.id);
        const item = document.createElement('div');
        item.className = `list-chapter-item ${isCompleted ? 'completed' : ''}`;
        item.setAttribute('data-index', index);
        
        item.innerHTML = `
            <span class="chapter-num">Chương ${chapter.id}</span>
            <span class="chapter-title">${chapter.title}</span>
        `;
        
        item.addEventListener('click', () => {
            selectChapter(index);
        });
        
        listContainer.appendChild(item);
    });
    
    // Action: Mark Read Button
    const markReadBtn = document.getElementById('markReadBtn');
    markReadBtn.addEventListener('click', () => {
        if (appState.selectedChapterIndex === null) return;
        const currentChapter = chaptersData[appState.selectedChapterIndex];
        
        if (appState.readChapters.includes(currentChapter.id)) {
            // Unmark as read
            appState.readChapters = appState.readChapters.filter(id => id !== currentChapter.id);
            markReadBtn.innerHTML = '<i class="fa-regular fa-square-check"></i> Đánh dấu đã đọc';
            markReadBtn.classList.remove('btn-success');
            markReadBtn.classList.add('btn-secondary');
        } else {
            // Mark as read
            appState.readChapters.push(currentChapter.id);
            markReadBtn.innerHTML = '<i class="fa-solid fa-square-check"></i> Đã đọc';
            markReadBtn.classList.remove('btn-secondary');
            markReadBtn.classList.add('btn-success');
        }
        
        saveStateToStorage();
        updateUIProgress();
        
        // Re-render side list and main view
        initChaptersTab();
        selectChapter(appState.selectedChapterIndex);
    });
    
    // Action: Take Quiz For Chapter
    const takeQuizBtn = document.getElementById('takeQuizForChapter');
    takeQuizBtn.addEventListener('click', () => {
        if (appState.selectedChapterIndex === null) return;
        const currentChapter = chaptersData[appState.selectedChapterIndex];
        
        // Find if there is a question matching this chapter, and jump to it in the quiz tab
        const questionIndex = quizQuestions.findIndex(q => q.chapterId === currentChapter.id);
        
        switchTab('quiz');
        if (questionIndex !== -1) {
            startQuizAtQuestion(questionIndex);
        } else {
            startQuizAtQuestion(0);
        }
    });
}

function selectChapter(index) {
    appState.selectedChapterIndex = index;
    
    // Highlight list item
    document.querySelectorAll('.list-chapter-item').forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Show content body
    document.getElementById('emptyContentViewer').classList.add('hidden');
    const body = document.getElementById('chapterBody');
    body.classList.remove('hidden');
    
    const chapter = chaptersData[index];
    
    // Populate details
    document.getElementById('viewChapterBadge').textContent = `Chương ${chapter.id}`;
    document.getElementById('viewChapterTitle').textContent = chapter.title;
    document.getElementById('viewChapterCore').textContent = chapter.core;
    document.getElementById('viewChapterPractice').textContent = chapter.practice;
    
    // Populate definitions
    const defContainer = document.getElementById('viewChapterDefinitions');
    defContainer.innerHTML = '';
    chapter.definitions.forEach(d => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${d.term}:</strong> ${d.def}`;
        defContainer.appendChild(li);
    });
    
    // Update read button text/state
    const isCompleted = appState.readChapters.includes(chapter.id);
    const markReadBtn = document.getElementById('markReadBtn');
    const readStatusBadge = document.getElementById('readStatusBadge');
    
    if (isCompleted) {
        markReadBtn.innerHTML = '<i class="fa-solid fa-square-check"></i> Đã đọc';
        markReadBtn.className = 'btn btn-success';
        readStatusBadge.className = 'read-status-indicator read';
        readStatusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Đã học xong';
    } else {
        markReadBtn.innerHTML = '<i class="fa-regular fa-square-check"></i> Đánh dấu đã đọc';
        markReadBtn.className = 'btn btn-secondary';
        readStatusBadge.className = 'read-status-indicator';
        readStatusBadge.innerHTML = '<i class="fa-regular fa-circle"></i> Chưa đọc';
    }
}

// Quiz Tab management
function initQuizTab() {
    document.getElementById('startQuizBtn').addEventListener('click', () => {
        startQuizAtQuestion(0);
    });
    
    document.getElementById('restartQuizBtn').addEventListener('click', () => {
        resetQuiz();
        startQuizAtQuestion(0);
    });
    
    document.getElementById('resetQuizBtn').addEventListener('click', () => {
        resetQuiz();
        switchTab('quiz');
    });
    
    document.getElementById('nextQuestionBtn').addEventListener('click', () => {
        handleQuizNext();
    });
}

function updateQuizStatsUI() {
    document.getElementById('quizTotalQuestions').textContent = quizQuestions.length;
    document.getElementById('quizCompletedCount').textContent = appState.quizResults.completed;
    document.getElementById('quizCorrectCount').textContent = appState.quizResults.correct;
    document.getElementById('quizIncorrectCount').textContent = appState.quizResults.incorrect;
}

function resetQuiz() {
    appState.quizActive = false;
    appState.quizCurrentQuestionIndex = 0;
    appState.quizSelectedAnswer = null;
    appState.quizIsChecked = false;
    appState.quizResults = {
        correct: 0,
        incorrect: 0,
        completed: 0,
        answers: Array(quizQuestions.length).fill(null)
    };
    
    saveStateToStorage();
    updateUIProgress();
    updateQuizStatsUI();
    
    // Show intro screen, hide active and results
    document.getElementById('quizIntro').classList.remove('hidden');
    document.getElementById('quizActive').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
}

function startQuizAtQuestion(index) {
    appState.quizActive = true;
    appState.quizCurrentQuestionIndex = index;
    appState.quizSelectedAnswer = null;
    appState.quizIsChecked = false;
    
    // Hide intro & results, show active quiz window
    document.getElementById('quizIntro').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    document.getElementById('quizActive').classList.remove('hidden');
    
    renderCurrentQuestion();
}

function renderCurrentQuestion() {
    const question = quizQuestions[appState.quizCurrentQuestionIndex];
    
    // Progress fill
    const percent = Math.round((appState.quizCurrentQuestionIndex / quizQuestions.length) * 100);
    document.getElementById('quizProgressFill').style.width = `${percent}%`;
    
    // Text indicators
    document.getElementById('questionNumberIndicator').textContent = `Câu ${appState.quizCurrentQuestionIndex + 1}/${quizQuestions.length}`;
    document.getElementById('questionCategoryIndicator').textContent = question.category;
    document.getElementById('activeQuestionText').textContent = question.question;
    
    // Reset explanation
    document.getElementById('quizExplanationCard').classList.add('hidden');
    
    // Reset next button
    const nextBtn = document.getElementById('nextQuestionBtn');
    nextBtn.disabled = true;
    nextBtn.innerHTML = 'Kiểm tra câu trả lời';
    
    // Options
    const optionsContainer = document.getElementById('quizOptionsContainer');
    optionsContainer.innerHTML = '';
    
    const optionLetters = ['A', 'B', 'C', 'D'];
    question.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'quiz-option';
        div.innerHTML = `
            <span class="option-letter">${optionLetters[idx]}</span>
            <span class="option-text">${opt}</span>
        `;
        
        div.addEventListener('click', () => {
            if (appState.quizIsChecked) return; // Cannot change after checking
            
            // Highlight this option
            document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            
            appState.quizSelectedAnswer = idx;
            nextBtn.disabled = false;
        });
        
        optionsContainer.appendChild(div);
    });
}

function handleQuizNext() {
    const question = quizQuestions[appState.quizCurrentQuestionIndex];
    const nextBtn = document.getElementById('nextQuestionBtn');
    
    if (!appState.quizIsChecked) {
        // Step 1: Check the answer
        appState.quizIsChecked = true;
        const selected = appState.quizSelectedAnswer;
        const correct = question.correctAnswer;
        
        const optionsElements = document.querySelectorAll('.quiz-option');
        
        // Show correct/incorrect styles
        optionsElements.forEach((el, idx) => {
            el.classList.remove('selected');
            if (idx === correct) {
                el.classList.add('correct');
            } else if (idx === selected) {
                el.classList.add('incorrect');
            }
        });
        
        // Track score
        const isCorrect = (selected === correct);
        if (isCorrect) {
            appState.quizResults.correct++;
        } else {
            appState.quizResults.incorrect++;
        }
        appState.quizResults.completed++;
        appState.quizResults.answers[appState.quizCurrentQuestionIndex] = selected;
        
        saveStateToStorage();
        updateQuizStatsUI();
        updateUIProgress();
        
        // Show explanation
        const explanationCard = document.getElementById('quizExplanationCard');
        const explanationTitle = document.getElementById('explanationTitle');
        const explanationText = document.getElementById('explanationText');
        
        explanationTitle.innerHTML = isCorrect 
            ? '<i class="fa-solid fa-circle-check" style="color: var(--success)"></i> Trả lời chính xác!' 
            : '<i class="fa-solid fa-circle-xmark" style="color: var(--danger)"></i> Trả lời sai rồi!';
        explanationText.textContent = question.explanation;
        explanationCard.classList.remove('hidden');
        
        // Update next button text
        if (appState.quizCurrentQuestionIndex === quizQuestions.length - 1) {
            nextBtn.innerHTML = 'Xem kết quả <i class="fa-solid fa-trophy"></i>';
        } else {
            nextBtn.innerHTML = 'Câu tiếp theo <i class="fa-solid fa-chevron-right"></i>';
        }
    } else {
        // Step 2: Go to next question or show results
        if (appState.quizCurrentQuestionIndex === quizQuestions.length - 1) {
            showQuizResults();
        } else {
            appState.quizCurrentQuestionIndex++;
            appState.quizSelectedAnswer = null;
            appState.quizIsChecked = false;
            renderCurrentQuestion();
        }
    }
}

function showQuizResults() {
    document.getElementById('quizActive').classList.add('hidden');
    const resultsPane = document.getElementById('quizResults');
    resultsPane.classList.remove('hidden');
    
    const correct = appState.quizResults.correct;
    const total = quizQuestions.length;
    
    document.getElementById('finalScoreVal').textContent = `${correct}/${total}`;
    
    const feedback = document.getElementById('finalScoreFeedback');
    const ratio = correct / total;
    if (ratio === 1) {
        feedback.textContent = "Tuyệt vời! Bạn đã đạt điểm tuyệt đối. Bạn sẵn sàng cho kỳ thi rồi đấy!";
    } else if (ratio >= 0.8) {
        feedback.textContent = "Kết quả rất tốt! Hãy tiếp tục phát huy và đọc thêm các phần chưa nắm rõ.";
    } else if (ratio >= 0.5) {
        feedback.textContent = "Khá tốt! Đọc thêm các chương và hoàn thành việc đọc để tăng điểm số nhé.";
    } else {
        feedback.textContent = "Cố gắng thêm chút nữa! Đọc kỹ nội dung cốt lõi của các chương học và thử lại nhé.";
    }
}

// Glossary Tab management
function initGlossaryTab() {
    // Generate static list of terms from all chapters
    let allTerms = [];
    chaptersData.forEach(chapter => {
        chapter.definitions.forEach(d => {
            allTerms.push({
                chapter: chapter.title,
                term: d.term,
                def: d.def
            });
        });
    });
    
    const filterInput = document.getElementById('glossaryFilterInput');
    filterInput.addEventListener('input', (e) => {
        filterGlossary(e.target.value.toLowerCase().trim());
    });
}

function filterGlossary(query) {
    let allTerms = [];
    chaptersData.forEach(chapter => {
        chapter.definitions.forEach(d => {
            allTerms.push({
                chapter: `Chương ${chapter.id}: ${chapter.title}`,
                term: d.term,
                def: d.def
            });
        });
    });
    
    const grid = document.getElementById('glossaryListGrid');
    grid.innerHTML = '';
    
    const filtered = allTerms.filter(item => 
        item.term.toLowerCase().includes(query) || 
        item.def.toLowerCase().includes(query) ||
        item.chapter.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        document.getElementById('glossaryEmptyState').classList.remove('hidden');
    } else {
        document.getElementById('glossaryEmptyState').classList.add('hidden');
        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'glossary-card';
            card.innerHTML = `
                <span class="chapter-no" style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px; display:block;">${item.chapter}</span>
                <h4>${item.term}</h4>
                <p>${item.def}</p>
            `;
            grid.appendChild(card);
        });
    }
}
