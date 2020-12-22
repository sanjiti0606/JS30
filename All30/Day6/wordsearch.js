const sourceJson = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cityList = [];
fetch(sourceJson)
  .then(messyData => messyData.json())
  .then(neatData => cityList.push(...neatData));
function wordSearch(word, cityList){
    return cityList.filter(place => {
        const reg = new RegExp(word, 'gi');
        return place.city.match(reg) || place.state.match(reg);
    });
}
function displayMatches() {
    const matchArray = wordSearch(this.value, cityList);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${place.population}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
}
const suggestions = document.querySelector('.suggestions');
const wordEnter = document.querySelector('.search');
wordEnter.addEventListener('change', displayMatches);
wordEnter.addEventListener('keyup', displayMatches);