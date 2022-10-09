import * as alt from "alt-client";
import * as native from 'natives';
import * as NativeUI from './includes/NativeUI/NativeUi';
//Vorweg
const metallicColors = [
    {
        id: 0,
        description: 'Metallic Black',
        hex: '#0d1116',
        rgb: '13, 17, 22'
    },
    {
        id: 1,
        description: 'Metallic Graphite Black',
        hex: '#1c1d21',
        rgb: '28, 29, 33'
    },
    {
        id: 2,
        description: 'Metallic Black Steal',
        hex: '#32383d',
        rgb: '50, 56, 61'
    },
    {
        id: 3,
        description: 'Metallic Dark Silver',
        hex: '#454b4f',
        rgb: '69, 75, 79'
    },
    {
        id: 4,
        description: 'Metallic Silver',
        hex: '#999da0',
        rgb: '153, 157, 160'
    },
    {
        id: 5,
        description: 'Metallic Blue Silver',
        hex: '#c2c4c6',
        rgb: '194, 196, 198'
    },
    {
        id: 6,
        description: 'Metallic Steel Gray',
        hex: '#979a97',
        rgb: '151, 154, 151'
    },
    {
        id: 7,
        description: 'Metallic Shadow Silver',
        hex: '#637380',
        rgb: '99, 115, 128'
    },
    {
        id: 8,
        description: 'Metallic Stone Silver',
        hex: '#63625c',
        rgb: '99, 98, 92'
    },
    {
        id: 9,
        description: 'Metallic Midnight Silver',
        hex: '#3c3f47',
        rgb: '60, 63, 71'
    },
    {
        id: 10,
        description: 'Metallic Gun Metal',
        hex: '#444e54',
        rgb: '68, 78, 84'
    },
    {
        id: 11,
        description: 'Metallic Anthracite Grey',
        hex: '#1d2129',
        rgb: '29, 33, 41'
    },
    {
        id: 27,
        description: 'Metallic Red',
        hex: '#c00e1a',
        rgb: '192, 14, 26'
    },
    {
        id: 28,
        description: 'Metallic Torino Red',
        hex: '#da1918',
        rgb: '218, 25, 24'
    },
    {
        id: 29,
        description: 'Metallic Formula Red',
        hex: '#b6111b',
        rgb: '182, 17, 27'
    },
    {
        id: 30,
        description: 'Metallic Blaze Red',
        hex: '#a51e23',
        rgb: '165, 30, 35'
    },
    {
        id: 31,
        description: 'Metallic Graceful Red',
        hex: '#7b1a22',
        rgb: '123, 26, 34'
    },
    {
        id: 32,
        description: 'Metallic Garnet Red',
        hex: '#8e1b1f',
        rgb: '142, 27, 31'
    },
    {
        id: 33,
        description: 'Metallic Desert Red',
        hex: '#6f1818',
        rgb: '111, 24, 24'
    },
    {
        id: 34,
        description: 'Metallic Cabernet Red',
        hex: '#49111d',
        rgb: '73, 17, 29'
    },
    {
        id: 35,
        description: 'Metallic Candy Red',
        hex: '#b60f25',
        rgb: '182, 15, 37'
    },
    {
        id: 36,
        description: 'Metallic Sunrise Orange',
        hex: '#d44a17',
        rgb: '212, 74, 23'
    },
    {
        id: 37,
        description: 'Metallic Classic Gold',
        hex: '#c2944f',
        rgb: '194, 148, 79'
    },
    {
        id: 38,
        description: 'Metallic Orange',
        hex: '#f78616',
        rgb: '247, 134, 22'
    },
    {
        id: 49,
        description: 'Metallic Dark Green',
        hex: '#132428',
        rgb: '19, 36, 40'
    },
    {
        id: 50,
        description: 'Metallic Racing Green',
        hex: '#122e2b',
        rgb: '18, 46, 43'
    },
    {
        id: 51,
        description: 'Metallic Sea Green',
        hex: '#12383c',
        rgb: '18, 56, 60'
    },
    {
        id: 52,
        description: 'Metallic Olive Green',
        hex: '#31423f',
        rgb: '49, 66, 63'
    },
    {
        id: 53,
        description: 'Metallic Green',
        hex: '#155c2d',
        rgb: '21, 92, 45'
    },
    {
        id: 54,
        description: 'Metallic Gasoline Blue Green',
        hex: '#1b6770',
        rgb: '27, 103, 112'
    },
    {
        id: 61,
        description: 'Metallic Midnight Blue',
        hex: '#222e46',
        rgb: '34, 46, 70'
    },
    {
        id: 62,
        description: 'Metallic Dark Blue',
        hex: '#233155',
        rgb: '35, 49, 85'
    },
    {
        id: 63,
        description: 'Metallic Saxony Blue',
        hex: '#304c7e',
        rgb: '48, 76, 126'
    },
    {
        id: 64,
        description: 'Metallic Blue',
        hex: '#47578f',
        rgb: '71, 87, 143'
    },
    {
        id: 65,
        description: 'Metallic Mariner Blue',
        hex: '#637ba7',
        rgb: '99, 123, 167'
    },
    {
        id: 66,
        description: 'Metallic Harbor Blue',
        hex: '#394762',
        rgb: '57, 71, 98'
    },
    {
        id: 67,
        description: 'Metallic Diamond Blue',
        hex: '#d6e7f1',
        rgb: '214, 231, 241'
    },
    {
        id: 68,
        description: 'Metallic Surf Blue',
        hex: '#76afbe',
        rgb: '118, 175, 190'
    },
    {
        id: 69,
        description: 'Metallic Nautical Blue',
        hex: '#345e72',
        rgb: '52, 94, 114'
    },
    {
        id: 70,
        description: 'Metallic Bright Blue',
        hex: '#0b9cf1',
        rgb: '11, 156, 241'
    },
    {
        id: 71,
        description: 'Metallic Purple Blue',
        hex: '#2f2d52',
        rgb: '47, 45, 82'
    },
    {
        id: 72,
        description: 'Metallic Spinnaker Blue',
        hex: '#282c4d',
        rgb: '40, 44, 77'
    },
    {
        id: 73,
        description: 'Metallic Ultra Blue',
        hex: '#2354a1',
        rgb: '35, 84, 161'
    },
    {
        id: 74,
        description: 'Metallic Bright Blue',
        hex: '#6ea3c6',
        rgb: '110, 163, 198'
    },
    {
        id: 88,
        description: 'Metallic Taxi Yellow',
        hex: '#ffcf20',
        rgb: '255, 207, 32'
    },
    {
        id: 89,
        description: 'Metallic Race Yellow',
        hex: '#fbe212',
        rgb: '251, 226, 18'
    },
    {
        id: 90,
        description: 'Metallic Bronze',
        hex: '#916532',
        rgb: '145, 101, 50'
    },
    {
        id: 91,
        description: 'Metallic Yellow Bird',
        hex: '#e0e13d',
        rgb: '224, 225, 61'
    },
    {
        id: 92,
        description: 'Metallic Lime',
        hex: '#98d223',
        rgb: '152, 210, 35'
    },
    {
        id: 93,
        description: 'Metallic Champagne',
        hex: '#9b8c78',
        rgb: '155, 140, 120'
    },
    {
        id: 94,
        description: 'Metallic Pueblo Beige',
        hex: '#503218',
        rgb: '80, 50, 24'
    },
    {
        id: 95,
        description: 'Metallic Dark Ivory',
        hex: '#473f2b',
        rgb: '71, 63, 43'
    },
    {
        id: 96,
        description: 'Metallic Choco Brown',
        hex: '#221b19',
        rgb: '34, 27, 25'
    },
    {
        id: 97,
        description: 'Metallic Golden Brown',
        hex: '#653f23',
        rgb: '101, 63, 35'
    },
    {
        id: 98,
        description: 'Metallic Light Brown',
        hex: '#775c3e',
        rgb: '119, 92, 62'
    },
    {
        id: 99,
        description: 'Metallic Straw Beige',
        hex: '#ac9975',
        rgb: '172, 153, 117'
    },
    {
        id: 100,
        description: 'Metallic Moss Brown',
        hex: '#6c6b4b',
        rgb: '108, 107, 75'
    },
    {
        id: 101,
        description: 'Metallic Biston Brown',
        hex: '#402e2b',
        rgb: '64, 46, 43'
    },
    {
        id: 102,
        description: 'Metallic Beechwood',
        hex: '#a4965f',
        rgb: '164, 150, 95'
    },
    {
        id: 103,
        description: 'Metallic Dark Beechwood',
        hex: '#46231a',
        rgb: '70, 35, 26'
    },
    {
        id: 104,
        description: 'Metallic Choco Orange',
        hex: '#752b19',
        rgb: '117, 43, 25'
    },
    {
        id: 105,
        description: 'Metallic Beach Sand',
        hex: '#bfae7b',
        rgb: '191, 174, 123'
    },
    {
        id: 106,
        description: 'Metallic Sun Bleeched Sand',
        hex: '#dfd5b2',
        rgb: '223, 213, 178'
    },
    {
        id: 107,
        description: 'Metallic Cream',
        hex: '#f7edd5',
        rgb: '247, 237, 213'
    },
    {
        id: 111,
        description: 'Metallic White',
        hex: '#fffff6',
        rgb: '255, 255, 246'
    },
    {
        id: 112,
        description: 'Metallic Frost White',
        hex: '#eaeaea',
        rgb: '234, 234, 234'
    },
    {
        id: 125,
        description: 'Metallic Securicor Green',
        hex: '#83c566',
        rgb: '131, 197, 102'
    },
    {
        id: 137,
        description: 'Metallic Vermillion Pink',
        hex: '#df5891',
        rgb: '223, 88, 145'
    },
    {
        id: 142,
        description: 'Metallic Black Purple',
        hex: '#0c0d18',
        rgb: '12, 13, 24'
    },
    {
        id: 143,
        description: 'Metallic Black Red',
        hex: '#0e0d14',
        rgb: '14, 13, 20'
    },
    {
        id: 145,
        description: 'Metallic Purple',
        hex: '#621276',
        rgb: '98, 18, 118'
    },
    {
        id: 150,
        description: 'Metallic Lava Red',
        hex: '#bc1917',
        rgb: '188, 25, 23'
    }
];

const mattColors = [
    {
        id: 12,
        description: 'Matte Black',
        hex: '#13181f',
        rgb: '19, 24, 31'
    },
    {
        id: 13,
        description: 'Matte Gray',
        hex: '#26282a',
        rgb: '38, 40, 42'
    },
    {
        id: 14,
        description: 'Matte Light Grey',
        hex: '#515554',
        rgb: '81, 85, 84'
    },
    {
        id: 39,
        description: 'Matte Red',
        hex: '#cf1f21',
        rgb: '207, 31, 33'
    },
    {
        id: 40,
        description: 'Matte Dark Red',
        hex: '#732021',
        rgb: '115, 32, 33'
    },
    {
        id: 41,
        description: 'Matte Orange',
        hex: '#f27d20',
        rgb: '242, 125, 32'
    },
    {
        id: 42,
        description: 'Matte Yellow',
        hex: '#ffc91f',
        rgb: '255, 201, 31'
    },
    {
        id: 55,
        description: 'Matte Lime Green',
        hex: '#66b81f',
        rgb: '102, 184, 31'
    },
    {
        id: 82,
        description: 'Matte Dark Blue',
        hex: '#1f2852',
        rgb: '31, 40, 82'
    },
    {
        id: 83,
        description: 'Matte Blue',
        hex: '#253aa7',
        rgb: '37, 58, 167'
    },
    {
        id: 84,
        description: 'Matte Midnight Blue',
        hex: '#1c3551',
        rgb: '28, 53, 81'
    },
    {
        id: 128,
        description: 'Matte Green',
        hex: '#4e6443',
        rgb: '78, 100, 67'
    },
    {
        id: 129,
        description: 'Matte Brown',
        hex: '#bcac8f',
        rgb: '188, 172, 143'
    },
    {
        id: 131,
        description: 'Matte White',
        hex: '#fcf9f1',
        rgb: '252, 249, 241'
    },
    {
        id: 148,
        description: 'Matte Purple',
        hex: '#6b1f7b',
        rgb: '107, 31, 123'
    },
    {
        id: 149,
        description: 'Matte Dark Purple',
        hex: '#1e1d22',
        rgb: '30, 29, 34'
    },
    {
        id: 151,
        description: 'Matte Forest Green',
        hex: '#2d362a',
        rgb: '45, 54, 42'
    },
    {
        id: 152,
        description: 'Matte Olive Drab',
        hex: '#696748',
        rgb: '105, 103, 72'
    },
    {
        id: 153,
        description: 'Matte Desert Brown',
        hex: '#7a6c55',
        rgb: '122, 108, 85'
    },
    {
        id: 154,
        description: 'Matte Desert Tan',
        hex: '#c3b492',
        rgb: '195, 180, 146'
    },
    {
        id: 155,
        description: 'Matte Foilage Green',
        hex: '#5a6352',
        rgb: '90, 99, 82'
    }
];

