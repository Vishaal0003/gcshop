const products = [
  { id: 1, name: "PLAY STORE", balance: "10000 INR", price: 1599, category: "gaming", stock: true, theme: "play" },
  { id: 2, name: "APPLE", balance: "10000", price: 1999, category: "shopping", stock: true, theme: "apple" },
  { id: 3, name: "APPLE", balance: "5000", price: 999, category: "shopping", stock: false, theme: "apple" },
  { id: 4, name: "BEST BUY", balance: "85 USD", price: 2000, category: "shopping", stock: true, theme: "bestbuy" },
  { id: 5, name: "ETSY", balance: "85 USD", price: 2000, category: "shopping", stock: true, theme: "etsy" },
  { id: 6, name: "TARGET", balance: "85 USD", price: 2000, category: "shopping", stock: true, theme: "target" },
  { id: 7, name: "WALMART", balance: "85 USD", price: 2000, category: "shopping", stock: true, theme: "walmart" },
  { id: 8, name: "SHOPIFY", balance: "85 USD", price: 2000, category: "shopping", stock: true, theme: "shopify" },
  { id: 9, name: "STEAM", balance: "85 USD", price: 2000, category: "gaming", stock: true, theme: "steam" },
  { id: 10, name: "AMAZON.COM", balance: "90 USD", price: 2499, category: "shopping", stock: true, theme: "amazon" },
  { id: 11, name: "X BOX", balance: "6999 INR", price: 1499, category: "gaming", stock: false, theme: "xbox" },
  { id: 12, name: "STEAM", balance: "6999 INR", price: 1999, category: "gaming", stock: false, theme: "steam" },
  { id: 13, name: "BLINKIT", balance: "6999 INR", price: 1999, category: "food", stock: true, theme: "blinkit" },
  { id: 14, name: "SWIGGY", balance: "6999 INR", price: 1999, category: "food", stock: true, theme: "swiggy" },
  { id: 15, name: "ZOMATO", balance: "6999 INR", price: 1999, category: "food", stock: true, theme: "zomato" },
  { id: 16, name: "PVR", balance: "6999 INR", price: 1999, category: "entertainment", stock: false, theme: "pvr" },
  { id: 17, name: "FLIPKART", balance: "7999 INR", price: 1999, category: "shopping", stock: true, theme: "flipkart" },
  { id: 18, name: "JIO DIGITAL", balance: "6999 INR", price: 1999, category: "entertainment", stock: true, theme: "jio" },
  { id: 19, name: "AMAZON", balance: "9999 INR", price: 1999, category: "shopping", stock: true, theme: "amazonpay" },
  { id: 20, name: "BIGBASKET", balance: "7999 INR", price: 1999, category: "food", stock: true, theme: "bigbasket" }
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
  gatewayInterval: null
};

