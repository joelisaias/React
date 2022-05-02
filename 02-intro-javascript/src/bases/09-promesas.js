import {getHeroeById} from './bases/08-importacion-exportacion' 
// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const heroe=getHeroeById(15);
//         if(heroe===undefined){
//             reject('Heroe no encontrado')
//         }else{
//             resolve(heroe);
//         }
//     },2000)
// });


// promesa.then((heroe)=>{
//     console.log(heroe);
// })
// .catch(err=>console.error(err))
const getHeroeByIdAsync = ( id ) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const heroe=getHeroeById(id);
            if(heroe===undefined){
                reject('Heroe no encontrado')
            }else{
                resolve(heroe);
            }
        },2000)
    });
};

getHeroeByIdAsync(14)
//.then(heroe=>console.log('Heroe',heroe))
.then(console.log)
//.catch(err=>console.error(err))
.catch(console.error)
