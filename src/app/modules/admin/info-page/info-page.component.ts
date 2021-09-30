import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { updateInfo } from 'src/app/store/info/info.action';
import { selectInfo } from 'src/app/store/info/info.selector';
import { AppState } from 'src/app/store/app.state';
import { InfoService } from 'src/app/services/info.service';
import { Info } from 'src/app/store/info/info.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  infoForm: FormGroup;
  info$: Observable<Info> = this.store.pipe(select(selectInfo));
  openModal: boolean = false;

  constructor(
    private router: Router,
    private infoService: InfoService,
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {
    this.infoForm = new FormGroup({
      wiFi: new FormControl('', [Validators.required]),
      contacts: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      address: new FormControl('', [Validators.required]),
    });
  }

  saveInfo() {
    if (!this.infoForm.valid) {
      return;
    }
    const updatedInfo = this.infoForm.value;
    this.infoService.updateInfo(updatedInfo).subscribe(
      (response: Info) => {
        this.store.dispatch(updateInfo({ updatedInfo: response }));
        this.notificationService.success('Info was updated');
        this.router.navigate(['/admin']);
      },
      (error) => {
        const { message } = error.error;
        this.notificationService.error(message);
      }
    );
  }

  ngOnInit(): void {
    this.info$.subscribe((data) => this.infoForm.patchValue(data));
  }
}
