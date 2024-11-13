import { Component } from '@angular/core';
import { ClickMeComponent } from '../click-me/click-me.component';
import { KeyupComponent } from '../keyup/keyup.component';
import { LoopBackComponent } from '../loop-back/loop-back.component';
import { KeyFilteringComponent } from '../key-filtering/key-filtering.component';
import { WithBlurComponent } from '../with-blur/with-blur.component';
import { EnrollPeopleComponent } from '../enroll-people/enroll-people.component';

@Component({
  standalone: true,
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
  imports: [
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    KeyFilteringComponent,
    WithBlurComponent,
    EnrollPeopleComponent,
  ],
})
export class UserInputComponent {}
