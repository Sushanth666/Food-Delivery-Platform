import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  CreditCard,
  Smartphone,
  Banknote,
  Building,
  CheckCircle2,
  MapPin,
  Phone,
  User,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Lock,
  Crosshair,
  Crown,
  Coins,
  Check,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useLocationContext } from '../context/LocationContext';
import { useAuth } from '../context/AuthContext';
import { formatCurrency } from '../utils/formatCurrency';
import confetti from 'canvas-confetti';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const {
    cartItems,
    currentRestaurant,
    bill,
    clearCart,
    isCoinsApplied,
    toggleCoinsUsage,
    isGiftOrder,
    giftDetails,
    isNoCutlery,
    isEvFleet,
  } = useCart();
  const { placeOrder } = useOrders();
  const { currentLocation, openLocationModal } = useLocationContext();
  const {
    isGoldMember,
    walletCoins,
    redeemCoins,
    generateOrderScratchCard,
    addEcoImpact,
  } = useAuth();

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    phone: '+91 98765 43210',
    street: currentLocation.area || 'Flat 402, Sai Orchid Residency, 12th Main Road, 4th Block',
    city: currentLocation.city ? `${currentLocation.city}, ${currentLocation.state || 'Karnataka'}` : 'Koramangala, Bengaluru, Karnataka',
    zip: currentLocation.pincode || '560034',
    instructions: 'Leave with security / call upon arrival',
  });

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [cardData, setCardData] = useState({
    cardNumber: '4242 •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvv: '883',
  });
  const [upiId, setUpiId] = useState('rahul@okhdfcbank');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, redirect back
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-[#0B0B0E] bg-dark-luxury text-white">
        <div className="max-w-md w-full bg-[#131319]/90 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-rose-950/40 text-center">
          <h2 className="text-2xl font-black font-display text-white">Your cart is empty</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Please add items to your cart before proceeding to checkout.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-950/60 cursor-pointer"
          >
            Explore Restaurants
          </Link>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.street.trim()) errs.street = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.zip.trim()) {
      errs.zip = 'PIN code is required';
    } else if (!/^\d{6}$/.test(formData.zip.trim())) {
      errs.zip = 'Please enter a valid 6-digit Indian PIN code';
    }

    if (paymentMethod === 'card') {
      if (!cardData.cardNumber.trim()) errs.cardNumber = 'Card number required';
      if (!cardData.cardExpiry.trim()) errs.cardExpiry = 'Expiry required';
      if (!cardData.cardCvv.trim()) errs.cardCvv = 'CVV required';
    } else if (paymentMethod === 'upi') {
      if (!upiId.trim() || !upiId.includes('@')) {
        errs.upiId = 'Valid UPI ID required (e.g. name@bank or number@paytm)';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const orderPayload = {
      restaurant: currentRestaurant,
      items: cartItems,
      bill: bill,
      isGiftOrder: isGiftOrder,
      giftDetails: isGiftOrder ? giftDetails : null,
      isEcoDelivery: isNoCutlery || isEvFleet,
      ecoDetails: {
        noCutlery: isNoCutlery,
        evFleet: isEvFleet,
      },
      deliveryAddress: {
        fullName:
          isGiftOrder && giftDetails?.recipientName
            ? `${giftDetails.recipientName} (Gift via ${formData.fullName})`
            : formData.fullName,
        phone:
          isGiftOrder && giftDetails?.recipientPhone
            ? giftDetails.recipientPhone
            : formData.phone,
        street: formData.street,
        city: formData.city,
        zip: formData.zip,
        instructions: formData.instructions,
      },
      payment: {
        method: paymentMethod,
        details:
          paymentMethod === 'card'
            ? `Card ending with ${cardData.cardNumber.slice(-4)}`
            : paymentMethod === 'upi'
            ? `UPI ID (${upiId})`
            : paymentMethod === 'cod'
            ? 'Cash / Pay on Delivery'
            : 'Net Banking',
        status: paymentMethod === 'cod' ? 'PENDING' : 'PAID',
      },
    };

    setTimeout(() => {
      const order = placeOrder(orderPayload);

      try {
        if (bill.coinsRedeemed > 0) {
          redeemCoins(bill.coinsRedeemed);
        }
        // Unlock mystery scratch card reward
        generateOrderScratchCard();

        // Credit eco impact
        if (isNoCutlery || isEvFleet) {
          addEcoImpact({
            plastic: isNoCutlery ? 4 : 0,
            co2: isEvFleet ? 0.4 : 0.1,
            trees: 0,
          });
        }

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore
      }

      clearCart();
      setIsSubmitting(false);
      navigate(`/order-confirmation/${order.id}`);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-1">
            <Link to="/cart" className="hover:text-rose-400 transition-colors">
              Cart
            </Link>
            <span>/</span>
            <span className="text-white font-bold">Checkout</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
            Secure Checkout
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Complete your delivery details and choose a preferred payment method
          </p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Form: Address & Payment */}
            <div className="lg:col-span-7 space-y-6">
              {/* Delivery Address Card */}
              <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-rose-600 flex items-center justify-center text-white shadow-md">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-white text-base">
                      1. Delivery Address
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        street: currentLocation.area || prev.street,
                        city: currentLocation.city ? `${currentLocation.city}, ${currentLocation.state || 'Karnataka'}` : prev.city,
                        zip: currentLocation.pincode || prev.zip,
                      }));
                    }}
                    className="px-3 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-900/70 border border-rose-800/40 text-rose-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Auto-fill with currently detected location"
                  >
                    <Crosshair className="w-3.5 h-3.5 text-rose-400" />
                    <span>Use Detected Location</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Contact Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-2xl border bg-[#1A1A22] text-white placeholder:text-gray-500 ${
                        errors.fullName ? 'border-rose-500 bg-rose-950/40' : 'border-white/10'
                      } focus:outline-none focus:border-rose-500`}
                      placeholder="E.g. Rahul Sharma"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-2xl border bg-[#1A1A22] text-white placeholder:text-gray-500 ${
                        errors.phone ? 'border-rose-500 bg-rose-950/40' : 'border-white/10'
                      } focus:outline-none focus:border-rose-500`}
                      placeholder="E.g. +91 98765 43210"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Street Address & House / Apartment *
                    </label>
                    <input
                      type="text"
                      value={formData.street}
                      onChange={(e) =>
                        setFormData({ ...formData, street: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-2xl border bg-[#1A1A22] text-white placeholder:text-gray-500 ${
                        errors.street ? 'border-rose-500 bg-rose-950/40' : 'border-white/10'
                      } focus:outline-none focus:border-rose-500`}
                      placeholder="Apartment, suite, unit, building, floor, etc."
                    />
                    {errors.street && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.street}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-2xl border bg-[#1A1A22] text-white placeholder:text-gray-500 ${
                        errors.city ? 'border-rose-500 bg-rose-950/40' : 'border-white/10'
                      } focus:outline-none focus:border-rose-500`}
                      placeholder="E.g. Bengaluru, Karnataka"
                    />
                    {errors.city && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.city}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      PIN Code (6 Digits) *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={formData.zip}
                      onChange={(e) =>
                        setFormData({ ...formData, zip: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-2xl border bg-[#1A1A22] text-white placeholder:text-gray-500 ${
                        errors.zip ? 'border-rose-500 bg-rose-950/40' : 'border-white/10'
                      } focus:outline-none focus:border-rose-500`}
                      placeholder="560034"
                    />
                    {errors.zip && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.zip}
                      </span>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Delivery Instructions (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.instructions}
                      onChange={(e) =>
                        setFormData({ ...formData, instructions: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs font-semibold rounded-2xl border border-white/10 bg-[#1A1A22] text-white placeholder:text-gray-500 focus:outline-none focus:border-rose-500"
                      placeholder="E.g. Leave with building security, call upon reaching..."
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Card */}
              <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-white text-base">
                    2. Payment Method
                  </h3>
                </div>

                {/* Payment Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'card', name: 'Card', icon: CreditCard },
                    { id: 'upi', name: 'UPI / Apps', icon: Smartphone },
                    { id: 'cod', name: 'Cash on Del', icon: Banknote },
                    { id: 'netbanking', name: 'Net Banking', icon: Building },
                  ].map((m) => {
                    const Icon = m.icon;
                    const isSelected = paymentMethod === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id)}
                        className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all active:scale-95 cursor-pointer ${
                          isSelected
                            ? 'border-rose-500 bg-rose-950/60 text-rose-300 shadow-md ring-2 ring-rose-500/20'
                            : 'border-white/10 bg-[#1A1A22] text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-xs font-bold">{m.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Conditional Payment Inputs */}
                {paymentMethod === 'card' && (
                  <div className="p-4 bg-[#1A1A22] rounded-2xl space-y-3 mt-4 border border-white/10">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardData.cardNumber}
                        onChange={(e) =>
                          setCardData({ ...cardData, cardNumber: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-[#22222D] text-white focus:outline-none focus:border-rose-500"
                      />
                      {errors.cardNumber && (
                        <span className="text-[10px] text-rose-400 mt-0.5 block">
                          {errors.cardNumber}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-300 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardData.cardExpiry}
                          onChange={(e) =>
                            setCardData({ ...cardData, cardExpiry: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-[#22222D] text-white focus:outline-none focus:border-rose-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-300 mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength={4}
                          value={cardData.cardCvv}
                          onChange={(e) =>
                            setCardData({ ...cardData, cardCvv: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-[#22222D] text-white focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="p-4 bg-[#1A1A22] rounded-2xl space-y-2 mt-4 border border-white/10">
                    <label className="block text-[11px] font-bold text-gray-300">
                      Enter Virtual Payment Address (UPI ID)
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="e.g. rahul@okhdfcbank or 9876543210@paytm"
                      className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 bg-[#22222D] text-white focus:outline-none focus:border-rose-500 placeholder:text-gray-500"
                    />
                    {errors.upiId && (
                      <span className="text-[10px] text-rose-400 block">
                        {errors.upiId}
                      </span>
                    )}
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="p-4 bg-amber-950/40 rounded-2xl text-xs text-amber-200 border border-amber-600/40">
                    <strong className="text-amber-300">Cash on Delivery (Pay on Delivery):</strong> Keep exact cash ready or scan the delivery executive's UPI QR code upon arrival.
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="p-4 bg-[#1A1A22] rounded-2xl text-xs text-gray-300 border border-white/10">
                    Supports SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak, and all major Indian banking portals.
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Order Review */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#14141C]/95 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl space-y-4 sticky top-28">
                <h3 className="font-extrabold text-white text-base pb-3 border-b border-white/10">
                  Order Review
                </h3>

                {/* Restaurant summary */}
                {currentRestaurant && (
                  <div className="flex items-center gap-3 bg-[#1A1A22] p-3 rounded-2xl border border-white/5">
                    <img
                      src={currentRestaurant.image}
                      alt={currentRestaurant.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <div className="text-xs font-extrabold text-white">
                        {currentRestaurant.name}
                      </div>
                      <div className="text-[11px] text-rose-300">
                        ETA: {currentRestaurant.deliveryTime}
                      </div>
                    </div>
                  </div>
                )}

                {/* Items List preview */}
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.cartKey}
                      className="flex justify-between items-center text-xs"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="font-bold text-rose-400">
                          {item.quantity}x
                        </span>
                        <span className="text-gray-200 font-semibold truncate">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-bold text-white flex-shrink-0">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Gold VIP Benefits Ribbon */}
                {isGoldMember && (
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-950/60 to-black/60 border border-amber-500/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                      <span className="font-bold text-amber-300">CraveWave Gold VIP Applied</span>
                    </div>
                    <span className="text-[10px] font-black text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full">
                      Free Delivery + 10% Off
                    </span>
                  </div>
                )}

                {/* Coins Redemption Switch */}
                {walletCoins > 0 && (
                  <div
                    onClick={toggleCoinsUsage}
                    className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      isCoinsApplied
                        ? 'bg-amber-950/40 border-amber-500/50'
                        : 'bg-[#1A1A22] hover:bg-[#20202B] border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isCoinsApplied
                            ? 'bg-amber-500 border-amber-400 text-black'
                            : 'border-gray-500 bg-white/5'
                        }`}
                      >
                        {isCoinsApplied && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-bold text-gray-200 flex items-center gap-1">
                        <Coins className="w-3.5 h-3.5 text-amber-400" />
                        Use CraveWave Coins ({walletCoins} available)
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-amber-400">
                      {isCoinsApplied ? `-₹${bill.coinsDiscount}` : 'Redeem'}
                    </span>
                  </div>
                )}

                {/* Bill Details */}
                <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-gray-200">{formatCurrency(bill.subtotal)}</span>
                  </div>
                  {bill.discount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Coupon Discount</span>
                      <span>-{formatCurrency(bill.discount)}</span>
                    </div>
                  )}
                  {bill.goldDiscount > 0 && (
                    <div className="flex justify-between text-amber-400 font-bold">
                      <span className="flex items-center gap-1">
                        <Crown className="w-3 h-3 text-amber-400" />
                        Gold VIP 10% Discount
                      </span>
                      <span>-{formatCurrency(bill.goldDiscount)}</span>
                    </div>
                  )}
                  {bill.coinsDiscount > 0 && (
                    <div className="flex justify-between text-amber-300 font-bold">
                      <span className="flex items-center gap-1">
                        <Coins className="w-3 h-3 text-amber-400" />
                        Coins Redeemed
                      </span>
                      <span>-{formatCurrency(bill.coinsDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>
                      {bill.deliveryFee === 0 ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          {isGoldMember && <Crown className="w-3 h-3 text-amber-400" />}
                          FREE {isGoldMember && <span className="line-through text-gray-500 text-[10px]">₹35</span>}
                        </span>
                      ) : (
                        <span className="text-gray-200">{formatCurrency(bill.deliveryFee)}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span className="text-gray-200">{formatCurrency(bill.platformFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST & Restaurant Taxes (5%)</span>
                    <span className="text-gray-200">{formatCurrency(bill.taxes)}</span>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between text-base font-black text-white">
                    <span>Total Amount</span>
                    <span className="text-rose-400 text-lg">
                      {formatCurrency(bill.total)}
                    </span>
                  </div>
                </div>

                {/* Place Order CTA Button */}
                <button
                  id="place-order-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 disabled:bg-gray-700 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-rose-950/80 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Processing Order...</span>
                  ) : (
                    <>
                      <span>Place Order • {formatCurrency(bill.total)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-semibold text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
