fetch('tips.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("tips-container");
    data.tips.forEach(tip => {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${tip.country}</h3><p>${tip.message}</p>`;
      container.appendChild(card);
    });
  });
