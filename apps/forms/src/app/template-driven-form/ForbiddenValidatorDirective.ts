import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true,
    },
  ],
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  constructor() {
    this.forbiddenName = '';
  }

  validate(control: AbstractControl): { [key: string]: unknown } | null {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: unknown } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
