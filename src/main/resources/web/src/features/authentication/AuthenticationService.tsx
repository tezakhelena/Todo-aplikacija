import axios from "axios";
import { LOGIN, REGISTRACIJA } from "../../reusable-components/constants";
import { LoginRequest, RegistracijaRequest } from "../../types/types";

class AuthenticationService {
    login(request: LoginRequest) {
        return axios.post(LOGIN, request);
    }

    registracija(request: RegistracijaRequest){
        return axios.post(REGISTRACIJA, request)
    }
}

export default new AuthenticationService();