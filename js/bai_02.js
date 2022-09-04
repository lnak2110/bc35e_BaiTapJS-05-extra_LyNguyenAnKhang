/**
 * Đầu vào:
 *  + loaiKhachHang
 *  + maKhachHang
 *  + soKenhCC
 *  + soKetNoi
 *
 * Xử lí:
 *  + Tính tiền cáp dựa vào loại khách hàng
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnTienCap').onclick = function () {
  // Đầu vào:
  var loaiKhachHang = document.getElementById('loaiKhachHang').value;
  var maKhachHang = document.getElementById('maKhachHang').value;
  var soKenhCC = document.getElementById('soKenhCC').value * 1;
  var soKetNoi = document.getElementById('soKetNoi').value * 1;

  // Xử lí:
  if (loaiKhachHang === 'nhaDan') {
    if (soKenhCC < 0) {
      alert('Số kênh cao cấp không hợp lệ!');
      return;
    }
  }
  if (loaiKhachHang === 'doanhNghiep') {
    if (soKenhCC < 0) {
      alert('Số kênh cao cấp không hợp lệ!');
      return;
    }
    if (soKetNoi <= 0) {
      alert('Số kết nối không hợp lệ!');
      return;
    }
  }

  var tienCap = tinhTienCap(loaiKhachHang, soKenhCC, soKetNoi);

  // Đầu ra:
  var ketQua = `Mã khách hàng: ${maKhachHang}. Tiền cáp: $${tienCap}`;
  document.getElementById('ketQua2').innerHTML = ketQua;
};

function tinhTienCap(loaiKhachHang, soKenhCC, soKetNoi) {
  var tienCap = 0;
  if (loaiKhachHang === 'nhaDan') {
    tienCap = 4.5 + 20.5 + soKenhCC * 7.5;
  }
  if (loaiKhachHang === 'doanhNghiep') {
    soKetNoi <= 10
      ? (tienCap = 15 + 75 + soKenhCC * 50)
      : (tienCap = 15 + 75 + (soKetNoi - 10) * 5 + soKenhCC * 50);
  }

  return tienCap;
}

function xetSoKetNoi() {
  var loaiKhachHang = document.getElementById('loaiKhachHang').value;
  var soKetNoi = document.getElementById('soKetNoi');
  loaiKhachHang === 'nhaDan'
    ? (soKetNoi.disabled = true)
    : (soKetNoi.disabled = false);
}
