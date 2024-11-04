import axios from "axios";
import { LoginRequest, RegistracijaRequest } from "../../../types/types";
import { LOGIN, REGISTRACIJA } from "../../../reusable-components/constants";

class AuthenticationService {
    login(request: LoginRequest) {
        return axios.post(LOGIN, request);
    }

    registracija(request: RegistracijaRequest){
        return axios.post(REGISTRACIJA, request)
    }
}

export default new AuthenticationService();