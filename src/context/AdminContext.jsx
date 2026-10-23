import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_MOCK_ORDERS } from '../data/mockOrders';
import { RESTAURANTS } from '../data/restaurants';
import { COUPONS } from '../data/coupons';

const AdminContext = createContext();

// Initial Mock Delivery Partners
const INITIAL_DELIVERY_PARTNERS = [
  {
    id: 'DP-101',
    name: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    vehicle: 'Ather 450X (Electric EV)',
    vehicleNumber: 'KA 01 EK 8921',
    status: 'Online',
    currentLocation: 'Koramangala 5th Block',
    currentOrder: 'CW-89215',
    rating: 4.88,
    totalDeliveries: 1420,
    deliveriesToday: 14,
    todayEarnings: 1260,
    weeklyEarnings: 8400,
    verificationStatus: 'Verified',
    documents: {
      aadhaar: 'XXXX-XXXX-4512',
      license: 'DL-KA-2019-0098124',
      rc: 'RC-KA-01-EK-8921',
    },
    joinedDate: '2025-06-12',
  },
  {
    id: 'DP-102',
    name: 'Deepak Sharma',
    phone: '+91 97654 32109',
    vehicle: 'Hero Splendor Plus',
    vehicleNumber: 'KA 03 HR 4410',
    status: 'Busy',
    currentLocation: 'Indiranagar 100ft Road',
    currentOrder: 'CW-89216',
    rating: 4.92,
    totalDeliveries: 2150,
    deliveriesToday: 18,
    todayEarnings: 1620,
    weeklyEarnings: 10500,
    verificationStatus: 'Verified',
    documents: {
      aadhaar: 'XXXX-XXXX-9912',
      license: 'DL-KA-2018-0044192',
      rc: 'RC-KA-03-HR-4410',
    },
    joinedDate: '2024-11-20',
  },
  {
    id: 'DP-103',
    name: 'Sunil Gowda',
    phone: '+91 96543 21098',
    vehicle: 'Honda Activa 6G',
    vehicleNumber: 'KA 05 MN 1209',
    status: 'Online',
    currentLocation: 'HSR Layout Sector 3',
    currentOrder: null,
    rating: 4.75,
    totalDeliveries: 890,
    deliveriesToday: 9,
    todayEarnings: 810,
    weeklyEarnings: 5900,
    verificationStatus: 'Verified',
    documents: {
      aadhaar: 'XXXX-XXXX-3341',
      license: 'DL-KA-2021-0012091',
      rc: 'RC-KA-05-MN-1209',
    },
    joinedDate: '2025-09-05',
  },
  {
    id: 'DP-104',
    name: 'Mohammed Arshad',
    phone: '+91 95432 10987',
    vehicle: 'TVS iQube EV',
    vehicleNumber: 'KA 04 EL 9081',
    status: 'Offline',
    currentLocation: 'BTM Layout 2nd Stage',
    currentOrder: null,
    rating: 4.69,
    totalDeliveries: 640,
    deliveriesToday: 0,
    todayEarnings: 0,
    weeklyEarnings: 4200,
    verificationStatus: 'Pending',
    documents: {
      aadhaar: 'XXXX-XXXX-7819',
      license: 'DL-KA-2022-0081921',
      rc: 'RC-KA-04-EL-9081',
    },
    joinedDate: '2026-02-14',
  },
  {
    id: 'DP-105',
    name: 'Arun Prakash',
    phone: '+91 94321 09876',
    vehicle: 'Bajaj Pulsar 150',
    vehicleNumber: 'KA 51 EZ 7721',
    status: 'Online',
    currentLocation: 'Whitefield ITPL Main Rd',
    currentOrder: null,
    rating: 4.81,
    totalDeliveries: 1120,
    deliveriesToday: 11,
    todayEarnings: 990,
    weeklyEarnings: 7300,
    verificationStatus: 'Verified',
    documents: {
      aadhaar: 'XXXX-XXXX-1123',
      license: 'DL-KA-2020-0077211',
      rc: 'RC-KA-51-EZ-7721',
    },
    joinedDate: '2025-03-10',
  },
];

