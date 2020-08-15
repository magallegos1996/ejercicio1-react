import React from "react";
import { Result, Button } from 'antd';

const Exito = ({actualizarFormFinalizado}) => {

    const empezarFormulario = () => {
        actualizarFormFinalizado(false);
    }

    return (
        <Result
            status="success"
            title="Ha completado el formulario correctamente"
            extra={[
                <Button type="primary" key="console" onClick={empezarFormulario}>Empezar de nuevo</Button>,
            ]}
        />
    )
}

export default Exito;