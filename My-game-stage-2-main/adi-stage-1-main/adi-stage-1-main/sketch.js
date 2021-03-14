
var object = [];
var ground1
function preload(){
    bg= loadImage("BG/BG.png");
    ground1img= loadImage("Tiles/1.png");
    object1img = loadImage("Tiles/2.png");
    object2img = loadImage("Tiles/15.png");
    playerimg = loadImage("Object/man.png");
    object3img = loadImage("Tiles/12.png");
    object4img = loadImage("Tiles/16.png");

    water1 = loadImage("Tiles/17.png");
    g1 = loadImage("g1.png");
    g2 = loadImage("g2.png");

    //object3img = loadImage
}

function setup() {
    createCanvas(300, 400);
    player = createSprite(50,250,20,20)
    player.addImage(playerimg);
   
    object3 = createSprite(300,250,650,30);
    object3.addImage(object3img);
    object3.scale = 0.4
    object4 = createSprite(350,250,650,30);
    object4.addImage(object4img);
    object4.scale = 0.4
    ground0 = createSprite(width/width,height-40,700,40);
    ground0.shapeColor= "blue";
    
    ground1 = createSprite(width/2,height-40,300,40);
    ground1.shapeColor= "lightblue";
    ground2 = createSprite(width,height-40,200,40);
    ground2.shapeColor= "green";
    ground3 = createSprite(width/2+850,height-40,800,40);
    ground3.shapeColor= "red";
    ground4 = createSprite(2200,height-40,800,40);
    ground4.shapeColor= "green";
    ground5 = createSprite(3400,height-40,800,40);
    ground5.shapeColor= "purple";
    ground6 = createSprite(4300,height-40,800,40);
    ground6.shapeColor= "black";


    platform1 =createSprite(600,150,60,20);
    platform1.shapeColor= "orange";

    //ground.visible = false;
    //ground.addImage(object1img);


  
}
  function draw() {
    background(bg,50,50);
    console.log(player.x);
     if(keyDown(LEFT_ARROW)){
          player.x = player.x-5
    }
   
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5
    }

    if(keyDown(UP_ARROW)){
        player.velocityY = -12;
    }
    player.velocityY = player.velocityY+1
    player.collide(ground0);
    player.collide(ground1);
    player.collide(ground2);
    player.collide(ground3);
    player.collide(ground4);
    player.collide(ground5);
    player.collide(ground6);
    player.collide(object3);
    player.collide(object4);
    


    player.collide(platform1);
  
    //player.x=camera.position.x;
    //player.y=camera.position.y;
    camera.position.x =player.x;

    drawSprites();
   image(ground1img,ground0.x-400,ground0.y-25,400);
    image(object1img,ground0.x-200,ground0.y-25,200,120)
    image(object1img,ground0.x,ground0.y-25,200,120)
    image(object1img,ground0.x-100,ground0.y-25);
    
    image(object1img,ground1.x-100,ground1.y-25,200,120)
    image(object1img,ground1.x-100,ground1.y-25);
    image(object1img,ground1.x-200,ground1.y-25);

    image(water1,ground1.x+200,ground1.y-25,100,120);

    image(object1img,ground2.x,ground2.y-25,200,120);
    image(object1img,ground2.x-100,ground2.y-25);
    image(ground1img,ground2.x-200,ground2.y-25);


    image(object3img,ground3.x-200,ground3.y-25)
    image(object3img,ground3.x-200,ground3.y-25);
    

    image(ground1img,589,ground3.y-25)
}