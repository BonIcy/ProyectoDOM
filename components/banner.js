export default{
    titulo: "¿Que es un anime clasico?",
    paragraph: "Un anime clásico es una serie de animación japonesa que se produjo en las décadas de 1960, 1970 y 1980. Estas series suelen tener un estilo de animación más tradicional y menos sofisticado que las producciones actuales. A menudo, se centran en aventuras épicas y dramáticas, con héroes que luchan contra villanos poderosos y enfrentan desafíos emocionales y morales. ",
    btn:{
        name:"Leer mas sobre esto...",
        href: "#"
    },
    image: "../img/fondito.jpg",
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `
        <h1 class="display-4 fst-italic">${this.titulo}</h1>
        <p class="lead my-3">${this.paragraph}</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">${this.btn.name}</a></p>`)
    }
}