import * as alt from "alt-server";

console.log(" ============================================================================ ");
console.log("                                 Native Tuner                                 ");
console.log("                 © 2022 - 2023 ExXTreMe - All Rights Reserved.                ");
console.log(" ============================================================================ ");

alt.onClient('getModsCount', (player, type, nblivery, nbroofs) => {

    let vehicle = player.vehicle

    try {
        vehicle.modKit = 1;
    } catch (error) {
        vehicle.modKit = 0;
        console.log(error);
    }
    
    let modscount = {}
    modscount.spoiler=    vehicle.getModsCount(0);
    modscount.fbumper=    vehicle.getModsCount(1);
    modscount.rbumper=    vehicle.getModsCount(2);
    modscount.sskirt=     vehicle.getModsCount(3);
    modscount.exhaust=    vehicle.getModsCount(4);
    modscount.frame=      vehicle.getModsCount(5);
    modscount.grille=     vehicle.getModsCount(6);
    modscount.hood=       vehicle.getModsCount(7);
    modscount.lwing=      vehicle.getModsCount(8);
    modscount.rwing=      vehicle.getModsCount(9);
    modscount.roof=       vehicle.getModsCount(10);

    modscount.engine=     vehicle.getModsCount(11);
    modscount.brakes=     vehicle.getModsCount(12);
    modscount.trans=      vehicle.getModsCount(13);
    modscount.horns=      vehicle.getModsCount(14);
    modscount.suspension= vehicle.getModsCount(15);
    modscount.armor=      vehicle.getModsCount(16);
    modscount.turbo=      vehicle.getModsCount(18);

    modscount.xenon=      vehicle.getModsCount(22);
    modscount.fwheels=    vehicle.getModsCount(23);
    modscount.bwheels=    vehicle.getModsCount(24);
    modscount.plateh=     vehicle.getModsCount(25);
    modscount.platev=     vehicle.getModsCount(26);
    modscount.trimdesign= vehicle.getModsCount(27);
    modscount.ornaments=  vehicle.getModsCount(28);
    modscount.dialdesign= vehicle.getModsCount(30);
    modscount.doorint=    vehicle.getModsCount(31);
    modscount.seats=      vehicle.getModsCount(32);
    modscount.steeringw=  vehicle.getModsCount(33);
    modscount.shiftlever= vehicle.getModsCount(34);
    modscount.plaques=    vehicle.getModsCount(35);
    modscount.hydraulics= vehicle.getModsCount(38);
    modscount.engineb=    vehicle.getModsCount(39);
    modscount.airfilter=  vehicle.getModsCount(40);
    modscount.strutbar=   vehicle.getModsCount(41);
    modscount.archcover=  vehicle.getModsCount(42);
    modscount.antenna=    vehicle.getModsCount(43);
    modscount.exteriorp=  vehicle.getModsCount(44);
    modscount.tank=       vehicle.getModsCount(45);
    modscount.door=       vehicle.getModsCount(46);
    modscount.wroh=       vehicle.getModsCount(47);
    modscount.stickers=   vehicle.getModsCount(48);
    modscount.plate=      vehicle.getModsCount(53);
    modscount.windowtint= vehicle.getModsCount(55); 

    modscount.tint= 5;

    let currentmods = {}
    currentmods.spoiler=    vehicle.getMod(0);
    currentmods.fbumper=    vehicle.getMod(1);
    currentmods.rbumper=    vehicle.getMod(2);
    currentmods.sskirt=     vehicle.getMod(3);
    currentmods.exhaust=    vehicle.getMod(4);
    currentmods.frame=      vehicle.getMod(5);
    currentmods.grille=     vehicle.getMod(6);
    currentmods.hood=       vehicle.getMod(7);
    currentmods.lwing=      vehicle.getMod(8);
    currentmods.rwing=      vehicle.getMod(9);
    currentmods.roof=       vehicle.getMod(10);

    currentmods.engine=     vehicle.getMod(11);
    currentmods.brakes=     vehicle.getMod(12);
    currentmods.trans=      vehicle.getMod(13);
    currentmods.horns=      vehicle.getMod(14);
    currentmods.suspension= vehicle.getMod(15);
    currentmods.armor=      vehicle.getMod(16);
    currentmods.turbo=      vehicle.getMod(18);

    currentmods.xenon=      vehicle.getMod(22);
    currentmods.fwheels=    vehicle.getMod(23);
    currentmods.bwheels=    vehicle.getMod(24);
    currentmods.plateh=     vehicle.getMod(25);
    currentmods.platev=     vehicle.getMod(26);
    currentmods.trimdesign= vehicle.getMod(27);
    currentmods.ornaments=  vehicle.getMod(28);
    currentmods.dialdesign= vehicle.getMod(30);
    currentmods.doorint=    vehicle.getMod(31);
    currentmods.seats=      vehicle.getMod(32);
    currentmods.steeringw=  vehicle.getMod(33);
    currentmods.shiftlever= vehicle.getMod(34);
    currentmods.plaques=    vehicle.getMod(35);
    currentmods.hydraulics= vehicle.getMod(38);
    currentmods.engineb=    vehicle.getMod(39);
    currentmods.airfilter=  vehicle.getMod(40);
    currentmods.strutbar=   vehicle.getMod(41);
    currentmods.archcover=  vehicle.getMod(42);
    currentmods.antenna=    vehicle.getMod(43);
    currentmods.exteriorp=  vehicle.getMod(44);
    currentmods.tank=       vehicle.getMod(45);
    currentmods.door=       vehicle.getMod(46);
    currentmods.wroh=       vehicle.getMod(47);
    currentmods.stickers=   vehicle.getMod(48);
    currentmods.plate=      vehicle.getMod(53);
    currentmods.windowtint= vehicle.getMod(55);

    alt.emitClient(player, 'getModsCountAnswer', type, nblivery, nbroofs, modscount, currentmods);
});

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

