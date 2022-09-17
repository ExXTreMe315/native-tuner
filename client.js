import * as alt from "alt-client";
import * as native from 'natives';
import * as NativeUI from './includes/NativeUI/NativeUi';
//Vorweg
const colors = [
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
        id: 55,
        description: 'Matte Lime Green',
        hex: '#66b81f',
        rgb: '102, 184, 31'
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
        id: 121,
        description: 'Worn Off White',
        hex: '#eae6de',
        rgb: '234, 230, 222'
    },
    {
        id: 122,
        description: 'Util Off White',
        hex: '#dfddd0',
        rgb: '223, 221, 208'
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
        id: 125,
        description: 'Metallic Securicor Green',
        hex: '#83c566',
        rgb: '131, 197, 102'
    },
    {
        id: 126,
        description: 'Worn Taxi Yellow',
        hex: '#f1cc40',
        rgb: '241, 204, 64'
    },
    {
        id: 127,
        description: 'Police Car Blue',
        hex: '#4cc3da',
        rgb: '76, 195, 218'
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
        id: 130,
        description: 'Worn Orange',
        hex: '#f8b658',
        rgb: '248, 182, 88'
    },
    {
        id: 131,
        description: 'Matte White',
        hex: '#fcf9f1',
        rgb: '252, 249, 241'
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
        id: 137,
        description: 'Metallic Vermillion Pink',
        hex: '#df5891',
        rgb: '223, 88, 145'
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
        id: 141,
        description: 'Mettalic Black Blue',
        hex: '#0a0c17',
        rgb: '10, 12, 23'
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
        id: 144,
        description: 'Hunter Green',
        hex: '#9f9e8a',
        rgb: '159, 158, 138'
    },
    {
        id: 145,
        description: 'Metallic Purple',
        hex: '#621276',
        rgb: '98, 18, 118'
    },
    {
        id: 146,
        description: 'Metaillic V Dark Blue',
        hex: '#0b1421',
        rgb: '11, 20, 33'
    },
    {
        id: 147,
        description: 'Modshop Black',
        hex: '#11141a',
        rgb: '17, 20, 26'
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
        id: 150,
        description: 'Metallic Lava Red',
        hex: '#bc1917',
        rgb: '188, 25, 23'
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

const colors2 = [
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
        id: 55,
        description: 'Matte Lime Green',
        hex: '#66b81f',
        rgb: '102, 184, 31'
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
        id: 121,
        description: 'Worn Off White',
        hex: '#eae6de',
        rgb: '234, 230, 222'
    },
    {
        id: 122,
        description: 'Util Off White',
        hex: '#dfddd0',
        rgb: '223, 221, 208'
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
        id: 125,
        description: 'Metallic Securicor Green',
        hex: '#83c566',
        rgb: '131, 197, 102'
    },
    {
        id: 126,
        description: 'Worn Taxi Yellow',
        hex: '#f1cc40',
        rgb: '241, 204, 64'
    },
    {
        id: 127,
        description: 'Police Car Blue',
        hex: '#4cc3da',
        rgb: '76, 195, 218'
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
        id: 130,
        description: 'Worn Orange',
        hex: '#f8b658',
        rgb: '248, 182, 88'
    },
    {
        id: 131,
        description: 'Matte White',
        hex: '#fcf9f1',
        rgb: '252, 249, 241'
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
        id: 137,
        description: 'Metallic Vermillion Pink',
        hex: '#df5891',
        rgb: '223, 88, 145'
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
        id: 141,
        description: 'Mettalic Black Blue',
        hex: '#0a0c17',
        rgb: '10, 12, 23'
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
        id: 144,
        description: 'Hunter Green',
        hex: '#9f9e8a',
        rgb: '159, 158, 138'
    },
    {
        id: 145,
        description: 'Metallic Purple',
        hex: '#621276',
        rgb: '98, 18, 118'
    },
    {
        id: 146,
        description: 'Metaillic V Dark Blue',
        hex: '#0b1421',
        rgb: '11, 20, 33'
    },
    {
        id: 147,
        description: 'Modshop Black',
        hex: '#11141a',
        rgb: '17, 20, 26'
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
        id: 150,
        description: 'Metallic Lava Red',
        hex: '#bc1917',
        rgb: '188, 25, 23'
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

//Hauptmenu
const bennys = new NativeUI.Menu("", "Bennys Original Motorwork's", new NativeUI.Point(1450, 50));
bennys.GetTitle().Scale = 1.2;
bennys.GetTitle().DropShadow = true;

    //Tunable Categories
    let paintJob = (new NativeUI.UIMenuItem("Lackierung", "Lackierung ändern"));
    bennys.AddItem(paintJob);
    let lights = (new NativeUI.UIMenuItem("Lichter", "Lichter ändern"));
    bennys.AddItem(lights);

        //Paintmenu
        const paintMenu = new NativeUI.Menu("", "Lackierung ändern", new NativeUI.Point(1450, 50));
        paintMenu.GetTitle().Scale = 1.2;
        paintMenu.GetTitle().DropShadow = true;
        bennys.AddSubMenu(paintMenu, paintJob);

            let primaryColor = (new NativeUI.UIMenuItem('Primärfarbe', 'Primärfarbe'));
            paintMenu.AddItem(primaryColor);
            let secondaryColor = (new NativeUI.UIMenuItem('Sekundärfarbe', 'Sekundärfarbe'));
            paintMenu.AddItem(secondaryColor);
                
                //Primary Color Menu
                const primaryColorMenu = new NativeUI.Menu("", "Primärfarbe ändern", new NativeUI.Point(1450, 50));
                primaryColorMenu.GetTitle().Scale = 1.2;
                primaryColorMenu.GetTitle().DropShadow = true;
                paintMenu.AddSubMenu(primaryColorMenu, primaryColor);

                    //Primary Colors
                    colors.forEach(createItemPrimaryColor);
                                    
                    function createItemPrimaryColor(item, index, arr) {
                        arr[index] = item.description;
                        primaryColorMenu.AddItem((new NativeUI.UIMenuItem(arr[index], "Fahrzeug "+arr[index]+" Färben")));
                    }

                    primaryColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                    alt.emitServer('primaryColor', selectedItemIndex);            
                    });
                    
                //Secondary Color Menu
                const secondaryColorMenu = new NativeUI.Menu("", "Sekundärfarbe ändern", new NativeUI.Point(1450, 50));
                secondaryColorMenu.GetTitle().Scale = 1.2;
                secondaryColorMenu.GetTitle().DropShadow = true;
                paintMenu.AddSubMenu(secondaryColorMenu, secondaryColor);

                    //Secondayr Colors
                    colors2.forEach(createItemSecondaryColor);                       
                    
                    function createItemSecondaryColor(item, index, arr) {
                        arr[index] = item.description;
                        secondaryColorMenu.AddItem((new NativeUI.UIMenuItem(arr[index], "Fahrzeug "+arr[index]+" Färben")));
                    }

                    secondaryColorMenu.ItemSelect.on((selectedItem, selectedItemIndex) => {
                        alt.emitServer('secondaryColor', selectedItemIndex);
                    });

    //LightsMenu
    const lightsMenu = new NativeUI.Menu("", "Scheinwerfer/Unterboden ändern", new NativeUI.Point(1450, 50));
    lightsMenu.GetTitle().Scale = 1.2;
    lightsMenu.GetTitle().DropShadow = true;
    bennys.AddSubMenu(lightsMenu, lights);
        //Light Colors

        const lightColors = [
            { hex: 'FFFFFF',  name: 'White',           value: 0  },
            { hex: '008080',  name: 'Xenon',           value: -1 },
            { hex: '0000FF',  name: 'Blue',            value: 1  },
            { hex: '00FFFF',  name: 'Electric',        value: 2  },
            { hex: '008000',  name: 'Green',           value: 3  },
            { hex: '00FF00',  name: 'Light Green',     value: 4  },
            { hex: 'FFFF00',  name: 'Yellow',          value: 5  },
            { hex: '808000',  name: 'Golden Shower',   value: 6  },
            { hex: 'FF8200',  name: 'Orange',          value: 7  },
            { hex: 'FF0000',  name: 'Red',             value: 8  },
            { hex: 'FF00FF',  name: 'Pony Pink',       value: 9  },
            { hex: 'FF0080',  name: 'Hot Pink',        value: 10 },
            { hex: '800080',  name: 'Purple',          value: 11 },
            { hex: 'ffffff22',  name: 'Black Light',   value: 12 }
        ];
