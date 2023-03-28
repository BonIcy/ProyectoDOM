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

    show(){
        //creamos el worker
        const ws = new Worker("storage/wsMyHeader.js",{type:"module"});
        let id = [];
        let count = 0;
        //enviamos un msg al worker
        ws.postMessage({module: "listTitle",data : this.title});
        ws.postMessage({module : "listItems", data : this.clasicos});
        id =[`#title`, `#clasicos`];
        
        //esto es lo que recibe el worker
        ws.addEventListener("message",(e)=>{
            //parseamos lo que trae el evento, es decir, el mensaje
            let doc = new DOMParser().parseFromString(e.data, `text/html`);//recordar poner el html y no el xml

            //insertamos el id de clasicos en nuestro html
            document.querySelector(id[count]).append(...doc.body.children);

            //terminamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}