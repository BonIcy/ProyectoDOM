export default { 
    nav:[
        {
            title: `Origen e inicio del anime`,
            paragranph: `El anime, o animación japonesa, tuvo sus inicios en la década de 1910, cuando se comenzaron a producir cortometrajes animados en Japón. Sin embargo, el género no se popularizó hasta la década de 1960, con la emisión de series como "Astro Boy" y "Kimba, el león blanco". Durante las décadas de 1970 y 1980, se produjeron algunas de las series de anime más icónicas, como "Doraemon", "Dragon Ball" y "Gundam". A partir de la década de 1990, el anime comenzó a ganar popularidad en todo el mundo, con series como "Sailor Moon", "Pokémon" y "Neon Genesis Evangelion". Hoy en día, el anime es una industria multimillonaria que sigue creciendo y evolucionando constantemente.`,
        },
        {
            title: "Primeros animes en la historia",
            link:[
                {   
                name: "Mirai Kara Kita Shounen Super Jetter",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Shounen Ninja Kaze no Fujimaru",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Big X",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "0-sen Hayato",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Shisukon Ouji",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Ookami Shounen Ken",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Eightman",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Tetsujin 28-gou",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Sennin Buraku",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
                {   
                name: "Tetsuwan Atom",
                href: "https://honeysanime.com/es/los-10-primeros-animes-de-la-historia-del-anime/",
                },
            ],
        },
        {
            title: "Animes mas populares en la historia",
            link:[
                {
                name: "Dragon Ball",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "One Piece",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "Naruto",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "Hunter x Hunter",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "Demon Slayer",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "Death Note",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "Bleach",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "Captain Tsubasa",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "JoJo’s Bizarre Adventure",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                },
                {
                name: "Slam Dunk",
                href: "https://as.com/meristation/2021/04/10/reportajes/1618041836_577965.html",
                }
            ]
        }
 ],
 showAside(){
    
    const data = this.nav.map((val,id) => { //el map es como un ForEach retornando un string o copia de lo que se haya asignado
        return(
            (val.link)
            ? this.list(val) //se usa ? para reemplazar if
            : this.cards(val) // se usa : para reemplazar else if
        );  
    });
    document.querySelector("#navb").insertAdjacentHTML("beforeend", data.join("")) // convertir el array ennumerado en string
 },
 cards(p1){
    return`
    <div class="p-4 mb-3  rounded">
          <h4 class="fst-italic">${p1.title}</h4>
          <p class="mb-0">${p1.paragranph}</p>
    </div>`;
 },
 list(p1){
    return`
    <div class="p-4">
    <h4 class="fst-italic">${p1.title}</h4>
    <ol class="list-unstyled mb-0 ">${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
      </ol>
  </div>
    `;
 }
}
