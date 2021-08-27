import countryInfoTpl from '../templates/country-info.hbs';

export default class CountryInfo {
  _countryInfoEl;

  constructor(countryInfoSelector) {
    this._countryInfoEl = document.querySelector(countryInfoSelector);
  }

  show(country) {
    this._countryInfoEl.innerHTML = countryInfoTpl(country);
  }

  hide() {
    this._countryInfoEl.innerHTML = '';
  }
}
