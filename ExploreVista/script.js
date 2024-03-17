const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let button = document.querySelector(".login");

function Login(){
    window.open('./booking.html')
}
button.addEventListener('click', Login)