const visor = document.getElementById('visor');
const visordesligado = document.getElementById('visordesligado');
var texto = visor.innerText;
var n = texto.length;

function ligar(){
    visor.style.display = 'flex';
    visordesligado.style.display = 'none';
}

function numero(num){
    if(visor.style.display === 'flex'){
        visor.innerHTML += num;
        texto = visor.innerText;
        n = texto.length;
        if(n>16){
            alert('Atingiu o limite máximo de números')
            visor.innerHTML = ''; 
        }
    }
}

function limpar(){
    if(visor.style.display === 'flex'){
        visor.innerHTML = '';
    }
}

function resultado(){
    if(visor.style.display === 'flex'){
        let resultado = visor.innerHTML;
        if(resultado){
            visor.innerHTML = eval(resultado);
        }
    }
}