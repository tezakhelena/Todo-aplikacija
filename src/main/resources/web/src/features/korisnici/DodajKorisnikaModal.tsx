import { DatePicker, Form, FormInstance, Input, Modal } from "antd";

interface Props {
    visible: boolean;
    onShowModal: (value: boolean) => void;
    form?: FormInstance;
}

export const DodajKorisnikaModal = ({ visible, onShowModal, form }: Props) => {
    return (
        <>
            <Modal title="Dodaj korisnika" open={visible} onOk={() => onShowModal(false)} onCancel={() => onShowModal(false)}>
                <Form form={form}>
                    <Form.Item name="ime">
                        <Input placeholder="Unesite ime korisnika" allowClear/>
                    </Form.Item>
                    <Form.Item name="prezime">
                        <Input placeholder="Unesite prezime korisnika" allowClear/>
                    </Form.Item>
                    <Form.Item name="datumRodjenja">
                        <DatePicker placeholder="Odaberite datum rođenja korisnika" style={{width: "100%"}}/>
                    </Form.Item>
                    <Form.Item name="email">
                        <Input placeholder="Unesite email korisnika" allowClear/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}