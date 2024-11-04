import { Button, Card, Form, FormInstance, Input } from "antd"
import Title from "antd/es/typography/Title"

interface Props{
    form: FormInstance<any>;
    onFinish: () => void;
}

export const Login = ({form, onFinish}: Props) => {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 400 }}>
                <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Korisničko ime"
                        name="korisnickoIme"
                        rules={[{ required: true, message: 'Korisničko ime je obavezno!' }]}
                    >
                        <Input placeholder="Unesite korisničko ime" />
                    </Form.Item>
                    <Form.Item
                        label="Lozinka"
                        name="lozinka"
                        rules={[{ required: true, message: 'Lozinka je obavezna!' }]}
                    >
                        <Input.Password placeholder="Unesite lozinku" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Prijava
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}