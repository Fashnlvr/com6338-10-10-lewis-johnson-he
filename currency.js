const API_KEY = 'faed791a27ba4ca4b80d4a37dff8f2d9';
const API_URL = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`;
let exchangeRates = {};

const amountInput = document.getElementById('usd-amount');
const currencySelect = document.getElementById('currency-select');
const resultDisplay = document.getElementById('conversion-result');

const priorityCurrencies = {
  EUR: '🇪🇺 Euro',
  GBP: '🇬🇧 British Pound',
  JPY: '🇯🇵 Japanese Yen',
  CAD: '🇨🇦 Canadian Dollar',
  AUD: '🇦🇺 Australian Dollar',
  CHF: '🇨🇭 Swiss Franc',
  INR: '🇮🇳 Indian Rupee',
  CNY: '🇨🇳 Chinese Yuan',
  MXN: '🇲🇽 Mexican Peso',
  ZAR: '🇿🇦 South African Rand'
};

async function loadRates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    exchangeRates = data.rates;

    for (let code in priorityCurrencies) {
      if (exchangeRates[code]) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${priorityCurrencies[code]} (${code})`;
        currencySelect.appendChild(option);
      }
    }

    const separator = document.createElement('option');
    separator.disabled = true;
    separator.textContent = '──────────────';
    currencySelect.appendChild(separator);

    for (let currency in exchangeRates) {
      if (!priorityCurrencies[currency]) {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        currencySelect.appendChild(option);
      }
    }
  } catch (error) {
    alert('Failed to load exchange rates.');
    console.error(error);
  }
}

function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const selectedCurrency = currencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid USD amount.');
    return;
  }

  if (!selectedCurrency) {
    alert('Please select a currency.');
    return;
  }

  const rate = parseFloat(exchangeRates[selectedCurrency]);
  const converted = (amount * rate).toFixed(2);

  resultDisplay.textContent = `Exchange Rate: 1 USD = ${rate} ${selectedCurrency}  
  ➜ ${amount} USD = ${converted} ${selectedCurrency}`;
}


window.addEventListener('load', loadRates);

