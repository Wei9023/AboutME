'use strict';

var user = prompt('Hello, what\'s your name?')

alert(user + ', Here are seven questions for you to get to know me! Let\'s begin!');

var countCorrect = 0;

// Call the question functions
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

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

//question5
function questionFive() {
    var clutter = prompt('Do I have a lot of clutter in my code?');
    console.log('Do I have a lot of clutter in my code?', clutter);
    var upClutter = clutter.toUpperCase();
    if ( upClutter === 'N'|| upClutter === 'NO') {
        alert('Of cousre not. Congratulations, you finished!');
        countCorrect += 1 ;
    } else if ( upClutter === 'Y'|| upClutter === 'YES') {
        alert('I don\'t think so. I will always try me best to write clean code.');
    } else {
        alert('Please use yes/no to answer questions.');
    }
}

//question6
function questionSix() {
    var i =0;
    while( i< 4){
        var numbers = prompt('What\'s my favourate number between 1 to 10?');
        console.log('What\'s my favourate number between 1 to 10?', numbers);
        //answer is 3
        if ( parseInt(numbers) === 3 ){
            alert('Yeah. Correct!');
            countCorrect += 1 ;
            break;
        } else {
            if (parseInt(numbers) > 3 ){
                alert('Too high, try a smaller one.');
            } else {
                alert('Too low, try a bigger one');
            }
        }
        i++;
    }
}

//question7
function questionSeven() {
    var places = [ 'NORTHGATE', 'KENMORE', 'SOUTH LAKE UNION'];
    var chance = false;
    for(var i=0 ; i < 6; i++){
        var guessP = prompt('Do you know a place that I have lived in big Seattle?');
        console.log('Do you know a place that I have lived in big Seattle?', guessP);
        var upGuess = guessP.toUpperCase(); 
        var addMatch = false;
        var chance = true;
        for( var j = 0 ; j < places.length ; j++){
            if (upGuess === places[j] ){
                countCorrect += 1 ;
                addMatch = true;
                alert('Good guessing. I have lived in South lake union, Northgate and Kenmore.');
                break;
            } 
        }
        if (!addMatch){
            alert('No, I haven\'t lived there. Try another place.');  
        } else {
            break;
        } 
        if(!chance) {
            alert('Sorry, all of your answers are wrong. I have lived in South lake union, Northgate and Kenmore.');
        }
    }
}



//counting the right anwers
if(countCorrect === 7){
    alert('Awsome! All the answers are correct. Do you know me?')
} else {
    alert('You got ' + countCorrect + 'out of 7 questions correct,  ' + user + '! ' + 'Better luck next time.')
}
