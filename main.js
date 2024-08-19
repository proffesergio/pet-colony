async function getWeatherData() {
    const URL = "https://api.openweathermap.org/data/2.5/weather?lat=23.80203426659407&lon=90.41696766576916&appid=712af7c3d1de067b43f618336419e646&units=imperial"

    const weatherPromise = await fetch(URL)
    const weatherData = await weatherPromise.json()

    const currentWeather = weatherData.main.temp

    console.log(currentWeather)

    document.querySelector("#dynamic-temp").textContent = currentWeather
}

getWeatherData()


