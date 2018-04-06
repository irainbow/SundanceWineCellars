import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SubpageComponent } from './subpage/subpage.component';
import { HomeComponent } from './home/home.component';
import { WineManagerService } from './wine-manager.service';
import { ShippingComponent } from './shipping/shipping.component';
import { SundanceWineCellarsComponent } from './sundance-wine-cellars/sundance-wine-cellars.component';


@NgModule({
  declarations: [
    // NgbModule,
    AppComponent,
    SubpageComponent,
    HomeComponent,
    ShippingComponent,
    SundanceWineCellarsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WineManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
