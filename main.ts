let szimbolum = 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(30)
    basic.showIcon(IconNames.Square)
    basic.pause(30)
    basic.showIcon(IconNames.Scissors)
    basic.pause(1)
    szimbolum = randint(1, 3)
    if (szimbolum == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (szimbolum == 2) {
        basic.showIcon(IconNames.Square)
    }
    if (szimbolum == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
