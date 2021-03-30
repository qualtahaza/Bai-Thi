let randomNumber = Math.floor(Math.random() * 10) + 1;


console.log(randomNumber);

function checkNumber() {
    let x = document.getElementById('textbox').value;


    if (Number.isInteger(parseInt(x)) && x > 0 && x <= 10) {
        if (x == randomNumber) {
            alert("bạn đã chọn đúng số trúng thưởng ");

        } else {
            alert("bạn đã ko trúng thưởng, số trúng thưởng lượt này là " + randomNumber);

        }
    } else {
        alert("Giá trị bạn nhập không đúng định dạng")
    }
    location.reload();
}