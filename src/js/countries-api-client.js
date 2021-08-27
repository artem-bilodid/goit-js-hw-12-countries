const BASE_URL = 'https://restcountries.eu/rest/v2';

export default class CountiesAPIClient {
  constructor() {}

  fetchCountries(queryString) {
    const url = `${BASE_URL}/name/${queryString}`;
    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error response from the API');
    });
  }
}
