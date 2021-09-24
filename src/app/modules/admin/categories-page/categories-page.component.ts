import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit {
  public categories: any = [];
  public newCategory: any = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  onSubmit(data: any) {
    this.categoryService.createCategory(data).subscribe((category) => {
      this.newCategory = category;
      console.log(this.newCategory);
    });
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((cat) => {
      this.categories = cat;
      console.log(cat);
    });
  }
}
