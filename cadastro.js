document.getElementById("form-cadastro").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const id = document.getElementById("novo-id").value;
    const senha = document.getElementById("nova-senha").value;
  
    
    localStorage.setItem("usuarioID", id);
    localStorage.setItem("usuarioSenha", senha);
  
    alert("Usuário cadastrado com sucesso!");
  
    
    window.location.href = "login.html";
  });
  

  const campoID = document.getElementById("novo-id");
  if (campoID) {
    campoID.addEventListener("input", () => {
      localStorage.setItem("usuarioID", campoID.value);
    });
  }
