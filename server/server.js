import * as alt from "alt-server";
import * as chat from "chat";

alt.onClient('pc:red', (player) => {
    player.vehicle.primaryColor = 1;
});