import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-enroll-people',
  templateUrl: './enroll-people.component.html',
  styleUrls: ['./enroll-people.component.scss'],
  imports: [CommonModule],
})
export class EnrollPeopleComponent {
  people: string[] = [];

  addPerson(input: HTMLInputElement) {
    const personName = input.value;
    if (personName) {
      this.people.push(personName);
      input.value = '';
    }
  }
}
