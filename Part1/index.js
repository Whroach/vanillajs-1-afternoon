
const gameProgress = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId)

    if(playerSpan.innerText === `X`){
        playerSpan.innerText ='O';
        clickedElement.innerText = 'X';

        gameProgress[clickedId] = 'X'
    }
    else{
        playerSpan.innerText = `X`;
        clickedElement.innerText = 'O';

        gameProgress[clickedId] = 'O'
    }
    console.log(gameProgress);

    let topRight = gameProgress[2];
    let topCenter = gameProgress[1];
    let topLeft = gameProgress[0];
    let middleCenter = gameProgress[4];
    let middleRight = gameProgress[5];
    let middleLeft = gameProgress[3];
    let bottomLeft = gameProgress[6];
    let bottomCenter = gameProgress[7];
    let bottomRight = gameProgress[8];
    
    if(topRight !== undefined && topRight === topCenter && topRight === topLeft){
        alert('Winner winner chicken dinner')
        return
    }
    if(middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
        alert('Winner winner chicken dinner')
        return
    }
    if(bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft){
        alert('Winner winner chicken dinner')
        return
    }
    if(topRight !==undefined && topRight === middleRight && topRight === bottomRight){
        alert('Winner winner chicken dinner')
        return
    }
    if(topCenter !==undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert('Winner winner chicken dinner')
        return
    }
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft ){
        alert('Winner winner chicken dinner')
        return
    }
    if(middleCenter !== undefined && middleCenter === topLeft && middleCenter === bottomRight){
        alert('Winner winner chicken dinner')
        return
    }
    if(middleCenter !== undefined && middleCenter === topRight && middleCenter === bottomLeft){
        alert('Winner winner chicken dinner')
        return
    }

    let boardFull = true;
    for(let i=0; i <= 8; i++){
        if(gameProgress[i] === undefined){
            boardFull = false;
            
        }
    }
        if(boardFull === true){
            alert("No winner? No chicken dinner!")
        }
    }


