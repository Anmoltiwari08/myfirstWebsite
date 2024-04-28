score=0
console.log("Hello World")
let PlayGame = "false";
gameover=false
let scorevalue=document.querySelector('.score')
cross=true
button = document.querySelector(".btn1")
button.addEventListener('click', (e) => {
    PlayGame = "true"
    console.log(PlayGame);
    if (PlayGame == "true") {
        startGame();
    }       
    scorevalue.style.display='block' 
    let dragon = document.querySelector('.dragon')
    dragon.classList.add('movingdragon')
    // score.style.display=block
})           
             
function startGame() {
    document.addEventListener("keyup", (e) => {
        console.log(e.keyCode);
        let dinasaur = document.querySelector('.dinasaur')
        // if (!gameover) {
            if (e.keyCode == 38) {
                
                dinasaur.classList.add('jumpdragon')
                // console.log("hello");
                setTimeout(() => {
                    dinasaur.classList.remove('jumpdragon')
                }, 800);
            }
            if (e.keyCode == 39) {
                dino = parseInt(window.getComputedStyle(dinasaur, null).getPropertyValue('left'));; 8
                dinasaur.style.left = dino + 120 + "px"
            
            }
            if (e.keyCode == 37) {
                dino = parseInt(window.getComputedStyle(dinasaur, null).getPropertyValue('left'))
                dinasaur.style.left = dino - 120 + "px"
             
            // }
        }   
            
    }        
    )       

    setInterval(() => {
        let dinasaur = document.querySelector('.dinasaur')
        let dragon = document.querySelector('.dragon')

        dx = parseInt(window.getComputedStyle(dinasaur, null).getPropertyValue('left'))
        dy = parseInt(window.getComputedStyle(dinasaur, null).getPropertyValue('top'))
    
        ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'))
        oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'))

        offsetX = Math.abs(dx - ox)
        offsetY = Math.abs(dy - oy)

        if (offsetX < 70 && offsetY < 80) {
            para = Array.from(document.querySelectorAll('p'))
            button = document.querySelector('button')
            button.style.display = 'none'
            
            dragon.classList.remove('movingdragon')
            // para.forEach((e, i) => {
            //     if (i === 0) {
            //         p.innerText = 'Game Over';
            //     } else if (i === 1) {
            //         p.style.display = 'none';
            //     }
            // });
           para[0].innerText='Game Over'
           para[1].innerText='Reload to Play Again'
           gameover=true

        }
        else if (offsetX<150 && cross) {
            score+=1
            updatescore(score)
            cross=false
            setTimeout(() => {
                cross=true
            }, 1000);
            setTimeout(() => {
                animate= parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'))
                dragon.style.animationDuration= animate-0.01 +'s'
            }, 700);
            }
    }, 10);

}
if (PlayGame == "true") {
    startGame();
}

function updatescore() {
    if (!gameover) {
        scorevalue.innerText="your Score: "+score
    }
}
