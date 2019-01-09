'use strict';

alert('Here are five questions for you to get to know me! Let\'s begin!');

//question1
var code = prompt('Do I like coding?')
console.log('Do I like coding?', code);
var upCode = code.toUpperCase()
if ( upCode === 'Y'|| upCode === 'YES') {
    alert('Definitely. Who not?');
} else if ( upCode === 'N'|| upCode === 'NO'){
    alert('Wrong answer! Coding is my favourate.');
} else {
    alert('Please use yes/no to answer questions.');
}

//question2
var students = prompt('Are you learning coding right now?');
console.log('Do I like coding?', students);
var upStudents = students.toUpperCase();
if ( upStudents === 'Y'|| upStudents === 'YES') {
    alert('Good guessing. Let\'s try the next one!');
} else if ( upStudents === 'N' || upStudents === 'NO'){
    alert('Wrong answer! I\'m now a CodeFellows student.');
} else {
    alert('Please use yes/no to answer questions.');
}

//question3
var editor = prompt('Am I using sublime as editor?');
console.log('Am I using sublime as editor?', editor);
var upEditor = editor.toUpperCase();
if ( upEditor === 'N'|| upEditor === 'NO') {
    alert('You\'re right. I\'m using VS Code!');
} else if( upEditor === 'Y'|| upEditor === 'YES'){
    alert('No, I\'m not. I know sublime is popular.');
} else {
    alert('Please use yes/no to answer questions.');
}

//question4
var version = prompt('Am I using Github for version control?');
console.log('Am I using the Github for version control?', version);
var upVersion = version.toUpperCase();
if ( upVersion === 'Y'|| upVersion === 'YES') {
    alert('Yes. Using it everyday!');
} else if ( upVersion === 'N'|| upVersion === 'NO'){
    alert('Wrong answer! Last try!');
} else {
    alert('Please use yes/no to answer questions.');
}

//question5
var clutter = prompt('Do I have a lot of clutter in my code?');
console.log('Do I have a lot of clutter in my code?', clutter);
var upClutter = clutter.toUpperCase();
if ( upClutter === 'N'|| upClutter === 'NO') {
    alert('Of cousre not. Congratulations, you finished!');
} else if ( upClutter === 'Y'|| upClutter === 'YES') {
    alert('I don\'t think so. I will always try me best to write clean code.');
} else {
    alert('Please use yes/no to answer questions.');
}