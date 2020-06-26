//functions

function genpwd() {

    // define char set possibilities 
    var lc = "abcdefghijklmnopqrstuvwxyz";
    var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    // var sc = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var sc = "!@#$%^&*()_+~`|}{[]:;?,./-=";
    // define char set possibilities 

    // Prompt for length and confirm that the length is between 8 and 128
    // Loop to check and reprompt sourced from https://stackoverflow.com/questions/18721884/re-prompt-user-after-invalid-input-in-java
    var length = prompt("Input Password length - minimum of 8 - maximum of 128");
    while ((length < 8) || (length > 128)) {
        alert("ERROR Please enter a valid password length - between 8 and 128"); //error message
        length = prompt("Input Password length - minimum of 8 - maximum of 128");
    }

    // Prompt for char type lowercase, uppercase, number and specchar and confirm at least one is selected
    var lowercase = confirm("Use Lowercase in generated password? - click 'ok' for yes and 'cancel' for no");
    var uppercase = confirm("Use Uppercase in generated password? - click 'ok' for yes and 'cancel' for no");
    var numbers = confirm("Use Numbers in generated password? - click 'ok' for yes and 'cancel' for no");
    var specchar = confirm("Use Special Characters in generated password? - click 'ok' for yes and 'cancel' for no");

    while ((lowercase != true) && (uppercase != true) && (numbers != true) && (specchar != true)) {
        alert("ERROR Please select at least one character set - lowercase, uppercase, numbers and/or special characters"); //error message
        // Prompt for char type lowercase, uppercase, number and specchar and confirm at least one is selected
        lowercase = confirm("Use Lowercase in generated password? - click 'ok' for yes and 'cancel' for no");
        uppercase = confirm("Use Uppercase in generated password? - click 'ok' for yes and 'cancel' for no");
        numbers = confirm("Use Numbers in generated password? - click 'ok' for yes and 'cancel' for no");
        specchar = confirm("Use Special Characters in generated password? - click 'ok' for yes and 'cancel' for no");
    }

    // Build passcharset based on user imputs
    passcharset = "";
    newpassword = "";
    if (lowercase === true) { passcharset += lc; }
    if (uppercase === true) { passcharset += uc; }
    if (numbers === true) { passcharset += num; }
    if (specchar === true) { passcharset += sc; }

    // Generate random password based on user inputs - length and char sets to be used
    for (let i = 0; i < length; i++) {
        console.log("i = " + i);
        newpassword += passcharset.charAt(
            Math.floor(Math.random() * passcharset.length)
        );
        console.log(newpassword);
        console.log(length);
    }

    // Output new password
    document.getElementById("newpassplace").innerHTML = newpassword;

}