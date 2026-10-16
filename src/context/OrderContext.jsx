import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { INITIAL_MOCK_ORDERS } from '../data/mockOrders';

const OrderContext = createContext(null);

const MOCK_DRIVERS = [
  {
    name: 'Ramesh Kumar',
    phone: '+91 98450 12345',
    rating: 4.9,
    trips: 1840,
    vehicle: 'TVS Apache 160 (KA-05-EX-4921)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Vikram Singh',
    phone: '+91 98210 99887',
    rating: 5.0,
    trips: 920,
    vehicle: 'Hero Splendor Plus (DL-03-CB-9081)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Mohammed Zeeshan',
    phone: '+91 97110 54321',
    rating: 4.8,
    trips: 2150,
    vehicle: 'Ather 450X EV Scooter (MH-02-FK-3321)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Pooja Patel',
    phone: '+91 99800 66778',
    rating: 4.9,
    trips: 1320,
    vehicle: 'Honda Activa 6G (KA-01-EQ-5544)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
];

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() =>
    getLocalStorage('cw_orders', INITIAL_MOCK_ORDERS)
  );

  useEffect(() => {
    setLocalStorage('cw_orders', orders);
  }, [orders]);

  const placeOrder = ({
    items,
    restaurant,
    bill,
    deliveryAddress,
    paymentMethod,
    deliveryInstructions,
  }) => {
    const randomDriver =
      MOCK_DRIVERS[Math.floor(Math.random() * MOCK_DRIVERS.length)];
    const orderId = `CW-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      restaurantImage: restaurant.image,
      status: 'Order Confirmed',
      currentStep: 1,
      items: items.map((it) => ({
        id: it.id,
        name: it.name,
        price: it.price,
        image: it.image,
        isVeg: it.isVeg,
        quantity: it.quantity,
        customization: it.customization || null,
      })),
      bill: { ...bill },
      deliveryAddress,
      paymentMethod,
      deliveryInstructions: deliveryInstructions || 'Leave at security gate / ring bell once',
      deliveryDriver: randomDriver,
      estimatedDeliveryTime: '25-35 mins',
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStep) => {
    const statusLabels = [
      'Order Confirmed',
      'Kitchen Preparing Food',
      'Delivery Partner Assigned',
      'Out for Delivery',
      'Delivered',
    ];

    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          const stepIndex = Math.min(Math.max(newStep, 1), 5);
          return {
            ...ord,
            currentStep: stepIndex,
            status: statusLabels[stepIndex - 1],
          };
        }
        return ord;
      })
    );
  };

  const getOrderById = (orderId) => {
    return orders.find((ord) => ord.id === orderId) || null;
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
        updateOrderStatus,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
