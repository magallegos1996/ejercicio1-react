import React, {useState} from 'react';
import Formulario from "./components/Formulario";
import Mapa from "./components/Mapa";
import Exito from "./components/Exito";
import {Row, Col} from "antd";
import './App.css';
import credentials from "./credentials";
import styled from "@emotion/styled";

const Contenedor = styled.div`
    margin-top: 4rem;
`
const MapContainer = styled.div`
    height: 400px;
`
const MapElement = styled.div`
    height: 100%;
`

function App() {

    const [formularioFinalizado, actualizarFormFinalizado] = useState(false);

    return (
        <Contenedor className="App">
            {!formularioFinalizado ?
                <Row>
                    <Col span={8} offset={3}>
                        <Formulario
                            actualizarFormFinalizado={actualizarFormFinalizado}
                        />
                    </Col>
                    <Col span={8} offset={3}>
                        <Mapa
                            googleMapURL={credentials.api_key}
                            containerElement={<MapContainer/>}
                            mapElement={<MapElement/>}
                            loadingElement={<p>Cargando...</p>}
                        />
                    </Col>
                </Row>
                :
                <Exito
                    actualizarFormFinalizado={actualizarFormFinalizado}
                />
            }
        </Contenedor>
    );
}

export default App;
