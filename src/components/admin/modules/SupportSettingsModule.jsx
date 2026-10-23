import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  LifeBuoy,
  Settings,
  Bell,
  MapPin,
  Shield,
  FileText,
  CheckCircle2,
  AlertCircle,
  Send,
  Zap,
  Sliders,
  Users,
  Lock,
  X,
  History,
} from 'lucide-react';

export default function SupportSettingsModule() {
  const {
    tickets,
    deliveryZones,
    auditLogs,
    currentAdmin,
    resolveTicket,
    updateZoneSurge,
    logAction,
  } = useAdmin();

  const [activeTab, setActiveTab] = useState('tickets'); // 'tickets' | 'zones' | 'notifications' | 'roles' | 'audit'
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Notification broadcast composer
  const [notifForm, setNotifForm] = useState({
    title: '',
    message: '',
    target: 'All Customers',
  });
  const [broadcastSent, setBroadcastSent] = useState(false);

  // Admin roles list
  const adminUsers = [
    { id: 'ADM-1', name: 'Akash Barik', email: 'akash.barik@cravewave.internal', role: 'Super Admin', permissions: 'Full Access (All Modules)' },
    { id: 'ADM-2', name: 'Priya Nair', email: 'priya.nair@cravewave.internal', role: 'Operations Lead', permissions: 'Orders, Fleet, Support, Menus' },
    { id: 'ADM-3', name: 'Vikram Seth', email: 'vikram.seth@cravewave.internal', role: 'Finance Lead', permissions: 'Payouts, Settlements, GST, Reports' },
    { id: 'ADM-4', name: 'Sneha Rao', email: 'sneha.rao@cravewave.internal', role: 'Support Agent', permissions: 'Tickets, Order Inspection, Chat Desk' },
  ];

  const handleResolveTicketSubmit = (ticketId) => {
    if (!replyText.trim()) return;
    resolveTicket(ticketId, replyText);
    setReplyText('');
    setSelectedTicket((prev) => ({
      ...prev,
      status: 'Resolved',
    }));
  };

  const handleBroadcastSubmit = (e) => {
    e.preventDefault();
    if (!notifForm.title.trim() || !notifForm.message.trim()) return;

    logAction(`Dispatched Push Notification: "${notifForm.title}"`, 'Support, Reports & Settings', `Audience: ${notifForm.target}`);
    setBroadcastSent(true);
    setNotifForm({ title: '', message: '', target: 'All Customers' });
    setTimeout(() => setBroadcastSent(false), 4000);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Support, Reports & System Governance</h2>
          <p className="text-xs text-gray-400">
            Customer dispute tickets, delivery zone dynamic pricing, admin RBAC roles, and compliance audit trail.
          </p>
        </div>
      </div>

      {/* 2. Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        {[
          { id: 'tickets', label: `Support Desk (${tickets.filter((t) => t.status !== 'Resolved').length})`, icon: LifeBuoy },
          { id: 'zones', label: 'Delivery Zones & Surge', icon: MapPin },
          { id: 'notifications', label: 'Push Broadcasts', icon: Bell },
          { id: 'roles', label: 'Admin Roles & RBAC', icon: Shield },
          { id: 'audit', label: 'System Audit Logs', icon: History },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. SUBTAB: SUPPORT TICKETS DESK */}
      {activeTab === 'tickets' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tickets list */}
          <div className="lg:col-span-1 space-y-2.5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Active Customer Inquiries & Disputes
            </h3>
            {tickets.map((tck) => (
              <div
                key={tck.id}
                onClick={() => setSelectedTicket(tck)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedTicket?.id === tck.id
                    ? 'bg-rose-500/10 border-rose-500 text-white shadow-lg'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] text-gray-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[11px] font-black text-rose-400">{tck.id}</span>
                  <span
                    className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${
                      tck.status === 'Resolved'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : tck.priority === 'Urgent' || tck.priority === 'High'
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                        : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                    }`}
                  >
                    {tck.status} ({tck.priority})
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white mb-1 truncate">{tck.subject}</h4>
                <p className="text-[11px] text-gray-400 truncate">
                  {tck.customerName} • Order #{tck.orderId}
                </p>
              </div>
            ))}
          </div>

          {/* Ticket Inspector & Reply Conversation */}
          <div className="lg:col-span-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between min-h-[380px]">
            {selectedTicket ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono font-black text-rose-400 uppercase">
                      Ticket {selectedTicket.id} • Order #{selectedTicket.orderId}
                    </span>
                    <h3 className="text-base font-black text-white mt-0.5">{selectedTicket.subject}</h3>
                    <p className="text-xs text-gray-400">
                      Opened by <span className="text-white font-bold">{selectedTicket.customerName}</span> ({selectedTicket.customerPhone})
                    </p>
                  </div>
                  <span
                    className={`text-xs font-black px-3 py-1 rounded-full border ${
                      selectedTicket.status === 'Resolved'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    {selectedTicket.status}
                  </span>
                </div>

                {/* Message Trail */}
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {selectedTicket.messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${m.sender === 'support' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-md p-3 rounded-2xl text-xs ${
                          m.sender === 'support'
                            ? 'bg-rose-600 text-white rounded-tr-none'
                            : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/10'
                        }`}
                      >
                        <p>{m.text}</p>
                        <span className="text-[9px] opacity-75 mt-1 block text-right">{m.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resolution Reply Box */}
                {selectedTicket.status !== 'Resolved' ? (
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <textarea
                      rows="2"
                      placeholder="Type resolution statement or action details to solve ticket..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
                    />
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleResolveTicketSubmit(selectedTicket.id)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Resolve & Close Ticket
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> This dispute ticket has been successfully resolved.
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-12 text-gray-400">
                <LifeBuoy className="w-12 h-12 text-gray-600 mb-3" />
                <p className="font-bold text-white text-sm">Select a ticket to inspect</p>
                <p className="text-xs text-gray-500 mt-1">Review customer claim, timeline, and issue resolutions.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. SUBTAB: DELIVERY ZONES & DYNAMIC SURGE */}
      {activeTab === 'zones' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-white">Geofenced Delivery Hubs & Surge Pricing</h3>
              <p className="text-xs text-gray-400">Adjust dynamic peak multipliers to balance supply & demand</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliveryZones.map((zone) => (
              <div
                key={zone.id}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-black text-white">{zone.name}</h4>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                        zone.surgeMultiplier > 1.0
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      }`}
                    >
                      {zone.status} ({zone.surgeMultiplier}x)
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-400">
                    <div className="flex justify-between">
                      <span>Active Riders:</span>
                      <span className="font-bold text-white">{zone.activeRiders} bikes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Orders in Transit:</span>
                      <span className="font-bold text-sky-400">{zone.ordersInFlight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Base Delivery Charge:</span>
                      <span className="font-bold text-white">₹{zone.baseFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Transit SLA:</span>
                      <span className="font-bold text-emerald-400">{zone.avgDeliveryTime}</span>
                    </div>
                  </div>
                </div>

                {/* Surge Slider Controller */}
                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-bold">Surge Pricing:</span>
                    <span className="font-mono font-black text-amber-300">{zone.surgeMultiplier}x Base</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1.0, 1.2, 1.4].map((mult) => (
                      <button
                        key={mult}
                        onClick={() => updateZoneSurge(zone.id, mult)}
                        className={`flex-1 py-1 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                          zone.surgeMultiplier === mult
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        {mult}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. SUBTAB: PUSH NOTIFICATIONS BROADCASTER */}
      {activeTab === 'notifications' && (
        <div className="max-w-xl p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div>
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Bell className="w-5 h-5 text-rose-400" /> Platform Instant Notification Broadcast
            </h3>
            <p className="text-xs text-gray-400">Send push announcements directly to customer & fleet app devices</p>
          </div>

          {broadcastSent && (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4" /> Broadcast successfully queued for 28,950 registered devices!
            </div>
          )}

          <form onSubmit={handleBroadcastSubmit} className="space-y-3 text-xs">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase">Target Audience</label>
              <select
                value={notifForm.target}
                onChange={(e) => setNotifForm({ ...notifForm, target: e.target.value })}
                className="w-full mt-1 p-2.5 bg-[#14141E] border border-white/10 rounded-xl font-bold text-white focus:border-rose-500 outline-none"
              >
                <option value="All Customers">All Registered Customers (28,950)</option>
                <option value="Gold VIP Members">CraveWave Gold VIP Members (4,120)</option>
                <option value="Delivery Partners">Active Delivery Partners (142)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase">Notification Heading</label>
              <input
                type="text"
                required
                placeholder="e.g. 🌧️ Heavy Rain Surge in Bengaluru — Free Hot Soup Offer!"
                value={notifForm.title}
                onChange={(e) => setNotifForm({ ...notifForm, title: e.target.value })}
                className="w-full mt-1 p-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase">Body Message</label>
              <textarea
                rows="3"
                required
                placeholder="Message payload displayed on locked screen notifications..."
                value={notifForm.message}
                onChange={(e) => setNotifForm({ ...notifForm, message: e.target.value })}
                className="w-full mt-1 p-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-rose-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-brand-600 hover:from-rose-500 hover:to-brand-500 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" /> Broadcast Push Notification
            </button>
          </form>
        </div>
      )}

      {/* 6. SUBTAB: ADMIN ROLES & RBAC MATRIX */}
      {activeTab === 'roles' && (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-white">Admin Team Roles & Permissions (RBAC)</h3>
              <p className="text-xs text-gray-400">Role-based access security controls and cryptographic audit checks</p>
            </div>
            <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Active Session: {currentAdmin.name} ({currentAdmin.role})
            </span>
          </div>

          <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden">
            {adminUsers.map((u) => (
              <div key={u.id} className="p-3.5 flex items-center justify-between gap-3 text-xs bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-rose-600 flex items-center justify-center font-black text-white">
                    {u.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-white">{u.name}</p>
                    <p className="text-[10px] text-gray-400">{u.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                      {u.role}
                    </span>
                    <p className="text-[10px] text-gray-400 mt-1">{u.permissions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. SUBTAB: IMMUTABLE AUDIT LOGS */}
      {activeTab === 'audit' && (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden p-5 space-y-4">
          <div>
            <h3 className="text-base font-black text-white">System Compliance & Governance Audit Logs</h3>
            <p className="text-xs text-gray-400">Cryptographically ordered event log of all administrative operations</p>
          </div>

          <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden">
            {auditLogs.map((log) => (
              <div key={log.id} className="p-3 flex items-center justify-between gap-3 text-xs bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  <div>
                    <p className="font-bold text-white">
                      {log.action} <span className="text-[10px] text-gray-400 font-normal">in {log.module}</span>
                    </p>
                    <p className="text-[11px] text-gray-400">{log.details}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] text-gray-300 font-bold">{log.admin}</span>
                  <p className="text-[10px] text-gray-500">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
