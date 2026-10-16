import React, { createContext, useContext, useState, useEffect } from 'react';
import { getIndianAvatarByName } from '../utils/indianAvatars';

const AuthContext = createContext();

const DEMO_USER = {
  id: 'usr-901',
  name: 'Sushanth Kumar',
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
    return { success: true };
  };

  const demoLogin = () => {
    setUser(DEMO_USER);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
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
        logout,
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
