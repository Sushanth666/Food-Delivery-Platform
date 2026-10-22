import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { useAuth } from './AuthContext';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const { isAuthenticated, openLoginModal, showToast } = useAuth();
  const [wishlist, setWishlist] = useState(() =>
    getLocalStorage('cravewave_wishlist', [])
  );
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

  useEffect(() => {
    setLocalStorage('cravewave_wishlist', wishlist);
  }, [wishlist]);

  const toggleWishlist = (id) => {
    if (!isAuthenticated) {
      if (showToast) {
        showToast({
          type: 'warning',
          title: 'Sign In Required',
          message: 'Please sign in to save dishes and restaurants to your wishlist!',
        });
      }
      if (openLoginModal) openLoginModal();
      return false;
    }

    setWishlist((prev) => {
      const isAlreadyWishlisted = prev.includes(id);
      if (isAlreadyWishlisted) {
        if (showToast) {
          showToast({
            type: 'info',
            title: 'Removed from Wishlist',
            message: 'Item has been removed from your saved favorites.',
          });
        }
        return prev.filter((item) => item !== id);
      } else {
        if (showToast) {
          showToast({
            type: 'success',
            title: '❤️ Added to Wishlist',
            message: 'Item saved! You can view it anytime from your profile.',
          });
        }
        return [...prev, id];
      }
    });
    return true;
  };

  const isWishlisted = (id) => (isAuthenticated ? wishlist.includes(id) : false);

  const openWishlist = () => {
    if (!isAuthenticated) {
      if (showToast) {
        showToast({
          type: 'warning',
          title: 'Sign In Required',
          message: 'Please sign in to view your saved wishlist!',
        });
      }
      if (openLoginModal) openLoginModal();
      return;
    }
    setIsWishlistModalOpen(true);
  };
  const closeWishlist = () => setIsWishlistModalOpen(false);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isWishlisted,
        isWishlistModalOpen,
        openWishlist,
        closeWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
