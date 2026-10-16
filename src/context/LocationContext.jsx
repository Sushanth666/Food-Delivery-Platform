import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

const LocationContext = createContext(null);

export const POPULAR_INDIAN_LOCATIONS = [
  {
    id: 'loc-blr-1',
    area: 'Koramangala, 4th Block',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560034',
    formatted: 'Koramangala 4th Block, Bengaluru - 560034',
    lat: 12.9352,
    lng: 77.6245,
    tag: 'Tech Hub',
  },
  {
    id: 'loc-blr-2',
    area: '100 Feet Road, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    formatted: 'Indiranagar, Bengaluru - 560038',
    lat: 12.9784,
    lng: 77.6408,
    tag: 'Food District',
  },
  {
    id: 'loc-blr-3',
    area: 'HSR Layout, Sector 1',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560102',
    formatted: 'HSR Layout Sector 1, Bengaluru - 560102',
    lat: 12.9116,
    lng: 77.6389,
    tag: 'Residential',
  },
  {
    id: 'loc-del-1',
    area: 'Connaught Place, Inner Circle',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    formatted: 'Connaught Place, New Delhi - 110001',
    lat: 28.6315,
    lng: 77.2167,
    tag: 'Central Delhi',
  },
  {
    id: 'loc-del-2',
    area: 'Cyber Hub, DLF Phase 2',
    city: 'Gurugram',
    state: 'Haryana / NCR',
    pincode: '122002',
    formatted: 'Cyber City, Gurugram, Delhi NCR - 122002',
    lat: 28.4952,
    lng: 77.0895,
    tag: 'Corporate Hub',
  },
  {
    id: 'loc-del-3',
    area: 'Hauz Khas Village',
    city: 'South Delhi',
    state: 'Delhi',
    pincode: '110016',
    formatted: 'Hauz Khas, New Delhi - 110016',
    lat: 28.5494,
    lng: 77.1944,
    tag: 'Cafes & Dining',
  },
  {
    id: 'loc-mum-1',
    area: 'Bandra West, Linking Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    formatted: 'Bandra West, Mumbai - 400050',
    lat: 19.0596,
    lng: 72.8295,
    tag: 'Suburban Hub',
  },
  {
    id: 'loc-mum-2',
    area: 'Hiranandani Gardens, Powai',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400076',
    formatted: 'Powai, Mumbai - 400076',
    lat: 19.1176,
    lng: 72.9060,
    tag: 'Residential',
  },
  {
    id: 'loc-mum-3',
    area: 'Nariman Point, Marine Drive',
    city: 'South Mumbai',
    state: 'Maharashtra',
    pincode: '400021',
    formatted: 'Nariman Point, Mumbai - 400021',
    lat: 18.9256,
    lng: 72.8242,
    tag: 'Downtown',
  },
  {
    id: 'loc-hyd-1',
    area: 'HITEC City, Madhapur',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500081',
    formatted: 'HITEC City, Hyderabad - 500081',
    lat: 17.4474,
    lng: 78.3762,
    tag: 'Cyberabad',
  },
  {
    id: 'loc-hyd-2',
    area: 'Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500033',
    formatted: 'Jubilee Hills, Hyderabad - 500033',
    lat: 17.4319,
    lng: 78.4073,
    tag: 'Fine Dining',
  },
  {
    id: 'loc-chn-1',
    area: 'Usman Road, T. Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600017',
    formatted: 'T. Nagar, Chennai - 600017',
    lat: 13.0418,
    lng: 80.2341,
    tag: 'Cultural Hub',
  },
  {
    id: 'loc-kol-1',
    area: 'Park Street, New Market',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700016',
    formatted: 'Park Street, Kolkata - 700016',
    lat: 22.5513,
    lng: 88.3526,
    tag: 'Heritage Street',
  },
  {
    id: 'loc-pun-1',
    area: 'Koregaon Park, North Main Road',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    formatted: 'Koregaon Park, Pune - 411001',
    lat: 18.5362,
    lng: 73.8940,
    tag: 'Trendy Dining',
  },
];

