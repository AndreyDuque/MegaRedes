import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    SliderComponent
  ]
})
export class HomeModule { }
