Const numeroSenha = document.querySelector("paramentro-senha_texto");
let tamanhoSenha = 12;
numeroSenha.texto.textcontent = tamanhoSenha;
Const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
const letraMinusculas = 'abcdefghijklmnopqrstuvwxyz';
conts numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll
const campoSenha = document.querySelectorAll('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelectorAll('forca');


 botoes[0].onclick = diminuiTamanho;
 botoes[1].onclick = aumentaTamanho;

 function diminuiTamanho(){
    if(tamanhoSenha >1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
 }

 function aumentaTamanho(){
    if(tamanhoSenha <20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
 }


 function gerasenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) 
