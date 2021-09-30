import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {
  CategoriesPageComponent,
  DialogUpdate,
} from './modules/admin/categories-page/categories-page.component';
import { infoReducer } from './store/info/info.reducer';
import { mealsReducer } from './store/meals/meals.reducer';
import { categoriesReducer } from './store/categories/categories.reducer';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MealFormComponent } from './modules/admin/meal-form/meal-form.component';
import { MealsComponent } from './modules/user/meals.component';
import { InfoPageComponent } from './modules/admin/info-page/info-page.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AppComponent } from './app.component';

import { CategoryService } from './services/category.service';
import { MealsService } from './services/meals.service';
import { InfoService } from './services/info.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    MealFormComponent,
    CategoriesPageComponent,
    InfoPageComponent,
    DialogUpdate,
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
    MatDialogModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [CategoryService, MealsService, InfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
