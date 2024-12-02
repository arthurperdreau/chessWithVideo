const gameBoard = document.querySelector("#gameBoard");
const playerDisplay = document.querySelector("#playerDisplay");
const infoDisplay = document.querySelector("#infoDisplay");
const width=8


const startPieces=[
    rook,knight,bishop,queen,king,bishop,king,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,king,rook,
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

const allSquares= document.querySelectorAll("#gameBoard .square")//--> on peut mettre plusieurs class ou id
allSquares.forEach((square)=>{
    square.addEventListener("dragstart",dragStart)
})
let startPositionId
let draggedElement
function dragStart(e){//--> le e correspond à l'élément qui appelle la fonction
    startPositionId=e.target.parentNode.getAttribute("squareId")
    draggedElement=e.target;
}
//30min