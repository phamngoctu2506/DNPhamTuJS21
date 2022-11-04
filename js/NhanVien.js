function NhanVien(taiKhoan, tenNV, email, password, ngayLam, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.tenNV = tenNV;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.luongTB = 0;

    this.tinhLuongTB = function () {
        this.luongTB = luongCB * chucVu;
    }    
    this.chucVu = function(){
        if (chucVu == 3) {
            return "Sếp";
        }if (chucVu == 2) {
            return "Trưởng Phòng";
        }if (chucVu == 1) {
            return "Nhân Viên";
        } else {
            return "TB";
        }
    }
    this.xepLoai = function(){
        if (gioLam >= 192) {
            return "Xuất sắc";
        }if (gioLam < 192 && gioLam >= 176) {
            return "Giỏi";
        }if (gioLam < 176 && gioLam >= 160) {
            return "Khá";
        } else {
            return "TB";
        }
    }
}