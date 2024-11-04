import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Typography } from "antd"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slices/authSlice";

export const AppHeader = () => {

    const {Header} = Layout;

    const dispatch = useDispatch();
    const username = useSelector((state: RootState) => state.auth.korisnickoime);

    const handleLogout = () => {
        dispatch(logout());
    };

    const menu = (
        <Menu>
            <Menu.Item key="logout" onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return(
        <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px', backgroundColor: '#fff' }}>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button type="text">
                    <Typography.Text>{username}</Typography.Text> <DownOutlined />
                </Button>
            </Dropdown>
        </Header>
    )
}