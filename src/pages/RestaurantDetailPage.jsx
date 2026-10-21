import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Star,
  Sparkles,
  Search,
  X,
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
import DishNutritionBadge from '../components/common/DishNutritionBadge';

export default function RestaurantDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const targetItemId = searchParams.get('itemId');
  const targetDish = searchParams.get('dish');

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
  const [filterNonVegOnly, setFilterNonVegOnly] = useState(false);
  const [filterBestsellerOnly, setFilterBestsellerOnly] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [highlightedItemId, setHighlightedItemId] = useState(targetItemId || null);

  const toggleVegOnly = () => {
    setFilterVegOnly((prev) => {
      const next = !prev;
      if (next) setFilterNonVegOnly(false);
      return next;
    });
  };

  const toggleNonVegOnly = () => {
    setFilterNonVegOnly((prev) => {
      const next = !prev;
      if (next) setFilterVegOnly(false);
      return next;
    });
  };

  // Find restaurant by slug or id
  const restaurant = useMemo(() => {
    return (
      RESTAURANTS.find((r) => r.slug === slug || r.id === slug) ||
      RESTAURANTS[0]
    );
  }, [slug]);

  // Auto-scroll and highlight dish if directed from Craving Roulette or search
  useEffect(() => {
    if (targetItemId || targetDish) {
      let matchedId = targetItemId;
      if (!matchedId && targetDish) {
        for (const cat of restaurant.menuCategories) {
          const found = cat.items.find((it) =>
            it.name.toLowerCase().includes(targetDish.toLowerCase())
          );
          if (found) {
            matchedId = found.id;
            break;
          }
        }
      }

      if (matchedId) {
        setHighlightedItemId(matchedId);
        const timer = setTimeout(() => {
          const el = document.getElementById(`dish-item-${matchedId}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 350);

        const clearTimer = setTimeout(() => {
          setHighlightedItemId(null);
        }, 7000);

        return () => {
          clearTimeout(timer);
          clearTimeout(clearTimer);
        };
      }
    }
  }, [targetItemId, targetDish, restaurant]);

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
          if (filterNonVegOnly && item.isVeg) return false;
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
  }, [restaurant, filterVegOnly, filterNonVegOnly, filterBestsellerOnly, searchMenu]);

  return (
    <div className="min-h-screen bg-[#0B0B0E] bg-dark-luxury text-white pb-28">
      {/* Breadcrumb & Navigation */}
      <div className="bg-[#101017]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-400 font-semibold">
            <Link to="/" className="hover:text-rose-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Discovery</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-white/20" />
            <span className="text-white font-bold truncate max-w-[180px] sm:max-w-xs">
              {restaurant.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-300 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded-lg border border-emerald-500/30">
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

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
                {restaurant.name}
              </h1>

              <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium leading-relaxed">
                {restaurant.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-semibold text-gray-200">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{restaurant.address}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{restaurant.deliveryTime} Delivery</span>
                </span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 font-bold shadow-2xs">
                  ₹{restaurant.costForTwo} for two
                </span>
              </div>

              {/* Special Restaurant Deals Strip */}
              <div className="mt-4 pt-4 border-t border-white/15 flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[11px] font-black uppercase text-amber-300 tracking-wider flex items-center gap-1 flex-shrink-0">
                  <Sparkles className="w-3 h-3 fill-amber-300" />
                  Offers:
                </span>
                <div className="flex items-center gap-2 flex-nowrap">
                  <span className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white whitespace-nowrap">
                    🏷️ 50% OFF up to ₹100 • Use INDIA50
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white whitespace-nowrap">
                    ⚡ Free Delivery • Use FREEDEL
                  </span>
                </div>
              </div>
            </div>

            {/* Right Rating Box */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex md:flex-col items-center justify-between gap-3 text-center self-start md:self-auto min-w-[130px] shadow-lg">
              <div className="flex items-center gap-1.5 text-emerald-400 font-black text-3xl">
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

      {/* Menu Filtering Toolbar & Category Quick Jump */}
      <div className="sticky top-20 z-30 bg-[#0E0E14]/90 backdrop-blur-md border-b border-white/10 shadow-xl mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Quick Dietary Filters */}
            <div className="flex items-center gap-2">
              {/* Pure Veg */}
              <button
                type="button"
                onClick={toggleVegOnly}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
                  filterVegOnly
                    ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-[#181822] border-white/10 text-gray-300 hover:border-emerald-500/50 hover:text-white'
                }`}
              >
                <div className="w-3 h-3 rounded border border-emerald-500 flex items-center justify-center p-0.5">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      filterVegOnly ? 'bg-emerald-400' : 'bg-transparent'
                    }`}
                  />
                </div>
                <span>Pure Veg</span>
              </button>

              {/* Non-Veg */}
              <button
                type="button"
                onClick={toggleNonVegOnly}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
                  filterNonVegOnly
                    ? 'bg-rose-950/70 border-rose-500 text-rose-300 shadow-md ring-2 ring-rose-500/20'
                    : 'bg-[#181822] border-white/10 text-gray-300 hover:border-rose-500/50 hover:text-white'
                }`}
              >
                <div className="w-3 h-3 rounded border border-rose-500 flex items-center justify-center p-0.5">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      filterNonVegOnly ? 'bg-rose-400' : 'bg-transparent'
                    }`}
                  />
                </div>
                <span>Non-Veg</span>
              </button>

              {/* Bestsellers */}
              <button
                type="button"
                onClick={() => setFilterBestsellerOnly(!filterBestsellerOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
                  filterBestsellerOnly
                    ? 'bg-amber-950/70 border-amber-500 text-amber-300 shadow-md ring-2 ring-amber-500/20'
                    : 'bg-[#181822] border-white/10 text-gray-300 hover:border-amber-500/50 hover:text-white'
                }`}
              >
                <Sparkles
                  className={`w-3.5 h-3.5 ${
                    filterBestsellerOnly ? 'text-amber-400 fill-amber-400' : 'text-gray-400'
                  }`}
                />
                <span>Bestsellers</span>
              </button>
            </div>

            {/* Search within Menu with dynamic size enhancement */}
            <div className="relative flex-1 max-w-xs sm:focus-within:max-w-md transition-all duration-300">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors pointer-events-none" />
              <input
                type="text"
                placeholder="Search dishes in menu (e.g. Biryani, Paneer)..."
                value={searchMenu}
                onChange={(e) => setSearchMenu(e.target.value)}
                className="w-full pl-9 pr-14 py-2 text-xs font-semibold rounded-2xl border border-white/10 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 bg-[#161620] text-white placeholder:text-gray-500 transition-all shadow-inner"
              />
              {searchMenu && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-rose-300 bg-rose-500/20 px-1.5 py-0.5 rounded">
                    {filteredMenuCategories.reduce((acc, cat) => acc + cat.items.length, 0)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSearchMenu('')}
                    className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Category Jump Pills */}
          {filteredMenuCategories.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 border-t border-white/10">
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider">
                Categories:
              </span>
              {filteredMenuCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#category-${cat.id}`}
                  className="px-2.5 py-1 rounded-lg bg-[#181822] hover:bg-rose-950/60 hover:text-rose-300 text-xs font-bold text-gray-300 border border-white/5 whitespace-nowrap transition-colors"
                >
                  {cat.name} ({cat.items.length})
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu Categories & Items List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {filteredMenuCategories.length > 0 ? (
          filteredMenuCategories.map((category) => (
            <section key={category.id} id={`category-${category.id}`} className="scroll-mt-36">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                <h2 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight">
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

                  const isTargetDish = highlightedItemId === item.id;

                  return (
                    <div
                      key={item.id}
                      id={`dish-item-${item.id}`}
                      className={`relative rounded-3xl p-5 backdrop-blur-md transition-all duration-500 flex justify-between gap-4 group scroll-mt-36 ${
                        isTargetDish
                          ? 'bg-amber-950/30 border-2 border-amber-400 shadow-2xl shadow-amber-500/30 ring-4 ring-amber-400/25 scale-[1.02]'
                          : 'bg-[#14141C]/95 border border-white/10 hover:border-rose-500/40 shadow-xl hover:shadow-2xl hover:shadow-rose-950/30 hover:-translate-y-1'
                      }`}
                    >
                      {/* Roulette Winner Badge */}
                      {isTargetDish && (
                        <div className="absolute -top-3.5 left-5 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 text-black text-[10px] font-black uppercase tracking-wider shadow-lg shadow-amber-950/50 flex items-center gap-1.5 animate-bounce">
                          <Sparkles className="w-3 h-3 fill-black text-black" />
                          <span>Craving Roulette Pick!</span>
                        </div>
                      )}

                      {/* Left: Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <DietaryBadge isVeg={item.isVeg} size="sm" />
                            {item.isBestseller && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase bg-amber-950/60 text-amber-300 border border-amber-600/40 flex items-center gap-1 shadow-2xs">
                                <Sparkles className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                                <span>Bestseller</span>
                              </span>
                            )}
                          </div>

                          <h3 className="font-black font-display text-white text-base leading-snug group-hover:text-rose-400 transition-colors">
                            {item.name}
                          </h3>

                          {/* Price */}
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-extrabold text-base text-rose-300">
                              {formatCurrency(item.price)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-xs text-gray-500 line-through font-semibold">
                                {formatCurrency(item.originalPrice)}
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>

                          {/* Nutrition Macro Pills & Dietary Badges */}
                          <DishNutritionBadge dish={item} compact={true} />
                        </div>

                        {/* Rating if present */}
                        {item.rating && (
                          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="text-white font-bold">{item.rating}</span>
                            <span className="text-gray-500">({item.votes} votes)</span>
                          </div>
                        )}
                      </div>

                      {/* Right: Dish Photo & Add Button */}
                      <div className="relative flex flex-col items-center justify-between w-32 sm:w-36 flex-shrink-0">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#1D1D26] shadow-md border border-white/5">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
                            }}
                          />
                        </div>

                        {/* Add / Quantity Button */}
                        <div className="mt-2.5 w-full">
                          {itemQtyInCart > 0 && !item.customizable ? (
                            <div className="w-full flex items-center justify-between bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl px-2.5 py-1.5 shadow-md shadow-rose-950/60">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(primaryKey, itemQtyInCart - 1)
                                }
                                className="text-white hover:text-rose-200 p-0.5 active:scale-90 transition-transform cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5 stroke-[3]" />
                              </button>
                              <span className="text-xs font-black">
                                {itemQtyInCart}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(primaryKey, itemQtyInCart + 1)
                                }
                                className="text-white hover:text-rose-200 p-0.5 active:scale-90 transition-transform cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleAddItem(item)}
                              className="w-full py-1.5 px-3 rounded-xl bg-gradient-to-r from-rose-950/50 to-purple-950/30 border border-rose-500/40 text-rose-300 hover:from-brand-600 hover:to-rose-600 hover:text-white hover:border-transparent font-extrabold text-xs shadow-xs hover:shadow-lg hover:shadow-rose-950/50 transition-all active:scale-95 flex items-center justify-center gap-1 group/btn cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5 stroke-[3]" />
                              <span>{itemQtyInCart > 0 ? `Add (${itemQtyInCart})` : 'ADD'}</span>
                            </button>
                          )}
                          {item.customizable && (
                            <span className="block text-center text-[10px] text-gray-400 font-semibold mt-1">
                              Customisable
                            </span>
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
          <div className="bg-[#14141C] rounded-3xl p-10 text-center border border-white/10 shadow-xl max-w-md mx-auto">
            <p className="text-sm text-gray-400">
              No dishes found matching your search or filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchMenu('');
                setFilterVegOnly(false);
                setFilterNonVegOnly(false);
                setFilterBestsellerOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-brand-600 to-rose-600 text-white rounded-xl text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Floating Bottom Cart Bar (if user added items) */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-18 md:bottom-4 left-4 right-4 z-40 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={openCartDrawer}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-rose-600 to-brand-600 hover:from-brand-500 hover:to-rose-500 text-white font-bold text-sm shadow-2xl shadow-rose-950/80 flex items-center justify-between transition-all hover:scale-[1.01] active:scale-[0.99] border border-white/20 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-black">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-rose-200 font-semibold">
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
