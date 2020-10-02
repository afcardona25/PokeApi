

const API = "https://pokeapi.co/api/v2/pokemon/"
const img = "https://pokeapi.co/api/v2/pokemon-form/"
let html = ""
let pokemons = []
//obtener resultado API
const getData = (api) => {
    return fetch(api)
        .then((Response) => Response.json())
        .then((json) => {
            llenarDatos(json), fillHTML()
        })
        .catch((error) => {
            console.log("Error data:", error)
        })
}
const getImg = (imgApi) => {
    return fetch(imgApi)
        .then((Response) => Response.json())
        .then((json) => {
            llenarImage(json)
        })
        .catch((error) => {
            console.log("Error image:", error)
        })
}
const llenarImage = (img) => {
    html += '<div class="col">'
    html += '<div class="card" style="width: 18rem;">'
    html += `<img src="${img.sprites["front_default"]}" class="card-img-top" alt="...">`
}
const llenarDatos = (data) => {
    html += '<div class="card-body">'
    html += `<h5 class="card-title"><b>Name: </b>${data.forms[0]["name"]}</h5>`
    html += `<h5 class="card-title"><b>Habilities: </b><br>${data.abilities[0]["ability"]["name"]}</h5>`
    
    html += '</div>'
    html += '</div>'
    html += '</div>'

}
const fillHTML = () => {
    document.getElementById("datosPersonajes").innerHTML = html
}

//ejecutar getData

for(i=0; i<3; i++){
    let poke1 = Math.floor(Math.random() * 893)
    //console.log(poke1)
    pokemons.push(poke1)
    
    
}
console.log(pokemons)
function getRandomPokes(){
    
    for(i=0;i<pokemons.length;i++){
        let specificImg = img + pokemons[i]
        let specificAPI = API + pokemons[i]
        getImg(specificImg)
        getData(specificAPI)
    }
  
}
setTimeout(getRandomPokes(), 9000)