const DEFAULT_LOCATION = POPULAR_INDIAN_LOCATIONS[0];

export function LocationProvider({ children }) {
  const [currentLocation, setCurrentLocation] = useState(() =>
    getLocalStorage('cw_user_location', DEFAULT_LOCATION)
  );
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionError, setDetectionError] = useState(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    setLocalStorage('cw_user_location', currentLocation);
  }, [currentLocation]);

  // Automatic Location Detection via Browser Geolocation API
  const detectLocation = () => {
    setIsDetecting(true);
    setDetectionError(null);

    if (!('geolocation' in navigator)) {
      setDetectionError('Geolocation is not supported by your browser');
      setIsDetecting(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Attempt reverse geocoding using OpenStreetMap Nominatim
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            { headers: { 'Accept-Language': 'en' } }
          );

          if (response.ok) {
            const data = await response.json();
            const addr = data.address || {};

            const area =
              addr.suburb ||
              addr.neighbourhood ||
              addr.residential ||
              addr.quarter ||
              addr.commercial ||
              addr.road ||
              'Current Area';
            const city =
              addr.city ||
              addr.town ||
              addr.city_district ||
              addr.county ||
              addr.state_district ||
              'Bengaluru';
            const state = addr.state || 'Karnataka';
            const pincode = addr.postcode || '560034';

            const detected = {
              id: `detected-${Date.now()}`,
              area,
              city,
              state,
              pincode,
              formatted: `${area}, ${city}${pincode ? ` - ${pincode}` : ''}`,
              lat: latitude,
              lng: longitude,
              isAutoDetected: true,
              timestamp: new Date().toISOString(),
            };

            setCurrentLocation(detected);
            setIsDetecting(false);
            setIsLocationModalOpen(false);
            return;
          }
        } catch (err) {
          console.warn('Reverse geocoding failed or offline, using closest match:', err);
        }

        // Fallback with GPS coordinates
        const fallbackDetected = {
          id: `gps-${Date.now()}`,
          area: 'GPS Detected Location',
          city: 'Bengaluru',
          state: 'Karnataka',
          pincode: '560034',
          formatted: `Lat: ${latitude.toFixed(4)}, Long: ${longitude.toFixed(4)} (GPS)`,
          lat: latitude,
          lng: longitude,
          isAutoDetected: true,
        };
        setCurrentLocation(fallbackDetected);
        setIsDetecting(false);
        setIsLocationModalOpen(false);
      },
      (error) => {
        let msg = 'Failed to detect location';
        if (error.code === error.PERMISSION_DENIED) {
          msg = 'Location permission was denied. You can still enter your address manually.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg = 'Location information is currently unavailable.';
        } else if (error.code === error.TIMEOUT) {
          msg = 'Location request timed out. Please try again or select manually.';
        }
        setDetectionError(msg);
        setIsDetecting(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const setManualLocation = (loc) => {
    setCurrentLocation({
      ...loc,
      isAutoDetected: false,
    });
    setDetectionError(null);
    setIsLocationModalOpen(false);
  };

  const setCustomAddress = ({ area, city, pincode, state = 'India' }) => {
    const customLoc = {
      id: `custom-${Date.now()}`,
      area: area.trim(),
      city: city.trim(),
      state: state.trim(),
      pincode: pincode.trim(),
      formatted: `${area.trim()}, ${city.trim()} - ${pincode.trim()}`,
      isAutoDetected: false,
    };
    setCurrentLocation(customLoc);
    setIsLocationModalOpen(false);
  };

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        isDetecting,
        detectionError,
        isLocationModalOpen,
        openLocationModal: () => setIsLocationModalOpen(true),
        closeLocationModal: () => setIsLocationModalOpen(false),
        detectLocation,
        setManualLocation,
        setCustomAddress,
        popularLocations: POPULAR_INDIAN_LOCATIONS,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
}
