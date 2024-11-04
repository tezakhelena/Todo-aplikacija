import { useQuery } from "@tanstack/react-query";
import { FilterKorisniciRequest } from "../../../types/request-types";
import KorisniciService from "../service/KorisniciService";
import { KorisniciTable } from "../view/KorisniciTable";

export const KorisniciContainer = () => {


    const fetchKorisnici = (request?: FilterKorisniciRequest) => {
        return KorisniciService.getKorisnici(request).then((res) => res.data);
    }

    const { data } = useQuery({
        queryKey: ['korisnici'],
        queryFn: () => fetchKorisnici()
    })


    return (
        <>
            <KorisniciTable data={data} />
        </>
    )
}