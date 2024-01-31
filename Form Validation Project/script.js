const form = document.getElementById('form');
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;
let passwordMatch = false;
function validateForm(){
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent = 'Please Fill out all the fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if(password1El.value === password2El.value){
        passwordMatch = true;
        password1El.style.borderColor = 'green'
        password2El.style.borderColor = 'green';
    }
    else{
        passwordMatch = false;
        message.textContent = 'Make Sure Passwords Match.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red'
        password2El.style.borderColor = 'red';
        return;
    }
    if(isValid && passwordMatch){
        message.textContent = 'Succesfully Registered';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}
function storeFormData(){
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.website.value,
        password : form.password.value
    };
    console.log(user);
}
function processFormData(e){
    e.preventDefault()
    validateForm();
    if(isValid && passwordMatch){
        storeFormData();
    }
}
form.addEventListener('submit', processFormData)