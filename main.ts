let segment: neopixel.Strip = null
let t = 0
let state = 0
function init_neopix () {
    segment = neopixel.create(DigitalPin.P2, 5, NeoPixelMode.RGB)
    segment.setBrightness(32)
    segment.showColor(neopixel.colors(NeoPixelColors.Black))
}
function countdown () {
    basic.showNumber(t)
    basic.pause(1000)
    t += -1
    if (t == 5) {
        radio.setGroup(0)
    }
    if (t == 0) {
        state = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
function feuO () {
	
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == 0) {
        feuO()
        basic.pause(2000)
        feuR()
        t = 20
        state = 1
    } else {
        if (receivedString == 0) {
            t = 7
            state = 1
        }
    }
})
function feuR () {
	
}
