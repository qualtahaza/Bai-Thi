let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
function checkNumber() {
    let x = document.getElementById('textbox').value;

    if (x == randomNumber) {
        alert("bạn đã trúng thưởng ");
    } else {
        alert("bạn đã ko trúng thưởng, số trúng thưởng sẽ là " + randomNumber);
    }

}
