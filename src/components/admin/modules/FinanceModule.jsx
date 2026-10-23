import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import {
  IndianRupee,
  TrendingUp,
  Download,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  ArrowDownLeft,
  ArrowUpRight,
  RefreshCw,
  Store,
  Bike,
  ShieldCheck,
} from 'lucide-react';

export default function FinanceModule() {
  const { orders, restaurantsList, deliveryPartners, logAction } = useAdmin();
  const [activeFinanceTab, setActiveFinanceTab] = useState('transactions'); // 'transactions' | 'settlements' | 'riders' | 'taxes'
  const [settledRestIds, setSettledRestIds] = useState([]);
  const [payoutSuccessMsg, setPayoutSuccessMsg] = useState('');

  // Computations
  const totalGMV = 3845000;
  const platformRevenue = Math.round(totalGMV * 0.2); // 20%
  const pendingSettlementsTotal = restaurantsList.reduce(
    (acc, r) => (settledRestIds.includes(r.id) ? acc : acc + (r.settlementPending || 18000)),
    0
  );
  const riderPayoutTotal = deliveryPartners.reduce((acc, p) => acc + p.weeklyEarnings, 0);

  // Mock Transactions Table Data
  const transactions = [
    { id: 'TXN-901824', orderId: 'CW-89215', amount: 760, method: 'UPI (GPay)', status: 'Success', fee: 152, netMerchant: 608, date: '10 mins ago', customer: 'Ananya Sharma' },
    { id: 'TXN-901823', orderId: 'CW-89216', amount: 540, method: 'Credit Card (HDFC)', status: 'Success', fee: 108, netMerchant: 432, date: '24 mins ago', customer: 'Sushanth Reddy' },
    { id: 'TXN-901822', orderId: 'CW-89217', amount: 920, method: 'Cash On Delivery', status: 'Pending Collection', fee: 184, netMerchant: 736, date: '1 hour ago', customer: 'Vikram Malhotra' },
    { id: 'TXN-901821', orderId: 'CW-89218', amount: 480, method: 'UPI (PhonePe)', status: 'Refunded', fee: 0, netMerchant: 0, date: '2 hours ago', customer: 'Neha Kapoor' },
    { id: 'TXN-901820', orderId: 'CW-89213', amount: 350, method: 'Debit Card (SBI)', status: 'Failed', fee: 0, netMerchant: 0, date: '3 hours ago', customer: 'Rajesh Patel', failureReason: 'Bank Server Timeout' },
    { id: 'TXN-901819', orderId: 'CW-89212', amount: 1240, method: 'Netbanking (ICICI)', status: 'Success', fee: 248, netMerchant: 992, date: '4 hours ago', customer: 'Kunal Kapoor' },
    { id: 'TXN-901818', orderId: 'CW-89211', amount: 620, method: 'UPI (Paytm)', status: 'Success', fee: 124, netMerchant: 496, date: '5 hours ago', customer: 'Deepak Verma' },
  ];

  const handleReleaseSettlement = (restaurantId, restaurantName, amount) => {
    setSettledRestIds((prev) => [...prev, restaurantId]);
    setPayoutSuccessMsg(`Successfully released ₹${amount.toLocaleString()} payout to ${restaurantName}`);
    logAction(`Dispatched Restaurant Settlement`, 'Payments & Finance', `₹${amount} to ${restaurantName}`);
    setTimeout(() => setPayoutSuccessMsg(''), 4000);
  };

  const handleExportCSV = () => {
    alert('Exporting CraveWave_Financial_Report_Q4_2026.csv with all audit compliance markers.');
    logAction('Exported Financial Ledger', 'Payments & Finance', 'Downloaded CSV report');
  };

  return (
    <div className="space-y-6">
      {/* 1. Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Payments & Financial Reconciliation</h2>
          <p className="text-xs text-gray-400">
            Real-time merchant settlements, rider earnings payouts, commission margins, and tax filing.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-2 self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5 text-rose-400" />
          <span>Export Financial Report (.CSV)</span>
        </button>
      </div>

      {payoutSuccessMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{payoutSuccessMsg}</span>
        </div>
      )}

      {/* 2. Financial KPI Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Gross Merchandise (GMV)</span>
          <p className="text-2xl font-black text-white mt-1">₹{(totalGMV / 100000).toFixed(1)}L</p>
          <span className="text-[10px] text-emerald-400 font-bold">14,280 Transactions</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Net Commission Earned</span>
          <p className="text-2xl font-black text-emerald-400 mt-1">₹{(platformRevenue / 100000).toFixed(1)}L</p>
          <span className="text-[10px] text-gray-400">20% Platform Take Rate</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Pending Merchant Payouts</span>
          <p className="text-2xl font-black text-amber-300 mt-1">₹{(pendingSettlementsTotal / 100000).toFixed(1)}L</p>
          <span className="text-[10px] text-amber-200">Scheduled for T+2 Release</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Rider Fleet Payout</span>
          <p className="text-2xl font-black text-sky-400 mt-1">₹{(riderPayoutTotal / 1000).toFixed(0)}k</p>
          <span className="text-[10px] text-gray-400">Weekly disbursement active</span>
        </div>
      </div>

      {/* 3. Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        {[
          { id: 'transactions', label: 'Gateway Transactions', icon: IndianRupee },
          { id: 'settlements', label: 'Restaurant Settlements', icon: Store },
          { id: 'riders', label: 'Delivery Partner Payouts', icon: Bike },
          { id: 'taxes', label: 'GST & TDS Tax Filing', icon: FileSpreadsheet },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFinanceTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeFinanceTab === tab.id
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

      {/* 4. SUBTAB CONTENT */}

      {/* A. TRANSACTIONS LEDGER */}
      {activeFinanceTab === 'transactions' && (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-gray-400 font-bold uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="px-4 py-3">Txn Reference</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Gateway Method</th>
                  <th className="px-4 py-3">Platform Cut (20%)</th>
                  <th className="px-4 py-3">Net To Merchant</th>
                  <th className="px-4 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 font-mono">
                      <span className="font-bold text-white">{tx.id}</span>
                      <p className="text-[10px] text-gray-500 font-sans">{tx.orderId} • {tx.date}</p>
                    </td>

                    <td className="px-4 py-3 font-medium text-gray-200">
                      {tx.customer}
                    </td>

                    <td className="px-4 py-3 font-extrabold text-white">
                      ₹{tx.amount}
                    </td>

                    <td className="px-4 py-3 text-gray-300">
                      {tx.method}
                    </td>

                    <td className="px-4 py-3 text-emerald-400 font-bold">
                      ₹{tx.fee}
                    </td>

                    <td className="px-4 py-3 text-gray-200 font-bold">
                      ₹{tx.netMerchant}
                    </td>

                    <td className="px-4 py-3 text-right">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${
                          tx.status === 'Success'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : tx.status === 'Failed'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                            : tx.status === 'Refunded'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                            : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                        }`}
                      >
                        ● {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* B. RESTAURANT SETTLEMENTS */}
      {activeFinanceTab === 'settlements' && (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-gray-400 font-bold uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="px-4 py-3">Merchant Restaurant</th>
                  <th className="px-4 py-3">Commission Agreement</th>
                  <th className="px-4 py-3">Total Orders Handled</th>
                  <th className="px-4 py-3">Pending Net Balance</th>
                  <th className="px-4 py-3">Settlement Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {restaurantsList.slice(0, 10).map((rest) => {
                  const isSettled = settledRestIds.includes(rest.id);
                  const pendingAmt = isSettled ? 0 : rest.settlementPending || 24500;
                  return (
                    <tr key={rest.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-bold text-white">{rest.name}</p>
                        <p className="text-[10px] text-gray-400">{rest.address}</p>
                      </td>

                      <td className="px-4 py-3 font-bold text-rose-400">
                        {rest.commissionRate}% Flat Platform Take
                      </td>

                      <td className="px-4 py-3 text-gray-300 font-bold">
                        {rest.totalOrdersLifetime || 420} orders
                      </td>

                      <td className="px-4 py-3 font-black text-white text-sm">
                        ₹{pendingAmt.toLocaleString()}
                      </td>

                      <td className="px-4 py-3">
                        {isSettled ? (
                          <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                            ✓ Settled & Transferred
                          </span>
                        ) : (
                          <span className="text-[10px] font-black text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                            Pending Clearance
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-3 text-right">
                        {!isSettled ? (
                          <button
                            onClick={() => handleReleaseSettlement(rest.id, rest.name, pendingAmt)}
                            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs transition-all shadow-md cursor-pointer"
                          >
                            Release Payout
                          </button>
                        ) : (
                          <span className="text-[11px] text-gray-500 font-semibold">Cleared</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* C. RIDER PAYOUTS */}
      {activeFinanceTab === 'riders' && (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-white">Weekly Delivery Fleet Payout Ledger</h3>
              <p className="text-xs text-gray-400">Automated UPI Direct Transfer to partner bank accounts</p>
            </div>
            <button
              onClick={() => {
                alert('Batch UPI payout triggered for all 142 active delivery partners!');
                logAction('Dispatched Batch Fleet Payout', 'Payments & Finance', `Total: ₹${riderPayoutTotal}`);
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <Bike className="w-4 h-4" /> Batch Release (₹{riderPayoutTotal.toLocaleString()})
            </button>
          </div>

          <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden">
            {deliveryPartners.map((rider) => (
              <div key={rider.id} className="p-3.5 flex items-center justify-between gap-3 text-xs bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold">
                    <Bike className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{rider.name}</p>
                    <p className="text-[10px] text-gray-400">{rider.phone} • {rider.vehicle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400">Weekly Payout</span>
                    <p className="text-sm font-black text-emerald-400">₹{rider.weeklyEarnings}</p>
                  </div>
                  <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Auto-Pay Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* D. TAXES & REGULATORY FILING */}
      {activeFinanceTab === 'taxes' && (
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <h3 className="text-base font-black text-white">GST & TDS Compliance Summary</h3>
          <p className="text-xs text-gray-400">Section 9(5) CGST Act e-Commerce Operator Liability</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] text-gray-400 uppercase font-bold">5% GST on Restaurant Orders</span>
              <p className="text-xl font-black text-white">₹1,92,250</p>
              <span className="text-[10px] text-emerald-400 font-bold">Remitted to GSTIN Portal</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] text-gray-400 uppercase font-bold">18% GST on Platform Service Fee</span>
              <p className="text-xl font-black text-white">₹1,38,420</p>
              <span className="text-[10px] text-emerald-400 font-bold">Input Tax Credit Eligible</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] text-gray-400 uppercase font-bold">1% Section 194-O TDS Deductions</span>
              <p className="text-xl font-black text-white">₹38,450</p>
              <span className="text-[10px] text-sky-400 font-bold">Form 26AS Reconciled</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
