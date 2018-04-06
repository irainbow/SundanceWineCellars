import { Injectable } from '@angular/core';

@Injectable()
export class WineManagerService {
  // get wines() { return wines; }
  // get categories() { return categories; }
  // get categoryTypes() { return categoryTypes; }
  get wineries() { return wineries; }

  constructor() { }
}

// const wines: WineInfo[] = [
//   {
//     name: 'Something Dark',
//     description: 'Dark thing is dark',
//     categoryIds: [ 'pinot-noir', 'red' ],
//   },
// ];

// const categories: WineCategory[] = [
//   {
//     id: 'red',
//     typeId: 'color',
//     name: 'Reds',
//   },
//   {
//     id: 'white',
//     typeId: 'color',
//     name: 'Whites',
//   },
//
//   {
//     id: 'pinot-noir',
//     typeId: 'category-type',
//     name: 'Pinot Noir',
//   },
// ];
//
// const categoryTypes: WineCategoryType[] = [
//   {
//     typeId: 'pinot-noir',
//     name: 'Some Type Category',
//   },
// ];

const wineries: Wineries[] = [
  {
    wineryPopularity:  0,
    wineryName: '720 Wine Cellars'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Adelsheim'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Amalie Robert'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Andrew Rich Vintner'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Apolloni'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Argyle'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Belle Vallee Cellars'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Bethel Heights Vineyard'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Bradley Vineyards'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Brick House'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Brooks'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Cameron'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Cathedral Ridge'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Chehalem'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Cloudline'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Cottonwood'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Daedalus Cellars'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Domaine Drouhin Oregon'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Dusky Goose'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Eden Vale Estate'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Emerson Vineyards'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Erin Glenn'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Firesteed'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Freja'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Gypsy Dancer'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Hatcher'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Hinman Winery'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Illahe'
  },
  {
    wineryPopularity:  0,
    wineryName: 'J. Christopher'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Ken Wright Cellars'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Kramer Vineyards'
  },
  {
    wineryPopularity:  0,
    wineryName: 'LaVelle'
  },
  {
    wineryPopularity:  0,
    wineryName: 'lumos'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Medici Vineyards'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Noble Estate'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Panther Creek'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Ponzi'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Raptor Ridge'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Resonance Vineyard'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Rockblock'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Sass'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Shadow Mountain Vineyards'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Silvan Ridge'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Sokol-Blosser'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Spindrift Cellars'
  },
  {
    wineryPopularity:  0,
    wineryName: 'Sweet Cheeks Winery'
  },
  {
    wineryPopularity:  0,
    wineryName: 'The Four Graces'
  },
  {
    wineryPopularity:  0,
wineryName: 'Torii Mor'
  },
  {
    wineryPopularity:  0,
wineryName: 'Valley View'
  },
  {
    wineryPopularity:  0,
wineryName: 'Viento'
  },
  {
    wineryPopularity:  0,
wineryName: 'Westrey'
  },
  {
    wineryPopularity:  0,
wineryName: 'Willamette Valley Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Witness Tree Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'A to Z'
  },
  {
    wineryPopularity:  0,
wineryName: 'Airlie'
  },
  {
    wineryPopularity:  0,
wineryName: 'Ana Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Anne Amie'
  },
  {
    wineryPopularity:  0,
wineryName: 'Arcane Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Beaux Freres'
  },
  {
    wineryPopularity:  0,
wineryName: 'Benton Lane'
  },
  {
    wineryPopularity:  0,
wineryName: 'Black Cap'
  },
  {
    wineryPopularity:  0,
wineryName: 'Brandborg'
  },
  {
    wineryPopularity:  0,
wineryName: 'Bridgeview'
  },
  {
    wineryPopularity:  0,
wineryName: 'Bruno'
  },
  {
    wineryPopularity:  0,
wineryName: 'Capitello'
  },
  {
    wineryPopularity:  0,
wineryName: 'Chateau Benoit'
  },
  {
    wineryPopularity:  0,
wineryName: 'Cherry Hill Winery'
  },
  {
    wineryPopularity:  0,
wineryName: 'Coleman Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'Cristom'
  },
  {
    wineryPopularity:  0,
wineryName: 'De Ponte Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Domaine Meriwether'
  },
  {
    wineryPopularity:  0,
wineryName: 'Dylan\'s Run'
  },
  {
    wineryPopularity:  0,
wineryName: 'EIEIO'
  },
  {
    wineryPopularity:  0,
wineryName: 'Eola Hills'
  },
  {
    wineryPopularity:  0,
wineryName: 'Evesham Wood'
  },
  {
    wineryPopularity:  0,
wineryName: 'Francis Tannahill'
  },
  {
    wineryPopularity:  0,
wineryName: 'Girardet'
  },
  {
    wineryPopularity:  0,
wineryName: 'Hamacher'
  },
  {
    wineryPopularity:  0,
wineryName: 'Henry Estate'
  },
  {
    wineryPopularity:  0,
wineryName: 'Holloran'
  },
  {
    wineryPopularity:  0,
wineryName: 'Iris Hill'
  },
  {
    wineryPopularity:  0,
wineryName: 'J.K. Carriere Wines'
  },
  {
    wineryPopularity:  0,
wineryName: 'King Estate'
  },
  {
    wineryPopularity:  0,
wineryName: 'Lachini Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Lemelson Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Maysara'
  },
  {
    wineryPopularity:  0,
wineryName: 'Melrose Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Owen Roe'
  },
  {
    wineryPopularity:  0,
wineryName: 'Penner-Ash'
  },
  {
    wineryPopularity:  0,
wineryName: 'Quercus'
  },
  {
    wineryPopularity:  0,
wineryName: 'Red Door Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Rex Hill'
  },
  {
    wineryPopularity:  0,
wineryName: 'Roco'
  },
  {
    wineryPopularity:  0,
wineryName: 'Scott Paul'
  },
  {
    wineryPopularity:  0,
wineryName: 'Shea Wine Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Silver Salmon Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Solena'
  },
  {
    wineryPopularity:  0,
wineryName: 'St. Innocent'
  },
  {
    wineryPopularity:  0,
wineryName: 'Terrapin Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'The Pines'
  },
  {
    wineryPopularity:  0,
wineryName: 'Trinity Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Van Duzer'
  },
  {
    wineryPopularity:  0,
wineryName: 'Vitae Springs Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'Wild Rose Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'Wine by Joe'
  },
  {
    wineryPopularity:  0,
wineryName: 'Zerba Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Abacela'
  },
  {
    wineryPopularity:  0,
wineryName: 'Alloro Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'Anam Cara Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Antica Terra'
  },
  {
    wineryPopularity:  0,
wineryName: 'Archery Summit'
  },
  {
    wineryPopularity:  0,
wineryName: 'Belle Pente'
  },
  {
    wineryPopularity:  0,
wineryName: 'Bergstrom Winery'
  },
  {
    wineryPopularity:  0,
wineryName: 'Boedecker Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Bricco'
  },
  {
    wineryPopularity:  0,
wineryName: 'Broadley Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Bryn Mawr Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Cardwell Hill Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Chateau Lorane'
  },
  {
    wineryPopularity:  0,
wineryName: 'Christopher Bridge'
  },
  {
    wineryPopularity:  0,
wineryName: 'Cooper Mountain Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Cuneo'
  },
  {
    wineryPopularity:  0,
wineryName: 'Dobbes Family Estate'
  },
  {
    wineryPopularity:  0,
wineryName: 'Domaine Serene'
  },
  {
    wineryPopularity:  0,
wineryName: 'Ecosse'
  },
  {
    wineryPopularity:  0,
wineryName: 'Elk Cove Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Erath'
  },
  {
    wineryPopularity:  0,
wineryName: 'Eyrie Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Foris'
  },
  {
    wineryPopularity:  0,
wineryName: 'Grochau Cellars'
  },
  {
    wineryPopularity:  0,
wineryName: 'Harris Bridge Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'High Pass Winery'
  },
  {
    wineryPopularity:  0,
wineryName: 'Hood River Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'J. Albin'
  },
  {
    wineryPopularity:  0,
wineryName: 'Jezebel'
  },
  {
    wineryPopularity:  0,
wineryName: 'Kings Ridge'
  },
  {
    wineryPopularity:  0,
wineryName: 'Lange'
  },
  {
    wineryPopularity:  0,
wineryName: 'Lewman Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'McKinlay'
  },
  {
    wineryPopularity:  0,
wineryName: 'Methven Family Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Palotai'
  },
  {
    wineryPopularity:  0,
wineryName: 'Phelps Creek Vineyards'
  },
  {
    wineryPopularity:  0,
wineryName: 'Ransom'
  },
  {
    wineryPopularity:  0,
wineryName: 'Redhawk Vineyard'
  },
  {
    wineryPopularity:  0,
wineryName: 'River\'s Edge'
  },
  {
    wineryPopularity:  0,
wineryName: 'Roxy Ann'
  },
  {
    wineryPopularity:  0,
wineryName: 'Secret House'
  },
  {
    wineryPopularity:  0,
wineryName: 'Siltstone'
  },
  {
    wineryPopularity:  0,
wineryName: 'Sineann'
  },
  {
    wineryPopularity:  0,
wineryName: 'Soter'
  },
  {
    wineryPopularity:  0,
wineryName: 'Stevenson Barrie'
  },
  {
    wineryPopularity:  0,
wineryName: 'Territorial'
  },
  {
    wineryPopularity:  0,
wineryName: 'Thistle'
  },
  {
    wineryPopularity:  0,
wineryName: 'Tyee'
  },
  {
    wineryPopularity:  0,
wineryName: 'Velocity'
  },
  {
    wineryPopularity:  0,
wineryName: 'Vitis Ridge'
  },
  {
    wineryPopularity:  0,
wineryName: 'WillaKenzie Estate'
  },
  {
    wineryPopularity:  0,
wineryName: 'Winter\'s Hill'
  }
];

// export interface WineInfo {
//   name: string;
//   description: string;
//   price: number;
//   categoryIds: string[];
// }

// export interface WineCategory {x
//   id: string;
//   typeId: string;
//   name: string;
// }
//
// export interface WineCategoryType {
//   typeId: string;
//   name: string;
// }

export interface Wineries {
  wineryPopularity:  0,
  wineryName: string;
}
