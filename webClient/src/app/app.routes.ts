import { AccountSettingComponent } from './account-setting/account-setting.component';
import { SearchComponent } from 'app/search/search.component';
import { AccountRecoverComponent } from 'app/account-recover/account-recover.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { RouterModule } from '@angular/router';

const routes = [
    {path : '', component : SearchComponent},
    {path : 'account-setting', component : AccountSettingComponent},
    {path : 'account-recover', component : AccountRecoverComponent},
    {path : 'profile', component : ProfileComponent}
];

export default RouterModule.forRoot(routes);