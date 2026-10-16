import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { INITIAL_MOCK_ORDERS } from '../data/mockOrders';
import { INDIAN_DELIVERY_PARTNERS, getIndianAvatarByName } from '../utils/indianAvatars';

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const rawOrders = getLocalStorage('cw_orders', INITIAL_MOCK_ORDERS);
    // Sanitize driver avatars to strictly match the gender of their Indian names
    return (rawOrders || []).map((order) => {
      if (order.deliveryDriver?.name) {
        return {
          ...order,
          deliveryDriver: {
            ...order.deliveryDriver,
            avatar: getIndianAvatarByName(order.deliveryDriver.name, order.deliveryDriver.gender),
          },
        };
      }
      return order;
    });
  });

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
      INDIAN_DELIVERY_PARTNERS[Math.floor(Math.random() * INDIAN_DELIVERY_PARTNERS.length)];
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
      deliveryDriver: {
        ...randomDriver,
        avatar: getIndianAvatarByName(randomDriver.name, randomDriver.gender),
      },
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
