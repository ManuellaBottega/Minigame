//Update é onde move os personagens, verifica colisoes, pontuação, qualquer coisa envolvendo logica
//Draw é oque tá aparecendo na tela no momento

window.addEventListener('load', function(){
//o load garante que tudo do html e css carregou antes de iniciar o codigo
//o window cria uma pagina e addAdventListener adciona um evento a pagina, nesse caso load
    const armazenaCanvas = this.document.getElementById('canvas')
//procura a variavel canvas e armazena
    const contexto = canvas.getContext('2d')
//o 2d permite desenhar imagem texto e tal no canvas, contexto tem todas as ferramentas para isso
    canvas.width = 1000   
    canvas.height = 500
//define a area de desenho
})