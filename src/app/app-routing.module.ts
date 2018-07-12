import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubpageComponent} from './subpage/subpage.component';
import {ShippingComponent} from './shipping/shipping.component';
import {SundanceWineCellarsComponent} from './sundance-wine-cellars/sundance-wine-cellars.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
// import {HeaderOWMComponent} from './headerOWM/headerOWM.component';
// import {HeaderSWCComponent} from './headerSWC/headerSWC.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'subpage', component: SubpageComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'sundance_wine_cellars', component: SundanceWineCellarsComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '', component: HeaderOWMComponent, outlet: 'header' },
  // { path: '', component: HeaderSWCComponent, outlet: 'header' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {
  // constructor(private router: Router) {
  // }
  //
  // public isRouteActive(route) {
  //   return this.router.isRouteActive(this.router.generate(route))
  // }
}