const formatMoney = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);

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
  return `
    <article class="gift-card">
      <img class="gift-art-img" src="assets/cards/${product.theme}.jpg" onerror="handleCardError(this, ${product.id})" alt="${product.name} gift card" />
      <div class="gift-body">
        <h3>${product.name}</h3>
        <p>Balance ${product.balance}</p>
        <div class="price-row">
          <span>${formatMoney(product.price)}</span>
          <span class="stock">${product.stock ? "In stock" : "Sold out"}</span>
        </div>
        <button class="card-btn" data-add="${product.id}" ${product.stock ? "" : "disabled"}>
          ${product.stock ? "Add to Cart" : "SOLD OUT"}
        </button>
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
  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: product.id, qty: 1 });
  }
  showToast(`${product.name} Added to Cart`);
  render();
}

function changeQty(id, delta) {
  const item = state.cart.find((entry) => entry.id === Number(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== Number(id));
  }
  render();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((entry) => entry.id !== Number(id));
  render();
}

function cartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + product.price * item.qty;
  }, 0);
}

function renderCart() {
  const panel = document.getElementById("cartPanel");
  if (!state.cart.length) {
    panel.innerHTML = `
      <section class="empty-cart">
        <div>
          <div class="cart-symbol">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Browse our gift cards and add something special to your cart</p>
          <button class="success-btn" data-view="cards">Start Shopping</button>
        </div>
      </section>
    `;
    return;
  }

  const lines = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return `
        <div class="cart-item">
          <img class="cart-thumb" src="assets/cards/${product.theme}.jpg" onerror="handleCardError(this, ${product.id})" alt="${product.name} gift card" />
          <div>
            <strong>${product.name}</strong>
            <p class="muted">Balance ${product.balance} | ${formatMoney(product.price)}</p>
            <button class="remove-btn" data-remove="${item.id}">Remove</button>
          </div>
          <div class="qty-controls">
            <button data-qty="${item.id}" data-delta="-1">-</button>
            <strong>${item.qty}</strong>
            <button data-qty="${item.id}" data-delta="1">+</button>
          </div>
        </div>
      `;
    })
    .join("");

  panel.innerHTML = `
    <section class="cart-layout">
      <div class="cart-items">${lines}</div>
      <aside class="summary-card">
        <h2>Order Summary</h2>
        <div class="summary-line"><span>Items</span><strong>${state.cart.reduce((sum, item) => sum + item.qty, 0)}</strong></div>
        <div class="summary-line"><span>Subtotal</span><strong>${formatMoney(cartTotal())}</strong></div>
        <div class="summary-line"><span>Delivery</span><strong>Free</strong></div>
        <div class="summary-line summary-total"><span>Total</span><strong>${formatMoney(cartTotal())}</strong></div>
        <button class="success-btn" id="checkoutBtn">Place Order</button>
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
  
  const upiId = "gcshop@upi";
  const amountStr = state.paymentAmount ? state.paymentAmount.toFixed(2) : "0.00";
  
  const upiUri = `upi://pay?pa=${upiId}&pn=GC%20Shop&am=${amountStr}&cu=INR&tn=Order%20Payment`;
  const paytmUri = `paytmmp://pay?pa=${upiId}&pn=GC%20Shop&am=${amountStr}&cu=INR`;
  const phonepeUri = `phonepe://pay?pa=${upiId}&pn=GC%20Shop&am=${amountStr}&cu=INR`;
  const gpayUri = `tez://upi/pay?pa=${upiId}&pn=GC%20Shop&am=${amountStr}&cu=INR`;

  let activeUri = upiUri;
  if (state.gatewayMethod === "Paytm") activeUri = paytmUri;
  else if (state.gatewayMethod === "PhonePe") activeUri = phonepeUri;
  else if (state.gatewayMethod === "Google Pay") activeUri = gpayUri;

  const payAppBtn = document.getElementById("payWithAppBtn");
  if (payAppBtn) {
    payAppBtn.href = activeUri;
    payAppBtn.innerHTML = `<i class="bi bi-box-arrow-up-right" style="margin-right: 8px;"></i> Open ${state.gatewayMethod} to Pay ${formatMoney(state.paymentAmount)}`;
  }
  
  const qrImage = document.getElementById("paymentQrImage");
  if (qrImage) {
    qrImage.src = "assets/my-qr.jpg";
  }
  
  const submitBtn = document.getElementById("submitGatewayBtn");
  if (submitBtn) {
    submitBtn.innerHTML = `<i class="bi bi-check-circle-fill" style="margin-right: 6px;"></i> Submit Payment (${formatMoney(state.paymentAmount)})`;
  }

  document.querySelectorAll("[data-method]").forEach((button) => {
    button.classList.toggle("active", button.dataset.method === state.gatewayMethod);
  });
}

function openPaymentGateway() {
  if (!state.pendingOrder && state.paymentType !== "wallet") return;
  state.gatewayMethod = "Paytm";
  document.getElementById("gatewayUtr").value = "";
  setView("paymentGateway");
  startGatewayTimer();
  renderGatewayStatus();
}

function selectPaymentMethod(method) {
  state.gatewayMethod = method;
  renderGatewayStatus();
}

