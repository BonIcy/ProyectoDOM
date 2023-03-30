import config from "../storage/config.js";
export default{

   /*  showMyFooter(){
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <p>${this.linea1.cont} <a href="${this.linea1.href}">${this.linea1.name}</a> </p>
        <p>
         <a href="${this.linea2.href}">${this.linea2.cont}</a>
         </p>`)
    }, */
    show(){
    config.dataMyFooter();
    Object.assign(this, JSON.parse(localStorage.getItem("myFooter")))
        //creamos el worker 
        const ws = new Worker("storage/wsMyFooter.js", {type:"module"});
        //enviamos un msg al worker
        ws.postMessage({module: "showFooter", data : this.patas});
        let id = [`#footer`];
        let count = 0;
        //eso es lo que llega del worker
        ws.addEventListener("message",(e)=>{
            //parseamos lo que trae  el evento, o sea el msg
            let doc = new  DOMParser().parseFromString(e.data, "text/html");
            //insertamos en nuestro index por medio del selector id
            document.querySelector(id[count]).append(...doc.body.children);
            //terminamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
