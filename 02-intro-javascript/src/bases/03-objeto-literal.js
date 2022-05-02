const persona ={
    nombre:'Joel',
    apellido:'Alvarado',
    edad: 32,
    direccion:{
        ciudad:'Daule',
        zipcode:'456',
        lat:0.4533,
        lng:13.50333
    }
};

//console.table(persona);
console.log(persona);
const persona2={...persona};
persona2.nombre='Nathaly'
console.log(persona2);
console.log(persona);
