# 🍕 CraveWave — Modern Food Delivery & Live Tracking Platform

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.18.4-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **CraveWave** is a full-featured, luxury-themed food delivery single-page application built for high performance, visual elegance, and fluid responsiveness across **Desktop**, **Tablet**, and **Mobile** devices. It simulates an authentic end-to-end food delivery journey—from smart GPS location detection and multi-cuisine restaurant discovery to interactive item customization, collaborative group ordering, instant coupon discounts, simulated payment gateways, and real-time 5-stage live delivery tracking.

---

## 📖 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Responsive Screen Previews](#-responsive-screen-previews)
  - [🖥️ Desktop Version](#-desktop-version-1280px)
  - [📱 Tablet Version](#-tablet-version-768px---1024px)
  - [📲 Mobile Version](#-mobile-version-390px---phone)
- [👑 Enterprise Admin Flow (8 Modules)](#-enterprise-admin-flow-8-modules)
  - [01. Dashboard & Analytics](#01-dashboard--analytics)
  - [02. Order Management](#02-order-management)
  - [03. Restaurant & Menu Management](#03-restaurant--menu-management)
  - [04. Delivery Partner Fleet](#04-delivery-partner-fleet)
  - [05. Customer Management & CRM](#05-customer-management--crm)
  - [06. Payments & Finance](#06-payments--finance)
  - [07. Offers & Promotions](#07-offers--promotions)
  - [08. Support Desk & System Settings](#08-support-desk--system-settings)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Multi-Device Verification](#-multi-device-verification)
- [License](#-license)

---

## 🌟 Project Overview

CraveWave was crafted to deliver an extraordinary, responsive user experience modeled after top global food delivery platforms (such as Swiggy, Zomato, and DoorDash) combined with a dark luxury aesthetic.

### Core Highlights:
- **605+ Curated Dishes & Restaurants**: Handcrafted menu database covering authentic Indian, Italian, Pan-Asian, Continental, Fast Food, Mithai, and Street Food.
- **Precision Item Customization**: Configure portion sizes, add-on toppings, spice levels (Mild Nawabi, Medium, Fiery Andhra), and kitchen instructions with live price recalculation.
- **Intelligent Location System**: Automatic HTML5 Geolocation detection + reverse geocoding, plus instant manual search covering major Indian hubs (Bengaluru, Mumbai, Delhi NCR, Hyderabad, Chennai, Kolkata, Pune).
- **Gamified Rewards & VIP Club**: CraveCoins rewards wallet, interactive Craving Wheel (Spin & Win), scratch cards with confetti animations, and Gold VIP free delivery membership.
- **Collaborative Group & Gift Ordering**: Group room codes for itemized/split billing with friends, plus surprise digital gift order greetings.
- **Interactive Live 5-Step Order Tracker**: Animated delivery stages, simulated GPS night-mode delivery map, live scooter movement, driver contact modal, and delivery chat drawer.

---

## 🚀 Key Features

| Category | Highlights |
| :--- | :--- |
| **📍 Location System** | GPS auto-detection, reverse geocoding, popular city/tech-hub chips, and custom apartment/street address builder. |
| **🔍 Search & Filtering** | Global Omnisearch (`⌘K` / `Ctrl+K`), live dish/cuisine search, pure vegetarian filter, bestsellers filter, rating & price sorting. |
| **🍔 Menu & Item Builder** | Dynamic portion sizing, add-on toppings with incremental pricing, spice level selectors, and dietary badges (Veg/Non-Veg). |
| **🛒 Cart & Promo Engine** | Slide-over cart drawer, dedicated cart page, multi-restaurant conflict alerts, promo coupon validation (`WELCOME100`, `CRAVE50`, `FREEDEL`), CraveCoins discounts, no-cutlery & EV fleet eco-options. |
| **💳 Checkout & Payments** | Contact and address forms, UPI ID verification (GPay/PhonePe/Paytm), Card payments, Net Banking, and Cash on Delivery (COD). |
| **🛵 Live Order Tracking** | 5-stage animated progress timeline, simulated real-time map with moving delivery partner, test step controller (`Next Step >>`), driver call, and live customer support chat. |
| **📜 Order History & Re-order** | Persistent order archives, detailed itemized receipts, download/view summary, and instant 1-click re-ordering back into the cart. |
| **👤 User Authentication** | Clean email/password sign-in and sign-up with personalized placeholder defaults, custom user avatar color themes, and address book management. |

---

## 📸 Responsive Screen Previews

Below are visual captures of all versions across **Desktop**, **Tablet**, and **Mobile** viewports.

---

### 🖥️ Desktop Version (`1280px+`)

The Desktop version offers an expansive wide-screen layout with sticky navigation, top location picker, global search bar, multi-column restaurant grid, and side-by-side checkout breakdown.

| Page / Feature | Desktop Screenshot Preview |
| :--- | :--- |
| **01. Homepage & Discovery**<br>_Category bar, luxury hero banner, exquisite cuisines, and restaurant grid_ | ![Desktop Homepage](screenshots/desktop/01_homepage.png) |
| **02. Restaurant Menu & Customizer**<br>_Sticky category index, dish cards, and interactive item builder modal_ | ![Desktop Restaurant Detail](screenshots/desktop/02_restaurant_detail.png) |
| **03. Cart Review & Bill Summary**<br>_Item customization breakdown, promo codes, eco-switches, and live total_ | ![Desktop Cart Page](screenshots/desktop/03_cart_page.png) |
| **04. Secure Checkout**<br>_Address autofill, payment gateways (UPI, Card, COD), and security badges_ | ![Desktop Checkout Page](screenshots/desktop/04_checkout_page.png) |
| **05. Live Order Tracking**<br>_5-stage timeline, simulated night map, delivery partner card, and step simulator_ | ![Desktop Order Tracking](screenshots/desktop/05_order_tracking.png) |
| **06. Order History & Re-Order**<br>_Past order cards, status badges, item summaries, and instant 1-click reorder_ | ![Desktop Order History](screenshots/desktop/06_order_history.png) |
| **07. User Sign In**<br>_Clean email & password authentication with quick demo access_ | ![Desktop Login](screenshots/desktop/07_login_page.png) |
| **08. Foodie Sign Up**<br>_Registration form featuring personalized name placeholder (`sushanth`)_ | ![Desktop Signup](screenshots/desktop/08_signup_page.png) |

---

### 📱 Tablet Version (`768px - 1024px`)

The Tablet layout seamlessly balances screen real estate with touch navigation, featuring a balanced 2-column card grid, adapted top search header, and persistent bottom navigation bar.

| Page / Feature | Tablet Screenshot Preview |
| :--- | :--- |
| **01. Tablet Homepage**<br>_Top search header, quick category scroller, and 2-column restaurant grid_ | ![Tablet Homepage](screenshots/tablet/01_homepage.png) |
| **02. Tablet Restaurant Detail**<br>_Menu categorization, dish cards, and responsive customizer popup_ | ![Tablet Restaurant Detail](screenshots/tablet/02_restaurant_detail.png) |
| **03. Tablet Cart & Discounts**<br>_Streamlined tablet bill breakdown and coupon selector_ | ![Tablet Cart Page](screenshots/tablet/03_cart_page.png) |
| **04. Tablet Checkout**<br>_Touch-friendly address form and payment selector cards_ | ![Tablet Checkout Page](screenshots/tablet/04_checkout_page.png) |
| **05. Tablet Live Tracking**<br>_Real-time delivery progress stages and interactive controls_ | ![Tablet Order Tracking](screenshots/tablet/05_order_tracking.png) |
| **06. Tablet Order History**<br>_Past order activity and quick reorder shortcuts_ | ![Tablet Order History](screenshots/tablet/06_order_history.png) |
| **07. Tablet Sign In**<br>_Centered sign-in card with modern glassmorphism aesthetic_ | ![Tablet Login](screenshots/tablet/07_login_page.png) |
| **08. Tablet Sign Up**<br>_Touch-optimized registration with `sushanth` placeholder_ | ![Tablet Signup](screenshots/tablet/08_signup_page.png) |

---

### 📲 Mobile Version (`390px - Phone`)

The Mobile version is engineered for one-handed thumb interactions, featuring touch carousels, a sticky bottom navigation bar (`Explore`, `Orders`, `Cart`, `Profile`), sliding bottom sheets, and floating CTA buttons.

| Page / Feature | Mobile Screenshot Preview |
| :--- | :--- |
| **01. Mobile Homepage**<br>_Compact header, location chip, hero promo carousel, and single-column restaurant cards_ | ![Mobile Homepage](screenshots/mobile/01_homepage.png) |
| **02. Mobile Restaurant Detail**<br>_Touch-friendly dish cards, dietary indicators, and floating bottom cart pill_ | ![Mobile Restaurant Detail](screenshots/mobile/02_restaurant_detail.png) |
| **03. Mobile Cart Review**<br>_Slide-over cart drawer and dedicated cart view with padded checkout clearance_ | ![Mobile Cart Page](screenshots/mobile/03_cart_page.png) |
| **04. Mobile Checkout**<br>_Accordion delivery forms, UPI direct payment, and sticky place order CTA_ | ![Mobile Checkout Page](screenshots/mobile/04_checkout_page.png) |
| **05. Mobile Live Tracking**<br>_Step-by-step delivery animation, driver details, and live test controller_ | ![Mobile Order Tracking](screenshots/mobile/05_order_tracking.png) |
| **06. Mobile Order History**<br>_Scrollable past receipts with 1-click reorder buttons_ | ![Mobile Order History](screenshots/mobile/06_order_history.png) |
| **07. Mobile Profile Drawer**<br>_Slide-up bottom sheet with Gold VIP card, CraveCoins, address preview & profile edit_ | ![Mobile Profile](screenshots/mobile/09_mobile_profile.png) |
| **08. Mobile Sign In & Sign Up**<br>_Responsive mobile auth flow with default name placeholder `sushanth`_ | ![Mobile Signup](screenshots/mobile/08_signup_page.png) |

---

## 👑 Enterprise Admin Flow (8 Modules)

The **CraveWave Admin Flow** (`/admin`) is a full-featured, enterprise-grade operations platform designed for platform administrators, restaurant managers, fleet coordinators, and finance leads. Accessible via direct URL or through the **Admin Login** tab in the authentication modal with **One-Click Demo Admin Access**.

| Module | Core Functionality | Screenshot Preview |
| :--- | :--- | :--- |
| **01. Dashboard & Analytics**<br>`?tab=dashboard` | Real-time GMV revenue tracking, active orders throughput, customer acquisition trends, hourly peak statistics, top performing restaurants, and quick operation triggers. | ![01 Dashboard Analytics](screenshots/admin/01_dashboard_analytics.png) |
| **02. Order Management**<br>`?tab=orders` | Live order monitoring board, multi-state status tracking (Pending, Confirmed, In Kitchen, Out for Delivery, Delivered, Cancelled), rider manual assignment, refund authorization, and printable itemized receipts. | ![02 Order Management](screenshots/admin/02_order_management.png) |
| **03. Restaurant & Menu Management**<br>`?tab=restaurants` | Active restaurant directory, partner registration approval queue, document compliance verification (FSSAI, GSTIN, PAN), menu category editor, dish pricing, spice level and out-of-stock toggles. | ![03 Restaurant Menu](screenshots/admin/03_restaurant_menu.png) |
| **04. Delivery Partner Fleet**<br>`?tab=delivery` | Live delivery fleet map, active rider tracking, vehicle stats (EV vs Petrol), KYC document verification audits (Aadhaar, DL, RC), online/busy/offline state controls, and weekly earnings calculation. | ![04 Delivery Partners](screenshots/admin/04_delivery_partners.png) |
| **05. Customer Management & CRM**<br>`?tab=customers` | Complete consumer database, contact details, total lifetime spend and order history, CraveWave Gold VIP badge status, wallet CraveCoins management, and complaint resolution logs. | ![05 Customer Management](screenshots/admin/05_customer_management.png) |
| **06. Payments & Finance**<br>`?tab=finance` | Financial dashboard, platform net commission breakdowns, automated restaurant payout ledger, batch settlement processing (NEFT/RTGS), payment gateway distribution, and GST tax statements. | ![06 Payments Finance](screenshots/admin/06_payments_finance.png) |
| **07. Offers & Promotions**<br>`?tab=offers` | Promo code engine, campaign creation wizard, percentage and flat discounts (`WELCOME100`, `CRAVE50`, `FEAST75`), minimum spend rules, expiry date scheduling, and redemption analytics. | ![07 Offers Promotions](screenshots/admin/07_offers_promotions.png) |
| **08. Support Desk & System Settings**<br>`?tab=support` | Customer support ticket desk with quick response composer, dynamic surge multiplier zones (rain/rush-hour), push notification broadcaster, RBAC admin permissions matrix, and immutable audit logs. | ![08 Support Settings](screenshots/admin/08_support_settings.png) |

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | **React 19** (`react`, `react-dom`) |
| **Build Tooling & Dev Server** | **Vite 8** (with ES modules & lightning-fast HMR) |
| **Styling & CSS Architecture** | **Tailwind CSS v3.4**, PostCSS, Autoprefixer, Custom Luxury Theme Tokens |
| **Routing** | **React Router DOM v7** (Declarative client-side routing) |
| **State Management** | React Context API (`AuthContext`, `CartContext`, `OrderContext`, `FilterContext`, `LocationContext`, `WishlistContext`, `AdminContext`) |
| **Icons & Visuals** | **Lucide React** (feather-weight SVG iconography) |
| **Animations & Effects** | **Framer Motion**, **Canvas Confetti** |
| **Code Quality & Linting** | **Oxlint** (0 errors / clean linting) |
| **Storage & Persistence** | Browser `localStorage` API |

---

## 📁 Project Architecture

```plaintext
Food Delivery Platform/
├── public/                       # Static public assets
│   ├── favicon.svg               # SVG brand logo icon
│   └── images/                   # Localized dish photography & cuisine banners
│       ├── cuisines/             # 6 authentic regional cuisine images
│       └── dishes/               # 605 high-resolution dish pictures (item-101 to item-705)
├── screenshots/                  # High-resolution screenshots of all platforms
│   ├── desktop/                  # 8 Desktop view captures (1280x800)
│   ├── tablet/                   # 8 Tablet view captures (768x1024)
│   ├── mobile/                   # 9 Mobile view captures (390x844)
│   └── admin/                    # 8 Enterprise Admin Flow Module captures (1440x900)
├── src/
│   ├── assets/                   # Vector logos and fallback images
│   ├── components/               # Modular reusable UI components
│   │   ├── cart/                 # CartDrawer, GroupOrderModal, GiftOrderModal
│   │   ├── feedback/             # ToastNotification system
│   │   ├── home/                 # HeroBanner, CategoryBar, FilterBar, RestaurantCard, CravingWheelModal
│   │   ├── layout/               # Navbar, Footer, MobileBottomNav (with slide-up profile sheet)
│   │   ├── modals/               # LocationModal, AuthModal, EditProfileModal, WishlistModal, etc.
│   │   ├── restaurant/           # ItemCustomizerModal (sizes, spice levels, add-ons)
│   │   ├── rewards/              # RewardsHubModal & ScratchCardModal
│   │   ├── search/               # EnhancedSearchModal (with ⌘K shortcut)
│   │   ├── tracking/             # DeliveryChatDrawer
│   │   ├── ui/                   # Badges, DietaryBadge, DishNutritionBadge, UserAvatar
│   │   └── index.js              # Central barrel export
│   ├── context/                  # React Context providers (Auth, Cart, Filter, Location, Order, Wishlist)
│   ├── data/                     # Data stores (categories, coupons, mockOrders, restaurants)
│   ├── pages/                    # Route pages (HomePage, RestaurantDetailPage, CartPage, CheckoutPage, OrderTrackingPage, OrderHistoryPage, LoginPage, SignupPage)
│   ├── utils/                    # Helper utilities (formatCurrency, billCalculator, storage)
│   ├── App.jsx                   # Main application router and modal orchestrator
│   ├── index.css                 # Global CSS design tokens, scrollbar styling, luxury gradients
│   └── main.jsx                  # Application entry point
├── package.json                  # Dependencies and execution scripts
├── tailwind.config.js            # Design system, custom colors, animations, responsive breakpoints
└── vite.config.js                # Vite development server and build configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/Sushanth666/Food-Delivery-Platform.git
cd "Food Delivery Platform"
npm install
```

### 3. Running Locally
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5174
```

### 4. Code Quality & Linting
Run the Oxlint linter to verify code cleanliness:
```bash
npm run lint
```

### 5. Production Build
Compile the optimized production bundle:
```bash
npm run build
```
The compiled assets will be placed in the `dist/` directory.

---

## 📱 Multi-Device Verification

CraveWave has undergone automated and manual cross-device testing across:
- **Desktop (1280x800+)**: Chrome, Edge, Safari, Firefox.
- **Tablet (768x1024 / iPad)**: Portrait and landscape adaptive testing.
- **Mobile (390x844 / iPhone & Android)**: Bottom navigation bar touch targets, slide-up profile sheet, and viewport padding (`pb-28 lg:pb-20`) to eliminate element overlap.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and customize for personal or commercial projects.
