import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubpageComponent} from './subpage/subpage.component';
import {ShippingComponent} from './shipping/shipping.component';
import {SundanceWineCellarsComponent} from './sundance-wine-cellars/sundance-wine-cellars.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderOwmComponent} from './header-owm/header-owm.component';
import {HeaderSwcComponent} from './header-swc/header-swc.component';


const swc_routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      header: 'owm',
      title: 'Oregon Wine Merchants'
    } as RouteData
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'subpage',
    component: SubpageComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent,
    data: {
      header: 'owm',
      title: 'Oregon Wine Merchants: Shipping'
    } as RouteData
  },
  {
    path: 'sundance_wine_cellars',
    component: SundanceWineCellarsComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      header: 'swc',
      title: 'Sundance Wine Cellars: Contact'
    } as RouteData
  },
  {
    path: '',
    component: HeaderOwmComponent,
    outlet: 'header'
  },
  {
    path: '',
    component: HeaderSwcComponent,
    outlet: 'header'
  },
];



// [
//   { path: 'home', children: [
//       { path: '' , component: HeaderSwcComponent, outlet: 'header'},
//       { path: 'home', component: HomeComponent},
//     ]}
// ],


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(swc_routes) ],
})
export class AppRoutingModule {
  // constructor(private router: Router) {
  // }
  //
  // public isRouteActive(route) {
  //   return this.router.isRouteActive(this.router.generate(route))
  // }
}

export interface RouteData {
  header: 'owm' | 'swc';
  title: string;
}

export const defaultRouteData: RouteData = {
  header: 'swc',
  title: 'Sundance Wine Cellars'
};

export function isRouteData(data: any): data is RouteData {
  return data && 'header' in data;
}
