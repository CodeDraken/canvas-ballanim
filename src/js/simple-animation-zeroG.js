export default (function () {
  // global variables that will be loaded/initialized later
  let canvas, ctx, gravity, ball, friction

  // runs once at the beginning
  // loads any data and kickstarts the loop
  function init () {
    // load data here

    // our canvas variables
    canvas = document.getElementById('gameCanvas')
    ctx = canvas.getContext('2d')

    // set the canvas size
    canvas.width = 800
    canvas.height = 800

    // world/scene settings
    gravity = 9.8

    // starting objects
    ball = {
      bounce: 0.5,
      radius: 30,
      x: canvas.width / 2,
      y: canvas.height / 2,
      velX: 0,
      velY: Math.random() * 5 + 5
    }

    // begin update loop
    window.requestAnimationFrame(update)
  }

  // draws stuff to the screen
  // allows us to separate calculations and drawing
  function draw () {
    // clear the canvas and redraw everything
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw the ball (only object in this scene)
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.arc(
      ball.x, ball.y,
      ball.radius,
      0, Math.PI * 2
    )
    ctx.fill()
  }

  // the main piece of the loop
  // runs everything
  function update () {
    // queue the next update
    window.requestAnimationFrame(update)

    // logic goes here

    // if out of bounds on left or right side
    if (ball.x + ball.radius >= canvas.width || ball.x - ball.radius <= 0) {
      // reverse x direction
      ball.velX = -ball.bounce * ball.velX
    }

    // if out of bounds on top or bottom
    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
      // reverse y
      ball.velY = -ball.bounce * ball.velY
    }

    // update ball position
    ball.x += ball.velX
    ball.y += ball.velY

    // draw after logic/calculations
    draw()
  }

  // start our code once the page has loaded
  document.addEventListener('DOMContentLoaded', init)
})
