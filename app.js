const products = [
  {
    id: 1,
    name: "PLAY STORE",
    category: "gaming",
    stock: true,
    theme: "play",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3500" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" },
      { price: 3699, origPrice: 3999, balance: "20000" }
    ]
  },
  {
    id: 2,
    name: "FLIPKART",
    category: "shopping",
    stock: true,
    theme: "flipkart",
    selectedOptionIndex: 0,
    options: [
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1149, origPrice: 1449, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" },
      { price: 2199, origPrice: 2499, balance: "12500" },
      { price: 4699, origPrice: 4999, balance: "25000" }
    ]
  },
  {
    id: 3,
    name: "AMAZON",
    category: "shopping",
    stock: true,
    theme: "amazonpay",
    selectedOptionIndex: 0,
    options: [
      { price: 499, origPrice: 699, balance: "3500" },
      { price: 699, origPrice: 949, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1749, origPrice: 2049, balance: "10000" },
      { price: 4649, origPrice: 4949, balance: "25000" }
    ]
  },
  {
    id: 4,
    name: "APPLE",
    category: "shopping",
    stock: false,
    theme: "apple",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3500" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1649, origPrice: 1949, balance: "10000" },
      { price: 3699, origPrice: 3999, balance: "20000" }
    ]
  },
  {
    id: 5,
    name: "SWIGGY",
    category: "food",
    stock: true,
    theme: "swiggy",
    selectedOptionIndex: 0,
    options: [
      { price: 399, origPrice: 599, balance: "3000" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 6,
    name: "ZOMATO",
    category: "food",
    stock: true,
    theme: "zomato",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3000" },
      { price: 799, origPrice: 1049, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 7,
    name: "BLINKIT",
    category: "food",
    stock: true,
    theme: "blinkit",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3000" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1649, origPrice: 1949, balance: "10000" }
    ]
  },
  {
    id: 8,
    name: "PVR",
    category: "entertainment",
    stock: true,
    theme: "pvr",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3000" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 9,
    name: "JIO DIGITAL",
    category: "entertainment",
    stock: false,
    theme: "jio",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3000" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 10,
    name: "STEAM",
    category: "gaming",
    stock: true,
    theme: "steam",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3500" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" },
      { price: 3649, origPrice: 3949, balance: "20000" }
    ]
  },
  {
    id: 11,
    name: "X BOX",
    category: "gaming",
    stock: true,
    theme: "xbox",
    selectedOptionIndex: 0,
    options: [
      { price: 449, origPrice: 649, balance: "3500" },
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 12,
    name: "BIGBASKET",
    category: "food",
    stock: true,
    theme: "bigbasket",
    selectedOptionIndex: 0,
    options: [
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 13,
    name: "BEST BUY",
    category: "shopping",
    stock: true,
    theme: "bestbuy",
    selectedOptionIndex: 0,
    options: [
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 14,
    name: "ETSY",
    category: "shopping",
    stock: false,
    theme: "etsy",
    selectedOptionIndex: 0,
    options: [
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 15,
    name: "TARGET",
    category: "shopping",
    stock: true,
    theme: "target",
    selectedOptionIndex: 0,
    options: [
      { price: 749, origPrice: 999, balance: "5000" },
      { price: 1699, origPrice: 1999, balance: "10000" }
    ]
  },
  {
    id: 16,
    name: "WALMART",
    category: "shopping",
    stock: false,
    theme: "walmart",
    selectedOptionIndex: 0,
    options: [
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 2199, origPrice: 2499, balance: "12500" }
    ]
  },
  {
    id: 17,
    name: "SHOPIFY",
    category: "shopping",
    stock: true,
    theme: "shopify",
    selectedOptionIndex: 0,
    options: [
      { price: 1199, origPrice: 1499, balance: "7500" },
      { price: 2199, origPrice: 2499, balance: "12500" }
    ]
  },
  {
    id: 18,
    name: "AMAZON.COM",
    category: "shopping",
    stock: true,
    theme: "amazon",
    selectedOptionIndex: 0,
    options: [
      { price: 1699, origPrice: 1999, balance: "10000" },
      { price: 4699, origPrice: 4999, balance: "25000" }
    ]
  },
  {
    id: 101,
    name: "DIGITAL Visa Prepaid 1 Card (Balance: $990.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 22,
    origPrice: 110,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 990,
    balance: "$990.00 USD",
    stock: true,
    theme: "visa"
  },
  {
    id: 102,
    name: "DIGITAL Visa Prepaid 3 Cards (Balance: $2,790.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 56,
    origPrice: 279,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 2790,
    balance: "$2,790.00 USD",
    stock: true,
    theme: "visa"
  },
  {
    id: 103,
    name: "DIGITAL Visa Prepaid 5 Cards (Balance: $4,510.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 82,
    origPrice: 410,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 4510,
    balance: "$4,510.00 USD",
    stock: false,
    theme: "visa"
  },
  {
    id: 104,
    name: "DIGITAL Visa Prepaid 10 Cards (Balance: $8,520.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 142,
    origPrice: 710,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 8520,
    balance: "$8,520.00 USD",
    stock: true,
    theme: "visa"
  },
  {
    id: 105,
    name: "DIGITAL MasterCard Prepaid 1 Card (Balance: $880.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 22,
    origPrice: 110,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 880,
    balance: "$880.00 USD",
    stock: true,
    theme: "mastercard"
  },
  {
    id: 106,
    name: "DIGITAL MasterCard Prepaid 3 Cards (Balance: $2,511.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 56,
    origPrice: 279,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 2511,
    balance: "$2,511.00 USD",
    stock: true,
    theme: "mastercard"
  },
  {
    id: 107,
    name: "DIGITAL MasterCard Prepaid 5 Cards (Balance: $4,100.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 82,
    origPrice: 410,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 4100,
    balance: "$4,100.00 USD",
    stock: false,
    theme: "mastercard"
  },
  {
    id: 108,
    name: "DIGITAL MasterCard Prepaid 10 Cards (Balance: $8,520.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 142,
    origPrice: 710,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 8520,
    balance: "$8,520.00 USD",
    stock: true,
    theme: "mastercard"
  },
  {
    id: 109,
    name: "American Express Prepaid 1 Card (Balance: $990.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 22,
    origPrice: 110,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 990,
    balance: "$990.00 USD",
    stock: true,
    theme: "amex"
  },
  {
    id: 110,
    name: "American Express Prepaid 3 Cards (Balance: $2,790.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 56,
    origPrice: 279,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 2790,
    balance: "$2,790.00 USD",
    stock: false,
    theme: "amex"
  },
  {
    id: 111,
    name: "American Express Prepaid 5 Cards (Balance: $4,510.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 82,
    origPrice: 410,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 4510,
    balance: "$4,510.00 USD",
    stock: true,
    theme: "amex"
  },
  {
    id: 112,
    name: "American Express Prepaid 10 Cards (Balance: $8,520.00)",
    category: "creditcards",
    vendor: "Platinum",
    price: 142,
    origPrice: 710,
    discountBadge: "80% OFF",
    newBadge: true,
    usdBalance: 8520,
    balance: "$8,520.00 USD",
    stock: false,
    theme: "amex"
  }
];

const state = {
  view: "home",
  cart: [],
  orders: [],
  tickets: [],
  transactions: [],
  wallet: 0,
  slide: 0,
  adIndex: 0,
  adInterval: null,
  user: null,
  paymentAmount: 0,
  paymentType: "order",
  pendingOrder: null,
  gatewayMethod: "Paytm",
  gatewayTimer: 0,
  gatewayInterval: null,
  paymentScreenshotData: null,
  detectedScreenshotUtr: null
};

const formatMoney = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);

const USD_TO_INR = 95.25;

const themeStyles = {
  play: "background:#fff;color:#5b667a",
  apple: "background:linear-gradient(135deg,#1a73e8,#19c1ff);color:#fff",
  bestbuy: "background:#155b8d;color:#fff",
  etsy: "background:#f35b19;color:#fff",
  target: "background:linear-gradient(135deg,#ff4b4b,#bd1111);color:#fff",
  walmart: "background:#0986c5;color:#fff",
  shopify: "background:#dff7fb;color:#2f7c41",
  steam: "background:#064765;color:#fff",
  amazon: "background:#050505;color:#fff",
  xbox: "background:#087a11;color:#fff",
  blinkit: "background:#f2c43f;color:#263016",
  swiggy: "background:#fff;color:#f97316",
  zomato: "background:#d9233f;color:#fff",
  pvr: "background:#080808;color:#e9ba67",
  flipkart: "background:#21409a;color:#ffe300",
  jio: "background:#2f2f7b;color:#fff",
  amazonpay: "background:#334047;color:#fff",
  bigbasket: "background:#a6d52d;color:#17210d"
};

const artThemes = {
  play: { from: "#ffffff", to: "#ffffff", text: "#5b667a", logo: "Google Play", accent: "#22c55e", icon: "play" },
  apple: { from: "#1d7ff0", to: "#1cc7ff", text: "#ffffff", logo: "apple", accent: "#ffffff", icon: "apple" },
  bestbuy: { from: "#145987", to: "#145987", text: "#ffffff", logo: "BEST BUY", accent: "#ffe100", icon: "tag" },
  etsy: { from: "#f35b19", to: "#f97316", text: "#ffffff", logo: "Etsy", accent: "#ffffff", icon: "text" },
  target: { from: "#ff4b4b", to: "#bd1111", text: "#ffffff", logo: "TARGET", accent: "#ffffff", icon: "target" },
  walmart: { from: "#087fc0", to: "#0aa5dc", text: "#ffffff", logo: "Walmart", accent: "#ffe56a", icon: "spark" },
  shopify: { from: "#dff7fb", to: "#f4fdff", text: "#2f7c41", logo: "Shopify", accent: "#6ab84f", icon: "gift" },
  steam: { from: "#073b58", to: "#0c5d84", text: "#ffffff", logo: "STEAM", accent: "#ffffff", icon: "circle" },
  amazon: { from: "#050505", to: "#202020", text: "#ffffff", logo: "amazon.com", accent: "#ff9900", icon: "smile" },
  xbox: { from: "#0a7d14", to: "#12a323", text: "#ffffff", logo: "X BOX", accent: "#ffffff", icon: "x" },
  blinkit: { from: "#f2c43f", to: "#ffe277", text: "#243017", logo: "blinkit", accent: "#6ba90f", icon: "gift" },
  swiggy: { from: "#ffffff", to: "#ffffff", text: "#f97316", logo: "SWIGGY", accent: "#f97316", icon: "pin" },
  zomato: { from: "#d9233f", to: "#ef4760", text: "#ffffff", logo: "zomato", accent: "#ffffff", icon: "gift" },
  pvr: { from: "#080808", to: "#1d160d", text: "#e9ba67", logo: "PVR", accent: "#e9ba67", icon: "film" },
  flipkart: { from: "#21409a", to: "#294ebd", text: "#ffe300", logo: "Flipkart", accent: "#ffe300", icon: "gift" },
  jio: { from: "#2f2f7b", to: "#3b3ba0", text: "#ffffff", logo: "Jio", accent: "#ffffff", icon: "circle" },
  amazonpay: { from: "#334047", to: "#243139", text: "#ffffff", logo: "amazon pay", accent: "#ff9900", icon: "smile" },
  bigbasket: { from: "#a6d52d", to: "#c9ef62", text: "#17210d", logo: "bigbasket", accent: "#e7332f", icon: "basket" }
};

function cardImage(product) {
  const theme = artThemes[product.theme] || artThemes.play;
  const { from, to, text, logo, accent, icon } = theme;
  if (product.theme === "play") {
    const playSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300">
        <rect width="640" height="300" fill="#fff"/>
        <g transform="translate(188 24)">
          <path d="M10 8c-6 4-10 11-10 20v168c0 9 4 16 10 20l122-104L10 8z" fill="#4285f4"/>
          <path d="M132 112 10 8c5-3 12-3 19 1l145 82-42 21z" fill="#34a853"/>
          <path d="M132 112 10 216c5 3 12 3 19-1l145-82-42-21z" fill="#ea4335"/>
          <path d="m174 91 50 28c18 10 18 30 0 40l-50 28-42-75 42-21z" fill="#fbbc05"/>
        </g>
        <text x="320" y="252" text-anchor="middle" fill="#5f6368" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="600">Google Play</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(playSvg)}`;
  }
  const iconMarkup = {
    play: `<polygon points="214,80 214,218 334,149" fill="#4285f4"/><polygon points="214,80 288,149 214,218" fill="#34a853"/><polygon points="288,149 334,149 254,104" fill="#fbbc05"/><polygon points="288,149 254,194 334,149" fill="#ea4335"/>`,
    apple: `<circle cx="320" cy="150" r="76" fill="${accent}" opacity=".96"/><ellipse cx="342" cy="73" rx="22" ry="44" transform="rotate(38 342 73)" fill="${accent}"/>`,
    tag: `<path d="M214 96h142l72 54-72 54H214z" fill="${accent}"/><circle cx="244" cy="150" r="13" fill="${from}"/><text x="306" y="144" text-anchor="middle" fill="#101827" font-family="Arial,sans-serif" font-size="34" font-weight="900">BEST</text><text x="306" y="178" text-anchor="middle" fill="#101827" font-family="Arial,sans-serif" font-size="34" font-weight="900">BUY</text>`,
    target: `<circle cx="320" cy="150" r="82" fill="${accent}" opacity=".95"/><circle cx="320" cy="150" r="48" fill="${from}"/><circle cx="320" cy="150" r="22" fill="${accent}"/>`,
    spark: `<circle cx="320" cy="150" r="20" fill="${accent}"/><g stroke="${accent}" stroke-width="12" stroke-linecap="round"><path d="M320 90v28M320 182v28M260 150h28M352 150h28M278 108l20 20M342 172l20 20M362 108l-20 20M298 172l-20 20"/></g>`,
    gift: `<rect x="238" y="122" width="164" height="96" rx="10" fill="${accent}" opacity=".9"/><path d="M320 122v96M238 154h164" stroke="${text}" stroke-width="12" opacity=".8"/><path d="M320 122c-54-70-90-8 0 0c54-70 90-8 0 0z" fill="${accent}"/>`,
    circle: `<circle cx="320" cy="150" r="82" fill="${accent}" opacity=".9"/><circle cx="320" cy="150" r="52" fill="${from}" opacity=".35"/>`,
    smile: `<path d="M238 178c46 42 116 42 164 0" fill="none" stroke="${accent}" stroke-width="15" stroke-linecap="round"/>`,
    x: `<circle cx="320" cy="150" r="82" fill="${accent}" opacity=".94"/><path d="M268 98c42 30 62 30 104 0M268 202c42-30 62-30 104 0" stroke="${from}" stroke-width="13" fill="none" stroke-linecap="round"/>`,
    pin: `<path d="M320 76c42 0 76 32 76 72c0 56-76 100-76 100s-76-44-76-100c0-40 34-72 76-72z" fill="${accent}"/><circle cx="320" cy="148" r="30" fill="#fff"/>`,
    film: `<circle cx="320" cy="150" r="82" fill="${accent}" opacity=".92"/><g fill="${from}"><circle cx="292" cy="122" r="16"/><circle cx="348" cy="122" r="16"/><circle cx="292" cy="178" r="16"/><circle cx="348" cy="178" r="16"/><circle cx="320" cy="150" r="14"/></g>`,
    basket: `<rect x="242" y="126" width="156" height="86" rx="12" fill="#fff" opacity=".8"/><path d="M268 126l28-42M372 126l-28-42" stroke="${text}" stroke-width="10" stroke-linecap="round"/>`,
    text: ""
  }[icon];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${from}"/>
          <stop offset="1" stop-color="${to}"/>
        </linearGradient>
        <pattern id="waves" width="80" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 12 C20 0 40 24 80 12" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="640" height="300" rx="18" fill="url(#bg)"/>
      <rect width="640" height="300" fill="url(#waves)" opacity=".75"/>
      <path d="M0 0h96L0 86z" fill="#fff" opacity="${product.theme === "bestbuy" ? ".96" : ".08"}"/>
      <circle cx="530" cy="58" r="74" fill="${accent}" opacity=".16"/>
      <circle cx="88" cy="236" r="54" fill="${accent}" opacity=".14"/>
      ${iconMarkup}
      <text x="50%" y="${icon === "text" ? "54%" : "74%"}" dominant-baseline="middle" text-anchor="middle" fill="${text}" font-family="Arial, sans-serif" font-size="${logo.length > 9 ? 48 : 62}" font-weight="900">${logo}</text>
      <text x="602" y="264" text-anchor="end" fill="${text}" opacity=".7" font-family="Arial, sans-serif" font-size="20" font-weight="700">GC Shop</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function handleCardError(img, id) {
  img.onerror = null;
  const product = products.find(p => p.id == id);
  if (product) {
    img.src = cardImage(product);
  }
}

function productCard(product) {
  const selectedIndex = product.selectedOptionIndex || 0;
  const currentOpt = (product.options && product.options[selectedIndex]) || {
    price: product.price || 499,
    origPrice: (product.price || 499) + 250,
    balance: product.balance || "1000 INR"
  };

  const origOptPrice = currentOpt.origPrice || (currentOpt.price + 250);
  const isOutOfStock = !product.stock;

  const optionsMarkup = product.options && product.options.length ? `
    <div class="card-option-selector">
      <select class="option-select" data-option-select="${product.id}" ${isOutOfStock ? 'disabled' : ''}>
        ${product.options.map((opt, idx) => `
          <option value="${idx}" ${idx === selectedIndex ? "selected" : ""}>
            Get ${opt.balance} Balance
          </option>
        `).join("")}
      </select>
    </div>
  ` : "";

  return `
    <article class="gift-card ${isOutOfStock ? 'out-of-stock-card' : ''}">
      <div class="gift-art-wrapper" onclick="showProductDetail(${product.id})" style="cursor: pointer; position: relative;">
        <span class="badge-discount" style="background: linear-gradient(135deg, #ef4444, #dc2626); font-weight: 800;">SALE</span>
        ${isOutOfStock ? `<span class="badge-new" style="background: #ef4444; color: #fff; font-weight: 700;">OUT OF STOCK</span>` : (product.newBadge ? `<span class="badge-new">NEW</span>` : "")}
        <img class="gift-art-img" src="assets/cards/${product.theme}.jpg" onerror="handleCardError(this, ${product.id})" alt="${product.name} gift card" style="${isOutOfStock ? 'filter: grayscale(0.7) opacity(0.7);' : ''}" />
      </div>
      <div class="gift-body">
        <h3 class="gift-card-title" onclick="showProductDetail(${product.id})" style="cursor: pointer;" title="Click for details">${product.name}</h3>
        <div class="gift-card-vendor">Vendor: <span class="vendor-link">GC Shop</span></div>
        ${optionsMarkup}
        <div class="price-row" style="margin-top: 10px;">
          <div class="price-info" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
            <span class="card-orig-price-crossed">${formatMoney(origOptPrice)}</span>
            <span class="price-val" style="color: #e11d48; font-weight: 700; font-size: 16px;">${formatMoney(currentOpt.price)}</span>
          </div>
          <span class="stock" style="color: ${isOutOfStock ? '#ef4444' : '#16a34a'}; font-weight: 700;">${product.stock ? "In stock" : "Sold out"}</span>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <button class="card-btn" onclick="showProductDetail(${product.id})" style="background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; flex: 1;">
            DETAILS
          </button>
          <button class="card-btn" data-add="${product.id}" ${product.stock ? "" : "disabled"} style="flex: 1; ${isOutOfStock ? 'background: #64748b; color: #fff;' : ''}">
            ${product.stock ? "Add to Cart" : "SOLD OUT"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(targetId, list) {
  document.getElementById(targetId).innerHTML = list.map(productCard).join("");
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".view").forEach((el) => el.classList.remove("active"));
  document.getElementById(`${view}View`).classList.add("active");
  document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function addToCart(id) {
  const product = products.find((item) => item.id === Number(id));
  if (!product || !product.stock) return;

  if (product.category === "creditcards") {
    const usdBal = product.usdBalance || (product.price * 9);
    const inrBal = Math.round(usdBal * USD_TO_INR);
    const inrPrice = Math.round(product.price * USD_TO_INR);
    const formattedInrBalance = `₹${inrBal.toLocaleString('en-IN')} INR (Converted in Indian Price)`;

    const existing = state.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        id: product.id,
        optionIndex: 0,
        price: inrPrice,
        displayPrice: `$${product.price.toFixed(2)}`,
        balance: formattedInrBalance,
        inrBalanceValue: inrBal,
        qty: 1
      });
    }
    showToast(`${product.name} Added to Cart`);
    render();
    return;
  }

  const selectedIndex = product.selectedOptionIndex || 0;
  const opt = (product.options && product.options[selectedIndex]) || {
    price: product.price || 499,
    balance: product.balance || "1000 INR"
  };

  const existing = state.cart.find((item) => item.id === product.id && item.optionIndex === selectedIndex);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      optionIndex: selectedIndex,
      price: opt.price,
      balance: opt.balance,
      qty: 1
    });
  }
  showToast(`${product.name} (${formatMoney(opt.price)}) Added to Cart`);
  render();
}

