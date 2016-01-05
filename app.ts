import { Component } from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import { 
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup
} from 'angular2/common';

@Component({
  selector: 'demo-form',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'partials/demo-form.html'
})
export class DemoForm{
  myForm: ControlGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['ABC123']
    })
  }
  
  onSubmit(value: string): void {
    console.log('You have Submitted Value', value);
  }
}
bootstrap(DemoForm);
