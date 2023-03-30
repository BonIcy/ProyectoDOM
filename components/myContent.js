import config from "../storage/config.js";
export default{
    show(){
        config.dataMyContent();
        Object.assign(this, JSON.parse(localStorage.getItem("myContent")));
        //creamos el worker 
        const ws = new Worker("storage/wsMyContent.js", {type:"module"});
        //enviamos un msg al worker
        ws.postMessage({module: "showSectionContent", data : this.gene});
        let id = [`#art1`];
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

/*     showContent(){
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
    } */