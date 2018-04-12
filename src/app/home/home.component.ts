import {Component, OnInit} from '@angular/core';
import {WineManagerService, WineryInfo} from '../wine-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Sundance Wine Cellars';

  wineResults: WineryInfo[] | null = null;

  constructor(public wineManager: WineManagerService) {
    this.searchWines('');
  }

  searchWines(query: string) {
    query = query.toLowerCase().trim();

    this.wineResults = this.wineManager.wineries
      .filter(winery => winery.wineryName.toLowerCase().includes(query))
      .slice(0, 21);
  }

  ngOnInit() {
  }
}