function changeQty(cartIndex, delta) {
  const item = state.cart[Number(cartIndex)];
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart.splice(Number(cartIndex), 1);
  }
  render();
}

function removeFromCart(cartIndex) {
  state.cart.splice(Number(cartIndex), 1);
  render();
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const panel = document.getElementById("cartPanel");
  if (!state.cart.length) {
    panel.innerHTML = `
      <section class="empty-cart">
        <div>
          <div class="cart-symbol"><i class="bi bi-cart-x" style="font-size: 58px; color: var(--muted);"></i></div>
          <h2 style="margin-top: 10px;">Your cart is empty</h2>
          <p>Browse our gift cards and select your desired voucher balances</p>
          <button class="success-btn" data-view="cards" style="margin-top: 14px; padding: 0 24px;">
            <i class="bi bi-shop" style="margin-right: 6px;"></i> Start Shopping
          </button>
        </div>
      </section>
    `;
    return;
  }

  const totalVoucherValue = state.cart.reduce((acc, item) => {
    if (item.inrBalanceValue) {
      return acc + (item.inrBalanceValue * item.qty);
    }
    const matches = item.balance ? item.balance.match(/\d+/g) : null;
    const val = matches ? parseInt(matches.join("")) : item.price;
    return acc + (val * item.qty);
  }, 0);

  const lines = state.cart
    .map((item, cartIdx) => {
      const product = products.find((entry) => entry.id === item.id);
      const itemTotal = item.price * item.qty;
      return `
        <div class="cart-item-card">
          <div class="cart-item-main">
            <img class="cart-thumb" src="assets/cards/${product ? product.theme : 'play'}.jpg" onerror="handleCardError(this, ${item.id})" alt="${product ? product.name : 'Gift Card'}" />
            <div class="cart-item-details">
              <div class="cart-item-header">
                <h3 class="cart-item-title">${product ? product.name : 'Gift Card'}</h3>
                <span class="cart-value-badge"><i class="bi bi-gift-fill"></i> Get ${item.balance}</span>
              </div>
              <div class="cart-item-pricing">
                <div class="price-box">
                  <span class="pay-price">${formatMoney(item.price)}</span>
                  <span class="price-label">Price per card</span>
                </div>
                <div class="value-box">
                  <span class="get-val">${item.balance}</span>
                  <span class="price-label">Voucher Value</span>
                </div>
              </div>
              <div class="cart-item-actions">
                <div class="qty-selector">
                  <button class="qty-btn" data-qty="${cartIdx}" data-delta="-1" aria-label="Decrease quantity">-</button>
                  <span class="qty-count">${item.qty}</span>
                  <button class="qty-btn" data-qty="${cartIdx}" data-delta="1" aria-label="Increase quantity">+</button>
                </div>
                <span class="item-subtotal">Subtotal: <strong>${formatMoney(itemTotal)}</strong></span>
                <button class="cart-remove-btn" data-remove="${cartIdx}">
                  <i class="bi bi-trash3"></i> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  panel.innerHTML = `
    <section class="cart-layout">
      <div class="cart-items-container">
        <div class="cart-items-header">
          <span><i class="bi bi-bag-check-fill" style="color: var(--green);"></i> Cart Items (${state.cart.reduce((sum, item) => sum + item.qty, 0)})</span>
          <span class="cart-badge-saving"><i class="bi bi-lightning-charge-fill"></i> Instant Digital Voucher</span>
        </div>
        <div class="cart-items-list">${lines}</div>
      </div>

      <aside class="summary-card">
        <h2 class="summary-title"><i class="bi bi-receipt" style="margin-right: 6px;"></i> Order Summary</h2>
        <div class="summary-divider"></div>
        <div class="summary-line">
          <span>Total Vouchers</span>
          <strong>${state.cart.reduce((sum, item) => sum + item.qty, 0)} Items</strong>
        </div>
        <div class="summary-line">
          <span>Total Voucher Value</span>
          <strong style="color: var(--green);">₹${totalVoucherValue.toLocaleString("en-IN")} INR</strong>
        </div>
        <div class="summary-line">
          <span>Total Payable Price</span>
          <strong>${formatMoney(cartTotal())}</strong>
        </div>
        <div class="summary-line">
          <span>Delivery Fee</span>
          <strong style="color: var(--green);">FREE</strong>
        </div>
        
        <div class="summary-divider"></div>
        <div class="summary-line summary-total">
          <div>
            <span>Total Payable Amount</span>
            <small class="muted" style="display: block; font-weight: normal; font-size: 11px;">Flat 90% Discount Applied</small>
          </div>
          <strong class="total-amount" style="color: var(--red); font-size: 22px;">${formatMoney(cartTotal())}</strong>
        </div>

        <button class="success-btn checkout-btn" id="checkoutBtn">
          <span>Place Order</span>
          <i class="bi bi-arrow-right-circle-fill"></i>
        </button>

        <div class="cart-trust-badges">
          <span><i class="bi bi-shield-check" style="color: var(--green);"></i> 100% Genuine Digital Codes</span>
          <span><i class="bi bi-clock-history" style="color: #6366f1;"></i> Instant Code & Voucher Display</span>
        </div>
      </aside>
    </section>
  `;
}

function preparePayment() {
  if (!state.cart.length) return;
  state.paymentAmount = cartTotal();
  state.paymentType = "order";
  state.pendingOrder = {
    id: `ORD${Date.now().toString().slice(-10)}`,
    total: state.paymentAmount,
    date: new Date(),
    items: state.cart.map((item) => ({ ...item }))
  };
  document.getElementById("paymentAmount").textContent = formatMoney(state.paymentAmount);
  setView("payment");
}

function startGatewayTimer() {
  clearInterval(state.gatewayInterval);
  state.gatewayTimer = 300;
  renderGatewayStatus();
  state.gatewayInterval = setInterval(() => {
    state.gatewayTimer -= 1;
    if (state.gatewayTimer <= 0) {
      clearInterval(state.gatewayInterval);
      showToast("Gateway session expired");
      setView("payment");
      return;
    }
    renderGatewayStatus();
  }, 1000);
}

// --- Database & User Activity Tracking System & Backend API Sync ---
function getApiBase() {
  if (window.location.protocol.startsWith("http")) {
    const port = window.location.port;
    const hostname = window.location.hostname || "localhost";
    if (port === "3000") {
      return window.location.origin;
    }
    return `${window.location.protocol}//${hostname}:3000`;
  }
  return "http://localhost:3000";
}

async function syncWithBackend() {
  try {
    const apiBase = getApiBase();
    const res = await fetch(`${apiBase}/api/sync`);
    if (!res.ok) return;
    const data = await res.json();

    // 1. Sync Users (Merge)
    const localUsers = JSON.parse(localStorage.getItem("gcshop_users_db") || "[]");
    const serverUsers = data.users || [];
    const mergedUsersMap = new Map();
    [...serverUsers, ...localUsers].forEach(u => {
      if (u && u.email) mergedUsersMap.set(u.email.toLowerCase(), u);
    });
    const mergedUsers = Array.from(mergedUsersMap.values());
    localStorage.setItem("gcshop_users_db", JSON.stringify(mergedUsers));

    // 2. Sync Orders (Merge & Push missing local orders to server)
    const localOrders = JSON.parse(localStorage.getItem("gcshop_global_orders") || "[]");
    const serverOrders = data.orders || [];
    const mergedOrdersMap = new Map();

    // Server orders take priority for status updates (Approved/Rejected)
    serverOrders.forEach(o => {
      if (o && o.id) mergedOrdersMap.set(String(o.id), o);
    });

    // Check if any local order is missing from server DB, and push to server!
    localOrders.forEach(o => {
      if (o && o.id) {
        if (!mergedOrdersMap.has(String(o.id))) {
          mergedOrdersMap.set(String(o.id), o);
          fetch(`${apiBase}/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(o)
          }).catch(() => {});
        }
      }
    });

    const mergedOrders = Array.from(mergedOrdersMap.values());
    localStorage.setItem("gcshop_global_orders", JSON.stringify(mergedOrders));

    // 3. Sync Activities
    const localActivities = JSON.parse(localStorage.getItem("gcshop_activity_logs") || "[]");
    const serverActivities = data.activities || [];
    const mergedActMap = new Map();
    [...serverActivities, ...localActivities].forEach(a => {
      if (a && a.id) mergedActMap.set(String(a.id), a);
    });
    const mergedActivities = Array.from(mergedActMap.values()).sort((a,b) => b.id - a.id).slice(0, 300);
    localStorage.setItem("gcshop_activity_logs", JSON.stringify(mergedActivities));

    // Update user orders in state with case-insensitive matching
    if (state.user) {
      const userEmail = state.user.email.toLowerCase();
      state.orders = mergedOrders.filter(o => 
        (o.userEmail || "").toLowerCase() === userEmail || 
        (userEmail === "vs1120204@gmail.com")
      );
    } else {
      state.orders = mergedOrders.filter(o => (o.userEmail || "").toLowerCase() === "guest@gcshop.com");
    }

    render();
  } catch (err) {
    // Silent fallback if offline
  }
}

// Auto-poll central server every 2 seconds for live multi-device approval & login sync
setInterval(syncWithBackend, 2000);

function getUsersDb() {
  let db = JSON.parse(localStorage.getItem("gcshop_users_db") || "[]");
  const adminEmail = "vs1120204@gmail.com";
  let admin = db.find((u) => u.email === adminEmail);
  if (!admin) {
    admin = {
      name: "Vishal (Admin)",
      email: adminEmail,
      password: "admin@123",
      phone: "9876543210",
      role: "admin",
      registeredAt: new Date().toLocaleDateString("en-IN"),
      lastLogin: new Date().toLocaleString("en-IN"),
      totalPurchases: 0
    };
    db.push(admin);
    localStorage.setItem("gcshop_users_db", JSON.stringify(db));
  } else if (admin.password !== "admin@123") {
    admin.password = "admin@123";
    localStorage.setItem("gcshop_users_db", JSON.stringify(db));
  }
  return db;
}

function saveUserToDb(user) {
  let db = getUsersDb();
  const idx = db.findIndex((u) => u.email === user.email);
  if (idx >= 0) {
    db[idx] = { ...db[idx], ...user };
  } else {
    db.push(user);
  }
  localStorage.setItem("gcshop_users_db", JSON.stringify(db));

  fetch(`${getApiBase()}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  }).catch(() => {});
}

function getActivityLogs() {
  return JSON.parse(localStorage.getItem("gcshop_activity_logs") || "[]");
}

function recordActivity(email, action, details = "") {
  const logs = getActivityLogs();
  const entry = {
    id: Date.now(),
    timestamp: new Date().toLocaleString("en-IN"),
    email: email || (state.user ? state.user.email : "Guest"),
    action: action,
    details: details
  };
  logs.unshift(entry);
  localStorage.setItem("gcshop_activity_logs", JSON.stringify(logs.slice(0, 300)));

  fetch(`${getApiBase()}/api/activity`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry)
  }).catch(() => {});

  if (state.view === "admin") {
    renderAdminPanel();
  }
}

function getGlobalOrders() {
  return JSON.parse(localStorage.getItem("gcshop_global_orders") || "[]");
}

function saveGlobalOrder(order) {
  const globalOrders = getGlobalOrders();
  const existingIdx = globalOrders.findIndex(o => String(o.id) === String(order.id));
  if (existingIdx >= 0) {
    globalOrders[existingIdx] = order;
  } else {
    globalOrders.unshift(order);
  }
  localStorage.setItem("gcshop_global_orders", JSON.stringify(globalOrders));

  if (order.userEmail) {
    let db = getUsersDb();
    const user = db.find((u) => u.email === order.userEmail);
    if (user) {
      user.totalPurchases = (user.totalPurchases || 0) + (order.total || 0);
      saveUserToDb(user);
    }
  }

  fetch(`${getApiBase()}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  }).then(() => syncWithBackend()).catch((err) => console.error("Save order API error:", err));
}

const upiHandles = {
  "PhonePe": "vs112020@axl",
  "Paytm": "vs112020@ptyes",
  "Google Pay": "vs1120204@okicici"
};

function renderGatewayStatus() {
  const timerEl = document.getElementById("gatewayTimer");
  if (timerEl) {
    const minutes = String(Math.floor(state.gatewayTimer / 60)).padStart(2, "0");
    const seconds = String(state.gatewayTimer % 60).padStart(2, "0");
    const span = timerEl.querySelector("span");
    if (span) {
      span.textContent = `${minutes}:${seconds}`;
    } else {
      timerEl.textContent = `${minutes}:${seconds}`;
    }
  }
  const amountEl = document.getElementById("gatewayAmount");
  if (amountEl) amountEl.textContent = formatMoney(state.paymentAmount);
  
  const currentUpi = upiHandles[state.gatewayMethod] || "vs112020@ptyes";
  const amountStr = state.paymentAmount ? state.paymentAmount.toFixed(2) : "0.00";
  
  const upiUri = `upi://pay?pa=${currentUpi}&pn=GC%20Shop&am=${amountStr}&cu=INR&tn=Order%20Payment`;
  const paytmUri = `paytmmp://pay?pa=${upiHandles["Paytm"]}&pn=GC%20Shop&am=${amountStr}&cu=INR`;
  const phonepeUri = `phonepe://pay?pa=${upiHandles["PhonePe"]}&pn=GC%20Shop&am=${amountStr}&cu=INR`;
  const gpayUri = `tez://upi/pay?pa=${upiHandles["Google Pay"]}&pn=GC%20Shop&am=${amountStr}&cu=INR`;

  let activeUri = upiUri;
  if (state.gatewayMethod === "Paytm") activeUri = paytmUri;
  else if (state.gatewayMethod === "PhonePe") activeUri = phonepeUri;
  else if (state.gatewayMethod === "Google Pay") activeUri = gpayUri;

  const payAppBtn = document.getElementById("payWithAppBtn");
  if (payAppBtn) {
    payAppBtn.href = activeUri;
    payAppBtn.innerHTML = `<i class="bi bi-box-arrow-up-right" style="margin-right: 8px;"></i> Open ${state.gatewayMethod} to Pay ${formatMoney(state.paymentAmount)}`;
  }

  const upiIdText = document.getElementById("upiIdText");
  if (upiIdText) {
    upiIdText.textContent = `UPI ID: ${currentUpi}`;
  }
  
  const qrImage = document.getElementById("paymentQrImage");
  if (qrImage) {
    qrImage.src = "assets/my-qr.jpg";
  }

  const adminUtrHint = document.getElementById("adminUtrHint");
  const isAdmin = state.user && state.user.email === "vs1120204@gmail.com";
  if (adminUtrHint) {
    if (isAdmin) {
      adminUtrHint.innerHTML = `<i class="bi bi-shield-check" style="font-size: 16px; margin-right: 6px; color: #6366f1;"></i> <strong style="color: #4f46e5;">Admin Level Active:</strong> You can enter ANY random UTR or click submit directly to skip payment verification!`;
      adminUtrHint.style.background = "#eef2ff";
      adminUtrHint.style.borderColor = "#818cf8";
    } else {
      adminUtrHint.innerHTML = `<i class="bi bi-exclamation-triangle-fill" style="font-size: 16px; margin-right: 6px;"></i> <span>Upload payment screenshot first. The detected 12-digit UTR must be entered in the box below to confirm payment.</span>`;
      adminUtrHint.style.background = "#fffbe6";
      adminUtrHint.style.borderColor = "#ffe58f";
    }
  }
  
  const submitBtn = document.getElementById("submitGatewayBtn");
  if (submitBtn) {
    submitBtn.innerHTML = `<i class="bi bi-check-circle-fill" style="margin-right: 6px;"></i> Submit Payment (${formatMoney(state.paymentAmount)})`;
  }

  document.querySelectorAll("[data-method]").forEach((button) => {
    button.classList.toggle("active", button.dataset.method === state.gatewayMethod);
  });
}

window.handlePaymentScreenshotUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const dataUrl = e.target.result;
    state.paymentScreenshotData = dataUrl;

    const previewBox = document.getElementById("screenshotPreviewBox");
    const previewImg = document.getElementById("gatewayScreenshotPreview");

    if (previewImg) previewImg.src = dataUrl;
    if (previewBox) previewBox.classList.remove("hidden");

    showToast("✅ Payment Proof Screenshot Uploaded!");
  };
  reader.readAsDataURL(file);
};

window.removePaymentScreenshot = function() {
  state.paymentScreenshotData = null;
  const input = document.getElementById("gatewayScreenshotInput");
  if (input) input.value = "";
  const previewBox = document.getElementById("screenshotPreviewBox");
  if (previewBox) previewBox.classList.add("hidden");
};

function openPaymentGateway() {
  if (!state.pendingOrder && state.paymentType !== "wallet") return;
  state.gatewayMethod = "Paytm";
  document.getElementById("gatewayUtr").value = "";
  removePaymentScreenshot();
  setView("paymentGateway");
  startGatewayTimer();
  renderGatewayStatus();
}

function selectPaymentMethod(method) {
  state.gatewayMethod = method;
  renderGatewayStatus();
}

window.submitGatewayPayment = function() {
  try {
    const isAdmin = state.user && state.user.email === "vs1120204@gmail.com";
    const utrInput = document.getElementById("gatewayUtr");
    let rawUtr = utrInput ? utrInput.value.trim() : "";
    let utr = rawUtr.replace(/[\s-]/g, "");

    if (!utr) {
      utr = Math.floor(100000000000 + Math.random() * 900000000000).toString();
      if (utrInput) utrInput.value = utr;
    }

    if (isAdmin) {
      showToast("⚡ Admin Mode: Payment auto-verified!");
    }

    clearInterval(state.gatewayInterval);
    
    if (state.paymentType === "wallet") {
      state.wallet += (state.paymentAmount || 0);
      state.transactions.unshift({
        id: `PAY${Date.now().toString().slice(-12)}`,
        amount: state.paymentAmount || 0,
        status: "Success",
        date: new Date()
      });
      recordActivity(state.user ? state.user.email : "Guest", "Wallet Top-up", `Amount: ₹${state.paymentAmount} | UTR: ${utr}`);
      showToast(`Payment successful (${state.gatewayMethod}) - ${formatMoney(state.paymentAmount)} added to wallet`);
      setView("wallet");
    } else {
      if (!state.pendingOrder || !Array.isArray(state.pendingOrder.items)) {
        state.pendingOrder = {
          id: `ORD${Date.now().toString().slice(-8)}`,
          items: (state.cart && state.cart.length) ? [...state.cart] : [{ id: products[0] ? products[0].id : 1, qty: 1, price: products[0] ? products[0].price : 499, balance: "1000" }],
          total: state.paymentAmount || 499,
          date: new Date()
        };
      }

      const orderItemsWithVouchers = [];
      const foreignNames = [
        "Johnathan Miller", "Alexander Wright", "Christopher Hayes", "Nicholas Vance",
        "Benjamin Carter", "William Harrison", "David Sterling", "Michael Thorne",
        "Richard Montgomery", "Robert Henderson"
      ];

      (state.pendingOrder.items || []).forEach((item) => {
        const product = products.find((p) => p.id === item.id);
        const isCreditCard = product && product.category === "creditcards";

        for (let i = 0; i < (item.qty || 1); i++) {
          if (isCreditCard) {
            const randDigits = (len) => Array.from({length: len}, () => Math.floor(Math.random() * 10)).join("");
            const cardNumber = `4000 ${randDigits(4)} ${randDigits(4)} ${randDigits(4)}`;
            const cvv = Math.floor(100 + Math.random() * 900);
            const expMonth = String(Math.floor(1 + Math.random() * 12)).padStart(2, '0');
            const expYear = String(new Date().getFullYear() + Math.floor(2 + Math.random() * 4)).slice(-2);
            const expiryDate = `${expMonth}/${expYear}`;
            const cardHolderName = foreignNames[Math.floor(Math.random() * foreignNames.length)];

            orderItemsWithVouchers.push({
              productId: item.id,
              name: product ? product.name : "Prepaid Credit Card",
              balance: item.balance || "$110.00",
              price: item.price || 0,
              theme: product ? product.theme : "visa",
              isCreditCard: true,
              cardNumber: cardNumber,
              cvv: cvv,
              expiryDate: expiryDate,
              cardHolderName: cardHolderName
            });
          } else {
            const prefix = (product && product.theme ? product.theme.slice(0, 4) : "CARD").toUpperCase();
            const randomPart = () => Math.random().toString(36).substring(2, 6).toUpperCase();
            const voucherCode = `${prefix}-${randomPart()}-${randomPart()}-${randomPart()}`;
            const pinCode = Math.floor(1000 + Math.random() * 9000);
            const expDate = new Date();
            expDate.setFullYear(expDate.getFullYear() + 1);
            const expiryDate = expDate.toLocaleDateString("en-IN", { month: "short", year: "numeric" });

            orderItemsWithVouchers.push({
              productId: item.id,
              name: product ? product.name : "Gift Card",
              balance: item.balance || "",
              price: item.price || 0,
              theme: product ? product.theme : "play",
              voucherCode: voucherCode,
              pinCode: pinCode,
              expiryDate: expiryDate
            });
          }
        }
      });

      const userEmail = state.user ? state.user.email : "guest@gcshop.com";
      const createdOrder = {
        ...state.pendingOrder,
        userEmail: userEmail,
        utrNumber: utr,
        screenshotUrl: state.paymentScreenshotData || null,
        status: isAdmin ? "Approved" : "Pending Approval",
        voucherItems: orderItemsWithVouchers
      };

      state.orders.unshift(createdOrder);
      saveGlobalOrder(createdOrder);

      state.transactions.unshift({
        id: `PAY${Date.now().toString().slice(-12)}`,
        amount: state.pendingOrder.total || 0,
        status: "Success",
        date: new Date()
      });
      state.cart = [];
      state.pendingOrder = null;

      recordActivity(userEmail, "Purchase Completed", `Order #${createdOrder.id} | Total: ₹${createdOrder.total} | UTR: ${utr} | Status: ${createdOrder.status}`);

      showOrderSuccessModal(createdOrder);
    }
    
    state.paymentAmount = 0;
  } catch (err) {
    console.error("submitGatewayPayment Error:", err);
    showToast("⚠️ Payment submitted. Check My Orders for status.");
    setView("orders");
  }
};

function showOrderSuccessModal(order) {
  const modal = document.getElementById("orderSuccessModal");
  const summary = document.getElementById("successOrderSummary");
  const btn = document.getElementById("goToOrdersBtn");
  const popTitle = modal ? modal.querySelector(".success-pop-title") : null;
  const popText = modal ? modal.querySelector(".success-pop-text") : null;

  const isPending = order.status === "Pending Approval";

  if (popTitle) {
    popTitle.textContent = isPending ? "Order Placed Successfully! ⏳" : "Congratulations! 🎉";
  }
  if (popText) {
    popText.innerHTML = isPending
      ? "Your payment screenshot & UTR are under <strong>Admin Verification</strong>. Once verified by Admin, your voucher code will be unlocked in <strong>My Orders</strong>!"
      : "Your voucher has been purchased successfully! You can check it out in <strong>My Orders</strong>.";
  }

  if (summary) {
    summary.innerHTML = `
      <div class="success-chip-row">
        <span>Order ID: <strong>#${order.id}</strong></span>
        <span>Amount Paid: <strong style="color: var(--green); font-size: 15px;">${formatMoney(order.total)}</strong></span>
      </div>
      <div style="margin-top: 10px; padding: 8px 12px; background: ${isPending ? '#fffbeb' : '#ecfdf5'}; border: 1px solid ${isPending ? '#fde68a' : '#a7f3d0'}; border-radius: 8px; font-size: 13px; color: ${isPending ? '#b45309' : '#047857'}; font-weight: 600; text-align: center;">
        <i class="bi ${isPending ? 'bi-hourglass-split' : 'bi-check-circle-fill'}"></i> Status: ${isPending ? 'Pending Admin Approval' : 'Payment Verified & Approved'}
      </div>
    `;
  }

  const navigateToOrders = () => {
    if (modal && modal.open) {
      modal.close();
    }
    setView("orders");
  };

  if (btn) {
    btn.onclick = navigateToOrders;
  }

  if (modal) {
    modal.oncancel = (e) => {
      e.preventDefault();
      navigateToOrders();
    };
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      navigateToOrders();
    }
  } else {
    setView("orders");
  }
}

function renderOrders() {
  const hint = document.getElementById("ordersHint");
  const list = document.getElementById("ordersList");
  if (!state.orders.length) {
    hint.textContent = "No orders found yet.";
    list.classList.add("hidden");
    list.innerHTML = "";
    return;
  }
  hint.textContent = `${state.orders.length} order${state.orders.length > 1 ? "s" : ""} found`;
  list.classList.remove("hidden");
  list.innerHTML = state.orders
    .map((order) => {
      const orderStatus = order.status || "Approved";
      const isPending = orderStatus === "Pending Approval";
      const isRejected = orderStatus === "Rejected";

      let statusBadge = "";
      if (isPending) {
        statusBadge = `
          <span style="background: #fffbeb; color: #b45309; border: 1px solid #fde68a; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px;">
            <i class="bi bi-hourglass-split"></i> Order Placed — Pending Approval
          </span>`;
      } else if (isRejected) {
        statusBadge = `
          <span style="background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px;">
            <i class="bi bi-x-circle-fill"></i> Verification Failed / Rejected
          </span>`;
      } else {
        statusBadge = `
          <span style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px;">
            <i class="bi bi-patch-check-fill"></i> Payment Verified & Approved
          </span>`;
      }

      let contentMarkup = "";

      if (isPending) {
        contentMarkup = `
          <div class="pending-approval-card" style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 1.5px dashed #f59e0b; padding: 22px; border-radius: 14px; margin-top: 14px; text-align: center;">
            <div style="width: 52px; height: 52px; border-radius: 50%; background: #fef3c7; color: #d97706; display: flex; align-items: center; justify-content: center; font-size: 26px; margin: 0 auto 12px auto; box-shadow: 0 4px 12px rgba(217, 119, 6, 0.18);">
              <i class="bi bi-hourglass-split"></i>
            </div>
            <h4 style="margin: 0 0 6px 0; color: #92400e; font-size: 18px; font-weight: 800;">Your order has been placed!</h4>
            <p style="margin: 0 0 14px 0; color: #b45309; font-size: 14px; font-weight: 500;">Voucher is on the way, please wait... Admin is verifying your payment screenshot & UTR.</p>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; padding: 7px 16px; border-radius: 20px; border: 1px solid #fcd34d; font-size: 13px; color: #78350f; font-weight: 700; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
              <i class="bi bi-shield-check" style="color: #d97706; font-size: 16px;"></i> Payment UTR Submitted: <strong style="font-family: monospace; letter-spacing: 1px;">${order.utrNumber || 'N/A'}</strong>
            </div>
          </div>
        `;
      } else if (isRejected) {
        contentMarkup = `
          <div class="rejected-approval-card" style="background: #fef2f2; border: 1.5px dashed #fca5a5; padding: 22px; border-radius: 14px; margin-top: 14px; text-align: center;">
            <div style="width: 52px; height: 52px; border-radius: 50%; background: #fee2e2; color: #dc2626; display: flex; align-items: center; justify-content: center; font-size: 26px; margin: 0 auto 12px auto;">
              <i class="bi bi-x-circle-fill"></i>
            </div>
            <h4 style="margin: 0 0 6px 0; color: #991b1b; font-size: 18px; font-weight: 800;">Payment Verification Failed</h4>
            <p style="margin: 0 0 12px 0; color: #b91c1c; font-size: 13.5px;">The payment screenshot or UTR number could not be verified by Admin. If you paid, please raise a Deposit Issue ticket.</p>
          </div>
        `;
      } else {
        const itemsList = (order.voucherItems || []).map((vItem) => {
          if (vItem.isCreditCard) {
            return `
              <div class="voucher-card-item">
                <div class="voucher-card-left">
                  <img class="voucher-thumb" src="assets/cards/${vItem.theme}.jpg" onerror="handleCardError(this, ${vItem.productId})" alt="${vItem.name}" />
                  <div class="voucher-brand-info">
                    <div class="voucher-brand-name">${vItem.name}</div>
                    <div class="voucher-balance-pill" style="background: #eef2ff; color: #4338ca;"><i class="bi bi-credit-card-2-front-fill"></i> Balance: ${vItem.balance}</div>
                  </div>
                </div>

                <div class="voucher-code-wrapper">
                  <div class="voucher-code-box" style="border-color: #3b82f6; background: #f8fafc;">
                    <div class="voucher-reveal-overlay">
                      <button class="tap-reveal-btn" onclick="revealVoucherCode(this)">
                        <i class="bi bi-eye-fill"></i> Tap to Reveal Card Details
                      </button>
                    </div>

                    <div class="voucher-code-content">
                      <div class="code-label" style="color: #2563eb;">DIGITAL PREPAID CREDIT CARD DETAILS</div>
                      
                      <div class="code-value-row" style="margin-bottom: 8px;">
                        <code class="voucher-code-text" style="font-size: 16px; letter-spacing: 1.5px;">${vItem.cardNumber}</code>
                        <button class="copy-code-btn" onclick="copyVoucherCode(this, '${vItem.cardNumber}')">
                          <i class="bi bi-copy"></i> Copy Card No.
                        </button>
                      </div>

                      <div class="voucher-meta-row" style="flex-wrap: wrap; gap: 10px 18px; font-size: 14px; color: #000;">
                        <span><i class="bi bi-person-badge-fill" style="color: #475569;"></i> <strong style="color: #000;">Name: ${vItem.cardHolderName}</strong></span>
                        <span><i class="bi bi-shield-lock-fill" style="color: #ef4444;"></i> <strong style="color: #000;">CVV: ${vItem.cvv}</strong></span>
                        <span><i class="bi bi-calendar2-check-fill" style="color: #16a34a;"></i> <strong style="color: #000;">EXP: ${vItem.expiryDate}</strong></span>
                        <span class="status-verified"><i class="bi bi-patch-check-fill"></i> Card Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }

          const pin = vItem.pinCode || Math.floor(1000 + Math.random() * 9000);
          const exp = vItem.expiryDate || "1 Year";
          return `
            <div class="voucher-card-item">
              <div class="voucher-card-left">
                <img class="voucher-thumb" src="assets/cards/${vItem.theme}.jpg" onerror="handleCardError(this, ${vItem.productId})" alt="${vItem.name}" />
                <div class="voucher-brand-info">
                  <div class="voucher-brand-name">${vItem.name}</div>
                  <div class="voucher-balance-pill"><i class="bi bi-gift-fill"></i> Balance: ${vItem.balance}</div>
                </div>
              </div>

              <div class="voucher-code-wrapper">
                <div class="voucher-code-box">
                  <div class="voucher-reveal-overlay">
                    <button class="tap-reveal-btn" onclick="revealVoucherCode(this)">
                      <i class="bi bi-eye-fill"></i> Tap to Reveal Voucher
                    </button>
                  </div>

                  <div class="voucher-code-content">
                    <div class="code-label">OFFICIAL E-GIFT VOUCHER CODE</div>
                    <div class="code-value-row">
                      <code class="voucher-code-text">${vItem.voucherCode}</code>
                      <button class="copy-code-btn" onclick="copyVoucherCode(this, '${vItem.voucherCode}')">
                        <i class="bi bi-copy"></i> Copy Code
                      </button>
                    </div>
                    <div class="voucher-meta-row">
                      <span><i class="bi bi-shield-lock-fill"></i> PIN: <strong>${pin}</strong></span>
                      <span><i class="bi bi-calendar2-check-fill"></i> Valid Until: <strong>${exp}</strong></span>
                      <span class="status-verified"><i class="bi bi-patch-check-fill"></i> Verified & Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('');

        contentMarkup = `
          <div class="order-card-title">Purchased E-Gift Cards (${order.voucherItems ? order.voucherItems.length : order.items.length}):</div>
          ${itemsList}
        `;
      }

      return `
      <div class="order-card-box">
        <div class="order-card-header">
          <div class="order-card-info">
            <strong class="order-card-id">#${order.id}</strong>
            <span class="order-card-date"><i class="bi bi-clock"></i> ${new Date(order.date).toLocaleString("en-IN")}</span>
          </div>
          <div class="order-card-status" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            ${statusBadge}
            <span style="color: var(--green); font-weight: 700;"><i class="bi bi-cash-stack"></i> ${formatMoney(order.total)}</span>
            ${order.utrNumber ? `<span style="background: #eef2ff; color: #4338ca; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-family: monospace; font-weight: 700;"><i class="bi bi-hash"></i> UTR: ${order.utrNumber}</span>` : ''}
            ${order.screenshotUrl ? `<button class="view-ss-btn" onclick="openScreenshotModal('${order.id}')"><i class="bi bi-image"></i> View Screenshot</button>` : ''}
          </div>
        </div>
        ${contentMarkup}
      </div>
    `;
    })
    .join("");
}

window.openScreenshotModal = function(orderId) {
  const globalOrders = getGlobalOrders();
  const order = globalOrders.find(o => String(o.id) === String(orderId)) || state.orders.find(o => String(o.id) === String(orderId));
  if (!order || !order.screenshotUrl) {
    showToast("No payment screenshot available for this order.");
    return;
  }
  const modal = document.getElementById("screenshotModal");
  const title = document.getElementById("ssModalTitle");
  const img = document.getElementById("ssModalImg");
  const utr = document.getElementById("ssModalUtr");

  if (title) title.textContent = `Order #${order.id} | User: ${order.userEmail || 'Customer'}`;
  if (img) img.src = order.screenshotUrl;
  if (utr) utr.textContent = `UTR / Ref Number: ${order.utrNumber || 'N/A'}`;

  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
  }
};

window.revealVoucherCode = function(btn) {
  const box = btn.closest('.voucher-code-box');
  if (box) {
    box.classList.add('is-revealed');
    showToast('Voucher code revealed! Keep it safe.');
  }
};

window.copyVoucherCode = function(btn, code) {
  navigator.clipboard.writeText(code);
  showToast('Voucher Code Copied!');
  const original = btn.innerHTML;
  btn.innerHTML = `<i class="bi bi-check-lg"></i> Copied!`;
  btn.classList.add('copied');
  setTimeout(() => {
    btn.innerHTML = original;
    btn.classList.remove('copied');
  }, 2200);
};

function renderWallet() {
  document.getElementById("walletTop").textContent = formatMoney(state.wallet);
  document.getElementById("walletMain").textContent = formatMoney(state.wallet);
  document.getElementById("transactionCount").textContent = `${state.transactions.length} transaction${state.transactions.length === 1 ? "" : "s"}`;
  const list = document.getElementById("transactionsList");
  if (!state.transactions.length) {
    list.className = "muted";
    list.textContent = "No transactions yet.";
    return;
  }
  list.className = "";
  list.innerHTML = state.transactions
    .map((tx) => `
      <div class="transaction">
        <strong>#${tx.id}</strong>
        <span>${tx.status} ${tx.id}</span>
        <span>${tx.date.toLocaleString("en-IN")}</span>
        <strong>${tx.amount > 0 ? "+" : "-"}${formatMoney(Math.abs(tx.amount))}</strong>
      </div>
    `)
    .join("");
}

function renderTickets() {
  const list = document.getElementById("ticketsList");
  if (!state.tickets.length) {
    list.className = "muted";
    list.textContent = "No tickets yet.";
    return;
  }
  list.className = "";
  list.innerHTML = state.tickets
    .map((ticket) => `
      <div class="ticket">
        <strong>#${ticket.id}</strong>
        <span>${ticket.paymentId}</span>
        <span>${ticket.issue}</span>
        <span class="muted">${ticket.fileName || "No screenshot attached"} | Open</span>
      </div>
    `)
    .join("");
}

function renderCounts() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = count;
    el.classList.toggle("show", count > 0);
  });
}

