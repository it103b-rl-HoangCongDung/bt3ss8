# 3. Lập trình Bộ lọc & Tìm kiếm Nâng cao Trạm Sạc theo Khu vực và Công suất

> 👤 **Học viên:** Hoàng Công Dũng | **Mã SV:** PTIT-HCM-009
> 🏫 **Môn học:** it103b-rl-HoangCongDung

---

## Nhiệm vụ 1: Khởi tạo và Quản lý Đa mảng dữ liệu trạm sạc

Bài tập yêu cầu quản lý đồng bộ 3 mảng song song gồm mảng mã trụ sạc 'portIds', mảng trạng thái hoạt động 'portStatuses' (chứa các giá trị 'AVAILABLE', 'CHARGING', 'ERROR') và mảng công suất sạc hiện tại 'portPowersKw'.

- Mảng portIds chứa danh sách 6 trụ sạc từ S01 đến S06.
- Mảng portStatuses lưu trạng thái vận hành tương ứng của từng trụ.
- Mảng portPowersKw lưu công suất tính bằng kW của từng trụ sạc.

## Nhiệm vụ 2: Cập nhật trạng thái phần tử theo chỉ số (Update operation)

Thực hiện cập nhật dữ liệu theo các kịch bản nghiệp vụ thực tế tại trạm sạc VinFast:

1. Xe cắm sạc vào trụ 'S01': Tìm kiếm chỉ số của 'S01' thông qua phương thức 'portIds.indexOf('S01')', sau đó cập nhật phần tử tương ứng trong mảng 'portStatuses' thành 'CHARGING'.

2. Trụ 'S03' sửa xong: Tìm kiếm chỉ số của 'S03' qua 'portIds.indexOf('S03')' và chuyển đổi trạng thái phần tử trong 'portStatuses' thành 'AVAILABLE'.

- Sử dụng hàm 'indexOf()' để định vị chính xác vị trí của trụ sạc trong mảng 'portIds'.
- Kiểm tra tính hợp lệ của chỉ số trước khi thực hiện phép gán giá trị mới nhằm tránh lỗi out-of-bounds.

## Nhiệm vụ 3: Thống kê trạng thái và Tìm kiếm công suất khả dụng cao nhất

Viết logic duyệt qua toàn bộ mảng để thực hiện hai nhiệm vụ thống kê cốt lõi:

1. Đếm tổng số lượng trụ đang ở trạng thái 'AVAILABLE' để báo cáo khả năng phục vụ xe điện.

2. Tìm kiếm trong số các trụ đang sẵn sàng ('AVAILABLE') xem trụ nào có công suất ('portPowersKw') lớn nhất để điều hướng xe công suất lớn.

- Sử dụng vòng lặp for kết hợp câu lệnh điều kiện kiểm tra trạng thái.
- Lưu trữ biến tạm để theo dõi giá trị công suất lớn nhất và mã trụ tương ứng.

---

## 📁 Danh sách tệp tin nộp bài trong Repository
- 📝 `bt3.docx`: Báo cáo tài liệu phân tích nghiệp vụ hoàn chỉnh.
- 💻 `solution_ex8.js`: Mã nguồn chương trình.
