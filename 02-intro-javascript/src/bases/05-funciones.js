//Funciones JS
/*
//tradicional
function saludar( nombre ){
    return `Hola ${nombre}`;
}
//asignacion a una constante
const saludar=function ( nombre ){
    return `Hola ${nombre}`;
}

*/
const saludar= ( nombre ) => `Hola ${nombre}`;
console.log(saludar('Joel'))

const getUser = () =>({
    uuid:'23242sdad342342',
    username:'killmenos9',
})

const user=getUser();
console.log(user);


const getUserActive = (username) =>({
    uuid:'23242sdad342342',
    username,
});

const userActive=getUserActive('jalvarado');
console.log(userActive);

