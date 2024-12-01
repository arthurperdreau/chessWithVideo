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
        square.setAttribute("squareId",i);
        const row=Math.floor((63-i) / 8)+ 1;
        if (row%2===0){
            square.classList.add(i%2===0 ?"beige":"brown");
        }else{
            square.classList.add(i%2===0 ?"brown":"beige");
        }
        gameBoard.append(square);
    })
}
createBoard();
//21 min