const utilColors = [
    {
        id: 15,
        description: 'Util Black',
        hex: '#151921',
        rgb: '21, 25, 33'
    },
    {
        id: 16,
        description: 'Util Black Poly',
        hex: '#1e2429',
        rgb: '30, 36, 41'
    },
    {
        id: 17,
        description: 'Util Dark Silver',
        hex: '#333a3c',
        rgb: '51, 58, 60'
    },
    {
        id: 18,
        description: 'Util Silver',
        hex: '#8c9095',
        rgb: '140, 144, 149'
    },
    {
        id: 19,
        description: 'Util Gun Metal',
        hex: '#39434d',
        rgb: '57, 67, 77'
    },
    {
        id: 20,
        description: 'Util Shadow Silver',
        hex: '#506272',
        rgb: '80, 98, 114'
    },
    {
        id: 43,
        description: 'Util Red',
        hex: '#9c1016',
        rgb: '156, 16, 22'
    },
    {
        id: 44,
        description: 'Util Bright Red',
        hex: '#de0f18',
        rgb: '222, 15, 24'
    },
    {
        id: 45,
        description: 'Util Garnet Red',
        hex: '#8f1e17',
        rgb: '143, 30, 23'
    },
    {
        id: 56,
        description: 'Util Dark Green',
        hex: '#22383e',
        rgb: '34, 56, 62'
    },
    {
        id: 57,
        description: 'Util Green',
        hex: '#1d5a3f',
        rgb: '29, 90, 63'
    },
    {
        id: 75,
        description: 'Util Dark Blue',
        hex: '#112552',
        rgb: '17, 37, 82'
    },
    {
        id: 76,
        description: 'Util Midnight Blue',
        hex: '#1b203e',
        rgb: '27, 32, 62'
    },
    {
        id: 77,
        description: 'Util Blue',
        hex: '#275190',
        rgb: '39, 81, 144'
    },
    {
        id: 78,
        description: 'Util Sea Foam Blue',
        hex: '#608592',
        rgb: '96, 133, 146'
    },
    {
        id: 79,
        description: 'Util Lightning Blue',
        hex: '#2446a8',
        rgb: '36, 70, 168'
    },
    {
        id: 80,
        description: 'Util Maui Blue Poly',
        hex: '#4271e1',
        rgb: '66, 113, 225'
    },
    {
        id: 81,
        description: 'Util Bright Blue',
        hex: '#3b39e0',
        rgb: '59, 57, 224'
    },
    {
        id: 108,
        description: 'Util Brown',
        hex: '#3a2a1b',
        rgb: '58, 42, 27'
    },
    {
        id: 109,
        description: 'Util Medium Brown',
        hex: '#785f33',
        rgb: '120, 95, 51'
    },
    {
        id: 110,
        description: 'Util Light Brown',
        hex: '#b5a079',
        rgb: '181, 160, 121'
    },
    {
        id: 122,
        description: 'Util Off White',
        hex: '#dfddd0',
        rgb: '223, 221, 208'
    }
];

const wornColors = [
    {
        id: 21,
        description: 'Worn Black',
        hex: '#1e232f',
        rgb: '30, 35, 47'
    },
    {
        id: 22,
        description: 'Worn Graphite',
        hex: '#363a3f',
        rgb: '54, 58, 63'
    },
    {
        id: 23,
        description: 'Worn Silver Grey',
        hex: '#a0a199',
        rgb: '160, 161, 153'
    },
    {
        id: 24,
        description: 'Worn Silver',
        hex: '#d3d3d3',
        rgb: '211, 211, 211'
    },
    {
        id: 25,
        description: 'Worn Blue Silver',
        hex: '#b7bfca',
        rgb: '183, 191, 202'
    },
    {
        id: 26,
        description: 'Worn Shadow Silver',
        hex: '#778794',
        rgb: '119, 135, 148'
    },
    {
        id: 46,
        description: 'Worn Red',
        hex: '#a94744',
        rgb: '169, 71, 68'
    },
    {
        id: 47,
        description: 'Worn Golden Red',
        hex: '#b16c51',
        rgb: '177, 108, 81'
    },
    {
        id: 48,
        description: 'Worn Dark Red',
        hex: '#371c25',
        rgb: '55, 28, 37'
    },
    {
        id: 58,
        description: 'Worn Dark Green',
        hex: '#2d423f',
        rgb: '45, 66, 63'
    },
    {
        id: 59,
        description: 'Worn Green',
        hex: '#45594b',
        rgb: '69, 89, 75'
    },
    {
        id: 60,
        description: 'Worn Sea Wash',
        hex: '#65867f',
        rgb: '101, 134, 127'
    },
    {
        id: 85,
        description: 'Worn Dark Blue',
        hex: '#4c5f81',
        rgb: '76, 95, 129'
    },
    {
        id: 86,
        description: 'Worn Blue',
        hex: '#58688e',
        rgb: '88, 104, 142'
    },
    {
        id: 87,
        description: 'Worn Light Blue',
        hex: '#74b5d8',
        rgb: '116, 181, 216'
    },
    {
        id: 113,
        description: 'Worn Honey Beige',
        hex: '#b0ab94',
        rgb: '176, 171, 148'
    },
    {
        id: 114,
        description: 'Worn Brown',
        hex: '#453831',
        rgb: '69, 56, 49'
    },
    {
        id: 115,
        description: 'Worn Dark Brown',
        hex: '#2a282b',
        rgb: '42, 40, 43'
    },
    {
        id: 116,
        description: 'Worn Straw Beige',
        hex: '#726c57',
        rgb: '114, 108, 87'
    },
    {
        id: 121,
        description: 'Worn Off White',
        hex: '#eae6de',
        rgb: '234, 230, 222'
    },
    {
        id: 123,
        description: 'Worn Orange',
        hex: '#f2ad2e',
        rgb: '242, 173, 46'
    },
    {
        id: 124,
        description: 'Worn Light Orange',
        hex: '#f9a458',
        rgb: '249, 164, 88'
    },
    {
        id: 126,
        description: 'Worn Taxi Yellow',
        hex: '#f1cc40',
        rgb: '241, 204, 64'
    },
    {
        id: 130,
        description: 'Worn Orange',
        hex: '#f8b658',
        rgb: '248, 182, 88'
    },
    {
        id: 132,
        description: 'Worn White',
        hex: '#fffffb',
        rgb: '255, 255, 251'
    },
    {
        id: 133,
        description: 'Worn Olive Army Green',
        hex: '#81844c',
        rgb: '129, 132, 76'
    }
];

const sonstigeColors = [
    {
        id: 117,
        description: 'Brushed Steel',
        hex: '#6a747c',
        rgb: '106, 116, 124'
    },
    {
        id: 118,
        description: 'Brushed Black Steel',
        hex: '#354158',
        rgb: '53, 65, 88'
    },
    {
        id: 119,
        description: 'Brushed Aluminium',
        hex: '#9ba0a8',
        rgb: '155, 160, 168'
    },
    {
        id: 120,
        description: 'Chrome',
        hex: '#5870a1',
        rgb: '88, 112, 161'
    },
    {
        id: 127,
        description: 'Police Car Blue',
        hex: '#4cc3da',
        rgb: '76, 195, 218'
    },
    {
        id: 134,
        description: 'Pure White',
        hex: '#ffffff',
        rgb: '255, 255, 255'
    },
    {
        id: 135,
        description: 'Hot Pink',
        hex: '#f21f99',
        rgb: '242, 31, 153'
    },
    {
        id: 136,
        description: 'Salmon Pink',
        hex: '#fdd6cd',
        rgb: '253, 214, 205'
    },
    {
        id: 138,
        description: 'Orange',
        hex: '#f6ae20',
        rgb: '246, 174, 32'
    },
    {
        id: 139,
        description: 'Green',
        hex: '#b0ee6e',
        rgb: '176, 238, 110'
    },
    {
        id: 140,
        description: 'Blue',
        hex: '#08e9fa',
        rgb: '8, 233, 250'
    },
    {
        id: 144,
        description: 'Hunter Green',
        hex: '#9f9e8a',
        rgb: '159, 158, 138'
    },
    {
        id: 147,
        description: 'Modshop Black',
        hex: '#11141a',
        rgb: '17, 20, 26'
    },
    {
        id: 156,
        description: 'Default Alloy',
        hex: '#81827f',
        rgb: '129, 130, 127'
    },
    {
        id: 157,
        description: 'Epsilon Blue',
        hex: '#afd6e4',
        rgb: '175, 214, 228'
    },
    {
        id: 158,
        description: 'Pure Gold',
        hex: '#7a6440',
        rgb: '122, 100, 64'
    },
    {
        id: 159,
        description: 'Brushed Gold',
        hex: '#7f6a48',
        rgb: '127, 106, 72'
    }
];

const partList = [
    "Spoiler",//0
    "Front Stoßstange",//1
    "Heck Stoßstange",//2
    "Seitenverkleidung",//3
    "Auspuff",//4
    "Überrollbügel",//5
    "Kühlergrill",//6
    "Motorhaube",//7
    "Kotflügel Links",//8
    "Kotflügel Rechts",//9
    "Dach",//10
    
    "Motor",//11
    "Bremsen",//12
    "Getriebe",//13
    "Hupe",//14
    "Federung",//15
    "Panzerung",//16
    "",//17
    "Turbo",//18
    
    "",//19
    "",//20
    "",//21

    "Xenon",//22 ()
    "Vorderrad",//23 -
    "Hinterrad",//24 -
    "Kennzeichenhalterung",//25 -
    "Kennzeichen",//26
    "Trimm Design",//27
    "Ornamente",//28
    "",//29
    "Tacho",//30
    "Tür Innen",//31
    "Sitze",//32
    "Lenkrad",//33
    "Schalthebel",//34
    "Plaketten",//35
    "",//36 Rear Shelf
    "",//37 Trunk
    "Hydraulik",//38
    "Motorblock",//39
    "Luftfilter",//40
    "Strebe",//41
    "Bogenabdeckung",//42
    "Antenne",//43
    "Dachaufbau",//44
    "Tank",//45
    "Tür",//46 -
    "Wroh",//47
    "Design"//48 ()

]

const wheelList = [
    {
        name: "Sport",
        category: "Kategorie0",
        count: 50,
        veh: "normal"
    },
    {
        name: "Tuner",
        category: "Kategorie1",
        count: 36,
        veh: "normal"
    },
    {
        name: "Lowrider",
        category: "Kategorie2",
        count: 30,
        veh: "normal"
    },
    {
        name: "Luxus",
        category: "Kategorie3",
        count: 38,
        veh: "normal"
    },
    {
        name: "Offroad",
        category: "Kategorie4",
        count: 35,
        veh: "normal"
    },
    {
        name: "Cat5",
        category: "Kategorie5",
        count: 48,
        veh: "normal"
    },
    {
        name: "Motorrad",
        category: "Kategorie6",
        count: 144,
        veh: "bike"
    },
    {
        name: "High - End",
        category: "Kategorie7",
        count: 40,
        veh: "normal"
    },
    {
        name: "Bennys Tuner",
        category: "Kategorie8",
        count: 217,
        veh: "normal"
    },
    {
        name: "Bennys Original",
        category: "Kategorie9",
        count: 217,
        veh: "normal"
    },
    {
        name: "Formel1",
        category: "Kategorie10",
        count: 140,
        veh: "openwheel"
    },
    {
        name: "Custom",
        category: "Kategorie11",
        count: 210,
        veh: "normal"
    },
    {
        name: "Stance Andreas",
        category: "Kategorie12",
        count: 210,
        veh: "normal"
    }
]

const neonColorList = [
    {
        id: -1,
        name: "Xenon"
    },{
        id: 0,
        name: "White",
        rgb: {r: 222, g: 222, b: 255}
    },
    {
        id: 1,
        name: "Blue",
        rgb: {r: 2, g: 21, b: 255}
    },
    {
        id: 2,
        name: "Electric Blue",
        rgb: {r: 3, g: 83, b: 255}
    },
    {
        id: 3,
        name: "Mint Green",
        rgb: {r: 0, g: 255, b: 140}
    },
    {
        id: 4,
        name: "Lime Green",
        rgb: {r: 94, g: 255, b: 1}
    },
    {
        id: 5,
        name: "Yellow",
        rgb: {r: 255, g: 255, b: 0}
    },
    {
        id: 6,
        name: "Golden Shower",
        rgb: {r: 255, g: 150, b: 5}
    },
    {
        id: 7,
        name: "Orange",
        rgb: {r: 222, g: 62, b: 0}
    },
    {
        id: 8,
        name: "Red",
        rgb: {r: 255, g: 1, b: 1}
    },
    {
        id: 9,
        name: "Pony Pink",
        rgb: {r: 255, g: 50, b: 100}
    },
    {
        id: 10,
        name: "Hot Pink",
        rgb: {r: 255, g: 5, b: 90}
    },
    {
        id: 11,
        name: "Purple",
        rgb: {r: 35, g: 1, b: 255}
    },
    {
        id: 12,
        name: "Blacklight",
        rgb: {r: 15, g: 3, b: 255}
    }
]

const plateCollection = [
    'Blau auf Weiß',
    'Gelb auf Schwarz',
    'Gelb auf Blau',
    'San Andreas',
    'SA Exempt',
    'Yankton'
]

//Hauptmenu
const bennys = new NativeUI.Menu("", "Bennys Original Motorwork's", new NativeUI.Point(1450, 50));
bennys.GetTitle().Scale = 1.2;
bennys.GetTitle().DropShadow = true;

