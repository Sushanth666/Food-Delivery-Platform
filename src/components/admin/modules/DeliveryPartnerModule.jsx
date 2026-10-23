import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  Bike,
  Search,
  Star,
  CheckCircle2,
  XCircle,
  FileCheck,
  MapPin,
  Phone,
  IndianRupee,
  ShieldCheck,
  Clock,
  Eye,
  Navigation,
  X,
} from 'lucide-react';

export default function DeliveryPartnerModule() {
  const { deliveryPartners, togglePartnerOnline, verifyPartnerDocument } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [viewDocsPartner, setViewDocsPartner] = useState(null);

  const filteredPartners = deliveryPartners.filter((p) => {
    if (statusFilter !== 'All' && p.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.phone.includes(q) ||
        p.vehicle.toLowerCase().includes(q) ||
        p.currentLocation.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const onlineCount = deliveryPartners.filter((p) => p.status === 'Online').length;
  const busyCount = deliveryPartners.filter((p) => p.status === 'Busy').length;

  return (
    <div className="space-y-6">
      {/* 1. Header & KPI Cards */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Delivery Partner Management</h2>
          <p className="text-xs text-gray-400">
            Monitor real-time fleet activity, verify partner IDs & vehicle RCs, and audit payouts.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Rider, Phone, Vehicle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
          />
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Fleet</span>
          <p className="text-2xl font-black text-white mt-1">{deliveryPartners.length} Riders</p>
          <span className="text-[10px] text-emerald-400 font-bold">100% Background Checked</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Online & Standby</span>
          <p className="text-2xl font-black text-emerald-400 mt-1">{onlineCount} Ready</p>
          <span className="text-[10px] text-gray-400">Avg 4 mins dispatch latency</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">In-Flight / Busy</span>
          <p className="text-2xl font-black text-sky-400 mt-1">{busyCount} On Trip</p>
          <span className="text-[10px] text-sky-300">Live GPS tracking active</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fleet Satisfaction</span>
          <p className="text-2xl font-black text-amber-300 mt-1">★ 4.84</p>
          <span className="text-[10px] text-gray-400">From 14,200 customer ratings</span>
        </div>
      </div>

      {/* 2. Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {['All', 'Online', 'Busy', 'Offline'].map((st) => (
          <button
            key={st}
            onClick={() => setStatusFilter(st)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              statusFilter === st
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {st === 'All' ? 'All Partners' : `${st} Fleet`}
          </button>
        ))}
      </div>

      {/* 3. Delivery Partners Table */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.03] text-gray-400 font-bold uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-4 py-3">Partner Profile</th>
                <th className="px-4 py-3">Vehicle Details</th>
                <th className="px-4 py-3">Location & Trip</th>
                <th className="px-4 py-3">Rating & Deliveries</th>
                <th className="px-4 py-3">Today's Earnings</th>
                <th className="px-4 py-3">KYC Verification</th>
                <th className="px-4 py-3">Duty Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {filteredPartners.map((rider) => (
                <tr key={rider.id} className="hover:bg-white/[0.02] transition-colors">
                  {/* Name */}
                  <td className="px-4 py-3">
                    <p className="font-black text-white">{rider.name}</p>
                    <p className="text-[10px] text-gray-400 font-mono">{rider.phone}</p>
                    <span className="text-[9px] text-gray-500">ID: {rider.id}</span>
                  </td>

                  {/* Vehicle */}
                  <td className="px-4 py-3">
                    <p className="font-bold text-gray-200">{rider.vehicle}</p>
                    <p className="text-[10px] font-mono text-gray-400">{rider.vehicleNumber}</p>
                  </td>

                  {/* Location & Active order */}
                  <td className="px-4 py-3">
                    <p className="text-gray-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                      <span className="truncate max-w-[140px]">{rider.currentLocation}</span>
                    </p>
                    {rider.currentOrder ? (
                      <span className="text-[10px] font-bold text-sky-400">On Order #{rider.currentOrder}</span>
                    ) : (
                      <span className="text-[10px] text-gray-500">Idle / Ready</span>
                    )}
                  </td>

                  {/* Rating */}
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-300" /> {rider.rating}
                    </span>
                    <p className="text-[10px] text-gray-400 mt-0.5">{rider.totalDeliveries} total trips</p>
                  </td>

                  {/* Earnings */}
                  <td className="px-4 py-3">
                    <p className="font-black text-emerald-400">₹{rider.todayEarnings}</p>
                    <p className="text-[10px] text-gray-400">{rider.deliveriesToday} done today</p>
                  </td>

                  {/* KYC Verification */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setViewDocsPartner(rider)}
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black border transition-all cursor-pointer ${
                        rider.verificationStatus === 'Verified'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3" />
                      {rider.verificationStatus}
                    </button>
                  </td>

                  {/* Online/Offline Toggle */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => togglePartnerOnline(rider.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-black border transition-all cursor-pointer ${
                        rider.status === 'Online'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : rider.status === 'Busy'
                          ? 'bg-sky-500/10 text-sky-300 border-sky-500/20'
                          : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                      }`}
                    >
                      ● {rider.status}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setSelectedPartner(rider)}
                      className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1 font-bold"
                    >
                      <Eye className="w-3.5 h-3.5 text-rose-400" />
                      <span>Track</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Live GPS Tracking & Route Simulation Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-xl bg-[#121218] border border-white/15 rounded-3xl shadow-2xl p-5 sm:p-6 text-white space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Navigation className="w-5 h-5 animate-spin duration-3000" />
                </div>
                <div>
                  <h3 className="text-base font-black">Live Fleet Telemetry: {selectedPartner.name}</h3>
                  <p className="text-xs text-gray-400">{selectedPartner.vehicle} • {selectedPartner.vehicleNumber}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Live GPS Map Graphic */}
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[#0B0B14] via-[#141424] to-[#0A0A10] border border-white/10 relative overflow-hidden flex items-center justify-center">
              {/* Grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Simulated Pulse Rider Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <span className="w-8 h-8 rounded-full bg-sky-500/30 animate-ping absolute inset-0" />
                  <div className="w-8 h-8 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center text-white shadow-lg">
                    <Bike className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-[#181826]/90 border border-white/20 text-[10px] font-bold text-sky-200 backdrop-blur-md">
                  📍 {selectedPartner.currentLocation}
                </div>
              </div>

              {/* Coordinates display */}
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-gray-500">
                GPS: 12.9352° N, 77.6245° E • Speed: 28 km/h • Battery: 84%
              </div>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 text-[10px]">Today's Deliveries</span>
                <p className="text-base font-black text-white mt-0.5">{selectedPartner.deliveriesToday}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 text-[10px]">Today's Payout</span>
                <p className="text-base font-black text-emerald-400 mt-0.5">₹{selectedPartner.todayEarnings}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 text-[10px]">Weekly Total</span>
                <p className="text-base font-black text-amber-300 mt-0.5">₹{selectedPartner.weeklyEarnings}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedPartner(null)}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-all cursor-pointer"
            >
              Close Telemetry
            </button>
          </div>
        </div>
      )}

      {/* 5. Document Verification Modal */}
      {viewDocsPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#161622] border border-white/20 rounded-3xl p-5 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> KYC Document Audit
              </h3>
              <button
                onClick={() => setViewDocsPartner(null)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-300">
              Auditing regulatory records for <span className="text-white font-bold">{viewDocsPartner.name}</span>:
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold">Aadhaar Card UID</p>
                  <p className="font-mono font-bold text-white">{viewDocsPartner.documents.aadhaar}</p>
                </div>
                <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold">Commercial Driving License</p>
                  <p className="font-mono font-bold text-white">{viewDocsPartner.documents.license}</p>
                </div>
                <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold">Vehicle Registration (RC)</p>
                  <p className="font-mono font-bold text-white">{viewDocsPartner.documents.rc}</p>
                </div>
                <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  verifyPartnerDocument(viewDocsPartner.id, true);
                  setViewDocsPartner(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" /> Approve & Certify
              </button>
              <button
                onClick={() => {
                  verifyPartnerDocument(viewDocsPartner.id, false);
                  setViewDocsPartner(null);
                }}
                className="px-4 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-all cursor-pointer"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
