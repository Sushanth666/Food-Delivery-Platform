import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Star,
  Sparkles,
  Search,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBag,
  SlidersHorizontal,
  ChevronRight,
  Info,
} from 'lucide-react';
import { RESTAURANTS } from '../data/restaurants';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import DietaryBadge from '../components/common/DietaryBadge';
import RatingPill from '../components/common/RatingPill';
import ItemCustomizerModal from '../components/restaurant/ItemCustomizerModal';

export default function RestaurantDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    updateQuantity,
    bill,
    openCartDrawer,
    currentRestaurant,
  } = useCart();

  const [searchMenu, setSearchMenu] = useState('');
  const [filterVegOnly, setFilterVegOnly] = useState(false);
  const [filterBestsellerOnly, setFilterBestsellerOnly] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);

  // Find restaurant by slug or id
  const restaurant = useMemo(() => {
    return (
      RESTAURANTS.find((r) => r.slug === slug || r.id === slug) ||
      RESTAURANTS[0]
    );
  }, [slug]);

  // Compute item quantity in cart (for non-customized or sum of same item)
  const getItemCartQuantity = (itemId) => {
    return cartItems
      .filter((it) => it.id === itemId)
      .reduce((sum, it) => sum + it.quantity, 0);
  };

  const getItemPrimaryCartKey = (itemId) => {
    const found = cartItems.find((it) => it.id === itemId);
    return found ? found.cartKey : null;
  };

  const handleAddItem = (item) => {
    if (item.customizable) {
      setCustomizingItem(item);
    } else {
      addToCart(restaurant, item, null);
    }
  };

  // Filter menu items by search and dietary switches
  const filteredMenuCategories = useMemo(() => {
    return restaurant.menuCategories
      .map((cat) => {
        const filteredItems = cat.items.filter((item) => {
          if (filterVegOnly && !item.isVeg) return false;
          if (filterBestsellerOnly && !item.isBestseller) return false;
          if (searchMenu.trim()) {
            const q = searchMenu.toLowerCase();
            const matchesName = item.name.toLowerCase().includes(q);
            const matchesDesc = item.description.toLowerCase().includes(q);
            if (!matchesName && !matchesDesc) return false;
          }
          return true;
        });

        return {
          ...cat,
          items: filteredItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [restaurant, filterVegOnly, filterBestsellerOnly, searchMenu]);

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <Link to="/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Discovery</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <span className="text-gray-900 truncate max-w-[180px] sm:max-w-xs">
              {restaurant.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {restaurant.isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>
        </div>
      </div>

      {/* Restaurant Header Banner Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 text-white shadow-xl shadow-gray-200/50">
          {/* Banner Photo Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src={restaurant.bannerImage || restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover opacity-40 brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
          </div>

          {/* Restaurant Details Header */}
          <div className="relative z-10 p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {restaurant.tag && (
                  <span className="px-3 py-1 bg-brand-500 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>{restaurant.tag}</span>
                  </span>
                )}
                {restaurant.isPureVeg && (
                  <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-md">
                    100% Pure Vegetarian
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                {restaurant.name}
              </h1>

              <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium leading-relaxed">
                {restaurant.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold text-gray-200">
                <span className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{restaurant.address}</span>
                </span>
                <span className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{restaurant.deliveryTime} Delivery</span>
                </span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-bold">
                  ${restaurant.costForTwo} for two
                </span>
              </div>
            </div>

            {/* Right Rating Box */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex md:flex-col items-center justify-between gap-3 text-center self-start md:self-auto min-w-[120px]">
              <div className="flex items-center gap-1.5 text-emerald-400 font-black text-2xl">
                <span>{restaurant.rating.toFixed(1)}</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="text-[11px] text-gray-300 font-semibold">
                {restaurant.reviewCount.toLocaleString()} verified reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Filtering Toolbar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterVegOnly(!filterVegOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
                filterVegOnly
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  filterVegOnly ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
              <span>Pure Veg Only</span>
            </button>

            <button
              type="button"
              onClick={() => setFilterBestsellerOnly(!filterBestsellerOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 ${
                filterBestsellerOnly
                  ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-sm'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              <Sparkles
                className={`w-3.5 h-3.5 ${
                  filterBestsellerOnly ? 'text-amber-500' : 'text-gray-400'
                }`}
              />
              <span>Bestsellers</span>
            </button>
          </div>

          {/* Search within Menu */}
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in menu..."
              value={searchMenu}
              onChange={(e) => setSearchMenu(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-medium rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500 bg-gray-50 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Menu Categories & Items List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {filteredMenuCategories.length > 0 ? (
          filteredMenuCategories.map((category) => (
            <section key={category.id} className="scroll-mt-36">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                  {category.name}
                </h2>
                <span className="text-xs font-bold text-gray-400">
                  {category.items.length} {category.items.length === 1 ? 'dish' : 'dishes'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => {
                  const itemQtyInCart = getItemCartQuantity(item.id);
                  const primaryKey = getItemPrimaryCartKey(item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-3xl p-5 border border-gray-100 shadow-soft hover:shadow-hover transition-all duration-300 flex justify-between gap-4 group"
                    >
                      {/* Left: Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <DietaryBadge isVeg={item.isVeg} size="sm" />
                            {item.isBestseller && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-200">
                                Bestseller
                              </span>
                            )}
                          </div>

                          <h3 className="font-extrabold text-gray-900 text-base leading-snug group-hover:text-brand-600 transition-colors">
                            {item.name}
                          </h3>

                          {/* Price */}
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-extrabold text-sm sm:text-base text-gray-900">
                              {formatCurrency(item.price)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-xs text-gray-400 line-through font-semibold">
                                {formatCurrency(item.originalPrice)}
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        {/* Rating if present */}
                        {item.rating && (
                          <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="text-gray-800 font-bold">{item.rating}</span>
                            <span>({item.votes} votes)</span>
                          </div>
                        )}
                      </div>

                      {/* Right: Dish Photo & Add Button */}
                      <div className="relative flex flex-col items-center justify-between w-32 sm:w-36 flex-shrink-0">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>

                        {/* Add / Quantity Button */}
                        <div className="mt-2 w-full">
                          {itemQtyInCart > 0 && !item.customizable ? (
                            <div className="w-full flex items-center justify-between bg-brand-50 border border-brand-200 rounded-xl px-2.5 py-1.5 shadow-sm">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(primaryKey, itemQtyInCart - 1)
                                }
                                className="text-brand-600 hover:text-brand-800 p-0.5"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-black text-brand-700">
                                {itemQtyInCart}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(primaryKey, itemQtyInCart + 1)
                                }
                                className="text-brand-600 hover:text-brand-800 p-0.5"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleAddItem(item)}
                              className="w-full py-1.5 px-3 rounded-xl bg-white border border-brand-500 text-brand-600 hover:bg-brand-600 hover:text-white font-extrabold text-xs shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-1"
                            >
                              <Plus className="w-3.5 h-3.5 stroke-[3]" />
                              <span>{itemQtyInCart > 0 ? `Add (${itemQtyInCart})` : 'ADD'}</span>
                            </button>
                          )}

                          {item.customizable && (
                            <div className="text-[10px] text-center text-gray-700 font-semibold mt-1">
                              Customisable
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))
        ) : (
          <div className="bg-white rounded-3xl p-10 text-center border border-gray-100 shadow-soft max-w-md mx-auto">
            <p className="text-sm text-gray-500">
              No dishes found matching your search or filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchMenu('');
                setFilterVegOnly(false);
                setFilterBestsellerOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Floating Bottom Cart Bar (if user added items) */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={openCartDrawer}
            className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-2xl shadow-brand-500/40 flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99] border border-brand-400"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-black">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-brand-100 font-semibold">
                  {bill.itemCount} {bill.itemCount === 1 ? 'item' : 'items'} in Cart
                </div>
                <div className="text-base font-black">
                  {formatCurrency(bill.total)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-bold">
              <span>View Cart</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Item Customizer Modal */}
      <ItemCustomizerModal
        isOpen={!!customizingItem}
        onClose={() => setCustomizingItem(null)}
        item={customizingItem}
        restaurant={restaurant}
        onAddToCart={addToCart}
      />
    </div>
  );
}
