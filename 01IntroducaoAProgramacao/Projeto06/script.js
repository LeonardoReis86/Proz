let nomeUsuario;
// =============== Expressão regular para validar nome apenas com letras ===============
const regexNomeUsuario = /^[A-Za-z]+$/;
//=============== Testa nome do usuario e testa até uma entrada válida   ===============
nomeUsuario= prompt("Por favor. digite seu nome: ");
while(!regexNomeUsuario.test(nomeUsuario)) {
  alert("Nome Inválido. Por favor, insira apenas letras(sem acentos, numeros ou caracteres expeciais)");
  nomeUsuario = prompt("Por favor. digite seu nome: ");
}

let anoDeNascimento;
const anoAtual = 2022; // para ano dinâmico usar: const anoAtual = new Date().getFullYear();
let dadosInvalidos = true // variável para controle dos dados inseridos


//=============== Verificação se ano de nascimento é válido e dentro do intervalo ===============
while(dadosInvalidos) {
  anoDeNascimento = prompt("Por favor, digite seu ano de nascimento entre 1922 e 2021");
  anoDeNascimento = parseInt(anoDeNascimento);

  if(!isNaN(anoDeNascimento) && anoDeNascimento >= 1922 && anoDeNascimento <= 2021) {
    dadosInvalidos = false // Saída do loop com entrada válida
  } else {
    alert("Ano digitado inválido. Por favor, insira um ano entre 1922 e 2021.");
  }
}

//=============== Calcula idade ===============
let idade = anoAtual - anoDeNascimento

//============== Exibe o nome do usuário e idade digitada no prompt em um alerta ===============
alert(`Nome: ${nomeUsuario}, Idade: ${idade}`);