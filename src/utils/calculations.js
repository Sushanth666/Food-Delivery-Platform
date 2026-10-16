export function calculateItemTotal(item) {
  let basePrice = item.price;

  if (item.customization) {
    if (item.customization.sizePriceDiff) {
      basePrice += item.customization.sizePriceDiff;
    }
    if (Array.isArray(item.customization.addOnsWithPrice)) {
      const addOnsCost = item.customization.addOnsWithPrice.reduce(
        (sum, addon) => sum + (addon.price || 0),
        0
      );
      basePrice += addOnsCost;
    }
  }

  return basePrice * (item.quantity || 1);
}

export function calculateOrderBill(items = [], appliedCoupon = null) {
  const subtotal = items.reduce((acc, item) => acc + calculateItemTotal(item), 0);

  if (subtotal === 0) {
    return {
      subtotal: 0,
      discount: 0,
      deliveryFee: 0,
      platformFee: 0,
      taxes: 0,
      total: 0,
      itemCount: 0,
    };
  }

  const itemCount = items.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // Delivery fee logic for India: ₹35, free if subtotal >= ₹299
  let deliveryFee = subtotal >= 299 ? 0 : 35;
  const platformFee = 5;

  // Coupon discount computation
  let discount = 0;
  if (appliedCoupon && subtotal >= (appliedCoupon.minOrder || 0)) {
    if (appliedCoupon.discountType === 'percentage') {
      const calcDiscount = Math.round((subtotal * appliedCoupon.discountValue) / 100);
      discount = Math.min(calcDiscount, appliedCoupon.maxDiscount || calcDiscount);
    } else if (appliedCoupon.discountType === 'flat') {
      discount = Math.min(appliedCoupon.discountValue, subtotal);
    } else if (appliedCoupon.discountType === 'delivery') {
      discount = deliveryFee;
      deliveryFee = 0;
    }
  }

  // GST in India: 5% for restaurant orders
  const taxableSubtotal = Math.max(0, subtotal - discount);
  const taxes = Math.round(taxableSubtotal * 0.05);

  const total = Math.max(0, subtotal - discount + deliveryFee + platformFee + taxes);

  return {
    subtotal: Math.round(subtotal),
    discount: Math.round(discount),
    deliveryFee: Math.round(deliveryFee),
    platformFee: Math.round(platformFee),
    taxes: Math.round(taxes),
    total: Math.round(total),
    itemCount,
  };
}
