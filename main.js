/*
function MyCode(){
    name = 1
    if (name != null) {
    alert('Hello, This is Cool Right! now click ok to hide it :)');}
else {
    alert('Hello World')
}}

document.write('<i>Hello World</i>');
/*
function MyConsole(){
    name = 1
    while (name == 1) {
        console.log('Hello Ahmed');
        break;
    }
    if (name != 1) {
        alert('Everything is Fine');
    }
    else {
        console.log('Every Thing Is Fine');
    }
}

MyConsole()
*/
function MyCode(){
    name = window.prompt('Enter your name: ');
    if (name != null) {
        alert('Hello ' + name + ' how are you doing today?');
    }
    if (name != null) {
        que = window.prompt("");
        alert('That\'s great');
    }
}

function SwitchEx() {
    named = window.prompt('Enter a number');
    switch (named) {
        case '1':
            alert('Name is Ahmed');
            break;
            case '2':
                alert('Name is Omar');
                break;
                case '3':
                    alert('Name is Hams');
                    break;
                    default:
                        alert('none');
                        break;
    }
    /*
    while (named == '1') {
       alert('Hello');
   }
    */
}

function loopsex() {
    var namet = window.prompt('Enter a number');
    for (namet; namet <= 50; namet++) {
        document.write(namet);
    }
}

function sayHello(name2 , age2) {
    name2 = window.prompt('Enter your name');
    age2 = window.prompt('Enter your age');
    document.write('<h5>' + name2 + ' is ' + age2 + ' years old</h5>');
}
//sayHello();

//document.write(42 % 7 - 2)
/*
var d = 4.5
var ds = Number.isInteger(d) ? d.toPrecision(1) : d.toString();
document.write(Math.round(ds))
*/
function nuk(){
depth = window.prompt();
if(depth != null){

    num = depth / 5;
    



}


alert(Math.round(num));
}
//nuk();







/* old Toast Code

const button3 = document.querySelector('.button3');

let toastContainer;

function generateToast({
    message,
    background = '#00214d',
    color = '#fffffe',
    length = '3000ms',

}){
    toastContainer.insertAdjacentHTML('beforeend', '<p class="toast" style="background-color: ${background}; color: ${color} animation-duration: ${length}">${message} </p>')
   // const toast = toastContainer.lastElementChild;
    //toast.addEventListener('animationend', () => toast.remove())
}

(function initToast(){
    document.body.insertAdjacentHTML('afterbegin', '<div class="toast-container"></div>');
    toastContainer = document.querySelector('.toast-container');
})()

button3.addEventListener('click', () => {
    generateToast({
        message: '👊 You got this kid! 👊 ',
        background: "hsl(171 100% 46.1%)",
        color: "hsl(171 100% 13.1%",
        length: "5000ms",

    })
})
*/

// New Toast

const toastContainer = document.querySelector(".toast-container");

setTimeout(() => {
    toastContainer.classList.add("active");
}, 1000);