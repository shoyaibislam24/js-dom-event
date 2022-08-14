console.log('This is separate JS file');

//option 1: directly set on the HTML element

//option 2: add onClick function 
function makeRed(){
    document.body.style.backgroundColor = 'red';
    
}

function makeWhite(){
    document.body.style.backgroundColor = 'white';
    
}



//option 3:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick =makeBlue;

function makeBlue(){
 document.body.style.backgroundColor = 'blue';
}

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
  document.body.style.backgroundColor = 'purple';
}