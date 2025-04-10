// Configuração inicial
function setupDigitando() {
  document.querySelectorAll('.dados').forEach(input => {
    input.addEventListener('input', function() {
      this.classList.add('digitando');
      setTimeout(() => this.classList.remove('digitando'), 1000);
    });
  });
}


function validarNome() {
  const nome = document.getElementById("nome");
  const erro = document.getElementById("nome-error");
  if (nome.value.length <3){
    erro.textContent = "Por favor, o nome precisa ter mais de 3 letras. Por favor, digite um nome válido!";
    nome.classList.add("invalido");
    nome.classList.remove("valido");
    return false

  }
  else if (nome.value.trim() === "") {
    erro.textContent = "Por favor, preencha o nome completo.";
    nome.classList.add("invalido");
    nome.classList.remove("valido");
    return false;
  } else {
    erro.textContent = "";
    nome.classList.remove("invalido");
    nome.classList.add("valido");
    return true;
  }
}

function validardataDeNascimento() {
  const dataInput = document.getElementById("data-nascimento");
  const erro = document.getElementById("data-nascimento-error");

  if (dataInput.value === "") {
    erro.textContent = "Por favor, preencha a data de nascimento.";
    dataInput.classList.add("invalido");
    dataInput.classList.remove("valido");
    return false;
  }


  const dataNascimento = new Date(dataInput.value);
  const hoje = new Date();
  const idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const mes = hoje.getMonth() - dataNascimento.getMonth();
  const dia = hoje.getDate() - dataNascimento.getDate();

  if (idade < 12 || (idade === 12 && (mes < 0 || (mes === 0 && dia < 0)))) {
    erro.textContent = "Você deve ter pelo menos 12 anos.";
    dataInput.classList.add("invalido");
    dataInput.classList.remove("valido");
    return false;
  }

  erro.textContent = "";
  dataInput.classList.remove("invalido");
  dataInput.classList.add("valido");
  return true;
}

function validarCPF() {
  const cpf = document.getElementById("cpf");
  const erro = document.getElementById("cpf-error");

  if (cpf.value.trim() === "") {
    erro.textContent = "CPF é obrigatório.";
    cpf.classList.add("invalido");
    cpf.classList.remove("valido");
    return false;
  }

  erro.textContent = "";
  cpf.classList.remove("invalido");
  cpf.classList.add("valido");
  return true;
}

function validarSexo() {
  const sexoSelect = document.getElementById('sexo');
  const errorSpan = document.getElementById('sexo-error');

  if (!sexoSelect.value) {
    errorSpan.textContent = 'Selecione uma opção';
    sexoSelect.classList.add('invalido');
    sexoSelect.classList.remove('valido');
    return false;
  } else {
    errorSpan.textContent = '';
    sexoSelect.classList.remove('invalido');
    sexoSelect.classList.add('valido');
    return true;
  }
}

function validarEmail() {
  const email = document.getElementById("email");
  const erro = document.getElementById("email-error");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === "") {
    erro.textContent = "O e-mail é obrigatório.";
    email.classList.add("invalido");
    email.classList.remove("valido");
    return false;
  } else if (!regexEmail.test(email.value)) {
    erro.textContent = "Formato de e-mail inválido.";
    email.classList.add("invalido");
    email.classList.remove("valido");
    return false;
  }

  erro.textContent = "";
  email.classList.remove("invalido");
  email.classList.add("valido");
  return true;
}

function validarTelefone() {
  const telefone = document.getElementById("telefone");
  const erro = document.getElementById("telefone-error");
  const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

  if (telefone.value.trim() === "") {
    erro.textContent = "O telefone é obrigatório.";
    telefone.classList.add("invalido");
    telefone.classList.remove("valido");
    return false;
  } else if (!regexTelefone.test(telefone.value)) {
    erro.textContent = "Telefone inválido. Ex: (99) 91234-5678";
    telefone.classList.add("invalido");
    telefone.classList.remove("valido");
    return false;
  }

  erro.textContent = "";
  telefone.classList.remove("invalido");
  telefone.classList.add("valido");
  return true;
}

