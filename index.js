const image = document.getElementById("img")
const name = document.getElementById("name")
const powerstats = document.getElementById("powerstats")
const intelligence = document.getElementById("intelligence")
const combat = document.getElementById("combat")
const gender = document.getElementById("gender")
const work = document.getElementById("work")
const randomHero = document.getElementById("random")
const search = document.getElementById("search")
const searchInput = document.getElementById("input")
let url = "https://www.superheroapi.com/api.php/115771031510470/"

fetch(url+"6")
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        image.src = json.image.url;
        name.textContent = `Name: ${json.name}`;
        powerstats.textContent = `Speed: ${json.powerstats.speed}`
        intelligence.textContent = `Intelligence: ${json.powerstats.intelligence}`
        combat.textContent = `Combat: ${json.powerstats.combat}`
        gender.textContent = `Gender: ${json.appearance.gender}`
        work.textContent = `Work: ${json.work.occupation}`

    })

randomHero.onclick = () =>{
    const numberHero = Math.floor((Math.random()*732)+1)
    fetch(url + numberHero)
        .then (response => response.json())
        .then (json => {
            image.src = json.image.url;
            name.textContent = `Name: ${json.name}`;
            powerstats.textContent = `Speed: ${json.powerstats.speed}`;
            intelligence.textContent = `Intelligence: ${json.powerstats.intelligence}`;
            combat.textContent = `Combat: ${json.powerstats.combat}`
            gender.textContent = `Gender: ${json.appearance.gender}`;
            work.textContent = `Work: ${json.work.occupation}`;
        })
} 
search.onclick = () => {
    fetch(url + "search/" + input.value)
        .then(response => response.json())
        .then(json =>{
            image.src = json.results[0].image.url
            name.textContent = `Name: ${json.results[0].name}`
            powerstats.textContent = `Speed: ${json.results[0].powerstats.speed}`
            combat.textContent = `Combat: ${json.results[0].powerstats.combat}`
            gender.textContent = `Gender: ${json.results[0].appearance.gender}`
            work.textContent = `Work: ${json.results[0].work.occupation}`

        })
    searchInput.value = ""
}
