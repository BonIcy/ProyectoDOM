import config from "../storage/config.js";
export default{
  show(){
    config.dataMyContentwTable();
    Object.assign(this, JSON.parse(localStorage.getItem("myContentwTable")))
    //creamos el worker  
    const ws = new Worker("storage/wsMyContentwTable.js", {type:"module"});
    //enviamos un msg al worker
    ws.postMessage({module: "showArt2", data : this.gene});
    let id = [`#art2`];
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
  },
    show2(){
      config.dataMyContentwTable();
    Object.assign(this, JSON.parse(localStorage.getItem("myContentwTable")))
       //creamos el worker 
       const ws = new Worker("storage/wsMyContentwTable.js", {type:"module"});
       //enviamos un msg al worker
       ws.postMessage({module: "showTable2", data : this.gene.tablita});
       let id = ["#art2"];
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
    },
    show3(){
      config.dataMyContentwTable();
    Object.assign(this, JSON.parse(localStorage.getItem("myContentwTable")))
           //creamos el worker 
           const ws = new Worker("storage/wsMyContentwTable.js", {type:"module"});
           //enviamos un msg al worker
           ws.postMessage({module: "showPart2", data : this.gene});
           let id = [`#art2`];
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
    },
    show4(){
      config.dataMyContentwTable();
    Object.assign(this, JSON.parse(localStorage.getItem("myContentwTable")))
           //creamos el worker 
           const ws = new Worker("storage/wsMyContentwTable.js", {type:"module"});
           //enviamos un msg al worker
           ws.postMessage({module: "showBtns", data : this.gene});
           let id = [`#btns`];
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

   /*  showParte1(){
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
      } */
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
