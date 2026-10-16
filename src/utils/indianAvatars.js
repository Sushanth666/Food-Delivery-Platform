/**
 * Indian Avatars Utility
 * Automatically assigns authentic Indian male photos for male names
 * and authentic Indian female photos for female names.
 */

// Curated high-resolution authentic Indian Male portraits
export const INDIAN_MALE_AVATARS = [
  'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80', // Young Indian man in t-shirt
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', // Smiling Indian/South Asian man
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', // Young Indian man portrait
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80', // Smart professional Indian male
  'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=200&q=80', // Indian male portrait
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80', // Friendly smiling Indian youth
];

// Curated high-resolution authentic Indian Female portraits
export const INDIAN_FEMALE_AVATARS = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', // Indian woman with warm smile
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', // Professional Indian woman
  'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80', // Smiling Indian female portrait
  'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=200&q=80', // Indian woman smiling
  'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=200&q=80', // Young Indian woman portrait
];

// Well-known Indian female first names
const FEMALE_NAMES = new Set([
  'pooja', 'priya', 'neha', 'sneha', 'ananya', 'sunita', 'divya', 'deepika',
  'kavya', 'riya', 'anjali', 'shreya', 'swati', 'megha', 'aishwarya', 'smriti',
  'aditi', 'tanvi', 'payal', 'komal', 'aarti', 'rashmi', 'isha', 'shilpa',
  'ritu', 'meera', 'nikita', 'niharika', 'pallavi', 'rashi', 'simran', 'geeta',
  'sita', 'lakshmi', 'parvati', 'fatima', 'ayesha', 'sana', 'mary', 'grace',
  'anita', 'sunita', 'usha', 'vidya', 'rekha', 'kavita', 'seema', 'radha',
  'alka', 'poonam', 'renu', 'sonia', 'nisha', 'sarita', 'madhu', 'mamta',
  'vandana', 'babita', 'shashi', 'monika', 'preeti', 'jyoti', 'shilpi',
  'archana', 'sapna', 'chhaya', 'dimple', 'karishma', 'kareena', 'alia',
  'katrina', 'shraddha', 'kriti', 'kiara', 'tara', 'dishapatani', 'disha',
  'nandini', 'rashmika', 'samantha', 'nayanthara', 'trisha', 'keerthy', 'sai'
]);

// Well-known Indian male first names
const MALE_NAMES = new Set([
  'mohammed', 'mohammad', 'zeeshan', 'ramesh', 'rahul', 'vikram', 'sushanth',
  'sushant', 'amit', 'rohan', 'arjun', 'rajesh', 'suresh', 'ajay', 'vijay',
  'rohit', 'sachin', 'deepak', 'sunil', 'karan', 'gaurav', 'varun', 'aditya',
  'manish', 'prateek', 'harish', 'manoj', 'sanjay', 'vivek', 'akhil', 'nikhil',
  'farhan', 'imran', 'ali', 'kabir', 'dev', 'anil', 'dinesh', 'santosh',
  'mahesh', 'mukesh', 'vinod', 'ashok', 'alok', 'pankaj', 'ravi', 'kiran',
  'naveen', 'praveen', 'satish', 'chandan', 'harsh', 'tushar', 'yash', 'aryan',
  'abhishek', 'ayush', 'kartik', 'shubham', 'rishabh', 'dhruv', 'hardik',
  'anand', 'ganesh', 'murugan', 'krishna', 'shiva', 'ram', 'laxman', 'bharat'
]);

/**
 * Detect gender based on Indian naming patterns
 * Returns 'male' or 'female'
 */
