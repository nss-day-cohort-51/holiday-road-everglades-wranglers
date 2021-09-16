
export const getWeather = (zip) =>

{

    return fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=f978b8bd1b4bf05ce67d577615e8a6a0&zip=${zip}&units=imperial`)
    .then(response => response.json())
    
}