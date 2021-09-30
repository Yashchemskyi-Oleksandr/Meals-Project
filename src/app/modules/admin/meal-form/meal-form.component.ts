import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { Meals } from 'src/app/store/meals/meals.model';
import { selectCategories } from 'src/app/store/categories/categories.selector';
import { AppState } from 'src/app/store/app.state';
import { MealsService } from 'src/app/services/meals.service';
import { createMeal, updateMeal } from 'src/app/store/meals/meals.action';
import { Category } from 'src/app/store/categories/categories.model';
import { NotificationService } from 'src/app/services/notification.service';

const firebaseConfig = {
  apiKey: 'AIzaSyBpmt7o_DubuVG4RRQbFRtDWn-IPN8ZMLo',
  authDomain: 'restaurant-d6096.firebaseapp.com',
  projectId: 'restaurant-d6096',
  storageBucket: 'restaurant-d6096.appspot.com',
  messagingSenderId: '841773667881',
  appId: '1:841773667881:web:c19b61817fa0449e54ae38',
  measurementId: 'G-9SMXJZZ2W8',
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
})
export class MealFormComponent implements OnInit {
  categories: Observable<Category[]> = this.store.pipe(
    select(selectCategories)
  );
  meal$: Meals | undefined;
  id: any;
  selectedFile: any = null;
  imgUrl: string = '';
  mealForm: FormGroup;
  progressBar: boolean = false;

  constructor(
    private mealsService: MealsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {
    this.mealForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
      weight: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(6),
      ]),
      price: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      availability: new FormControl(true, [Validators.required]),
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.progressBar = true;
    const storageRef = ref(storage, this.selectedFile.name);
    uploadBytes(storageRef, this.selectedFile).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        this.mealForm.patchValue({ img: url });
      });
      this.progressBar = false;
    });
  }

  saveMeal() {
    if (!this.mealForm.valid) {
      return;
    }
    const data = this.mealForm.value;
    if (this.id) {
      this.mealsService.updateByIdMeal(this.id, { ...data }).subscribe(
        (meal) => {
          this.store.dispatch(
            updateMeal({ updatedMeal: { ...meal, id: this.id } })
          );
          this.notificationService.success('Meal was updated');
          this.router.navigate(['/admin']);
        },
        (error) => {
          const { message } = error.error;
          this.notificationService.error(message);
        }
      );
    } else {
      this.mealsService.createMeal(data).subscribe(
        (meal) => {
          this.store.dispatch(createMeal({ newMeal: meal }));
          this.notificationService.success('Meal was created');
          this.router.navigate(['/admin']);
        },
        (error) => {
          const { message } = error.error;
          this.notificationService.error(message);
        }
      );
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.mealsService.getByIdMeal(this.id).subscribe((meal) => {
        this.meal$ = meal;
        this.mealForm.patchValue(meal);
      });
    }
  }
}
