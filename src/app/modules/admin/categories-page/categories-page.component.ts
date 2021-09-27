import { createCategory } from './../../../store/categories/categories.action';
import { AppState } from 'src/app/store/app.state';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCategories } from 'src/app/store/categories/categories.selector';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/store/categories/categories.model';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit {
  categories: Observable<Categories[]>;

  constructor(
    private categoryService: CategoryService,
    private store: Store<AppState>
  ) {
    this.categories = store.pipe(select(selectCategories));
  }

  create(data: any) {
    //  have only { catNam: ' someNa,me}
    this.categoryService.createCategory(data).subscribe((category) => {
      this.store.dispatch(createCategory({ newCategory: category }));
    });
  }

  ngOnInit(): void {}
}
