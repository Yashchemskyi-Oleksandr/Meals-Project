import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultComponent } from './default.component';
import { MealsComponent } from 'src/app/modules/home/meals/meals.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    CategoriesComponent
  ],
  imports: [
  CommonModule
  ],
  exports: [
    DefaultComponent,
    CategoriesComponent
  ]
})
export class DefaultModule { }
