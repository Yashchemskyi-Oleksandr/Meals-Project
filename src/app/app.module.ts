import { categoriesReducer } from './store/categories/categories.reducer';
import { mealsReducer } from './store/meals/meals.reducer';
import { MealFormComponent } from './modules/admin/meal-form/meal-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MealsComponent } from './modules/user/meals.component';
import { MealsService } from './services/meals.service';
import { CategoryService } from './services/category.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { InfoService } from './services/info.service';
import { AdminComponent } from './modules/admin/admin.component';
import { CategoriesPageComponent } from './modules/admin/categories-page/categories-page.component';
import { CategoryFormComponent } from './modules/admin/category-form/category-form.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InfoPageComponent } from './modules/admin/info-page/info-page.component';
import { infoReducer } from './store/info/info.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    MealFormComponent,
    CategoriesPageComponent,
    CategoryFormComponent,
    InfoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      categories: categoriesReducer,
      meals: mealsReducer,
      info: infoReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, autoPause: true }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [CategoryService, MealsService, InfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
