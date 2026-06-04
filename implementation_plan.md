# Implementation Plan: MLN131 Learning Journey

## 0. Pham vi va nguyen tac dung

Tai lieu nay thay the huong polish ky thuat nho bang ke hoach redesign toan dien trai nghiem hoc tap cho `MLN131_CNXHKH`.

Muc tieu cua dot tiep theo la bien website thanh **"MLN131 Learning Journey - Hanh trinh kham pha Chu nghia xa hoi khoa hoc"**: dep hon, nhe chu hon, mobile-first, co cam giac nhu mot hanh trinh tri thuc xa hoi thay vi mot dashboard/ban chep giao trinh.

Sau khi viet xong ke hoach nay se **dung lai de duyet**, chua sua `index.html`, `style.css`, `js/app.js` hay `js/data.js`.

## 1. Phan tich van de hien tai

### 1.1. Cam giac san pham chua dung

- Website hien tai dang nghieng ve **dashboard hoc tap / archive toi mau**: sidebar, header, search, stat cards, progress circle, list chuong, mindmap, timeline.
- Concept "History Archive" va nen toi lam giao dien co cam giac nang, hoc thuat, gan voi tai lieu hon la mot hanh trinh hoc de tiep can.
- Hero hien tai co nhieu van ban dai, thong ke, mo ta mon hoc theo kieu gioi thieu hoc phan, chua tao du duoc cam giac bat dau mot hanh trinh.
- Cac block "Muc tieu hoc phan", "Noi dung tom tat", "Cau hoi tu luan" dang hien thi voi mat do chu cao.

### 1.2. Tong quan chuong bi qua tai

- Chapter card dang hien thi title dai, description dai va cac muc I/II/III cat ngan. Cach nay lam card giong muc luc giao trinh.
- Nguoi hoc nhin tong quan 7 chuong nhung van gap qua nhieu thong tin tren mot man hinh.
- Thieu "tram tri thuc" co ban sac rieng: station name, icon, mau rieng, cau hoi dan nhap, keyword ngan.

### 1.3. Trang chi tiet chuong chua co nhip hoc

- Khi chon chuong, noi dung objectives, section summary, key points, terms, Vietnam connection va essay questions duoc do ra theo luong lon.
- Thieu cau truc micro-learning mac dinh: cau hoi trung tam, 3 phut nam chuong, 5 keyword, 3 y chinh, vi du gan doi song, tu kiem tra.
- Accordion/chia tab chua du ro de giam tai nhan thuc.

### 1.4. Mobile chua la diem xuat phat

- CSS hien tai co responsive o `1024px` va `768px`, nhung desktop-first: sidebar chuyen thanh bottom nav sau do.
- Mobile chapter viewer dung layout slide voi chieu cao `calc(100vh - 190px)`, de gay cam giac bi dong khung, kho doc noi dung dai, va co nguy co bi bottom nav che noi dung cuoi.
- Mindmap va timeline co cau truc desktop truoc, khi xuong mobile chi dieu chinh vi tri, chua chuyen doi thanh knowledge branch/list that su.

### 1.5. Doi chieu tinh than MLN122_web

Repo mau `MLN122_web` co nhung diem can hoc theo, khong copy:

- Co metaphor ro rang: 12 thang/hanh trinh su kien, moi item co danh tinh rieng.
- Homepage it chu, dung hero lon, stats gon, grid cards co icon/emoji/tag/year, hover va motion tao cam giac song dong.
- Cac trang chi tiet co cau truc story: header ro, section ngan, core ideas, interactive module/game/visual block.
- Motion duoc dung de tao nhip, khong phai de trang tri qua muc.
- Moi chu de co mau/nhan dien rieng, khien nguoi hoc thay dang "kham pha" thay vi doc tai lieu.

Ket luan: MLN131 can giu do chinh xac noi dung, nhung doi cach trinh bay thanh **progressive disclosure + visual learning path + micro-learning cards**.

## 2. Dinh huong thiet ke moi

### 2.1. Concept chinh

**MLN131 Learning Journey - Hanh trinh kham pha Chu nghia xa hoi khoa hoc**

Nguoi hoc di qua 7 "tram tri thuc":

