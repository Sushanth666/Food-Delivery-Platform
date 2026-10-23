import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, MobileBottomNav, CartDrawer } from './components';
import {
  ConflictModal,
  LocationModal,
  WishlistModal,
  AuthModal,
  LogoutModal,
  GoldClubModal,
  RewardsHubModal,
} from './components/modals';
import { AmbientBackground } from './components/ui';
import { AuthToast } from './components/feedback';

import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';

import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import { LocationProvider } from './context/LocationContext';

import { AnimatePresence, motion } from 'framer-motion';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const container = document.getElementById('main-scroll-container');
    if (container) {
      container.scrollTo(0, 0);
    }
    const adminMain = document.getElementById('admin-main-scroll');
    if (adminMain) {
      adminMain.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const hideFooter = ['/login', '/signup'].includes(location.pathname) || isAdminRoute;

  return (
    <AuthProvider>
      <WishlistProvider>
        <LocationProvider>
          <FilterProvider>
            <CartProvider>
              <OrderProvider>
                <div className="h-screen flex flex-col bg-[#0B0B0E] bg-dark-luxury text-gray-100 selection:bg-brand-500 selection:text-white relative overflow-hidden">
                  {!isAdminRoute && <AmbientBackground />}
                  <ScrollToTop />
                  {/* Global Storefront Navigation: Fixed at top with ZERO scrollbar beside it */}
                  {!isAdminRoute && <Navbar />}

                  {/* Main Page Scroll Container: Scrollbar exists ONLY in pages, starting below the navbar */}
                  <div
                    id="main-scroll-container"
                    className={`flex-1 flex flex-col relative z-10 min-h-0 ${
                      isAdminRoute ? 'overflow-hidden' : 'overflow-y-auto'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex-1 flex flex-col w-full ${
                          isAdminRoute ? 'min-h-0 h-full overflow-hidden' : ''
                        }`}
                      >
                        <Routes location={location}>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/admin" element={<AdminPage />} />
                          <Route path="/admin/*" element={<AdminPage />} />
                          <Route path="/restaurant/:slug" element={<RestaurantDetailPage />} />
                          <Route path="/cart" element={<CartPage />} />
                          <Route path="/checkout" element={<CheckoutPage />} />
                          <Route
                            path="/order-confirmation/:orderId"
                            element={<OrderConfirmationPage />}
                          />
                          <Route path="/track/:orderId" element={<OrderTrackingPage />} />
                          <Route path="/orders" element={<OrderHistoryPage />} />
                          <Route path="/login" element={<LoginPage />} />
                          <Route path="/signup" element={<SignupPage />} />
                          <Route path="*" element={<NotFoundPage />} />
                        </Routes>

                        {/* Footer placed at the very end of the page flow below all restaurant cards */}
                        {!hideFooter && <Footer />}
                      </motion.div>
                    </AnimatePresence>
                  </div>

              {/* Overlays, Drawers & Location Modal (Storefront Only) */}
              {!isAdminRoute && (
                <>
                  <CartDrawer />
                  <ConflictModal />
                  <LocationModal />
                  <WishlistModal />
                  <AuthModal />
                  <LogoutModal />
                  <AuthToast />
                  <GoldClubModal />
                  <RewardsHubModal />
                  <MobileBottomNav />
                </>
              )}
            </div>
          </OrderProvider>
        </CartProvider>
      </FilterProvider>
    </LocationProvider>
  </WishlistProvider>
</AuthProvider>
  );
}
