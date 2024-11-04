import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from '../style/Authentication.module.css';

const Authentication: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={style.div}>
            <Card title="Welcome" style={{ width: 300 }}>
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
