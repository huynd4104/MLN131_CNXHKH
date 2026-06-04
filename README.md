# Cổng Học Tập Lịch Sử Tri Thức MLN131 - Chủ Nghĩa Xã Hội Khoa Học

Cổng học tập trực tuyến nâng cao được thiết kế theo concept **"Bảo tàng lịch sử số & Lưu trữ tri thức học thuật" (Digital History Museum & Academic Knowledge Archive)** dành riêng cho môn học **MLN131 - Chủ nghĩa xã hội khoa học** (Bậc Đại học). 

Dự án được xây dựng bằng công nghệ thuần túy (Vanilla HTML/CSS/JS) nhằm tối ưu hóa hiệu năng, cho phép chạy trực tiếp bằng cách mở tệp tin cục bộ mà không cần cài đặt máy chủ phức tạp.

## 🔗 Liên kết Dự án

- **Demo trực tuyến (Vercel):** [https://mln131-chxhkh.vercel.app](https://mln131-chxhkh.vercel.app)
- **Kho lưu trữ mã nguồn (GitHub):** [https://github.com/huynd4104/MLN131_CNXHKH](https://github.com/huynd4104/MLN131_CNXHKH)

## 🌟 Tính năng chính đã nâng cấp

1. **Giao diện Bảo tàng Học thuật (Academic Theme):**
   - Màu sắc chủ đạo: Xanh navy tối sâu thẳm kết hợp đường viền vàng ánh kim (Gold Amber) và điểm nhấn đỏ trầm cách mạng (Crimson).
   - Phông chữ kết hợp: Phông Serif `Lora` cổ điển giúp tăng khả năng tập trung khi đọc tài liệu lý thuyết, phông `Outfit` hiện đại cho các khối điều khiển trực quan.
   - Hiệu ứng chuyển động lật thẻ, slide chương học di động mượt mà.

2. **Dòng chảy lịch sử tư tưởng (Knowledge Timeline):**
   - Tái hiện trực quan 8 cột mốc phát triển lớn của Chủ nghĩa xã hội khoa học từ các điều kiện kinh tế - xã hội, các phát kiến lý luận của C.Mác - Ph.Ăngghen cho đến công cuộc đổi mới tại Việt Nam.

3. **Sơ đồ tư duy toàn môn (Interactive Concept Map):**
   - Bản đồ tư duy trực quan liên kết 7 chương học chính ở trung tâm màn hình, hỗ trợ click/hover tương tác nhanh để xem khái quát nội dung và truy cập thẳng vào bài học chi tiết.

4. **Trang đọc bài học chuyên sâu (Curriculum Reader):**
   - Phân tích đầy đủ 7 chương học bám sát khung giáo trình chuẩn của Bộ GD&ĐT.
   - Mỗi chương có đầy đủ: Mục tiêu học tập (Kiến thức, Kỹ năng, Thái độ), Trục kiến thức chương, Tóm tắt khoa học 3 mục chính (I, II, III), 5 Thuật ngữ then chốt, phần Liên hệ thực tiễn Việt Nam, và 3 Câu hỏi tự luận ôn tập.

5. **Công cụ học tập thông minh (Study Tools):**
   - **Flashcards học thuật:** Phương pháp lặp lại ngắt quãng lật thẻ 3D ghi nhớ 35 thuật ngữ cốt lõi môn học. Đánh giá trạng thái thẻ ("Biết rồi" / "Cần ôn lại") và lưu tiến độ vào `LocalStorage`.
   - **Luyện đề trắc nghiệm nâng cao:** Cho phép thi thử theo từng chương cụ thể hoặc làm bài thi tổng hợp nhanh 10 câu ngẫu nhiên. Cung cấp chấm điểm tự động, so sánh Kỷ lục và hiển thị Giải thích chi tiết đáp án ngay lập tức.
   - **Review Mode (Tóm tắt nhanh):** Khối thẻ học tóm gọn 5 ý chính cần nhớ khi đi thi, 5 thuật ngữ và 3 câu hỏi cho mỗi chương trên một trang duy nhất để ôn thi nước rút.
   - **Search Engine:** Công cụ tìm kiếm văn bản toàn bộ học liệu, tự động làm nổi bật (highlight) các cụm từ khớp trong kết quả tra cứu.

6. **Tính năng bổ trợ UX:**
   - Thanh tiến độ cuộn trang (Scroll Progress Bar) và nút quay nhanh lên đầu trang (Back to Top).
   - Đồng bộ hóa chỉ số chuỗi học tập hàng ngày (Streak) và trạng thái Dark/Light Mode.
   - Hệ thống Toast cảnh báo sinh động khi hoàn thành các mục tiêu học tập.
   - Tối ưu hóa hoàn toàn trên thiết bị di động (sử dụng Bottom Navigation Bar tiện lợi).

## 📂 Cấu trúc thư mục dự án

```text
MLN131_CNXHKH/
├── index.html       # Tệp cấu trúc giao diện chính (SPA layout)
├── style.css        # Tệp phong cách giao diện bảo tàng tri thức
├── js/
│   ├── data.js      # Tệp chứa dữ liệu tĩnh 7 chương học & Timeline
│   └── app.js       # Tệp xử lý logic điều hành và lưu trữ LocalStorage
├── README.md        # Tài liệu hướng dẫn dự án
└── .gitignore       # Cấu hình bỏ qua tệp tin rác
```

## 🚀 Hướng dẫn chạy cục bộ

### Cách 1: Mở trực tiếp (Không cần máy chủ)
1. Tải dự án về máy tính hoặc clone bằng lệnh:
   ```bash
   git clone https://github.com/huynd4104/MLN131_CNXHKH.git
   ```
2. Truy cập vào thư mục, kích đúp chuột vào file `index.html` để chạy trực tiếp trên bất kỳ trình duyệt nào.

### Cách 2: Chạy bằng Live Server (Khuyên dùng)
1. Mở thư mục dự án bằng **Visual Studio Code**.
2. Cài đặt tiện ích mở rộng **Live Server**.
3. Bấm nút **"Go Live"** ở góc dưới cùng bên phải để khởi chạy máy chủ cục bộ tại địa chỉ `http://127.0.0.1:5500`.

## ✏️ Hướng dẫn chỉnh sửa nội dung bài học

Để sửa đổi nội dung tóm tắt lý thuyết, thêm thuật ngữ hoặc bổ sung câu hỏi trắc nghiệm:
1. Mở file [js/data.js](file:///Users/huy/Documents/MLN131_CHXHKH/js/data.js).
2. Tìm mảng `CHAPTERS_DATA` và chỉnh sửa các trường tương ứng của chương mục cần cập nhật.
3. Dữ liệu sẽ tự động đồng bộ lên giao diện ngay khi bạn lưu file và làm mới trình duyệt.

---
*Ghi chú: Bản quyền dự án thuộc về người dùng huynd4104. Trang web phục vụ mục đích phi thương mại, giúp nâng cao chất lượng học tập và giảng dạy môn học Chủ nghĩa xã hội khoa học tại Việt Nam.*
