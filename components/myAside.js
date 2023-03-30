import config from "../storage/config.js";
export default { 
 show(){
   config.dataMyAside();
   Object.assign(this, JSON.parse(localStorage.getItem("myAside")));
    const ws = new Worker("storage/wsMyAside.js", {type:"module"});
    ws.postMessage({module: "showAside", data: this.nav});
    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector("#navb").append(...doc.body.children);
        ws.terminate() 
    })
},
} 
   
   
  /*  const data = this.nav.map((val,id) => { //el map es como un ForEach retornando un string o copia de lo que se haya asignado
        return(
            (val.link)
            ? this.list(val) //se usa ? para reemplazar if
            : this.cards(val) // se usa : para reemplazar else if
        );  
    });
    document.querySelector("#navb").insertAdjacentHTML("beforeend", data.join("")) // convertir el array ennumerado en string
 },
 cards(p1){
    return`
    <div class="p-4 mb-3  rounded">
          <h4 class="fst-italic">${p1.title}</h4>
          <p class="mb-0">${p1.paragranph}</p>
    </div>`;
 },
 list(p1){
    return`
    <div class="p-4">
    <h4 class="fst-italic">${p1.title}</h4>
    <ol class="list-unstyled mb-0 ">${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
      </ol>
  </div>
    `;
 }
}
 */