export const weatherListing = (data, city) =>
{
    return `
    <h1>${city}</h1>
    <h4>${data.dt_txt}</h4>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <h3>${data.weather[0].main}</h3>
    <h2>${data.main.temp}</h2>
    <p>${data.weather[0].description}</p>
   
    `
}