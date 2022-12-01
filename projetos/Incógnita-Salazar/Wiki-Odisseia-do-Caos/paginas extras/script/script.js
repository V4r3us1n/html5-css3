function mostrarSenha() {
    let checked = document.querySelector("input#icheck");
    let estado_senha = document.querySelector("input#isenha");
    let estado_confirmar_senha = document.querySelector("input#irsenha");

    if (checked.checked == true) {
        estado_senha.type = "text";
        estado_confirmar_senha.type = "text";
    } else {
        estado_senha.type = "password";
        estado_confirmar_senha.type = "password";
    }
}

function checarSenha() {
    let senha = document.querySelector("input#isenha").value;
    let confirmar_senha = document.querySelector("input#irsenha").value;

    if (senha != confirmar_senha) {
        alert("[ERRO!] As senhas  não batem, cheque se digitou a senha corretamente em 'Confirmar Senha'!");
    }
}