import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreLandpageComponent } from './store-landpage/store-landpage.component';
import { StoreHomeComponent } from './pages/store-home/store-home.component';

const routes: Routes = [
  {
    path:'',component:StoreLandpageComponent,
    children:[

        {
          path:'',component:StoreHomeComponent,
        },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
