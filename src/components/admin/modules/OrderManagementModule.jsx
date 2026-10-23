import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Bike,
  XCircle,
  RotateCcw,
  Eye,
  UserCheck,
  ChevronRight,
  Receipt,
  Phone,
  MapPin,
  IndianRupee,
  AlertCircle,
  X,
} from 'lucide-react';

export default function OrderManagementModule() {
  const { orders, deliveryPartners, updateOrderStatus, processOrderRefund } = useAdmin();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showRiderAssignModal, setShowRiderAssignModal] = useState(false);
  const [selectedRiderId, setSelectedRiderId] = useState('');

  // Filter options
  const filterTabs = [
    { id: 'All', label: 'All Orders', count: orders.length },
    { id: 'Pending', label: 'Pending', count: orders.filter((o) => o.status === 'Pending Confirmation').length },
    { id: 'Confirmed', label: 'Confirmed & Prep', count: orders.filter((o) => o.status === 'Kitchen Preparing Food' || o.status === 'Order Confirmed').length },
    { id: 'Active', label: 'Active Deliveries', count: orders.filter((o) => o.status === 'Out for Delivery').length },
    { id: 'Delivered', label: 'Delivered', count: orders.filter((o) => o.status === 'Delivered').length },
    { id: 'Refunds', label: 'Refund Requests', count: orders.filter((o) => o.status === 'Refund Requested' || o.status === 'Refunded').length },
  ];

  const filteredOrders = orders.filter((ord) => {
    // Tab filter
    if (activeFilter === 'Pending' && ord.status !== 'Pending Confirmation') return false;
    if (activeFilter === 'Confirmed' && ord.status !== 'Kitchen Preparing Food' && ord.status !== 'Order Confirmed') return false;
    if (activeFilter === 'Active' && ord.status !== 'Out for Delivery') return false;
    if (activeFilter === 'Delivered' && ord.status !== 'Delivered') return false;
    if (activeFilter === 'Refunds' && ord.status !== 'Refund Requested' && ord.status !== 'Refunded') return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchId = ord.id?.toLowerCase().includes(q);
      const matchRest = ord.restaurantName?.toLowerCase().includes(q);
      const matchCust = ord.customer?.name?.toLowerCase().includes(q);
      const matchPhone = ord.customer?.phone?.toLowerCase().includes(q);
      return matchId || matchRest || matchCust || matchPhone;
    }
    return true;
  });

  const handleAssignRiderSubmit = () => {
    if (!selectedOrder || !selectedRiderId) return;
    updateOrderStatus(selectedOrder.id, 'Out for Delivery', selectedRiderId);
    setShowRiderAssignModal(false);
    setSelectedRiderId('');
    // refresh selected order
    setSelectedOrder((prev) => ({
      ...prev,
      status: 'Out for Delivery',
      assignedPartner: selectedRiderId,
    }));
  };

  return (
    <div className="space-y-6">
      {/* 1. Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Order Management</h2>
          <p className="text-xs text-gray-400">
            Dispatch, monitor order journeys, assign delivery executives, and handle refund claims.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Order ID, Customer, Phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
          />
        </div>
      </div>

      {/* 2. Filter Navigation Pills */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                activeFilter === tab.id ? 'bg-white text-rose-600' : 'bg-white/10 text-gray-300'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* 3. Orders Master Table / Grid */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.03] text-gray-400 font-bold uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-4 py-3">Order Details</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Restaurant</th>
                <th className="px-4 py-3">Amount & Payment</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Delivery Partner</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-4 py-12 text-center text-gray-500">
                    No orders matching the current filter or search criteria.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-white/[0.02] transition-colors">
                    {/* Order ID & Date */}
                    <td className="px-4 py-3 font-mono">
                      <span className="font-black text-rose-400">#{ord.id}</span>
                      <p className="text-[10px] text-gray-500 font-sans mt-0.5">
                        {new Date(ord.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </td>

                    {/* Customer */}
                    <td className="px-4 py-3">
                      <p className="font-bold text-white">{ord.customer?.name || 'Customer'}</p>
                      <p className="text-[11px] text-gray-400">{ord.customer?.phone || '+91 98450 XXXXX'}</p>
                    </td>

                    {/* Restaurant */}
                    <td className="px-4 py-3">
                      <p className="font-bold text-gray-200 truncate max-w-[160px]">{ord.restaurantName}</p>
                      <p className="text-[10px] text-gray-400">{ord.items?.length || 1} items</p>
                    </td>

                    {/* Amount & Mode */}
                    <td className="px-4 py-3">
                      <p className="font-extrabold text-white">₹{ord.payment?.amount || 480}</p>
                      <p className="text-[10px] text-emerald-400 font-bold">{ord.payment?.method || 'UPI'}</p>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black border ${
                          ord.status === 'Delivered'
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                            : ord.status === 'Out for Delivery'
                            ? 'bg-sky-500/10 text-sky-300 border-sky-500/20'
                            : ord.status === 'Kitchen Preparing Food'
                            ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                            : ord.status === 'Refund Requested'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                            : ord.status === 'Refunded'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                            : 'bg-white/10 text-gray-300 border-white/20'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {ord.status}
                      </span>
                    </td>

                    {/* Rider */}
                    <td className="px-4 py-3">
                      {ord.assignedPartner ? (
                        <div>
                          <p className="font-bold text-white flex items-center gap-1">
                            <Bike className="w-3 h-3 text-sky-400" /> {ord.partnerName}
                          </p>
                          <p className="text-[10px] text-gray-400">{ord.partnerPhone}</p>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedOrder(ord);
                            setShowRiderAssignModal(true);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-[10px] font-bold transition-all cursor-pointer"
                        >
                          + Assign Rider
                        </button>
                      )}
                    </td>

                    {/* Quick Actions */}
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setSelectedOrder(ord)}
                        className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-bold transition-all inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-rose-400" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Order Details Inspector Modal / Drawer */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-2xl bg-[#121218] border border-white/15 rounded-3xl shadow-2xl p-5 sm:p-6 text-white max-h-[90vh] overflow-y-auto space-y-5">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-mono font-black">
                  #{selectedOrder.id.split('-')[1]}
                </div>
                <div>
                  <h3 className="text-base font-black">Order #{selectedOrder.id}</h3>
                  <p className="text-xs text-gray-400">Placed on {new Date(selectedOrder.date).toLocaleString()}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Current Status & Progression Controller */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 uppercase">Live Lifecycle Status</span>
                <span className="text-xs font-black text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                  {selectedOrder.status}
                </span>
              </div>

              {/* Status advancement buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
                <button
                  onClick={() => updateOrderStatus(selectedOrder.id, 'Kitchen Preparing Food')}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold cursor-pointer transition-all"
                >
                  Accept & Start Kitchen
                </button>
                <button
                  onClick={() => {
                    setShowRiderAssignModal(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 text-xs font-bold cursor-pointer transition-all"
                >
                  Assign Delivery Partner
                </button>
                <button
                  onClick={() => updateOrderStatus(selectedOrder.id, 'Delivered')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold cursor-pointer transition-all"
                >
                  Mark as Delivered
                </button>
                <button
                  onClick={() => updateOrderStatus(selectedOrder.id, 'Cancelled')}
                  className="px-3 py-1.5 rounded-xl bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 border border-gray-500/30 text-xs font-bold cursor-pointer transition-all"
                >
                  Cancel Order
                </button>
              </div>

              {/* Refund Request Section if flagged */}
              {(selectedOrder.status === 'Refund Requested' || selectedOrder.refundReason) && (
                <div className="mt-3 p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-300">
                    <span className="flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 text-rose-400" /> Customer Refund Claim
                    </span>
                    <span>Reason: {selectedOrder.refundReason || 'Cold food/delay'}</span>
                  </div>
                  {selectedOrder.status !== 'Refunded' ? (
                    <button
                      onClick={() => {
                        processOrderRefund(selectedOrder.id, selectedOrder.payment?.amount || 480);
                        setSelectedOrder((prev) => ({ ...prev, status: 'Refunded' }));
                      }}
                      className="w-full py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Approve Full Instant Refund (₹{selectedOrder.payment?.amount || 480})
                    </button>
                  ) : (
                    <p className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Refund of ₹{selectedOrder.refundAmount || selectedOrder.payment?.amount} processed successfully.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Customer & Address Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Customer Details</span>
                <p className="text-sm font-black text-white">{selectedOrder.customer?.name || 'Customer'}</p>
                <p className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-rose-400" /> {selectedOrder.customer?.phone || '+91 98450 XXXXX'}
                </p>
                <p className="text-xs text-gray-400 flex items-start gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{selectedOrder.customer?.address || 'Koramangala 4th Block, Bengaluru'}</span>
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Assigned Delivery Fleet</span>
                {selectedOrder.assignedPartner ? (
                  <>
                    <p className="text-sm font-black text-sky-400 flex items-center gap-1.5">
                      <Bike className="w-4 h-4" /> {selectedOrder.partnerName}
                    </p>
                    <p className="text-xs text-gray-300">Phone: {selectedOrder.partnerPhone}</p>
                    <p className="text-xs text-emerald-400 font-semibold">Live GPS: Signal Strong • Transit on schedule</p>
                  </>
                ) : (
                  <p className="text-xs text-amber-400 font-bold">No rider assigned yet. Dispatch required.</p>
                )}
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ordered Menu Items</h4>
              <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
                {selectedOrder.items?.map((it, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">
                        {it.quantity}x {it.name}
                      </p>
                      {it.customization && (
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {it.customization.size} • {it.customization.spiceLevel || it.customization.addOns?.join(', ')}
                        </p>
                      )}
                    </div>
                    <span className="font-extrabold text-white">₹{it.price * it.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Summary */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Payment Breakdown</span>
                <p className="text-sm font-black text-white mt-0.5">Grand Total: ₹{selectedOrder.payment?.amount || 480}</p>
                <p className="text-[11px] text-gray-400">Method: {selectedOrder.payment?.method} ({selectedOrder.payment?.status})</p>
              </div>
              <div className="text-right font-mono text-[11px] text-gray-400">
                <p>TXN ID: {selectedOrder.payment?.transactionId || 'TXN_LOCAL_001'}</p>
                <p className="text-emerald-400 font-bold">Platform Fee: ₹45 Captured</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Rider Assignment Modal */}
      {showRiderAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#161622] border border-white/20 rounded-3xl p-5 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black flex items-center gap-2">
                <Bike className="w-5 h-5 text-sky-400" /> Assign Delivery Partner
              </h3>
              <button
                onClick={() => setShowRiderAssignModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-300">
              Select an active delivery partner near <span className="text-white font-bold">{selectedOrder?.restaurantName}</span>:
            </p>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {deliveryPartners
                .filter((p) => p.status === 'Online' || p.status === 'Busy')
                .map((rider) => (
                  <div
                    key={rider.id}
                    onClick={() => setSelectedRiderId(rider.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      selectedRiderId === rider.id
                        ? 'bg-sky-500/20 border-sky-400 text-white'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-black text-white">{rider.name}</p>
                      <p className="text-[10px] text-gray-400">{rider.vehicle} • {rider.currentLocation}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                        ★ {rider.rating}
                      </span>
                      <p className="text-[10px] text-gray-400 mt-1">{rider.deliveriesToday} done today</p>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={handleAssignRiderSubmit}
              disabled={!selectedRiderId}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:opacity-50 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" /> Confirm & Dispatch Partner
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
