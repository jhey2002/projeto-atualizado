document.addEventListener("DOMContentLoaded", function () {
    const campos = [
      "nome",
      "data-nascimento",
      "cpf",
      "sexo",
      "email",
      "telefone",
      "cep",
      "rua",
      "numero",
      "cidade",
      "estado"
    ];
  
    
    campos.forEach((campo) => {
      const elemento = document.getElementById(campo);
      if (elemento && localStorage.getItem(campo)) {
        elemento.value = localStorage.getItem(campo);
      }
  
      if (elemento) {
        elemento.addEventListener("input", () => {
          localStorage.setItem(campo, elemento.value);
        });
      }
    });
  
    const trilhaSalva = localStorage.getItem("trilha");
    if (trilhaSalva) {
      const radioSelecionado = document.querySelector(`input[name="trilha"][value="${trilhaSalva}"]`);
      if (radioSelecionado) {
        radioSelecionado.checked = true;
      }
    }
    const radiosTrilha = document.querySelectorAll('input[name="trilha"]');
    radiosTrilha.forEach(radio => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          localStorage.setItem("trilha", radio.value);
        }
      });
    });
  });
  