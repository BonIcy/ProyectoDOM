let wsMyContent={
    showSectionContent(p1){
        return `
        <h3 class="pb-4 mb-4 fst-italic border-bottom">${p1.name}</h3>
        <article class="blog-post">
        <h2 class="blog-post-title">${p1.title}</h2><br>
        <p>${p1.paragranph}</p>
        <hr>
        <p>${p1.textito}.</p>
        <h2>${p1.exp}</h2>
        <p>${p1.txtexp}</p>
        <blockquote class="blockquote">
          <p>${p1.txtexp2}</p>
        </blockquote>
        <p>${p1.txtexp3}</p>
        <h3>${p1.listatitle}</h3>
        <p>${p1.listadesc}</p>
        <ul>
          <li>${p1.lista.item1}</li>
          <li>${p1.lista.item2}</li>
          <li>${p1.lista.item3}</li>
          <li>${p1.lista.item4}</li>
          <li>${p1.lista.item5}</li>
        </ul>
        <p>${p1.lista2desc} </p>
        <ol>
          <li>${p1.lista2.item1}</li> 
          <li>${p1.lista2.item2}</li>
          <li>${p1.lista2.item3}</li>
          <li>${p1.lista2.item4}</li>
          <li>${p1.lista2.item5}</li>
        </ol>
        <p>${p1.caract}</p>
        <dl>
          <dt>${p1.listacarac.item1.name}</dt>
          <dd>${p1.listacarac.item1.cont}</dd>
          <dt>${p1.listacarac.item2.name}</dt>
          <dd>${p1.listacarac.item2.cont}</dd>
          <dt>${p1.listacarac.item3.name}</dt>
          <dd>${p1.listacarac.item3.cont}</dd>
          <dt>${p1.listacarac.item4.name}</dt>
          <dd>${p1.listacarac.item4.cont}</dd>
          <dt>${p1.listacarac.item5.name}</dt>
          <dd>${p1.listacarac.item5.cont}</dd>
        </dl>
        <h2>${p1.difetitle}</h2>
        <p>${p1.difedesc}</p>
        <ul>
          <li>${p1.dife.item1}</li>
          <li>${p1.dife.item2}</li>
          <li>${p1.dife.item3}</li>
          <li>${p1.dife.item4}</li>
          <li>${p1.dife.item5}</li>
        </ul>
        <p>${p1.difeout}</p>
        <h2>${p1.compara}</h2>
        <p>T${p1.comparatext}</p>
        <h3>${p1.comparasub}</h3>
        <p>${p1.comparasubtext}</p>
        <p>${p1.comparasubtext2}</p>
        <p>T${p1.comparasubtext3}</p>
      </article>`
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyContent[`${e.data.module}`](e.data.data))
})
