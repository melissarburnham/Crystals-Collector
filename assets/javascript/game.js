var winCount = 0;
var lossCount = 0;
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
var userNumber = 0
var images =["assets/images/crystalOne.jpg", "assets/images/crystalTwo.jpg", "assets/images/crystalThree.jpg", "assets/images/crystalFour.jpg"];
//functions

$(document).ready(function(){

function setTargetNumber(){
    $("#targetNumber").text(targetNumber);
}

function crystalValues(){
for(i = 0; i < 4; i++){
    var randomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", images[i]);
    imageCrystal.attr("data-crystalvalue", randomNumber);
    $("#crystals").append(imageCrystal);

    };
    console.log(userNumber);
}

function clickCrystal(){
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    userNumber += crystalValue;
    $("#userScore").text(userNumber);

    if (userNumber === targetNumber) {
        alert("You win!");
        winCount++;
        newRound();
      }
    
      else if (userNumber >= targetNumber) {
        alert("You lose!!");
        lossCount++;
        newRound();
        } 

    $("#wins").text(winCount);
    $("#losses").text(lossCount);
    });
}

function newRound(){
    targetNumber =  Math.floor(Math.random() * (120 - 19 + 1) + 19);
    userNumber = 0;
    setTargetNumber();
    $(".crystal-image").remove();
    crystalValues();
    clickCrystal();
}

newRound();


})










// function trackWinOrLoss(){


// trackWinOrLoss();



// // dataattribute
//     $("#crystalTwo").on("click", function() {
//         var randomTwo = Math.floor(Math.random() * 10) + 1;
//         console.log(randomTwo);
//         $("#crystalTwo").append(randomTwo);
//     });

//     $("#crystalThree").on("click", function() {
//         var randomThree = Math.floor(Math.random() * 10) + 1;
//         console.log(randomThree);
//         $("#crystalThree").append(randomThree);
//     });

//     $("#crystalFour").on("click", function() {
//         var randomFour = Math.floor(Math.random() * 10) + 1;
//         console.log(randomFour);
//         $("#crystalFour").append(randomFour);
//     });




//beggining of each round

    //generate random number as target number

    //assign random number to jewel 1

    //assign random number to jewel 2

    //assign random number to jewel 3

    //assign random number to jewel 4

    //when you click jewel one, number is added to guess

    //when you click jewel two, number is added to guess

    //when you click jewel three, number is added to guess

    //when you click jewel four, number is added to guess

    //reset round
        //jewels and random number get new values
        //userGuess clears

    //didUserWin
        //when guess and target are equal, user wins, add to win counter, reset

    //didUserLose
        //when guess goes over target, user loses, add to lose counter, reset
        
        
// $(document).ready(function() {







// }