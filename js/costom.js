let one_text = document.querySelector(".one_text")
let player_1 = document.querySelector(".player_1")
let player1_input = document.querySelector(".player1_input")
let game1_button = document.querySelector(".game1_button")
let warning_1 = document.querySelector(".warning_1")

let player_2 = document.querySelector(".player_2")
let player2_input = document.querySelector(".player2_input")
let game2_button = document.querySelector(".game2_button")
let warning_2 = document.querySelector(".warning_2")

let chance = document.querySelector(".chance")
let only_chance = document.querySelector(".only_chance")
let over = document.querySelector(".over")


let chance_num = 3 ;

game1_button.addEventListener("click", function(e){
    e.preventDefault();
    if(player1_input.value){
        if(player1_input.value - 100){
            if(player1_input.value >= 1 && player1_input.value <= 7){
                warning_1.innerHTML = ""
                over.innerHTML = ""
                warning_1.style.color = "blue"
                one_text.innerHTML = "Player 2"
                player_1.style.display = "none"
                player_2.style.display = "block"
            }else{
                warning_1.innerHTML = "Please type numbers 1 to 7. More than that not allow !"
            }
        }else{
            warning_1.innerHTML = "Please type number not string"
        }
    }else{
        warning_1.innerHTML = "Please write your number"
    }
})

game2_button.addEventListener("click", function(e){
    e.preventDefault();
    if(player2_input.value){
        if(player2_input.value - 100){
            if(player2_input.value >= 1 && player2_input.value <= 7){
                warning_2.innerHTML = ""
                chance_num--
                if(chance_num !== 0){
                    if(player1_input.value == player2_input.value){
                        warning_2.innerHTML = "Player 2 Winner"
                        warning_2.style.color = "green"
                    }else{
                        chance.innerHTML = chance_num
                    }
                }else{
                    warning_2.innerHTML = "Player 1 Winner"
                    over.innerHTML = "Game Over"
                    over.style.color = "red"
                    warning_2.style.color = "red"
                    only_chance.innerHTML = ""
                }
            }else{
                warning_2.innerHTML = "Please type numbers 1 to 7. More than that not allow !"
            }
        }else{
            warning_2.innerHTML = "Please type number not string"
        }
    }else{
        warning_2.innerHTML = "Please write your number"
    }
})