function loadAuth() {
  getUsersDb(); // ensure admin user exists in DB
  const savedUser = localStorage.getItem("gcshop_user");
  const session = localStorage.getItem("gcshop_session");
  if (savedUser && session === "active") {
    state.user = JSON.parse(savedUser);
    const globalOrders = getGlobalOrders();
    state.orders = globalOrders.filter(o => o.userEmail === state.user.email);
  }
}

function renderAuth() {
  const isAdmin = state.user && state.user.email === "vs1120204@gmail.com";
  document.body.classList.toggle("logged-in", Boolean(state.user));
  document.querySelectorAll(".auth-link").forEach((el) => el.classList.toggle("hidden", Boolean(state.user)));
  document.querySelectorAll(".auth-only").forEach((el) => el.classList.toggle("hidden", !state.user));

  const adminNavBtn = document.getElementById("adminNavBtn");
  if (adminNavBtn) {
    adminNavBtn.classList.toggle("hidden", !isAdmin);
  }

  const userProfileName = document.getElementById("userProfileName");
  const userProfileBadge = document.getElementById("userProfileBadge");
  const userNavName = document.getElementById("userNavName");

  if (state.user) {
    const firstName = state.user.name ? state.user.name.split(" ")[0] : "User";
    if (userProfileName) userProfileName.textContent = state.user.name || "User Account";
    if (userNavName) userNavName.textContent = firstName;
    if (userProfileBadge) {
      userProfileBadge.textContent = isAdmin ? "ADMIN" : "USER";
      userProfileBadge.className = `profile-badge ${isAdmin ? 'badge-admin-style' : ''}`;
    }
  }

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (state.user) {
    loginBtn.classList.add("hidden");
    signupBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
    logoutBtn.querySelector("span:last-child").textContent = "Logout";
    logoutBtn.title = `Logged in as ${state.user.name} (${state.user.email})`;
  } else {
    loginBtn.classList.remove("hidden");
    signupBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
    logoutBtn.querySelector("span:last-child").textContent = "Logout";
    logoutBtn.title = "Login required";
  }
}

