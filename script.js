const newgamebutton = document.querySelector(".newgamebutton")
const resetbutton = document.querySelector(".resetbutton")
const boxs = document.querySelectorAll(".box")
const newgame  = document.querySelector(".newgame")
const newgametext = document.querySelector(".newgametext")

//disabled all button function that we call after soneone win the game into winner check function 
function disablebutton(){
    for(let key of boxs){
        key.disabled = true
    }   
}

let turn = true


//add event listener that basicall mark the [x , o] as based on user choose 
//everytime we call winnercheck function its run whenever user gives any input 

Array.from(boxs).forEach((boxs) => {
    boxs.addEventListener("click", () => {
        if (turn === true) {
            boxs.innerHTML = "X"
            turn = false
        }
        else {
            boxs.innerHTML = "O"
            turn = true
        }
        boxs.disabled = true
        winnercheck()

    })

})

//possibility of wining chance/condition 

const winnercase = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let winnercaselen = winnercase.length

//a function that check all winnercase condition 
function winnercheck() {
    for (let key of winnercase) {
        let valuex = 0 , valueO = 0
        for (let val of key) {
            if (boxs[val].innerHTML === "X")
                valuex += 1
            else if(boxs[val].innerHTML === "O")
                valueO += 1
        }
        if (valuex === 3) { 
            disablebutton()
            newgametext.innerHTML = "Winner is X"
            newgame.classList.remove("hidden")
            console.log("winner is X")  
        }
        else if(valueO===3){
            disablebutton()
            newgametext.innerHTML = "Winner is O"
            newgame.classList.remove("hidden")
            console.log("winner is O")
        }
    }
}

//functionn basically reset the whole button and remove the inside text [X , O] it can be anything

function reset(){
    for(let key of boxs){
        key.disabled = false
        key.innerHTML = " "
    }
    newgame.classList.add("hidden")
}

resetbutton.addEventListener("click" , reset)
newgamebutton.addEventListener("click",reset)