export const RESTAURANTS = [
  {
    id: 'rest-1',
    name: 'The Burger Barn & Smokehouse',
    slug: 'burger-barn-smokehouse',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 1420,
    deliveryTime: '20-30 min',
    distance: '1.8 km',
    priceTier: '$$',
    costForTwo: 28,
    isPureVeg: false,
    cuisines: ['Burgers', 'American', 'Fast Food', 'Beverages'],
    tag: 'Trending #1',
    isOpen: true,
    address: '42 Maple Avenue, Downtown Gourmet District',
    description: 'Home of legendary charcoal-grilled smashed beef burgers, house-made brioche buns, truffle fries, and decadent milkshakes.',
    menuCategories: [
      {
        id: 'cat-bestsellers',
        name: '🔥 Crowd Favorites',
        items: [
          {
            id: 'item-101',
            name: 'Double Truffle Smash Burger',
            description: 'Two smashed prime Angus beef patties, aged white cheddar, sautéed crimini mushrooms, and black truffle aioli on toasted brioche.',
            price: 14.99,
            originalPrice: 17.99,
            image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 520,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Single Patty', priceDiff: -3 },
                { name: 'Standard Double', priceDiff: 0 },
                { name: 'Triple Carnivore', priceDiff: 4.5 }
              ],
              addOns: [
                { name: 'Extra Cheddar Cheese', price: 1.5 },
                { name: 'Applewood Smoked Bacon', price: 2.2 },
                { name: 'Fried Free-Range Egg', price: 1.8 },
                { name: 'Caramelized Sweet Onions', price: 1.0 }
              ],
              spiceLevels: ['Mild', 'Zesty Pepper', 'Fiery Ghost Chili']
            }
          },
          {
            id: 'item-102',
            name: 'Crispy Nashville Hot Chicken Burger',
            description: 'Buttermilk-brined crispy fried chicken breast dredged in cayenne spiced butter, dill pickles, and creamy coleslaw.',
            price: 13.49,
            originalPrice: 15.49,
            image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.8,
            votes: 380,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Classic Burger', priceDiff: 0 },
                { name: 'Jumbo Feast Burger', priceDiff: 3.5 }
              ],
              addOns: [
                { name: 'Extra Pickle Crunch', price: 0.8 },
                { name: 'Monterey Jack Cheese', price: 1.5 },
                { name: 'Spicy Ranch Drizzle', price: 1.0 }
              ],
              spiceLevels: ['Mild', 'Nashville Hot', 'Reaper Dare']
            }
          }
        ]
      },
      {
        id: 'cat-burgers',
        name: 'Gourmet Burgers',
        items: [
          {
            id: 'item-103',
            name: 'Smoked BBQ Bacon Cheeseburger',
            description: 'Grilled patty basted in hickory smoked BBQ reduction, crispy smoked bacon strips, melted sharp cheddar, onion rings.',
            price: 13.99,
            originalPrice: 16.00,
            image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: false,
            rating: 4.7,
            votes: 210,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Single', priceDiff: 0 },
                { name: 'Double Bacon Stack', priceDiff: 4.0 }
              ],
              addOns: [
                { name: 'Jalapeño Poppers', price: 2.0 },
                { name: 'Smoked Gouda', price: 1.8 }
              ],
              spiceLevels: ['Mild Sweet BBQ', 'Smoky Chipotle']
            }
          },
          {
            id: 'item-104',
            name: 'Avocado Green Goddess Veggie Burger',
            description: 'Crispy quinoa and black bean roasted patty, fresh sliced Haas avocado, heirloom tomato, sprouts, and herb goddess crema.',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.7,
            votes: 195,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Brioche Bun', priceDiff: 0 },
                { name: 'Lettuce Wrap (Low Carb)', priceDiff: 0 },
                { name: 'Gluten-Free Bun', priceDiff: 2.0 }
              ],
              addOns: [
                { name: 'Extra Avocado Scoop', price: 2.5 },
                { name: 'Grilled Mushrooms', price: 1.5 }
              ],
              spiceLevels: ['Gentle Herb', 'Spicy Chimichurri']
            }
          }
        ]
      },
      {
        id: 'cat-sides',
        name: 'Sides & Shakes',
        items: [
          {
            id: 'item-105',
            name: 'Truffle Parmesan Hand-cut Fries',
            description: 'Golden Idaho potatoes dusted with aromatic Italian white truffle oil, grated aged Parmesan, and fresh rosemary sprigs.',
            price: 6.99,
            image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 440,
            customizable: false
          },
          {
            id: 'item-106',
            name: 'Salted Caramel Bourbon Thick Shake',
            description: 'House churned vanilla bean gelato blended with slow-cooked salted caramel sauce, sea salt flakes, and whipped cream.',
            price: 6.49,
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: false,
            rating: 4.8,
            votes: 180,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-2',
    name: 'Bella Napoli Woodfired Pizzeria',
    slug: 'bella-napoli-pizzeria',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 2150,
    deliveryTime: '25-35 min',
    distance: '2.4 km',
    priceTier: '$$',
    costForTwo: 32,
    isPureVeg: false,
    cuisines: ['Pizza', 'Italian', 'Pasta', 'Desserts'],
    tag: 'Chef Choice',
    isOpen: true,
    address: '88 Corso San Gennaro, Little Italy',
    description: 'Authentic 48-hour fermented sourdough crust baked at 900°F in imported volcanic stone ovens with San Marzano tomatoes and Fior di Latte.',
    menuCategories: [
      {
        id: 'cat-napoli-pizza',
        name: '🍕 Signature Artisan Pizzas',
        items: [
          {
            id: 'item-201',
            name: 'Margherita D.O.P. Speciale',
            description: 'San Marzano tomato sauce, fresh buffalo mozzarella, hand-torn basil leaves, extra virgin cold-pressed olive oil, and sea salt.',
            price: 15.99,
            originalPrice: 18.99,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 680,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: '10" Personal Crust', priceDiff: -3 },
                { name: '12" Classic Artisan', priceDiff: 0 },
                { name: '16" Family Stonebaked', priceDiff: 6 }
              ],
              addOns: [
                { name: 'Extra Buffalo Mozzarella', price: 2.5 },
                { name: 'Kalamata Black Olives', price: 1.5 },
                { name: 'Roasted Garlic Cloves', price: 1.0 },
                { name: 'Hot Honey Drizzle', price: 1.8 }
              ],
              spiceLevels: ['Traditional Italian', 'Crushed Red Pepper Flakes']
            }
          },
          {
            id: 'item-202',
            name: 'Diavola Pepperoni & Hot Calabrian',
            description: 'Spicy artisanal pepperoni cups, fermented Calabrian chili paste, mozzarella, organic oregano, and chili infused honey.',
            price: 17.99,
            originalPrice: 20.99,
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 510,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: '12" Classic Artisan', priceDiff: 0 },
                { name: '16" Family Stonebaked', priceDiff: 6 }
              ],
              addOns: [
                { name: 'Double Pepperoni Cups', price: 3.0 },
                { name: 'Prosciutto di Parma', price: 3.5 }
              ],
              spiceLevels: ['Spicy Piccante', 'Extra Calabrian Fire']
            }
          },
          {
            id: 'item-203',
            name: 'Tartufo Funghi & Wild Truffle',
            description: 'Creamy taleggio fondue base, sautéed porcini and cremini mushrooms, thyme, truffle oil, and pecorino romano.',
            price: 18.49,
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: false,
            rating: 4.8,
            votes: 290,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: '12" Classic Artisan', priceDiff: 0 },
                { name: '16" Family Stonebaked', priceDiff: 6 }
              ],
              addOns: [
                { name: 'Arugula Rocket Greens', price: 1.5 },
                { name: 'Shaved Black Truffle', price: 4.0 }
              ],
              spiceLevels: ['Mild Herbal', 'Black Pepper Infused']
            }
          }
        ]
      },
      {
        id: 'cat-pasta-dessert',
        name: 'Pastas & Sweet Bakes',
        items: [
          {
            id: 'item-204',
            name: 'Handcrafted Truffle Fettuccine Alfredo',
            description: 'Fresh egg pasta tossed in a velvety emulsion of 24-month aged Parmigiano Reggiano, French butter, and black summer truffle shavings.',
            price: 16.50,
            image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 310,
            customizable: false
          },
          {
            id: 'item-205',
            name: 'Traditional Venetian Tiramisù',
            description: 'Espresso-soaked Savoiardi ladyfingers layered with mascarpone cream, Marsala wine whisper, and dark Dutch cocoa powder.',
            price: 7.99,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 420,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-3',
    name: 'Royal Dawat — Awadhi & Dum Biryani',
    slug: 'royal-dawat-dum-biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80',
    rating: 4.7,
    reviewCount: 3100,
    deliveryTime: '30-40 min',
    distance: '3.1 km',
    priceTier: '$$',
    costForTwo: 26,
    isPureVeg: false,
    cuisines: ['Biryani', 'Mughlai', 'Kebabs', 'Indian'],
    tag: 'Heritage Recipe',
    isOpen: true,
    address: '15 Nizam Royal Palace Way, Heritage Colony',
    description: 'Slow-cooked in sealed earthen clay pots (Handi) over low charcoal heat with aged long-grain basmati, saffron milk, and royal whole spices.',
    menuCategories: [
      {
        id: 'cat-biryani',
        name: '🍚 Royal Dum Biryanis',
        items: [
          {
            id: 'item-301',
            name: 'Nizami Shahi Chicken Dum Biryani',
            description: 'Tender chicken marinated overnight in Kashmiri saffron, yogurt, and 32 secret Lucknowi spices, layered with fragrant basmati. Served with spiced Mirchi Salan & Raita.',
            price: 15.49,
            originalPrice: 17.99,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 940,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Box (Serves 1-2)', priceDiff: 0 },
                { name: 'Jumbo Clay Pot (Serves 2-3)', priceDiff: 7.5 }
              ],
              addOns: [
                { name: 'Extra Boiled Egg (2 pcs)', price: 1.5 },
                { name: 'Burani Garlic Raita Cup', price: 1.2 },
                { name: 'Extra Salan Gravy', price: 1.0 }
              ],
              spiceLevels: ['Mild Royal', 'Medium Spicy', 'Andhra Fiery']
            }
          },
          {
            id: 'item-302',
            name: 'Awadhi Subz Paneer Dum Biryani',
            description: 'Cubes of fresh malai paneer, French beans, baby potatoes, and florets layered with saffron ghee basmati and mint leaves.',
            price: 13.99,
            image: 'https://images.unsplash.com/photo-1642821373181-696a54913e9a?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.7,
            votes: 410,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Box', priceDiff: 0 },
                { name: 'Family Pot', priceDiff: 6.5 }
              ],
              addOns: [
                { name: 'Extra Roasted Paneer Cubes', price: 2.5 },
                { name: 'Pineapple Mint Raita', price: 1.5 }
              ],
              spiceLevels: ['Fragrant Mild', 'Traditional Spicy']
            }
          }
        ]
      },
      {
        id: 'cat-kebabs',
        name: 'Tandoori Kebabs & Curries',
        items: [
          {
            id: 'item-303',
            name: 'Melt-in-mouth Galouti Kebabs (4 pcs)',
            description: 'Velvety minced lamb kebabs infused with smoked cloves, rose petals, and clarified butter. Served on mini saffron parathas.',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.8,
            votes: 380,
            customizable: false
          },
          {
            id: 'item-304',
            name: 'Silky Butter Chicken (Murgh Makhani)',
            description: 'Charcoal-roasted tandoori chicken cooked in a rich, velvety tomato and cashew gravy enriched with butter, honey, and kasuri methi.',
            price: 14.49,
            image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 560,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-4',
    name: 'Kyoto Ramen & Sushi House',
    slug: 'kyoto-ramen-sushi',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 1840,
    deliveryTime: '25-35 min',
    distance: '2.1 km',
    priceTier: '$$$',
    costForTwo: 42,
    isPureVeg: false,
    cuisines: ['Asian', 'Sushi', 'Ramen', 'Japanese'],
    tag: 'Michelin Guide 2024',
    isOpen: true,
    address: '204 Cherry Blossom Way, East Harbour',
    description: 'Master chefs rolling pristine sashimi-grade Atlantic salmon, bluefin tuna, and crafting 18-hour simmered Tonkotsu bone broths.',
    menuCategories: [
      {
        id: 'cat-ramen',
        name: '🍜 Steaming Ramen Bowls',
        items: [
          {
            id: 'item-401',
            name: 'Rich Tonkotsu Black Garlic Ramen',
            description: 'Thick creamy pork bone broth brewed 18 hours, slow-braised chashu pork belly slices, marinated nitamago soft egg, menma bamboo, and roasted black garlic oil (mayu).',
            price: 16.99,
            originalPrice: 19.99,
            image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 5.0,
            votes: 720,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Bowl', priceDiff: 0 },
                { name: 'Sumo Bowl (+ Extra Noodles)', priceDiff: 3.5 }
              ],
              addOns: [
                { name: 'Extra Chashu Pork Slices (2x)', price: 3.0 },
                { name: 'Extra Ajitsuke Ramen Egg', price: 1.8 },
                { name: 'Crispy Nori Seaweed (4 sheets)', price: 1.0 },
                { name: 'Sweet Corn & Butter Pat', price: 1.2 }
              ],
              spiceLevels: ['Standard Rich Umami', 'Spicy Rayu Chili Oil (Level 1)', 'Ghost Togarashi (Level 3)']
            }
          },
          {
            id: 'item-402',
            name: 'Spicy Sesame Tantanmen (Vegan Option)',
            description: 'Velvety roasted sesame broth infused with Japanese red chili paste, wok-seared plant mince, baby bok choy, scallions, and toasted sesame.',
            price: 15.49,
            image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 340,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Bowl', priceDiff: 0 },
                { name: 'Extra Broth & Noodles', priceDiff: 3.0 }
              ],
              addOns: [
                { name: 'Crispy Silken Tofu', price: 2.0 },
                { name: 'Shiitake Mushroom Caps', price: 2.2 }
              ],
              spiceLevels: ['Medium Warm', 'Spicy Sesame Fire']
            }
          }
        ]
      },
      {
        id: 'cat-sushi',
        name: '🍱 Handcrafted Sushi & Rolls',
        items: [
          {
            id: 'item-403',
            name: 'Dragon Flame Roll (8 pcs)',
            description: 'Crispy tempura prawn and cucumber topped with torched king salmon, avocado slices, tobiko flying fish roe, and spicy unagi glaze.',
            price: 17.50,
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 490,
            customizable: false
          },
          {
            id: 'item-404',
            name: 'Crispy Gyoza Dumplings (6 pcs)',
            description: 'Pan-fried Japanese dumplings with minced chicken and ginger scallions, served with tangy citrus ponzu dip.',
            price: 8.99,
            image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: false,
            rating: 4.7,
            votes: 215,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-5',
    name: 'Green Oasis & Acai Bowls',
    slug: 'green-oasis-healthy',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 960,
    deliveryTime: '15-25 min',
    distance: '1.2 km',
    priceTier: '$$',
    costForTwo: 24,
    isPureVeg: true,
    cuisines: ['Healthy', 'Salads', 'Smoothies', 'Vegan'],
    tag: '100% Pure Veg',
    isOpen: true,
    address: '14 Organic Park Boulevard, Eco Village',
    description: 'Farm-to-table organic nutrition, superfood smoothie bowls, crisp antioxidant salads, and cold-pressed botanical juices.',
    menuCategories: [
      {
        id: 'cat-healthy-bowls',
        name: '🥗 Superfood Power Bowls',
        items: [
          {
            id: 'item-501',
            name: 'Mediterranean Zaatar Grain Bowl',
            description: 'Warm fluffy tri-color quinoa, roasted sumac chickpeas, baby spinach, kalamata olives, heirloom tomatoes, cucumber ribbons, and creamy tahini lemon dressing.',
            price: 13.99,
            originalPrice: 15.99,
            image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 310,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Nourish Bowl', priceDiff: 0 },
                { name: 'Macro-Power Bowl (+ Extra Grains)', priceDiff: 2.5 }
              ],
              addOns: [
                { name: 'Creamy Haas Avocado Halves', price: 2.2 },
                { name: 'Organic Herbed Tofu Cubes', price: 2.0 },
                { name: 'Toasted Pumpkin & Chia Seeds', price: 1.0 }
              ],
              spiceLevels: ['Mild Lemon Herb', 'Zesty Pepper Tahini']
            }
          },
          {
            id: 'item-502',
            name: 'Amazonian Wild Acai Berry Bowl',
            description: 'Thick frozen organic acai blended with banana and almond milk, topped with organic granola, fresh strawberries, blueberries, chia seeds, and raw honey drizzle.',
            price: 11.99,
            image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 420,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Bowl (350ml)', priceDiff: 0 },
                { name: 'Grand Super Bowl (500ml)', priceDiff: 3.0 }
              ],
              addOns: [
                { name: 'Almond Butter Drizzle', price: 1.5 },
                { name: 'Organic Cacao Nibs', price: 1.2 },
                { name: 'Coconut Flakes', price: 0.8 }
              ],
              spiceLevels: ['Pure Sweet & Refreshing']
            }
          }
        ]
      }
    ]
  },
  {
    id: 'rest-6',
    name: 'Tacos Del Fuego & Cantina',
    slug: 'tacos-del-fuego',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1600&q=80',
    rating: 4.7,
    reviewCount: 1130,
    deliveryTime: '20-30 min',
    distance: '2.8 km',
    priceTier: '$$',
    costForTwo: 25,
    isPureVeg: false,
    cuisines: ['Mexican', 'Tacos', 'Burritos', 'Fast Food'],
    tag: 'Best Tacos in City',
    isOpen: true,
    address: '77 Fiesta Street, Mission Quarter',
    description: 'Slow-braised beef birria, hand-pressed heirloom corn tortillas, grilled al pastor with charred pineapple, and fresh guacamole.',
    menuCategories: [
      {
        id: 'cat-mex-tacos',
        name: '🌮 Street Tacos & Birria',
        items: [
          {
            id: 'item-601',
            name: 'Crispy Birria Quesatacos (3 pcs + Consomé)',
            description: 'Three crispy griddled corn tortillas stuffed with melted Oaxaca cheese, 6-hour braised chuck roast birria, chopped cilantro, and onions. Served with rich savory dipping broth.',
            price: 15.99,
            originalPrice: 18.50,
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 620,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Trio Platter (3 tacos)', priceDiff: 0 },
                { name: 'Fiesta Platter (5 tacos)', priceDiff: 6.0 }
              ],
              addOns: [
                { name: 'Extra Savory Consomé Broth', price: 2.0 },
                { name: 'Fresh House Guacamole', price: 2.5 },
                { name: 'Spicy Pickled Habanero Onions', price: 1.0 }
              ],
              spiceLevels: ['Mild Salsa Verde', 'Smoky Chipotle', 'Habanero Fire']
            }
          },
          {
            id: 'item-602',
            name: 'California Mission Loaded Burrito',
            description: 'Grilled carne asada steak or adobo chicken, seasoned Mexican rice, black beans, pico de gallo, guacamole, french fries, and sour cream wrapped in a jumbo warm flour tortilla.',
            price: 14.20,
            image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.8,
            votes: 390,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Burrito', priceDiff: 0 },
                { name: 'Enchilada Style (Wet with melted cheese)', priceDiff: 2.5 }
              ],
              addOns: [
                { name: 'Extra Guacamole', price: 2.0 },
                { name: 'Jalapeño Coins', price: 0.8 }
              ],
              spiceLevels: ['Mild', 'Medium Salsa Roja', 'Extra Caliente']
            }
          }
        ]
      }
    ]
  },
  {
    id: 'rest-7',
    name: 'Crust & Crumb Patisserie',
    slug: 'crust-and-crumb-patisserie',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 1650,
    deliveryTime: '20-30 min',
    distance: '1.9 km',
    priceTier: '$$',
    costForTwo: 20,
    isPureVeg: true,
    cuisines: ['Desserts', 'Bakery', 'Coffee', 'French'],
    tag: 'Artisan Pastries',
    isOpen: true,
    address: '102 Rue Des Fleurs, Westside District',
    description: 'Buttery French croissants laminated with Normandy butter, Belgian dark chocolate fondants, Basque burnt cheesecakes, and specialty coffees.',
    menuCategories: [
      {
        id: 'cat-pastries',
        name: '🍰 Artisan Pastries & Cakes',
        items: [
          {
            id: 'item-701',
            name: 'San Sebastián Basque Burnt Cheesecake',
            description: 'Caramelized burnished crown with an ultra-creamy, molten vanilla core made from farm cream cheese and Madagascar vanilla beans.',
            price: 8.50,
            originalPrice: 10.00,
            image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 540,
            customizable: false
          },
          {
            id: 'item-702',
            name: 'Belgian Molten Chocolate Lava Cake',
            description: 'Warm 70% Valrhona dark chocolate cake with a luscious flowing molten ganache center, dusted with powdered sugar.',
            price: 7.99,
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 410,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-8',
    name: 'Wok & Roll Street Asian',
    slug: 'wok-and-roll-asian',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1600&q=80',
    rating: 4.6,
    reviewCount: 880,
    deliveryTime: '25-35 min',
    distance: '3.3 km',
    priceTier: '$',
    costForTwo: 18,
    isPureVeg: false,
    cuisines: ['Asian', 'Fast Food', 'Noodles'],
    tag: 'Pocket Friendly',
    isOpen: true,
    address: '55 Chinatown Market Alley',
    description: 'High-heat wok tossed Hakka noodles, crispy honey chili lotus stems, spicy kung pao chicken, and flavorful dim sums.',
    menuCategories: [
      {
        id: 'cat-wok',
        name: '🍜 Wok Noodles & Rice',
        items: [
          {
            id: 'item-801',
            name: 'Spicy Schezwan Garlic Egg Noodles',
            description: 'Smoky wok tossed noodles with shredded crunchy vegetables, tossed in house fermented fiery red chili garlic sauce.',
            price: 10.99,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.7,
            votes: 280,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Box', priceDiff: 0 },
                { name: 'Family Box', priceDiff: 4.0 }
              ],
              addOns: [
                { name: 'Extra Scrambled Egg', price: 1.2 },
                { name: 'Crispy Fried Chicken Strips', price: 2.5 }
              ],
              spiceLevels: ['Medium Wok Heat', 'Extra Schezwan Blaze']
            }
          }
        ]
      }
    ]
  }
];
