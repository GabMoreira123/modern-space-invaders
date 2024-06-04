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