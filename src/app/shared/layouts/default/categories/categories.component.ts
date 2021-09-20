import { Component, OnInit } from '@angular/core';
// interface dataTypes{
//   categoryName:string
// }
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';

// import { mock } from 'src/app/modules/home/meals/meals.mock';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories: any = [];
  constructor(private Categories: CategoryService) {}

  ngOnInit(): void {
    this.Categories.getCategories().subscribe((response) => {
      this.categories = response;
      console.log(response);
    });
  }
}
