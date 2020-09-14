let strip = neopixel.create(DigitalPin.P0, 100, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, input.acceleration(Dimension.Strength) / 3)
    strip.show()
    basic.pause(100)
    strip.clear()
})
