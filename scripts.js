//#region Data 
var cryptoTypes =
  [
    {
      id: 1,
      name: "LAYER 1's",
      description: "Layer 1 blockchains are the foundational layer of the blockchain ecosystem. They handle the basic functionalities of blockchain networks, such as transaction validation and consensus mechanisms."
    },
    {
      id: 2,
      name: "ARTIFICIAL INTELLIGENCE",
      description: "Artificial intelligence (AI) represents a branch of computer science dedicated to creating intelligent systems capable of simulating human cognitive processes. Its applications span across various sectors including finance, healthcare, and entertainment, where AI algorithms are leveraged to automate tasks, recognize patterns, and make data-driven decisions."
    },
    {
      id: 3,
      name: "REAL WORLD ASSETS",
      description: "Real world assets are tangible or intangible assets with intrinsic value, tokenized and represented on a blockchain. By digitizing assets such as real estate, commodities, and securities, blockchain technology enables fractional ownership, global accessibility, and efficient trading while maintaining transparency and security."
    },
    {
      id: 4,
      name: "DECENTRALIZED FINANCE (DeFI)",
      description: "Decentralized finance (DeFi) refers to a financial ecosystem built on blockchain technology, offering open and permissionless access to financial services. DeFi protocols enable users to lend, borrow, trade, and earn interest without intermediaries, revolutionizing traditional financial systems and promoting financial inclusion."
    },
    {
      id: 5,
      name: "WEB3 INFRASTRUCTURE",
      description: "Web3 infrastructure comprises the decentralized technologies and protocols that power the next generation of the internet. These include decentralized storage solutions, oracle networks, and interoperability protocols, enabling the development of decentralized applications (DApps) and the seamless exchange of value across the internet."
    },
    {
      id: 6,
      name: "MEMECOINS",
      description: "Memecoins are cryptocurrencies that gain popularity primarily through internet memes and social media virality. While often starting as playful experiments or satire, memecoins can develop dedicated communities and real-world utility, with examples like Dogecoin demonstrating the power of meme culture in shaping cryptocurrency markets and narratives.",
    },
    {
      id: 7,
      name: "LAYER 2's",
      description: "Layer 2 solutions are scalability solutions built on top of existing blockchain networks, such as Ethereum. They aim to improve transaction throughput and reduce fees by processing transactions off-chain or in a separate layer, while still benefiting from the security and decentralization of the underlying blockchain."
    }
  ]

