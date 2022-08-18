let valor = 0
basic.forever(function () {
    valor = pins.analogReadPin(AnalogPin.P0)
    if (valor < 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (valor >= 300 && valor < 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (valor >= 300 && valor < 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (valor >= 400 && valor < 500) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    }
})
