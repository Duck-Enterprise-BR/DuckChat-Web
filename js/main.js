const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.querySelector(".card-group button")

function isValidInput(selector, message, field){
    const messageErrorElement = document.querySelector(selector);

    if(!field.value){
        return messageErrorElement.textContent = message;
    } 

    messageErrorElement.textContent = "";
}

function login(){
    isValidInput("#message-email-error", "Digite seu email", email);
    isValidInput("#message-password-error", "Digite sua senha", password);
    

    if(password.value.length <= 7){
        console.log("error password");
        isValidInput("#message-password-error", "Senha precisa ser maior que 7", password);
        return;
    }

    if(email.value && password.value){
        console.log(`Email: ${email.value}`);
        console.log(`Senha: ${password.value}`);
    }

}