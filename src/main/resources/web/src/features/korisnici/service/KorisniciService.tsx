import axios from "axios";
import { KORISNICI_POST } from "../../../reusable-components/constants";
import { FilterKorisniciRequest } from "../../../types/request-types";

class KorisniciService {
    getKorisnici(request?: FilterKorisniciRequest) {
        return axios.post(KORISNICI_POST, {request: request});
    }
}

export default new KorisniciService;
