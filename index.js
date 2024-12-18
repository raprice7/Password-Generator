const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Select p tags where passwords will populate for user
let password1 = document.getElementById("pass-1");
let password2 = document.getElementById("pass-2");


function generatePassword(){
    //password variables so that user can get new passwords every time they click 'Generate Passwords'
    password1.textContent = "";
    password2.textContent = "";

    //Create a for loop which will create a random password using the characters array
    for(let i = 0; i < 15; i++){
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        let randomIndexTwo = Math.floor(Math.random() * characters.length);
        password1.textContent += characters[randomIndexOne];
        password2.textContent += characters[randomIndexTwo];
    }
}
password1.addEventListener("click", copyText);
password2.addEventListener("click", copyText);

function copyText(event) {
    let clickedElement = event.target; // The element that was clicked
    let textToCopy = clickedElement.textContent; // Get the text content of the clicked element
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied: " + textToCopy);
    });
}


