// lightsOn 1 means that is on, 0 means off
input.onButtonPressed(Button.A, function () {
    if (lightsOn == 0) {
        lightsOn = 1
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
        lightsOn = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let lightsOn = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
