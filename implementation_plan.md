# MLN131 Cosmic Knowledge Exhibition Upgrade

Bản kế hoạch này định hình việc nâng cấp giao diện và trải nghiệm người dùng của website MLN131 từ **Triển lãm học thuật sáng màu/giấy cổ** thành một **Vũ trụ tri thức Chủ nghĩa xã hội khoa học (MLN131 Cosmic Knowledge Exhibition)**. 

Mục tiêu cốt lõi là chuyển đổi toàn bộ 7 chương học của môn học thành **7 hành tinh tri thức (Knowledge Planets)** trong một không gian học tập mang tính chất điện ảnh (cinematic), hiện đại và cao cấp, mang lại cảm hứng khám phá như một chuyến du hành vũ trụ.

---

## 1. Vì sao cần đổi từ Exhibition sáng sang Cosmic Vibe?

* **Vượt qua tính khô khan của lý luận chính trị**: Chủ nghĩa xã hội khoa học (CNXHKH) là môn học nặng về lý luận, nhiều chữ. Nếu chỉ sử dụng thiết kế sáng màu kiểu giấy cổ hoặc dashboard học tập thông thường, người học vẫn sẽ có cảm giác đang đọc một cuốn giáo trình số hóa.
* **Tạo hiệu ứng cảm xúc mạnh mẽ (Wow Factor)**: Cosmic Vibe (Vũ trụ tri thức) chuyển đổi góc nhìn: môn học trở thành một **Cosmic Knowledge Journey**. Mỗi chương học không còn là một bài đọc lý thuyết đơn điệu mà là một hành tinh tri thức đang quay trên quỹ đạo lớn của hệ tư tưởng xã hội.
* **Chiều sâu thị giác**: Sử dụng tông màu tối (Space Navy, Deep Cosmic Blue) kết hợp với các dải tinh vân màu (Nebula Gradient), đường quỹ đạo (Orbit Line), và các điểm sáng tri thức (Glow) sẽ giúp giao diện trông cực kỳ premium, hiện đại, thu hút sự tập trung và giảm mỏi mắt khi đọc lâu.

---

## 2. Cần học hỏi gì từ MLN122_web?

Không sao chép nguyên bản mã nguồn React hay các thư viện nặng của MLN122, mà học tập **cảm giác thị giác và trải nghiệm tương tác**:

* **Ấn tượng từ giây đầu tiên**: Trang chủ mở ra bằng một sơ đồ quỹ đạo tri thức lớn (Interactive Orbit Map) làm trọng tâm điều hướng, thay vì hiển thị ngay thanh tiến độ hoặc các con số thống kê khô khan.
* **Định danh độc bản cho từng chủ đề (Visual Identity)**: Mỗi chương học (Room) được nâng cấp thành một hành tinh (Planet) có mã màu neon riêng biệt, có icon/visual motif đặc trưng và một câu hỏi trung tâm thúc đẩy tư duy.
* **Progressive Discovery (Khám phá lũy tiến)**: Thông tin được chia nhỏ thành các thẻ tín hiệu tri thức (Knowledge signals) và các mô hình không gian (Concept models as Space modules). Người học click để mở rộng chi tiết thay vì bị ngợp bởi lượng chữ lớn.
* **Micro-interactions tạo nhịp**: Các tương tác click mở khóa các mốc lịch sử, phản hồi đúng sai trực tiếp khi thử ráp mô hình giúp trang web sinh động và giữ chân người học lâu hơn.
* **Thiết kế Mobile-first an toàn**: Đảm bảo các chuyển động và sơ đồ phức tạp hoạt động mượt mà trên di động thông qua click/tap thay vì hover-only hoặc drag-drop phức tạp.

---

## 3. Homepage Cosmic sẽ thay đổi thế nào?

Trang chủ sẽ được xây dựng lại hoàn toàn để đưa người học vào một trạm không gian khám phá tri thức. Thứ tự các phần (Section) trên Homepage mới như sau:

