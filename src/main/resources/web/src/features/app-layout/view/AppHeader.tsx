import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../../store/slices/authSlice";
import { RootState } from "../../../store/store";
import style from '../style/AppLayout.module.css';

export const AppHeader = () => {

    const {Header} = Layout;

    const dispatch = useDispatch();
    const username = useSelector((state: RootState) => state.auth.korisnickoime);

    const handleLogout = () => {
        dispatch(logout());
        <Navigate to="/authenticate" replace />
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
            <Dropdown overlay={menu} placement="bottomRight">
                <Button type="text">
                    <Typography.Text>{username}</Typography.Text> <DownOutlined />
                </Button>
            </Dropdown>
        </Header>
    )
}