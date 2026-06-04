# MLN131 Interactive Knowledge Exhibition Upgrade

## 0. Pham vi va nguyen tac

Muc tieu dot nang cap nay la chuyen website MLN131 tu **Learning Journey** thanh **interactive learning exhibition**:

- Ten concept: **MLN131 Interactive Knowledge Exhibition**.
- Ten tieng Viet: **Trien lam tri thuc Chu nghia xa hoi khoa hoc**.
- Stack giu nguyen: Vanilla HTML, CSS, JavaScript, `js/data.js`, `js/app.js`.
- Khong them framework moi, khong dung thu vien nang.
- Khong pha theme, progress, flashcards, quiz, review, glossary/search va localStorage hien co.
- Sau khi viet plan nay se dung lai de duyet, chua trien khai code.

Nguon tham chieu da doc:

- Trang mau: `https://mln-122-web.vercel.app/`
- Source mau: `https://github.com/huynd4104/MLN122_web`
- Source hien tai MLN131: `index.html`, `style.css`, `js/app.js`, `js/data.js`, `js/validate_data.js`

## 1. Vi sao ban hien tai van nham chan?

MLN131 hien tai da tot hon trang on tap co ban, nhung van chua tao cam giac "trien lam tri thuc" vi:

- Homepage van bat dau gan voi pattern dashboard: header, search, progress panel, quick action, roadmap va knowledge branches. Nhung block nay huu ich, nhung chua co wow factor.
- Hero hien tai co knowledge map 7 node, nhung visual con nho va mang tinh minh hoa phu, chua la trung tam cua cau chuyen.
- Roadmap 7 chuong van la card grid/station card, moi card co mau rieng nhung chua giong "7 phong trien lam" co ban sac rieng.
- Timeline dang hien tat ca noi dung ngay, nguoi hoc chi doc luot, chua co cam giac unlock tung moc.
- Chapter detail da co story hero, micro cards, key ideas va accordion, nhung thieu visual model rieng, media card, case study, comparison va mini interaction.
- Quiz/flashcard/review dang xuat hien kha som tren homepage, lam vibe nghieng ve web on tap hon la bao tang tri thuc so.
- Chu de CNXHKH la ly luan nhieu chu. Neu chi cat chu thanh card, trai nghiem van la "doc giao trinh trong UI dep", chua thanh "kham pha qua mo hinh".

Ket luan: ban hien tai co nen tang data va render tot, nhung can tang lop **visual storytelling, progressive discovery, concept modeling va interaction**.

## 2. Can hoc vibe gi tu MLN122_web?

Khong copy UI y nguyen vi MLN122 dung React, Framer Motion, Tailwind, asset anh rieng va mot so scene nang nhu globe/drag. MLN131 se hoc tinh than:

- Hero co chu de ro ngay tu man hinh dau: nguoi hoc nhin vao phai thay day la mot hanh trinh/trien lam, khong phai dashboard.
- Moi topic co danh tinh rieng: so thu tu, tag, icon, thoi diem/chu de, mau sac va visual motif.
- Noi dung chia thanh cac cum kham pha ngan, moi cum co mot hanh dong hoac mot visual neo lai.
- Card khong chi de chua chu; card can dong vai tro nhu "vat trung bay": co title ngan, tag, icon, detail mo khi bam.
- Moi trang chi tiet co scene rieng: header, core ideas, mo hinh, mini game/interaction, data visual va cau hoi suy nghi.
- Motion/interaction dung de tao nhip: hover, click unlock, modal, state da mo, feedback dung/sai. Khong can animation nang.
- Visual learning phai mobile-safe: touch/tap thay cho hover-only, khong drag-drop bat buoc, khong layout ngang vo tren mobile.

## 3. Homepage se thay doi the nao de co wow factor?

Thu tu section moi:

1. Hero Exhibition
2. Exhibition Highlights
3. Interactive Roadmap 7 Rooms
4. Concept Models Preview
5. Timeline Unlock
6. Media Learning
7. Case Study Preview
8. Quick Study Tools
9. Continue Learning

### 3.1. Hero Exhibition

Hero moi khong mo dau bang progress/stat. Cau truc:

- Kicker: `MLN131 Interactive Knowledge Exhibition`
- Title: `Trien lam tri thuc Chu nghia xa hoi khoa hoc`
- Subtitle ngan: `Kham pha 7 chu de lon ve xa hoi, con nguoi, dan chu, nha nuoc va con duong qua do len chu nghia xa hoi.`
- CTA:
  - `Bat dau kham pha`
  - `Xem ban do tri thuc`
  - `On tap nhanh`
