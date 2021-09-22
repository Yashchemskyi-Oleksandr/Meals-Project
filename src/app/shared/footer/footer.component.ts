import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  info: any = [];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllInfo().subscribe((i: any) => {
      this.info = i;
      // console.log(i);
    });
  }
}
