'use strict';

var user = prompt('Hello, what\'s your name?')

alert(user + ', Here are seven questions for you to get to know me! Let\'s begin!');

var countCorrect = 0;

// Call the question functions

function questionOne() {
    //question1
    var code = prompt('Do I like coding?')
    console.log('Do I like coding?', code);
    var upCode = code.toUpperCase();
    if ( upCode === 'Y'|| upCode === 'YES') {
        alert('Definitely.');
        countCorrect += 1 ;
        console.log(countCorrect);
    } else if ( upCode === 'N'|| upCode === 'NO'){
        alert('Wrong answer! Coding is my favourate.');
    } else {
        alert('Please use yes/no to answer questions.');
    }
}
questionOne();

//question2
function questionTwo() {
    var students = prompt('Am I learning coding right now?');
    console.log('Are you learning coding right now?', students);
    var upStudents = students.toUpperCase();
    if ( upStudents === 'Y'|| upStudents === 'YES') {
        alert('Good guessing. Let\'s try the next one!');
        countCorrect += 1 ;
    } else if ( upStudents === 'N' || upStudents === 'NO'){
        alert('Wrong answer! I\'m now a CodeFellows student.');
    } else {
        alert('Please use yes/no to answer questions.');
    }
}
questionTwo();

//question3
function questionThree() {
    var editor = prompt('Am I using sublime as editor?');
    console.log('Am I using sublime as editor?', editor);
    var upEditor = editor.toUpperCase();
    if ( upEditor === 'N'|| upEditor === 'NO') {
        alert('You\'re right. I\'m using VS Code!');
        countCorrect += 1 ;
    } else if( upEditor === 'Y'|| upEditor === 'YES'){
        alert('No, I\'m not. I know sublime is popular.');
    } else {
        alert('Please use yes/no to answer questions.');
    }
}
questionThree();

//question4
function questionFour() {
    var version = prompt('Am I using Github for version control?');
    console.log('Am I using the Github for version control?', version);
    var upVersion = version.toUpperCase();
    if ( upVersion === 'Y'|| upVersion === 'YES') {
        alert('Yes. Using it everyday!');
        countCorrect += 1 ;
    } else if ( upVersion === 'N'|| upVersion === 'NO'){
        alert('Wrong answer!');
    } else {
        alert('Please use yes/no to answer questions.');
    }
}
questionFour();