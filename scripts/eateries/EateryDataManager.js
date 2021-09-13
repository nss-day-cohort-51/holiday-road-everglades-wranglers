export const getEateries = () => {

    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}