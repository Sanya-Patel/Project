let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let mssgContainer = document.querySelector(".mssg-container");
let mssg = document.querySelector("#mssg");

let turnO = true; //playerX and playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        // console.log("clicked");
        if(turnO) //playerO
        {
            // box.innerText.
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;
        checkWinner();
    });
});

const enableBoxes= ()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes= ()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const resetGame= () =>{
    turnO=true;
    enableBoxes();
    mssgContainer.classList.add("hide");
}

const showWinner= (winner)=>{
    mssg.innerText=`Congratulations, Winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner= () =>{
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner", pos1);
                showWinner(pos1);

            }
        }

    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

