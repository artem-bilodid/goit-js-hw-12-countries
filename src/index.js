import './sass/main.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import CountriesAPIClient from './js/countries-api-client';
import CountriesList from './js/countries-list';
import CountryInfo from './js/country-info';
import Notification from './js/notification';
import refs from './js/refs';

const { searchBoxEl } = refs;

const debounce = require('lodash.debounce');
const countriesAPIClient = new CountriesAPIClient();
const countriesList = new CountriesList('.country-list');
const countryInfo = new CountryInfo('.country-info');
const notification = new Notification();
notification.init();

const onCountriesListReturned = countries => {
  countryInfo.hide();
  countriesList.hide();

  if (countries.length > 10) {
    notification.tooManyMatchesError();
    return;
  }

  notification.closeAllErrorAlerts();

  if (countries.length === 1) {
    countryInfo.show(countries[0]);
    return;
  }

  countriesList.show(countries);
};

const onSearchBoxInput = event => {
  const queryString = event.target.value.trim();

  if (!queryString) {
    countriesList.hide();
    countryInfo.hide();
    return;
  }

  countriesAPIClient
    .fetchCountries(queryString)
    .then(onCountriesListReturned)
    .catch(() => {
      notification.noMatchesError();
      countriesList.hide();
    });
};

searchBoxEl.addEventListener('input', debounce(onSearchBoxInput, 500));
