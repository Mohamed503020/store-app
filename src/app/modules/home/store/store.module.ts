import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreLandpageComponent } from './store-landpage/store-landpage.component';
import { StoreHomeComponent } from './pages/store-home/store-home.component';


@NgModule({
  declarations: [
    StoreLandpageComponent,
    StoreHomeComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
