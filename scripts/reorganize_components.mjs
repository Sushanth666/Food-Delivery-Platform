import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');
const componentsDir = path.join(srcDir, 'components');
const commonDir = path.join(componentsDir, 'common');
const modalsDir = path.join(componentsDir, 'modals');
const uiDir = path.join(componentsDir, 'ui');
const feedbackDir = path.join(componentsDir, 'feedback');

fs.mkdirSync(modalsDir, { recursive: true });
fs.mkdirSync(uiDir, { recursive: true });
fs.mkdirSync(feedbackDir, { recursive: true });

// Classification of components
const modalFiles = [
  'AuthModal.jsx',
  'ConflictModal.jsx',
  'CustomColorPickerModal.jsx',
  'EditProfileModal.jsx',
  'GoldClubModal.jsx',
  'LocationModal.jsx',
  'LogoutModal.jsx',
  'OffersNotificationsModal.jsx',
  'WishlistModal.jsx',
];

const uiFiles = [
  'AmbientBackground.jsx',
  'DietaryBadge.jsx',
  'DishNutritionBadge.jsx',
  'RatingPill.jsx',
  'UserAvatar.jsx',
];

const feedbackFiles = [
  'AuthToast.jsx',
];

// 1. Copy modals & update internal imports
for (const file of modalFiles) {
  const srcPath = path.join(commonDir, file);
  const destPath = path.join(modalsDir, file);
  if (fs.existsSync(srcPath)) {
    let content = fs.readFileSync(srcPath, 'utf8');
    // If it imports UserAvatar from './UserAvatar', point to '../ui/UserAvatar'
    content = content.replace(/from '\.\/UserAvatar'/g, "from '../ui/UserAvatar'");
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Copied to modals: ${file}`);
  }
}

// 2. Copy UI primitives
for (const file of uiFiles) {
  const srcPath = path.join(commonDir, file);
  const destPath = path.join(uiDir, file);
  if (fs.existsSync(srcPath)) {
    const content = fs.readFileSync(srcPath, 'utf8');
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Copied to ui: ${file}`);
  }
}

// 3. Copy feedback components
for (const file of feedbackFiles) {
  const srcPath = path.join(commonDir, file);
  const destPath = path.join(feedbackDir, file);
  if (fs.existsSync(srcPath)) {
    const content = fs.readFileSync(srcPath, 'utf8');
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Copied to feedback: ${file}`);
  }
}

// 4. Create barrel export in src/components/modals/index.js
const modalsIndexContent = `/**
 * Modals Component Barrel Export
 * Centralizes all application dialogs, sheets, and popups
 */
export { default as AuthModal } from './AuthModal';
export { default as ConflictModal } from './ConflictModal';
export { default as CustomColorPickerModal } from './CustomColorPickerModal';
export { default as EditProfileModal } from './EditProfileModal';
export { default as GoldClubModal } from './GoldClubModal';
export { default as LocationModal } from './LocationModal';
export { default as LogoutModal } from './LogoutModal';
export { default as OffersNotificationsModal } from './OffersNotificationsModal';
export { default as WishlistModal } from './WishlistModal';

// Re-export specialized feature modals for single-entry convenience
export { default as ItemCustomizerModal } from '../restaurant/ItemCustomizerModal';
export { default as CravingWheelModal } from '../home/CravingWheelModal';
export { default as RewardsHubModal } from '../rewards/RewardsHubModal';
export { default as EnhancedSearchModal } from '../search/EnhancedSearchModal';
export { default as GroupOrderModal } from '../cart/GroupOrderModal';
export { default as GiftOrderModal } from '../cart/GiftOrderModal';
`;
fs.writeFileSync(path.join(modalsDir, 'index.js'), modalsIndexContent, 'utf8');

// 5. Create barrel export in src/components/ui/index.js
const uiIndexContent = `/**
 * UI & Badges Barrel Export
 * Atomic visual design elements, badges, pills, and backgrounds
 */
export { default as AmbientBackground } from './AmbientBackground';
export { default as DietaryBadge } from './DietaryBadge';
export { default as DishNutritionBadge } from './DishNutritionBadge';
export { default as RatingPill } from './RatingPill';
export { default as UserAvatar, AVATAR_THEMES } from './UserAvatar';
`;
fs.writeFileSync(path.join(uiDir, 'index.js'), uiIndexContent, 'utf8');

// 6. Create barrel export in src/components/feedback/index.js
const feedbackIndexContent = `/**
 * Feedback Barrel Export
 * User toasts, notifications, and interactive status feedback
 */
export { default as AuthToast } from './AuthToast';
`;
fs.writeFileSync(path.join(feedbackDir, 'index.js'), feedbackIndexContent, 'utf8');

// 7. Create master barrel export in src/components/index.js
const componentsMasterIndex = `/**
 * CraveWave Master Component Library
 * Unified barrel export for effortless imports across the application
 */
export * from './ui';
export * from './modals';
export * from './feedback';
export { default as Navbar } from './layout/Navbar';
export { default as Footer } from './layout/Footer';
export { default as MobileBottomNav } from './layout/MobileBottomNav';
export { default as CartDrawer } from './cart/CartDrawer';
export { default as HeroBanner } from './home/HeroBanner';
export { default as CategoryBar } from './home/CategoryBar';
export { default as FilterBar } from './home/FilterBar';
export { default as RestaurantCard } from './home/RestaurantCard';
export { default as FeaturedExquisiteCuisines } from './home/FeaturedExquisiteCuisines';
`;
fs.writeFileSync(path.join(componentsDir, 'index.js'), componentsMasterIndex, 'utf8');

// 8. Create backwards-compatible re-exports in src/components/common/
for (const file of modalFiles) {
  const baseName = file.replace('.jsx', '');
  const bridge = `export { default } from '../modals/${baseName}';\nexport * from '../modals/${baseName}';\n`;
  fs.writeFileSync(path.join(commonDir, file), bridge, 'utf8');
}
for (const file of uiFiles) {
  const baseName = file.replace('.jsx', '');
  const bridge = `export { default } from '../ui/${baseName}';\nexport * from '../ui/${baseName}';\n`;
  fs.writeFileSync(path.join(commonDir, file), bridge, 'utf8');
}
for (const file of feedbackFiles) {
  const baseName = file.replace('.jsx', '');
  const bridge = `export { default } from '../feedback/${baseName}';\nexport * from '../feedback/${baseName}';\n`;
  fs.writeFileSync(path.join(commonDir, file), bridge, 'utf8');
}

// Also create src/components/common/index.js re-exporting everything
const commonIndex = `/**
 * Backward compatibility barrel export for legacy src/components/common imports
 */
export * from '../ui';
export * from '../modals';
export * from '../feedback';
`;
fs.writeFileSync(path.join(commonDir, 'index.js'), commonIndex, 'utf8');

console.log('Restructuring completed successfully!');
