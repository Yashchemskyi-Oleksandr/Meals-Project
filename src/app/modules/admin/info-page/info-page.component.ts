import { router } from './../../../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { updateInfo } from './../../../store/info/info.action';
import { selectInfo } from './../../../store/info/info.selector';
import { AppState } from 'src/app/store/app.state';
import { InfoService } from 'src/app/services/info.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  myForm: any = FormGroup;
  info: any = [];
  id: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private infoService: InfoService,
    private store: Store<AppState>
  ) {
    this.info = store.pipe(select(selectInfo));
  }

  saveInfo(value: any) {
    console.log('dsfa', value);
    this.infoService.updateInfoById(value).subscribe((res) => {
      console.log('resrersers', res);

      this.store.dispatch(updateInfo({ updatedInfo: { ...value } }));
    });
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

    // this.myForm = this.fb.group({
    //   contacts: [],
    //   wiFi: [],
    //   address: [],
    // });

    this.infoService.getAllInfo().subscribe((i: any) => {
      this.info = i;
      console.log(i);
    });
  }

  updateInfo(): void {
    console.log(this.myForm.value);
  }
}
