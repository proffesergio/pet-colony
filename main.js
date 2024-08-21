
const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()


async function getWeatherData() {
    const URL = "https://api.openweathermap.org/data/2.5/weather?lat=23.80203426659407&lon=90.41696766576916&appid=712af7c3d1de067b43f618336419e646&units=imperial"

    const weatherPromise = await fetch(URL)
    const weatherData = await weatherPromise.json()

    const currentWeather = weatherData.main.temp

    console.log(currentWeather)

    document.querySelector("#dynamic-temp").textContent = currentWeather
}
getWeatherData()

async function dynamicPets() {
    // const petsPromise = await fetch("pets-data.json")
    // const petsData = await petsPromise.json()

    const petsPromise = await fetch("pets-data.json")
    const petsData = await petsPromise.json()

    const parsedPets = petsData.pets

    parsedPets.forEach((pet) => {
        const clone = template.content.cloneNode(true)

        clone.querySelector(".pet-card").dataset.species = pet.species

        clone.querySelector("h3").textContent = pet.name
        clone.querySelector("p").textContent = pet.description

        clone.querySelector(".pet-age").textContent = petAgeCalculator(pet.birthYear)

        if (!pet.photo) pet.photo = "images/fallback.jpg"
        clone.querySelector(".pet-card-photo img").src = pet.photo
        clone.querySelector(".pet-card-photo").alt = `A ${pet.species} named ${pet.name}`



        wrapper.appendChild(clone)
    })
    document.querySelector(".pet-list-section").appendChild(wrapper)

}
dynamicPets()

function petAgeCalculator(birthYear) {
    const currentYear = new Date().getFullYear()

    const age = currentYear - birthYear
    if (age == 1) return "1 year old"
    if (age < 1) return "Less than a year old"

    return age + " years old"
}

// pet filter button code

const petFilterButtons = document.querySelectorAll(".pet-filter button")

petFilterButtons.forEach(element => {
    element.addEventListener("click", handleClickEvent)
})

function handleClickEvent(event) {
    // remove active class
    petFilterButtons.forEach(element => element.classList.remove("active"))

    // add active class to the clicked button
    event.target.classList.add("active")

    // filter pets
    const currentFilter = event.target.dataset.filter

    document.querySelectorAll(".pet-card").forEach(el => {
        if (currentFilter == el.dataset.species || currentFilter == "all") {
            el.style.display = "grid"
        } else {
            el.style.display = "none"
        }
    })
}

// async function getPetData() {
//     const URL = "https://github.com/LearnWebCode/json-example/blob/master/pets-data.json"

//     const petPromise = await fetch(URL)
//     const petData = await petPromise.json()

//     console.log(petData)
// }
// getPetData()