function validarIdentidade() {
  const identidadeInput = document.getElementById('documento-identidade');
  const errorSpan = document.getElementById('documento-identidade-error');
  const label = identidadeInput.nextElementSibling;

  if (identidadeInput.files.length > 0) {
    errorSpan.textContent = '';
    label.classList.remove('invalido');
    return true;
  } else {
    errorSpan.textContent = 'Comprovante de identidade é obrigatório';
    label.classList.add('invalido');
    return false;
  }
}

function validarCep() {
  const cepInput = document.getElementById('cep');
  const errorSpan = document.getElementById('cep-error');
  const cep = cepInput.value.replace(/\D/g, ''); 

  
  if (cep.length > 5) {
    cepInput.value = cep.replace(/(\d{5})(\d)/, '$1-$2');
  }

 
  if (cep.length === 8) {
    errorSpan.textContent = '';
    cepInput.classList.remove('invalido');
    cepInput.classList.add('valido');
    return true;
  } else if (cep.length > 0) {
    errorSpan.textContent = 'CEP deve ter 8 dígitos (formato: 12345-678)';
    cepInput.classList.add('invalido');
    cepInput.classList.remove('valido');
    return false;
  } else {
    errorSpan.textContent = 'CEP é obrigatório';
    cepInput.classList.add('invalido');
    cepInput.classList.remove('valido');
    return false;
  }
}

