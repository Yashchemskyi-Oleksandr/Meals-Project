import { MealsComponent } from './modules/user/meals.component';
import { AdminComponent } from './modules/admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const router: Routes = [
  {
    path: '',
    component: MealsComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
