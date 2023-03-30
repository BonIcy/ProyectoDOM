let wsMyPost={
    showSecMyPost(p1){
        return `
        <div class="col-md-6">
              <div class="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards" style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${p1.name}</h3>
                  <div class="mb-1 text-muted">${p1.type}</div>
                  <p class="card-text mb-auto">${p1.paragraph}</p>
                  <a href="${p1.btn.href}" class="stretched-link">${p1.btn.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${p1.image}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${p1.name2}</h3>
                  <div class="mb-1 text-muted">${p1.type2}</div>
                  <p class="card-text mb-auto">${p1.paragraph2}</p>
                  <a href="${p1.btn2.href}" class="stretched-link">${p1.btn2.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${p1.image2}" class="responsiveImg">
                  </div>
                </div>
                </div>

              <div class="col-md-6" >
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${p1.name3}</h3>
                  <div class="mb-1 text-muted">${p1.type3}</div>
                  <p class="card-text mb-auto">${p1.paragraph3}</p>
                  <a href="${p1.btn3.href}" class="stretched-link">${p1.btn3.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${p1.image3}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${p1.name4}</h3>
                  <div class="mb-1 text-muted">${p1.type4}</div>
                  <p class="card-text mb-auto">${p1.paragraph4}</p>
                  <a href="${p1.btn4.href}" class="stretched-link">${p1.btn4.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${p1.image4}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary"></strong>
                    <h3 class="mb-0">${p1.name5}</h3>
                    <div class="mb-1 text-muted">${p1.type5}</div>
                    <p class="card-text mb-auto">${p1.paragraph5}</p>
                    <a href="${p1.btn5.href}" class="stretched-link">${p1.btn5.name}</a>
                 </div> 
                    <div class="col-auto d-none d-lg-block ">
                      <img src="${p1.image5}" class="responsiveImg">
                    </div>
                  </div>
                  </div>

                  <div class="col-md-6">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                    <div class="col p-4 d-flex flex-column position-static">
                      <strong class="d-inline-block mb-2 text-primary"></strong>
                      <h3 class="mb-0">${p1.name6}</h3>
                      <div class="mb-1 text-muted">${p1.type6}</div>
                      <p class="card-text mb-auto">${p1.paragraph6}</p>
                      <a href="${p1.btn6.href}" class="stretched-link">${p1.btn6.name}</a>
                   </div> 
                      <div class="col-auto d-none d-lg-block ">
                        <img src="${p1.image6}" class="responsiveImg">
                      </div>
                    </div>
                    </div>
    `
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyPost[`${e.data.module}`](e.data.data))
})