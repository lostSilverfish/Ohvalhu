class OhvalhuGondi {
  constructor(numbOfVahlu, game) {
    this.boardMade = false;
    this.numbOfVahlu = numbOfVahlu;
    this.game = game;
    this.boliVahluSize = {
      w: 64,
      h: 64,
    };
    this.fihaaraSize = {
      w: 64,
      h: 128,
    };
    this.size = {
      w: 2 * this.fihaaraSize.w + numbOfVahlu * this.boliVahluSize,
      h: this.fihaaraSize.h,
    };
    this.pos = {
      x: game.size.w / 2,
      y: game.size.h / 2 + this.fihaaraSize.h,
    };
    this.valhuthah = [];
  }

  init() {
    if (!this.boardMade) {
      for (let i = 0; i < this.numbOfVahlu * 2 + 2; i++) {
        if (i === 0) {
          this.valhuthah.push(new Fihaara(pos, "p2", this));
        } else if (i > 0 && i === this.numbOfVahlu) {
          this.valhuthah.push(new BoliValhu(pos, "p1", this));
        } else if (i === this.numbOfVahlu + 1) {
          this.valhuthah.push(new Fihaara(pos, "p1", this));
        } else if (i > this.numbOfVahlu + 1 && i <= this.numbOfVahlu * 2 - 1) {
          this.valhuthah.push(new BoliValhu(pos, "p2", this));
        }
      }
    }
  }

  update(dt) {}

  draw() {}
}

class Valhu {
  constructor(pos, player, gondi) {
    this.pos = pos;
    this.gondi = gondi;
    this.player = player;
  }
}

class BoliValhu extends Valhu {
  constructor(pos, gondi) {
    super(pos, gondi);
    this.type = "boliValhu";
    this.initAmount = this.gondi.numbOfVahlu;
    this.boliAmount = this.initAmount;
  }
}

class Fihaara extends Valhu {
  constructor(pos, gondi) {
    super(pos, gondi);
    this.type = "fihaara";
    this.initAmount = 0;
    this.boliAmount = this.initAmount;
  }
}