1. **Cosmic Hero**: Điểm nhấn lớn nhất. Tự đề *"Vũ trụ tri thức Chủ nghĩa xã hội khoa học"*, mô tả ngắn gọn và 3 nút bấm hành động (Bắt đầu hành trình, Mở bản đồ vũ trụ, Ôn tập nhanh). Phía bên phải/dưới là một **Interactive Orbit Map** lớn: Tâm điểm là "CNXHKH" phát sáng, xung quanh có 7 node hành tinh tương ứng với 7 chương quay quanh theo các đường quỹ đạo nét đứt mảnh, kèm theo các floating keyword chips trôi nhẹ tự động (`Giai cấp công nhân`, `Dân chủ`, `Nhà nước`, v.v.).
2. **Galaxy Highlights**: 3 thẻ lớn mang tính giới thiệu tính năng trải nghiệm (không phải stat): *Mô hình hóa khái niệm (Concept Modules)*, *Tín hiệu thực tiễn Việt Nam (Case Study Signals)*, *Tương tác học tập (Interactive Missions)*.
3. **Galaxy Map - 7 Knowledge Planets**: Danh sách 7 chương được thiết kế lại dưới dạng các thẻ hành tinh (Planet Cards) chạy dọc theo một quỹ đạo không gian. Mỗi thẻ sở hữu màu sắc chủ đạo riêng, số hiệu hành tinh, câu hỏi cốt lõi, và nút *"Khám phá hành tinh này"*.
4. **Concept Model Preview**: Trình chiếu trước 3 mô hình trực quan độc đáo của Chương 1 (Flow), Chương 2 (Constellation Network), Chương 5 (Social Network) để khơi gợi tò mò.
5. **Orbit Timeline Unlock**: Dòng thời gian lịch sử hình thành lý luận. Các mốc thời gian hiển thị như những vì sao trên quỹ đạo. Ban đầu các mốc ở trạng thái mờ (locked). Người học click để "thắp sáng" (unlock) và hiển thị nội dung chi tiết. Có bộ đếm tiến trình mở khóa lưu trữ vào `localStorage` qua key `MLN131_unlockedTimeline`.
6. **Media Learning Station**: Các thẻ video học tập được thiết kế như những trạm thu phát tín hiệu không gian. Thumbnail được render bằng CSS gradient và icon play động. Click sẽ mở modal xem chi tiết.
7. **Case Study Signals**: Các tín hiệu thực tế từ Việt Nam hiển thị dưới dạng thẻ radar có hiệu ứng glow nhẹ.
8. **Study Tools Dock**: Nơi tập hợp các công cụ bổ trợ (Quiz ôn tập, Thẻ nhớ Flashcards, Ôn thi nhanh, Từ điển tra cứu) vào một bảng điều khiển (Dock) gọn gàng ở cuối trang chủ, tránh làm loãng vibe vũ trụ ở phần trên.
9. **Continue Mission**: Bảng theo dõi tiến độ hoàn thành các chương học và gợi ý hành tinh tiếp theo cần khám phá để người học tiếp tục nhiệm vụ.

---

## 4. 7 Chương = 7 Hành tinh tri thức (Knowledge Planets)

Mỗi hành tinh sẽ có màu sắc chủ đạo, visual motif riêng và câu hỏi trung tâm đặc thù:

| Số hiệu | Tên hành tinh (Planet) | Tên chương | Câu hỏi trung tâm | Mã màu chủ đạo | Visual Motif |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Planet 01** | **Origin Planet**<br>*(Hành tinh Khởi nguồn)* | Chương 1: Nhập môn Chủ nghĩa xã hội khoa học | Vì sao Chủ nghĩa xã hội chuyển từ không tưởng thành khoa học? | Electric Blue<br>`#38BDF8` | **Flow Model**: Dòng chảy năng lượng lý luận |
| **Planet 02** | **Worker Class Planet**<br>*(Hành tinh Giai cấp công nhân)* | Chương 2: Sứ mệnh lịch sử của giai cấp công nhân | Vì sao giai cấp công nhân có sứ mệnh lịch sử xóa bỏ áp bức? | Crimson Red<br>`#DC2626` | **Constellation Network**: Chòm sao liên kết các nhân tố |
| **Planet 03** | **Transition Planet**<br>*(Hành tinh Quá độ)* | Chương 3: Chủ nghĩa xã hội và thời kỳ quá độ | Vì sao quá độ lên chủ nghĩa xã hội là một hành trình lâu dài và phức tạp? | Gold Star<br>`#FBBF24` | **Roadmap Path**: Tuyến đường bay qua các trạm cải biến |
| **Planet 04** | **Democracy & State Planet**<br>*(Hành tinh Dân chủ & Nhà nước)* | Chương 4: Dân chủ XHCN và Nhà nước XHCN | Nền dân chủ và nhà nước pháp quyền XHCN bảo đảm quyền lực nhân dân thế nào? | Emerald Green<br>`#10B981` | **Comparison Panel**: Hai nửa quỹ đạo đối xứng |
| **Planet 05** | **Social Structure Planet**<br>*(Hành tinh Cơ cấu xã hội)* | Chương 5: Cơ cấu xã hội - giai cấp và liên minh | Tại sao liên minh giai cấp lại là nền tảng của đại đoàn kết dân tộc? | Nebula Purple<br>`#8B5CF6` | **Constellation Diagram**: Chòm sao liên minh xã hội |
| **Planet 06** | **Nation & Religion Planet**<br>*(Hành tinh Đoàn kết)* | Chương 6: Vấn đề dân tộc và tôn giáo | Làm thế nào để giải quyết hài hòa vấn đề dân tộc và tôn giáo trong phát triển? | Cyan Silver<br>`#06B6D4` | **Harmony Orbit**: Quỹ đạo cân bằng và hài hòa |
| **Planet 07** | **Family Planet**<br>*(Hành tinh Gia đình)* | Chương 7: Vấn đề gia đình | Vì sao gia đình được xem là tế bào xây dựng nên toàn bộ cơ thể xã hội? | Pink Magenta<br>`#EC4899` | **Habitat Module**: Trạm sinh thái bảo bọc tế bào |

