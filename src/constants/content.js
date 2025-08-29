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

export const PRIVACY_POLICY = {
  title: "Privacy Policy",
  lastUpdated: "August 29, 2025",
  introduction: "Welcome to SARIRA. Your privacy is important to us, and we are committed to protecting the personal information you share with us.",
  sections: [
    {
      title: "1. Information We Collect",
      content: `When you use our website or place an order, we may collect the following types of information:

• Personal Information: Name, phone number, email address, shipping address, billing address
• Payment Information: Processed securely via third-party payment gateways (we do not store your card details)
• Order History: Items purchased, quantity, order value, and delivery records
• Device/Usage Data: IP address, browser type, referring URL, and time spent on pages (for analytics)
• Communication: Emails, WhatsApp, or feedback shared with us`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your data to:

• Process and fulfill your orders
• Send order confirmations and delivery updates
• Provide customer support
• Send promotional emails (only with your consent)
• Improve our website, services, and user experience
• Prevent fraud and ensure secure transactions`
    },
    {
      title: "3. Sharing Your Information",
      content: `We do not sell, rent, or trade your personal information.

We only share it with:
• Logistics and courier partners (to deliver your order)
• Payment gateways (to securely process your transaction)
• Email/SMS marketing tools (only if you opt-in for updates)

All partners are expected to comply with strict data protection standards.`
    },
    {
      title: "4. Cookies & Tracking",
      content: "Our website uses cookies to enhance your browsing experience and help us understand user behavior. You can adjust your browser settings to disable cookies at any time, although this may impact site functionality."
    },
    {
      title: "5. Data Security",
      content: "We use industry-standard encryption and security protocols to protect your data from unauthorized access, misuse, or disclosure. Your payment details are handled by trusted third-party gateways that are PCI-DSS compliant."
    },
    {
      title: "6. Your Rights",
      content: `You may:
• Request access to your personal data
• Ask for corrections or deletions
• Opt out of promotional emails at any time
• Request account deactivation

For any of the above, email us at sariranutrition@gmail.com.`
    },
    {
      title: "7. Children's Privacy",
      content: "Our products are intended for purchase by adults. We do not knowingly collect personal data from children under 18."
    },
    {
      title: "8. Policy Updates",
      content: "We may update this Privacy Policy from time to time. The latest version will always be available on our website, and your continued use indicates acceptance."
    }
  ],
  contactInfo: {
    title: "Contact Us",
    subtitle: "For questions, feedback, or privacy concerns, contact:",
    company: "SARIRA Wellness",
    email: "sariranutrition@gmail.com",
    phone: "+91-7010422748",
    hours: "Customer Support Hours: Monday to Saturday, 10 AM - 6 PM IST"
  }
};

export const SHIPPING_DELIVERY = {
  title: "Shipping & Delivery",
  lastUpdated: "August 28, 2025",
  sections: [
    {
      title: "1. Shipping Coverage & Charges",
      content: `We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.

Free shipping on prepaid orders above ₹800.

For orders below ₹800, delivery charges vary by location.`
    },
    {
      title: "2. Order Processing Time",
      content: `Orders placed before 5 PM are processed within 1 business day.

Weekends & public holidays are not processing days.`
    },
    {
      title: "3. Delivery Timeline",
      content: `Estimated delivery: 6 – 10 working days across India, depending on your location.

Courier tracking via email or SMS provided at dispatch.`
    },
    {
      title: "4. Failed Deliveries or Erroneous Address",
      content: `Customers are responsible for reshipping fees if the order is returned due to incomplete or incorrect address.

SARIRA is not liable for lost packages from address errors.`
    },
    {
      title: "5. Order Cancellation & Refund",
      content: `If the order is cancelled before dispatch or cannot be delivered to your location, we issue a full refund—including shipping charges—within 48 business hours of processing.`
    }
  ],
  contactInfo: {
    title: "Need Help?",
    subtitle: "Our support team is here to assist you",
    content: "If you have any questions about shipping or delivery, please don't hesitate to contact us:",
    email: "sariranutrition@gmail.com",
    phone: "+91-7010422748",
    hours: "Customer Support Hours: Monday to Saturday, 10 AM - 6 PM IST"
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
    { href: '#home', label: 'Home', scrollToId: 'home-section' },
    { href: '/product', label: 'Product' },
    { href: '/store-locator', label: 'Store Locator' },
    { href: '#faq', label: 'FAQ', scrollToId: 'faq-section' },
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
  name: "Fig Malt - Nature's Pure Goodness",
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
    { text: "Naturally Sweet, No Added Sugar", icon: "ShieldCheck" },
    { text: "Rich in Iron & Fiber", icon: "Leaf" }
  ],
  badges: ["Organic", "No Added Sugar", "Traditional Recipe"],
  testimonial: "This was a game-changer for my energy levels! A must-have for mothers. - Priya, Chennai"
};

export const INGREDIENTS= {
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
    tamil: "அன்பும் பாரம்பரியமும் கலந்த நலம்",
    english: "Wellness blended with love and tradition"
  },
  story: [
    "SARIRA is born from a love for pure, traditional wellness. Our founder, inspired by the wisdom of Tamil grandmothers, envisioned a brand that brings ancient recipes to modern lives. We believe in food that heals, prepared with intention and care.",
    "Our Fig Malt is a tribute to this heritage—a blend of organic figs and premium nuts, crafted to nourish you from the inside out. It's more than a product; it's a piece of our culture, made for your well-being."
  ]
};

// Updated Journal section
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
  animation: {
    floating: {
      initial: { y: 0 },
      animate: { y: [-10, 10, -10], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
    }
  },
  list: [
    {
      title: "SARIRA Energy Balls",
      description: "No-bake, fiber-rich bite-sized snacks sweetened naturally with figs. Perfect for lunchboxes and pre-workout energy.",
      image: "src/assets/images/Recipes/SARIRA Energy Balls.jpg",
      animation: "floating"
    },
    {
      title: "Wholesome Toast Topper",
      description: "Warm toast with ghee or nut butter finished with a sprinkle of SARIRA Fig Malt for a quick nourishing bite.",
      image: "src/assets/images/Recipes/Wholesome Toast Topper.jpg",
      animation: "floating"
    },
    {
      title: "Nourishing Porridge Mix",
      description: "Stir SARIRA Fig Malt into millet or ragi porridge for a gentle, family-friendly breakfast.",
      image: "src/assets/images/Recipes/Nourishing Porridge Mix.jpg",
      animation: "floating"
    },
    {
      title: "Classic Warm Fig Malt Drink",
      description: "A daily immunity booster for all ages. Best served warm on an empty stomach to aid absorption and kickstart your day.",
      image: "src/assets/images/Recipes/Classic Warm Fig Malt Drink.png",
      animation: "floating"
    },
    {
      title: "Fig Malt Banana Smoothie",
      description: "A cool, creamy, fiber-rich breakfast. Blend one banana, a cup of milk, and a spoonful of SARIRA for a filling start.",
      image: "src/assets/images/Recipes/Fig Malt Banana Smoothie.png",
      animation: "floating"
    },
    {
      title: "Sugar-Free Fig Malt Muffins",
      description: "Kid-friendly, guilt-free snacks perfect for tiffin boxes. Use SARIRA as a natural sweetener in your favorite muffin recipe.",
      image: "src/assets/images/Recipes/Sugar-Free Fig Malt Muffins.png",
      animation: "floating"
    }
  ]
};

export const GALLERY = {
  title: "Our Visual Story",
  subtitle: "A glimpse into the world of SARIRA",
  animation: {
    floating: {
      initial: { y: 0 },
      animate: { y: [-10, 10, -10], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
    }
  },
  images: [
    {
      src: "src/assets/images/gallery/ph01.jpg",
      alt: "SARIRA lifestyle moment with product in use",
      animation: "floating"
    },
    {
      src: "src/assets/images/gallery/ph2.jpg",
      alt: "Close-up of SARIRA ingredients and textures",
      animation: "floating"
    },
    {
      src: "src/assets/images/gallery/ph3.jpg",
      alt: "Family enjoying SARIRA-inspired nourishment",
      animation: "floating"
    },
    {
      src: "src/assets/images/gallery/ph04.jpg",
      alt: "Traditional kitchen scene with SARIRA elements",
      animation: "floating"
    },
    {
      src: "src/assets/images/gallery/ph5.jpg",
      alt: "Prepared serving showcasing SARIRA Fig Malt",
      animation: "floating"
    },
    {
      src: "src/assets/images/gallery/ph6.jpg",
      alt: "Natural setting highlighting SARIRA wellness theme",
      animation: "floating"
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

export const TAMIL_CULTURE = {
  title: "Rooted in Tamil Tradition",
  subtitle: "A heritage of holistic wellness",
  content: [
    "She trusted her senses, her soil, and the timeless science passed down on banana leaves — not textbooks. To her, wellness was never a trend; it was instinct. Every meal she prepared carried the wisdom of generations before her. You call it functional food. She simply called it breakfast. The West calls it gut health. She just reminded you not to skip vendhaya kanji on Mondays.",
    "Her kitchen was her pharmacy, her ladle the doctor's tool. A pinch of turmeric soothed inflammation, sukku kaapi awakened the body at dawn, and figs — nature's sweetest gift — nourished strength and fertility. She didn't chase nutrition labels, because she already knew which grain healed, which spice protected, and which fruit gave life.",
    "What she passed on was more than recipes; it was a philosophy of living. A way where food was love, medicine, and wellness — all in one."
  ],
  highlights: [
    {
      title: "Ancient Wisdom",
      description: "Centuries of traditional knowledge passed down through generations"
    },
    {
      title: "Siddha Heritage",
      description: "Incorporating principles from Tamil's ancient medical system"
    },
    {
      title: "Natural Living",
      description: "Embracing nature's gifts for holistic wellness"
    }
  ]
};

export const RETURNS_REFUNDS = {
  title: "Returns & Refunds Policy",
  lastUpdated: "August 28, 2025",
  sections: [
    {
      title: "1. Eligible Returns",
      content: "• We accept unopened items in original packaging only, provided they are returned within 7 days of delivery.\n• Guests outside this timeframe or with opened items are not eligible."
    },
    {
      title: "2. Damaged or Incorrect Items",
      content: "• If you receive a defective, damaged, or incorrect product, contact us within 48 hours with photographic proof. We will arrange a refund or ship a replacement."
    },
    {
      title: "3. Non-Returnable Items",
      content: "• Opened or used food products.\n• Items damaged due to your fault.\n• Returns made after 7 days of delivery."
    },
    {
      title: "4. Refund Process",
      content: "Once approved, refunds are processed to the original payment method within 5–7 working days—deducting any return shipping charges if applicable"
    }
  ],
  contactInfo: {
    title: "📩 Customer Support",
    subtitle: "Need help?",
    content: "Reach us at:",
    email: "📧 sariranutrition@gmail.com",
    phone: "📞 +91 7010422748 (WhatsApp support available)",
    hours: "Hours: Mon-Sat, 10 AM – 6 PM"
  }
};

export const TERMS_OF_SERVICE = {
  title: "Terms of Service",
  lastUpdated: "August 28, 2025",
  introduction: "Welcome to www.sarirawellness.com (the \"Website\"), operated by SARIRA Wellness. By accessing or using our website, purchasing our products, or interacting with our services, you agree to the following terms and conditions.\nPlease read them carefully before using this site.",
  sections: [
    {
      title: "1. Eligibility",
      content: "You must be at least 18 years of age to purchase from our website. By using the site, you confirm that you are legally capable of entering into a contract."
    },
    {
      title: "2. Product Information",
      content: "We make every effort to display product descriptions, ingredients, prices, and images accurately. However, SARIRA does not warrant that all product details are always current or error-free. We reserve the right to modify product specifications without prior notice."
    },
    {
      title: "3. Orders & Payments",
      content: "All orders placed through the website are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including pricing errors or stock availability. Payments must be made using approved payment methods (UPI, cards, net banking, etc.). We do not store your payment details."
    },
    {
      title: "4. Shipping & Delivery",
      content: "Orders are processed within 1–2 business days. Delivery timelines are estimates and not guaranteed. For full details, please refer to our [Shipping Policy]."
    },
    {
      title: "5. Returns & Refunds",
      content: "We accept returns only in cases of damaged, defective, or incorrect items. Refunds will be processed as per our [Return Policy]. SARIRA reserves the right to reject any return request that does not meet our criteria."
    },
    {
      title: "6. Use of Website",
      content: "You agree not to misuse the website or its content. You may not:\n• Use the website for unlawful or fraudulent purposes\n• Attempt to gain unauthorized access to our systems\n• Copy, distribute, or reproduce any content without permission"
    },
    {
      title: "7. Intellectual Property",
      content: "All content on this site — including logos, product descriptions, images, and text — is the property of SARIRA and protected under applicable copyright and trademark laws."
    },
    {
      title: "8. Limitation of Liability",
      content: "SARIRA shall not be liable for any direct, indirect, incidental, or consequential damages that result from:\n• The use or inability to use the website\n• Product misuse\n• Delays or failure in delivery beyond our control"
    },
    {
      title: "9. Privacy",
      content: "Your personal information is handled in accordance with our [Privacy Policy]. By using our site, you consent to the collection and use of your data as described there."
    },
    {
      title: "10. Modifications to Terms",
      content: "We reserve the right to update or change these terms at any time. Continued use of the website after any changes implies acceptance of the new terms."
    },
    {
      title: "11. Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Chennai, Tamil Nadu."
    }
  ],
  contactInfo: {
    title: "📩 Contact Us",
    content: "For questions about these Terms, contact us at:",
    email: "📧 sariranutrition@gmail.com",
    phone: "📞+91-7010422748"
  },
  footer: "SARIRA – Wellness with Transparency.\nThank you for choosing us to be part of your health journey."
};

export const IMAGES = {
  logo: "sarira-logo.png",
  productMain: "product-main.jpg",
  traditionalKitchen: "traditional-kitchen.jpg",
  grandmothersHands: "grandmothers-hands.jpg",
  figTreeVideo: "fig-tree-video.mp4",
  bgTexture: "background-texture.jpg"
};