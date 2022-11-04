/**
 * 
 */

// tạo thể hiện DanhSachNV là toàn cục
var dsnv = new DanhSachNhanVien();

// Hàm rút gọn
function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThi(dsnv.mangNV);
    }
}
getLocalStorage();



function themNhanVien() {
    var taiKhoan = getELE('tknv').value;
    var tenNV = getELE('name').value;
    var email = getELE('email').value;
    var pass = getELE('password').value;
    var ngayLam = getELE('datepicker').value;
    var luongCB = getELE('luongCB').value;
    var chucVu = getELE('chucvu').value;
    var gioLam = getELE('gioLam').value;

    var nv = new NhanVien(taiKhoan, tenNV, email, password, ngayLam, Number(luongCB), chucVu, Number(gioLam));
    nv.tinhLuongTB();
    dsnv.themNV(nv);

    hienThi(dsnv.mangNV);
    setLocalStorage();
}


function hienThi(mang) {
    var content = "";
    mang.map(function (nv) {
        content += `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu()}</td>
        <td>${nv.luongTB}</td>
        <td>${nv.xepLoai()}</td>
        <td><button class="btn btn-danger">Xóa</button>
        <button class="btn btn-success">Xem</button>
        </td>
        </tr>`
    });
    getELE('tableDanhSach').innerHTML = content;

}