import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Users,
  Copy,
  Check,
  Plus,
  Share2,
  Calculator,
  UserCheck,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { formatCurrency } from '../../utils/formatCurrency';

export default function GroupOrderModal({ isOpen, onClose }) {
  const { currentRestaurant, cartItems, addToCart, bill } = useCart();
  const { user, showToast } = useAuth();

  const [copiedLink, setCopiedLink] = useState(false);
  const [splitMode, setSplitMode] = useState('items'); // 'items' | 'even'
  const [roomCode] = useState(() => 'CRAVE-' + Math.floor(1000 + Math.random() * 9000));

  // Simulated group members and their orders
  const [members, setMembers] = useState([
    {
      id: 'host',
      name: (user?.name || 'Sushanth') + ' (Host)',
      avatar: '👑',
      items: cartItems.length > 0 ? cartItems : [
        { name: 'Special Dum Biryani', quantity: 1, price: 320 },
      ],
      subtotal: cartItems.length > 0 ? bill.subtotal : 320,
    },
    {
      id: 'mem-1',
      name: 'Priya M.',
      avatar: '👩🏽',
      items: [
        { name: 'Paneer Butter Masala', quantity: 1, price: 280 },
        { name: 'Butter Garlic Naan (2 pcs)', quantity: 1, price: 110 },
      ],
      subtotal: 390,
    },
    {
      id: 'mem-2',
      name: 'Arun Kumar',
      avatar: '👨🏽',
      items: [
        { name: 'Tandoori Chicken Tikka', quantity: 1, price: 340 },
        { name: 'Thums Up (500ml)', quantity: 1, price: 50 },
      ],
      subtotal: 390,
    },
  ]);

  if (!isOpen) return null;

  const totalGroupSubtotal = members.reduce((sum, m) => sum + m.subtotal, 0);
  const sharedFees = 35 + 5 + Math.round(totalGroupSubtotal * 0.05); // Del + Plat + Tax
  const feePerPerson = Math.round(sharedFees / members.length);
  const totalGroupAmount = totalGroupSubtotal + sharedFees;
  const evenSplitAmount = Math.round(totalGroupAmount / members.length);

  const handleCopyLink = () => {
    const dummyUrl = `https://cravewave.in/order/group/${roomCode}`;
    navigator.clipboard?.writeText(dummyUrl);
    setCopiedLink(true);
    showToast({
      type: 'success',
      title: 'Invite Link Copied!',
      message: `Share code ${roomCode} with your friends on WhatsApp to let them add dishes.`,
    });
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleSimulateFriendItem = () => {
    const friendDishes = [
      { name: 'Garlic Cheese Naan', price: 120 },
      { name: 'Gulab Jamun (2 pcs)', price: 90 },
      { name: 'Crispy Veg Spring Rolls', price: 190 },
      { name: 'Mango Lassi Large', price: 95 },
    ];
    const randomDish = friendDishes[Math.floor(Math.random() * friendDishes.length)];

    setMembers((prev) => {
      const copy = [...prev];
      const priya = { ...copy[1] };
      priya.items = [...priya.items, { ...randomDish, quantity: 1 }];
      priya.subtotal += randomDish.price;
      copy[1] = priya;
      return copy;
    });

    showToast({
      type: 'info',
      title: 'Live Cart Updated 👥',
      message: `Priya added "${randomDish.name}" (${formatCurrency(randomDish.price)}) to the group cart!`,
    });
  };

  const handleShareSummaryWhatsApp = () => {
    let text = `*CraveWave Group Order Split (${roomCode})*\nRestaurant: ${currentRestaurant?.name || 'Paradise Royal'}\n\n`;
    members.forEach((m) => {
      const share = splitMode === 'even' ? evenSplitAmount : m.subtotal + feePerPerson;
      text += `• ${m.name}: *₹${share}*\n`;
    });
    text += `\n*Total Bill: ₹${totalGroupAmount}*\nPay your share to Sushanth via GPay/PhonePe!`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#13131B] text-white rounded-3xl shadow-2xl shadow-purple-950/40 overflow-hidden z-10 border border-purple-500/30 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-purple-950/70 via-[#181422] to-rose-950/60 border-b border-white/10 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-purple-950/50">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black font-display text-white">
                    Order Together & Split Bill
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Session
                  </span>
                </div>
                <p className="text-xs text-purple-300 font-semibold mt-0.5">
                  Ordering from {currentRestaurant?.name || 'Gourmet Kitchen'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Invite Room Code Box */}
            <div className="p-4 rounded-2xl bg-[#1A1726] border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-purple-300">Shareable Room Code</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xl font-black font-mono tracking-widest text-white">{roomCode}</span>
                  <span className="text-xs text-gray-400 font-medium">(3 Friends Joined)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 text-purple-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'Copied Link' : 'Copy Invite Link'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSimulateFriendItem}
                  className="px-3 py-2 rounded-xl bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500/50 text-rose-200 text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer"
                  title="Simulate friend adding dish in real time"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Simulate Dish</span>
                </button>
              </div>
            </div>

            {/* Split Mode Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-purple-400" />
                  <span>Choose Bill Splitting Method</span>
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSplitMode('items')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    splitMode === 'items'
                      ? 'border-purple-500 bg-purple-950/40 text-white shadow-md'
                      : 'border-white/10 bg-[#161520] text-gray-400'
                  }`}
                >
                  <p className="text-xs font-black text-white">Itemized Split (Fair)</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Each pays for what they ordered + split delivery</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSplitMode('even')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    splitMode === 'even'
                      ? 'border-purple-500 bg-purple-950/40 text-white shadow-md'
                      : 'border-white/10 bg-[#161520] text-gray-400'
                  }`}
                >
                  <p className="text-xs font-black text-white">Split Evenly ({members.length} ways)</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{formatCurrency(evenSplitAmount)} per person flat</p>
                </button>
              </div>
            </div>

            {/* Participants & Live Item Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-300">
                Group Cart Breakdown ({members.length} people)
              </h4>

              {members.map((mem) => {
                const individualShare =
                  splitMode === 'even' ? evenSplitAmount : mem.subtotal + feePerPerson;

                return (
                  <div
                    key={mem.id}
                    className="p-4 rounded-2xl bg-[#181622] border border-white/10 space-y-2.5"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{mem.avatar}</span>
                        <div>
                          <p className="text-sm font-bold text-white">{mem.name}</p>
                          <p className="text-[10px] text-gray-400">{mem.items.length} items added</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-gray-400 font-bold uppercase">To Pay</p>
                        <p className="text-sm font-black text-purple-300">
                          {formatCurrency(individualShare)}
                        </p>
                      </div>
                    </div>

                    {/* Member's individual items */}
                    <div className="space-y-1.5 pl-2">
                      {mem.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between text-xs text-gray-300">
                          <span>
                            {it.quantity}x {it.name}
                          </span>
                          <span className="font-semibold text-gray-400">
                            {formatCurrency(it.price * (it.quantity || 1))}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Grand Total Box */}
            <div className="p-4 rounded-2xl bg-[#100E17] border border-white/10 space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Total Items Value:</span>
                <span className="text-white font-semibold">{formatCurrency(totalGroupSubtotal)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Shared Delivery & Taxes:</span>
                <span className="text-white font-semibold">{formatCurrency(sharedFees)}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-extrabold text-white">
                <span>Total Group Order:</span>
                <span className="text-rose-400 text-base font-black">
                  {formatCurrency(totalGroupAmount)}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-5 border-t border-white/10 bg-[#100E17] flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleShareSummaryWhatsApp}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Share Split on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => {
                showToast({
                  type: 'success',
                  title: 'Group Cart Locked & Synced!',
                  message: 'Proceeding to checkout with combined items from all group members.',
                });
                onClose();
              }}
              className="flex-1 w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-rose-600 to-brand-600 hover:from-purple-500 hover:to-brand-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-purple-950/60 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Lock Cart & Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
