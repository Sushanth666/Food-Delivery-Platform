import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEMO_USER = {
  id: 'usr-901',
  name: 'Sushanth Kumar',
  email: 'sushanth@example.com',
  phone: '+91 98765 43210',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  savedAddresses: [
    {
      id: 'addr-1',
      tag: 'Home',
      line: 'Flat 402, Royal Residency, Avinashi Road',
      city: 'Tiruppur',
      state: 'Tamil Nadu',
      pincode: '641602'
    }
  ]
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('cravewave_user');
      return stored ? JSON.parse(stored) : null;
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
    // In a frontend mock, create or authenticate user
    const loggedUser = {
      id: 'usr-' + Date.now(),
      name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      email,
      phone: '+91 98765 43210',
      avatar: null,
    };
    setUser(loggedUser);
    return { success: true };
  };

  const loginWithPhone = (phone, otp) => {
    const loggedUser = {
      id: 'usr-' + Date.now(),
      name: 'Valued Foodie',
      email: 'user@cravewave.in',
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
      avatar: null,
    };
    setUser(loggedUser);
    return { success: true };
  };

  const signup = ({ name, email, phone, password }) => {
    const newUser = {
      id: 'usr-' + Date.now(),
      name,
      email,
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
      avatar: null,
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
