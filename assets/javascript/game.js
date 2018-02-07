var winCount = 0;
var lossCount = 0;

//functions

//adds wins

//adds losses

//create on.click for each jewel

function crystalClick(){
    $("#crystalOne").on("click", function() {
        var randomOne = Math.floor(Math.random() * 10) + 1;
        console.log(randomOne);
        $("#crystalOne").append(randomOne);
    });

    $("#crystalTwo").on("click", function() {
        var randomTwo = Math.floor(Math.random() * 10) + 1;
        console.log(randomTwo);
        $("#crystalTwo").append(randomTwo);
    });

    $("#crystalThree").on("click", function() {
        var randomThree = Math.floor(Math.random() * 10) + 1;
        console.log(randomThree);
        $("#crystalThree").append(randomThree);
    });

    $("#crystalFour").on("click", function() {
        var randomFour = Math.floor(Math.random() * 10) + 1;
        console.log(randomFour);
        $("#crystalFour").append(randomFour);
    });
}
crystalClick();


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