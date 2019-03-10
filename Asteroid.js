const Asteroid = function(context){
  return function(state){
    context.fillStyle = "grey"
    context.beginPath()
    context.arc(state.pos.x, state.pos.y, state.capacity*2, 0, Math.PI*2)
    context.fill()
    context.stroke()
  }
}