1. Tram 1: Khoi nguon ly luan
2. Tram 2: Giai cap cong nhan
3. Tram 3: Con duong qua do
4. Tram 4: Dan chu & Nha nuoc
5. Tram 5: Co cau xa hoi
6. Tram 6: Dan toc & Ton giao
7. Tram 7: Gia dinh Viet Nam

Moi tram phai co:

- So chuong
- Ten ngan
- Cau mo ta hap dan 1 dong
- 3 keyword
- Progress nho
- Nut "Hoc chuong nay"

### 2.2. Tone visual

- Modern academic
- Digital knowledge map
- Soft historical archive
- Youthful but serious
- Premium education website

Light mode la giao dien chinh. Dark mode van giu, nhung khong con la mac dinh.

### 2.3. Palette de xuat

- Background light: `#FAF7F0` hoac `#F8F3E8`
- Card: `#FFFFFF`, `#FFFDF8`
- Navy: `#102A43`
- Deep red: `#A32626`
- Gold: `#D89B2B`
- Muted text: `#64748B`
- Border: `rgba(16, 42, 67, 0.12)`

Can tranh:

- Nen toi lam mac dinh.
- Glow toi mau qua nhieu.
- Mot palette do/vang qua day khien giao dien tuyen truyen cung nhac.
- Card noi dung qua dai.
- Dashboard kho cung.

### 2.4. Visual assets va minh hoa

Do du an dang vanilla HTML/CSS/JS, uu tien asset bang CSS + icon FontAwesome san co:

- Hero co knowledge map/timeline/book motif bang CSS: duong hanh trinh, node chuong, the sach, anh sang hoc thuat nhe.
- Moi chuong co icon rieng tu FontAwesome.
- Pattern giay/luu tru rat nhe bang CSS background texture.
- Khong dung SVG phuc tap neu lam tang kho bao tri.

## 3. Cau truc lai trai nghiem nguoi hoc

### 3.1. Learning Home thay cho Dashboard

Trang dau tien khong goi la dashboard nua. Doi thanh **Learning Home**.

Thanh phan:

- Hero ngan, co cam xuc:
  - Title: "Hanh trinh kham pha Chu nghia xa hoi khoa hoc"
  - Slogan ngan, toi da 2 dong.
  - 3 CTA: "Bat dau hanh trinh", "On thi nhanh", "Kham pha 7 chuong"
  - Visual knowledge journey ben canh hoac ben duoi tren mobile.
- Progress journey:
  - Hien "ban dang o tram nao", so chuong da hoc, flashcard da nam.
  - Khong hien nhieu stat card cung luc.
- Chuong dang hoc tiep:
  - 1 card tiep tuc hoc voi CTA ro.
- 3 quick actions:
  - On thi nhanh
  - Hoc thuat ngu
  - Lam quiz
- Roadmap 7 chuong:
  - Dang vertical journey tren mobile.
  - Dang curved/stepped map tren desktop.

### 3.2. Learning Path 7 chuong

Thay chapter grid day chu bang **Journey Stations**.

Moi card station chi gom:

- Badge "Chuong 01"
- `stationName`
- `shortTitle`
- `oneLineSummary`
- 3 keyword chips
- Mini progress/status
- Nut "Hoc chuong nay"

Khong hien:

- Description dai.
- Objectives day du.
- Cac muc I/II/III trong card tong quan.
- Cau hoi tu luan o tong quan.

### 3.3. Chapter Story Page

Khi vao chuong, mac dinh chi hien cac block ngan:

1. Header chuong:
   - So chuong, station name, icon, color theme.
   - `centralQuestion` that noi bat.
   - `oneLineSummary`.
2. "Chuong nay tra loi cau hoi gi?"
3. "3 phut nam chuong":
   - `quickUnderstand`, toi da 4 dong.
4. "3 y chinh can nam":
   - 3 card tu `keyIdeas`.
5. "5 keyword can nho":
   - Chip/card ngan.
6. CTA:
   - "Doc chi tiet"
   - "Lam quiz chuong nay"
   - "Danh dau da nam"

Noi dung chi tiet nam trong tab/accordion:

- Tong quan
- 3 y chinh
- Thuat ngu
- Lien he Viet Nam
- On tap

### 3.4. Micro-learning blocks

Moi chuong can co cac khoi hoc nho:

- "Cau hoi dan nhap"
- "Hieu nhanh"
- "Nho nhanh"
- "Vi du lien he"
- "Tu kiem tra"
- "On thi trong 60 giay"

Nguyen tac copy:

- Moi paragraph toi da 3-4 dong tren mobile.
- Moi card chi co 1 y chinh.
- Neu can noi dung dai, dat vao accordion collapsed mac dinh.
- Cau hoi/keyword/tag uu tien hon doan van dai.

## 4. Thiet ke mobile-first

### 4.1. Nguyen tac

- Viet CSS tu mobile len desktop.
- Base layout cho `390px` va `430px` truoc.
- Desktop chi la phien ban mo rong, khong phai layout goc.
- Khong co horizontal scroll ngoai y muon.
- Button/action cao toi thieu `44px`.
- Noi dung cuoi trang khong bi bottom nav che.

### 4.2. Header mobile

- Header gon, cao thap.
- Logo/ten mon ngan: "MLN131".
- Theme toggle va search khong chen vao hero.
- Neu search giu lai, dat o tab tra cuu/glossary hoac thanh tim kiem mo rong, khong chiem header mac dinh.

### 4.3. Bottom navigation

- Bottom nav toi da 5-6 item, icon ro.
- Them `padding-bottom` cho main content bang `calc(nav height + safe-area + spacing)`.
- Dung `env(safe-area-inset-bottom)` cho iOS.
- Active state ro nhung khong day mau.

### 4.4. Mobile chapter experience

- Chapter list la vertical journey, khong phai list dong trong khung co chieu cao co dinh.
- Khi vao detail, trang cuon tu nhien; khong lock content trong viewer fixed-height.
- Timeline chuyen thanh vertical cards.
- Concept map chuyen thanh `Knowledge Branches` list.
- Flashcard cao vua man hinh, khong tran; mat sau co scroll noi bo neu dinh nghia dai.
- Quiz option full-width, de bam, text khong tran.

### 4.5. Breakpoint can kiem thu

- `390px`: mobile nho, uu tien khong horizontal scroll, bottom nav khong che.
- `430px`: mobile pho bien, card/quiz/flashcard phai thoang.
- `768px`: tablet/doc, journey co the 2 cot.
- `1024px`: tablet ngang/laptop nho, mo rong layout nhung van gon.
- `1440px`: desktop, hero va roadmap co visual impact nhung khong de chu trai rong qua dai.

## 5. Cach giam tai noi dung

### 5.1. Khong xoa du lieu hoc tap

Du lieu hien tai trong `js/data.js` co the giu lai lam nguon chi tiet:

- `description`
- `objectives`
- `sections`
- `keyTerms`
- `vietnamConnection`
- `essayQuestions`
- `examTips`
- `quizzes`

Nhung giao dien mac dinh khong render tat ca cung luc.

### 5.2. Them data layer moi

Moi chuong bo sung cac field:

```js
{
  id,
  title,
  shortTitle,
  stationName,
  centralQuestion,
  oneLineSummary,
  whyItMatters,
  keywords,
  quickUnderstand,
  keyIdeas,
  sections,
  keyTerms,
  vietnamConnection,
  examTips,
  essayQuestions,
  quizzes,
  colorTheme,
  icon
}
```

Ghi chu:

- `keywords`: 5 keyword ngan dung cho "Nho nhanh".
- `keyIdeas`: dung dung 3 y chinh, moi y co `title`, `shortExplain`, `visualHint`.
- `sections`: giu noi dung chi tiet, render accordion collapsed.
- `colorTheme`: gom accent, softBg, border, iconBg.
- `icon`: FontAwesome class.

### 5.3. Rewrite cach hien thi 7 chuong

Can viet lai copy ngan gon cho cac field moi:

- Chuong 1: Khoi nguon ly luan
  - Cau hoi trung tam: Vi sao chu nghia xa hoi tu khong tuong tro thanh mot khoa hoc?
