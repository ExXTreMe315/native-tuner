import * as alt from "alt-server";
import * as chat from 'chat';

alt.onClient('primaryColor', (player, id) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.primaryColor = id;
    console.log(player.name+" changed the Primary Color of Veh to "+id);
});

alt.onClient('secondaryColor', (player, id) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.secondaryColor = id;
    console.log(player.name+" changed the Secondary Color of Veh to "+id);
});

alt.onClient('lightsColor', (player, id) => {

    let vehicle = player.vehicle ? player.vehicle : null;
    
    vehicle.modKit = 1;
    vehicle.setMod(22, id);
    vehicle.headlightColor = id;
    console.log(player.name+" changed the Lights Color of Veh to "+id);
});


/////////////////////TestBereich

chat.registerCmd("test", (player, args) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;
    let modType = JSON.parse(args[0]);
    alt.emitClient(null, 'getNumVehicleMods', vehicle, modType);
    alt.onClient('NumVehicleMods', (player, modTypeCount) => {
        console.log(`@${player.name}: Alt:V found ${modTypeCount} Vehicle mods in the Natives`);
    });
});

chat.registerCmd("test2", (player, args) => {
    let vehicle = player.vehicle ? player.vehicle : null;

    let id1 = JSON.parse(args[0]);

    let id2 = JSON.parse(args[1]);

    
    if(!isNaN(id1) && !isNaN(id2)){
        console.log("ids are numbers");
        vehicle.modKit = 1;
        vehicle.setMod(id1, id2);
        //vehicle.headlightColor = id;
    } else {
        console.log("ids arent numbers");
    }
});