// Initial Mock Customers
const INITIAL_CUSTOMERS = [
  {
    id: 'CUST-501',
    name: 'Sushanth Reddy',
    email: 'sushanth@example.com',
    phone: '+91 98450 11223',
    tier: 'Gold VIP',
    isGold: true,
    ordersCount: 42,
    totalSpent: 18450,
    joinedDate: '2025-01-10',
    status: 'Active',
    address: 'Flat 402, Prestige Oasis, Koramangala 4th Block, Bengaluru',
    refundCount: 1,
    lastOrderDate: '2026-10-22',
  },
  {
    id: 'CUST-502',
    name: 'Ananya Sharma',
    email: 'ananya.s@example.com',
    phone: '+91 98111 22334',
    tier: 'Regular',
    isGold: false,
    ordersCount: 19,
    totalSpent: 7890,
    joinedDate: '2025-04-18',
    status: 'Active',
    address: 'Villa 18, Palm Meadows, Whitefield, Bengaluru',
    refundCount: 0,
    lastOrderDate: '2026-10-21',
  },
  {
    id: 'CUST-503',
    name: 'Vikram Malhotra',
    email: 'vikram.m@example.com',
    phone: '+91 97222 33445',
    tier: 'Gold VIP',
    isGold: true,
    ordersCount: 68,
    totalSpent: 34200,
    joinedDate: '2024-09-01',
    status: 'Active',
    address: '14th Cross, Indiranagar Stage 2, Bengaluru',
    refundCount: 2,
    lastOrderDate: '2026-10-23',
  },
  {
    id: 'CUST-504',
    name: 'Neha Kapoor',
    email: 'neha.k@example.com',
    phone: '+91 96333 44556',
    tier: 'Regular',
    isGold: false,
    ordersCount: 5,
    totalSpent: 1650,
    joinedDate: '2026-01-15',
    status: 'Active',
    address: 'Apt 201, Sobha Iris, Outer Ring Rd, Bellandur',
    refundCount: 0,
    lastOrderDate: '2026-10-18',
  },
  {
    id: 'CUST-505',
    name: 'Rajesh Patel',
    email: 'rajesh.patel@example.com',
    phone: '+91 95444 55667',
    tier: 'Regular',
    isGold: false,
    ordersCount: 12,
    totalSpent: 4300,
    joinedDate: '2025-08-22',
    status: 'Suspended',
    address: '32, 5th Main, Jayanagar 4th Block, Bengaluru',
    refundCount: 4,
    lastOrderDate: '2026-09-30',
  },
];

// Initial Restaurant Onboarding Queue (Pending Approval)
const INITIAL_PENDING_RESTAURANTS = [
  {
    id: 'PEND-REST-1',
    name: 'Bawarchi Dum Biryani & Kebabs',
    owner: 'Syed Farooq',
    phone: '+91 98800 12345',
    email: 'farooq@bawarchihub.com',
    address: '100 Feet Ring Road, BTM Layout 1st Stage, Bengaluru - 560068',
    cuisines: ['Hyderabadi', 'Biryani & Pulao', 'Kebabs'],
    fssai: '11223344009182',
    gstin: '29ABCDE1234F1Z5',
    commissionRate: 20,
    appliedDate: '2026-10-20',
    status: 'Pending Verification',
    sampleDishesCount: 18,
    costForTwo: 550,
  },
  {
    id: 'PEND-REST-2',
    name: 'Chai Point & Irani Bakery',
    owner: 'Pooja Hegde',
    phone: '+91 97700 98765',
    email: 'pooja@chaiirani.com',
    address: 'CMH Road, Indiranagar, Bengaluru - 560038',
    cuisines: ['Chai & Lassi', 'Bakery', 'Street Food'],
    fssai: '11223344007761',
    gstin: '29FGHIJ5678K1Z3',
    commissionRate: 18,
    appliedDate: '2026-10-21',
    status: 'Pending Verification',
    sampleDishesCount: 24,
    costForTwo: 250,
  },
  {
    id: 'PEND-REST-3',
    name: 'Artisan Sourdough & Woodfired Pizza',
    owner: 'Matteo Rossi & Karan Rao',
    phone: '+91 96600 45678',
    email: 'karan@artisanwoodfired.com',
    address: '80 Feet Rd, 4th Block, Koramangala, Bengaluru - 560034',
    cuisines: ['Italian', 'Pizza & Pasta', 'Desserts'],
    fssai: '11223344004455',
    gstin: '29KLMNO9012P1Z8',
    commissionRate: 22,
    appliedDate: '2026-10-22',
    status: 'Under Document Review',
    sampleDishesCount: 32,
    costForTwo: 850,
  },
];

