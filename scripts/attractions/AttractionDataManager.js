export const attractionCall = (datas) =>
{
    return fetch('http://holidayroad.nss.team/bizarreries')
    .then(response => response.json())
    
}