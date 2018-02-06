import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { UtilsHelper } from '../../UtilsHelper/utils-helper';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-dynamic-form',
  template: `
    <div *ngFor="let field of this.formData">
       <app-dynamic-form-field [fieldData]="field"></app-dynamic-form-field>
    </div>

  `,
  styles: []
})
export class DynamicFormComponent implements OnInit , AfterViewInit {

  @ViewChildren(DynamicFormFieldComponent) formFields: QueryList<DynamicFormFieldComponent>;
  @Input() dataObj;
  @Input() dataFormatObj;

  public formData;

  constructor() { }

  ngOnInit() {
      this.formData = UtilsHelper.frebicateFormData(this.dataObj, this.dataFormatObj);
  }

  ngAfterViewInit() {}

  public validate(): boolean {
    let validation = true;
    let skipValidation = false;
    this.formFields.forEach(field => {
        if (!field.validate() && !skipValidation) {
          skipValidation = true;
          field.displayValidtionMessage();
          validation = false;
        }
    });
    return validation;
  }

  public getFormData(): any {
    this.formFields.forEach(field => field.getFieldValue());
  }

}
