import { Layout } from 'antd';
import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import style from '../style/AppLayout.module.css';
import { AppHeader } from './AppHeader';
const { Content, Footer } = Layout;

const AppLayout: React.FC = () => {

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
            <AppHeader />
            {content}
            <Footer className={style.footer}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default AppLayout;