- Visual lon:
  - CSS knowledge map voi 7 node chuong theo duong sang/curved path.
  - Trung tam la "CNXHKH" nhu loi vao trien lam.
  - 7 node co icon, room number, station name.
  - Floating keyword chips: `Giai cap cong nhan`, `Dan chu`, `Nha nuoc`, `Dan toc`, `Gia dinh`, `Qua do`.
- Nen sang am, co paper texture, grid/map line nhe, border mem.

### 3.2. Exhibition Highlights

3 the lon gioi thieu trai nghiem, khong phai stat:

- `Mo hinh hoa khai niem`: flow, network, roadmap, balance, house model.
- `Case study Viet Nam`: tinh huong ngan, cau hoi suy nghi, goi y phan tich.
- `Quiz & Flashcard tuong tac`: cong cu phu tro sau khi da kham pha.

### 3.3. Interactive Roadmap

7 chuong thanh 7 exhibition rooms:

- Desktop: path/stepped exhibition rooms, cac card lech nhip nhe, noi bang duong timeline.
- Mobile: vertical exhibition path, moi room full width, nut toi thieu 44px.
- Moi room hien:
  - `Room 01`
  - Ten phong
  - Ten chuong
  - Cau hoi trung tam
  - 3 tag
  - Icon/model type
  - CTA `Vao phong trien lam`

### 3.4. Concept Models Preview

Preview 3 mo hinh noi bat tren homepage:

- `Tu khong tuong den khoa hoc`
- `Su menh lich su cua giai cap cong nhan`
- `Co cau xa hoi - giai cap`

Moi preview co mini illustration bang CSS/HTML va CTA mo chuong lien quan.

### 3.5. Timeline Unlock

Timeline khong hien het noi dung. Moi moc la button/card:

- Ban dau chi hien title ngan, icon, trang thai locked/unlocked.
- Khi click, noi dung mo ra trong panel ben duoi hoac ngay trong card.
- Moc da bam co class `unlocked`.
- Luu localStorage neu don gian: `MLN131_unlockedTimeline`.

### 3.6. Media Learning

Section homepage hien media cards dep:

- Thumbnail placeholder bang CSS, khong o xam.
- Icon play, chapter label, source label.
- Click mo modal chi tiet.
- `url` co the rong va hien nut `Them link video sau`.

### 3.7. Case Study Preview

Hien 2-3 case study ngan, co:

- Tinh huong.
- Cau hoi suy nghi.
- 2-3 hint dang chip/list.
- CTA vao chapter detail de xem day du.

### 3.8. Quick Study Tools

Flashcard, quiz, review, glossary duoc dua ve section gan cuoi:

- Vai tro la tool phu tro.
- Khong de tool/stats chiem vibe chinh cua homepage.

### 3.9. Continue Learning

Cuoi homepage moi hien progress:

- Room tiep theo.
- So room da hoan thanh.
- So flashcard da biet.
- Nut tiep tuc hoc.

## 4. 7 chuong se thanh 7 exhibition rooms nhu the nao?

### Room 01 - Khoi nguon ly luan

- Chuong: `Nhap mon Chu nghia xa hoi khoa hoc`
- Vibe: nguon goc, tien de, su ra doi cua mot hoc thuyet khoa hoc.
- Visual: flow tu `khong tuong` -> `tien de lich su` -> `khoa hoc`.
- Cau hoi trung tam: vi sao CNXH tu khong tuong tro thanh khoa hoc?

### Room 02 - Giai cap cong nhan

- Chuong: `Su menh lich su cua giai cap cong nhan`
- Vibe: luc luong xa hoi, vai tro lich su, to chuc va muc tieu.
- Visual: node diagram luc luong - dieu kien - su menh.
- Cau hoi trung tam: vi sao giai cap cong nhan co su menh lich su?

### Room 03 - Con duong qua do

- Chuong: `Chu nghia xa hoi va thoi ky qua do`
- Vibe: hanh trinh chuyen bien lau dai.
- Visual: roadmap tu xuat phat diem -> cai bien -> muc tieu CNXH.
- Cau hoi trung tam: vi sao qua do la qua trinh lau dai, phuc tap?

### Room 04 - Dan chu & Nha nuoc