- Chuong 2: Giai cap cong nhan
  - Cau hoi trung tam: Vi sao giai cap cong nhan duoc xem la luc luong co su menh lich su?
- Chuong 3: Con duong qua do
  - Cau hoi trung tam: Vi sao qua do len CNXH la mot qua trinh lich su lau dai va phuc tap?
- Chuong 4: Dan chu & Nha nuoc
  - Cau hoi trung tam: Dan chu XHCN khac gi voi cac hinh thuc dan chu truoc do?
- Chuong 5: Co cau xa hoi
  - Cau hoi trung tam: Vi sao lien minh cac giai cap, tang lop la nen tang cua khoi dai doan ket?
- Chuong 6: Dan toc & Ton giao
  - Cau hoi trung tam: Lam the nao giai quyet van de dan toc, ton giao ma van giu doan ket xa hoi?
- Chuong 7: Gia dinh Viet Nam
  - Cau hoi trung tam: Vi sao gia dinh duoc xem la te bao cua xa hoi?

## 6. Component can redesign

### 6.1. App shell

Viec can lam:

- Doi light mode thanh mac dinh trong `body` va `appState.theme`.
- Doi label "Tổng Quan" thanh "Hành trình" / "Learning Home".
- Giam cam giac sidebar dashboard tren desktop: nav co the thanh rail/nav top gon hon tuy muc do refactor.
- Tren mobile, bottom nav la dieu huong chinh.

Thanh cong khi:

- Lan dau mo trang thay giao dien sang, am, thoang.
- Header khong chen ep noi dung.
- Nav la cong cu dieu huong, khong phai yeu to thi giac chi phoi.

### 6.2. Hero

Viec can lam:

- Viet lai hero ngan.
- Them visual "knowledge journey": duong di 7 node, book/timeline motif, icon hoc thuat.
- CTA:
  - Bat dau hanh trinh -> chuyen den chuong tiep theo/chapter path.
  - On thi nhanh -> review mode.
  - Kham pha 7 chuong -> roadmap.

Thanh cong khi:

- Hero khong qua 2 paragraph ngan.
- Tren mobile, hero khong chiem het man hinh bang chu.
- Co mot dau hieu thi giac ro rang ve "hanh trinh".

### 6.3. Learning Path / Chapter Cards

Viec can lam:

- Thay `renderOverviewDashboard()` phan chapter card bang `renderJourneyStations()`.
- Card co station name, icon, 3 keyword, progress/status, CTA.
- Dung mau rieng tung chuong nhung van nam trong palette chung.

Thanh cong khi:

- Nhung card nhin nhu cac tram tren ban do hoc tap, khong nhu muc luc.
- Moi card doc xong trong 5-8 giay.

### 6.4. Chapter Detail / Story Page

Viec can lam:

- Doi layout `chapters` thanh story reader.
- Mac dinh hien central question, quick understand, 3 key ideas, 5 keywords.
- Dua sections/objectives/detail vao accordion/tab.
- Them mini quiz/self-check cuoi chuong.
- Sua bug hien tai: code dang tim `chapterVietnamConnection` nhung HTML dung `viewChapterPractice`; can thong nhat ID trong dot implementation.

Thanh cong khi:

- Nguoi hoc co the nam y chinh truoc khi doc chi tiet.
- Khong co man hinh toan chu dai.
- Moi chuong co nhip "hoi -> hieu nhanh -> y chinh -> chi tiet -> on tap".

### 6.5. Timeline

Viec can lam:

- Doi timeline thanh "Dòng chảy hình thành CNXHKH".
- Moi moc chi 2-3 dong.
- Them so moc, icon, label ngan.
- Desktop co rhythm ziczac/step; mobile la vertical cards.

Moc can giu:

- Tien de kinh te - xa hoi
- Tien de khoa hoc tu nhien
- Tien de tu tuong ly luan
- Mác & Ăngghen
- Tuyen ngon Dang Cong san
- Lenin phat trien
- Van dung hien dai
- Viet Nam

### 6.6. Concept Map -> Knowledge Branches

Viec can lam:

