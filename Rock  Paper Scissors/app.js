let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#mssg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    const options =["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = ()=>{
    // console.log("Draw Game!");
    msg.innerText="Game was draw. Try again...."
    msg.style.color="black";
    msg.style.backgroundColor="yellow";

}

const showWinner=(userWin, userChoice,compChoice) =>{
    if(userWin)
    {
        // console.log("You Win!!!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!!!!! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else
    {
        // console.log("You Lose!!!!!!")
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose!!! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }

}

const playGame= (userChoice)=>{
    // console.log("User choice= ",userChoice);
    const compChoice= genComputerChoice();
    // console.log("Comp choice= ",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin= compChoice==="scissors"?false:true;
        }
        else{
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id"); 
        // console.log("clicked",userChoice);
        playGame(userChoice);
    });
});

