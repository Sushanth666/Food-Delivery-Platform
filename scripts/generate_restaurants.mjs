import fs from 'fs';
import path from 'path';

// 30 Authentic Indian Restaurants with comprehensive data & 20+ unique dishes each
const restaurantsData = [
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
    categories: [
      {
        id: 'cat-biryanis',
        name: '🔥 Signature Dum Biryanis',
        dishes: [
          ['Special Andhra Chicken Dum Biryani', 'Aged basmati rice layered with tender Andhra chicken, desi ghee, Mirchi Ka Salan & Onion Raita.', 320, 380, true, false, 'biryani'],
          ['Royal Hyderabadi Mutton Dum Biryani', 'Slow-cooked young goat meat with whole garam masalas, saffron, and caramelised onions in clay handi.', 420, 490, true, false, 'biryani'],
          ['Shahi Paneer Tikka Dum Biryani', 'Charcoal-grilled paneer cubes infused with fragrant saffron basmati rice and rich mint salan.', 280, 320, true, true, 'biryani'],
          ['Egg Dum Biryani Handi', 'Two farm-fresh boiled and golden-fried eggs simmered in rich Awadhi biryani gravy and rice.', 240, 280, false, false, 'biryani'],
          ['Guntur Spicy Boneless Chicken Biryani', 'Fiery Andhra spiced boneless chicken chunks served over aromatic ghee rice.', 340, 390, true, false, 'biryani'],
          ['Mushroom & Green Peas Pulao Handi', 'Fresh button mushrooms and sweet peas tempered with royal cumin and ghee.', 260, 300, false, true, 'biryani'],
        ]
      },
      {
        id: 'cat-starters',
        name: '🍗 Kebabs & Tandoor Starters',
        dishes: [
          ['Crispy Andhra Chicken 65', 'Deep-fried crispy boneless chicken chunks tossed in curry leaf tempering and green chilies.', 250, 290, true, false, 'starter'],
          ['Chicken Ghee Roast Roast', 'Succulent chicken tossed in Kundapur style roasted chili and whole coriander paste in pure desi ghee.', 290, 340, true, false, 'starter'],
          ['Tandoori Murgh Full (Whole Bird)', 'Whole tender chicken marinated in spiced hung curd, smoked in clay tandoor.', 440, 520, true, false, 'starter'],
          ['Malai Chicken Tikka (6 pcs)', 'Creamy boneless chicken morsels flavoured with cardamom, mace, and melted butter.', 280, 320, false, false, 'starter'],
          ['Paneer 65 Crispy Bites', 'Tender paneer cubes tossed in tangy South Indian spiced tempering with curry leaves.', 220, 260, false, true, 'starter'],
          ['Crispy Veg Pepper Dry', 'Assorted farm-fresh vegetables batter-fried and tossed in crushed black tellicherry pepper.', 200, 240, false, true, 'starter'],
          ['Chicken Lemon Coriander Tikka', 'Zesty skewers of chicken with roasted cumin, fresh lime, and aromatic coriander.', 270, 310, false, false, 'starter'],
        ]
      },
      {
        id: 'cat-curries-breads',
        name: '🥘 Curries & Fresh Breads',
        dishes: [
          ['Creamy Butter Chicken Gravy', 'Tandoori chicken pulled and simmered in satin smooth tomato, cashew, and fenugreek sauce.', 310, 360, true, false, 'curry'],
          ['Paneer Butter Masala', 'Soft cottage cheese cubes in rich tomato cream gravy with Kasuri methi.', 260, 300, true, true, 'curry'],
          ['Andhra Chicken Curry (Gongura Style)', 'Traditional spicy chicken cooked in tangy Gongura sorrel leaf paste.', 290, 340, false, false, 'curry'],
          ['Dal Makhani 24-hr Slow Cooked', 'Black lentils and kidney beans cooked overnight with white butter and cream.', 220, 260, false, true, 'curry'],
          ['Butter Garlic Naan (2 pcs)', 'Tandoor-baked leavened refined flour flatbread layered with roasted garlic and butter.', 80, 100, false, true, 'bread'],
          ['Tandoori Roti (3 pcs)', 'Crisp whole wheat flatbread baked in traditional clay tandoor with melted butter.', 60, 80, false, true, 'bread'],
          ['Shahi Gulab Jamun in Kesar Syrup (2 pcs)', 'Melt-in-mouth golden khoya dumplings soaked in saffron-scented rose syrup.', 90, 120, false, true, 'dessert'],
          ['Thick Mango Lassi with Malai', 'Sweet churned yogurt blended with Alphonso mango pulp and topped with saffron pistachios.', 110, 140, false, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-2',
    name: 'Murugan Idli & A2B Anandha Bhavan',
    slug: 'murugan-idli-a2b',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 4210,
    deliveryTime: '20-30 min',
    distance: '1.5 km',
    priceTier: '₹',
    costForTwo: 280,
    isPureVeg: true,
    cuisines: ['South Indian', 'Chaat & Street Food', 'Chai & Lassi'],
    tag: 'Tiruppur & Chennai Legend',
    isOpen: true,
    address: 'Avinashi Road, Near Old Bus Stand, Tiruppur, Tamil Nadu - 641602',
    description: 'Iconic Madurai-style melting soft idlis, golden crispy ghee podi masala dosas, piping hot sambar and freshly brewed Kumbakonam degree filter coffee.',
    categories: [
      {
        id: 'cat-idli-vada',
        name: '🥞 Soft Idlis & Crunchy Vadais',
        dishes: [
          ['Famous Soft Mallipoo Idli (4 pcs)', 'Signature feather-light steamed rice cakes served with 4 varieties of chutneys and drumstick sambar.', 90, 110, true, true, 'idli'],
          ['Crispy Medu Vadai (2 pcs)', 'Golden brown crisp lentil fritters with peppercorn, cumin, ginger, and green chili.', 70, 90, true, true, 'vada'],
          ['Ghee Podi Idli Chunks (14 mini)', 'Mini steamed idlis tossed in roasted spiced gun powder (milagai podi) and pure melted ghee.', 130, 160, true, true, 'idli'],
          ['Sambar Vadai Dip (2 pcs)', 'Hot crispy medu vadas submerged in aromatic Madras shallot and lentil sambar.', 95, 120, false, true, 'vada'],
          ['Curd Vadai with Boondi', 'Crisp vadas soaked in chilled seasoned curd, garnished with mustard seeds and spicy boondi.', 100, 125, false, true, 'vada'],
          ['Rava Kichadi with Ghee', 'Semolina cooked with mustard seeds, cashews, vegetables, and aromatic ghee.', 85, 105, false, true, 'breakfast'],
        ]
      },
      {
        id: 'cat-dosas',
        name: '🥘 Signature Ghee Dosas',
        dishes: [
          ['Special Ghee Masala Dosa', 'Golden crisp fermented crepe smeared with pure Cow Ghee and stuffed with spiced potato masala.', 140, 170, true, true, 'dosa'],
          ['Ghee Podi Crispy Roast Dosa', 'Thin paper-crisp dosa generously dusted with fiery roasted lentil podi and drizzled with ghee.', 150, 180, true, true, 'dosa'],
          ['Mysore Masala Red Chutney Dosa', 'Dosa coated with garlic-red chili paste, potato filling, and fresh grated paneer.', 160, 195, false, true, 'dosa'],
          ['Rava Onion Butter Masala Dosa', 'Crispy lace semolina crepe packed with sautéed onions, green chilies, cashews, and butter.', 165, 200, false, true, 'dosa'],
          ['Spring Cheese Corn Dosa', 'Indo-fusion dosa stuffed with shredded vegetables, sweet corn, and melted mozzarella.', 180, 220, false, true, 'dosa'],
          ['Paper Roast Dosa (Serves 2, 2ft long)', 'Extra large ultra-crisp paper thin dosa rolled with cup of spicy potato masala.', 175, 210, false, true, 'dosa'],
          ['Set Dosa with Vadacurry (3 pcs)', 'Soft, fluffy, spongy dosas served with spicy Chettinad lentil-dumpling vadacurry.', 120, 145, false, true, 'dosa'],
        ]
      },
      {
        id: 'cat-meals-beverages',
        name: '☕ Traditional Meals, Sweets & Coffee',
        dishes: [
          ['South Indian Special Mini Tiffin', 'Assorted feast with 1 Mini Masala Dosa, 2 Idlis, 1 Vada, Rava Kesari, and Sambar.', 190, 230, true, true, 'meal'],
          ['Ghee Pongal with Cashews', 'Traditional creamy ven pongal made with rice and split yellow moong dal, roasted cashews, and pepper.', 110, 135, true, true, 'pongal'],
          ['Curd Rice with Pomegranate & Mor Milagai', 'Comforting tempered yogurt rice with mustard seeds, curry leaves, ginger, and sun-dried curd chili.', 90, 110, false, true, 'rice'],
          ['Hot Ghee Mysore Pak', 'Mouth-melting traditional gram flour fudge made with pure desi ghee and sugar.', 80, 100, false, true, 'dessert'],
          ['Pineapple Rava Kesari Bath', 'Semolina pudding cooked with real pineapple chunks, saffron, cardamom, and fried cashews.', 70, 90, false, true, 'dessert'],
          ['Kumbakonam Degree Filter Coffee', 'Freshly brewed chicory blend decoction frothed with boiled farm cow milk in brass Davarah.', 45, 60, true, true, 'beverage'],
          ['Madras Masala Buttermilk (Neer Mor)', 'Refreshing churned spiced buttermilk with crushed curry leaves, ginger, and green chilies.', 40, 50, false, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-3',
    name: 'Moti Mahal Delux & Gulati Butter Chicken',
    slug: 'moti-mahal-gulati',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3890,
    deliveryTime: '30-40 min',
    distance: '3.4 km',
    priceTier: '₹₹₹',
    costForTwo: 650,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Rolls & Burgers'],
    tag: 'Original 1920 Butter Chicken',
    isOpen: true,
    address: 'Pandara Road Market, India Gate, New Delhi - 110003',
    description: 'The legendary birthplace of Butter Chicken and Dal Makhani. Relish 100 years of culinary royalty with smoky clay oven grills and silky rich curries.',
    categories: [
      {
        id: 'cat-legendary-curries',
        name: '👑 Legendary North Indian Curries',
        dishes: [
          ['Original Moti Mahal Butter Chicken', 'Tandoori chicken morsels simmered in slow-reduced velvet tomato gravy, fenugreek, and home-churned butter.', 380, 440, true, false, 'curry'],
          ['Dal Makhani Bukhara Style', 'Urad dal simmered for 24 hours over low charcoal embers with vine tomatoes, garlic, and rich butter.', 260, 310, true, true, 'curry'],
          ['Kadhai Paneer Peshawari', 'Cottage cheese wok-tossed with crushed coriander seeds, bell peppers, tomatoes, and whole red chilies.', 290, 340, true, true, 'curry'],
          ['Rogan Josh Kashmiri Mutton', 'Tender lamb cuts braised in aromatic Kashmiri chili, fennel powder, and ratan jot infused gravy.', 460, 530, true, false, 'curry'],
          ['Chicken Tikka Masala Gravy', 'Charcoal-grilled chicken tikka cooked in onion-tomato masala with diced bell peppers.', 360, 420, false, false, 'curry'],
          ['Palak Paneer Lahori', 'Fresh spinach puree infused with roasted garlic, cream, and soft paneer cubes.', 270, 310, false, true, 'curry'],
          ['Murgh Malai Kofta', 'Velvety cottage cheese and potato dumplings stuffed with dry fruits, served in rich cashew-saffron gravy.', 310, 360, false, true, 'curry'],
        ]
      },
      {
        id: 'cat-kebabs',
        name: '🍢 Tandoor & Charcoal Kebabs',
        dishes: [
          ['Bhatia Murgh Tandoori (Half)', 'Chicken on the bone marinated in mustard oil, roasted cumin, and hung curd, roasted in clay pit.', 280, 330, true, false, 'starter'],
          ['Kakori Mutton Seekh Kebab (4 pcs)', 'Finely minced mutton infused with 21 secret Awadhi spices, melted on skewers.', 390, 460, true, false, 'starter'],
          ['Bhatti Paneer Tikka (6 pcs)', 'Thick paneer squares marinated with crushed ajwain seeds, kasuri methi, and black salt.', 260, 300, false, true, 'starter'],
          ['Amritsari Machhi Fry (Fish)', 'Crispy carom-scented batter-fried freshwater fish served with spicy mint chutney.', 380, 440, true, false, 'starter'],
          ['Dahi Ke Kebab (4 pcs)', 'Crispy shallow-fried patties made with strained hung yogurt, mild green chilies, and coriander.', 240, 280, false, true, 'starter'],
          ['Murgh Reshmi Kebab (6 pcs)', 'Tender chicken kebabs coated with egg white, cream, and almond paste.', 320, 370, false, false, 'starter'],
          ['Tandoori Soya Chaap Tikka', 'Charcoal-grilled protein-rich soya chaap marinated in spicy tandoori masala.', 230, 270, false, true, 'starter'],
        ]
      },
      {
        id: 'cat-breads-rice',
        name: '🍚 Breads, Pulao & Desserts',
        dishes: [
          ['Amritsari Chur Chur Naan with Chana', 'Layered flaky naan crushed with butter, served with pindi chana and pickle.', 160, 190, true, true, 'bread'],
          ['Garlic & Cheese Stuffed Naan', 'Tandoor naan loaded with melted cheddar and mozzarella cheese with fresh garlic.', 140, 170, false, true, 'bread'],
          ['Roomali Roti Hand-Stretched', 'Paper-thin handkerchief bread cooked over inverted domed griddle.', 50, 65, false, true, 'bread'],
          ['Jeera Rice with Brown Onions', 'Long-grain basmati tempered with royal cumin seeds and ghee.', 160, 190, false, true, 'rice'],
          ['Kashmiri Mutton Pulao', 'Fragrant basmati cooked with tender mutton broth, saffron, raisins, and fried cashews.', 390, 450, false, false, 'rice'],
          ['Kesar Phirni in Clay Pot', 'Traditional ground rice pudding infused with saffron, milk, and silver vark in earthen pot.', 95, 120, true, true, 'dessert'],
          ['Shahi Tukda Old Delhi Style', 'Fried bread steeped in cardamom syrup, smothered in thickened rabri and pistachios.', 110, 140, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-4',
    name: 'Saravanaa Bhavan Pure Vegetarian',
    slug: 'saravanaa-bhavan-pure-veg',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3100,
    deliveryTime: '20-30 min',
    distance: '1.8 km',
    priceTier: '₹₹',
    costForTwo: 350,
    isPureVeg: true,
    cuisines: ['South Indian', 'North Indian', 'Chai & Lassi'],
    tag: 'Global Pure Veg Icon',
    isOpen: true,
    address: 'Kennet Lane, Egmore, Chennai, Tamil Nadu - 600008',
    description: 'International brand famous for pristine pure vegetarian South Indian grand meals, variety dosas, North Indian delicacies, and authentic temple sweets.',
    categories: [
      {
        id: 'cat-meals',
        name: '🍱 South Indian Grand Thalis & Meals',
        dishes: [
          ['Special South Indian Executive Thali', 'Full banquet with rice, sambar, rasam, kootu, poriyal, karakuzhambu, curd, appalam, vadai & payasam.', 240, 280, true, true, 'thali'],
          ['Bisi Bele Bath with Boondi & Ghee', 'Traditional Karnataka spicy rice-lentil mash with mixed vegetables, ghee, and cashew nuts.', 120, 145, true, true, 'rice'],
          ['Lemon Rice with Roasted Peanuts', 'Fluffy rice tossed with cold-pressed gingelly oil, mustard, curry leaves, and crunchy peanuts.', 90, 110, false, true, 'rice'],
          ['Tamarind Rice (Puliyodharai)', 'Temple-style tangy tamarind rice spiced with roasted fenugreek and sesame powder.', 95, 115, false, true, 'rice'],
          ['Poori Masala with 3 Pooris', 'Puffy whole-wheat deep fried pooris served with mild potato and onion gravy.', 110, 130, true, true, 'breakfast'],
          ['Chola Poori with Chana Masala', 'Extra large puffed bhatura served with spicy Punjabi chana and pickled onions.', 140, 165, false, true, 'breakfast'],
        ]
      },
      {
        id: 'cat-special-dosas',
        name: '🥘 Artisan Special Dosas',
        dishes: [
          ['Ghee Onion Rava Dosa', 'Golden semolina crepe with crunchy onions, cumin, green chili, and pure ghee.', 155, 185, true, true, 'dosa'],
          ['Cheese Masala Dosa', 'Crispy dosa filled with spiced potato mash and loaded with melted Amul cheese.', 165, 195, false, true, 'dosa'],
          ['Kharabhath with Coconut Chutney', 'Savory spicy semolina upma cooked with ghee, vegetables, and aromatic spices.', 80, 100, false, true, 'breakfast'],
          ['Mushroom Ghee Roast Dosa', 'Crisp dosa stuffed with sautéed peppery Chettinad button mushrooms.', 170, 205, false, true, 'dosa'],
          ['Paneer Butter Masala Dosa', 'Dosa loaded with rich paneer butter masala filling and coriander.', 175, 210, true, true, 'dosa'],
          ['Podi Uthappam with Ghee', 'Thick spongy rice pancake topped generously with gun powder and roasted in ghee.', 130, 155, false, true, 'dosa'],
          ['Onion Tomato Uttapam', 'Traditional thick pancake studded with caramelized onions, tomatoes, and cilantro.', 135, 160, false, true, 'dosa'],
        ]
      },
      {
        id: 'cat-curries-sweets',
        name: '🍯 North Indian Gravies & Sweets',
        dishes: [
          ['Shahi Paneer Korma', 'Cottage cheese simmered in white cashew and melon seed gravy with green cardamom.', 250, 290, false, true, 'curry'],
          ['Mixed Vegetable Kadai Curry', 'Carrots, beans, peas, and florets sautéed in fresh ground kadai masala.', 210, 250, false, true, 'curry'],
          ['Butter Naan (2 pcs)', 'Oven-baked flatbread buttered to perfection.', 70, 85, false, true, 'bread'],
          ['Garlic Roti (3 pcs)', 'Whole-wheat flatbread infused with roasted garlic flakes.', 75, 90, false, true, 'bread'],
          ['Badam Halwa Melt-in-Mouth (100g)', 'Rich royal sweet made with ground California almonds, pure ghee, and saffron.', 150, 180, true, true, 'dessert'],
          ['Carrot Halwa with Khoya', 'Grated winter red carrots braised in milk, ghee, khoya, and golden raisins.', 110, 135, false, true, 'dessert'],
          ['Special Filter Kaapi', 'Authentic chicory filter coffee served piping hot.', 45, 55, true, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-5',
    name: 'Kareem\'s Mughlai & Lucknowi Dastarkhwan',
    slug: 'kareems-lucknowi-dastarkhwan',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 2950,
    deliveryTime: '30-40 min',
    distance: '3.1 km',
    priceTier: '₹₹₹',
    costForTwo: 600,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Rolls & Burgers'],
    tag: 'Nawabi Heritage Cuisine',
    isOpen: true,
    address: 'Near Jama Masjid Gate 1, Old Delhi - 110006',
    description: 'Centuries of royal Nawabi recipe craftsmanship. Indulge in slow-simmered Nihari, melting Galouti kebabs, Awadhi Gosht Biryani, and saffron Sheermal.',
    categories: [
      {
        id: 'cat-nawabi-meats',
        name: '🍖 Slow-Simmered Royal Meats',
        dishes: [
          ['Nalli Nihari Gosht Special', 'Slow-cooked shank of mutton in rich bone marrow gravy with ginger juliennes and green chilies.', 440, 510, true, false, 'meat'],
          ['Awadhi Mutton Korma', 'Tender lamb cuts cooked in brown onion, curd, and screwpine essence gravy.', 410, 480, true, false, 'meat'],
          ['Murgh Jahangiri', 'Chicken cooked in velvety cashew, cream, and dry fruit gravy with royal spices.', 360, 420, false, false, 'meat'],
          ['Chicken Tikka Lababdar', 'Charcoal-grilled chicken chunks in chunky tomato, onion, and grated paneer sauce.', 350, 410, true, false, 'meat'],
          ['Mutton Keema Matar Gravy', 'Spiced minced lamb cooked with sweet green peas, mint, and whole roasted garam masala.', 380, 440, false, false, 'meat'],
          ['Paneer Korma Nawabi', 'Fresh paneer in golden cashew-nut and saffron infused royal gravy.', 280, 320, false, true, 'curry'],
        ]
      },
      {
        id: 'cat-kebabs',
        name: '🍢 Char-Grilled Nawabi Kebabs',
        dishes: [
          ['Original Galouti Kebab (4 pcs)', 'Finely ground minced meat infused with raw papaya and 32 herbs, pan-fried in desi ghee.', 370, 430, true, false, 'kebab'],
          ['Mutton Seekh Kebab (4 pcs)', 'Spiced minced mutton skewered and roasted to juicy perfection in clay tandoor.', 350, 410, true, false, 'kebab'],
          ['Murgh Malai Kebab (6 pcs)', 'Chicken chunks marinated in rich hung curd, fresh cream, cheese, and crushed cardamom.', 310, 360, true, false, 'kebab'],
          ['Boti Kebab Masaledar', 'Tender cubes of boneless mutton marinated in spicy Awadhi masala, char-grilled.', 390, 450, false, false, 'kebab'],
          ['Tandoori Fish Tikka Surmai', 'King fish fillets coated in carom seeds, turmeric, and mustard oil, roasted crisp.', 440, 500, false, false, 'kebab'],
          ['Paneer Tikka Zaffrani (6 pcs)', 'Saffron and cream marinated cottage cheese with roasted bell peppers and onions.', 260, 300, false, true, 'kebab'],
          ['Subz Shammi Kebab (4 pcs)', 'Lentil and vegetable patties spiced with green coriander and brown cumin.', 220, 260, false, true, 'kebab'],
        ]
      },
      {
        id: 'cat-biryani-breads',
        name: '🍚 Awadhi Biryani, Breads & Desserts',
        dishes: [
          ['Royal Awadhi Gosht Biryani', 'Long-grain basmati cooked with tender goat meat in dum with rose water and saffron.', 420, 490, true, false, 'biryani'],
          ['Lucknowi Murgh Dum Pulao', 'Delicate mild chicken pulao layered with aromatic spice potli infusion.', 330, 380, true, false, 'biryani'],
          ['Sheermal (Saffron Sweet Bread)', 'Traditional milk-baked flatbread infused with real saffron and brushed with ghee.', 80, 100, true, true, 'bread'],
          ['Khamiri Roti (2 pcs)', 'Fluffy sourdough tandoor flatbread popular in Old Delhi.', 60, 75, false, true, 'bread'],
          ['Mughlai Paratha Stuffed', 'Flaky layered bread stuffed with egg and spiced minced meat.', 180, 220, false, false, 'bread'],
          ['Shahi Tukra with Rabdi Bowl', 'Golden fried bread croutons soaked in sweet rabri, topped with slivered pistachios.', 120, 150, true, true, 'dessert'],
          ['Kesar Badam Milk Chilled', 'Slow-boiled whole milk infused with kesar strands, crushed almonds, and cardamom.', 90, 115, false, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-6',
    name: 'Sardar Pav Bhaji & Bademiya Kebab Corner',
    slug: 'sardar-pav-bhaji-bademiya',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3950,
    deliveryTime: '20-30 min',
    distance: '2.4 km',
    priceTier: '₹',
    costForTwo: 300,
    isPureVeg: false,
    cuisines: ['Chaat & Street Food', 'Rolls & Burgers', 'Fast Food'],
    tag: 'Mumbai Late Night Sensation',
    isOpen: true,
    address: 'Tardeo Road, Opposite Bus Depot, Mumbai, Maharashtra - 400034',
    description: 'The taste of Bombay street nights. World-famous butter-drenched Sardar Pav Bhaji, Bademiya spiced baida rotis, and juicy chicken kathi rolls.',
    categories: [
      {
        id: 'cat-pav-bhaji',
        name: '🧈 Famous Mumbai Pav Bhaji',
        dishes: [
          ['Amul Butter Overload Pav Bhaji', 'Thick mashed vegetable curry topped with half slab of pure Amul butter, served with 2 toasted pavs.', 190, 230, true, true, 'chaat'],
          ['Cheese Pav Bhaji Volcano', 'Signature bhaji smothered with mountain of grated Amul processed cheese and herbs.', 220, 260, true, true, 'chaat'],
          ['Paneer Pav Bhaji Special', 'Bhaji loaded with soft fresh paneer cubes and extra dollop of butter with lemon wedges.', 210, 250, false, true, 'chaat'],
          ['Khada Pav Bhaji (Unmashed Veggies)', 'Whole diced vegetables tossed in sizzling tawa garlic butter and pav bhaji masala.', 195, 235, false, true, 'chaat'],
          ['Jain Pav Bhaji (No Onion, No Garlic)', 'Authentic Jain preparation made using raw bananas and fresh tomatoes.', 190, 230, false, true, 'chaat'],
          ['Extra Butter Toasted Pav (2 pcs)', 'Pillow-soft ladi pavs toasted on hot griddle with coriander butter.', 40, 50, false, true, 'bread'],
          ['Garlic Masala Pav (2 pcs)', 'Pav stuffed with fiery wet garlic chutney and roasted crisp on tawa.', 60, 75, true, true, 'bread'],
        ]
      },
      {
        id: 'cat-mumbai-rolls',
        name: '🌯 Bademiya Kathi & Baida Rolls',
        dishes: [
          ['Chicken Tikka Kathi Roll', 'Charcoal-grilled chicken tikka, pickled red onions, and mint chutney wrapped in flaky paratha.', 170, 210, true, false, 'roll'],
          ['Double Egg Chicken Roll', 'Crisp egg-layered paratha filled with spiced chicken bhuna and tangy sauce.', 190, 230, true, false, 'roll'],
          ['Mutton Seekh Kebab Roll', 'Juicy grilled mutton seekh wrapped with chaat masala and lemon onions.', 220, 260, true, false, 'roll'],
          ['Chicken Baida Roti', 'Square folded flatbread stuffed with spiced minced chicken and egg, pan-fried crisp.', 210, 250, true, false, 'roll'],
          ['Paneer Tikka Roll Deluxe', 'Tandoori paneer, crunchy capsicum, and spiced mayo in butter paratha.', 150, 180, false, true, 'roll'],
          ['Aloo Cheese Frankie', 'Bombay style frankie stuffed with spiced potato roll, cheese, and frankie masala.', 120, 150, false, true, 'roll'],
          ['Soya Chaap Tikka Roll', 'Smoky soya chaap pieces tossed in spicy onion gravy inside roomali wrap.', 140, 170, false, true, 'roll'],
        ]
      },
      {
        id: 'cat-mumbai-street',
        name: '🥟 Street Chaat, Sandwiches & Juices',
        dishes: [
          ['Bombay Toast Grilled Sandwich', 'Triple-layer sandwich with beetroot, potato, cucumber, mint chutney & cheese.', 130, 160, true, true, 'sandwich'],
          ['Sev Puri Mumbai Chowpatty Plate (6 pcs)', 'Crispy puris topped with diced potatoes, onions, 3 chutneys, and crisp nylon sev.', 85, 105, true, true, 'chaat'],
          ['Dahi Batata Puri (6 pcs)', 'Puffed puris filled with spiced potato, chilled sweet curd, and pomegranate seeds.', 95, 120, false, true, 'chaat'],
          ['Pani Puri with 2 Waters (8 pcs)', 'Crisp puris with spicy mint water, sweet tamarind date chutney, and warm ragda.', 70, 90, true, true, 'chaat'],
          ['Pav Vada (2 pcs)', 'Spicy deep-fried potato dumpling inside bread bun with sweet & dry garlic chutney.', 60, 75, true, true, 'chaat'],
          ['Royal Falooda with Kulfi', 'Rose syrup milk with basil seeds, falooda sev, dry fruits, and malai kulfi scoop.', 130, 160, true, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-7',
    name: 'Bikanervala & Haldiram\'s Sweets & Chaat',
    slug: 'bikanervala-haldirams',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3200,
    deliveryTime: '20-30 min',
    distance: '2.0 km',
    priceTier: '₹₹',
    costForTwo: 350,
    isPureVeg: true,
    cuisines: ['Chaat & Street Food', 'Mithai & Desserts', 'North Indian'],
    tag: 'India\'s Favorite Sweetmaker',
    isOpen: true,
    address: 'Connaught Place, Block L, New Delhi - 110001',
    description: 'Iconic North Indian vegetarian powerhouse known for king-sized Chole Bhature, crispy Raj Kachori, festive gift boxes, and pure ghee sweets.',
    categories: [
      {
        id: 'cat-chole-bhature',
        name: '🥟 Signature Chole Bhature & Chaat',
        dishes: [
          ['Delhi Special Chole Bhature (2 pcs)', 'Fluffy balloon bhaturas served with spicy dark Amritsari pindi chole, paneer cube, and pickled chilies.', 160, 190, true, true, 'chaat'],
          ['Paneer Stuffed Bhature Plate', 'Bhatura dough stuffed with grated paneer and herbs, served with rich chickpea gravy.', 180, 220, true, true, 'chaat'],
          ['Royal Raj Kachori King Size', 'Giant crisp puri filled with bhalla, sprouts, boiled potatoes, sweetened curd, and chutneys.', 130, 160, true, true, 'chaat'],
          ['Dahi Bhalla Papdi Chaat', 'Soft lentil dumplings soaked in thick sweet curd with crispy papdi and roasted cumin.', 110, 135, true, true, 'chaat'],
          ['Crispy Aloo Tikki with Chole', 'Shallow-fried golden potato cutlets topped with spicy chole and tamarind glaze.', 105, 130, false, true, 'chaat'],
          ['Gol Gappe with Hing & Jeera Pani (6 pcs)', 'Crisp semolina sooji puris with tangy asafoetida and mint cumin waters.', 70, 85, false, true, 'chaat'],
          ['Samosa with Chole Chaat (2 pcs)', 'Crushed golden samosas layered with spicy chana curry and chopped red onions.', 80, 100, false, true, 'chaat'],
        ]
      },
      {
        id: 'cat-north-indian',
        name: '🥘 Punjabi Thalis & Snacks',
        dishes: [
          ['Deluxe North Indian Thali', 'Paneer Butter Masala, Dal Makhani, Mix Veg, Pulao, 2 Naans, Raita, and Gulab Jamun.', 270, 320, true, true, 'thali'],
          ['Amritsari Kulcha with Chana', 'Layered leavened bread stuffed with spiced potatoes and baked in tandoor.', 140, 170, true, true, 'bread'],
          ['Tandoori Paneer Tikka Platter', 'Spicy marinated cottage cheese cubes with bell peppers and green mint dip.', 240, 280, false, true, 'starter'],
          ['Hara Bhara Kebab (6 pcs)', 'Pan-fried spinach, green pea, and potato patties coated in crushed breadcrumbs.', 190, 230, false, true, 'starter'],
          ['Kadhai Paneer with Butter Roti (Combo)', 'Semi-dry paneer preparation served with 3 butter rotis and salad.', 220, 260, false, true, 'combo'],
          ['Dal Makhani Rice Bowl', 'Comforting rich black lentils served over steaming basmati rice.', 160, 190, false, true, 'rice'],
        ]
      },
      {
        id: 'cat-mithai',
        name: '🍨 Pure Desi Ghee Mithai & Beverages',
        dishes: [
          ['Kaju Katli Diamond Cuts (250g Box)', 'Silky cashew fudge with silver leaf, made from premium Goa cashews.', 280, 330, true, true, 'sweet'],
          ['Motichoor Ladoo in Desi Ghee (250g)', 'Fine pearl gram flour beads fried in ghee and soaked in cardamom syrup.', 175, 210, true, true, 'sweet'],
          ['Hot Gulab Jamun (2 pcs)', 'Spongy khoya spheres in fragrant rose cardamom syrup.', 70, 85, true, true, 'sweet'],
          ['Kesari Rasmalai (2 pcs)', 'Soft cottage cheese patties steeped in thickened saffron and pistachio milk.', 95, 120, true, true, 'sweet'],
          ['Crispy Desi Ghee Jalebi (100g)', 'Spiral saffron syrup-soaked crisp fritters served hot.', 75, 95, false, true, 'sweet'],
          ['Rasgulla Tin (4 pcs)', 'Spongy Bengali cottage cheese balls soaked in light sugar syrup.', 80, 100, false, true, 'sweet'],
          ['Special Kesaria Lassi with Malai', 'Sweet yogurt beverage with real saffron strands and dry fruits.', 90, 115, false, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-8',
    name: 'Chowringhee & Arsalan Kolkata Biryani',
    slug: 'chowringhee-arsalan-kolkata',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3600,
    deliveryTime: '25-35 min',
    distance: '2.8 km',
    priceTier: '₹₹',
    costForTwo: 420,
    isPureVeg: false,
    cuisines: ['Biryani & Pulao', 'Rolls & Burgers', 'Indo-Chinese'],
    tag: 'Legendary Kolkata Sensation',
    isOpen: true,
    address: 'Park Street, Opposite St. Xavier\'s, Kolkata, West Bengal - 700016',
    description: 'Home of the authentic Kolkata Dum Biryani with the melt-in-mouth potato, Kolkata Kathi rolls wrapped in flaky lachha parathas, and Indo-Chinese momos.',
    categories: [
      {
        id: 'cat-kolkata-biryani',
        name: '🍚 Signature Kolkata Dum Biryanis',
        dishes: [
          ['Original Kolkata Mutton Biryani', 'Fragrant long-grain basmati with succulent tender mutton piece, golden aromatic potato, and boiled egg.', 380, 440, true, false, 'biryani'],
          ['Special Kolkata Chicken Biryani', 'Juicy chicken leg slow-cooked with mace, meetha ittar, tender potato, and saffron basmati.', 290, 340, true, false, 'biryani'],
          ['Kolkata Egg & Aloo Dum Biryani', 'Two golden eggs and two melt-in-mouth biryani potatoes in sweet-spiced Awadhi rice.', 210, 250, false, false, 'biryani'],
          ['Arsalan Shahi Mutton Chaap', 'Mutton ribs slow-braised in brown onion, poppy seed, and cashew paste, griddled in ghee.', 360, 420, true, false, 'meat'],
          ['Chicken Rezala White Gravy', 'Rich Nawabi stew cooked with yogurt, poppy seeds, cashew paste, and whole dry red chilies.', 310, 360, true, false, 'curry'],
          ['Kolkata Veg Dum Biryani', 'Aromatic rice with spiced vegetables, golden potato, paneer, and saffron.', 240, 280, false, true, 'biryani'],
        ]
      },
      {
        id: 'cat-park-street-rolls',
        name: '🌯 Authentic Park Street Kathi Rolls',
        dishes: [
          ['Double Chicken Double Egg Roll', 'Kolkata\'s favorite crispy paratha with 2 fried eggs, juicy chicken tikka, and sliced green chili onions.', 180, 220, true, false, 'roll'],
          ['Mutton Boti Kebab Roll', 'Spicy charred mutton chunks with lemon and chaat masala wrapped in laccha paratha.', 210, 250, true, false, 'roll'],
          ['Single Egg Chicken Kathi Roll', 'Crisp paratha with one fried egg and tender spiced boneless chicken.', 150, 180, true, false, 'roll'],
          ['Paneer Tikka Kathi Roll', 'Grilled cottage cheese cubes with sweet-spicy Kolkata roll sauce and pickled onions.', 130, 160, false, true, 'roll'],
          ['Egg & Cheese Roll', 'Double egg roll loaded with melted cheese and fresh green chilies.', 120, 150, false, false, 'roll'],
          ['Aloo Roll Kolkata Style', 'Tangy mashed potato masala with special spices rolled in crispy fried flatbread.', 90, 115, false, true, 'roll'],
          ['Kolkata Chicken Cutlet (2 pcs)', 'Spiced minced chicken crumb-fried cutlets served with famous Kasundi mustard.', 160, 195, false, false, 'starter'],
        ]
      },
      {
        id: 'cat-tangra-chinese',
        name: '🥟 Tangra Indo-Chinese & Sweets',
        dishes: [
          ['Steamed Chicken Momos (6 pcs)', 'Juicy Kolkata street style dumplings with fiery red chili dipping chutney.', 140, 170, true, false, 'chinese'],
          ['Chilli Chicken Dry Tangra Style', 'Boneless chicken cubes tossed with dark soy sauce, green chilies, and scallions.', 240, 280, true, false, 'chinese'],
          ['Kolkata Hakka Noodles with Egg & Chicken', 'Wok-tossed noodles with shredded chicken, scrambled eggs, and crunchy vegetables.', 210, 250, false, false, 'chinese'],
          ['Crispy Chilli Paneer Dry', 'Wok-tossed paneer with diced onions, capsicum, garlic, and hot soy glaze.', 200, 240, false, true, 'chinese'],
          ['Veg Fried Rice with Schezwan Sauce', 'Wok-tossed basmati rice with spring onions and garlic.', 170, 205, false, true, 'chinese'],
          ['Baked Rosogolla (2 pcs)', 'Cottage cheese balls baked in thick caramelised rabdi with slivered nuts.', 95, 120, true, true, 'dessert'],
          ['Kolkata Mishti Doi Pot', 'Traditional sweet pink fermented curd set in porous clay pot.', 75, 95, true, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-9',
    name: 'Anjappar Chettinad Restaurant',
    slug: 'anjappar-chettinad',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3150,
    deliveryTime: '25-35 min',
    distance: '2.6 km',
    priceTier: '₹₹',
    costForTwo: 480,
    isPureVeg: false,
    cuisines: ['South Indian', 'Biryani & Pulao', 'North Indian'],
    tag: 'Fiery Chettinad Spices',
    isOpen: true,
    address: 'GST Road, Tambaram Sanatorium, Chennai, Tamil Nadu - 600045',
    description: 'Pioneers of legendary Chettinad non-veg cuisine since 1964. Renowned for stone-ground kalpasi and marathi moggu spices, Seeraga Samba Biryani & Pepper Chicken.',
    categories: [
      {
        id: 'cat-chettinad-gravies',
        name: '🍗 Authentic Chettinad Gravies',
        dishes: [
          ['Anjappar Special Chicken Pepper Masala', 'Tender country chicken braised with black peppercorns, roasted fennel, and curry leaves.', 290, 340, true, false, 'curry'],
          ['Chettinad Mutton Sukka Fry', 'Tender goat cubes dry-roasted in cast iron wok with shallots, garlic, and crushed spices.', 380, 440, true, false, 'curry'],
          ['Country Chicken Gravy (Naatu Kozhi)', 'Free-range desi chicken simmered in rich peppery Chettinad village style gravy.', 340, 395, true, false, 'curry'],
          ['Chettinad Crab Masala (Nandu)', 'Fresh crabs cooked in aromatic coconut, fennel, and coriander leaf sauce.', 390, 460, false, false, 'curry'],
          ['Meen Kuzhambu (Fish Curry in Clay Pot)', 'Seer fish simmered in tangy shallot-tamarind gravy with garlic cloves.', 360, 420, true, false, 'curry'],
          ['Enna Kathirikai Kuzhambu (Eggplant)', 'Baby brinjals stuffed with roasted sesame and peanut paste in tangy gravy.', 190, 230, false, true, 'curry'],
        ]
      },
      {
        id: 'cat-biryani-parotta',
        name: '🥘 Seeraga Samba Biryani & Parottas',
        dishes: [
          ['Chettinad Mutton Biryani (Seeraga Samba)', 'Aromatic tiny seeraga samba rice cooked with tender mutton and whole spices in copper cauldrons.', 390, 450, true, false, 'biryani'],
          ['Chettinad Chicken Biryani', 'Flavorful tiny grain rice infused with country chicken pieces and spicy brinjal salna.', 310, 360, true, false, 'biryani'],
          ['Bun Parotta with Salna (2 pcs)', 'Flaky, buttery, crispy bun-shaped layered parottas served with spicy chicken salna gravy.', 120, 150, true, false, 'bread'],
          ['Egg Kothu Parotta Madurai Style', 'Shredded parotta griddle-chopped with scrambled eggs, onions, and curry leaves.', 160, 195, true, false, 'bread'],
          ['Chicken Kothu Parotta', 'Minced parotta furiously beaten on tawa with spicy boneless chicken and salna.', 210, 250, true, false, 'bread'],
          ['Coin Parotta Basket (4 mini)', 'Miniature round flaky parottas, crisp on outside and soft inside.', 100, 125, false, true, 'bread'],
          ['Kal Dosa with Salna (2 pcs)', 'Thick soft spongy dosas served with spicy Chettinad vegetable or meat gravy.', 90, 115, false, true, 'dosa'],
        ]
      },
      {
        id: 'cat-sides-desserts',
        name: '🍢 Starters & Traditional Beverages',
        dishes: [
          ['Mutton Kola Urundai (4 pcs)', 'Crispy fried minced mutton and lentil meatballs seasoned with roasted fennel.', 220, 260, true, false, 'starter'],
          ['Prawn Pepper Fry (Eral Sukka)', 'Juicy sea prawns tossed with garlic, curry leaves, and coarsely crushed black pepper.', 360, 420, true, false, 'starter'],
          ['Chicken Lollipop Chettinad Toss (5 pcs)', 'Frenched chicken wings batter-fried and tossed in fiery garlic pepper paste.', 260, 305, false, false, 'starter'],
          ['Vazhaipoo Vadai (Banana Blossom 4 pcs)', 'Crisp savory fritters made with cleaned banana flowers and chana dal.', 110, 135, false, true, 'starter'],
          ['Elaneer Payasam (Tender Coconut)', 'Chilled sweet pudding prepared with tender coconut pulp, coconut water, and condensed milk.', 110, 140, true, true, 'dessert'],
          ['Jigarthanda Madurai Special', 'Traditional Madurai drink with badam pisin, nannari syrup, chilled milk, and basundi ice cream.', 95, 120, true, true, 'beverage'],
          ['Spicy Rasam Soup Cup', 'Piping hot tomato, tamarind, and tellicherry pepper broth with roasted garlic.', 50, 65, false, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-10',
    name: 'Chai Point & Kulhad Chai Shai',
    slug: 'chai-point-kulhad-chai',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80',
    rating: 4.7,
    reviewCount: 2800,
    deliveryTime: '15-25 min',
    distance: '1.2 km',
    priceTier: '₹',
    costForTwo: 200,
    isPureVeg: true,
    cuisines: ['Chai & Lassi', 'Chaat & Street Food', 'Rolls & Burgers'],
    tag: 'India\'s Favorite Chai Break',
    isOpen: true,
    address: 'Koramangala 5th Block, 80 Feet Road, Bengaluru, Karnataka - 560095',
    description: 'Hot brewing station delivering India\'s love for freshly crushed Adrak Elaichi Chai, Bun Maska, crisp Punjabi samosas, and savory tea-time snacks.',
    categories: [
      {
        id: 'cat-hot-chai',
        name: '🧋 Freshly Brewed Kulhad Chais',
        dishes: [
          ['Dum Chai Flask (500ml - Serves 4)', 'Full-bodied Assam tea leaves simmered with whole milk and caramelized brown sugar.', 140, 170, true, true, 'chai'],
          ['Adrak Elaichi Kulhad Chai Flask (500ml)', 'Fresh crushed ginger root and green cardamom infused milk tea.', 160, 195, true, true, 'chai'],
          ['Masala Chai Flask with 7 Spices (500ml)', 'Aromatic blend of cinnamon, clove, black pepper, nutmeg, ginger, and cardamom.', 165, 200, true, true, 'chai'],
          ['Kolkata Kadhak Chai Cup', 'Strong highway-dhaba style boiled sweetened tea.', 45, 60, false, true, 'chai'],
          ['Saffron Kesar Royal Chai (Flask 500ml)', 'Premium tea brewed with real Kashmiri saffron strands and dry fruits.', 190, 230, false, true, 'chai'],
          ['Lemon Green Tea with Honey (Cup)', 'Organic whole leaf green tea with fresh lemon squeeze and raw forest honey.', 65, 80, false, true, 'chai'],
        ]
      },
      {
        id: 'cat-bun-maska',
        name: '🥐 Bun Maska, Samosas & Pakodas',
        dishes: [
          ['Irani Bun Maska Butter Jam', 'Pillow soft bakery bun sliced and stuffed with rich salted Amul butter and mixed fruit jam.', 70, 90, true, true, 'snack'],
          ['Bun Omelette Street Style', 'Fluffy 2-egg masala omelette with onions and green chilies tucked inside butter-toasted bun.', 85, 105, true, false, 'snack'],
          ['Punjabi Aloo Samosa (2 pcs)', 'Flaky pastry stuffed with spiced potatoes, green peas, and whole coriander seeds, with mint chutney.', 60, 75, true, true, 'snack'],
          ['Paneer Bread Pakoda (2 pcs)', 'Spiced cottage cheese sandwich slice dipped in seasoned gram flour batter and fried golden.', 80, 100, true, true, 'snack'],
          ['Crispy Onion Pakoda Plate', 'Thinly sliced onions coated in spiced besan and fried until crispy, with chai dip.', 90, 115, false, true, 'snack'],
          ['Corn & Cheese Toasties (2 pcs)', 'Crunchy bread slices loaded with sweet corn, green chilies, and melted cheese.', 110, 135, false, true, 'snack'],
          ['Vada Pav Mumbai Style with Chutneys', 'Spicy batata vada in pav with fried salted green chili and dry garlic podi.', 55, 70, false, true, 'snack'],
        ]
      },
      {
        id: 'cat-chilled-beverages',
        name: '🥤 Iced Teas, Shakes & Sweets',
        dishes: [
          ['Peach & Passionfruit Iced Tea (350ml)', 'Fresh brewed black tea shaken with sweet peach pulp, lemon, and fresh mint.', 110, 135, true, true, 'beverage'],
          ['Cold Coffee with Chocolate Fudge', 'Thick blended creamy coffee with Hershey\'s chocolate drizzle and coffee powder.', 120, 150, true, true, 'beverage'],
          ['Thandai Milkshake with Dry Fruits', 'Traditional spiced milk with crushed almonds, fennel, poppy seeds, and rose petals.', 130, 160, false, true, 'beverage'],
          ['Classic Sweet Lassi Glass', 'Chilled creamy churned yogurt topped with thick malai layer.', 75, 95, false, true, 'beverage'],
          ['Warm Banana Walnut Cake Slice', 'Freshly baked moist tea cake with ripe bananas and roasted walnuts.', 70, 90, false, true, 'dessert'],
          ['Gajar Ka Halwa Warm Cup', 'Traditional Punjabi carrot dessert slow cooked in pure milk and desi ghee.', 85, 105, false, true, 'dessert'],
          ['Chocolate Brownie with Choco Chips', 'Dense fudgy chocolate brownie with dark chocolate chips.', 80, 100, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-11',
    name: 'Naturals Artisanal Indian Ice Cream & Kulfi',
    slug: 'naturals-ice-cream-kulfi',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 3950,
    deliveryTime: '15-25 min',
    distance: '1.4 km',
    priceTier: '₹₹',
    costForTwo: 250,
    isPureVeg: true,
    cuisines: ['Mithai & Desserts', 'Chai & Lassi'],
    tag: '100% Real Fruit Ice Creams',
    isOpen: true,
    address: 'JVPD Scheme, Juhu, Mumbai, Maharashtra - 400049',
    description: 'Iconic pioneer of fresh artisanal Indian ice creams made with only 3 ingredients: pure milk, sugar, and real seasonal fruits. No artificial colors or preservatives.',
    categories: [
      {
        id: 'cat-fruit-specials',
        name: '🍨 Signature Real Fruit Ice Creams',
        dishes: [
          ['Tender Coconut Ice Cream (Tub 500ml)', 'World-famous creamy ice cream loaded with tender coconut malai chunks.', 280, 330, true, true, 'dessert'],
          ['Alphonso Mango Ice Cream (Tub 500ml)', 'Pure Ratnagiri Alphonso mango pulp churned with whole farm milk.', 290, 340, true, true, 'dessert'],
          ['Sitaphal (Custard Apple) Tub (500ml)', 'Fresh de-seeded custard apple pulp in velvety rich milk ice cream.', 310, 360, true, true, 'dessert'],
          ['Roasted Almond Ice Cream Scoop', 'Whole California almonds roasted in ghee and folded into sweet cream.', 85, 105, false, true, 'dessert'],
          ['Chikoo (Sapota) Fresh Fruit Scoop', 'Sweet caramelized Dahanu chikoo pulp blended to perfection.', 75, 95, false, true, 'dessert'],
          ['Kala Jamun Real Fruit Scoop', 'Tangy and sweet Indian black plum fruit ice cream with deep purple hue.', 85, 105, true, true, 'dessert'],
          ['Jackfruit (Kathal) Seasonal Scoop', 'Sweet aromatic tropical jackfruit chunks in rich cream.', 85, 105, false, true, 'dessert'],
        ]
      },
      {
        id: 'cat-kulfi-malai',
        name: '🍡 Traditional Shahi Kulfis',
        dishes: [
          ['Royal Kesar Pista Matka Kulfi', 'Traditional slow-reduced milk kulfi with saffron, pistachios, and almonds set in earthen clay pot.', 95, 120, true, true, 'dessert'],
          ['Malai Rabdi Kulfi Stick', 'Thick layered cream kulfi on stick, flavored with green cardamom.', 75, 90, true, true, 'dessert'],
          ['Gulkand Paan Kulfi Slice', 'Refreshing betel leaf essence with sweet Damask rose petal preserve.', 85, 105, true, true, 'dessert'],
          ['Mango Stuffed Whole Kulfi', 'Whole Alphonso mango deseeded and stuffed with rich rabri kulfi, sliced into wheels.', 160, 195, true, true, 'dessert'],
          ['Anjeer (Fig) Cream Scoop', 'Turkish dried figs stewed and blended into rich dairy cream.', 85, 105, false, true, 'dessert'],
          ['Kaju Draksh (Cashew & Raisin) Scoop', 'Golden raisins and roasted cashew bits folded into sweet base.', 80, 100, false, true, 'dessert'],
          ['Rich Belgian Chocolate Scoop', 'Dark chocolate ice cream loaded with chocolate fudge ribbons.', 90, 110, false, true, 'dessert'],
        ]
      },
      {
        id: 'cat-sundaes-shakes',
        name: '🥤 Thick Shakes & Sundaes',
        dishes: [
          ['Tender Coconut Thick Shake (350ml)', 'Fresh coconut ice cream blended with cold milk and topped with malai.', 140, 170, true, true, 'beverage'],
          ['Alphonso Mango Mastani Shake', 'Pune special mango milkshake topped with scoop of mango ice cream and dry fruits.', 160, 195, true, true, 'beverage'],
          ['Sitaphal Cream Milkshake', 'Decadent thick shake made with custard apple ice cream and cream.', 150, 185, false, true, 'beverage'],
          ['Dry Fruit Nut Sundae', 'Trio of Kesar Pista, Roasted Almond and Fig ice creams topped with honey and nuts.', 180, 220, false, true, 'dessert'],
          ['Hot Chocolate Fudge Sundae', 'Two scoops of vanilla ice cream drenched in warm homemade dark chocolate fudge.', 150, 180, true, true, 'dessert'],
          ['Rose Falooda Sundae Glass', 'Chilled rose milk, basil seeds, vermicelli, and scoop of malai kulfi.', 140, 170, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-12',
    name: 'Mainland China & Wow! Momo Indo-Chinese Express',
    slug: 'mainland-china-wow-momo',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3450,
    deliveryTime: '25-35 min',
    distance: '2.5 km',
    priceTier: '₹₹',
    costForTwo: 500,
    isPureVeg: false,
    cuisines: ['Indo-Chinese', 'Rolls & Burgers', 'Fast Food'],
    tag: 'India\'s Favorite Indo-Chinese',
    isOpen: true,
    address: 'Church Street, Off MG Road, Bengaluru, Karnataka - 560001',
    description: 'The ultimate celebration of Indian-Chinese flavors. Steaming Himalayan Momos, sizzling Hakka noodles, crispy Schezwan wings, and wok-tossed Manchurian.',
    categories: [
      {
        id: 'cat-momos',
        name: '🥟 Famous Steamed & Pan-Fried Momos',
        dishes: [
          ['Steamed Chicken Darjeeling Momos (6 pcs)', 'Thin-skinned dumplings packed with minced juicy chicken, spring onions, and ginger with fiery dip.', 160, 195, true, false, 'momo'],
          ['Crispy Fried Cheese & Corn Momos (6 pcs)', 'Golden crisp fried momos overflowing with melted cheese, corn, and green chilies.', 170, 205, true, true, 'momo'],
          ['Pan-Fried Chicken Schezwan Momos (6 pcs)', 'Pan-seared momos tossed in sizzling garlic Schezwan chili paste with bell peppers.', 180, 220, true, false, 'momo'],
          ['Steamed Veg Himalayan Momos (6 pcs)', 'Stuffed with finely minced cabbage, carrots, beans, and fresh coriander.', 140, 170, false, true, 'momo'],
          ['Tandoori Chicken Momos (6 pcs)', 'Momos marinated in tandoori yogurt spice and roasted over charcoal embers.', 195, 235, true, false, 'momo'],
          ['Momo in Hot Garlic Sauce (Bowl of 6)', 'Fried chicken momos submerged in spicy, tangy red hot garlic gravy.', 210, 250, false, false, 'momo'],
        ]
      },
      {
        id: 'cat-noodles-rice',
        name: '🍜 Wok-Tossed Noodles & Fried Rice',
        dishes: [
          ['Classic Chicken Hakka Noodles', 'Wok-tossed noodles with shredded chicken, eggs, crunchy julienned carrots, and light soy.', 220, 260, true, false, 'chinese'],
          ['Schezwan Egg & Chicken Fried Rice', 'Spicy rice tossed with house-made Sichuan peppercorn sauce, chicken, and eggs.', 230, 275, true, false, 'chinese'],
          ['Veg Chilli Garlic Hakka Noodles', 'Smoky noodles infused with burnt garlic, green chilies, and colorful bell peppers.', 190, 230, true, true, 'chinese'],
          ['Triple Schezwan Rice Bowl with Gravy', 'Combination of fried rice, noodles, crispy fried noodles, and spicy Schezwan chicken gravy.', 280, 330, true, false, 'chinese'],
          ['Singapore Rice with Cashews', 'Fragrant curry-powder scented fried rice with pineapple bits, vegetables, and cashews.', 210, 250, false, true, 'chinese'],
          ['Pan-Fried Cantonese Noodles', 'Crispy noodle bed topped with thick chicken and vegetable white wine gravy.', 260, 310, false, false, 'chinese'],
          ['Veg Burnt Garlic Fried Rice', 'Aromatic rice with loads of golden toasted garlic flakes and spring onions.', 180, 215, false, true, 'chinese'],
        ]
      },
      {
        id: 'cat-manchurian-sides',
        name: '🍗 Appetizers & Manchurian Gravies',
        dishes: [
          ['Chilli Chicken Dry Indo-Chinese Style', 'Crispy boneless chicken tossed with diced capsicum, onions, dark soy, and green chilies.', 260, 310, true, false, 'starter'],
          ['Crispy Honey Chilli Potatoes', 'Double-fried potato fingers glazed with spicy chili paste, honey, and toasted sesame seeds.', 180, 215, true, true, 'starter'],
          ['Veg Manchurian Gravy Bowl', 'Minced vegetable balls simmered in savory garlic, ginger, and soy sauce gravy.', 210, 250, true, true, 'curry'],
          ['Drums of Heaven (6 pcs)', 'Chicken lollipop wings tossed in sweet and fiery Cantonese sauce.', 280, 330, true, false, 'starter'],
          ['Chilli Paneer Dry', 'Crisp paneer cubes wok-tossed with red and green bell peppers and hot chili sauce.', 230, 270, false, true, 'starter'],
          ['Sweet Corn Chicken Soup', 'Silky velvety soup with creamed sweet corn, shredded chicken, and egg drops.', 130, 160, false, false, 'soup'],
          ['Manchow Soup with Crispy Noodles', 'Fiery dark soup flavored with garlic, cilantro, and served with fried noodles.', 120, 150, true, true, 'soup'],
        ]
      }
    ]
  },
  {
    id: 'rest-13',
    name: 'Vidyarthi Bhavan Traditional Tiffin',
    slug: 'vidyarthi-bhavan-tiffin',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 4500,
    deliveryTime: '20-30 min',
    distance: '1.9 km',
    priceTier: '₹',
    costForTwo: 220,
    isPureVeg: true,
    cuisines: ['South Indian', 'Chai & Lassi'],
    tag: '1943 Bengaluru Heritage',
    isOpen: true,
    address: 'Gandhi Bazaar Main Road, Basavanagudi, Bengaluru, Karnataka - 560004',
    description: 'Operating since 1943. Legendary for thick, golden, buttery crisp Benne Dosas roasted over cast-iron pans, flavorful potato palya, and thick coconut chutney.',
    categories: [
      {
        id: 'cat-benne-dosas',
        name: '🧈 Iconic Heritage Benne Dosas',
        dishes: [
          ['Vidyarthi Bhavan Special Benne Masala Dosa', 'Thick, fluffy, crunchy golden dosa roasted in pure butter, stuffed with fragrant potato palya.', 120, 150, true, true, 'dosa'],
          ['Crispy Plain Benne Dosa', 'Butter-roasted crispy golden dosa served with rich green chili coconut chutney.', 100, 125, true, true, 'dosa'],
          ['Sāgu Masala Dosa', 'Traditional Bengaluru dosa spread with spiced vegetable kurma (sāgu) and potato filling.', 130, 160, true, true, 'dosa'],
          ['Onion Rava Dosa Crispy', 'Lacy semolina crepe with chopped shallots, cumin, ginger, and curry leaves.', 135, 165, false, true, 'dosa'],
          ['Open Butter Masala Dosa', 'Dosa served flat open with melted butter pool, spicy chutney powder, and potato mash.', 140, 170, false, true, 'dosa'],
          ['Set Dosa Trio (3 pcs)', 'Three small cloud-soft spongy dosas served with creamy vegetable sāgu and chutney.', 110, 135, true, true, 'dosa'],
          ['Ghee Podi Dosa', 'Crunchy dosa dusted with roasted lentil gunpowder and topped with ghee.', 130, 160, false, true, 'dosa'],
        ]
      },
      {
        id: 'cat-heritage-tiffin',
        name: '🥞 Karnataka Tiffin Specials',
        dishes: [
          ['Steamed Thatte Idli with Ghee Podi (2 pcs)', 'Plate-sized soft steamed idlis drizzled with piping hot ghee and spicy chutney podi.', 90, 115, true, true, 'idli'],
          ['Crispy Uddina Vada (2 pcs)', 'Deep-fried golden black gram lentil doughnuts with pepper and coconut chunks.', 70, 90, true, true, 'vada'],
          ['Khara Bath (Spicy Upma)', 'Coarse semolina cooked with tomatoes, peas, mustard seeds, and bisi bele bath spices.', 75, 95, false, true, 'breakfast'],
          ['Kesari Bath (Saffron Halwa)', 'Semolina dessert enriched with pure ghee, sugar, cashews, and saffron.', 70, 90, true, true, 'dessert'],
          ['Chow Chow Bath (Combo of Khara & Kesari)', 'Classic Bangalore morning pair: one scoop of savory Khara Bath and one scoop of sweet Kesari Bath.', 130, 160, true, true, 'combo'],
          ['Poori Sagu Plate (3 pcs)', 'Puffy wheat pooris served with coconut and vegetable spiced kurma.', 100, 125, false, true, 'breakfast'],
          ['Curd Vada (2 pcs)', 'Crisp vadas soaked in thick chilled yogurt seasoned with mustard, ginger, and boondi.', 90, 115, false, true, 'vada'],
        ]
      },
      {
        id: 'cat-drinks-sweets',
        name: '☕ Filter Kaapi & Traditional Snacks',
        dishes: [
          ['Bangalore Filter Coffee in Davarah', 'Piping hot strong chicory decoction with frothy fresh cow milk.', 40, 50, true, true, 'beverage'],
          ['Maddur Vada (2 pcs)', 'Crispy onion, semolina, and rice flour fritters from the town of Maddur.', 60, 75, true, true, 'snack'],
          ['Congress Kadlekai (Spiced Peanuts 150g)', 'Split roasted peanuts tossed with red chili powder, turmeric, and asafoetida.', 50, 65, false, true, 'snack'],
          ['Masala Buttermilk with Ginger & Coriander', 'Refreshing churned spiced buttermilk.', 35, 45, false, true, 'beverage'],
          ['Mysore Pak Pure Ghee (100g)', 'Crumbly gram flour and ghee fudge.', 80, 100, false, true, 'dessert'],
          ['Holige (Puran Poli 2 pcs)', 'Sweet flatbread filled with cooked chana dal, jaggery, cardamom, and ghee.', 80, 100, true, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-14',
    name: 'Punjab Grill & Pind Balluchi Royal Dhaba',
    slug: 'punjab-grill-pind-balluchi',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3350,
    deliveryTime: '30-40 min',
    distance: '3.2 km',
    priceTier: '₹₹₹',
    costForTwo: 600,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Chai & Lassi'],
    tag: 'Grand Punjabi Feast',
    isOpen: true,
    address: 'Mall of India, Sector 18, Noida, Uttar Pradesh - 201301',
    description: 'Immerse in the grand flavors of Punjab. Golden Tandoori Murgh, buttery Dal Makhani, Amritsari Chana Kulche, Sarson Da Saag & hand-churned Patiala Lassi.',
    categories: [
      {
        id: 'cat-punjabi-curries',
        name: '🥘 Hearty Punjabi Curries',
        dishes: [
          ['Murgh Makhani Highway Style', 'Tandoori chicken pieces cooked in thick tomato, cashew, and desi butter gravy.', 360, 420, true, false, 'curry'],
          ['Amritsari Pindi Chana', 'Chickpeas simmered with dried pomegranate seeds, tea leaf decoction, and carom seeds.', 240, 280, true, true, 'curry'],
          ['Sarson Ka Saag with Makki Di Roti Combo', 'Pureed winter mustard greens cooked in desi ghee, served with 2 maize flatbreads and white butter.', 290, 340, true, true, 'combo'],
          ['Kadhai Murgh Dhaba Style', 'Chicken bone-in cooked with crushed coriander seeds, bell peppers, and whole dried red chilies.', 340, 395, false, false, 'curry'],
          ['Paneer Lababdar Shahi', 'Soft paneer in rich tomato-onion masala laced with grated paneer and kasuri methi.', 280, 325, true, true, 'curry'],
          ['Mutton Rara Punjabi Special', 'Succulent mutton pieces braised in spicy minced mutton keema gravy.', 450, 520, true, false, 'curry'],
          ['Dal Tadka Double Ghee Fry', 'Yellow arhar lentils tempered twice with garlic, cumin, and whole dry red chilies.', 210, 250, false, true, 'curry'],
        ]
      },
      {
        id: 'cat-dhaba-tandoor',
        name: '🍗 Clay Oven Dhaba Tandoor',
        dishes: [
          ['Amritsari Machhi Tikka (Fish)', 'River sole fish marinated in carom seeds, gram flour, and mustard oil, roasted in tandoor.', 410, 480, true, false, 'starter'],
          ['Murgh Malai Tikka (6 pcs)', 'Creamy chicken skewers marinated in cheese, yogurt, cardamom, and fresh coriander.', 320, 370, true, false, 'starter'],
          ['Tandoori Kukkad (Half Bird)', 'Traditional bone-in chicken marinated in spicy red tandoori masala and lemon juice.', 290, 340, true, false, 'starter'],
          ['Dhabe Da Paneer Tikka (6 pcs)', 'Thick paneer cubes marinated in pickle masala and hung curd, roasted crisp.', 260, 305, false, true, 'starter'],
          ['Mutton Seekh Gilafi Kebab (4 pcs)', 'Minced lamb skewers coated with diced tricolor bell peppers and onions.', 380, 440, false, false, 'starter'],
          ['Tandoori Bharwan Aloo (4 pcs)', 'Hollowed potatoes stuffed with dry fruits, paneer, and spices, baked in tandoor.', 220, 260, false, true, 'starter'],
          ['Crispy Soya Malai Chaap', 'Soya chaap cooked in rich cream, cashew paste, and butter.', 240, 280, false, true, 'starter'],
        ]
      },
      {
        id: 'cat-breads-desserts',
        name: '🫓 Naans, Lassi & Desserts',
        dishes: [
          ['Amritsari Aloo Pyaaz Kulcha with Butter', 'Stuffed tandoori bread with spiced potatoes, onions, and crushed coriander.', 110, 135, true, true, 'bread'],
          ['Garlic Butter Naan', 'Leavened flatbread brushed with garlic and butter.', 80, 95, true, true, 'bread'],
          ['Lachha Paratha Whole Wheat', 'Multi-layered flaky whole wheat bread baked in tandoor.', 65, 80, false, true, 'bread'],
          ['Jeera Saffron Pulao', 'Basmati rice cooked with royal cumin, saffron, and ghee.', 160, 190, false, true, 'rice'],
          ['Patiala Lassi (500ml Heavy Malai Glass)', 'Traditional thick sweet churned yogurt drink topped with a layer of cream and pistachios.', 95, 120, true, true, 'beverage'],
          ['Gulab Jamun with Rabri', 'Warm khoya dumplings smothered in chilled thick rabri.', 110, 135, true, true, 'dessert'],
          ['Kulfi Falooda Royal Platter', 'Pista kulfi slices topped with sweetened falooda noodles, rose syrup, and rabdi.', 140, 170, true, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-15',
    name: 'Dindigul Thalappakatti Biryani Hotel',
    slug: 'dindigul-thalappakatti-biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3800,
    deliveryTime: '25-35 min',
    distance: '2.3 km',
    priceTier: '₹₹',
    costForTwo: 480,
    isPureVeg: false,
    cuisines: ['South Indian', 'Biryani & Pulao'],
    tag: '1957 Seeraga Samba Icon',
    isOpen: true,
    address: 'Kumaran Road, Near Railway Station, Tiruppur, Tamil Nadu - 641601',
    description: 'Since 1957. Renowned worldwide for proprietary Kannivadi tender grass-fed goat meat, fragrant Seeraga Samba short-grain rice, and traditional firewood dum preparation.',
    categories: [
      {
        id: 'cat-thalappakatti-biryani',
        name: '🍚 Thalappakatti Seeraga Samba Biryani',
        dishes: [
          ['Thalappakatti Mutton Biryani Special', 'Authentic Dindigul style small-grain Seeraga Samba rice with tender Kannivadi meat, served with Dalcha & Raita.', 395, 460, true, false, 'biryani'],
          ['Thalappakatti Chicken Biryani', 'Short-grain samba rice slow-cooked with fresh bone-in chicken and secret masala blend.', 310, 360, true, false, 'biryani'],
          ['Thalappakatti Egg Biryani', 'Flavorful samba biryani rice paired with 2 golden fried eggs and spicy dalcha gravy.', 230, 270, false, false, 'biryani'],
          ['Thalappakatti Paneer Biryani', 'Seeraga samba rice cooked with tender spiced paneer cubes in authentic Thalappakatti masala.', 260, 305, true, true, 'biryani'],
          ['Kuska Rice (Plain Biryani Rice)', 'Rich seeraga samba biryani rice cooked in fragrant broth without meat pieces.', 180, 215, false, true, 'biryani'],
          ['Thalappakatti Boneless Chicken Biryani', 'Juicy marinated boneless chicken cuts tossed with seeraga samba rice.', 330, 385, true, false, 'biryani'],
        ]
      },
      {
        id: 'cat-thalappakatti-starters',
        name: '🍗 Authentic Kongu & Dindigul Starters',
        dishes: [
          ['Thalappakatti Mutton Kola Urundai (4 pcs)', 'Signature crispy minced mutton balls seasoned with stone-ground roasted spices.', 230, 270, true, false, 'starter'],
          ['Black Pepper Chicken Dry', 'Country chicken cooked in fresh coarsely crushed tellicherry pepper and curry leaves.', 270, 320, true, false, 'starter'],
          ['Chicken Chukka Varuval', 'Spicy dry-fried chicken with shallots, red chilies, and cold-pressed gingelly oil.', 260, 305, true, false, 'starter'],
          ['Mutton Sukka Varuval', 'Tender goat cubes pan-roasted in iron skillet with caramelized pearl onions.', 380, 440, true, false, 'starter'],
          ['Chicken 65 Dindigul Style', 'Crisp boneless chicken bites with spicy South Indian tempering.', 240, 280, false, false, 'starter'],
          ['Prawn Pepper Masala Dry', 'Fresh coastal prawns tossed with garlic, fennel, and crushed black pepper.', 360, 420, false, false, 'starter'],
          ['Chilli Paneer South Style', 'Crisp paneer cubes tossed with onions, green chilies, and curry leaf aroma.', 210, 250, false, true, 'starter'],
        ]
      },
      {
        id: 'cat-gravies-parotta',
        name: '🥘 Dindigul Gravies, Parotta & Drinks',
        dishes: [
          ['Thalappakatti Chicken Gravy', 'Rich rustic chicken curry made with fresh ground coriander and coconut paste.', 290, 340, true, false, 'curry'],
          ['Chettinad Mutton Curry', 'Traditional spicy mutton gravy with shallots and curry leaves.', 390, 450, true, false, 'curry'],
          ['Enna Kathirikai Gravy (Baby Eggplant)', 'Baby eggplants simmered in tangy shallot-tamarind gravy.', 190, 230, false, true, 'curry'],
          ['Kerala Malabar Parotta (2 pcs)', 'Multi-layered flaky flatbread made with refined flour and griddled with oil.', 70, 90, true, true, 'bread'],
          ['Egg Kothu Parotta', 'Shredded parotta griddled with egg, onions, and spicy salna.', 150, 185, true, false, 'bread'],
          ['Jigarthanda Cooler', 'Famous cold beverage with almond gum, nannari syrup, and ice cream.', 90, 115, true, true, 'beverage'],
          ['Gulab Jamun (2 pcs)', 'Classic sweet khoya dumplings soaked in saffron syrup.', 70, 85, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-16',
    name: 'Shree Thaker Bhojanalay Royal Gujarati Thali',
    slug: 'shree-thaker-bhojanalay',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 3700,
    deliveryTime: '25-35 min',
    distance: '2.7 km',
    priceTier: '₹₹',
    costForTwo: 500,
    isPureVeg: true,
    cuisines: ['South Indian', 'North Indian', 'Chaat & Street Food'],
    tag: '1945 Royal Gujarati Feast',
    isOpen: true,
    address: 'Kalbadevi Road, Marine Lines, Mumbai, Maharashtra - 400002',
    description: 'Operating since 1945. Renowned as Mumbai\'s best traditional Gujarati & Kathiyawadi feast with melting Puris, Undhiyu, Dhokla, sweet Kadhi, and Aamras.',
    categories: [
      {
        id: 'cat-thali-specials',
        name: '👑 Royal Gujarati Thali & Curries',
        dishes: [
          ['Maharaja Gujarati Thali Box', 'Grand feast: Undhiyu, Sweet Gujarati Kadhi, Dal, Paneer Shak, 4 Phulkas, Dhokla, Khichdi, and Shrikhand.', 340, 395, true, true, 'thali'],
          ['Authentic Surti Undhiyu Pot', 'Winter specialty made with green beans, baby eggplants, purple yam, and fenugreek muthiyas.', 240, 280, true, true, 'curry'],
          ['Gujarati Sweet & Sour Kadhi', 'Tangy and sweet tempered yogurt soup with ginger, green chilies, and cinnamon.', 160, 190, true, true, 'curry'],
          ['Sev Tameta Nu Shaak', 'Tangy tomato curry topped with crunchy spicy ratlami sev and fresh cilantro.', 180, 215, true, true, 'curry'],
          ['Kaju Curry Kathiyawadi', 'Roasted whole cashews simmered in rich spicy tomato and onion gravy.', 260, 305, false, true, 'curry'],
          ['Ringna No Olo (Kathiyawadi Baingan Bharta)', 'Smoked mashed eggplant cooked with garlic, spring onions, and green chilies.', 200, 240, false, true, 'curry'],
        ]
      },
      {
        id: 'cat-farsan',
        name: '🥟 Authentic Gujarati Farsan & Breads',
        dishes: [
          ['Khaman Dhokla with Green Chutney (4 pcs)', 'Spongy steamed gram flour cakes tempered with mustard seeds and green chilies.', 90, 115, true, true, 'snack'],
          ['Khandvi Rolls with Coconut Tempering (6 pcs)', 'Silky smooth rolled gram flour rolls tempered with sesame and mustard seeds.', 100, 125, true, true, 'snack'],
          ['Methi Na Thepla (4 pcs with Pickle)', 'Whole wheat flatbread kneaded with fresh fenugreek leaves, spices, and sesame.', 80, 100, true, true, 'bread'],
          ['Puri Basket (5 pcs)', 'Hot puffed whole wheat pooris fried golden.', 60, 75, false, true, 'bread'],
          ['Bajra No Rotlo with Desi Butter (2 pcs)', 'Rustic pearl millet flatbread served with fresh white butter and jaggery.', 90, 115, true, true, 'bread'],
          ['Lilva Kachori (4 pcs)', 'Crisp flaky pastry stuffed with fresh spiced green pigeon peas.', 110, 135, false, true, 'snack'],
          ['Fafda with Papaya Sambharo & Fried Chilies', 'Crispy chickpea flour strips served with spicy raw papaya salad.', 100, 125, true, true, 'snack'],
        ]
      },
      {
        id: 'cat-rice-sweets',
        name: '🍯 Khichdi, Sweets & Chaas',
        dishes: [
          ['Vaghareli Khichdi with Ghee', 'Comforting rice and yellow moong dal tempered with garlic, cloves, and ghee.', 150, 180, true, true, 'rice'],
          ['Royal Alphonso Aamras Cup (Seasonal)', 'Pure thick sweet pulp of hand-squeezed Ratnagiri Alphonso mangoes.', 130, 160, true, true, 'dessert'],
          ['Kesar Elaichi Shrikhand (200g)', 'Thick strained sweet yogurt infused with saffron strands and green cardamom.', 110, 135, true, true, 'dessert'],
          ['Jalebi with Rabdi Combo', 'Crisp saffron jalebis served with chilled thickened milk rabdi.', 120, 150, true, true, 'dessert'],
          ['Mohanthal Sweet Cuts (150g)', 'Traditional roasted gram flour fudge with ghee, mawa, and nuts.', 120, 150, false, true, 'dessert'],
          ['Kathiyawadi Masala Chaas (Spiced Buttermilk)', 'Chilled churned buttermilk with roasted cumin, mint, and rock salt.', 40, 50, true, true, 'beverage'],
          ['Sweet Gulab Jamun (2 pcs)', 'Spongy khoya balls in sugar syrup.', 65, 80, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-17',
    name: 'Chote Nawab Awadhi Kebab House',
    slug: 'chote-nawab-awadhi-kebab',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 2900,
    deliveryTime: '25-35 min',
    distance: '2.9 km',
    priceTier: '₹₹',
    costForTwo: 520,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Rolls & Burgers'],
    tag: 'Authentic Lucknowi Heritage',
    isOpen: true,
    address: 'Hazratganj, Near Mayfair Cinema, Lucknow, Uttar Pradesh - 226001',
    description: 'Masters of ancient Awadhi dum cooking. Renowned for royal Kakori kebabs that melt in your mouth, slow-cooked Mutton Nihari, and scented Lucknowi Pulao.',
    categories: [
      {
        id: 'cat-kebabs',
        name: '🍢 Royal Awadhi Melt-in-Mouth Kebabs',
        dishes: [
          ['Original Kakori Mutton Kebab (4 pcs)', 'The softest kebab in the world, marinated in raw papaya, rose petals, and 24 secret spices.', 380, 440, true, false, 'kebab'],
          ['Shami Kebab Awadhi (4 pcs)', 'Minced lamb patties boiled with Bengal gram and pounded with whole garam masala.', 320, 370, true, false, 'kebab'],
          ['Murgh Boti Kebab (6 pcs)', 'Boneless chicken cubes marinated in saffron, curd, and roasted garlic, char-grilled.', 290, 340, true, false, 'kebab'],
          ['Galouti Kebab with Ulte Tawe Ka Paratha (Combo)', 'Two melt-in-mouth mutton galouti kebabs served over sweet saffron flatbread.', 340, 395, true, false, 'combo'],
          ['Murgh Tangdi Kebab (3 pcs)', 'Chicken drumsticks stuffed with spiced minced meat and grilled over glowing charcoal.', 330, 380, false, false, 'kebab'],
          ['Paneer Tikka Dastarkhwan (6 pcs)', 'Cottage cheese marinated in yellow chili, mustard oil, and hung curd.', 260, 300, false, true, 'kebab'],
          ['Dahi Kebab Lucknowi (4 pcs)', 'Hung curd patties with roasted coriander and green chilies, shallow fried.', 230, 270, false, true, 'kebab'],
        ]
      },
      {
        id: 'cat-gravies-pulao',
        name: '🥘 Nawabi Curries & Dum Pulao',
        dishes: [
          ['Awadhi Gosht Korma', 'Tender lamb cuts simmered in velvety browned onion and yogurt gravy.', 410, 480, true, false, 'curry'],
          ['Nihari Gosht Special', 'Overnight simmered mutton stew infused with ginger, mace, and long pepper.', 430, 500, true, false, 'curry'],
          ['Murgh Korma Shahjahani', 'Chicken cooked in rich almond-cashew paste and saffron milk.', 350, 410, true, false, 'curry'],
          ['Paneer Korma Nawab', 'Cottage cheese cubes in a fragrant, creamy mild Lucknowi gravy.', 270, 315, false, true, 'curry'],
          ['Awadhi Chicken Dum Biryani', 'Long-grain basmati cooked with chicken in sealed handi with ittar and saffron.', 330, 385, true, false, 'biryani'],
          ['Mutton Yakhni Pulao', 'Aromatic rice cooked in clarified mutton bone broth with whole spices.', 390, 460, true, false, 'biryani'],
          ['Dal Sultani', 'Arhar dal tempered with milk, cream, and smoked with clove on glowing charcoal.', 220, 260, false, true, 'curry'],
        ]
      },
      {
        id: 'cat-breads-desserts',
        name: '🫓 Breads & Royal Desserts',
        dishes: [
          ['Ulte Tawe Ka Paratha (2 pcs)', 'Soft, flaky sweetish flatbread cooked over an inverted curved griddle with ghee.', 90, 115, true, true, 'bread'],
          ['Sheermal Lucknowi (Saffron Bread)', 'Traditional milk and saffron baked flatbread.', 85, 105, true, true, 'bread'],
          ['Mughlai Roomali Roti (2 pcs)', 'Thin handkerchief flatbread.', 60, 75, false, true, 'bread'],
          ['Garlic Naan (2 pcs)', 'Tandoor leavened flatbread brushed with garlic butter.', 80, 100, false, true, 'bread'],
          ['Shahi Tukda with Rabdi', 'Ghee-fried bread soaked in cardamom syrup and blanketed in thick creamy rabdi.', 120, 150, true, true, 'dessert'],
          ['Matka Kheer Lucknowi', 'Slow-reduced rice pudding with saffron, cardamom, and silver vark.', 95, 120, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-18',
    name: 'Gokul Sweets & Ganguram Kolkata Confectionery',
    slug: 'gokul-sweets-ganguram',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 3850,
    deliveryTime: '20-30 min',
    distance: '1.7 km',
    priceTier: '₹₹',
    costForTwo: 300,
    isPureVeg: true,
    cuisines: ['Mithai & Desserts', 'Chaat & Street Food'],
    tag: '1892 Bengal Sweet Heritage',
    isOpen: true,
    address: 'Bowbazar, Near Central Metro, Kolkata, West Bengal - 700012',
    description: '130+ years of Bengali artisanal sweet-making excellence. World-famous sponge Rosogollas, Nolen Gur Sandesh, Mishti Doi, and savory Club Kachoris.',
    categories: [
      {
        id: 'cat-chhena-sweets',
        name: '🍯 Iconic Bengali Chhena Sweets',
        dishes: [
          ['Original Kolkata Sponge Rosogolla (4 pcs)', 'Classic melt-in-mouth cottage cheese balls cooked in light sugar syrup.', 100, 125, true, true, 'sweet'],
          ['Baked Rosogolla Delight (4 pcs)', 'Rosogollas layered with thick rabri and caramelised in clay oven.', 160, 195, true, true, 'sweet'],
          ['Nolen Gur Sondesh (Date Palm Jaggery 4 pcs)', 'Handcrafted winter sandesh flavored with pure aromatic seasonal date palm jaggery.', 140, 175, true, true, 'sweet'],
          ['Kesar Rasmalai Royal (2 pcs)', 'Spongy chhena discs immersed in saffron and pistachio infused thickened milk.', 110, 135, true, true, 'sweet'],
          ['Kacha Golla Soft Sandesh (4 pcs)', 'Fresh soft cottage cheese sweet delicately perfumed with green cardamom.', 120, 150, false, true, 'sweet'],
          ['Malai Cham Cham (2 pcs)', 'Cottage cheese rolls stuffed with sweet mawa and coated with coconut flakes.', 90, 115, false, true, 'sweet'],
          ['Chocolate Sandesh Fusion (4 pcs)', 'Decadent fusion of Bengali chhena and rich dark chocolate.', 130, 160, false, true, 'sweet'],
        ]
      },
      {
        id: 'cat-mishti-doi',
        name: '🍨 Mishti Doi & Festive Delights',
        dishes: [
          ['Classic Kolkata Mishti Doi (Earthen Handi 400g)', 'Traditional caramelized sweet pink yogurt set in natural porous clay pot.', 140, 175, true, true, 'dessert'],
          ['Nolen Gur Mishti Doi (Handi 400g)', 'Set curd prepared with wild date palm jaggery with deep smoky sweet flavor.', 160, 195, true, true, 'dessert'],
          ['Rajbhog Saffron Giant Rosogolla (2 pcs)', 'Large saffron-infused rosogollas stuffed with almond and pistachio bits.', 90, 115, true, true, 'sweet'],
          ['Kaju Barfi (250g Box)', 'Diamond cashew fudge topped with pure silver vark.', 270, 320, false, true, 'sweet'],
          ['Motichoor Ladoo in Pure Desi Ghee (250g)', 'Tiny pearls of gram flour fried in ghee and soaked in cardamom syrup.', 170, 205, false, true, 'sweet'],
          ['Chhena Poda (Odia Baked Cheese Cake 250g)', 'Slow-caramelized baked cheese dessert with cardamom and roasted cashews.', 180, 220, true, true, 'sweet'],
          ['Kesar Peda Mathura Style (250g)', 'Rich condensed milk pedas flavored with saffron and cardamom.', 180, 215, false, true, 'sweet'],
        ]
      },
      {
        id: 'cat-bengali-snacks',
        name: '🥟 Savory Kachoris & Street Bites',
        dishes: [
          ['Kolkata Club Kachori with Hing Aloo Sabzi (4 pcs)', 'Crisp mini urad dal puris served with spicy asafoetida potato curry.', 110, 135, true, true, 'snack'],
          ['Radhaballabhi with Cholar Dal (2 pcs)', 'Soft puris stuffed with spiced lentil paste, served with sweet-savory Bengal gram curry.', 120, 150, true, true, 'snack'],
          ['Singara (Kolkata Samosa with Cauliflower & Peanuts 2 pcs)', 'Flaky pastry filled with spiced potatoes, cauliflower florets, and roasted peanuts.', 60, 75, true, true, 'snack'],
          ['Dal Kachori with Sweet Tamarind Chutney (2 pcs)', 'Crusty puffed pastries stuffed with spiced moong dal.', 65, 80, false, true, 'snack'],
          ['Nimki Namkeen Crisps (250g Pack)', 'Crisp savory diamond-shaped pastry spiced with nigella kalonji seeds.', 85, 105, false, true, 'snack'],
          ['Masala Chai Glass', 'Spiced boiled tea with ginger and cardamom.', 35, 45, false, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-19',
    name: 'Junior Kuppanna Kongu Nadu Cuisine',
    slug: 'junior-kuppanna-kongu-nadu',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3300,
    deliveryTime: '25-35 min',
    distance: '2.1 km',
    priceTier: '₹₹',
    costForTwo: 460,
    isPureVeg: false,
    cuisines: ['South Indian', 'Biryani & Pulao'],
    tag: 'Kongu Nadu Tiruppur Legend',
    isOpen: true,
    address: 'Avinashi Road, Near Pushpa Theatre, Tiruppur, Tamil Nadu - 641602',
    description: 'Iconic Kongu Nadu non-veg culinary house since 1960. Celebrated for native shallot-rich Pallipalayam Chicken, Kongu Mutton Chukka, and Seeraga Samba Biryani.',
    categories: [
      {
        id: 'cat-kongu-specialties',
        name: '🍗 Authentic Kongu Nadu Specialties',
        dishes: [
          ['Original Pallipalayam Chicken Dry', 'Iconic dish cooked without oil or water using whole dried red chilies, shallots, and fresh coconut slivers.', 280, 330, true, false, 'starter'],
          ['Kongu Mutton Chukka Varuval', 'Tender goat cubes pan-roasted in iron wok with pounded Kongu spices and curry leaves.', 380, 440, true, false, 'curry'],
          ['Pichu Potta Kozhi (Shredded Chicken)', 'Tender shredded chicken tossed with black pepper, eggs, and caramelized onions.', 270, 315, true, false, 'starter'],
          ['Madurai Mutton Kola Urundai (4 pcs)', 'Crisp minced meat and roasted gram meatballs with whole spices.', 230, 270, true, false, 'starter'],
          ['Kuppanna Special Chicken Fry', 'Bone-in chicken marinated with rustic village spices and deep fried crisp.', 260, 305, false, false, 'starter'],
          ['Nethili Meen Varuval (Crispy Anchovies)', 'Crispy pan-fried anchovy fish coated in spicy red masala.', 240, 280, false, false, 'starter'],
          ['Kongu Mutton Brain Pepper Fry', 'Fresh mutton brain pan-fried with caramelized onions, curry leaves, and black pepper.', 290, 340, true, false, 'starter'],
        ]
      },
      {
        id: 'cat-biryani-meals',
        name: '🍚 Seeraga Samba Biryani & Meals',
        dishes: [
          ['Kuppanna Special Mutton Biryani', 'Traditional Seeraga Samba rice cooked with tender mutton in authentic Kongu spices with brinjal salna.', 390, 450, true, false, 'biryani'],
          ['Kongu Chicken Biryani', 'Small-grain aromatic samba rice cooked with chicken cuts and village spices.', 310, 360, true, false, 'biryani'],
          ['Non-Veg Executive Meals (Thali)', 'Full feast: Steamed rice, chicken gravy, mutton gravy, fish gravy, rasam, kootu, poriyal & curd.', 260, 310, true, false, 'thali'],
          ['Kongu Nattu Kozhi Biryani (Country Chicken)', 'Free-range country chicken cooked with aromatic seeraga samba rice.', 350, 410, false, false, 'biryani'],
          ['Egg Biryani Samba', 'Seeraga samba biryani rice served with 2 eggs and spicy salna.', 220, 260, false, false, 'biryani'],
          ['Plain Kuska Rice', 'Aromatic seeraga samba biryani rice cooked in rich bone broth.', 175, 210, false, true, 'rice'],
        ]
      },
      {
        id: 'cat-gravies-parottas',
        name: '🥘 Village Gravies & Flaky Parottas',
        dishes: [
          ['Country Chicken Pepper Gravy (Naatu Kozhi)', 'Free-range desi chicken in spicy black pepper and shallot gravy.', 340, 395, true, false, 'curry'],
          ['Kongu Mutton Curry', 'Rich rustic mutton gravy cooked with freshly ground coriander and red chilies.', 390, 450, true, false, 'curry'],
          ['Meen Kuzhambu (Fish Curry)', 'Fresh river/sea fish cooked in tangy tamarind and shallot sauce.', 320, 370, false, false, 'curry'],
          ['Malabar Flaky Parotta (2 pcs)', 'Layered golden parotta griddled with butter.', 70, 90, true, true, 'bread'],
          ['Egg Ceylon Parotta', 'Layered parotta stuffed with spiced scrambled eggs and minced onions.', 130, 160, true, false, 'bread'],
          ['Chicken Kothu Parotta', 'Minced flaky parotta shredded on tawa with chicken and salna.', 195, 235, true, false, 'bread'],
          ['Elaneer Payasam (Tender Coconut Dessert)', 'Tender coconut pulp simmered in sweet milk with cardamom.', 110, 135, true, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-20',
    name: 'Tunday Kababi 1905 Heritage',
    slug: 'tunday-kababi-heritage',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 4200,
    deliveryTime: '25-35 min',
    distance: '3.0 km',
    priceTier: '₹₹',
    costForTwo: 450,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao', 'Rolls & Burgers'],
    tag: '1905 Aminabad Legend',
    isOpen: true,
    address: 'Aminabad Market, Near Naaz Cinema, Lucknow, Uttar Pradesh - 226018',
    description: '120 years of Nawabi legacy. Founded in 1905 by Haji Murad Ali, creator of the world-famous melt-in-mouth Galouti Kebab seasoned with 160 secret medicinal herbs.',
    categories: [
      {
        id: 'cat-legendary-kebabs',
        name: '🍢 Original 1905 Tunday Kebabs',
        dishes: [
          ['Original Tunday Mutton Galouti Kebab (4 pcs)', 'Legendary melt-in-mouth kebab made with 160 secret spices, pan-fried on cast-iron tawa.', 360, 420, true, false, 'kebab'],
          ['Tunday Buff Galouti Kebab (4 pcs)', 'The original authentic 1905 preparation served with lime and mint onions.', 280, 330, true, false, 'kebab'],
          ['Murgh Seekh Kebab (4 pcs)', 'Tender spiced minced chicken skewers char-grilled in tandoor.', 290, 340, true, false, 'kebab'],
          ['Mutton Boti Kebab (6 pcs)', 'Tender boneless mutton cubes marinated in spiced curd and pan-roasted.', 370, 430, true, false, 'kebab'],
          ['Chicken Shami Kebab (4 pcs)', 'Pan-seared spiced chicken patties with lentil and mint.', 260, 305, false, false, 'kebab'],
          ['Paneer Tikka Tunday Style (6 pcs)', 'Cottage cheese marinated in royal Lucknowi yellow chili paste.', 250, 290, false, true, 'kebab'],
        ]
      },
      {
        id: 'cat-paratha-combos',
        name: '🫓 Ulte Tawe Ke Parathe & Rolls',
        dishes: [
          ['Tunday Kebab with Mughlai Paratha (2 Kebabs + 1 Paratha)', 'Classic combination of 2 melting Galouti kebabs served over sweet saffron-scented flaky paratha.', 260, 305, true, false, 'combo'],
          ['Double Mutton Galouti Roll', 'Two melting Galouti kebabs rolled in warm saffron paratha with sliced onions and green chili.', 240, 280, true, false, 'roll'],
          ['Chicken Seekh Paratha Roll', 'Juicy grilled chicken seekh kebab wrapped in crisp flaky Mughlai bread.', 190, 230, true, false, 'roll'],
          ['Ulte Tawe Ka Paratha (Single)', 'Golden layered flatbread cooked over inverted dome griddle with pure ghee.', 50, 65, true, true, 'bread'],
          ['Sheermal Roti (Sweet Saffron Bread)', 'Rich milk-kneaded bread infused with saffron and ghee.', 75, 95, true, true, 'bread'],
          ['Roomali Roti Hand Stretched', 'Thin soft handkerchief flatbread.', 40, 50, false, true, 'bread'],
          ['Paneer Galouti Roll Deluxe', 'Delicate spiced paneer kebab rolled with mint chutney.', 160, 195, false, true, 'roll'],
        ]
      },
      {
        id: 'cat-biryani-gravies',
        name: '🥘 Royal Curries, Dum Biryani & Kheer',
        dishes: [
          ['Lucknowi Mutton Dum Biryani', 'Long-grain aged basmati rice steam-cooked with tender mutton, saffron, and ittar.', 390, 460, true, false, 'biryani'],
          ['Lucknowi Chicken Biryani', 'Aromatic dum biryani with bone-in chicken and royal spices.', 310, 360, true, false, 'biryani'],
          ['Nihari Mutton Korma', 'Slow-cooked mutton stew infused with bone marrow and aromatic ginger.', 420, 490, true, false, 'curry'],
          ['Murgh Korma Lucknowi', 'Chicken simmered in silky brown onion, cashew, and melon seed gravy.', 330, 385, true, false, 'curry'],
          ['Dal Bukhara Slow Cooked', 'Black lentils simmered overnight with tomatoes and butter.', 230, 270, false, true, 'curry'],
          ['Shahi Firni in Kasora (Earthen Bowl)', 'Ground basmati rice pudding infused with saffron, milk, and almonds.', 90, 115, true, true, 'dessert'],
          ['Shahi Tukda Royal', 'Crisp ghee-fried bread with saffron sugar glaze and thick rabdi.', 110, 135, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-21',
    name: 'Shiv Sagar Pure Veg & Juice World',
    slug: 'shiv-sagar-pure-veg',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3100,
    deliveryTime: '20-30 min',
    distance: '1.9 km',
    priceTier: '₹₹',
    costForTwo: 350,
    isPureVeg: true,
    cuisines: ['Chaat & Street Food', 'South Indian', 'Fast Food'],
    tag: 'Mumbai Beachside Legend',
    isOpen: true,
    address: 'Opposite Juhu Beach, Juhu Tara Road, Mumbai, Maharashtra - 400049',
    description: 'Beloved multi-cuisine vegetarian institution. Famous for butter Pav Bhaji, triple-decker Bombay toast sandwiches, fresh fruit juices, and Chinese bhel.',
    categories: [
      {
        id: 'cat-mumbai-delights',
        name: '🧈 Famous Pav Bhaji & Sandwiches',
        dishes: [
          ['Shiv Sagar Special Pav Bhaji', 'Richly spiced vegetable bhaji simmered in Amul butter, served with 2 buttered pavs.', 195, 235, true, true, 'chaat'],
          ['Cheese Burst Pav Bhaji', 'Bhaji covered in molten melted cheese and fresh coriander.', 225, 270, true, true, 'chaat'],
          ['Paneer Pav Bhaji Deluxe', 'Fresh paneer cubes griddled with butter into spicy pav bhaji.', 215, 255, false, true, 'chaat'],
          ['Bombay Grilled Club Sandwich', 'Triple-decker sandwich layered with cucumber, potatoes, beets, mint chutney, and cheese.', 160, 195, true, true, 'sandwich'],
          ['Cheese Chilly Toast Sandwich', 'Crunchy grilled bread with green chilies, bell peppers, and melted cheese.', 140, 170, false, true, 'sandwich'],
          ['Extra Butter Ladi Pav (2 pcs)', 'Fresh soft pavs griddled in butter.', 40, 50, false, true, 'bread'],
          ['Masala Pav with Sautéed Onions (2 pcs)', 'Pavs stuffed with spicy tomato-garlic masala and butter.', 80, 100, true, true, 'bread'],
        ]
      },
      {
        id: 'cat-chaat-chinese',
        name: '🥟 Street Chaat & Chinese Bhel',
        dishes: [
          ['Crispy Chinese Bhel Platter', 'Fried crunchy noodles tossed with cabbage, capsicum, sweet-and-sour and spicy chili sauce.', 150, 180, true, true, 'chinese'],
          ['Sev Puri Special (6 pcs)', 'Flat puris loaded with potatoes, onions, trio of chutneys, and crisp sev.', 90, 110, true, true, 'chaat'],
          ['Dahi Batata Puri (6 pcs)', 'Puffed puris filled with potato, sweetened thick curd, and pomegranate.', 105, 130, true, true, 'chaat'],
          ['Bhel Puri Chowpatty Style', 'Puffed rice, sev, onions, tomatoes, and tangy tamarind and raw mango chutneys.', 85, 105, false, true, 'chaat'],
          ['Veg Hakka Noodles Wok Fried', 'Noodles tossed with crunchy vegetables and soy sauce.', 190, 230, false, true, 'chinese'],
          ['Veg Manchurian Dry (8 pcs)', 'Fried veggie balls in dark garlic-ginger glaze.', 195, 235, false, true, 'chinese'],
          ['Paneer Chilli Indo-Chinese', 'Wok-tossed paneer with capsicum and green chilies.', 220, 260, false, true, 'chinese'],
        ]
      },
      {
        id: 'cat-fresh-juices-desserts',
        name: '🥤 Fresh Juices, Falooda & Desserts',
        dishes: [
          ['Royal Kesar Falooda Glass', 'Rose milk with sabja seeds, falooda vermicelli, kulfi scoop, and dry fruits.', 150, 185, true, true, 'dessert'],
          ['Fresh Mara Mari Juice (Pineapple + Mosambi)', 'Freshly pressed juice blend with black salt.', 95, 120, true, true, 'beverage'],
          ['Pure Ganga Jamuna Juice (Orange + Mosambi)', 'Fresh citrus juice packed with vitamin C.', 95, 120, false, true, 'beverage'],
          ['Anar (Pomegranate) Fresh Juice', '100% pure pomegranate juice without added sugar.', 120, 150, true, true, 'beverage'],
          ['Sizzling Brownie with Ice Cream', 'Warm chocolate brownie topped with vanilla scoop and hot chocolate fudge.', 160, 195, true, true, 'dessert'],
          ['Mysore Masala Dosa', 'South Indian crisp dosa with spicy red chutney and potato filling.', 140, 170, false, true, 'dosa'],
        ]
      }
    ]
  },
  {
    id: 'rest-22',
    name: 'Peshawri & Bukhara Tandoor & Grill',
    slug: 'peshawri-bukhara-tandoor',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 4100,
    deliveryTime: '35-45 min',
    distance: '4.2 km',
    priceTier: '₹₹₹',
    costForTwo: 950,
    isPureVeg: false,
    cuisines: ['North Indian', 'Biryani & Pulao'],
    tag: 'Michelin-Caliber Charcoal Legacy',
    isOpen: true,
    address: 'ITC Maurya, Sardar Patel Marg, Diplomatic Enclave, New Delhi - 110021',
    description: 'Internationally acclaimed North-West Frontier culinary benchmark. Relish Dal Bukhara simmered for 24 hours, melt-in-mouth Sikandari Raan, and giant Naan Bukhara.',
    categories: [
      {
        id: 'cat-frontier-tandoor',
        name: '🍢 North-West Frontier Tandoor & Grills',
        dishes: [
          ['Sikandari Raan Whole (Slow-Roasted Leg of Baby Lamb)', 'Whole leg of young baby lamb marinated in malt vinegar, cinnamon, and cumin, slow-braised and roasted.', 890, 1050, true, false, 'meat'],
          ['Murgh Malai Kebab Peshawari (6 pcs)', 'Tender chicken boneless marinated in cream cheese, malt vinegar, green coriander, and cardamom.', 380, 450, true, false, 'kebab'],
          ['Bukhara Murgh Tandoori (Whole)', 'Whole chicken marinated in ginger-garlic paste, Kashmiri chili, and curd, skewered in clay oven.', 490, 580, true, false, 'kebab'],
          ['Barrah Kebab (Mutton Chops 4 pcs)', 'Lamb chops marinated in secret Frontier spices, roasted on charcoal embers.', 580, 680, true, false, 'kebab'],
          ['Tandoori Jhinga (Jumbo Prawns 4 pcs)', 'Jumbo sea prawns marinated in ajwain, turmeric, and lemon juice, flash-grilled.', 650, 760, true, false, 'kebab'],
          ['Paneer Tikka Peshawri (6 pcs)', 'Fresh cottage cheese squares stuffed with mint chutney and roasted with bell peppers.', 320, 380, false, true, 'kebab'],
          ['Tandoori Aloo Stuffed', 'Scooped potatoes filled with paneer, raisins, and cashew nuts, roasted crisp.', 260, 310, false, true, 'kebab'],
        ]
      },
      {
        id: 'cat-legendary-dal-breads',
        name: '🥘 Dal Bukhara & Giant Naans',
        dishes: [
          ['Original Dal Bukhara (500g Tub)', 'World-famous black lentils slow-simmered for 24 hours with tomato puree, garlic, and pure butter.', 360, 420, true, true, 'curry'],
          ['Giant Naan Bukhara (Serves 3-4)', 'Massive hand-stretched bread baked on the walls of clay tandoor, brushed with butter.', 260, 310, true, true, 'bread'],
          ['Garlic Pudina Naan', 'Layered tandoori flatbread with minced garlic and dried mint flakes.', 110, 135, false, true, 'bread'],
          ['Tandoori Roti with Desi Makhan (2 pcs)', 'Whole-wheat unleavened bread baked in clay oven with white butter.', 80, 100, false, true, 'bread'],
          ['Roomali Roti Hand Stretched (2 pcs)', 'Paper-thin delicate bread.', 90, 110, false, true, 'bread'],
          ['Gosht Dum Biryani Bukhara', 'Fragrant basmati rice cooked with lamb cuts in a sealed handi with saffron broth.', 480, 560, true, false, 'biryani'],
          ['Murgh Yakhni Pulao', 'Chicken and basmati rice slow-cooked in aromatic chicken stock.', 390, 460, false, false, 'biryani'],
        ]
      },
      {
        id: 'cat-curries-desserts',
        name: '👑 Royal Gravies & Sweets',
        dishes: [
          ['Murgh Makhani Bukhara', 'Boneless tandoori chicken simmered in creamy satin tomato and cashew sauce.', 420, 490, true, false, 'curry'],
          ['Paneer Makhani', 'Soft cottage cheese cubes in rich butter-tomato gravy with kasuri methi.', 340, 395, true, true, 'curry'],
          ['Subz Miloni (Seasonal Vegetables)', 'Assorted farm vegetables in spinach and cashew nut gravy.', 280, 330, false, true, 'curry'],
          ['Rasmalai Bukhara (2 pcs)', 'Delicate cottage cheese patties in saffron-cardamom thickened milk.', 130, 160, true, true, 'dessert'],
          ['Gulab Jamun with Saffron Dip (2 pcs)', 'Warm khoya dumplings filled with pistachios and soaked in rose syrup.', 110, 135, true, true, 'dessert'],
          ['Kesar Pista Kulfi Falooda', 'Traditional pot-kulfi served with rose falooda and nuts.', 150, 180, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-23',
    name: 'Sangeetha Vegetarian Restaurant',
    slug: 'sangeetha-veg-restaurant',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3600,
    deliveryTime: '20-30 min',
    distance: '1.6 km',
    priceTier: '₹',
    costForTwo: 260,
    isPureVeg: true,
    cuisines: ['South Indian', 'North Indian', 'Chai & Lassi'],
    tag: 'Chennai Tiffin Legend',
    isOpen: true,
    address: 'Gandhi Road, Sukrawarpet, Tiruppur, Tamil Nadu - 641604',
    description: 'Chennai\'s favorite pure veg dining destination. Renowned for ghee roast dosas, authentic sambar vadai, South Indian meals, and aromatic filter coffee.',
    categories: [
      {
        id: 'cat-tiffin',
        name: '🥞 Golden Dosas & Morning Tiffin',
        dishes: [
          ['Ghee Paper Roast Dosa', 'Ultra-crispy golden cone dosa roasted in pure desi ghee, served with 3 chutneys & sambar.', 140, 170, true, true, 'dosa'],
          ['Ghee Podi Masala Dosa', 'Crisp dosa smeared with red podi powder and stuffed with potato masala.', 150, 180, true, true, 'dosa'],
          ['Onion Rava Masala Dosa', 'Laced crispy semolina crepe packed with onions, green chilies, and potato.', 155, 185, true, true, 'dosa'],
          ['Steamed Idli & Vada Combo (2 Idlis + 1 Vada)', 'Two pillowy soft idlis and one crispy medu vada with hot drumstick sambar.', 95, 120, true, true, 'combo'],
          ['Sambar Mini Idlis (14 pcs in bowl)', 'Mini button idlis submerged in hot aromatic shallot sambar with ghee.', 110, 135, true, true, 'idli'],
          ['Poori with Potato Masala (3 pcs)', 'Fluffy puffed whole wheat pooris with mild spiced potato bhaji.', 100, 125, false, true, 'breakfast'],
          ['Ven Pongal with Ghee & Cashews', 'Warm rice and moong dal porridge tempered with black pepper and cashews.', 90, 115, true, true, 'pongal'],
        ]
      },
      {
        id: 'cat-meals-thali',
        name: '🍱 South Indian Meals & Variety Rice',
        dishes: [
          ['Sangeetha Special South Indian Thali', 'Steamed Ponni rice, drumstick sambar, pepper rasam, vatral kuzhambu, kootu, poriyal, appalam, curd & sweet.', 220, 260, true, true, 'thali'],
          ['Bisibelebath with Boondi', 'Karnataka special spicy lentil and rice mash with vegetables and ghee.', 115, 140, true, true, 'rice'],
          ['Curd Rice with Pomegranate & Tadka', 'Creamy tempered yogurt rice with mustard seeds and curry leaves.', 85, 105, true, true, 'rice'],
          ['Tomato Rice (Thakkali Sadam)', 'Tangy spiced tomato rice with peanuts and coriander.', 90, 110, false, true, 'rice'],
          ['Chapati with Mixed Veg Kurma (2 pcs)', 'Soft whole-wheat chapatis served with coconut vegetable kurma.', 95, 120, false, true, 'bread'],
          ['Mushroom Biryani South Style', 'Aromatic rice cooked with fresh button mushrooms and mint.', 190, 230, false, true, 'rice'],
        ]
      },
      {
        id: 'cat-sweets-beverages',
        name: '☕ Filter Kaapi & Temple Sweets',
        dishes: [
          ['Madras Degree Filter Coffee', 'Freshly brewed chicory coffee with frothy boiled milk in brass tumbler.', 40, 50, true, true, 'beverage'],
          ['Badam Halwa Pure Ghee (100g)', 'Rich royal dessert made with crushed almonds, milk, and saffron.', 140, 170, true, true, 'dessert'],
          ['Carrot Halwa Warm', 'Winter red carrots cooked in milk, sugar, and khoya.', 90, 115, false, true, 'dessert'],
          ['Pineapple Kesari Bath', 'Semolina pudding with pineapple chunks and roasted cashews.', 70, 90, true, true, 'dessert'],
          ['Masala Tea Cup', 'Hot brewed tea with crushed ginger and cardamom.', 35, 45, false, true, 'beverage'],
          ['Salted Masala Buttermilk (Neer Mor)', 'Refreshing spiced buttermilk with ginger and curry leaves.', 35, 45, false, true, 'beverage'],
          ['Hot Gulab Jamun (2 pcs)', 'Khoya dumplings soaked in rose syrup.', 65, 80, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-24',
    name: 'Goli Vada Pav & Tibb\'s Frankie Express',
    slug: 'goli-vada-pav-tibbs-frankie',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.7,
    reviewCount: 2750,
    deliveryTime: '15-25 min',
    distance: '1.3 km',
    priceTier: '₹',
    costForTwo: 180,
    isPureVeg: false,
    cuisines: ['Chaat & Street Food', 'Rolls & Burgers', 'Fast Food'],
    tag: 'Quick Grab & Go Indian Street',
    isOpen: true,
    address: 'FC Road, Deccan Gymkhana, Pune, Maharashtra - 411004',
    description: 'The quick-bite street champions. Hot crunchy golden Vada Pavs, Mumbai cheese frankies, crispy aloo rolls, and spicy masala fries.',
    categories: [
      {
        id: 'cat-vada-pav',
        name: '🍔 Famous Mumbai Vada Pavs',
        dishes: [
          ['Classic Mumbai Vada Pav (2 pcs)', 'Spicy potato fritters inside fresh pav buns with garlic podi, mint chutney, and green chilies.', 60, 75, true, true, 'snack'],
          ['Cheese Slice Vada Pav (2 pcs)', 'Vada pav layered with melted processed cheese slice and sweet chutney.', 90, 115, true, true, 'snack'],
          ['Schezwan Spicy Vada Pav (2 pcs)', 'Crisp batata vada smothered in spicy garlic Schezwan sauce.', 80, 100, true, true, 'snack'],
          ['Paneer Crispy Vada Pav', 'Coated fresh paneer patty fried golden in bun with mayo and podi.', 95, 120, false, true, 'snack'],
          ['Crispy Corn Vada Pav', 'Sweet corn and potato cutlet with melted butter in fresh bun.', 85, 105, false, true, 'snack'],
          ['Makka Palak Vada Pav', 'Spinach and corn patty spiced with chaat masala.', 80, 100, false, true, 'snack'],
          ['Misal Pav Pune Special', 'Spicy sprouted bean curry topped with farsan, onions, and served with 2 pavs.', 120, 150, true, true, 'snack'],
        ]
      },
      {
        id: 'cat-frankies',
        name: '🌯 Authentic Tibb\'s Frankies',
        dishes: [
          ['Original Chicken Frankie Roll', 'Spiced juicy chicken pieces tossed in frankie masala with vinegar onions in flatbread.', 140, 175, true, false, 'roll'],
          ['Egg Chicken Frankie Roll', 'Egg-coated flatbread wrapped around spicy grilled chicken.', 160, 195, true, false, 'roll'],
          ['Mutton Seekh Frankie Roll', 'Char-grilled mutton seekh wrapped with pickled onions and spice mix.', 190, 230, true, false, 'roll'],
          ['Veggie Cheese Frankie', 'Spiced potato roll with shredded cheese, onions, and special frankie vinegar.', 110, 135, true, true, 'roll'],
          ['Paneer Tikka Frankie', 'Char-grilled paneer cubes with tangy masala sauce in soft wrap.', 130, 160, false, true, 'roll'],
          ['Soya Chaap Masala Frankie', 'Protein-packed soya chunks tossed in onion-tomato masala.', 120, 150, false, true, 'roll'],
          ['Double Egg Mayo Frankie', 'Two eggs griddled on roti with spicy mayo dressing and onions.', 110, 135, false, false, 'roll'],
        ]
      },
      {
        id: 'cat-sides-beverages',
        name: '🍟 Sides, Shakes & Coolers',
        dishes: [
          ['Peri Peri Masala French Fries', 'Crispy potato fries dusted with spicy peri peri seasoning.', 95, 120, true, true, 'snack'],
          ['Cheese Loaded French Fries', 'French fries smothered with warm liquid cheddar cheese sauce.', 130, 160, false, true, 'snack'],
          ['Crispy Sabudana Vada (2 pcs)', 'Tapioca pearl and potato cutlets with roasted peanuts and green chili.', 80, 100, true, true, 'snack'],
          ['Mango Mastani Thick Shake', 'Rich mango shake topped with ice cream and chopped nuts.', 120, 150, true, true, 'beverage'],
          ['Chilled Cold Coffee with Ice Cream', 'Creamy blended coffee topped with vanilla scoop.', 95, 120, true, true, 'beverage'],
          ['Lemon Mint Mojito Cooler', 'Crushed mint, fresh lime, sugar, and chilled soda.', 75, 95, false, true, 'beverage'],
        ]
      }
    ]
  },
  {
    id: 'rest-25',
    name: 'The Fisherman\'s Wharf & Coastal Karavali',
    slug: 'fishermans-wharf-karavali',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3100,
    deliveryTime: '30-40 min',
    distance: '3.6 km',
    priceTier: '₹₹₹',
    costForTwo: 700,
    isPureVeg: false,
    cuisines: ['South Indian', 'Biryani & Pulao'],
    tag: 'Coastal Seafood Paradise',
    isOpen: true,
    address: 'Sarjapur Road, Ambalipura, Bengaluru, Karnataka - 560102',
    description: 'Celebrate the treasures of the Arabian sea. Renowned Mangalorean Chicken Ghee Roast, Goan Prawn Curry, Kori Rotti, and feather-light Neer Dosas.',
    categories: [
      {
        id: 'cat-coastal-seafood',
        name: '🦐 Coastal Curries & Ghee Roast',
        dishes: [
          ['Mangalorean Chicken Ghee Roast', 'Tender chicken tossed in fiery Byadgi chili paste, roasted spices, and pure desi ghee.', 360, 420, true, false, 'curry'],
          ['Prawn Ghee Roast Kundapur Style', 'Succulent sea prawns coated in aromatic red chili and coriander ghee paste.', 420, 490, true, false, 'curry'],
          ['Goan Prawn Curry with Coconut', 'Fresh prawns simmered in creamy coconut milk with tamarind and Goan spices.', 390, 460, true, false, 'curry'],
          ['Mangalorean Fish Curry (Anjal / Kingfish)', 'Seer fish simmered in tangy red chili and kokum-infused coastal sauce.', 440, 510, true, false, 'curry'],
          ['Kori Gassi (Mangalorean Chicken Curry)', 'Traditional Bunt style chicken curry cooked with roasted coconut milk and spices.', 340, 395, true, false, 'curry'],
          ['Crab Sukka Coastal Style', 'Fresh whole crab cooked with roasted grated coconut and spices.', 450, 520, false, false, 'curry'],
        ]
      },
      {
        id: 'cat-neer-dosa-rotti',
        name: '🥞 Neer Dosa, Kori Rotti & Rice',
        dishes: [
          ['Feather-Light Neer Dosa (4 pcs)', 'Paper-thin delicate rice crepes that melt on the tongue, served with coconut chutney.', 120, 150, true, true, 'bread'],
          ['Kori Rotti Combo', 'Crispy sun-dried rice wafers served with hot spicy Mangalorean chicken gravy (Kori Gassi).', 320, 380, true, false, 'combo'],
          ['Appam with Coconut Stew (2 pcs)', 'Fermented rice pancakes with soft spongy center and crispy lace edges with vegetable stew.', 160, 195, true, true, 'bread'],
          ['Mangalorean Prawn Biryani', 'Short-grain rice cooked with spiced coastal sea prawns and fried onions.', 410, 480, true, false, 'biryani'],
          ['Malabar Parotta (2 pcs)', 'Multi-layered flaky bread griddled on tawa.', 70, 90, false, true, 'bread'],
          ['Steamed Boiled Brown Rice (Matta)', 'Nutritious Kerala/Coastal red rice.', 80, 100, false, true, 'rice'],
          ['Ghee Rice Coastal Style', 'Fragrant jeera rice tempered with onions, cashews, and raisins in ghee.', 160, 195, false, true, 'rice'],
        ]
      },
      {
        id: 'cat-starters-desserts',
        name: '🍢 Coastal Starters & Drinks',
        dishes: [
          ['Surmai Rava Fry (Kingfish 1 big slice)', 'Kingfish steak marinated in red chili paste and crusted with semolina, pan-fried.', 420, 490, true, false, 'starter'],
          ['Kane Masala Rava Fry (Lady Fish)', 'Fresh lady fish fried crisp with semolina crust.', 380, 440, false, false, 'starter'],
          ['Crispy Squid Pepper Fry', 'Calamari rings tossed with crushed pepper, garlic, and curry leaves.', 350, 410, true, false, 'starter'],
          ['Paneer Ghee Roast', 'Cottage cheese cubes tossed in Kundapur roasted red chili ghee paste.', 280, 330, false, true, 'starter'],
          ['Sol Kadi Digestive Cooler', 'Refreshing pink drink made with coconut milk, kokum, garlic, and green chilies.', 60, 75, true, true, 'beverage'],
          ['Bebinca Traditional Goan Cake (2 slices)', 'Multi-layered Indo-Portuguese pudding made with coconut milk and egg yolks.', 140, 175, true, false, 'dessert'],
          ['Elaneer Payasam Bowl', 'Tender coconut sweet pudding.', 110, 135, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-26',
    name: 'Kake Da Vada Punjabi Dhaba',
    slug: 'kake-da-vada-punjabi-dhaba',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3600,
    deliveryTime: '25-35 min',
    distance: '2.5 km',
    priceTier: '₹₹',
    costForTwo: 380,
    isPureVeg: false,
    cuisines: ['North Indian', 'Rolls & Burgers', 'Chai & Lassi'],
    tag: '1931 Connaught Place Icon',
    isOpen: true,
    address: 'Outer Circle, Connaught Place, New Delhi - 110001',
    description: 'Serving legendary Dhaba curries since 1931. Home of thick handi chicken curry, brain curry, creamy Dal Makhani, Tandoori rotis, and giant Kulchas.',
    categories: [
      {
        id: 'cat-dhaba-curries',
        name: '🥘 Legendary Punjabi Dhaba Curries',
        dishes: [
          ['Kake Special Chicken Curry Handi', 'Country style robust chicken curry cooked with whole spices, tomatoes, and fried onions.', 330, 390, true, false, 'curry'],
          ['Dhaba Mutton Rogan Josh', 'Tender mutton pieces braised in rich Kashmiri chili and cardamom spiced gravy.', 420, 490, true, false, 'curry'],
          ['Butter Chicken Punjabi Style', 'Tandoori chicken in sweet-spicy rich butter tomato gravy.', 350, 410, true, false, 'curry'],
          ['Dal Makhani Handi Double Butter', 'Black lentils slow cooked overnight with white butter and cream.', 230, 270, true, true, 'curry'],
          ['Pindi Chole Masala', 'Dark spicy chickpeas cooked with roasted spices and dried mango powder.', 190, 230, false, true, 'curry'],
          ['Kadhai Paneer Dhaba Style', 'Cottage cheese cooked with thick bell pepper, tomato, and crushed coriander seeds.', 270, 320, true, true, 'curry'],
          ['Palak Paneer Punjabi', 'Fresh spinach gravy cooked with garlic and soft paneer cubes.', 250, 290, false, true, 'curry'],
        ]
      },
      {
        id: 'cat-dhaba-tandoor',
        name: '🍢 Tandoor Grills & Kebabs',
        dishes: [
          ['Tandoori Chicken Half Bird', 'Whole chicken marinated in curd, mustard oil, and red chili, roasted over coals.', 280, 330, true, false, 'starter'],
          ['Murgh Tikka (6 pcs)', 'Boneless chicken cubes grilled to perfection with smoky aroma.', 290, 340, true, false, 'starter'],
          ['Mutton Seekh Kebab (4 pcs)', 'Minced lamb skewers seasoned with herbs and roasted in tandoor.', 360, 420, true, false, 'starter'],
          ['Tandoori Paneer Tikka (6 pcs)', 'Marinated paneer chunks with bell peppers and onions.', 250, 295, false, true, 'starter'],
          ['Tandoori Soya Chaap', 'Spiced soya chaap pieces roasted with butter glaze.', 220, 260, false, true, 'starter'],
          ['Chicken Malai Tikka (6 pcs)', 'Creamy mild chicken kebabs marinated in cashew and cheese.', 310, 360, false, false, 'starter'],
          ['Fish Tikka Amritsari (4 pcs)', 'River sole fish marinated with ajwain and grilled.', 390, 460, false, false, 'starter'],
        ]
      },
      {
        id: 'cat-kulcha-lassi',
        name: '🫓 Stuffed Kulchas, Rice & Lassi',
        dishes: [
          ['Amritsari Aloo Kulcha with Chana & Pickle', 'Crispy layered tandoori bread stuffed with spiced potatoes, served with chana.', 140, 175, true, true, 'bread'],
          ['Paneer Stuffed Naan with Butter', 'Tandoor naan loaded with seasoned paneer filling.', 120, 150, false, true, 'bread'],
          ['Garlic Butter Naan', 'Soft naan topped with minced garlic and butter.', 75, 95, true, true, 'bread'],
          ['Butter Roti Tandoori (2 pcs)', 'Whole-wheat rotis brushed with desi butter.', 50, 65, false, true, 'bread'],
          ['Jeera Rice with Fried Onions', 'Basmati rice tempered with royal cumin seeds.', 150, 180, false, true, 'rice'],
          ['Patiala Lassi Sweet (Tall Glass)', 'Creamy thick sweet churned yogurt drink with malai.', 85, 110, true, true, 'beverage'],
          ['Gulab Jamun (2 pcs)', 'Spongy warm khoya dumplings in sugar syrup.', 65, 80, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-27',
    name: 'Keventers & Lassi Shop Milkshakes',
    slug: 'keventers-lassi-shop',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3100,
    deliveryTime: '15-25 min',
    distance: '1.5 km',
    priceTier: '₹₹',
    costForTwo: 240,
    isPureVeg: true,
    cuisines: ['Chai & Lassi', 'Mithai & Desserts', 'Fast Food'],
    tag: '1925 Original Milkshake Icon',
    isOpen: true,
    address: 'Indiranagar 100 Feet Road, Bengaluru, Karnataka - 560038',
    description: 'Original dairy milkshakes served in vintage glass bottles since 1925. Indulge in classic Kesar Badam, Belgian Chocolate, Mango Lassi, and thick Faloodas.',
    categories: [
      {
        id: 'cat-thick-shakes',
        name: '🥛 Famous Thick Milkshakes (Glass Bottle)',
        dishes: [
          ['Original Kesar Badam Milkshake (300ml)', 'Iconic vintage shake with real saffron milk, ground almonds, and cardamom.', 160, 195, true, true, 'shake'],
          ['Belgian Dark Chocolate Shake (300ml)', 'Rich blended thick shake with Belgian dark chocolate and brownie crumbs.', 175, 215, true, true, 'shake'],
          ['Butterscotch Crunch Shake (300ml)', 'Creamy shake loaded with crunchy praline and butterscotch sauce.', 150, 185, true, true, 'shake'],
          ['Strawberry Cream Shake (300ml)', 'Sweet strawberry puree blended with cold farm milk and ice cream.', 145, 180, false, true, 'shake'],
          ['Cold Coffee Hazelnut Shake (300ml)', 'Rich coffee shake infused with roasted hazelnut syrup.', 165, 205, true, true, 'shake'],
          ['Oreo Cookie Overload Shake (300ml)', 'Thick shake crushed with whole Oreo cookies and chocolate drizzle.', 170, 210, false, true, 'shake'],
          ['Alphonso Mango Classic Shake (300ml)', 'Seasonal sweet Ratnagiri mango shake with creamy texture.', 165, 205, true, true, 'shake'],
        ]
      },
      {
        id: 'cat-lassis-faloodas',
        name: '🥤 Traditional Lassis & Royal Faloodas',
        dishes: [
          ['Royal Kesar Pista Lassi (400ml)', 'Thick churned Punjabi curd beverage with saffron, pistachios, and malai.', 120, 150, true, true, 'beverage'],
          ['Alphonso Mango Lassi (400ml)', 'Sweet mango pulp churned with rich curd and topped with nuts.', 130, 160, true, true, 'beverage'],
          ['Sweet Malai Lassi (400ml)', 'Traditional sweet lassi with thick dollop of home-churned cream.', 90, 115, false, true, 'beverage'],
          ['Royal Rose Falooda with Kulfi', 'Chilled rose milk, sabja seeds, falooda noodles, dry fruits, and kulfi slice.', 140, 175, true, true, 'dessert'],
          ['Rabri Falooda Glass', 'Thick reduced rabdi poured over rose falooda and pistachios.', 150, 185, true, true, 'dessert'],
          ['Masala Salted Buttermilk (400ml)', 'Chilled buttermilk with ginger, mint, green chili, and roasted cumin.', 50, 65, false, true, 'beverage'],
          ['Dry Fruit Rabri Cup (150g)', 'Slow-cooked milk skin layers with slivered almonds and pistachios.', 110, 135, false, true, 'dessert'],
        ]
      },
      {
        id: 'cat-sweet-treats',
        name: '🍪 Warm Desserts & Snacks',
        dishes: [
          ['Warm Choco Lava Cake', 'Decadent chocolate cake with molten warm liquid center.', 95, 120, true, true, 'dessert'],
          ['Hot Gulab Jamun (2 pcs)', 'Spongy khoya dumplings in saffron syrup.', 65, 80, false, true, 'dessert'],
          ['Warm Walnut Brownie', 'Fudgy dark chocolate brownie packed with walnuts.', 85, 105, false, true, 'dessert'],
          ['Cheese Garlic Toasties (2 pcs)', 'Crispy toasted bread with garlic butter and melted cheese.', 110, 135, false, true, 'snack'],
          ['Nutella Waffle Slice', 'Crispy Belgian waffle coated with warm Nutella spread.', 130, 160, false, true, 'dessert'],
          ['French Fries Salted', 'Crispy golden potato fries with dip.', 85, 105, false, true, 'snack'],
        ]
      }
    ]
  },
  {
    id: 'rest-28',
    name: 'Rameshwaram Cafe South Delights',
    slug: 'rameshwaram-cafe-bengaluru',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 4800,
    deliveryTime: '20-30 min',
    distance: '2.0 km',
    priceTier: '₹',
    costForTwo: 240,
    isPureVeg: true,
    cuisines: ['South Indian', 'Chai & Lassi'],
    tag: 'Bengaluru Cult Sensation',
    isOpen: true,
    address: '12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038',
    description: 'Bengaluru\'s viral pure ghee tiffin phenomenon. Queue-worthy Ghee Podi Thatte Idlis, Ghee Podi Masala Dosa, crunchy Vadas, and strong Filter Kaapi.',
    categories: [
      {
        id: 'cat-ghee-idli-dosa',
        name: '🧈 Famous Ghee Podi Idlis & Dosas',
        dishes: [
          ['Famous Ghee Podi Thatte Idli (Single)', 'Huge plate-sized steamed idli drenched in molten pure ghee and roasted spiced podi.', 95, 120, true, true, 'idli'],
          ['Ghee Podi Masala Dosa Special', 'Signature crisp golden dosa smeared with generous podi, ghee, and potato mash.', 140, 175, true, true, 'dosa'],
          ['Ghee Butter Garlic Dosa', 'Crisp dosa layered with roasted garlic paste, melted butter, and spiced podi.', 150, 185, true, true, 'dosa'],
          ['Ghee Open Masala Dosa', 'Thick dosa roasted with butter, spread with potato palya and gunpowder.', 145, 180, false, true, 'dosa'],
          ['Ghee Podi Plain Dosa', 'Thin crispy dosa roasted in pure ghee and dusted with spicy milagai podi.', 120, 150, false, true, 'dosa'],
          ['Rava Onion Ghee Dosa', 'Laced crispy semolina crepe packed with onions and cumin seeds.', 145, 180, false, true, 'dosa'],
          ['Set Dosa with Sāgu (3 pcs)', 'Soft fluffy spongy dosas with mild vegetable coconut kurma.', 110, 135, true, true, 'dosa'],
        ]
      },
      {
        id: 'cat-vada-bath',
        name: '🥞 Crunchy Vadas, Bath & Pongal',
        dishes: [
          ['Crispy Medu Vada with Ghee (2 pcs)', 'Fresh fried lentil fritters with peppercorns, ginger, and curry leaves.', 75, 95, true, true, 'vada'],
          ['Ghee Pongal with Whole Cashews', 'Warm rice and yellow moong dal cooked with cumin, pepper, and roasted cashews.', 110, 135, true, true, 'pongal'],
          ['Bisi Bele Bath with Boondi', 'Karnataka spicy vegetable and lentil rice mash topped with pure ghee.', 115, 140, true, true, 'rice'],
          ['Khara Bath Spicy Upma', 'Coarse semolina with vegetables and aromatic spices.', 75, 95, false, true, 'breakfast'],
          ['Kesari Bath Saffron Halwa', 'Golden semolina dessert with saffron, ghee, and dry fruits.', 75, 95, true, true, 'dessert'],
          ['Chow Chow Bath (Combo of 2)', 'One scoop of Khara Bath paired with one scoop of Kesari Bath.', 135, 165, true, true, 'combo'],
          ['Sambar Vada Dip (2 pcs)', 'Crisp vadas soaked in piping hot shallot drumstick sambar.', 95, 120, false, true, 'vada'],
        ]
      },
      {
        id: 'cat-coffee-snacks',
        name: '☕ Filter Kaapi & Crispy Snacks',
        dishes: [
          ['Signature Filter Kaapi', 'Strong chicory-infused decoction with fresh frothy cow milk in brass davarah.', 45, 55, true, true, 'beverage'],
          ['Maddur Vada Crispy (2 pcs)', 'Spicy onion, semolina, and rice flour fritters from Maddur.', 65, 80, true, true, 'snack'],
          ['Curd Vada (2 pcs)', 'Vadas soaked in thick seasoned yogurt with boondi and coriander.', 90, 115, false, true, 'vada'],
          ['Podi Rice with Ghee', 'Hot steamed rice mixed with gunpowder and generous spoonful of ghee.', 95, 120, false, true, 'rice'],
          ['Spicy Buttermilk (Masala Majjige)', 'Chilled churned buttermilk with ginger, green chilies, and curry leaves.', 40, 50, false, true, 'beverage'],
          ['Badam Halwa Pure Ghee (100g)', 'Rich almond dessert made with pure ghee and saffron.', 140, 175, true, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-29',
    name: 'Chowman Authentic Indo-Chinese Kitchen',
    slug: 'chowman-indo-chinese',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    reviewCount: 3200,
    deliveryTime: '25-35 min',
    distance: '2.4 km',
    priceTier: '₹₹',
    costForTwo: 480,
    isPureVeg: false,
    cuisines: ['Indo-Chinese', 'Fast Food'],
    tag: 'Authentic Tangra Chinese',
    isOpen: true,
    address: 'Salt Lake, Sector 1, Kolkata, West Bengal - 700064',
    description: 'Kolkata\'s finest Indo-Chinese restaurant. Savor fiery drums of heaven, crispy chili babycorn, steamed wontons, and Hakka noodles wok-tossed over high flame.',
    categories: [
      {
        id: 'cat-wok-starters',
        name: '🍗 Wok Starters & Appetizers',
        dishes: [
          ['Crispy Chilli Baby Corn', 'Baby corn fingers batter-fried crisp and tossed in sweet-and-spicy dark soy chili glaze.', 190, 230, true, true, 'starter'],
          ['Drums of Heaven Hong Kong Style (6 pcs)', 'Tender chicken wings tossed in garlic, chili, and sweet plum sauce.', 270, 320, true, false, 'starter'],
          ['Chilli Chicken Dry Tangra Style', 'Boneless chicken cubes tossed with diced green capsicum, onions, and dark soy.', 250, 295, true, false, 'starter'],
          ['Pan-Fried Chilli Fish (Bhetki 6 pcs)', 'Fresh Kolkata bhetki fish fillets tossed in spicy pepper and garlic sauce.', 380, 440, true, false, 'starter'],
          ['Golden Fried Prawns (6 pcs)', 'Butterflied sea prawns crumbed and fried golden, served with sweet chili dip.', 390, 460, false, false, 'starter'],
          ['Crispy Honey Pepper Chicken', 'Chicken strips glazed with crushed pepper and honey with sesame seeds.', 260, 310, false, false, 'starter'],
          ['Chilli Garlic Mushroom Dry', 'Button mushrooms tossed in fiery burnt garlic and chili paste.', 210, 250, false, true, 'starter'],
        ]
      },
      {
        id: 'cat-noodles-rice',
        name: '🍜 High-Flame Noodles & Fried Rice',
        dishes: [
          ['Chowman Special Mixed Hakka Noodles', 'Wok-tossed noodles loaded with chicken, prawns, egg, and vegetables.', 250, 295, true, false, 'chinese'],
          ['Schezwan Chicken Fried Rice', 'Spicy wok-fried rice with house-made Sichuan paste, shredded chicken, and spring onions.', 230, 275, true, false, 'chinese'],
          ['Veg Hakka Noodles', 'Long noodles tossed with crunchy julienned vegetables and light soy.', 180, 215, true, true, 'chinese'],
          ['Pan-Fried Noodles with Chicken & Mushroom', 'Crisp fried noodles topped with rich velvety chicken and mushroom gravy.', 260, 310, true, false, 'chinese'],
          ['Garlic Fried Rice with Burnt Onions', 'Fragrant rice seasoned with golden roasted garlic flakes.', 190, 225, false, true, 'chinese'],
          ['Singapore Veg Noodles with Cashews', 'Curry-powder seasoned noodles with bell peppers and toasted cashews.', 210, 250, false, true, 'chinese'],
        ]
      },
      {
        id: 'cat-gravies-soups',
        name: '🥘 Manchurian Gravies, Soups & Desserts',
        dishes: [
          ['Chicken Manchurian Gravy Bowl', 'Minced chicken meatballs in rich soy, ginger, and garlic coriander gravy.', 250, 295, true, false, 'curry'],
          ['Hot Garlic Chicken Gravy', 'Boneless chicken chunks in tangy and spicy red hot garlic sauce.', 260, 305, false, false, 'curry'],
          ['Veg Manchurian in Gravy', 'Fried vegetable balls in savory dark sauce.', 200, 240, true, true, 'curry'],
          ['Chicken Sweet Corn Soup', 'Velvety soup with creamed corn and shredded chicken.', 130, 160, false, false, 'soup'],
          ['Manchow Soup with Crispy Noodles', 'Spicy dark soup with garlic, cilantro, and fried noodle topping.', 120, 150, true, true, 'soup'],
          ['Fried Ice Cream Scoop', 'Vanilla ice cream ball encased in hot crispy batter and drizzled with chocolate.', 140, 175, true, true, 'dessert'],
          ['Darsaan with Vanilla Ice Cream', 'Honey-glazed crisp flat noodles with sesame seeds, served with vanilla ice cream.', 130, 160, false, true, 'dessert'],
        ]
      }
    ]
  },
  {
    id: 'rest-30',
    name: 'Chhappan Bhog & Mithai Mahal',
    slug: 'chhappan-bhog-mithai-mahal',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    reviewCount: 3900,
    deliveryTime: '20-30 min',
    distance: '1.8 km',
    priceTier: '₹₹',
    costForTwo: 320,
    isPureVeg: true,
    cuisines: ['Mithai & Desserts', 'Chaat & Street Food'],
    tag: '56 Royal Offerings of India',
    isOpen: true,
    address: 'Cantt Road, Sadar Bazaar, Lucknow, Uttar Pradesh - 226002',
    description: 'Named after the legendary 56 divine offerings. Famous across India for Desi Ghee Ghewar, Kaju Pista Roll, Chandrakala, Malai Paan, and royal festive gift hampers.',
    categories: [
      {
        id: 'cat-chhappan-sweets',
        name: '🍯 Royal Pure Desi Ghee Sweets',
        dishes: [
          ['Royal Kaju Pista Roll (250g Box)', 'Cashew cylinder rolls filled with crushed pistachio paste and saffron.', 295, 350, true, true, 'sweet'],
          ['Malai Ghewar with Rabri (Piece)', 'Honeycomb Rajasthani disc drenched in saffron syrup and coated with thick rabri.', 180, 220, true, true, 'sweet'],
          ['Chandrakala Sweet (2 pcs)', 'Crisp pastry dumplings filled with sweetened mawa, dry fruits, and dipped in syrup.', 95, 120, true, true, 'sweet'],
          ['Malai Paan Sweet (2 pcs)', 'Sweetened milk skin rolled around fragrant gulkand and dry fruits.', 110, 135, true, true, 'sweet'],
          ['Kaju Katli Diamond Box (250g)', 'Fine cashew fudge with silver leaf.', 280, 330, true, true, 'sweet'],
          ['Motichoor Ladoo in Desi Ghee (250g)', 'Melt-in-mouth gram flour pearls soaked in saffron cardamom syrup.', 175, 210, true, true, 'sweet'],
          ['Pista Barfi (250g Box)', 'Rich green pistachio and mawa fudge with cardamom.', 310, 360, false, true, 'sweet'],
        ]
      },
      {
        id: 'cat-chhena-kheer',
        name: '🍨 Chhena Specialties & Rabri',
        dishes: [
          ['Kesar Rasmalai Royal (2 pcs)', 'Spongy cottage cheese patties in saffron and pistachio milk.', 105, 130, true, true, 'sweet'],
          ['Gulab Jamun with Saffron (2 pcs)', 'Golden brown khoya balls in fragrant rose cardamom syrup.', 70, 85, true, true, 'sweet'],
          ['Rabri Matka (200g)', 'Slow-reduced milk layers with cardamoms and crushed almonds in clay pot.', 120, 150, true, true, 'sweet'],
          ['Rajbhog Saffron (2 pcs)', 'Large yellow rosogolla stuffed with pistachios and almonds.', 85, 105, false, true, 'sweet'],
          ['Kolkata White Rosogolla (4 pcs)', 'Classic spongy cottage cheese balls in light sugar syrup.', 95, 120, false, true, 'sweet'],
          ['Gajar Ka Halwa Pure Desi Ghee (200g)', 'Red winter carrots slow-cooked in milk, ghee, and khoya.', 110, 135, true, true, 'dessert'],
          ['Moong Dal Halwa Desi Ghee (200g)', 'Rich roasted yellow lentil pudding with pure ghee and dry fruits.', 120, 150, false, true, 'dessert'],
        ]
      },
      {
        id: 'cat-royal-chaat',
        name: '🥟 Royal Chaat, Snacks & Thandai',
        dishes: [
          ['Royal Raj Kachori Special', 'Crisp giant kachori stuffed with sprouts, bhalla, and sweet curd with pomegranate.', 130, 160, true, true, 'chaat'],
          ['Papdi Chaat with Dahi & Chutneys', 'Crispy wheat papdis layered with boiled potatoes, chilled sweet curd, and spices.', 95, 120, true, true, 'chaat'],
          ['Pani Puri with 2 Waters (8 pcs)', 'Crispy puris with spicy mint asafoetida water and sweet tamarind chutney.', 70, 90, false, true, 'chaat'],
          ['Dahi Vada Plate (2 pcs)', 'Soft lentil dumplings in sweet creamy curd with roasted cumin.', 90, 115, false, true, 'chaat'],
          ['Samosa with Sweet Chutney (2 pcs)', 'Crisp golden samosas filled with spicy potatoes and peas.', 60, 75, false, true, 'snack'],
          ['Royal Kesar Thandai (300ml Glass)', 'Traditional milk drink with ground almonds, fennel, poppy seeds, and rose petals.', 95, 120, true, true, 'beverage'],
          ['Kesaria Lassi with Dry Fruits', 'Chilled churned sweet yogurt drink with saffron and nuts.', 85, 110, false, true, 'beverage'],
        ]
      }
    ]
  }
];

// Helper to assemble customization options based on dish type
function getCustomization(dishName, type, price) {
  if (type === 'biryani') {
    return {
      sizes: [
        { name: 'Regular Portion (Serves 1)', priceDiff: 0 },
        { name: 'Jumbo Handi Pot (Serves 2-3)', priceDiff: Math.round(price * 0.75) }
      ],
      addOns: [
        { name: 'Extra Boiled Egg (2 pcs)', price: 30 },
        { name: 'Burani Garlic Raita Cup', price: 40 },
        { name: 'Double Salan Gravy Bowl', price: 35 }
      ],
      spiceLevels: ['Mild Nawabi', 'Medium Spicy', 'Fiery Andhra Guntur']
    };
  }
  if (type === 'dosa') {
    return {
      sizes: [
        { name: 'Standard Roast', priceDiff: 0 },
        { name: 'Double Butter Crispy', priceDiff: 35 }
      ],
      addOns: [
        { name: 'Extra Ghee Cup', price: 30 },
        { name: 'Extra Podi Gunpowder', price: 25 },
        { name: 'Extra Sambar Bowl', price: 25 }
      ],
      spiceLevels: ['Mild', 'Medium Spicy', 'Extra Spicy']
    };
  }
  if (type === 'curry') {
    return {
      sizes: [
        { name: 'Regular Bowl (Serves 1-2)', priceDiff: 0 },
        { name: 'Family Handi (Serves 3-4)', priceDiff: Math.round(price * 0.8) }
      ],
      addOns: [
        { name: 'Add Extra Butter Naan', price: 60 },
        { name: 'Add Jeera Rice Bowl', price: 80 }
      ],
      spiceLevels: ['Mild Creamy', 'Medium Dhaba', 'Extra Spicy']
    };
  }
  if (type === 'roll') {
    return {
      sizes: [
        { name: 'Standard Roll', priceDiff: 0 },
        { name: 'Jumbo Roll (Double Filling)', priceDiff: 50 }
      ],
      addOns: [
        { name: 'Add Extra Cheese', price: 30 },
        { name: 'Add Extra Fried Egg', price: 20 },
        { name: 'Add Extra Mint Dip', price: 20 }
      ],
      spiceLevels: ['Mild Sauce', 'Medium Spicy', 'Extra Green Chili']
    };
  }
  if (type === 'chai') {
    return {
      sizes: [
        { name: 'Standard 250ml Flask', priceDiff: 0 },
        { name: 'Family 500ml Flask', priceDiff: Math.round(price * 0.6) }
      ],
      addOns: [
        { name: 'Add 2 Butter Biscuits', price: 25 },
        { name: 'Add Bun Maska', price: 50 }
      ],
      spiceLevels: ['Less Sugar', 'Regular Sweetness', 'No Sugar']
    };
  }
  return null;
}

// Map images for visual delight
const imageMap = {
  biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
  starter: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
  curry: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  bread: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  dessert: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
  beverage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
  dosa: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  idli: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  vada: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  chaat: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
  roll: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  chinese: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
  momo: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
  soup: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
  sweet: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
  snack: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
  thali: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
  meat: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  kebab: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  shake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  chai: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
  sandwich: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
  rice: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
  combo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
  breakfast: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  pongal: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
};

// Generate finalized object
let globalItemIndex = 100;

const compiledRestaurants = restaurantsData.map((rest, restIdx) => {
  let totalDishesInRest = 0;
  const menuCategories = rest.categories.map((cat, catIdx) => {
    const items = cat.dishes.map((dishArr) => {
      globalItemIndex++;
      totalDishesInRest++;
      const [name, description, price, originalPrice, isBestseller, isVeg, type] = dishArr;
      const customization = getCustomization(name, type, price);
      const isCustomizable = Boolean(customization);

      return {
        id: `item-${globalItemIndex}`,
        name,
        description,
        price,
        originalPrice: originalPrice || Math.round(price * 1.2),
        image: imageMap[type] || 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
        isVeg,
        isBestseller,
        rating: Number((4.6 + (globalItemIndex % 4) * 0.1).toFixed(1)),
        votes: 150 + (globalItemIndex * 17) % 850,
        customizable: isCustomizable,
        ...(isCustomizable ? { customizationOptions: customization } : {})
      };
    });

    return {
      id: `${rest.id}-${cat.id}`,
      name: cat.name,
      items
    };
  });

  return {
    id: rest.id,
    name: rest.name,
    slug: rest.slug,
    image: rest.image,
    bannerImage: rest.bannerImage,
    rating: rest.rating,
    reviewCount: rest.reviewCount,
    deliveryTime: rest.deliveryTime,
    distance: rest.distance,
    priceTier: rest.priceTier,
    costForTwo: rest.costForTwo,
    isPureVeg: rest.isPureVeg,
    cuisines: rest.cuisines,
    tag: rest.tag,
    isOpen: rest.isOpen,
    address: rest.address,
    description: rest.description,
    menuCategories
  };
});

// Output formatted file
const fileContent = `/**
 * Indian Food Delivery Platform - Restaurants & Dishes Dataset
 * 30 Authentic Indian Restaurants with 20+ diverse, authentic dishes each (600+ dishes).
 */

export const RESTAURANTS = ${JSON.stringify(compiledRestaurants, null, 2)};
`;

const outputPath = path.resolve('src/data/restaurants.js');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${compiledRestaurants.length} restaurants!`);
compiledRestaurants.forEach((r, idx) => {
  const count = r.menuCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  console.log(`${idx + 1}. ${r.name} -> ${count} dishes`);
});
