class OhvalhuGondi {
  constructor(game) {
    this.boardMade = false;
    this.game = game;
    this.numbOfVahlu = this.game.ohvalhuGondiSize;
    this.boliAmount = this.game.boliAmount;
    this.boliVahluSize = {
      w: 64,
      h: 64,
    };
    this.fihaaraSize = {
      w: 64,
      h: 128,
    };
    this.size = {
      w: 2 * this.fihaaraSize.w + this.numbOfVahlu * this.boliVahluSize,
      h: this.fihaaraSize.h,
    };
    this.pos = {
      x: this.game.size.w / 2,
      y: this.game.size.h / 2 + this.fihaaraSize.h,
    };
    this.valhuthah = [];
  }

  init() {
    let pos = {
      x: 64,
      y: this.game.size.h / 2 - this.fihaaraSize.h / 2,
    };
    for (let i = 0; i < this.numbOfVahlu * 2 + 2; i++) {
      if (i === 0) {
        this.valhuthah.push(new Fihaara(pos, "p1", i, this));
      } else if (i > 0 && i <= this.numbOfVahlu) {
        let newPos = {
          x: pos.x + this.boliVahluSize.w,
          y: this.game.size.h / 2,
        };
        pos = newPos;
        console.log(pos);
        this.valhuthah.push(new BoliValhu(pos, "p1", i, this));
      } else if (i === this.numbOfVahlu + 1) {
        this.valhuthah.push(new Fihaara({ x: 0, y: 0 }, "p2", i, this));
      } else if (i > this.numbOfVahlu + 1 && i <= this.numbOfVahlu * 2 + 1) {
        this.valhuthah.push(new BoliValhu({ x: 0, y: 0 }, "p2", i, this));
      }
      this.boardMade = true;
    }
  }

  update(dt) {}

  draw(ctx) {
    if (!this.boardMade) this.init();
    this.valhuthah.forEach((valhu) => {
      valhu.draw(ctx);
    });
  }
}

class Valhu {
  constructor(pos, player, index, gondi) {
    this.pos = pos;
    this.gondi = gondi;
    this.player = player;
    this.index = index;
    this.bolithah = [];
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.pos.x, this.pos.y);
  }
}

class BoliValhu extends Valhu {
  constructor(pos, player, index, gondi) {
    super(pos, player, index, gondi);
    this.type = "boliValhu";
    this.initAmount = this.gondi.boliAmount;
    this.boliAmount = this.initAmount;
    this.image = document.getElementById("bolivalhu");
  }
}

class Fihaara extends Valhu {
  constructor(pos, player, index, gondi) {
    super(pos, player, index, gondi);
    this.type = "fihaara";
    this.initAmount = 0;
    this.boliAmount = this.initAmount;
    this.image =
      this.player === "p2"
        ? document.getElementById("fihaaraR")
        : document.getElementById("fihaaraL");
  }
}

class Boli {
  constructor(pos, valhu) {
    this.pos = pos;
    this.valhu = valhu;
  }
}
