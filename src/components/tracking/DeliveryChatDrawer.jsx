import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Phone,
  ShieldCheck,
  Bike,
  Sparkles,
  CheckCheck,
  BellRing,
  Volume2,
} from 'lucide-react';

const QUICK_INSTRUCTIONS = [
  '🚪 Leave at door',
  '🔔 Ring doorbell twice',
  '🤫 Please don’t ring bell',
  '📞 Call when at gate',
  '🛡️ Leave with building security',
];

export default function DeliveryChatDrawer({
  isOpen,
  onClose,
  driver,
  restaurantName,
}) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize conversation with welcome greeting from rider
  useEffect(() => {
    if (isOpen && driver && messages.length === 0) {
      setMessages([
        {
          id: 'msg-init-1',
          sender: 'driver',
          text: `Namaste! I've secured your hot order from ${restaurantName || 'the restaurant'} and I'm on my way.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        {
          id: 'msg-init-2',
          sender: 'driver',
          text: 'Feel free to send any landmark or gate instructions here!',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [isOpen, driver, restaurantName, messages.length]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  if (!isOpen || !driver) return null;

  const handleSend = (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Realistic smart response from rider after 1.5s
    setTimeout(() => {
      setIsTyping(false);
      let replyText = 'Got it! Following your delivery instructions carefully.';

      const lower = text.toLowerCase();
      if (lower.includes('door') || lower.includes('leave at door')) {
        replyText = 'Understood! I will safely place your parcel at the door.';
      } else if (lower.includes('ring') || lower.includes('bell')) {
        replyText = 'Noted! I will ring the bell twice right upon arrival.';
      } else if (lower.includes('gate') || lower.includes('call')) {
        replyText = 'Will do! Calling you as soon as I reach the main gate.';
      } else if (lower.includes('security')) {
        replyText = 'Noted! Handing over to your building security desk with order ID.';
      } else if (lower.includes('hot') || lower.includes('fast') || lower.includes('hurry')) {
        replyText = 'Rest assured, your food is inside the insulated thermal box and staying piping hot!';
      } else {
        replyText = 'Understood, sir! Reaching your delivery pin in just a few minutes.';
      }

      const driverMsg = {
        id: 'msg-reply-' + Date.now(),
        sender: 'driver',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, driverMsg]);
    }, 1400);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Chat Window Panel */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg h-[85vh] sm:h-[620px] bg-[#14141C] border-t sm:border border-white/15 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-white"
          >
            {/* Chat Header */}
            <div className="px-5 py-4 border-b border-white/10 bg-[#161622] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={driver.avatar}
                    alt={driver.name}
                    className="w-11 h-11 rounded-2xl object-cover border-2 border-rose-500/50"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#14141C] rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold font-display text-white">
                      {driver.name}
                    </h3>
                    <span className="text-[10px] font-black bg-rose-950/70 text-rose-300 border border-rose-500/30 px-1.5 py-0.5 rounded-md flex items-center gap-1">
                      <Bike className="w-3 h-3" />
                      Rider
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>On Delivery Route • {driver.vehicle}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <a
                  href={`tel:${driver.phone}`}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
                  title="Call Rider"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Delivery Instruction Chips */}
            <div className="px-4 py-2.5 bg-black/40 border-b border-white/10 flex-shrink-0 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 w-max">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Quick:
                </span>
                {QUICK_INSTRUCTIONS.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(chip)}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-rose-950/60 border border-white/10 hover:border-rose-500/40 text-gray-300 hover:text-rose-300 text-[11px] font-semibold whitespace-nowrap transition-all active:scale-95 cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Feed */}
            <div className="flex-1 p-4 space-y-3.5 overflow-y-auto bg-[#0F0F16]">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs font-medium leading-relaxed shadow-md ${
                        isUser
                          ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-tr-xs'
                          : 'bg-[#1C1C26] border border-white/10 text-gray-200 rounded-tl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-500 px-1 font-mono">
                      <span>{msg.time}</span>
                      {isUser && <CheckCheck className="w-3 h-3 text-rose-400" />}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator from rider */}
              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-gray-400 bg-[#1C1C26] border border-white/10 px-3.5 py-2 rounded-2xl rounded-tl-xs w-max">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    />
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {driver.name} is typing...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#161622] border-t border-white/10 flex items-center gap-2 flex-shrink-0"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={`Message ${driver.name.split(' ')[0]}...`}
                className="flex-1 px-4 py-2.5 rounded-2xl bg-[#1C1C26] border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="w-10 h-10 rounded-2xl bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 disabled:opacity-40 disabled:pointer-events-none text-white flex items-center justify-center transition-all shadow-md shadow-rose-950/60 active:scale-95 cursor-pointer"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
