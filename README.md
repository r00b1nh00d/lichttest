## Schritt1 
blabliblub

```blocks
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


```


> Diese Seite bei [https://r00b1nh00d.github.io/lichttest/](https://r00b1nh00d.github.io/lichttest/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/r00b1nh00d/lichttest** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/r00b1nh00d/lichttest/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/r00b1nh00d/lichttest** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/r00b1nh00d/lichttest/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
