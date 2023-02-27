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

  get isSwcAndOwmHeader() {
    return this.routeData.header === 'swcandowm';
  }

  get showShippingCallout() {
    return this.routeData.showShippingCallout;
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
        this.handleAgeModal();
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

  private handleAgeModal() {
    // Get the modal elements
    var modal = document.getElementById("age-verify-modal");
    var yesBtn = document.getElementById("age-verify-yes");
    var noBtn = document.getElementById("age-verify-no");

    // If the user hasn't verified age recently, open the modal
    if (!this.readAgeCookie('age_verify')) {
      modal.style.display = "block";
    }

    // When the user clicks yes, close the modal and create a cookie
    yesBtn.onclick = () => {
      this.createAgeCookie('age_verify', 'true', 1);
      modal.style.display = "none";
    }

    // When the user clicks no, redirect to Sundance grocery site
    noBtn.onclick = function() {
      window.location.assign('https://sundancenaturalfoods.com/')
    }
  }

  private createAgeCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      console.log(date);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/"; // affects all site pages
  }

  private readAgeCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

}

