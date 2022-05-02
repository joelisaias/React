//destructuring
const persona = {
    nombre: 'Tony',
    rango :'Soldado',
    edad: 45,
    clave:'ironman',

};

const { nombre , edad , clave:password } = persona;

console.log(nombre,edad,password);

const useeContext = ( {clave,nombre,edad,rango='Capitan'}) =>{
    //console.log(nombre,edad,rango);
    return {
        nombreClave: clave,
        anios:edad,
        georeferencia:{
            lat:67.6,
            lng:-12.7
        }
        }
}

const {nombreClave,anios,georeferencia:{lat,lng}}= useeContext( persona );

console.log(nombreClave,anios)
console.log(lat,lng)