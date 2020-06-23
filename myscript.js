//functions

function genpwd() {

    // define char set possibilities 
    var lc = "abcdefghijklmnopqrstuvwxyz";
    var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var sc = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    // define char set possibilities 

    var length;
    var lowercase;
    var uppercase;
    var numbers;
    var specchar;

    // Prompt for length and error check
    // Loop to check and reprompt sourced from https://stackoverflow.com/questions/18721884/re-prompt-user-after-invalid-input-in-java
    length = prompt("Input Password length - minimum of 8 - maximum of 128");
    while ((length < 8) || (length > 128)) {
        alert("ERROR Please enter a valid password length - between 8 and 128"); //error message
        length = prompt("Input Password length - minimum of 8 - maximum of 128");
    }

    // Prompt for char type lowercase
    lowercase = confirm("Use Lowercase in generated password? - click 'ok' for yes and 'cancel' for no");

    // Prompt for char type uppercase
    uppercase = confirm("Use Uppercase in generated password? - click 'ok' for yes and 'cancel' for no");

    // Prompt for char type numbers
    numbers = confirm("Use Numbers in generated password? - click 'ok' for yes and 'cancel' for no");

    // Prompt for char type specchar
    specchar = confirm("Use Special Characters in generated password? - click 'ok' for yes and 'cancel' for no");

    // Build passcharset based on user imputs
    passcharset = "";
    newpassword = "";
    console.log("lowercase just before if statement = " + lowercase);
    if (lowercase === true) { passcharset += lc; }
    if (uppercase === true) { passcharset += uc; }
    if (numbers === true) { passcharset += num; }
    if (specchar === true) { passcharset += sc; }

    // Generate random password based on user inputs - length and char sets to be used
    console.log("passcharset = " + passcharset);
    for (let i = 0; i < length; i++) {
        console.log("i = " + i);
        newpassword += passcharset.charAt(
            Math.floor(Math.random() * passcharset.length)
        );
        console.log("newpassword = " + newpassword);

    }

    // Output new password
    document.getElementById("newpassword").innerHTML = newpassword;

}