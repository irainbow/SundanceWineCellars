import {Component, OnInit} from '@angular/core';
import {WineManagerService, WineryInfo} from '../wine-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './owm.component.html',
  styleUrls: ['./owm.component.scss']
})
export class OwmComponent implements OnInit {
  title = 'Sundance Wine Cellars';

  wineResults: WineryInfo[] | null = null;

  constructor(public wineManager: WineManagerService) {
    this.searchWines('');
  }

  searchWines(query: string) {
    query = query.toLowerCase().trim();

    this.wineResults = this.wineManager.wineries
      .filter(winery => winery.wineryName.toLowerCase().includes(query))
      .sort((a, b) => a.wineryName === b.wineryName ? 0 : a.wineryName < b.wineryName ? -1 : 1);
  }

  ngOnInit() {
  }
}
