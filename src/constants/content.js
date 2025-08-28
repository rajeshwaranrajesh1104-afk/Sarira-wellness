// SARIRA Website Content Configuration
// Edit this file to update all text content across the website

export const SITE_CONFIG = {
  name: "SARIRA",
  tagline: "Functional Wellness Rooted in Tradition",
  description: "Functional wellness rooted in Tamil tradition, blended for today's lifestyle.",
  contact: {
    phone: "+91-7010422748",
    email: "sariranutrition@gmail.com",
    whatsapp: "https://wa.me/917010422748",
    address: "1/40, 6 PCM Colony, ST.Thomas Mount, Chennai-600016"
  },
  social: {
    instagram: "https://www.instagram.com/sarira.wellness",
    facebook: "#",
    youtube: "#"
  }
};

export const NAVIGATION = {
  main: [
    { href: '/#home', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/about-us', label: 'About' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/#wellness-ai', label: 'Wellness AI'}
  ],
  footer: [
    { href: '/#home', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/store-locator', label: 'Store Locator' },
    { href: '/#faq', label: 'FAQ' },
  ],
  policies: [
    { href: '/shipping-and-delivery', label: 'Shipping & Delivery' },
    { href: '/returns-and-refunds', label: 'Returns & Refunds' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ]
};

export const HERO = {
  headlines: [
    "Feed Your Roots. Fuel Your Rise.",
    "Ancient Wisdom. Modern Wellness.",
    "Nourish Your Body. Soothe Your Soul."
  ],
  subtitle: "Ancient Tamil wisdom meets modern nutrition. Discover SARIRA's Fig Malt — your gateway to holistic wellness, crafted with time-honored traditions.",
  benefits: [
    { text: "Fertility Boost", icon: "HeartPulse" },
    { text: "Postpartum Support", icon: "Baby" },
    { text: "Immunity", icon: "ShieldCheck" },
    { text: "No Preservatives", icon: "Sparkles" }
  ],
  guarantee: "Made with 100% Organic Figs & Premium Nuts. No Added Sugar. No Preservatives."
};

export const PRODUCT = {
  name: "SARIRA Fig Malt",
  subtitle: "Made with Organic Figs & Premium Nuts",
  price: "₹299",
  originalPrice: "₹349",
  discount: "15% Off",
  weight: "200g Pouch",
  servings: "One pouch lasts approximately 10-14 servings.",
  benefits: [
    "Fertility booster",
    "Postpartum nourishment", 
    "Improves gut health",
    "Naturally sweet – no added sugar",
    "Rich in iron & fiber"
  ],
  keyBenefits: [
    { text: "Fertility Booster", icon: "Leaf" },
    { text: "Postpartum Nourishment", icon: "HeartHandshake" },
    { text: "Improves Gut Health", icon: "Brain" },
    { text: "Naturally Sweet, No Added Sugar", icon: "Leaf" },
    { text: "Rich in Iron & Fiber", icon: "ShieldCheck" }
  ],
  badges: ["Organic", "No Added Sugar", "Traditional Recipe"],
  testimonial: "This was a game-changer for my energy levels! A must-have for mothers. - Priya, Chennai"
};

export const INGREDIENTS = {
  title: "The Power of Our Ingredients",
  subtitle: "Simple, pure, and chosen with purpose.",
  list: [
    { 
      name: "Organic Fig (அத்திப்பழம்)", 
      description: "A powerhouse of dietary fiber, figs support excellent gut health, aid digestion, and are naturally rich in iron and calcium, making them ideal for postpartum recovery and boosting fertility.",
      icon: "Leaf"
    },
    { 
      name: "Almonds (பாதாம்)", 
      description: "Packed with Vitamin E and healthy fats, almonds are renowned for enhancing brain function, promoting radiant skin, and providing sustained energy throughout the day.",
      icon: "Brain"
    },
    { 
      name: "Cashews (முந்திரி)", 
      description: "A creamy, delicious source of essential minerals like magnesium and copper, which are vital for maintaining strong bones, a healthy immune system, and robust nerve function.",
      icon: "Sprout"
    }
  ]
};

export const HOW_TO_USE = {
  title: "Versatile & Easy to Use",
  subtitle: "Incorporate SARIRA Fig Malt into your daily routine",
  methods: [
    {
      title: "Toast Topper",
      description: "Spread ghee or nut butter on warm toast, then sprinkle 1 tsp of Fig Malt on top. Slightly melts and caramelizes—kids love it!",
      icon: "Sandwich"
    },
    {
      title: "String Hopper Topping",
      description: "Mix Fig Malt with grated coconut and serve over warm string hoppers for a traditional-style sweet breakfast.",
      icon: "Utensils"
    },
    {
      title: "Chapati / Paratha Filling",
      description: "Add Fig Malt and chopped nuts into a folded chapati or roll for a hidden energy-boosting surprise inside every bite!",
      icon: "Soup"
    },
    {
      title: "Toddler & Postpartum Meal",
      description: "Add to ragi/millet kanji, mashed bananas, or dal mash for a gentle, sweet, and nutrient-packed meal.",
      icon: "Baby"
    }
  ]
};

export const BENEFITS = {
  title: "Wellness for Every Chapter",
  subtitle: "Nourishing solutions for every stage of life's journey.",
  categories: [
    { name: "Organic Baby Foods", icon: "Baby" },
    { name: "Pregnancy & Lactation", icon: "Heart" },
    { name: "Beauty Essentials", icon: "Sparkles" },
    { name: "Immunity Booster", icon: "Shield" },
    { name: "Herbal Powder", icon: "Leaf" },
    { name: "Healthy Breakfast", icon: "Coffee" },
    { name: "Healthy Snack & Sweets", icon: "Cookie" },
    { name: "Honey Based Products", icon: "Droplets" },
    { name: "Nuts & Spices", icon: "Nut" }
  ]
};

export const TESTIMONIALS = {
  title: "Voices From Our Community",
  subtitle: "Real stories from families who've embraced our traditions",
  list: [
    {
      quote: "My 4-year-old is a picky eater, but she loves her 'figgy milk' every morning. It's such a relief to know she's getting the iron she needs without any fuss. A must-have for mothers!",
      name: "Priya S.",
      location: "Chennai",
      initials: "PS"
    },
    {
      quote: "I've replaced my evening coffee with a warm cup of Fig Malt, and the difference is amazing. I sleep better and feel more energetic. It has an authentic, earthy taste that feels so pure.",
      name: "Anand M.",
      location: "Coimbatore",
      initials: "AM"
    },
    {
      quote: "As someone recovering from a long illness, SARIRA has been a blessing. It's gentle on my stomach and has helped me regain my strength. This isn't just a product; it's nourishment.",
      name: "Kavitha R.",
      location: "Madurai",
      initials: "KR"
    }
  ]
};

export const ABOUT = {
  title: "Our Story: From Ancient Wisdom to Modern Wellness",
  quote: {
    tamil: "அந்தணர்நூல் வழி நின் றார்அத்திப்பழம் பபால்",
    english: "A Sangam poetry metaphor comparing pure character to a fig's sweetness."
  },
  story: [
    "SARIRA is born from a love for pure, traditional wellness. Our founder, inspired by the wisdom of Tamil grandmothers, envisioned a brand that brings ancient recipes to modern lives. We believe in food that heals, prepared with intention and care.",
    "Our Fig Malt is a tribute to this heritage—a blend of organic figs and premium nuts, crafted to nourish you from the inside out. It's more than a product; it's a piece of our culture, made for your well-being."
  ]
};

export const JOURNAL = {
  title: "SARIRA Journal – Where Food Meets Philosophy",
  subtitle: "Discover the stories behind our ingredients and traditions",
  posts: [
    {
      title: "Nature’s Sweetness: Fig, Honey, and Jaggery Traditions",
      description: "A visual journey through time-honored natural sweeteners used in Tamil homes for balanced energy and wholesome taste.",
      image: "src/assets/images/journal/image01.jpg",
      link: "/tamil-culture"
    },
    {
      title: "Everyday Wellness in the Tamil Kitchen",
      description: "Scenes from a warm, working kitchen where simple, fresh ingredients become deeply nourishing food.",
      image: "src/assets/images/journal/image02.jpg",
      link: "/tamil-culture"
    },
    {
      title: "Food as Care: Postpartum and Family Nourishment",
      description: "Gentle, restorative foods rooted in tradition that support mothers, children, and elders alike.",
      image: "src/assets/images/journal/image03.jpg",
      link: "/tamil-culture"
    },
    {
      title: "Siddha Wisdom at Home: Healing Through Ingredients",
      description: "A look at everyday ingredients through the Siddha lens—balancing body, mind, and spirit.",
      image: "src/assets/images/journal/image04.png",
      link: "/tamil-culture"
    },
    {
      title: "Growing Strong: Nutrition for Active Kids",
      description: "Wholesome meals and snacks that fuel play, learning, and healthy growth—without refined sugar.",
      image: "src/assets/images/journal/image05.jpg",
      link: "/tamil-culture"
    },
    {
      title: "Gut Health, Inner Balance",
      description: "Fermented foods, fiber-rich fruits, and mindful eating—timeless practices for a happy gut.",
      image: "src/assets/images/journal/image06.jpg",
      link: "/tamil-culture"
    }
  ]
};

export const COMMUNITY = {
  title: "Join the SARIRA Circle",
  subtitle: "Become part of our wellness community",
  sections: [
    {
      title: "For Families",
      description: "Join our growing community of families who prioritize natural wellness. Get access to exclusive content and special offers.",
      icon: "Home"
    },
    {
      title: "Nourishing Recipes",
      description: "Discover creative and delicious ways to incorporate SARIRA Fig Malt into your daily meals and snacks.",
      icon: "Utensils"
    },
    {
      title: "For Stores & Retailers",
      description: "Bring SARIRA to Your Shelf — and to Your Community. Join our growing network of trusted resellers bringing authentic Tamil wellness to homes across India.",
      icon: "Store"
    }
  ]
};

export const FAQ = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What is SARIRA Fig Malt made of?",
      answer: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. No preservatives, no refined sugar, and no artificial flavors — just clean, plant-based nutrition."
    },
    {
      question: "Is SARIRA safe for children and elders?",
      answer: "Yes! SARIRA is gentle, nutritious, and family-friendly, suitable for children above 1 year and elders alike. It supports digestion, immunity, and energy in all age groups."
    },
    {
      question: "Can I use SARIRA as a sugar substitute?",
      answer: "Absolutely. SARIRA Fig Malt has a naturally sweet taste from figs and can be used in place of refined sugar in milk, tea, porridge, baking, or toast toppings."
    },
    {
      question: "What are the health benefits of SARIRA?",
      answer: "SARIRA supports:\n• Digestive health (rich in fiber)\n• Energy and stamina\n• Iron and calcium intake\n• Gut-friendly sweetness\n• Gentle detox and immunity support"
    },
    {
      question: "How do I consume SARIRA Fig Malt?",
      answer: "You can:\n• Mix 1 tbsp with warm milk or water\n• Add to smoothies or porridge\n• Use as a toast topping\n• Bake into muffins or energy balls\nAvoid boiling directly to preserve nutrients."
    }
  ]
};