function validarRua() {
  const ruaInput = document.getElementById('rua');
  const errorSpan = document.getElementById('rua-error');
  const rua = ruaInput.value.trim();

  
  const regexRua = /^[a-zA-ZÀ-ÿ\s\-',.ºª]+$/;

  if (rua.length === 0) {
    errorSpan.textContent = 'Rua é obrigatória';
    ruaInput.classList.add('invalido');
    ruaInput.classList.remove('valido');
    return false;
  } else if (!regexRua.test(rua)) {
    errorSpan.textContent = 'Nome de rua inválido';
    ruaInput.classList.add('invalido');
    ruaInput.classList.remove('valido');
    return false;
  } else {
    errorSpan.textContent = '';
    ruaInput.classList.remove('invalido');
    ruaInput.classList.add('valido');
    return true;
  }
}

function validarNumero() {
  const numeroInput = document.getElementById('numero');
  const errorSpan = document.getElementById('numero-error');
  const numero = numeroInput.value.trim();

  const regexApenasNumeros = /^[0-9]+$/;

  if (numero.length === 0) {
    errorSpan.textContent = 'Número é obrigatório';
    numeroInput.classList.add('invalido');
    numeroInput.classList.remove('valido');
    return false;
  } else if (!regexApenasNumeros.test(numero)) {
    errorSpan.textContent = 'Apenas números são permitidos';
    numeroInput.classList.add('invalido');
    numeroInput.classList.remove('valido');
    return false;
  } else {
    errorSpan.textContent = '';
    numeroInput.classList.remove('invalido');
    numeroInput.classList.add('valido');
    return true;
  }
}

function validarCidade() {
  const cidadeInput = document.getElementById('cidade');
  const errorSpan = document.getElementById('cidade-error');
  const cidade = cidadeInput.value.trim();

  const cidadesMA = [
    "São Luís", "Imperatriz", "Timon", "Caxias", "Codó",
    "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas",
    "Santa Inês", "Barra do Corda", "Chapadinha", "Pinheiro"
  ];

  const regexLetras = /^[A-Za-zÀ-ú\s]+$/;

  if (cidade === "") {
    errorSpan.textContent = "Cidade é obrigatória.";
    cidadeInput.classList.add("invalido");
    cidadeInput.classList.remove("valido");
    return false;
  } else if (!regexLetras.test(cidade)) {
    errorSpan.textContent = "Cidade não pode conter números ou caracteres especiais.";
    cidadeInput.classList.add("invalido");
    cidadeInput.classList.remove("valido");
    return false;
  } else if (!cidadesMA.map(c => c.toLowerCase()).includes(cidade.toLowerCase())) {
    errorSpan.textContent = "Cidade não pertence ao Maranhão.";
    cidadeInput.classList.add("invalido");
    cidadeInput.classList.remove("valido");
    return false;
  } else {
    errorSpan.textContent = "";
    cidadeInput.classList.remove("invalido");
    cidadeInput.classList.add("valido");
    return true;
  }
}


function validarComprovante() {
  const comprovanteInput = document.getElementById('comprovante');
  const errorSpan = document.getElementById('comprovante-error');
  const label = comprovanteInput.nextElementSibling;

  if (comprovanteInput.files.length > 0) {
    errorSpan.textContent = '';
    label.classList.remove('invalido');
    return true;
  } else {
    errorSpan.textContent = 'Comprovante de residência é obrigatório';
    label.classList.add('invalido');
    return false;
  }
}

function validarTrilha() {
  const trilhas = document.getElementsByName('trilha');
  const container = document.getElementById('container-trilhas');
  const errorSpan = document.getElementById('trilha-error');
  let selecionada = false;

  for (let i = 0; i < trilhas.length; i++) {
    if (trilhas[i].checked) {
      selecionada = true;
      break;
    }
  }

  if (selecionada) {
    errorSpan.textContent = '';
    container.classList.remove('invalido');
    return true;
  } else {
    errorSpan.textContent = 'Selecione uma trilha';
    container.classList.add('invalido');
    return false;
  }
}

function validarTermos() {
  const termosCheckbox = document.getElementById('termos');
  const grupoTermos = document.getElementById('grupo-termos');
  const errorSpan = document.getElementById('termos-error');

  if (termosCheckbox.checked) {
    errorSpan.textContent = '';
    grupoTermos.classList.remove('invalido');
    return true;
  } else {
    errorSpan.textContent = 'Você deve aceitar os termos';
    grupoTermos.classList.add('invalido');
    return false;
  }
}

function salvarInformacoes() {
  const valido =
    validarNome() &&
    validardataDeNascimento() &&
    validarCPF() &&
    validarSexo() &&
    validarEmail() &&
    validarTelefone() &&
    validarIdentidade() &&
    validarCep() &&
    validarRua() &&
    validarNumero() &&
    validarCidade() &&
    validarComprovante() &&
    validarTrilha() &&
    validarTermos();

  if (!valido) {
    alert("Por favor, preencha todos os campos obrigatórios corretamente.");
    return;
  }


  const dados = {
    nome: document.getElementById("nome").value,
    nascimento: document.getElementById("data-nascimento").value,
    cpf: document.getElementById("cpf").value,
    sexo: document.getElementById("sexo").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    identidade: document.getElementById("documento-identidade").files[0]?.name || "",
    cep: document.getElementById("cep").value,
    rua: document.getElementById("rua").value,
    numero: document.getElementById("numero").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    comprovante: document.getElementById("comprovante").files[0]?.name || "",
    trilha: document.querySelector('input[name="trilha"]:checked')?.value || "",
    termos: document.getElementById("termos").checked,
  };

  localStorage.setItem("formularioInscricao", JSON.stringify(dados));

  alert("Informações salvas com sucesso!");
}


document.querySelector('.formulario').addEventListener("submit", function (event) {
  let temErro = false;

  
  if (!validarNome()) temErro = true;
  if (!validardataDeNascimento()) temErro = true;
  if (!validarCPF()) temErro = true;
  if (!validarSexo()) temErro = true;
  if (!validarEmail()) temErro = true;
  if (!validarIdentidade()) temErro = true;
  if (!validarCep()) temErro = true;
  if (!validarRua()) temErro = true;
  if (!validarNumero()) temErro = true;
  if (!validarCidade()) temErro = true;
  if (!validarComprovante()) temErro = true;
  if (!validarTrilha()) temErro = true;
  if (!validarTermos()) temErro = true;

  if (temErro) {
    event.preventDefault();
  } else {
   
    event.preventDefault();


    
    window.location.href = "./pagina de login/login.html";
  }
});