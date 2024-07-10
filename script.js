function getWeather() {
    const apiKey = 'YOUR_API_KEY';
    const city = document.getElementById('city').value;

    if (!city) {
        alert("Please enetr a city");
        return;
}
const currentWeatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;
const forecastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

fetch(currentWeatherUrl) 
.then(response => response.json())
.then(data => {
    displayWeather(data);
})
.catch(error => {
    console.log("Error fetching current weather data",error);
    alert("Error fetching weather data. Please try again");
});
fetch(forecastUrl)
.then(response => response.json())
.then(data => {
    displayHourlyForecast(data.list);
})
.catch(error => {
    console.log("Error fetching hourly forecast data:",error);
    alert("Error fetching hourly forecast data. Please try again");
});

}