---

## 5. Chapter Detail = Planet Exploration Page

Khi người học click vào chi tiết một chương, giao diện sẽ chuyển đổi thành một trang thám hiểm hành tinh tri thức:

1. **Planet Hero**:
   * Tiêu đề lớn hiển thị tên hành tinh và tên chương cách điệu.
   * Câu hỏi trung tâm đặt trong một khung kính mờ (glassmorphism) nổi bật.
   * Visual hành tinh lớn ở góc màn hình có chuyển động xoay nhẹ (CSS rotation).
   * Nút hành động nhanh: *Học nhanh, Xem mô hình vũ trụ, Làm quiz hành tinh*.
2. **Concept Model**: Mô hình trực quan được render bằng CSS động theo style vũ trụ riêng biệt cho từng chương.
3. **Quick Understand**: Khái quát nhanh 3-4 dòng cốt lõi nhất của chương.
4. **3 Key Ideas (Knowledge Signals)**: 3 thẻ tín hiệu cốt lõi với biểu tượng nhấp nháy nhẹ.
5. **Case Study Signal**: Tình huống liên hệ thực tiễn Việt Nam đi kèm radar icon và gợi ý phân tích.
6. **Media Station**: Thẻ xem video bài giảng với thumbnail cosmic gradient sang trọng.
7. **Comparison Module** (Nếu có - áp dụng cho Chương 1, 3, 4, 7): So sánh đối sánh trực quan dạng split-panel (2 cột trên desktop, stacked trên mobile).
8. **Self-check / Mini interaction**: Tương tác ngắn (ráp chữ hoặc chọn kịch bản nhiệm vụ) để kiểm tra nhanh mức độ tiếp thu.
9. **Detailed Knowledge (Deep Exploration)**: Nội dung chi tiết được thu gọn hoàn toàn trong các accordion dạng khối phi thuyền (Space panels). Người học muốn tìm hiểu sâu phần nào chỉ cần click để mở rộng, không để chữ tràn lan mặc định.

---

## 6. Orbit Timeline hoạt động ra sao?

* **Thiết kế**: Không dùng danh sách dọc đơn điệu. Timeline được hiển thị như một dải quỹ đạo cong nối liền các ngôi sao sáng đại diện cho các mốc lịch sử (Tiền đề KT-XH, Tiền đề KH tự nhiên, Mác & Ăngghen, Tuyên ngôn Đảng Cộng sản, Lênin phát triển, Vận dụng hiện đại, Việt Nam).
* **Cơ chế tương tác**:
  * Ban đầu, các ngôi sao ở trạng thái mờ (dim/locked) và nội dung giải thích bị ẩn.
  * Người học click/tap vào một ngôi sao để "mở khóa" (unlock). Ngôi sao đó sẽ phát sáng rực rỡ (glow), có âm thanh click nhẹ (tùy chọn) và nội dung chi tiết của mốc lịch sử hiện ra dưới dạng một hộp thông tin kính mờ.
  * Thanh tiến độ sẽ đếm: *"Đã thắp sáng x/8 tín hiệu tri thức lịch sử"*.
  * Trạng thái mở khóa được lưu trữ trong `localStorage.setItem('MLN131_unlockedTimeline', ...)` để khi người dùng tải lại trang, các ngôi sao đã mở vẫn tiếp tục sáng.
* **Mobile Fallback**: Trên mobile, dải quỹ đạo cong chuyển thành một đường dọc chòm sao (Vertical Star Path) thẳng đứng để cuộn mượt mà bằng một ngón tay, không gây lỗi tràn khung hay scroll ngang khó chịu.

---

## 7. Concept Models theo Vibe Vũ trụ

Các mô hình khái niệm sẽ được trực quan hóa bằng CSS và HTML thuần, sử dụng các hiệu ứng phát sáng, đường nối và chuyển động nhẹ:

