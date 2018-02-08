import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { DynamicFormComponent } from '../../share/dynamic-form/dynamic-form.component';

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
            "name"          : "First Name",
            "key"           : "firstName",
            "type"          : "text",
            "regex"         : "^[a-zA-Z ,.'-]+$",
            "require"       : "true",
            "maxLength"     : "30"
        },
        {
            "name"          : "Last Name",
            "key"           : "lastName",
            "type"          : "text",
            "regex"         : "^[a-zA-Z ,.'-]+$",
            "require"       : 'true',
            "maxLength"     : "30"
        },
        {
            "name"          : "Email",
            "key"           : "email",
            "type"          : "text",
            "regex"         : "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
            "require"       : "true",
            "maxLength"     : "40"
        },
        {
            "name"          : "User Name",
            "key"           : "userName",
            "type"          : "text",
            "regex"         : "^[a-zA-Z0-9]+$",
            "require"       : "true",
            "maxLength"     : "30"
        },
        {
            "name"          : "Password",
            "key"           : "passWord",
            "type"          : "text",
            "require"       : "true",
            "maxLength"     : "50",
            "minLength"     : "8"
        }
    ];


  constructor(private route: ActivatedRoute) {
    this.id = route.params.map((p: any) => p.id);
    // console.log(this.id);
  }

  ngOnInit() {}


  public onSave() {
      if (this.form.validate()) {
        // TODO :: hock up ngRx Store
        console.log(this.form.getFormData());
      }
  }
}
