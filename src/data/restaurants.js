/**
 * Indian Food Delivery Platform - Restaurants & Dishes Dataset
 * 30 Authentic Indian Restaurants with 20+ diverse, authentic dishes each (600+ dishes).
 */

export const RESTAURANTS = [
  {
    "id": "rest-1",
    "name": "Paradise & Meghana Royal Biryani Hotel",
    "slug": "paradise-meghana-biryani",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3420,
    "deliveryTime": "25-35 min",
    "distance": "2.1 km",
    "priceTier": "₹₹",
    "costForTwo": 450,
    "isPureVeg": false,
    "cuisines": [
      "Biryani & Pulao",
      "North Indian",
      "Rolls & Burgers"
    ],
    "tag": "Trending #1 in Bengaluru",
    "isOpen": true,
    "address": "100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038",
    "description": "World-famous authentic Hyderabadi & Andhra Dum Biryanis slow-cooked in sealed Handis with aged Daawat basmati, desi ghee, and saffron.",
    "menuCategories": [
      {
        "id": "rest-1-cat-biryanis",
        "name": "🔥 Signature Dum Biryanis",
        "items": [
          {
            "id": "item-101",
            "name": "Special Andhra Chicken Dum Biryani",
            "description": "Aged basmati rice layered with tender Andhra chicken, desi ghee, Mirchi Ka Salan & Onion Raita.",
            "price": 320,
            "originalPrice": 380,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 167,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 240
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-102",
            "name": "Royal Hyderabadi Mutton Dum Biryani",
            "description": "Slow-cooked young goat meat with whole garam masalas, saffron, and caramelised onions in clay handi.",
            "price": 420,
            "originalPrice": 490,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 184,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 315
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-103",
            "name": "Shahi Paneer Tikka Dum Biryani",
            "description": "Charcoal-grilled paneer cubes infused with fragrant saffron basmati rice and rich mint salan.",
            "price": 280,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 201,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 210
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-104",
            "name": "Egg Dum Biryani Handi",
            "description": "Two farm-fresh boiled and golden-fried eggs simmered in rich Awadhi biryani gravy and rice.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 218,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 180
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-105",
            "name": "Guntur Spicy Boneless Chicken Biryani",
            "description": "Fiery Andhra spiced boneless chicken chunks served over aromatic ghee rice.",
            "price": 340,
            "originalPrice": 390,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 235,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 255
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-106",
            "name": "Mushroom & Green Peas Pulao Handi",
            "description": "Fresh button mushrooms and sweet peas tempered with royal cumin and ghee.",
            "price": 260,
            "originalPrice": 300,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 252,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 195
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-1-cat-starters",
        "name": "🍗 Kebabs & Tandoor Starters",
        "items": [
          {
            "id": "item-107",
            "name": "Crispy Andhra Chicken 65",
            "description": "Deep-fried crispy boneless chicken chunks tossed in curry leaf tempering and green chilies.",
            "price": 250,
            "originalPrice": 290,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-108",
            "name": "Chicken Ghee Roast Roast",
            "description": "Succulent chicken tossed in Kundapur style roasted chili and whole coriander paste in pure desi ghee.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-109",
            "name": "Tandoori Murgh Full (Whole Bird)",
            "description": "Whole tender chicken marinated in spiced hung curd, smoked in clay tandoor.",
            "price": 440,
            "originalPrice": 520,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-110",
            "name": "Malai Chicken Tikka (6 pcs)",
            "description": "Creamy boneless chicken morsels flavoured with cardamom, mace, and melted butter.",
            "price": 280,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-111",
            "name": "Paneer 65 Crispy Bites",
            "description": "Tender paneer cubes tossed in tangy South Indian spiced tempering with curry leaves.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-112",
            "name": "Crispy Veg Pepper Dry",
            "description": "Assorted farm-fresh vegetables batter-fried and tossed in crushed black tellicherry pepper.",
            "price": 200,
            "originalPrice": 240,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-113",
            "name": "Chicken Lemon Coriander Tikka",
            "description": "Zesty skewers of chicken with roasted cumin, fresh lime, and aromatic coriander.",
            "price": 270,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 371,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-1-cat-curries-breads",
        "name": "🥘 Curries & Fresh Breads",
        "items": [
          {
            "id": "item-114",
            "name": "Creamy Butter Chicken Gravy",
            "description": "Tandoori chicken pulled and simmered in satin smooth tomato, cashew, and fenugreek sauce.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 388,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 248
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-115",
            "name": "Paneer Butter Masala",
            "description": "Soft cottage cheese cubes in rich tomato cream gravy with Kasuri methi.",
            "price": 260,
            "originalPrice": 300,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 405,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 208
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-116",
            "name": "Andhra Chicken Curry (Gongura Style)",
            "description": "Traditional spicy chicken cooked in tangy Gongura sorrel leaf paste.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 422,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 232
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-117",
            "name": "Dal Makhani 24-hr Slow Cooked",
            "description": "Black lentils and kidney beans cooked overnight with white butter and cream.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 439,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 176
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-118",
            "name": "Butter Garlic Naan (2 pcs)",
            "description": "Tandoor-baked leavened refined flour flatbread layered with roasted garlic and butter.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-119",
            "name": "Tandoori Roti (3 pcs)",
            "description": "Crisp whole wheat flatbread baked in traditional clay tandoor with melted butter.",
            "price": 60,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-120",
            "name": "Shahi Gulab Jamun in Kesar Syrup (2 pcs)",
            "description": "Melt-in-mouth golden khoya dumplings soaked in saffron-scented rose syrup.",
            "price": 90,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-121",
            "name": "Thick Mango Lassi with Malai",
            "description": "Sweet churned yogurt blended with Alphonso mango pulp and topped with saffron pistachios.",
            "price": 110,
            "originalPrice": 140,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 507,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-2",
    "name": "Murugan Idli & A2B Anandha Bhavan",
    "slug": "murugan-idli-a2b",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 4210,
    "deliveryTime": "20-30 min",
    "distance": "1.5 km",
    "priceTier": "₹",
    "costForTwo": 280,
    "isPureVeg": true,
    "cuisines": [
      "South Indian",
      "Chaat & Street Food",
      "Chai & Lassi"
    ],
    "tag": "Tiruppur & Chennai Legend",
    "isOpen": true,
    "address": "Avinashi Road, Near Old Bus Stand, Tiruppur, Tamil Nadu - 641602",
    "description": "Iconic Madurai-style melting soft idlis, golden crispy ghee podi masala dosas, piping hot sambar and freshly brewed Kumbakonam degree filter coffee.",
    "menuCategories": [
      {
        "id": "rest-2-cat-idli-vada",
        "name": "🥞 Soft Idlis & Crunchy Vadais",
        "items": [
          {
            "id": "item-122",
            "name": "Famous Soft Mallipoo Idli (4 pcs)",
            "description": "Signature feather-light steamed rice cakes served with 4 varieties of chutneys and drumstick sambar.",
            "price": 90,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 524,
            "customizable": false
          },
          {
            "id": "item-123",
            "name": "Crispy Medu Vadai (2 pcs)",
            "description": "Golden brown crisp lentil fritters with peppercorn, cumin, ginger, and green chili.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-124",
            "name": "Ghee Podi Idli Chunks (14 mini)",
            "description": "Mini steamed idlis tossed in roasted spiced gun powder (milagai podi) and pure melted ghee.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-125",
            "name": "Sambar Vadai Dip (2 pcs)",
            "description": "Hot crispy medu vadas submerged in aromatic Madras shallot and lentil sambar.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-126",
            "name": "Curd Vadai with Boondi",
            "description": "Crisp vadas soaked in chilled seasoned curd, garnished with mustard seeds and spicy boondi.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-127",
            "name": "Rava Kichadi with Ghee",
            "description": "Semolina cooked with mustard seeds, cashews, vegetables, and aromatic ghee.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 609,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-2-cat-dosas",
        "name": "🥘 Signature Ghee Dosas",
        "items": [
          {
            "id": "item-128",
            "name": "Special Ghee Masala Dosa",
            "description": "Golden crisp fermented crepe smeared with pure Cow Ghee and stuffed with spiced potato masala.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 626,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-129",
            "name": "Ghee Podi Crispy Roast Dosa",
            "description": "Thin paper-crisp dosa generously dusted with fiery roasted lentil podi and drizzled with ghee.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 643,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-130",
            "name": "Mysore Masala Red Chutney Dosa",
            "description": "Dosa coated with garlic-red chili paste, potato filling, and fresh grated paneer.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 660,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-131",
            "name": "Rava Onion Butter Masala Dosa",
            "description": "Crispy lace semolina crepe packed with sautéed onions, green chilies, cashews, and butter.",
            "price": 165,
            "originalPrice": 200,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 677,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-132",
            "name": "Spring Cheese Corn Dosa",
            "description": "Indo-fusion dosa stuffed with shredded vegetables, sweet corn, and melted mozzarella.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 694,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-133",
            "name": "Paper Roast Dosa (Serves 2, 2ft long)",
            "description": "Extra large ultra-crisp paper thin dosa rolled with cup of spicy potato masala.",
            "price": 175,
            "originalPrice": 210,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 711,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-134",
            "name": "Set Dosa with Vadacurry (3 pcs)",
            "description": "Soft, fluffy, spongy dosas served with spicy Chettinad lentil-dumpling vadacurry.",
            "price": 120,
            "originalPrice": 145,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 728,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-2-cat-meals-beverages",
        "name": "☕ Traditional Meals, Sweets & Coffee",
        "items": [
          {
            "id": "item-135",
            "name": "South Indian Special Mini Tiffin",
            "description": "Assorted feast with 1 Mini Masala Dosa, 2 Idlis, 1 Vada, Rava Kesari, and Sambar.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 745,
            "customizable": false
          },
          {
            "id": "item-136",
            "name": "Ghee Pongal with Cashews",
            "description": "Traditional creamy ven pongal made with rice and split yellow moong dal, roasted cashews, and pepper.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 762,
            "customizable": false
          },
          {
            "id": "item-137",
            "name": "Curd Rice with Pomegranate & Mor Milagai",
            "description": "Comforting tempered yogurt rice with mustard seeds, curry leaves, ginger, and sun-dried curd chili.",
            "price": 90,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 779,
            "customizable": false
          },
          {
            "id": "item-138",
            "name": "Hot Ghee Mysore Pak",
            "description": "Mouth-melting traditional gram flour fudge made with pure desi ghee and sugar.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 796,
            "customizable": false
          },
          {
            "id": "item-139",
            "name": "Pineapple Rava Kesari Bath",
            "description": "Semolina pudding cooked with real pineapple chunks, saffron, cardamom, and fried cashews.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-140",
            "name": "Kumbakonam Degree Filter Coffee",
            "description": "Freshly brewed chicory blend decoction frothed with boiled farm cow milk in brass Davarah.",
            "price": 45,
            "originalPrice": 60,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-141",
            "name": "Madras Masala Buttermilk (Neer Mor)",
            "description": "Refreshing churned spiced buttermilk with crushed curry leaves, ginger, and green chilies.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 847,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-3",
    "name": "Moti Mahal Delux & Gulati Butter Chicken",
    "slug": "moti-mahal-gulati",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3890,
    "deliveryTime": "30-40 min",
    "distance": "3.4 km",
    "priceTier": "₹₹₹",
    "costForTwo": 650,
    "isPureVeg": false,
    "cuisines": [
      "North Indian",
      "Biryani & Pulao",
      "Rolls & Burgers"
    ],
    "tag": "Original 1920 Butter Chicken",
    "isOpen": true,
    "address": "Pandara Road Market, India Gate, New Delhi - 110003",
    "description": "The legendary birthplace of Butter Chicken and Dal Makhani. Relish 100 years of culinary royalty with smoky clay oven grills and silky rich curries.",
    "menuCategories": [
      {
        "id": "rest-3-cat-legendary-curries",
        "name": "👑 Legendary North Indian Curries",
        "items": [
          {
            "id": "item-142",
            "name": "Original Moti Mahal Butter Chicken",
            "description": "Tandoori chicken morsels simmered in slow-reduced velvet tomato gravy, fenugreek, and home-churned butter.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 864,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 304
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-143",
            "name": "Dal Makhani Bukhara Style",
            "description": "Urad dal simmered for 24 hours over low charcoal embers with vine tomatoes, garlic, and rich butter.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 881,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 208
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-144",
            "name": "Kadhai Paneer Peshawari",
            "description": "Cottage cheese wok-tossed with crushed coriander seeds, bell peppers, tomatoes, and whole red chilies.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 898,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 232
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-145",
            "name": "Rogan Josh Kashmiri Mutton",
            "description": "Tender lamb cuts braised in aromatic Kashmiri chili, fennel powder, and ratan jot infused gravy.",
            "price": 460,
            "originalPrice": 530,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 915,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 368
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-146",
            "name": "Chicken Tikka Masala Gravy",
            "description": "Charcoal-grilled chicken tikka cooked in onion-tomato masala with diced bell peppers.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 932,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 288
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-147",
            "name": "Palak Paneer Lahori",
            "description": "Fresh spinach puree infused with roasted garlic, cream, and soft paneer cubes.",
            "price": 270,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 949,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 216
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-148",
            "name": "Murgh Malai Kofta",
            "description": "Velvety cottage cheese and potato dumplings stuffed with dry fruits, served in rich cashew-saffron gravy.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 966,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 248
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-3-cat-kebabs",
        "name": "🍢 Tandoor & Charcoal Kebabs",
        "items": [
          {
            "id": "item-149",
            "name": "Bhatia Murgh Tandoori (Half)",
            "description": "Chicken on the bone marinated in mustard oil, roasted cumin, and hung curd, roasted in clay pit.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 983,
            "customizable": false
          },
          {
            "id": "item-150",
            "name": "Kakori Mutton Seekh Kebab (4 pcs)",
            "description": "Finely minced mutton infused with 21 secret Awadhi spices, melted on skewers.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 150,
            "customizable": false
          },
          {
            "id": "item-151",
            "name": "Bhatti Paneer Tikka (6 pcs)",
            "description": "Thick paneer squares marinated with crushed ajwain seeds, kasuri methi, and black salt.",
            "price": 260,
            "originalPrice": 300,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-152",
            "name": "Amritsari Machhi Fry (Fish)",
            "description": "Crispy carom-scented batter-fried freshwater fish served with spicy mint chutney.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-153",
            "name": "Dahi Ke Kebab (4 pcs)",
            "description": "Crispy shallow-fried patties made with strained hung yogurt, mild green chilies, and coriander.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-154",
            "name": "Murgh Reshmi Kebab (6 pcs)",
            "description": "Tender chicken kebabs coated with egg white, cream, and almond paste.",
            "price": 320,
            "originalPrice": 370,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-155",
            "name": "Tandoori Soya Chaap Tikka",
            "description": "Charcoal-grilled protein-rich soya chaap marinated in spicy tandoori masala.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 235,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-3-cat-breads-rice",
        "name": "🍚 Breads, Pulao & Desserts",
        "items": [
          {
            "id": "item-156",
            "name": "Amritsari Chur Chur Naan with Chana",
            "description": "Layered flaky naan crushed with butter, served with pindi chana and pickle.",
            "price": 160,
            "originalPrice": 190,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 252,
            "customizable": false
          },
          {
            "id": "item-157",
            "name": "Garlic & Cheese Stuffed Naan",
            "description": "Tandoor naan loaded with melted cheddar and mozzarella cheese with fresh garlic.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-158",
            "name": "Roomali Roti Hand-Stretched",
            "description": "Paper-thin handkerchief bread cooked over inverted domed griddle.",
            "price": 50,
            "originalPrice": 65,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-159",
            "name": "Jeera Rice with Brown Onions",
            "description": "Long-grain basmati tempered with royal cumin seeds and ghee.",
            "price": 160,
            "originalPrice": 190,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-160",
            "name": "Kashmiri Mutton Pulao",
            "description": "Fragrant basmati cooked with tender mutton broth, saffron, raisins, and fried cashews.",
            "price": 390,
            "originalPrice": 450,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-161",
            "name": "Kesar Phirni in Clay Pot",
            "description": "Traditional ground rice pudding infused with saffron, milk, and silver vark in earthen pot.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-162",
            "name": "Shahi Tukda Old Delhi Style",
            "description": "Fried bread steeped in cardamom syrup, smothered in thickened rabri and pistachios.",
            "price": 110,
            "originalPrice": 140,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 354,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-4",
    "name": "Saravanaa Bhavan Pure Vegetarian",
    "slug": "saravanaa-bhavan-pure-veg",
    "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3100,
    "deliveryTime": "20-30 min",
    "distance": "1.8 km",
    "priceTier": "₹₹",
    "costForTwo": 350,
    "isPureVeg": true,
    "cuisines": [
      "South Indian",
      "North Indian",
      "Chai & Lassi"
    ],
    "tag": "Global Pure Veg Icon",
    "isOpen": true,
    "address": "Kennet Lane, Egmore, Chennai, Tamil Nadu - 600008",
    "description": "International brand famous for pristine pure vegetarian South Indian grand meals, variety dosas, North Indian delicacies, and authentic temple sweets.",
    "menuCategories": [
      {
        "id": "rest-4-cat-meals",
        "name": "🍱 South Indian Grand Thalis & Meals",
        "items": [
          {
            "id": "item-163",
            "name": "Special South Indian Executive Thali",
            "description": "Full banquet with rice, sambar, rasam, kootu, poriyal, karakuzhambu, curd, appalam, vadai & payasam.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 371,
            "customizable": false
          },
          {
            "id": "item-164",
            "name": "Bisi Bele Bath with Boondi & Ghee",
            "description": "Traditional Karnataka spicy rice-lentil mash with mixed vegetables, ghee, and cashew nuts.",
            "price": 120,
            "originalPrice": 145,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 388,
            "customizable": false
          },
          {
            "id": "item-165",
            "name": "Lemon Rice with Roasted Peanuts",
            "description": "Fluffy rice tossed with cold-pressed gingelly oil, mustard, curry leaves, and crunchy peanuts.",
            "price": 90,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-166",
            "name": "Tamarind Rice (Puliyodharai)",
            "description": "Temple-style tangy tamarind rice spiced with roasted fenugreek and sesame powder.",
            "price": 95,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 422,
            "customizable": false
          },
          {
            "id": "item-167",
            "name": "Poori Masala with 3 Pooris",
            "description": "Puffy whole-wheat deep fried pooris served with mild potato and onion gravy.",
            "price": 110,
            "originalPrice": 130,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 439,
            "customizable": false
          },
          {
            "id": "item-168",
            "name": "Chola Poori with Chana Masala",
            "description": "Extra large puffed bhatura served with spicy Punjabi chana and pickled onions.",
            "price": 140,
            "originalPrice": 165,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 456,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-4-cat-special-dosas",
        "name": "🥘 Artisan Special Dosas",
        "items": [
          {
            "id": "item-169",
            "name": "Ghee Onion Rava Dosa",
            "description": "Golden semolina crepe with crunchy onions, cumin, green chili, and pure ghee.",
            "price": 155,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 473,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-170",
            "name": "Cheese Masala Dosa",
            "description": "Crispy dosa filled with spiced potato mash and loaded with melted Amul cheese.",
            "price": 165,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 490,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-171",
            "name": "Kharabhath with Coconut Chutney",
            "description": "Savory spicy semolina upma cooked with ghee, vegetables, and aromatic spices.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-172",
            "name": "Mushroom Ghee Roast Dosa",
            "description": "Crisp dosa stuffed with sautéed peppery Chettinad button mushrooms.",
            "price": 170,
            "originalPrice": 205,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 524,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-173",
            "name": "Paneer Butter Masala Dosa",
            "description": "Dosa loaded with rich paneer butter masala filling and coriander.",
            "price": 175,
            "originalPrice": 210,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 541,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-174",
            "name": "Podi Uthappam with Ghee",
            "description": "Thick spongy rice pancake topped generously with gun powder and roasted in ghee.",
            "price": 130,
            "originalPrice": 155,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 558,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-175",
            "name": "Onion Tomato Uttapam",
            "description": "Traditional thick pancake studded with caramelized onions, tomatoes, and cilantro.",
            "price": 135,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 575,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-4-cat-curries-sweets",
        "name": "🍯 North Indian Gravies & Sweets",
        "items": [
          {
            "id": "item-176",
            "name": "Shahi Paneer Korma",
            "description": "Cottage cheese simmered in white cashew and melon seed gravy with green cardamom.",
            "price": 250,
            "originalPrice": 290,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 592,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 200
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-177",
            "name": "Mixed Vegetable Kadai Curry",
            "description": "Carrots, beans, peas, and florets sautéed in fresh ground kadai masala.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 609,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 168
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-178",
            "name": "Butter Naan (2 pcs)",
            "description": "Oven-baked flatbread buttered to perfection.",
            "price": 70,
            "originalPrice": 85,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-179",
            "name": "Garlic Roti (3 pcs)",
            "description": "Whole-wheat flatbread infused with roasted garlic flakes.",
            "price": 75,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-180",
            "name": "Badam Halwa Melt-in-Mouth (100g)",
            "description": "Rich royal sweet made with ground California almonds, pure ghee, and saffron.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-181",
            "name": "Carrot Halwa with Khoya",
            "description": "Grated winter red carrots braised in milk, ghee, khoya, and golden raisins.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-182",
            "name": "Special Filter Kaapi",
            "description": "Authentic chicory filter coffee served piping hot.",
            "price": 45,
            "originalPrice": 55,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 694,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-5",
    "name": "Kareem's Mughlai & Lucknowi Dastarkhwan",
    "slug": "kareems-lucknowi-dastarkhwan",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 2950,
    "deliveryTime": "30-40 min",
    "distance": "3.1 km",
    "priceTier": "₹₹₹",
    "costForTwo": 600,
    "isPureVeg": false,
    "cuisines": [
      "North Indian",
      "Biryani & Pulao",
      "Rolls & Burgers"
    ],
    "tag": "Nawabi Heritage Cuisine",
    "isOpen": true,
    "address": "Near Jama Masjid Gate 1, Old Delhi - 110006",
    "description": "Centuries of royal Nawabi recipe craftsmanship. Indulge in slow-simmered Nihari, melting Galouti kebabs, Awadhi Gosht Biryani, and saffron Sheermal.",
    "menuCategories": [
      {
        "id": "rest-5-cat-nawabi-meats",
        "name": "🍖 Slow-Simmered Royal Meats",
        "items": [
          {
            "id": "item-183",
            "name": "Nalli Nihari Gosht Special",
            "description": "Slow-cooked shank of mutton in rich bone marrow gravy with ginger juliennes and green chilies.",
            "price": 440,
            "originalPrice": 510,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 711,
            "customizable": false
          },
          {
            "id": "item-184",
            "name": "Awadhi Mutton Korma",
            "description": "Tender lamb cuts cooked in brown onion, curd, and screwpine essence gravy.",
            "price": 410,
            "originalPrice": 480,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 728,
            "customizable": false
          },
          {
            "id": "item-185",
            "name": "Murgh Jahangiri",
            "description": "Chicken cooked in velvety cashew, cream, and dry fruit gravy with royal spices.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 745,
            "customizable": false
          },
          {
            "id": "item-186",
            "name": "Chicken Tikka Lababdar",
            "description": "Charcoal-grilled chicken chunks in chunky tomato, onion, and grated paneer sauce.",
            "price": 350,
            "originalPrice": 410,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 762,
            "customizable": false
          },
          {
            "id": "item-187",
            "name": "Mutton Keema Matar Gravy",
            "description": "Spiced minced lamb cooked with sweet green peas, mint, and whole roasted garam masala.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 779,
            "customizable": false
          },
          {
            "id": "item-188",
            "name": "Paneer Korma Nawabi",
            "description": "Fresh paneer in golden cashew-nut and saffron infused royal gravy.",
            "price": 280,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 796,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 224
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-5-cat-kebabs",
        "name": "🍢 Char-Grilled Nawabi Kebabs",
        "items": [
          {
            "id": "item-189",
            "name": "Original Galouti Kebab (4 pcs)",
            "description": "Finely ground minced meat infused with raw papaya and 32 herbs, pan-fried in desi ghee.",
            "price": 370,
            "originalPrice": 430,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-190",
            "name": "Mutton Seekh Kebab (4 pcs)",
            "description": "Spiced minced mutton skewered and roasted to juicy perfection in clay tandoor.",
            "price": 350,
            "originalPrice": 410,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-191",
            "name": "Murgh Malai Kebab (6 pcs)",
            "description": "Chicken chunks marinated in rich hung curd, fresh cream, cheese, and crushed cardamom.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-192",
            "name": "Boti Kebab Masaledar",
            "description": "Tender cubes of boneless mutton marinated in spicy Awadhi masala, char-grilled.",
            "price": 390,
            "originalPrice": 450,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-193",
            "name": "Tandoori Fish Tikka Surmai",
            "description": "King fish fillets coated in carom seeds, turmeric, and mustard oil, roasted crisp.",
            "price": 440,
            "originalPrice": 500,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 881,
            "customizable": false
          },
          {
            "id": "item-194",
            "name": "Paneer Tikka Zaffrani (6 pcs)",
            "description": "Saffron and cream marinated cottage cheese with roasted bell peppers and onions.",
            "price": 260,
            "originalPrice": 300,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 898,
            "customizable": false
          },
          {
            "id": "item-195",
            "name": "Subz Shammi Kebab (4 pcs)",
            "description": "Lentil and vegetable patties spiced with green coriander and brown cumin.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 915,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-5-cat-biryani-breads",
        "name": "🍚 Awadhi Biryani, Breads & Desserts",
        "items": [
          {
            "id": "item-196",
            "name": "Royal Awadhi Gosht Biryani",
            "description": "Long-grain basmati cooked with tender goat meat in dum with rose water and saffron.",
            "price": 420,
            "originalPrice": 490,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 932,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 315
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-197",
            "name": "Lucknowi Murgh Dum Pulao",
            "description": "Delicate mild chicken pulao layered with aromatic spice potli infusion.",
            "price": 330,
            "originalPrice": 380,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 949,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 248
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-198",
            "name": "Sheermal (Saffron Sweet Bread)",
            "description": "Traditional milk-baked flatbread infused with real saffron and brushed with ghee.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 966,
            "customizable": false
          },
          {
            "id": "item-199",
            "name": "Khamiri Roti (2 pcs)",
            "description": "Fluffy sourdough tandoor flatbread popular in Old Delhi.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 983,
            "customizable": false
          },
          {
            "id": "item-200",
            "name": "Mughlai Paratha Stuffed",
            "description": "Flaky layered bread stuffed with egg and spiced minced meat.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 150,
            "customizable": false
          },
          {
            "id": "item-201",
            "name": "Shahi Tukra with Rabdi Bowl",
            "description": "Golden fried bread croutons soaked in sweet rabri, topped with slivered pistachios.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-202",
            "name": "Kesar Badam Milk Chilled",
            "description": "Slow-boiled whole milk infused with kesar strands, crushed almonds, and cardamom.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 184,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-6",
    "name": "Sardar Pav Bhaji & Bademiya Kebab Corner",
    "slug": "sardar-pav-bhaji-bademiya",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3950,
    "deliveryTime": "20-30 min",
    "distance": "2.4 km",
    "priceTier": "₹",
    "costForTwo": 300,
    "isPureVeg": false,
    "cuisines": [
      "Chaat & Street Food",
      "Rolls & Burgers",
      "Fast Food"
    ],
    "tag": "Mumbai Late Night Sensation",
    "isOpen": true,
    "address": "Tardeo Road, Opposite Bus Depot, Mumbai, Maharashtra - 400034",
    "description": "The taste of Bombay street nights. World-famous butter-drenched Sardar Pav Bhaji, Bademiya spiced baida rotis, and juicy chicken kathi rolls.",
    "menuCategories": [
      {
        "id": "rest-6-cat-pav-bhaji",
        "name": "🧈 Famous Mumbai Pav Bhaji",
        "items": [
          {
            "id": "item-203",
            "name": "Amul Butter Overload Pav Bhaji",
            "description": "Thick mashed vegetable curry topped with half slab of pure Amul butter, served with 2 toasted pavs.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-204",
            "name": "Cheese Pav Bhaji Volcano",
            "description": "Signature bhaji smothered with mountain of grated Amul processed cheese and herbs.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-205",
            "name": "Paneer Pav Bhaji Special",
            "description": "Bhaji loaded with soft fresh paneer cubes and extra dollop of butter with lemon wedges.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 235,
            "customizable": false
          },
          {
            "id": "item-206",
            "name": "Khada Pav Bhaji (Unmashed Veggies)",
            "description": "Whole diced vegetables tossed in sizzling tawa garlic butter and pav bhaji masala.",
            "price": 195,
            "originalPrice": 235,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 252,
            "customizable": false
          },
          {
            "id": "item-207",
            "name": "Jain Pav Bhaji (No Onion, No Garlic)",
            "description": "Authentic Jain preparation made using raw bananas and fresh tomatoes.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-208",
            "name": "Extra Butter Toasted Pav (2 pcs)",
            "description": "Pillow-soft ladi pavs toasted on hot griddle with coriander butter.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-209",
            "name": "Garlic Masala Pav (2 pcs)",
            "description": "Pav stuffed with fiery wet garlic chutney and roasted crisp on tawa.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 303,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-6-cat-mumbai-rolls",
        "name": "🌯 Bademiya Kathi & Baida Rolls",
        "items": [
          {
            "id": "item-210",
            "name": "Chicken Tikka Kathi Roll",
            "description": "Charcoal-grilled chicken tikka, pickled red onions, and mint chutney wrapped in flaky paratha.",
            "price": 170,
            "originalPrice": 210,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 320,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-211",
            "name": "Double Egg Chicken Roll",
            "description": "Crisp egg-layered paratha filled with spiced chicken bhuna and tangy sauce.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 337,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-212",
            "name": "Mutton Seekh Kebab Roll",
            "description": "Juicy grilled mutton seekh wrapped with chaat masala and lemon onions.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 354,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-213",
            "name": "Chicken Baida Roti",
            "description": "Square folded flatbread stuffed with spiced minced chicken and egg, pan-fried crisp.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 371,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-214",
            "name": "Paneer Tikka Roll Deluxe",
            "description": "Tandoori paneer, crunchy capsicum, and spiced mayo in butter paratha.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 388,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-215",
            "name": "Aloo Cheese Frankie",
            "description": "Bombay style frankie stuffed with spiced potato roll, cheese, and frankie masala.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 405,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-216",
            "name": "Soya Chaap Tikka Roll",
            "description": "Smoky soya chaap pieces tossed in spicy onion gravy inside roomali wrap.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 422,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-6-cat-mumbai-street",
        "name": "🥟 Street Chaat, Sandwiches & Juices",
        "items": [
          {
            "id": "item-217",
            "name": "Bombay Toast Grilled Sandwich",
            "description": "Triple-layer sandwich with beetroot, potato, cucumber, mint chutney & cheese.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 439,
            "customizable": false
          },
          {
            "id": "item-218",
            "name": "Sev Puri Mumbai Chowpatty Plate (6 pcs)",
            "description": "Crispy puris topped with diced potatoes, onions, 3 chutneys, and crisp nylon sev.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-219",
            "name": "Dahi Batata Puri (6 pcs)",
            "description": "Puffed puris filled with spiced potato, chilled sweet curd, and pomegranate seeds.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-220",
            "name": "Pani Puri with 2 Waters (8 pcs)",
            "description": "Crisp puris with spicy mint water, sweet tamarind date chutney, and warm ragda.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-221",
            "name": "Pav Vada (2 pcs)",
            "description": "Spicy deep-fried potato dumpling inside bread bun with sweet & dry garlic chutney.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-222",
            "name": "Royal Falooda with Kulfi",
            "description": "Rose syrup milk with basil seeds, falooda sev, dry fruits, and malai kulfi scoop.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 524,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-7",
    "name": "Bikanervala & Haldiram's Sweets & Chaat",
    "slug": "bikanervala-haldirams",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3200,
    "deliveryTime": "20-30 min",
    "distance": "2.0 km",
    "priceTier": "₹₹",
    "costForTwo": 350,
    "isPureVeg": true,
    "cuisines": [
      "Chaat & Street Food",
      "Mithai & Desserts",
      "North Indian"
    ],
    "tag": "India's Favorite Sweetmaker",
    "isOpen": true,
    "address": "Connaught Place, Block L, New Delhi - 110001",
    "description": "Iconic North Indian vegetarian powerhouse known for king-sized Chole Bhature, crispy Raj Kachori, festive gift boxes, and pure ghee sweets.",
    "menuCategories": [
      {
        "id": "rest-7-cat-chole-bhature",
        "name": "🥟 Signature Chole Bhature & Chaat",
        "items": [
          {
            "id": "item-223",
            "name": "Delhi Special Chole Bhature (2 pcs)",
            "description": "Fluffy balloon bhaturas served with spicy dark Amritsari pindi chole, paneer cube, and pickled chilies.",
            "price": 160,
            "originalPrice": 190,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-224",
            "name": "Paneer Stuffed Bhature Plate",
            "description": "Bhatura dough stuffed with grated paneer and herbs, served with rich chickpea gravy.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-225",
            "name": "Royal Raj Kachori King Size",
            "description": "Giant crisp puri filled with bhalla, sprouts, boiled potatoes, sweetened curd, and chutneys.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-226",
            "name": "Dahi Bhalla Papdi Chaat",
            "description": "Soft lentil dumplings soaked in thick sweet curd with crispy papdi and roasted cumin.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-227",
            "name": "Crispy Aloo Tikki with Chole",
            "description": "Shallow-fried golden potato cutlets topped with spicy chole and tamarind glaze.",
            "price": 105,
            "originalPrice": 130,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 609,
            "customizable": false
          },
          {
            "id": "item-228",
            "name": "Gol Gappe with Hing & Jeera Pani (6 pcs)",
            "description": "Crisp semolina sooji puris with tangy asafoetida and mint cumin waters.",
            "price": 70,
            "originalPrice": 85,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-229",
            "name": "Samosa with Chole Chaat (2 pcs)",
            "description": "Crushed golden samosas layered with spicy chana curry and chopped red onions.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 643,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-7-cat-north-indian",
        "name": "🥘 Punjabi Thalis & Snacks",
        "items": [
          {
            "id": "item-230",
            "name": "Deluxe North Indian Thali",
            "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Pulao, 2 Naans, Raita, and Gulab Jamun.",
            "price": 270,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-231",
            "name": "Amritsari Kulcha with Chana",
            "description": "Layered leavened bread stuffed with spiced potatoes and baked in tandoor.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-232",
            "name": "Tandoori Paneer Tikka Platter",
            "description": "Spicy marinated cottage cheese cubes with bell peppers and green mint dip.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-233",
            "name": "Hara Bhara Kebab (6 pcs)",
            "description": "Pan-fried spinach, green pea, and potato patties coated in crushed breadcrumbs.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 711,
            "customizable": false
          },
          {
            "id": "item-234",
            "name": "Kadhai Paneer with Butter Roti (Combo)",
            "description": "Semi-dry paneer preparation served with 3 butter rotis and salad.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 728,
            "customizable": false
          },
          {
            "id": "item-235",
            "name": "Dal Makhani Rice Bowl",
            "description": "Comforting rich black lentils served over steaming basmati rice.",
            "price": 160,
            "originalPrice": 190,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 745,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-7-cat-mithai",
        "name": "🍨 Pure Desi Ghee Mithai & Beverages",
        "items": [
          {
            "id": "item-236",
            "name": "Kaju Katli Diamond Cuts (250g Box)",
            "description": "Silky cashew fudge with silver leaf, made from premium Goa cashews.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 762,
            "customizable": false
          },
          {
            "id": "item-237",
            "name": "Motichoor Ladoo in Desi Ghee (250g)",
            "description": "Fine pearl gram flour beads fried in ghee and soaked in cardamom syrup.",
            "price": 175,
            "originalPrice": 210,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 779,
            "customizable": false
          },
          {
            "id": "item-238",
            "name": "Hot Gulab Jamun (2 pcs)",
            "description": "Spongy khoya spheres in fragrant rose cardamom syrup.",
            "price": 70,
            "originalPrice": 85,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 796,
            "customizable": false
          },
          {
            "id": "item-239",
            "name": "Kesari Rasmalai (2 pcs)",
            "description": "Soft cottage cheese patties steeped in thickened saffron and pistachio milk.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-240",
            "name": "Crispy Desi Ghee Jalebi (100g)",
            "description": "Spiral saffron syrup-soaked crisp fritters served hot.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-241",
            "name": "Rasgulla Tin (4 pcs)",
            "description": "Spongy Bengali cottage cheese balls soaked in light sugar syrup.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-242",
            "name": "Special Kesaria Lassi with Malai",
            "description": "Sweet yogurt beverage with real saffron strands and dry fruits.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 864,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-8",
    "name": "Chowringhee & Arsalan Kolkata Biryani",
    "slug": "chowringhee-arsalan-kolkata",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3600,
    "deliveryTime": "25-35 min",
    "distance": "2.8 km",
    "priceTier": "₹₹",
    "costForTwo": 420,
    "isPureVeg": false,
    "cuisines": [
      "Biryani & Pulao",
      "Rolls & Burgers",
      "Indo-Chinese"
    ],
    "tag": "Legendary Kolkata Sensation",
    "isOpen": true,
    "address": "Park Street, Opposite St. Xavier's, Kolkata, West Bengal - 700016",
    "description": "Home of the authentic Kolkata Dum Biryani with the melt-in-mouth potato, Kolkata Kathi rolls wrapped in flaky lachha parathas, and Indo-Chinese momos.",
    "menuCategories": [
      {
        "id": "rest-8-cat-kolkata-biryani",
        "name": "🍚 Signature Kolkata Dum Biryanis",
        "items": [
          {
            "id": "item-243",
            "name": "Original Kolkata Mutton Biryani",
            "description": "Fragrant long-grain basmati with succulent tender mutton piece, golden aromatic potato, and boiled egg.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 881,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 285
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-244",
            "name": "Special Kolkata Chicken Biryani",
            "description": "Juicy chicken leg slow-cooked with mace, meetha ittar, tender potato, and saffron basmati.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 898,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 218
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-245",
            "name": "Kolkata Egg & Aloo Dum Biryani",
            "description": "Two golden eggs and two melt-in-mouth biryani potatoes in sweet-spiced Awadhi rice.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 915,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 158
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-246",
            "name": "Arsalan Shahi Mutton Chaap",
            "description": "Mutton ribs slow-braised in brown onion, poppy seed, and cashew paste, griddled in ghee.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 932,
            "customizable": false
          },
          {
            "id": "item-247",
            "name": "Chicken Rezala White Gravy",
            "description": "Rich Nawabi stew cooked with yogurt, poppy seeds, cashew paste, and whole dry red chilies.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 949,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 248
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-248",
            "name": "Kolkata Veg Dum Biryani",
            "description": "Aromatic rice with spiced vegetables, golden potato, paneer, and saffron.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 966,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 180
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-8-cat-park-street-rolls",
        "name": "🌯 Authentic Park Street Kathi Rolls",
        "items": [
          {
            "id": "item-249",
            "name": "Double Chicken Double Egg Roll",
            "description": "Kolkata's favorite crispy paratha with 2 fried eggs, juicy chicken tikka, and sliced green chili onions.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 983,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-250",
            "name": "Mutton Boti Kebab Roll",
            "description": "Spicy charred mutton chunks with lemon and chaat masala wrapped in laccha paratha.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 150,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-251",
            "name": "Single Egg Chicken Kathi Roll",
            "description": "Crisp paratha with one fried egg and tender spiced boneless chicken.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 167,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-252",
            "name": "Paneer Tikka Kathi Roll",
            "description": "Grilled cottage cheese cubes with sweet-spicy Kolkata roll sauce and pickled onions.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 184,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-253",
            "name": "Egg & Cheese Roll",
            "description": "Double egg roll loaded with melted cheese and fresh green chilies.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 201,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-254",
            "name": "Aloo Roll Kolkata Style",
            "description": "Tangy mashed potato masala with special spices rolled in crispy fried flatbread.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 218,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-255",
            "name": "Kolkata Chicken Cutlet (2 pcs)",
            "description": "Spiced minced chicken crumb-fried cutlets served with famous Kasundi mustard.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 235,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-8-cat-tangra-chinese",
        "name": "🥟 Tangra Indo-Chinese & Sweets",
        "items": [
          {
            "id": "item-256",
            "name": "Steamed Chicken Momos (6 pcs)",
            "description": "Juicy Kolkata street style dumplings with fiery red chili dipping chutney.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 252,
            "customizable": false
          },
          {
            "id": "item-257",
            "name": "Chilli Chicken Dry Tangra Style",
            "description": "Boneless chicken cubes tossed with dark soy sauce, green chilies, and scallions.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-258",
            "name": "Kolkata Hakka Noodles with Egg & Chicken",
            "description": "Wok-tossed noodles with shredded chicken, scrambled eggs, and crunchy vegetables.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-259",
            "name": "Crispy Chilli Paneer Dry",
            "description": "Wok-tossed paneer with diced onions, capsicum, garlic, and hot soy glaze.",
            "price": 200,
            "originalPrice": 240,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-260",
            "name": "Veg Fried Rice with Schezwan Sauce",
            "description": "Wok-tossed basmati rice with spring onions and garlic.",
            "price": 170,
            "originalPrice": 205,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-261",
            "name": "Baked Rosogolla (2 pcs)",
            "description": "Cottage cheese balls baked in thick caramelised rabdi with slivered nuts.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-262",
            "name": "Kolkata Mishti Doi Pot",
            "description": "Traditional sweet pink fermented curd set in porous clay pot.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 354,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-9",
    "name": "Anjappar Chettinad Restaurant",
    "slug": "anjappar-chettinad",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3150,
    "deliveryTime": "25-35 min",
    "distance": "2.6 km",
    "priceTier": "₹₹",
    "costForTwo": 480,
    "isPureVeg": false,
    "cuisines": [
      "South Indian",
      "Biryani & Pulao",
      "North Indian"
    ],
    "tag": "Fiery Chettinad Spices",
    "isOpen": true,
    "address": "GST Road, Tambaram Sanatorium, Chennai, Tamil Nadu - 600045",
    "description": "Pioneers of legendary Chettinad non-veg cuisine since 1964. Renowned for stone-ground kalpasi and marathi moggu spices, Seeraga Samba Biryani & Pepper Chicken.",
    "menuCategories": [
      {
        "id": "rest-9-cat-chettinad-gravies",
        "name": "🍗 Authentic Chettinad Gravies",
        "items": [
          {
            "id": "item-263",
            "name": "Anjappar Special Chicken Pepper Masala",
            "description": "Tender country chicken braised with black peppercorns, roasted fennel, and curry leaves.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 371,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 232
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-264",
            "name": "Chettinad Mutton Sukka Fry",
            "description": "Tender goat cubes dry-roasted in cast iron wok with shallots, garlic, and crushed spices.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 388,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 304
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-265",
            "name": "Country Chicken Gravy (Naatu Kozhi)",
            "description": "Free-range desi chicken simmered in rich peppery Chettinad village style gravy.",
            "price": 340,
            "originalPrice": 395,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 405,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 272
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-266",
            "name": "Chettinad Crab Masala (Nandu)",
            "description": "Fresh crabs cooked in aromatic coconut, fennel, and coriander leaf sauce.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 422,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 312
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-267",
            "name": "Meen Kuzhambu (Fish Curry in Clay Pot)",
            "description": "Seer fish simmered in tangy shallot-tamarind gravy with garlic cloves.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 439,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 288
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-268",
            "name": "Enna Kathirikai Kuzhambu (Eggplant)",
            "description": "Baby brinjals stuffed with roasted sesame and peanut paste in tangy gravy.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 456,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 152
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-9-cat-biryani-parotta",
        "name": "🥘 Seeraga Samba Biryani & Parottas",
        "items": [
          {
            "id": "item-269",
            "name": "Chettinad Mutton Biryani (Seeraga Samba)",
            "description": "Aromatic tiny seeraga samba rice cooked with tender mutton and whole spices in copper cauldrons.",
            "price": 390,
            "originalPrice": 450,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 473,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 293
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-270",
            "name": "Chettinad Chicken Biryani",
            "description": "Flavorful tiny grain rice infused with country chicken pieces and spicy brinjal salna.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 490,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 233
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-271",
            "name": "Bun Parotta with Salna (2 pcs)",
            "description": "Flaky, buttery, crispy bun-shaped layered parottas served with spicy chicken salna gravy.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-272",
            "name": "Egg Kothu Parotta Madurai Style",
            "description": "Shredded parotta griddle-chopped with scrambled eggs, onions, and curry leaves.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 524,
            "customizable": false
          },
          {
            "id": "item-273",
            "name": "Chicken Kothu Parotta",
            "description": "Minced parotta furiously beaten on tawa with spicy boneless chicken and salna.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-274",
            "name": "Coin Parotta Basket (4 mini)",
            "description": "Miniature round flaky parottas, crisp on outside and soft inside.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-275",
            "name": "Kal Dosa with Salna (2 pcs)",
            "description": "Thick soft spongy dosas served with spicy Chettinad vegetable or meat gravy.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 575,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-9-cat-sides-desserts",
        "name": "🍢 Starters & Traditional Beverages",
        "items": [
          {
            "id": "item-276",
            "name": "Mutton Kola Urundai (4 pcs)",
            "description": "Crispy fried minced mutton and lentil meatballs seasoned with roasted fennel.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-277",
            "name": "Prawn Pepper Fry (Eral Sukka)",
            "description": "Juicy sea prawns tossed with garlic, curry leaves, and coarsely crushed black pepper.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 609,
            "customizable": false
          },
          {
            "id": "item-278",
            "name": "Chicken Lollipop Chettinad Toss (5 pcs)",
            "description": "Frenched chicken wings batter-fried and tossed in fiery garlic pepper paste.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-279",
            "name": "Vazhaipoo Vadai (Banana Blossom 4 pcs)",
            "description": "Crisp savory fritters made with cleaned banana flowers and chana dal.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-280",
            "name": "Elaneer Payasam (Tender Coconut)",
            "description": "Chilled sweet pudding prepared with tender coconut pulp, coconut water, and condensed milk.",
            "price": 110,
            "originalPrice": 140,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-281",
            "name": "Jigarthanda Madurai Special",
            "description": "Traditional Madurai drink with badam pisin, nannari syrup, chilled milk, and basundi ice cream.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-282",
            "name": "Spicy Rasam Soup Cup",
            "description": "Piping hot tomato, tamarind, and tellicherry pepper broth with roasted garlic.",
            "price": 50,
            "originalPrice": 65,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 694,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-10",
    "name": "Chai Point & Kulhad Chai Shai",
    "slug": "chai-point-kulhad-chai",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.7,
    "reviewCount": 2800,
    "deliveryTime": "15-25 min",
    "distance": "1.2 km",
    "priceTier": "₹",
    "costForTwo": 200,
    "isPureVeg": true,
    "cuisines": [
      "Chai & Lassi",
      "Chaat & Street Food",
      "Rolls & Burgers"
    ],
    "tag": "India's Favorite Chai Break",
    "isOpen": true,
    "address": "Koramangala 5th Block, 80 Feet Road, Bengaluru, Karnataka - 560095",
    "description": "Hot brewing station delivering India's love for freshly crushed Adrak Elaichi Chai, Bun Maska, crisp Punjabi samosas, and savory tea-time snacks.",
    "menuCategories": [
      {
        "id": "rest-10-cat-hot-chai",
        "name": "🧋 Freshly Brewed Kulhad Chais",
        "items": [
          {
            "id": "item-283",
            "name": "Dum Chai Flask (500ml - Serves 4)",
            "description": "Full-bodied Assam tea leaves simmered with whole milk and caramelized brown sugar.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 711,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard 250ml Flask",
                  "priceDiff": 0
                },
                {
                  "name": "Family 500ml Flask",
                  "priceDiff": 84
                }
              ],
              "addOns": [
                {
                  "name": "Add 2 Butter Biscuits",
                  "price": 25
                },
                {
                  "name": "Add Bun Maska",
                  "price": 50
                }
              ],
              "spiceLevels": [
                "Less Sugar",
                "Regular Sweetness",
                "No Sugar"
              ]
            }
          },
          {
            "id": "item-284",
            "name": "Adrak Elaichi Kulhad Chai Flask (500ml)",
            "description": "Fresh crushed ginger root and green cardamom infused milk tea.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 728,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard 250ml Flask",
                  "priceDiff": 0
                },
                {
                  "name": "Family 500ml Flask",
                  "priceDiff": 96
                }
              ],
              "addOns": [
                {
                  "name": "Add 2 Butter Biscuits",
                  "price": 25
                },
                {
                  "name": "Add Bun Maska",
                  "price": 50
                }
              ],
              "spiceLevels": [
                "Less Sugar",
                "Regular Sweetness",
                "No Sugar"
              ]
            }
          },
          {
            "id": "item-285",
            "name": "Masala Chai Flask with 7 Spices (500ml)",
            "description": "Aromatic blend of cinnamon, clove, black pepper, nutmeg, ginger, and cardamom.",
            "price": 165,
            "originalPrice": 200,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 745,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard 250ml Flask",
                  "priceDiff": 0
                },
                {
                  "name": "Family 500ml Flask",
                  "priceDiff": 99
                }
              ],
              "addOns": [
                {
                  "name": "Add 2 Butter Biscuits",
                  "price": 25
                },
                {
                  "name": "Add Bun Maska",
                  "price": 50
                }
              ],
              "spiceLevels": [
                "Less Sugar",
                "Regular Sweetness",
                "No Sugar"
              ]
            }
          },
          {
            "id": "item-286",
            "name": "Kolkata Kadhak Chai Cup",
            "description": "Strong highway-dhaba style boiled sweetened tea.",
            "price": 45,
            "originalPrice": 60,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 762,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard 250ml Flask",
                  "priceDiff": 0
                },
                {
                  "name": "Family 500ml Flask",
                  "priceDiff": 27
                }
              ],
              "addOns": [
                {
                  "name": "Add 2 Butter Biscuits",
                  "price": 25
                },
                {
                  "name": "Add Bun Maska",
                  "price": 50
                }
              ],
              "spiceLevels": [
                "Less Sugar",
                "Regular Sweetness",
                "No Sugar"
              ]
            }
          },
          {
            "id": "item-287",
            "name": "Saffron Kesar Royal Chai (Flask 500ml)",
            "description": "Premium tea brewed with real Kashmiri saffron strands and dry fruits.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 779,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard 250ml Flask",
                  "priceDiff": 0
                },
                {
                  "name": "Family 500ml Flask",
                  "priceDiff": 114
                }
              ],
              "addOns": [
                {
                  "name": "Add 2 Butter Biscuits",
                  "price": 25
                },
                {
                  "name": "Add Bun Maska",
                  "price": 50
                }
              ],
              "spiceLevels": [
                "Less Sugar",
                "Regular Sweetness",
                "No Sugar"
              ]
            }
          },
          {
            "id": "item-288",
            "name": "Lemon Green Tea with Honey (Cup)",
            "description": "Organic whole leaf green tea with fresh lemon squeeze and raw forest honey.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 796,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard 250ml Flask",
                  "priceDiff": 0
                },
                {
                  "name": "Family 500ml Flask",
                  "priceDiff": 39
                }
              ],
              "addOns": [
                {
                  "name": "Add 2 Butter Biscuits",
                  "price": 25
                },
                {
                  "name": "Add Bun Maska",
                  "price": 50
                }
              ],
              "spiceLevels": [
                "Less Sugar",
                "Regular Sweetness",
                "No Sugar"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-10-cat-bun-maska",
        "name": "🥐 Bun Maska, Samosas & Pakodas",
        "items": [
          {
            "id": "item-289",
            "name": "Irani Bun Maska Butter Jam",
            "description": "Pillow soft bakery bun sliced and stuffed with rich salted Amul butter and mixed fruit jam.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-290",
            "name": "Bun Omelette Street Style",
            "description": "Fluffy 2-egg masala omelette with onions and green chilies tucked inside butter-toasted bun.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-291",
            "name": "Punjabi Aloo Samosa (2 pcs)",
            "description": "Flaky pastry stuffed with spiced potatoes, green peas, and whole coriander seeds, with mint chutney.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-292",
            "name": "Paneer Bread Pakoda (2 pcs)",
            "description": "Spiced cottage cheese sandwich slice dipped in seasoned gram flour batter and fried golden.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-293",
            "name": "Crispy Onion Pakoda Plate",
            "description": "Thinly sliced onions coated in spiced besan and fried until crispy, with chai dip.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 881,
            "customizable": false
          },
          {
            "id": "item-294",
            "name": "Corn & Cheese Toasties (2 pcs)",
            "description": "Crunchy bread slices loaded with sweet corn, green chilies, and melted cheese.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 898,
            "customizable": false
          },
          {
            "id": "item-295",
            "name": "Vada Pav Mumbai Style with Chutneys",
            "description": "Spicy batata vada in pav with fried salted green chili and dry garlic podi.",
            "price": 55,
            "originalPrice": 70,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 915,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-10-cat-chilled-beverages",
        "name": "🥤 Iced Teas, Shakes & Sweets",
        "items": [
          {
            "id": "item-296",
            "name": "Peach & Passionfruit Iced Tea (350ml)",
            "description": "Fresh brewed black tea shaken with sweet peach pulp, lemon, and fresh mint.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 932,
            "customizable": false
          },
          {
            "id": "item-297",
            "name": "Cold Coffee with Chocolate Fudge",
            "description": "Thick blended creamy coffee with Hershey's chocolate drizzle and coffee powder.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 949,
            "customizable": false
          },
          {
            "id": "item-298",
            "name": "Thandai Milkshake with Dry Fruits",
            "description": "Traditional spiced milk with crushed almonds, fennel, poppy seeds, and rose petals.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 966,
            "customizable": false
          },
          {
            "id": "item-299",
            "name": "Classic Sweet Lassi Glass",
            "description": "Chilled creamy churned yogurt topped with thick malai layer.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 983,
            "customizable": false
          },
          {
            "id": "item-300",
            "name": "Warm Banana Walnut Cake Slice",
            "description": "Freshly baked moist tea cake with ripe bananas and roasted walnuts.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 150,
            "customizable": false
          },
          {
            "id": "item-301",
            "name": "Gajar Ka Halwa Warm Cup",
            "description": "Traditional Punjabi carrot dessert slow cooked in pure milk and desi ghee.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-302",
            "name": "Chocolate Brownie with Choco Chips",
            "description": "Dense fudgy chocolate brownie with dark chocolate chips.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 184,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-11",
    "name": "Naturals Artisanal Indian Ice Cream & Kulfi",
    "slug": "naturals-ice-cream-kulfi",
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 3950,
    "deliveryTime": "15-25 min",
    "distance": "1.4 km",
    "priceTier": "₹₹",
    "costForTwo": 250,
    "isPureVeg": true,
    "cuisines": [
      "Mithai & Desserts",
      "Chai & Lassi"
    ],
    "tag": "100% Real Fruit Ice Creams",
    "isOpen": true,
    "address": "JVPD Scheme, Juhu, Mumbai, Maharashtra - 400049",
    "description": "Iconic pioneer of fresh artisanal Indian ice creams made with only 3 ingredients: pure milk, sugar, and real seasonal fruits. No artificial colors or preservatives.",
    "menuCategories": [
      {
        "id": "rest-11-cat-fruit-specials",
        "name": "🍨 Signature Real Fruit Ice Creams",
        "items": [
          {
            "id": "item-303",
            "name": "Tender Coconut Ice Cream (Tub 500ml)",
            "description": "World-famous creamy ice cream loaded with tender coconut malai chunks.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-304",
            "name": "Alphonso Mango Ice Cream (Tub 500ml)",
            "description": "Pure Ratnagiri Alphonso mango pulp churned with whole farm milk.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-305",
            "name": "Sitaphal (Custard Apple) Tub (500ml)",
            "description": "Fresh de-seeded custard apple pulp in velvety rich milk ice cream.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 235,
            "customizable": false
          },
          {
            "id": "item-306",
            "name": "Roasted Almond Ice Cream Scoop",
            "description": "Whole California almonds roasted in ghee and folded into sweet cream.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 252,
            "customizable": false
          },
          {
            "id": "item-307",
            "name": "Chikoo (Sapota) Fresh Fruit Scoop",
            "description": "Sweet caramelized Dahanu chikoo pulp blended to perfection.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-308",
            "name": "Kala Jamun Real Fruit Scoop",
            "description": "Tangy and sweet Indian black plum fruit ice cream with deep purple hue.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-309",
            "name": "Jackfruit (Kathal) Seasonal Scoop",
            "description": "Sweet aromatic tropical jackfruit chunks in rich cream.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 303,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-11-cat-kulfi-malai",
        "name": "🍡 Traditional Shahi Kulfis",
        "items": [
          {
            "id": "item-310",
            "name": "Royal Kesar Pista Matka Kulfi",
            "description": "Traditional slow-reduced milk kulfi with saffron, pistachios, and almonds set in earthen clay pot.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-311",
            "name": "Malai Rabdi Kulfi Stick",
            "description": "Thick layered cream kulfi on stick, flavored with green cardamom.",
            "price": 75,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-312",
            "name": "Gulkand Paan Kulfi Slice",
            "description": "Refreshing betel leaf essence with sweet Damask rose petal preserve.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-313",
            "name": "Mango Stuffed Whole Kulfi",
            "description": "Whole Alphonso mango deseeded and stuffed with rich rabri kulfi, sliced into wheels.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 371,
            "customizable": false
          },
          {
            "id": "item-314",
            "name": "Anjeer (Fig) Cream Scoop",
            "description": "Turkish dried figs stewed and blended into rich dairy cream.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 388,
            "customizable": false
          },
          {
            "id": "item-315",
            "name": "Kaju Draksh (Cashew & Raisin) Scoop",
            "description": "Golden raisins and roasted cashew bits folded into sweet base.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-316",
            "name": "Rich Belgian Chocolate Scoop",
            "description": "Dark chocolate ice cream loaded with chocolate fudge ribbons.",
            "price": 90,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 422,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-11-cat-sundaes-shakes",
        "name": "🥤 Thick Shakes & Sundaes",
        "items": [
          {
            "id": "item-317",
            "name": "Tender Coconut Thick Shake (350ml)",
            "description": "Fresh coconut ice cream blended with cold milk and topped with malai.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 439,
            "customizable": false
          },
          {
            "id": "item-318",
            "name": "Alphonso Mango Mastani Shake",
            "description": "Pune special mango milkshake topped with scoop of mango ice cream and dry fruits.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-319",
            "name": "Sitaphal Cream Milkshake",
            "description": "Decadent thick shake made with custard apple ice cream and cream.",
            "price": 150,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-320",
            "name": "Dry Fruit Nut Sundae",
            "description": "Trio of Kesar Pista, Roasted Almond and Fig ice creams topped with honey and nuts.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-321",
            "name": "Hot Chocolate Fudge Sundae",
            "description": "Two scoops of vanilla ice cream drenched in warm homemade dark chocolate fudge.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-322",
            "name": "Rose Falooda Sundae Glass",
            "description": "Chilled rose milk, basil seeds, vermicelli, and scoop of malai kulfi.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 524,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-12",
    "name": "Mainland China & Wow! Momo Indo-Chinese Express",
    "slug": "mainland-china-wow-momo",
    "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3450,
    "deliveryTime": "25-35 min",
    "distance": "2.5 km",
    "priceTier": "₹₹",
    "costForTwo": 500,
    "isPureVeg": false,
    "cuisines": [
      "Indo-Chinese",
      "Rolls & Burgers",
      "Fast Food"
    ],
    "tag": "India's Favorite Indo-Chinese",
    "isOpen": true,
    "address": "Church Street, Off MG Road, Bengaluru, Karnataka - 560001",
    "description": "The ultimate celebration of Indian-Chinese flavors. Steaming Himalayan Momos, sizzling Hakka noodles, crispy Schezwan wings, and wok-tossed Manchurian.",
    "menuCategories": [
      {
        "id": "rest-12-cat-momos",
        "name": "🥟 Famous Steamed & Pan-Fried Momos",
        "items": [
          {
            "id": "item-323",
            "name": "Steamed Chicken Darjeeling Momos (6 pcs)",
            "description": "Thin-skinned dumplings packed with minced juicy chicken, spring onions, and ginger with fiery dip.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-324",
            "name": "Crispy Fried Cheese & Corn Momos (6 pcs)",
            "description": "Golden crisp fried momos overflowing with melted cheese, corn, and green chilies.",
            "price": 170,
            "originalPrice": 205,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-325",
            "name": "Pan-Fried Chicken Schezwan Momos (6 pcs)",
            "description": "Pan-seared momos tossed in sizzling garlic Schezwan chili paste with bell peppers.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-326",
            "name": "Steamed Veg Himalayan Momos (6 pcs)",
            "description": "Stuffed with finely minced cabbage, carrots, beans, and fresh coriander.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-327",
            "name": "Tandoori Chicken Momos (6 pcs)",
            "description": "Momos marinated in tandoori yogurt spice and roasted over charcoal embers.",
            "price": 195,
            "originalPrice": 235,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 609,
            "customizable": false
          },
          {
            "id": "item-328",
            "name": "Momo in Hot Garlic Sauce (Bowl of 6)",
            "description": "Fried chicken momos submerged in spicy, tangy red hot garlic gravy.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 626,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-12-cat-noodles-rice",
        "name": "🍜 Wok-Tossed Noodles & Fried Rice",
        "items": [
          {
            "id": "item-329",
            "name": "Classic Chicken Hakka Noodles",
            "description": "Wok-tossed noodles with shredded chicken, eggs, crunchy julienned carrots, and light soy.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-330",
            "name": "Schezwan Egg & Chicken Fried Rice",
            "description": "Spicy rice tossed with house-made Sichuan peppercorn sauce, chicken, and eggs.",
            "price": 230,
            "originalPrice": 275,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-331",
            "name": "Veg Chilli Garlic Hakka Noodles",
            "description": "Smoky noodles infused with burnt garlic, green chilies, and colorful bell peppers.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-332",
            "name": "Triple Schezwan Rice Bowl with Gravy",
            "description": "Combination of fried rice, noodles, crispy fried noodles, and spicy Schezwan chicken gravy.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-333",
            "name": "Singapore Rice with Cashews",
            "description": "Fragrant curry-powder scented fried rice with pineapple bits, vegetables, and cashews.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 711,
            "customizable": false
          },
          {
            "id": "item-334",
            "name": "Pan-Fried Cantonese Noodles",
            "description": "Crispy noodle bed topped with thick chicken and vegetable white wine gravy.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 728,
            "customizable": false
          },
          {
            "id": "item-335",
            "name": "Veg Burnt Garlic Fried Rice",
            "description": "Aromatic rice with loads of golden toasted garlic flakes and spring onions.",
            "price": 180,
            "originalPrice": 215,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 745,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-12-cat-manchurian-sides",
        "name": "🍗 Appetizers & Manchurian Gravies",
        "items": [
          {
            "id": "item-336",
            "name": "Chilli Chicken Dry Indo-Chinese Style",
            "description": "Crispy boneless chicken tossed with diced capsicum, onions, dark soy, and green chilies.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 762,
            "customizable": false
          },
          {
            "id": "item-337",
            "name": "Crispy Honey Chilli Potatoes",
            "description": "Double-fried potato fingers glazed with spicy chili paste, honey, and toasted sesame seeds.",
            "price": 180,
            "originalPrice": 215,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 779,
            "customizable": false
          },
          {
            "id": "item-338",
            "name": "Veg Manchurian Gravy Bowl",
            "description": "Minced vegetable balls simmered in savory garlic, ginger, and soy sauce gravy.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 796,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 168
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-339",
            "name": "Drums of Heaven (6 pcs)",
            "description": "Chicken lollipop wings tossed in sweet and fiery Cantonese sauce.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-340",
            "name": "Chilli Paneer Dry",
            "description": "Crisp paneer cubes wok-tossed with red and green bell peppers and hot chili sauce.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-341",
            "name": "Sweet Corn Chicken Soup",
            "description": "Silky velvety soup with creamed sweet corn, shredded chicken, and egg drops.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-342",
            "name": "Manchow Soup with Crispy Noodles",
            "description": "Fiery dark soup flavored with garlic, cilantro, and served with fried noodles.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 864,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-13",
    "name": "Vidyarthi Bhavan Traditional Tiffin",
    "slug": "vidyarthi-bhavan-tiffin",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 4500,
    "deliveryTime": "20-30 min",
    "distance": "1.9 km",
    "priceTier": "₹",
    "costForTwo": 220,
    "isPureVeg": true,
    "cuisines": [
      "South Indian",
      "Chai & Lassi"
    ],
    "tag": "1943 Bengaluru Heritage",
    "isOpen": true,
    "address": "Gandhi Bazaar Main Road, Basavanagudi, Bengaluru, Karnataka - 560004",
    "description": "Operating since 1943. Legendary for thick, golden, buttery crisp Benne Dosas roasted over cast-iron pans, flavorful potato palya, and thick coconut chutney.",
    "menuCategories": [
      {
        "id": "rest-13-cat-benne-dosas",
        "name": "🧈 Iconic Heritage Benne Dosas",
        "items": [
          {
            "id": "item-343",
            "name": "Vidyarthi Bhavan Special Benne Masala Dosa",
            "description": "Thick, fluffy, crunchy golden dosa roasted in pure butter, stuffed with fragrant potato palya.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 881,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-344",
            "name": "Crispy Plain Benne Dosa",
            "description": "Butter-roasted crispy golden dosa served with rich green chili coconut chutney.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 898,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-345",
            "name": "Sāgu Masala Dosa",
            "description": "Traditional Bengaluru dosa spread with spiced vegetable kurma (sāgu) and potato filling.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 915,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-346",
            "name": "Onion Rava Dosa Crispy",
            "description": "Lacy semolina crepe with chopped shallots, cumin, ginger, and curry leaves.",
            "price": 135,
            "originalPrice": 165,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 932,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-347",
            "name": "Open Butter Masala Dosa",
            "description": "Dosa served flat open with melted butter pool, spicy chutney powder, and potato mash.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 949,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-348",
            "name": "Set Dosa Trio (3 pcs)",
            "description": "Three small cloud-soft spongy dosas served with creamy vegetable sāgu and chutney.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 966,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-349",
            "name": "Ghee Podi Dosa",
            "description": "Crunchy dosa dusted with roasted lentil gunpowder and topped with ghee.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 983,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-13-cat-heritage-tiffin",
        "name": "🥞 Karnataka Tiffin Specials",
        "items": [
          {
            "id": "item-350",
            "name": "Steamed Thatte Idli with Ghee Podi (2 pcs)",
            "description": "Plate-sized soft steamed idlis drizzled with piping hot ghee and spicy chutney podi.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 150,
            "customizable": false
          },
          {
            "id": "item-351",
            "name": "Crispy Uddina Vada (2 pcs)",
            "description": "Deep-fried golden black gram lentil doughnuts with pepper and coconut chunks.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-352",
            "name": "Khara Bath (Spicy Upma)",
            "description": "Coarse semolina cooked with tomatoes, peas, mustard seeds, and bisi bele bath spices.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-353",
            "name": "Kesari Bath (Saffron Halwa)",
            "description": "Semolina dessert enriched with pure ghee, sugar, cashews, and saffron.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-354",
            "name": "Chow Chow Bath (Combo of Khara & Kesari)",
            "description": "Classic Bangalore morning pair: one scoop of savory Khara Bath and one scoop of sweet Kesari Bath.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-355",
            "name": "Poori Sagu Plate (3 pcs)",
            "description": "Puffy wheat pooris served with coconut and vegetable spiced kurma.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 235,
            "customizable": false
          },
          {
            "id": "item-356",
            "name": "Curd Vada (2 pcs)",
            "description": "Crisp vadas soaked in thick chilled yogurt seasoned with mustard, ginger, and boondi.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 252,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-13-cat-drinks-sweets",
        "name": "☕ Filter Kaapi & Traditional Snacks",
        "items": [
          {
            "id": "item-357",
            "name": "Bangalore Filter Coffee in Davarah",
            "description": "Piping hot strong chicory decoction with frothy fresh cow milk.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-358",
            "name": "Maddur Vada (2 pcs)",
            "description": "Crispy onion, semolina, and rice flour fritters from the town of Maddur.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-359",
            "name": "Congress Kadlekai (Spiced Peanuts 150g)",
            "description": "Split roasted peanuts tossed with red chili powder, turmeric, and asafoetida.",
            "price": 50,
            "originalPrice": 65,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-360",
            "name": "Masala Buttermilk with Ginger & Coriander",
            "description": "Refreshing churned spiced buttermilk.",
            "price": 35,
            "originalPrice": 45,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-361",
            "name": "Mysore Pak Pure Ghee (100g)",
            "description": "Crumbly gram flour and ghee fudge.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-362",
            "name": "Holige (Puran Poli 2 pcs)",
            "description": "Sweet flatbread filled with cooked chana dal, jaggery, cardamom, and ghee.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 354,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-14",
    "name": "Punjab Grill & Pind Balluchi Royal Dhaba",
    "slug": "punjab-grill-pind-balluchi",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3350,
    "deliveryTime": "30-40 min",
    "distance": "3.2 km",
    "priceTier": "₹₹₹",
    "costForTwo": 600,
    "isPureVeg": false,
    "cuisines": [
      "North Indian",
      "Biryani & Pulao",
      "Chai & Lassi"
    ],
    "tag": "Grand Punjabi Feast",
    "isOpen": true,
    "address": "Mall of India, Sector 18, Noida, Uttar Pradesh - 201301",
    "description": "Immerse in the grand flavors of Punjab. Golden Tandoori Murgh, buttery Dal Makhani, Amritsari Chana Kulche, Sarson Da Saag & hand-churned Patiala Lassi.",
    "menuCategories": [
      {
        "id": "rest-14-cat-punjabi-curries",
        "name": "🥘 Hearty Punjabi Curries",
        "items": [
          {
            "id": "item-363",
            "name": "Murgh Makhani Highway Style",
            "description": "Tandoori chicken pieces cooked in thick tomato, cashew, and desi butter gravy.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 371,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 288
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-364",
            "name": "Amritsari Pindi Chana",
            "description": "Chickpeas simmered with dried pomegranate seeds, tea leaf decoction, and carom seeds.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 388,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 192
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-365",
            "name": "Sarson Ka Saag with Makki Di Roti Combo",
            "description": "Pureed winter mustard greens cooked in desi ghee, served with 2 maize flatbreads and white butter.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-366",
            "name": "Kadhai Murgh Dhaba Style",
            "description": "Chicken bone-in cooked with crushed coriander seeds, bell peppers, and whole dried red chilies.",
            "price": 340,
            "originalPrice": 395,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 422,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 272
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-367",
            "name": "Paneer Lababdar Shahi",
            "description": "Soft paneer in rich tomato-onion masala laced with grated paneer and kasuri methi.",
            "price": 280,
            "originalPrice": 325,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 439,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 224
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-368",
            "name": "Mutton Rara Punjabi Special",
            "description": "Succulent mutton pieces braised in spicy minced mutton keema gravy.",
            "price": 450,
            "originalPrice": 520,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 456,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 360
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-369",
            "name": "Dal Tadka Double Ghee Fry",
            "description": "Yellow arhar lentils tempered twice with garlic, cumin, and whole dry red chilies.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 473,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 168
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-14-cat-dhaba-tandoor",
        "name": "🍗 Clay Oven Dhaba Tandoor",
        "items": [
          {
            "id": "item-370",
            "name": "Amritsari Machhi Tikka (Fish)",
            "description": "River sole fish marinated in carom seeds, gram flour, and mustard oil, roasted in tandoor.",
            "price": 410,
            "originalPrice": 480,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-371",
            "name": "Murgh Malai Tikka (6 pcs)",
            "description": "Creamy chicken skewers marinated in cheese, yogurt, cardamom, and fresh coriander.",
            "price": 320,
            "originalPrice": 370,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-372",
            "name": "Tandoori Kukkad (Half Bird)",
            "description": "Traditional bone-in chicken marinated in spicy red tandoori masala and lemon juice.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 524,
            "customizable": false
          },
          {
            "id": "item-373",
            "name": "Dhabe Da Paneer Tikka (6 pcs)",
            "description": "Thick paneer cubes marinated in pickle masala and hung curd, roasted crisp.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-374",
            "name": "Mutton Seekh Gilafi Kebab (4 pcs)",
            "description": "Minced lamb skewers coated with diced tricolor bell peppers and onions.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-375",
            "name": "Tandoori Bharwan Aloo (4 pcs)",
            "description": "Hollowed potatoes stuffed with dry fruits, paneer, and spices, baked in tandoor.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-376",
            "name": "Crispy Soya Malai Chaap",
            "description": "Soya chaap cooked in rich cream, cashew paste, and butter.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 592,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-14-cat-breads-desserts",
        "name": "🫓 Naans, Lassi & Desserts",
        "items": [
          {
            "id": "item-377",
            "name": "Amritsari Aloo Pyaaz Kulcha with Butter",
            "description": "Stuffed tandoori bread with spiced potatoes, onions, and crushed coriander.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 609,
            "customizable": false
          },
          {
            "id": "item-378",
            "name": "Garlic Butter Naan",
            "description": "Leavened flatbread brushed with garlic and butter.",
            "price": 80,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-379",
            "name": "Lachha Paratha Whole Wheat",
            "description": "Multi-layered flaky whole wheat bread baked in tandoor.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-380",
            "name": "Jeera Saffron Pulao",
            "description": "Basmati rice cooked with royal cumin, saffron, and ghee.",
            "price": 160,
            "originalPrice": 190,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-381",
            "name": "Patiala Lassi (500ml Heavy Malai Glass)",
            "description": "Traditional thick sweet churned yogurt drink topped with a layer of cream and pistachios.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-382",
            "name": "Gulab Jamun with Rabri",
            "description": "Warm khoya dumplings smothered in chilled thick rabri.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-383",
            "name": "Kulfi Falooda Royal Platter",
            "description": "Pista kulfi slices topped with sweetened falooda noodles, rose syrup, and rabdi.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 711,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-15",
    "name": "Dindigul Thalappakatti Biryani Hotel",
    "slug": "dindigul-thalappakatti-biryani",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3800,
    "deliveryTime": "25-35 min",
    "distance": "2.3 km",
    "priceTier": "₹₹",
    "costForTwo": 480,
    "isPureVeg": false,
    "cuisines": [
      "South Indian",
      "Biryani & Pulao"
    ],
    "tag": "1957 Seeraga Samba Icon",
    "isOpen": true,
    "address": "Kumaran Road, Near Railway Station, Tiruppur, Tamil Nadu - 641601",
    "description": "Since 1957. Renowned worldwide for proprietary Kannivadi tender grass-fed goat meat, fragrant Seeraga Samba short-grain rice, and traditional firewood dum preparation.",
    "menuCategories": [
      {
        "id": "rest-15-cat-thalappakatti-biryani",
        "name": "🍚 Thalappakatti Seeraga Samba Biryani",
        "items": [
          {
            "id": "item-384",
            "name": "Thalappakatti Mutton Biryani Special",
            "description": "Authentic Dindigul style small-grain Seeraga Samba rice with tender Kannivadi meat, served with Dalcha & Raita.",
            "price": 395,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 728,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 296
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-385",
            "name": "Thalappakatti Chicken Biryani",
            "description": "Short-grain samba rice slow-cooked with fresh bone-in chicken and secret masala blend.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 745,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 233
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-386",
            "name": "Thalappakatti Egg Biryani",
            "description": "Flavorful samba biryani rice paired with 2 golden fried eggs and spicy dalcha gravy.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 762,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 173
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-387",
            "name": "Thalappakatti Paneer Biryani",
            "description": "Seeraga samba rice cooked with tender spiced paneer cubes in authentic Thalappakatti masala.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 779,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 195
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-388",
            "name": "Kuska Rice (Plain Biryani Rice)",
            "description": "Rich seeraga samba biryani rice cooked in fragrant broth without meat pieces.",
            "price": 180,
            "originalPrice": 215,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 796,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 135
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-389",
            "name": "Thalappakatti Boneless Chicken Biryani",
            "description": "Juicy marinated boneless chicken cuts tossed with seeraga samba rice.",
            "price": 330,
            "originalPrice": 385,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 813,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 248
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-15-cat-thalappakatti-starters",
        "name": "🍗 Authentic Kongu & Dindigul Starters",
        "items": [
          {
            "id": "item-390",
            "name": "Thalappakatti Mutton Kola Urundai (4 pcs)",
            "description": "Signature crispy minced mutton balls seasoned with stone-ground roasted spices.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-391",
            "name": "Black Pepper Chicken Dry",
            "description": "Country chicken cooked in fresh coarsely crushed tellicherry pepper and curry leaves.",
            "price": 270,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-392",
            "name": "Chicken Chukka Varuval",
            "description": "Spicy dry-fried chicken with shallots, red chilies, and cold-pressed gingelly oil.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-393",
            "name": "Mutton Sukka Varuval",
            "description": "Tender goat cubes pan-roasted in iron skillet with caramelized pearl onions.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 881,
            "customizable": false
          },
          {
            "id": "item-394",
            "name": "Chicken 65 Dindigul Style",
            "description": "Crisp boneless chicken bites with spicy South Indian tempering.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 898,
            "customizable": false
          },
          {
            "id": "item-395",
            "name": "Prawn Pepper Masala Dry",
            "description": "Fresh coastal prawns tossed with garlic, fennel, and crushed black pepper.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 915,
            "customizable": false
          },
          {
            "id": "item-396",
            "name": "Chilli Paneer South Style",
            "description": "Crisp paneer cubes tossed with onions, green chilies, and curry leaf aroma.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 932,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-15-cat-gravies-parotta",
        "name": "🥘 Dindigul Gravies, Parotta & Drinks",
        "items": [
          {
            "id": "item-397",
            "name": "Thalappakatti Chicken Gravy",
            "description": "Rich rustic chicken curry made with fresh ground coriander and coconut paste.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 949,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 232
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-398",
            "name": "Chettinad Mutton Curry",
            "description": "Traditional spicy mutton gravy with shallots and curry leaves.",
            "price": 390,
            "originalPrice": 450,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 966,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 312
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-399",
            "name": "Enna Kathirikai Gravy (Baby Eggplant)",
            "description": "Baby eggplants simmered in tangy shallot-tamarind gravy.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 983,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 152
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-400",
            "name": "Kerala Malabar Parotta (2 pcs)",
            "description": "Multi-layered flaky flatbread made with refined flour and griddled with oil.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 150,
            "customizable": false
          },
          {
            "id": "item-401",
            "name": "Egg Kothu Parotta",
            "description": "Shredded parotta griddled with egg, onions, and spicy salna.",
            "price": 150,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-402",
            "name": "Jigarthanda Cooler",
            "description": "Famous cold beverage with almond gum, nannari syrup, and ice cream.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-403",
            "name": "Gulab Jamun (2 pcs)",
            "description": "Classic sweet khoya dumplings soaked in saffron syrup.",
            "price": 70,
            "originalPrice": 85,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 201,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-16",
    "name": "Shree Thaker Bhojanalay Royal Gujarati Thali",
    "slug": "shree-thaker-bhojanalay",
    "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 3700,
    "deliveryTime": "25-35 min",
    "distance": "2.7 km",
    "priceTier": "₹₹",
    "costForTwo": 500,
    "isPureVeg": true,
    "cuisines": [
      "South Indian",
      "North Indian",
      "Chaat & Street Food"
    ],
    "tag": "1945 Royal Gujarati Feast",
    "isOpen": true,
    "address": "Kalbadevi Road, Marine Lines, Mumbai, Maharashtra - 400002",
    "description": "Operating since 1945. Renowned as Mumbai's best traditional Gujarati & Kathiyawadi feast with melting Puris, Undhiyu, Dhokla, sweet Kadhi, and Aamras.",
    "menuCategories": [
      {
        "id": "rest-16-cat-thali-specials",
        "name": "👑 Royal Gujarati Thali & Curries",
        "items": [
          {
            "id": "item-404",
            "name": "Maharaja Gujarati Thali Box",
            "description": "Grand feast: Undhiyu, Sweet Gujarati Kadhi, Dal, Paneer Shak, 4 Phulkas, Dhokla, Khichdi, and Shrikhand.",
            "price": 340,
            "originalPrice": 395,
            "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-405",
            "name": "Authentic Surti Undhiyu Pot",
            "description": "Winter specialty made with green beans, baby eggplants, purple yam, and fenugreek muthiyas.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 235,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 192
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-406",
            "name": "Gujarati Sweet & Sour Kadhi",
            "description": "Tangy and sweet tempered yogurt soup with ginger, green chilies, and cinnamon.",
            "price": 160,
            "originalPrice": 190,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 252,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 128
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-407",
            "name": "Sev Tameta Nu Shaak",
            "description": "Tangy tomato curry topped with crunchy spicy ratlami sev and fresh cilantro.",
            "price": 180,
            "originalPrice": 215,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 269,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 144
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-408",
            "name": "Kaju Curry Kathiyawadi",
            "description": "Roasted whole cashews simmered in rich spicy tomato and onion gravy.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 286,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 208
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-409",
            "name": "Ringna No Olo (Kathiyawadi Baingan Bharta)",
            "description": "Smoked mashed eggplant cooked with garlic, spring onions, and green chilies.",
            "price": 200,
            "originalPrice": 240,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 303,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 160
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-16-cat-farsan",
        "name": "🥟 Authentic Gujarati Farsan & Breads",
        "items": [
          {
            "id": "item-410",
            "name": "Khaman Dhokla with Green Chutney (4 pcs)",
            "description": "Spongy steamed gram flour cakes tempered with mustard seeds and green chilies.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-411",
            "name": "Khandvi Rolls with Coconut Tempering (6 pcs)",
            "description": "Silky smooth rolled gram flour rolls tempered with sesame and mustard seeds.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-412",
            "name": "Methi Na Thepla (4 pcs with Pickle)",
            "description": "Whole wheat flatbread kneaded with fresh fenugreek leaves, spices, and sesame.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-413",
            "name": "Puri Basket (5 pcs)",
            "description": "Hot puffed whole wheat pooris fried golden.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 371,
            "customizable": false
          },
          {
            "id": "item-414",
            "name": "Bajra No Rotlo with Desi Butter (2 pcs)",
            "description": "Rustic pearl millet flatbread served with fresh white butter and jaggery.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 388,
            "customizable": false
          },
          {
            "id": "item-415",
            "name": "Lilva Kachori (4 pcs)",
            "description": "Crisp flaky pastry stuffed with fresh spiced green pigeon peas.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-416",
            "name": "Fafda with Papaya Sambharo & Fried Chilies",
            "description": "Crispy chickpea flour strips served with spicy raw papaya salad.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 422,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-16-cat-rice-sweets",
        "name": "🍯 Khichdi, Sweets & Chaas",
        "items": [
          {
            "id": "item-417",
            "name": "Vaghareli Khichdi with Ghee",
            "description": "Comforting rice and yellow moong dal tempered with garlic, cloves, and ghee.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 439,
            "customizable": false
          },
          {
            "id": "item-418",
            "name": "Royal Alphonso Aamras Cup (Seasonal)",
            "description": "Pure thick sweet pulp of hand-squeezed Ratnagiri Alphonso mangoes.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-419",
            "name": "Kesar Elaichi Shrikhand (200g)",
            "description": "Thick strained sweet yogurt infused with saffron strands and green cardamom.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-420",
            "name": "Jalebi with Rabdi Combo",
            "description": "Crisp saffron jalebis served with chilled thickened milk rabdi.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-421",
            "name": "Mohanthal Sweet Cuts (150g)",
            "description": "Traditional roasted gram flour fudge with ghee, mawa, and nuts.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-422",
            "name": "Kathiyawadi Masala Chaas (Spiced Buttermilk)",
            "description": "Chilled churned buttermilk with roasted cumin, mint, and rock salt.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 524,
            "customizable": false
          },
          {
            "id": "item-423",
            "name": "Sweet Gulab Jamun (2 pcs)",
            "description": "Spongy khoya balls in sugar syrup.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 541,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-17",
    "name": "Chote Nawab Awadhi Kebab House",
    "slug": "chote-nawab-awadhi-kebab",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 2900,
    "deliveryTime": "25-35 min",
    "distance": "2.9 km",
    "priceTier": "₹₹",
    "costForTwo": 520,
    "isPureVeg": false,
    "cuisines": [
      "North Indian",
      "Biryani & Pulao",
      "Rolls & Burgers"
    ],
    "tag": "Authentic Lucknowi Heritage",
    "isOpen": true,
    "address": "Hazratganj, Near Mayfair Cinema, Lucknow, Uttar Pradesh - 226001",
    "description": "Masters of ancient Awadhi dum cooking. Renowned for royal Kakori kebabs that melt in your mouth, slow-cooked Mutton Nihari, and scented Lucknowi Pulao.",
    "menuCategories": [
      {
        "id": "rest-17-cat-kebabs",
        "name": "🍢 Royal Awadhi Melt-in-Mouth Kebabs",
        "items": [
          {
            "id": "item-424",
            "name": "Original Kakori Mutton Kebab (4 pcs)",
            "description": "The softest kebab in the world, marinated in raw papaya, rose petals, and 24 secret spices.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-425",
            "name": "Shami Kebab Awadhi (4 pcs)",
            "description": "Minced lamb patties boiled with Bengal gram and pounded with whole garam masala.",
            "price": 320,
            "originalPrice": 370,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-426",
            "name": "Murgh Boti Kebab (6 pcs)",
            "description": "Boneless chicken cubes marinated in saffron, curd, and roasted garlic, char-grilled.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-427",
            "name": "Galouti Kebab with Ulte Tawe Ka Paratha (Combo)",
            "description": "Two melt-in-mouth mutton galouti kebabs served over sweet saffron flatbread.",
            "price": 340,
            "originalPrice": 395,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 609,
            "customizable": false
          },
          {
            "id": "item-428",
            "name": "Murgh Tangdi Kebab (3 pcs)",
            "description": "Chicken drumsticks stuffed with spiced minced meat and grilled over glowing charcoal.",
            "price": 330,
            "originalPrice": 380,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-429",
            "name": "Paneer Tikka Dastarkhwan (6 pcs)",
            "description": "Cottage cheese marinated in yellow chili, mustard oil, and hung curd.",
            "price": 260,
            "originalPrice": 300,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-430",
            "name": "Dahi Kebab Lucknowi (4 pcs)",
            "description": "Hung curd patties with roasted coriander and green chilies, shallow fried.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 660,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-17-cat-gravies-pulao",
        "name": "🥘 Nawabi Curries & Dum Pulao",
        "items": [
          {
            "id": "item-431",
            "name": "Awadhi Gosht Korma",
            "description": "Tender lamb cuts simmered in velvety browned onion and yogurt gravy.",
            "price": 410,
            "originalPrice": 480,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 677,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 328
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-432",
            "name": "Nihari Gosht Special",
            "description": "Overnight simmered mutton stew infused with ginger, mace, and long pepper.",
            "price": 430,
            "originalPrice": 500,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 694,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 344
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-433",
            "name": "Murgh Korma Shahjahani",
            "description": "Chicken cooked in rich almond-cashew paste and saffron milk.",
            "price": 350,
            "originalPrice": 410,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 711,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 280
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-434",
            "name": "Paneer Korma Nawab",
            "description": "Cottage cheese cubes in a fragrant, creamy mild Lucknowi gravy.",
            "price": 270,
            "originalPrice": 315,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 728,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 216
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-435",
            "name": "Awadhi Chicken Dum Biryani",
            "description": "Long-grain basmati cooked with chicken in sealed handi with ittar and saffron.",
            "price": 330,
            "originalPrice": 385,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 745,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 248
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-436",
            "name": "Mutton Yakhni Pulao",
            "description": "Aromatic rice cooked in clarified mutton bone broth with whole spices.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 762,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 293
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-437",
            "name": "Dal Sultani",
            "description": "Arhar dal tempered with milk, cream, and smoked with clove on glowing charcoal.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 779,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 176
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-17-cat-breads-desserts",
        "name": "🫓 Breads & Royal Desserts",
        "items": [
          {
            "id": "item-438",
            "name": "Ulte Tawe Ka Paratha (2 pcs)",
            "description": "Soft, flaky sweetish flatbread cooked over an inverted curved griddle with ghee.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 796,
            "customizable": false
          },
          {
            "id": "item-439",
            "name": "Sheermal Lucknowi (Saffron Bread)",
            "description": "Traditional milk and saffron baked flatbread.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-440",
            "name": "Mughlai Roomali Roti (2 pcs)",
            "description": "Thin handkerchief flatbread.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-441",
            "name": "Garlic Naan (2 pcs)",
            "description": "Tandoor leavened flatbread brushed with garlic butter.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-442",
            "name": "Shahi Tukda with Rabdi",
            "description": "Ghee-fried bread soaked in cardamom syrup and blanketed in thick creamy rabdi.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-443",
            "name": "Matka Kheer Lucknowi",
            "description": "Slow-reduced rice pudding with saffron, cardamom, and silver vark.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 881,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-18",
    "name": "Gokul Sweets & Ganguram Kolkata Confectionery",
    "slug": "gokul-sweets-ganguram",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 3850,
    "deliveryTime": "20-30 min",
    "distance": "1.7 km",
    "priceTier": "₹₹",
    "costForTwo": 300,
    "isPureVeg": true,
    "cuisines": [
      "Mithai & Desserts",
      "Chaat & Street Food"
    ],
    "tag": "1892 Bengal Sweet Heritage",
    "isOpen": true,
    "address": "Bowbazar, Near Central Metro, Kolkata, West Bengal - 700012",
    "description": "130+ years of Bengali artisanal sweet-making excellence. World-famous sponge Rosogollas, Nolen Gur Sandesh, Mishti Doi, and savory Club Kachoris.",
    "menuCategories": [
      {
        "id": "rest-18-cat-chhena-sweets",
        "name": "🍯 Iconic Bengali Chhena Sweets",
        "items": [
          {
            "id": "item-444",
            "name": "Original Kolkata Sponge Rosogolla (4 pcs)",
            "description": "Classic melt-in-mouth cottage cheese balls cooked in light sugar syrup.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 898,
            "customizable": false
          },
          {
            "id": "item-445",
            "name": "Baked Rosogolla Delight (4 pcs)",
            "description": "Rosogollas layered with thick rabri and caramelised in clay oven.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 915,
            "customizable": false
          },
          {
            "id": "item-446",
            "name": "Nolen Gur Sondesh (Date Palm Jaggery 4 pcs)",
            "description": "Handcrafted winter sandesh flavored with pure aromatic seasonal date palm jaggery.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 932,
            "customizable": false
          },
          {
            "id": "item-447",
            "name": "Kesar Rasmalai Royal (2 pcs)",
            "description": "Spongy chhena discs immersed in saffron and pistachio infused thickened milk.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 949,
            "customizable": false
          },
          {
            "id": "item-448",
            "name": "Kacha Golla Soft Sandesh (4 pcs)",
            "description": "Fresh soft cottage cheese sweet delicately perfumed with green cardamom.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 966,
            "customizable": false
          },
          {
            "id": "item-449",
            "name": "Malai Cham Cham (2 pcs)",
            "description": "Cottage cheese rolls stuffed with sweet mawa and coated with coconut flakes.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 983,
            "customizable": false
          },
          {
            "id": "item-450",
            "name": "Chocolate Sandesh Fusion (4 pcs)",
            "description": "Decadent fusion of Bengali chhena and rich dark chocolate.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 150,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-18-cat-mishti-doi",
        "name": "🍨 Mishti Doi & Festive Delights",
        "items": [
          {
            "id": "item-451",
            "name": "Classic Kolkata Mishti Doi (Earthen Handi 400g)",
            "description": "Traditional caramelized sweet pink yogurt set in natural porous clay pot.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-452",
            "name": "Nolen Gur Mishti Doi (Handi 400g)",
            "description": "Set curd prepared with wild date palm jaggery with deep smoky sweet flavor.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-453",
            "name": "Rajbhog Saffron Giant Rosogolla (2 pcs)",
            "description": "Large saffron-infused rosogollas stuffed with almond and pistachio bits.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-454",
            "name": "Kaju Barfi (250g Box)",
            "description": "Diamond cashew fudge topped with pure silver vark.",
            "price": 270,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-455",
            "name": "Motichoor Ladoo in Pure Desi Ghee (250g)",
            "description": "Tiny pearls of gram flour fried in ghee and soaked in cardamom syrup.",
            "price": 170,
            "originalPrice": 205,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 235,
            "customizable": false
          },
          {
            "id": "item-456",
            "name": "Chhena Poda (Odia Baked Cheese Cake 250g)",
            "description": "Slow-caramelized baked cheese dessert with cardamom and roasted cashews.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 252,
            "customizable": false
          },
          {
            "id": "item-457",
            "name": "Kesar Peda Mathura Style (250g)",
            "description": "Rich condensed milk pedas flavored with saffron and cardamom.",
            "price": 180,
            "originalPrice": 215,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 269,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-18-cat-bengali-snacks",
        "name": "🥟 Savory Kachoris & Street Bites",
        "items": [
          {
            "id": "item-458",
            "name": "Kolkata Club Kachori with Hing Aloo Sabzi (4 pcs)",
            "description": "Crisp mini urad dal puris served with spicy asafoetida potato curry.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-459",
            "name": "Radhaballabhi with Cholar Dal (2 pcs)",
            "description": "Soft puris stuffed with spiced lentil paste, served with sweet-savory Bengal gram curry.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-460",
            "name": "Singara (Kolkata Samosa with Cauliflower & Peanuts 2 pcs)",
            "description": "Flaky pastry filled with spiced potatoes, cauliflower florets, and roasted peanuts.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-461",
            "name": "Dal Kachori with Sweet Tamarind Chutney (2 pcs)",
            "description": "Crusty puffed pastries stuffed with spiced moong dal.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-462",
            "name": "Nimki Namkeen Crisps (250g Pack)",
            "description": "Crisp savory diamond-shaped pastry spiced with nigella kalonji seeds.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-463",
            "name": "Masala Chai Glass",
            "description": "Spiced boiled tea with ginger and cardamom.",
            "price": 35,
            "originalPrice": 45,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 371,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-19",
    "name": "Junior Kuppanna Kongu Nadu Cuisine",
    "slug": "junior-kuppanna-kongu-nadu",
    "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3300,
    "deliveryTime": "25-35 min",
    "distance": "2.1 km",
    "priceTier": "₹₹",
    "costForTwo": 460,
    "isPureVeg": false,
    "cuisines": [
      "South Indian",
      "Biryani & Pulao"
    ],
    "tag": "Kongu Nadu Tiruppur Legend",
    "isOpen": true,
    "address": "Avinashi Road, Near Pushpa Theatre, Tiruppur, Tamil Nadu - 641602",
    "description": "Iconic Kongu Nadu non-veg culinary house since 1960. Celebrated for native shallot-rich Pallipalayam Chicken, Kongu Mutton Chukka, and Seeraga Samba Biryani.",
    "menuCategories": [
      {
        "id": "rest-19-cat-kongu-specialties",
        "name": "🍗 Authentic Kongu Nadu Specialties",
        "items": [
          {
            "id": "item-464",
            "name": "Original Pallipalayam Chicken Dry",
            "description": "Iconic dish cooked without oil or water using whole dried red chilies, shallots, and fresh coconut slivers.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 388,
            "customizable": false
          },
          {
            "id": "item-465",
            "name": "Kongu Mutton Chukka Varuval",
            "description": "Tender goat cubes pan-roasted in iron wok with pounded Kongu spices and curry leaves.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 405,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 304
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-466",
            "name": "Pichu Potta Kozhi (Shredded Chicken)",
            "description": "Tender shredded chicken tossed with black pepper, eggs, and caramelized onions.",
            "price": 270,
            "originalPrice": 315,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 422,
            "customizable": false
          },
          {
            "id": "item-467",
            "name": "Madurai Mutton Kola Urundai (4 pcs)",
            "description": "Crisp minced meat and roasted gram meatballs with whole spices.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 439,
            "customizable": false
          },
          {
            "id": "item-468",
            "name": "Kuppanna Special Chicken Fry",
            "description": "Bone-in chicken marinated with rustic village spices and deep fried crisp.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-469",
            "name": "Nethili Meen Varuval (Crispy Anchovies)",
            "description": "Crispy pan-fried anchovy fish coated in spicy red masala.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-470",
            "name": "Kongu Mutton Brain Pepper Fry",
            "description": "Fresh mutton brain pan-fried with caramelized onions, curry leaves, and black pepper.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 490,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-19-cat-biryani-meals",
        "name": "🍚 Seeraga Samba Biryani & Meals",
        "items": [
          {
            "id": "item-471",
            "name": "Kuppanna Special Mutton Biryani",
            "description": "Traditional Seeraga Samba rice cooked with tender mutton in authentic Kongu spices with brinjal salna.",
            "price": 390,
            "originalPrice": 450,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 507,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 293
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-472",
            "name": "Kongu Chicken Biryani",
            "description": "Small-grain aromatic samba rice cooked with chicken cuts and village spices.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 524,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 233
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-473",
            "name": "Non-Veg Executive Meals (Thali)",
            "description": "Full feast: Steamed rice, chicken gravy, mutton gravy, fish gravy, rasam, kootu, poriyal & curd.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-474",
            "name": "Kongu Nattu Kozhi Biryani (Country Chicken)",
            "description": "Free-range country chicken cooked with aromatic seeraga samba rice.",
            "price": 350,
            "originalPrice": 410,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 558,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 263
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-475",
            "name": "Egg Biryani Samba",
            "description": "Seeraga samba biryani rice served with 2 eggs and spicy salna.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 575,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 165
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-476",
            "name": "Plain Kuska Rice",
            "description": "Aromatic seeraga samba biryani rice cooked in rich bone broth.",
            "price": 175,
            "originalPrice": 210,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 592,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-19-cat-gravies-parottas",
        "name": "🥘 Village Gravies & Flaky Parottas",
        "items": [
          {
            "id": "item-477",
            "name": "Country Chicken Pepper Gravy (Naatu Kozhi)",
            "description": "Free-range desi chicken in spicy black pepper and shallot gravy.",
            "price": 340,
            "originalPrice": 395,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 609,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 272
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-478",
            "name": "Kongu Mutton Curry",
            "description": "Rich rustic mutton gravy cooked with freshly ground coriander and red chilies.",
            "price": 390,
            "originalPrice": 450,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 626,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 312
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-479",
            "name": "Meen Kuzhambu (Fish Curry)",
            "description": "Fresh river/sea fish cooked in tangy tamarind and shallot sauce.",
            "price": 320,
            "originalPrice": 370,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 643,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 256
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-480",
            "name": "Malabar Flaky Parotta (2 pcs)",
            "description": "Layered golden parotta griddled with butter.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-481",
            "name": "Egg Ceylon Parotta",
            "description": "Layered parotta stuffed with spiced scrambled eggs and minced onions.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-482",
            "name": "Chicken Kothu Parotta",
            "description": "Minced flaky parotta shredded on tawa with chicken and salna.",
            "price": 195,
            "originalPrice": 235,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-483",
            "name": "Elaneer Payasam (Tender Coconut Dessert)",
            "description": "Tender coconut pulp simmered in sweet milk with cardamom.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 711,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-20",
    "name": "Tunday Kababi 1905 Heritage",
    "slug": "tunday-kababi-heritage",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 4200,
    "deliveryTime": "25-35 min",
    "distance": "3.0 km",
    "priceTier": "₹₹",
    "costForTwo": 450,
    "isPureVeg": false,
    "cuisines": [
      "North Indian",
      "Biryani & Pulao",
      "Rolls & Burgers"
    ],
    "tag": "1905 Aminabad Legend",
    "isOpen": true,
    "address": "Aminabad Market, Near Naaz Cinema, Lucknow, Uttar Pradesh - 226018",
    "description": "120 years of Nawabi legacy. Founded in 1905 by Haji Murad Ali, creator of the world-famous melt-in-mouth Galouti Kebab seasoned with 160 secret medicinal herbs.",
    "menuCategories": [
      {
        "id": "rest-20-cat-legendary-kebabs",
        "name": "🍢 Original 1905 Tunday Kebabs",
        "items": [
          {
            "id": "item-484",
            "name": "Original Tunday Mutton Galouti Kebab (4 pcs)",
            "description": "Legendary melt-in-mouth kebab made with 160 secret spices, pan-fried on cast-iron tawa.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 728,
            "customizable": false
          },
          {
            "id": "item-485",
            "name": "Tunday Buff Galouti Kebab (4 pcs)",
            "description": "The original authentic 1905 preparation served with lime and mint onions.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 745,
            "customizable": false
          },
          {
            "id": "item-486",
            "name": "Murgh Seekh Kebab (4 pcs)",
            "description": "Tender spiced minced chicken skewers char-grilled in tandoor.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 762,
            "customizable": false
          },
          {
            "id": "item-487",
            "name": "Mutton Boti Kebab (6 pcs)",
            "description": "Tender boneless mutton cubes marinated in spiced curd and pan-roasted.",
            "price": 370,
            "originalPrice": 430,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 779,
            "customizable": false
          },
          {
            "id": "item-488",
            "name": "Chicken Shami Kebab (4 pcs)",
            "description": "Pan-seared spiced chicken patties with lentil and mint.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 796,
            "customizable": false
          },
          {
            "id": "item-489",
            "name": "Paneer Tikka Tunday Style (6 pcs)",
            "description": "Cottage cheese marinated in royal Lucknowi yellow chili paste.",
            "price": 250,
            "originalPrice": 290,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 813,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-20-cat-paratha-combos",
        "name": "🫓 Ulte Tawe Ke Parathe & Rolls",
        "items": [
          {
            "id": "item-490",
            "name": "Tunday Kebab with Mughlai Paratha (2 Kebabs + 1 Paratha)",
            "description": "Classic combination of 2 melting Galouti kebabs served over sweet saffron-scented flaky paratha.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-491",
            "name": "Double Mutton Galouti Roll",
            "description": "Two melting Galouti kebabs rolled in warm saffron paratha with sliced onions and green chili.",
            "price": 240,
            "originalPrice": 280,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 847,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-492",
            "name": "Chicken Seekh Paratha Roll",
            "description": "Juicy grilled chicken seekh kebab wrapped in crisp flaky Mughlai bread.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 864,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-493",
            "name": "Ulte Tawe Ka Paratha (Single)",
            "description": "Golden layered flatbread cooked over inverted dome griddle with pure ghee.",
            "price": 50,
            "originalPrice": 65,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 881,
            "customizable": false
          },
          {
            "id": "item-494",
            "name": "Sheermal Roti (Sweet Saffron Bread)",
            "description": "Rich milk-kneaded bread infused with saffron and ghee.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 898,
            "customizable": false
          },
          {
            "id": "item-495",
            "name": "Roomali Roti Hand Stretched",
            "description": "Thin soft handkerchief flatbread.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 915,
            "customizable": false
          },
          {
            "id": "item-496",
            "name": "Paneer Galouti Roll Deluxe",
            "description": "Delicate spiced paneer kebab rolled with mint chutney.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 932,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-20-cat-biryani-gravies",
        "name": "🥘 Royal Curries, Dum Biryani & Kheer",
        "items": [
          {
            "id": "item-497",
            "name": "Lucknowi Mutton Dum Biryani",
            "description": "Long-grain aged basmati rice steam-cooked with tender mutton, saffron, and ittar.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 949,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 293
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-498",
            "name": "Lucknowi Chicken Biryani",
            "description": "Aromatic dum biryani with bone-in chicken and royal spices.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 966,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 233
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-499",
            "name": "Nihari Mutton Korma",
            "description": "Slow-cooked mutton stew infused with bone marrow and aromatic ginger.",
            "price": 420,
            "originalPrice": 490,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 983,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 336
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-500",
            "name": "Murgh Korma Lucknowi",
            "description": "Chicken simmered in silky brown onion, cashew, and melon seed gravy.",
            "price": 330,
            "originalPrice": 385,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 150,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 264
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-501",
            "name": "Dal Bukhara Slow Cooked",
            "description": "Black lentils simmered overnight with tomatoes and butter.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 167,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 184
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-502",
            "name": "Shahi Firni in Kasora (Earthen Bowl)",
            "description": "Ground basmati rice pudding infused with saffron, milk, and almonds.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-503",
            "name": "Shahi Tukda Royal",
            "description": "Crisp ghee-fried bread with saffron sugar glaze and thick rabdi.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 201,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-21",
    "name": "Shiv Sagar Pure Veg & Juice World",
    "slug": "shiv-sagar-pure-veg",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3100,
    "deliveryTime": "20-30 min",
    "distance": "1.9 km",
    "priceTier": "₹₹",
    "costForTwo": 350,
    "isPureVeg": true,
    "cuisines": [
      "Chaat & Street Food",
      "South Indian",
      "Fast Food"
    ],
    "tag": "Mumbai Beachside Legend",
    "isOpen": true,
    "address": "Opposite Juhu Beach, Juhu Tara Road, Mumbai, Maharashtra - 400049",
    "description": "Beloved multi-cuisine vegetarian institution. Famous for butter Pav Bhaji, triple-decker Bombay toast sandwiches, fresh fruit juices, and Chinese bhel.",
    "menuCategories": [
      {
        "id": "rest-21-cat-mumbai-delights",
        "name": "🧈 Famous Pav Bhaji & Sandwiches",
        "items": [
          {
            "id": "item-504",
            "name": "Shiv Sagar Special Pav Bhaji",
            "description": "Richly spiced vegetable bhaji simmered in Amul butter, served with 2 buttered pavs.",
            "price": 195,
            "originalPrice": 235,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-505",
            "name": "Cheese Burst Pav Bhaji",
            "description": "Bhaji covered in molten melted cheese and fresh coriander.",
            "price": 225,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 235,
            "customizable": false
          },
          {
            "id": "item-506",
            "name": "Paneer Pav Bhaji Deluxe",
            "description": "Fresh paneer cubes griddled with butter into spicy pav bhaji.",
            "price": 215,
            "originalPrice": 255,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 252,
            "customizable": false
          },
          {
            "id": "item-507",
            "name": "Bombay Grilled Club Sandwich",
            "description": "Triple-decker sandwich layered with cucumber, potatoes, beets, mint chutney, and cheese.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-508",
            "name": "Cheese Chilly Toast Sandwich",
            "description": "Crunchy grilled bread with green chilies, bell peppers, and melted cheese.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-509",
            "name": "Extra Butter Ladi Pav (2 pcs)",
            "description": "Fresh soft pavs griddled in butter.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-510",
            "name": "Masala Pav with Sautéed Onions (2 pcs)",
            "description": "Pavs stuffed with spicy tomato-garlic masala and butter.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 320,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-21-cat-chaat-chinese",
        "name": "🥟 Street Chaat & Chinese Bhel",
        "items": [
          {
            "id": "item-511",
            "name": "Crispy Chinese Bhel Platter",
            "description": "Fried crunchy noodles tossed with cabbage, capsicum, sweet-and-sour and spicy chili sauce.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-512",
            "name": "Sev Puri Special (6 pcs)",
            "description": "Flat puris loaded with potatoes, onions, trio of chutneys, and crisp sev.",
            "price": 90,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-513",
            "name": "Dahi Batata Puri (6 pcs)",
            "description": "Puffed puris filled with potato, sweetened thick curd, and pomegranate.",
            "price": 105,
            "originalPrice": 130,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 371,
            "customizable": false
          },
          {
            "id": "item-514",
            "name": "Bhel Puri Chowpatty Style",
            "description": "Puffed rice, sev, onions, tomatoes, and tangy tamarind and raw mango chutneys.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 388,
            "customizable": false
          },
          {
            "id": "item-515",
            "name": "Veg Hakka Noodles Wok Fried",
            "description": "Noodles tossed with crunchy vegetables and soy sauce.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-516",
            "name": "Veg Manchurian Dry (8 pcs)",
            "description": "Fried veggie balls in dark garlic-ginger glaze.",
            "price": 195,
            "originalPrice": 235,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 422,
            "customizable": false
          },
          {
            "id": "item-517",
            "name": "Paneer Chilli Indo-Chinese",
            "description": "Wok-tossed paneer with capsicum and green chilies.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 439,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-21-cat-fresh-juices-desserts",
        "name": "🥤 Fresh Juices, Falooda & Desserts",
        "items": [
          {
            "id": "item-518",
            "name": "Royal Kesar Falooda Glass",
            "description": "Rose milk with sabja seeds, falooda vermicelli, kulfi scoop, and dry fruits.",
            "price": 150,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-519",
            "name": "Fresh Mara Mari Juice (Pineapple + Mosambi)",
            "description": "Freshly pressed juice blend with black salt.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-520",
            "name": "Pure Ganga Jamuna Juice (Orange + Mosambi)",
            "description": "Fresh citrus juice packed with vitamin C.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-521",
            "name": "Anar (Pomegranate) Fresh Juice",
            "description": "100% pure pomegranate juice without added sugar.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-522",
            "name": "Sizzling Brownie with Ice Cream",
            "description": "Warm chocolate brownie topped with vanilla scoop and hot chocolate fudge.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 524,
            "customizable": false
          },
          {
            "id": "item-523",
            "name": "Mysore Masala Dosa",
            "description": "South Indian crisp dosa with spicy red chutney and potato filling.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 541,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "rest-22",
    "name": "Peshawri & Bukhara Tandoor & Grill",
    "slug": "peshawri-bukhara-tandoor",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 4100,
    "deliveryTime": "35-45 min",
    "distance": "4.2 km",
    "priceTier": "₹₹₹",
    "costForTwo": 950,
    "isPureVeg": false,
    "cuisines": [
      "North Indian",
      "Biryani & Pulao"
    ],
    "tag": "Michelin-Caliber Charcoal Legacy",
    "isOpen": true,
    "address": "ITC Maurya, Sardar Patel Marg, Diplomatic Enclave, New Delhi - 110021",
    "description": "Internationally acclaimed North-West Frontier culinary benchmark. Relish Dal Bukhara simmered for 24 hours, melt-in-mouth Sikandari Raan, and giant Naan Bukhara.",
    "menuCategories": [
      {
        "id": "rest-22-cat-frontier-tandoor",
        "name": "🍢 North-West Frontier Tandoor & Grills",
        "items": [
          {
            "id": "item-524",
            "name": "Sikandari Raan Whole (Slow-Roasted Leg of Baby Lamb)",
            "description": "Whole leg of young baby lamb marinated in malt vinegar, cinnamon, and cumin, slow-braised and roasted.",
            "price": 890,
            "originalPrice": 1050,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-525",
            "name": "Murgh Malai Kebab Peshawari (6 pcs)",
            "description": "Tender chicken boneless marinated in cream cheese, malt vinegar, green coriander, and cardamom.",
            "price": 380,
            "originalPrice": 450,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-526",
            "name": "Bukhara Murgh Tandoori (Whole)",
            "description": "Whole chicken marinated in ginger-garlic paste, Kashmiri chili, and curd, skewered in clay oven.",
            "price": 490,
            "originalPrice": 580,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-527",
            "name": "Barrah Kebab (Mutton Chops 4 pcs)",
            "description": "Lamb chops marinated in secret Frontier spices, roasted on charcoal embers.",
            "price": 580,
            "originalPrice": 680,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 609,
            "customizable": false
          },
          {
            "id": "item-528",
            "name": "Tandoori Jhinga (Jumbo Prawns 4 pcs)",
            "description": "Jumbo sea prawns marinated in ajwain, turmeric, and lemon juice, flash-grilled.",
            "price": 650,
            "originalPrice": 760,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-529",
            "name": "Paneer Tikka Peshawri (6 pcs)",
            "description": "Fresh cottage cheese squares stuffed with mint chutney and roasted with bell peppers.",
            "price": 320,
            "originalPrice": 380,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-530",
            "name": "Tandoori Aloo Stuffed",
            "description": "Scooped potatoes filled with paneer, raisins, and cashew nuts, roasted crisp.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 660,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-22-cat-legendary-dal-breads",
        "name": "🥘 Dal Bukhara & Giant Naans",
        "items": [
          {
            "id": "item-531",
            "name": "Original Dal Bukhara (500g Tub)",
            "description": "World-famous black lentils slow-simmered for 24 hours with tomato puree, garlic, and pure butter.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 677,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 288
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-532",
            "name": "Giant Naan Bukhara (Serves 3-4)",
            "description": "Massive hand-stretched bread baked on the walls of clay tandoor, brushed with butter.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-533",
            "name": "Garlic Pudina Naan",
            "description": "Layered tandoori flatbread with minced garlic and dried mint flakes.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 711,
            "customizable": false
          },
          {
            "id": "item-534",
            "name": "Tandoori Roti with Desi Makhan (2 pcs)",
            "description": "Whole-wheat unleavened bread baked in clay oven with white butter.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 728,
            "customizable": false
          },
          {
            "id": "item-535",
            "name": "Roomali Roti Hand Stretched (2 pcs)",
            "description": "Paper-thin delicate bread.",
            "price": 90,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 745,
            "customizable": false
          },
          {
            "id": "item-536",
            "name": "Gosht Dum Biryani Bukhara",
            "description": "Fragrant basmati rice cooked with lamb cuts in a sealed handi with saffron broth.",
            "price": 480,
            "originalPrice": 560,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 762,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 360
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-537",
            "name": "Murgh Yakhni Pulao",
            "description": "Chicken and basmati rice slow-cooked in aromatic chicken stock.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 779,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 293
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-22-cat-curries-desserts",
        "name": "👑 Royal Gravies & Sweets",
        "items": [
          {
            "id": "item-538",
            "name": "Murgh Makhani Bukhara",
            "description": "Boneless tandoori chicken simmered in creamy satin tomato and cashew sauce.",
            "price": 420,
            "originalPrice": 490,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 796,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 336
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-539",
            "name": "Paneer Makhani",
            "description": "Soft cottage cheese cubes in rich butter-tomato gravy with kasuri methi.",
            "price": 340,
            "originalPrice": 395,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 813,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 272
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-540",
            "name": "Subz Miloni (Seasonal Vegetables)",
            "description": "Assorted farm vegetables in spinach and cashew nut gravy.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 830,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 224
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-541",
            "name": "Rasmalai Bukhara (2 pcs)",
            "description": "Delicate cottage cheese patties in saffron-cardamom thickened milk.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-542",
            "name": "Gulab Jamun with Saffron Dip (2 pcs)",
            "description": "Warm khoya dumplings filled with pistachios and soaked in rose syrup.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-543",
            "name": "Kesar Pista Kulfi Falooda",
            "description": "Traditional pot-kulfi served with rose falooda and nuts.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 881,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-23",
    "name": "Sangeetha Vegetarian Restaurant",
    "slug": "sangeetha-veg-restaurant",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3600,
    "deliveryTime": "20-30 min",
    "distance": "1.6 km",
    "priceTier": "₹",
    "costForTwo": 260,
    "isPureVeg": true,
    "cuisines": [
      "South Indian",
      "North Indian",
      "Chai & Lassi"
    ],
    "tag": "Chennai Tiffin Legend",
    "isOpen": true,
    "address": "Gandhi Road, Sukrawarpet, Tiruppur, Tamil Nadu - 641604",
    "description": "Chennai's favorite pure veg dining destination. Renowned for ghee roast dosas, authentic sambar vadai, South Indian meals, and aromatic filter coffee.",
    "menuCategories": [
      {
        "id": "rest-23-cat-tiffin",
        "name": "🥞 Golden Dosas & Morning Tiffin",
        "items": [
          {
            "id": "item-544",
            "name": "Ghee Paper Roast Dosa",
            "description": "Ultra-crispy golden cone dosa roasted in pure desi ghee, served with 3 chutneys & sambar.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 898,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-545",
            "name": "Ghee Podi Masala Dosa",
            "description": "Crisp dosa smeared with red podi powder and stuffed with potato masala.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 915,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-546",
            "name": "Onion Rava Masala Dosa",
            "description": "Laced crispy semolina crepe packed with onions, green chilies, and potato.",
            "price": 155,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 932,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-547",
            "name": "Steamed Idli & Vada Combo (2 Idlis + 1 Vada)",
            "description": "Two pillowy soft idlis and one crispy medu vada with hot drumstick sambar.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 949,
            "customizable": false
          },
          {
            "id": "item-548",
            "name": "Sambar Mini Idlis (14 pcs in bowl)",
            "description": "Mini button idlis submerged in hot aromatic shallot sambar with ghee.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 966,
            "customizable": false
          },
          {
            "id": "item-549",
            "name": "Poori with Potato Masala (3 pcs)",
            "description": "Fluffy puffed whole wheat pooris with mild spiced potato bhaji.",
            "price": 100,
            "originalPrice": 125,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 983,
            "customizable": false
          },
          {
            "id": "item-550",
            "name": "Ven Pongal with Ghee & Cashews",
            "description": "Warm rice and moong dal porridge tempered with black pepper and cashews.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 150,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-23-cat-meals-thali",
        "name": "🍱 South Indian Meals & Variety Rice",
        "items": [
          {
            "id": "item-551",
            "name": "Sangeetha Special South Indian Thali",
            "description": "Steamed Ponni rice, drumstick sambar, pepper rasam, vatral kuzhambu, kootu, poriyal, appalam, curd & sweet.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-552",
            "name": "Bisibelebath with Boondi",
            "description": "Karnataka special spicy lentil and rice mash with vegetables and ghee.",
            "price": 115,
            "originalPrice": 140,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-553",
            "name": "Curd Rice with Pomegranate & Tadka",
            "description": "Creamy tempered yogurt rice with mustard seeds and curry leaves.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-554",
            "name": "Tomato Rice (Thakkali Sadam)",
            "description": "Tangy spiced tomato rice with peanuts and coriander.",
            "price": 90,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-555",
            "name": "Chapati with Mixed Veg Kurma (2 pcs)",
            "description": "Soft whole-wheat chapatis served with coconut vegetable kurma.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 235,
            "customizable": false
          },
          {
            "id": "item-556",
            "name": "Mushroom Biryani South Style",
            "description": "Aromatic rice cooked with fresh button mushrooms and mint.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 252,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-23-cat-sweets-beverages",
        "name": "☕ Filter Kaapi & Temple Sweets",
        "items": [
          {
            "id": "item-557",
            "name": "Madras Degree Filter Coffee",
            "description": "Freshly brewed chicory coffee with frothy boiled milk in brass tumbler.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-558",
            "name": "Badam Halwa Pure Ghee (100g)",
            "description": "Rich royal dessert made with crushed almonds, milk, and saffron.",
            "price": 140,
            "originalPrice": 170,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 286,
            "customizable": false
          },
          {
            "id": "item-559",
            "name": "Carrot Halwa Warm",
            "description": "Winter red carrots cooked in milk, sugar, and khoya.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-560",
            "name": "Pineapple Kesari Bath",
            "description": "Semolina pudding with pineapple chunks and roasted cashews.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-561",
            "name": "Masala Tea Cup",
            "description": "Hot brewed tea with crushed ginger and cardamom.",
            "price": 35,
            "originalPrice": 45,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-562",
            "name": "Salted Masala Buttermilk (Neer Mor)",
            "description": "Refreshing spiced buttermilk with ginger and curry leaves.",
            "price": 35,
            "originalPrice": 45,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-563",
            "name": "Hot Gulab Jamun (2 pcs)",
            "description": "Khoya dumplings soaked in rose syrup.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 371,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-24",
    "name": "Goli Vada Pav & Tibb's Frankie Express",
    "slug": "goli-vada-pav-tibbs-frankie",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.7,
    "reviewCount": 2750,
    "deliveryTime": "15-25 min",
    "distance": "1.3 km",
    "priceTier": "₹",
    "costForTwo": 180,
    "isPureVeg": false,
    "cuisines": [
      "Chaat & Street Food",
      "Rolls & Burgers",
      "Fast Food"
    ],
    "tag": "Quick Grab & Go Indian Street",
    "isOpen": true,
    "address": "FC Road, Deccan Gymkhana, Pune, Maharashtra - 411004",
    "description": "The quick-bite street champions. Hot crunchy golden Vada Pavs, Mumbai cheese frankies, crispy aloo rolls, and spicy masala fries.",
    "menuCategories": [
      {
        "id": "rest-24-cat-vada-pav",
        "name": "🍔 Famous Mumbai Vada Pavs",
        "items": [
          {
            "id": "item-564",
            "name": "Classic Mumbai Vada Pav (2 pcs)",
            "description": "Spicy potato fritters inside fresh pav buns with garlic podi, mint chutney, and green chilies.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 388,
            "customizable": false
          },
          {
            "id": "item-565",
            "name": "Cheese Slice Vada Pav (2 pcs)",
            "description": "Vada pav layered with melted processed cheese slice and sweet chutney.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-566",
            "name": "Schezwan Spicy Vada Pav (2 pcs)",
            "description": "Crisp batata vada smothered in spicy garlic Schezwan sauce.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 422,
            "customizable": false
          },
          {
            "id": "item-567",
            "name": "Paneer Crispy Vada Pav",
            "description": "Coated fresh paneer patty fried golden in bun with mayo and podi.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 439,
            "customizable": false
          },
          {
            "id": "item-568",
            "name": "Crispy Corn Vada Pav",
            "description": "Sweet corn and potato cutlet with melted butter in fresh bun.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-569",
            "name": "Makka Palak Vada Pav",
            "description": "Spinach and corn patty spiced with chaat masala.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-570",
            "name": "Misal Pav Pune Special",
            "description": "Spicy sprouted bean curry topped with farsan, onions, and served with 2 pavs.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 490,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-24-cat-frankies",
        "name": "🌯 Authentic Tibb's Frankies",
        "items": [
          {
            "id": "item-571",
            "name": "Original Chicken Frankie Roll",
            "description": "Spiced juicy chicken pieces tossed in frankie masala with vinegar onions in flatbread.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 507,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-572",
            "name": "Egg Chicken Frankie Roll",
            "description": "Egg-coated flatbread wrapped around spicy grilled chicken.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 524,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-573",
            "name": "Mutton Seekh Frankie Roll",
            "description": "Char-grilled mutton seekh wrapped with pickled onions and spice mix.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 541,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-574",
            "name": "Veggie Cheese Frankie",
            "description": "Spiced potato roll with shredded cheese, onions, and special frankie vinegar.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 558,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-575",
            "name": "Paneer Tikka Frankie",
            "description": "Char-grilled paneer cubes with tangy masala sauce in soft wrap.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 575,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-576",
            "name": "Soya Chaap Masala Frankie",
            "description": "Protein-packed soya chunks tossed in onion-tomato masala.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 592,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          },
          {
            "id": "item-577",
            "name": "Double Egg Mayo Frankie",
            "description": "Two eggs griddled on roti with spicy mayo dressing and onions.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 609,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roll",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Roll (Double Filling)",
                  "priceDiff": 50
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Cheese",
                  "price": 30
                },
                {
                  "name": "Add Extra Fried Egg",
                  "price": 20
                },
                {
                  "name": "Add Extra Mint Dip",
                  "price": 20
                }
              ],
              "spiceLevels": [
                "Mild Sauce",
                "Medium Spicy",
                "Extra Green Chili"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-24-cat-sides-beverages",
        "name": "🍟 Sides, Shakes & Coolers",
        "items": [
          {
            "id": "item-578",
            "name": "Peri Peri Masala French Fries",
            "description": "Crispy potato fries dusted with spicy peri peri seasoning.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-579",
            "name": "Cheese Loaded French Fries",
            "description": "French fries smothered with warm liquid cheddar cheese sauce.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-580",
            "name": "Crispy Sabudana Vada (2 pcs)",
            "description": "Tapioca pearl and potato cutlets with roasted peanuts and green chili.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-581",
            "name": "Mango Mastani Thick Shake",
            "description": "Rich mango shake topped with ice cream and chopped nuts.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-582",
            "name": "Chilled Cold Coffee with Ice Cream",
            "description": "Creamy blended coffee topped with vanilla scoop.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-583",
            "name": "Lemon Mint Mojito Cooler",
            "description": "Crushed mint, fresh lime, sugar, and chilled soda.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 711,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-25",
    "name": "The Fisherman's Wharf & Coastal Karavali",
    "slug": "fishermans-wharf-karavali",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3100,
    "deliveryTime": "30-40 min",
    "distance": "3.6 km",
    "priceTier": "₹₹₹",
    "costForTwo": 700,
    "isPureVeg": false,
    "cuisines": [
      "South Indian",
      "Biryani & Pulao"
    ],
    "tag": "Coastal Seafood Paradise",
    "isOpen": true,
    "address": "Sarjapur Road, Ambalipura, Bengaluru, Karnataka - 560102",
    "description": "Celebrate the treasures of the Arabian sea. Renowned Mangalorean Chicken Ghee Roast, Goan Prawn Curry, Kori Rotti, and feather-light Neer Dosas.",
    "menuCategories": [
      {
        "id": "rest-25-cat-coastal-seafood",
        "name": "🦐 Coastal Curries & Ghee Roast",
        "items": [
          {
            "id": "item-584",
            "name": "Mangalorean Chicken Ghee Roast",
            "description": "Tender chicken tossed in fiery Byadgi chili paste, roasted spices, and pure desi ghee.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 728,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 288
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-585",
            "name": "Prawn Ghee Roast Kundapur Style",
            "description": "Succulent sea prawns coated in aromatic red chili and coriander ghee paste.",
            "price": 420,
            "originalPrice": 490,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 745,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 336
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-586",
            "name": "Goan Prawn Curry with Coconut",
            "description": "Fresh prawns simmered in creamy coconut milk with tamarind and Goan spices.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 762,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 312
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-587",
            "name": "Mangalorean Fish Curry (Anjal / Kingfish)",
            "description": "Seer fish simmered in tangy red chili and kokum-infused coastal sauce.",
            "price": 440,
            "originalPrice": 510,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 779,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 352
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-588",
            "name": "Kori Gassi (Mangalorean Chicken Curry)",
            "description": "Traditional Bunt style chicken curry cooked with roasted coconut milk and spices.",
            "price": 340,
            "originalPrice": 395,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 796,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 272
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-589",
            "name": "Crab Sukka Coastal Style",
            "description": "Fresh whole crab cooked with roasted grated coconut and spices.",
            "price": 450,
            "originalPrice": 520,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 813,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 360
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-25-cat-neer-dosa-rotti",
        "name": "🥞 Neer Dosa, Kori Rotti & Rice",
        "items": [
          {
            "id": "item-590",
            "name": "Feather-Light Neer Dosa (4 pcs)",
            "description": "Paper-thin delicate rice crepes that melt on the tongue, served with coconut chutney.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-591",
            "name": "Kori Rotti Combo",
            "description": "Crispy sun-dried rice wafers served with hot spicy Mangalorean chicken gravy (Kori Gassi).",
            "price": 320,
            "originalPrice": 380,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-592",
            "name": "Appam with Coconut Stew (2 pcs)",
            "description": "Fermented rice pancakes with soft spongy center and crispy lace edges with vegetable stew.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-593",
            "name": "Mangalorean Prawn Biryani",
            "description": "Short-grain rice cooked with spiced coastal sea prawns and fried onions.",
            "price": 410,
            "originalPrice": 480,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 881,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Portion (Serves 1)",
                  "priceDiff": 0
                },
                {
                  "name": "Jumbo Handi Pot (Serves 2-3)",
                  "priceDiff": 308
                }
              ],
              "addOns": [
                {
                  "name": "Extra Boiled Egg (2 pcs)",
                  "price": 30
                },
                {
                  "name": "Burani Garlic Raita Cup",
                  "price": 40
                },
                {
                  "name": "Double Salan Gravy Bowl",
                  "price": 35
                }
              ],
              "spiceLevels": [
                "Mild Nawabi",
                "Medium Spicy",
                "Fiery Andhra Guntur"
              ]
            }
          },
          {
            "id": "item-594",
            "name": "Malabar Parotta (2 pcs)",
            "description": "Multi-layered flaky bread griddled on tawa.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 898,
            "customizable": false
          },
          {
            "id": "item-595",
            "name": "Steamed Boiled Brown Rice (Matta)",
            "description": "Nutritious Kerala/Coastal red rice.",
            "price": 80,
            "originalPrice": 100,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 915,
            "customizable": false
          },
          {
            "id": "item-596",
            "name": "Ghee Rice Coastal Style",
            "description": "Fragrant jeera rice tempered with onions, cashews, and raisins in ghee.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 932,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-25-cat-starters-desserts",
        "name": "🍢 Coastal Starters & Drinks",
        "items": [
          {
            "id": "item-597",
            "name": "Surmai Rava Fry (Kingfish 1 big slice)",
            "description": "Kingfish steak marinated in red chili paste and crusted with semolina, pan-fried.",
            "price": 420,
            "originalPrice": 490,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 949,
            "customizable": false
          },
          {
            "id": "item-598",
            "name": "Kane Masala Rava Fry (Lady Fish)",
            "description": "Fresh lady fish fried crisp with semolina crust.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 966,
            "customizable": false
          },
          {
            "id": "item-599",
            "name": "Crispy Squid Pepper Fry",
            "description": "Calamari rings tossed with crushed pepper, garlic, and curry leaves.",
            "price": 350,
            "originalPrice": 410,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 983,
            "customizable": false
          },
          {
            "id": "item-600",
            "name": "Paneer Ghee Roast",
            "description": "Cottage cheese cubes tossed in Kundapur roasted red chili ghee paste.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 150,
            "customizable": false
          },
          {
            "id": "item-601",
            "name": "Sol Kadi Digestive Cooler",
            "description": "Refreshing pink drink made with coconut milk, kokum, garlic, and green chilies.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-602",
            "name": "Bebinca Traditional Goan Cake (2 slices)",
            "description": "Multi-layered Indo-Portuguese pudding made with coconut milk and egg yolks.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-603",
            "name": "Elaneer Payasam Bowl",
            "description": "Tender coconut sweet pudding.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 201,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-26",
    "name": "Kake Da Vada Punjabi Dhaba",
    "slug": "kake-da-vada-punjabi-dhaba",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3600,
    "deliveryTime": "25-35 min",
    "distance": "2.5 km",
    "priceTier": "₹₹",
    "costForTwo": 380,
    "isPureVeg": false,
    "cuisines": [
      "North Indian",
      "Rolls & Burgers",
      "Chai & Lassi"
    ],
    "tag": "1931 Connaught Place Icon",
    "isOpen": true,
    "address": "Outer Circle, Connaught Place, New Delhi - 110001",
    "description": "Serving legendary Dhaba curries since 1931. Home of thick handi chicken curry, brain curry, creamy Dal Makhani, Tandoori rotis, and giant Kulchas.",
    "menuCategories": [
      {
        "id": "rest-26-cat-dhaba-curries",
        "name": "🥘 Legendary Punjabi Dhaba Curries",
        "items": [
          {
            "id": "item-604",
            "name": "Kake Special Chicken Curry Handi",
            "description": "Country style robust chicken curry cooked with whole spices, tomatoes, and fried onions.",
            "price": 330,
            "originalPrice": 390,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 218,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 264
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-605",
            "name": "Dhaba Mutton Rogan Josh",
            "description": "Tender mutton pieces braised in rich Kashmiri chili and cardamom spiced gravy.",
            "price": 420,
            "originalPrice": 490,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 235,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 336
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-606",
            "name": "Butter Chicken Punjabi Style",
            "description": "Tandoori chicken in sweet-spicy rich butter tomato gravy.",
            "price": 350,
            "originalPrice": 410,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 252,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 280
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-607",
            "name": "Dal Makhani Handi Double Butter",
            "description": "Black lentils slow cooked overnight with white butter and cream.",
            "price": 230,
            "originalPrice": 270,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 269,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 184
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-608",
            "name": "Pindi Chole Masala",
            "description": "Dark spicy chickpeas cooked with roasted spices and dried mango powder.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 286,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 152
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-609",
            "name": "Kadhai Paneer Dhaba Style",
            "description": "Cottage cheese cooked with thick bell pepper, tomato, and crushed coriander seeds.",
            "price": 270,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 303,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 216
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-610",
            "name": "Palak Paneer Punjabi",
            "description": "Fresh spinach gravy cooked with garlic and soft paneer cubes.",
            "price": 250,
            "originalPrice": 290,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 320,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 200
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-26-cat-dhaba-tandoor",
        "name": "🍢 Tandoor Grills & Kebabs",
        "items": [
          {
            "id": "item-611",
            "name": "Tandoori Chicken Half Bird",
            "description": "Whole chicken marinated in curd, mustard oil, and red chili, roasted over coals.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-612",
            "name": "Murgh Tikka (6 pcs)",
            "description": "Boneless chicken cubes grilled to perfection with smoky aroma.",
            "price": 290,
            "originalPrice": 340,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-613",
            "name": "Mutton Seekh Kebab (4 pcs)",
            "description": "Minced lamb skewers seasoned with herbs and roasted in tandoor.",
            "price": 360,
            "originalPrice": 420,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 371,
            "customizable": false
          },
          {
            "id": "item-614",
            "name": "Tandoori Paneer Tikka (6 pcs)",
            "description": "Marinated paneer chunks with bell peppers and onions.",
            "price": 250,
            "originalPrice": 295,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 388,
            "customizable": false
          },
          {
            "id": "item-615",
            "name": "Tandoori Soya Chaap",
            "description": "Spiced soya chaap pieces roasted with butter glaze.",
            "price": 220,
            "originalPrice": 260,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-616",
            "name": "Chicken Malai Tikka (6 pcs)",
            "description": "Creamy mild chicken kebabs marinated in cashew and cheese.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 422,
            "customizable": false
          },
          {
            "id": "item-617",
            "name": "Fish Tikka Amritsari (4 pcs)",
            "description": "River sole fish marinated with ajwain and grilled.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 439,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-26-cat-kulcha-lassi",
        "name": "🫓 Stuffed Kulchas, Rice & Lassi",
        "items": [
          {
            "id": "item-618",
            "name": "Amritsari Aloo Kulcha with Chana & Pickle",
            "description": "Crispy layered tandoori bread stuffed with spiced potatoes, served with chana.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-619",
            "name": "Paneer Stuffed Naan with Butter",
            "description": "Tandoor naan loaded with seasoned paneer filling.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-620",
            "name": "Garlic Butter Naan",
            "description": "Soft naan topped with minced garlic and butter.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-621",
            "name": "Butter Roti Tandoori (2 pcs)",
            "description": "Whole-wheat rotis brushed with desi butter.",
            "price": 50,
            "originalPrice": 65,
            "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 507,
            "customizable": false
          },
          {
            "id": "item-622",
            "name": "Jeera Rice with Fried Onions",
            "description": "Basmati rice tempered with royal cumin seeds.",
            "price": 150,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 524,
            "customizable": false
          },
          {
            "id": "item-623",
            "name": "Patiala Lassi Sweet (Tall Glass)",
            "description": "Creamy thick sweet churned yogurt drink with malai.",
            "price": 85,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-624",
            "name": "Gulab Jamun (2 pcs)",
            "description": "Spongy warm khoya dumplings in sugar syrup.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 558,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-27",
    "name": "Keventers & Lassi Shop Milkshakes",
    "slug": "keventers-lassi-shop",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3100,
    "deliveryTime": "15-25 min",
    "distance": "1.5 km",
    "priceTier": "₹₹",
    "costForTwo": 240,
    "isPureVeg": true,
    "cuisines": [
      "Chai & Lassi",
      "Mithai & Desserts",
      "Fast Food"
    ],
    "tag": "1925 Original Milkshake Icon",
    "isOpen": true,
    "address": "Indiranagar 100 Feet Road, Bengaluru, Karnataka - 560038",
    "description": "Original dairy milkshakes served in vintage glass bottles since 1925. Indulge in classic Kesar Badam, Belgian Chocolate, Mango Lassi, and thick Faloodas.",
    "menuCategories": [
      {
        "id": "rest-27-cat-thick-shakes",
        "name": "🥛 Famous Thick Milkshakes (Glass Bottle)",
        "items": [
          {
            "id": "item-625",
            "name": "Original Kesar Badam Milkshake (300ml)",
            "description": "Iconic vintage shake with real saffron milk, ground almonds, and cardamom.",
            "price": 160,
            "originalPrice": 195,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-626",
            "name": "Belgian Dark Chocolate Shake (300ml)",
            "description": "Rich blended thick shake with Belgian dark chocolate and brownie crumbs.",
            "price": 175,
            "originalPrice": 215,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-627",
            "name": "Butterscotch Crunch Shake (300ml)",
            "description": "Creamy shake loaded with crunchy praline and butterscotch sauce.",
            "price": 150,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 609,
            "customizable": false
          },
          {
            "id": "item-628",
            "name": "Strawberry Cream Shake (300ml)",
            "description": "Sweet strawberry puree blended with cold farm milk and ice cream.",
            "price": 145,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 626,
            "customizable": false
          },
          {
            "id": "item-629",
            "name": "Cold Coffee Hazelnut Shake (300ml)",
            "description": "Rich coffee shake infused with roasted hazelnut syrup.",
            "price": 165,
            "originalPrice": 205,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 643,
            "customizable": false
          },
          {
            "id": "item-630",
            "name": "Oreo Cookie Overload Shake (300ml)",
            "description": "Thick shake crushed with whole Oreo cookies and chocolate drizzle.",
            "price": 170,
            "originalPrice": 210,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 660,
            "customizable": false
          },
          {
            "id": "item-631",
            "name": "Alphonso Mango Classic Shake (300ml)",
            "description": "Seasonal sweet Ratnagiri mango shake with creamy texture.",
            "price": 165,
            "originalPrice": 205,
            "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 677,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-27-cat-lassis-faloodas",
        "name": "🥤 Traditional Lassis & Royal Faloodas",
        "items": [
          {
            "id": "item-632",
            "name": "Royal Kesar Pista Lassi (400ml)",
            "description": "Thick churned Punjabi curd beverage with saffron, pistachios, and malai.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-633",
            "name": "Alphonso Mango Lassi (400ml)",
            "description": "Sweet mango pulp churned with rich curd and topped with nuts.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 711,
            "customizable": false
          },
          {
            "id": "item-634",
            "name": "Sweet Malai Lassi (400ml)",
            "description": "Traditional sweet lassi with thick dollop of home-churned cream.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 728,
            "customizable": false
          },
          {
            "id": "item-635",
            "name": "Royal Rose Falooda with Kulfi",
            "description": "Chilled rose milk, sabja seeds, falooda noodles, dry fruits, and kulfi slice.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 745,
            "customizable": false
          },
          {
            "id": "item-636",
            "name": "Rabri Falooda Glass",
            "description": "Thick reduced rabdi poured over rose falooda and pistachios.",
            "price": 150,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 762,
            "customizable": false
          },
          {
            "id": "item-637",
            "name": "Masala Salted Buttermilk (400ml)",
            "description": "Chilled buttermilk with ginger, mint, green chili, and roasted cumin.",
            "price": 50,
            "originalPrice": 65,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 779,
            "customizable": false
          },
          {
            "id": "item-638",
            "name": "Dry Fruit Rabri Cup (150g)",
            "description": "Slow-cooked milk skin layers with slivered almonds and pistachios.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 796,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-27-cat-sweet-treats",
        "name": "🍪 Warm Desserts & Snacks",
        "items": [
          {
            "id": "item-639",
            "name": "Warm Choco Lava Cake",
            "description": "Decadent chocolate cake with molten warm liquid center.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-640",
            "name": "Hot Gulab Jamun (2 pcs)",
            "description": "Spongy khoya dumplings in saffron syrup.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-641",
            "name": "Warm Walnut Brownie",
            "description": "Fudgy dark chocolate brownie packed with walnuts.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 847,
            "customizable": false
          },
          {
            "id": "item-642",
            "name": "Cheese Garlic Toasties (2 pcs)",
            "description": "Crispy toasted bread with garlic butter and melted cheese.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-643",
            "name": "Nutella Waffle Slice",
            "description": "Crispy Belgian waffle coated with warm Nutella spread.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 881,
            "customizable": false
          },
          {
            "id": "item-644",
            "name": "French Fries Salted",
            "description": "Crispy golden potato fries with dip.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 898,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-28",
    "name": "Rameshwaram Cafe South Delights",
    "slug": "rameshwaram-cafe-bengaluru",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 4800,
    "deliveryTime": "20-30 min",
    "distance": "2.0 km",
    "priceTier": "₹",
    "costForTwo": 240,
    "isPureVeg": true,
    "cuisines": [
      "South Indian",
      "Chai & Lassi"
    ],
    "tag": "Bengaluru Cult Sensation",
    "isOpen": true,
    "address": "12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038",
    "description": "Bengaluru's viral pure ghee tiffin phenomenon. Queue-worthy Ghee Podi Thatte Idlis, Ghee Podi Masala Dosa, crunchy Vadas, and strong Filter Kaapi.",
    "menuCategories": [
      {
        "id": "rest-28-cat-ghee-idli-dosa",
        "name": "🧈 Famous Ghee Podi Idlis & Dosas",
        "items": [
          {
            "id": "item-645",
            "name": "Famous Ghee Podi Thatte Idli (Single)",
            "description": "Huge plate-sized steamed idli drenched in molten pure ghee and roasted spiced podi.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 915,
            "customizable": false
          },
          {
            "id": "item-646",
            "name": "Ghee Podi Masala Dosa Special",
            "description": "Signature crisp golden dosa smeared with generous podi, ghee, and potato mash.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 932,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-647",
            "name": "Ghee Butter Garlic Dosa",
            "description": "Crisp dosa layered with roasted garlic paste, melted butter, and spiced podi.",
            "price": 150,
            "originalPrice": 185,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 949,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-648",
            "name": "Ghee Open Masala Dosa",
            "description": "Thick dosa roasted with butter, spread with potato palya and gunpowder.",
            "price": 145,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 966,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-649",
            "name": "Ghee Podi Plain Dosa",
            "description": "Thin crispy dosa roasted in pure ghee and dusted with spicy milagai podi.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 983,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-650",
            "name": "Rava Onion Ghee Dosa",
            "description": "Laced crispy semolina crepe packed with onions and cumin seeds.",
            "price": 145,
            "originalPrice": 180,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 150,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-651",
            "name": "Set Dosa with Sāgu (3 pcs)",
            "description": "Soft fluffy spongy dosas with mild vegetable coconut kurma.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 167,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Standard Roast",
                  "priceDiff": 0
                },
                {
                  "name": "Double Butter Crispy",
                  "priceDiff": 35
                }
              ],
              "addOns": [
                {
                  "name": "Extra Ghee Cup",
                  "price": 30
                },
                {
                  "name": "Extra Podi Gunpowder",
                  "price": 25
                },
                {
                  "name": "Extra Sambar Bowl",
                  "price": 25
                }
              ],
              "spiceLevels": [
                "Mild",
                "Medium Spicy",
                "Extra Spicy"
              ]
            }
          }
        ]
      },
      {
        "id": "rest-28-cat-vada-bath",
        "name": "🥞 Crunchy Vadas, Bath & Pongal",
        "items": [
          {
            "id": "item-652",
            "name": "Crispy Medu Vada with Ghee (2 pcs)",
            "description": "Fresh fried lentil fritters with peppercorns, ginger, and curry leaves.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-653",
            "name": "Ghee Pongal with Whole Cashews",
            "description": "Warm rice and yellow moong dal cooked with cumin, pepper, and roasted cashews.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-654",
            "name": "Bisi Bele Bath with Boondi",
            "description": "Karnataka spicy vegetable and lentil rice mash topped with pure ghee.",
            "price": 115,
            "originalPrice": 140,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-655",
            "name": "Khara Bath Spicy Upma",
            "description": "Coarse semolina with vegetables and aromatic spices.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 235,
            "customizable": false
          },
          {
            "id": "item-656",
            "name": "Kesari Bath Saffron Halwa",
            "description": "Golden semolina dessert with saffron, ghee, and dry fruits.",
            "price": 75,
            "originalPrice": 95,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 252,
            "customizable": false
          },
          {
            "id": "item-657",
            "name": "Chow Chow Bath (Combo of 2)",
            "description": "One scoop of Khara Bath paired with one scoop of Kesari Bath.",
            "price": 135,
            "originalPrice": 165,
            "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 269,
            "customizable": false
          },
          {
            "id": "item-658",
            "name": "Sambar Vada Dip (2 pcs)",
            "description": "Crisp vadas soaked in piping hot shallot drumstick sambar.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 286,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-28-cat-coffee-snacks",
        "name": "☕ Filter Kaapi & Crispy Snacks",
        "items": [
          {
            "id": "item-659",
            "name": "Signature Filter Kaapi",
            "description": "Strong chicory-infused decoction with fresh frothy cow milk in brass davarah.",
            "price": 45,
            "originalPrice": 55,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 303,
            "customizable": false
          },
          {
            "id": "item-660",
            "name": "Maddur Vada Crispy (2 pcs)",
            "description": "Spicy onion, semolina, and rice flour fritters from Maddur.",
            "price": 65,
            "originalPrice": 80,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 320,
            "customizable": false
          },
          {
            "id": "item-661",
            "name": "Curd Vada (2 pcs)",
            "description": "Vadas soaked in thick seasoned yogurt with boondi and coriander.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 337,
            "customizable": false
          },
          {
            "id": "item-662",
            "name": "Podi Rice with Ghee",
            "description": "Hot steamed rice mixed with gunpowder and generous spoonful of ghee.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 354,
            "customizable": false
          },
          {
            "id": "item-663",
            "name": "Spicy Buttermilk (Masala Majjige)",
            "description": "Chilled churned buttermilk with ginger, green chilies, and curry leaves.",
            "price": 40,
            "originalPrice": 50,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 371,
            "customizable": false
          },
          {
            "id": "item-664",
            "name": "Badam Halwa Pure Ghee (100g)",
            "description": "Rich almond dessert made with pure ghee and saffron.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 388,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-29",
    "name": "Chowman Authentic Indo-Chinese Kitchen",
    "slug": "chowman-indo-chinese",
    "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.8,
    "reviewCount": 3200,
    "deliveryTime": "25-35 min",
    "distance": "2.4 km",
    "priceTier": "₹₹",
    "costForTwo": 480,
    "isPureVeg": false,
    "cuisines": [
      "Indo-Chinese",
      "Fast Food"
    ],
    "tag": "Authentic Tangra Chinese",
    "isOpen": true,
    "address": "Salt Lake, Sector 1, Kolkata, West Bengal - 700064",
    "description": "Kolkata's finest Indo-Chinese restaurant. Savor fiery drums of heaven, crispy chili babycorn, steamed wontons, and Hakka noodles wok-tossed over high flame.",
    "menuCategories": [
      {
        "id": "rest-29-cat-wok-starters",
        "name": "🍗 Wok Starters & Appetizers",
        "items": [
          {
            "id": "item-665",
            "name": "Crispy Chilli Baby Corn",
            "description": "Baby corn fingers batter-fried crisp and tossed in sweet-and-spicy dark soy chili glaze.",
            "price": 190,
            "originalPrice": 230,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 405,
            "customizable": false
          },
          {
            "id": "item-666",
            "name": "Drums of Heaven Hong Kong Style (6 pcs)",
            "description": "Tender chicken wings tossed in garlic, chili, and sweet plum sauce.",
            "price": 270,
            "originalPrice": 320,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 422,
            "customizable": false
          },
          {
            "id": "item-667",
            "name": "Chilli Chicken Dry Tangra Style",
            "description": "Boneless chicken cubes tossed with diced green capsicum, onions, and dark soy.",
            "price": 250,
            "originalPrice": 295,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 439,
            "customizable": false
          },
          {
            "id": "item-668",
            "name": "Pan-Fried Chilli Fish (Bhetki 6 pcs)",
            "description": "Fresh Kolkata bhetki fish fillets tossed in spicy pepper and garlic sauce.",
            "price": 380,
            "originalPrice": 440,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 456,
            "customizable": false
          },
          {
            "id": "item-669",
            "name": "Golden Fried Prawns (6 pcs)",
            "description": "Butterflied sea prawns crumbed and fried golden, served with sweet chili dip.",
            "price": 390,
            "originalPrice": 460,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 473,
            "customizable": false
          },
          {
            "id": "item-670",
            "name": "Crispy Honey Pepper Chicken",
            "description": "Chicken strips glazed with crushed pepper and honey with sesame seeds.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 490,
            "customizable": false
          },
          {
            "id": "item-671",
            "name": "Chilli Garlic Mushroom Dry",
            "description": "Button mushrooms tossed in fiery burnt garlic and chili paste.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 507,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-29-cat-noodles-rice",
        "name": "🍜 High-Flame Noodles & Fried Rice",
        "items": [
          {
            "id": "item-672",
            "name": "Chowman Special Mixed Hakka Noodles",
            "description": "Wok-tossed noodles loaded with chicken, prawns, egg, and vegetables.",
            "price": 250,
            "originalPrice": 295,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 524,
            "customizable": false
          },
          {
            "id": "item-673",
            "name": "Schezwan Chicken Fried Rice",
            "description": "Spicy wok-fried rice with house-made Sichuan paste, shredded chicken, and spring onions.",
            "price": 230,
            "originalPrice": 275,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 541,
            "customizable": false
          },
          {
            "id": "item-674",
            "name": "Veg Hakka Noodles",
            "description": "Long noodles tossed with crunchy julienned vegetables and light soy.",
            "price": 180,
            "originalPrice": 215,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 558,
            "customizable": false
          },
          {
            "id": "item-675",
            "name": "Pan-Fried Noodles with Chicken & Mushroom",
            "description": "Crisp fried noodles topped with rich velvety chicken and mushroom gravy.",
            "price": 260,
            "originalPrice": 310,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 575,
            "customizable": false
          },
          {
            "id": "item-676",
            "name": "Garlic Fried Rice with Burnt Onions",
            "description": "Fragrant rice seasoned with golden roasted garlic flakes.",
            "price": 190,
            "originalPrice": 225,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 592,
            "customizable": false
          },
          {
            "id": "item-677",
            "name": "Singapore Veg Noodles with Cashews",
            "description": "Curry-powder seasoned noodles with bell peppers and toasted cashews.",
            "price": 210,
            "originalPrice": 250,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 609,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-29-cat-gravies-soups",
        "name": "🥘 Manchurian Gravies, Soups & Desserts",
        "items": [
          {
            "id": "item-678",
            "name": "Chicken Manchurian Gravy Bowl",
            "description": "Minced chicken meatballs in rich soy, ginger, and garlic coriander gravy.",
            "price": 250,
            "originalPrice": 295,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 626,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 200
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-679",
            "name": "Hot Garlic Chicken Gravy",
            "description": "Boneless chicken chunks in tangy and spicy red hot garlic sauce.",
            "price": 260,
            "originalPrice": 305,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 643,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 208
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-680",
            "name": "Veg Manchurian in Gravy",
            "description": "Fried vegetable balls in savory dark sauce.",
            "price": 200,
            "originalPrice": 240,
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 660,
            "customizable": true,
            "customizationOptions": {
              "sizes": [
                {
                  "name": "Regular Bowl (Serves 1-2)",
                  "priceDiff": 0
                },
                {
                  "name": "Family Handi (Serves 3-4)",
                  "priceDiff": 160
                }
              ],
              "addOns": [
                {
                  "name": "Add Extra Butter Naan",
                  "price": 60
                },
                {
                  "name": "Add Jeera Rice Bowl",
                  "price": 80
                }
              ],
              "spiceLevels": [
                "Mild Creamy",
                "Medium Dhaba",
                "Extra Spicy"
              ]
            }
          },
          {
            "id": "item-681",
            "name": "Chicken Sweet Corn Soup",
            "description": "Velvety soup with creamed corn and shredded chicken.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 677,
            "customizable": false
          },
          {
            "id": "item-682",
            "name": "Manchow Soup with Crispy Noodles",
            "description": "Spicy dark soup with garlic, cilantro, and fried noodle topping.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 694,
            "customizable": false
          },
          {
            "id": "item-683",
            "name": "Fried Ice Cream Scoop",
            "description": "Vanilla ice cream ball encased in hot crispy batter and drizzled with chocolate.",
            "price": 140,
            "originalPrice": 175,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 711,
            "customizable": false
          },
          {
            "id": "item-684",
            "name": "Darsaan with Vanilla Ice Cream",
            "description": "Honey-glazed crisp flat noodles with sesame seeds, served with vanilla ice cream.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 728,
            "customizable": false
          }
        ]
      }
    ]
  },
  {
    "id": "rest-30",
    "name": "Chhappan Bhog & Mithai Mahal",
    "slug": "chhappan-bhog-mithai-mahal",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80",
    "rating": 4.9,
    "reviewCount": 3900,
    "deliveryTime": "20-30 min",
    "distance": "1.8 km",
    "priceTier": "₹₹",
    "costForTwo": 320,
    "isPureVeg": true,
    "cuisines": [
      "Mithai & Desserts",
      "Chaat & Street Food"
    ],
    "tag": "56 Royal Offerings of India",
    "isOpen": true,
    "address": "Cantt Road, Sadar Bazaar, Lucknow, Uttar Pradesh - 226002",
    "description": "Named after the legendary 56 divine offerings. Famous across India for Desi Ghee Ghewar, Kaju Pista Roll, Chandrakala, Malai Paan, and royal festive gift hampers.",
    "menuCategories": [
      {
        "id": "rest-30-cat-chhappan-sweets",
        "name": "🍯 Royal Pure Desi Ghee Sweets",
        "items": [
          {
            "id": "item-685",
            "name": "Royal Kaju Pista Roll (250g Box)",
            "description": "Cashew cylinder rolls filled with crushed pistachio paste and saffron.",
            "price": 295,
            "originalPrice": 350,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 745,
            "customizable": false
          },
          {
            "id": "item-686",
            "name": "Malai Ghewar with Rabri (Piece)",
            "description": "Honeycomb Rajasthani disc drenched in saffron syrup and coated with thick rabri.",
            "price": 180,
            "originalPrice": 220,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 762,
            "customizable": false
          },
          {
            "id": "item-687",
            "name": "Chandrakala Sweet (2 pcs)",
            "description": "Crisp pastry dumplings filled with sweetened mawa, dry fruits, and dipped in syrup.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 779,
            "customizable": false
          },
          {
            "id": "item-688",
            "name": "Malai Paan Sweet (2 pcs)",
            "description": "Sweetened milk skin rolled around fragrant gulkand and dry fruits.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 796,
            "customizable": false
          },
          {
            "id": "item-689",
            "name": "Kaju Katli Diamond Box (250g)",
            "description": "Fine cashew fudge with silver leaf.",
            "price": 280,
            "originalPrice": 330,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 813,
            "customizable": false
          },
          {
            "id": "item-690",
            "name": "Motichoor Ladoo in Desi Ghee (250g)",
            "description": "Melt-in-mouth gram flour pearls soaked in saffron cardamom syrup.",
            "price": 175,
            "originalPrice": 210,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 830,
            "customizable": false
          },
          {
            "id": "item-691",
            "name": "Pista Barfi (250g Box)",
            "description": "Rich green pistachio and mawa fudge with cardamom.",
            "price": 310,
            "originalPrice": 360,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 847,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-30-cat-chhena-kheer",
        "name": "🍨 Chhena Specialties & Rabri",
        "items": [
          {
            "id": "item-692",
            "name": "Kesar Rasmalai Royal (2 pcs)",
            "description": "Spongy cottage cheese patties in saffron and pistachio milk.",
            "price": 105,
            "originalPrice": 130,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 864,
            "customizable": false
          },
          {
            "id": "item-693",
            "name": "Gulab Jamun with Saffron (2 pcs)",
            "description": "Golden brown khoya balls in fragrant rose cardamom syrup.",
            "price": 70,
            "originalPrice": 85,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 881,
            "customizable": false
          },
          {
            "id": "item-694",
            "name": "Rabri Matka (200g)",
            "description": "Slow-reduced milk layers with cardamoms and crushed almonds in clay pot.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.8,
            "votes": 898,
            "customizable": false
          },
          {
            "id": "item-695",
            "name": "Rajbhog Saffron (2 pcs)",
            "description": "Large yellow rosogolla stuffed with pistachios and almonds.",
            "price": 85,
            "originalPrice": 105,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 915,
            "customizable": false
          },
          {
            "id": "item-696",
            "name": "Kolkata White Rosogolla (4 pcs)",
            "description": "Classic spongy cottage cheese balls in light sugar syrup.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.6,
            "votes": 932,
            "customizable": false
          },
          {
            "id": "item-697",
            "name": "Gajar Ka Halwa Pure Desi Ghee (200g)",
            "description": "Red winter carrots slow-cooked in milk, ghee, and khoya.",
            "price": 110,
            "originalPrice": 135,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.7,
            "votes": 949,
            "customizable": false
          },
          {
            "id": "item-698",
            "name": "Moong Dal Halwa Desi Ghee (200g)",
            "description": "Rich roasted yellow lentil pudding with pure ghee and dry fruits.",
            "price": 120,
            "originalPrice": 150,
            "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 966,
            "customizable": false
          }
        ]
      },
      {
        "id": "rest-30-cat-royal-chaat",
        "name": "🥟 Royal Chaat, Snacks & Thandai",
        "items": [
          {
            "id": "item-699",
            "name": "Royal Raj Kachori Special",
            "description": "Crisp giant kachori stuffed with sprouts, bhalla, and sweet curd with pomegranate.",
            "price": 130,
            "originalPrice": 160,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.9,
            "votes": 983,
            "customizable": false
          },
          {
            "id": "item-700",
            "name": "Papdi Chaat with Dahi & Chutneys",
            "description": "Crispy wheat papdis layered with boiled potatoes, chilled sweet curd, and spices.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 150,
            "customizable": false
          },
          {
            "id": "item-701",
            "name": "Pani Puri with 2 Waters (8 pcs)",
            "description": "Crispy puris with spicy mint asafoetida water and sweet tamarind chutney.",
            "price": 70,
            "originalPrice": 90,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 167,
            "customizable": false
          },
          {
            "id": "item-702",
            "name": "Dahi Vada Plate (2 pcs)",
            "description": "Soft lentil dumplings in sweet creamy curd with roasted cumin.",
            "price": 90,
            "originalPrice": 115,
            "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.8,
            "votes": 184,
            "customizable": false
          },
          {
            "id": "item-703",
            "name": "Samosa with Sweet Chutney (2 pcs)",
            "description": "Crisp golden samosas filled with spicy potatoes and peas.",
            "price": 60,
            "originalPrice": 75,
            "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.9,
            "votes": 201,
            "customizable": false
          },
          {
            "id": "item-704",
            "name": "Royal Kesar Thandai (300ml Glass)",
            "description": "Traditional milk drink with ground almonds, fennel, poppy seeds, and rose petals.",
            "price": 95,
            "originalPrice": 120,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": true,
            "rating": 4.6,
            "votes": 218,
            "customizable": false
          },
          {
            "id": "item-705",
            "name": "Kesaria Lassi with Dry Fruits",
            "description": "Chilled churned sweet yogurt drink with saffron and nuts.",
            "price": 85,
            "originalPrice": 110,
            "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isBestseller": false,
            "rating": 4.7,
            "votes": 235,
            "customizable": false
          }
        ]
      }
    ]
  }
];
