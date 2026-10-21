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

export function calculateOrderBill(
  items = [],
  appliedCoupon = null,
  options = {}
) {
  const { isGold = false, isCoinsApplied = false, userCoins = 0 } = options;
  const subtotal = items.reduce((acc, item) => acc + calculateItemTotal(item), 0);

  if (subtotal === 0) {
    return {
      subtotal: 0,
      discount: 0,
      goldDiscount: 0,
      coinsDiscount: 0,
      deliveryFee: 0,
      platformFee: 0,
      taxes: 0,
      total: 0,
      itemCount: 0,
      isGold: false,
    };
  }

  const itemCount = items.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // Standard Delivery fee: ₹35, free if subtotal >= ₹299. For Gold members, ALWAYS ₹0!
  const originalDeliveryFee = subtotal >= 299 ? 0 : 35;
  let deliveryFee = isGold ? 0 : originalDeliveryFee;
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

  // CraveWave Gold VIP 10% instant discount (up to ₹100)
  const goldDiscount = isGold ? Math.min(100, Math.round(subtotal * 0.10)) : 0;

  // CraveWave Loyalty Coins Redemption (Max ₹100 per order or balance)
  let coinsDiscount = 0;
  if (isCoinsApplied && userCoins > 0) {
    const remainingPayable = Math.max(0, subtotal - discount - goldDiscount);
    coinsDiscount = Math.min(userCoins, Math.min(100, remainingPayable));
  }

  // GST in India: 5% for restaurant orders on post-discount food value
  const taxableSubtotal = Math.max(0, subtotal - discount - goldDiscount - coinsDiscount);
  const taxes = Math.round(taxableSubtotal * 0.05);

  const total = Math.max(
    0,
    subtotal - discount - goldDiscount - coinsDiscount + deliveryFee + platformFee + taxes
  );

  return {
    subtotal: Math.round(subtotal),
    discount: Math.round(discount),
    goldDiscount: Math.round(goldDiscount),
    coinsDiscount: Math.round(coinsDiscount),
    coinsRedeemed: coinsDiscount,
    deliveryFee: Math.round(deliveryFee),
    savedDeliveryFee: isGold && originalDeliveryFee > 0 ? originalDeliveryFee : 0,
    platformFee: Math.round(platformFee),
    taxes: Math.round(taxes),
    total: Math.round(total),
    itemCount,
    isGold,
  };
}