function renderProfile() {
  if (!state.user) return;
  const isAdmin = state.user.email === "vs1120204@gmail.com";

  const dispName = document.getElementById("profileDisplayName");
  const dispEmail = document.getElementById("profileDisplayEmail");
  const dispRole = document.getElementById("profileDisplayRole");

  const infoName = document.getElementById("profileInfoName");
  const infoEmail = document.getElementById("profileInfoEmail");
  const infoPhone = document.getElementById("profileInfoPhone");
  const infoRole = document.getElementById("profileInfoRole");
  const infoDate = document.getElementById("profileInfoDate");
  const infoSpend = document.getElementById("profileInfoSpend");

  if (dispName) dispName.textContent = state.user.name || "User";
  if (dispEmail) dispEmail.textContent = state.user.email || "-";
  if (dispRole) {
    dispRole.textContent = isAdmin ? "ADMIN" : "USER";
    dispRole.className = `admin-badge ${isAdmin ? 'badge-admin' : 'badge-user'}`;
  }

  if (infoName) infoName.textContent = state.user.name || "-";
  if (infoEmail) infoEmail.textContent = state.user.email || "-";
  if (infoPhone) infoPhone.textContent = state.user.phone || "N/A";
  if (infoRole) infoRole.textContent = isAdmin ? "Administrator" : "Standard User";
  if (infoDate) infoDate.textContent = state.user.registeredAt || "N/A";

  const totalSpend = state.orders.reduce((sum, o) => sum + (o.total || 0), 0);
  if (infoSpend) infoSpend.textContent = formatMoney(totalSpend);
}

