import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    ScrollToModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
