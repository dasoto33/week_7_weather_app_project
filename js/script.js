

const time1 = document.getElementById('time')
const date1 = document.getElementById('date')
const weatherDetails = document.getElementById('weather-details')
const timezone = document.getElementById('time-zone')
const cityName = document.getElementById('city-name')
const zipCode = document.getElementById('zip-code')
const forecast1 = document.getElementById('forecast')
const currentTemp1 = document.getElementById('current-temp')
const humidity1 = document.getElementById('humidity')
const highTemp = document.getElementById('high-temp')
const lowTemp = document.getElementById('low-temp')


const apiKey = '03dad201db24c8e720f290e4d24dfabe'

getWeatherData()
function getWeatherData () {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${zipCode},{country code}&limit={limit}&appid=${apiKey}&units=imperial`)
}

function displayWeatherData(data) {
    let {forecast, humidity, current_temp, high_temp, low_temp} = data.current

    weatherDetails.innerHTML = 
    `<div class="row px-3" id="forecast">
        <p class="light-text">Forecast</p>
        <p class="ml-auto">${forecast}</p>
    </div>
    <div class="row px-3" id="high-temp">
        <p class="light-text">High</p>
        <p class="ml-auto">${temperature}</p>
    </div>
    <div class="row px-3" id="low-temp">
        <p class="light-text">Low</p>
        <p class="ml-auto">${temperature}</p>
    </div>
    <div class="row px-3" id="humidity">
        <p class="light-text">Humidity</p>
        <p class="ml-auto">${humidity}</p>
    </div>`

}