export const WELLNESS_AI = {
  title: "Your Personal Wellness AI",
  subtitle: "Curious about a specific health topic? Get a wellness tip rooted in Tamil tradition and modern science, powered by AI.",
  formTitle: "Wellness Tip Generator",
  formSubtitle: "Enter a topic like \"digestion\" or \"better sleep\" to receive a personalized tip.",
  suggestions: ["Digestion", "Better Sleep", "Energy Boost", "Stress Relief"]
};

export const RECIPES = {
  title: "One Spoon, Many Possibilities",
  subtitle: "Explore creative, everyday ways to use SARIRA Fig Malt",
  list: [
    {
      title: "SARIRA Energy Balls",
      description: "No-bake, fiber-rich bite-sized snacks sweetened naturally with figs. Perfect for lunchboxes and pre-workout energy.",
      image: "src/assets/images/Recipes/SARIRA Energy Balls.jpg"
    },
    {
      title: "Wholesome Toast Topper",
      description: "Warm toast with ghee or nut butter finished with a sprinkle of SARIRA Fig Malt for a quick nourishing bite.",
      image: "src/assets/images/Recipes/Wholesome Toast Topper.jpg"
    },
    {
      title: "Nourishing Porridge Mix",
      description: "Stir SARIRA Fig Malt into millet or ragi porridge for a gentle, family-friendly breakfast.",
      image: "src/assets/images/Recipes/Nourishing Porridge Mix.jpg"
    },
    {
      title: "Classic Warm Fig Malt Drink",
      description: "A daily immunity booster for all ages. Best served warm on an empty stomach to aid absorption and kickstart your day.",
      image: "src/assets/images/Recipes/Classic Warm Fig Malt Drink.png"
    },
    {
      title: "Fig Malt Banana Smoothie",
      description: "A cool, creamy, fiber-rich breakfast. Blend one banana, a cup of milk, and a spoonful of SARIRA for a filling start.",
      image: "src/assets/images/Recipes/Fig Malt Banana Smoothie.png"
    },
    {
      title: "Sugar-Free Fig Malt Muffins",
      description: "Kid-friendly, guilt-free snacks perfect for tiffin boxes. Use SARIRA as a natural sweetener in your favorite muffin recipe.",
      image: "src/assets/images/Recipes/Sugar-Free Fig Malt Muffins.png"
    }
  ]
};

