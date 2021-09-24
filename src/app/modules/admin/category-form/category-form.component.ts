import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  public editCategory: any = [];
  id: any;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  saveCategory(category: any) {
    this.categoryService
      .updateByIdCategory(this.id, category)
      .subscribe((result) => {
        console.log('resultSubscribe', result);
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
