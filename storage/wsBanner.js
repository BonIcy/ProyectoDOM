let wsBanner={
    showSectionBanner(p1){
        return `
        <h1 class="display-4 fst-italic">${p1.titulo}</h1>
        <p class="lead my-3">${p1.paragraph}</p>
        <p class="lead mb-0"><a href="${p1.btn.href}" class="text-white fw-bold">${p1.btn.name}</a></p>`
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsBanner[`${e.data.module}`](e.data.data))
})

/* show(){
    //creamos el worker 
    const ws = new Worker("storahe/wsBanner.js", {type:"module"});
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

} */