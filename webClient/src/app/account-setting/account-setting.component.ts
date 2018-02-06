import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { DynamicFormComponent } from '../share/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})

export class AccountSettingComponent implements OnInit {

    @ViewChild(DynamicFormComponent) form;

    public id;

    public mock_data = {

        "id"   		        : "10101",
        "firstName" 		: "Joe",
        "lastName"   		: "Doh",
        "email"      		: "joeDoh@gmail.com",
        "userName"   		: "JoeDoh",
        "passWord"   		: "xe23r24ef224ewwf9023f39sdvs",
        "isTeacherUser"     : "true"

    };

    public formatMap = [

        {
            "field"         : "firstName",
            "type"          : "text",
            "regex"         : "/^[a-zA-Z ]$/",
            "require"       : "true",
            "maxlength"     : "5"
        },
        {
            "field"         : "lastName",
            "type"          : "text",
            "regex"         : "/^[a-zA-Z ]$/",
            "require"       : 'true',
            "maxlength"     : "30"
        },
        {
            "field"         : "email",
            "type"          : "text",
            "regex"         : "/^[a-zA-Z ]{2,30}$/",
            "require"       : "true",
            "maxlength"     : "30"
        },
        {
            "field"         : "userName",
            "type"          : "text",
            "regex"         : "/^[a-zA-Z ]{2,30}$/;",
            "require"       : "true",
            "maxlength"     : "30"
        },
        {
            "field"         : "passWord",
            "type"          : "text",
            "regex"         : "/^[a-zA-Z ]{2,30}$/",
            "require"       : "true",
            "maxlength"     : "30"
        }
    ];


  constructor(private route: ActivatedRoute) {
    this.id = route.params.map((p: any) => p.id);
    // console.log(this.id);
  }

  ngOnInit() {}


  public onSave() {
      if (this.form.validate()) {
        this.form.getFormData();
      }
  }
}
