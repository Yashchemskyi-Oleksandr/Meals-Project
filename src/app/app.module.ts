import { MealsComponent } from 'src/app/modules/home/meals/meals.component';
import { MealsService } from './services/meals.service';
import { CategoryService } from './services/category.service';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
// import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { CategoriesComponent } from './shared/layouts/default/categories/categories.component';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: '', component: MealsComponent },
      { path: 'meals/:categoryId', component: MealsComponent },
      { path: '', component: CategoriesComponent },
    ]),
  ],
  providers: [CategoryService, MealsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