export const GALLERY = {
  title: "Our Visual Story",
  subtitle: "A glimpse into the world of SARIRA",
  images: [
    {
      src: "src/assets/images/gallery/ph01.jpg",
      alt: "SARIRA lifestyle moment with product in use"
    },
    {
      src: "src/assets/images/gallery/ph2.jpg",
      alt: "Close-up of SARIRA ingredients and textures"
    },
    {
      src: "src/assets/images/gallery/ph3.jpg",
      alt: "Family enjoying SARIRA-inspired nourishment"
    },
    {
      src: "src/assets/images/gallery/ph04.jpg",
      alt: "Traditional kitchen scene with SARIRA elements"
    },
    {
      src: "src/assets/images/gallery/ph5.jpg",
      alt: "Prepared serving showcasing SARIRA Fig Malt"
    },
    {
      src: "src/assets/images/gallery/ph6.jpg",
      alt: "Natural setting highlighting SARIRA wellness theme"
    }
  ]
};

export const CONTACT = {
  title: "Get in Touch",
  subtitle: "We're here to help you with any questions about SARIRA Fig Malt",
  info: [
    {
      icon: "MessageSquare",
      title: "WhatsApp Support",
      description: "Quick responses for all your queries",
      value: "+91-7010422748",
      href: "https://wa.me/917010422748"
    },
    {
      icon: "Mail",
      title: "Email Support", 
      description: "Detailed assistance via email",
      value: "sariranutrition@gmail.com",
      href: "mailto:sariranutrition@gmail.com"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      description: "Monday - Saturday: 10:00 AM - 6:00 PM",
      value: "Sunday: Closed"
    },
    {
      icon: "MapPin",
      title: "Head Office",
      description: "1/40, 6 PCM Colony, ST.Thomas Mount",
      value: "Chennai-600016"
    }
  ]
};

export const IMAGES = {
  logo: "sarira-logo.png",
  productMain: "product-main.jpg",
  traditionalKitchen: "traditional-kitchen.jpg",
  grandmothersHands: "grandmothers-hands.jpg",
  figTreeVideo: "fig-tree-video.mp4",
  bgTexture: "background-texture.jpg"
};