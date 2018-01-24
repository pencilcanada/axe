import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { SearchComponent } from 'app/search/search.component';
import { AccountRecoverComponent } from 'app/account-recover/account-recover.component';
import { ProfileComponent } from 'app/profile/profile.component';


const routes = [
    {path : '', component : SearchComponent},
    {path : 'register', component : AccountSettingComponent},
    {path : 'account-setting/:id', component : AccountSettingComponent},
    {path : 'account-recover', component : AccountRecoverComponent},
    {path : 'profile', component : ProfileComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class Router{}
export const routingComponets = [AccountSettingComponent, SearchComponent, AccountRecoverComponent, ProfileComponent]