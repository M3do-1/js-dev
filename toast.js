// New Toast

const toastContainer = document.querySelector(".toast-container");

setTimeout(() => {
    toastContainer.classList.add("active");
}, 1000);










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