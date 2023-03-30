let wsMyAside = {
    showAside(p2){

        const data = p2.map((val, id)=>{
            if(val.paragranph){
                return this.cards(val);
            }else{
                return this.list(val);
            }
        })  
        return data.join("<br>")
    },
    cards(p1){
       return `
       <div class="p-4 m-3 bg-secondary rounded"> <h4 class="fst-italic">${p1.title}</h4> <p class="mb-0">${p1.paragranph}</p>
        </div>`;
        },
    
    list(p1){
        return `
        <div class="p-4">
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled d-flex flex-column gap-2 mb-0">
                ${p1.link.map((val, id) =>`<li><a class="continue" href="${val.href}">${val.name}  <br><em class="fechas">${val.href}</em> </a></li>`).join("")}      
            </ol>
        </div>
        `;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyAside[`${e.data.module}`](e.data.data));
})