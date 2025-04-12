async function searchCountry() {
  const input = document.getElementById("country-input").value.trim();
  if (!input) return;

  const res = await fetch(`https://restcountries.com/v3.1/name/${input}`);
  const data = await res.json();
  const country = data[0];

  document.getElementById("country-info").innerHTML = `
    <h2>${country.name.common}</h2>
    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="100">
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <p><strong>Languages:</strong> ${Object.values(country.languages).join(", ")}</p>
    <p><strong>Timezones:</strong> ${country.timezones.join(", ")}</p>
  `;

  saveToLocalStorage(country.name.common);
}

function saveToLocalStorage(name) {
  let recent = JSON.parse(localStorage.getItem("recentCountries")) || [];
  if (!recent.includes(name)) {
    recent.unshift(name);
    if (recent.length > 5) recent.pop();
    localStorage.setItem("recentCountries", JSON.stringify(recent));
  }
}
