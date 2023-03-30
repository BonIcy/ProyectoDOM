let wsMyFooter={
    showFooter(p1){
        return `
        <p>${p1.linea1.cont} <a href="${p1.linea1.href}">${p1.linea1.name}</a> </p>
        <p>
         <a href="${p1.linea2.href}">${p1.linea2.cont}</a>
         </p>
        `
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data))
})