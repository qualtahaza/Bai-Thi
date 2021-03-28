let String1 = prompt("nhap vao chuoi ki tu 1");
let String2 = prompt("nhap vao chuoi ki tu 2");
let a = [... String1];
let b = [... String2];
console.log(a);
console.log(b);

let mergeString = "";

function merge2String() {
    for (let i = 0; i < a.length || i < b.length; i++) {
        if (a[i] == undefined) {
            a[i] = "";
        }
        if (b[i] == undefined) {
            b[i] = "";
        }
        mergeString = mergeString + a[i] + b[i];
    }
}

merge2String()
console.log(mergeString);
