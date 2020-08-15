import React, {useEffect, useState} from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {obtenerUbicacionActual} from "../helpers/helper";

const Mapa = (props) => {
    const defaultMapOptions = {
        fullscreenControl: false,
        disableDefaultUI: true
    };

    const [posicion, guardarPosicion] = useState({
        lat: 0,
        lng: 0,
    });
    const {lat, lng} = posicion;
    //Se obtiene la posicion cuando se renderiza el componente
    useEffect(() => {
        obtenerPosicion().then(()=>console.log('Exito')).catch(e => console.log(e));
    }, [])

    const obtenerPosicion = async () => {
        const posicion = await obtenerUbicacionActual();
        guardarPosicion({
            lat: posicion.coords.latitude,
            lng: posicion.coords.longitude
        })

    }

    return(
        <div>
            <GoogleMap defaultZoom={14}
                       center={{lat: lat, lng: lng}}
                       defaultClickableIcons={false}
                       clickableIcons={false}
                       defaultOptions={defaultMapOptions}
            >
                <Marker position={{ lat: lat, lng: lng }}
                        defaultTitle="Usted está aquí"
                        clickable={false}
                        label='Usted está aquí'
                />
            </GoogleMap>
        </div>
    )
}
export default withScriptjs(withGoogleMap(Mapa));