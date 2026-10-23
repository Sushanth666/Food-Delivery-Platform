import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  Search,
  Store,
  CheckCircle2,
  XCircle,
  Clock,
  Percent,
  Sliders,
  Eye,
  Plus,
  ShieldCheck,
  X,
  FileText,
  UtensilsCrossed,
  IndianRupee,
  Star,
  MapPin,
} from 'lucide-react';

export default function RestaurantManagementModule() {
  const {
    restaurantsList,
    pendingRestaurants,
    approveRestaurant,
    rejectRestaurant,
    toggleRestaurantStatus,
    updateRestaurantCommission,
  } = useAdmin();

  const [activeSubTab, setActiveSubTab] = useState('active'); // 'active' | 'onboarding'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [editingCommissionId, setEditingCommissionId] = useState(null);
  const [newCommissionRate, setNewCommissionRate] = useState(20);

  // Local menu items availability overrides for live demo
  const [itemAvailability, setItemAvailability] = useState({});

  const filteredRestaurants = restaurantsList.filter((rest) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      rest.name.toLowerCase().includes(q) ||
      rest.address.toLowerCase().includes(q) ||
      rest.cuisines?.some((c) => c.toLowerCase().includes(q))
    );
  });

  const toggleItemStock = (itemId) => {
    setItemAvailability((prev) => ({
      ...prev,
      [itemId]: prev[itemId] === undefined ? false : !prev[itemId],
    }));
  };

  return (
    <div className="space-y-6">
      {/* 1. Header & Section Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Restaurant & Menu Management</h2>
          <p className="text-xs text-gray-400">
            Audit partner kitchens, manage live menus, commission agreements, and onboarding applications.
          </p>
        </div>

        {/* Tab switch between Active and Onboarding Queue */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 self-start sm:self-auto text-xs">
          <button
            onClick={() => setActiveSubTab('active')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'active'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>Active Partners ({restaurantsList.length})</span>
          </button>
          <button
            onClick={() => setActiveSubTab('onboarding')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'onboarding'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Onboarding Queue</span>
            {pendingRestaurants.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-400 text-black text-[10px] font-black flex items-center justify-center">
                {pendingRestaurants.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 2. SUBTAB: ONBOARDING & REGISTRATION QUEUE */}
      {activeSubTab === 'onboarding' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 text-xs text-amber-200">
            <span className="flex items-center gap-2 font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              {pendingRestaurants.length} restaurant merchant applications pending compliance & FSSAI verification
            </span>
            <span className="text-[11px] text-gray-400">Target SLA: 24h Approval</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingRestaurants.map((pend) => (
              <div
                key={pend.id}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-black text-white">{pend.name}</h3>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {pend.status}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-rose-400 shrink-0" /> {pend.address}
                  </p>
                  <p className="text-xs text-gray-400">
                    Owner: <span className="text-white font-bold">{pend.owner}</span> ({pend.phone})
                  </p>

                  <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-gray-400">
                      <span>FSSAI License:</span>
                      <span className="font-mono text-emerald-400 font-bold">{pend.fssai}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-400">
                      <span>GSTIN Tax ID:</span>
                      <span className="font-mono text-gray-200">{pend.gstin}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-400">
                      <span>Agreed Platform Cut:</span>
                      <span className="font-bold text-rose-400">{pend.commissionRate}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => approveRestaurant(pend.id)}
                    className="flex-1 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Approve Partner
                  </button>
                  <button
                    onClick={() => rejectRestaurant(pend.id)}
                    className="px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold text-xs transition-all cursor-pointer"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. SUBTAB: ACTIVE RESTAURANTS & MENU DIRECTORY */}
      {activeSubTab === 'active' && (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Filter restaurants by name, cuisine, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>

          {/* Restaurants Master Table */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/[0.03] text-gray-400 font-bold uppercase tracking-wider border-b border-white/10">
                  <tr>
                    <th className="px-4 py-3">Restaurant</th>
                    <th className="px-4 py-3">Cuisines & Cost</th>
                    <th className="px-4 py-3">Rating</th>
                    <th className="px-4 py-3">Commission %</th>
                    <th className="px-4 py-3">Operating Hours</th>
                    <th className="px-4 py-3">Live Status</th>
                    <th className="px-4 py-3 text-right">Menu Management</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {filteredRestaurants.map((rest) => (
                    <tr key={rest.id} className="hover:bg-white/[0.02] transition-colors">
                      {/* Name & Thumb */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={rest.image}
                            alt={rest.name}
                            className="w-10 h-10 rounded-xl object-cover border border-white/10 shrink-0"
                          />
                          <div>
                            <p className="font-black text-white">{rest.name}</p>
                            <p className="text-[10px] text-gray-400 truncate max-w-[200px]">{rest.address}</p>
                          </div>
                        </div>
                      </td>

                      {/* Cuisines */}
                      <td className="px-4 py-3">
                        <p className="font-bold text-gray-200">{rest.cuisines?.slice(0, 2).join(', ')}</p>
                        <p className="text-[10px] text-gray-400">₹{rest.costForTwo} for two</p>
                      </td>

                      {/* Rating */}
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 font-black text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-300" /> {rest.rating}
                        </span>
                        <p className="text-[10px] text-gray-400 mt-0.5">{rest.reviewCount}+ reviews</p>
                      </td>

                      {/* Commission rate */}
                      <td className="px-4 py-3">
                        {editingCommissionId === rest.id ? (
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              min="5"
                              max="40"
                              value={newCommissionRate}
                              onChange={(e) => setNewCommissionRate(e.target.value)}
                              className="w-14 px-1.5 py-0.5 bg-white/10 border border-rose-500 rounded text-center text-xs font-bold text-white"
                            />
                            <button
                              onClick={() => {
                                updateRestaurantCommission(rest.id, newCommissionRate);
                                setEditingCommissionId(null);
                              }}
                              className="p-1 rounded bg-emerald-500 text-white cursor-pointer"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-rose-400 font-mono text-sm">{rest.commissionRate}%</span>
                            <button
                              onClick={() => {
                                setEditingCommissionId(rest.id);
                                setNewCommissionRate(rest.commissionRate);
                              }}
                              className="text-[10px] text-gray-400 hover:text-white underline cursor-pointer"
                            >
                              Edit
                            </button>
                          </div>
                        )}
                      </td>

                      {/* Operating Hours */}
                      <td className="px-4 py-3">
                        <p className="text-gray-300 font-medium">{rest.operatingHours || '11:00 AM – 11:30 PM'}</p>
                      </td>

                      {/* Open/Close toggle */}
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleRestaurantStatus(rest.id)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-black border transition-all cursor-pointer ${
                            rest.isOpen
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                              : 'bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20'
                          }`}
                        >
                          {rest.isOpen ? '● Live / Open' : '○ Closed by Admin'}
                        </button>
                      </td>

                      {/* Action Menu */}
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => setSelectedRestaurant(rest)}
                          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <UtensilsCrossed className="w-3.5 h-3.5 text-rose-400" />
                          <span>View Menu</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 4. Deep-Dive Menu Management Drawer */}
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-3xl bg-[#121218] border border-white/15 rounded-3xl shadow-2xl p-5 sm:p-6 text-white max-h-[90vh] overflow-y-auto space-y-5">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={selectedRestaurant.image}
                  alt={selectedRestaurant.name}
                  className="w-12 h-12 rounded-xl object-cover border border-white/10"
                />
                <div>
                  <h3 className="text-lg font-black text-white">{selectedRestaurant.name}</h3>
                  <p className="text-xs text-gray-400">{selectedRestaurant.address} • FSSAI Certified</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Categories & Item Stock Toggles */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Menu Items Availability & Pricing Control
                </h4>
                <span className="text-[11px] text-gray-400">
                  {selectedRestaurant.menuCategories?.length || 0} Categories listed
                </span>
              </div>

              {selectedRestaurant.menuCategories?.map((category) => (
                <div key={category.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <h5 className="text-sm font-black text-rose-400 flex items-center gap-1.5">
                    <span>{category.name}</span>
                    <span className="text-[10px] text-gray-400 font-normal">({category.items?.length} items)</span>
                  </h5>

                  <div className="divide-y divide-white/5">
                    {category.items?.map((dish) => {
                      const isSoldOut = itemAvailability[dish.id] === false;
                      return (
                        <div key={dish.id} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-3">
                            <span className={`w-2.5 h-2.5 rounded-full ${dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                            <div>
                              <p className="font-bold text-white">{dish.name}</p>
                              <p className="text-[11px] text-gray-400">₹{dish.price}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleItemStock(dish.id)}
                              className={`px-3 py-1 rounded-xl text-[10px] font-black border transition-all cursor-pointer ${
                                isSoldOut
                                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                              }`}
                            >
                              {isSoldOut ? 'Sold Out / Disabled' : 'In Stock & Active'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-end">
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-all cursor-pointer"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
