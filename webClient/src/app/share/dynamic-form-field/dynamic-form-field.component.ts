import { Component, OnInit, Input, Output } from '@angular/core';
import { UtilsHelper } from '../../UtilsHelper/utils-helper';

@Component({
  selector: 'app-dynamic-form-field',
  template: `
    <input type="text" [ngModel]="this.fieldValue" (ngModelChange)="onKeyup($event)"
                       placeholder="{{this.fieldName}}"
                       [ngClass]="{'error': this.validationMessageShow }"/>
    <span *ngIf="this.validationMessageShow" class="error-message">{{this.validationMessage}}</span>
  `,
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements OnInit {

  @Input() fieldData;

  public fieldValue;
  public fieldKey;
  public fieldName;
  public validationMessageShow = false;
  public validationMessage = '';

  constructor() {}

  ngOnInit() {
      this.fieldValue = this.fieldData.data;
      this.fieldKey = this.fieldData.key;
      this.fieldName = this.fieldData.name;
  }

  public onKeyup(e): void {
    this.fieldValue = e;
    this.validationMessageShow = false;
  }

  public validate(): boolean {
    this.hideValidationMessage();

    // empty check
    if (!UtilsHelper.isEmptyOrUndefined(this.fieldData.require) &&  !this.fieldValue) {
      this.validationMessage = this.fieldName + ' is required';
      return false;
    }
    // max length check
    if (!UtilsHelper.isEmptyOrUndefined(this.fieldData.maxLength) && (this.fieldValue.length >  Number(this.fieldData.maxLength))) {
      this.validationMessage = this.fieldName + ' can not be more than ' + this.fieldData.maxLength + ' charators';
      return false;
    }
    // max length check
    if (!UtilsHelper.isEmptyOrUndefined(this.fieldData.minLength) && (this.fieldValue.length <  Number(this.fieldData.minLength))) {
      this.validationMessage = this.fieldName + ' can not be less than ' + this.fieldData.minLength + ' charators';
      return false;
    }
    // regex check
    const regex: RegExp = new RegExp(this.fieldData.regex);
    if (!UtilsHelper.isEmptyOrUndefined(this.fieldData.regex) && !regex.test(this.fieldValue)) {
      this.validationMessage = 'Invalid format for ' + this.fieldName;
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

  public getFieldValue(): Object {
    return  { 'key' : this.fieldKey, 'value' : this.fieldValue };
  }

}
