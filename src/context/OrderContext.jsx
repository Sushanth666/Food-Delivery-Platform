import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { INITIAL_MOCK_ORDERS } from '../data/mockOrders';

const OrderContext = createContext(null);

const MOCK_DRIVERS = [
  {
    name: 'David Miller',
    phone: '+1 (555) 782-9014',
    rating: 4.9,
    trips: 1420,
    vehicle: 'Honda CB350 (Reg #CW-892)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Elena Rostova',
    phone: '+1 (555) 321-7788',
    rating: 5.0,
    trips: 870,
    vehicle: 'Ather 450X EV Scooter',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Marcus Thorne',
    phone: '+1 (555) 902-1433',
    rating: 4.8,
    trips: 2100,
    vehicle: 'Yamaha Aerox 155',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
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
      deliveryInstructions: deliveryInstructions || 'Leave at front door / bell once',
      deliveryDriver: randomDriver,
      estimatedDeliveryTime: '28-35 mins',
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
