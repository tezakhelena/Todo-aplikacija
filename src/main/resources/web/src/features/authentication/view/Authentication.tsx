import { Button, Card } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../style/Authentication.module.css';
import Title from "antd/es/typography/Title"

const Authentication: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={style.div}>
            <Card style={{ width: 400 }} bordered={false}>
            <Title level={2} style={{ textAlign: 'center' }}>Todo app</Title>
                <Button
                    type="primary"
                    block
                    onClick={() => navigate('/registracija')}
                >
                    Registracija
                </Button>
                <Button
                    type="default"
                    block
                    onClick={() => navigate('/prijava')}
                    style={{ marginTop: '10px' }}
                >
                    Prijava
                </Button>
            </Card>
        </div>
    );
};

export default Authentication;
