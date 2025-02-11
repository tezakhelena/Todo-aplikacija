import { Button, Card, Form, FormInstance, Input } from "antd"
import Title from "antd/es/typography/Title"
import style from '../style/Authentication.module.css';


interface Props{
    form: FormInstance<any>;
    onFinish: () => void;
}

export const Login = ({form, onFinish}: Props) => {
    return(
        <div className={style.div}>
            <Card style={{ width: 400 }} className={style.card}>
                <Title level={2} style={{ textAlign: 'center' }}>Prijava</Title>
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