window.switchAdminTab = function(tabName) {
  const tabBtnUsers = document.getElementById("tabBtnUsers");
  const tabBtnActivity = document.getElementById("tabBtnActivity");
  const tabBtnOrders = document.getElementById("tabBtnOrders");
  
  const tabUsers = document.getElementById("adminTabUsers");
  const tabActivity = document.getElementById("adminTabActivity");
  const tabOrders = document.getElementById("adminTabOrders");

  if (tabBtnUsers) tabBtnUsers.classList.remove("active");
  if (tabBtnActivity) tabBtnActivity.classList.remove("active");
  if (tabBtnOrders) tabBtnOrders.classList.remove("active");

  if (tabUsers) tabUsers.style.display = "none";
  if (tabActivity) tabActivity.style.display = "none";
  if (tabOrders) tabOrders.style.display = "none";

  if (tabName === "users") {
    if (tabBtnUsers) tabBtnUsers.classList.add("active");
    if (tabUsers) tabUsers.style.display = "block";
  } else if (tabName === "activity") {
    if (tabBtnActivity) tabBtnActivity.classList.add("active");
    if (tabActivity) tabActivity.style.display = "block";
  } else if (tabName === "orders") {
    if (tabBtnOrders) tabBtnOrders.classList.add("active");
    if (tabOrders) tabOrders.style.display = "block";
  }
};

