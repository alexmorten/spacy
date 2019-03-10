const colors = ["RGBA(70, 130, 180, 0.5)", 'RGBA(255, 0, 0, 0.5)', 'RGBA(255,255,255,0.5)', 'RGBA(255,165,0,0.5)']
const Player = {
  color(player){
    return colors[player.id % colors.length]
  }
}
