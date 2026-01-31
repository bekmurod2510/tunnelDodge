export class Spells {
  constructor(canvasWidth, ImageSrc, speed) {
    this.width = 50;
    this.height = 50;
    this.x = Math.random() * (canvasWidth - this.width);
    this.y = -50; //starting position (above the canvas)
    this.speed = speed; // different speeds
    this.image = ImageSrc;
  }

  update() {
    this.y += this.speed;
  }

  draw(ctx) {
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  isOffScreen(canvasHeight) {
    return this.y > canvasHeight;
  }
}
