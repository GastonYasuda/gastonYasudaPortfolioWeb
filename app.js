let portfolio = document.getElementById('portfolio')
const mostrarPDF = document.getElementById("mostrarPDF")

//-----------------------------------------------------------HOVER CHANGE-COLOR
function changeBg(color) {
    document.getElementById('home').style.backgroundColor = color;
    document.getElementById('footerContacto').style.backgroundColor = color;
}

//-----------------------------------------------------------BOTON MOSTRAR CV

function abrirCerrar() {
    console.log("click");
    const dondeMuestroPDF = document.getElementById("dondeMuestroPDF")
    dondeMuestroPDF.classList.toggle("mostrarPDFStyle")
}


//-----------------------------------------------------------PROYECTOS

const proyectos = document.getElementById("proyectos")

let proyectosUl = document.createElement("ul")
proyectosUl.className = "proyectoUl"
proyectosUl.setAttribute('data-aos', 'fade-left')
proyectos.appendChild(proyectosUl)


fetch("./data/proyectos.json")
    .then(res => res.json())
    .then(data => {

        data.forEach(element => {

            let proyectoContainer = document.createElement("div")
            proyectoContainer.className = "proyectoContainer"
            proyectosUl.appendChild(proyectoContainer)

            let proyectoTitulo = document.createElement("div")
            proyectoTitulo.className = "proyectoTitulo"
            proyectoTitulo.innerHTML = `<h5>${element.titulo}</h5>`
            proyectoContainer.appendChild(proyectoTitulo)


            let proyectoLi = document.createElement("li")
            proyectoLi.className = "proyectoLi"

            proyectoLi.innerHTML = `
                    <div class="proyectoLi__img">
                        <div class="imgEjemplo">
                            <img src=${element.foto} alt=${element.titulo}  >                         
                        </div>    
                            
                        <div class="proyectoLi__links">                            
                            <section class="proyectoLi__links-content">
                                <img src="./assets/program/webSiteIcon.png" alt="web logo">
                                <a href="${element.linkWeb}" target="_blank">${element.webName}</a>                        
                            </section>
                                    
                            <section class="proyectoLi__links-content">
                                <img src="./assets/program/github.png" alt="github logo">
                                <a href="${element.linkGit}" target="_blank">${element.gitName}</a>
                            </section>
                        </div>
                </div>
              `
            proyectoContainer.appendChild(proyectoLi)

            let descripcionUsadosContenedor = document.createElement('div')
            descripcionUsadosContenedor.className = "proyectoLi__descUsaContainer"
            proyectoLi.appendChild(descripcionUsadosContenedor)


            let proyectoInfoTexto = document.createElement("div")
            proyectoInfoTexto.classList = "proyectoLi__descripcion"

            proyectoInfoTexto.innerHTML = `

                <p>${element.projectInfo.text}</p>

            `

            descripcionUsadosContenedor.appendChild(proyectoInfoTexto)



            let proyectoLiContenedor = document.createElement("div")
            proyectoLiContenedor.classList = "proyectoLi__usados"
            proyectoLiContenedor.innerHTML = `
                <h7>Para realizar esta aplicación utilice:</h7>
            `

            descripcionUsadosContenedor.appendChild(proyectoLiContenedor)

            for (let i = 0; element.projectInfo.usado.length > i; i++) {

                let usadoLi = document.createElement("li")
                usadoLi.classList = "usadoLi"

                usadoLi.innerHTML = `
                  <p>- ${element.projectInfo.usado[i].item}</p>
                  `

                proyectoLiContenedor.appendChild(usadoLi)
            }

        })


        // for (const key in data) {

        //     let used = data[key].projectInfo.usado
        //     let texto = data[key].projectInfo

        //     let projectInfo = document.getElementById("projectInfo")
        //     proyectosUl.appendChild(projectInfo)

        //     let projectInfoText = document.createElement("div")
        //     projectInfoText.innerHTML = `
        //         <p>${texto.text}</p > 
        //     `
        //     projectInfo.appendChild(projectInfoText)


        //     for (let i = 0; used.length > i; i++) {
        //         // console.log(used[i]);
        //         let projectInfoUl = document.createElement("ul")

        //         projectInfoUl.innerHTML = `
        //              <p> ${used[i].item}</p>
        //         `
        //         projectInfo.appendChild(projectInfoUl)
        //     }
        // }
    })




//-----------------------------------------------------------TRABAJOS

const muestroPortfolio = document.getElementById("muestroPortfolio")

fetch("./data/trabajos.json")
    .then(res => res.json())
    .then(data => {
        for (const key in data) {

            let contenedorUlTrabajos = document.createElement("ul")
            contenedorUlTrabajos.className = "contenedorUlTrabajos"
            contenedorUlTrabajos.setAttribute('data-aos', 'fade-up')
            muestroPortfolio.appendChild(contenedorUlTrabajos)

            const dataKey = data[key]

            let liTrabajo = document.createElement("li")
            liTrabajo.className = "liTrabajo"
            liTrabajo.innerHTML = `
                    <div class="liTrabajo__img">    
                        <img src="${dataKey.foto}" alt="${dataKey.titulo}">
                    </div>
                    <span class="liTrabajo__titulo">${dataKey.titulo}</span>
                    <span class="liTrabajo__descripcion">${dataKey.descripcion}</span>

                    `
            contenedorUlTrabajos.appendChild(liTrabajo)


            let programasUtilizados = document.createElement("div")
            programasUtilizados.className = "programasUtilizados"

            for (let i = 0; i < dataKey["programa"].length; i++) {
                let imagenProgramasUtilizados = document.createElement("div")
                imagenProgramasUtilizados.className = "imagenProgramasUtilizados"
                imagenProgramasUtilizados.innerHTML = `

                     <img src=${dataKey["programa"][i]} alt="dataKey.titulo">

                     `


                programasUtilizados.appendChild(imagenProgramasUtilizados)
            }
            liTrabajo.appendChild(programasUtilizados)

        }
    }
    )