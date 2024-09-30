// Kiểm tra số nguyên dương hay âm
function kiemTraSo() {
    let num = parseInt(document.getElementById("numCheck").value);
    let result;
    
    switch (true) {
        case (num > 0):
            result = `${num} là số nguyên dương.`;
            break;
        case (num < 0):
            result = `${num} là số nguyên âm.`;
            break;
        default:
            result = `${num} là số 0.`;
            break;
    }
    
    document.getElementById("ketQuaSo").innerHTML = result;
}

// Kiểm tra n chia hết cho 3 hoặc 5
function kiemTraChia() {
    let n = parseInt(document.getElementById("numChia").value);
    let result;
    
    switch (true) {
        case (n % 3 === 0 && n % 5 === 0):
            result = `${n} chia hết cho cả 3 và 5.`;
            break;
        case (n % 3 === 0):
            result = `${n} chia hết cho 3.`;
            break;
        case (n % 5 === 0):
            result = `${n} chia hết cho 5.`;
            break;
        default:
            result = `${n} không chia hết cho 3 hoặc 5.`;
            break;
    }
    
    document.getElementById("ketQuaChia").innerHTML = result;
}

// In số ngày của tháng
function inSoNgay() {
    let thang = parseInt(document.getElementById("thang").value);
    let result;

    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            result = `Tháng ${thang} có 31 ngày.`;
            break;
        case 4: case 6: case 9: case 11:
            result = `Tháng ${thang} có 30 ngày.`;
            break;
        case 2:
            result = `Tháng 2 có 28 hoặc 29 ngày.`;
            break;
        default:
            result = "Vui lòng nhập tháng từ 1 đến 12.";
            break;
    }

    document.getElementById("ketQuaThang").innerHTML = result;
}

// Giải phương trình bậc 2 ax^2 + bx + c = 0
function giaiPhuongTrinhBacHai() {
    let a = parseFloat(document.getElementById("soA").value);
    let b = parseFloat(document.getElementById("soB").value);
    let c = parseFloat(document.getElementById("soC").value);
    let result;

    if (a === 0) {
        result = "Đây không phải là phương trình bậc 2.";
    } else {
        let delta = b * b - 4 * a * c;
        switch (true) {
            case (delta < 0):
                result = "Phương trình vô nghiệm.";
                break;
            case (delta === 0):
                let x = -b / (2 * a);
                result = `Phương trình có nghiệm kép: x = ${x.toFixed(2)}`;
                break;
            case (delta > 0):
                let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                result = `Phương trình có hai nghiệm: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
                break;
        }
    }

    document.getElementById("ketQuaPT").innerHTML = result;
}

// Kiểm tra 3 cạnh có tạo thành tam giác
function kiemTraTamGiac() {
    let a = parseFloat(document.getElementById("canhA").value);
    let b = parseFloat(document.getElementById("canhB").value);
    let c = parseFloat(document.getElementById("canhC").value);
    let result;

    switch (true) {
        case (a + b > c && a + c > b && b + c > a):
            result = `Ba cạnh ${a}, ${b}, ${c} có thể tạo thành một tam giác.`;
            break;
        default:
            result = `Ba cạnh ${a}, ${b}, ${c} không thể tạo thành tam giác.`;
            break;
    }

    document.getElementById("ketQuaTG").innerHTML = result;
}