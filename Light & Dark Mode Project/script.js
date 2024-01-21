const toggleButton = document.querySelector('input[type="checkbox"]');
const text = document.getElementById("text-box");
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const toggleIcon = document.getElementById("toggle-icon")
const nav = document.getElementById("nav");
console.log(text)


function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}


function toggleLightDarkMode(isDark){
    nav.style.backgroundColor =  isDark ? 'rgba(0 0 0 / 50%)' : 'rgba(255 255 255 / 50%)';
    text.style.backgroundColor =  isDark ? 'rgba(255 255 255 / 50%)' : 'rgba(0 0 0 / 50%)';
    toggleIcon.children[0].textContent =  isDark ? `Dark Mode` : `Light Mode`;
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark? imageMode('dark') : imageMode('light');
}


//  function darkMode(){
//     nav.style.backgroundColor = `rgba(0 0 0 / 50%)`;
//     text.style.backgroundColor = `rgba(255 255 255 / 50%)`
//     toggleIcon.children[0].textContent = `Dark Mode`
//     toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
//    imageMode('dark');
// }

// function lightMode(){
//     nav.style.backgroundColor = `rgba(255 255 255 / 50%)`
//     text.style.backgroundColor = `rgba(0 0 0 / 50%)`
//     toggleIcon.children[0].textContent = `Light Mode`
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light')
// }

function themeSwitch(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
        toggleLightDarkMode(true);
        localStorage.setItem('theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light')
        toggleLightDarkMode(false);
        localStorage.setItem('theme','light');
    }
}
toggleButton.addEventListener('change',themeSwitch);

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);

    if(currentTheme === 'dark'){
        toggleButton.checked = true;
        toggleLightDarkMode(true);
    }
}