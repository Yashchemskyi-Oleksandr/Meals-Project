// import { CategoryService } from 'src/app/services/category.service';
// import { MealsService } from './../../../services/meals.service';
// import { Component, OnInit } from '@angular/core';
// import {
//   Router,
//   Event,
//   NavigationStart,
//   NavigationEnd,
//   NavigationError,
// } from '@angular/router';

// // import { mock } from './meals.mock';
// // import { ApiService } from 'src/app/api.service';
// import { ActivatedRoute } from '@angular/router';
// import { Dishes } from 'src/app/interface/dishes';
// import { RouterModule, Route } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

// @Component({
//   selector: 'app-meals',
//   templateUrl: './meals.component.html',
//   styleUrls: ['./meals.component.scss'],
// })
// export class MealsComponent implements OnInit {
//   public meals: any = [];
//   public categories: any = [];
//   public category: any;
//   // public filteredMeals: any = [];
//   public id: any = '';
//   title = 'detect-route-change';
//   currentRoute: string;
//   categoryId: string = '';
//   public filteredMeals = new BehaviorSubject<any[]>([]);

//   constructor(
//     public activateRoute: ActivatedRoute,
//     public router: Router,
//     public mealsService: MealsService,
//     public categoryService: CategoryService
//   ) {
//     this.currentRoute = '';
//     this.router.events.subscribe((event: Event) => {
//       if (event instanceof NavigationStart) {
//         // Show progress spinner or progress bar
//       }

//       ///////////////////////////////////////////////////

//       if (event instanceof NavigationEnd) {
//         // Hide progress spinner or progress bar

//         const catId = activateRoute.snapshot.params['categoryId'];
//         this.categoryId = catId;
//         console.log(this.categoryId);

//         if (this.categoryId) {
//           console.log('qwdqddasdadasdada');

//           this.mealsService.getMeals(this.categoryId).subscribe((allMeals) => {
//             console.log(allMeals);

//             this.meals = allMeals;
//             this.filteredMeals.next(allMeals as any);
//             console.log(this.filteredMeals);
//             // return this.filteredMeals.asObservable();
//           });
//         }

//         this.currentRoute = event.url;
//         console.log(event);
//         console.log('Route change detected');
//         console.log(this.filteredMeals);
//       }

//       ///////////////////////////////////////////////////

//       if (event instanceof NavigationError) {
//         // Hide progress spinner or progress bar

//         // Present error to user
//         console.log(event.error);
//       }
//     });
//   }

//   ///////////////////////////////////////////////////

//   onClickCategory(categoryId: string) {
//     console.log(categoryId);

//     this.filteredMeals = this.meals.filter((meal: any) => {
//       console.log(meal);

//       meal.categoryId === categoryId;
//     });
//     console.log(this.filteredMeals);
//   }

//   ///////////////////////////////////////////////////

//   ngOnInit(): void {
//     console.log('dwedwq');

//     this.mealsService.getMeals().subscribe((allMeals) => {
//       this.meals = allMeals;
//       console.log(this.meals);

//       // this.filteredMeals = allMeals;
//       // console.log(this.filteredMeals);
//     });

//     ///////////////////////////////////////////////////

//     this.categoryService.getCategories().subscribe((cat) => {
//       this.categories = cat;
//       console.log(cat);
//     });

//     ///////////////////////////////////////////////////

//     this.mealsService
//       .getMealsByCategories(this.id)
//       .subscribe((mealsCat: any) => {
//         console.log(mealsCat);
//         this.filteredMeals = mealsCat;
//         console.log(this.filteredMeals);
//       });
//   }
// }

////////// mealsServise

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// export interface Dishes {
//   img: string;
//   name: string;
//   description: string;
//   weight: string;
//   price: string;
//   categoryId: string;
//   availability: boolean;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class MealsService {
//   // constructor(private http: HttpClient) {}
//   // public meals: any = [];
//   //   getMeals() {
//   //     let url = 'http://localhost:7000/api/meals';
//   //     return this.http.get(url).subscribe((response) => {
//   //       this.meals = response;
//   //     });
//   //   }

//   constructor(private http: HttpClient) {}

//   getMeals(catId?: string): Observable<Dishes[]> {
//     let url = 'http://localhost:7000/api/meals';

//     if (catId) {
//       url += `?categoryId=${catId}`;
//     }

//     return this.http.get<Dishes[]>(url);
//   }

//   getMealsByCategories(id: string): Observable<Dishes[]> {
//     let url = `http://localhost:7000/api/meals/:${id}`;
//     return this.http.get<Dishes[]>(url);
//   }
// }
