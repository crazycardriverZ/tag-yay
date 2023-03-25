function Game (speed: number) {
    Chaser.turn(Direction.Right, randint(0, 90))
    Chaser.move(1)
    Chaser.ifOnEdgeBounce()
    if (Chaser.isTouchingEdge()) {
        game.setScore(game.score() + 1)
    }
    if (Chaser.isTouching(Runner)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        game.gameOver()
    }
    basic.pause(speed)
}
input.onButtonPressed(Button.A, function () {
    Runner.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Runner.move(1)
})
let Runner: game.LedSprite = null
let Chaser: game.LedSprite = null
game.startCountdown(30000)
Chaser = game.createSprite(0, 5)
Runner = game.createSprite(2, 0)
Runner.turn(Direction.Right, 90)
Runner.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
	
})
