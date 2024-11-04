import { useQuery } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { FilterKorisniciRequest } from "../../types/request-types";
import { DodajKorisnikaModal } from "./DodajKorisnikaModal";
import KorisniciService from "./KorisniciService";
import { KorisniciTable } from "./KorisniciTable";

export const KorisniciContainer = () => {

    const [showModal, setShowModal] = useState(false);
    const [form] = useForm();

    const onShowModal = (value: boolean) => {
        setShowModal(value);
    }

    const fetchKorisnici = (request?: FilterKorisniciRequest) => {
        return KorisniciService.getKorisnici(request).then((res) => res.data);
    }

    const { data } = useQuery({
        queryKey: ['korisnici'],
        queryFn: () => fetchKorisnici()
    })


    return (
        <>
            <KorisniciTable data={data} onShowModal={onShowModal} />
            <DodajKorisnikaModal visible={showModal} onShowModal={onShowModal} form={form} />
        </>
    )
}