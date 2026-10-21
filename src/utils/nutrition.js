/**
 * Intelligent Nutritional & Dietary Profiler for Dishes
 * Computes realistic macronutrients (Calories, Protein, Carbs, Fats)
 * and dietary tags (High Protein, Jain Friendly, Gluten-Free, Keto-Friendly, Low Calorie).
 */

export function getDishNutritionAndBadges(dish) {
  if (!dish) return null;

  // If item already defines custom nutrition, use it
  if (dish.nutrition) {
    return {
      nutrition: dish.nutrition,
      dietaryBadges: dish.dietaryBadges || [],
    };
  }

  const name = (dish.name || '').toLowerCase();
  const desc = (dish.description || '').toLowerCase();
  const isVeg = Boolean(dish.isVeg);
  const price = dish.price || 250;

  // Estimate calories based on price tier, dish type, veg/non-veg
  let calories = 380;
  let protein = 12;
  let carbs = 52;
  let fats = 14;

  const badges = [];

  // Biryani & Rice dishes
  if (name.includes('biryani') || name.includes('pulao') || name.includes('rice')) {
    calories = isVeg ? 490 : 620;
    protein = isVeg ? 16 : 38;
    carbs = 72;
    fats = isVeg ? 18 : 24;
    badges.push({ label: 'Gluten-Free', icon: '🌾', color: 'emerald' });
    if (!isVeg) badges.push({ label: 'High Protein', icon: '💪', color: 'rose' });
  }
  // Paneer / Chicken / Tandoori Tikka & Kebabs
  else if (name.includes('tikka') || name.includes('kebab') || name.includes('tandoori') || name.includes('grill')) {
    calories = isVeg ? 390 : 420;
    protein = isVeg ? 24 : 44;
    carbs = 14;
    fats = 19;
    badges.push({ label: 'High Protein', icon: '💪', color: 'rose' });
    badges.push({ label: 'Keto Friendly', icon: '🥑', color: 'amber' });
    badges.push({ label: 'Gluten-Free', icon: '🌾', color: 'emerald' });
  }
  // Paneer curries & dals
  else if (name.includes('paneer') || name.includes('dal') || name.includes('makhani')) {
    calories = 430;
    protein = 22;
    carbs = 36;
    fats = 24;
    if (name.includes('dal')) {
      badges.push({ label: 'High Fiber', icon: '🌱', color: 'emerald' });
    }
    badges.push({ label: 'Gluten-Free', icon: '🌾', color: 'emerald' });
  }
  // Breads / Naan / Roti / Paratha
  else if (name.includes('naan') || name.includes('roti') || name.includes('paratha') || name.includes('kulcha')) {
    calories = 240;
    protein = 7;
    carbs = 44;
    fats = 6;
  }
  // South Indian / Dosa / Idli
  else if (name.includes('dosa') || name.includes('idli') || name.includes('vada') || name.includes('uttapam')) {
    calories = name.includes('idli') ? 180 : 310;
    protein = 9;
    carbs = 54;
    fats = name.includes('idli') ? 2 : 11;
    badges.push({ label: 'Fermented Gut Health', icon: '✨', color: 'purple' });
    badges.push({ label: 'Gluten-Free', icon: '🌾', color: 'emerald' });
    if (name.includes('idli')) {
      badges.push({ label: 'Low Calorie', icon: '🥗', color: 'sky' });
    }
  }
  // Pizza & Burgers
  else if (name.includes('pizza') || name.includes('burger')) {
    calories = 650;
    protein = isVeg ? 18 : 32;
    carbs = 76;
    fats = 28;
  }
  // Chaat / Street food
  else if (name.includes('puri') || name.includes('chaat') || name.includes('samosa') || name.includes('kachori')) {
    calories = 290;
    protein = 6;
    carbs = 42;
    fats = 12;
  }
  // Desserts & Sweets
  else if (name.includes('jamun') || name.includes('halwa') || name.includes('kulfi') || name.includes('rasgulla') || name.includes('sweet') || name.includes('cake')) {
    calories = 360;
    protein = 5;
    carbs = 58;
    fats = 14;
    badges.push({ label: 'Cheat Day Delicacy', icon: '✨', color: 'amber' });
  }
  // Healthy salads & bowls
  else if (name.includes('salad') || name.includes('bowl') || name.includes('sprout')) {
    calories = 240;
    protein = 16;
    carbs = 28;
    fats = 6;
    badges.push({ label: 'Superfood Clean', icon: '🥗', color: 'emerald' });
    badges.push({ label: 'Gluten-Free', icon: '🌾', color: 'emerald' });
    badges.push({ label: 'Low Calorie', icon: '⚡', color: 'sky' });
  }

  // Jain-friendly detection (Pure veg, no meat, no onion/garlic dishes)
  if (isVeg && (desc.includes('jain') || name.includes('dal tadka') || name.includes('paneer') || name.includes('khichdi') || name.includes('idli') || name.includes('dosa') || name.includes('kheer'))) {
    if (!name.includes('garlic') && !name.includes('pyaz') && !name.includes('onion')) {
      badges.push({ label: 'Jain Friendly', icon: '🪷', color: 'cyan' });
    }
  }

  return {
    nutrition: {
      calories,
      protein,
      carbs,
      fats,
      serving: '1 Serving (Standard portion)',
    },
    dietaryBadges: badges.slice(0, 3), // top 3 badges
  };
}