* **Chương 1 - Flow Model (Dòng chảy Khởi nguồn)**: Năng lượng lý luận chảy từ điểm xuất phát *Ước mơ công bằng* $\rightarrow$ đi qua các xúc tác *Tiền đề KT-XH & Tiền đề lý luận* $\rightarrow$ hội tụ tại *Mác - Ăngghen sáng lập CNXHKH*. Các đường line nối giữa các nút sẽ có hiệu ứng viền sáng chạy dọc.
* **Chương 2 - Network Model (Chòm sao Sứ mệnh)**: Các nút gồm *Địa vị kinh tế*, *Nhân tố chủ quan*, *Đảng Cộng sản*, *Sứ mệnh lịch sử* được sắp xếp như một chòm sao. Click vào mỗi ngôi sao sẽ mở ra phân tích chi tiết.
* **Chương 3 - Roadmap Model (Lộ trình Quá độ)**: Sơ đồ dạng đường bay của tàu vũ trụ vượt qua các trạm trung chuyển cải biến (Kinh tế $\rightarrow$ Chính trị $\rightarrow$ Văn hóa) hướng tới đích đến *Xây dựng xong CNXH*.
* **Chương 4 - Comparison Model (Quỹ đạo đối xứng)**: So sánh Nền dân chủ tư sản và Dân chủ XHCN trên hai nửa vòng tròn quỹ đạo đối xứng nhau, thể hiện rõ tính vượt trội của dân chủ XHCN.
* **Chương 5 - Network Model (Liên minh giai cấp)**: Chòm sao liên kết xã hội với nút trung tâm là *Giai cấp công nhân*, liên kết bền chặt tới các nút vệ tinh *Nông dân*, *Trí thức*, *Doanh nhân*.
* **Chương 6 - Balance Model (Quỹ đạo Cân bằng)**: Biểu diễn mối quan hệ hài hòa, tôn trọng lẫn nhau giữa các dân tộc và tự do tín ngưỡng tôn giáo dưới dạng một vòng tròn cân bằng lực (Harmony Ring).
* **Chương 7 - House Model (Trạm sinh thái Gia đình)**: Một trạm cơ sở không gian (Space Habitat Base) với các phân khu đại diện cho các chức năng gia đình (Tái sản xuất con người, Kinh tế, Giáo dục, Tình cảm) kết nối hữu cơ với nhau.

---

## 8. Media Learning Station sẽ làm gì?

* Nâng cấp từ mục Media thông thường thành một trạm thu nhận sóng bài giảng.
* Thiết kế card video với **thumbnail sử dụng CSS radial-gradient vũ trụ kết hợp vector hành tinh** nghệ thuật (không dùng màu xám trống hoặc hình ảnh vỡ).
* Thêm nút play phát sáng nhẹ (pulse glow transition) ở giữa card.
* Khi click vào card, một **Space Panel Modal** sẽ hiện ra mượt mà giữa màn hình, hiển thị tiêu đề, giới thiệu chi tiết nội dung video và nút bấm mở video bài giảng.
* Nếu chưa có link video thật (`url: ""`), nút xem sẽ chuyển thành nút màu xám mờ và hiển thị thông báo: *"Trạm phát sóng đang kết nối dữ liệu. Nội dung video sẽ được bổ sung sau."*

---

## 9. Case Study Signals

* Mỗi case study được xem như một **Tín hiệu thực tiễn Việt Nam** gửi về trạm không gian.
* Giao diện thẻ có biểu tượng cột phát sóng radar đang nhấp nháy (radar pulse animation).
* Thiết kế viền thẻ phát sáng nhẹ (border glow) theo mã màu chủ đạo của chương đó.
* Nội dung thiết kế ngắn gọn, chia rõ 4 phần:
  1. *Signal Title*: Tên tín hiệu thực tiễn.
  2. *Situation*: Tình huống thực tế (tối đa 4-5 dòng).
  3. *Question*: Câu hỏi tư duy kích thích suy nghĩ của người học.
  4. *Analysis Hints*: Các gợi ý phân tích dưới dạng các chip nhỏ hoặc gạch đầu dòng ngắn gọn.

---

## 10. Mini Interactions

Tích hợp tối thiểu 3 hoạt động tương tác thực chất bằng click/tap:

* **Tương tác A: Build the Concept (Lắp ráp mô-đun tri thức)**:
  * Hiển thị ở cuối Chương 1 hoặc Chương 5.
  * Người học nhận nhiệm vụ lắp ráp mô hình (ví dụ: Chọn đúng 3 tiền đề trực tiếp ra đời CNXHKH).
  * Giao diện cung cấp các chip keyword để chọn. Khi click chọn, chip sẽ bay vào mô hình lắp ráp.
  * Nhấn *"Kiểm tra"* để nhận đánh giá đúng/sai ngay lập tức cùng dòng giải thích ngắn.
