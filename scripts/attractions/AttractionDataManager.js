<<<<<<< HEAD
export const attractionCall = (datas) =>
{
    return fetch('http://holidayroad.nss.team/bizarreries')
    .then(response => response.json())
    
}
=======
export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
} 
>>>>>>> main
