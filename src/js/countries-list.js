import countryListTpl from '../templates/country-list.hbs';

export default class CountriesList {
  _countryListEl;

  constructor(countryListSelector) {
    this._countryListEl = document.querySelector(countryListSelector);
  }

  show(countries) {
    this._countryListEl.innerHTML = countryListTpl(countries);
  }

  hide() {
    this._countryListEl.innerHTML = '';
  }
}
