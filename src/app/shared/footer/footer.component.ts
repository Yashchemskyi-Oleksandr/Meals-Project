import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectInfo } from 'src/app/store/info/info.selector';
import { AppState } from 'src/app/store/app.state';
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
