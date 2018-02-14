import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountSettingRegistrationComponent } from './components/account-setting-registration/account-setting-registration.component';
import { SearchComponent } from './components/search/search.component';
import { AccountRecoverComponent } from './components/account-recover/account-recover.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes = [
    {path : '', component : SearchComponent},
    {path : 'register', component : AccountSettingRegistrationComponent},
    {path : 'account-setting/:id', component : AccountSettingRegistrationComponent},
    {path : 'account-recover', component : AccountRecoverComponent},
    {path : 'profile', component : ProfileComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class Router {}
export const routingComponets = [AccountSettingRegistrationComponent, SearchComponent, AccountRecoverComponent, ProfileComponent]