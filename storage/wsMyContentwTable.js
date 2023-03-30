let wsMyContentwTable={
    showArt2(p1){
        return `
        <h2 class="blog-post-title">${p1.title}</h2>
        <p class="blog-post-meta"> ${p1.dt.dte}</p>
        <p>${p1.txts.p1}</p>
        <blockquote>
        <p>${p1.txts.p2}</p>
        </blockquote>
        <p>${p1.txts.p3}</p>
        <h3>${p1.txts.tbtitle}</h3>
        <p>${p1.txts.tbtxt}</p>

        `
       
    },
    showTable2(p1){
        let plantilla = p1.map((val, id)=>{
        return ` 
        <table class="table text-white">
        <thead id="tablita">
        <tr>
          ${val.theader.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
        </tr>
        </thead>
        <tbody class="bodyTable">
        <tr>
        ${val.NintamaRantaro.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")} 
        </tr>
        <tr>
        ${val.DetectiveConan.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")}
        </tr>
        <tr>
        ${val.OnePiece.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join(" ")}
        </tr>
        <tr>
        ${val.DragonBall.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")}
        </tr>
        <tr>
        ${val.Bleach.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")}
        </tr>
        </tbody>
        </table>
        `
      })
      return plantilla.join("")
      
    },
    showPart2(p1){
        return `
        <p>${p1.textito}<br><br></p>
        <h2 class="blog-post-title">${p1.finaltitle}</h2>
        <p class="blog-post-meta">${p1.finaldte}</p>

        <p>${p1.finaltxt}</p>
        <ul>
          <li>${p1.finallist.item1}</li>
          <li>${p1.finallist.item2}</li>
          <li>${p1.finallist.item3}</li>
        </ul>
        <p>${p1.finaltxt2}</p>`
    },
    showBtns(p1){
        return`
        <p>${p1.textito}<br><br></p>
        <h2 class="blog-post-title">${p1.finaltitle}</h2>
        <p class="blog-post-meta">${p1.finaldte}</p>

        <p>${p1.finaltxt}</p>
        <ul>
          <li>${p1.finallist.item1}</li>
          <li>${p1.finallist.item2}</li>
          <li>${p1.finallist.item3}</li>
        </ul>
        <p>${p1.finaltxt2}</p>`
      },
      showBtns(p1){
        return`
        <a class="btn btn-outline-primary" href="#">${p1.btns.b1}</a>
        <a class="btn btn-outline-secondary" href="#">${p1.btns.b2}</a>`
    }
   /*  return plantilla.join("") */
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyContentwTable[`${e.data.module}`](e.data.data))
})