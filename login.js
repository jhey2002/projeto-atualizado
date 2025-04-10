function validarFormulario() {
    let valido = true;
  
    const userId = document.getElementById("user-id");
    const senha = document.getElementById("password");
    const erroUserId = document.getElementById("erro-user-id");
    const erroSenha = document.getElementById("erro-senha");
  
    erroUserId.textContent = "";
    erroSenha.textContent = "";
  
    userId.style.border = "1px solid #ccc";
    senha.style.border = "1px solid #ccc";
  
    if (userId.value.trim() === "") {
      erroUserId.textContent = "Id do usuário é obrigatório.";
      erroUserId.style.color = "red";
      userId.style.border = "2px solid red";
      valido = false;
    }
  
    if (senha.value.trim() === "") {
      erroSenha.textContent = "Senha é obrigatória.";
      erroSenha.style.color = "red";
      senha.style.border = "2px solid red";
      valido = false;
    } else if (valido) {
      userId.style.border = "2px solid green";
    }
  
    return valido;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleSenha = document.getElementById("toggleSenha");
    const campoSenha = document.getElementById("password");
  
    if (toggleSenha && campoSenha) {
      toggleSenha.addEventListener("change", function () {
        campoSenha.type = this.checked ? "text" : "password";
      });
    }
  });
  