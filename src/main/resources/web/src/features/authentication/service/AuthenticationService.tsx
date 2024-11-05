import axios from "axios";
import { LoginRequest, RegistracijaRequest } from "../../../types/types";
import { LOGIN_POST, REGISTRACIJA_POST } from "../../../reusable-components/constants";

class AuthenticationService {
    login(request: LoginRequest) {
        return axios.post(LOGIN_POST, request);
    }

    registracija(request: RegistracijaRequest){
        return axios.post(REGISTRACIJA_POST, request)
    }
}

export default new AuthenticationService();