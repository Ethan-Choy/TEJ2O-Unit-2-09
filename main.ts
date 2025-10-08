/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program plays rock, paper, scissors
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let Score = 0
let randomNumber: number = 0

input.onGesture(Gesture.Shake, function() {
    randomNumber = randint(0, 2)

    // if number is 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Scissors)
        } 
        
    // if number is 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
        }
        
    // if number is 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Square)
        }
    
    basic.pause(5000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})


input.onButtonPressed(Button.A, function() {
     // add 1 to score
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    Score = Score +1
    basic.pause(3000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function() {
    // show score
    basic.clearScreen()
    basic.showString("Score :")
    basic.showNumber(Score)
    basic.pause(3000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