- Chuong: `Dan chu XHCN va Nha nuoc XHCN`
- Vibe: thiet che chinh tri, quyen lam chu, nha nuoc phap quyen.
- Visual: comparison/split panel.
- Cau hoi trung tam: dan chu XHCN khac gi voi cac hinh thuc dan chu truoc do?

### Room 05 - Co cau xa hoi

- Chuong: `Co cau xa hoi - giai cap va lien minh giai cap, tang lop`
- Vibe: mang luoi xa hoi, cac nhom xa hoi va lien minh.
- Visual: network diagram.
- Cau hoi trung tam: vi sao lien minh cac giai cap, tang lop la nen tang cua dai doan ket?

### Room 06 - Dan toc & Ton giao

- Chuong: `Van de dan toc va ton giao`
- Vibe: da dang, doan ket, hai hoa xa hoi.
- Visual: harmony wheel/balance diagram.
- Cau hoi trung tam: lam the nao giai quyet van de dan toc, ton giao ma van giu doan ket xa hoi?

### Room 07 - Gia dinh Viet Nam

- Chuong: `Van de gia dinh`
- Vibe: te bao xa hoi, chuc nang gia dinh, bien doi hien dai.
- Visual: house model.
- Cau hoi trung tam: vi sao gia dinh duoc xem la te bao cua xa hoi?

## 5. Moi chuong co concept model gi?

Bat buoc them `conceptModel` cho tung chuong trong `js/data.js`. Render co fallback neu thieu.

### Chuong 1 - Flow Model

- Type: `flow`
- Title: `Tu khong tuong den khoa hoc`
- Nodes:
  - `Uoc mo xa hoi cong bang`
  - `Tien de kinh te - xa hoi`
  - `Tien de khoa hoc va tu tuong`
  - `Mac - Angghen xay dung CNXHKH`
- Render: cac step noi bang arrow/line; mobile stack doc.

### Chuong 2 - Node Model

- Type: `network`
- Title: `Su menh lich su cua giai cap cong nhan`
- Nodes:
  - `Giai cap cong nhan`
  - `Dia vi kinh te - xa hoi`
  - `To chuc chinh tri`
  - `He tu tuong`
  - `Muc tieu giai phong xa hoi`
- Render: node trung tam va cac node ve tinh; mobile chuyen thanh linked list.

### Chuong 3 - Roadmap Model

- Type: `roadmap`
- Title: `Con duong qua do`
- Nodes:
  - `Xuat phat diem`
  - `Cai bien kinh te`
  - `Cai bien chinh tri`
  - `Cai bien van hoa - xa hoi`
  - `Xay dung CNXH`
- Render: path/steps; mobile vertical path.

### Chuong 4 - Comparison Model

- Type: `comparison`
- Title: `Dan chu va Nha nuoc`
- Nodes:
  - `Dan chu noi chung`
  - `Dan chu XHCN`
  - `Nha nuoc XHCN`
  - `Nha nuoc phap quyen XHCN Viet Nam`
- Render: split columns/panels; mobile stacked.

### Chuong 5 - Network Model

- Type: `network`
- Title: `Co cau xa hoi - giai cap`
- Nodes:
  - `Cong nhan`
  - `Nong dan`
  - `Tri thuc`
  - `Doanh nhan`
  - `Cac tang lop khac`
  - `Lien minh giai cap, tang lop`
- Render: network; mobile list lien ket.

### Chuong 6 - Balance/Harmony Model

- Type: `balance`
- Title: `Dan toc va Ton giao`
- Nodes:
  - `Binh dang`
  - `Doan ket`
  - `Ton trong`
  - `Chinh sach phu hop`
  - `On dinh xa hoi`
- Render: balance wheel/harmony ring; mobile stacked principle cards.

### Chuong 7 - House Model

- Type: `house`
- Title: `Gia dinh la te bao xa hoi`
- Nodes:
  - `Chuc nang kinh te`
  - `Chuc nang sinh san`
  - `Chuc nang giao duc`
  - `Chuc nang tam ly - tinh cam`
  - `Xay dung gia dinh Viet Nam`
- Render: house CSS model; mobile sections as house parts/list.

## 6. Media Learning se them gi?

Them `media` cho moi chuong:

```js
media: {
  title: "...",
  type: "video",
  thumbnail: "",
  description: "...",
  sourceLabel: "Goi y hoc tap",
  url: ""
}
```

Noi dung:

