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
                        label="Username"
                        name="korisnickoIme" // Make sure this matches your backend expected field
                        rules={[{ required: true, message: 'Please enter your username!' }]}
                    >
                        <Input placeholder="Unesite korisničko ime" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="lozinka" // Make sure this matches your backend expected field
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password />
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