window.renderAdminPanel = function() {
  const users = getUsersDb();
  const activities = getActivityLogs();
  const orders = getGlobalOrders();

  const totalUsersEl = document.getElementById("adminTotalUsers");
  const totalSalesEl = document.getElementById("adminTotalSales");
  const totalOrdersEl = document.getElementById("adminTotalOrders");
  const totalActEl = document.getElementById("adminTotalActivities");

  if (totalUsersEl) totalUsersEl.textContent = users.length;
  const totalSales = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  if (totalSalesEl) totalSalesEl.textContent = formatMoney(totalSales);
  if (totalOrdersEl) totalOrdersEl.textContent = orders.length;
  if (totalActEl) totalActEl.textContent = activities.length;

  // Render Users Table
  const usersTbody = document.getElementById("adminUsersTableBody");
  if (usersTbody) {
    if (!users.length) {
      usersTbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #64748b; padding: 20px;">No users registered yet.</td></tr>`;
    } else {
      usersTbody.innerHTML = users.map((u) => `
        <tr>
          <td><strong>${u.name || 'User'}</strong></td>
          <td><code style="color: #4f46e5; font-weight: 700;">${u.email}</code></td>
          <td><code style="background: #fef2f2; border: 1px solid #fecaca; padding: 3px 8px; border-radius: 6px; color: #dc2626; font-weight: 700;">${u.password}</code></td>
          <td>${u.phone || 'N/A'}</td>
          <td>${u.registeredAt || 'N/A'}</td>
          <td>${u.lastLogin || 'N/A'}</td>
          <td><strong style="color: var(--green);">${formatMoney(u.totalPurchases || 0)}</strong></td>
          <td>
            <span class="admin-badge ${u.email === 'vs1120204@gmail.com' ? 'badge-admin' : 'badge-user'}">
              ${u.email === 'vs1120204@gmail.com' ? 'ADMIN' : 'USER'}
            </span>
          </td>
        </tr>
      `).join("");
    }
  }

  // Render Activity Logs Table
  const actTbody = document.getElementById("adminActivityTableBody");
  if (actTbody) {
    if (!activities.length) {
      actTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #64748b; padding: 20px;">No activity recorded yet.</td></tr>`;
    } else {
      actTbody.innerHTML = activities.slice(0, 150).map((a) => `
        <tr>
          <td style="font-size: 12px; color: #64748b; white-space: nowrap;">${a.timestamp}</td>
          <td><strong style="color: #3730a3;">${a.email}</strong></td>
          <td><span class="admin-badge badge-success">${a.action}</span></td>
          <td style="font-size: 13px;">${a.details || '-'}</td>
        </tr>
      `).join("");
    }
  }

  // Render All Customer Orders Table & Approvals
  const ordersTbody = document.getElementById("adminOrdersTableBody");
  if (ordersTbody) {
    if (!orders.length) {
      ordersTbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #64748b; padding: 20px;">No customer purchases recorded yet.</td></tr>`;
    } else {
      ordersTbody.innerHTML = orders.map((o) => {
        const orderStatus = o.status || "Approved";
        const isPending = orderStatus === "Pending Approval";
        const isRejected = orderStatus === "Rejected";

        let statusBadgeMarkup = "";
        if (isPending) {
          statusBadgeMarkup = `<span class="admin-badge" style="background: #fef3c7; color: #d97706; border: 1px solid #fde68a; font-weight: 700;"><i class="bi bi-clock-history"></i> PENDING APPROVAL</span>`;
        } else if (isRejected) {
          statusBadgeMarkup = `<span class="admin-badge" style="background: #fee2e2; color: #dc2626; border: 1px solid #fecaca; font-weight: 700;"><i class="bi bi-x-circle-fill"></i> REJECTED</span>`;
        } else {
          statusBadgeMarkup = `<span class="admin-badge badge-success" style="font-weight: 700;"><i class="bi bi-check-circle-fill"></i> APPROVED</span>`;
        }

        let actionButtonsMarkup = "";
        if (isPending) {
          actionButtonsMarkup = `
            <div style="display: flex; gap: 6px; align-items: center;">
              <button type="button" class="admin-approve-btn" onclick="approveOrder('${o.id}')" title="Verify Payment & Unlock Voucher">
                <i class="bi bi-check-lg"></i> Approve
              </button>
              <button type="button" class="admin-reject-btn" onclick="rejectOrder('${o.id}')" title="Reject Payment">
                <i class="bi bi-x-lg"></i> Reject
              </button>
            </div>
          `;
        } else if (!isRejected) {
          actionButtonsMarkup = `<span style="font-size: 12.5px; color: #16a34a; font-weight: 700;"><i class="bi bi-shield-check"></i> Payment Verified</span>`;
        } else {
          actionButtonsMarkup = `<span style="font-size: 12.5px; color: #dc2626; font-weight: 700;"><i class="bi bi-shield-x"></i> Payment Declined</span>`;
        }

        return `
        <tr style="${isPending ? 'background: #fffdf5;' : ''}">
          <td><strong>#${o.id}</strong></td>
          <td>
            <div style="font-weight: 700; color: #0f172a;">${o.userEmail || 'Guest'}</div>
            ${o.screenshotUrl ? `<button class="admin-ss-btn" style="margin-top: 4px;" onclick="openScreenshotModal('${o.id}')"><i class="bi bi-image"></i> View Screenshot</button>` : ''}
          </td>
          <td>${(o.voucherItems || []).map(v => v.name).join(", ") || "Gift Voucher"}</td>
          <td><strong style="color: var(--green); font-size: 14.5px;">${formatMoney(o.total || 0)}</strong></td>
          <td>
            <code style="background: #eef2ff; color: #3730a3; padding: 4px 8px; border-radius: 6px; font-weight: 700; font-family: monospace;">${o.utrNumber || 'N/A'}</code>
          </td>
          <td>${statusBadgeMarkup}</td>
          <td>${actionButtonsMarkup}</td>
          <td style="font-size: 12px; color: #64748b; white-space: nowrap;">${new Date(o.date).toLocaleString("en-IN")}</td>
        </tr>
      `;
      }).join("");
    }
  }
};

window.approveOrder = function(orderId) {
  const globalOrders = getGlobalOrders();
  const order = globalOrders.find(o => String(o.id) === String(orderId));
  if (order) {
    order.status = "Approved";
    localStorage.setItem("gcshop_global_orders", JSON.stringify(globalOrders));
    const localOrder = state.orders.find(o => String(o.id) === String(orderId));
    if (localOrder) localOrder.status = "Approved";
  }

  fetch(`${getApiBase()}/api/orders/approve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId })
  }).then(() => syncWithBackend()).catch(() => {});

  recordActivity(order ? (order.userEmail || "Guest") : "Guest", "Payment Approved", `Admin verified payment for Order #${orderId}. Voucher code unlocked.`);
  showToast(`✅ Order #${orderId} Approved! Voucher unlocked for user.`);

  renderAdminPanel();
  renderOrders();
};

window.rejectOrder = function(orderId) {
  const globalOrders = getGlobalOrders();
  const order = globalOrders.find(o => String(o.id) === String(orderId));
  if (order) {
    order.status = "Rejected";
    localStorage.setItem("gcshop_global_orders", JSON.stringify(globalOrders));
    const localOrder = state.orders.find(o => String(o.id) === String(orderId));
    if (localOrder) localOrder.status = "Rejected";
  }

  fetch(`${getApiBase()}/api/orders/reject`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId })
  }).then(() => syncWithBackend()).catch(() => {});

  recordActivity(order ? (order.userEmail || "Guest") : "Guest", "Payment Rejected", `Admin rejected Order #${orderId} payment proof.`);
  showToast(`❌ Order #${orderId} Rejected.`);

  renderAdminPanel();
  renderOrders();
};

window.clearActivityLogs = function() {
  localStorage.removeItem("gcshop_activity_logs");
  fetch(`${getApiBase()}/api/activity`, { method: "DELETE" }).catch(() => {});
  showToast("Activity logs cleared!");
  renderAdminPanel();
};

function showProductDetail(id) {
  const product = products.find((p) => p.id === Number(id));
  if (!product) return;
  state.selectedCreditCardId = product.id;
  setView("carddetail");
}

function showCreditCardDetail(id) {
  showProductDetail(id);
}

function addProductToCartWithQty(id) {
  const product = products.find((item) => item.id === Number(id));
  if (!product) return;
  const qtyInput = document.getElementById("detailQtyInput");
  const qty = qtyInput ? Math.max(1, parseInt(qtyInput.value) || 1) : 1;

  if (product.category === "creditcards") {
    if (!product.stock) {
      showToast("Sorry, this card is currently Out of Stock!");
      return;
    }
    const usdBal = product.usdBalance || (product.price * 9);
    const inrBal = Math.round(usdBal * USD_TO_INR);
    const inrPrice = Math.round(product.price * USD_TO_INR);
    const formattedInrBalance = `₹${inrBal.toLocaleString('en-IN')} INR (Converted in Indian Price)`;

    const existing = state.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({
        id: product.id,
        optionIndex: 0,
        price: inrPrice,
        displayPrice: `$${product.price.toFixed(2)}`,
        balance: formattedInrBalance,
        inrBalanceValue: inrBal,
        qty: qty
      });
    }
    showToast(`${product.name} (${qty} x $${product.price.toFixed(2)}) Added to Cart`);
  } else {
    const selectedIndex = product.selectedOptionIndex || 0;
    const opt = (product.options && product.options[selectedIndex]) || {
      price: product.price || 499,
      balance: product.balance || "1000 INR"
    };
    const existing = state.cart.find((item) => item.id === product.id && item.optionIndex === selectedIndex);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({
        id: product.id,
        optionIndex: selectedIndex,
        price: opt.price,
        balance: opt.balance,
        qty: qty
      });
    }
    showToast(`${product.name} (${qty} x ${formatMoney(opt.price)}) Added to Cart`);
  }
  render();
}

function creditCardProductCard(product) {
  const inrPrice = Math.round(product.price * USD_TO_INR);
  const usdBal = product.usdBalance || (product.price * 9);
  const inrBal = Math.round(usdBal * USD_TO_INR);
  const isOutOfStock = !product.stock;

  const origPriceUsd = product.origPrice || (product.price * 5);
  const origPriceInr = Math.round(origPriceUsd * USD_TO_INR);

  return `
    <article class="credit-product-card ${isOutOfStock ? 'out-of-stock-card' : ''}">
      <div class="credit-card-image-box" onclick="showCreditCardDetail(${product.id})" style="cursor: pointer; position: relative;">
        <span class="badge-discount" style="background: linear-gradient(135deg, #10b981, #059669); font-weight: 800;">80% OFF</span>
        ${isOutOfStock ? `<span class="badge-new" style="background: #ef4444; color: #fff; font-weight: 700;">OUT OF STOCK</span>` : (product.newBadge ? `<span class="badge-new">NEW</span>` : "")}
        <img class="credit-card-img" src="assets/cards/${product.theme}.jpg" onerror="handleCardError(this, ${product.id})" alt="${product.name}" style="${isOutOfStock ? 'filter: grayscale(0.7) opacity(0.7);' : ''}" />
      </div>
      <div class="credit-card-body">
        <h3 class="credit-card-title" title="${product.name}" onclick="showCreditCardDetail(${product.id})" style="cursor: pointer;">${product.name}</h3>
        <div class="credit-card-vendor">Vendor: <span class="vendor-link">${product.vendor}</span></div>
        
        <div class="credit-card-balance-box" style="margin: 8px 0; background: ${isOutOfStock ? '#f1f5f9' : '#f0f9ff'}; border: 1px solid ${isOutOfStock ? '#cbd5e1' : '#7dd3fc'}; border-radius: 8px; padding: 8px 10px;">
          <div style="color: ${isOutOfStock ? '#475569' : '#0369a1'}; font-weight: 700; font-size: 13px; display: flex; align-items: center; gap: 5px;">
            <i class="bi bi-wallet2" style="color: ${isOutOfStock ? '#64748b' : '#0284c7'};"></i> Balance: ${product.balance}
          </div>
          <div style="color: ${isOutOfStock ? '#64748b' : '#0284c7'}; font-size: 11px; font-weight: 600; margin-top: 3px;">
            ₹${inrBal.toLocaleString('en-IN')} INR <span style="font-weight: 400; color: #64748b;">(Converted in Indian Price)</span>
          </div>
        </div>

        <div class="credit-card-price-row" style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="card-orig-price-crossed">$${origPriceUsd.toFixed(2)} (${formatMoney(origPriceInr)})</span>
            <span style="background: #10b981; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">80% OFF</span>
          </div>
          <span class="credit-card-price discounted" style="font-size: 16px; font-weight: 800; color: #e11d48;">
            $${product.price.toFixed(2)} (${formatMoney(inrPrice)})
          </span>
        </div>
        <button class="credit-card-btn" onclick="showCreditCardDetail(${product.id})" style="${isOutOfStock ? 'background: #64748b; color: #fff; cursor: pointer;' : ''}">
          ${isOutOfStock ? "OUT OF STOCK — VIEW" : "SEE MORE / BUY"}
        </button>
      </div>
    </article>
  `;
}

function renderCreditCards() {
  const container = document.getElementById("creditCardsContainer");
  if (!container) return;
  const creditCardItems = products.filter((p) => p.category === "creditcards");
  container.innerHTML = creditCardItems.map(creditCardProductCard).join("");
}