- Chuong 1: `CNXHKH ra doi trong boi canh nao?`
- Chuong 2: `Giai cap cong nhan trong xa hoi hien dai`
- Chuong 3: `Thoi ky qua do la gi?`
- Chuong 4: `Dan chu va nha nuoc phap quyen`
- Chuong 5: `Co cau xa hoi Viet Nam hien nay`
- Chuong 6: `Doan ket dan toc va ton giao`
- Chuong 7: `Gia dinh Viet Nam trong xa hoi hien dai`

Render:

- Homepage co `Media Learning` grid/rail.
- Chapter detail co 1 media card rieng.
- Click card mo modal.
- Neu `url` rong: modal hien description va button disabled/secondary `Them link video sau`.
- Placeholder thumbnail la CSS illustration co icon play, room number, gradient mem theo chapter color.
- Khong de thumbnail trong nhu o xam rong.

## 7. Case study Viet Nam se them gi?

Them `caseStudy` cho moi chuong:

```js
caseStudy: {
  title: "...",
  situation: "...",
  question: "...",
  analysisHints: ["...", "...", "..."]
}
```

Nguyen tac noi dung:

- Ngan, gan doi song, khong thanh bai luan.
- Moi case co mot tinh huong cu the o Viet Nam hoac gan voi sinh vien Viet Nam.
- Cau hoi mo, khuyen khich ap dung khai niem chuong.
- Goi y phan tich chi 2-4 y.

Huong case theo chuong:

- Chuong 1: Phan biet uoc mo cong bang xa hoi va cach tiep can khoa hoc trong phan tich bien doi xa hoi.
- Chuong 2: Cong nhan trong nha may, khu cong nghiep, kinh te so va van de nang cao ky nang.
- Chuong 3: Doi moi, cong nghiep hoa, kinh te nhieu thanh phan va dinh huong lau dai.
- Chuong 4: Mot van de cong dong dia phuong can co dan chu, phap luat va trach nhiem nha nuoc.
- Chuong 5: Bien doi nghe nghiep, cong nhan - nong dan - tri thuc - doanh nhan cung tham gia phat trien.
- Chuong 6: Tinh huong doan ket dan toc, ton giao, tin nguong va phan biet voi loi dung chia re.
- Chuong 7: Gia dinh tre, binh dang gioi, cham soc con cai/nguoi gia trong xa hoi hien dai.

## 8. Interactive comparison se them gi?

Them `comparison` cho cac chuong phu hop:

```js
comparison: {
  title: "...",
  keyDifference: "...",
  left: {
    label: "...",
    points: ["...", "...", "..."]
  },
  right: {
    label: "...",
    points: ["...", "...", "..."]
  }
}
```

Noi dung bat buoc:

- Chuong 1: `CNXH khong tuong` vs `CNXH khoa hoc`
- Chuong 3: `Qua do truc tiep` vs `Qua do gian tiep`
- Chuong 4: `Dan chu tu san` vs `Dan chu XHCN`
- Chuong 7: `Gia dinh truyen thong` vs `Gia dinh hien dai`

Nguyen tac:

- Viet o muc hoc thuat, khai quat, khong cuc doan.
- Moi ben toi da 3-4 bullet ngan.
- Co `keyDifference` de neo y chinh.
- Desktop: split cards.
- Mobile: stacked cards.
- Neu chuong khong co comparison, render bo qua an toan.

## 9. Mini interaction se gom nhung gi?

Can it nhat 3 interaction that su:

### A. Build the Concept

- Vi du homepage hoac Room 01: `Chon 3 tien de ra doi CNXHKH`.
- Nguoi hoc tap vao cac option chip.
- Khi bam `Kiem tra`, he thong bao dung/sai va giai thich ngan.
- Khong dung drag-drop de tranh loi mobile.
- Luu optional localStorage: `MLN131_buildConceptDone`.

### B. Decision Scenario

- Hien mot tinh huong ngan va 3 cach phan tich.
- Nguoi hoc chon mot dap an.
- UI phan hoi:
  - Correct: giai thich vi sao phu hop khai niem.
  - Incorrect: giai thich thieu diem nao.
- Co the dat tren homepage `Case Study Preview` hoac trong chapter detail.
- Luu optional localStorage: `MLN131_decisionScenarioDone`.

### C. Timeline Unlock

- Timeline ban dau khong mo het desc.
- Click tung moc de unlock.
- Moc da unlock co badge `Da mo`.
- Co counter `x/8 moc da mo`.
- Luu localStorage: `MLN131_unlockedTimeline`.

