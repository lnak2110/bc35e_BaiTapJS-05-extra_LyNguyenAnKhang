/**
 * Đầu vào:
 *  + hoTen
 *  + tongThuNhapNam
 *  + soNguoiPhuThuoc
 *
 * Xử lí:
 *  + Tính tiền thuế dựa trên thu nhập chịu thuế
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnTinhThue').onclick = function () {
  // Đầu vào:
  var hoTen = document.getElementById('hoTen').value;
  var tongThuNhapNam = document.getElementById('tongThuNhapNam').value * 1;
  var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1;

  // Xử lí:
  var thue = tinhThue(tongThuNhapNam, soNguoiPhuThuoc).toLocaleString();

  // Đầu ra:
  var ketQua = `Họ tên: ${hoTen}<br/>Tiền thuế thu nhập cá nhân: ${thue} VND`;
  document.getElementById('ketQua1').innerHTML = ketQua;
};

function tinhThue(tongThuNhapNam, soNguoiPhuThuoc) {
  var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  var thue = 0;
  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    thue =
      60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      (thuNhapChiuThue - 210000000) * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (thuNhapChiuThue - 384000000) * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (thuNhapChiuThue - 624000000) * 0.3;
  } else if (thuNhapChiuThue > 960000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (thuNhapChiuThue - 960000000) * 0.35;
  } else {
    alert('Thu nhập không hợp lệ!');
    return;
  }

  return thue;
}