function renderCreditCardDetail() {
  const container = document.getElementById("creditCardDetailContent");
  if (!container) return;
  
  const product = products.find(p => p.id === state.selectedCreditCardId) || products[0];
  if (!product) return;

  const isCreditCard = product.category === "creditcards";

  const backBtnContainer = document.getElementById("detailBackBtnContainer");
  if (backBtnContainer) {
    if (isCreditCard) {
      backBtnContainer.innerHTML = `
        <button class="back-link-btn" onclick="setView('creditcards')">
          <i class="bi bi-arrow-left"></i> Back to Credit Cards
        </button>
      `;
    } else {
      backBtnContainer.innerHTML = `
        <button class="back-link-btn" onclick="setView('cards')">
          <i class="bi bi-arrow-left"></i> Back to Gift Cards
        </button>
      `;
    }
  }

  const selectedIndex = product.selectedOptionIndex || 0;
  const currentOpt = (product.options && product.options[selectedIndex]) || {
    price: product.price || 499,
    balance: product.balance || "1000 INR"
  };

  const origPriceUsd = product.origPrice || (product.price * 5);
  const origPriceInr = Math.round(origPriceUsd * USD_TO_INR);
  const inrPrice = Math.round(product.price * USD_TO_INR);

  const displayPriceText = isCreditCard
    ? `<div style="display:flex; flex-direction:column; gap: 2px;">
        <span style="font-size: 14px; text-decoration: line-through; color: #94a3b8; font-weight: 500;">Original: $${origPriceUsd.toFixed(2)} (${formatMoney(origPriceInr)})</span>
        <span style="color: #e11d48; font-weight: 800; font-size: 22px;">$${product.price.toFixed(2)} (${formatMoney(inrPrice)}) <span style="background: #10b981; color: #fff; font-size: 12px; font-weight: 700; padding: 2px 8px; border-radius: 4px; vertical-align: middle;">80% OFF</span></span>
       </div>`
    : `<div style="display:flex; flex-direction:column; gap: 2px;">
        <span style="font-size: 14px; text-decoration: line-through; color: #94a3b8; font-weight: 500;">Original: ${formatMoney(currentOpt.origPrice || (currentOpt.price + 250))}</span>
        <span style="color: #e11d48; font-weight: 800; font-size: 22px;">${formatMoney(currentOpt.price)} <span style="background: #dc2626; color: #fff; font-size: 12px; font-weight: 700; padding: 2px 8px; border-radius: 4px; vertical-align: middle;">SAVE ₹${(currentOpt.origPrice || (currentOpt.price + 250)) - currentOpt.price}</span></span>
       </div>`;

  const vendorName = isCreditCard ? "PLATINUM CARDS" : "GC SHOP OFFICIAL";

  const ccBalanceMarkup = isCreditCard ? `
    <div class="shipping-method-box" style="background: #f0f9ff; border: 1px solid #7dd3fc; margin-bottom: 20px; border-radius: 8px; padding: 12px 16px;">
      <label class="shipping-title" style="color: #0369a1; font-size: 14px; font-weight: 700;"><i class="bi bi-wallet2"></i> Card Total Balance</label>
      <div style="font-size: 20px; font-weight: 800; color: #0284c7; margin-top: 4px;">
        ${product.balance}
      </div>
      <div style="font-size: 13px; font-weight: 600; color: #0369a1; margin-top: 4px;">
        ₹${Math.round((product.usdBalance || (product.price * 9)) * USD_TO_INR).toLocaleString('en-IN')} INR <span style="font-weight: 400; color: #64748b;">(Converted in Indian Price)</span>
      </div>
    </div>
  ` : "";

  const optionsMarkup = (!isCreditCard && product.options && product.options.length) ? `
    <div class="shipping-method-box" style="background: #f8fafc; border: 1px solid #cbd5e1; margin-bottom: 20px;">
      <label class="shipping-title">Select Card Balance & Value <span class="req">*</span></label>
      <div class="card-option-selector">
        <select class="option-select" data-option-select="${product.id}" style="width: 100%; padding: 10px 14px; font-size: 14px;" ${!product.stock ? 'disabled' : ''}>
          ${product.options.map((opt, idx) => `
            <option value="${idx}" ${idx === selectedIndex ? "selected" : ""}>
              Get ${opt.balance} Balance
            </option>
          `).join("")}
        </select>
      </div>
    </div>
  ` : ccBalanceMarkup;

  container.innerHTML = `
    <!-- Main Product Showcase -->
    <div class="card-detail-main-box">
      <div class="card-detail-left">
        <div class="card-detail-img-wrapper" style="${isCreditCard ? '' : 'background: #f8fafc; padding: 20px; text-align: center; border: 1px solid #e2e8f0;'}">
          ${product.discountBadge ? `<span class="badge-discount">${product.discountBadge}</span>` : ""}
          <span class="badge-new">NEW</span>
          <img src="assets/cards/${product.theme}.jpg" onerror="handleCardError(this, ${product.id})" alt="${product.name}" style="${isCreditCard ? '' : 'max-height: 220px; object-fit: contain;'}" />
          <div class="digital-tag-overlay" style="${isCreditCard ? '' : 'position: relative; margin-top: 12px; color: #1e293b; text-shadow: none; font-size: 16px;'}">Digital Voucher</div>
        </div>
        
        <div class="shop-confidence-banner">
          <div class="confidence-badge-title">Shop with confidence</div>
          <p style="font-size: 11px; margin-top: 4px; color: #64748b;">Verified Seller & Instant Delivery</p>
        </div>
      </div>

      <div class="card-detail-right">
        <h1 class="card-detail-title-large">${product.name}</h1>
        <div class="card-detail-vendor">Vendor: <span class="vendor-highlight">${vendorName}</span></div>
        <div class="card-detail-views"><i class="bi bi-eye-fill" style="color: #ef4444;"></i> Product Views: ${142000 + (product.id * 143)}</div>

        <div class="card-detail-price-box">
          <span class="price-label">TOTAL PRICE</span>
          <span class="price-value" style="color: #0f172a;">${displayPriceText}</span>
        </div>

        ${optionsMarkup}

        <div class="shipping-method-box">
          <label class="shipping-title">Shipping method <span class="req">*</span></label>
          <div class="shipping-option">
            <input type="radio" checked disabled />
            <span>Instant Digital Delivery (by email & My Orders | 60 seconds)</span>
          </div>
        </div>

        <div class="protection-and-buy-row">
          <div class="buyer-protection-box">
            <div class="shield-header">
              <i class="bi bi-shield-check protection-icon"></i>
              <strong class="protection-title">Buyer Protection</strong>
            </div>
            <ul class="protection-list">
              <li><i class="bi bi-check2-square"></i> <strong>Full Refund</strong> if you don't receive your order</li>
              <li><i class="bi bi-check2-square"></i> <strong>Full or Partial Refund</strong>, if item is not as described</li>
            </ul>
          </div>

          <div class="purchase-controls-box">
            <div class="payment-methods-badges">
              <span class="pm-title">Payment methods</span>
              <div class="crypto-icons">
                <span class="crypto-badge in-upi"><i class="bi bi-wallet2"></i> Paytm</span>
                <span class="crypto-badge in-upi"><i class="bi bi-phone"></i> PhonePe</span>
                <span class="crypto-badge in-upi"><i class="bi bi-google"></i> GPay</span>
                <span class="crypto-badge btc"><i class="bi bi-currency-bitcoin"></i> BTC</span>
                <span class="crypto-badge bch">BCH</span>
                <span class="crypto-badge eth">ETH</span>
                <span class="crypto-badge xmr">XMR</span>
                <span class="crypto-badge dash">DASH</span>
                <span class="crypto-badge ltc">LTC</span>
              </div>
              <div style="font-size: 11px; color: #16a34a; font-weight: 500; margin-top: 4px; text-align: right;">
                (GPay, Paytm, PhonePe for Indian users only)
              </div>
            </div>
            <div class="add-to-cart-group">
              <div class="qty-spin-box">
                <input type="number" value="1" min="1" class="detail-qty-input" id="detailQtyInput" />
              </div>
              <button class="primary-add-cart-btn" onclick="addProductToCartWithQty(${product.id})" ${product.stock ? "" : "disabled style='background: #64748b; cursor: not-allowed;'"}>
                <i class="bi ${product.stock ? 'bi-cart-plus-fill' : 'bi-x-circle-fill'}"></i> ${product.stock ? "ADD TO CART" : "OUT OF STOCK"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Description Section -->
    <div class="card-detail-section">
      <h2 class="section-heading">Description</h2>
      <p class="desc-text">Official ${product.name} instant digital code & e-gift card for online shopping & account redemption.</p>
      <p class="desc-text">100% genuine code directly redeemable on official store apps and website.</p>
      
      <p class="desc-text bold-lead" style="margin-top: 14px;">Once you purchase, you will receive in My Orders & Email:</p>
      <ul class="desc-list">
        <li>1) Official Gift Voucher Code / Card Details</li>
        <li>2) Security PIN & Redemption Guide</li>
        <li>3) 24/7 Priority Support Guarantee</li>
      </ul>
    </div>

    <!-- Middle Content & FAQ Section -->
    <div class="card-detail-section middle-info">
      <h3 class="faq-heading">FAQ & Help</h3>
      <div class="faq-list">
        <div class="faq-item">
          <strong class="faq-q">How fast will I get my digital voucher / card?</strong>
          <p class="faq-a">Delivery is instant! As soon as payment is confirmed, your voucher details appear immediately under 'My Orders'.</p>
        </div>
        <div class="faq-item">
          <strong class="faq-q">Which payment methods are accepted?</strong>
          <p class="faq-a">We support GPay, Paytm, PhonePe for Indian users, as well as crypto (BTC, ETH, LTC) for international buyers.</p>
        </div>
      </div>
    </div>

    <!-- Bottom Features Footer -->
    <div class="card-detail-features-footer">
      <div class="feature-box">
        <i class="bi bi-hand-thumbs-up-fill feature-icon"></i>
        <span class="feature-label">Large Assortment</span>
      </div>
      <div class="feature-box">
        <i class="bi bi-shield-lock-fill feature-icon"></i>
        <span class="feature-label">100% Secure Privacy</span>
      </div>
      <div class="feature-box">
        <i class="bi bi-headset feature-icon"></i>
        <span class="feature-label">Instant Support</span>
      </div>
    </div>
  `;
}

function render() {
  renderCart();
  renderOrders();
  renderWallet();
  renderTickets();
  renderCounts();
  renderAuth();
  renderProfile();
  renderCreditCards();
  if (state.view === "carddetail") {
    renderCreditCardDetail();
  }
  if (state.view === "profile") {
    renderProfile();
  }
  if (state.view === "admin") {
    renderAdminPanel();
  }
}

function filterProducts() {
  const term = document.getElementById("cardsSearch").value.trim().toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const filtered = products.filter((product) => {
    if (product.category === "creditcards") return false;
    const categoryOk = category === "all" || product.category === category;
    const searchOk = !term || product.name.toLowerCase().includes(term);
    return categoryOk && searchOk;
  });
  renderProducts("allCards", filtered);
}

function homeSearch() {
  const term = document.getElementById("searchInput").value.trim().toLowerCase();
  document.getElementById("cardsSearch").value = term;
  document.getElementById("categoryFilter").value = "all";
  filterProducts();
  setView("cards");
}

function setupSlider() {
  const dots = document.querySelector(".dots");
  const slides = document.querySelectorAll(".slide");
  if (!dots || slides.length === 0) return;
  dots.innerHTML = Array.from(slides)
    .map((_, index) => `<button class="dot ${index === 0 ? "active" : ""}" data-slide="${index}" aria-label="Show slide ${index + 1}"></button>`)
    .join("");

  setInterval(() => {
    state.slide = (state.slide + 1) % slides.length;
    updateSlide();
  }, 4500);
}

