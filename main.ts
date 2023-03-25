function Game (speed: number) {
	
}
input.onButtonPressed(Button.A, function () {
    Runner.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Runner.move(1)
})
let Runner: game.LedSprite = null
game.startCountdown(20000)
let Chaser = game.createSprite(0, 5)
Runner = game.createSprite(2, 0)
Runner.turn(Direction.Right, 90)
Runner.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
	
})
