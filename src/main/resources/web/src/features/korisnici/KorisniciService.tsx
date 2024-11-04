import axios from "axios";
import { KORISNICI } from "../../reusable-components/constants";
import { FilterKorisniciRequest } from "../../types/request-types";

class KorisniciService {
    getKorisnici(request?: FilterKorisniciRequest) {
        return axios.post(KORISNICI, {request: request});
    }
}

export default new KorisniciService;
