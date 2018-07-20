import { Component } from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {defaultRouteData, isRouteData, RouteData} from './app-routing.module';
import {Title} from '@angular/platform-browser';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// @module({
//   declarations: [AppComponent,],
//   imports: [NgbModule,]
// })

export class AppComponent {
  public isNavbarCollapsed = true;
  routeData = defaultRouteData;

  get isOwmHeader() {
    return this.routeData.header === 'owm';
  }


  get isSwcHeader() {
    return this.routeData.header === 'swc';
  }

  constructor(
    router: Router,
    private title: Title
  ) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.routeData = defaultRouteData;
        this.updateRouteDataFrom(router.routerState.snapshot.root);
        this.handleUpdatedRouteData();
      }
    });
  }

  private updateRouteDataFrom(route: ActivatedRouteSnapshot) {
    if (isRouteData(route.data)) {
      this.routeData = {
        ... this.routeData,
        ... route.data
      };
    } else {
      route.children.forEach(child => this.updateRouteDataFrom(child));
    }
  }

  private handleUpdatedRouteData() {
    this.title.setTitle(this.routeData.title);
  }
}

