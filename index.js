// Bài tập 1
var tongDiem = 0;
var diemChuan = 0;
var diemCong = 0;
var diemKV = 0;
var diemDT = 0;
var ketQua = "";

document.getElementById("tinhDiem").onclick = function () {
  diemChuan = document.getElementById("diemChuan").value * 1;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  diemKV = document.getElementById("khuVuc").value * 1;
  diemDT = document.getElementById("doiTuong").value * 1;
  diemCong = diemKV + diemDT;
  tongDiem = diem1 + diem2 + diem3 + diemCong;

  if (tongDiem >= diemChuan) {
    ketQua = "Bạn đã đậu! " + "Tổng điểm của bạn là: " + tongDiem;
  } else {
    ketQua = "Bạn đã rớt! " + "Tổng điểm của bạn là: " + tongDiem;
  }

  document.getElementById("ketQua").innerHTML = ketQua;
};

// Bài tập 2
const giaMuc1 = 500;
const giaMuc2 = 650;
const giaMuc3 = 850;
const giaMuc4 = 1100;
const giaMuc5 = 1300;
var tienDien1 = 0;
var tienDien2 = 0;
var tienDien3 = 0;
var tienDien4 = 0;
var tienDien5 = 0;
var tongTien = 0;
document.getElementById("tinhTien").onclick = function () {
  tongTien = 0;
  var name = document.getElementById("name").value;
  var chiSoDien = document.getElementById("number").value;

  tinhTongTien(chiSoDien, giaMuc1, giaMuc2, giaMuc3, giaMuc4, giaMuc5);

  document.getElementById("thongBao").innerHTML =
    "<p>Họ và tên chủ hộ: " +
    name +
    ". </p>" +
    "<p>Tổng tiền điện: " +
    tongTien.toLocaleString() +
    "VND</p>";
};

function tinhTongTien(chiSoDien, giaMuc1, giaMuc2, giaMuc3, giaMuc4, giaMuc5) {
  if (0 < chiSoDien && chiSoDien <= 50) {
    tienDien1 = chiSoDien * giaMuc1;
    tongTien = tienDien1;
  } else if (chiSoDien > 50 && chiSoDien <= 100) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = (chiSoDien - 50) * giaMuc2;
    tongTien = tienDien1 + tienDien2;
  } else if (chiSoDien > 100 && chiSoDien <= 200) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = 50 * giaMuc2;
    tienDien3 = (chiSoDien - 100) * giaMuc3;
    tongTien = tienDien1 + tienDien2 + tienDien3;
  } else if (chiSoDien > 200 && chiSoDien <= 350) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = 50 * giaMuc2;
    tienDien3 = 100 * giaMuc3;
    tienDien4 = (chiSoDien - 200) * giaMuc4;
    tongTien = tienDien1 + tienDien2 + tienDien3 + tienDien4;
  } else if (chiSoDien > 350) {
    tienDien1 = 50 * giaMuc1;
    tienDien2 = 50 * giaMuc2;
    tienDien3 = 100 * giaMuc3;
    tienDien4 = 150 * giaMuc4;
    tienDien5 = (chiSoDien - 350) * giaMuc5;
    tongTien = tienDien1 + tienDien2 + tienDien3 + tienDien4 + tienDien5;
  } else {
    alert("Vui lòng nhập chỉ số điện!");
  }
  return tongTien;
}
