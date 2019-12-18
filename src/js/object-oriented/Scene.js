import Ball from './Ball'

// some default values
const defaultConfig = {
  width: 500,
  height: 500,
  gravity: 0.25,
  friction: 0.98
}

// classes are functions that create objects
// and we're exporting it to use in another file
export class Scene {
  // constructor function is the equivalent of
  // the init function
  constructor (canvasId = 'gameCanvas', config) {
    // get the canvas and context
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext('2d')

    // world/physics settings
    // merge default config & any passed in config
    this.config = {
      ...defaultConfig,
      ...config
    }

    // set the canvas size
    this.canvas.width = this.config.width
    this.canvas.height = this.config.height

    this.createBalls()

    // begin update loop
    // use an arrow function so that we can use `this` properly
    document.addEventListener('DOMContentLoaded', () => this.update())
  }

  createBalls () {
    const { config } = this
    const colors = ['purple', 'red', 'blue', 'lime', 'magenta']
    // build an array of ball objects
    const balls = []

    for (let i = 0; i < 20; i++) {
      balls.push(
        new Ball(
          // random X Y position
          Math.random() * config.width, Math.random() * config.height,
          // scene config
          {
            // default width, height, friction
            ...config,
            // random positive or negative gravity
            gravity: config.gravity * (Math.floor(Math.random() * 2) || -1)
          },
          // ball properties
          {
            // extra bouncey
            bounce: 0.90,
            // size 10-30
            radius: Math.random() * 20 + 10,
            // random color
            color: colors[Math.floor(Math.random() * colors.length)]
          }
        )
      )
    }

    this.balls = balls
  }

  update () {
    // destructure the scene's variables
    const { ctx, config, balls } = this

    // queue the next update
    window.requestAnimationFrame(() => this.update())

    // clear the canvas
    ctx.clearRect(0, 0, config.width, config.height)

    // update objects
    balls.forEach(ball => ball.update())

    // draw objects
    balls.forEach(ball => ball.draw(ctx))
  }
}

export default Scene
