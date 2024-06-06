const scoreEl = document.querySelector("#scoreEl"); // o hashtag significa id 
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024; //canvas é responsavel por renderizar o jogo
canvas.height = 576;

let projectiles = []; //declaro um arreio, pode suportar vários dados juntos
let grids = []; //grid significa
let invaderProjectiles = [];
let particles = [];
let bombs = [];
let powerUps = [];

let player = new Player(); // a tag new Player é um novo jogador, estamos instanciando o mesmo

let keys = {

    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed:false
    },
    Space: {
        pressed: false
    }
};     // assim que inicia-se uma classe com colchetes {}

let frames = 0;  // É responsável pelos Frames por Segundo
let randomInterval = Math.floor(Math.random() * 500 + 500); // A função Math.floor arredonda os valores, para não dar números quebrados

let game = {
 over: false,
 active: true
};

let score = 0;
let spawnBuffer = 500; // Aqui altera a quantidade de tempo de spawn de inimigos
let fps = 60; // variavel responsável pelo carregamento dos quadros por segundo 
let fpsInterval = 1000 / fps;   // tempst 2020 13:56, trincheiras 

let msPrev = window.performance.now();

function init(){
    player = new Player();
    projectiles = [];
    grids = [];
    invaderProjectiles = [];
    particles = [];
    bombs = []; 
    powerUps = [];
    frames = 0;

  keys = {

        ArrowLeft: {
            pressed: false
        },
        ArrowRight: {
            pressed:false
        },
        Space: {
            pressed: false
        }
    };
     randomInterval = Math.floor(Math.random() * 500 + 500);

     game = {
    over: false,
    active: true
};
 score = 0;

  for(let i =0; i< 100; i++) {
    particles.push(
        new particles({
            position: {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            },
            velocity:{
                x:0,
                y:0.3
            },
            radius: Math.random() * 2,
            color: "white",
            
        })
    )
  }
}



