class Game {
  constructor(gameSize, ohvalhuGondiSize) {
    this.size = gameSize;
    this.ohvalhuGondi = new OhvalhuGondi(ohvalhuGondiSize, this);
  }

  update(dt) {}

  draw(ctx) {}
}
