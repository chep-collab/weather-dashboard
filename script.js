const apiKey = '2aef35d71a6a4636d20035e44fce72b2'; // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    fetchWeatherData(location);
});

async function fetchWeatherData(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    if (response.ok) {
        const data = await response.json();
        displayWeatherData(data);
    } else {
        alert('Location not found. Please try again.');
    }
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
