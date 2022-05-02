//import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

const getHeroeById=( id )=>heroes.find(({id:idheroe})=>idheroe===id);

//console.log( getHeroeById(2) );

const getHeroeByOwner=( owner )=>heroes.filter(({owner:pOwner})=>pOwner===owner);

//console.log( getHeroeByOwner('Marvel') );
//console.log(owners);

export{
    getHeroeById,
    getHeroeByOwner
}