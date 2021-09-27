import { Component, NgModule, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Info } from 'src/app/store/info/info.model';
import { selectInfo } from 'src/app/store/info/info.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  info: Observable<Info> = this.store.pipe(select(selectInfo));

  constructor(private store: Store<AppState>) {}
}
