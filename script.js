let myArray = [];
let startBtn = document.querySelector("#startBtn");
let swapWordBtn = document.querySelector("#swapBtn");
let displayWord = document.getElementById('displayWords');
let reverseWord = document.getElementById('reverseWord');

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
    displayWord.style.color = "blue";
    displayWord.style.backgroundColor = "yellow";
    displayWord.style.fontSize = "larger";
}



swapBtn.addEventListener('click', function() {
    let swapLettersArray = myArray.map(myFunction);

    function myFunction(oneItem) {
    return oneItem.split("").reverse().join("");
    }

    
    displayWord.innerHTML = "";

    swapCSS();

    document.getElementById("displayWords").appendChild(
    makeUL(swapLettersArray));
      
});


   










