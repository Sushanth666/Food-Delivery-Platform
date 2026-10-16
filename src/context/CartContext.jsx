import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { calculateOrderBill } from '../utils/calculations';
import { COUPONS } from '../data/coupons';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => getLocalStorage('cw_cart_items', []));
  const [currentRestaurant, setCurrentRestaurant] = useState(() =>
    getLocalStorage('cw_cart_restaurant', null)
  );
  const [appliedCoupon, setAppliedCoupon] = useState(() =>
    getLocalStorage('cw_cart_coupon', null)
  );
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [conflictModal, setConflictModal] = useState({
    isOpen: false,
    pendingRestaurant: null,
    pendingItem: null,
    pendingCustomization: null,
  });

  // Keep localStorage synced
  useEffect(() => {
    setLocalStorage('cw_cart_items', cartItems);
    setLocalStorage('cw_cart_restaurant', currentRestaurant);
    setLocalStorage('cw_cart_coupon', appliedCoupon);
  }, [cartItems, currentRestaurant, appliedCoupon]);

  // Generate unique item cart key based on id and customization selections
  const generateCartKey = (itemId, customization) => {
    if (!customization) return itemId;
    const size = customization.size || 'default';
    const addons = (customization.addOns || []).slice().sort().join(',');
    const spice = customization.spiceLevel || 'none';
    const instructions = customization.specialInstructions || '';
    return `${itemId}__sz:${size}__add:${addons}__sp:${spice}__in:${instructions}`;
  };

  const addToCart = (restaurant, item, customization = null) => {
    // Check if adding from a different restaurant
    if (
      currentRestaurant &&
      currentRestaurant.id !== restaurant.id &&
      cartItems.length > 0
    ) {
      setConflictModal({
        isOpen: true,
        pendingRestaurant: restaurant,
        pendingItem: item,
        pendingCustomization: customization,
      });
      return;
    }

    // Set active restaurant if empty
    if (!currentRestaurant) {
      setCurrentRestaurant({
        id: restaurant.id,
        name: restaurant.name,
        slug: restaurant.slug,
        image: restaurant.image,
        deliveryTime: restaurant.deliveryTime,
      });
    }

    const cartKey = generateCartKey(item.id, customization);

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((it) => it.cartKey === cartKey);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }

      return [
        ...prevItems,
        {
          cartKey,
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          isVeg: item.isVeg,
          customization,
          quantity: 1,
        },
      ];
    });
  };

  const confirmSwitchRestaurantAndAdd = () => {
    const { pendingRestaurant, pendingItem, pendingCustomization } = conflictModal;
    if (!pendingRestaurant || !pendingItem) return;

    setCurrentRestaurant({
      id: pendingRestaurant.id,
      name: pendingRestaurant.name,
      slug: pendingRestaurant.slug,
      image: pendingRestaurant.image,
      deliveryTime: pendingRestaurant.deliveryTime,
    });

    const cartKey = generateCartKey(pendingItem.id, pendingCustomization);
    setCartItems([
      {
        cartKey,
        id: pendingItem.id,
        name: pendingItem.name,
        price: pendingItem.price,
        image: pendingItem.image,
        isVeg: pendingItem.isVeg,
        customization: pendingCustomization,
        quantity: 1,
      },
    ]);

    setConflictModal({
      isOpen: false,
      pendingRestaurant: null,
      pendingItem: null,
      pendingCustomization: null,
    });
  };

  const cancelSwitchRestaurant = () => {
    setConflictModal({
      isOpen: false,
      pendingRestaurant: null,
      pendingItem: null,
      pendingCustomization: null,
    });
  };

  const updateQuantity = (cartKey, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartKey);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeFromCart = (cartKey) => {
    setCartItems((prev) => {
      const remaining = prev.filter((item) => item.cartKey !== cartKey);
      if (remaining.length === 0) {
        setCurrentRestaurant(null);
        setAppliedCoupon(null);
      }
      return remaining;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setCurrentRestaurant(null);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const coupon = COUPONS.find(
      (c) => c.code.toUpperCase() === code.trim().toUpperCase()
    );
    if (!coupon) {
      return { success: false, message: 'Invalid coupon code. Try WELCOME50 or TASTY20' };
    }

    const bill = calculateOrderBill(cartItems, null);
    if (bill.subtotal < coupon.minOrder) {
      return {
        success: false,
        message: `Min order value of $${coupon.minOrder.toFixed(2)} required for code ${coupon.code}`,
      };
    }

    setAppliedCoupon(coupon);
    return { success: true, message: `Coupon "${coupon.code}" applied successfully!` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  // Re-order past order directly
  const reorderItems = (order) => {
    if (!order || !order.items) return;
    clearCart();
    setCurrentRestaurant({
      id: order.restaurantId,
      name: order.restaurantName,
      image: order.restaurantImage,
      deliveryTime: '25-35 min',
    });

    const rebuiltItems = order.items.map((it) => ({
      cartKey: generateCartKey(it.id, it.customization),
      id: it.id,
      name: it.name,
      price: it.price,
      image: it.image || order.restaurantImage,
      isVeg: it.isVeg !== undefined ? it.isVeg : true,
      customization: it.customization || null,
      quantity: it.quantity || 1,
    }));

    setCartItems(rebuiltItems);
    setIsCartDrawerOpen(true);
  };

  const bill = calculateOrderBill(cartItems, appliedCoupon);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        currentRestaurant,
        appliedCoupon,
        bill,
        isCartDrawerOpen,
        conflictModal,
        setIsCartDrawerOpen,
        openCartDrawer: () => setIsCartDrawerOpen(true),
        closeCartDrawer: () => setIsCartDrawerOpen(false),
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
        reorderItems,
        confirmSwitchRestaurantAndAdd,
        cancelSwitchRestaurant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
