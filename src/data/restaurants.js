export const RESTAURANTS = [
  {
    id: 'rest-1',
    name: 'Paradise & Meghana Royal Biryani Hotel',
    slug: 'paradise-meghana-biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3420,
    deliveryTime: '25-35 min',
    distance: '2.1 km',
    priceTier: '₹₹',
    costForTwo: 450,
    isPureVeg: false,
    cuisines: ['Biryani & Pulao', 'North Indian', 'Rolls & Burgers'],
    tag: 'Trending #1 in Bengaluru',
    isOpen: true,
    address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038',
    description: 'World-famous authentic Hyderabadi & Andhra Dum Biryanis slow-cooked in sealed Handis with aged Daawat basmati, desi ghee, and saffron.',
    menuCategories: [
      {
        id: 'cat-biryani-specials',
        name: '🔥 Signature Dum Biryanis',
        items: [
          {
            id: 'item-101',
            name: 'Special Andhra Chicken Dum Biryani',
            description: 'Fragrant aged basmati rice layered with spicy bone-in Andhra chicken, slow-cooked in pure ghee. Served with rich Mirchi Ka Salan and cooling Onion Raita.',
            price: 320,
            originalPrice: 380,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 1420,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Box (Serves 1)', priceDiff: 0 },
                { name: 'Jumbo Handi Pot (Serves 2-3)', priceDiff: 210 }
              ],
              addOns: [
                { name: 'Extra Boiled Egg (2 pcs)', price: 30 },
                { name: 'Burani Garlic Raita Cup', price: 40 },
                { name: 'Double Salan Gravy Bowl', price: 35 }
              ],
              spiceLevels: ['Mild Nawabi', 'Medium Spicy', 'Fiery Andhra Guntur']
            }
          },
          {
            id: 'item-102',
            name: 'Royal Shahi Paneer Dum Biryani',
            description: 'Golden tandoori paneer cubes marinated in rich curd and Lucknowi spices, steam-infused with saffron milk basmati and caramelized brown onions.',
            price: 280,
            originalPrice: 320,
            image: 'https://images.unsplash.com/photo-1642821373181-696a54913e9a?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 890,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Box', priceDiff: 0 },
                { name: 'Family Pack Pot', priceDiff: 190 }
              ],
              addOns: [
                { name: 'Extra Grilled Paneer (4 pcs)', price: 60 },
                { name: 'Pineapple Raita', price: 45 }
              ],
              spiceLevels: ['Fragrant Mild', 'Traditional Medium']
            }
          }
        ]
      },
      {
        id: 'cat-starters',
        name: 'Crispy Kebabs & Starters',
        items: [
          {
            id: 'item-103',
            name: 'Spicy Andhra Chicken 65',
            description: 'Deep-fried crispy boneless chicken chunks tossed in spicy curry leaf tempering with cracked black pepper and green chilies.',
            price: 240,
            image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 750,
            customizable: false
          },
          {
            id: 'item-104',
            name: 'Paneer 65 Crispy Bites',
            description: 'Tender fresh paneer cubes tossed in tangy South Indian spiced tempering with roasted mustard seeds and curry leaves.',
            price: 210,
            image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: false,
            rating: 4.7,
            votes: 380,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-2',
    name: 'Murugan Tiffin & Dosa Corner Hotel',
    slug: 'murugan-tiffin-dosa',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 4180,
    deliveryTime: '15-25 min',
    distance: '1.4 km',
    priceTier: '₹',
    costForTwo: 250,
    isPureVeg: true,
    cuisines: ['South Indian', 'Chaat & Street Food', 'Chai & Lassi'],
    tag: '100% Pure Veg Heritage',
    isOpen: true,
    address: '44 Usman Road, T. Nagar, Chennai, Tamil Nadu - 600017',
    description: 'Iconic Tamil Nadu tiffin center celebrated for golden ghee roast dosas, piping hot podi idlis, and traditional frothy Kumbakonam degree filter coffee.',
    menuCategories: [
      {
        id: 'cat-dosas',
        name: '🥞 Crispy Golden Dosas',
        items: [
          {
            id: 'item-201',
            name: 'Ghee Roast Special Masala Dosa',
            description: 'Crisp fermented crepe roasted in generous pure A2 cow ghee, stuffed with spiced potato masala. Served with 3 chutneys (coconut, tomato, mint) & steaming sambar.',
            price: 130,
            originalPrice: 160,
            image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 1890,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Roast', priceDiff: 0 },
                { name: 'Jumbo Paper Roast', priceDiff: 40 }
              ],
              addOns: [
                { name: 'Gunpowder Podi Ghee Spread', price: 25 },
                { name: 'Grated Amul Cheese', price: 35 },
                { name: 'Extra Sambar Bowl', price: 20 }
              ],
              spiceLevels: ['Traditional Medium', 'Extra Spicy Guntur Chutney']
            }
          },
          {
            id: 'item-202',
            name: 'Ghee Podi Thatte Idli (2 pcs)',
            description: 'Ultra soft, fluffy steamed rice cakes generously smeared with spiced aromatic gun powder (karam podi) and drenched in melting hot ghee.',
            price: 110,
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 950,
            customizable: false
          }
        ]
      },
      {
        id: 'cat-filter-coffee',
        name: '☕ Tiffin & Filter Coffee',
        items: [
          {
            id: 'item-203',
            name: 'Crispy Medu Vada (2 pcs)',
            description: 'Golden crunchy lentil donuts with a soft interior, spiced with crushed peppercorns and ginger. Served with sambar.',
            price: 80,
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 620,
            customizable: false
          },
          {
            id: 'item-204',
            name: 'Authentic Madras Degree Filter Coffee',
            description: 'Brewed from freshly roasted Chicory and Arabica beans with frothy full-cream milk in traditional brass davarah.',
            price: 55,
            image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 840,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-3',
    name: 'Punjab Grill & Royal Dhaba',
    slug: 'punjab-grill-royal-dhaba',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 2950,
    deliveryTime: '30-40 min',
    distance: '3.2 km',
    priceTier: '₹₹',
    costForTwo: 550,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Pizza & Breads'],
    tag: 'Authentic Tandoor',
    isOpen: true,
    address: 'DLF Cyber Hub, Ground Floor, Sector 24, Gurugram, Delhi NCR - 122002',
    description: 'Grand North Indian culinary feast: 24-hour slow simmered Dal Makhani, clay-tandoor smoked butter chicken, and pillowy garlic naans.',
    menuCategories: [
      {
        id: 'cat-curries',
        name: '🥘 Signature Curries',
        items: [
          {
            id: 'item-301',
            name: 'Delhi Style Butter Chicken (Murgh Makhani)',
            description: 'Tandoor-charred chicken tikka simmered in a velvet tomato gravy finished with churned white butter, organic honey, and fragrant kasuri methi.',
            price: 360,
            originalPrice: 420,
            image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 1650,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Half (2 Chicken pieces)', priceDiff: 0 },
                { name: 'Full (4 Chicken pieces)', priceDiff: 180 }
              ],
              addOns: [
                { name: 'Extra Makhani Gravy Bowl', price: 60 },
                { name: 'Amul Butter Cube', price: 20 }
              ],
              spiceLevels: ['Mild Sweet & Creamy', 'North Indian Spicy']
            }
          },
          {
            id: 'item-302',
            name: 'Dal Makhani (Slow Cooked 24 Hours)',
            description: 'Whole black urad lentils and kidney beans slow cooked overnight over charcoal fire with tomato purée and dollops of white butter.',
            price: 260,
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 1100,
            customizable: false
          },
          {
            id: 'item-303',
            name: 'Paneer Lababdar Special',
            description: 'Soft cottage cheese simmered in a luscious cashew, onion, and tomato gravy spiced with green cardamom and coriander seeds.',
            price: 290,
            image: 'https://images.unsplash.com/photo-1567184109411-b28f2703438e?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: false,
            rating: 4.8,
            votes: 520,
            customizable: false
          }
        ]
      },
      {
        id: 'cat-naan-breads',
        name: 'Tandoori Roti & Naan',
        items: [
          {
            id: 'item-304',
            name: 'Garlic Butter Naan (2 pcs)',
            description: 'Clay-oven baked leavened flatbread brushed with garlic butter and fresh coriander leaves.',
            price: 90,
            image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 680,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-4',
    name: "Haldiram's Sweets, Chaat & Thali Bhavan",
    slug: 'haldirams-sweets-chaat',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1505253758473-96b302ed1932?auto=format&fit=crop&w=1600&q=80',
    rating: 4.7,
    reviewCount: 3890,
    deliveryTime: '20-30 min',
    distance: '1.9 km',
    priceTier: '₹₹',
    costForTwo: 350,
    isPureVeg: true,
    cuisines: ['Chaat & Street Food', 'Mithai & Desserts', 'North Indian'],
    tag: 'Delhi Favorite',
    isOpen: true,
    address: 'B-Block, Inner Circle, Connaught Place, New Delhi - 110001',
    description: 'India’s most trusted pure veg sweets and chaat landmark. Famous for crispy puffed Chole Bhature, spicy Raj Kachori, and melt-in-mouth Rasgullas.',
    menuCategories: [
      {
        id: 'cat-delhi-chaat',
        name: '🥟 Delhi Chaat & Street Bites',
        items: [
          {
            id: 'item-401',
            name: 'Special Delhi Chole Bhature (2 pcs)',
            description: 'Spicy Punjabi chickpea curry stewed in secret anardana spices, accompanied by two oversized golden puffed bhaturas, pickled carrot, and fried chili.',
            price: 180,
            originalPrice: 210,
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 2100,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard (2 Bhaturas)', priceDiff: 0 },
                { name: 'Extra Bhatura Combo (3 Bhaturas)', priceDiff: 50 }
              ],
              addOns: [
                { name: 'Extra Spicy Chole Bowl', price: 60 },
                { name: 'Boondi Raita Cup', price: 35 }
              ],
              spiceLevels: ['Delhi Medium', 'Extra Spicy Punjabi']
            }
          },
          {
            id: 'item-402',
            name: 'Royal Shahi Raj Kachori',
            description: 'Giant crisp kachori shell stuffed with sprouted moong, boiled potatoes, sweet yogurt, spicy mint chutney, tangy tamarind, and crunchy sev.',
            price: 150,
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 1150,
            customizable: false
          }
        ]
      },
      {
        id: 'cat-sweets',
        name: '🍨 Traditional Mithai & Desserts',
        items: [
          {
            id: 'item-403',
            name: 'Kesar Pista Rasmalai (2 pcs)',
            description: 'Spongy soft cottage cheese discs steeped in reduced saffron and cardamom milk, garnished with Iranian pistachios.',
            price: 110,
            image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 940,
            customizable: false
          },
          {
            id: 'item-404',
            name: 'Hot Gulab Jamun in Desi Ghee (2 pcs)',
            description: 'Warm, caramelized khoya milk dumplings fried in pure desi ghee and soaked in rose-cardamom sugar syrup.',
            price: 80,
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 820,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-5',
    name: 'Sardar Pav Bhaji & Mumbai Street Bites',
    slug: 'sardar-pav-bhaji-mumbai',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1600&q=80',
    rating: 4.7,
    reviewCount: 3120,
    deliveryTime: '20-30 min',
    distance: '2.5 km',
    priceTier: '₹',
    costForTwo: 280,
    isPureVeg: true,
    cuisines: ['Chaat & Street Food', 'Rolls & Burgers', 'South Indian'],
    tag: 'Mumbai Legend',
    isOpen: true,
    address: '166 Tardeo Road, Opposite Bus Depot, Mumbai, Maharashtra - 400034',
    description: 'Mumbai legend famous for sizzling spiced mashed vegetable bhaji crowned with an entire block of melting golden Amul butter, served with toasted ladi pavs.',
    menuCategories: [
      {
        id: 'cat-pav-bhaji',
        name: '🥘 Sizzling Mumbai Pav Bhaji',
        items: [
          {
            id: 'item-501',
            name: 'Amul Cheese Butter Pav Bhaji',
            description: 'Rich, spiced mashed vegetable curry infused with butter and topped with grated cheese. Served with 2 hot butter-toasted pavs and freshly chopped onions and lemon.',
            price: 190,
            originalPrice: 220,
            image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 1820,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard (2 Pavs)', priceDiff: 0 },
                { name: 'Jumbo Butter (4 Pavs)', priceDiff: 40 }
              ],
              addOns: [
                { name: 'Extra Butter Toasted Pav (Pair)', price: 25 },
                { name: 'Extra Amul Cheese Grating', price: 35 }
              ],
              spiceLevels: ['Mild Mumbai', 'Spicy Kolhapuri Masala']
            }
          },
          {
            id: 'item-502',
            name: 'Authentic Mumbai Vada Pav (2 pcs)',
            description: 'Spiced potato fritter in gram flour batter, sandwiched in soft bread pav with dry red garlic chutney, sweet tamarind, and fried green chili.',
            price: 70,
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 1400,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-6',
    name: 'Kolkata Kathi Rolls & Nizam Street Kebabs',
    slug: 'kolkata-kathi-rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 2100,
    deliveryTime: '20-30 min',
    distance: '1.7 km',
    priceTier: '₹',
    costForTwo: 300,
    isPureVeg: false,
    cuisines: ['Rolls & Burgers', 'Chaat & Street Food', 'North Indian'],
    tag: 'Street Food Star',
    isOpen: true,
    address: '24 Park Street, New Market Commercial Area, Kolkata, West Bengal - 700016',
    description: 'Crispy flaky parathas layered with eggs, succulent tandoor-grilled chicken, onions, green chilies, and tangy chaat lime juice.',
    menuCategories: [
      {
        id: 'cat-kathi-rolls',
        name: '🌯 Authentic Kolkata Kathi Rolls',
        items: [
          {
            id: 'item-601',
            name: 'Double Egg Double Chicken Kathi Roll',
            description: 'Crisp layered tawa paratha lined with two eggs, filled with tender spiced grilled chicken chunks, sliced onions, green chilies, and lime juice.',
            price: 180,
            originalPrice: 210,
            image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 1250,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Kathi Roll', priceDiff: 0 },
                { name: 'Monster Jumbo Roll', priceDiff: 60 }
              ],
              addOns: [
                { name: 'Extra Egg Layer', price: 20 },
                { name: 'Melted Cheese Slice', price: 30 }
              ],
              spiceLevels: ['Mild Tangy', 'Spicy Kolkata Green Chili']
            }
          },
          {
            id: 'item-602',
            name: 'Paneer Tikka Kathi Roll',
            description: 'Crispy flaky paratha wrapped with juicy char-grilled tandoori paneer, crunchy bell peppers, onions, and mint coriander mayo.',
            price: 150,
            image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 720,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-7',
    name: 'Hotel Saravana Bhavan — Pure Veg Tiffin & Meals',
    slug: 'hotel-saravana-bhavan',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 5200,
    deliveryTime: '20-30 min',
    distance: '1.8 km',
    priceTier: '₹₹',
    costForTwo: 380,
    isPureVeg: true,
    cuisines: ['South Indian', 'Chai & Lassi', 'Mithai & Desserts'],
    tag: 'Global Tamil Heritage',
    isOpen: true,
    address: 'Kennet Lane, Egmore, Chennai, Tamil Nadu - 600008',
    description: 'Renowned worldwide for lavish South Indian thali meals, ghee mini podi idlis submerged in aromatic sambar, and crisp onion rava dosas.',
    menuCategories: [
      {
        id: 'cat-saravana-meals',
        name: '🍱 South Indian Executive Meals (Thali)',
        items: [
          {
            id: 'item-701',
            name: 'Grand South Indian Meals (Special Thali)',
            description: 'A feast of Ponni boiled rice, Mor Kuzhambu, drumstick sambar, pepper rasam, potato poriyal, kootu, curd, appalam, sweet payasam, and pickle.',
            price: 240,
            originalPrice: 280,
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 2400,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Thali', priceDiff: 0 },
                { name: 'Special Feast with Extra Ghee & Sweet', priceDiff: 50 }
              ],
              addOns: [
                { name: 'Ghee Drizzle Cup', price: 25 },
                { name: 'Extra Appalam (2 pcs)', price: 15 },
                { name: 'Elaneer Payasam Cup', price: 40 }
              ],
              spiceLevels: ['Traditional Tamil Spiced', 'Mild Brahmin Style']
            }
          },
          {
            id: 'item-702',
            name: 'Ghee Mini Podi Idli (14 pcs in Sambar Bowl)',
            description: 'Fourteen coin-sized button idlis soaked in piping hot lentil sambar, drizzled with pure ghee and sprinkled with spicy gun powder.',
            price: 135,
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 1820,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-8',
    name: 'Karim’s Historic Hotel Since 1913 — Jama Masjid',
    slug: 'karims-historic-hotel',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 4600,
    deliveryTime: '30-40 min',
    distance: '3.5 km',
    priceTier: '₹₹₹',
    costForTwo: 650,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Rolls & Burgers'],
    tag: 'Royal Mughal Legacy',
    isOpen: true,
    address: '16 Gali Kababian, Jama Masjid, Old Delhi - 110006',
    description: 'Direct descendants of the royal Mughal emperors’ head chefs. Legendary slow-cooked Mutton Rogan Josh, melt-in-mouth seekh kebabs, and tandoori raan.',
    menuCategories: [
      {
        id: 'cat-karim-specials',
        name: '👑 Royal Mughlai Curries & Kebabs',
        items: [
          {
            id: 'item-801',
            name: 'Karim’s Mutton Rogan Josh (Heritage)',
            description: 'Tender baby mutton simmered in fragrant Kashmiri saffron, mawa, yogurt, and authentic Ratanjot red bark gravy.',
            price: 420,
            originalPrice: 480,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 5.0,
            votes: 2150,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Half (2 Mutton pieces)', priceDiff: 0 },
                { name: 'Full (4 Mutton pieces)', priceDiff: 240 }
              ],
              addOns: [
                { name: 'Hot Butter Rumali Roti (2 pcs)', price: 40 },
                { name: 'Special Mint Coriander Chutney', price: 20 }
              ],
              spiceLevels: ['Mughlai Aromatic', 'Old Delhi Spicy']
            }
          },
          {
            id: 'item-802',
            name: 'Charcoal Mutton Seekh Kebab (4 pcs)',
            description: 'Minced mutton infused with smoked cloves, ginger, mace, and green chilies, skewered and roasted over flaming charcoal pit.',
            price: 320,
            image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 1680,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-9',
    name: 'Bawarchi & Hotel Shadab — Royal Hyderabadi Darbar',
    slug: 'bawarchi-hotel-shadab',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 5800,
    deliveryTime: '25-35 min',
    distance: '2.4 km',
    priceTier: '₹₹',
    costForTwo: 480,
    isPureVeg: false,
    cuisines: ['Biryani & Pulao', 'North Indian', 'Chai & Lassi'],
    tag: 'Nizam of Hyderabad Choice',
    isOpen: true,
    address: 'High Court Road, Madina Circle, Charminar, Hyderabad, Telangana - 500002',
    description: 'The golden culinary beacon of Hyderabad. Celebrated for slow-brewed Haleem in pure ghee, succulent Mutton Dum Biryani, and rich Double Ka Meetha.',
    menuCategories: [
      {
        id: 'cat-shadab-biryani',
        name: '🍚 Hyderabadi Handi Biryani & Haleem',
        items: [
          {
            id: 'item-901',
            name: 'Nizami Mutton Dum Biryani Special',
            description: 'World-renowned Hyderabadi Kacchi Dum Biryani: marinated tender mutton and aged basmati sealed in clay pot with caramelized onions and saffron.',
            price: 380,
            originalPrice: 440,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 5.0,
            votes: 3100,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Handi', priceDiff: 0 },
                { name: 'Special Jumbo Double Gosht', priceDiff: 220 }
              ],
              addOns: [
                { name: 'Extra Mirchi Ka Salan Bowl', price: 30 },
                { name: 'Kachumber Raita Bowl', price: 35 }
              ],
              spiceLevels: ['Nizam Mild Saffron', 'Traditional Hyderabadi Teekha']
            }
          },
          {
            id: 'item-902',
            name: 'Pure Desi Ghee Hyderabadi Mutton Haleem',
            description: 'Slow-simmered for 8 hours with broken wheat, mutton meat, lentils, bone marrow, pure cow ghee, topped with crispy fried onions and cashews.',
            price: 290,
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 1940,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-10',
    name: 'Vidyarthi Bhavan Heritage Hotel Since 1943',
    slug: 'vidyarthi-bhavan-hotel',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 6200,
    deliveryTime: '15-25 min',
    distance: '1.2 km',
    priceTier: '₹',
    costForTwo: 220,
    isPureVeg: true,
    cuisines: ['South Indian', 'Chai & Lassi'],
    tag: 'Bengaluru Icon',
    isOpen: true,
    address: '32 Gandhi Bazaar Main Road, Basavanagudi, Bengaluru, Karnataka - 560004',
    description: 'Bengaluru’s most cherished 80-year-old culinary landmark. Known for its thick, crispy, ghee-soaked Benne Masala Dosa that melts in your mouth.',
    menuCategories: [
      {
        id: 'cat-vb-specials',
        name: '🥞 Legendary Benne Dosa & Tiffin',
        items: [
          {
            id: 'item-1001',
            name: 'Vidyarthi Bhavan Special Benne Masala Dosa',
            description: 'Thick yet ultra-crispy golden fermented crepe roasted in churned white butter (benne), layered with spicy red chutney and potato palya. Served with rich coconut chutney.',
            price: 110,
            originalPrice: 130,
            image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 5.0,
            votes: 4200,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Single Dosa', priceDiff: 0 },
                { name: 'Double Dosa Combo', priceDiff: 95 }
              ],
              addOns: [
                { name: 'Extra White Butter (Benne) Scoop', price: 20 },
                { name: 'Extra Chutney Bowl', price: 15 }
              ],
              spiceLevels: ['Heritage Spiced']
            }
          },
          {
            id: 'item-1002',
            name: 'Shavige Kesari Bath (Pineapple Saffron)',
            description: 'Golden semolina dessert infused with pure ghee, saffron threads, roasted cashews, and raisins.',
            price: 65,
            image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 1100,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-11',
    name: 'Rajdhani Thali & Gujarati Rasoi Hotel',
    slug: 'rajdhani-thali-rasoi',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3100,
    deliveryTime: '25-35 min',
    distance: '2.6 km',
    priceTier: '₹₹',
    costForTwo: 500,
    isPureVeg: true,
    cuisines: ['North Indian', 'Chaat & Street Food', 'Mithai & Desserts'],
    tag: 'Royal Rajasthani Thali',
    isOpen: true,
    address: 'Level 2, Phoenix Marketcity, Whitefield, Bengaluru - 560048',
    description: 'Majestic Rajasthani and Gujarati pure vegetarian feast. Dal Baati Churma, sweet Gujarati Kadhi, soft phulkas, dhoklas, and warm Malpuas with Rabri.',
    menuCategories: [
      {
        id: 'cat-rajdhani-thali',
        name: '👑 Royal Heritage Thali Boxes',
        items: [
          {
            id: 'item-1101',
            name: 'Grand Royal Rajasthani Thali Box',
            description: 'Feast box containing authentic Dal Baati Churma, Gatta Curry, Paneer Hariyali, Gujarati Sweet Kadhi, 4 Ghee Phulkas, Steamed Rice, Dhokla, and Malpua Rabri.',
            price: 340,
            originalPrice: 390,
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 1850,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Standard Thali Box', priceDiff: 0 },
                { name: 'King Maharaja Size Thali', priceDiff: 80 }
              ],
              addOns: [
                { name: 'Extra Baati with Ghee (2 pcs)', price: 40 },
                { name: 'Kesar Malpua Rabri (2 pcs)', price: 60 }
              ],
              spiceLevels: ['Traditional Sweet & Spiced', 'Spicy Marwari']
            }
          }
        ]
      }
    ]
  },
  {
    id: 'rest-12',
    name: 'Kake Da Hotel & Dhaba Since 1931',
    slug: 'kake-da-hotel-dhaba',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=80',
    rating: 4.7,
    reviewCount: 3750,
    deliveryTime: '25-35 min',
    distance: '2.0 km',
    priceTier: '₹₹',
    costForTwo: 420,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Pizza & Breads'],
    tag: 'Old Delhi Dhaba Legend',
    isOpen: true,
    address: '67 Municipal Market, Outer Circle, Connaught Place, New Delhi - 110001',
    description: 'Iconic 90-year-old Punjab dhaba landmark in Delhi. Renowned for its signature Dahi Meat, rich Saag Chicken, and crispy Tandoori Kulchas.',
    menuCategories: [
      {
        id: 'cat-kake-mains',
        name: '🥘 Kake Da Dhaba Curries',
        items: [
          {
            id: 'item-1201',
            name: 'Kake Da Famous Dahi Meat Special',
            description: 'Legendary succulent mutton chunks slow-cooked in thick curd, whole garam masalas, pure ghee, and caramelized onions.',
            price: 390,
            originalPrice: 450,
            image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.9,
            votes: 1950,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Half Handi', priceDiff: 0 },
                { name: 'Full Handi (4 pcs Mutton)', priceDiff: 210 }
              ],
              addOns: [
                { name: 'Tandoori Roti with Butter (2 pcs)', price: 30 },
                { name: 'Pickled Sirka Onions', price: 15 }
              ],
              spiceLevels: ['Dhaba Teekha', 'Extra Spicy Punjabi']
            }
          },
          {
            id: 'item-1202',
            name: 'Amritsari Stuffed Aloo Pyaaz Kulcha with Chole',
            description: 'Crisp flaky tandoor baked bread stuffed with spiced potatoes and onions, served with spicy chickpea curry and tamarind chutney.',
            price: 160,
            image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 890,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-13',
    name: 'Mainland Indo-Chinese Wok',
    slug: 'mainland-indo-chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1600&q=80',
    rating: 4.6,
    reviewCount: 1680,
    deliveryTime: '25-35 min',
    distance: '3.1 km',
    priceTier: '₹₹',
    costForTwo: 400,
    isPureVeg: false,
    cuisines: ['Indo-Chinese', 'Rolls & Burgers', 'Chaat & Street Food'],
    tag: 'Desi Chinese',
    isOpen: true,
    address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka - 560034',
    description: 'High-flame wok cooking satisfying every desi Chinese craving: fiery Schezwan noodles, crispy Chili Paneer, steamed Momos, and tangy Manchurian.',
    menuCategories: [
      {
        id: 'cat-chinese-mains',
        name: '🍜 Wok Noodles & Fried Rice',
        items: [
          {
            id: 'item-1301',
            name: 'Spicy Schezwan Chicken Hakka Noodles',
            description: 'Wok-tossed noodles with shredded chicken, crunchy cabbage, carrots, and spring onions in house-made fiery red Schezwan chili garlic paste.',
            price: 230,
            originalPrice: 260,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isBestseller: true,
            rating: 4.8,
            votes: 840,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular Box', priceDiff: 0 },
                { name: 'Family Box', priceDiff: 110 }
              ],
              addOns: [
                { name: 'Extra Scrambled Egg', price: 30 },
                { name: 'Crispy Fried Noodles Pack', price: 25 }
              ],
              spiceLevels: ['Medium Wok Heat', 'Fiery Schezwan Blast']
            }
          },
          {
            id: 'item-1302',
            name: 'Crispy Paneer Chili Dry',
            description: 'Crispy fried cottage cheese tossed with diced onions, crunchy bell peppers, dark soy sauce, green chilies, and spring onion.',
            price: 210,
            image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.7,
            votes: 560,
            customizable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rest-14',
    name: 'Ovenfresh Desi Artisan Pizza & Breads',
    slug: 'ovenfresh-desi-pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 2240,
    deliveryTime: '25-35 min',
    distance: '2.8 km',
    priceTier: '₹₹',
    costForTwo: 480,
    isPureVeg: false,
    cuisines: ['Pizza & Breads', 'North Indian', 'Chai & Lassi'],
    tag: 'Fusion Favorite',
    isOpen: true,
    address: 'Linking Road, Bandra West, Mumbai, Maharashtra - 400050',
    description: 'Crisp stone-baked sourdough pizzas topped with Indian favorites: Paneer Tikka, Makhani gravies, and cheesy garlic breadsticks.',
    menuCategories: [
      {
        id: 'cat-desi-pizzas',
        name: '🍕 Desi Fusion Pizzas',
        items: [
          {
            id: 'item-1401',
            name: 'Tandoori Paneer Tikka Feast Pizza',
            description: 'Spiced tandoori paneer, red paprika, crisp capsicum, and golden corn on a 100% mozzarella cheese blend with herb tomato sauce.',
            price: 360,
            originalPrice: 420,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.9,
            votes: 910,
            customizable: true,
            customizationOptions: {
              sizes: [
                { name: 'Regular 7" Crust', priceDiff: -70 },
                { name: 'Medium 10" Crust', priceDiff: 0 },
                { name: 'Large 12" Feast', priceDiff: 140 }
              ],
              addOns: [
                { name: 'Cheese Burst Crust Fill', price: 65 },
                { name: 'Extra Paneer Tikka Cubes', price: 45 }
              ],
              spiceLevels: ['Classic Italian Herb', 'Spicy Indian Oregano & Chili']
            }
          },
          {
            id: 'item-1402',
            name: 'Cheesy Stuffed Garlic Breadsticks',
            description: 'Freshly baked buttery garlic bread filled with sweet golden corn, pickled jalapeños, and creamy melted mozzarella.',
            price: 150,
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isBestseller: true,
            rating: 4.8,
            votes: 620,
            customizable: false
          }
        ]
      }
    ]
  }
];
