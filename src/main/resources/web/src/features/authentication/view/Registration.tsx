import { Button, Card, Form, FormInstance, Input } from "antd"
import Title from "antd/es/typography/Title"
import style from '../style/Authentication.module.css';


interface Props {
    form: FormInstance<any>;
    onFinish: () => void;
}

export const Registration = ({ form, onFinish }: Props) => {
    return (
        <div className={style.logindiv}>
            <Card style={{ width: 400 }}>
                <Title level={2} style={{ textAlign: 'center' }}>Registracija</Title>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Ime"
                        name="ime"
                        rules={[{ required: true, message: 'Ime je obavezno!' }]}
                    >
                        <Input placeholder="Unesite svoje ime" />
                    </Form.Item>
                    <Form.Item
                        label="Prezime"
                        name="prezime"
                        rules={[{ required: true, message: 'Prezime je obavezno!' }]}
                    >
                        <Input placeholder="Unesite svoje prezime" />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="korisnickoIme"
                        rules={[{ required: true, message: 'Korisničko ime je obavezno!' }]}
                    >
                        <Input placeholder="Unesite korisničko ime" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="lozinka"
                        rules={[{ required: true, message: 'Lozinka je obavezna!' }]}
                    >
                        <Input.Password placeholder="Unesite lozinku" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Registracija
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}