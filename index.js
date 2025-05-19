// This file contains the JavaScript logic for the Simon game.

//lines 3-4-5-6 are part of requirements 21-22-23-24-25

var level = 0;          // Step 2: Start level at 0
var started = false;    // Step 1 + Hint 1: Track if game started
var gamePattern = [];   // Move this here — so it's not re-created every time
var buttonColours = ["red", "blue", "green", "yellow"]; // Move this here too


//1. Inside game.js create a new function called nextSequence()
//2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
//4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
//5. At the top of the game.js file, create a new empty array called gamePattern.
//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

function nextSequence() {
    userClickedPattern = [];// Clear user input at new level
    level++; // Step 4
    // previous 2 steps added to satisfy requirements 21-25

    $("#level-title").text("Level " + level); // Step 5 
    var randomNumber = Math.floor(Math.random() * 4);
    //var buttonColours = ["red", "blue", "green", "yellow"]; moved up to satify requirements 21-24
    var randomChosenColour = buttonColours[randomNumber];
    //var gamePattern = []; moved up to satify requirements 21-24
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

  // Flash + sound. Added to satisfy requirements 21-25 
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}








//7. Use jQuery to select the button with the same id as the randomChosenColour
//8. Use jQuery to animate a flash to the button selected in step 1.
//9. play approprote sound.mp3 file based on the color

    // 1. Select button
    //var selectedButton = $("#" + randomChosenColour);
    
    // 2. Animate flash
    //selectedButton.fadeOut(100).fadeIn(100);
    
    // 3. Play sound -REDACTED DUE TO SECTION REQUIREMENTS 14-15-16 below
    //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    //audio.play();

    //playSound(randomChosenColour); // added for SECTION REQUIREMENTS 14-15-16 below
    
    
    
    








//10. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
//11. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//--> So if the Green button was clicked, userChosenColour will equal its id which is "green".
//12. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];
//13. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.

    $(".btn").click(function() { //$(.btn) is a jQuery selector that targets all HTML elements with the class btn.
    
    // Step 2: Get the id of the clicked button
    var userChosenColour = $(this).attr("id");
    //$(this) "this" refers to the HTML element that was clicked — in this case, one of your buttons.
    //$(this) wraps it in jQuery, so you can use jQuery methods on it.
    //.attr("id")
    //.attr() is a jQuery method that lets you get or set attributes.
    //.attr("id") gets the id attribute of the clicked button.
    //var userChosenColour = ...
    //This saves the ID (like "green", "blue", etc.) into a variable called userChosenColour.

    // Step 4: Add to userClickedPattern
    userClickedPattern.push(userChosenColour);

    // (Optional) Log to console to see progress
    console.log(userClickedPattern);

    playSound(userChosenColour); // added for requirement 16 below
    
    checkAnswer(userClickedPattern.length - 1); // Requirement 27 way way down
});









//14. Create a new function called playSound() that takes a single input parameter called name.
//15. Take the code we used to play sound in the nextSequence() function and move it to playSound().
//16. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}








//17. Create a new function called animatePress(), it should take a single input parameter called currentColour.
//18. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.
//19. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//20. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");// this is to tap into the .css file, retrieve the pressed class and stylistically turn grey when pressed

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);// this is to make it stop after 1s
}








//21. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
//22. Create a new variable called level and start at level 0.
//23. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
//24. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
//25. Inside nextSequence(), update the h1 with this change in the value of level.


//Hint 1. You'll need a variable called started to toggle to true once the game starts and if it's true, then further key presses should not trigger nextSequence().
//Hint 3. The h1 has a unique id of level-title which you can target with jQuery.
//Hint 5.  You'll need to use jQuery again to change the h1 by targeting the id: level-title.


//detect first keypress
$(document).keydown(function() {// here, $(document) will search the entire html file. keydown means Once a keytroke is clicked, the code will automatically call the function)(), which will mark the game as started and mark down the level as 1
  if (!started) {
    $("#level-title").text("Level " + level);  // Step 3
    nextSequence();                            // Step 1
    started = true;                            // Mark game as started
  }
});





//26. Create a new function called checkAnswer(), it should take one input with the name currentLevel
//27. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.
//When the user clicks buttons, their clicks are stored in this array:
//When the user clicks buttons, their clicks are stored in this array:
//userClickedPattern = ["red", "green", "red", "yellow"];
//In programming, array indices start at 0. so 3 would be yellow
//28. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.
//29. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//30. Call nextSequence() after a 1000 millisecond delay.
//31. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.


//create the checkAnswer function():

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    // Step 4: check if full sequence completed
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();// Step 5: Call nextSequence() after a 1000 millisecond delay.
      }, 1000);
    }
  } else {
    console.log("wrong");
  }
}














//32. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
//33. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
//34. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  } else {
    console.log("wrong");

    // Step 32: Play wrong sound
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    // Step 33: Flash red screen using .game-over
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    // Step 34: Change h1 title
    $("#level-title").text("Game Over, Press Any Key to Restart");

     // Step 36 down below
    startOver();
  }
}











//35. Create a new function called startOver().
//36. Call startOver() if the user gets the sequence wrong.
//37. Inside this function, you'll need to reset the values of level, gamePattern and started variables.

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
