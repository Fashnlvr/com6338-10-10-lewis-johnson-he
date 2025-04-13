document.addEventListener("DOMContentLoaded", () => {
  fetch('tips.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load travel tips.");
      }
      return response.json();
    })
    .then(data => {
      const allTips = Object.values(data).flat();

      allTips.forEach(tip => {
        const matchingCards = Array.from(document.querySelectorAll('.tip-card h3'))
          .filter(h3 => h3.textContent.trim() === (tip.title || tip.country || '').trim());

        matchingCards.forEach(h3 => {
          const messagePara = document.createElement('p');
          messagePara.textContent = tip.message;
          h3.parentElement.appendChild(messagePara);
        });
      });
    })
    .catch(error => {
      console.error('Error loading data:', error);
    });
  });
