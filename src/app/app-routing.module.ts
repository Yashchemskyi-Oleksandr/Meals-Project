import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPageComponent } from './modules/admin/info-page/info-page.component';
import { MealFormComponent } from './modules/admin/meal-form/meal-form.component';
import { MealsComponent } from './modules/user/meals.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CategoriesPageComponent } from './modules/admin/categories-page/categories-page.component';

export const router: Routes = [
  {
    path: 'admin/new-meal',
    component: MealFormComponent,
  },
  {
    path: 'admin/edit-meal/:id',
    component: MealFormComponent,
  },
  {
    path: 'admin/categories',
    component: CategoriesPageComponent,
  },
  {
    path: 'admin/info',
    component: InfoPageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'meals/:categoryId',
    component: MealsComponent,
  },
  {
    path: 'meals',
    component: MealsComponent,
  },
  {
    path: '',
    redirectTo: '/meals',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