var cryptoDetails = [
  {
    name: "Ethereum ($ETH)",
    cryptoType: 1,
    imageUrl: "https://images7.alphacoders.com/113/1135135.jpg",
    marketCap: "$435 Billion",
    description: "Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (DApps). It is known for its programmable blockchain and its native cryptocurrency, Ether (ETH).",
    url: "https://ethereum.org/"

  },
  {
    name: "Solana ($SOL)",
    cryptoType: 1,
    imageUrl: "https://t3.ftcdn.net/jpg/05/15/89/50/360_F_515895008_bhq44Lmoxqq33gPQtCadKnVHkcH2gCyQ.jpg",
    marketCap: "$78 Billion",
    description: "Solana is a high-performance blockchain platform that aims to provide fast, secure, and scalable solutions for decentralized applications (DApps) and crypto projects. It uses a unique consensus mechanism called Proof of History (PoH) to achieve high throughput and low latency.",
    url: "https://solana.com/"
  }, 
  {
    name: "Ring AI ($RING)",
    cryptoType: 2,
    imageUrl: "https://www.tryring.ai/images/preview.png",
    marketCap: "$50 Million",
    description: "RingAI transforms blockchain customer service with AI-driven automation, ensuring efficient support and personalized assistance, elevating user interactions to new heights.",
    url: "https://www.tryring.ai",
  },
  {
    name: "Fetch.AI ($FET)",
    cryptoType: 2,
    imageUrl: "https://miro.medium.com/v2/resize:fit:1140/1*thnN9CLNAUTZzSLXrw-7iA.jpeg",
    marketCap: "$2.2 Billion",
    description: "Fetch.AI pioneers decentralized AI-driven solutions, empowering autonomous economic agents to negotiate and transact across various networks, revolutionizing industries with efficient and secure data sharing.",
    url: "https://fetch.ai",
  },
  {
    name: "ONDO ($ONDO)",
    cryptoType: 3,
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*DCwsqRfyIJjKGLCxevXSww.jpeg",
    marketCap: "$1.1 Billion",
    description: "Ondo is pioneering institutional-grade finance on the blockchain, offering high-yield products like USDY and OUSG with APYs of 5.20% and 4.96% respectively. Their focus on quality assets, regulated service providers, and third-party audited security sets a new standard for financial protocols in the digital space.",
    url: "https://ondo.finance",
  },
  {
    name: "MetaZero ($MZERO)",
    cryptoType: 3,
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*8K_pVeFALok3CHcMWy0LbQ.png",
    marketCap: "$25 Million",
    description: "MetaZero revolutionizes gaming by tokenizing traditional assets, extending gaming assets to a wider investor base, and introducing an omnichain tokenization protocol for gaming real-world assets (RWAs). MetaZero seamlessly integrates gaming assets into the blockchain, unlocking new avenues for trading.",
    url: "https://metazero.gg",
  },
  {
    name: "Uniswap ($UNI)",
    cryptoType: 4,
    imageUrl: "https://uniswap.org/images/twitter-card.jpg",
    marketCap: "$7 Billion",
    description: "Uniswap is revolutionizing decentralized finance (DeFi) with its automated liquidity protocol, providing users with seamless token swaps and earning opportunities through liquidity provision. Uniswap empowers individuals to participate in the DeFi ecosystem, while its token, UNI, ensures community ownership and control.",
    url: "https://uniswap.org",
  },
  {
    name: "AAVE ($AAVE)",
    cryptoType: 4,
    imageUrl: "https://i.ytimg.com/vi/dTCwssZ116A/maxresdefault.jpg",
    marketCap: "$2 Billion",
    description: "AAVE, a leading DeFi protocol, is reshaping traditional lending and borrowing systems by offering users innovative solutions for accessing liquidity and earning interest on their crypto assets. With features like flash loans and decentralized governance, AAVE empowers users to unlock the full potential of their assets.",
    "url": "https://aave.com",
  },
  {
    name: "Chainlink ($LINK)",
    cryptoType: 5,
    imageUrl: "https://cryptoslate.com/wp-content/uploads/2017/09/chainlink-social.jpg",
    marketCap: "$10 Billion",
    description: "Chainlink is revolutionizing the blockchain industry by providing tamper-proof and reliable decentralized oracle solutions. By securely connecting smart contracts with real-world data and external APIs, Chainlink enables smart contracts to access off-chain information, enabling a wide range of use cases such as decentralized finance (DeFi), gaming, and supply chain management.",
    "url": "https://chain.link",
  },
  {
    name: "Filecoin ($FILE)",
    cryptoType: 5,
    imageUrl: "https://s3.coinmarketcap.com/static-gravity/image/401d18572d664cc4b686d4b804e6297c.png",
    marketCap: "$5 Billion",
    description: "Filecoin is at the forefront of decentralized storage solutions, enabling users to store and retrieve data in a secure, decentralized manner. By harnessing unused storage space across a distributed network of nodes, Filecoin provides an efficient and cost-effective alternative to traditional cloud storage providers.",
    "url": "https://filecoin.io",
  },
  {
    name: "Brett ($BRETT)",
    cryptoType: 6,
    imageUrl: "https://img.bitgetimg.com/multiLang/web/6babdd12efd8d40b4d5df2b3846f4a4e.png",
    marketCap: "$700 Million",
    description: "Brett is a memecoin that has captured the attention of the crypto community with its humorous branding and playful approach. While its utility may be limited compared to other cryptocurrencies, Brett has garnered a dedicated following due to its meme-worthy persona and social media presence.",
    "url": "https://www.basedbrett.com",
  },
  {
    name: "Dogecoin ($DOGE)",
    cryptoType: 6,
    imageUrl: "https://static.news.bitcoin.com/wp-content/uploads/2024/03/wolf-of-all-streets-doge-bull-market.jpg",
    marketCap: "$27 Billion",
    description: "Dogecoin, originally created as a lighthearted joke, has evolved into a popular cryptocurrency known for its vibrant community and meme-inspired culture. Despite its origins, Dogecoin has gained widespread adoption and utility, serving as a digital currency for tipping, charitable donations, and even as a medium of exchange in certain online communities.",
    "url": "https://dogecoin.com",
  },
  {
    name: "Polygon Matic ($MATIC)",
    cryptoType: 7,
    imageUrl: "https://www.newsbtc.com/wp-content/uploads/2023/03/Polygon-MATIC.png?fit=860%2C573",
    marketCap: "$9 Billion",
    description: "Polygon (MATIC) is a layer 2 scaling solution for Ethereum, offering faster and cheaper transactions while maintaining compatibility with the Ethereum network. With its focus on enhancing scalability and usability, Polygon has become a go-to choice for developers looking to build decentralized applications (DApps) and facilitate seamless user experiences within the Ethereum ecosystem.",
    "url": "https://polygon.technology",
  },
  {
    name: "Base ($BASE)",
    cryptoType: 7,
    imageUrl: "https://images.ctfassets.net/c5bd0wqjc7v0/5kbm9b5W1gYOdCZpkb8nAV/3bb74d01953bef05f4cf258adc5ee887/Base_Blog_header.png",
    marketCap: "$2 Million",
    description: "Base is a layer 2 scaling solution designed to optimize transaction throughput and reduce fees on the Ethereum network. By leveraging innovative technology, Base aims to address the scalability challenges faced by Ethereum, enabling faster and more cost-effective transactions for users and developers alike. ",
    "url": "https://www.base.org"
  }
];

