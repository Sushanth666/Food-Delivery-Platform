export const ORDER_STATUS_STEPS = [
  {
    step: 1,
    title: 'Order Confirmed',
    description: 'Your order has been received by the restaurant.',
    icon: 'ReceiptCheck',
    durationMinutes: 2,
  },
  {
    step: 2,
    title: 'Kitchen Preparing Food',
    description: 'The master chef is crafting your gourmet dishes fresh.',
    icon: 'ChefHat',
    durationMinutes: 12,
  },
  {
    step: 3,
    title: 'Delivery Partner Assigned',
    description: 'Your delivery rider has reached the restaurant to pick up.',
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
    description: 'Food delivered safely! Enjoy your meal.',
    icon: 'CheckCircle2',
    durationMinutes: 0,
  },
];

export const INITIAL_MOCK_ORDERS = [
  {
    id: 'CW-89214',
    date: '2026-10-14T19:30:00Z',
    restaurantId: 'rest-1',
    restaurantName: 'The Burger Barn & Smokehouse',
    restaurantImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    status: 'Delivered',
    currentStep: 5,
    items: [
      {
        id: 'item-101',
        name: 'Double Truffle Smash Burger',
        price: 14.99,
        quantity: 2,
        customization: {
          size: 'Standard Double',
          addOns: ['Extra Cheddar Cheese'],
          spiceLevel: 'Zesty Pepper'
        }
      },
      {
        id: 'item-105',
        name: 'Truffle Parmesan Hand-cut Fries',
        price: 6.99,
        quantity: 1
      }
    ],
    bill: {
      subtotal: 36.97,
      discount: 7.39,
      deliveryFee: 0.00,
      platformFee: 1.50,
      taxes: 3.11,
      total: 34.19
    },
    deliveryAddress: {
      fullName: 'Alex Vance',
      street: '742 Evergreen Terrace, Apt 4B',
      city: 'Downtown Metropolis',
      zip: '10001',
      phone: '+1 (555) 382-9011'
    },
    paymentMethod: 'Credit / Debit Card',
    deliveryDriver: {
      name: 'Carlos Mendoza',
      phone: '+1 (555) 891-2300',
      rating: 4.9,
      trips: 1840,
      vehicle: 'Honda e-Scooter (Reg #CW-782)'
    }
  },
  {
    id: 'CW-74120',
    date: '2026-10-10T13:15:00Z',
    restaurantId: 'rest-2',
    restaurantName: 'Bella Napoli Woodfired Pizzeria',
    restaurantImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    status: 'Delivered',
    currentStep: 5,
    items: [
      {
        id: 'item-201',
        name: 'Margherita D.O.P. Speciale',
        price: 15.99,
        quantity: 1,
        customization: {
          size: '12" Classic Artisan',
          addOns: ['Extra Buffalo Mozzarella', 'Hot Honey Drizzle'],
          spiceLevel: 'Crushed Red Pepper Flakes'
        }
      },
      {
        id: 'item-205',
        name: 'Traditional Venetian Tiramisù',
        price: 7.99,
        quantity: 1
      }
    ],
    bill: {
      subtotal: 28.28,
      discount: 5.65,
      deliveryFee: 2.99,
      platformFee: 1.50,
      taxes: 2.71,
      total: 29.83
    },
    deliveryAddress: {
      fullName: 'Alex Vance',
      street: '742 Evergreen Terrace, Apt 4B',
      city: 'Downtown Metropolis',
      zip: '10001',
      phone: '+1 (555) 382-9011'
    },
    paymentMethod: 'Apple Pay / UPI',
    deliveryDriver: {
      name: 'Sarah Jenkins',
      phone: '+1 (555) 431-9988',
      rating: 5.0,
      trips: 950,
      vehicle: 'Vespa Sprint 150'
    }
  }
];
