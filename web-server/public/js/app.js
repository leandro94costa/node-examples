const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = ''

    fetch(`/weather/?address=${search.value}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                const forecast = data.forecast;
                messageOne.textContent = data.location;
                messageTwo.textContent = `${forecast.summary} It is currently ${forecast.temperature} °C with a wind speed of ${forecast.windSpeed} km/h. There is ${forecast.precipProbability}% chance of rain.`;
            }
        });
    });
});