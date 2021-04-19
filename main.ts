// A button to OPEN actions
input.onButtonPressed(Button.A, function () {
    if (position < 180) {
        position += 20
        servos.P0.setAngle(position)
    } else {
        position = 180
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
// B button to CLOSE actions
input.onButtonPressed(Button.B, function () {
    if (position > 0) {
        position += -20
        servos.P0.setAngle(position)
    }
    if (position == 0) {
        position = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
// set variables to start
let position = 0
position = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 0)
