console.log('This is separate JS file');

//option 1: directly set on the HTML element
//    <button onclick="console.log(65)">Another button </button>


//option 2: add onClick function on the html element
// IMPORTANT: we will use this
//   <button onclick="makeRed()">Make Red</button>

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

//option 4:
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink)

function makePink(){
   document.body.style.backgroundColor = 'pink';
}


//option 4: another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// Option: 4 Final 
// IMPORTANT: we will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){} )  
document.getElementById('make-goldenrod').addEventListener('click', function(){
  document.body.style.backgroundColor = 'goldenrod';
}) 