alt.onClient('vehNeon', (player, neonConfig) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;

    if(neonConfig == 0){
        vehicle.neon = { left: false, right: false, front: false, back: false }
    }
    if(neonConfig == 2){
        vehicle.neon = { left: true, right: true, front: false, back: false }
    }
    if(neonConfig == 4){
        vehicle.neon = { left: true, right: true, front: true, back: true }
    }
    
    console.log(player.name+" changed the Neons of a Veh to "+neonConfig);
});

alt.onClient('neoncolor', (player, rgb) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;

    vehicle.neonColor = {r: rgb.r, g: rgb.g, b: rgb.b};
});

alt.onClient('changeVehMod', (player, type, index) => {

    let vehicle = player.vehicle ? player.vehicle : null;
    
    vehicle.modKit = 1;
    vehicle.setMod(type, index);
});

alt.onClient('changeWheels', (player, type, index) => {

    let vehicle = player.vehicle ? player.vehicle : null;
    
    vehicle.modKit = 1;
    vehicle.setWheels(type, index);
});

alt.onClient('wheelColor', (player, color) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;
    vehicle.wheelColor = color;
});

alt.onClient('changePlate', (player, id) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;
    vehicle.numberPlateIndex = id;
});

alt.onClient('pearlColor', (player, index) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;
    vehicle.pearlColor = index;
});

alt.onClient('setExtra', (player, index) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;

    if(vehicle.getExtra(index)){
        vehicle.setExtra(index, false);
        console.log(index);
        console.log(vehicle.getExtra(index));
    } else if(!vehicle.getExtra(index)){
        vehicle.setExtra(index, true);
        console.log(index);
        console.log(vehicle.getExtra(index));
    }
});

alt.onClient("getExtraCount", (player) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    alt.emitClient(player, 'sendExtraCount', vehicle);
});

alt.onClient("setWindow", (player, id) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;
    vehicle.windowTint = id;
});

alt.onClient('interiorColor', (player, color) => {
    let vehicle = player.vehicle ? player.vehicle : null;
    vehicle.modKit = 1;
    vehicle.interiorColor = color;
});
