`use strict`

window.onload=function(){
    let secretNumber = Math.trunc(Math.random()*20) +1 ;

    const boxNumber = document.getElementsByClassName('box_text');
    let score =20;
    let highscore = 0;

    document.getElementById('check').addEventListener('click' , function(){
        const guess = Number(document.querySelector('.guess_the_number').value);
        console.log(guess , typeof(guess));

        if(!guess){
            document.querySelector('.start_guessing').textContent = 'No Number please Input a number';
        }else if(guess===secretNumber){
            document.querySelector('.start_guessing').textContent = 'Congrats! You Won the game ..';

            if(score>highscore){
                highscore = score ;
                document.querySelector('.highscore').textContent = highscore;
            }
            
            document.querySelector('.box_text').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
        }else if(guess !== secretNumber){
            if(score>1){
                document.querySelector('.start_guessing').textContent = guess > secretNumber ? 'Please enter low number' : 'Please enter a high number';
                score -- ;
                document.querySelector('.score').textContent = `Score: ${score}`;
                }else{
                    document.querySelector('.start_guessing').textContent = 'You have lost the game '; 
            }
        }
        
    });

    document.getElementById('playagain').addEventListener('click' , function(){
        let secretNumber = Math.trunc(Math.random()*20) +1 ;
        // console.log(secretNumber);
        // console.log("santosh mandal");
        score = 20 ;
        document.querySelector('.start_guessing').textContent = 'Start Guessing ...';
        document.querySelector('.score').textContent = `Score: ${score}`;
        document.querySelector('.box_text').textContent = '?';
        document.querySelector('.guess_the_number').value = '' ;
        document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.726)';
    })


  }

















