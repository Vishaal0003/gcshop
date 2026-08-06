const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['*'],
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/api/ping', (req, res) => {
  res.json({ status: "online", serverTime: new Date().toLocaleString("en-IN") });
});

const DB_FILE = path.join(__dirname, 'server_db.json');

// Initialize central database file if not exists
function initDb() {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = {
      users: [
        {
          name: "Vishal (Admin)",
          email: "vs1120204@gmail.com",
          password: "admin@123",
          phone: "9876543210",
          role: "admin",
          registeredAt: new Date().toLocaleDateString("en-IN"),
          lastLogin: new Date().toLocaleString("en-IN"),
          totalPurchases: 0
        }
      ],
      orders: [],
      activities: [
        {
          id: Date.now(),
          timestamp: new Date().toLocaleString("en-IN"),
          email: "System",
          action: "Backend Server Started",
          details: "Central sync database initialized"
        }
      ]
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
  }
}

function readDb() {
  try {
    initDb();
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading DB_FILE:", err);
    return { users: [], orders: [], activities: [] };
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing DB_FILE:", err);
  }
}

// Ensure Admin user always exists
function ensureAdmin(data) {
  let admin = data.users.find(u => u.email === "vs1120204@gmail.com");
  if (!admin) {
    admin = {
      name: "Vishal (Admin)",
      email: "vs1120204@gmail.com",
      password: "admin@123",
      phone: "9876543210",
      role: "admin",
      registeredAt: new Date().toLocaleDateString("en-IN"),
      lastLogin: new Date().toLocaleString("en-IN"),
      totalPurchases: 0
    };
    data.users.push(admin);
  } else if (admin.password !== "admin@123") {
    admin.password = "admin@123";
  }
}

// --- API Endpoints ---

// Full DB sync
app.get('/api/sync', (req, res) => {
  const db = readDb();
  ensureAdmin(db);
  res.json(db);
});

// Get Users
app.get('/api/users', (req, res) => {
  const db = readDb();
  ensureAdmin(db);
  res.json(db.users);
});

