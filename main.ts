input.onButtonPressed(Button.A, function () {
    if (position >= 0) {
        position += -20
        servos.P0.setAngle(position)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    if (position <= 180) {
        position += 20
        servos.P0.setAngle(position)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    servos.P0.stop()
})
let position = 0
position = 0