export function detectIndianGender(fullName) {
  if (!fullName || typeof fullName !== 'string') return 'male';

  const parts = fullName.trim().toLowerCase().split(/\s+/);
  const firstName = parts[0];

  // Direct lookup
  if (FEMALE_NAMES.has(firstName)) return 'female';
  if (MALE_NAMES.has(firstName)) return 'male';

  // Check middle/last name keywords if compound (e.g., "Md Zeeshan" or "Kumari")
  if (parts.some((p) => p === 'kumari' || p === 'devi' || p === 'begum' || p === 'kaur')) {
    return 'female';
  }
  if (parts.some((p) => p === 'kumar' || p === 'singh' || p === 'babu' || p === 'khan' || p === 'sharma' || p === 'patel')) {
    // If first name ends with typical female suffixes:
    if (firstName.endsWith('a') || firstName.endsWith('i') || firstName.endsWith('ee') || firstName.endsWith('ka')) {
      return 'female';
    }
    return 'male';
  }

  // Common linguistic suffix heuristics in Indian naming:
  // Names ending with 'a', 'i', 'ti', 'ya', 'ka' are predominantly female (Pooja, Priya, Kavya, Shruti, Aarti)
  // Names ending with 'esh', 'an', 'am', 'ur', 'it', 'ul', 'av', 'raj', 'deep' are predominantly male
  if (
    firstName.endsWith('esh') ||
    firstName.endsWith('an') ||
    firstName.endsWith('am') ||
    firstName.endsWith('raj') ||
    firstName.endsWith('deep') ||
    firstName.endsWith('ul') ||
    firstName.endsWith('it') ||
    firstName.endsWith('ar') ||
    firstName.endsWith('ik')
  ) {
    return 'male';
  }

  if (
    firstName.endsWith('i') ||
    firstName.endsWith('a') ||
    firstName.endsWith('ti') ||
    firstName.endsWith('ya') ||
    firstName.endsWith('ka')
  ) {
    return 'female';
  }

  return 'male';
}

/**
 * Get an authentic Indian avatar photo strictly matching the gender of the name.
 * A deterministic hash ensures the same person always gets the same avatar.
 */
export function getIndianAvatarByName(fullName, forceGender = null) {
  if (!fullName) {
    return INDIAN_MALE_AVATARS[0];
  }

  const gender = forceGender || detectIndianGender(fullName);
  const avatarList = gender === 'female' ? INDIAN_FEMALE_AVATARS : INDIAN_MALE_AVATARS;

  // Compute simple deterministic hash from string
  let hash = 0;
  for (let i = 0; i < fullName.length; i++) {
    hash = (hash << 5) - hash + fullName.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % avatarList.length;

  return avatarList[index];
}

/**
 * Predefined realistic Indian delivery partners with strictly matching avatars
 */
export const INDIAN_DELIVERY_PARTNERS = [
  {
    name: 'Mohammed Zeeshan',
    gender: 'male',
    phone: '+91 97110 54321',
    rating: 4.8,
    trips: 2150,
    vehicle: 'Ather 450X EV Scooter (MH-02-FK-3321)',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80', // Indian man
  },
  {
    name: 'Ramesh Kumar',
    gender: 'male',
    phone: '+91 98450 12345',
    rating: 4.9,
    trips: 1840,
    vehicle: 'TVS Apache 160 (KA-05-EX-4921)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', // Indian man
  },
  {
    name: 'Vikram Singh',
    gender: 'male',
    phone: '+91 98210 99887',
    rating: 5.0,
    trips: 920,
    vehicle: 'Hero Splendor Plus (DL-03-CB-9081)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', // Indian man
  },
  {
    name: 'Arjun Verma',
    gender: 'male',
    phone: '+91 98112 33445',
    rating: 4.9,
    trips: 1450,
    vehicle: 'Bajaj Pulsar 150 (KA-04-MK-7721)',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80', // Indian man
  },
  {
    name: 'Pooja Patel',
    gender: 'female',
    phone: '+91 99800 66778',
    rating: 4.9,
    trips: 1320,
    vehicle: 'Honda Activa 6G (KA-01-EQ-5544)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', // Indian woman
  },
  {
    name: 'Priya Sharma',
    gender: 'female',
    phone: '+91 99100 88221',
    rating: 4.9,
    trips: 1100,
    vehicle: 'TVS Jupiter 125 (DL-08-AB-1290)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', // Indian woman
  },
  {
    name: 'Ananya Deshmukh',
    gender: 'female',
    phone: '+91 98230 44556',
    rating: 4.8,
    trips: 870,
    vehicle: 'Ola S1 Pro EV (MH-12-TR-9041)',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80', // Indian woman
  },
];
