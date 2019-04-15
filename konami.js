$(document).ready(function() {
  // store the keycodes as an array:
  var keysDesired = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  
  // create a place where we can remember what keys the users pushed
  var keysPressed = [];

  // add an event listener to the body that listens for keys being pressed
  $('body').on('keyup', function(event){
    keysPressed.push(event.keyCode);  // every time a key is pressed add that key to the keysPressed array
    $('.playerSequence').append('<li>' + event.keyCode + '</li>')  // append the key code to the dom

    // compare the solution to what the user pressed
    if (keysPressed.toString() == keysDesired.toString()) {
      $('html').addClass('party');  // if it is the same we PARTY WOOOOO
    }
  })
});