import React, {useState} from "react";
import {Form, Input, Button, Select, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dateFormat from 'dateformat'

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const Formulario = ({actualizarFormFinalizado}) => {

    let file = {};

    const [datos, guardarDatos] = useState({
        nombre: '',
        apellido: '',
        sexo: '',
        ci: 0,
        lugarNac: '',
        fechaNac: '',
        foto: {}
    });

    const {nombre, apellido, sexo, ci, lugarNacimiento, fechaNac} = datos;

    const manejarInformacion = (values) => {
        values.fechaNac = dateFormat(values.fechaNac._d, "mediumDate");
        values.foto = file
        guardarDatos(values);
        actualizarFormFinalizado(true);
    };
    //Manejar file
    const manejarArchivo = e => {
        file = e.file;
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return(
        <Form {...layout} onFinish={manejarInformacion}>
            <Form.Item label="Nombre"
                       name="nombre"
                       rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            >
                <Input value={nombre}/>
            </Form.Item>
            <Form.Item label="Apellido"
                       name="apellido"
                       rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            >
                <Input value={apellido}/>
            </Form.Item>
            <Form.Item name="sexo" label="Sexo" rules={[{ required: true, message: 'Este campo es obligatorio' }]}>
                <Select placeholder="Seleccione una opción" value={sexo} allowClear>
                    <Option value="Masculino">Masculino</Option>
                    <Option value="Femenino">Femenino</Option>
                    <Option value="Otro">Otro</Option>
                </Select>
            </Form.Item>
            <Form.Item name="ci" label="C.I." rules={[{ required: true, message: 'Este campo es obligatorio'}]}>
                <Input value={ci}/>
            </Form.Item>
            <Form.Item name='fechaNac' label="Fecha de Nacimiento" rules={[{ required: true, message: 'Este campo es obligatorio'}]}>
                <DatePicker value={fechaNac} placeholder='Seleccione una fecha'/>
            </Form.Item>
            <Form.Item name="lugarNac" label="Lugar de Nacimiento" rules={[{ required: true, message: 'Este campo es obligatorio'}]}>
                <Input value={lugarNacimiento}/>
            </Form.Item>
            <Form.Item
                name="upload"
                label="Subir foto"
                valuePropName="fileList"
                getValueFromEvent={manejarArchivo}
                rules={[{ required: true, message: 'Por favor, suba una foto personal'}]}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                        <UploadOutlined /> Subir una foto
                    </Button>
                </Upload>
            </Form.Item>
            <Button type="primary" block htmlType="submit">Aceptar</Button>
        </Form>
    )
}
export default Formulario