export default{
    gene:{
            name:"Animes modernos",
            title:"¿Que son los animes modernos?",
            fecha: "goku",
            paragranph: "Un anime moderno es una serie animada de origen japonés producida a partir de la década de 2000 en adelante, que utiliza técnicas y estilos de animación avanzados, y aborda temas que van desde la ciencia ficción y fantasía hasta el romance y la comedia. Los personajes suelen ser complejos y multifacéticos, y las historias suelen tener una narrativa más profunda y compleja que las series animadas más antiguas.",
            textito: "Los animes modernos también suelen explorar temas sociales y políticos, como la discriminación, la injusticia y el cambio climático, entre otros. Además, suelen estar dirigidos tanto a un público joven como adulto, lo que los convierte en una forma de entretenimiento popular en todo el mundo.",
            //parte 2
            exp: "Alcances del anime moderno",
            txtexp: "¿Hasta que paises ha llegado el anime?",
            txtexp2: "Segun algunos estudios segun el consumo de anime a nivel global y mundial:",
            txtexp3: "El anime moderno es consumido en todo el mundo, pero Japón es el país donde se produce y consume la mayoría de las series de anime. Sin embargo, fuera de Japón, algunos de los países donde el anime es más popular incluyen Estados Unidos, México, Francia, Brasil y otros países de América Latina y Asia. El anime moderno ha logrado un gran éxito en todo el mundo gracias a plataformas de streaming como Netflix y Crunchyroll, que permiten a los fans acceder a una amplia variedad de series y películas de anime de forma fácil y conveniente.",
            //parte 3
            listatitle:"¿Cuales son estos animes modernos?",
            listadesc:"Algunos de los animes modernos son:",
            lista:{
                item1:"One Punch Man",
                item2:"The Promised Neverland",
                item3:"My Hero Academia (Boku no Hero Academia)",
                item4:"Demon Slayer: Kimetsu no Yaiba",
                item5:"Attack on Titan (Shingeki no Kyojin)"
            },
            lista2desc:"Ahora veamos un top de cuales son los mas populares a nivel global entre los animes modernos",
            lista2:{    
                item1:"Demon Slayer: Kimetsu no Yaiba",
                item2:"Jujutsu Kaisen",
                item3:"My Hero Academia (Boku no Hero Academia)",
                item4:"Attack on Titan (Shingeki no Kyojin)",
                item5:"The Seven Deadly Sins (Nanatsu no Taizai)"

            },
            //sigue
            caract: "Te presento tambien algunas de las caracteristicas mas relevantes de los animes modernos:",
            listacarac:{
                item1: {
                    name:"Animación de alta calidad: ",
                    cont:"El anime moderno se caracteriza por tener animación de alta calidad y por utilizar tecnología avanzada en la producción de sus animaciones.",
                },
                item2:{
                    name:"Historias complejas:",
                    cont:"A menudo, los animes modernos tienen tramas complejas y profundas, que tratan temas complejos y profundos como la identidad, la muerte, la política y la religión.",
                },
                item3:{
                    name:"Amplia variedad de géneros:",
                    cont:"El anime moderno tiene una amplia variedad de géneros, que van desde la acción y la aventura hasta el romance y la comedia.",
                },
                item4:{
                    name:"Personajes bien desarrollados:",
                    cont:"Los personajes del anime moderno suelen estar bien desarrollados, con personalidades complejas y características únicas.",
                },
                item5:{
                    name:"Influencias culturales:",
                    cont:"El anime moderno se ve influenciado por la cultura japonesa, pero también por la cultura popular de todo el mundo, lo que hace que tenga un atractivo universal.",
                }
            },
            //parte 4
            difetitle:"Diferencias entre el anime moderno y clasico",
            difedesc: "Aunque la distinción entre anime moderno y clásico puede variar según la perspectiva de cada persona, aquí te presento algunas posibles diferencias que se pueden observar entre ambos:",
            dife:{
                item1:"Técnicas de animación: Los anime clásicos se animaban principalmente a mano, mientras que los anime modernos se realizan con tecnología digital, lo que permite una mayor calidad en la imagen y la animación.",
                item2:"Estilos de dibujo: Los diseños de personajes y escenarios han evolucionado con el tiempo. El anime clásico tiende a tener personajes con rasgos faciales más simples y trazos de líneas más duros, mientras que el anime moderno suele tener diseños de personajes más complejos y detallados, con trazos más suaves y curvos.",
                item3:"Contenido: El anime moderno a menudo se enfoca en temas más oscuros y complejos, como la exploración de la psicología humana, mientras que el anime clásico se centraba más en temas simples y accesibles para todo público.",
                item4:"Duración de la serie: Las series de anime moderno tienden a ser más largas que las del anime clásico, lo que permite una mayor exploración de personajes y tramas secundarias.",
                item5:"Presencia en línea: El anime moderno tiene una mayor presencia en línea, con la disponibilidad de transmisiones en vivo y la capacidad de transmitir en línea, mientras que el anime clásico a menudo solo se puede encontrar en DVD y Blu-Ray.",
            },
            difeout: "Es importante tener en cuenta que estas son solo algunas de las posibles diferencias entre el anime moderno y clásico, y que cada anime es único en su propio estilo y contenido.",
            compara:"¿Cual epoca es mejor?",
            comparatext:"No se puede decir que un tipo de anime sea mejor que el otro, ya que cada uno tiene sus propias características, estilos y enfoques que pueden ser apreciados por diferentes personas. Algunos prefieren la simplicidad y la nostalgia del anime clásico, mientras que otros disfrutan de la complejidad y la innovación del anime moderno. ",
            comparasub:"¿Que importa realmente?",
            comparasubtext:"Lo importante es disfrutar del anime que se está viendo y apreciarlo por lo que es, que los espectadores encuentren anime que les guste y gozen de la experiencia de verlo. La elección depende del gusto personal y de lo que cada persona busque en el anime.",
            comparasubtext2:"Quedate con el anime que te atrape con su historia y sus personajes, que te mantenga al pendiente de cada situacion y que te atrape para generar esa experiencia de disfrute que se vive.",
            comparasubtext3:"En conclusión, mira por tu cuenta y experimenta a ti personalmente que animes y que generos de anime o tipos te atraen y logran hacer esa conexion contigo"
    },
    showContent(){
        document.querySelector("#art1").insertAdjacentHTML("beforeend", `
        <h3 class="pb-4 mb-4 fst-italic border-bottom">${this.gene.name}</h3>
        <article class="blog-post">
        <h2 class="blog-post-title">${this.gene.title}</h2><br>

        <p>${this.gene.paragranph}</p>
        <hr>
        <p>${this.gene.textito}.</p>
        <h2>${this.gene.exp}</h2>
        <p>${this.gene.txtexp}</p>
        <blockquote class="blockquote">
          <p>${this.gene.txtexp2}</p>
        </blockquote>
        <p>${this.gene.txtexp3}</p>
        <h3>${this.gene.listatitle}</h3>
        <p>${this.gene.listadesc}</p>
        <ul>
          <li>${this.gene.lista.item1}</li>
          <li>${this.gene.lista.item2}</li>
          <li>${this.gene.lista.item3}</li>
          <li>${this.gene.lista.item4}</li>
          <li>${this.gene.lista.item5}</li>
        </ul>
        <p>${this.gene.lista2desc} </p>
        <ol>
          <li>${this.gene.lista2.item1}</li> 
          <li>${this.gene.lista2.item2}</li>
          <li>${this.gene.lista2.item3}</li>
          <li>${this.gene.lista2.item4}</li>
          <li>${this.gene.lista2.item5}</li>
        </ol>
        <p>${this.gene.caract}</p>
        <dl>
          <dt>${this.gene.listacarac.item1.name}</dt>
          <dd>${this.gene.listacarac.item1.cont}</dd>
          <dt>${this.gene.listacarac.item2.name}</dt>
          <dd>${this.gene.listacarac.item2.cont}</dd>
          <dt>${this.gene.listacarac.item3.name}</dt>
          <dd>${this.gene.listacarac.item3.cont}</dd>
          <dt>${this.gene.listacarac.item4.name}</dt>
          <dd>${this.gene.listacarac.item4.cont}</dd>
          <dt>${this.gene.listacarac.item5.name}</dt>
          <dd>${this.gene.listacarac.item5.cont}</dd>
        </dl>
        <h2>${this.gene.difetitle}</h2>
        <p>${this.gene.difedesc}</p>
        <ul>
          <li>${this.gene.dife.item1}</li>
          <li>${this.gene.dife.item2}</li>
          <li>${this.gene.dife.item3}</li>
          <li>${this.gene.dife.item4}</li>
          <li>${this.gene.dife.item5}</li>
        </ul>
        <p>${this.gene.difeout}</p>
        <h2>${this.gene.compara}</h2>
        <p>T${this.gene.comparatext}</p>
        <h3>${this.gene.comparasub}</h3>
        <p>${this.gene.comparasubtext}</p>
        <p>${this.gene.comparasubtext2}</p>
        <p>T${this.gene.comparasubtext3}</p>
      </article>
        `)
    }
}