// Register or Update User
app.post('/api/users', (req, res) => {
  const db = readDb();
  ensureAdmin(db);
  const user = req.body;
  
  if (!user || !user.email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const idx = db.users.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
  if (idx >= 0) {
    db.users[idx] = { ...db.users[idx], ...user };
  } else {
    db.users.push(user);
  }

  writeDb(db);
  res.json({ success: true, user: db.users[idx >= 0 ? idx : db.users.length - 1] });
});

// Login check
app.post('/api/login', (req, res) => {
  const db = readDb();
  ensureAdmin(db);
  const { email, password } = req.body;

  if (email === "vs1120204@gmail.com" && password === "admin@123") {
    let admin = db.users.find(u => u.email === "vs1120204@gmail.com");
    admin.lastLogin = new Date().toLocaleString("en-IN");
    writeDb(db);
    return res.json({ success: true, user: admin });
  }

  const user = db.users.find(u => u.email.toLowerCase() === (email || "").toLowerCase() && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  user.lastLogin = new Date().toLocaleString("en-IN");
  writeDb(db);
  res.json({ success: true, user });
});

// Get Global Orders
app.get('/api/orders', (req, res) => {
  const db = readDb();
  res.json(db.orders);
});

// Create or Update Order (Payment Approval Request)
app.post('/api/orders', (req, res) => {
  const db = readDb();
  const order = req.body;

  if (!order || !order.id) {
    return res.status(400).json({ error: "Invalid order data" });
  }

  const cleanId = String(order.id).replace('#', '').trim();
  const existingIdx = db.orders.findIndex(o => String(o.id).replace('#', '').trim() === cleanId);

  if (existingIdx >= 0) {
    const currentStatus = db.orders[existingIdx].status;
    db.orders[existingIdx] = { ...db.orders[existingIdx], ...order };
    // Preserve existing server status if already approved/rejected
    if (currentStatus === "Approved" || currentStatus === "Rejected") {
      db.orders[existingIdx].status = currentStatus;
    }
    console.log(`[ORDER UPDATED] Order #${order.id} updated in backend DB`);
  } else {
    db.orders.unshift(order);
    console.log(`[APPROVAL REQUEST] New order #${order.id} received from ${order.userEmail || 'Guest'} (UTR: ${order.utrNumber || 'N/A'})`);
  }

  if (order.userEmail) {
    const user = db.users.find(u => u.email.toLowerCase() === order.userEmail.toLowerCase());
    if (user) {
      user.totalPurchases = (user.totalPurchases || 0) + (order.total || 0);
    }
  }

  writeDb(db);
  res.json({ success: true, order });
});

// Approve Order
app.post('/api/orders/approve', (req, res) => {
  const db = readDb();
  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).json({ error: "orderId is required" });
  }

  const cleanId = String(orderId).replace('#', '').trim();
  let order = db.orders.find(o => String(o.id).replace('#', '').trim() === cleanId);

  if (!order) {
    order = db.orders.find(o => String(o.id).toLowerCase() === cleanId.toLowerCase());
  }

  if (!order) {
    console.log(`[APPROVE ERROR] Order #${orderId} not found in DB. Available orders:`, db.orders.map(o => o.id));
    return res.status(404).json({ error: `Order #${orderId} not found in backend database` });
  }

  order.status = "Approved";

  db.activities.unshift({
    id: Date.now(),
    timestamp: new Date().toLocaleString("en-IN"),
    email: order.userEmail || "Guest",
    action: "Payment Approved",
    details: `Admin verified payment for Order #${order.id} (₹${order.total}). Voucher code unlocked.`
  });

  writeDb(db);
  console.log(`[APPROVED SUCCESS] Order #${order.id} approved for ${order.userEmail}`);
  res.json({ success: true, order });
});

// Reject Order
app.post('/api/orders/reject', (req, res) => {
  const db = readDb();
  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).json({ error: "orderId is required" });
  }

  const cleanId = String(orderId).replace('#', '').trim();
  let order = db.orders.find(o => String(o.id).replace('#', '').trim() === cleanId);

  if (!order) {
    order = db.orders.find(o => String(o.id).toLowerCase() === cleanId.toLowerCase());
  }

  if (!order) {
    console.log(`[REJECT ERROR] Order #${orderId} not found in DB.`);
    return res.status(404).json({ error: `Order #${orderId} not found in backend database` });
  }

  order.status = "Rejected";

  db.activities.unshift({
    id: Date.now(),
    timestamp: new Date().toLocaleString("en-IN"),
    email: order.userEmail || "Guest",
    action: "Payment Rejected",
    details: `Admin rejected Order #${order.id} payment proof.`
  });

  writeDb(db);
  console.log(`[REJECTED SUCCESS] Order #${order.id} rejected for ${order.userEmail}`);
  res.json({ success: true, order });
});

// Get Activity Logs
app.get('/api/activity', (req, res) => {
  const db = readDb();
  res.json(db.activities);
});

// Record Activity Log
app.post('/api/activity', (req, res) => {
  const db = readDb();
  const entry = req.body;
  if (entry && entry.action) {
    entry.id = Date.now();
    entry.timestamp = entry.timestamp || new Date().toLocaleString("en-IN");
    db.activities.unshift(entry);
    db.activities = db.activities.slice(0, 500);
    writeDb(db);
  }
  res.json({ success: true });
});

// Clear Activity Logs
app.delete('/api/activity', (req, res) => {
  const db = readDb();
  db.activities = [];
  writeDb(db);
  res.json({ success: true });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`GCShop Central Backend Server running on http://0.0.0.0:${PORT}`);
  console.log(`Live Multi-Device API ready at http://localhost:${PORT}/api/sync`);
});
