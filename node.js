import superheroes from "superheroes"

const random = Math.floor(Math.random() * superheroes.length);

const name = superheroes[random]
console.log("My name is ",name);