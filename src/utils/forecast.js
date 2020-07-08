const request =  require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=78c5f640a386f5690c4bcdfd87bce2c0&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback ('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)

        } else {
            callback (undefined, body.current.weather_descriptions[0]  + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degrees.' )

        }

    })
}


module.exports = forecast