/*
        lightColors.forEach(createItemLightColors);
                                        
        function createItemLightColors(item, index, arr) {
            arr[index] = item.name;
            lightsMenu.AddItem((new NativeUI.UIMenuItem(arr[index], "Scheinwerfer "+arr[index]+" Färben")));
        }
*/
        let white = new NativeUI.UIMenuItem("White", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(white);
        let xenon = new NativeUI.UIMenuItem("Xenon", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(xenon);
        let blue = new NativeUI.UIMenuItem("Blue", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(blue);
        let electric = new NativeUI.UIMenuItem("Electric", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(electric);
        let green = new NativeUI.UIMenuItem("Green", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(green);
        let lightGreen = new NativeUI.UIMenuItem("Light Green", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(lightGreen);
        let yellow = new NativeUI.UIMenuItem("Yellow", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(yellow);
        let goldenShower = new NativeUI.UIMenuItem("Golden Shower", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(goldenShower);
        let orange = new NativeUI.UIMenuItem("Orange", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(orange);
        let red = new NativeUI.UIMenuItem("Red", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(red);
        let ponyPink = new NativeUI.UIMenuItem("Pony Pink", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(ponyPink);
        let hotPink = new NativeUI.UIMenuItem("Hot Pink", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(hotPink);
        let purple = new NativeUI.UIMenuItem("Purple", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(purple);
        let blackLight = new NativeUI.UIMenuItem("Black Light", "Scheinwerfer Weiß Färben");
        lightsMenu.AddItem(blackLight);

        lightsMenu.ItemSelect.on(item => {
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
        

//Keys zuweisen
alt.on('keyup', (key) => {
    if (key === 116) {
        if (bennys.Visible || paintMenu.Visible || primaryColorMenu.Visible || secondaryColorMenu.Visible || lightsMenu.Visible){
            bennys.Close();
            paintMenu.Close();
            primaryColorMenu.Close();
            secondaryColorMenu.Close();
            lightsMenu.Close();

        }
        else
        bennys.Open();
    }
});

alt.on('keyup', (key) => {
    if (key === 27) {
        if (bennys.Visible || paintMenu.Visible || primaryColorMenu.Visible || secondaryColorMenu.Visible || lightsMenu.Visible){
            bennys.Close();
            paintMenu.Close();
            primaryColorMenu.Close();
            secondaryColorMenu.Close();
            lightsMenu.Close();
        }
    }
});

alt.on('keyup', (key) => {
    if (key === 70) {
        if (bennys.Visible || paintMenu.Visible || primaryColorMenu.Visible || secondaryColorMenu.Visible || lightsMenu.Visible){
            bennys.Close();
            paintMenu.Close();
            primaryColorMenu.Close();
            secondaryColorMenu.Close();
            lightsMenu.Close();
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

let currentBanner = banners[5];
bennys.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
paintMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
primaryColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
secondaryColorMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));
lightsMenu.SetSpriteBannerType(new NativeUI.Sprite(currentBanner.dict, currentBanner.name, new NativeUI.Point(0, 0), new NativeUI.Size()));

alt.onServer('getNumVehicleMods', (vehicle, modType) => {
    let modTypeCount = native.getNumVehicleMods(vehicle, modType);
    alt.emitServer('NumVehicleMods', modTypeCount);
});