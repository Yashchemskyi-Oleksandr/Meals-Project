import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  info: any = [];

  constructor(public infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getAllInfo().subscribe((i: any) => {
      this.info = i;
      // console.log(i);
    });
  }
}
