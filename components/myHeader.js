export default {
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
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",` <a class="blog-header-logo text-warning" href="${this.title.href}">${this.title.name}</a>`)
    },
    listarClasicos(){
        let plantilla = "";
        this.clasicos.forEach((val, id)=>{
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#clasicos").insertAdjacentHTML("beforeend", plantilla)
    }//<a class="p-2 link-secondary" href="#">World</a>
}