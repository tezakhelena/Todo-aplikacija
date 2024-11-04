import { Layout } from 'antd';
import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { AppSider } from './AppSider';
import style from'../style/AppLayout.module.css';
const { Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const content = useMemo(() => (
        <Content style={{
            padding: 24,
            minHeight: 380
        }}>
            <Outlet />
        </Content>
    ), []
    )

    return (
        <Layout className={style.layout}>
            <Sider collapsible collapsed={collapsed} trigger={null} onCollapse={(value) => setCollapsed(value)} className={style.sider}>
                <AppSider />
            </Sider>
            <Layout>
                <AppHeader />
                {content}
                <Footer className={style.footer}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;