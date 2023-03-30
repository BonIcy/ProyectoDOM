export default {
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title: {name:"Animes clasicos",
            href: "#"},
    clasicos: [
        {
            name: "Dragon Ball",
            href: "#"
        },
        {
            name: "One Piece",
            href: "#"
        },
        {
            name: "Naruto",
            href: "#"
        },
        {
            name: "Yu-Gi-Oh",
            href: "#"
        },
        {
            name: "Super Campeones",
            href: "#"
        },
        {
            name:"Death Note",
            href: "#"
        }
    ],
        }))
    },
    dataBanner(){
        localStorage.setItem("Banner", JSON.stringify({
            cont:{
            titulo: "¿Que es un anime clasico?",
            paragraph: "Un anime clásico es una serie de animación japonesa que se produjo en las décadas de 1960, 1970 y 1980. Estas series suelen tener un estilo de animación más tradicional y menos sofisticado que las producciones actuales. A menudo, se centran en aventuras épicas y dramáticas, con héroes que luchan contra villanos poderosos y enfrentan desafíos emocionales y morales. ",
            btn:{
            name:"Leer mas sobre esto...",
            href: "https://es.wikipedia.org/wiki/Historia_del_anime"
            },
            image: "../img/fondito.jpg", 
            },
        }))
    },
    dataMyPost(){
        localStorage.setItem("myPost", JSON.stringify({
            post:{
                article:"DBZ",
                name: "Dragon ball Z",
                type: "Anime, Action, Comedy, Drama, Fantasy, ",
                paragraph: `Anime de acción y aventura que sigue a Goku y sus amigos luchando contra poderosos enemigos.`,
                image : "../img/dbz.jpeg",
                btn:{
                    name:"Mas acerca de esto",
                    href:"https://dragonball.fandom.com/es/wiki/Dragon_Ball_Z"
                    },
                
                article2:"One Piece",
                name2: "One Piece",
                type2: "Comedy, Adventure, Action fiction",
                paragraph2: `Monkey D. Luffy y su tripulación de piratas buscan el One Piece para convertirse en el rey de los piratas.`,
                image2: "../img/opp.webp",
                btn2:{
                  name:"Mas acerca de esto",
                  href:"https://onepiece.fandom.com/es/wiki/One_Piece_(anime)",
                  },
        
                article3:"Naruto",
                name3: "Naruto",
                type3: "Shonen manga, Action manga, Fantasy",
                paragraph3: `Naruto es un joven ninja con un sueño de convertirse en el Hokage y proteger a su aldea. Aventuras, luchas y amistad.`,
                image3: "../img/narutin.jpg",
                btn3:{
                  name:"Mas acerca de esto",
                  href:"https://naruto.fandom.com/es/wiki/Naruto_(Anime)",
                  },
                article4:"YGO",
                name4: "Yu-Gi-Oh",
                type4: "Adventure fiction, Science fantasy",
                paragraph4: `Duelos de cartas con monstruos y hechizos para salvar el mundo de amenazas sobrenaturales en Yu-Gi-Oh!`,
                image4 : "../img/ygo.png",
                btn4:{
                    name:"Mas acerca de esto",
                    href:"https://yugioh.fandom.com/es/wiki/Yu-Gi-Oh!_(Serie)"
                    },
                article5:"Super Campeones",
                name5: "Super Campeones",
                type5: "Shonen manga, Sports manga",
                paragraph5: `"Super Campeones" es un anime sobre fútbol que cuenta la historia de Oliver Atom y su equipo mientras compiten en torneos y superan obstáculos.`,
                image5 : "../img/sc.webp",
                btn5:{
                    name:"Mas acerca de esto",
                    href:"https://supercampeones.fandom.com/es/wiki/Capit%C3%A1n_Tsubasa_(serie_de_1983)"
                    }, 
                article6:"Death Note",
                name6: "Death Note",
                type6: " Horror, Drama, Mystery, Suspense, Thriller, Crime TV",
                paragraph6: `Un cuaderno sobrenatural permite a su dueño matar a cualquier persona cuyo nombre escriba en él.
                `,
                image6 : "../img/deathnote.webp",
                btn6:{
                    name:"Mas acerca de esto",
                    href:"https://deathnote.fandom.com/es/wiki/Death_Note_(Serie)"
                    }     
               },
        }))
    },
    dataMyContent(){
        localStorage.setItem("myContent", JSON.stringify({
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
        }))
    },
    dataMyContentwTable(){
        localStorage.setItem("myContentwTable", JSON.stringify({
            gene:{
                title:"Razones por las que deberias ver anime",
                dt:{
                    dte:"Marzo 24, 2023. Escrito por Jesus Martinez",
                    dteref:"https://chat.openai.com/chat", 
               },
               txts:{
                    p1:"Ver anime puede ser una buena opción por varias razones. En primer lugar, el anime ofrece una gran diversidad de géneros y temáticas, lo que permite que se pueda encontrar una historia que resulte interesante o entretenida para cualquier persona. Además, muchas veces el anime aborda temas profundos y complejos de una manera que puede ser difícil de encontrar en otros medios, lo que puede resultar en una experiencia de entretenimiento más rica y significativa.",
                    p2:"Otra razón para ver anime es que las animaciones japonesas suelen tener un nivel de calidad visual muy alto, con una atención al detalle y una fluidez en la animación que puede ser impresionante. Además, el anime a menudo tiene una banda sonora impactante que puede contribuir a la atmósfera y el impacto emocional de la historia.",
                    p3:"Por último, ver anime también puede ser una forma de aprender sobre la cultura y la sociedad japonesa, lo que puede ser interesante y enriquecedor desde un punto de vista educativo y cultural. En general, ver anime puede ser una experiencia de entretenimiento emocionante y significativa que ofrece una gran diversidad de historias y temáticas, un alto nivel de calidad visual y sonora, y una ventana a una cultura diferente.",
                    tbtitle:"Algunos de los animes mas largos",
                    tbtxt:`Esto teniendo en cuenta la cantidad de capitulos y su duracion (incluyendo "relleno").`
               },
               tablita:[{
                theader:[
                  {name: "Anime (Incluye todas las sagas y arcos de la franquicia hasta el momento"},
                  {name: "Numero total de capitulos canon hasta la fecha"},
                  {name: "Promedio de duracion de cada capitulo"},
                ],
                NintamaRantaro:[
                  {name: "Nintama Rantaro"},
                  {name: "2169 episodios y sumando"},
                  {name: "24 minutos aprox."},
                ],
                DetectiveConan:[
                  {name: "DetectiveConan"},
                  {name: "974 episodios y sumando"},
                  {name: "24-25 minutos."},
                ],
                OnePiece:[
                  {name: "One Piece"},
                  {name: "930 episodios y sumando"},
                  {name: "23-24 minutos."},
                ],
                DragonBall:[
                  {name: "Dragon Ball"},
                  {name: "575 episodios"},
                  {name: "23-24 minutos."},
                ],
                Bleach:[
                  {name: "Bleach"},
                  {name: "366 episodios"},
                  {name: "24-25 minutos."},
                ],
               }],
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
        }))
    },
    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
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
        }))
    },
    dataMyFooter(){
        localStorage.setItem("myFooter", JSON.stringify({
            patas:{
                linea1:{
                    cont:"Blog hecho por",
                    name:"Jesus Martinez",
                    href:"https://github.com/JesusEduardoMartinezReyesCAMPUS1"
                },
                linea2:{
                    cont: "Volver al inicio",
                    href: "#",
                }
                },
        }))
    }
}