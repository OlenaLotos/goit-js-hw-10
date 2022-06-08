import './css/styles.css';
// import debounce from 'lodash.debounce';

const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

// countryInfo.insertAdjacentHTML('afterbegin', makeCountryMarkup);

// fetchCountries('https://restcountries.com/v3.1/name/{name}')



function makeCountryMarkup({ name, capital, population, flags, languages }) {
    countryInfo.classList.remove('is-hidden');
    return `<h3 class="country"><img src="${flags.png}" alt="flag" width = 30px> ${name.official}</h3>
    <p class="info">Capital: ${capital}</p>
    <p class="info">Populatio: ${population}</p>
    <p class="info">Languages: ${Object.values(languages)}</p>`
    
};
fetchCountryByName().then(renderCountryCard)
    .catch(error => {
    console.log(error)
});

function fetchCountryByName() {
    return fetch('https://restcountries.com/v3.1/name/peru')
    .then(response => {
    
    return response.json();
    })
}



function renderCountryCard(country) {
    const markup = makeCountryMarkup(country);
    countryInfo.innerHTML = markup;
}