// Initial Support Tickets
const INITIAL_SUPPORT_TICKETS = [
  {
    id: 'TCK-901',
    orderId: 'CW-89215',
    customerName: 'Ananya Sharma',
    customerPhone: '+91 98111 22334',
    category: 'Delivery Delay',
    subject: 'Order delayed by over 20 minutes in peak rain',
    priority: 'High',
    status: 'Open',
    createdAt: '2026-10-23T10:15:00Z',
    messages: [
      { sender: 'customer', text: 'My food was supposed to reach by 10:00 AM, but rider is still at restaurant.', time: '10:15 AM' },
    ],
  },
  {
    id: 'TCK-902',
    orderId: 'CW-89214',
    customerName: 'Sushanth Reddy',
    customerPhone: '+91 98450 11223',
    category: 'Missing Item',
    subject: 'Extra raita and Dalcha missing from Thalappakatti Biryani',
    priority: 'Medium',
    status: 'In Progress',
    createdAt: '2026-10-22T20:45:00Z',
    messages: [
      { sender: 'customer', text: 'Received the biryani box but the extra dalcha cups were not packed.', time: '8:45 PM' },
      { sender: 'support', text: 'Apologies! We have credited ₹60 CraveCoins instant refund to your wallet.', time: '8:50 PM' },
    ],
  },
  {
    id: 'TCK-903',
    orderId: 'CW-89212',
    customerName: 'Vikram Malhotra',
    customerPhone: '+91 97222 33445',
    category: 'Food Quality',
    subject: 'Packaging seal tampered during transit',
    priority: 'Urgent',
    status: 'Resolved',
    createdAt: '2026-10-21T14:30:00Z',
    messages: [
      { sender: 'customer', text: 'The outer safety tamper tape was broken when delivered.', time: '2:30 PM' },
      { sender: 'support', text: 'We initiated full refund of ₹820 and flagged the partner.', time: '2:40 PM' },
    ],
  },
];

// Initial Delivery Zones
const INITIAL_DELIVERY_ZONES = [
  { id: 'zone-1', name: 'Koramangala & HSR', activeRiders: 48, ordersInFlight: 34, surgeMultiplier: 1.0, baseFee: 35, avgDeliveryTime: '24 min', status: 'Optimal' },
  { id: 'zone-2', name: 'Indiranagar & Domlur', activeRiders: 36, ordersInFlight: 29, surgeMultiplier: 1.2, baseFee: 40, avgDeliveryTime: '28 min', status: 'High Demand' },
  { id: 'zone-3', name: 'Whitefield & Marathahalli', activeRiders: 28, ordersInFlight: 22, surgeMultiplier: 1.0, baseFee: 45, avgDeliveryTime: '32 min', status: 'Optimal' },
  { id: 'zone-4', name: 'Jayanagar & JP Nagar', activeRiders: 18, ordersInFlight: 12, surgeMultiplier: 1.0, baseFee: 30, avgDeliveryTime: '22 min', status: 'Optimal' },
  { id: 'zone-5', name: 'CBD & MG Road', activeRiders: 12, ordersInFlight: 15, surgeMultiplier: 1.3, baseFee: 45, avgDeliveryTime: '30 min', status: 'Rain Surge' },
];

