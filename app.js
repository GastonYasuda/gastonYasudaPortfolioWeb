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

proyectos.appendChild(proyectosUl)


fetch("./data/proyectos.json")
    .then(res => res.json())
    .then(data => {

        data.reverse().forEach(element => {

            let proyectoContainer = document.createElement("div")
            proyectoContainer.className = "proyectoContainer"
            proyectoContainer.setAttribute('data-aos', 'fade-down')
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
    })


//-----------------------------------------------------------CHALLENGE

const challenge = document.getElementById("challenge")

let challengeUl = document.createElement("ul")
challengeUl.className = "challengeUl"

challenge.appendChild(challengeUl)

fetch("./data/frontend-mentor.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            let challengeContainer = document.createElement("div")
            challengeContainer.className = "proyectoContainer"
            challengeContainer.setAttribute('data-aos', 'fade-up')
            challengeUl.appendChild(challengeContainer)

            let challengeTitulo = document.createElement("div")
            challengeTitulo.className = "proyectoTitulo"
            challengeTitulo.innerHTML = `<h5>${element.titulo}</h5>`
            challengeContainer.appendChild(challengeTitulo)

            let challengeLi = document.createElement("li")
            challengeLi.classList = "proyectoLi"

            challengeLi.innerHTML = `
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
            challengeContainer.appendChild(challengeLi)

            let descripcionUsadosContenedor = document.createElement('div')
            descripcionUsadosContenedor.className = "proyectoLi__descUsaContainer"
            challengeLi.appendChild(descripcionUsadosContenedor)


            let proyectoInfoTexto = document.createElement("div")
            proyectoInfoTexto.classList = "proyectoLi__descripcion"

            proyectoInfoTexto.innerHTML = `

                <p>${element.challengeInfo.text}</p>
            `

            descripcionUsadosContenedor.appendChild(proyectoInfoTexto)

            let challengeLiContenedor = document.createElement("div")
            challengeLiContenedor.classList = "proyectoLi__usados"
            challengeLiContenedor.innerHTML = `
                <h7>Lenguajes utilizados para crear la pantalla:</h7>
            `

            descripcionUsadosContenedor.appendChild(challengeLiContenedor)

            let programasUtilizadosChallenge = document.createElement("div")
            programasUtilizadosChallenge.className = "programasUtilizadosChallenge"


            for (let i = 0; element.challengeInfo.lenguajes.length > i; i++) {

                let usadoLi = document.createElement("li")
                usadoLi.classList = "imagenProgramasUtilizados"

                usadoLi.innerHTML = `
                  <img src=${element.challengeInfo.lenguajes[i]} alt="dataKey.titulo">
                  `
                programasUtilizadosChallenge.appendChild(usadoLi)
            }
            challengeLiContenedor.appendChild(programasUtilizadosChallenge)
        })

    })

//-----------------------------------------------------------TRABAJOS

const muestroPortfolio = document.getElementById("muestroPortfolio")


fetch("./data/trabajos.json")
    .then(res => res.json())
    .then(data => {
        for (const key in data) {

            let contenedorUlTrabajos = document.createElement("ul")
            contenedorUlTrabajos.className = "contenedorUlTrabajos"
            contenedorUlTrabajos.setAttribute('data-aos', 'fade-left')
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