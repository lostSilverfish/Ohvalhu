class Game {
  constructor(gameSize, ohvalhuGondiSize, gameMode, boliAmount) {
    this.size = gameSize;
    this.gameMode = gameMode;
    this.ohvalhuGondiSize = ohvalhuGondiSize;
    this.boliAmount = boliAmount;
    this.ohvalhuGondi = new OhvalhuGondi(this);
  }

  update(dt) {}

  draw(ctx) {
    this.ohvalhuGondi.draw(ctx);
  }
}
