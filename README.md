# CraveWave — Modern Food Delivery & Live Tracking Platform

An elegant, responsive, and feature-complete food delivery single-page application built with **React**, **Vite**, **Tailwind CSS**, **React Router**, and **Framer Motion**.

---

## 🌟 Key Features

### 1. Smart Location System (Auto GPS & Manual Entry)
- **Automatic GPS Location Detection**: One-click detection using the HTML5 Geolocation API with reverse geocoding to automatically identify the user's locality, city, state, and PIN code.
- **Manual Search & Location Picker**:
  - Instant search across major Indian tech hubs and residential areas (Bengaluru, Delhi NCR, Mumbai, Hyderabad, Chennai, Kolkata, Pune).
  - Quick-select popular city chips and localities (Koramangala, Indiranagar, Connaught Place, Bandra West, Cyber City, etc.).
  - **Custom Address Builder**: Enter specific Flat/Building number, street, area, city, and 6-digit PIN code.
  - One-click auto-fill during checkout.

### 2. Home & Restaurant Discovery

### 2. Restaurant Details & Menu Customization
- **Immersive Restaurant Header**: Ambient backdrop cover, verified review badges, operational status, and delivery details.
- **Categorized Menu Navigation**: Sticky category sub-navigation with dish counts.
- **Dietary Indicators**: Standardized Vegetarian and Non-Vegetarian badges.
- **Item Customization Modal (Item Builder)**:
  - Portion size selection (Regular, Double, Large) with real-time price delta calculations.
  - Add-on toppings & extra sides checkboxes with individual price tags.
  - Spice level preferences (Mild, Medium, Hot).
  - Special kitchen requests/instructions textarea.

### 3. Cart & Coupon System
- **Dual Cart Modes**:
  - **Slide-Over Quick Cart Drawer**: Opens automatically upon adding items or via the persistent navigation bag button.
  - **Dedicated Cart Page (`/cart`)**: Complete order review with item breakdown, customization badges, and quantity adjusters.
- **Multi-Restaurant Conflict Protection**: Prevents accidental mixing of items from different restaurants with an alert modal.
- **Promotional Coupon Engine**:
  - Input promo code or select from recommended chips (`WELCOME50`, `TASTY20`, `FREEDEL`, `FEAST15`).
  - Validation rules including minimum order values, percentage caps, flat discounts, and delivery fee waivers.
- **Transparent Bill Calculation**: Item subtotal, discounts, dynamic delivery fee ($3.49 or FREE for orders over $35/with coupon), platform fee ($1.49), and 8% taxes.

### 4. Checkout & Form Validation
- **Contact & Address Form**: Real-time validation for Full Name, Phone number format, Street Address, City, and ZIP code.
- **Payment Method Selectors**:
  - Credit / Debit Cards (with card details inputs).
  - Instant UPI Apps (GPay, PhonePe, Paytm with VPA validation).
  - Cash on Delivery (COD).
  - Net Banking.
- **Celebratory Transition**: Canvas confetti celebration on successful placement.

### 5. Live Order Tracking & Simulation
- **Animated 5-Stage Delivery Timeline**:
  1. *Order Confirmed*
  2. *Kitchen Preparing Food*
  3. *Delivery Partner Assigned*
  4. *Out for Delivery (On the Way)*
  5. *Delivered*
- **Interactive Step Simulator**: Built-in test controls allowing testers to advance delivery steps (`Next Step >>`) or reset to Step 1.
- **Simulated GPS Delivery Map**: Night mode map canvas with pulsing satellite tracking and animated scooter movement.
- **Delivery Driver Profile**: Driver photo avatar, verified star rating, completed trip counts, vehicle registration, and direct call action.

### 6. Order History & Instant Re-Ordering
- **Local Storage Persistence**: Active orders and cart state persist seamlessly across page refreshes.
- **1-Click Re-order**: Instant recreation of previous meals directly back into the cart.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework & Build** | React 19 + Vite 8 |
| **Styling & Design System** | Tailwind CSS v3.4 + PostCSS + Autoprefixer |
| **Routing** | React Router DOM v7 |
| **State Management** | Context API (`CartContext`, `OrderContext`, `FilterContext`) |
| **Icons** | Lucide React |
| **Animations** | Framer Motion + Canvas Confetti |
| **Persistence** | Browser LocalStorage API |

---

## 📁 Project Structure

```plaintext
food-delivery-platform/
├── public/
│   └── favicon.svg               # SVG brand favicon
├── src/
│   ├── components/
│   │   ├── common/               # DietaryBadge, RatingPill, ConflictModal
│   │   ├── layout/               # Navbar, Footer, MobileBottomNav
│   │   ├── home/                 # HeroBanner, CategoryBar, FilterBar, RestaurantCard
│   │   ├── restaurant/           # ItemCustomizerModal
│   │   └── cart/                 # CartDrawer
│   ├── context/
│   │   ├── CartContext.jsx       # Cart state, item customizations, coupon discounts
│   │   ├── OrderContext.jsx      # Order placement, driver info, timeline tracking
│   │   └── FilterContext.jsx     # Global search, cuisine, veg/non-veg, sorting
│   ├── data/
│   │   ├── categories.js         # Food categories with icons & tags
│   │   ├── coupons.js            # Active discount codes & validation rules
│   │   ├── restaurants.js        # Curated restaurants catalog & menu items
│   │   └── mockOrders.js         # Initial order history & timeline step definitions
│   ├── pages/
│   │   ├── HomePage.jsx          # Discovery, search, and restaurant listings
│   │   ├── RestaurantDetailPage.jsx # Restaurant banner, sticky menus, item cards
│   │   ├── CartPage.jsx          # Dedicated cart page
│   │   ├── CheckoutPage.jsx      # Address validation & payment options
│   │   ├── OrderConfirmationPage.jsx # Confetti confirmation & receipt
│   │   ├── OrderTrackingPage.jsx # 5-step live tracking & simulated GPS map
│   │   ├── OrderHistoryPage.jsx  # Past orders with 1-click re-ordering
│   │   └── NotFoundPage.jsx      # 404 handler
│   ├── utils/
│   │   ├── formatCurrency.js     # Currency formatter ($USD)
│   │   ├── calculations.js       # Bill, discount, and fee calculation engine
│   │   └── storage.js            # Safe LocalStorage helper
│   ├── App.jsx                   # Route configurations & layout shell
│   ├── index.css                 # Tailwind directives & custom utility classes
│   └── main.jsx                  # React DOM root with BrowserRouter
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or later recommended)
- npm or yarn

### Installation
1. Clone the repository or navigate to the project directory:
   ```bash
   cd "Food Delivery Platform"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5174](http://localhost:5174) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   Outputs optimized production bundle to the `dist/` directory.

---

## 📱 Responsive Layouts
- **Desktop (1024px+)**: Sticky navigation with location switcher, multi-column restaurant grid, side-by-side checkout review.
- **Tablet (768px - 1023px)**: Responsive 2-column dish layouts and flexible slide-over drawer.
- **Mobile (320px - 767px)**: Full-width menu items, sticky mobile bottom navigation bar, touch-friendly pill carousels.

---

## 📄 License
MIT License. Crafted for modern food delivery excellence.
