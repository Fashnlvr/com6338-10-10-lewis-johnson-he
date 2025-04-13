# com6338-10-10-lewis-johnson-he

Travel Buddy is a 3-page, mobile-responsive web application designed to help users explore international travel destinations, view country-specific information, convert currencies, and receive travel tips. The project is built using HTML, CSS, and JavaScript, and incorporates two Web APIs: REST Countries API and a Currency Exchange API. 

Live Site: [https://fashnlvr.github.io/com6338-10-10-lewis-johnson-he/](https://fashnlvr.github.io/com6338-10-10-lewis-johnson-he/)

---

## 📌 Features

### 🔎 Country Explorer
- Search any country by name
- View capital, flag, timezones, languages, and region
- Saves recently viewed countries using `localStorage`

### 💱 Currency Converter
- Convert between USD and any selected country’s currency
- Uses live exchange rate data from a currency API
- User-friendly dropdowns and responsive design

### ✈️ Travel Tips
- View travel, culture, and etiquette tips per country
- Tips loaded from static JSON or light API
- Clean card-style layout

---
📸 UI Design Reference
Figma Design Mockup: https://www.figma.com/design/qkBbtVK40BNa4t4MsfvHpR/Untitled?node-id=0-1&p=f&t=PCS65yCEZAFQksvS-0

---

## 🔧 Technologies Used

- HTML5 / CSS3 / JavaScript (ES6)
- REST Countries API – [`https://restcountries.com/v3.1/all`](https://restcountries.com/v3.1/all)
- ExchangeRate API – [`https://open.er-api.com/v6/latest/USD`](https://open.er-api.com/v6/latest/USD)
- GitHub Pages (for deployment)
- `localStorage` for persistence

---

🗂️ Project Structure

├── index.html             # Homepage
├── country.html           # Country Explorer Page
├── currency.html          # Currency Converter Page
├── tips.html              # Travel Tips Page
├── style.css              # Global styling
├── script.js              # Shared scripts
├── country.js             # Country-specific logic
├── currency.js            # Currency logic
├── tips.js                # Travel Tips logic
├── tips.json              # Static tip data

---

🧠 Contributors

Name	GitHub Username	Role
Jessica	@Fashnlvr	Team Leader / Country Explorer & Homepage 
Megan	@meganjohnsonufl	Currency Converter & Logo Design
Yajie	@Jie-garnish	Travel Tips & Styling (Figma Mockup)

---

📝 License

This project is open-source and available under the MIT License.



