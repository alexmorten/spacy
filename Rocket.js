import { Player } from "./Player";

export const Rocket = function(context){
  return function(state, player){
    context.fillStyle = Player.color(player)
    context.strokeStyle = Player.color(player)
    context.beginPath()
    context.arc(state.pos.x, state.pos.y, 2, 0,Math.PI*2)
    context.fill()
    context.stroke()
  }
}
