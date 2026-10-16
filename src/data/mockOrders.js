export const ORDER_STATUS_STEPS = [
  {
    step: 1,
    title: 'Order Confirmed',
    description: 'Your order has been accepted by the restaurant.',
    icon: 'ReceiptCheck',
    durationMinutes: 2,
  },
  {
    step: 2,
    title: 'Kitchen Preparing Food',
    description: 'The master chef is preparing your dishes fresh in the kitchen.',
    icon: 'ChefHat',
    durationMinutes: 12,
  },
  {
    step: 3,
    title: 'Delivery Partner Assigned',
    description: 'Your delivery executive has arrived at the restaurant.',
    icon: 'UserCheck',
    durationMinutes: 5,
  },
  {
    step: 4,
    title: 'Out for Delivery',
    description: 'Rider is on the way to your location with your food hot and fresh.',
    icon: 'Bike',
    durationMinutes: 10,
  },
  {
    step: 5,
    title: 'Delivered',
    description: 'Food delivered safely! Enjoy your delicious meal.',
    icon: 'CheckCircle2',
    durationMinutes: 0,
  },
];

export const INITIAL_MOCK_ORDERS = [
  {
    id: 'CW-89214',
    date: '2026-10-14T19:30:00Z',
    restaurantId: 'rest-1',
    restaurantName: 'Paradise & Meghana Royal Biryani',
    restaurantImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
    status: 'Delivered',
    currentStep: 5,
    items: [
      {
        id: 'item-101',
        name: 'Special Andhra Chicken Dum Biryani',
        price: 320,
        quantity: 2,
        customization: {
          size: 'Regular Box (Serves 1)',
          addOns: ['Extra Boiled Egg (2 pcs)'],
          spiceLevel: 'Fiery Andhra Guntur'
        }
      },
      {
        id: 'item-103',
        name: 'Spicy Andhra Chicken 65',
        price: 240,
        quantity: 1
      }
    ],
    bill: {
      subtotal: 910,
      discount: 100,
      deliveryFee: 0,
      platformFee: 5,
      taxes: 41,
      total: 856
    },
    deliveryAddress: {
      fullName: 'Rahul Sharma',
      street: 'Flat 402, Sai Orchid Residency, 12th Main Road, 4th Block',
      city: 'Koramangala, Bengaluru, Karnataka',
      zip: '560034',
      phone: '+91 98765 43210'
    },
    paymentMethod: 'Google Pay / UPI',
    deliveryDriver: {
      name: 'Ramesh Kumar',
      phone: '+91 98450 12345',
      rating: 4.9,
      trips: 1840,
      vehicle: 'TVS Apache 160 (KA-05-EX-4921)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'CW-74120',
    date: '2026-10-10T13:15:00Z',
    restaurantId: 'rest-2',
    restaurantName: 'Murugan Tiffin & Dosa Corner',
    restaurantImage: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    status: 'Delivered',
    currentStep: 5,
    items: [
      {
        id: 'item-201',
        name: 'Ghee Roast Special Masala Dosa',
        price: 130,
        quantity: 2,
        customization: {
          size: 'Standard Roast',
          addOns: ['Gunpowder Podi Ghee Spread'],
          spiceLevel: 'Traditional Medium'
        }
      },
      {
        id: 'item-204',
        name: 'Authentic Madras Degree Filter Coffee',
        price: 55,
        quantity: 2
      }
    ],
    bill: {
      subtotal: 420,
      discount: 75,
      deliveryFee: 0,
      platformFee: 5,
      taxes: 17,
      total: 367
    },
    deliveryAddress: {
      fullName: 'Rahul Sharma',
      street: 'Flat 402, Sai Orchid Residency, 12th Main Road, 4th Block',
      city: 'Koramangala, Bengaluru, Karnataka',
      zip: '560034',
      phone: '+91 98765 43210'
    },
    paymentMethod: 'PhonePe / UPI',
    deliveryDriver: {
      name: 'Vikram Singh',
      phone: '+91 98210 99887',
      rating: 5.0,
      trips: 920,
      vehicle: 'Hero Splendor Plus (DL-03-CB-9081)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  }
];
