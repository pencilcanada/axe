import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <p>
      dynamic-form works!
    </p>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {

  @Input() dataObj;
  @Input() dataFormatObj;

  constructor() { }

  ngOnInit() {

      let formData = this.frebicateFormData(this.dataObj, this.dataFormatObj);
      console.log(this.dataFormatObj);

  }

    frebicateFormData(dataObj, dataFormatObj){
        let formData = { "oo" : "yeah" };
        return formData;
    };

}
