export class AccountSettingRegistrationSchema {


    static schema(): any {
        return {
            'id'   		        : '',
            'firstName' 		: '',
            'lastName'   		: '',
            'email'      		: '',
            'userName'   		: '',
            'passWord'   		: '',
            'isTeacherUser'     : ''
        };
    }

    static registrationFormat(): any {
        return [
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
                "regex"         : "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
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
                "regex"         : "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
                "regexMessage"  : "should cotain at lest one number and one special character",
                "require"       : "true",
                "maxLength"     : "50",
                "minLength"     : "8"
            }
        ];
    }

    static accountSettingFormat(): any {
        return [
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
                "regex"         : "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
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
            }
        ];
    }
}
