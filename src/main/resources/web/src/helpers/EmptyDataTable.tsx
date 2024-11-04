import { Empty, Typography } from "antd"

export const EmptyDataTable = () => {
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
        </Empty>
    )
}