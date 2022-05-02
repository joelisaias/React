const picapiedras = ['Pedro','Pablo','Vilma','Betty','Pebles','Bam Bam']

/* console.log(picapiedras[0]);
console.log(picapiedras[1]);
console.log(picapiedras[2]); */

const [ ,,Pedro ] = picapiedras;
console.log(Pedro);

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras,numeros);

const useeState = (valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = useeState('Goku');
console.log(nombre);
setNombre();