import { Component, OnInit } from '@angular/core';
// interface dataTypes{
//   categoryName:string
// }
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

// import { mock } from 'src/app/modules/home/meals/meals.mock';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  // data = mock;
  public data: any = [];
  constructor(private Categories: ApiService) {}

  ngOnInit(): void {
    this.Categories.getCategories().subscribe((response) => {
      this.data = response;
      console.log(response);
    });
    // console.log(this.data);
  }
}
