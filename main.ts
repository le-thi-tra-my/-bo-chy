radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.playMelody("- C5 C5 C5 C C5 C5 C5 ", 107)
        basic.showString("cháy nhà")
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.temperature() > 40) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
    basic.pause(1000)
})
