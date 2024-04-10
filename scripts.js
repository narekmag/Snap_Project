const cryptoData = [
    {
        name: "Ethereum ($ETH)",
        narrative: "LAYER 1's",
        imageUrl: "https://images7.alphacoders.com/113/1135135.jpg",
        marketCap: "$435 Billion",
        description: "Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (DApps). It is known for its programmable blockchain and its native cryptocurrency, Ether (ETH).",
      },
      {
        name: "Solana ($SOL)",
        narrative: "LAYER 1's",
        imageUrl: "https://t3.ftcdn.net/jpg/05/15/89/50/360_F_515895008_bhq44Lmoxqq33gPQtCadKnVHkcH2gCyQ.jpg", 
        marketCap: "$78 Billion",
        description: "Solana is a high-performance blockchain platform that aims to provide fast, secure, and scalable solutions for decentralized applications (DApps) and crypto projects. It uses a unique consensus mechanism called Proof of History (PoH) to achieve high throughput and low latency.",
      },
    {
      name: "Ring AI ($RING)",
      narrative: "ARTIFICIAL INTELLIGENCE",
      imageUrl: "https://www.tryring.ai/images/preview.png", 
      marketCap: "$50 Million",
      description: "RingAI transforms blockchain customer service with AI-driven automation, ensuring efficient support and personalized assistance, elevating user interactions to new heights.",
    },
    {
        name: "Fetch.AI ($FET)",
        narrative: "ARTIFICIAL INTELLIGENCE",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1140/1*thnN9CLNAUTZzSLXrw-7iA.jpeg", 
        marketCap: "$2.2 Billion",
        description: "Fetch.AI pioneers decentralized AI-driven solutions, empowering autonomous economic agents to negotiate and transact across various networks, revolutionizing industries with efficient and secure data sharing.",
    },
    {
      name: "ONDO ($ONDO)",
      narrative: "REAL WORLD ASSETS",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*DCwsqRfyIJjKGLCxevXSww.jpeg",
      marketCap: "$1.1 Billion",
      description: "Ondo is pioneering institutional-grade finance on the blockchain, offering high-yield products like USDY and OUSG with APYs of 5.20% and 4.96% respectively. Their focus on quality assets, regulated service providers, and third-party audited security sets a new standard for financial protocols in the digital space.",
    },
    {
      name: "MetaZero ($MZERO)",
      narrative: "REAL WORLD ASSETS",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*8K_pVeFALok3CHcMWy0LbQ.png", 
      marketCap: "$25 Million",
      description: "MetaZero revolutionizes gaming by tokenizing traditional assets, extending gaming assets to a wider investor base, and introducing an omnichain tokenization protocol for gaming real-world assets (RWAs). MetaZero seamlessly integrates gaming assets into the blockchain, unlocking new avenues for trading.",
    },
    {
      name: "Uniswap ($UNI)",
      narrative: "DECENTRALIZED FINANCE (DeFI)",
      imageUrl: "https://uniswap.org/images/twitter-card.jpg", 
      marketCap: "$7 Billion",
      description: "Uniswap is revolutionizing decentralized finance (DeFi) with its automated liquidity protocol, providing users with seamless token swaps and earning opportunities through liquidity provision. Uniswap empowers individuals to participate in the DeFi ecosystem, while its token, UNI, ensures community ownership and control.",
    },
    {
        name: "AAVE ($AAVE)",
        narrative: "DECENTRALIZED FINANCE (DeFI)",
        imageUrl: "https://i.ytimg.com/vi/dTCwssZ116A/maxresdefault.jpg",
        marketCap: "$2 Billion",
        description: "AAVE, a leading DeFi protocol, is reshaping traditional lending and borrowing systems by offering users innovative solutions for accessing liquidity and earning interest on their crypto assets. With features like flash loans and decentralized governance, AAVE empowers users to unlock the full potential of their assets.",
    },
    {
      name: "Chainlink ($LINK)",
      narrative: "WEB3 INFRASTRUCTURE",
      imageUrl: "https://cryptoslate.com/wp-content/uploads/2017/09/chainlink-social.jpg",
      marketCap: "$10 Billion",
      description: "Chainlink is revolutionizing the blockchain industry by providing tamper-proof and reliable decentralized oracle solutions. By securely connecting smart contracts with real-world data and external APIs, Chainlink enables smart contracts to access off-chain information, enabling a wide range of use cases such as decentralized finance (DeFi), gaming, and supply chain management.",
    },
    {
        name: "Filecoin ($FILE)",
        narrative: "WEB3 INFRASTRUCTURE",
        imageUrl: "https://s3.coinmarketcap.com/static-gravity/image/401d18572d664cc4b686d4b804e6297c.png", 
        marketCap: "$5 Billion",
        description: "Filecoin is at the forefront of decentralized storage solutions, enabling users to store and retrieve data in a secure, decentralized manner. By harnessing unused storage space across a distributed network of nodes, Filecoin provides an efficient and cost-effective alternative to traditional cloud storage providers.",
    },
    {
      name: "Brett ($BRETT)",
      narrative: "MEMECOINS",
      imageUrl: "https://img.bitgetimg.com/multiLang/web/6babdd12efd8d40b4d5df2b3846f4a4e.png",
      marketCap: "$700 Million",
      description: "Brett is a memecoin that has captured the attention of the crypto community with its humorous branding and playful approach. While its utility may be limited compared to other cryptocurrencies, Brett has garnered a dedicated following due to its meme-worthy persona and social media presence.",
    },
    {
        name: "Dogecoin ($DOGE)",
        narrative: "MEMECOINS",
        imageUrl: "https://static.news.bitcoin.com/wp-content/uploads/2024/03/wolf-of-all-streets-doge-bull-market.jpg",
        marketCap: "$27 Billion",
        description: "Dogecoin, originally created as a lighthearted joke, has evolved into a popular cryptocurrency known for its vibrant community and meme-inspired culture. Despite its origins, Dogecoin has gained widespread adoption and utility, serving as a digital currency for tipping, charitable donations, and even as a medium of exchange in certain online communities.",
      },
      {
        name: "Polygon Matic ($MATIC)",
        narrative: "LAYER 2's",
        imageUrl: "https://www.newsbtc.com/wp-content/uploads/2023/03/Polygon-MATIC.png?fit=860%2C573", 
        marketCap: "$9 Billion",
        description: "Polygon (MATIC) is a layer 2 scaling solution for Ethereum, offering faster and cheaper transactions while maintaining compatibility with the Ethereum network. With its focus on enhancing scalability and usability, Polygon has become a go-to choice for developers looking to build decentralized applications (DApps) and facilitate seamless user experiences within the Ethereum ecosystem.",
      },
      {
        name: "Base ($BASE)",
        narrative: "LAYER 2's",
        imageUrl: "https://images.ctfassets.net/c5bd0wqjc7v0/5kbm9b5W1gYOdCZpkb8nAV/3bb74d01953bef05f4cf258adc5ee887/Base_Blog_header.png", 
        marketCap: "$2 Million",
        description: "Base is a layer 2 scaling solution designed to optimize transaction throughput and reduce fees on the Ethereum network. By leveraging innovative technology, Base aims to address the scalability challenges faced by Ethereum, enabling faster and more cost-effective transactions for users and developers alike. ",
      }
  ];

  const narrativeDescriptions = 
  {
    "LAYER 1's": "Layer 1 blockchains are the foundational layer of the blockchain ecosystem. They handle the basic functionalities of blockchain networks, such as transaction validation and consensus mechanisms.",
    "ARTIFICIAL INTELLIGENCE": "Artificial intelligence (AI) represents a branch of computer science dedicated to creating intelligent systems capable of simulating human cognitive processes. Its applications span across various sectors including finance, healthcare, and entertainment, where AI algorithms are leveraged to automate tasks, recognize patterns, and make data-driven decisions.",
    "REAL WORLD ASSETS": "Real world assets are tangible or intangible assets with intrinsic value, tokenized and represented on a blockchain. By digitizing assets such as real estate, commodities, and securities, blockchain technology enables fractional ownership, global accessibility, and efficient trading while maintaining transparency and security.",
    "DECENTRALIZED FINANCE (DeFI)": "Decentralized finance (DeFi) refers to a financial ecosystem built on blockchain technology, offering open and permissionless access to financial services. DeFi protocols enable users to lend, borrow, trade, and earn interest without intermediaries, revolutionizing traditional financial systems and promoting financial inclusion.",
    "WEB3 INFRASTRUCTURE": "Web3 infrastructure comprises the decentralized technologies and protocols that power the next generation of the internet. These include decentralized storage solutions, oracle networks, and interoperability protocols, enabling the development of decentralized applications (DApps) and the seamless exchange of value across the internet.",
    "MEMECOINS": "Memecoins are cryptocurrencies that gain popularity primarily through internet memes and social media virality. While often starting as playful experiments or satire, memecoins can develop dedicated communities and real-world utility, with examples like Dogecoin demonstrating the power of meme culture in shaping cryptocurrency markets and narratives.",
    "LAYER 2's": "Layer 2 solutions are scalability solutions built on top of existing blockchain networks, such as Ethereum. They aim to improve transaction throughput and reduce fees by processing transactions off-chain or in a separate layer, while still benefiting from the security and decentralization of the underlying blockchain."
};

