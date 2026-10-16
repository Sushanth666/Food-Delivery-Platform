import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileBottomNav from './components/layout/MobileBottomNav';
import CartDrawer from './components/cart/CartDrawer';
import ConflictModal from './components/common/ConflictModal';
import LocationModal from './components/common/LocationModal';

import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NotFoundPage from './pages/NotFoundPage';

import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import { LocationProvider } from './context/LocationContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LocationProvider>
      <FilterProvider>
        <CartProvider>
          <OrderProvider>
            <div className="min-h-screen flex flex-col bg-slate-50/70 bg-mesh text-gray-900 selection:bg-brand-500 selection:text-white">
              <ScrollToTop />
              {/* Global Navigation */}
              <Navbar />

              {/* Main Page Route Views */}
              <div className="flex-1 flex flex-col">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/restaurant/:slug" element={<RestaurantDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route
                    path="/order-confirmation/:orderId"
                    element={<OrderConfirmationPage />}
                  />
                  <Route path="/track/:orderId" element={<OrderTrackingPage />} />
                  <Route path="/orders" element={<OrderHistoryPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>

              {/* Overlays, Drawers & Location Modal */}
              <CartDrawer />
              <ConflictModal />
              <LocationModal />

              {/* Mobile Bottom Bar */}
              <MobileBottomNav />

              {/* Footer */}
              <Footer />
            </div>
          </OrderProvider>
        </CartProvider>
      </FilterProvider>
    </LocationProvider>
  );
}
