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




