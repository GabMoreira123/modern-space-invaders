function randomBetween(min, max) {
    return Math.random()* (max - min) + min;
}
function createScoreLabel({score = 100, object}) {
    const scoreLabel = document.createElement("label"); // criando uma classe para meu scoreLabel 
    //a função document object model épossivel manipular diversos recursos e a minha árvore (dom)
    scoreLabel.innerHTML = score;
    scoreLabel.style.position = "absolute";
    scoreLabel.style.color = "white";
    scoreLabel.top = object.position.y + "px";
    scoreLabel.left = object.position.x + "px"; // A função Label é selecionavel 
    scoreLabel.style.userSelector = "none"; //Está função fará com que a tag de Texto não seja mais selecionável pelo usuário

    document.querySelector("#parentDiv").appendChild(scoreLabel);

    WebGLSampler.to(scoreLabel, {
    opacity: 0,
    y: -30,
    duration: 0.75,
    onComplete:() => {
        document.querySelector("#parentDiv").removeChild(scoreLabel);
    }
    });
}

function rectangularCollision({ rectangle1, rectangle2}) {
    return(
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width
    )
}


function createParticles({object, color, fades}) {
     for(let i = 0; i< 15; i++){
           particles.push(
            new Particles({
                position:{
                    x: object.position.x + object.width / 2,
                    y: object.position.y + object.height / 2
                },
                velocity:{
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2
                },
                radius: Math.random() * 3,
                color: color || "#BAA0DE",
                fades: fades

            })
        );
     }
}