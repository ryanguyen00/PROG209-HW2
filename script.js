let myArray = [];
let startBtn = document.querySelector("#startBtn");
let swapWordBtn = document.querySelector("#swapBtn");
let displayWord = document.getElementById('displayWords');
let changedWord = document.getElementById('changedWords');

startBtn.addEventListener('click', askQuestion);

function askQuestion() {
    for (let i = 0; i < 3; i++) {

        let userInput = prompt("Enter a word:");
        myArray.push(userInput);
        console.log(userInput);
    }
    displayWord.appendChild(makeUL(myArray));
    showSwapBtn();
}



function makeUL(array){
    let list = document.createElement('UL');

    for (let z = 0; z < array.length; z++) {
        let item = document.createElement('LI');
        item.appendChild(document.createTextNode(array[z]));
        list.appendChild(item);
        
    }
    return list;
}

function showSwapBtn() {
    swapBtn.style.display = "block";
    hideStartBtn();
}

function hideStartBtn() {
    startBtn.style.display = "none";
}


function swapCSS() {
    changedWord.style.display = "block";
    displayWord.style.display = "none";
}



swapBtn.addEventListener('click', function() {
    let swapLettersArray = myArray.map(myFunction);

    function myFunction(oneItem) {
    return oneItem.split("").reverse().join("");
    }

    
    displayWord.innerHTML = "";

    swapCSS();

    changedWord.appendChild(makeUL(swapLettersArray));
      
});


   










