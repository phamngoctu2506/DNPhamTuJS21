function DanhSachNhanVien() {
    this.mangNV = [];
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    this.timViTri = function (taiKhoanXoa) {
        var viTri = -1;
        for (var i = 0; i < this.mangNV.length; i++) {
            if (taiKhoanXoa == this.mangNV[i].taiKhoan) {
                viTri = i;
                return viTri;
            }
        }
    }
    this.XoaNV = function (taiKhoanXoa) {
        var viTri = this.timViTri(taiKhoanXoa);
        if (viTri > -1) {
            this.mangNV.splice(viTri, 1);
        }
    }
    this.capNhatNV = function (nvCapNhat) {
        var viTri = this.timViTri(nvCapNhat.taiKhoan);
        if (viTri > -1) {
            dsnv.mangNV[viTri] = nvCapNhat;

        }
    }
}

DanhSachNhanVien.prototype.timKiemNV = function (tuKhoaXL) {
    var mangKetQua = [];
    var tuKhoa = tuKhoaXL.toLowerCase().replace(/\s/g, "");
    this.mangNV.map(function (nv) {
        var loainv = nv.xepLoaiNV.toLowerCase().replace(/\s/g, "");// dòng này lỗi chưa đổi kiểu dữ liệu loainv sang chữ thường (toLowerCase)
        // console.log(loainv);
        var viTri = loainv.indexOf(tuKhoa);
        // console.log(tuKhoa);
        if (viTri > -1) {
            mangKetQua.push(nv);
        }
    })
    return mangKetQua;
}
