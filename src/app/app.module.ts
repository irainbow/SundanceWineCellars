import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SubpageComponent } from './subpage/subpage.component';
import { HomeComponent } from './home/home.component';
import { WineManagerService } from './wine-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    SubpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WineManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
