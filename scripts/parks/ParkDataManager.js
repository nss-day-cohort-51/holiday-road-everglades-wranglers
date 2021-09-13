export const getParks = (input) => {
  return fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${input}&api_key=I2g3MWq0a1kfvX1veiLpbIMCrtbJE7AyL3qVEYap`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((parsedResponse) => {
      return parsedResponse;
    });
};
