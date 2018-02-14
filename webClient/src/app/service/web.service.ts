import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export class WebService {

    private API_URL = environment.API_URL;

    constructor() {}

    // mocking data now
    public getAccountById(id: string): any {
        return {
            "id"   		        : "10101",
            "firstName" 		: "Joe",
            "lastName"   		: "Doh",
            "email"      		: "joeDoh@gmail.com",
            "userName"   		: "JoeDoh",
            "passWord"   		: "xe23r24ef224ewwf9023f39sdvs",
            "isTeacherUser"     : "true"
        };
    }

    // should be only call by ngRx Store, not the view directly
    public postAccount(payload: any): void {
        // post Account with back end;
        console.log(payload);
    }

}
