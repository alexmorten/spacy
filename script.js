const canvas = document.getElementById('canvas')
const width = 1200.0;
const height = 900;
canvas.height = height;
canvas.width = width;
const ctx = canvas.getContext('2d')

const mothership =  Mothership(ctx)
const asteroid = Asteroid(ctx)
const ship = Ship(ctx)
const miner = Miner(ctx)
const rocket = Rocket(ctx)
const explosion = Explosion(ctx)
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:4000');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});
// Listen for messages
socket.addEventListener('message', function (event) {
  ctx.fillStyle = "rgba(0,0,0,0.1)"
  ctx.fillRect(0,0,width, height)

  const data = JSON.parse(event.data)
  console.log(data)
  data.players.forEach((player) => {
    mothership(player.mothership, player)

    player.ships.forEach((s) => {
      ship(s, player)
    });

    player.miners.forEach((m) => {
      miner(m, player)
    });

    player.rockets.forEach((r) => {
      rocket(r, player)
    })
    player.explosions.forEach((e) => {
      explosion(e, player)
    })
  });
  data.asteroids.forEach((a) => {
    asteroid(a)
  })

});

const OPTS = {
    fill:           'none',
    radius:         7.5,
    strokeWidth:    { 15 : 0 },
    scale:          { 0: 1 },
    angle:          { 'rand(-35, -70)': 0 },
    duration:       500,
    left: 0,        top: 0,
    easing: 'cubic.out'
  };

  const circle1 = new mojs.Shape({
    ...OPTS,
    stroke:         'white',
  });

  const circle2 = new mojs.Shape({
    ...OPTS,
    radius:         { 0 : 4.5 },
    strokeWidth:    { 9: 0 },
    stroke:         'white',
    delay:          'rand(75, 150)'
  });

  document.addEventListener( 'click', function (e) {
    const pos = { x: e.pageX, y: e.pageY  }
     circle1
      .tune(pos)
      .replay();

    circle2
      .tune(pos)
      .replay();
    socket.send(JSON.stringify({type:"move", data: pos}))
  });
