export function obtenerUbicacionActual() {
    return new Promise(( resolve => {
        navigator.geolocation.getCurrentPosition((position)=>{
            resolve(position);
        });
    }));
}

export function validarCI(ci){
    return typeof ci === 'number' && isFinite(ci);
}