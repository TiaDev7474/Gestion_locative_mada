import {InformationType} from "../../../types";

class AuthService {
    private _info: InformationType | undefined;
    HandleClickCreate(info: InformationType) {
        this._info = info;
        console.log(this._info)


    }
}

export const authService = new AuthService();
