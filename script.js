console.log("Hi, Welcome to Calculator!"); 

let num = 0;
let eq1 = document.getElementById('full');
eq1.value = "";

function display(x){
    num = (num*10) + x;
    let disp = document.getElementById('disp').value = num;
}

const clr = document.getElementById('ac');
clr.addEventListener("click", function () {
        num = 0;
        display(num);
        eq1.value = "";
});

const one = document.getElementById('one');
one.addEventListener("click", function () {
        let o = 1;
        display(o);
});

const two = document.getElementById('two');
two.addEventListener("click", function () {
        let t = 2;
        display(t);
});

const three = document.getElementById('three');
three.addEventListener("click", function () {
        let t = 3;
        display(t);
});

const four = document.getElementById('four');
four.addEventListener("click", function () {
        let t = 4;
        display(t);
});

const five = document.getElementById('five');
five.addEventListener("click", function () {
        let t = 5;
        display(t);
});

const six = document.getElementById('six');
six.addEventListener("click", function () {
        let t = 6;
        display(t);
});

const seven = document.getElementById('seven');
seven.addEventListener("click", function () {
        let t = 7;
        display(t);
});

const eight = document.getElementById('eight');
eight.addEventListener("click", function () {
        let t = 8;
        display(t);
});

const nine = document.getElementById('nine');
nine.addEventListener("click", function () {
        let t = 9;
        display(t);
});

const zero = document.getElementById('zero');
zero.addEventListener("click", function () {
        let t = 0;
        display(t);
});

const plus = document.getElementById('add');
plus.addEventListener("click", function () {
        eq1.value = eq1.value.concat(disp.value.toString(), "+");
        num = 0;
        display(num);
        disp.value = "";
});

const min = document.getElementById('min');
min.addEventListener("click", function () {
        eq1.value = eq1.value.concat(disp.value.toString(), "-");
        num = 0;
        display(num);
        disp.value = "";
});

const mul = document.getElementById('mul');
mul.addEventListener("click", function () {
        eq1.value = eq1.value.concat(disp.value.toString(), "*");
        num = 0;
        display(num);
        disp.value = "";
});

const divi = document.getElementById('dv');
divi.addEventListener("click", function () {
        eq1.value = eq1.value.concat(disp.value.toString(), "/");
        num = 0;
        display(num);
        disp.value = "";
});

const perc = document.getElementById('per');
perc.addEventListener("click", function () {
        eq1.value = eq1.value.concat(disp.value.toString(), "%");
        num = 0;
        display(num);
        disp.value = "";
});

const dece = document.getElementById('dec');
dece.addEventListener("click", function () {
        eq1.value = eq1.value.concat(disp.value.toString(), ".");
        num = 0;
        display(num);
        disp.value = "";
});

const nege = document.getElementById('neg');
nege.addEventListener("click", function () {
        const numb = disp.value;
        disp.value = "";
        display.value = disp.value.concat("-", numb);
        eq1.value = eq1.value.concat(disp.value.toString())
        num = 0;
        display(num);
        disp.value = "";
});

const equal = document.getElementById('eq');
equal.addEventListener("click", function () {
        eq1.value = eq1.value.concat(disp.value.toString());
        eq1.value = eval(eq1.value);
        num = 0;
        display(num);
        disp.value = eq1.value;
        eq1.value = "";
});
