export default (function () {
  // global variables that will be loaded/initialized later
  let canvas, ctx, gravity, ball, friction

  // runs once at the beginning
  // loads any data and kickstarts the loop
  function init () {
    // load data here
    canvas = document.getElementById('gameCanvas')
    ctx = canvas.getContext('2d')

    // set the canvas size
    canvas.width = 800
    canvas.height = 800

    // world/scene settings
    gravity = 0.25
    friction = 0.98

    // begin update loop
    window.requestAnimationFrame(update)
  }

  // draws stuff to the screen
  // allows us to separate calculations and drawing
  function draw () {
    // clear the canvas and redraw everything
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  // the main piece of the loop
  // runs everything
  function update () {
    // queue the next update
    window.requestAnimationFrame(update)

    // logic goes here

    // draw after logic/calculations
    draw()
  }

  // start our code once the page has loaded
  document.addEventListener('DOMContentLoaded', init)
})