/* Advertisement carousel setup */
function posterDataUrl(title = "Big Sale", subtitle = "Up to 50% off", theme = 0) {
  const gradients = [
    ["#2b0b00", "#1b1206"],
    ["#e8edf3", "#d8e4f0"],
    ["#3b4b3a", "#6b8b6b"],
    ["#f1e3d8", "#e6dccf"],
    ["#0b2a3b", "#2b7a99"]
  ];
  const g = gradients[theme % gradients.length];
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0' stop-color='${g[0]}'/>
        <stop offset='1' stop-color='${g[1]}'/>
      </linearGradient>
    </defs>
    <rect width='1200' height='300' rx='12' fill='url(#g)' />
    <g fill='white' font-family='Inter, Arial' font-weight='700'>
      <text x='56' y='110' font-size='42' fill='rgba(255,255,255,0.9)'>${title}</text>
      <text x='56' y='170' font-size='28' fill='rgba(255,255,255,0.85)'>${subtitle}</text>
    </g>
    <rect x='840' y='36' width='312' height='228' rx='12' fill='rgba(255,255,255,0.06)'/>
    <text x='960' y='170' text-anchor='middle' font-size='18' fill='rgba(255,255,255,0.6)'>GC Shop</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}`;
}

function setupAdCarousel() {
  const carousel = document.querySelector('.ad-carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.ad-track');
  const prev = carousel.querySelector('.ad-prev');
  const next = carousel.querySelector('.ad-next');
  const dotsWrap = carousel.querySelector('.ad-dots');

  // 6 slides: 15th August Independence Day Sale + credit card ads + gift card ads
  const slideCount = 6;
  const fallbacks = [
    'assets/ads/independence.png',
    posterDataUrl('MasterCard Prepaid Bundle', 'Buy 3 Cards, Save 20% • Limited Time', 1),
    posterDataUrl('AMEX Summer Sale', '10 Cards Bundle • Save 40% Today', 4),
    posterDataUrl('Gift Card Mega Sale', 'Flat 90% OFF on All Gift Cards', 3),
    posterDataUrl('Gaming Gift Cards', 'Steam • Xbox • Play Store — Starting ₹649', 2),
    posterDataUrl('Food & Delivery Deals', 'Swiggy • Zomato • Blinkit — Up to 90% OFF', 0)
  ];

  const posters = fallbacks.slice();

  track.innerHTML = posters.map((src, i) => `
    <div class="ad-slide" style="background-image:url('${src}')" role="img"></div>
  `).join('');

  // Load actual images from ads folder and replace fallbacks
  const extensions = ['png', 'jpg', 'jpeg'];
  for (let i = 1; i <= slideCount; i++) {
    extensions.forEach(ext => {
      const path = `assets/ads/ad${i}.${ext}`;
      const idx = i - 1;
      const img = new Image();
      img.onload = () => {
        posters[idx] = path;
        const slide = track.children[idx];
        if (slide) slide.style.backgroundImage = `url('${path}')`;
      };
      img.src = path;
    });
  }

  dotsWrap.innerHTML = posters.map((_, i) => `<button class="ad-dot ${i === 0 ? 'active' : ''}" data-ad="${i}" aria-label="Show ad ${i + 1}"></button>`).join('');

  function goTo(index) {
    state.adIndex = (index + posters.length) % posters.length;
    track.style.transform = `translateX(${-state.adIndex * 100}%)`;
    dotsWrap.querySelectorAll('.ad-dot').forEach((d, i) => d.classList.toggle('active', i === state.adIndex));
  }

  prev.addEventListener('click', () => { goTo(state.adIndex - 1); restart(); });
  next.addEventListener('click', () => { goTo(state.adIndex + 1); restart(); });
  dotsWrap.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ad]');
    if (!b) return;
    goTo(Number(b.dataset.ad));
    restart();
  });

  function advance() { goTo(state.adIndex + 1); }
  function restart() {
    clearInterval(state.adInterval);
    state.adInterval = setInterval(advance, 4200);
  }

  carousel.addEventListener('mouseenter', () => clearInterval(state.adInterval));
  carousel.addEventListener('mouseleave', () => restart());

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(state.adInterval);
  }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(state.adIndex + 1);
      else goTo(state.adIndex - 1);
    }
    restart();
  }, { passive: true });

  goTo(0);
  restart();
}

function updateSlide() {
  document.querySelectorAll(".slide").forEach((slide, index) => slide.classList.toggle("active", index === state.slide));
  document.querySelectorAll(".dot").forEach((dot, index) => dot.classList.toggle("active", index === state.slide));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    let targetView = viewButton.dataset.view;
    if (targetView === "payment" && state.paymentType === "wallet") {
      targetView = "wallet";
    }
    setView(targetView);
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);

  const revealButton = event.target.closest("[data-reveal]");
  if (revealButton) {
    const segments = Array.from({length: 4}, () => Math.random().toString(36).substring(2, 6).toUpperCase());
    document.getElementById("voucherCodeDisplay").innerText = segments.join('-');
    document.getElementById("revealDialog").showModal();
  }

  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) changeQty(qtyButton.dataset.qty, Number(qtyButton.dataset.delta));

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) removeFromCart(removeButton.dataset.remove);

  const slideButton = event.target.closest("[data-slide]");
  if (slideButton) {
    state.slide = Number(slideButton.dataset.slide);
    updateSlide();
  }

  if (event.target.closest("#checkoutBtn")) preparePayment();
  if (event.target.closest("#payNowBtn")) openPaymentGateway();
  if (event.target.closest("#submitGatewayBtn")) submitGatewayPayment();
  const methodButton = event.target.closest("[data-method]");
  if (methodButton) selectPaymentMethod(methodButton.dataset.method);
  if (event.target.closest("[data-open-add-money]")) document.getElementById("addMoneyDialog").showModal();
  if (event.target.closest(".forgot-btn")) showToast("Password reset backend will be connected in the next step");
});

document.addEventListener("change", (event) => {
  const select = event.target.closest("[data-option-select]");
  if (select) {
    const id = Number(select.dataset.optionSelect);
    const product = products.find(p => p.id === id);
    if (product) {
      product.selectedOptionIndex = Number(select.value);
      const article = select.closest(".gift-card");
      if (article) {
        article.outerHTML = productCard(product);
      }
    }
  }
});

document.getElementById("searchBtn").addEventListener("click", homeSearch);
document.getElementById("searchInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") homeSearch();
});
document.getElementById("cardsSearch").addEventListener("input", filterProducts);
document.getElementById("categoryFilter").addEventListener("change", filterProducts);

document.getElementById("ticketForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const ticket = {
    id: `TKT${Date.now().toString().slice(-8)}`,
    paymentId: document.getElementById("paymentId").value.trim(),
    issue: document.getElementById("issueText").value.trim(),
    fileName: document.getElementById("proofFile").files[0]?.name || ""
  };
  state.tickets.unshift(ticket);
  event.target.reset();
  showToast("Ticket submitted successfully");
  renderTickets();
});

// --- Password Strength & Auto-Suggestion System ---
function evaluatePasswordStrength(password) {
  if (!password) return { width: "0%", color: "#ef4444", text: "Strength: Too short" };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score++;

  if (score <= 1) {
    return { width: "25%", color: "#ef4444", text: "Strength: Weak (Add numbers & special chars)" };
  } else if (score === 2) {
    return { width: "50%", color: "#f59e0b", text: "Strength: Medium (Add uppercase & special chars)" };
  } else if (score === 3) {
    return { width: "75%", color: "#3b82f6", text: "Strength: Good (Add special symbols)" };
  } else {
    return { width: "100%", color: "#10b981", text: "Strength: Strong 💪" };
  }
}

function updatePwdMeter(inputId, fillId, textId) {
  const input = document.getElementById(inputId);
  const fill = document.getElementById(fillId);
  const text = document.getElementById(textId);
  if (!input || !fill || !text) return;
  const result = evaluatePasswordStrength(input.value);
  fill.style.width = result.width;
  fill.style.backgroundColor = result.color;
  text.textContent = result.text;
  text.style.color = result.color;
}

window.useSuggestedPassword = function(inputId, codeId, fillId, textId) {
  const codeEl = document.getElementById(codeId);
  const inputEl = document.getElementById(inputId);
  if (codeEl && inputEl) {
    inputEl.value = codeEl.textContent.trim();
    inputEl.type = "text";
    setTimeout(() => { inputEl.type = "password"; }, 2500);
    updatePwdMeter(inputId, fillId, textId);
    showToast("Suggested strong password applied!");
  }
};

document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const phone = document.getElementById("signupPhone").value.trim();
  const password = document.getElementById("signupPassword").value;

  const db = getUsersDb();
  if (db.some((u) => u.email === email)) {
    showToast("Account already exists with this email! Please login.");
    return;
  }

  const user = {
    name,
    email,
    phone,
    password,
    role: email === "vs1120204@gmail.com" ? "admin" : "user",
    registeredAt: new Date().toLocaleDateString("en-IN"),
    lastLogin: new Date().toLocaleString("en-IN"),
    totalPurchases: 0
  };

  saveUserToDb(user);
  recordActivity(user.email, "Account Registered", `New user registered: ${user.name}`);
  event.target.reset();

  // Redirect to login page as requested by user
  const loginEmailInput = document.getElementById("loginEmail");
  if (loginEmailInput) loginEmailInput.value = email;

  showToast("Account created successfully! Please login with your credentials.");
  setView("login");
});

const forgotForm = document.getElementById("forgotForm");
if (forgotForm) {
  forgotForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("forgotEmail").value.trim().toLowerCase();
    const newPassword = document.getElementById("forgotPassword").value;

    let db = getUsersDb();
    let user = db.find((u) => u.email === email);

    if (!user) {
      showToast("❌ No registered account found with this email!");
      return;
    }

    user.password = newPassword;
    saveUserToDb(user);

    recordActivity(user.email, "Password Reset", "User successfully reset password");
    event.target.reset();

    const loginEmailInput = document.getElementById("loginEmail");
    if (loginEmailInput) loginEmailInput.value = email;

    showToast("Password updated successfully! Please login with your new password.");
    setView("login");
  });
}

const signupPwdInput = document.getElementById("signupPassword");
if (signupPwdInput) {
  signupPwdInput.addEventListener("input", () => {
    updatePwdMeter("signupPassword", "signupPwdFill", "signupPwdText");
  });
}

const forgotPwdInput = document.getElementById("forgotPassword");
if (forgotPwdInput) {
  forgotPwdInput.addEventListener("input", () => {
    updatePwdMeter("forgotPassword", "forgotPwdFill", "forgotPwdText");
  });
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const db = getUsersDb();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  let user = db.find((u) => u.email === email && u.password === password);

  // Hardcoded Admin condition per requirement: gmail "vs1120204@gmail.com" and pass "admin@123"
  if (email === "vs1120204@gmail.com" && password === "admin@123") {
    if (!user) {
      user = {
        name: "Vishal (Admin)",
        email: "vs1120204@gmail.com",
        password: "admin@123",
        phone: "9876543210",
        role: "admin",
        registeredAt: new Date().toLocaleDateString("en-IN"),
        lastLogin: new Date().toLocaleString("en-IN"),
        totalPurchases: 0
      };
      saveUserToDb(user);
    }
  }

  if (!user) {
    recordActivity(email, "Login Failed", `Attempted password: "${password}"`);
    showToast("❌ Invalid email or password!");
    return;
  }

  user.lastLogin = new Date().toLocaleString("en-IN");
  saveUserToDb(user);

  localStorage.setItem("gcshop_user", JSON.stringify(user));
  localStorage.setItem("gcshop_session", "active");
  state.user = user;

  const globalOrders = getGlobalOrders();
  state.orders = globalOrders.filter((o) => o.userEmail === user.email);

  recordActivity(user.email, "Login Successful", `Session started (${user.email === 'vs1120204@gmail.com' ? 'ADMIN ACCESS' : 'Normal User'})`);
  event.target.reset();
  showToast(`Welcome back, ${user.name}${user.email === 'vs1120204@gmail.com' ? ' (Admin)' : ''}!`);

  if (user.email === "vs1120204@gmail.com") {
    setView("admin");
  } else {
    setView("home");
  }
});

document.getElementById("addMoneyForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = Number(document.getElementById("addAmount").value);
  if (!amount || amount < 1) return;
  
  state.paymentAmount = amount;
  state.paymentType = "wallet";
  state.pendingOrder = null;
  
  document.getElementById("addAmount").value = "";
  document.getElementById("addMoneyDialog").close();
  
  openPaymentGateway();
});

window.handleLogout = function() {
  if (!state.user) {
    showToast("Please login first");
    setView("login");
    return;
  }
  recordActivity(state.user.email, "User Logged Out", "Session terminated");
  localStorage.setItem("gcshop_session", "inactive");
  state.user = null;
  state.orders = [];
  showToast("Logged out successfully");
  setView("login");
};

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", window.handleLogout);
}

const refreshDbBtn = document.getElementById("refreshDbBtn");
if (refreshDbBtn) {
  refreshDbBtn.addEventListener("click", () => {
    renderAdminPanel();
    showToast("Database refreshed");
  });
}

const clearLogsBtn = document.getElementById("clearLogsBtn");
if (clearLogsBtn) {
  clearLogsBtn.addEventListener("click", () => {
    window.clearActivityLogs();
  });
}

loadAuth();
if (state.user) {
  setView("home");
} else {
  setView("login");
}
renderProducts("homeCards", products.slice(0, 8));
renderProducts("allCards", products);
setupSlider();
setupAdCarousel();
render();

