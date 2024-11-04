import { Form, notification } from "antd";
import { Login } from "./Login"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import { login } from "../../store/slices/authSlice";

export const LoginContainer = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async () => {
        try {
            const formData = form.getFieldsValue();
            await AuthenticationService.login(formData).then((res) => {
                const token = res.data.token;
                dispatch(login({token: token,  korisnickoime: res.data.korisnickoIme}));
                navigate('/');
            })
        } catch (error: any) {
            notification.error({
                message: 'Login Failed',
                description: error.response?.data?.message || 'An error occurred during login.',
            });
        }
    };


    return(
        <Login form={form} onFinish={onFinish}/>
    )
}