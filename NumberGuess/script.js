const output = document.querySelector('.output');
const myInput = document.querySelector('.box input');
const btn = document.querySelector('.box button');
//const username = document.querySelector(`.username`);
const username =prompt(`Input your username`);

const game = {min:1,max:2};
startFun();

btn.addEventListener('click',btnClicked);
console.log(`Welcome ${username}`)


function startFun(){
    game.ran=makeRandom(game.min,game.max);
    message(`Guess a number from ${game.min} - ${game.max}`);
    myInput.setAttribute ('max',game.max);
    myInput.setAttribute ('min',game.min);
    const val = Number(myInput.value);
    while (val == game.ran < max) {
      max++;  
    message(`Correct..Now guess a number from ${game.min} - ${game.max + 1}`, 'white');
        btn.textContent = 'Restart'
        myInput.style.display = 'none'
        if(val !== game.ran){
            message(`Try Again`, 'red');
        };
    };

};

function btnClicked(){
    if(btn.textContent == 'Restart'){
        startFun();
    }else{
        start();
    }
};


function start(){
    const val = Number(myInput.value);
    if(val == game.ran){
        message(`Correct..Now guess a number from ${game.min} - ${game.max + 1}`, 'white');
        btn.textContent = 'Restart'
        myInput.style.display = 'none'
    }else if(val < game.ran){
        message(`Too low..Try again`, 'red');
    }else{
        message(`Too high`, 'red');
    }
};
function makeRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};
function message(val, fontC, username){
    output.innerHTML = val;
    output.style.color = fontC
   
};