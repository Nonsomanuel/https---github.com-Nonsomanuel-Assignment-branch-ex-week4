var output = document.querySelector('.output');
var myInput = document.querySelector('.box input');
var btn = document.querySelector('.box button');
var username =prompt(`Input your username`);

var min = 1;
var initialMax = 2;
var gameMax = 10;

var game = {min:1, initialMax:2};


btn.addEventListener('click',btnClicked);
console.log(`Welcome ${username}`)

function btnClicked(){
    if(btn.textContent == 'Restart'){
        start();
    }else{
        
    }
};

function start(){
    var val = Number(myInput.value);
    while (val == game.ran < gameMax) {
        initialMax++;
        message(`Correct..Now guess a number from ${game.min} - ${game.max + 1}`, 'white');
        
        myInput.style.display = 'none'
        
    }if(val !== game.ran){
        message(`Try again`, 'red');
    }
    // else(val > game.ran){
    //     message(`Too high`, 'red');
    // }
};

function makeRandom(min,gameMax){
    return Math.floor(Math.random()*(gameMax-min+1)+min);
};

function message(val, fontC, username){
    output.innerHTML = val;
    output.style.color = fontC
   
};
