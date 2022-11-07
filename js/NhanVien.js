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
    this.chucVuLam = "";
    this.xepLoaiNV = "";

    this.tinhLuongTB = function () {
        if (chucVu == 3) {
            this.luongTB = luongCB * 3;
            this.chucVuLam = "Sếp";
            return "Sếp";
        } if (chucVu == 2) {
            this.luongTB = luongCB * 2;
            this.chucVuLam = "Trưởng Phòng";
            return "Trưởng Phòng";
        } if (chucVu == 1) {
            this.luongTB = luongCB * 1;
            this.chucVuLam = "Nhân Viên";
            return "Nhân Viên";
        } else {
        }
    }
    this.xepLoai = function () {
        if (gioLam >= 192) {
            this.xepLoaiNV = "Xuất sắc";
            return "Xuất sắc";
        } if (gioLam < 192 && gioLam >= 176) {
            this.xepLoaiNV = "Giỏi";
            return "Giỏi";
        } if (gioLam < 176 && gioLam >= 160) {
            this.xepLoaiNV = "Khá";
            return "Khá";
        } else {
            this.xepLoaiNV = "TB";
            return "TB";
        }
    }
}