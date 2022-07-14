const selectLanguage = document.querySelector('select');
const firstNum = document.querySelector('#num1');
const secondNum = document.querySelector('#num2');
const generateBtn = document.querySelector('#generate-btn')
const runBtn = document.querySelector('#run-btn')
const loaderContainer = document.querySelector('#loader-container')
console.log(loaderContainer);

generateBtn.addEventListener('click', e => {

    localStorage.setItem("language", selectLanguage.value);     // Save state using localStorage
    localStorage.setItem("firstNum", num1.value);
    localStorage.setItem("secondNum", num2.value);

    loaderContainer.classList.remove("visually-hidden");    // Remove class name

});

window.onload = () => {
    selectLanguage.value = localStorage.getItem("language")
    firstNum.value = localStorage.getItem("firstNum")
    secondNum.value = localStorage.getItem("secondNum")
}

runBtn.addEventListener('click', e => {
    
    loaderContainer.classList.remove("visually-hidden");    // Remove class name
    
    let script = document.querySelector('#script').value;
    let language = selectLanguage.value;
    let data = {script, language}

    localStorage.setItem("language", selectLanguage.value);     // Save state using localStorage
    localStorage.setItem("firstNum", num1.value);
    localStorage.setItem("secondNum", num2.value);

    fetch('run', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        window.location.href = "https://random-number.live"  // Refreshes the page, because post requests from JavaScript don't refresh the page.
        console.log(res)
    })
    .catch(err => console.log(err))

});