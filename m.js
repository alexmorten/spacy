const Miner = function (context){
  return function(state, player){
    context.fillStyle = Player.color(player)
    context.fillRect(state.pos.x - 3, state.pos.y -3 , 6,6)

      // mining
    if (state.mining_target) {
      context.beginPath()
      context.moveTo(state.pos.x, state.pos.y)
      context.lineTo(state.mining_target.pos.x, state.mining_target.pos.y)
      context.stroke()
    }
  }
}
