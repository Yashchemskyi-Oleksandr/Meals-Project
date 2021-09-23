import { MealFormComponent } from './modules/admin/meal-form/meal-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MealsComponent } from './modules/user/meals.component';
import { MealsService } from './services/meals.service';
import { CategoryService } from './services/category.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ActivatedRoute } from '@angular/router';
import { InfoService } from './services/info.service';
import { AdminComponent } from './modules/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    MealFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   // { path: '', component: MealsComponent },
    //   { path: 'meals/:categoryId', component: MealsComponent },
    //   // { path: '', component: CategoriesComponent },
    //   { path: 'admin', component: AdminComponent },
    // ]),
  ],
  providers: [CategoryService, MealsService, InfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
