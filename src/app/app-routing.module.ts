import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/core/shared/layout/layout.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      {
        path: "", redirectTo: "home", pathMatch: "full"
      },
      {
        path: "home", loadChildren: ()=>import("./modules/home/home.module").then(module=>module.HomeModule).catch(error=>console.log("Home: ", error))
      },
      {
        path: "eshop", loadChildren: ()=>import("./modules/eshop/eshop.module").then(module=>module.EshopModule).catch(error=>console.log("Eshop: ", error))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
