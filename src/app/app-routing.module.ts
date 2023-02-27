import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubpageComponent} from './subpage/subpage.component';
import {ShippingComponent} from './shipping/shipping.component';
import {SundanceWineCellarsComponent} from './sundance-wine-cellars/sundance-wine-cellars.component';
import {OwmComponent} from './owm/owm.component';
import {ContactComponent} from './contact/contact.component';
// import {HeaderOwmComponent} from './header-owm/header-owm.component';
// import {HeaderSwcComponent} from './header-swc/header-swc.component';


const swc_routes: Routes = [
  {
    path: '',
    component: OwmComponent,
    pathMatch: 'full',
    data: {
      header: 'owm',
      title: 'Oregon Wine Merchants'
    } as RouteData
  },
  {
    path: 'owm',
    component: OwmComponent,
    data: {
      header: 'owm',
      title: 'Oregon Wine Merchants'
    } as RouteData
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
      title: 'Oregon Wine Merchants: Shipping',
      showShippingCallout: false
    } as RouteData
  },
  {
    path: 'sundance_wine_cellars',
    component: SundanceWineCellarsComponent,
    data: {
      header: 'swc',
      title: 'Sundance Wine Cellars'
    } as RouteData
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      header: 'swcandowm',
      title: 'Sundance Wine Cellars: Contact'
    } as RouteData
  },
  // {
  //   path: '',
  //   component: HeaderOwmComponent,
  //   outlet: 'header'
  // },
  // {
  //   path: '',
  //   component: HeaderSwcComponent,
  //   outlet: 'header'
  // },
];



// [
//   { path: 'owm', children: [
//       { path: '' , component: HeaderSwcComponent, outlet: 'header'},
//       { path: 'owm', component: OwmComponent},
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
  header: 'owm' | 'swc' | 'swcandowm';
  title: string;
  showShippingCallout: boolean;
}

export const defaultRouteData: RouteData = {
  header: 'swc',
  title: 'Sundance Wine Cellars',
  showShippingCallout: true
};

export function isRouteData(data: any): data is RouteData {
  return data && 'header' in data;
}
