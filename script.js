let score = 20;
let randomNumber = Math.floor(Math.random()*20 + 1);



document.querySelector(".again").addEventListener("click", function(){
    window.location.reload();
})



document.querySelector(".check").addEventListener("click", function(){
    const guessNumber = Number(document.querySelector(".guess").value);
    const message = document.querySelector(".message");
    const scoreQ = document.querySelector(".score");    
    if(score > 0){
        
        if(!guessNumber){
            message.innerHTML = "Add a value that is greater than 0 ";
            score--;
            scoreQ.innerHTML = score;
        

    }
        else if(guessNumber > randomNumber){
            message.innerHTML = "The number is too High!!!!";
            score--;
            scoreQ.innerHTML  = score;
    }
        else if(guessNumber < randomNumber){
            message.innerHTML = "The Number is too low!!!";
            score--;
            scoreQ.innerHTML = score;
    }
    if(guessNumber === randomNumber){
        message.innerHTML = "That Number was Correct!!!";
        document.querySelector("body").style.background = "red";
        document.querySelector(".number").innerHTML = randomNumber;

    }
}
if(score == 0){
    message.innerHTML = "You Lost!!!!";
}
})



