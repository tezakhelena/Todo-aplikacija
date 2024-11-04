import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";

export const AppSider = memo(() => {

    const naslovnica = useMemo(() => {
        return(
            <>
                {
                    <Menu.Item key="naslovnica" icon={<HomeOutlined/>}>
                        <Link to={"/"}>
                            <span>Naslovnica</span>
                        </Link>
                    </Menu.Item>
                }
            </>
        )
    }, []);

    const korisnici = useMemo(() => {
        return(
            <>
                {
                    <Menu.Item key="korisnici" icon={<UserOutlined/>}>
                        <Link to={"/korisnici"}>
                            <span>Korisnici</span>
                        </Link>
                    </Menu.Item>
                }
            </>
        )
    }, []);

    return(
        <Menu mode="inline" defaultSelectedKeys={["1"]} style={{backgroundColor: "#f0f0f0"}}>
            {naslovnica}
            {korisnici}
        </Menu>
    )
})