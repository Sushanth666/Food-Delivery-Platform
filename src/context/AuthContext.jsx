import React, { createContext, useContext, useState, useEffect } from 'react';
import { getIndianAvatarByName } from '../utils/indianAvatars';

const AuthContext = createContext();

const DEMO_USER = {
  id: 'usr-901',
  name: 'Sushanth',
  email: 'sushanth@example.com',
  phone: '+91 98765 43210',
  avatar: getIndianAvatarByName('Sushanth Kumar'), // Authentic Indian man photo
  savedAddresses: [
    {
      id: 'addr-1',
      tag: 'Home',
      line: 'Flat 402, Royal Residency, Avinashi Road',
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
      if (!stored) return null;
      const parsed = JSON.parse(stored);
      // Ensure avatar matches name gender (fix legacy cached female photo)
      if (parsed?.name) {
        parsed.avatar = getIndianAvatarByName(parsed.name);
      }
      return parsed;
    } catch {
      return null;
    }
  });

  // Modal & Toast States
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'signup'
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
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
      avatar: getIndianAvatarByName(derivedName || 'Sushanth Kumar'),
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
      avatar: getIndianAvatarByName('Rahul Sharma'),
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
      avatar: getIndianAvatarByName(name.trim()),
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
      const updated = {
        ...prev,
        ...updatedFields,
      };
      // If user changed name and didn't manually pick an avatar, update avatar to match gender
      if (updatedFields.name && !updatedFields.avatar && !prev.customAvatarSelected) {
        updated.avatar = getIndianAvatarByName(updatedFields.name.trim());
      }
      return updated;
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