function submitGatewayPayment() {
  const utr = document.getElementById("gatewayUtr").value.trim();
  if (!utr) {
    showToast("Please enter UTR or reference number");
    return;
  }
  clearInterval(state.gatewayInterval);
  
  if (state.paymentType === "wallet") {
    state.wallet += state.paymentAmount;
    state.transactions.unshift({
      id: `PAY${Date.now().toString().slice(-12)}`,
      amount: state.paymentAmount,
      status: "Success",
      date: new Date()
    });
    showToast(`Payment successful (${state.gatewayMethod}) - ${formatMoney(state.paymentAmount)} added to wallet`);
    setView("wallet");
  } else {
    const orderItemsWithVouchers = [];
    state.pendingOrder.items.forEach((item) => {
      const product = products.find((p) => p.id === item.id);
      for (let i = 0; i < item.qty; i++) {
        const prefix = (product ? product.theme.slice(0, 4) : "CARD").toUpperCase();
        const randomPart = () => Math.random().toString(36).substring(2, 6).toUpperCase();
        const voucherCode = `${prefix}-${randomPart()}-${randomPart()}-${randomPart()}`;
        orderItemsWithVouchers.push({
          productId: item.id,
          name: product ? product.name : "Gift Card",
          balance: product ? product.balance : "",
          price: product ? product.price : 0,
          theme: product ? product.theme : "play",
          voucherCode: voucherCode
        });
      }
    });

    state.orders.unshift({
      ...state.pendingOrder,
      voucherItems: orderItemsWithVouchers
    });

    state.transactions.unshift({
      id: `PAY${Date.now().toString().slice(-12)}`,
      amount: state.pendingOrder.total,
      status: "Success",
      date: new Date()
    });
    state.cart = [];
    state.pendingOrder = null;
    showToast(`Payment successful (${state.gatewayMethod})`);
    setView("orders");
  }
  
  state.paymentAmount = 0;
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
      const itemsList = (order.voucherItems || []).map((vItem) => `
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 12px; background: #ffffff; border: 1px solid var(--line); border-radius: 8px; margin-top: 8px;">
          <div>
            <div style="font-weight: 600; font-size: 14px;">${vItem.name}</div>
            <div class="muted" style="font-size: 12px;">Balance: ${vItem.balance}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <code style="background: #f1f5f9; padding: 6px 10px; border-radius: 6px; font-weight: 700; color: #4338ca; font-size: 13px; letter-spacing: 0.5px;">${vItem.voucherCode}</code>
            <button class="primary-btn" style="min-height: 32px; padding: 0 12px; font-size: 12px;" onclick="navigator.clipboard.writeText('${vItem.voucherCode}'); showToast('Voucher code copied!')">Copy</button>
          </div>
        </div>
      `).join('');

      return `
      <div class="order" style="margin-bottom: 16px; padding: 16px; border: 1px solid var(--line); border-radius: 12px; background: #f8fafc;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid var(--line);">
          <div>
            <strong>#${order.id}</strong>
            <span class="muted" style="font-size: 13px; margin-left: 8px;">${order.date.toLocaleString("en-IN")}</span>
          </div>
          <span style="color: var(--green); font-weight: 600; font-size: 14px;"><i class="bi bi-check-circle-fill"></i> Completed (${formatMoney(order.total)})</span>
        </div>
        <div style="font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 4px;">Purchased Gift Cards (${order.voucherItems ? order.voucherItems.length : order.items.length}):</div>
        ${itemsList}
      </div>
    `;
    })
    .join("");
}

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
  const savedUser = localStorage.getItem("gcshop_user");
  const session = localStorage.getItem("gcshop_session");
  if (savedUser && session === "active") {
    state.user = JSON.parse(savedUser);
  }
}

function renderAuth() {
  document.body.classList.toggle("logged-in", Boolean(state.user));
  document.querySelectorAll(".auth-link").forEach((el) => el.classList.toggle("hidden", Boolean(state.user)));
  document.querySelectorAll(".auth-only").forEach((el) => el.classList.toggle("hidden", !state.user));

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (state.user) {
    loginBtn.classList.add("hidden");
    signupBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
    logoutBtn.querySelector("span:last-child").textContent = "Logout";
    logoutBtn.title = `Logged in as ${state.user.name}`;
  } else {
    loginBtn.classList.remove("hidden");
    signupBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
    logoutBtn.querySelector("span:last-child").textContent = "Logout";
    logoutBtn.title = "Login required";
  }
}

function render() {
  renderCart();
  renderOrders();
  renderWallet();
  renderTickets();
  renderCounts();
  renderAuth();
}

