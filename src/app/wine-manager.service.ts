import { Injectable } from '@angular/core';

@Injectable()
export class WineManagerService {
  get wines() { return wines; }
  get categories() { return categories; }
  get categoryTypes() { return categoryTypes; }

  constructor() { }
}

const wines: WineInfo[] = [
  {
    name: 'Something Dark',
    description: 'Dark thing is dark',
    price: 42.13,
    categoryIds: [ 'pinot-noir', 'red' ],
  },
];

const categories: WineCategory[] = [
  {
    id: 'red',
    typeId: 'color',
    name: 'Reds',
  },
  {
    id: 'white',
    typeId: 'color',
    name: 'Whites',
  },

  {
    id: 'pinot-noir',
    typeId: 'category-type',
    name: 'Pinot Noir',
  },
];

const categoryTypes: WineCategoryType[] = [
  {
    typeId: 'pinot-noir',
    name: 'Some Type Category',
  },
];

export interface WineInfo {
  name: string;
  description: string;
  price: number;
  categoryIds: string[];
}

export interface WineCategory {
  id: string;
  typeId: string;
  name: string;
}

export interface WineCategoryType {
  typeId: string;
  name: string;
}

