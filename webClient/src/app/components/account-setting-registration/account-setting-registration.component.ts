import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { DynamicFormComponent } from '../../share/dynamic-form/dynamic-form.component';
import { AccountSettingRegistrationSchema } from './account-setting-registration.component.schema';
import { WebService } from '../../service/web.service';

@Component({
  selector: 'app-account-setting-registration',
  templateUrl: './account-setting-registration.component.html',
  styleUrls: ['./account-setting-registration.component.css']
})

export class AccountSettingRegistrationComponent implements OnInit {

    @ViewChild(DynamicFormComponent) form;

    public accountId: string;
    private hasAccount: boolean;
    public model: any;
    public format: any;

  constructor(private route: ActivatedRoute, private webService: WebService) {
    const id: string = this.route.snapshot.params.id;
    this.hasAccount = this.checkHasAccount(id, this.route.snapshot.routeConfig.path);
    if (this.hasAccount) {
        this.accountId = id;
    }
  }

  ngOnInit() {
    if (!this.hasAccount) {
        this.model = AccountSettingRegistrationSchema.schema();
        this.format = AccountSettingRegistrationSchema.registrationFormat();
    } else {
        this.model = this.webService.getAccountById(this.accountId);
        this.format = AccountSettingRegistrationSchema.accountSettingFormat();
    }
  }

  private checkHasAccount(id: string, path: string): boolean {
    return path.indexOf('register') === -1 && id !== undefined;
  }

  public onSave() {
      if (this.form.validate()) {
        // hock up ngRx store with state : 'update', and payload data
        // replace this later
        this.webService.postAccount(this.form.getFormData());
      }
  }
}
