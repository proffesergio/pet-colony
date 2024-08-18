async function getWeatherData() {
    const URL = "https://api.openweathermap.org/data/2.5/weather?lat=23.80203426659407&lon=90.41696766576916&appid=712af7c3d1de067b43f618336419e646"

    const weatherPromise = await fetch(URL)
    const weatherData = await weatherPromise.json()

    console.log(weatherData.main.temp)
}

getWeatherData()