Them interaction phu neu du thoi gian:

- Concept model node click: bam node hien description.
- Media modal.
- Room filter/tag focus tren roadmap.

## 10. Mobile se xu ly visual nhu the nao?

Kiem thu bat buoc: `390px`, `430px`, `768px`, `1024px`, `1440px`.

Nguyen tac:

- Base CSS tu mobile len desktop.
- Khong horizontal scroll toan trang.
- Button, interactive chip, timeline node toi thieu 44px.
- Hero visual tren mobile khong qua cao; target khoang 320-420px tuy content.
- Roadmap mobile la vertical exhibition path, khong grid ngang.
- Concept model:
  - Flow/roadmap: stack doc.
  - Network: chuyen thanh linked list neu khong du rong.
  - Comparison: stacked.
  - Balance/house: CSS simplified layout hoac list card.
- Media cards full width tren mobile.
- Modal co max-height va scroll noi bo, co nut dong de bam.
- Chapter detail cuon tu nhien, khong lock vao fixed-height viewer.
- Text button/card khong tran; dung `overflow-wrap`, `minmax(0, 1fr)`, stable dimensions.
- Khong interaction hover-only; moi thu co click/tap state.
- Flashcard/quiz/review/glossary giu layout hien co, chi polish neu can de khong bi lech voi exhibition theme.

## 11. Data structure can bo sung field gi?

Bo sung vao tung object chuong trong `CHAPTERS_DATA` hoac lop enrich cuoi file nhu `MICRO_LEARNING_DATA`.

Field moi:

```js
room: {
  number: "01",
  name: "Khoi nguon ly luan",
  label: "Room 01",
  visualMotif: "flow"
}
```

```js
conceptModel: {
  type: "flow",
  title: "...",
  description: "...",
  nodes: [
    {
      title: "...",
      description: "...",
      icon: "fa-solid fa-..."
    }
  ],
  connections: []
}
```

```js
media: {
  title: "...",
  type: "video",
  thumbnail: "",
  description: "...",
  sourceLabel: "Goi y hoc tap",
  url: ""
}
```

```js
caseStudy: {
  title: "...",
  situation: "...",
  question: "...",
  analysisHints: ["...", "...", "..."]
}
```

```js
comparison: {
  title: "...",
  keyDifference: "...",
  left: {
    label: "...",
    points: ["...", "...", "..."]
  },
  right: {
    label: "...",
    points: ["...", "...", "..."]
  }
}
```

Data global moi:

```js
const EXHIBITION_INTERACTIONS = {
  buildConcept: {...},
  decisionScenario: {...}
};
```

Validation:

- Cap nhat `js/validate_data.js` de khong fail field cu.
- Co the them check optional cho `conceptModel`, `media`, `caseStudy`.
- Render logic phai fallback:
  - Khong co `conceptModel`: an section.
  - Khong co `media`: khong render card.
  - Khong co `comparison`: khong render comparison.
  - Khong co `caseStudy`: khong render case block.

## 12. Phase trien khai cu the

### Phase 1 - Data exhibition layer

- Them `conceptModel`, `media`, `caseStudy`, `comparison`, `room` vao data.
- Them `EXHIBITION_INTERACTIONS` cho Build the Concept va Decision Scenario.
- Cap nhat validation nhe.
- Chay `node js/validate_data.js`.

### Phase 2 - Homepage restructure

- Viet lai `renderOverview()` theo thu tu section moi.
- Them helper render:
  - `renderHeroExhibition()`
  - `renderExhibitionHighlights()`
  - `renderInteractiveRoadmap()`
  - `renderConceptModelsPreview()`
  - `renderTimelineUnlock()`
  - `renderMediaLearning()`
  - `renderCaseStudyPreview()`
  - `renderQuickStudyTools()`
  - `renderContinueLearning()`
- Giu routing tab hien co.
- Giu quick actions nhung dua ve gan cuoi.

### Phase 3 - Concept model renderer

- Them `renderConceptModel(model, chapter)`.
- Ho tro type: `flow`, `network`, `roadmap`, `comparison`, `balance`, `house`.
- Them event click node de hien description neu phu hop.
- Mobile fallback cho network/balance/house.

### Phase 4 - Chapter detail exhibition upgrade

