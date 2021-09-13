import { weatherApi } from "../apiKeys/apiKey.js"

const url = "http://api.openweathermap.org/data/2.5/forecast?appid="+weatherApi+"&q=nashville&units=imperial";

export const getWeather = () =>

{

    return fetch(url)
    .then(response => response.json())
    
}