* **Tương tác B: Decision Scenario (Nhiệm vụ Quyết định)**:
  * Đặt trong phần khám phá Chương 3 hoặc Chương 6.
  * Đưa ra một tình huống giả định thực tế (Ví dụ: Bạn là cán bộ địa phương xử lý một vụ việc liên quan đến hoạt động tôn giáo).
  * Cung cấp 3 hướng giải quyết. Người học bấm chọn một hướng đi.
  * Hệ thống phản hồi kết quả: nếu chọn hướng đúng sẽ giải thích tại sao đúng theo luật và lý luận; nếu chọn hướng sai/chưa tối ưu sẽ chỉ rõ điểm thiếu sót.
* **Tương tác C: Timeline Unlock (Mở khóa quỹ đạo lịch sử)**:
  * Trải nghiệm thắp sáng các mốc lịch sử trên dòng thời gian ở trang chủ bằng cách click/tap.

---

## 11. Cập nhật cấu trúc dữ liệu (Data Structure)

Điều chỉnh và bổ sung các thuộc tính mới trong file `data.js` nhằm hỗ trợ kết xuất giao diện Cosmic.

### Dữ liệu cho từng chương học (`CHAPTERS_DATA`):

```javascript
{
  id: 1,
  title: "Nhập môn Chủ nghĩa xã hội khoa học",
  shortTitle: "Nhập môn CNXHKH",
  description: "...",
  
  // Bổ sung thông tin định danh hành tinh
  planet: {
    number: "01",
    name: "Hành tinh Khởi nguồn",
    englishName: "Origin Planet",
    visualMotif: "flow",
    orbitLabel: "Planet 01"
  },
  
  // Bổ sung cấu trúc mô hình khái niệm
  conceptModel: {
    type: "flow", // flow, network, roadmap, comparison, balance, house
    title: "Từ không tưởng đến khoa học",
    description: "Sự chuyển biến tất yếu từ ước mơ nhân văn thành học thuyết khoa học.",
    nodes: [
      { id: "n1", title: "Khát vọng công bằng", description: "Các tư tưởng xã hội không tưởng phê phán.", icon: "fa-solid fa-cloud-sun" },
      { id: "n2", title: "Tiền đề kinh tế - xã hội", description: "Sự phát triển của đại công nghiệp và phong trào công nhân.", icon: "fa-solid fa-industry" },
      { id: "n3", title: "Ba phát kiến vĩ đại", description: "Nền tảng triết học, kinh tế và sứ mệnh lịch sử.", icon: "fa-solid fa-key" },
      { id: "n4", title: "Tuyên ngôn Đảng Cộng sản", description: "Đánh dấu sự ra đời chính thức của CNXHKH.", icon: "fa-solid fa-file-signature" }
    ],
    connections: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" }
    ]
  },
  
  // Bổ sung trạm truyền thông bài giảng
  media: {
    title: "CNXHKH ra đời trong bối cảnh lịch sử nào?",
    type: "video",
    thumbnail: "", // Vẽ động bằng CSS gradient nếu rỗng
    description: "Xem video tóm tắt bối cảnh cách mạng công nghiệp thế kỷ XIX và sự trỗi dậy của giai cấp vô sản để hiểu sâu lý do ra đời của môn học.",
    sourceLabel: "Media Learning Station",
    url: "" // Để trống để kiểm thử fallback "Them link sau"
  },
  
  // Bổ sung tín hiệu thực tiễn Việt Nam
  caseStudy: {
    title: "Vận dụng phương pháp khoa học phân tích thực tế Việt Nam",
    situation: "Trong thời kỳ đổi mới, Việt Nam vừa phải đẩy mạnh phát triển kinh tế thị trường, vừa phải giữ vững định hướng xã hội chủ nghĩa, giải quyết hài hòa giữa tăng trưởng kinh tế và công bằng xã hội.",
    question: "Làm thế nào để sinh viên vận dụng lý luận CNXHKH phân tích tính đúng đắn của chính sách an sinh xã hội hiện nay?",
    analysisHints: [
      "Nhận diện bản chất nhân văn của chính sách xã hội Việt Nam.",
      "Đối chiếu giữa mong muốn chủ quan và quy luật khách quan trong phát triển kinh tế.",
      "Vai trò lãnh đạo của Đảng và quản lý của Nhà nước trong điều tiết xã hội."
    ]
  },
  
  // Bổ sung so sánh đối sánh (chỉ áp dụng ở Chương 1, 3, 4, 7)
  comparison: {
    title: "So sánh đối sánh tiến trình lý luận",
    keyDifference: "Tính thực tiễn và lực lượng cách mạng thực hiện",
    left: {
      label: "Chủ nghĩa xã hội không tưởng",
      points: [
        "Mong muốn xây dựng xã hội công bằng nhưng bằng con đường hòa bình, thuyết phục.",
        "Chưa chỉ ra được quy luật phát triển khách quan của chủ nghĩa tư bản.",
        "Chưa tìm ra lực lượng xã hội tiên phong để thực hiện cuộc cách mạng."
      ]
    },
    right: {
      label: "Chủ nghĩa xã hội khoa học",
      points: [
        "Chỉ ra con đường đấu tranh giai cấp và cách mạng vô sản thực chất.",
        "Dựa trên các phát hiện khoa học về quy luật kinh tế và lịch sử xã hội.",
        "Xác định rõ sứ mệnh lịch sử thế giới của giai cấp công nhân."
      ]
    }
  },
  
  // Các dữ liệu cũ giữ nguyên...
  objectives: { ... },
  sections: [ ... ],
  keyTerms: [ ... ],
  vietnamConnection: "...",
  essayQuestions: [ ... ],
  examTips: [ ... ],
  quizzes: [ ... ]
}
```

