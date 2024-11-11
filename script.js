console.log("Welcome to Tic Tac Toe");
var music=new Audio("game.wav")
var audioTurn=new Audio("turn.wav")
var gameOver=new Audio("gameover.wav")
let isgameOver=false

var turn="X"

const changeTurn=()=>{
    return turn==="X"?"O":"X"
}
//function to check for a win

const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&
        (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&
        (boxtexts[e[0]].innerText!=='')){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Winner"
            isgameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            e.forEach(index => {
                boxtexts[index].classList.add('strikethrough');
            });
        }

    })
}

//game algoritms

var boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText=turn){
            turn=changeTurn();
            audioTurn.play();
            checkWin()
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerText='Turn for '+turn
            }
        }
    })
})

//reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=''
    })
    turn='X';
    isgameOver=false;
    document.getElementsByClassName('info')[0].innerText='Turn for '+turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"  
})