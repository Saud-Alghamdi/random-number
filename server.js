const express = require('express');
const app = express();
const request = require('request');
const clientId = 'a9f94864f8a374d0b2a781739f5ea36'
const clientSecret = 'f0380aa5d3c1124b26b51eaddd46ff837dcb8f7b418ba06aac1b0c6bfaa90eb9'
const port = process.env.PORT || 3000;


app.listen(port);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())


// Global variables
let output = ""
let program = {
    script: "",
    language: "",
    versionIndex: "4",
    clientId,
    clientSecret,
};


// Render index
app.get('/', (req, res) => {
    res.render('index', {program, output});
})


// Generate script
app.post('/generate', async(req, res) => {
    
    // Set language
    program.language = req.body.language;
    if(program.language === 'JavaScript') program.language = 'nodejs'
    if(program.language === 'PHP') program.language = 'php'
    if(program.language === 'Java') program.language = 'java'
    if(program.language === 'Python') program.language = 'python3'
    if(program.language === 'C#') program.language = 'csharp'
    if(program.language === 'C++') program.language = 'cpp17'
    if(program.language === 'Dart') program.language = 'dart'
    if(program.language === 'Swift') program.language = 'swift'
    if(program.language === 'Ruby') program.language = 'ruby'

    let smallerNumber = Number(req.body.firstNumber)
    let greaterNumber = Number(req.body.secondNumber)


    // Makes sure that small and greater numbers are correct
    if(greaterNumber < smallerNumber) smallerNumber = [greaterNumber, greaterNumber = smallerNumber][0];


    // script code
    switch(program.language) {

        case 'nodejs':
            if(smallerNumber === 0) {
                program.script = `
const randomNumber = Math.floor(Math.random() * ${greaterNumber + 1});

console.log(randomNumber)`          

            } else if(smallerNumber === 1)  {
                program.script = `                
const randomNumber = Math.floor(Math.random() * ${greaterNumber};   

console.log(randomNumber)` 

            } else {
                program.script = `                
const randomNumber = Math.floor(Math.random() * (${greaterNumber} - ${smallerNumber} + 1) + ${smallerNumber});
    
console.log(randomNumber)`
            }
        break;

/////////////////////////////

        case 'python3':
            program.script = `
import random
randomNumber = random.randint(${smallerNumber}, ${greaterNumber})
print(randomNumber)`
        break;

/////////////////////////////

        case 'java':
            if(smallerNumber === 0) {
                program.script = `
public class MyClass {
public static void main(String args[]) {
                    
int randomNumber = (int) Math.floor(Math.random() * ${greaterNumber + 1});

System.out.println(randomNumber);
            
    }
}`          
            } else if(smallerNumber === 1)  {
                program.script = `
public class MyClass {
public static void main(String args[]) {
                        
int randomNumber = (int) Math.floor(Math.random() * ${greaterNumber});
    
System.out.println(randomNumber);
                
    }
}` 
            } else {
                program.script = `
public class MyClass {
public static void main(String args[]) {
                        
int randomNumber = (int) Math.floor(Math.random() * (${greaterNumber} - ${smallerNumber} + 1) + ${smallerNumber});
    
System.out.println(randomNumber);
                
    }
}`
            }
        break;

/////////////////////////////

        case 'php':
            program.script = `
<?php 
$randomNumber = rand(${smallerNumber}, ${greaterNumber});
echo $randomNumber
?>`
        break;
        
/////////////////////////////        

        case 'csharp':
            program.script = `
using System;
class Program {
    static void Main() {
        
        Random rnd = new Random();
        int randomNumber = rnd.Next(${smallerNumber},${greaterNumber + 1});
        Console.WriteLine(randomNumber);
    }
}`

        break;

/////////////////////////////

        case 'cpp17':
            program.versionIndex = "1"
            if(smallerNumber === 0) {
                program.script = `
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int randomNumber = rand() % ${greaterNumber + 1};
    cout << randomNumber;
}`
            } else if(smallerNumber === 1) {
                program.script = `
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int randomNumber = rand() % ${greaterNumber} + 1;
    cout << randomNumber;
}`
            } else {
                program.script = `
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int randomNumber = rand() % (${greaterNumber + 1} - ${smallerNumber}) + ${smallerNumber};
    cout << randomNumber;
}`
            }

        break;

/////////////////////////////

            case 'cpp17':
            program.versionIndex = "1"
            if(smallerNumber === 0) {
                program.script = `
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int randomNumber = rand() % ${greaterNumber + 1};
    cout << randomNumber;
}`
            } else if(smallerNumber === 1) {
                program.script = `
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int randomNumber = rand() % ${greaterNumber} + 1;
    cout << randomNumber;
}`
            } else {
                program.script = `
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int randomNumber = rand() % (${greaterNumber + 1} - ${smallerNumber}) + ${smallerNumber};
    cout << randomNumber;
}`
            }

        break;

/////////////////////////////

            case 'dart':
            if(smallerNumber === 0) {
                program.script = `
import 'dart:math';
void main(){
    
    Random random = new Random();
    int randomNumber = random.nextInt(${greaterNumber + 1});
    
    print(randomNumber);
}`
            } else if(smallerNumber === 1) {
                program.script = `
import 'dart:math';
void main(){
    
    Random random = new Random();
    int randomNumber = random.nextInt(${greaterNumber} + 1);
    
    print(randomNumber);
}`
            } else {
                program.script = `
import 'dart:math';
void main(){
    
    Random random = new Random();
    int randomNumber = random.nextInt(${greaterNumber + 1} - ${smallerNumber}) + ${smallerNumber};
    
    print(randomNumber);
}`
            }

        break;
        
/////////////////////////////

        case 'swift':
            program.script = `
let randomNumber = Int.random(in: ${smallerNumber}...${greaterNumber});
print(randomNumber);`

        break;

/////////////////////////////

        case 'ruby':
            program.script = `
randomNumber = rand(${smallerNumber}..${greaterNumber});
print(randomNumber);`

        break;

    }
    

    // Send request to API
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        output = body.output;
        res.redirect('/')
    });

})

// Run script
app.post('/run', (req, res) => {
    
    console.log(req.body);
    
    // Set language
    program.language = req.body.language;
    if(program.language === 'JavaScript') program.language = 'nodejs'
    if(program.language === 'PHP') program.language = 'php'
    if(program.language === 'Java') program.language = 'java'
    if(program.language === 'Python') program.language = 'python3'
    if(program.language === 'C#') program.language = 'csharp'
    if(program.language === 'C++') program.language = 'cpp17'
    if(program.language === 'Dart') program.language = 'dart'
    if(program.language === 'Swift') program.language = 'swift'
    if(program.language === 'Ruby') program.language = 'ruby'
    

    // update script
    program.script = req.body.script;

    // Send request to API
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        output = body.output;
        res.redirect('/')
    });

});










// async function doPostRequest() {

//     const program = {
//         script : "",
//         language: "php",
//         versionIndex: "0",
//         clientId: "YourClientID",
//         clientSecret:"YourClientSecret"
//     };

//     let res = await axios.post('https://api.jdoodle.com/v1/execute', program);

//     let data = res.data;
//     console.log(data);
// }

// doPostRequest();