### Dữ liệu tương tác toàn cục (`COSMIC_INTERACTIONS`):

```javascript
const COSMIC_INTERACTIONS = {
  buildConcept: {
    question: "Lắp ráp mô hình: Chọn đúng 3 tiền đề lý luận và khoa học trực tiếp dẫn đến sự ra đời của CNXHKH.",
    options: [
      { id: "opt1", text: "Chủ nghĩa xã hội không tưởng phê phán Pháp", isCorrect: true, feedback: "Chính xác! Cung cấp những phê phán sâu sắc về CNTB." },
      { id: "opt2", text: "Thuyết tiến hóa của Darwin", isCorrect: true, feedback: "Chính xác! Một trong ba phát kiến khoa học tự nhiên làm nền tảng." },
      { id: "opt3", text: "Triết học cổ điển Đức (phần Duy vật & Biện chứng)", isCorrect: true, feedback: "Chính xác! Tiền đề triết học để cải biến thế giới quan." },
      { id: "opt4", text: "Thuyết tương đối của Einstein", isCorrect: false, feedback: "Sai rồi! Thuyết tương đối ra đời đầu thế kỷ XX, sau khi CNXHKH đã hình thành." },
      { id: "opt5", text: "Kinh tế học vĩ mô hiện đại", isCorrect: false, feedback: "Sai rồi! Đây là lý thuyết kinh tế hiện đại sau này." }
    ],
    correctExplanation: "Tiền đề ra đời CNXHKH gồm Triết học cổ điển Đức, Kinh tế chính trị cổ điển Anh, CNXH không tưởng Pháp kết hợp với 3 phát kiến khoa học tự nhiên lớn (Học thuyết tế bào, Tiến hóa, Bảo toàn năng lượng)."
  },
  
  decisionScenario: {
    title: "Nhiệm vụ Quyết định: Ứng phó tín ngưỡng tôn giáo tại địa phương",
    situation: "Tại một xã vùng cao đang xảy ra hiện tượng một số kẻ xấu lợi dụng quyền tự do tín ngưỡng để tuyên truyền các hủ tục lạc hậu, ép buộc người dân bỏ làm ăn để đi cầu nguyện trái phép, gây mất an ninh trật tự.",
    question: "Với vai trò là cán bộ văn hóa - xã hội địa phương, bạn sẽ đưa ra quyết định xử lý như thế nào để vừa bảo đảm quyền tự do tín ngưỡng vừa giữ vững ổn định xã hội theo tinh thần CNXHKH?",
    options: [
      {
        id: "dec1",
        text: "Tuyên truyền giải thích cho người dân phân biệt rõ tự do tín ngưỡng hợp pháp và hành vi lợi dụng tôn giáo; đồng thời phối hợp lực lượng chức năng xử lý nghiêm kẻ xấu cầm đầu kích động.",
        isCorrect: true,
        feedback: "Quyết định xuất sắc! Phương án này tuân thủ đúng chính sách tôn giáo của Đảng (tôn trọng tự do tín ngưỡng nhưng kiên quyết đấu tranh với hành vi lợi dụng tôn giáo phá hoại)."
      },
      {
        id: "dec2",
        text: "Ra lệnh cấm toàn bộ mọi hoạt động cầu nguyện, tụ họp tôn giáo trong xã để đảm bảo trật tự tuyệt đối trước mắt.",
        isCorrect: false,
        feedback: "Phương án chưa phù hợp! Vi phạm quyền tự do tín ngưỡng, tôn giáo của công dân, dễ bị các thế lực thù địch lợi dụng để kích động mâu thuẫn lớn hơn."
      },
      {
        id: "dec3",
        text: "Mặc kệ người dân tự do hoạt động vì tôn giáo là quyền cá nhân, chính quyền không nên can thiệp vào đức tin.",
        isCorrect: false,
        feedback: "Phương án thiếu trách nhiệm! Để mặc kẻ xấu lợi dụng tôn giáo sẽ gây mất an ninh trật tự, ảnh hưởng trực tiếp đến đời sống sản xuất và đoàn kết của người dân."
      }
    ]
  }
};
```

