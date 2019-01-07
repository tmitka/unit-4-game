$(document).ready(function() {
    //when the game starts assign the user a score to target
    var targetScore = Math.floor(Math.random() * (121 - 19)) + 19;
    console.log(targetScore);

    var wins = 0;
    var losses = 0;
    var userScore = 0;

    //display the targetScore
    $("#targetScore").html("<div> Target Score: " + targetScore + "</div>");

    //display wins
    $("#wins").html("<div> Wins: " + wins + "</div>");

    //display losses
    $("#losses").html("<div> Losses: " + losses + "</div>");

    //display userScore
    $("#userScore").html("<div>" + userScore + "</div>");


    //assign values to each crystal
    $("#redGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(redGem);

    $("#blueGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(blueGem);

    $("#whiteGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(whiteGem);

    $("#darkRedGem").attr("data-gemValue", Math.floor(Math.random() * (13 - 1)) + 1);
    console.log(darkRedGem);

    //when a crystal is clicked update the user score with what the crystal value represents
    $("#redGem").on("click", function(){
        var redGemValue = ($(this).attr("data-gemValue"));
        redGemValue = parseInt(redGemValue);
        userScore += redGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

    });

    $("#blueGem").on("click", function(){
        var blueGemValue = ($(this).attr("data-gemValue"));
        blueGemValue = parseInt(blueGemValue);
        userScore += blueGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

    });

    $("#whiteGem").on("click", function(){
        var redGemValue = ($(this).attr("data-gemValue"));
        redGemValue = parseInt(redGemValue);
        userScore += redGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

    });

    $("#darkRedGem").on("click", function(){
        var darkRedGemValue = ($(this).attr("data-gemValue"));
        darkRedGemValue = parseInt(darkRedGemValue);
        userScore += darkRedGemValue;
        $("#userScore").html("<div>" + userScore + "</div>");

    });

    //if the userScore equals the target score the user "wins", update the win count, reset the game

    //if the userScore becomes greater than the target score, the user "loses" the game, update loses, reset game
});