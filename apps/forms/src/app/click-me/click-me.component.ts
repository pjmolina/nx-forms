import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss'],
})
export class ClickMeComponent {
  mensaje = '';

  pulsado() {
    this.mensaje += 'Pulsado. ';
  }
}