//Tunable Categories
let paintJob = (new NativeUI.UIMenuItem("> Lackierung", "Lackierung ändern"));
bennys.AddItem(paintJob);
let lights = (new NativeUI.UIMenuItem("> Lichter", "Lichter ändern"));
bennys.AddItem(lights);
let parts = (new NativeUI.UIMenuItem("> Karosserie", "Karosserie ändern"));
bennys.AddItem(parts);
let performance = (new NativeUI.UIMenuItem("> Performance", "Performance ändern"));
bennys.AddItem(performance);
let wheels = (new NativeUI.UIMenuItem("> Reifen", "Reifen ändern"));
bennys.AddItem(wheels);
let sonstiges = (new NativeUI.UIMenuItem("> Sonstiges", "Sonstiges ändern"));
bennys.AddItem(sonstiges);

    //Paintmenu
    const paintMenu = new NativeUI.Menu("", "Lackierung ändern", new NativeUI.Point(1450, 50));
    paintMenu.GetTitle().Scale = 1.2;
    paintMenu.GetTitle().DropShadow = true;
    bennys.AddSubMenu(paintMenu, paintJob);

    let primaryColor = (new NativeUI.UIMenuItem('> Primärfarbe', 'Primärfarbe'));
    paintMenu.AddItem(primaryColor);
    let secondaryColor = (new NativeUI.UIMenuItem('> Sekundärfarbe', 'Sekundärfarbe'));
    paintMenu.AddItem(secondaryColor);
    let pearlColor = (new NativeUI.UIMenuItem('> Perleffekt', 'Perleffekt'));
    paintMenu.AddItem(pearlColor);
    let livery = (new NativeUI.UIMenuItem('> Livery', 'Livery'));
    paintMenu.AddItem(livery);
    let wheelColor = (new NativeUI.UIMenuItem('> Reifenfarbe', 'Reifenfarbe'));
    paintMenu.AddItem(wheelColor);
    let interiorColor = (new NativeUI.UIMenuItem('> Innenraum Farbe', 'Innenraum Farbe anpassen'));
    paintMenu.AddItem(interiorColor);
        
        //Primary Color Menu
        const primaryColorMenu = new NativeUI.Menu("", "Primärfarbe ändern", new NativeUI.Point(1450, 50));
        primaryColorMenu.GetTitle().Scale = 1.2;
        primaryColorMenu.GetTitle().DropShadow = true;
        paintMenu.AddSubMenu(primaryColorMenu, primaryColor);

            let primaryMetallicColor = (new NativeUI.UIMenuItem('> Metallic Farben', 'Primär Metallic Farbe anpassen'));
            primaryColorMenu.AddItem(primaryMetallicColor);
            let primaryMattColor = (new NativeUI.UIMenuItem('> Matte Farben', 'Primär Matte Farbe anpassen'));
            primaryColorMenu.AddItem(primaryMattColor);
            let primaryUtilColor = (new NativeUI.UIMenuItem('> Util Farben', 'Primär Util Farbe anpassen'));
            primaryColorMenu.AddItem(primaryUtilColor);
            let primaryWornColor = (new NativeUI.UIMenuItem('> Worn Farben', 'Primär Worn Farbe anpassen'));
            primaryColorMenu.AddItem(primaryWornColor);
            let primarySonstigeColor = (new NativeUI.UIMenuItem('> Sonstige Farben', 'Primär Sonstige Farbe anpassen'));
            primaryColorMenu.AddItem(primarySonstigeColor);

                //Primary Metallic Menu
                const primaryMetallicColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                primaryMetallicColorMenu.GetTitle().Scale = 1.2;
                primaryMetallicColorMenu.GetTitle().DropShadow = true;
                primaryColorMenu.AddSubMenu(primaryMetallicColorMenu, primaryMetallicColor);

                primaryMetallicColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = metallicColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('primaryColor', colorIndex);            
                });

                //Primary Matt Menu
                const primaryMattColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                primaryMattColorMenu.GetTitle().Scale = 1.2;
                primaryMattColorMenu.GetTitle().DropShadow = true;
                primaryColorMenu.AddSubMenu(primaryMattColorMenu, primaryMattColor);

                primaryMattColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = mattColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('primaryColor', colorIndex);            
                });

                //Primary Util Menu
                const primaryUtilColorMenu = new NativeUI.Menu("", "Util Primärfarbe ändern", new NativeUI.Point(1450, 50));
                primaryUtilColorMenu.GetTitle().Scale = 1.2;
                primaryUtilColorMenu.GetTitle().DropShadow = true;
                primaryColorMenu.AddSubMenu(primaryUtilColorMenu, primaryUtilColor);

                primaryUtilColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = utilColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('primaryColor', colorIndex);            
                });

                //Primary Worn Menu
                const primaryWornColorMenu = new NativeUI.Menu("", "Worn Primärfarbe ändern", new NativeUI.Point(1450, 50));
                primaryWornColorMenu.GetTitle().Scale = 1.2;
                primaryWornColorMenu.GetTitle().DropShadow = true;
                primaryColorMenu.AddSubMenu(primaryWornColorMenu, primaryWornColor);

                primaryWornColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = wornColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('primaryColor', colorIndex);            
                });

                //Primary Sonstige Menu
                const primarySonstigeColorMenu = new NativeUI.Menu("", "Sonstige Primärfarbe ändern", new NativeUI.Point(1450, 50));
                primarySonstigeColorMenu.GetTitle().Scale = 1.2;
                primarySonstigeColorMenu.GetTitle().DropShadow = true;
                primaryColorMenu.AddSubMenu(primarySonstigeColorMenu, primarySonstigeColor);

                primarySonstigeColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = sonstigeColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('primaryColor', colorIndex);            
                });
            
        //Secondary Color Menu
        const secondaryColorMenu = new NativeUI.Menu("", "Sekundärfarbe ändern", new NativeUI.Point(1450, 50));
        secondaryColorMenu.GetTitle().Scale = 1.2;
        secondaryColorMenu.GetTitle().DropShadow = true;
        paintMenu.AddSubMenu(secondaryColorMenu, secondaryColor);

            let secondaryMetallicColor = (new NativeUI.UIMenuItem('> Metallic Farben', 'Primär Metallic Farbe anpassen'));
            secondaryColorMenu.AddItem(secondaryMetallicColor);
            let secondaryMattColor = (new NativeUI.UIMenuItem('> Matte Farben', 'Primär Matte Farbe anpassen'));
            secondaryColorMenu.AddItem(secondaryMattColor);
            let secondaryUtilColor = (new NativeUI.UIMenuItem('> Util Farben', 'Primär Util Farbe anpassen'));
            secondaryColorMenu.AddItem(secondaryUtilColor);
            let secondaryWornColor = (new NativeUI.UIMenuItem('> Worn Farben', 'Primär Worn Farbe anpassen'));
            secondaryColorMenu.AddItem(secondaryWornColor);
            let secondarySonstigeColor = (new NativeUI.UIMenuItem('> Sonstige Farben', 'Primär Sonstige Farbe anpassen'));
            secondaryColorMenu.AddItem(secondarySonstigeColor);

                //secondary Metallic Menu
                const secondaryMetallicColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                secondaryMetallicColorMenu.GetTitle().Scale = 1.2;
                secondaryMetallicColorMenu.GetTitle().DropShadow = true;
                secondaryColorMenu.AddSubMenu(secondaryMetallicColorMenu, secondaryMetallicColor);

                secondaryMetallicColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = metallicColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('secondaryColor', colorIndex);            
                });

                //secondary Matt Menu
                const secondaryMattColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                secondaryMattColorMenu.GetTitle().Scale = 1.2;
                secondaryMattColorMenu.GetTitle().DropShadow = true;
                secondaryColorMenu.AddSubMenu(secondaryMattColorMenu, secondaryMattColor);

                secondaryMattColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = mattColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('secondaryColor', colorIndex);            
                });

                //secondary Util Menu
                const secondaryUtilColorMenu = new NativeUI.Menu("", "Util Primärfarbe ändern", new NativeUI.Point(1450, 50));
                secondaryUtilColorMenu.GetTitle().Scale = 1.2;
                secondaryUtilColorMenu.GetTitle().DropShadow = true;
                secondaryColorMenu.AddSubMenu(secondaryUtilColorMenu, secondaryUtilColor);

                secondaryUtilColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = utilColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('secondaryColor', colorIndex);            
                });

                //secondary Worn Menu
                const secondaryWornColorMenu = new NativeUI.Menu("", "Worn Primärfarbe ändern", new NativeUI.Point(1450, 50));
                secondaryWornColorMenu.GetTitle().Scale = 1.2;
                secondaryWornColorMenu.GetTitle().DropShadow = true;
                secondaryColorMenu.AddSubMenu(secondaryWornColorMenu, secondaryWornColor);

                secondaryWornColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = wornColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('secondaryColor', colorIndex);            
                });

                //secondary Sonstige Menu
                const secondarySonstigeColorMenu = new NativeUI.Menu("", "Sonstige Primärfarbe ändern", new NativeUI.Point(1450, 50));
                secondarySonstigeColorMenu.GetTitle().Scale = 1.2;
                secondarySonstigeColorMenu.GetTitle().DropShadow = true;
                secondaryColorMenu.AddSubMenu(secondarySonstigeColorMenu, secondarySonstigeColor);

                secondarySonstigeColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = sonstigeColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('secondaryColor', colorIndex);            
                });

        //Pearl Color Menu
        const pearlColorMenu = new NativeUI.Menu("", "Perleffekt ändern", new NativeUI.Point(1450, 50));
        pearlColorMenu.GetTitle().Scale = 1.2;
        pearlColorMenu.GetTitle().DropShadow = true;
        paintMenu.AddSubMenu(pearlColorMenu, pearlColor);
            
            let pearlMetallicColor = (new NativeUI.UIMenuItem('> Metallic Farben', 'Primär Metallic Farbe anpassen'));
            pearlColorMenu.AddItem(pearlMetallicColor);
            let pearlMattColor = (new NativeUI.UIMenuItem('> Matte Farben', 'Primär Matte Farbe anpassen'));
            pearlColorMenu.AddItem(pearlMattColor);
            let pearlUtilColor = (new NativeUI.UIMenuItem('> Util Farben', 'Primär Util Farbe anpassen'));
            pearlColorMenu.AddItem(pearlUtilColor);
            let pearlWornColor = (new NativeUI.UIMenuItem('> Worn Farben', 'Primär Worn Farbe anpassen'));
            pearlColorMenu.AddItem(pearlWornColor);
            let pearlSonstigeColor = (new NativeUI.UIMenuItem('> Sonstige Farben', 'Primär Sonstige Farbe anpassen'));
            pearlColorMenu.AddItem(pearlSonstigeColor);

                //pearl Metallic Menu
                const pearlMetallicColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                pearlMetallicColorMenu.GetTitle().Scale = 1.2;
                pearlMetallicColorMenu.GetTitle().DropShadow = true;
                pearlColorMenu.AddSubMenu(pearlMetallicColorMenu, pearlMetallicColor);

                pearlMetallicColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = metallicColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('pearlColor', colorIndex);            
                });

                //pearl Matt Menu
                const pearlMattColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                pearlMattColorMenu.GetTitle().Scale = 1.2;
                pearlMattColorMenu.GetTitle().DropShadow = true;
                pearlColorMenu.AddSubMenu(pearlMattColorMenu, pearlMattColor);

                pearlMattColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = mattColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('pearlColor', colorIndex);            
                });

                //pearl Util Menu
                const pearlUtilColorMenu = new NativeUI.Menu("", "Util Primärfarbe ändern", new NativeUI.Point(1450, 50));
                pearlUtilColorMenu.GetTitle().Scale = 1.2;
                pearlUtilColorMenu.GetTitle().DropShadow = true;
                pearlColorMenu.AddSubMenu(pearlUtilColorMenu, pearlUtilColor);

                pearlUtilColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = utilColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('pearlColor', colorIndex);            
                });

                //pearl Worn Menu
                const pearlWornColorMenu = new NativeUI.Menu("", "Worn Primärfarbe ändern", new NativeUI.Point(1450, 50));
                pearlWornColorMenu.GetTitle().Scale = 1.2;
                pearlWornColorMenu.GetTitle().DropShadow = true;
                pearlColorMenu.AddSubMenu(pearlWornColorMenu, pearlWornColor);

                pearlWornColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = wornColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('pearlColor', colorIndex);            
                });

                //pearl Sonstige Menu
                const pearlSonstigeColorMenu = new NativeUI.Menu("", "Sonstige Primärfarbe ändern", new NativeUI.Point(1450, 50));
                pearlSonstigeColorMenu.GetTitle().Scale = 1.2;
                pearlSonstigeColorMenu.GetTitle().DropShadow = true;
                pearlColorMenu.AddSubMenu(pearlSonstigeColorMenu, pearlSonstigeColor);

                pearlSonstigeColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = sonstigeColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('pearlColor', colorIndex);            
                });
                    
        //Livery Menu
        const liveryMenu = new NativeUI.Menu("", "Livery ändern", new NativeUI.Point(1450, 50));
        liveryMenu.GetTitle().Scale = 1.2;
        liveryMenu.GetTitle().DropShadow = true;
        paintMenu.AddSubMenu(liveryMenu, livery);

        //Wheel Colors
        const wheelColorMenu = new NativeUI.Menu("", "Reifenfarbe ändern", new NativeUI.Point(1450, 50));
        wheelColorMenu.GetTitle().Scale = 1.2;
        wheelColorMenu.GetTitle().DropShadow = true;
        paintMenu.AddSubMenu(wheelColorMenu, wheelColor);
            
            let wheelMetallicColor = (new NativeUI.UIMenuItem('> Metallic Farben', 'Primär Metallic Farbe anpassen'));
            wheelColorMenu.AddItem(wheelMetallicColor);
            let wheelMattColor = (new NativeUI.UIMenuItem('> Matte Farben', 'Primär Matte Farbe anpassen'));
            wheelColorMenu.AddItem(wheelMattColor);
            let wheelUtilColor = (new NativeUI.UIMenuItem('> Util Farben', 'Primär Util Farbe anpassen'));
            wheelColorMenu.AddItem(wheelUtilColor);
            let wheelWornColor = (new NativeUI.UIMenuItem('> Worn Farben', 'Primär Worn Farbe anpassen'));
            wheelColorMenu.AddItem(wheelWornColor);
            let wheelSonstigeColor = (new NativeUI.UIMenuItem('> Sonstige Farben', 'Primär Sonstige Farbe anpassen'));
            wheelColorMenu.AddItem(wheelSonstigeColor);

                //wheel Metallic Menu
                const wheelMetallicColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                wheelMetallicColorMenu.GetTitle().Scale = 1.2;
                wheelMetallicColorMenu.GetTitle().DropShadow = true;
                wheelColorMenu.AddSubMenu(wheelMetallicColorMenu, wheelMetallicColor);

                wheelMetallicColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = metallicColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('wheelColor', colorIndex);            
                });

                //wheel Matt Menu
                const wheelMattColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                wheelMattColorMenu.GetTitle().Scale = 1.2;
                wheelMattColorMenu.GetTitle().DropShadow = true;
                wheelColorMenu.AddSubMenu(wheelMattColorMenu, wheelMattColor);

                wheelMattColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = mattColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('wheelColor', colorIndex);            
                });

                //wheel Util Menu
                const wheelUtilColorMenu = new NativeUI.Menu("", "Util Primärfarbe ändern", new NativeUI.Point(1450, 50));
                wheelUtilColorMenu.GetTitle().Scale = 1.2;
                wheelUtilColorMenu.GetTitle().DropShadow = true;
                wheelColorMenu.AddSubMenu(wheelUtilColorMenu, wheelUtilColor);

                wheelUtilColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = utilColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('wheelColor', colorIndex);            
                });

                //wheel Worn Menu
                const wheelWornColorMenu = new NativeUI.Menu("", "Worn Primärfarbe ändern", new NativeUI.Point(1450, 50));
                wheelWornColorMenu.GetTitle().Scale = 1.2;
                wheelWornColorMenu.GetTitle().DropShadow = true;
                wheelColorMenu.AddSubMenu(wheelWornColorMenu, wheelWornColor);

                wheelWornColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = wornColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('wheelColor', colorIndex);            
                });

                //wheel Sonstige Menu
                const wheelSonstigeColorMenu = new NativeUI.Menu("", "Sonstige Primärfarbe ändern", new NativeUI.Point(1450, 50));
                wheelSonstigeColorMenu.GetTitle().Scale = 1.2;
                wheelSonstigeColorMenu.GetTitle().DropShadow = true;
                wheelColorMenu.AddSubMenu(wheelSonstigeColorMenu, wheelSonstigeColor);

                wheelSonstigeColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = sonstigeColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('wheelColor', colorIndex);            
                });

        //Interior Colors
        const interiorColorMenu = new NativeUI.Menu("", "Reifenfarbe ändern", new NativeUI.Point(1450, 50));
        interiorColorMenu.GetTitle().Scale = 1.2;
        interiorColorMenu.GetTitle().DropShadow = true;
        paintMenu.AddSubMenu(interiorColorMenu, interiorColor);

            
            let interiorMetallicColor = (new NativeUI.UIMenuItem('> Metallic Farben', 'Primär Metallic Farbe anpassen'));
            interiorColorMenu.AddItem(interiorMetallicColor);
            let interiorMattColor = (new NativeUI.UIMenuItem('> Matte Farben', 'Primär Matte Farbe anpassen'));
            interiorColorMenu.AddItem(interiorMattColor);
            let interiorUtilColor = (new NativeUI.UIMenuItem('> Util Farben', 'Primär Util Farbe anpassen'));
            interiorColorMenu.AddItem(interiorUtilColor);
            let interiorWornColor = (new NativeUI.UIMenuItem('> Worn Farben', 'Primär Worn Farbe anpassen'));
            interiorColorMenu.AddItem(interiorWornColor);
            let interiorSonstigeColor = (new NativeUI.UIMenuItem('> Sonstige Farben', 'Primär Sonstige Farbe anpassen'));
            interiorColorMenu.AddItem(interiorSonstigeColor);

                //interior Metallic Menu
                const interiorMetallicColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                interiorMetallicColorMenu.GetTitle().Scale = 1.2;
                interiorMetallicColorMenu.GetTitle().DropShadow = true;
                interiorColorMenu.AddSubMenu(interiorMetallicColorMenu, interiorMetallicColor);

                interiorMetallicColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = metallicColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('interiorColor', colorIndex);            
                });

                //interior Matt Menu
                const interiorMattColorMenu = new NativeUI.Menu("", "Matte Primärfarbe ändern", new NativeUI.Point(1450, 50));
                interiorMattColorMenu.GetTitle().Scale = 1.2;
                interiorMattColorMenu.GetTitle().DropShadow = true;
                interiorColorMenu.AddSubMenu(interiorMattColorMenu, interiorMattColor);

                interiorMattColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = mattColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('interiorColor', colorIndex);            
                });

                //interior Util Menu
                const interiorUtilColorMenu = new NativeUI.Menu("", "Util Primärfarbe ändern", new NativeUI.Point(1450, 50));
                interiorUtilColorMenu.GetTitle().Scale = 1.2;
                interiorUtilColorMenu.GetTitle().DropShadow = true;
                interiorColorMenu.AddSubMenu(interiorUtilColorMenu, interiorUtilColor);

                interiorUtilColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = utilColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('interiorColor', colorIndex);            
                });

                //interior Worn Menu
                const interiorWornColorMenu = new NativeUI.Menu("", "Worn Primärfarbe ändern", new NativeUI.Point(1450, 50));
                interiorWornColorMenu.GetTitle().Scale = 1.2;
                interiorWornColorMenu.GetTitle().DropShadow = true;
                interiorColorMenu.AddSubMenu(interiorWornColorMenu, interiorWornColor);

                interiorWornColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = wornColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('interiorColor', colorIndex);            
                });

                //interior Sonstige Menu
                const interiorSonstigeColorMenu = new NativeUI.Menu("", "Sonstige Primärfarbe ändern", new NativeUI.Point(1450, 50));
                interiorSonstigeColorMenu.GetTitle().Scale = 1.2;
                interiorSonstigeColorMenu.GetTitle().DropShadow = true;
                interiorColorMenu.AddSubMenu(interiorSonstigeColorMenu, interiorSonstigeColor);

                interiorSonstigeColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    let colorIndex = sonstigeColors[selectedItemIndex].id;
                    alt.log(colorIndex);
                    alt.emitServer('interiorColor', colorIndex);            
                });

    //Create Color Items
    metallicColors.forEach(createMetallicItemColor);                       
        
    function createMetallicItemColor(item, index, arr) {
        primaryMetallicColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        secondaryMetallicColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        pearlMetallicColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Perleffekt "+item.description+" Färben")));
        wheelMetallicColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
        interiorMetallicColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
    }

    mattColors.forEach(createMattItemColor);                       
        
    function createMattItemColor(item, index, arr) {
        primaryMattColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        secondaryMattColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        pearlMattColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Perleffekt "+item.description+" Färben")));
        wheelMattColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
        interiorMattColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
    }

    utilColors.forEach(createUtilItemColor);                       
        
    function createUtilItemColor(item, index, arr) {
        primaryUtilColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        secondaryUtilColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        pearlUtilColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Perleffekt "+item.description+" Färben")));
        wheelUtilColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
        interiorUtilColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
    }

    wornColors.forEach(createWornItemColor);                       
        
    function createWornItemColor(item, index, arr) {
        primaryWornColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        secondaryWornColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        pearlWornColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Perleffekt "+item.description+" Färben")));
        wheelWornColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
        interiorWornColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
    }

    sonstigeColors.forEach(createSonstigeItemColor);                       
        
    function createSonstigeItemColor(item, index, arr) {
        primarySonstigeColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        secondarySonstigeColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Fahrzeug "+item.description+" Färben")));
        pearlSonstigeColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Perleffekt "+item.description+" Färben")));
        wheelSonstigeColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
        interiorSonstigeColorMenu.AddItem((new NativeUI.UIMenuItem(item.description, "Reifen "+item.description+" Färben")));
    }

    //Parts Menu
    const partsMenu = new NativeUI.Menu("", "Karosserie ändern", new NativeUI.Point(1450, 50));
    partsMenu.GetTitle().Scale = 1.2;
    partsMenu.GetTitle().DropShadow = true;
    bennys.AddSubMenu(partsMenu, parts);

        
        //Performance Menu
        const performanceMenu = new NativeUI.Menu("", "Performance ändern", new NativeUI.Point(1450, 50));
        performanceMenu.GetTitle().Scale = 1.2;
        performanceMenu.GetTitle().DropShadow = true;
        bennys.AddSubMenu(performanceMenu, performance);

        alt.onServer('getModsCountAnswer', (type, nblivery, nbroofs, modscount, currentmods) => {
            partsMenu.Clear();
            performanceMenu.Clear();
            let modtype;

            //Spoiler
            let spoiler_n = 0;
            let spoiler_x = [];
            modtype = 0;
            
            while (spoiler_n <= modscount.spoiler) {
                spoiler_x.push(spoiler_n);
                spoiler_n++
            }

            if(spoiler_x <= 0){
                var spoilers = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var spoilers = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(spoiler_x),
                    currentmods.spoiler
                ));
            }

            //fbumper
            let fbumper_n = 0;
            var fbumper_x = [];
            modtype = 1;

            while (fbumper_n <= modscount.fbumper) {
                fbumper_x.push(fbumper_n);
                fbumper_n++
            }

            if(fbumper_x <= 0){
                var fbumpers = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var fbumpers = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(fbumper_x),
                    currentmods.fbumper
                ));
            }

            //rbumper
            let rbumper_n = 0;
            var rbumper_x = [];
            modtype = 2;

            while (rbumper_n <= modscount.rbumper) {
                rbumper_x.push(rbumper_n);
                rbumper_n++
            }

            if(rbumper_x <= 0){
                var rbumpers = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var rbumpers = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(rbumper_x),
                    currentmods.rbumper
                ));
            }

            //sskirt
            let sskirt_n = 0;
            var sskirt_x = [];
            modtype = 3;

            while (sskirt_n <= modscount.sskirt) {
                sskirt_x.push(sskirt_n);
                sskirt_n++
            }

            if(sskirt_x <= 0){
                var sskirts = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var sskirts = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(sskirt_x),
                    currentmods.sskirt
                ));
            }

            //exhaust
            let exhaust_n = 0;
            var exhaust_x = [];
            modtype = 4;

            while (exhaust_n <= modscount.exhaust) {
                exhaust_x.push(exhaust_n);
                exhaust_n++
            }

            if(exhaust_x <= 0){
                var exhaust = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var exhaust = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(exhaust_x),
                    currentmods.exhaust
                ));
            }

            //frame
            let frame_n = 0;
            var frame_x = [];
            modtype = 5;

            while (frame_n <= modscount.frame) {
                frame_x.push(frame_n);
                frame_n++
            }

            if(frame_x <= 0){
                var frame = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var frame = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(frame_x),
                    currentmods.frame
                ));
            }
            
            //grille
            let grille_n = 0;
            var grille_x = [];
            modtype = 6;

            while (grille_n <= modscount.grille) {
                grille_x.push(grille_n);
                grille_n++
            }

            if(grille_x <= 0){
                var grille = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var grille = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(grille_x),
                    currentmods.grille
                ));
            }

            //hood
            let hood_n = 0;
            var hood_x = [];
            modtype = 7;

            while (hood_n <= modscount.hood) {
                hood_x.push(hood_n);
                hood_n++
            }

            if(hood_x <= 0){
                var hood = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var hood = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(hood_x),
                    currentmods.hood
                ));
            }

            //lwing
            let lwing_n = 0;
            var lwing_x = [];
            modtype = 8;

            while (lwing_n <= modscount.lwing) {
                lwing_x.push(lwing_n);
                lwing_n++
            }

            if(lwing_x <= 0){
                var lwing = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var lwing = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(lwing_x),
                    currentmods.lwing
                ));
            }

            //rwing
            let rwing_n = 0;
            var rwing_x = [];
            modtype = 9;

            while (rwing_n <= modscount.rwing) {
                rwing_x.push(rwing_n);
                rwing_n++
            }

            if(rwing_x <= 0){
                var rwing = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var rwing = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(rwing_x),
                    currentmods.rwing
                ));
            }

            //roof
            let roof_n = 0;
            var roof_x = [];
            modtype = 10;

            while (roof_n <= modscount.roof) {
                roof_x.push(roof_n);
                roof_n++
            }

            if(roof_x <= 0){
                var roof = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var roof = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(roof_x),
                    currentmods.roof
                ));
            }

            //engine
            let engine_n = 0;
            var engine_x = [];
            modtype = 11;

            while (engine_n <= modscount.engine) {
                engine_x.push(engine_n);
                engine_n++
            }

            if(engine_x <= 0){
                var engine = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var engine = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(engine_x),
                    currentmods.engine
                ));
            }

            //brakes
            let brakes_n = 0;
            var brakes_x = [];
            modtype = 12;

            while (brakes_n <= modscount.brakes) {
                brakes_x.push(brakes_n);
                brakes_n++
            }

            if(brakes_x <= 0){
                var brakes = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var brakes = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(brakes_x),
                    currentmods.brakes
                ));
            }

            //trans
            let trans_n = 0;
            var trans_x = [];
            modtype = 13;

            while (trans_n <= modscount.trans) {
                trans_x.push(trans_n);
                trans_n++
            }

            if(trans_x <= 0){
                var trans = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var trans = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(trans_x),
                    currentmods.trans
                ));
            }
            
            //horns
            let horns_n = 0;
            var horns_x = [];
            modtype = 14;

            while (horns_n <= modscount.horns) {
                horns_x.push(horns_n);
                horns_n++
            }

            if(horns_x <= 0){
                var horns = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var horns = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(horns_x),
                    currentmods.horns
                ));
            }

            //suspension
            let suspension_n = 0;
            var suspension_x = [];
            modtype = 15;

            while (suspension_n <= modscount.suspension) {
                suspension_x.push(suspension_n);
                suspension_n++
            }

            if(suspension_x <= 0){
                var suspension = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var suspension = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(suspension_x),
                    currentmods.suspension
                ));
            }

            //armor
            let armor_n = 0;
            var armor_x = [];
            modtype = 16;

            while (armor_n <= modscount.armor) {
                armor_x.push(armor_n);
                armor_n++
            }

            if(armor_x <= 0){
                var armor = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var armor = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(armor_x),
                    currentmods.armor
                ));
            }

            //turbo
            let turbo_n = 0;
            var turbo_x = [];
            modtype = 18;

            while (turbo_n <= modscount.turbo) {
                turbo_x.push(turbo_n);
                turbo_n++
            }

            if(turbo_x <= 0){
                var turbo = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var turbo = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(turbo_x),
                    currentmods.turbo
                ));
            }
            
            //plateh
            let plateh_n = 0;
            var plateh_x = [];
            modtype = 25;

            while (plateh_n <= modscount.plateh) {
                plateh_x.push(plateh_n);
                plateh_n++
            }

            if(plateh_x <= 0){
                var plateh = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var plateh = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(plateh_x),
                    currentmods.plateh
                ));
            }

            //platev
            let platev_n = 0;
            var platev_x = [];
            modtype = 26;

            while (platev_n <= modscount.platev) {
                platev_x.push(platev_n);
                platev_n++
            }

            if(platev_x <= 0){
                var platev = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var platev = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(platev_x),
                    currentmods.platev
                ));
            }

            //trimdesign
            let trimdesign_n = 0;
            var trimdesign_x = [];
            modtype = 27;

            while (trimdesign_n <= modscount.trimdesign) {
                trimdesign_x.push(trimdesign_n);
                trimdesign_n++
            }

            if(trimdesign_x <= 0){
                var trimdesign = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var trimdesign = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(trimdesign_x),
                    currentmods.trimdesign
                ));
            }

            //ornaments
            let ornaments_n = 0;
            var ornaments_x = [];
            modtype = 28;

            while (ornaments_n <= modscount.ornaments) {
                ornaments_x.push(ornaments_n);
                ornaments_n++
            }

            if(ornaments_x <= 0){
                var ornaments = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var ornaments = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(ornaments_x),
                    currentmods.ornaments
                ));
            }

            //dialdesign
            let dialdesign_n = 0;
            var dialdesign_x = [];
            modtype = 30;

            while (dialdesign_n <= modscount.dialdesign) {
                dialdesign_x.push(dialdesign_n);
                dialdesign_n++
            }

            if(dialdesign_x <= 0){
                var dialdesign = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var dialdesign = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(dialdesign_x),
                    currentmods.dialdesign
                ));
            }

            //doorint
            let doorint_n = 0;
            var doorint_x = [];
            modtype = 31;

            while (doorint_n <= modscount.doorint) {
                doorint_x.push(doorint_n);
                doorint_n++
            }

            if(doorint_x <= 0){
                var doorint = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var doorint = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(doorint_x),
                    currentmods.doorint
                ));
            }

            //seats
            let seats_n = 0;
            var seats_x = [];
            modtype = 32;

            while (seats_n <= modscount.seats) {
                seats_x.push(seats_n);
                seats_n++
            }

            if(seats_x <= 0){
                var seats = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var seats = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(seats_x),
                    currentmods.seats
                ));
            }

            //steeringw
            let steeringw_n = 0;
            var steeringw_x = [];
            modtype = 33;

            while (steeringw_n <= modscount.steeringw) {
                steeringw_x.push(steeringw_n);
                steeringw_n++
            }

            if(steeringw_x <= 0){
                var steeringw = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var steeringw = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(steeringw_x),
                    currentmods.steeringw
                ));
            }

            //shiftlever
            let shiftlever_n = 0;
            var shiftlever_x = [];
            modtype = 34;

            while (shiftlever_n <= modscount.shiftlever) {
                shiftlever_x.push(shiftlever_n);
                shiftlever_n++
            }

            if(shiftlever_x <= 0){
                var shiftlever = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var shiftlever = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(shiftlever_x),
                    currentmods.shiftlever
                ));
            }

            //plaques
            let plaques_n = 0;
            var plaques_x = [];
            modtype = 35;

            while (plaques_n <= modscount.plaques) {
                plaques_x.push(plaques_n);
                plaques_n++
            }

            if(plaques_x <= 0){
                var plaques = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var plaques = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(plaques_x),
                    currentmods.plaques
                ));
            }

            //hydraulics
            let hydraulics_n = 0;
            var hydraulics_x = [];
            modtype = 38;

            while (hydraulics_n <= modscount.hydraulics) {
                hydraulics_x.push(hydraulics_n);
                hydraulics_n++
            }

            if(hydraulics_x <= 0){
                var hydraulics = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var hydraulics = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(hydraulics_x),
                    currentmods.hydraulics
                ));
            }

            //engineb
            let engineb_n = 0;
            var engineb_x = [];
            modtype = 39;

            while (engineb_n <= modscount.engineb) {
                engineb_x.push(engineb_n);
                engineb_n++
            }

            if(engineb_x <= 0){
                var engineb = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var engineb = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(engineb_x),
                    currentmods.engineb
                ));
            }

            //airfilter
            let airfilter_n = 0;
            var airfilter_x = [];
            modtype = 40;

            while (airfilter_n <= modscount.airfilter) {
                airfilter_x.push(airfilter_n);
                airfilter_n++
            }

            if(airfilter_x <= 0){
                var airfilter = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var airfilter = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(airfilter_x),
                    currentmods.airfilter
                ));
            }
            
            //strutbar
            let strutbar_n = 0;
            var strutbar_x = [];
            modtype = 41;

            while (strutbar_n <= modscount.strutbar) {
                strutbar_x.push(strutbar_n);
                strutbar_n++
            }

            if(strutbar_x <= 0){
                var strutbar = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var strutbar = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(strutbar_x),
                    currentmods.strutbar
                ));
            }
            
            //archcover
            let archcover_n = 0;
            var archcover_x = [];
            modtype = 42;

            while (archcover_n <= modscount.archcover) {
                archcover_x.push(archcover_n);
                archcover_n++
            }

            if(archcover_x <= 0){
                var archcover = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var archcover = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(archcover_x),
                    currentmods.archcover
                ));
            }

            //antenna
            let antenna_n = 0;
            var antenna_x = [];
            modtype = 43;

            while (antenna_n <= modscount.antenna) {
                antenna_x.push(antenna_n);
                antenna_n++
            }

            if(antenna_x <= 0){
                var antenna = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var antenna = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(antenna_x),
                    currentmods.antenna
                ));
            }

            //exteriorp
            let exteriorp_n = 0;
            var exteriorp_x = [];
            modtype = 44;

            while (exteriorp_n <= modscount.exteriorp) {
                exteriorp_x.push(exteriorp_n);
                exteriorp_n++
            }

            if(exteriorp_x <= 0){
                var exteriorp = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var exteriorp = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(exteriorp_x),
                    currentmods.exteriorp
                ));
            }

            //tank
            let tank_n = 0;
            var tank_x = [];
            modtype = 45;

            while (tank_n <= modscount.tank) {
                tank_x.push(tank_n);
                tank_n++
            }

            if(tank_x <= 0){
                var tank = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var tank = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(tank_x),
                    currentmods.tank
                ));
            }

            //door
            let door_n = 0;
            var door_x = [];
            modtype = 46;

            while (door_n <= modscount.door) {
                door_x.push(door_n);
                door_n++
            }

            if(door_x <= 0){
                var door = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var door = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(door_x),
                    currentmods.door
                ));
            }

            //wroh
            let wroh_n = 0;
            var wroh_x = [];
            modtype = 47;

            while (wroh_n <= modscount.wroh) {
                wroh_x.push(wroh_n);
                wroh_n++
            }

            if(wroh_x <= 0){
                var wroh = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection([`-`])
                ));
            } else {
                var wroh = (new NativeUI.UIMenuListItem(
                    partList[modtype],
                    partList[modtype]+" anpassen",
                    new NativeUI.ItemsCollection(wroh_x),
                    currentmods.wroh
                ));
            }

            //Karrosserie
            partsMenu.AddItem(spoilers);
            partsMenu.AddItem(fbumpers);
            partsMenu.AddItem(rbumpers);
            partsMenu.AddItem(sskirts);
            partsMenu.AddItem(exhaust);
            partsMenu.AddItem(frame);
            partsMenu.AddItem(grille);
            partsMenu.AddItem(hood);
            partsMenu.AddItem(lwing);
            partsMenu.AddItem(rwing);
            partsMenu.AddItem(roof);
            partsMenu.AddItem(plateh);
            partsMenu.AddItem(platev);
            partsMenu.AddItem(trimdesign);
            partsMenu.AddItem(ornaments);
            partsMenu.AddItem(dialdesign);
            partsMenu.AddItem(doorint);
            partsMenu.AddItem(seats);
            partsMenu.AddItem(steeringw);
            partsMenu.AddItem(shiftlever);
            partsMenu.AddItem(plaques);
            partsMenu.AddItem(hydraulics);
            partsMenu.AddItem(engineb);
            partsMenu.AddItem(airfilter);
            partsMenu.AddItem(strutbar);
            partsMenu.AddItem(archcover);
            partsMenu.AddItem(antenna);
            partsMenu.AddItem(exteriorp);
            partsMenu.AddItem(tank);
            partsMenu.AddItem(door);
            partsMenu.AddItem(wroh);

            //Performance
            performanceMenu.AddItem(engine);
            performanceMenu.AddItem(brakes);
            performanceMenu.AddItem(trans);
            performanceMenu.AddItem(horns);
            performanceMenu.AddItem(suspension);
            performanceMenu.AddItem(armor);
            performanceMenu.AddItem(turbo);

            partsMenu.ItemSelect.on(item => {
                let mod_index = JSON.parse(item.Index);
                
                if(item.Text == partList[0]){
                    alt.emitServer('changeVehMod', 0, mod_index);                    
                }
                if(item.Text == partList[1]){
                    alt.emitServer('changeVehMod', 1, mod_index);                    
                }
                if(item.Text == partList[2]){
                    alt.emitServer('changeVehMod', 2, mod_index);                    
                }
                if(item.Text == partList[3]){
                    alt.emitServer('changeVehMod', 3, mod_index);                    
                }
                if(item.Text == partList[4]){
                    alt.emitServer('changeVehMod', 4, mod_index);                    
                }
                if(item.Text == partList[5]){
                    alt.emitServer('changeVehMod', 5, mod_index);                    
                }
                if(item.Text == partList[6]){
                    alt.emitServer('changeVehMod', 6, mod_index);                    
                }
                if(item.Text == partList[7]){
                    alt.emitServer('changeVehMod', 7, mod_index);                    
                }
                if(item.Text == partList[8]){
                    alt.emitServer('changeVehMod', 8, mod_index);                    
                }
                if(item.Text == partList[9]){
                    alt.emitServer('changeVehMod', 9, mod_index);                    
                }
                if(item.Text == partList[10]){
                    alt.emitServer('changeVehMod', 10, mod_index);                    
                }
                if(item.Text == partList[11]){
                    alt.emitServer('changeVehMod', 11, mod_index);
                }
                if(item.Text == partList[12]){
                    alt.emitServer('changeVehMod', 12, mod_index);
                }
                if(item.Text == partList[13]){
                    alt.emitServer('changeVehMod', 13, mod_index);
                }
                if(item.Text == partList[14]){
                    alt.emitServer('changeVehMod', 14, mod_index);
                }
                if(item.Text == partList[15]){
                    alt.emitServer('changeVehMod', 15, mod_index);
                }
                if(item.Text == partList[16]){
                    alt.emitServer('changeVehMod', 16, mod_index);
                }
                if(item.Text == partList[18]){
                    alt.emitServer('changeVehMod', 18, mod_index);
                }
                if(item.Text == partList[22]){
                    alt.emitServer('changeVehMod', 22, mod_index);
                }
                if(item.Text == partList[23]){
                    alt.emitServer('changeVehMod', 23, mod_index);
                }
                if(item.Text == partList[24]){
                    alt.emitServer('changeVehMod', 24, mod_index);
                }
                if(item.Text == partList[25]){
                    alt.emitServer('changeVehMod', 25, mod_index);
                }
                if(item.Text == partList[26]){
                    alt.emitServer('changeVehMod', 26, mod_index);
                }
                if(item.Text == partList[27]){
                    alt.emitServer('changeVehMod', 27, mod_index);
                }
                if(item.Text == partList[28]){
                    alt.emitServer('changeVehMod', 28, mod_index);
                }
                if(item.Text == partList[30]){
                    alt.emitServer('changeVehMod', 30, mod_index);
                }
                if(item.Text == partList[31]){
                    alt.emitServer('changeVehMod', 31, mod_index);
                }
                if(item.Text == partList[32]){
                    alt.emitServer('changeVehMod', 32, mod_index);
                }
                if(item.Text == partList[33]){
                    alt.emitServer('changeVehMod', 33, mod_index);
                }
                if(item.Text == partList[34]){
                    alt.emitServer('changeVehMod', 34, mod_index);
                }
                if(item.Text == partList[35]){
                    alt.emitServer('changeVehMod', 35, mod_index);
                }
                if(item.Text == partList[36]){
                    alt.emitServer('changeVehMod', 36, mod_index);
                }
                if(item.Text == partList[37]){
                    alt.emitServer('changeVehMod', 37, mod_index);
                }
                if(item.Text == partList[38]){
                    alt.emitServer('changeVehMod', 38, mod_index);
                }
                if(item.Text == partList[39]){
                    alt.emitServer('changeVehMod', 39, mod_index);
                }
                if(item.Text == partList[40]){
                    alt.emitServer('changeVehMod', 40, mod_index);
                }
                if(item.Text == partList[41]){
                    alt.emitServer('changeVehMod', 41, mod_index);
                }
                if(item.Text == partList[42]){
                    alt.emitServer('changeVehMod', 42, mod_index);
                }
                if(item.Text == partList[43]){
                    alt.emitServer('changeVehMod', 43, mod_index);
                }
                if(item.Text == partList[44]){
                    alt.emitServer('changeVehMod', 44, mod_index);
                }
                if(item.Text == partList[45]){
                    alt.emitServer('changeVehMod', 45, mod_index);
                }
                if(item.Text == partList[46]){
                    alt.emitServer('changeVehMod', 46, mod_index);
                }
                if(item.Text == partList[47]){
                    alt.emitServer('changeVehMod', 47, mod_index);
                }
                if(item.Text == partList[48]){
                    alt.emitServer('changeVehMod', 48, mod_index);
                }
                if(item.Text == partList[62]){
                    alt.emitServer('changeVehMod', 62, mod_index);
                }
                if(item.Text == partList[66]){
                    alt.emitServer('changeVehMod', 66, mod_index);
                }
                if(item.Text == partList[67]){
                    alt.emitServer('changeVehMod', 67, mod_index);
                }
            });

            performanceMenu.ItemSelect.on(item => {
                let mod_index = JSON.parse(item.Index);
                
                if(item.Text == partList[0]){
                    alt.emitServer('changeVehMod', 0, mod_index);                    
                }
                if(item.Text == partList[1]){
                    alt.emitServer('changeVehMod', 1, mod_index);                    
                }
                if(item.Text == partList[2]){
                    alt.emitServer('changeVehMod', 2, mod_index);                    
                }
                if(item.Text == partList[3]){
                    alt.emitServer('changeVehMod', 3, mod_index);                    
                }
                if(item.Text == partList[4]){
                    alt.emitServer('changeVehMod', 4, mod_index);                    
                }
                if(item.Text == partList[5]){
                    alt.emitServer('changeVehMod', 5, mod_index);                    
                }
                if(item.Text == partList[6]){
                    alt.emitServer('changeVehMod', 6, mod_index);                    
                }
                if(item.Text == partList[7]){
                    alt.emitServer('changeVehMod', 7, mod_index);                    
                }
                if(item.Text == partList[8]){
                    alt.emitServer('changeVehMod', 8, mod_index);                    
                }
                if(item.Text == partList[9]){
                    alt.emitServer('changeVehMod', 9, mod_index);                    
                }
                if(item.Text == partList[10]){
                    alt.emitServer('changeVehMod', 10, mod_index);                    
                }
                if(item.Text == partList[11]){
                    alt.emitServer('changeVehMod', 11, mod_index);
                }
                if(item.Text == partList[12]){
                    alt.emitServer('changeVehMod', 12, mod_index);
                }
                if(item.Text == partList[13]){
                    alt.emitServer('changeVehMod', 13, mod_index);
                }
                if(item.Text == partList[14]){
                    alt.emitServer('changeVehMod', 14, mod_index);
                }
                if(item.Text == partList[15]){
                    alt.emitServer('changeVehMod', 15, mod_index);
                }
                if(item.Text == partList[16]){
                    alt.emitServer('changeVehMod', 16, mod_index);
                }
                if(item.Text == partList[18]){
                    alt.emitServer('changeVehMod', 18, mod_index);
                }
                if(item.Text == partList[20]){
                    alt.emitServer('changeVehMod', 20, mod_index);
                }
                if(item.Text == partList[22]){
                    alt.emitServer('changeVehMod', 22, mod_index);
                }
                if(item.Text == partList[23]){
                    alt.emitServer('changeVehMod', 23, mod_index);
                }
                if(item.Text == partList[25]){
                    alt.emitServer('changeVehMod', 25, mod_index);
                }
                if(item.Text == partList[27]){
                    alt.emitServer('changeVehMod', 27, mod_index);
                }
                if(item.Text == partList[28]){
                    alt.emitServer('changeVehMod', 28, mod_index);
                }
                if(item.Text == partList[30]){
                    alt.emitServer('changeVehMod', 30, mod_index);
                }
                if(item.Text == partList[33]){
                    alt.emitServer('changeVehMod', 33, mod_index);
                }
                if(item.Text == partList[34]){
                    alt.emitServer('changeVehMod', 34, mod_index);
                }
                if(item.Text == partList[35]){
                    alt.emitServer('changeVehMod', 35, mod_index);
                }
                if(item.Text == partList[38]){
                    alt.emitServer('changeVehMod', 38, mod_index);
                }
                if(item.Text == partList[40]){
                    alt.emitServer('changeVehMod', 40, mod_index);
                }
                if(item.Text == partList[48]){
                    alt.emitServer('changeVehMod', 48, mod_index);
                }
                if(item.Text == partList[55]){
                    alt.emitServer('changeVehMod', 55, mod_index);
                }
                if(item.Text == partList[62]){
                    alt.emitServer('changeVehMod', 62, mod_index);
                }
                if(item.Text == partList[66]){
                    alt.emitServer('changeVehMod', 66, mod_index);
                }
                if(item.Text == partList[67]){
                    alt.emitServer('changeVehMod', 67, mod_index);
                }
            });

            //liverys
            let livery_n = 0;
            var livery_x = [];

            while (livery_n <= modscount.stickers) {
                livery_x.push(livery_n);
                livery_n++
            }

            liveryMenu.Clear();

            if(livery_x <= 0){
                var liverys = (new NativeUI.UIMenuListItem(
                    "Sticker",
                    "Sticker anpassen",
                    new NativeUI.ItemsCollection(['Keine Sticker vorhanden'])
                ));
            } else {
                var liverys = (new NativeUI.UIMenuListItem(
                    "Sticker",
                    "Sticker anpassen",
                    new NativeUI.ItemsCollection(livery_x)
                ));
            }

            liveryMenu.AddItem(liverys);

            liveryMenu.ItemSelect.on(item => {
                let index = JSON.parse(item.SelectedItem.DisplayText);
                alt.emitServer('changeVehMod', 48, index);
            });
        });


    //LightsMenu
    const lightsMenu = new NativeUI.Menu("", "Scheinwerfer/Unterboden ändern", new NativeUI.Point(1450, 50));
    lightsMenu.GetTitle().Scale = 1.2;
    lightsMenu.GetTitle().DropShadow = true;
    bennys.AddSubMenu(lightsMenu, lights);

    let spotlight = (new NativeUI.UIMenuItem("> Scheinwerfer", "Scheinwerfer ändern"));
    lightsMenu.AddItem(spotlight);
    let neon = (new NativeUI.UIMenuItem("> Unterboden", "Unterboden ändern"));
    lightsMenu.AddItem(neon);


        //SpotlightsMenu (scheinwerfer)
        const spotlightMenu = new NativeUI.Menu("", "Scheinwerfer ändern", new NativeUI.Point(1450, 50));
        spotlightMenu.GetTitle().Scale = 1.2;
        spotlightMenu.GetTitle().DropShadow = true;
        lightsMenu.AddSubMenu(spotlightMenu, spotlight);

            let white = new NativeUI.UIMenuItem(neonColorList[1].name, neonColorList[1].name+" färben");
            spotlightMenu.AddItem(white);
            let xenon = new NativeUI.UIMenuItem(neonColorList[0].name, neonColorList[0].name+" färben");
            spotlightMenu.AddItem(xenon);
            let blue = new NativeUI.UIMenuItem(neonColorList[2].name, neonColorList[2].name+" färben");
            spotlightMenu.AddItem(blue);
            let electric = new NativeUI.UIMenuItem(neonColorList[3].name, neonColorList[3].name+" färben");
            spotlightMenu.AddItem(electric);
            let green = new NativeUI.UIMenuItem(neonColorList[4].name, neonColorList[4].name+" färben");
            spotlightMenu.AddItem(green);
            let lightGreen = new NativeUI.UIMenuItem(neonColorList[5].name, neonColorList[5].name+" färben");
            spotlightMenu.AddItem(lightGreen);
            let yellow = new NativeUI.UIMenuItem(neonColorList[6].name, neonColorList[6].name+" färben");
            spotlightMenu.AddItem(yellow);
            let goldenShower = new NativeUI.UIMenuItem(neonColorList[7].name, neonColorList[7].name+" färben");
            spotlightMenu.AddItem(goldenShower);
            let orange = new NativeUI.UIMenuItem(neonColorList[8].name, neonColorList[8].name+" färben");
            spotlightMenu.AddItem(orange);
            let red = new NativeUI.UIMenuItem(neonColorList[9].name, neonColorList[9].name+" färben");
            spotlightMenu.AddItem(red);
            let ponyPink = new NativeUI.UIMenuItem(neonColorList[10].name, neonColorList[10].name+" färben");
            spotlightMenu.AddItem(ponyPink);
            let hotPink = new NativeUI.UIMenuItem(neonColorList[11].name, neonColorList[11].name+" färben");
            spotlightMenu.AddItem(hotPink);
            let purple = new NativeUI.UIMenuItem(neonColorList[12].name, neonColorList[12].name+" färben");
            spotlightMenu.AddItem(purple);
            let blackLight = new NativeUI.UIMenuItem(neonColorList[13].name, neonColorList[13].name+" färben");
            spotlightMenu.AddItem(blackLight);

            spotlightMenu.ItemSelect.on(item => {
                if(item == white){
                    let id = 0;
                    alt.emitServer('lightsColor', id);
                }
                if(item == xenon){
                    let id = -1;
                    alt.emitServer('lightsColor', id);
                }
                if(item == blue){
                    let id = 1;
                    alt.emitServer('lightsColor', id);
                }
                if(item == electric){
                    let id = 2;
                    alt.emitServer('lightsColor', id);
                }
                if(item == green){
                    let id = 3;
                    alt.emitServer('lightsColor', id);
                }
                if(item == lightGreen){
                    let id = 4;
                    alt.emitServer('lightsColor', id);
                }
                if(item == yellow){
                    let id = 5;
                    alt.emitServer('lightsColor', id);
                }
                if(item == goldenShower){
                    let id = 6;
                    alt.emitServer('lightsColor', id);
                }
                if(item == orange){
                    let id = 7;
                    alt.emitServer('lightsColor', id);
                }
                if(item == red){
                    let id = 8;
                    alt.emitServer('lightsColor', id);
                }
                if(item == ponyPink){
                    let id = 9;
                    alt.emitServer('lightsColor', id);
                }
                if(item == hotPink){
                    let id = 10;
                    alt.emitServer('lightsColor', id);
                }
                if(item == purple){
                    let id = 11;
                    alt.emitServer('lightsColor', id);
                }
                if(item == blackLight){
                    let id = 12;
                    alt.emitServer('lightsColor', id);
                }
            });

        //NeonMenu (Unterbodenbeleuchtung)
        const neonMenu = new NativeUI.Menu("", "Unterbodenbeleuchtung ändern", new NativeUI.Point(1450, 50));
        neonMenu.GetTitle().Scale = 1.2;
        neonMenu.GetTitle().DropShadow = true;
        lightsMenu.AddSubMenu(neonMenu, neon);

        let neon_off = new NativeUI.UIMenuItem("Aus", "Unterbodenbeleuchtung ausbauen");
        neonMenu.AddItem(neon_off);
        let neon_half = new NativeUI.UIMenuItem("Halb", "Unterbodenbeleuchtung Links und Rechts einbauen");
        neonMenu.AddItem(neon_half);
        let neon_all = new NativeUI.UIMenuItem("Alle", "Unterbodenbeleuchtung überall einbauen");
        neonMenu.AddItem(neon_all);
        let neon_color = new NativeUI.UIMenuItem("Farbe", "Farbe der Unterbodenbeleuchtung ändern");
        neonMenu.AddItem(neon_color);
        
        neonMenu.ItemSelect.on(item => {
            if(item == neon_off){
                let neonConfig = 0
                alt.emitServer('vehNeon', neonConfig);
                neon_off.SetRightBadge(12);
                neon_half.SetRightBadge(0);
                neon_all.SetRightBadge(0);
            } else if(item == neon_half){
                let neonConfig = 2
                alt.emitServer('vehNeon', neonConfig);
                neon_off.SetRightBadge(0);
                neon_half.SetRightBadge(12);
                neon_all.SetRightBadge(0);
            } else if(item == neon_all){
                let neonConfig = 4
                alt.emitServer('vehNeon', neonConfig);
                neon_off.SetRightBadge(0);
                neon_half.SetRightBadge(0);
                neon_all.SetRightBadge(12);
            }
        });

        //NeonFarben (Unterbodenbeleuchtung)
        const neonColors = new NativeUI.Menu("", "Neon Farbe ändern", new NativeUI.Point(1450, 50));
        neonColors.GetTitle().Scale = 1.2;
        neonColors.GetTitle().DropShadow = true;
        neonMenu.AddSubMenu(neonColors, neon_color);
        
        neonColors.AddItem(white);
        neonColors.AddItem(blue);
        neonColors.AddItem(electric);
        neonColors.AddItem(green);
        neonColors.AddItem(lightGreen);
        neonColors.AddItem(yellow);
        neonColors.AddItem(goldenShower);
        neonColors.AddItem(orange);
        neonColors.AddItem(red);
        neonColors.AddItem(ponyPink);
        neonColors.AddItem(hotPink);
        neonColors.AddItem(purple);
        neonColors.AddItem(blackLight);

        neonColors.ItemSelect.on(item => {
            if(item == white){
                var rgb = neonColorList[1].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == blue){
                var rgb = neonColorList[2].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == electric){
                var rgb = neonColorList[3].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == green){
                var rgb = neonColorList[4].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == lightGreen){
                var rgb = neonColorList[5].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == yellow){
                var rgb = neonColorList[6].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == goldenShower){
                var rgb = neonColorList[7].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == orange){
                var rgb = neonColorList[8].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == red){
                var rgb = neonColorList[9].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == ponyPink){
                var rgb = neonColorList[10].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == hotPink){
                var rgb = neonColorList[11].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == purple){
                var rgb = neonColorList[12].rgb;
                alt.emitServer('neoncolor', rgb);
            }
            if(item == blackLight){
                var rgb = neonColorList[13].rgb;
                alt.emitServer('neoncolor', rgb);
            }
        });

    //Wheelsmenu
    const wheelsMenu = new NativeUI.Menu("", "Reifen ändern", new NativeUI.Point(1450, 50));
    wheelsMenu.GetTitle().Scale = 1.2;
    wheelsMenu.GetTitle().DropShadow = true;
    bennys.AddSubMenu(wheelsMenu, wheels);

        //kat0
        let kat0_n = 0;
        var kat0_x = [];

        while (kat0_n <= wheelList[0].count) {
            kat0_x.push(kat0_n);
            kat0_n++
        }

        var kat0 = (new NativeUI.UIMenuListItem(
            `${wheelList[0].name}`,
            `Reifen aus ${wheelList[0].name} verbauen`,
            new NativeUI.ItemsCollection(kat0_x)
        ));

        //kat1
        let kat1_n = 0;
        var kat1_x = [];

        while (kat1_n <= wheelList[1].count) {
            kat1_x.push(kat1_n);
            kat1_n++
        }

        var kat1 = (new NativeUI.UIMenuListItem(
            `${wheelList[1].name}`,
            `Reifen aus ${wheelList[1].name} verbauen`,
            new NativeUI.ItemsCollection(kat1_x)
        ));

        //kat2
        let kat2_n = 0;
        var kat2_x = [];

        while (kat2_n <= wheelList[2].count) {
            kat2_x.push(kat2_n);
            kat2_n++
        }

        var kat2 = (new NativeUI.UIMenuListItem(
            `${wheelList[2].name}`,
            `Reifen aus ${wheelList[2].name} verbauen`,
            new NativeUI.ItemsCollection(kat2_x)
        ));

        //kat3
        let kat3_n = 0;
        var kat3_x = [];

        while (kat3_n <= wheelList[3].count) {
            kat3_x.push(kat3_n);
            kat3_n++
        }

        var kat3 = (new NativeUI.UIMenuListItem(
            `${wheelList[3].name}`,
            `Reifen aus ${wheelList[3].name} verbauen`,
            new NativeUI.ItemsCollection(kat3_x)
        ));

        //kat4
        let kat4_n = 0;
        var kat4_x = [];

        while (kat4_n <= wheelList[4].count) {
            kat4_x.push(kat4_n);
            kat4_n++
        }

        var kat4 = (new NativeUI.UIMenuListItem(
            `${wheelList[4].name}`,
            `Reifen aus ${wheelList[4].name} verbauen`,
            new NativeUI.ItemsCollection(kat4_x)
        ));

        //kat5
        let kat5_n = 0;
        var kat5_x = [];

        while (kat5_n <= wheelList[5].count) {
            kat5_x.push(kat5_n);
            kat5_n++
        }

        var kat5 = (new NativeUI.UIMenuListItem(
            `${wheelList[5].name}`,
            `Reifen aus ${wheelList[5].name} verbauen`,
            new NativeUI.ItemsCollection(kat5_x)
        ));

        //kat6
        let kat6_n = 0;
        var kat6_x = [];

        while (kat6_n <= wheelList[6].count) {
            kat6_x.push(kat6_n);
            kat6_n++
        }

        var kat6 = (new NativeUI.UIMenuListItem(
            `${wheelList[6].name}`,
            `Reifen aus ${wheelList[6].name} verbauen`,
            new NativeUI.ItemsCollection(kat6_x)
        ));

        //kat7
        let kat7_n = 0;
        var kat7_x = [];

        while (kat7_n <= wheelList[7].count) {
            kat7_x.push(kat7_n);
            kat7_n++
        }

        var kat7 = (new NativeUI.UIMenuListItem(
            `${wheelList[7].name}`,
            `Reifen aus ${wheelList[7].name} verbauen`,
            new NativeUI.ItemsCollection(kat7_x)
        ));

        //kat8
        let kat8_n = 0;
        var kat8_x = [];

        while (kat8_n <= wheelList[8].count) {
            kat8_x.push(kat8_n);
            kat8_n++
        }

        var kat8 = (new NativeUI.UIMenuListItem(
            `${wheelList[8].name}`,
            `Reifen aus ${wheelList[8].name} verbauen`,
            new NativeUI.ItemsCollection(kat8_x)
        ));

        //kat9
        let kat9_n = 0;
        var kat9_x = [];

        while (kat9_n <= wheelList[9].count) {
            kat9_x.push(kat9_n);
            kat9_n++
        }

        var kat9 = (new NativeUI.UIMenuListItem(
            `${wheelList[9].name}`,
            `Reifen aus ${wheelList[9].name} verbauen`,
            new NativeUI.ItemsCollection(kat9_x)
        ));

        //kat10
        let kat10_n = 0;
        var kat10_x = [];

        while (kat10_n <= wheelList[10].count) {
            kat10_x.push(kat10_n);
            kat10_n++
        }

        var kat10 = (new NativeUI.UIMenuListItem(
            `${wheelList[10].name}`,
            `Reifen aus ${wheelList[10].name} verbauen`,
            new NativeUI.ItemsCollection(kat10_x)
        ));

        //kat11
        let kat11_n = 0;
        var kat11_x = [];

        while (kat11_n <= wheelList[11].count) {
            kat11_x.push(kat11_n);
            kat11_n++
        }

        var kat11 = (new NativeUI.UIMenuListItem(
            `${wheelList[11].name}`,
            `Reifen aus ${wheelList[11].name} verbauen`,
            new NativeUI.ItemsCollection(kat11_x)
        ));

        //kat12
        let kat12_n = 0;
        var kat12_x = [];

        while (kat12_n <= wheelList[12].count) {
            kat12_x.push(kat12_n);
            kat12_n++
        }

        var kat12 = (new NativeUI.UIMenuListItem(
            `${wheelList[12].name}`,
            `Reifen aus ${wheelList[12].name} verbauen`,
            new NativeUI.ItemsCollection(kat12_x)
        ));
      
        wheelsMenu.AddItem(kat0);
        wheelsMenu.AddItem(kat1);
        wheelsMenu.AddItem(kat2);
        wheelsMenu.AddItem(kat3);
        wheelsMenu.AddItem(kat4);
        wheelsMenu.AddItem(kat5);
        wheelsMenu.AddItem(kat6);
        wheelsMenu.AddItem(kat7);
        wheelsMenu.AddItem(kat8);
        wheelsMenu.AddItem(kat9);
        wheelsMenu.AddItem(kat10);
        wheelsMenu.AddItem(kat11);
        wheelsMenu.AddItem(kat12);

        wheelsMenu.ItemSelect.on(item => {
            let mod_index = JSON.parse(item.Index);
            
            if(item.Text == wheelList[0].name){
                alt.emitServer('changeWheels', 0, mod_index);                    
            }
            if(item.Text == wheelList[1].name){
                alt.emitServer('changeWheels', 1, mod_index);                    
            }
            if(item.Text == wheelList[2].name){
                alt.emitServer('changeWheels', 2, mod_index);                    
            }
            if(item.Text == wheelList[3].name){
                alt.emitServer('changeWheels', 3, mod_index);                    
            }
            if(item.Text == wheelList[4].name){
                alt.emitServer('changeWheels', 4, mod_index);                    
            }
            if(item.Text == wheelList[5].name){
                alt.emitServer('changeWheels', 5, mod_index);                    
            }
            if(item.Text == wheelList[6].name){
                alt.emitServer('changeWheels', 6, mod_index);                    
            }
            if(item.Text == wheelList[7].name){
                alt.emitServer('changeWheels', 7, mod_index);                    
            }
            if(item.Text == wheelList[8].name){
                alt.emitServer('changeWheels', 8, mod_index);                    
            }
            if(item.Text == wheelList[9].name){
                alt.emitServer('changeWheels', 9, mod_index);                    
            }
            if(item.Text == wheelList[10].name){
                alt.emitServer('changeWheels', 10, mod_index);                    
            }
            if(item.Text == wheelList[11].name){
                alt.emitServer('changeWheels', 11, mod_index);                    
            }
            if(item.Text == wheelList[12].name){
                alt.emitServer('changeWheels', 12, mod_index);
            }
        });

    //SonstigesMenu
    const sonstigesMenu = new NativeUI.Menu("", "Reifen ändern", new NativeUI.Point(1450, 50));
    sonstigesMenu.GetTitle().Scale = 1.2;
    sonstigesMenu.GetTitle().DropShadow = true;
    bennys.AddSubMenu(sonstigesMenu, sonstiges);

        let plates = new NativeUI.UIMenuListItem(
            "Kennzeichen",
            "Kennzeichen ändern",
            new NativeUI.ItemsCollection(plateCollection)
        );
        
        sonstigesMenu.AddItem(plates);
        
        sonstigesMenu.ItemSelect.on(item => {
            if(item.Text == "Kennzeichen"){
                let index = JSON.parse(item.Index);
                alt.emitServer('changePlate', index);
            }         
        });

        let extras = (new NativeUI.UIMenuItem("> Extras", "Extras ändern"));
        sonstigesMenu.AddItem(extras);

        let windows = (new NativeUI.UIMenuItem("> Fensterönung", "Fensterönung ändern"));
        sonstigesMenu.AddItem(windows);

        //ExtraMenu
        const extraMenu = new NativeUI.Menu("", "Extras ändern", new NativeUI.Point(1450, 50));
        extraMenu.GetTitle().Scale = 1.2;
        extraMenu.GetTitle().DropShadow = true;
        sonstigesMenu.AddSubMenu(extraMenu, extras);
        
            alt.onServer('sendExtraCount', (vehicle) => {
                extraMenu.Clear();
                let extra_exists = false;
                let existing_extras = [];
                for (let i = 0; i <= 20; i++) { 
                    if (native.doesExtraExist(vehicle, i)){
                        extra_exists = true;
                        existing_extras.push(i);
                        let item;
                        if(native.isVehicleExtraTurnedOn(vehicle, i)){
                            item = new NativeUI.UIMenuItem(`Extra ${i}`, `Extra ${i} ändern`, i);
                            extraMenu.AddItem(item);
                            item.SetRightBadge(12);
                        } else {
                            item = new NativeUI.UIMenuItem(`Extra ${i}`, `Extra ${i} ändern`, i);
                            extraMenu.AddItem(item);
                        }
                    }
                }
                if(extra_exists == false) {
                    extraMenu.AddItem(new NativeUI.UIMenuItem(`Keine Extras`, `Keine Extras gefunden!`));
                }

                extraMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    alt.log("selectedItemIndex",selectedItemIndex);
                    let extra_index = existing_extras[selectedItemIndex];
                    alt.log(extra_index);
                    
                    if(native.isVehicleExtraTurnedOn(vehicle, extra_index)){
                        native.setVehicleExtra(vehicle, extra_index, 1);
                        selectedItem.SetRightBadge(0);
                    } else {
                        native.setVehicleExtra(vehicle, extra_index, 0);
                        selectedItem.SetRightBadge(12);
                    }
                });
            });
        
        //WindowMenu
        const windowMenu = new NativeUI.Menu("", "Fenstertönung ändern", new NativeUI.Point(1450, 50));
        windowMenu.GetTitle().Scale = 1.2;
        windowMenu.GetTitle().DropShadow = true;
        sonstigesMenu.AddSubMenu(windowMenu, windows);

        let window_none = (new NativeUI.UIMenuItem("None", "None ändern"));
        windowMenu.AddItem(window_none);
        
        let window_pureBlack = (new NativeUI.UIMenuItem("Pure Black", "Pure Black ändern"));
        windowMenu.AddItem(window_pureBlack);
        
        let window_darkSmoke = (new NativeUI.UIMenuItem("Dark Smoke", "Dark Smoke ändern"));
        windowMenu.AddItem(window_darkSmoke);
        
        let window_lightSmoke = (new NativeUI.UIMenuItem("Light Smoke", "Light Smoke ändern"));
        windowMenu.AddItem(window_lightSmoke);
        
        let window_stock = (new NativeUI.UIMenuItem("Stock", "Stock ändern"));
        windowMenu.AddItem(window_stock);
        
        let window_limo = (new NativeUI.UIMenuItem("Limo", "Limo ändern"));
        windowMenu.AddItem(window_limo);
        
        let window_green = (new NativeUI.UIMenuItem("Green", "Green ändern"));
        windowMenu.AddItem(window_green);

        windowMenu.ItemSelect.on(item => {
            if(item.Text == "None"){
                alt.emitServer('setWindow', 0);                    
            }
            if(item.Text == "Pure Black"){
                alt.emitServer('setWindow', 1);                    
            }
            if(item.Text == "Dark Smoke"){
                alt.emitServer('setWindow', 2);                    
            }
            if(item.Text == "Light Smoke"){
                alt.emitServer('setWindow', 3);                    
            }
            if(item.Text == "Stock"){
                alt.emitServer('setWindow', 4);                    
            }
            if(item.Text == "Limo"){
                alt.emitServer('setWindow', 5);                    
            }
            if(item.Text == "Green"){
                alt.emitServer('setWindow', 6);                    
            }
        });



   
