import { Action, MoveAction, Empty, Credentials, Vector } from "./build/protocol_pb"
import { SpacyServerClient } from "./build/protocol_grpc_web_pb"
import { Asteroid } from "./Asteroid.js"
import { Miner } from "./Miner"
import { Ship } from "./Ship"
import { Mothership } from "./Mothership"
import { Rocket } from "./Rocket"

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

const client = new SpacyServerClient("http://localhost:8080", null, null)
console.log(client)
client.getCredentials(new Empty(), null, (err,credentials)=>{
  if (err){
    console.log(err)
    return
  }

  const id = credentials.getId();
  console.log(id);

  const updateStream = client.getUpdates(credentials, null)
  updateStream.on('data', function(state){
    const decoder = new TextDecoder("utf-8");
    window.requestAnimationFrame(function () {
      ctx.fillStyle = "rgba(0,0,0)"
      ctx.fillRect(0,0,width, height)
      const data = JSON.parse(decoder.decode(state.getJsonState()));
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
      });
      data.asteroids.forEach((a) => {
        asteroid(a)
      })
    })
  })

  updateStream.on('end', function(){
    console.log("aww, ended")
  })

  updateStream.on('error', function(error){
    console.log(error)
  })




  document.addEventListener( 'click', function (e) {
    const pos = { x: e.pageX, y: e.pageY };
    circle1
      .tune(pos)
      .replay();

    circle2
      .tune(pos)
      .replay();

    const posVec = new Vector();
    posVec.setX(e.pageX)
    posVec.setY(e.pageY)
    const moveAction = new MoveAction();
    moveAction.setPos(posVec)
    const action = new Action();
    action.setCredentials(credentials);
    action.setMove(moveAction)
    client.act(action, null, (err, response)=>{
      console.log(err, response);
    })
  });
})