---

## 12. Mobile xử lý Cosmic Visual thế nào để không lỗi hiển thị?

Hệ thống CSS và JS sẽ tuân thủ nghiêm ngặt các quy tắc thiết kế responsive:

* **Không dùng Layout ngang (No Horizontal Scroll)**: Toàn bộ cấu trúc trang chủ và trang chi tiết sẽ cuộn theo chiều dọc.
* **Biến đổi Orbit Map trên Mobile**: Bản đồ quỹ đạo 7 hành tinh ở Hero trên màn hình nhỏ ($< 768px$) sẽ tự động chuyển thành một chuỗi các thẻ hành tinh xếp chồng dọc đẹp mắt (Vertical Stacked Cosmic Cards) với hiệu ứng glow nhẹ.
* **Visual Models thông minh**:
  * *Flow Model / Roadmap*: Chuyển thành dạng chuỗi sao thẳng đứng nối nhau bằng đường line nét đứt dọc.
  * *Network Model*: Chuyển từ mạng lưới đa hướng thành một danh sách liên kết chòm sao rút gọn.
  * *Comparison Module*: Chuyển từ bố cục 2 cột song song thành bố cục 2 thẻ trên/dưới.
* **Target chạm an toàn**: Các nút bấm tương tác, các ngôi sao trên timeline và các tab điều hướng có chiều cao tối thiểu là 44px, khoảng cách giữa các phần tử tối thiểu 10px để tránh chạm nhầm đầu ngón tay.
* **Độ tương phản cao trên nền tối**: Văn bản sử dụng màu trắng dịu (`#F8FAFC`) hoặc xám sáng (`#CBD5E1`), tiêu đề dùng chữ đậm. Font chữ Serif (`Lora`) được giữ cho tiêu đề để tạo tính cổ điển sang trọng, font Sans-serif (`Outfit`) dùng cho nội dung để dễ đọc trên màn hình điện thoại.
* **Tối ưu hóa Modals**: Modal chi tiết video hay bảng tra cứu thuật ngữ trên mobile sẽ chiếm toàn màn hình hoặc $95\%$ chiều rộng, có nút đóng "X" lớn ở góc trên bên phải và khóa cuộn trang nền khi modal đang mở (`body.modal-open { overflow: hidden }`).

---

## 13. Kế hoạch và Lộ trình triển khai chi tiết

Quá trình nâng cấp được chia làm 8 bước cụ thể để đảm bảo an toàn hệ thống, không làm gián đoạn hay mất mát các tính năng cũ:

### Phase 1: Chuẩn hóa Dữ liệu (Exhibition Data Layer)
* Bổ sung các thuộc tính `planet`, `conceptModel`, `media`, `caseStudy`, `comparison` vào từng phần tử của mảng `CHAPTERS_DATA` trong `data.js`.
* Thêm hằng số `COSMIC_INTERACTIONS` vào cuối file dữ liệu.
* Cập nhật file `validate_data.js` để kiểm tra tính hợp lệ của các thuộc tính mới nhưng vẫn giữ nguyên tính tương thích ngược cho dữ liệu cũ. Chạy thử nghiệm bằng lệnh `node js/validate_data.js`.

### Phase 2: Restructure index.html
* Điều chỉnh thẻ `<title>` và `<meta name="description">` theo concept mới.
* Thay đổi tên các tab điều hướng phụ trong `.nav-menu` (ví dụ: *"Hành trình"* giữ nguyên nhưng bổ sung icon vũ trụ, *"7 chương"* chuyển thành nhãn *"Khám phá"* hoặc *"Hành tinh"*).
* Đảm bảo cấu trúc các container chứa tab giữ nguyên để code JS routing không bị lỗi.

### Phase 3: Xây dựng Hệ thống CSS Cosmic (`style.css`)
* Định nghĩa lại các biến màu sắc trong `:root` và `body.dark-theme` (chuyển sang tông màu cosmic làm mặc định, light-theme sẽ là giao diện bổ trợ).
* Thiết kế Starfield Background bằng kỹ thuật CSS radial-gradients nhiều lớp chồng nhau tạo cảm giác chiều sâu của không gian vũ trụ.
* Thêm các class tiện ích: `.orbit-line`, `.cosmic-glow`, `.glassmorphism-card`, `.constellation-node`, `.radar-pulse`.
* Cài đặt các hiệu ứng chuyển động vi mô (Micro-animations) mượt mà như xoay chậm (slow orbit spin), phát sáng nhịp tim (glow pulse) nhưng không dùng hiệu ứng nặng gây giật lag trên mobile.

