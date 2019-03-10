const Mothership = function (context) {
  return function(state, player){
    if(state.health > 0){
      context.fillStyle = Player.color(player)
    }else {
      context.fillStyle = "RGB(0,0,0)"
    }
    context.strokeStyle = Player.color(player)
    // ship
    context.fillRect(state.pos.x - 10, state.pos.y -10, 20, 20)

    // mining
    if (state.mining_target) {
      context.beginPath()
      context.moveTo(state.pos.x, state.pos.y)
      context.lineTo(state.mining_target.pos.x, state.mining_target.pos.y)
      context.stroke()
    }
  }
}