function createCryptoCard(crypto) {
    const card = document.createElement("div");
    card.classList.add("crypto-card");
  
    const front = document.createElement("div");
    front.classList.add("card-front");
    front.innerHTML = `
      <img src="${crypto.imageUrl}" alt="${crypto.name} Logo">
      <h2 class="card-title">${crypto.name}</h2>`;
  
    const back = document.createElement("div");
    back.classList.add("card-back");
    back.innerHTML = `
      <p>Market Cap: ${crypto.marketCap}</p>
      <p>${crypto.description}</p>
      <button class="official-website-btn">Visit Official Website</button>`; // Add button element
  
    card.appendChild(front);
    card.appendChild(back);
  
    card.addEventListener("mouseover", () => card.classList.add("flip"));
    card.addEventListener("mouseout", () => card.classList.remove("flip"));
  
    // Add event listener to the button to redirect to the official website
    const websiteBtn = back.querySelector(".official-website-btn");
    websiteBtn.addEventListener("click", () => {
        window.location.href = getCryptoOfficialWebsite(crypto); // Define getCryptoOfficialWebsite function
    });
  
    return card;
}

// Define a function to get the official website URL for each crypto
function getCryptoOfficialWebsite(crypto)
{
    // Define the URLs for each crypto (you need to update these URLs)
    const officialWebsites = {
        "Ethereum ($ETH)": "https://ethereum.org/",
        "Solana ($SOL)": "https://solana.com/",
        "Ring AI ($RING)": "https://www.tryring.ai",
        "Fetch.AI ($FET)": "https://fetch.ai",
        "ONDO ($ONDO)": "https://ondo.finance",
        "MetaZero ($MZERO)": "https://metazero.gg",
        "Uniswap ($UNI)": "https://uniswap.org",
        "AAVE ($AAVE)": "https://aave.com",
        "Chainlink ($LINK)": "https://chain.link",
        "Filecoin ($FILE)": "https://filecoin.io",
        "Brett ($BRETT)": "https://www.basedbrett.com",
        "Dogecoin ($DOGE)": "https://dogecoin.com",
        "Polygon Matic ($MATIC)": "https://polygon.technology",
        "Base ($BASE)": "https://www.base.org"
    };

    return officialWebsites[crypto.name];
}

  
  
  // ... rest of your functions (showCards, createCryptoCard, etc.)

  function showCards() 
  {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    const narratives = {};
    for (const crypto of cryptoData) {
        if (!narratives[crypto.narrative]) narratives[crypto.narrative] = [];
        narratives[crypto.narrative].push(crypto);
    }

    for (const [narrative, cryptos] of Object.entries(narratives))
     {
        const narrativeRow = document.createElement("div");
        narrativeRow.classList.add("narrative-row");
    
        const narrativeTitle = document.createElement("h2");
        narrativeTitle.textContent = narrative;
        narrativeRow.appendChild(narrativeTitle);
    
        // Add the narrative description
        const narrativeDescription = document.createElement("p");
        narrativeDescription.textContent = narrativeDescriptions[narrative];
        narrativeDescription.classList.add("narrative-description"); // Apply CSS class
        narrativeRow.appendChild(narrativeDescription);
    
        const cryptoContainer = document.createElement("div");
        cryptoContainer.classList.add("crypto-container");
        narrativeRow.appendChild(cryptoContainer);
    
        // Display cards in a flexbox layout
        cryptoContainer.style.display = "flex";
        cryptoContainer.style.flexWrap = "wrap";
        cryptoContainer.style.justifyContent = "space-between"; // Distribute evenly
    
        // Limit to displaying a maximum of 2 cards per narrative
        for (let i = 0; i < Math.min(cryptos.length, 2); i++)
        {
          const crypto = cryptos[i];
          const cryptoCard = createCryptoCard(crypto);
          cryptoContainer.appendChild(cryptoCard);
        }
    
        cardContainer.appendChild(narrativeRow);
    
        // ... rest of your code for crypto card creation and display
    }
    
  }
  
  // Call showCards on page load
  document.addEventListener("DOMContentLoaded", showCards);
  
  function quoteAlert() 
  {
    console.log("Button Clicked!")
    alert("The future of finance is here, and it's crypto!");
  }
  
  function removeLastCard() 
  {
    cryptoData.pop(); // Remove last item in cryptoData array
    showCards(); // Call showCards again to refresh
  }

  document.getElementById("selectForm").addEventListener("submit", function(event)
   {
    event.preventDefault();
    const selectedNarrative = document.getElementById("narratives").value;

    // Redirect the user based on the selected narrative
    if (selectedNarrative === "artificial-intelligence")
        window.location.href = "crypto_cards.html"; 
    else if (selectedNarrative === "decentralized-computing")
        window.location.href = "crypto_cards.html";

    // Add more cases for other narratives as needed

    // Add animation classes to crypto cards
    setTimeout(animateCryptoCards, 500);
});

// scripts.js
// Function to create a narrative element with animation
function createNarrativeElement(narrative, description) {
    const narrativeElement = document.createElement("div");
    narrativeElement.classList.add("narrative");
    
    const narrativeTitle = document.createElement("h2");
    narrativeTitle.classList.add("narrative-title");
    narrativeTitle.textContent = narrative;
    narrativeElement.appendChild(narrativeTitle);
    
    const narrativeDescription = document.createElement("p");
    narrativeDescription.classList.add("narrative-description");
    narrativeDescription.textContent = description;
    narrativeElement.appendChild(narrativeDescription);
    
    return narrativeElement;
}

// Rest of your JavaScript code...


function animateCryptoCards() 
{
    const cards = document.querySelectorAll('.crypto-card');
    cards.forEach(card => {
        card.classList.add('animate-card'); // Add animation class
    });
}
  