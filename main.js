
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

    console.log(petsData)

    parsedPets.forEach((pet) => {
        const clone = template.content.cloneNode(true)

        clone.querySelector("h3").textContent = pet.name
        clone.querySelector("p").textContent = pet.description

        wrapper.appendChild(clone)
    })
    document.querySelector(".pet-list-section").appendChild(wrapper)

}
dynamicPets()



// async function getPetData() {
//     const URL = "https://github.com/LearnWebCode/json-example/blob/master/pets-data.json"

//     const petPromise = await fetch(URL)
//     const petData = await petPromise.json()

//     console.log(petData)
// }
// getPetData()
