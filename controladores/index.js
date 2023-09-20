function getCharacter(url, done) {
    url
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

for (let a = 0; a < 5; a++) {
    let random = Math.floor(Math.random() * 826);
    let url = fetch(`https://rickandmortyapi.com/api/character/${random}`);
    getCharacter(url, data => {
        let article = document.createRange().createContextualFragment(/*html*/
            `<article>
                     <div class="image-container">
                     <img src="${data.image}" alt="personaje ${data.name}">
                     </div>
                     <h2>Nombre: ${data.name}</h2>
                     <h4>Estado: ${data.status}</h4>
                     <h4>Especie: ${data.species}</h4>
                     </article>`
        );
        article.querySelector("img").addEventListener("click", () => {
            window.location.href = `../vistas/mas_info.html?personaje=${data.id}`;
        });
        let main = document.getElementById("5_actuales");
        main.appendChild(article);
    });
}

let especies = ['Human', 'Alien', 'unknown', 'Poopybutthole', 'Mythological Creature', 'Animal', 'Robot', 'Cronenberg', 'Disease', 'Humanoid'];
for (let a = 0; a < 9; a++) {
    for (let i = 1; i <= 42; i++) {
        let url = fetch("https://rickandmortyapi.com/api/character/?page=" + i);
        getCharacter(url, data => {
            data.results.forEach(personaje => {
                if (personaje.species === especies[a]) {
                    let article = document.createRange().createContextualFragment(/*html*/
                        `<article>
                    <div class="image-container">
                    <img src="${personaje.image}" alt="personaje ${personaje.name}">
                    </div>
                    <h2>Nombre: ${personaje.name}</h2>
                    <h4>Estado: ${personaje.status}</h4>
                    <h4>Especie: ${personaje.species}</h4>
                     
                     </article>`
                    );
                    article.querySelector("img").addEventListener("click", () => {
                        window.location.href = `../vistas/mas_info.html?personaje=${personaje.id}`;
                    } );
                    let main = document.querySelector("main");
                    main.appendChild(article);
                }

            });
        });

    }
}