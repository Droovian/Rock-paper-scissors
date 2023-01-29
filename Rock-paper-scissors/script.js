const comp_choice_display =document.getElementById('computer-choice')
const user_choice_display =document.getElementById('User-choice')
const result_display = document.getElementById('result')
const choices = document.querySelectorAll('button')
let computer_choice
let result
let user_choice

choices.forEach(choice => choice.addEventListener('click', (e)=>{
  user_choice = e.target.id
  user_choice_display.innerHTML = user_choice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * choices.length) +1
    console.log(randomNumber)

    if(randomNumber === 1){
        computer_choice = 'rock'
    }
    else if(randomNumber == 2){
        computer_choice = 'scissors'
    }
    else{
        computer_choice = 'paper'
    }
    comp_choice_display.innerHTML = computer_choice
}

function getResult(){
    if(computer_choice === user_choice){
        result = 'its a draw!'
    }
    if(computer_choice === 'rock' && user_choice === 'paper'){
        result = 'You Win!'
    }
    if(computer_choice === 'rock' && user_choice === 'scissors'){
        result = 'You Lose!'
    }
    if(computer_choice === 'paper' && user_choice === 'scissors'){
        result = 'You Win!'
    }
    if(computer_choice === 'paper' && user_choice === 'rock'){
        result = 'You Lose!'
    }
    if(computer_choice === 'scissors' && user_choice === 'rock'){
        result = 'You Win!'
    }
    if(computer_choice === 'scissors' && user_choice === 'paper'){
        result = 'You Lose!'
    }
    result_display.innerHTML = result
}