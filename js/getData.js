const API = "https://pokeapi.co/api/v2/pokemon/25"
const img = "https://pokeapi.co/api/v2/pokemon-form/25/"
let html = ""
//obtener resultado API
const getData =(api)=>{
    return fetch(api)
        .then((Response)=> Response.json())
        .then((json)=>{
            llenarDatos(json), fillHTML()
        })
        .catch((error)=>{
            console.log("Error :", error)
        })
}
const getImg = (api) => {
    return fetch(api)
        .then((Response) => Response.json())
        .then((json) => {
            llenarImage(json)
        })
        .catch((error) => {
            console.log("Error :", error)
        })
}
const llenarImage = (img)=>{
    html += '<div class="col-12 ">'
    html += '<div class="card border border-dark" style="width: 18rem;">'
    html += `<img src="${img.sprites["front_default"]}" class="card-img-top" alt="...">`
}
const llenarDatos = (data)=>{
    html += '<div class="card-body">'
    html += `<h5 class="card-title"><b>Name: </b>${data.forms[0]["name"]}</h5>`
    html += `<h5 class="card-title"><b>Habilities: </b><br>${data.abilities[0]["ability"]["name"]}</h5>`
    html += `<h5 class="card-title">${data.abilities[1]["ability"]["name"]}</h5>`
    html += '</div>'
    html += '</div>'
    html += '</div>'
    /*data.results.forEach((pj) => {
        html += '<div class="col">'
        html += '<div class="card" style="width: 10rem;">'
        html += `<img src="${pj.image}" class="card-img-top" alt="...">`
        html += '<div class="card-body">'
        html += `<h5 class="card-title"><b>Name: </b>${pj.name}</h5>`
        html += `<p class="card-text"><b>Status: </b>${pj.status}</p>`
        html += `<p class="card-text"><b>Species: </b>${pj.species}</p>`
        html += `<p class="card-text"><b>Gender: </b>${pj.gender}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'
    });*/
    
}
const fillHTML = ()=>{
    document.getElementById("datosPersonajes").innerHTML += html
}

//ejecutar getData
getImg(img)
getData(API)
document.getElementById("goToPage").addEventListener('click', ()=>{
    location.replace("./poke3.html")
})