// Initial Audit Logs
const INITIAL_AUDIT_LOGS = [
  { id: 'LOG-1', admin: 'Akash Barik (Super Admin)', action: 'Approved Onboarding', module: 'Restaurants', details: 'Approved Paradise Biryani branch expansion', time: '10 mins ago' },
  { id: 'LOG-2', admin: 'Priya Nair (Ops Lead)', action: 'Assigned Partner', module: 'Orders', details: 'Manually assigned Ramesh Kumar (DP-101) to CW-89215', time: '24 mins ago' },
  { id: 'LOG-3', admin: 'Vikram Seth (Finance Lead)', action: 'Processed Settlement', module: 'Finance', details: 'Released ₹1,48,200 batch payout to 12 restaurants', time: '1 hour ago' },
  { id: 'LOG-4', admin: 'Akash Barik (Super Admin)', action: 'Created Promo Campaign', module: 'Promotions', details: 'Launched CRAVE50 flash discount coupon', time: '2 hours ago' },
  { id: 'LOG-5', admin: 'System Monitor', action: 'Triggered Rain Surge', module: 'Settings', details: 'Activated 1.3x surge in CBD zone due to rain radar', time: '3 hours ago' },
];

export function AdminProvider({ children }) {
  // 1. Orders State
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('cravewave_admin_orders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    // Augment initial mock orders with rich admin fields
    return [
      {
        ...INITIAL_MOCK_ORDERS[0],
        id: 'CW-89215',
        date: new Date().toISOString(),
        customer: { name: 'Ananya Sharma', phone: '+91 98111 22334', address: 'Flat 302, Palm Heights, Indiranagar, Bengaluru' },
        payment: { method: 'UPI (Google Pay)', status: 'Captured', transactionId: 'TXN_UPI_98124982', amount: 760 },
        status: 'Kitchen Preparing Food',
        assignedPartner: 'DP-101',
        partnerName: 'Ramesh Kumar',
        partnerPhone: '+91 98765 43210',
        prepTimeMinutes: 15,
        estimatedDelivery: '30 min',
      },
      {
        ...INITIAL_MOCK_ORDERS[1],
        id: 'CW-89216',
        date: new Date(Date.now() - 3600000).toISOString(),
        customer: { name: 'Sushanth Reddy', phone: '+91 98450 11223', address: 'Flat 402, Prestige Oasis, Koramangala 4th Block, Bengaluru' },
        payment: { method: 'HDFC Credit Card', status: 'Captured', transactionId: 'TXN_CARD_77182912', amount: 540 },
        status: 'Out for Delivery',
        assignedPartner: 'DP-102',
        partnerName: 'Deepak Sharma',
        partnerPhone: '+91 97654 32109',
        prepTimeMinutes: 12,
        estimatedDelivery: '10 min',
      },
      {
        ...INITIAL_MOCK_ORDERS[0],
        id: 'CW-89217',
        date: new Date(Date.now() - 7200000).toISOString(),
        customer: { name: 'Vikram Malhotra', phone: '+91 97222 33445', address: '14th Cross, Indiranagar Stage 2, Bengaluru' },
        payment: { method: 'Cash On Delivery', status: 'Pending Collection', transactionId: 'TXN_COD_11029481', amount: 920 },
        status: 'Pending Confirmation',
        assignedPartner: null,
        partnerName: null,
        partnerPhone: null,
        prepTimeMinutes: 20,
        estimatedDelivery: '45 min',
      },
      {
        ...INITIAL_MOCK_ORDERS[1],
        id: 'CW-89218',
        date: new Date(Date.now() - 14400000).toISOString(),
        customer: { name: 'Neha Kapoor', phone: '+91 96333 44556', address: 'Apt 201, Sobha Iris, Outer Ring Rd, Bellandur' },
        payment: { method: 'UPI (PhonePe)', status: 'Refund Requested', transactionId: 'TXN_UPI_66192841', amount: 480 },
        status: 'Refund Requested',
        refundReason: 'Item arrived cold due to traffic delay',
        assignedPartner: 'DP-105',
        partnerName: 'Arun Prakash',
        partnerPhone: '+91 94321 09876',
        prepTimeMinutes: 10,
        estimatedDelivery: 'Delivered',
      },
      ...INITIAL_MOCK_ORDERS.map((o, idx) => ({
        ...o,
        customer: { name: idx % 2 === 0 ? 'Sushanth Reddy' : 'Deepak Verma', phone: '+91 98450 11223', address: 'Koramangala, Bengaluru' },
        payment: { method: 'UPI', status: 'Captured', transactionId: `TXN_INIT_${idx}`, amount: o.items.reduce((s, it) => s + it.price * it.quantity, 0) },
        assignedPartner: 'DP-101',
        partnerName: 'Ramesh Kumar',
      })),
    ];
  });

  // 2. Restaurants State
  const [restaurantsList, setRestaurantsList] = useState(() => {
    return RESTAURANTS.map((r) => ({
      ...r,
      commissionRate: r.commissionRate || 20,
      isOpen: r.isOpen !== undefined ? r.isOpen : true,
      operatingHours: r.operatingHours || '11:00 AM – 11:30 PM',
      settlementPending: Math.floor(Math.random() * 45000) + 12000,
      totalOrdersLifetime: Math.floor(Math.random() * 800) + 120,
      verificationStatus: 'Verified Active',
    }));
  });

  const [pendingRestaurants, setPendingRestaurants] = useState(() => {
    const saved = localStorage.getItem('cravewave_pending_restaurants');
    return saved ? JSON.parse(saved) : INITIAL_PENDING_RESTAURANTS;
  });

  // 3. Delivery Partners State
  const [deliveryPartners, setDeliveryPartners] = useState(() => {
    const saved = localStorage.getItem('cravewave_delivery_partners');
    return saved ? JSON.parse(saved) : INITIAL_DELIVERY_PARTNERS;
  });

  // 4. Customers State
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem('cravewave_admin_customers');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOMERS;
  });

  // 5. Offers & Coupons State
  const [couponsList, setCouponsList] = useState(() => {
    const saved = localStorage.getItem('cravewave_admin_coupons');
    return saved ? JSON.parse(saved) : COUPONS.map((c) => ({
      ...c,
      usageCount: Math.floor(Math.random() * 300) + 50,
      usageLimit: 1000,
      isActive: true,
      expiryDate: '2026-12-31',
    }));
  });

  // 6. Support Tickets State
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem('cravewave_support_tickets');
    return saved ? JSON.parse(saved) : INITIAL_SUPPORT_TICKETS;
  });

  // 7. Zones & Settings State
  const [deliveryZones, setDeliveryZones] = useState(() => {
    const saved = localStorage.getItem('cravewave_delivery_zones');
    return saved ? JSON.parse(saved) : INITIAL_DELIVERY_ZONES;
  });

  // 8. Audit Logs State
  const [auditLogs, setAuditLogs] = useState(() => {
    const saved = localStorage.getItem('cravewave_audit_logs');
    return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
  });

  // Current active admin role session
  const [currentAdmin, setCurrentAdmin] = useState(() => {
    try {
      const saved = localStorage.getItem('cravewave_current_admin');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return {
      name: 'Akash Barik',
      email: 'akash.barik@cravewave.internal',
      role: 'Super Admin',
      avatar: 'AB',
      lastLogin: 'Just now',
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('cravewave_current_admin', JSON.stringify(currentAdmin));
    } catch (e) {
      // ignore
    }
  }, [currentAdmin]);

  // Persistence side-effects
  useEffect(() => {
    localStorage.setItem('cravewave_admin_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('cravewave_delivery_partners', JSON.stringify(deliveryPartners));
  }, [deliveryPartners]);

  useEffect(() => {
    localStorage.setItem('cravewave_pending_restaurants', JSON.stringify(pendingRestaurants));
  }, [pendingRestaurants]);

  useEffect(() => {
    localStorage.setItem('cravewave_admin_customers', JSON.stringify(customers));
  }, [customers]);

  useEffect(() => {
    localStorage.setItem('cravewave_admin_coupons', JSON.stringify(couponsList));
  }, [couponsList]);

  useEffect(() => {
    localStorage.setItem('cravewave_support_tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('cravewave_delivery_zones', JSON.stringify(deliveryZones));
  }, [deliveryZones]);

  useEffect(() => {
    localStorage.setItem('cravewave_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  // Helper to append audit logs
  const logAction = (action, module, details) => {
    const newLog = {
      id: `LOG-${Date.now()}`,
      admin: `${currentAdmin.name} (${currentAdmin.role})`,
      action,
      module,
      details,
      time: 'Just now',
    };
    setAuditLogs((prev) => [newLog, ...prev]);
  };

  // ORDER MANAGEMENT METHODS
  const updateOrderStatus = (orderId, newStatus, partnerId = null) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          const updated = { ...ord, status: newStatus };
          if (partnerId) {
            const partner = deliveryPartners.find((p) => p.id === partnerId);
            if (partner) {
              updated.assignedPartner = partner.id;
              updated.partnerName = partner.name;
              updated.partnerPhone = partner.phone;
            }
          }
          return updated;
        }
        return ord;
      })
    );
    logAction(`Updated Order Status to ${newStatus}`, 'Order Management', `Order ${orderId}`);
  };

  const processOrderRefund = (orderId, amount, reason = 'Admin approved refund') => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          return {
            ...ord,
            status: 'Refunded',
            refundAmount: amount || ord.payment?.amount || 0,
            refundDate: new Date().toISOString(),
            refundReason: reason,
          };
        }
        return ord;
      })
    );
    logAction(`Processed Refund of ₹${amount}`, 'Payments & Finance', `Order ${orderId}: ${reason}`);
  };

  // RESTAURANT MANAGEMENT METHODS
  const approveRestaurant = (pendingId) => {
    const pending = pendingRestaurants.find((r) => r.id === pendingId);
    if (!pending) return;

    const newRest = {
      id: `rest-${restaurantsList.length + 1}`,
      name: pending.name,
      slug: pending.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      image: '/images/hero_biryani.jpg',
      bannerImage: '/images/hero_butter_chicken.jpg',
      rating: 4.5,
      reviewCount: 1,
      deliveryTime: '25-35 min',
      distance: '2.5 km',
      priceTier: '₹₹',
      costForTwo: pending.costForTwo,
      isPureVeg: false,
      cuisines: pending.cuisines,
      tag: 'New Verified Partner',
      isOpen: true,
      address: pending.address,
      description: `Authentic flavors curated by chef ${pending.owner}. Licensed under FSSAI ${pending.fssai}.`,
      commissionRate: pending.commissionRate,
      verificationStatus: 'Verified Active',
      settlementPending: 0,
      totalOrdersLifetime: 0,
      menuCategories: [
        {
          id: `rest-cat-special`,
          name: 'Specialties',
          items: [
            {
              id: `item-new-${Date.now()}`,
              name: 'Signature Chef Special Dum Biryani',
              price: 360,
              description: 'Slow-cooked aromatic spices with tender pieces.',
              image: '/images/dindigul_thalappakatti_biryani.jpg',
              isAvailable: true,
              isVeg: false,
            },
          ],
        },
      ],
    };

    setRestaurantsList((prev) => [newRest, ...prev]);
    setPendingRestaurants((prev) => prev.filter((r) => r.id !== pendingId));
    logAction(`Approved Restaurant Registration`, 'Restaurant Management', `Approved "${pending.name}"`);
  };

  const rejectRestaurant = (pendingId, reason = 'Document verification failed') => {
    setPendingRestaurants((prev) => prev.filter((r) => r.id !== pendingId));
    logAction(`Rejected Restaurant Application`, 'Restaurant Management', `Rejected ${pendingId}: ${reason}`);
  };

  const toggleRestaurantStatus = (restaurantId) => {
    setRestaurantsList((prev) =>
      prev.map((r) => {
        if (r.id === restaurantId) {
          const newState = !r.isOpen;
          logAction(
            `Toggled Restaurant Operating Status to ${newState ? 'Online' : 'Closed'}`,
            'Restaurant Management',
            `Restaurant ${r.name}`
          );
          return { ...r, isOpen: newState };
        }
        return r;
      })
    );
  };

  const updateRestaurantCommission = (restaurantId, rate) => {
    setRestaurantsList((prev) =>
      prev.map((r) => (r.id === restaurantId ? { ...r, commissionRate: Number(rate) } : r))
    );
    logAction(`Updated Commission to ${rate}%`, 'Restaurant Management', `Restaurant ID ${restaurantId}`);
  };

  // DELIVERY PARTNER METHODS
  const togglePartnerOnline = (partnerId) => {
    setDeliveryPartners((prev) =>
      prev.map((p) => {
        if (p.id === partnerId) {
          const next = p.status === 'Online' ? 'Offline' : 'Online';
          logAction(`Toggled Rider Status to ${next}`, 'Delivery Partner Management', `${p.name} (${partnerId})`);
          return { ...p, status: next };
        }
        return p;
      })
    );
  };

  const verifyPartnerDocument = (partnerId, isApproved) => {
    setDeliveryPartners((prev) =>
      prev.map((p) => {
        if (p.id === partnerId) {
          const next = isApproved ? 'Verified' : 'Rejected';
          logAction(`Document Verification: ${next}`, 'Delivery Partner Management', `${p.name} (${partnerId})`);
          return { ...p, verificationStatus: next };
        }
        return p;
      })
    );
  };

  // CUSTOMER MANAGEMENT METHODS
  const updateCustomerStatus = (customerId, status) => {
    setCustomers((prev) =>
      prev.map((c) => {
        if (c.id === customerId) {
          logAction(`Changed Customer Account Status to ${status}`, 'Customer Management', `${c.name} (${customerId})`);
          return { ...c, status };
        }
        return c;
      })
    );
  };

  // OFFERS METHODS
  const createNewCoupon = (couponData) => {
    const newCoupon = {
      ...couponData,
      code: couponData.code.toUpperCase().trim(),
      usageCount: 0,
      isActive: true,
    };
    setCouponsList((prev) => [newCoupon, ...prev]);
    logAction(`Created Promo Campaign ${newCoupon.code}`, 'Offers & Promotions', `${newCoupon.title}`);
  };

  const toggleCoupon = (code) => {
    setCouponsList((prev) =>
      prev.map((c) => (c.code === code ? { ...c, isActive: !c.isActive } : c))
    );
    logAction(`Toggled Coupon Active State`, 'Offers & Promotions', `Coupon ${code}`);
  };

  // SUPPORT & SETTINGS METHODS
  const resolveTicket = (ticketId, resolutionText) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id === ticketId) {
          return {
            ...t,
            status: 'Resolved',
            messages: [
              ...t.messages,
              { sender: 'support', text: resolutionText || 'Issue marked as resolved by admin desk.', time: 'Just now' },
            ],
          };
        }
        return t;
      })
    );
    logAction(`Resolved Support Ticket`, 'Support, Reports & Settings', `Ticket ${ticketId}`);
  };

  const updateZoneSurge = (zoneId, surgeMultiplier) => {
    setDeliveryZones((prev) =>
      prev.map((z) => (z.id === zoneId ? { ...z, surgeMultiplier: Number(surgeMultiplier) } : z))
    );
    logAction(`Updated Zone Surge to ${surgeMultiplier}x`, 'Support, Reports & Settings', `Zone ${zoneId}`);
  };

  return (
    <AdminContext.Provider
      value={{
        currentAdmin,
        setCurrentAdmin,
        orders,
        restaurantsList,
        pendingRestaurants,
        deliveryPartners,
        customers,
        couponsList,
        tickets,
        deliveryZones,
        auditLogs,
        updateOrderStatus,
        processOrderRefund,
        approveRestaurant,
        rejectRestaurant,
        toggleRestaurantStatus,
        updateRestaurantCommission,
        togglePartnerOnline,
        verifyPartnerDocument,
        updateCustomerStatus,
        createNewCoupon,
        toggleCoupon,
        resolveTicket,
        updateZoneSurge,
        logAction,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
