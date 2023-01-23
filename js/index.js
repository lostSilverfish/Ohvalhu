window.onload = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let prevTime = 0;
  let boardSize = 4;
  let gameMode = "normal";
  let boliAmount = 4;

  const game = new Game(
    { w: canvas.width, h: canvas.height },
    boardSize,
    gameMode,
    boliAmount
  );

  const animate = (timeStamp) => {
    let dt = timeStamp - prevTime;
    prevTime = timeStamp;

    game.update(dt);
    game.draw(ctx);

    window.requestAnimationFrame(animate);
  };

  animate(0);
};
