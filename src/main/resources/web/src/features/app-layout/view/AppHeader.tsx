import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/slices/authSlice";
import { RootState } from "../../../store/store";
import style from '../style/AppLayout.module.css';
import { AppSider } from "./AppSider";

export const AppHeader = () => {

    const {Header} = Layout;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate("/authenticate");
        }
    }, [auth.isAuthenticated, navigate]);

    const handleLogout =  () => {
        dispatch(logout());
    };

    const menu = (
        <Menu>
            <Menu.Item key="logout" onClick={handleLogout}>
                Odjavi se
            </Menu.Item>
        </Menu>
    );

    return(
        <Header className={style.header}>
            <AppSider />
            <Dropdown overlay={menu} placement="bottomRight">
                <Button type="text">
                    <Typography.Text>{auth.korisnickoime}</Typography.Text> <DownOutlined />
                </Button>
            </Dropdown>
        </Header>
    )
}