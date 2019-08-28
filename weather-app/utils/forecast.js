const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/292dd859cb9bfb7b8c3954/${latitude},${longitude}?units=si`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: `${body.currently.temperature} °C`,
                precipProbability: `${body.currently.precipProbability * 100}%`
            });
        }
    });
}

module.exports = forecast;