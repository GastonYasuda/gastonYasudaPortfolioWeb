let portfolio = document.getElementById('portfolio')
const mostrarPDF = document.getElementById("mostrarPDF")

//-----------------------------------------------------------HOVER CHANGE-COLOR
function changeBg(color) {
    document.getElementById('home').style.backgroundColor = color;
}

//-----------------------------------------------------------BOTON MOSTRAR CV

function abrirCerrar() {
    console.log("click");
    const dondeMuestroPDF = document.getElementById("dondeMuestroPDF")
    dondeMuestroPDF.classList.toggle("mostrarPDFStyle")
}


//-----------------------------------------------------------PROYECTOS

const proyectos = document.getElementById("proyectos")
const portfolio_proyectos = document.getElementById("portfolio_proyectos")

let proyectosUl = document.createElement("ul")
proyectosUl.className = "proyectoUl"
proyectos.appendChild(proyectosUl)

fetch("./data/proyectos.json")
    .then(res => res.json())
    .then(data => {
        for (const key in data) {

            let proyectoLi = document.createElement("li")
            proyectoLi.className = "proyectoLi"
            proyectoLi.innerHTML = `

                    <div class="imgEjemplo">
                         <img src=${data[key].foto} alt=${data[key].titulo}  >
                    </div>

                    <span class="proyectoLi__titulo">${data[key].titulo}</span>

                    <div class="proyectoLi__links">

                        <section class="proyectoLi__links-content">
                            <img src="./assets/program/webSiteIcon.png" alt="web logo">
                            <a href="${data[key].linkWeb}" target="_blank">${data[key].webName}</a>                        
                        </section>

                        <section class="proyectoLi__links-content">
                            <img src="./assets/program/github.png" alt="github logo">
                            <a href="${data[key].linkGit}" target="_blank">${data[key].gitName}</a>
                        </section>
                    </div>

                    `
            proyectosUl.appendChild(proyectoLi)
        }
    }
    )


//-----------------------------------------------------------TRABAJOS
const muestroPortfolio = document.getElementById("muestroPortfolio")

fetch("./data/trabajos.json")
    .then(res => res.json())
    .then(data => {
        for (const key in data) {

            let contenedorUlTrabajos = document.createElement("ul")
            contenedorUlTrabajos.className = "contenedorUlTrabajos"
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