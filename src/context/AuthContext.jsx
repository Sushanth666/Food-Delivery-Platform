import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEMO_USER = {
  id: 'usr-901',
  name: 'Sushanth',
  email: 'sushanth@example.com',
  phone: '+91 98765 43210',
  isGoldMember: false, // Free tier by default
  goldPlan: null,
  walletCoins: 450,
  savedAddresses: [
    {
      id: 'addr-1',
      tag: 'Home',
      line: '1/547E,Srinivasa nagar,Near golden sports club,,',
      city: 'Tiruppur',
      state: 'Tamil Nadu',
      pincode: '641602',
    },
  ],
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('cravewave_user');
      if (!stored) return DEMO_USER;
      const parsed = JSON.parse(stored);
      return {
        ...DEMO_USER,
        ...parsed,
        isGoldMember: Boolean(parsed.isGoldMember),
        goldPlan: parsed.goldPlan || null,
        walletCoins: parsed.walletCoins !== undefined ? parsed.walletCoins : 450,
      };
    } catch {
      return DEMO_USER;
    }
  });

  // Modal & Toast States
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'signup'
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isGoldModalOpen, setIsGoldModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const hideToast = () => {
    setToast(null);
  };

  const openLoginModal = () => {
    setAuthModalTab('login');
    setIsAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setAuthModalTab('signup');
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('cravewave_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('cravewave_user');
      }
    } catch (err) {
      console.error('Failed to sync auth in localStorage', err);
    }
  }, [user]);

  const login = (email, password) => {
    const derivedName = email
      .split('@')[0]
      .replace(/[._]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const loggedUser = {
      id: 'usr-' + Date.now(),
      name: derivedName || 'Sushanth Kumar',
      email,
      phone: '+91 98765 43210',
    };
    setUser(loggedUser);
    showToast({
      type: 'success',
      title: 'Logged In Successfully!',
      message: `Welcome back, ${loggedUser.name}! Explore India's top restaurants.`,
    });
    return { success: true };
  };

  const loginWithPhone = (phone, otp) => {
    const loggedUser = {
      id: 'usr-' + Date.now(),
      name: 'Rahul Sharma',
      email: 'user@cravewave.in',
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
    };
    setUser(loggedUser);
    showToast({
      type: 'success',
      title: 'Phone Verified!',
      message: `Welcome back, ${loggedUser.name}! Logged in successfully via mobile OTP.`,
    });
    return { success: true };
  };

  const signup = ({ name, email, phone, password }) => {
    const newUser = {
      id: 'usr-' + Date.now(),
      name: name.trim(),
      email,
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
    };
    setUser(newUser);
    showToast({
      type: 'success',
      title: 'Account Created Successfully!',
      message: `Welcome to CraveWave, ${newUser.name}! Flat ₹100 welcome coupon applied.`,
    });
    return { success: true };
  };

  const demoLogin = () => {
    setUser(DEMO_USER);
    showToast({
      type: 'success',
      title: 'One-Click Demo Logged In!',
      message: `Welcome, ${DEMO_USER.name}! Ready to order delicious dishes.`,
    });
    return { success: true };
  };

  const updateProfile = (updatedFields) => {
    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        ...updatedFields,
      };
    });
    showToast({
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile changes have been saved.',
    });
    return { success: true };
  };

  const confirmLogout = () => {
    const name = user?.name || 'Foodie';
    setUser(null);
    setIsLogoutModalOpen(false);
    showToast({
      type: 'info',
      title: 'Logged Out',
      message: `You have been safely signed out. See you soon, ${name}!`,
    });
  };

  const logout = () => {
    confirmLogout();
  };

  const openGoldModal = () => setIsGoldModalOpen(true);
  const closeGoldModal = () => setIsGoldModalOpen(false);

  const upgradeToGold = (plan = 'Quarterly VIP (3 Months)') => {
    setUser((prev) => {
      if (!prev) return null;
      showToast({
        type: 'success',
        title: '👑 Welcome to CraveWave Gold VIP!',
        message: `Upgraded to ${plan}. Unlimited Free Delivery and 10% Extra Off is now active!`,
      });
      return {
        ...prev,
        isGoldMember: true,
        goldPlan: plan,
      };
    });
  };

  const cancelGold = () => {
    setUser((prev) => {
      if (!prev) return null;
      showToast({
        type: 'info',
        title: 'Gold VIP Membership Cancelled',
        message: 'Your account is now on the Free tier. You can upgrade anytime!',
      });
      return {
        ...prev,
        isGoldMember: false,
        goldPlan: null,
      };
    });
  };

  const toggleGoldMembership = () => {
    if (user?.isGoldMember) {
      cancelGold();
    } else {
      upgradeToGold('Quarterly VIP');
    }
  };

  const redeemCoins = (amount) => {
    if (!user || (user.walletCoins || 0) < amount) return false;
    setUser((prev) => ({
      ...prev,
      walletCoins: Math.max(0, (prev.walletCoins || 0) - amount),
    }));
    return true;
  };

  const addCoins = (amount) => {
    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        walletCoins: (prev.walletCoins || 0) + amount,
      };
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        loginWithPhone,
        signup,
        demoLogin,
        updateProfile,
        logout,
        // CraveWave Gold & Wallet Coins
        isGoldMember: Boolean(user?.isGoldMember),
        goldPlan: user?.goldPlan || null,
        walletCoins: user?.walletCoins || 0,
        isGoldModalOpen,
        openGoldModal,
        closeGoldModal,
        toggleGoldMembership,
        upgradeToGold,
        cancelGold,
        redeemCoins,
        addCoins,
        // Modal & Toast Controls
        isAuthModalOpen,
        authModalTab,
        setAuthModalTab,
        openLoginModal,
        openSignupModal,
        closeAuthModal,
        isLogoutModalOpen,
        openLogoutModal,
        closeLogoutModal,
        confirmLogout,
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
