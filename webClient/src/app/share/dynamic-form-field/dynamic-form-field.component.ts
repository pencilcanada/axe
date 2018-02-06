import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-field',
  template: `
    <input type="text" [(ngModel)]="this.fieldValue" placeholder="{{this.fieldData.field}}"/>
    <span *ngIf="this.validationMessageShow">{{this.validationMessage}}</span>
  `,
  styleUrls: []
})
export class DynamicFormFieldComponent implements OnInit {

  @Input() fieldData;
  public fieldValue;
  public fieldName;

  public validationMessageShow = false;
  public validationMessage = '';

  constructor() {}

  ngOnInit() {
      this.fieldValue = this.fieldData.data;
      this.fieldName = this.fieldData.field;
  }

  public validate(): boolean {
    this.hideValidationMessage();

    // empty check
    if (this.fieldData.require &&  !this.fieldValue) {
      this.validationMessage = this.fieldName + ' is required';
      return false;
    }
    // max length check // TODO::
    console.log(this.fieldValue.length >  Number(this.fieldData.maxLength));
    if (this.fieldValue.length >  Number(this.fieldData.maxLength)) {
      this.validationMessage = this.fieldName + ' can not be more than ' + this.fieldData.maxLength;
      console.log(this.fieldValue.length);
      return false;
    }

    // regex check
    const regex: RegExp = new RegExp(this.fieldData.regex);
    if (!regex.test(this.fieldValue)) {
      this.validationMessage = 'Invalid Format for ' + this.fieldName;
      return false;
    }



    return true;
  }

  public hideValidationMessage(): void {
    this.validationMessageShow = false;
    this.validationMessage = '';
  }

  public displayValidtionMessage(): void {
    this.validationMessageShow = true;
  }

  public getFieldValue(): any {
    return  { [this.fieldName] : this.fieldValue };
  }

}
