//user1 clicks  a box to  either place an X or an O
//turn switches to user2
//user2 clicks  a box to  either place an X or an O
//turns alternate until either user has 3 Xs or 3 0s in a line
//'yay you won' is displayed when either player wins game

/*class players{
  constructor(player, symbol ){
    this.player = player;
    this.symbol = symbol;
  }
  selectbox(){
    document.querySelector('.gridbtn').addEventListner('click', placeSymbol)

placeSymbol(){
  .gridbtn.innerText = this.symbol
  
}
  
  playersTurn(){
    if(){
      
    }
  }
  
  
  }






}

let player1 = new players('player1', 'X')
let player2 = new players('player2', 'O')


//document.querySelector('squarebtn').addEventListner('click', placeSymbol)*/
let currentPlayer = 'X'

document.querySelector('#resetGame').addEventListener('click', gameReset)



//document.querySelector('.gridbtn').addEventListner('click', placeSymbol)


let boxes=document.querySelectorAll('.gridbtn')
console.log('boxes')
boxes = Array.from(boxes)

boxes.forEach(box => {
   box.addEventListener('click',() =>{
     if(box.innerText !== '' ){
       return
     }
    console.log()
     box.innerText= currentPlayer
    winner()
     checkForDraw()
     currentPlayer= currentPlayer == 'X' ? 'O' : 'X'
   })

  function checkForDraw(){
    let draw = boxes.every((element,index) => boxes[index].innerText == 'X' || boxes[index].innerText == 'O' ) 
    if(draw){
     alert('its a draw')
    }
  }


  function winner(){

        if(boxes[0].innerText == currentPlayer && boxes[1].innerText == currentPlayer && boxes[2].innerText == currentPlayer){ 
alert('You won!')}
      
    else if (boxes[2].innerText == currentPlayer && boxes[5].innerText == currentPlayer && boxes[8].innerText == currentPlayer){ 
alert('You won!')}
        
   else if (boxes[3].innerText == currentPlayer && boxes[4].innerText == currentPlayer && boxes[5].innerText == currentPlayer){ 
alert('You won!')}
        
  else if (boxes[2].innerText == currentPlayer && boxes[4].innerText == currentPlayer && boxes[6].innerText == currentPlayer){ 
alert('You won!')}
        
     else if (boxes[6].innerText == currentPlayer && boxes[7].innerText == currentPlayer && boxes[8].innerText == currentPlayer){ 
alert('You won!')    } 
        
         
     else if (boxes[2].innerText == currentPlayer && boxes[4].innerText == currentPlayer && boxes[6].innerText == currentPlayer){ 
alert('You won!')}     
        
         
     else if (boxes[0].innerText == currentPlayer && boxes[4].innerText == currentPlayer && boxes[8].innerText == currentPlayer){ 
alert('You won!')     
     
}
    
  }
})

function gameReset(){
  currentPlayer ='X'
  boxes.forEach( box => box.innerText ="")
  alert('Game Reset')
}
//every method  goes through all boxes, element is the first parameter, index in position in array

