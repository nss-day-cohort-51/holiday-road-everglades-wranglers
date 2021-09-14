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
      parkArray = parsedResponse;
      return parsedResponse;
    });
};

let parkArray = [];

export const useParkArray = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...parkArray];
};
