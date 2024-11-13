import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [UserInputComponent, TemplateDrivenFormComponent],
})
export class AppComponent {
  title = 'app';
}
