import { getWeather } from "./WeatherDataManager.js";
import { weatherListing } from "./weatherList.js";


export const callApi = () =>
{


    getWeather().then(data =>
        
        { 
          
            

            const display = document.querySelector('.display')

            let allHtml = ""

            const allData = data.list.slice(0,5)
            
            for(const date of allData)

            {

                allHtml+= weatherListing(date, data.city.name)
                console.log(date)
                
            }

        

            display.innerHTML += allHtml;


        }

            
   

    )}