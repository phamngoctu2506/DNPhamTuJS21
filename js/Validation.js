function Validation() {
    this.checkEmpty = function (valueInput, msgErr, spanID) {
        if (valueInput.trim() == "") {
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }
    this.checkTKNV = function (valueInput, msgErr, spanID, mangNV) {
        var isExist = mangNV.some(function (nv) {

            return nv.taiKhoan === valueInput;
        })

        if (isExist) {
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }

        document.getElementById(spanID).innerHTML = "";
        return true;
    }
    this.checkName = function (valueInput, msgErr, spanID) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkEmail = function (valueInput, msgErr, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkPass = function (valueInput, msgErr, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkLuong = function (valueInput, msgErr, spanID) {
        var pattern = /^(\d{7,8}(\.\d{7,8})?)$/

        if (valueInput >= 10000000 && valueInput <= 20000000 && valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkDropdown = function (selecID, msgErr, spanID) {
        var index = document.getElementById(selecID).selectedIndex;
        if (index == 0) {
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }
    this.checkGioLam = function (valueInput, msgErr, spanID) {
        var pattern = /^(\d{2,3}(\.\d{2,3})?)$/

        if (valueInput >= 80 && valueInput <= 200 && valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
    this.checkTK = function (valueInput, msgErr, spanID) {
    var pattern = /[0-9a-zA-Z]{4,6}/
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
}