- Bo layout mindmap phuc tap neu khong dam bao mobile.
- Tao card trung tam "CNXHKH" va 7 branch cards.
- Desktop co the dung grid quanh central card.
- Mobile la list branch ro rang.
- Moi branch co keyword, cau hoi dan nhap, nut hoc ngay.

Thanh cong khi:

- Khong vo layout o `390px`.
- Card branch de quet mat va di den chuong.

### 6.7. Flashcards

Viec can lam:

- Giam chu mat truoc: term + chapter + keyword category.
- Mat sau co definition ngan hien truoc, memoryHint trong box rieng.
- Them filter theo chuong.
- Progress hien dang `12/35`.
- Nut: "Chua chac" va "Biet roi" cao toi thieu `44px`.
- Them completion state khi di het deck.

Thanh cong khi:

- Flashcard khong tran mobile.
- Lien tuc hoc duoc ma khong can doc nhieu van ban quanh the.

### 6.8. Quiz

Viec can lam:

- Doi quiz thanh one-question-per-card.
- Progress bar ro.
- Option lon, full-width mobile.
- Sau khi chon va kiem tra, hien dung/sai + giai thich ngan.
- Ket qua cuoi co loi khuyen on tap va CTA lam lai/hoc chuong lien quan.

Thanh cong khi:

- Quiz co cam giac game hoc tap nhe.
- Khong can sidebar cau hinh day chu tren mobile.

### 6.9. Review Mode

Viec can lam:

- Moi chuong hien:
  - 1 cau "chuong nay noi ve gi"
  - 5 y can nho
  - 5 keyword
  - 3 cau hoi hay gap
  - Nut "Lam quiz chuong nay"
- Dung accordion de mo tung chuong.

Thanh cong khi:

- On thi nhanh that su gọn, khong thanh ban tom tat dai.

### 6.10. Glossary / Tra cuu

Viec can lam:

- Giu chuc nang search.
- Doi giao dien thanh dictionary cards nhe.
- Filter theo chuong/tag.
- Mobile input ro, card thuat ngu ngan, definition co the expand.

Thanh cong khi:

- Tra cuu thuat ngu nhanh ma khong pha flow learning journey.

## 7. Cau truc du lieu moi

### 7.1. Du lieu chuong

Cap nhat `CHAPTERS_DATA` theo huong:

```js
const CHAPTERS_DATA = [
  {
    id: 1,
    title: "Nhập môn Chủ nghĩa xã hội khoa học",
    shortTitle: "Nhập môn CNXHKH",
    stationName: "Khởi nguồn lý luận",
    centralQuestion: "Vì sao chủ nghĩa xã hội từ không tưởng trở thành một khoa học?",
    oneLineSummary: "Chương này mở ra nguồn gốc, điều kiện ra đời và ý nghĩa của CNXHKH.",
    whyItMatters: "Giúp sinh viên hiểu vì sao môn học có cơ sở khoa học, không chỉ là niềm tin chính trị.",
    keywords: ["1848", "Mác - Ăngghen", "Không tưởng", "Giai cấp công nhân", "Quy luật"],
    quickUnderstand: "Nếu CNXH không tưởng là ước mơ về xã hội công bằng, CNXHKH giải thích vì sao và bằng lực lượng nào xã hội ấy có thể hình thành.",
    keyIdeas: [
      {
        title: "Điều kiện lịch sử",
        shortExplain: "CNTB phát triển làm mâu thuẫn xã hội bộc lộ rõ.",
        visualHint: "Nhà máy - đô thị - đấu tranh giai cấp"
      }
    ],
    sections: [],
    keyTerms: [],
    vietnamConnection: "",
    examTips: [],
    essayQuestions: [],
    quizzes: [],
    colorTheme: {
      accent: "#A32626",
      softBg: "#FFF4F0",
      border: "rgba(163, 38, 38, 0.18)"
    },
    icon: "fa-solid fa-scroll"
  }
];
```

### 7.2. Backward compatibility

- Trong dot implementation, neu can tranh sua qua nhieu logic mot luc, co the giu cac field cu va them field moi.
- Render moi uu tien field moi.
- Neu field moi thieu, fallback sang `description`, `sections`, `keyTerms` cu de tranh loi.

### 7.3. Derived data

Co the tao helper trong `js/app.js`:

- `getChapterProgress(chapter)`
- `getNextChapter()`
- `getChapterKeywords(chapter)`
- `getChapterTheme(chapter)`
- `getAllFlashcards(filterChapterId)`

Khong tao framework moi; van Vanilla JS.

## 8. Ke hoach trien khai tung buoc

### Phase 1: Data va copy micro-learning

Muc tieu:

- Bo sung field moi cho 7 chuong trong `js/data.js`.
- Viet station name, central question, one-line summary, why it matters, quick understand, 3 key ideas, keywords, color theme, icon.
- Giu nguyen noi dung chi tiet, quiz, flashcard, exam tips.

Kiem tra:

- `js/data.js` khong loi syntax.
- Tat ca 7 chuong co du field bat buoc.
- Khong mat du lieu cu.

### Phase 2: App shell va light theme

Muc tieu:

- Doi light theme lam default.
- Chinh lai token CSS theo palette moi.
- Giam dashboard/sidebar feel.
- Thiet lap mobile-first spacing, safe-area bottom padding, button min-height.

Kiem tra:

- Lan dau load la light mode.
- Toggle dark/light van hoat dong.
- Khong loi console.

### Phase 3: Learning Home va hero

Muc tieu:

- Rewrite overview thanh Learning Home.
- Hero ngan + visual journey.
- Progress journey.
- Continue learning card.
- Quick actions.
- Roadmap 7 station.

Kiem tra:

- 390/430px khong horizontal scroll.
- 1440px khong bi trong trai hoac card qua rong.
- CTA dung tab/section can den.

### Phase 4: Chapter Story Page

Muc tieu:

- Redesign tab chapters thanh story page.
- Default view giam chu: central question, quick understand, 3 key ideas, 5 keywords.
- Detail sections vao accordion/tabs.
- Terms grid, Vietnam highlight, review/self-check.
- Prev/next/mark complete/quiz CTA van hoat dong.

Kiem tra:

- Chon chuong tren roadmap vao dung story.
- Mark complete cap nhat progress.
- Mobile cuon tu nhien, khong bi fixed-height viewer gay ket noi dung.

### Phase 5: Timeline va Knowledge Branches

Muc tieu:

- Timeline thanh journey milestones.
- Mindmap thanh Knowledge Branches.
- Mobile list, desktop grid/branch.

Kiem tra:

- Khong vo layout o 390px.
- Moi branch co nut hoc ngay.

### Phase 6: Flashcards redesign

Muc tieu:

- Them filter chuong.
- Thiet ke the lon, it chu, flip animation nhe.
- Progress `x/y`, status known/review.
- Completion screen.

Kiem tra:

- Known/review luu localStorage nhu cu.
- Card khong tran mobile.
- Nut de bam.

### Phase 7: Quiz redesign

Muc tieu:

- Cau hinh quiz gon.
- Moi cau mot card.
- Option lon.
- Feedback dung/sai + explanation.
- Result co advice va CTA.

Kiem tra:

- Quiz all/random va quiz theo chuong hoat dong.
- High score luu localStorage.
- Khong can sidebar dai tren mobile.

### Phase 8: Review Mode va Glossary

Muc tieu:

- Review mode thanh on thi nhanh dung nghia.
- Glossary card/filter gon.

Kiem tra:

- Moi chuong co 5 y/5 keyword/3 cau hoi.
- Search glossary dung.

### Phase 9: UI polish co kiem soat

Muc tieu:

- Hover/fade/scroll animation nhe.
- Shadow, radius, border, pattern giay nhe.
- Dam bao text khong tran button/card.
- Dam bao dark mode la phu nhung van doc tot.

Kiem tra:

- CSS khong thanh mot bang mau don dieu.
- Khong co glow toi mau lam nang mat.
- Khong co card long card.

### Phase 10: Verification

Muc tieu:

- Chay data validation neu co.
- Kiem tra console.
- Kiem tra responsive breakpoints.
- Kiem tra flows chinh.

Kiem tra:

- `390px`, `430px`, `768px`, `1024px`, `1440px`.
- No horizontal scroll.
- Theme/progress/quiz/flashcard/localStorage on dinh.

