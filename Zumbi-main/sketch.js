var cacador1,cacador2,cacador3;
var zoombie;
var coracao1, coracao2,coracao3;
var gameOver;
var background;
function preload(){
coracao1 = loadImage("coracao1","heart_1.png")  
coracao2 = loadImage("coracao2","heart_2.png")   
coracao3 = loadImage("coracao3","heart_3.png")  
background = loadImage("fundo","bg.jpeg")
cacador1 = loadImage("cacador1","shoter_1.png")
cacador2 = loadImage("cacador2","shoter_2.png")
cacador3 = loadImage("cacador3","shoter_3.png")
}

function setup() {
createCanvas(windowWidth,windowHeight);
background = createSprite(displayWidth/2 - 20,displaywHeight/2 - 20,20,20)  
  
cacador1 = createSprite(0,600)
coracao3 = createSprite(1000,0)

}

function draw() {
background(0); 

//mova o jogador para cima e para baixo e torne o jogo compatível com dispositivos móveis usando touches (toques)
if (keyDown("UP_ARROW")) {
    cacador2.y = cacador2.y - 30
}
if (keyDown("DOWN_ARROW")) {
    cacador2.y = cacador2.y + 30
}
if(keyWentDown("space")){
 
    player.addImage(shooter_shooting)
   
  }
  
  //o jogador volta à imagem original quando pararmos de pressionar a tecla espaço
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }
  
  drawSprites();
}  
