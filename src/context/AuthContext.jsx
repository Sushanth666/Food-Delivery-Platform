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
      line: '1/547E,Srinivasa nagar,Near golden sports club,Velliyankadu(South)',
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
      if (!stored) return null; // Guest by default until login
      const parsed = JSON.parse(stored);
      if (!parsed) return null;
      return {
        ...DEMO_USER,
        ...parsed,
        isGoldMember: Boolean(parsed.isGoldMember),
        goldPlan: parsed.goldPlan || null,
        walletCoins: parsed.walletCoins !== undefined ? parsed.walletCoins : 450,
      };
    } catch {
      return null;
    }
  });

  // Modal & Toast States
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'signup'
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isGoldModalOpen, setIsGoldModalOpen] = useState(false);
  const [isRewardsHubOpen, setIsRewardsHubOpen] = useState(false);
  const [activeScratchCard, setActiveScratchCard] = useState(null);
  const [toast, setToast] = useState(null);

  // Gamified Scratch Cards
  const [scratchCards, setScratchCards] = useState(() => {
    try {
      const stored = localStorage.getItem('cravewave_scratch_cards');
      if (stored) return JSON.parse(stored);
      return [
        {
          id: 'scratch-welcome',
          title: 'Welcome Gourmet Mystery Card',
          prize: '60 CraveCoins',
          coins: 60,
          couponCode: 'FEAST50',
          isScratched: false,
          icon: '🎁',
        },
      ];
    } catch {
      return [];
    }
  });

  // Eco-Friendly Impact Stats
  const [ecoStats, setEcoStats] = useState(() => {
    try {
      const stored = localStorage.getItem('cravewave_eco_stats');
      if (stored) return JSON.parse(stored);
      return { plasticSaved: 14, treesPlanted: 1, co2SavedKg: 2.1 };
    } catch {
      return { plasticSaved: 14, treesPlanted: 1, co2SavedKg: 2.1 };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cravewave_scratch_cards', JSON.stringify(scratchCards));
    } catch (e) {
      // ignore
    }
  }, [scratchCards]);

  useEffect(() => {
    try {
      localStorage.setItem('cravewave_eco_stats', JSON.stringify(ecoStats));
    } catch (e) {
      // ignore
    }
  }, [ecoStats]);

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

  const adminLogin = (email, password, role = 'Super Admin') => {
    const derivedName = email
      .split('@')[0]
      .replace(/[._]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const adminUser = {
      id: 'admin-' + Date.now(),
      name: derivedName || 'Akash Barik',
      email: email.trim(),
      phone: '+91 98888 77777',
      role: 'admin',
      adminRole: role,
      isGoldMember: true,
      walletCoins: 9999,
      savedAddresses: DEMO_USER.savedAddresses,
    };

    setUser(adminUser);
    try {
      localStorage.setItem(
        'cravewave_current_admin',
        JSON.stringify({
          name: adminUser.name,
          email: adminUser.email,
          role: role,
          avatar: (adminUser.name.slice(0, 2) || 'AB').toUpperCase(),
          lastLogin: 'Just now',
        })
      );
    } catch (e) {
      // ignore
    }

    showToast({
      type: 'success',
      title: 'Admin Access Granted! 🛡️',
      message: `Welcome back, ${adminUser.name}! Opening CraveWave Admin Flow...`,
    });
    return { success: true };
  };

  const demoAdminLogin = () => {
    const adminUser = {
      id: 'admin-super-01',
      name: 'Akash Barik',
      email: 'admin@cravewave.internal',
      phone: '+91 98888 77777',
      role: 'admin',
      adminRole: 'Super Admin',
      isGoldMember: true,
      walletCoins: 9999,
      savedAddresses: DEMO_USER.savedAddresses,
    };

    setUser(adminUser);
    try {
      localStorage.setItem(
        'cravewave_current_admin',
        JSON.stringify({
          name: 'Akash Barik',
          email: 'admin@cravewave.internal',
          role: 'Super Admin',
          avatar: 'AB',
          lastLogin: 'Just now',
        })
      );
    } catch (e) {
      // ignore
    }

    showToast({
      type: 'success',
      title: 'Demo Admin Access Granted! 🛡️',
      message: 'Logged in as Super Admin. Redirecting to Admin Operations Dashboard...',
    });
    return { success: true };
  };

  const openAdminLoginModal = () => {
    setAuthModalTab('admin');
    setIsAuthModalOpen(true);
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

  const openGoldModal = () => {
    if (!user) {
      showToast({
        type: 'warning',
        title: 'Sign In Required',
        message: 'Please sign in to join or view CraveWave Gold VIP Membership!',
      });
      openLoginModal();
      return;
    }
    setIsGoldModalOpen(true);
  };
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

  const openRewardsHub = () => {
    if (!user) {
      showToast({
        type: 'warning',
        title: 'Sign In Required',
        message: 'Please sign in to access CraveCoins & Rewards Hub!',
      });
      openLoginModal();
      return;
    }
    setIsRewardsHubOpen(true);
  };
  const closeRewardsHub = () => setIsRewardsHubOpen(false);

  const openScratchModal = (card) => {
    setActiveScratchCard(card);
  };
  const closeScratchModal = () => setActiveScratchCard(null);

  const scratchCardWon = (cardId) => {
    const card = scratchCards.find((c) => c.id === cardId);
    if (!card || card.isScratched) return;

    setScratchCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isScratched: true } : c))
    );

    if (card.coins) {
      addCoins(card.coins);
    }

    showToast({
      type: 'success',
      title: `🎉 Unlocked ${card.prize}!`,
      message: `${card.coins ? `+${card.coins} CraveCoins added!` : ''} ${
        card.couponCode ? `Code ${card.couponCode} unlocked!` : ''
      }`,
    });
  };

  const generateOrderScratchCard = () => {
    const rewards = [
      { coins: 50, prize: '50 CraveCoins', couponCode: 'FEAST50', icon: '🪙' },
      { coins: 75, prize: '75 CraveCoins', couponCode: 'TASTY75', icon: '🎁' },
      { coins: 100, prize: '100 CraveCoins', couponCode: 'CRAVE100', icon: '⭐' },
      { coins: 40, prize: '40 CraveCoins & Free Dessert', couponCode: 'FREESWEET', icon: '🍨' },
    ];
    const picked = rewards[Math.floor(Math.random() * rewards.length)];
    const newCard = {
      id: 'scratch-' + Date.now(),
      title: 'Order Reward Mystery Card',
      ...picked,
      isScratched: false,
    };
    setScratchCards((prev) => [newCard, ...prev]);
    return newCard;
  };

  const addEcoImpact = ({ plastic = 4, co2 = 0.3, trees = 0 }) => {
    setEcoStats((prev) => ({
      plasticSaved: (prev.plasticSaved || 0) + plastic,
      co2SavedKg: parseFloat(((prev.co2SavedKg || 0) + co2).toFixed(1)),
      treesPlanted: (prev.treesPlanted || 0) + trees,
    }));
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
        adminLogin,
        demoAdminLogin,
        openAdminLoginModal,
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
        // Rewards Hub & Scratch Cards
        scratchCards,
        isRewardsHubOpen,
        openRewardsHub,
        closeRewardsHub,
        activeScratchCard,
        openScratchModal,
        closeScratchModal,
        scratchCardWon,
        generateOrderScratchCard,
        // Eco Impact
        ecoStats,
        addEcoImpact,
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
  return context || {};
}
