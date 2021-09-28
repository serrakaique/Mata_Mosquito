//dará erro se não definir a altura e largura
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    //1000
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    //750
    criaMosquitoTempo = 750
}

//pega a altura e a largura
function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

//remover o mosquito anterior (caso exista)
//quando a mosca some sem ser clicada perde uma vida
if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

// console.log('elemente selecionado foi: v' + vidas)
if(vidas > 3) {
//quando acabar as vidas, será direcionado para essa pagina
    window.location.href = 'fim_de_jogo.html'
}else{
document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

    vidas++
    }
}


//math.floor = pega o inteiro 
//math.random = pega um numero aleatorio , os 90 sao para nao passar do limite 
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

//para nao passar do limite da esquerda ou seja o valor ser negativo
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar o elemento html
//ele cria um elemento imagem e puxa qual imagem quer 
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
//importante deixar separado, pois juntos nao representa nenhuma function
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
//pra deixar mais dinamico 
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
//funcao para quando o mosquito for clicado
mosquito.onclick = function() {
    this.remove()
}

document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
            
        case 1:
            return 'ladoB'
    }
}