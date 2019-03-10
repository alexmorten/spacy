import { Player } from "./Player";

export const Ship = function (context){
    return function(state, player){
        context.fillStyle = Player.color(player)
        context.fillRect(state.pos.x - 5, state.pos.y -5 , 10,10)
    }
}
