import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Authentication: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5',
        }}>
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
