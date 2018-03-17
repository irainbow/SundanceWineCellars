import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubpageComponent} from './subpage/subpage.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'subpage', component: SubpageComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
