import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  Users,
  Search,
  Crown,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Eye,
  ShoppingBag,
  MapPin,
  Phone,
  Mail,
  IndianRupee,
  RotateCcw,
  Star,
  X,
  AlertTriangle,
} from 'lucide-react';

export default function CustomerManagementModule() {
  const { customers, updateCustomerStatus } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState('All');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = customers.filter((cust) => {
    if (tierFilter === 'Gold' && !cust.isGold) return false;
    if (tierFilter === 'Regular' && cust.isGold) return false;
    if (tierFilter === 'Suspended' && cust.status !== 'Suspended') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        cust.name.toLowerCase().includes(q) ||
        cust.email.toLowerCase().includes(q) ||
        cust.phone.includes(q) ||
        cust.address.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const goldCount = customers.filter((c) => c.isGold).length;

  return (
    <div className="space-y-6">
      {/* 1. Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Customer Management</h2>
          <p className="text-xs text-gray-400">
            Manage user directory, Gold VIP loyalty tier, dispute/refund records, and account security.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Customer, Email, Phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
          />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Registered</span>
          <p className="text-2xl font-black text-white mt-1">28,950</p>
          <span className="text-[10px] text-emerald-400 font-bold">+24% month-on-month</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">CraveWave Gold VIP</span>
          <p className="text-2xl font-black text-amber-300 mt-1 flex items-center gap-1.5">
            <Crown className="w-5 h-5 fill-amber-300" /> 4,120
          </p>
          <span className="text-[10px] text-amber-200">3.4x higher average order value</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Repeat Retention</span>
          <p className="text-2xl font-black text-purple-400 mt-1">42.8%</p>
          <span className="text-[10px] text-gray-400">Industry benchmark: 31%</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Dispute Rate</span>
          <p className="text-2xl font-black text-emerald-400 mt-1">0.14%</p>
          <span className="text-[10px] text-gray-400">Extremely low fraud index</span>
        </div>
      </div>

      {/* 2. Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {['All', 'Gold', 'Regular', 'Suspended'].map((t) => (
          <button
            key={t}
            onClick={() => setTierFilter(t)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tierFilter === t
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {t === 'All' ? 'All Customers' : t === 'Gold' ? 'Gold VIP Only' : t}
          </button>
        ))}
      </div>

      {/* 3. Customers Master Table */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.03] text-gray-400 font-bold uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-4 py-3">Customer Profile</th>
                <th className="px-4 py-3">Contact & Address</th>
                <th className="px-4 py-3">Orders & Spend</th>
                <th className="px-4 py-3">Tier Status</th>
                <th className="px-4 py-3">Refund History</th>
                <th className="px-4 py-3">Account Status</th>
                <th className="px-4 py-3 text-right">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {filteredCustomers.map((cust) => (
                <tr key={cust.id} className="hover:bg-white/[0.02] transition-colors">
                  {/* Name & ID */}
                  <td className="px-4 py-3">
                    <p className="font-black text-white">{cust.name}</p>
                    <span className="text-[10px] text-gray-500 font-mono">ID: {cust.id}</span>
                  </td>

                  {/* Contact */}
                  <td className="px-4 py-3">
                    <p className="text-gray-200">{cust.phone}</p>
                    <p className="text-[10px] text-gray-400">{cust.email}</p>
                    <p className="text-[10px] text-gray-500 truncate max-w-[180px] mt-0.5">{cust.address}</p>
                  </td>

                  {/* Orders & Spend */}
                  <td className="px-4 py-3">
                    <p className="font-extrabold text-white">₹{cust.totalSpent.toLocaleString()}</p>
                    <p className="text-[10px] text-gray-400">{cust.ordersCount} total orders</p>
                  </td>

                  {/* Tier */}
                  <td className="px-4 py-3">
                    {cust.isGold ? (
                      <span className="inline-flex items-center gap-1 font-black text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30 text-[10px]">
                        <Crown className="w-3 h-3 fill-amber-300" /> GOLD VIP
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                        Regular
                      </span>
                    )}
                  </td>

                  {/* Refund History */}
                  <td className="px-4 py-3">
                    {cust.refundCount > 0 ? (
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {cust.refundCount} claim(s)
                      </span>
                    ) : (
                      <span className="text-[10px] text-emerald-400 font-semibold">Clean (0 claims)</span>
                    )}
                  </td>

                  {/* Account Status */}
                  <td className="px-4 py-3">
                    <select
                      value={cust.status}
                      onChange={(e) => updateCustomerStatus(cust.id, e.target.value)}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-black border bg-[#14141C] cursor-pointer focus:outline-none ${
                        cust.status === 'Active'
                          ? 'text-emerald-400 border-emerald-500/30'
                          : cust.status === 'Suspended'
                          ? 'text-rose-400 border-rose-500/30'
                          : 'text-amber-400 border-amber-500/30'
                      }`}
                    >
                      <option value="Active">Active</option>
                      <option value="Warned">Warned</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setSelectedCustomer(cust)}
                      className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1 font-bold"
                    >
                      <Eye className="w-3.5 h-3.5 text-rose-400" />
                      <span>Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Customer Details Profile Drawer */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-xl bg-[#121218] border border-white/15 rounded-3xl shadow-2xl p-5 sm:p-6 text-white space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center font-black text-base text-white">
                  {selectedCustomer.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-base font-black flex items-center gap-2">
                    {selectedCustomer.name}
                    {selectedCustomer.isGold && (
                      <span className="text-[10px] font-black text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                        GOLD CLUB VIP
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-gray-400">Member since {selectedCustomer.joinedDate}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 text-[10px]">Total Orders</span>
                <p className="text-base font-black text-white mt-0.5">{selectedCustomer.ordersCount}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 text-[10px]">Total Spent</span>
                <p className="text-base font-black text-emerald-400 mt-0.5">₹{selectedCustomer.totalSpent.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 text-[10px]">Refund Claims</span>
                <p className="text-base font-black text-amber-300 mt-0.5">{selectedCustomer.refundCount}</p>
              </div>
            </div>

            {/* Contact & Primary Delivery Destination */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Primary Delivery Address</span>
              <p className="text-gray-200 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{selectedCustomer.address}</span>
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-gray-400">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-rose-400" /> {selectedCustomer.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-sky-400" /> {selectedCustomer.email}</span>
              </div>
            </div>

            {/* Security Status Changer */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-gray-400">Account Access Privilege:</span>
                <span className={selectedCustomer.status === 'Active' ? 'text-emerald-400 font-black' : 'text-rose-400 font-black'}>
                  {selectedCustomer.status}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => {
                    updateCustomerStatus(selectedCustomer.id, 'Active');
                    setSelectedCustomer((prev) => ({ ...prev, status: 'Active' }));
                  }}
                  className="flex-1 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs border border-emerald-500/30 cursor-pointer"
                >
                  Activate
                </button>
                <button
                  onClick={() => {
                    updateCustomerStatus(selectedCustomer.id, 'Suspended');
                    setSelectedCustomer((prev) => ({ ...prev, status: 'Suspended' }));
                  }}
                  className="flex-1 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-bold text-xs border border-rose-500/30 cursor-pointer"
                >
                  Suspend Account
                </button>
              </div>
            </div>

            <button
              onClick={() => setSelectedCustomer(null)}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-all cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