//Keys zuweisen
alt.on('keyup', (key) => {
    if (key === 116) {
        if(alt.Player.local.vehicle){
            if (
                bennys.Visible || 
                paintMenu.Visible ||
                primaryColorMenu.Visible || 
                secondaryColorMenu.Visible || 
                lightsMenu.Visible || 
                spotlight.Visible || 
                liveryMenu.Visible || 
                partsMenu.Visible || 
                performanceMenu.Visible || 
                wheelsMenu.Visible || 
                wheelColorMenu.Visible || 
                pearlColorMenu.Visible || 
                sonstigesMenu.Visible || 
                extraMenu.Visible || 
                windowMenu.Visible || 
                interiorColorMenu.Visible || 
    
                primaryMetallicColorMenu.Visible ||
                primaryMattColorMenu.Visible ||
                primaryUtilColorMenu.Visible ||
                primaryWornColorMenu.Visible ||
                primarySonstigeColorMenu.Visible ||
    
                secondaryMetallicColorMenu.Visible ||
                secondaryMattColorMenu.Visible ||
                secondaryUtilColorMenu.Visible ||
                secondaryWornColorMenu.Visible ||
                secondarySonstigeColorMenu.Visible ||
    
                pearlMetallicColorMenu.Visible ||
                pearlMattColorMenu.Visible ||
                pearlUtilColorMenu.Visible ||
                pearlWornColorMenu.Visible ||
                pearlSonstigeColorMenu.Visible ||
    
                wheelMetallicColorMenu.Visible ||
                wheelMattColorMenu.Visible ||
                wheelUtilColorMenu.Visible ||
                wheelWornColorMenu.Visible ||
                wheelSonstigeColorMenu.Visible ||
    
                interiorMetallicColorMenu.Visible ||
                interiorMattColorMenu.Visible ||
                interiorUtilColorMenu.Visible ||
                interiorWornColorMenu.Visible ||
                interiorSonstigeColorMenu.Visible
            ){
                bennys.Close();
                paintMenu.Close();
                primaryColorMenu.Close();
                secondaryColorMenu.Close();
                lightsMenu.Close();
                spotlightMenu.Close();
                neonMenu.Close();
                liveryMenu.Close();
                partsMenu.Close();
                performanceMenu.Close();
                wheelsMenu.Close();
                wheelColorMenu.Close();
                sonstigesMenu.Close();
                extraMenu.Close();
                windowMenu.Close();
                interiorColorMenu.Close();

                primaryMetallicColorMenu.Close();
                primaryMattColorMenu.Close();
                primaryUtilColorMenu.Close();
                primaryWornColorMenu.Close();
                primarySonstigeColorMenu.Close();

                secondaryMetallicColorMenu.Close();
                secondaryMattColorMenu.Close();
                secondaryUtilColorMenu.Close();
                secondaryWornColorMenu.Close();
                secondarySonstigeColorMenu.Close();

                pearlMetallicColorMenu.Close();
                pearlMattColorMenu.Close();
                pearlUtilColorMenu.Close();
                pearlWornColorMenu.Close();
                pearlSonstigeColorMenu.Close();

                wheelMetallicColorMenu.Close();
                wheelMattColorMenu.Close();
                wheelUtilColorMenu.Close();
                wheelWornColorMenu.Close();
                wheelSonstigeColorMenu.Close();

                interiorMetallicColorMenu.Close();
                interiorMattColorMenu.Close();
                interiorUtilColorMenu.Close();
                interiorWornColorMenu.Close();
                interiorSonstigeColorMenu.Close();

            } else{
                bennys.Open();
                alt.emitServer('getModsCount');
                alt.emitServer('getExtraCount');
            }
        }
    }
    if (key === 27) {
        extraMenu.Close();
        if (
            bennys.Visible || 
            paintMenu.Visible ||
            primaryColorMenu.Visible || 
            secondaryColorMenu.Visible || 
            lightsMenu.Visible || 
            spotlight.Visible || 
            liveryMenu.Visible || 
            partsMenu.Visible || 
            performanceMenu.Visible || 
            wheelsMenu.Visible || 
            wheelColorMenu.Visible || 
            pearlColorMenu.Visible || 
            sonstigesMenu.Visible || 
            extraMenu.Visible || 
            windowMenu.Visible || 
            interiorColorMenu.Visible || 

            primaryMetallicColorMenu.Visible ||
            primaryMattColorMenu.Visible ||
            primaryUtilColorMenu.Visible ||
            primaryWornColorMenu.Visible ||
            primarySonstigeColorMenu.Visible ||

            secondaryMetallicColorMenu.Visible ||
            secondaryMattColorMenu.Visible ||
            secondaryUtilColorMenu.Visible ||
            secondaryWornColorMenu.Visible ||
            secondarySonstigeColorMenu.Visible ||

            pearlMetallicColorMenu.Visible ||
            pearlMattColorMenu.Visible ||
            pearlUtilColorMenu.Visible ||
            pearlWornColorMenu.Visible ||
            pearlSonstigeColorMenu.Visible ||

            wheelMetallicColorMenu.Visible ||
            wheelMattColorMenu.Visible ||
            wheelUtilColorMenu.Visible ||
            wheelWornColorMenu.Visible ||
            wheelSonstigeColorMenu.Visible ||

            interiorMetallicColorMenu.Visible ||
            interiorMattColorMenu.Visible ||
            interiorUtilColorMenu.Visible ||
            interiorWornColorMenu.Visible ||
            interiorSonstigeColorMenu.Visible
        ){
        bennys.Close();
        paintMenu.Close();
        primaryColorMenu.Close();
        secondaryColorMenu.Close();
        lightsMenu.Close();
        spotlightMenu.Close();
        neonMenu.Close();
        liveryMenu.Close();
        partsMenu.Close();
        performanceMenu.Close();
        wheelsMenu.Close();
        wheelColorMenu.Close();
        pearlColorMenu.Close();
        sonstigesMenu.Close();
        extraMenu.Close();
        windowMenu.Close();
        interiorColorMenu.Close();

        primaryMetallicColorMenu.Close();
        primaryMattColorMenu.Close();
        primaryUtilColorMenu.Close();
        primaryWornColorMenu.Close();
        primarySonstigeColorMenu.Close();

        secondaryMetallicColorMenu.Close();
        secondaryMattColorMenu.Close();
        secondaryUtilColorMenu.Close();
        secondaryWornColorMenu.Close();
        secondarySonstigeColorMenu.Close();

        pearlMetallicColorMenu.Close();
        pearlMattColorMenu.Close();
        pearlUtilColorMenu.Close();
        pearlWornColorMenu.Close();
        pearlSonstigeColorMenu.Close();

        wheelMetallicColorMenu.Close();
        wheelMattColorMenu.Close();
        wheelUtilColorMenu.Close();
        wheelWornColorMenu.Close();
        wheelSonstigeColorMenu.Close();

        interiorMetallicColorMenu.Close();
        interiorMattColorMenu.Close();
        interiorUtilColorMenu.Close();
        interiorWornColorMenu.Close();
        interiorSonstigeColorMenu.Close();
        }
    }
});

