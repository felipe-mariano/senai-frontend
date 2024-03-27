// document.querySelector("button").addEventListener("click",validarLogin); //
function validarLogin() {
    let login = document.querySelector("#login").value;
    console.log(login);
    let senha = document.querySelector("#senha").value;
    console.log(senha);
    let msg = document.querySelector("Span");

    if (login == "aluno" && senha == "senai01"){
        msg.inneHTML = "Acesso Permitido! <a href='index.html'>Clique aqui</a>";
        msg.style = "background-color: blue"
    } else{
        msg.innerText = "Login ou Senha incorretos!!";
        msg.style = "background-color: gold"
    }

    
    return false;

}