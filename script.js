
// Função para validar o formulário de cadastro
function validateCadastroForm() {
    var nome = document.getElementById("nome").value;
    /* Valida o nome */ 
    var email = document.getElementById("email").value;
    /* Valida o email */ 
    var senha = document.getElementById("senha").value;
    /* Valida a senha */ 
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    /* Valida o confirmar senha */ 

    if (nome === "" || email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
       
        return false;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas devem ser iguais.");
        return false;
    }
    if(senha.length < 5 || senha.length > 8){
        alert( "A senha deve conter entre 5 e 8 números" );
    // Se a validação for bem-sucedida, você pode redirecionar para outra página aqui
    return false ;
}
return true;
}
// Função para validar o formulário de login
function validateLoginForm() {
    var loginEmail = document.getElementById("loginEmail").value;
     /* Valida o loginEmail */ 
    var loginSenha = document.getElementById("loginSenha").value;
     /* Valida o loginSenha */ 

    if (loginEmail === "") {
        alert("Por favor, insira seu email.");
        return false;
    }

    if (loginSenha === "") {
       alert("Por favor, insira sua senha.");
        return false;
    }

    // Se a validação for bem-sucedida, você pode redirecionar para outra página aqui
    return true;
}

