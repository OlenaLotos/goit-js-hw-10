import './css/styles.css';
// import debounce from 'lodash.throttle';

const countryInfo = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;


// fetchCountries('https://restcountries.com/v3.1/name/{name}')

fetch('https://restcountries.com/v3.1/name/peru')
    .then(response => {
    
    return response.json();
    })
    .then(country => {
    console.log(country);
    })
    .catch(error => {
    console.log(error)
});

function makeCountryMarkup({ name, capital, population, flags, languages }) {
    countryInfo.classList.remove('is-hidden');
    return ``
}

// https://restcountries.com/v2/{service}?fields={field},{field},{field}