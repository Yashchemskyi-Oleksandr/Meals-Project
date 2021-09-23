import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  info: any = [];

  constructor(info: InfoService) {}

  ngOnInit(): void {
    this.info.getAllInfo().subscribe((information: string) => {
      this.info = information;
      console.log(information);
    });
  }
}
