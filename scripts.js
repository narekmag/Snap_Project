const cryptoData = [
    {
      name: "Ring AI ($RING)",
      narrative: "Automating Customer Service",
      imageUrl: "https://www.tryring.ai/images/preview.png", // Replace with real image URL
      // ... other properties
    },
    {
      name: "Galactic Grid (GRID)",
      narrative: "Decentralized Computing",
      imageUrl: "https://placebear.com/200/200", // Replace with real image URL
      // ... other properties
    },
    {
      name: "BioTechCoin (BTC)",
      narrative: "Medical Research",
      imageUrl: "https://placeimg.com/200/200/arch", // Replace with real image URL
      // ... other properties
    },
    {
      name: "NatureDao (NAT)",
      narrative: "Environmental Ecosystems",
      imageUrl: "https://picsum.photos/id/237/200/200", // Replace with real image URL
      // ... other properties
    },
    {
      name: "Quantum Exchange (QX)",
      narrative: "Quantum Computing Solutions",
      imageUrl: "https://picsum.photos/seed/picsum/200/200", // Replace with real image URL
      // ... other properties
    },
    // ... add more cryptos as needed
  ];

  function createCryptoCard(crypto) {
    const card = document.createElement("div");
    card.classList.add("crypto-card");
  
    const front = document.createElement("div");
    front.classList.add("card-front");
    front.innerHTML = `
      <img src="${crypto.imageUrl}" alt="${crypto.name} Logo">
      <h2>${crypto.name}</h2>`;
  
    const back = document.createElement("div");
    back.classList.add("card-back");
    back.innerHTML = `
      <h2>${crypto.name}</h2>
      <p>Market Cap: (Replace with actual market cap data)</p>
      <p>Narrative: ${crypto.narrative}</p>`; // Add narrative information
  
    card.appendChild(front);
    card.appendChild(back);
  
    card.addEventListener("mouseover", () => card.classList.add("flip"));
    card.addEventListener("mouseout", () => card.classList.remove("flip"));
  
    return card;
  }
  
  
  // ... rest of your functions (showCards, createCryptoCard, etc.)
  
  
  function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
  
    const narratives = {};
    for (const crypto of cryptoData) {
      if (!narratives[crypto.narrative]) {
        narratives[crypto.narrative] = [];
      }
      narratives[crypto.narrative].push(crypto);
    }
  
    for (const [narrative, cryptos] of Object.entries(narratives)) {
      const narrativeRow = document.createElement("div");
      narrativeRow.classList.add("narrative-row");
  
      narrativeRow.innerHTML = `
        <h2>${narrative}</h2>
        <div class="crypto-container">
          </div>
      `;
  
      const cryptoContainer = narrativeRow.querySelector(".crypto-container");
      for (const crypto of cryptos) {
        const cryptoCard = createCryptoCard(crypto);
        cryptoContainer.appendChild(cryptoCard);
      }
  
      cardContainer.appendChild(narrativeRow);
    }
  }
  
  // Call showCards on page load
  document.addEventListener("DOMContentLoaded", showCards);
  
  function quoteAlert() {
    console.log("Button Clicked!")
    alert("The future of finance is here, and it's crypto!");
  }
  
  function removeLastCard() {
    cryptoData.pop(); // Remove last item in cryptoData array
    showCards(); // Call showCards again to refresh
  }
  