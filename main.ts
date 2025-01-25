input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
    basic.pause(100)
    radio.sendNumber(5)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(100)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
    basic.pause(100)
    radio.sendNumber(5)
})
basic.showIcon(IconNames.Umbrella)
radio.setGroup(40)
basic.forever(function () {
	
})