//#endregion Data

//#region Card
function createCryptoCard(crypto) {
    var card = document.createElement("div");
    card.classList.add("crypto-card");
  
    var front = document.createElement("div");
    front.classList.add("card-front");
    front.innerHTML = `
      <img src="${crypto.imageUrl}" alt="${crypto.name} Logo">
      <h2 class="card-title">${crypto.name}</h2>`;
  
    var back = document.createElement("div");
    back.classList.add("card-back");
    back.innerHTML = `
      <p>Market Cap: ${crypto.marketCap}</p>
      <p>${crypto.description}</p>
      <button class="official-website-btn">Visit Official Website</button>`; 
  
    card.appendChild(front);
    card.appendChild(back);
  
    card.addEventListener("mouseover", () => card.classList.add("flip"));
    card.addEventListener("mouseout", () => card.classList.remove("flip"));
  
    var websiteLink = back.querySelector(".official-website-btn");
    websiteLink.addEventListener("click", () => {
    window.location.href = crypto.url; 
    });
  
    return card;
}

const narrativeIdPrefix = "crtypo_"; 

function displayCryptoCards(selectedCrypto) 
{
    var narrativeRows = document.querySelectorAll('.narrative-row');
  
    if (selectedCrypto !== "0") {
      Array.from(narrativeRows).forEach(function (item) {
        item.hidden = item.id !== narrativeIdPrefix + selectedCrypto;
      });
    } else {
      Array.from(narrativeRows).forEach(function (item) {
        item.hidden = false;
      });
    }
  }
  


  function showCards() 
  {
    var cardContainer = document.getElementById("card-container");
    if (!cardContainer) return;
     cardContainer.innerHTML = "";

     cryptoTypes.forEach(item => 
     {
        var narrativeRow = document.createElement("div");
       narrativeRow.classList.add("narrative-row");
       narrativeRow.id = narrativeIdPrefix + item.id;
    
        var narrativeTitle = document.createElement("h2");
        narrativeTitle.textContent = item.name;
        narrativeRow.appendChild(narrativeTitle);
    
        var narrativeDescription = document.createElement("p");
        narrativeDescription.textContent = item.description;
        narrativeDescription.classList.add("narrative-description"); 
        narrativeRow.appendChild(narrativeDescription);
    
        var cryptoContainer = document.createElement("div");
        cryptoContainer.classList.add("crypto-container");
        narrativeRow.appendChild(cryptoContainer);
    
        cryptoContainer.style.display = "flex";
        cryptoContainer.style.flexWrap = "wrap";
        cryptoContainer.style.justifyContent = "space-between"; 

       cryptoDetails.filter(function (element) { return element.cryptoType == item.id }).forEach(subitem => {
         var cryptoCard = createCryptoCard(subitem);
         cryptoContainer.appendChild(cryptoCard);
       });
    
        cardContainer.appendChild(narrativeRow);
     });

    const urlParams = new URLSearchParams(window.location.search);
    const selctedCrypto = urlParams.get('selectedCrypto');
    displayCryptoCards(selctedCrypto);
  }
  
  document.addEventListener("DOMContentLoaded", showCards);

  function createNarrativeElement(narrative, description) {
    var narrativeElement = document.createElement("div");
    narrativeElement.classList.add("narrative");
    
    var narrativeTitle = document.createElement("h2");
    narrativeTitle.classList.add("narrative-title");
    narrativeTitle.textContent = narrative;
    narrativeElement.appendChild(narrativeTitle);
    
    var narrativeDescription = document.createElement("p");
    narrativeDescription.classList.add("narrative-description");
    narrativeDescription.textContent = description;
    narrativeElement.appendChild(narrativeDescription);
    
    return narrativeElement;
}

//#endregion Card

//#region index

function addOption(selectElement, id, name)
{
  var option = document.createElement("option");
  option.text = name;
  option.value = id;
  selectElement.appendChild(option);
}

setTimeout(() => {
  var selectElement = document.getElementById("narratives");
  if (selectElement) {
    addOption(selectElement, 0, "All Cryptos");
    cryptoTypes.forEach(crypto => {
      addOption(selectElement, crypto.id, crypto.name)
    })
  }

  var formElem = document.getElementById("selectForm");

  if (formElem) {
    formElem.addEventListener("submit", function (event) {
      event.preventDefault();
      var selectedNarrative = document.getElementById("narratives").value;
      window.location.href = "crypto_cards.html?selectedCrypto=" + selectedNarrative;
    });
  }
}, 100);
//#endregion index



  
