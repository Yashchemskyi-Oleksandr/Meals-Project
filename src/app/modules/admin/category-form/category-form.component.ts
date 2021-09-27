import { Categories } from './../../../store/categories/categories.model';
import { selectCategories } from './../../../store/categories/categories.selector';
import { AppState } from 'src/app/store/app.state';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { updateCategory } from 'src/app/store/categories/categories.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  public editCategory: any = [];
  id: any;
  categories: Observable<Categories[]>; ////1

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.categories = store.pipe(select(selectCategories)); ////1
  }

  saveCategory(category: any) {
    // get updated data
    this.categoryService
      .updateByIdCategory(this.id, category) ////send to backend
      .subscribe((result) => {
        // when backend aprroev your request
        this.store.dispatch(
          updateCategory({ updatedCategory: { ...category, id: this.id } })
        ); // update localy store
      });

    this.router.navigate(['/admin/categories/']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id) {
      this.categoryService.getCategoryById(this.id).subscribe((ccc) => {
        this.editCategory = ccc;
      });
    }
  }
}
