const colors = ["RGBA(70, 130, 180)", 'RGBA(255, 0, 0)', 'RGBA(255,255,255)', 'RGBA(255,165,0)']
const Player = {
  color(player){
    return colors[player.id % colors.length]
  }
}
