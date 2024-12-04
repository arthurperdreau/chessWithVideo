const gameBoard = document.querySelector("#gameBoard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#infoDisplay");
const width=8
let playerGo="black"
playerDisplay.textContent="black"


const startPieces=[
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook,
]
function createBoard(){
    startPieces.forEach((startPiece, i)=>{ //--> la boucle forEach permet aussi d'obtenir les indices
        const square=document.createElement("div");
        square.classList.add("square");
        square.innerHTML=startPiece;
        if(square.firstChild){
            square.firstChild.setAttribute("draggable",true);
        }
        square.setAttribute("squareId",i);
        const row=Math.floor((63-i) / 8)+ 1;
        if (row%2===0){
            square.classList.add(i%2===0 ?"beige":"brown");
        }else{
            square.classList.add(i%2===0 ?"brown":"beige");
        }
        if(i<=15){
            square.firstChild.firstChild.classList.add("black");
        }
        if(i>=48){
            square.firstChild.firstChild.classList.add("white");
        }
        gameBoard.append(square);
    })
}
createBoard();

const allSquares= document.querySelectorAll(".square")//--> on peut mettre plusieurs class ou id
allSquares.forEach((square)=>{
    square.addEventListener("dragstart",dragStart)
    square.addEventListener("dragover",dragOver)
    square.addEventListener("drop",dragDrop)

})
let startPositionId
let draggedElement
function dragStart(e){//--> le e correspond à l'élément qui appelle la fonction
    startPositionId=e.target.parentNode.getAttribute("squareId")
    draggedElement=e.target;
}
function dragOver(e){
    e.preventDefault()//--> permet d'enpecher l'action. Par exemple link.preventDefault() ne va pas ouvrir le lien
}
function dragDrop(e){
    e.stopPropagation()//--> stop les événements ou actions suivants associés à e
    const correctGo=draggedElement.firstChild.classList.contains(playerGo);
    const taken=e.target.classList.contains("piece")
    const opponentGo=playerGo==="white"?"black":"white"
    const takenByOpponent=e.target.firstChild?.classList.contains(opponentGo);
    //e.target.parentNode.append(draggedElement)
    //e.target.remove()
    changePlayer()
}
function changePlayer(){
    if(playerGo==="black"){
        reverseIds()
        playerGo="white"
        playerDisplay.textContent="white"
    }else{
        revertIds()
        playerGo="black"
        playerDisplay.textContent="black"
    }

}
function reverseIds(){
    const allSquares=document.querySelectorAll(".square")
    allSquares.forEach((square,i)=>
        square.setAttribute("squareId",(width*width-1)-i))
}
function revertIds(){
    const allSquares=document.querySelectorAll(".square")
    allSquares.forEach((square,i)=>
        square.setAttribute("squareId",i))
}
//30min