## 9. Checklist kiem thu UI/UX

### 9.1. General

- [ ] Light mode la default va dep hon dark mode hien tai.
- [ ] Hero co title lon, slogan ngan, 3 CTA, visual journey.
- [ ] Khong co man hinh nao bi day dac chu nhu giao trinh.
- [ ] Moi section co khoang tho va diem nhan ro.
- [ ] Icon/mau tung chuong nhat quan.
- [ ] Animation nhe, khong gay mat tap trung.
- [ ] Khong loi console.

### 9.2. Mobile

- [ ] `390px`: khong horizontal scroll.
- [ ] `430px`: bottom nav khong che content cuoi.
- [ ] `768px`: layout tablet de doc, card khong bi keo dai bat thuong.
- [ ] Button/quiz option toi thieu `44px`.
- [ ] Flashcard khong tran man hinh.
- [ ] Timeline la vertical cards.
- [ ] Knowledge Branches la list ro rang.

### 9.3. Desktop

- [ ] `1024px`: khong con cam giac sidebar chiem qua nhieu.
- [ ] `1440px`: hero/roadmap co visual impact, line length khong qua dai.
- [ ] Roadmap 7 chuong trong nhu hanh trinh, khong nhu card grid thong thuong.

### 9.4. Learning flow

- [ ] Bat dau hanh trinh dua den chuong tiep theo/chapter path.
- [ ] Hoc chuong nay mo dung chapter story.
- [ ] Mac dinh chuong chi hien quick learn, key ideas, keywords.
- [ ] Doc chi tiet moi mo accordion.
- [ ] Mark complete cap nhat progress.
- [ ] Quiz theo chuong hoat dong.
- [ ] Review mode thuc su ngan.

### 9.5. State va logic

- [ ] Theme toggle luu localStorage.
- [ ] Completed chapters luu localStorage.
- [ ] Flashcard known/review luu localStorage.
- [ ] Quiz high scores luu localStorage.
- [ ] Khong mat quiz data.
- [ ] Khong mat key terms.

## 10. Tieu chi nghiem thu cuoi cung

Website duoc xem la dat khi:

1. **Cam giac tong the**: nguoi dung nhin lan dau thay day la mot website hoc tap tuong tac, dep, co concept hanh trinh, khong phai dashboard hoc thuat.
2. **Learning Home**: co hero cuon, progress journey, quick actions va roadmap 7 tram tri thuc.
3. **Chapter cards**: moi chuong it chu, co icon, mau rieng, keyword, progress va CTA ro.
4. **Chapter detail**: moi chuong la story page voi central question, quick understand, 3 key ideas, terms, Vietnam connection, review va accordion chi tiet.
5. **Micro-learning**: nguoi hoc co the nam y chinh moi chuong trong 3 phut ma khong can doc toan bo noi dung.
6. **Mobile-first**: cac breakpoint `390`, `430`, `768`, `1024`, `1440` khong horizontal scroll, khong bi bottom nav che, text/button/card khong vo.
7. **Feature preservation**: theme, progress, flashcard, quiz, review, glossary van hoat dong va khong loi console.
8. **Data maintainability**: du lieu hoc tap nam trong `js/data.js`, render logic nam trong `js/app.js`, CSS chia section ro.
9. **Visual quality**: dat cung muc hap dan thi giac voi tinh than `MLN122_web`, nhung khong copy giao dien, khong copy framework, khong copy noi dung.
10. **No academic dump**: khong co trang nao do toan bo giao trinh ra mac dinh; noi dung dai phai nam trong accordion/tab/expand.

## 11. Quyet dinh can duyet truoc khi code

Truoc khi bat dau implementation, can duyet cac diem sau:

- Chap nhan concept **Learning Journey** lam huong chinh.
- Chap nhan light mode la default.
- Chap nhan them field moi vao `js/data.js` nhung giu du lieu cu.
- Chap nhan redesign manh `index.html`, `style.css`, `js/app.js` trong pham vi vanilla HTML/CSS/JS.
- Chap nhan khong copy MLN122, chi hoc tinh than: hero cuon, card co danh tinh, section ngan, motion nhe, interactive learning.

