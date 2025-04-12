async function convertCurrency() {
  const amount = parseFloat(document.getElementById("usd-amount").value);
  const target = document.getElementById("currency-select").value;

  if (!amount || !target) return;

  const res = await fetch(`https://open.er-api.com/v6/latest/USD`);
  const data = await res.json();
  const rate = data.rates[target];

  const converted = amount * rate;
  document.getElementById("conversion-result").textContent = `${amount} USD = ${converted.toFixed(2)} ${target}`;
}

window.onload = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  const select = document.getElementById("currency-select");

  countries.forEach(c => {
    if (c.currencies) {
      const code = Object.keys(c.currencies)[0];
      select.innerHTML += `<option value="${code}">${code} (${c.name.common})</option>`;
    }
  });
};
