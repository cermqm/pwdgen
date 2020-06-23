//functions

function genpwd() {

    // define char set possibilities 
    var lc = "abcdefghijklmnopqrstuvwxyz";
    var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var sc = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    // define char set possibilities 

    // moved from HTML
    var length;
    var lowercase;
    var uppercase;
    var numbers;
    var specchar;

    // Prompt for length and error check
    // Loop to check and reprompt sourced from https://stackoverflow.com/questions/18721884/re-prompt-user-after-invalid-input-in-java
    lengthanswer = prompt("Input Password length - minimum of 8 - maximum of 128");

    while ((lengthanswer < 8) || (lengthanswer > 128)) {
        alert("ERROR Please enter a valid password length - between 8 and 128"); //error message
        lengthanswer = prompt("Input Password length - minimum of 8 - maximum of 128");
    }
    document.getElementById("length").innerHTML = lengthanswer;
    // Prompt for length and error check

    // Prompt for char type lowercase and error check
    lowercaseanswer = confirm("Use Lowercase in generated password? - click 'ok' for yes and 'cancel' for no");
    document.getElementById("lowercase").innerHTML = lowercaseanswer;
    // Prompt for char type lowercase and error check

    // Prompt for char type lowercase and error check
    uppercaseanswer = confirm("Use Uppercase in generated password? - click 'ok' for yes and 'cancel' for no");
    document.getElementById("uppercase").innerHTML = uppercaseanswer;
    // Prompt for char type lowercase and error check

    // Prompt for char type lowercase and error check
    numbersanswer = confirm("Use Numbers in generated password? - click 'ok' for yes and 'cancel' for no");
    document.getElementById("numbers").innerHTML = numbersanswer;
    // Prompt for char type lowercase and error check        

    // Prompt for char type lowercase and error check
    speccharanswer = confirm("Use Special Characters in generated password? - click 'ok' for yes and 'cancel' for no");
    document.getElementById("specchar").innerHTML = speccharanswer;
    // Prompt for char type lowercase and error check
    // Moved from html

    // pull variables from prompts in html
    var lengthInput = document.getElementById("length").innerHTML;
    var lowercaseInput = document.getElementById("lowercase").innerHTML;
    var uppercaseInput = document.getElementById("uppercase").innerHTML;
    var numbersInput = document.getElementById("numbers").innerHTML;
    var speccharInput = document.getElementById("specchar").innerHTML;
    // pull variables from prompts in html

    // Build passcharset based on user imputs
    passcharset = "";
    newpassword = "";

    if (lowercaseInput === "true") {
        passcharset += lc;
    }
    if (uppercaseInput === "true") {
        passcharset += uc;
    }
    if (numbersInput === "true") {
        passcharset += num;
    }
    if (speccharInput === "true") {
        passcharset += sc;
    }

    // Build passcharset based on user imputs

    // Generate random password based on user inputs - length and char sets to be used
    for (let i = 0; i < lengthInput; i++) {
        newpassword += passcharset.charAt(
            Math.floor(Math.random() * passcharset.length)
        );

        // Generate random password based on user inputs - length and char sets to be used

    }

    // Output new password
    document.getElementById("newpassword").innerHTML = newpassword;
    // Output new password


}