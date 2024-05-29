/*
Java script function used for get the input text field value and display with Hello name
If input value is empty the display to enter the name.
*/
function greetUser() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    if (name) {
        greetingMessage.textContent = 'Hello, ' + name + '!';
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
}