### Phase 4: Cập nhật hàm `renderOverview()`
* Viết lại hàm `renderOverview()` trong `app.js` để render trang chủ theo đúng thứ tự 9 phần của concept mới.
* Thêm các hàm helper phụ trách kết xuất từng section riêng biệt như `renderHeroExhibition()`, `renderInteractiveRoadmap()`, `renderTimelineUnlock()`, v.v.

### Phase 5: Kết xuất Concept Models động (`renderConceptModel`)
* Tạo hàm `renderConceptModel(model, themeColor)` trong `app.js` để tự động xuất mã HTML cấu trúc tương ứng với loại mô hình (`flow`, `network`, `roadmap`, `comparison`, `balance`, `house`).
* Gắn sự kiện click vào các nút/nút sao trong mô hình để hiển thị hộp mô tả thông tin tương ứng.

### Phase 6: Nâng cấp trang chi tiết chương (`renderChaptersTab`)
* Viết lại hàm `buildChapterStoryHtml()` để xuất cấu trúc Planet Exploration Page.
* Nâng cấp giao diện Story Hero thành Planet Hero hoành tráng.
* Chuyển các accordion nội dung chi tiết cũ thành dạng Space Panels bo tròn góc, có viền phát sáng nhẹ theo màu chủ đạo của chương.

### Phase 7: Tích hợp Mini Interactions và Space Modals
* Xây dựng giao diện cho 3 tương tác: Lắp ráp mô-đun (Build the Concept), Kịch bản quyết định (Decision Scenario) và Dòng thời gian (Timeline Unlock).
* Gắn bộ lắng nghe sự kiện click/tap và hiển thị phản hồi trực tiếp cho người học.
* Triển khai Space Modal cho Media Learning Station: Hỗ trợ đóng mở bằng phím `Escape`, click ra ngoài vùng modal hoặc nhấn nút đóng.

### Phase 8: Kiểm thử hồi quy và Nghiệm thu Responsive
* Chạy chương trình kiểm tra dữ liệu `validate_data.js`.
* Kiểm tra toàn bộ các tính năng cũ: Streak học tập, Trạng thái chương đã học, Tiến trình flashcards, Điểm số Quiz cao nhất, Tính năng tìm kiếm từ điển xem có hoạt động bình thường không.
* Thực hiện kiểm thử thủ công và điều chỉnh CSS trên 5 viewport bắt buộc: `390px`, `430px`, `768px`, `1024px`, và `1440px` để đảm bảo không bị tràn trang và tương tác hoàn hảo.

---

## 14. Tiêu chí nghiệm thu (Vibe Vũ trụ đạt chuẩn)

Website nâng cấp thành công phải thỏa mãn các tiêu chí sau:

1. **Về mặt Cảm xúc thị giác (Vibe)**:
   * Ngay khi tải trang chủ, người học phải bị lôi cuốn bởi không gian vũ trụ tri thức tối màu sâu thẳm, huyền ảo nhưng trang trọng.
   * Giao diện mang phong cách hiện đại, cao cấp với các đường quỹ đạo nét đứt mảnh, dải màu neon tinh tế và hiệu ứng thủy tinh mờ (glassmorphism).
   * Không có cảm giác đơn điệu của một trang web ôn thi thông thường hay dashboard giáo trình nhiều chữ.
2. **Về mặt Tương tác**:
   * Sơ đồ quỹ đạo Hero map hoạt động mượt mà, phản hồi ngay lập tức khi click chọn hành tinh.
   * Timeline lịch sử bắt buộc hoạt động theo cơ chế click thắp sáng sao, lưu được trạng thái mở khóa vào bộ nhớ trình duyệt.
   * 3 Mini Interactions hoạt động chuẩn xác, hiển thị lời giải thích rõ ràng sau khi người dùng thực hiện hành động.
3. **Về mặt Kỹ thuật & Hiệu năng**:
   * Không sử dụng thêm bất kỳ thư viện JS hay CSS nặng nào bên ngoài, giữ nguyên tính gọn nhẹ của website.
   * Các dữ liệu cũ và tiến trình học tập của người dùng được bảo toàn nguyên vẹn.
   * Hoạt động trơn tru trên mọi thiết bị di động (kiểm thử thành công các viewport từ $390px$ đến $1440px$, không có lỗi cuộn ngang).

---

> [!IMPORTANT]
> **Dừng lại tại bước này và chờ sự phê duyệt từ phía người dùng trước khi tiến hành chỉnh sửa mã nguồn chính.**
