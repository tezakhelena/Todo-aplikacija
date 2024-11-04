import { Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Korisnik } from "../../../types/types";
import { EmptyDataTable } from "../../../helpers/EmptyDataTable";

interface Props {
    data: Korisnik[];
}

export const KorisniciTable = ({ data }: Props) => {

    const columns: ColumnsType<Korisnik> = [
        {
            title: 'Ime',
            dataIndex: 'ime',
            key: 'ime',
        },
        {
            title: 'Prezime',
            dataIndex: 'prezime',
            key: 'prezime',
        },
        {
            title: 'Korisničko ime',
            dataIndex: 'korisnickoIme',
            key: 'korisnickoIme',
        },
        {
            title: 'Uloga',
            dataIndex: 'nazivUloge',
            key: 'nazivUloge',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];


    return (
        <Card title="Upravljanje korisnicima" bordered={false}>
            {!Array.isArray(data) || data.length === 0 ? (
                <EmptyDataTable />
            )
                : (
                    <Table dataSource={data} columns={columns}/>
                )
            }
        </Card>
    )
}