import {Component, OnInit} from '@angular/core';
import {WineManagerService, Wineries} from '../wine-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Sundance Wine Cellars';

  wineResults: Wineries[] | null = null;

  constructor(public wineManager: WineManagerService) {
  }

  searchWines(query: string) {
    query = query.toLowerCase().trim();

    if (query.length > 0) {
      this.wineResults = this.wineManager.wineries.filter(
        winery => winery.wineryName.toLowerCase().includes(query)
      );
    } else {
      this.wineResults = [];
    }
  }

  ngOnInit() {
  }
}
