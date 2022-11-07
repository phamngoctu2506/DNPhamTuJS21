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
    var password = getELE('password').value;
    var ngayLam = getELE('datepicker').value;
    var luongCB = getELE('luongCB').value;
    var chucVu = getELE('chucvu').value;
    var gioLam = getELE('gioLam').value;

    var nv = new NhanVien(taiKhoan, tenNV, email, password, ngayLam, Number(luongCB), chucVu, Number(gioLam));
    nv.tinhLuongTB();
    nv.xepLoai();
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
        <td>${nv.chucVuLam}</td>
        <td>${nv.luongTB}</td>
        <td>${nv.xepLoaiNV}</td>
        <td><button onclick="xoaNhanVien('${nv.taiKhoan}')" class="btn btn-danger">Xóa</button>
        <button onclick="xemChiTiet('${nv.taiKhoan}')" class="btn btn-success" data-toggle="modal"
        data-target="#myModal">Xem</button>
        </td>
        </tr>`
    });
    getELE('tableDanhSach').innerHTML = content;
}

function xoaNhanVien(taiKhoanXoa) {
    dsnv.XoaNV(taiKhoanXoa);
    setLocalStorage();
    hienThi(dsnv.mangNV);
    getLocalStorage();
}

function xemChiTiet(taiKhoanXem) {
    var viTri = dsnv.timViTri(taiKhoanXem);
    if (viTri > -1) {
        // console.log(dsnv.mangNV[viTri]);
        getELE('tknv').value = dsnv.mangNV[viTri].taiKhoan;
        getELE('tknv').disabled = true;
        getELE('name').value = dsnv.mangNV[viTri].tenNV;
        getELE('email').value = dsnv.mangNV[viTri].email;
        getELE('password').value = dsnv.mangNV[viTri].password;
        getELE('datepicker').value = dsnv.mangNV[viTri].ngayLam;
        getELE('luongCB').value = dsnv.mangNV[viTri].luongCB;
        getELE('chucvu').value = dsnv.mangNV[viTri].chucVu;
        getELE('gioLam').value = dsnv.mangNV[viTri].gioLam;
    }
}


function capNhat(){
    var taiKhoan = getELE('tknv').value;
    var tenNV = getELE('name').value;
    var email = getELE('email').value;
    var password = getELE('password').value;
    var ngayLam = getELE('datepicker').value;
    var luongCB = getELE('luongCB').value;
    var chucVu = getELE('chucvu').value;
    var gioLam = getELE('gioLam').value;
    
    var nvCapNhat = new NhanVien(taiKhoan, tenNV, email, password, ngayLam, Number(luongCB), chucVu, Number(gioLam));
    nvCapNhat.tinhLuongTB();
    nvCapNhat.xepLoai();
    console.log(nvCapNhat);
    dsnv.capNhatNV(nvCapNhat);
    setLocalStorage();
    getLocalStorage();
    hienThi(dsnv.mangNV);
}