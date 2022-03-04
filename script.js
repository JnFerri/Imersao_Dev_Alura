var carta01 = {
    nome : "Harry Potter",
    imagem: "https://i.pinimg.com/originals/4e/b7/13/4eb7135b66e55011c9ec0af9bdd8578a.gif",
    atributo:{
     inteligencia:75,
     maldade:5,
     magia:86
    }
  }
  
  var carta02 = {
    nome: "Hermione",
    imagem:"https://media3.giphy.com/media/xSS0vcjoQM8KY/200.gif",
    atributo:{
      inteligencia:96,
     maldade:30,
     magia:75
      }
  }
  
  var carta03 = {
    nome:"Ron weasley",
    imagem:"https://i.pinimg.com/originals/1f/7a/20/1f7a200c9f835f9b2372dd557fe38cb6.gif",
    atributo:{
      inteligencia:30,
     maldade:3,
     magia:68
      }
  }
  
  var carta04 = {
    nome:"Draco Malfoy",
    imagem:"https://i.pinimg.com/originals/f8/67/26/f86726074941f779028f50d32afb8cfe.gif",
    atributo:{
     inteligencia:45,
     maldade:80,
     magia:70
      }
  }
  
  var carta05 = {
    nome:"Sirius Black",
    imagem:"https://i.pinimg.com/originals/06/2b/6f/062b6f7b1c6a457683016f6153782ae4.gif",
    atributo:{
     inteligencia:76,
     maldade:50,
     magia:80
      }
  }
  
  var carta06 = {
    nome:"Luna Lovegood",
    imagem:"https://i.pinimg.com/originals/d0/7f/74/d07f74d4ef04cda8929e674173a79452.gif",
    atributo:{
      inteligencia:85,
     maldade:0,
     magia:75
      }
  }
  
  var carta07 = {
    nome:"Bellatrix",
    imagem:"https://i.pinimg.com/originals/b3/b7/db/b3b7db2d8d6c77c21879940dd788f9c4.gif",
    atributo:{
      inteligencia:40,
     maldade:95,
     magia:80
      }
  }
  
  var carta08 = {
    nome:"Dobby",
    imagem:"https://media.tenor.com/images/07d8e52aec18188c59f0fa7769d9dcca/tenor.gif",
    atributo:{
      inteligencia:40,
     maldade:50,
     magia:40
      }
    }
      var carta09 = {
        nome:"Voldemort",
        imagem:"https://i.gifer.com/7Ee8.gif",
        atributo:{
          inteligencia:80,
         maldade:95,
         magia:80
          }
        }
          var carta10 = {
            nome:"Dumbledore",
            imagem:"http://24.media.tumblr.com/3ea06ec95968b3092e3ddeb0f032e694/tumblr_mkowyl6BtV1rfzpd7o1_250.gif",
            atributo:{
              inteligencia:85,
             maldade:30,
             magia:96
              }
      }
  

  
  var cartas =[carta01, carta02 , carta03, carta04, carta05, carta06, carta07, carta08, carta09, carta10]
  
  var cartaDoJogador =[]
  var CartaDaMaquina =[]
  

  function sortearCarta(){
   
    var cartaMaquina = parseInt(Math.random()*8)
    cartaDaMaquina = cartas[cartaMaquina]
  
  
    var cartaJogador=parseInt(Math.random()*8)
  while(cartaJogador==cartaMaquina){
    var cartaJogador=parseInt(Math.random()*8)}
    cartaDoJogador=cartas[cartaJogador]
    console.log(cartaDoJogador)
    exibirCartaJogador()
    
    
    
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
   }
  
   
  function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    for(var atributo in cartaDoJogador.atributo){
      opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo
      opcoes.innerHTML= opcoesTexto
    }
    
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo")
    for (i = 0; i < radioAtributo.length; i++) {
      if(radioAtributo[i].checked){
        return radioAtributo[i].value
        
      }
    }
  }
  
  function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    console.log(atributoSelecionado)
    var resultado = document.getElementById("resultado")
  if (cartaDoJogador.atributo[atributoSelecionado] > cartaDaMaquina.atributo[atributoSelecionado]){
    var htmlResultado = `<p class="resultado-final">Voce Ganhou Da Maquina</p>`
    resultado.innerHTML= htmlResultado
  } else if(cartaDoJogador.atributo[atributoSelecionado] < cartaDaMaquina.atributo[atributoSelecionado]){
    var htmlResultado = `<p class="resultado-final">Voce Perdeu Da Maquina</p>`
    resultado.innerHTML= htmlResultado
  } else {
    var htmlResultado = `<p class="resultado-final">Voce Empatou Com a Maquina</p>`
    resultado.innerHTML= htmlResultado
  }
  exibirCartaMaquina()
  }
  
  function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">' 
divCartaJogador.style.backgroundImage = `url(${cartaDoJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaDoJogador.nome}</p>`
    var opcoesTexto = ""
    for(var atributo in cartaDoJogador.atributo){
      opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaDoJogador.atributo[atributo] + "<br>"
       }
      var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML= nome + moldura + html + opcoesTexto +"</div>"
    

 }

 function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">' 
divCartaMaquina.style.backgroundImage = `url(${cartaDaMaquina.imagem})`
var nome = `<p class="carta-subtitle">${cartaDaMaquina.nome}</p>`
var opcoesTexto = ""
for(var atributo in cartaDaMaquina.atributo){
  opcoesTexto += "<p type='text' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaDaMaquina.atributo[atributo] + "</p>"
   }
  var html = "<div id='opcoes' class='carta-status'>"
divCartaMaquina.innerHTML= nome + moldura + html + opcoesTexto +"</div>"
  
}

 