//Recebe os numeros digitados e exibe no display
function insert(num){
    let numero = document.getElementById('exibe-resultado').innerHTML
    document.getElementById('exibe-resultado').innerHTML = numero + num
}

//Apaga um digito digitado de cada vez
function apagaAtual(){
    let resultado = document.getElementById('exibe-resultado').innerHTML
    document.getElementById('exibe-resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

//Apaga tudo o que está sendo exibido no display
function apagaTudo(){
    document.getElementById('exibe-resultado').innerHTML = ''
}

//Calcula os numeros digitados e a operação desejada
function calcResultado(){
    let resultado = document.getElementById('exibe-resultado').innerHTML
    if(resultado){
        document.getElementById('exibe-resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('exibe-resultado').innerHTML = ""
    }
}