// Banners
const banners = [
    { dict: "commonmenu", name: "interaction_bgd" },
    { dict: "shopui_title_barber", name: "shopui_title_barber" },
    { dict: "shopui_title_barber2", name: "shopui_title_barber2" },
    { dict: "shopui_title_barber3", name: "shopui_title_barber3" },
    { dict: "shopui_title_barber4", name: "shopui_title_barber4" },
    { dict: "shopui_title_carmod", name: "shopui_title_carmod" },
    { dict: "shopui_title_carmod2", name: "shopui_title_carmod2" },
    { dict: "shopui_title_supermod", name: "shopui_title_supermod" },
    { dict: "shopui_title_conveniencestore", name: "shopui_title_tennisstore" },
    { dict: "shopui_title_conveniencestore", name: "shopui_title_conveniencestore" },
    { dict: "shopui_title_darts", name: "shopui_title_darts" },
    { dict: "shopui_title_gasstation", name: "shopui_title_gasstation" },
    { dict: "shopui_title_golfshop", name: "shopui_title_golfshop" },
    { dict: "shopui_title_graphics_franklin", name: "shopui_title_graphics_franklin" },
    { dict: "shopui_title_graphics_micheal", name: "shopui_title_graphics_micheal" },
    { dict: "shopui_title_graphics_trevor", name: "shopui_title_graphics_trevor" },
    { dict: "shopui_title_gunclub", name: "shopui_title_gunclub" },
    { dict: "shopui_title_highendfashion", name: "shopui_title_highendfashion" },
    { dict: "shopui_title_highendsalon", name: "shopui_title_highendsalon" },
    { dict: "shopui_title_liqourstore", name: "shopui_title_liqourstore" },
    { dict: "shopui_title_liqourstore2", name: "shopui_title_liqourstore2" },
    { dict: "shopui_title_liqourstore3", name: "shopui_title_liqourstore3" },
    { dict: "shopui_title_lowendfashion", name: "shopui_title_lowendfashion" },
    { dict: "shopui_title_lowendfashion2", name: "shopui_title_lowendfashion2" },
    { dict: "shopui_title_midfashion", name: "shopui_title_midfashion" },
    { dict: "shopui_title_movie_masks", name: "shopui_title_movie_masks" },
    { dict: "shopui_title_tattoos", name: "shopui_title_tattoos" },
    { dict: "shopui_title_tattoos2", name: "shopui_title_tattoos2" },
    { dict: "shopui_title_tattoos3", name: "shopui_title_tattoos3" },
    { dict: "shopui_title_tattoos4", name: "shopui_title_tattoos4" },
    { dict: "shopui_title_tattoos5", name: "shopui_title_tattoos5" },
    { dict: "shopui_title_tennis", name: "shopui_title_tennis" }
];

let currentBanner = banners[7];
bennys.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
paintMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
primaryColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
secondaryColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
lightsMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
spotlightMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
neonMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
neonColors.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
liveryMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
partsMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
performanceMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
wheelsMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
wheelColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
pearlColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
sonstigesMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
extraMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
windowMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
interiorColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
primaryMetallicColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
primaryMattColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
primaryUtilColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
primaryWornColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
primarySonstigeColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));

secondaryMetallicColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
secondaryMattColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
secondaryUtilColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
secondaryWornColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
secondarySonstigeColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));

pearlMetallicColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
pearlMattColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
pearlUtilColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
pearlWornColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
pearlSonstigeColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));

wheelMetallicColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
wheelMattColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
wheelUtilColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
wheelWornColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
wheelSonstigeColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));

interiorMetallicColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
interiorMattColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
interiorUtilColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
interiorWornColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
interiorSonstigeColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));

alt.onServer('getNumVehicleMods', (vehicle, modType) => {
    let modTypeCount = native.getNumVehicleMods(vehicle, modType);
    alt.emitServer('NumVehicleMods', modTypeCount);
});
