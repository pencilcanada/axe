import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})

export class AccountSettingComponent implements OnInit {

    public id;

    mock_data = {

        "id"   		    : "10101",
        "firstName" 		: "John",
        "lastName"   		: "Doh",
        "email"      		: "johnDoh@gmail.com",
        "userName"   		: "JohnDoh",
        "passWord"   		: "xe23r24ef224ewwf9023f39sdvs",
        "isTeacherUser"   : "true"

    };

    formatMap = [

        {
            "field"         : "firstName",
            "type"          : "text",
            "regex"         : "[a-Z]",
            "require"       : "true",
            "maxlength"     : "30"
        },
        {
            "field"         : "lastName",
            "type"          : "text",
            "regex"         : "[a-Z]",
            "require"       : "true",
            "maxlength"     : "30"
        },
        {
            "field"         : "email",
            "type"          : "text",
            "regex"         : "[a-Z]",
            "require"       : "true",
            "maxlength"     : "30"
        },
        {
            "field"         : "userName",
            "type"          : "text",
            "regex"         : "[a-Z]",
            "require"       : "true",
            "maxlength"     : "30"
        },
        {
            "field"         : "passWord",
            "type"          : "text",
            "regex"         : "[a-Z]",
            "require"       : "true",
            "maxlength"     : "30"
        },
    ];


  constructor(private route:ActivatedRoute) {
    this.id = route.params.map((p:any) => p.id);
    console.log(this.id);
  }

  ngOnInit() {}

}
