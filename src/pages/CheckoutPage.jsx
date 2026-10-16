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
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { formatCurrency } from '../utils/formatCurrency';
import confetti from 'canvas-confetti';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, currentRestaurant, bill, clearCart } = useCart();
  const { placeOrder } = useOrders();

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    phone: '+91 98765 43210',
    street: 'Flat 402, Sai Orchid Residency, 12th Main Road, 4th Block',
    city: 'Koramangala, Bengaluru, Karnataka',
    zip: '560034',
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
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-bold shadow-md"
        >
          Explore Restaurants
        </Link>
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

    const paymentLabelMap = {
      card: 'Debit / Credit Card (RuPay/Visa)',
      upi: `Instant UPI (${upiId})`,
      cod: 'Cash on Delivery (Pay on Delivery)',
      netbanking: 'Net Banking (SBI/HDFC/ICICI)',
    };

    setTimeout(() => {
      const order = placeOrder({
        items: cartItems,
        restaurant: currentRestaurant,
        bill,
        deliveryAddress: {
          fullName: formData.fullName,
          street: formData.street,
          city: formData.city,
          zip: formData.zip,
          phone: formData.phone,
        },
        paymentMethod: paymentLabelMap[paymentMethod] || 'Credit Card',
        deliveryInstructions: formData.instructions,
      });

      // Fire celebratory confetti!
      try {
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Secure Checkout
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Complete your delivery details and choose a preferred payment method
        </p>
      </div>

      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Form: Address & Payment */}
          <div className="lg:col-span-7 space-y-6">
            {/* Delivery Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-base">
                  1. Delivery Address
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Contact Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl border ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/50' : 'border-gray-200'
                    } focus:outline-none focus:border-brand-500`}
                    placeholder="E.g. Alex Vance"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-600 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl border ${
                      errors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-gray-200'
                    } focus:outline-none focus:border-brand-500`}
                    placeholder="E.g. +1 555-019-2831"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-600 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Street Address & House / Apartment *
                  </label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={(e) =>
                      setFormData({ ...formData, street: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl border ${
                      errors.street ? 'border-rose-500 bg-rose-50/50' : 'border-gray-200'
                    } focus:outline-none focus:border-brand-500`}
                    placeholder="Apartment, suite, unit, building, floor, etc."
                  />
                  {errors.street && (
                    <span className="text-[11px] text-rose-600 mt-1 block">
                      {errors.street}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl border ${
                      errors.city ? 'border-rose-500 bg-rose-50/50' : 'border-gray-200'
                    } focus:outline-none focus:border-brand-500`}
                    placeholder="E.g. Bengaluru, Karnataka"
                  />
                  {errors.city && (
                    <span className="text-[11px] text-rose-600 mt-1 block">
                      {errors.city}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    PIN Code (6 Digits) *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl border ${
                      errors.zip ? 'border-rose-500 bg-rose-50/50' : 'border-gray-200'
                    } focus:outline-none focus:border-brand-500`}
                    placeholder="560034"
                  />
                  {errors.zip && (
                    <span className="text-[11px] text-rose-600 mt-1 block">
                      {errors.zip}
                    </span>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Delivery Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.instructions}
                    onChange={(e) =>
                      setFormData({ ...formData, instructions: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500"
                    placeholder="E.g. Leave with building security, call upon reaching..."
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-base">
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
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all active:scale-95 ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50/70 text-brand-700 shadow-sm'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
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
                <div className="p-4 bg-gray-50 rounded-2xl space-y-3 mt-4 border border-gray-100">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardData.cardNumber}
                      onChange={(e) =>
                        setCardData({ ...cardData, cardNumber: e.target.value })
                      }
                      className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-brand-500"
                    />
                    {errors.cardNumber && (
                      <span className="text-[10px] text-rose-600 mt-0.5 block">
                        {errors.cardNumber}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardData.cardExpiry}
                        onChange={(e) =>
                          setCardData({ ...cardData, cardExpiry: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">
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
                        className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="p-4 bg-gray-50 rounded-2xl space-y-2 mt-4 border border-gray-100">
                  <label className="block text-[11px] font-bold text-gray-700">
                    Enter Virtual Payment Address (UPI ID)
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="e.g. rahul@okhdfcbank or 9876543210@paytm"
                    className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-brand-500"
                  />
                  {errors.upiId && (
                    <span className="text-[10px] text-rose-600 block">
                      {errors.upiId}
                    </span>
                  )}
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="p-4 bg-amber-50 rounded-2xl text-xs text-amber-900 border border-amber-200">
                  <strong>Cash on Delivery (Pay on Delivery):</strong> Keep exact cash ready or scan the delivery executive's UPI QR code upon arrival.
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="p-4 bg-gray-50 rounded-2xl text-xs text-gray-700 border border-gray-200">
                  Supports SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak, and all major Indian banking portals.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Review */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft space-y-4 sticky top-28">
              <h3 className="font-extrabold text-gray-900 text-base pb-3 border-b border-gray-100">
                Order Review
              </h3>

              {/* Restaurant summary */}
              {currentRestaurant && (
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                  <img
                    src={currentRestaurant.image}
                    alt={currentRestaurant.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-xs font-extrabold text-gray-900">
                      {currentRestaurant.name}
                    </div>
                    <div className="text-[11px] text-gray-500">
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
                      <span className="font-bold text-brand-600">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-800 font-semibold truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-bold text-gray-900 flex-shrink-0">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bill Details */}
              <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(bill.subtotal)}</span>
                </div>
                {bill.discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount</span>
                    <span>-{formatCurrency(bill.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>
                    {bill.deliveryFee === 0 ? 'FREE' : formatCurrency(bill.deliveryFee)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>{formatCurrency(bill.platformFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (8%)</span>
                  <span>{formatCurrency(bill.taxes)}</span>
                </div>

                <div className="pt-3 border-t border-gray-200 flex justify-between text-base font-black text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-brand-600 text-lg">
                    {formatCurrency(bill.total)}
                  </span>
                </div>
              </div>

              {/* Place Order CTA Button */}
              <button
                id="place-order-button"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 disabled:bg-gray-400 text-white font-black text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
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

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-700 font-semibold text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>256-Bit Encrypted Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
