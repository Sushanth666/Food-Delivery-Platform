/**
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
