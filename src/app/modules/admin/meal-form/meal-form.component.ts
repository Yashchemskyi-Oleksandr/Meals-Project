import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meals } from 'src/app/store/meals/meals.model';
import { selectCategories } from './../../../store/categories/categories.selector';
import { AppState } from 'src/app/store/app.state';
import { MealsService } from 'src/app/services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createMeal, updateMeal } from 'src/app/store/meals/meals.action';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/store/categories/categories.model';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
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
  categories: Observable<Categories[]> = this.store.pipe(
    select(selectCategories)
  );
  meal$: Meals | undefined;
  id: any;
  selectedFile: any = null;
  imgUrl: string = '';
  mealForm: FormGroup;

  constructor(
    private http: HttpClient,
    private mealsService: MealsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.mealForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      availability: new FormControl(true, [Validators.required]),
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const storageRef = ref(storage, this.selectedFile.name);
    uploadBytes(storageRef, this.selectedFile).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
      getDownloadURL(storageRef).then((url) => {
        console.log('url', url);
        this.imgUrl = url;
      });
    });
  }

  saveMeal() {
    const data = this.mealForm.value;
    if (this.id) {
      this.mealsService
        .updateByIdMeal(this.id, { ...data })
        .subscribe((meal) => {
          console.log('resultSubscribe', meal);
          this.store.dispatch(
            updateMeal({ updatedMeal: { ...meal, id: this.id } })
          );
        });
    } else {
      this.mealsService.createMeal(data).subscribe((meal) => {
        console.log('result', meal);
        this.store.dispatch(createMeal({ newMeal: meal }));
      });
    }
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id____', this.id);

    if (this.id) {
      this.mealsService.getByIdMeal(this.id).subscribe((meal) => {
        this.meal$ = meal;
        this.mealForm.patchValue(meal);
      });
    }
  }
}
