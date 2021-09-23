import { MealFormComponent } from './modules/admin/meal-form/meal-form.component';
import { MealsComponent } from './modules/user/meals.component';
import { AdminComponent } from './modules/admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '',
    component: MealsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
