import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultModule } from '../../shared/layouts/default/default.module';
import { HomeComponent } from './home.component';
import { MealsComponent } from './meals/meals.component';

@NgModule({
  declarations: [HomeComponent, MealsComponent],
  imports: [CommonModule, DefaultModule],
  exports: [HomeComponent, MealsComponent],
})
export class HomeModule {}
