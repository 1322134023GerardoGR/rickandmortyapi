function getCharacter(url, done) {
    url
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}
let get=window.location.search;
const params = new URLSearchParams(get);

let url = fetch(`https://rickandmortyapi.com/api/character/${params.get("personaje")}`);
getCharacter(url, data => {
    let img = document.getElementById("img").src = data.image;
    let nombre = document.getElementById("nombre").innerHTML = "nombre: "+data.name;
    let especie = document.getElementById("especie").innerHTML = "Especie: "+data.species;
    let estado = document.getElementById("estado").innerHTML = "Estado: "+data.status;
    let origen = document.getElementById("origen").innerHTML = "Origen: "+data.origin.name;
    let ubicacion = document.getElementById("ubicacion").innerHTML = "Ubicacion: "+data.location.name;
});
