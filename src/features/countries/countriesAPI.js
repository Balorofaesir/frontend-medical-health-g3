function getCountries() {
  return fetch('https://restcountries.com/v3.1/all?fields=name').then(
    (response) => response.json()
  );
}

export default getCountries;
