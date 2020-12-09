let maximum = 0
let aktueller_Messwert = 0
let messreihe: number[] = []
let strip = neopixel.create(DigitalPin.P1, 49, NeoPixelMode.RGB_RGB)
for (let index = 0; index < 48; index++) {
    messreihe.push(input.soundLevel())
}
basic.forever(function () {
    aktueller_Messwert = Math.round(input.soundLevel())
    messreihe.push(aktueller_Messwert)
    messreihe.shift()
    maximum = 6
    for (let Wert of messreihe) {
        maximum = Math.max(maximum, Wert)
    }
    strip.clear()
    for (let Index = 0; Index <= Math.map(aktueller_Messwert, 0, maximum, 0, 24); Index++) {
        strip.setPixelColor(Index, neopixel.hsl(60 + Index * 60, 100, 5))
    }
    for (let Index2 = 0; Index2 <= Math.map(aktueller_Messwert, 0, maximum, 0, 24); Index2++) {
        let Index = 0
        strip.setPixelColor(48 - Index2, neopixel.hsl(60 + Index * 60, 100, 5))
    }
    strip.show()
    serial.writeLine("" + (aktueller_Messwert))
    basic.pause(10)
})
