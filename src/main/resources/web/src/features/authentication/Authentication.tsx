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
            height: '100vh', // Full height to center vertically
            backgroundColor: '#f0f2f5', // Optional: a light background color
        }}>
            <Card title="Welcome" style={{ width: 300 }}>
                <Button
                    type="primary"
                    block
                    onClick={() => navigate('/registracija')} // Navigate to registration
                >
                    Registracija
                </Button>
                <Button
                    type="default"
                    block
                    onClick={() => navigate('/prijava')} // Navigate to login
                    style={{ marginTop: '10px' }} // Optional: margin between buttons
                >
                    Prijava
                </Button>
            </Card>
        </div>
    );
};

export default Authentication;
