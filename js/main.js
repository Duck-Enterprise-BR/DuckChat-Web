const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.querySelector(".card-group button")


function login(){
    console.log(`Email: ${email.value}`);
    console.log(`Senha: ${password.value}`);
}