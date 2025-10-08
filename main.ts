/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program plays rock, paper, scissors
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let score = 0

input.onGesture(Gesture.Shake, function() {
    let randomNumber = randint(0, 2)

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
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    score = score +1
    basic.pause(3000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    
})

input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString("Score :")
    basic.showNumber(score)
    basic.pause(3000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
