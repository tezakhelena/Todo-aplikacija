import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import style from '../style/AppLayout.module.css';

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

    const zadaci = useMemo(() => {
        return(
            <>
                {
                    <Menu.Item key="zadaci" icon={<UserOutlined/>}>
                        <Link to={"/zadaci"}>
                            <span>Zadaci</span>
                        </Link>
                    </Menu.Item>
                }
            </>
        )
    }, []);

    return(
        <Menu mode="horizontal" defaultSelectedKeys={["1"]} className={style.sider}>
            {naslovnica}
            {korisnici}
            {zadaci}
        </Menu>
    )
})