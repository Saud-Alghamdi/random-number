// Client ID a9f94864f8a374d0b2a781739f5ea36
// Client Secret f0380aa5d3c1124b26b51eaddd46ff837dcb8f7b418ba06aac1b0c6bfaa90eb9

const generateBtn = document.querySelector('#generate-btn');
const code = document.querySelector('code');

generateBtn.addEventListener('click', e => {
        
    const prgLanguage = document.querySelector('select').value;
    let smallerNumber = Number(document.querySelector('#num1').value);
    let greaterNumber = Number(document.querySelector('#num2').value);

    // Makes sure that small and greater numbers are correct
    if(greaterNumber < smallerNumber) smallerNumber = [greaterNumber, greaterNumber = smallerNumber][0];  

    // Initialize Object and result
    let info = {
        prgLanguage,
        smallerNumber,
        greaterNumber,
    }

    let result = '';

    // Initialize Code
    switch(info.prgLanguage) {

        case 'JavaScript':
            result = `const randomNumber = Math.floor(Math.random() * (${greaterNumber} - ${smallerNumber} + 1)) + ${smallerNumber}`
        break;

        case 'Python':
            result = `import random\nrandomNumber = random.randint(${smallerNumber}, ${greaterNumber})`
        break;

        case 'Java':
            result = `int randomNumber = (int) Math.floor(Math.random() * (${greaterNumber} - ${smallerNumber} + 1) + ${smallerNumber});`
        break;

        case 'PHP':
            result = `$randomNumber = rand(${smallerNumber}, ${greaterNumber});`
        break;
    }

    code.innerText = result;

});