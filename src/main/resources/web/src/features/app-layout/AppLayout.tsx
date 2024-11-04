import { Layout } from 'antd';
import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { AppSider } from './AppSider';

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
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} trigger={null} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: "#f0f0f0" }}>
                <AppSider />
            </Sider>
            <Layout>
                <AppHeader />
                {content}
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;