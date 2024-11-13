import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loop-back',
  templateUrl: './loop-back.component.html',
  styleUrls: ['./loop-back.component.scss'],
})
export class LoopBackComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onKeyPress(e: KeyboardEvent) {
    //nada
  }
}
