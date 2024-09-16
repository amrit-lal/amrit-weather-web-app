function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");
    const body = document.querySelector('body'); // To change background animations

    if (!city) {
        weatherResult.innerHTML = "Please enter a city name.";
        weatherResult.style.display = "block";
        return;
    }

    // Call Flask backend to get weather data
    fetch(`/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                weatherResult.innerHTML = `<p>${data.error}</p>`;
            } else {
                const weatherCondition = data.weather[0].main.toLowerCase(); // Get the main weather condition
                weatherResult.innerHTML = `
                    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                
                // Reset all animations first
                body.className = '';

                // Apply specific animations based on the weather condition
                if (weatherCondition.includes("clear")) {
                    body.classList.add('sunny');
                    addSunEffect();
                } else if (weatherCondition.includes("clouds")) {
                    body.classList.add('cloudy');
                    addCloudEffect();
                } else if (weatherCondition.includes("rain")) {
                    body.classList.add('rainy');
                    addRainEffect();
                } else if (weatherCondition.includes("thunderstorm")) {
                    body.classList.add('thunderstorm');
                    addThunderEffect();
                } else if (weatherCondition.includes("snow")) {
                    body.classList.add('snowy');
                    addSnowEffect();
                } else if (weatherCondition.includes("mist") || weatherCondition.includes("fog") || weatherCondition.includes("haze")) {
                    body.classList.add('misty');
                    addFogEffect();
                } else if (weatherCondition.includes("tornado")) {
                    body.classList.add('tornado');
                    addTornadoEffect();
                } else {
                    body.classList.add('sunny'); // Default to sunny
                }
            }
            weatherResult.style.display = "block";
        })
        .catch(error => {
            weatherResult.innerHTML = "Error fetching weather data.";
            console.error("Error:", error);
        });
}

// Functions to add/remove weather-specific animations
function addSunEffect() {
    removeAllWeatherEffects();
    const sun = document.createElement('div');
    sun.classList.add('sun');
    document.body.appendChild(sun);
}

function addCloudEffect() {
    removeAllWeatherEffects();
    const cloud = document.createElement('div');
    cloud.classList.add('cloud cloud1');
    document.body.appendChild(cloud);
}

function addRainEffect() {
    removeAllWeatherEffects();
    const rain = document.createElement('div');
    rain.classList.add('rain');
    document.body.appendChild(rain);
}

function addThunderEffect() {
    removeAllWeatherEffects();
    const thunder = document.createElement('div');
    thunder.classList.add('thunder');
    document.body.appendChild(thunder);
}

function addSnowEffect() {
    removeAllWeatherEffects();
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(snowflake);
    }
}

function addFogEffect() {
    removeAllWeatherEffects();
    const fog = document.createElement('div');
    fog.classList.add('fog');
    document.body.appendChild(fog);
}

function addTornadoEffect() {
    removeAllWeatherEffects();
    const funnel = document.createElement('div');
    funnel.classList.add('tornado-funnel');
    document.body.appendChild(funnel);
}

function removeAllWeatherEffects() {
    document.querySelectorAll('.sun, .cloud, .rain, .thunder, .snowflake, .fog, .tornado-funnel').forEach(el => el.remove());
}
