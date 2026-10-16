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

  // Delivery fee logic: standard $3.49, free if subtotal >= $35
  let deliveryFee = subtotal >= 35 ? 0 : 3.49;
  const platformFee = 1.49;

  // Coupon discount computation
  let discount = 0;
  if (appliedCoupon && subtotal >= (appliedCoupon.minOrder || 0)) {
    if (appliedCoupon.discountType === 'percentage') {
      const calcDiscount = (subtotal * appliedCoupon.discountValue) / 100;
      discount = Math.min(calcDiscount, appliedCoupon.maxDiscount || calcDiscount);
    } else if (appliedCoupon.discountType === 'flat') {
      discount = Math.min(appliedCoupon.discountValue, subtotal);
    } else if (appliedCoupon.discountType === 'delivery') {
      discount = deliveryFee;
      deliveryFee = 0;
    }
  }

  // Tax calculation: 8% on discounted subtotal
  const taxableSubtotal = Math.max(0, subtotal - discount);
  const taxes = Number((taxableSubtotal * 0.08).toFixed(2));

  const total = Number(
    Math.max(0, subtotal - discount + deliveryFee + platformFee + taxes).toFixed(2)
  );

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discount: Number(discount.toFixed(2)),
    deliveryFee: Number(deliveryFee.toFixed(2)),
    platformFee: Number(platformFee.toFixed(2)),
    taxes: Number(taxes.toFixed(2)),
    total: Number(total.toFixed(2)),
    itemCount,
  };
}
