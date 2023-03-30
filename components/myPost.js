import config from "../storage/config.js";
export default{
    show(){
    config.dataMyPost();
    Object.assign(this, JSON.parse(localStorage.getItem("myPost")))
      //creamos el worker 
      const ws = new Worker("storage/wsMyPost.js", {type:"module"});
      //enviamos un msg al worker
      ws.postMessage({module: "showSecMyPost", data : this.post});
      let id = [`#post`];
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
   /*  showPost(){
        this.post.forEach((val,id)=>{
            document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
              <div class="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards" style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name}</h3>
                  <div class="mb-1 text-muted">${val.type}</div>
                  <p class="card-text mb-auto">${val.paragraph}</p>
                  <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name2}</h3>
                  <div class="mb-1 text-muted">${val.type2}</div>
                  <p class="card-text mb-auto">${val.paragraph2}</p>
                  <a href="${val.btn2.href}" class="stretched-link">${val.btn2.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image2}" class="responsiveImg">
                  </div>
                </div>
                </div>

              <div class="col-md-6" >
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name3}</h3>
                  <div class="mb-1 text-muted">${val.type3}</div>
                  <p class="card-text mb-auto">${val.paragraph3}</p>
                  <a href="${val.btn3.href}" class="stretched-link">${val.btn3.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image3}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary"></strong>
                  <h3 class="mb-0">${val.name4}</h3>
                  <div class="mb-1 text-muted">${val.type4}</div>
                  <p class="card-text mb-auto">${val.paragraph4}</p>
                  <a href="${val.btn4.href}" class="stretched-link">${val.btn4.name}</a>
               </div> 
                  <div class="col-auto d-none d-lg-block ">
                    <img src="${val.image4}" class="responsiveImg">
                  </div>
                </div>
                </div>

                <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary"></strong>
                    <h3 class="mb-0">${val.name5}</h3>
                    <div class="mb-1 text-muted">${val.type5}</div>
                    <p class="card-text mb-auto">${val.paragraph5}</p>
                    <a href="${val.btn5.href}" class="stretched-link">${val.btn5.name}</a>
                 </div> 
                    <div class="col-auto d-none d-lg-block ">
                      <img src="${val.image5}" class="responsiveImg">
                    </div>
                  </div>
                  </div>

                  <div class="col-md-6">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards"style="background-color:black; border:1px solid white;">
                    <div class="col p-4 d-flex flex-column position-static">
                      <strong class="d-inline-block mb-2 text-primary"></strong>
                      <h3 class="mb-0">${val.name6}</h3>
                      <div class="mb-1 text-muted">${val.type6}</div>
                      <p class="card-text mb-auto">${val.paragraph6}</p>
                      <a href="${val.btn6.href}" class="stretched-link">${val.btn6.name}</a>
                   </div> 
                      <div class="col-auto d-none d-lg-block ">
                        <img src="${val.image6}" class="responsiveImg">
                      </div>
                    </div>
                    </div>
             `)
        })
    }
    */
}

/* */