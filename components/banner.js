import config from "../storage/config.js";
export default{
    showImage(){
        config.dataBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("Banner")))
        document.querySelector("#imgStyle").style.backgroundImage = `url(${this.cont.image})`;
    },
    show(){
        config.dataBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("Banner")));
        //creamos el worker 
        const ws = new Worker("storage/wsBanner.js", {type:"module"});
        //enviamos un msg al worker
        ws.postMessage({module: "showSectionBanner", data : this.cont});
        let id = [`#banner`];
        let count = 0;
        //eso es lo que llega del worker
        ws.addEventListener("message",(e)=>{
            //parseamos lo que trae  el evento, o sea el msg
            let doc = new   DOMParser().parseFromString(e.data, "text/html");
            //insertamos en nuestro index por medio del selector id
            document.querySelector(id[count]).append(...doc.body.children);
            //terminamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        });
    },
 
}