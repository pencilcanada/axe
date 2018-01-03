import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import appRoutes from 'app/app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountRecoverComponent } from './account-recover/account-recover.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { DynamicFormComponent } from './share/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountRecoverComponent,
    AccountSettingComponent,
    ProfileComponent,
    SearchComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
