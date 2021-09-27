import { selectInfo } from 'src/app/store/info/info.selector';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { InfoService } from 'src/app/services/info.service';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Info } from 'src/app/store/info/info.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  info: Observable<Info> = this.store.pipe(select(selectInfo));

  constructor(private store: Store<AppState>) {}
}
