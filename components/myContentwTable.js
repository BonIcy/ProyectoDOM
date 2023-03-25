export default{
    gene:{
        title:"Razones por las que deberias ver anime",
        dt:{
            dte:"Marzo 24, 2023. Escrito por Jesus Martinez",
            dteref:"https://chat.openai.com/chat", 
       },
       txts:{
            p1:"Ver anime puede ser una buena opción por varias razones. En primer lugar, el anime ofrece una gran diversidad de géneros y temáticas, lo que permite que se pueda encontrar una historia que resulte interesante o entretenida para cualquier persona. Además, muchas veces el anime aborda temas profundos y complejos de una manera que puede ser difícil de encontrar en otros medios, lo que puede resultar en una experiencia de entretenimiento más rica y significativa.",
            p2:"Otra razón para ver anime es que las animaciones japonesas suelen tener un nivel de calidad visual muy alto, con una atención al detalle y una fluidez en la animación que puede ser impresionante. Además, el anime a menudo tiene una banda sonora impactante que puede contribuir a la atmósfera y el impacto emocional de la historia.",
            p3:"Por último, ver anime también puede ser una forma de aprender sobre la cultura y la sociedad japonesa, lo que puede ser interesante y enriquecedor desde un punto de vista educativo y cultural. En general, ver anime puede ser una experiencia de entretenimiento emocionante y significativa que ofrece una gran diversidad de historias y temáticas, un alto nivel de calidad visual y sonora, y una ventana a una cultura diferente."
       },
       table:{
            tbtitle:"Algunos de los animes mas largos",
            tbtxt:`Esto teniendo en cuenta la cantidad de capitulos y su duracion (incluyendo "relleno").`,
            headert:{
              n1:"Anime (Incluye todas las sagas y arcos de la franquicia hasta el momento",
              n2:"Numero total de capitulos canon hasta la fecha",
              n3:"Promedio de duracion de cada capitulo"
            },
            conts:[{
              name:"Nintama Rantaro",
              cant:"2169 episodios y sumando",
              dura:"24 minutos aprox."
            },
            {
              name:"Detective Conan",
              cant:"974 episodios y sumando",
              dura:"24-25 minutos."
            },
            {
              name:"One Piece",
              cant:"930 episodios y sumando",
              dura:"23-24 minutos.",
            },
            {
              name:"Dragon Ball",
              cant:"575 episodios",
              dura:"23-24 minutos."
            },
            {
              name:"Bleach",
              cant:"366 episodios",
              dura:"24-25 minutos."
            },
          
          ],
           /*  anime:{
                name:"Anime:",
                cont:[{
                    item1:"",
                    item2:"",
                    item3:"",
                    item4:"",
                    item5:"", 
                 }]},
            cap:{
                name:"Numero total de capitulos hasta la fecha",
                cont:[{
                    item:"a",
                    item:"e",
                    item:"i",
                    item:"",
                    item:"",
                 }]},
            duracion:{
                name:"Promedio de duracion de cada capitulo",
                cont:[{
                    item1:"",
                    item2:"",
                    item3:"",
                    item4:"", 
                 }]}, */
        },
        textito:"En general, la elección entre un anime corto o largo depende del tiempo y los gustos personales de cada espectador. Es importante recordar que tanto los anime cortos como los largos tienen su propio encanto y mérito, y que lo importante es encontrar una historia que se ajuste a las preferencias y gustos personales de cada uno.",
        finaltitle:"Conclusiones",
        finaldte:"Marzo 24, 2023. Escrito por Jesus Martinez",
        finaltxt:"Cada persona puede elegir el tipo de anime que desea ver porque todos tenemos gustos y preferencias únicas. Cada uno tiene una perspectiva y experiencia de vida diferente, lo que influye en lo que nos gusta o nos interesa. El anime ofrece una gran variedad de géneros, temas y estilos, lo que permite que cada persona pueda encontrar algo que se adapte a sus intereses y gustos personales. Aqui algunos factores importantes que lo complementan:",
        finallist:{
            item1:"Cada persona tiene diferentes sensibilidades y preferencias en cuanto a la cantidad de violencia, contenido sexual, temas emocionales y otros aspectos.",
            item2:"El anime ofrece una amplia gama de géneros y temas para satisfacer esas preferencias.",
            item3:"Ver anime es una forma de entretenimiento, y es importante que cada persona pueda disfrutar de su tiempo de ocio de la manera que prefiera",
        },
        finaltxt2:"En conclusión, cada uno puede encontrar una historia que les apasione y que les proporcione una experiencia única y enriquecedora. Por lo tanto, es importante respetar los gustos y preferencias de cada persona, y permitir que cada uno disfrute de su tiempo libre de la manera que mejor le parezca.",
        btns:{
            b1:"Anime clasico",
            ref1:"",
            b2:"Anime moderno",
            ref2:""}

    },
    showParte1(){
        document.querySelector("#art2").insertAdjacentHTML("beforeend",`
        <h2 class="blog-post-title">${this.gene.title}</h2>
        <p class="blog-post-meta"> ${this.gene.dt.dte}</p>
        <p>${this.gene.txts.p1}</p>
        <blockquote>
        <p>${this.gene.txts.p2}</p>
        </blockquote>
        <p>${this.gene.txts.p3}</p>

        <h3>${this.gene.table.tbtitle}</h3>
        <p>${this.gene.table.tbtxt}</p>

        <table class="table"id="tablita">
          <thead>
            <tr>
              <th>${this.gene.table.headert.n1}</th>
              <th>${this.gene.table.headert.n2}</th>
              <th>${this.gene.table.headert.n3}</th>
            </tr>
          </thead>
          <tbody id="uwi">
          </tbody>
        </table>
        `
        )
    },
    listaTabla(){
      let plantilla = "";
      this.gene.table.conts.forEach((val, id) => {
          plantilla += `
          <tr>
              <td>${val.name}</td>
              <td>${val.cant}</td>
              <td class="xxs">${val.dura}</td>
          </tr>
              `;
          });
          document.querySelector("#uwi").insertAdjacentHTML("beforeend", plantilla);
      },
      showParte2(){
        document.querySelector("#art2").insertAdjacentHTML("beforeend", `
        <p>${this.gene.textito}<br><br></p>
        <h2 class="blog-post-title">${this.gene.finaltitle}</h2>
        <p class="blog-post-meta">${this.gene.finaldte}</p>

        <p>${this.gene.finaltxt}</p>
        <ul>
          <li>${this.gene.finallist.item1}</li>
          <li>${this.gene.finallist.item2}</li>
          <li>${this.gene.finallist.item3}</li>
        </ul>
        <p>${this.gene.finaltxt2}</p>`)
      },
      showBtns(){
        document.querySelector("#btns").insertAdjacentHTML("beforeend", `
        <a class="btn btn-outline-primary" href="#">${this.gene.btns.b1}</a>
        <a class="btn btn-outline-secondary" href="#">${this.gene.btns.b2}</a>`)
      }
    /* listartabla1(){
        Object.entries(this.gene.table).forEach((val,id) => {
            if(!typeof(this.gene.table[val[0]])=="object"){
                console.log("data",val);
                
            }else{
                console.log(this.gene.table[val[0]]);
            }
        }); */
        /* this.gene.table.forEach((val,id) => {
            console.log(id);
        }); */
        /* let plantilla = "";
        this.gene.table.anime.forEach((val, id)=>{
            console.log(val);
            /* plantilla += `
            <tr>
              <td>${val.item1}</td>
            </tr>
            <tr>
              <td>${val.item2}</td>
            </tr>
            <tr>
              <td>${val.item3}</td>
            </tr>
            <tr>
              <td>${val.item4}</td>
            </tr>
            <tr>
              <td>${val.item5}</td>
            </tr>
            ` */
        
        /* document.querySelector("#uwu").insertAdjacentHTML("beforeend", plantilla) */
/*     },
    listartabla2(){
        let plantilla1 = "";
        this.gene.table.cap.cont.forEach((val, id)=>{
            plantilla1 += `
                <td>${val.item}</td>
            `
        });
        document.querySelector("#owo").insertAdjacentHTML("beforeend", plantilla1)
    }
} */
}