import { Button, Empty, Typography } from "antd"

interface Props{
    onShowModal: (value: boolean) => void;
}

export const EmptyDataTable = ({onShowModal}: Props) => {
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
            description={
                <Typography.Text>
                    Trenutno nema korisnika
                </Typography.Text>
            }
        >
            <Button type="default" onClick={() => onShowModal(true)}>Dodaj</Button>
        </Empty>
    )
}