function filterProducts() {
  const term = document.getElementById("cardsSearch").value.trim().toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const filtered = products.filter((product) => {
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

  const placeholders = [
    posterDataUrl('Exclusive coupon for you!', 'Up to ₹100 Already applied', 0),
    posterDataUrl('Up to 70% off', 'Deals on headphones • JBL | boAt', 1),
    posterDataUrl('Starting ₹99', 'Bestselling mobile accessories', 2)
  ];

  const localPaths = [
    'assets/ads/ad1.png', 'assets/ads/ad1.jpg', 'assets/ads/ad1.jpeg',
    'assets/ads/ad2.png', 'assets/ads/ad2.jpg', 'assets/ads/ad2.jpeg',
    'assets/ads/ad3.png', 'assets/ads/ad3.jpg', 'assets/ads/ad3.jpeg'
  ];

  const posters = placeholders.slice();
  track.innerHTML = posters.map((src, i) => `
    <div class="ad-slide" style="background-image:url('${src}')" role="img">
    </div>
  `).join('');

  // try loading local images and replace slides when they succeed
  localPaths.forEach((path) => {
    // Determine which slide index this path belongs to (ad1 -> 0, ad2 -> 1, ad3 -> 2)
    const match = path.match(/ad(\d+)\./);
    if (!match) return;
    const idx = Number(match[1]) - 1;
    if (idx < 0 || idx >= posters.length) return;

    const img = new Image();
    img.onload = () => {
      posters[idx] = path;
      const slide = track.children[idx];
      if (slide) slide.style.backgroundImage = `url('${path}')`;
    };
    img.onerror = () => {
      // ignore — keep placeholder
    };
    img.src = path;
  });
  dotsWrap.innerHTML = posters.map((_, i) => `<button class="ad-dot ${i === 0 ? 'active' : ''}" data-ad="${i}" aria-label="Show ad ${i + 1}"></button>`).join('');

  function goTo(index) {
    state.adIndex = (index + posters.length) % posters.length;
    track.style.transform = `translateX(${-state.adIndex * 100}%)`;
    dotsWrap.querySelectorAll('.ad-dot').forEach((d, i) => d.classList.toggle('active', i === state.adIndex));
  }

  prev.addEventListener('click', () => {
    goTo(state.adIndex - 1);
    restart();
  });
  next.addEventListener('click', () => {
    goTo(state.adIndex + 1);
    restart();
  });
  dotsWrap.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ad]');
    if (!b) return;
    goTo(Number(b.dataset.ad));
    restart();
  });

  function advance() {
    goTo(state.adIndex + 1);
  }
  function restart() {
    clearInterval(state.adInterval);
    state.adInterval = setInterval(advance, 4200);
  }

  carousel.addEventListener('mouseenter', () => clearInterval(state.adInterval));
  carousel.addEventListener('mouseleave', () => restart());

  // init
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

document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    name: document.getElementById("signupName").value.trim(),
    email: document.getElementById("signupEmail").value.trim().toLowerCase(),
    phone: document.getElementById("signupPhone").value.trim(),
    password: document.getElementById("signupPassword").value
  };
  localStorage.setItem("gcshop_user", JSON.stringify(user));
  localStorage.setItem("gcshop_session", "active");
  state.user = user;
  event.target.reset();
  showToast(`Welcome, ${user.name}`);
  setView("home");
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const savedUser = JSON.parse(localStorage.getItem("gcshop_user") || "null");
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
    showToast("Invalid email or password");
    return;
  }
  localStorage.setItem("gcshop_session", "active");
  state.user = savedUser;
  event.target.reset();
  showToast(`Welcome back, ${savedUser.name}`);
  setView("home");
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

document.getElementById("logoutBtn").addEventListener("click", () => {
  if (!state.user) {
    showToast("Please login first");
    setView("login");
    return;
  }
  localStorage.setItem("gcshop_session", "inactive");
  state.user = null;
  showToast("Logged out successfully");
  setView("home");
});

loadAuth();
renderProducts("homeCards", products.slice(0, 8));
renderProducts("allCards", products);
setupSlider();
setupAdCarousel();
render();
