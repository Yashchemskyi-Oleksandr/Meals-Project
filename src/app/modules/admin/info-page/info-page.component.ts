import { router } from './../../../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { updateInfo } from './../../../store/info/info.action';
import { selectInfo } from './../../../store/info/info.selector';
import { AppState } from 'src/app/store/app.state';
import { InfoService } from 'src/app/services/info.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Info } from 'src/app/store/info/info.model';
import { Observable } from 'rxjs';

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
    private store: Store<AppState>
  ) {
    this.infoForm = new FormGroup({
      wiFi: new FormControl('', [Validators.required]),
      contacts: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(13),
      ]),
      address: new FormControl('', [Validators.required]),
    });
  }

  saveInfo() {
    if (!this.infoForm.valid) {
      return;
    }
    const updatedInfo = this.infoForm.value;
    this.infoService.updateInfo(updatedInfo).subscribe((response: Info) => {
      this.store.dispatch(updateInfo({ updatedInfo: response }));
    });

    this.router.navigate(['/admin']);
  }

  ngOnInit(): void {
    this.info$.subscribe((data) => this.infoForm.patchValue(data));
  }
}
