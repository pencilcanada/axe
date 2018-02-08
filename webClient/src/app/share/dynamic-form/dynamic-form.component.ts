import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { DynamicFormFieldComponent } from '../dynamic-form-field/dynamic-form-field.component';
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
export class DynamicFormComponent implements OnInit  {

  @Input() dataObj;
  @Input() formatObj;
  @ViewChildren(DynamicFormFieldComponent) formFields: QueryList<DynamicFormFieldComponent>;

  public formData;

  constructor() { }

  ngOnInit() {
      this.formData = this.parseDataFromFormat(this.dataObj, this.formatObj);
  }

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
    this.dataObj = this.getUpdateDataObjFromFields(this.dataObj);
    return this.dataObj;
  }

  private getUpdateDataObjFromFields(data: any): any {
    this.formFields.forEach(field => {
      const key = field.getFieldValue()['key'];
      const value = field.getFieldValue()['value'];
      for (const property in data) {
        if ( property === key) {
          data[property] = value;
        }
      }
    });
    return data;
  }

  // tslint:disable-next-line:member-ordering
  private parseDataFromFormat (data: Object, format: any): any {
    const formData: any = [];
    // tslint:disable-next-line:forin
    for ( const i in format) {
        const formatObj = format[i];
        inner: for (const property in data) {
            if (property === formatObj.key) {
                const formatedData = formatObj;
                formatedData.data = data[formatObj.key];
                formData.push(formatedData);
                break inner;
            }
        }
    }
    return formData;
  }

}
