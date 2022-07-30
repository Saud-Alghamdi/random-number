// Picking DOM Elements
const selectLanguage = document.querySelector('select');
const firstNum = document.querySelector('#num1');
const secondNum = document.querySelector('#num2');
const generateBtn = document.querySelector('#generate-btn')
const runBtn = document.querySelector('#run-btn')
const loaderContainer = document.querySelector('#loader-container')


// When click on Generate button
generateBtn.addEventListener('click', e => {

    sessionStorage.setItem("language", selectLanguage.value);     // Save your option's state using sessionStorage
    sessionStorage.setItem("firstNum", num1.value);
    sessionStorage.setItem("secondNum", num2.value);

    loaderContainer.classList.remove("visually-hidden");    // Remove class name

});


// When page loads
window.onload = () => {
    selectLanguage.value = sessionStorage.getItem("language")
    firstNum.value = sessionStorage.getItem("firstNum")
    secondNum.value = sessionStorage.getItem("secondNum")
}