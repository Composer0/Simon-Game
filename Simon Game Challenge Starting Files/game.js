const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];


$(".btn").click(function() {
    const userChosenColor=$(this).attr("id");
    // this is another way of saying 'any'. When a button is detected to have been clicked identify any attribute id and present it and inform the user that they clicked that pattern.
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor)
    // define sound as coming from userChosenColor avoids the empty array variable being selected. If the array is selected then there will be a continuous stream of inputs added into the array which will call for sound files that cannot be produced. userChosenColor simplifies this and only performs the color selected.
    });

    function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor)
}


function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play(); 
}