- Nang `buildChapterStoryHtml()`:
  - Hero nho rieng theo room.
  - Cau hoi trung tam.
  - Concept model.
  - Quick understand.
  - 3 key ideas.
  - Case study.
  - Comparison neu co.
  - Media card.
  - Mini quiz/self-check.
  - Accordion chi tiet.
- Giu CTA quiz, complete, prev/next.

### Phase 5 - Mini interactions

- Build the Concept:
  - Render option chips.
  - Check answer.
  - Feedback dung/sai.
  - Optional localStorage.
- Decision Scenario:
  - Render scenario card.
  - Check selected answer.
  - Feedback va explanation.
- Timeline Unlock:
  - Render locked/unlocked state.
  - Luu `MLN131_unlockedTimeline`.

### Phase 6 - Media modal

- Them modal HTML bang JS khi click media.
- Them close by button, overlay click, Escape key.
- Neu co `url`, mo link/new tab hoac hien CTA.
- Neu `url` rong, hien `Them link video sau`.

### Phase 7 - CSS exhibition system

- Them visual system:
  - Paper/map texture.
  - Hero knowledge map.
  - Exhibition rooms path.
  - Concept model classes.
  - Media thumbnail placeholder.
  - Timeline unlock state.
  - Modal.
- Kiem soat palette: warm ivory, cream, card white, navy, deep red, gold, muted blue-gray.
- Dark theme fallback van doc duoc nhung light mode la chinh.

### Phase 8 - Regression va responsive test

- Chay validation.
- Mo local HTML/dev view.
- Test manual cac viewport:
  - `390px`
  - `430px`
  - `768px`
  - `1024px`
  - `1440px`
- Kiem:
  - Khong horizontal scroll.
  - Button de bam.
  - Modal dong duoc.
  - Timeline unlock luu state.
  - Quiz/flashcard/review/glossary van hoat dong.
  - LocalStorage cu khong bi mat.

## 13. Tieu chi nghiem thu

### 13.1. Tieu chi trai nghiem

- Man hinh dau tien tao cam giac day la **trien lam tri thuc CNXHKH**, khong phai dashboard hoc tap.
- Hero co visual impact ro: 7 node/room, keyword chips, duong tri thuc, chu de CNXHKH nhin thay ngay.
- Homepage co nhip kham pha: hero -> highlights -> rooms -> model -> timeline unlock -> media -> case -> tools -> continue.
- Quiz/flashcard khong con la trung tam cua homepage.
- Moi room co ban sac rieng ve icon, mau, cau hoi va concept model.
- Nguoi hoc co it nhat 3 diem de bam va nhan feedback that su.
- Noi dung van hoc thuat nhung khong do chu dai; paragraph ngan, card co muc dich.

### 13.2. Tieu chi noi dung

- 7 chuong deu co `conceptModel` dung type yeu cau.
- 7 chuong deu co `media`.
- 7 chuong deu co `caseStudy`.
- Chuong 1, 3, 4, 7 co `comparison`.
- Case study ngan, gan Viet Nam, co cau hoi va hint.
- Comparison khach quan, khai quat, khong cuc doan.

### 13.3. Tieu chi ky thuat

- Khong them framework moi.
- Khong them thu vien nang.
- `js/data.js` load khong loi.
- `js/app.js` co fallback cho field moi.
- `node js/validate_data.js` pass sau khi cap nhat validation.
- Theme toggle van hoat dong.
- Completed chapters, flashcard progress, quiz high scores, streak va search/glossary khong bi mat.
- Timeline unlock va mini interaction neu luu localStorage phai dung key moi, khong ghi de key cu.

### 13.4. Tieu chi responsive

- `390px`: khong ngang scroll, hero va room path doc tot, modal khong tran.
- `430px`: tap targets du 44px, text trong button/card khong vo.
- `768px`: layout tablet 2 cot hop ly, concept model khong chen nhau.
- `1024px`: sidebar/nav hien dung, roadmap co cam giac exhibition map.
- `1440px`: khong rong trai, section co max-width va visual can bang.

### 13.5. Tieu chi "kham pha"

Nguoi hoc sau 30 giay tren homepage phai hieu:

- Day la mot trien lam tri thuc ve CNXHKH.
- Co 7 phong/room de di qua.
- Moi room co mo hinh truc quan, case, media va cau hoi.
- Co the bam de mo timeline, xem media, thu build concept va lam scenario.
- Flashcard/quiz la cong cu ho tro sau khi kham pha, khong phai toan bo san pham.
