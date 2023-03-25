export default{
    post:[ 
        {
        article:"DBZ",
        name: "Dragon ball Z",
        type: "Anime, Action, Comedy, Drama, Fantasy, ",
        paragraph: `Anime de acción y aventura que sigue a Goku y sus amigos luchando contra poderosos enemigos.`,
        image : "../img/dbz.jpeg",
        btn:{
            name:"Mas acerca de esto",
            href:"#"
            },
        
        article2:"One Piece",
        name2: "One Piece",
        type2: "Comedy, Adventure, Action fiction",
        paragraph2: `Monkey D. Luffy y su tripulación de piratas buscan el One Piece para convertirse en el rey de los piratas.`,
        image2: "../img/opp.webp",
        btn2:{
          name:"Mas acerca de esto",
          href:"#",
          },

        article3:"Naruto",
        name3: "Naruto",
        type3: "Shonen manga, Action manga, Fantasy",
        paragraph3: `Naruto es un joven ninja con un sueño de convertirse en el Hokage y proteger a su aldea. Aventuras, luchas y amistad.`,
        image3: "../img/narutin.jpg",
        btn3:{
          name:"Mas acerca de esto",
          href:"#",
          },
        article4:"YGO",
        name4: "Yu-Gi-Oh",
        type4: "Adventure fiction, Science fantasy",
        paragraph4: `Duelos de cartas con monstruos y hechizos para salvar el mundo de amenazas sobrenaturales en Yu-Gi-Oh!`,
        image4 : "../img/ygo.png",
        btn4:{
            name:"Mas acerca de esto",
            href:"#"
            },
        article5:"Super Campeones",
        name5: "Super Campeones",
        type5: "Shonen manga, Sports manga",
        paragraph5: `"Super Campeones" es un anime sobre fútbol que cuenta la historia de Oliver Atom y su equipo mientras compiten en torneos y superan obstáculos.`,
        image5 : "../img/sc.webp",
        btn5:{
            name:"Mas acerca de esto",
            href:"#"
            }, 
        article6:"Death Note",
        name6: "Death Note",
        type6: " Horror, Drama, Mystery, Suspense, Thriller, Crime TV",
        paragraph6: `Un cuaderno sobrenatural permite a su dueño matar a cualquier persona cuyo nombre escriba en él.
        `,
        image6 : "../img/deathnote.webp",
        btn6:{
            name:"Mas acerca de esto",
            href:"#"
            }     
       } 
    ],
    showPost(){
        this.post.forEach((val,id)=>{
            document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
              <div class="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards" style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name}</h3>
                  <div class="mb-1 text-muted">${val.type}</div>
                  <p class="card-text mb-auto">${val.paragraph}</p>
                  <a href="#" class="stretched-link">${val.btn.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name2}</h3>
                  <div class="mb-1 text-muted">${val.type2}</div>
                  <p class="card-text mb-auto">${val.paragraph2}</p>
                  <a href="#" class="stretched-link">${val.btn2.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image2}" class="responsiveImg">
                  </div>
                </div>
                </div>

              <div class="col-md-6" >
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name3}</h3>
                  <div class="mb-1 text-muted">${val.type3}</div>
                  <p class="card-text mb-auto">${val.paragraph3}</p>
                  <a href="#" class="stretched-link">${val.btn3.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image3}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name4}</h3>
                  <div class="mb-1 text-muted">${val.type4}</div>
                  <p class="card-text mb-auto">${val.paragraph4}</p>
                  <a href="#" class="stretched-link">${val.btn4.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image4}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary"></strong>
                    <h3 class="mb-0">${val.name5}</h3>
                    <div class="mb-1 text-muted">${val.type5}</div>
                    <p class="card-text mb-auto">${val.paragraph5}</p>
                    <a href="#" class="stretched-link">${val.btn5.name}</a>
                 </div> 
                    <div class="col-auto d-none d-lg-block ">
                      <img src="${val.image5}" class="responsiveImg">
                    </div>
                  </div>
                  </div>

                  <div class="col-md-6">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                    <div class="col p-4 d-flex flex-column position-static">
                      <strong class="d-inline-block mb-2 text-primary"></strong>
                      <h3 class="mb-0">${val.name6}</h3>
                      <div class="mb-1 text-muted">${val.type6}</div>
                      <p class="card-text mb-auto">${val.paragraph6}</p>
                      <a href="#" class="stretched-link">${val.btn6.name}</a>
                   </div> 
                      <div class="col-auto d-none d-lg-block ">
                        <img src="${val.image6}" class="responsiveImg">
                      </div>
                    </div>
                    </div>
             `)
        })
    }
   
}

/* */