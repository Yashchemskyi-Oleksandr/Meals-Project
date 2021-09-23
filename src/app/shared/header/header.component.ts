import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  info: any = [];

  constructor(public infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getAllInfo().subscribe((i: any) => {
      this.info = i;
      // console.log(i);
    });
  }
}
