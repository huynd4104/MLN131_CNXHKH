# MLN131 - Chủ nghĩa xã hội khoa học (Study Portal)

Một cổng học tập, ôn tập kiến thức trực tuyến hiện đại, thiết kế dành riêng cho môn học **MLN131 - Chủ nghĩa xã hội khoa học** (Khoa học Mác-Lênin). Dự án được triển khai trên nền tảng Vercel với công nghệ web thuần túy (Vanilla HTML/CSS/JS) tối ưu hiệu năng và giao diện Glassmorphism cao cấp.

## 🌟 Tính năng chính

- **Tổng Quan (Dashboard):** Theo dõi tiến độ học tập (số phần trăm bài học đã hoàn thành) và kết quả làm bài trắc nghiệm thông qua biểu đồ tròn trực quan.
- **Nội dung bài học (Curriculum Viewer):** Xem chi tiết 7 chương của giáo trình, định nghĩa các thuật ngữ trọng tâm của từng chương và phần liên hệ thực tiễn Việt Nam. Hỗ trợ đánh dấu "Đã đọc".
- **Trắc nghiệm luyện thi (Practice Quiz):** Bộ câu hỏi trắc nghiệm khách quan chuẩn cấu trúc đề thi chính thức, cung cấp phản hồi đúng/sai và giải thích đáp án chi tiết ngay lập tức.
- **Từ điển thuật ngữ (Glossary):** Tra cứu nhanh chóng toàn bộ khái niệm học thuật then chốt với thanh tìm kiếm thời gian thực.
- **Giao diện hiện đại:** Hỗ trợ Light/Dark Mode linh hoạt cùng các hiệu ứng chuyển động mượt mà.
- **Lưu trữ trạng thái (Persistence):** Đồng bộ hóa tiến trình học tập của bạn tự động qua `LocalStorage`.

## 🛠️ Công nghệ sử dụng

- **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism, CSS Transitions/Animations).
- **Logic & State:** Vanilla Javascript (ES6+).
- **Icons & Fonts:** FontAwesome 6, Google Fonts (Be Vietnam Pro & Outfit).
- **Deployment:** Vercel & GitHub Actions (CI/CD).

## 🚀 Hướng dẫn chạy cục bộ

1. Clone repository về máy tính:
   ```bash
   git clone https://github.com/huynd4104/MLN131_CNXHKH.git
   cd MLN131_CNXHKH
   ```
2. Mở file `index.html` trực tiếp trên trình duyệt hoặc sử dụng extension **Live Server** trên VS Code.
3. Chạy với vercel dev nếu đã cài đặt vercel:
   ```bash
   vercel dev
   ```

## 📦 Deploy lên Vercel

Dự án đã được liên kết trực tiếp với Vercel và GitHub. Mỗi lần bạn `git push` lên nhánh `main`, hệ thống CI/CD của Vercel sẽ tự động build và deploy phiên bản mới nhất.
