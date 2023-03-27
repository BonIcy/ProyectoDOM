export default{
    linea1:{
        cont:"Blog hecho por",
        name:"Jesus Martinez",
        href:"https://github.com/JesusEduardoMartinezReyesCAMPUS1"
    },
    linea2:{
        cont: "Volver al inicio",
        href: "#",
    },
    showMyFooter(){
        document.querySelector("#footer").insertAdjacentHTML("beforeend", `
        <p>${this.linea1.cont} <a href="${this.linea1.href}">${this.linea1.name}</a> </p>
        <p>
         <a href="${this.linea2.href}">${this.linea2.cont}</a>
         </p>`)
    }
}