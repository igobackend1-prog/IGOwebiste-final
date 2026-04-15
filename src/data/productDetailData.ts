export interface ProductPricing {
  retail: number;
  wholesale: number;
  bulk: number;
}

export interface ProductDetail {
  id: string;
  category: string;
  subcategory?: string;
  categoryName: string;
  name: string;
  description: string;
  features: string[];
  packSizes: string[];
  pricing: ProductPricing;
  tabDescription: string;
  howToUse: string[];
  specifications: Record<string, string>;
  relatedProducts: string[];
  unsplashKeyword: string;
}

export const productDetailData: ProductDetail[] = [
  // --- DIVISION 1: AGRI-FARMING INPUTS ---

  // ── SEEDS overview cards (subcategory: seeds) ─────────────────────────────
  {
    id: "vegetable-seeds-precision",
    category: "agri-inputs", subcategory: "seeds", categoryName: "Agri-Inputs",
    name: "Precision Vegetable Seeds",
    description: "High-yield hybrid vegetable seeds across 20 varieties for polyhouse & protected cultivation.",
    features: ["98% Germination", "Disease resistant", "High vigor", "Uniform growth"],
    packSizes: ["10g", "50g", "100g"],
    pricing: { retail: 120, wholesale: 90, bulk: 75 },
    tabDescription: "Our precision vegetable seeds are bred for high performance in controlled environments, ensuring maximum yields for commercial growers.",
    howToUse: ["Sow in pro-trays", "Maintain moisture", "Transplant after 25 days"],
    specifications: { "Purity": "99%", "Type": "Hybrid" },
    relatedProducts: ["fruit-seeds-exotic", "flower-seeds-pro"],
    unsplashKeyword: "vegetable seeds"
  },
  {
    id: "fruit-seeds-exotic",
    category: "agri-inputs", subcategory: "seeds", categoryName: "Agri-Inputs",
    name: "Exotic Fruit Seeds",
    description: "Premium seeds for high-value fruits — Mango, Papaya, Guava, Pomegranate & more.",
    features: ["Certified quality", "Fast establishing", "High brix level"],
    packSizes: ["Packs of 50 seeds"],
    pricing: { retail: 500, wholesale: 400, bulk: 350 },
    tabDescription: "Sourced from world-class breeders, these seeds are the starting point for premium fruit production.",
    howToUse: ["Pre-soak if required", "Seed in nursery", "Grafting support available"],
    specifications: { "Variety": "Elite", "Origin": "Global Selection" },
    relatedProducts: ["vegetable-seeds-precision"],
    unsplashKeyword: "fruit seeds"
  },
  {
    id: "flower-seeds-pro",
    category: "agri-inputs", subcategory: "seeds", categoryName: "Agri-Inputs",
    name: "Professional Flower Seeds",
    description: "Commercial floriculture seeds for Marigold, Jasmine, and Rose production.",
    features: ["Consistent bloom size", "Vibrant colors", "Deep root system"],
    packSizes: ["Bulk packets", "Seedling trays"],
    pricing: { retail: 300, wholesale: 250, bulk: 200 },
    tabDescription: "High-density flower seeds designed for both fresh cut and industrial extraction markets.",
    howToUse: ["Nursery bed preparation", "Optimal spacing", "Balanced nutrition"],
    specifications: { "Bloom period": "Extended", "Color": "Standardized" },
    relatedProducts: ["herbs-seeds"],
    unsplashKeyword: "flower seeds"
  },
  {
    id: "medicinal-seeds",
    category: "agri-inputs", subcategory: "seeds", categoryName: "Agri-Inputs",
    name: "Medicinal & Aromatic Seeds",
    description: "High-value seeds for Ayurvedic and pharmaceutical crop production.",
    features: ["Verified species", "High active ingredient content"],
    packSizes: ["100g bags"],
    pricing: { retail: 450, wholesale: 380, bulk: 320 },
    tabDescription: "Carefully selected varieties meeting pharmaceutical grade extraction standards.",
    howToUse: ["Climate specific sowing", "Organic inputs only recommended"],
    specifications: { "Alkaloid content": "High", "Type": "Open Pollinated" },
    relatedProducts: ["herbs-seeds"],
    unsplashKeyword: "herbs"
  },
  {
    id: "herbs-seeds",
    category: "agri-inputs", subcategory: "seeds", categoryName: "Agri-Inputs",
    name: "Premium Herb Seeds",
    description: "Seeds for Basil, Parsley, Oregano and other culinary herbs.",
    features: ["High aroma", "Rapid growth", "Pest resistant"],
    packSizes: ["10g sachets", "50g tins"],
    pricing: { retail: 80, wholesale: 60, bulk: 50 },
    tabDescription: "Fresh herb seeds for professional hydroponic and polyhouse setups.",
    howToUse: ["Hydroponic friendly", "Surface sowing", "Moderate light"],
    specifications: { "Germination": "10-14 days", "Life cycle": "Short" },
    relatedProducts: ["vegetable-seeds-precision"],
    unsplashKeyword: "herbs seeds"
  },

  // ── VEGETABLE SEEDS — individual varieties (subcategory: veg-seeds) ────────
  {
    id: "seed-tomato", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Tomato Seeds", description: "High-yielding hybrid tomato seeds for polyhouse and open-field cultivation. Suitable for both fresh market and processing.",
    features: ["98% germination rate", "Fusarium wilt resistant", "Indeterminate variety", "Suitable for greenhouse & open field"],
    packSizes: ["5g", "10g", "50g", "100g"],
    pricing: { retail: 180, wholesale: 140, bulk: 110 },
    tabDescription: "Our hybrid tomato seeds deliver consistent fruit size, deep red color, and extended shelf life, ideal for commercial polyhouse growers.",
    howToUse: ["Sow in seedling trays at 1cm depth", "Germinate at 22–26°C", "Transplant 25–30 days after sowing", "Stake plants at 30cm height"],
    specifications: { "Type": "Hybrid F1", "Maturity": "60–75 days", "Fruit weight": "120–180g", "Purity": "99%" },
    relatedProducts: ["seed-capsicum", "seed-cucumber", "vegetable-seeds-precision"],
    unsplashKeyword: "tomato seeds"
  },
  {
    id: "seed-capsicum", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Capsicum Seeds", description: "Premium coloured capsicum seeds (Red, Yellow, Green) for high-value polyhouse production.",
    features: ["Vivid block colour", "Thick-walled fruit", "Long shelf life", "High export market value"],
    packSizes: ["5g", "10g", "50g"],
    pricing: { retail: 350, wholesale: 280, bulk: 240 },
    tabDescription: "Capsicum seeds engineered for uniform fruit sizing and extended post-harvest handling, meeting export grade standards.",
    howToUse: ["Sow in pro-trays", "Maintain 24–28°C soil temperature", "Transplant at 4-leaf stage", "Trellis support recommended"],
    specifications: { "Type": "Hybrid F1", "Maturity": "70–80 days", "Fruit weight": "150–200g", "Purity": "99%" },
    relatedProducts: ["seed-tomato", "seed-brinjal"],
    unsplashKeyword: "capsicum seeds"
  },
  {
    id: "seed-cucumber", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Cucumber Seeds", description: "Parthenocarpic cucumber seeds ideal for shade net and polyhouse cultivation without pollination dependency.",
    features: ["Parthenocarpic fruiting", "Crisp texture", "Low bitterness", "High yield per plant"],
    packSizes: ["10g", "50g", "100g"],
    pricing: { retail: 220, wholesale: 175, bulk: 145 },
    tabDescription: "These cucumber seeds are optimised for protected cultivation, providing consistent yield even without pollinators.",
    howToUse: ["Direct sow or transplant", "Trellis at 30cm intervals", "Harvest at 18–22cm length"],
    specifications: { "Type": "Hybrid, Parthenocarpic", "Maturity": "45–55 days", "Fruit length": "18–22cm", "Purity": "99%" },
    relatedProducts: ["seed-tomato", "seed-bittergourd"],
    unsplashKeyword: "cucumber seeds"
  },
  {
    id: "seed-brinjal", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Brinjal Seeds", description: "Long purple brinjal hybrid seeds with high fruit set and disease tolerance for Indian conditions.",
    features: ["Long glossy fruits", "High anthocyanin content", "Fusarium tolerant", "High fruit count per plant"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 150, wholesale: 120, bulk: 95 },
    tabDescription: "Brinjal seeds selected for superior fruit finish and uniform size, preferred in high-turnover vegetable markets.",
    howToUse: ["Nursery sowing at 0.5cm depth", "Transplant after 30 days", "Provide trellising for large varieties"],
    specifications: { "Type": "Hybrid F1", "Maturity": "65–75 days", "Fruit colour": "Purple", "Purity": "99%" },
    relatedProducts: ["seed-capsicum", "seed-tomato"],
    unsplashKeyword: "brinjal seeds"
  },
  {
    id: "seed-cabbage", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Cabbage Seeds", description: "Round head hybrid cabbage seeds with excellent disease resistance and tight head formation.",
    features: ["Compact round heads", "Tip burn resistant", "High storability", "Wide adaptability"],
    packSizes: ["10g", "50g", "100g"],
    pricing: { retail: 130, wholesale: 100, bulk: 80 },
    tabDescription: "High-density cabbage seeds for commercial field and polyhouse production with superior head uniformity.",
    howToUse: ["Raised nursery bed recommended", "Transplant at 4–5 leaf stage", "Spacing: 45×45cm"],
    specifications: { "Type": "Hybrid F1", "Maturity": "70–80 days", "Head weight": "1–2 kg", "Purity": "99%" },
    relatedProducts: ["seed-cauliflower", "seed-broccoli"],
    unsplashKeyword: "cabbage seeds"
  },
  {
    id: "seed-cauliflower", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Cauliflower Seeds", description: "White curd hybrid cauliflower seeds with high curd density and self-wrapping leaves.",
    features: ["Compact dense curd", "Self-wrapping leaf cover", "Consistent maturity", "Good post-harvest life"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 160, wholesale: 125, bulk: 100 },
    tabDescription: "Cauliflower seeds producing uniform white curds with excellent shelf life for market and cold chain distribution.",
    howToUse: ["Raise in nursery trays", "Transplant after 25 days", "Irrigate regularly at curd formation"],
    specifications: { "Type": "Hybrid F1", "Maturity": "75–90 days", "Curd colour": "White", "Purity": "99%" },
    relatedProducts: ["seed-cabbage", "seed-broccoli"],
    unsplashKeyword: "cauliflower seeds"
  },
  {
    id: "seed-broccoli", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Broccoli Seeds", description: "Green dome broccoli seeds for premium fresh-market and export supply chains.",
    features: ["Uniform dome heads", "Deep green colour", "High glucoraphanin content", "Cold-tolerant"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 280, wholesale: 220, bulk: 185 },
    tabDescription: "Broccoli seeds selected for tight bead formation and vibrant green colour — ideal for retail and hotel supply.",
    howToUse: ["Sow in nursery trays", "Transplant at 4-leaf stage", "Harvest before florets open"],
    specifications: { "Type": "Hybrid F1", "Maturity": "60–75 days", "Head weight": "300–500g", "Purity": "99%" },
    relatedProducts: ["seed-cabbage", "seed-cauliflower"],
    unsplashKeyword: "broccoli seeds"
  },
  {
    id: "seed-carrot", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Carrot Seeds", description: "Nantes-type and hybrid red carrot seeds optimised for heavy soils and polyhouse containers.",
    features: ["Uniform cylindrical roots", "Deep orange pigment", "High sugar content", "Good shelf life"],
    packSizes: ["25g", "100g", "500g"],
    pricing: { retail: 85, wholesale: 65, bulk: 50 },
    tabDescription: "Carrot seeds delivering consistent root diameter and depth, with natural sweetness suited for fresh market and processing.",
    howToUse: ["Direct sow in raised beds", "Thin seedlings at 5cm height", "Harvest at 60–70 days"],
    specifications: { "Type": "Hybrid, Nantes", "Maturity": "60–70 days", "Root length": "15–18cm", "Purity": "98%" },
    relatedProducts: ["seed-radish", "seed-beetroot"],
    unsplashKeyword: "carrot seeds"
  },
  {
    id: "seed-radish", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Radish Seeds", description: "Fast-maturing red and white radish seeds ready for harvest in 25–35 days.",
    features: ["Ultra-fast maturity", "Crisp texture", "Mild flavour", "Ideal for succession planting"],
    packSizes: ["50g", "250g", "1kg"],
    pricing: { retail: 55, wholesale: 42, bulk: 35 },
    tabDescription: "Radish seeds that deliver quick returns — perfect for gap filling between main crops in polyhouse schedules.",
    howToUse: ["Direct sow at 1cm depth", "Thin to 5cm spacing", "Harvest at 25–35 days"],
    specifications: { "Type": "Open Pollinated / Hybrid", "Maturity": "25–35 days", "Shape": "Round / Cylindrical", "Purity": "98%" },
    relatedProducts: ["seed-carrot", "seed-beetroot"],
    unsplashKeyword: "radish seeds"
  },
  {
    id: "seed-beetroot", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Beetroot Seeds", description: "Globe-shaped beetroot seeds rich in betalains for fresh market and juice extraction.",
    features: ["Deep red pigment", "Round globe shape", "High betaine content", "Good storability"],
    packSizes: ["50g", "200g"],
    pricing: { retail: 90, wholesale: 70, bulk: 58 },
    tabDescription: "Beetroot seeds producing uniform round globes with vivid colour, preferred by fresh juice vendors and supermarkets.",
    howToUse: ["Sow directly at 2cm depth", "Thin to 10cm spacing", "Harvest at 60–70 days"],
    specifications: { "Type": "Open Pollinated", "Maturity": "60–70 days", "Shape": "Globe", "Purity": "98%" },
    relatedProducts: ["seed-carrot", "seed-radish"],
    unsplashKeyword: "beetroot seeds"
  },
  {
    id: "seed-onion", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Onion Seeds", description: "High-TSS red onion hybrid seeds for storage, processing, and export markets.",
    features: ["High TSS (total soluble solids)", "Good pungency", "Excellent storage", "Uniform bulb shape"],
    packSizes: ["10g", "50g", "250g"],
    pricing: { retail: 210, wholesale: 165, bulk: 130 },
    tabDescription: "Red onion seeds offering strong bulb formation with high dry matter content — ideal for long-distance trade.",
    howToUse: ["Sow in nursery beds", "Transplant at 45 days", "Irrigate at bulbing stage regularly"],
    specifications: { "Type": "Hybrid F1", "Maturity": "110–120 days", "TSS": ">14%", "Purity": "99%" },
    relatedProducts: ["seed-tomato", "seed-capsicum"],
    unsplashKeyword: "onion seeds"
  },
  {
    id: "seed-peas", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Peas Seeds", description: "Tender garden peas seeds for snow peas, sugar snap, and dry pea cultivation.",
    features: ["Tender sweet pods", "High pod count", "Cold-season crop", "Dual use — fresh & dry"],
    packSizes: ["100g", "500g", "1kg"],
    pricing: { retail: 65, wholesale: 50, bulk: 40 },
    tabDescription: "Peas seeds delivering sweeter, more tender pods suited for premium vegetable markets and processing units.",
    howToUse: ["Direct sow in cool weather", "Provide trellis support", "Harvest at peak pod fill"],
    specifications: { "Type": "Open Pollinated / Hybrid", "Maturity": "55–65 days", "Pod length": "7–9cm", "Purity": "98%" },
    relatedProducts: ["seed-cucumber", "seed-bittergourd"],
    unsplashKeyword: "peas seeds"
  },
  {
    id: "seed-pumpkin", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Pumpkin Seeds", description: "Commercial pumpkin seeds for hybrid fruit varieties weighing 3–8 kg, suited for storage and export.",
    features: ["Large uniform fruit", "Long shelf life", "High carotene content", "Drought tolerant"],
    packSizes: ["50g", "200g"],
    pricing: { retail: 120, wholesale: 95, bulk: 78 },
    tabDescription: "Pumpkin seeds producing hard-rind, orange-fleshed fruits with high carotene and extended ambient storage life.",
    howToUse: ["Sow 2 seeds per pit", "Thin to 1 plant", "Allow 3×3m spacing"],
    specifications: { "Type": "Hybrid F1", "Maturity": "90–110 days", "Fruit weight": "3–8 kg", "Purity": "98%" },
    relatedProducts: ["seed-bittergourd", "seed-ridgegourd"],
    unsplashKeyword: "pumpkin seeds"
  },
  {
    id: "seed-bittergourd", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Bitter Gourd Seeds", description: "Hybrid bitter gourd (karela) seeds with high fruit count and smooth dark green skin.",
    features: ["High bitterness index", "Smooth skin", "Heavy yielder", "Good for diabetic diet market"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 145, wholesale: 115, bulk: 90 },
    tabDescription: "Bitter gourd seeds producing dark green, uniform fruits rich in medicinal alkaloids — premium pricing in metro markets.",
    howToUse: ["Soak seeds for 12 hours before sowing", "Sow in raised beds", "Trellis mandatory"],
    specifications: { "Type": "Hybrid F1", "Maturity": "55–65 days", "Fruit weight": "80–120g", "Purity": "98%" },
    relatedProducts: ["seed-ridgegourd", "seed-bottlegourd"],
    unsplashKeyword: "bitter gourd seeds"
  },
  {
    id: "seed-ridgegourd", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Ridge Gourd Seeds", description: "Long ridged gourd seeds for high-yield trellis cultivation in warm tropical conditions.",
    features: ["Long tender fruits", "Rapid fruit set", "Suited to warm climate", "Popular in South Indian markets"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 110, wholesale: 88, bulk: 72 },
    tabDescription: "Ridge gourd seeds delivering heavy crop loads with minimal care — suited for small and commercial farm operations.",
    howToUse: ["Pre-soak seeds 8 hours", "Sow at 2cm depth", "Provide overhead trellis"],
    specifications: { "Type": "Hybrid F1", "Maturity": "50–60 days", "Fruit length": "30–40cm", "Purity": "98%" },
    relatedProducts: ["seed-bittergourd", "seed-bottlegourd"],
    unsplashKeyword: "ridge gourd seeds"
  },
  {
    id: "seed-bottlegourd", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Bottle Gourd Seeds", description: "Long and round bottle gourd hybrid seeds with high water content and soft flesh.",
    features: ["High water content", "Soft edible skin", "Heat tolerant", "Early bearing"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 100, wholesale: 78, bulk: 62 },
    tabDescription: "Bottle gourd seeds producing tender, smooth fruits high in dietary fibre — a staple summer crop.",
    howToUse: ["Sow 2 seeds per hill", "Thin to 1 plant", "Provide trellis or ground cover"],
    specifications: { "Type": "Hybrid F1", "Maturity": "50–60 days", "Fruit shape": "Long / Round", "Purity": "98%" },
    relatedProducts: ["seed-ridgegourd", "seed-pumpkin"],
    unsplashKeyword: "bottle gourd seeds"
  },
  {
    id: "seed-spinach", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Spinach Seeds", description: "Dark green spinach seeds for polyhouse hydroponic and soil-based cultivation.",
    features: ["High iron content", "Rapid growth", "Bolt resistant", "Ideal for hydroponics"],
    packSizes: ["25g", "100g", "500g"],
    pricing: { retail: 70, wholesale: 55, bulk: 42 },
    tabDescription: "Spinach seeds producing dark, nutrient-dense leaves suited for premium retail, hotel, and QSR supply chains.",
    howToUse: ["Broadcast or row-sow", "Keep substrate moist", "Harvest 30–40 days at 15cm height"],
    specifications: { "Type": "Open Pollinated", "Maturity": "30–40 days", "Leaf colour": "Dark Green", "Purity": "98%" },
    relatedProducts: ["seed-lettuce", "seed-methi"],
    unsplashKeyword: "spinach seeds"
  },
  {
    id: "seed-lettuce", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Lettuce Seeds", description: "Butterhead, Romaine, and Lollo Rosso lettuce seeds for NFT and raft hydroponic systems.",
    features: ["Crisp head formation", "Multiple variety options", "Ideal for NFT systems", "Low bolting tendency"],
    packSizes: ["5g", "10g", "50g"],
    pricing: { retail: 260, wholesale: 205, bulk: 170 },
    tabDescription: "Lettuce seeds engineered for hydroponic systems — rapid germination, uniform head size, preferred by hotel and retail chains.",
    howToUse: ["Germinate on rockwool cubes", "Transfer to NFT channels at 5–7 days", "Harvest at 35–45 days"],
    specifications: { "Type": "Hybrid / Open Pollinated", "Maturity": "35–45 days", "System": "NFT, Raft, Soil", "Purity": "99%" },
    relatedProducts: ["seed-spinach", "seed-coriander"],
    unsplashKeyword: "lettuce seeds"
  },
  {
    id: "seed-coriander", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Coriander Seeds", description: "Dual-purpose coriander seeds for fresh leaf harvest and dried spice production.",
    features: ["High essential oil content", "Dual-purpose crop", "Fast leaf harvest", "Aromatic"],
    packSizes: ["50g", "250g", "1kg"],
    pricing: { retail: 45, wholesale: 35, bulk: 28 },
    tabDescription: "Coriander seeds producing aromatic leaves with high yield per cut — popular in fresh herb markets and processing units.",
    howToUse: ["Broadcast sow in beds", "Thin to 5cm spacing", "First cut at 30 days"],
    specifications: { "Type": "Open Pollinated", "Maturity": "30 days (leaf), 90 days (seed)", "Purity": "97%" },
    relatedProducts: ["seed-methi", "seed-spinach"],
    unsplashKeyword: "coriander seeds"
  },
  {
    id: "seed-methi", category: "agri-inputs", subcategory: "veg-seeds", categoryName: "Agri-Inputs",
    name: "Methi Seeds (Fenugreek)", description: "Fast-growing methi seeds for continuous cut-and-come-again leaf harvest.",
    features: ["Multiple cuts possible", "High iron & protein", "Quick turnaround", "Aromatic leaves"],
    packSizes: ["100g", "500g", "1kg"],
    pricing: { retail: 40, wholesale: 30, bulk: 24 },
    tabDescription: "Methi seeds with high leaf yield and multiple harvest potential — a low-input, high-output crop for urban farm setups.",
    howToUse: ["Broadcast sow densely", "Water daily", "First cut at 25 days; re-grows 2–3 times"],
    specifications: { "Type": "Open Pollinated", "Maturity": "25–30 days", "Purity": "97%" },
    relatedProducts: ["seed-coriander", "seed-spinach"],
    unsplashKeyword: "fenugreek seeds"
  },

  // ── FRUIT SEEDS — individual varieties (subcategory: fruit-seeds) ──────────
  {
    id: "seed-mango", category: "agri-inputs", subcategory: "fruit-seeds", categoryName: "Agri-Inputs",
    name: "Mango Seeds", description: "Polyembryonic mango seeds for rootstock preparation and dwarf grafting programs.",
    features: ["Polyembryonic varieties", "Vigorous root system", "Dwarf rootstock compatible", "Disease tolerant"],
    packSizes: ["10 seeds/pack", "50 seeds/pack"],
    pricing: { retail: 350, wholesale: 280, bulk: 230 },
    tabDescription: "Mango seeds selected for vigorous rootstock development — the foundation of a productive mango orchard.",
    howToUse: ["Remove seed from stone", "Sow immediately in nursery bed", "Transplant at 30cm height"],
    specifications: { "Type": "Polyembryonic", "Rootstock suitability": "High", "Germination": "85–90%" },
    relatedProducts: ["seed-papaya", "seed-guava"],
    unsplashKeyword: "mango seeds"
  },
  {
    id: "seed-papaya", category: "agri-inputs", subcategory: "fruit-seeds", categoryName: "Agri-Inputs",
    name: "Papaya Seeds", description: "Hybrid papaya seeds (Red Lady, CO-2) for high-yield dioecious and gynodioecious cultivation.",
    features: ["High fruit flesh ratio", "Red-orange flesh", "Sweet flavour (>12 Brix)", "Early bearing (8 months)"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 420, wholesale: 340, bulk: 280 },
    tabDescription: "Papaya seeds engineered for commercial production — quick-bearing, high-density planting with uniform fruit quality.",
    howToUse: ["Sow in polybags in nursery", "Transplant at 30–45 days", "Provide drip irrigation from transplanting"],
    specifications: { "Type": "Hybrid F1", "Maturity": "8–10 months (first fruit)", "Brix": ">12", "Purity": "99%" },
    relatedProducts: ["seed-mango", "seed-guava"],
    unsplashKeyword: "papaya seeds"
  },
  {
    id: "seed-guava", category: "agri-inputs", subcategory: "fruit-seeds", categoryName: "Agri-Inputs",
    name: "Guava Seeds", description: "White and pink-flesh guava seeds for orchard and container cultivation.",
    features: ["High Vitamin C content", "Multiple harvests/year", "Drought tolerant", "Container-friendly"],
    packSizes: ["25 seeds/pack", "100 seeds/pack"],
    pricing: { retail: 200, wholesale: 160, bulk: 130 },
    tabDescription: "Guava seeds delivering a hardy, high-vitamin crop suited to diverse agro-climatic zones across India.",
    howToUse: ["Sow in nursery polybags", "Transplant at 4–5 leaf stage", "Allow full sun exposure"],
    specifications: { "Type": "Open Pollinated", "Germination": "80–85%", "Flesh": "White / Pink" },
    relatedProducts: ["seed-papaya", "seed-lemon"],
    unsplashKeyword: "guava seeds"
  },
  {
    id: "seed-lemon", category: "agri-inputs", subcategory: "fruit-seeds", categoryName: "Agri-Inputs",
    name: "Lemon Seeds", description: "Acid lime and eureka lemon seeds for rootstock and direct cultivation.",
    features: ["High juice content", "Year-round bearing", "Aromatic rind", "Drought semi-tolerant"],
    packSizes: ["25 seeds/pack"],
    pricing: { retail: 180, wholesale: 140, bulk: 115 },
    tabDescription: "Lemon seeds offering strong rootstock sprouting and reliable acid lime production after grafting.",
    howToUse: ["Sow fresh seeds immediately", "Nursery polybag recommended", "Graft at 8–10mm stem diameter"],
    specifications: { "Type": "Open Pollinated", "Germination": "80%", "Juice content": "High" },
    relatedProducts: ["seed-guava", "seed-pomegranate"],
    unsplashKeyword: "lemon seeds"
  },
  {
    id: "seed-pomegranate", category: "agri-inputs", subcategory: "fruit-seeds", categoryName: "Agri-Inputs",
    name: "Pomegranate Seeds", description: "Bhagwa and Mridula variety pomegranate seeds for deep-red arils and processing industry.",
    features: ["Deep red arils", "Low bitterness", "High anthocyanin", "Export market suitable"],
    packSizes: ["25 seeds/pack", "100 seeds/pack"],
    pricing: { retail: 320, wholesale: 255, bulk: 210 },
    tabDescription: "Pomegranate seeds used for rootstock preparation and direct cultivation — Bhagwa variety is the gold standard for juice extraction.",
    howToUse: ["Stratify in moist sand for 30 days", "Sow at 1cm depth", "Thin to single plant"],
    specifications: { "Type": "Open Pollinated", "Aril colour": "Deep Red", "Germination": "75–80%" },
    relatedProducts: ["seed-lemon", "seed-mango"],
    unsplashKeyword: "pomegranate seeds"
  },
  {
    id: "seed-chikoo", category: "agri-inputs", subcategory: "fruit-seeds", categoryName: "Agri-Inputs",
    name: "Chikoo / Sapodilla Seeds", description: "Sapodilla seeds for rootstock propagation in tropical and semi-arid orchard systems.",
    features: ["Strong root system", "Excellent rootstock for grafting", "Highly drought tolerant", "Long productive life"],
    packSizes: ["25 seeds/pack"],
    pricing: { retail: 250, wholesale: 195, bulk: 160 },
    tabDescription: "Chikoo seeds providing a vigorous, drought-tolerant rootstock base for commercial orchard establishment.",
    howToUse: ["Sow fresh extracted seeds", "Maintain 25–30°C temperature", "Transplant at 20cm height"],
    specifications: { "Type": "Open Pollinated", "Germination": "70–75%", "Rootstock use": "Yes" },
    relatedProducts: ["seed-mango", "seed-guava"],
    unsplashKeyword: "chikoo sapodilla"
  },
  {
    id: "seed-custardapple", category: "agri-inputs", subcategory: "fruit-seeds", categoryName: "Agri-Inputs",
    name: "Custard Apple Seeds", description: "Sitaphal seeds for tropical orchard propagation with sweet, creamy flesh.",
    features: ["Sweet creamy pulp", "High market demand", "Tropical hardy", "Multipurpose orchard tree"],
    packSizes: ["25 seeds/pack"],
    pricing: { retail: 200, wholesale: 155, bulk: 125 },
    tabDescription: "Custard apple seeds for nursery rootstock development and direct seedling production — a premium orchard crop.",
    howToUse: ["Sow seeds horizontally at 1.5cm depth", "Germinate at 25–30°C", "Transplant at 4-leaf stage"],
    specifications: { "Type": "Open Pollinated", "Germination": "70–80%", "Flesh": "Creamy White" },
    relatedProducts: ["seed-chikoo", "seed-guava"],
    unsplashKeyword: "custard apple sitaphal"
  },

  // ── LEAFY & HERB SEEDS — individual varieties (subcategory: leafy-seeds) ──
  {
    id: "seed-basil", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Basil Seeds (Sweet & Thai)", description: "Sweet and Thai basil seeds for fresh herb markets, culinary export, and essential oil extraction.",
    features: ["Intense aroma", "Rapid leaf production", "Multiple cuts", "Suitable for hydroponics"],
    packSizes: ["5g", "25g", "100g"],
    pricing: { retail: 95, wholesale: 75, bulk: 60 },
    tabDescription: "Basil seeds with high essential oil content and rapid leaf production — a premium herb for restaurant and retail supply.",
    howToUse: ["Surface sow, do not cover", "Mist daily to maintain humidity", "Harvest leaves before flowering"],
    specifications: { "Type": "Open Pollinated", "Maturity": "25–30 days", "Purity": "97%" },
    relatedProducts: ["seed-parsley", "seed-mint"],
    unsplashKeyword: "basil seeds"
  },
  {
    id: "seed-mint", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Mint Seeds (Spearmint & Peppermint)", description: "Spearmint and peppermint seeds for fresh herb supply and commercial menthol extraction.",
    features: ["High menthol content", "Perennial via rhizomes", "Rapid spread", "High essential oil yield"],
    packSizes: ["5g", "25g"],
    pricing: { retail: 110, wholesale: 86, bulk: 70 },
    tabDescription: "Mint seeds for establishing new plots — ideal for hydroponic systems and open containers.",
    howToUse: ["Surface sow in moist substrate", "Keep soil temperature at 21–25°C", "Harvest at 20–25cm height"],
    specifications: { "Type": "Open Pollinated", "Maturity": "30–40 days", "Menthol content": "High" },
    relatedProducts: ["seed-basil", "seed-parsley"],
    unsplashKeyword: "mint seeds"
  },
  {
    id: "seed-parsley", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Parsley Seeds (Flat & Curly)", description: "Flat-leaf Italian and curly parsley seeds for garnishing, fresh herb, and dehydration markets.",
    features: ["Rich in Vitamin K", "Long shelf life when dried", "Flat and curly types", "Good for pots & hydroponics"],
    packSizes: ["5g", "25g", "100g"],
    pricing: { retail: 140, wholesale: 110, bulk: 88 },
    tabDescription: "Parsley seeds for consistent leaf supply to hotels, catering, and fresh herb retailers requiring premium garnish quality.",
    howToUse: ["Pre-soak seeds 12 hours before sowing", "Sow at 0.5cm depth", "Slow germinator — wait 14–21 days"],
    specifications: { "Type": "Open Pollinated", "Germination": "14–21 days", "Purity": "97%" },
    relatedProducts: ["seed-basil", "seed-dill"],
    unsplashKeyword: "parsley seeds"
  },
  {
    id: "seed-dill", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Dill Seeds", description: "Fragrant dill seeds for fresh herb, seed spice, and essential oil production.",
    features: ["Feathery aromatic leaves", "Dual use (leaf & seed spice)", "Fast growing", "Cold tolerant"],
    packSizes: ["10g", "50g", "250g"],
    pricing: { retail: 75, wholesale: 58, bulk: 47 },
    tabDescription: "Dill seeds offering a high-aroma, dual-market crop — leaves for fresh herb supply and seeds for spice processing.",
    howToUse: ["Direct sow at 0.5cm depth", "Thin to 15cm spacing", "Harvest leaves at 30 days, seeds at 90 days"],
    specifications: { "Type": "Open Pollinated", "Maturity": "30 days (leaf)", "Purity": "97%" },
    relatedProducts: ["seed-parsley", "seed-coriander"],
    unsplashKeyword: "dill seeds"
  },
  {
    id: "seed-kale", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Kale Seeds", description: "Curly and lacinato (Tuscan) kale seeds for premium health-food and superfood markets.",
    features: ["Superfood nutritional profile", "Cold-hardy", "Multiple harvest cuts", "Premium market positioning"],
    packSizes: ["5g", "25g", "100g"],
    pricing: { retail: 195, wholesale: 155, bulk: 125 },
    tabDescription: "Kale seeds delivering a premium superfood crop with multiple harvest cuts — the go-to for organic and health brand supply chains.",
    howToUse: ["Sow in nursery trays", "Transplant at 4-leaf stage", "Harvest outer leaves progressively"],
    specifications: { "Type": "Open Pollinated", "Maturity": "50–60 days", "Leaf type": "Curly / Lacinato" },
    relatedProducts: ["seed-spinach", "seed-lettuce"],
    unsplashKeyword: "kale seeds"
  },
  {
    id: "seed-arugula", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Arugula (Rocket) Seeds", description: "Peppery arugula / rocket seeds for salad markets, fresh packs, and specialty restaurants.",
    features: ["Peppery distinct flavour", "Ultra-fast growth", "Baby leaf harvest at 21 days", "Ideal for salad mixes"],
    packSizes: ["5g", "25g", "100g"],
    pricing: { retail: 175, wholesale: 138, bulk: 112 },
    tabDescription: "Arugula seeds growing to baby leaf stage in 21 days — highest value per square metre for urban and polyhouse micro-greens.",
    howToUse: ["Broadcast sow densely", "Harvest at 21 days for baby leaf", "Allow re-growth for 2 additional cuts"],
    specifications: { "Type": "Open Pollinated", "Maturity": "21–35 days", "Flavour": "Peppery" },
    relatedProducts: ["seed-lettuce", "seed-kale"],
    unsplashKeyword: "arugula rocket seeds"
  },
  {
    id: "seed-amaranth", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Amaranth Seeds", description: "Multi-cut amaranth seeds for tender leafy greens and grain amaranth dual production.",
    features: ["High protein content", "Multi-cut leafy green", "Heat & drought tolerant", "Dual leaf & grain crop"],
    packSizes: ["25g", "100g", "500g"],
    pricing: { retail: 50, wholesale: 38, bulk: 30 },
    tabDescription: "Amaranth seeds delivering a robust, heat-tolerant leafy crop with multiple cuts — staple in tropical leafy markets.",
    howToUse: ["Broadcast sow", "Thin to 10cm spacing", "First leaf harvest at 30 days"],
    specifications: { "Type": "Open Pollinated", "Maturity": "30–35 days", "Leaf colour": "Green / Red" },
    relatedProducts: ["seed-spinach", "seed-kale"],
    unsplashKeyword: "amaranth seeds"
  },
  {
    id: "seed-swisschard", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Swiss Chard Seeds", description: "Colourful Rainbow Swiss Chard seeds for premium fresh markets and visual-impact farm displays.",
    features: ["Colourful stems (red, yellow, white)", "High nutritional value", "Heat tolerant", "Long harvest window"],
    packSizes: ["10g", "50g"],
    pricing: { retail: 160, wholesale: 126, bulk: 102 },
    tabDescription: "Swiss Chard seeds producing vibrant coloured stems — a premium, visual-impact crop for farmers' markets and hotel supply.",
    howToUse: ["Sow at 1cm depth", "Space at 30×30cm", "Harvest outer leaves at 50 days"],
    specifications: { "Type": "Open Pollinated", "Maturity": "50–60 days", "Stem colour": "Multicolour" },
    relatedProducts: ["seed-kale", "seed-spinach"],
    unsplashKeyword: "swiss chard seeds"
  },
  {
    id: "seed-fenugreek-leafy", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Fenugreek Seeds (Leafy Type)", description: "Leafy methi variety seeds for high-density continuous-cut fresh herb production.",
    features: ["Rapid germination (<5 days)", "Multiple cuts", "High iron content", "Compact growth habit"],
    packSizes: ["100g", "500g", "1kg"],
    pricing: { retail: 38, wholesale: 28, bulk: 22 },
    tabDescription: "Leafy fenugreek seeds for urban farms and polyhouses looking for a high-turnover, low-cost, high-demand crop.",
    howToUse: ["Broadcast sow at 1cm depth", "Water twice daily", "Cut at 20cm height — regrows 2–3 times"],
    specifications: { "Type": "Open Pollinated", "Maturity": "20–25 days", "Purity": "97%" },
    relatedProducts: ["seed-methi", "seed-coriander"],
    unsplashKeyword: "fenugreek seeds"
  },
  {
    id: "seed-mustardgreens", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Mustard Greens Seeds", description: "Tender mustard greens seeds for baby leaf and full-leaf harvest in cool weather.",
    features: ["Peppery tangy flavour", "Cold-tolerant", "Fast growing", "Ideal for baby leaf salad mixes"],
    packSizes: ["25g", "100g"],
    pricing: { retail: 55, wholesale: 42, bulk: 34 },
    tabDescription: "Mustard green seeds producing tender, peppery leaves — popular as a salad ingredient and traditional sabzi green.",
    howToUse: ["Broadcast sow in cool weather", "Thin to 10cm spacing", "Baby leaf harvest at 21 days"],
    specifications: { "Type": "Open Pollinated", "Maturity": "21–35 days", "Flavour": "Peppery" },
    relatedProducts: ["seed-arugula", "seed-fenugreek-leafy"],
    unsplashKeyword: "mustard greens seeds"
  },
  {
    id: "seed-lettuce-leafy", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Loose-Leaf Lettuce (Leafy)", description: "Red and green loose-leaf lettuce seeds for continuous harvest hydroponic systems and baby salad mixes.",
    features: ["Loose leaf — no heading", "Red and green varieties", "Harvest in 35 days", "No bolting in cool rooms"],
    packSizes: ["5g", "25g"],
    pricing: { retail: 220, wholesale: 175, bulk: 142 },
    tabDescription: "Loose-leaf lettuce seeds — the workhorse of hydroponic salad farms providing ongoing harvests with minimal effort.",
    howToUse: ["Germinate on rockwool cubes", "Transfer to NFT/raft at 7 days", "Harvest outer leaves continuously"],
    specifications: { "Type": "Open Pollinated", "Maturity": "35 days", "System": "NFT, Raft" },
    relatedProducts: ["seed-arugula", "seed-kale"],
    unsplashKeyword: "loose leaf lettuce"
  },
  {
    id: "seed-spinach-leafy", category: "agri-inputs", subcategory: "leafy-seeds", categoryName: "Agri-Inputs",
    name: "Spinach Seeds (Leafy Type)", description: "Savoy and flat-leaf spinach seeds for high-density hydroponic and soil growing.",
    features: ["Dark green leaves", "High oxalic acid (blanching recommended)", "Cold tolerant", "High yield per sqm"],
    packSizes: ["25g", "100g", "500g"],
    pricing: { retail: 72, wholesale: 56, bulk: 44 },
    tabDescription: "Spinach seeds suited specifically to leafy-focused production lines with fast turnover cycles.",
    howToUse: ["Row sow at 1cm depth", "Thin to 5cm", "Harvest at 30–40 days"],
    specifications: { "Type": "Open Pollinated", "Maturity": "30–40 days", "Leaf type": "Savoy / Flat" },
    relatedProducts: ["seed-kale", "seed-swisschard"],
    unsplashKeyword: "spinach seeds"
  },

  // MEDIA (Sub: media)

  {
    id: "premium-cocopeat",
    category: "agri-inputs",
    subcategory: "media",
    categoryName: "Agri-Inputs",
    name: "Premium Buffered Cocopeat",
    description: "Low EC, pH balanced washed cocopeat for soilless cultivation.",
    features: ["Low salt content", "High water retention", "Excellent aeration"],
    packSizes: ["5kg Block", "Grow bags"],
    pricing: { retail: 35, wholesale: 28, bulk: 22 },
    tabDescription: "Our cocopeat is treated to removed excess salts and buffered with calcium/magnesium for stable nutrient uptake.",
    howToUse: ["Expand with water", "Mix with perlite if needed", "Monitor EC regularly"],
    specifications: { "EC": "< 0.5 mS/cm", "pH": "5.8 - 6.5" },
    relatedProducts: ["expanded-perlite", "vermiculite-agri"],
    unsplashKeyword: "coco peat"
  },
  {
    id: "expanded-perlite",
    category: "agri-inputs",
    subcategory: "media",
    categoryName: "Agri-Inputs",
    name: "Agricultural Expanded Perlite",
    description: "Ultra-lightweight volcanic glass for improving soil structure and drainage.",
    features: ["Inert and sterile", "Non-compacting", "Neutral pH"],
    packSizes: ["100L Bag"],
    pricing: { retail: 850, wholesale: 750, bulk: 680 },
    tabDescription: "Essential for hydroponic mixes, perlite ensures roots always have access to oxygen even in heavy media.",
    howToUse: ["Mix 20-30% with cocopeat", "Dampen before mixing to avoid dust"],
    specifications: { "Density": "Low", "Size": "2-4mm" },
    relatedProducts: ["premium-cocopeat", "vermiculite-agri"],
    unsplashKeyword: "perlite"
  },

  // NUTRITION (Sub: nutrition)
  {
    id: "water-soluble-npk",
    category: "agri-inputs",
    subcategory: "nutrition",
    categoryName: "Agri-Inputs",
    name: "Water Soluble NPK (19:19:19)",
    description: "100% water-soluble balanced fertilizer for fertigation and foliar spray.",
    features: ["Rapid absorption", "Chlorine free", "Safe for all crops"],
    packSizes: ["1kg Pouch", "25kg Bag"],
    pricing: { retail: 180, wholesale: 150, bulk: 130 },
    tabDescription: "Provides balanced nitrogen, phosphorus, and potassium to support all stages of plant growth.",
    howToUse: ["Dissolve in water", "Apply via drip or spray", "Dosage: 5g/L"],
    specifications: { "N-P-K Ratio": "19:19:19", "Solubility": "100%" },
    relatedProducts: ["nano-urea-liquid", "micronutrient-mix"],
    unsplashKeyword: "fertilizer"
  },
  {
    id: "nano-urea-liquid",
    category: "agri-inputs",
    subcategory: "nutrition",
    categoryName: "Agri-Inputs",
    name: "Nano Urea Liquid",
    description: "Next-gen concentrated nitrogen fertilizer with superior efficiency.",
    features: ["Small application volume", "Reduces soil pollution", "Improved crop yield"],
    packSizes: ["500ml Bottle"],
    pricing: { retail: 240, wholesale: 220, bulk: 210 },
    tabDescription: "A revolutionary product that reduces the need for traditional urea bags by 50% through high-uptake nano particles.",
    howToUse: ["Mix 2-4ml per liter", "Foliar spray during peak growth"],
    specifications: { "Nitrogen": "4%", "Particle Size": "< 100nm" },
    relatedProducts: ["water-soluble-npk"],
    unsplashKeyword: "farm laboratory"
  },

  // --- DIVISION 2: INFRASTRUCTURE ---
  
  // FRAMES (Sub: frames)
  {
    id: "gi-pipe-structure",
    category: "structure",
    subcategory: "frames",
    categoryName: "Structural Engineering",
    name: "GI Structural Pipes",
    description: "Galvanized Iron pipes optimized for durable polyhouse frames.",
    features: ["Anti-rust coating", "Precision bending", "High tensile strength"],
    packSizes: ["Per Meter", "Bulk Bundles"],
    pricing: { retail: 450, wholesale: 410, bulk: 380 },
    tabDescription: "Hot-dip galvanized pipes designed to withstand wind loads and heavy crop supports.",
    howToUse: ["Professional installation required", "Join with specialized clamps"],
    specifications: { "Grade": "Z275", "Wall Thickness": "2mm - 3mm" },
    relatedProducts: ["polyhouse-polyethylene", "insect-net-uv"],
    unsplashKeyword: "steel frames"
  },
  {
    id: "polyhouse-polyethylene",
    category: "structure",
    subcategory: "covering",
    categoryName: "Structural Engineering",
    name: "UV Stabilized Polyethylene Film",
    description: "5-layer 200-micron clear film for greenhouse covering.",
    features: ["Anti-drip", "Anti-fog", "Sulphur resistant", "UV blocking"],
    packSizes: ["Custom roll size"],
    pricing: { retail: 130, wholesale: 110, bulk: 95 },
    tabDescription: "Ensures optimal light diffusion for balanced plant growth while protecting against extreme weather.",
    howToUse: ["Stretch taut over frame", "Secure with zig-zag wires"],
    specifications: { "Thickness": "200 Micron", "Light Diffusion": "35%" },
    relatedProducts: ["insect-net-uv", "shade-net-black"],
    unsplashKeyword: "greenhouse film"
  },

  // --- DIVISION 6: SPECIALIZED ---
  
  // AQUA (Sub: aquaculture)
  {
    id: "paddle-wheel-aerator-pro",
    category: "specialized",
    subcategory: "aquaculture",
    categoryName: "Specialized Ecosystems",
    name: "Paddle Wheel Aerator (2HP)",
    description: "High-efficiency oxygenation system for intensive fish and shrimp farming.",
    features: ["High DO levels", "Silent operation", "Corrosion resistant"],
    packSizes: ["Single Unit"],
    pricing: { retail: 35000, wholesale: 32000, bulk: 30000 },
    tabDescription: "Essential for maintaining water quality and high survival rates in dense aquaculture ponds.",
    howToUse: ["Anchor in pond center", "Run mostly at night/dawn"],
    specifications: { "Power": "2 HP", "Impellers": "4" },
    relatedProducts: ["floating-fish-feed-premium"],
    unsplashKeyword: "aerator"
  },
  {
    id: "floating-fish-feed-premium",
    category: "specialized",
    subcategory: "aquaculture",
    categoryName: "Specialized Ecosystems",
    name: "Premium Floating Fish Feed",
    description: "Balanced extruded feed for Tilapia, Carp and Catfish.",
    features: ["Water stable", "High protein", "Good digestibility"],
    packSizes: ["40kg Bag"],
    pricing: { retail: 1800, wholesale: 1600, bulk: 1450 },
    tabDescription: "Optimized for FCR (Feed Conversion Ratio), helping farmers achieve target weights faster.",
    howToUse: ["Feed 2-3 times daily", "Apportion to 2% of biomass"],
    specifications: { "Protein": "32%", "Fat": "5%" },
    relatedProducts: ["paddle-wheel-aerator-pro"],
    unsplashKeyword: "fish feed"
  },

  // LIVESTOCK (Sub: livestock)
  {
    id: "cattle-feed-premium",
    category: "specialized",
    subcategory: "livestock",
    categoryName: "Specialized Ecosystems",
    name: "IGO Premium Cattle Feed",
    description: "Highly nutritious concentrated feed for high-yielding dairy cows.",
    features: ["Boosts milk fat%", "High bypass protein", "Mineral enriched"],
    packSizes: ["50kg Bag"],
    pricing: { retail: 1400, wholesale: 1250, bulk: 1100 },
    tabDescription: "Formulated by veterinary experts to support lactation and reproductive health.",
    howToUse: ["Mix with roughage", "Feed 1kg per 2.5L milk yield"],
    specifications: { "Metabolic Energy": "11 MJ/kg", "Total Ash": "< 8%" },
    relatedProducts: ["milking-machine-automated"],
    unsplashKeyword: "cattle"
  },

  // --- DIVISION 3: AUTOMATION ---
  {
    id: "fertigation-machine-classic",
    category: "automation",
    subcategory: "dosing",
    categoryName: "Control & Automation",
    name: "IGO FertiMix Classic (3-Channel)",
    description: "Automated fertilizer injection system with pH and EC monitoring.",
    features: ["Precise dosing", "Venturi injection", "Real-time EC display"],
    packSizes: ["Single Unit"],
    pricing: { retail: 85000, wholesale: 75000, bulk: 68000 },
    tabDescription: "The heart of precision irrigation, ensuring your plants get exactly what they need, when they need it.",
    howToUse: ["Connect to main pipeline", "Configure dosage through panel"],
    specifications: { "Channels": "3", "Operating Volts": "220V AC" },
    relatedProducts: ["gi-pipe-structure"],
    unsplashKeyword: "irrigation system"
  },

  // --- DIVISION 4: HORTICULTURE ---
  {
    id: "grafted-fruit-plants-combo",
    category: "horticulture",
    subcategory: "fruits",
    categoryName: "Horticulture Catalog",
    name: "Elite Grafted Fruit Plant Combo",
    description: "High-yielding grafted plants for commercial orchards and terrace gardens.",
    features: ["Early fruiting", "Disease resistant rootstock", "Tested vigour"],
    packSizes: ["Set of 10", "Box of 50"],
    pricing: { retail: 2500, wholesale: 2100, bulk: 1800 },
    tabDescription: "Includes Mango, Guava, and Lemon varieties selected for maximum yield and taste.",
    howToUse: ["Plant in pits with organic manure", "Water regularly in first year"],
    specifications: { "Grafting Type": "Veneer / Epicotyl", "Height": "1-2 ft" },
    relatedProducts: ["water-soluble-npk"],
    unsplashKeyword: "fruit garden"
  },

  // --- DIVISION 5: DIGITAL ---
  {
    id: "iot-soil-node-v2",
    category: "digital",
    subcategory: "hardware",
    categoryName: "Digital Agri & IoT",
    name: "SmartFarm Soil Health Node",
    description: "Wireless sensor for monitoring moisture, temperature and NPK in real-time.",
    features: ["Solar powered", "LoRa connectivity", "Waterproof IP67"],
    packSizes: ["Single Sensor", "Farm Kit (10 Nodes)"],
    pricing: { retail: 4500, wholesale: 4100, bulk: 3800 },
    tabDescription: "Seamlessly integrates with the IGO Software to provide actionable insights directly to your phone.",
    howToUse: ["Insert into soil (root zone)", "Sync with IGO Gateway"],
    specifications: { "range": "Up to 5km", "Battery": "3000mAh Solar" },
    relatedProducts: ["fertigation-machine-classic"],
    unsplashKeyword: "sensor"
  },

  // --- ADDITIONS FOR REMAINING SUBCATEGORIES ---

  // PROTECTION (Agri-Inputs)
  {
    id: "organic-ipm-kit",
    category: "agri-inputs",
    subcategory: "protection",
    categoryName: "Agri-Inputs",
    name: "Advanced IPM Kit (Organic)",
    description: "Complete biological pest control system including pheromone traps and botanical extracts.",
    features: ["Residue free", "Target specific", "Bee friendly"],
    packSizes: ["1 Acre Kit"],
    pricing: { retail: 4500, wholesale: 3800, bulk: 3200 },
    tabDescription: "Implements Integrated Pest Management (IPM) protocols to reduce chemical dependency.",
    howToUse: ["Install traps at canopy level", "Spray botanical mix every 10 days"],
    specifications: { "Type": "Biological", "Eco-Rating": "5-Star" },
    relatedProducts: ["bio-fungicide-pro"],
    unsplashKeyword: "organic farming"
  },

  // PGRS (Agri-Inputs)
  {
    id: "bloom-booster-nitro",
    category: "agri-inputs",
    subcategory: "pgrs",
    categoryName: "Agri-Inputs",
    name: "Nitro-Bloom Stimulant",
    description: "Concentrated growth regulator to enhance flower set and fruit sizing.",
    features: ["Rapid flower initiation", "Reduces fruit drop"],
    packSizes: ["100ml", "500ml"],
    pricing: { retail: 850, wholesale: 720, bulk: 650 },
    tabDescription: "Triggers hormonal pathways to ensure uniform blooming and high-quality fruit output.",
    howToUse: ["Mix 1ml/L", "Foliar spray during pre-bloom stage"],
    specifications: { "Active": "Amino Acids", "pH": "6.0" },
    relatedProducts: ["water-soluble-npk"],
    unsplashKeyword: "liquid fertilizer"
  },

  // MULCHING (Agri-Inputs)
  {
    id: "silver-black-mulch",
    category: "agri-inputs",
    subcategory: "mulching",
    categoryName: "Agri-Inputs",
    name: "Premium Silver-Black Mulch",
    description: "UV-stabilized professional mulching film for moisture retention and weed control.",
    features: ["Reflective surface", "High tear strength"],
    packSizes: ["400m Roll", "1200m Roll"],
    pricing: { retail: 3200, wholesale: 2800, bulk: 2500 },
    tabDescription: "Keeps roots cool and prevents weed growth while reflecting light back to the plant canopy.",
    howToUse: ["Lay over raised beds", "Secure edges with soil"],
    specifications: { "Thickness": "25 Micron", "Width": "1.2m" },
    relatedProducts: ["weed-mat-heavy"],
    unsplashKeyword: "field mulching"
  },

  // NETS (Structure)
  {
    id: "insect-net-uv-pro",
    category: "structure",
    subcategory: "nets",
    categoryName: "Structural Engineering",
    name: "Anti-Insect Net (40 Mesh)",
    description: "High-tenacity polyethylene net for complete protection against whitefly and thrips.",
    features: ["UV stabilized", "Optimal airflow"],
    packSizes: ["3m x 50m", "Custom"],
    pricing: { retail: 45, wholesale: 38, bulk: 32 },
    tabDescription: "Essential for producing residue-free crops by physically excluding pests from the greenhouse.",
    howToUse: ["Install on side vents", "Tighten using springs"],
    specifications: { "Mesh": "40 Hole/Inch", "Material": "HDPE" },
    relatedProducts: ["polyhouse-polyethylene"],
    unsplashKeyword: "white net"
  },

  // VENTILATION (Structure)
  {
    id: "axial-exhaust-fan-50",
    category: "structure",
    subcategory: "ventilation",
    categoryName: "Structural Engineering",
    name: "IGO Industrial Exhaust Fan (50\")",
    description: "High-volume air mover for greenhouse temperature and humidity regulation.",
    features: ["Stainless steel blades", "Self-closing shutters"],
    packSizes: ["Single Unit"],
    pricing: { retail: 28000, wholesale: 24000, bulk: 22000 },
    tabDescription: "Moves massive amounts of air with low noise, critical for high-density year-round production.",
    howToUse: ["Wall mount opposite to cooling pads"],
    specifications: { "Airflow": "44,000 m3/h", "Power": "1.1 kW" },
    relatedProducts: ["cooling-pad-cellulose"],
    unsplashKeyword: "industrial fan"
  },

  // MISTING (Structure)
  {
    id: "misting-nozzle-kit",
    category: "structure",
    subcategory: "misting",
    categoryName: "Structural Engineering",
    name: "Mist-Cool High Pressure Kit",
    description: "Complete fogging system for localized cooling and humidity control.",
    features: ["Anti-drip nozzles", "Even distribution"],
    packSizes: ["50-Nozzle Kit", "100-Nozzle Kit"],
    pricing: { retail: 12000, wholesale: 10500, bulk: 9000 },
    tabDescription: "Reduces temperature by up to 10°C through evaporative cooling without wetting the foliage.",
    howToUse: ["Mount on overhead structure", "Connect to pump"],
    specifications: { "Orifice": "0.15mm", "Pressure": "70 Bar" },
    relatedProducts: ["axial-exhaust-fan-50"],
    unsplashKeyword: "mist greenhouse"
  },

  // PLUMBING (Structure)
  {
    id: "disc-filter-industrial",
    category: "structure",
    subcategory: "plumbing",
    categoryName: "Structural Engineering",
    name: "Industrial Manual Disc Filter",
    description: "Heavy-duty filtration for irrigation systems to prevent dripper clogging.",
    features: ["Easy flush", "Chemical resistant"],
    packSizes: ["2 Inch", "3 Inch"],
    pricing: { retail: 4500, wholesale: 3800, bulk: 3400 },
    tabDescription: "Protects your entire irrigation network from sand, silt and organic matter.",
    howToUse: ["Install after pump house"],
    specifications: { "Micron": "130", "Body": "Polypropylene" },
    relatedProducts: ["drip-line-pressure-comp"],
    unsplashKeyword: "water filter"
  },

  // CONTROLLERS (Automation)
  {
    id: "igolink-smarthub",
    category: "automation",
    subcategory: "controllers",
    categoryName: "Control & Automation",
    name: "IGO-Link SmartHub Hub",
    description: "Centralized IoT controller for irrigation, sensors and climate control.",
    features: ["Cloud sync", "Mobile app control"],
    packSizes: ["Base Station"],
    pricing: { retail: 15000, wholesale: 13000, bulk: 11000 },
    tabDescription: "The brain of the modern farm, allowing you to manage your entire operation from anywhere in the world.",
    howToUse: ["Wall mount in control room", "Pairs via Wi-Fi/4G"],
    specifications: { "Outputs": "8 Relays", "Inputs": "12 Sensors" },
    relatedProducts: ["iot-soil-node-v2"],
    unsplashKeyword: "smart dashboard"
  },

  // MOTORS (Automation)
  {
    id: "vent-actuator-ac",
    category: "automation",
    subcategory: "motors",
    categoryName: "Control & Automation",
    name: "Precision Vent Actuator",
    description: "Heavy-duty linear actuator for automated roof and side vents.",
    features: ["IP66 rating", "Built-in limit switches"],
    packSizes: ["Single Unit"],
    pricing: { retail: 9500, wholesale: 8500, bulk: 7800 },
    tabDescription: "Ensures precise window opening for optimal natural ventilation based on sensor data.",
    howToUse: ["Connect to vent crank"],
    specifications: { "Stroke": "300mm", "Force": "2000N" },
    relatedProducts: ["igolink-smarthub"],
    unsplashKeyword: "servo motor"
  },

  // ELECTRICAL (Automation)
  {
    id: "farm-vfd-panel",
    category: "automation",
    subcategory: "electrical",
    categoryName: "Control & Automation",
    name: "Pump VFD Control Panel",
    description: "Variable Frequency Drive for soft-starting pumps and energy savings.",
    features: ["Phase protection", "Soft start/stop"],
    packSizes: ["3HP", "5HP", "7.5HP"],
    pricing: { retail: 22000, wholesale: 19500, bulk: 18000 },
    tabDescription: "Extends pump life and reduces electricity bills by matching flow to actual demand.",
    howToUse: ["Electrical installation by pro", "Configured for Agri-Pump"],
    specifications: { "Frequency": "0-60Hz", "Input": "3-Phase" },
    relatedProducts: ["fertigation-machine-classic"],
    unsplashKeyword: "control panel"
  },

  // VEGETABLES (Horticulture)
  {
    id: "capsicum-seeds-hybrid",
    category: "horticulture",
    subcategory: "vegetables",
    categoryName: "Horticulture Catalog",
    name: "Hybrid Capsicum Seeds (Indra)",
    description: "Commercial grade sweet pepper seeds for polyhouse production.",
    features: ["High blocky fruit", "F1 Hybrid vigorous"],
    packSizes: ["1000 Seeds Pack"],
    pricing: { retail: 1800, wholesale: 1650, bulk: 1550 },
    tabDescription: "Superior genetics ensure uniform green color and thick walls for long shelf life.",
    howToUse: ["Nursery in trays", "Transplant at 4-leaf stage"],
    specifications: { "Yield": "80-100 Tons/Acre", "Maturity": "75 Days" },
    relatedProducts: ["vegetable-seeds-precision"],
    unsplashKeyword: "capsicum"
  },

  // FLOWERS (Horticulture)
  {
    id: "marigold-pro-tray",
    category: "horticulture",
    subcategory: "flowers",
    categoryName: "Horticulture Catalog",
    name: "Marigold F1 Gold Coin",
    description: "Premium large-headed marigold seedlings for festive and extraction markets.",
    features: ["Compact habit", "Rain tolerant"],
    packSizes: ["1000 Seedlings"],
    pricing: { retail: 1200, wholesale: 1000, bulk: 900 },
    tabDescription: "Optimized for both landscaping and commercial flower plucking.",
    howToUse: ["Direct transplanting", "High-density planting"],
    specifications: { "Bloom Size": "8-10cm", "Type": "Double African" },
    relatedProducts: ["flower-seeds-pro"],
    unsplashKeyword: "marigold"
  },

  // HERBS (Horticulture)
  {
    id: "fresh-herb-starter-kit",
    category: "horticulture",
    subcategory: "herbs",
    categoryName: "Horticulture Catalog",
    name: "Hydroponic Herb Starter Kit",
    description: "Collection of curated culinary herbs for commercial kitchens and gourmet markets.",
    features: ["Pesticide free", "Root-on supply available"],
    packSizes: ["Mixed Crate"],
    pricing: { retail: 1500, wholesale: 1200, bulk: 1100 },
    tabDescription: "Includes Basil, Rosemary, Thyme, and Oregano grown in sterile media.",
    howToUse: ["For fresh sale or extraction"],
    specifications: { "Variety": "Italian/Global", "Pack": "Refillable Trays" },
    relatedProducts: ["herbs-seeds"],
    unsplashKeyword: "herbs basil"
  },

  // SOFTWARE (Digital)
  {
    id: "igo-erp-farm-pro",
    category: "digital",
    subcategory: "software",
    categoryName: "Digital Agri & IoT",
    name: "IGO Farm ERP (Enterprise)",
    description: "Cloud-based management system for harvest tracking, labor and inventory.",
    features: ["Batch tracking", "Financial reporting"],
    packSizes: ["Annual License"],
    pricing: { retail: 45000, wholesale: 40000, bulk: 35000 },
    tabDescription: "Provides total visibility into your farm's unit economics and productivity metrics.",
    howToUse: ["Web login + Mobile App"],
    specifications: { "Users": "Unlimited", "Support": "24/7 Premium" },
    relatedProducts: ["igolink-smarthub"],
    unsplashKeyword: "dashboard software"
  },

  // SERVICES (Digital)
  {
    id: "satellite-yield-monitor",
    category: "digital",
    subcategory: "services",
    categoryName: "Digital Agri & IoT",
    name: "Satellite Crop Health Monitoring",
    description: "AI-powered remote sensing for large-scale farm health and yield prediction.",
    features: ["Weekly NDVI updates", "Water stress mapping"],
    packSizes: ["Per Acre/Year"],
    pricing: { retail: 500, wholesale: 450, bulk: 400 },
    tabDescription: "Identify problems before they become visible to the human eye using multispectral data.",
    howToUse: ["Geofence your farm on IGO portal"],
    specifications: { "Resolution": "3m - 10m", "Platform": "Planet/Sentinel" },
    relatedProducts: ["igo-erp-farm-pro"],
    unsplashKeyword: "satellite earth"
  },

  // POST-HARVEST (Specialized)
  {
    id: "solar-tunnel-dryer-igo",
    category: "specialized",
    subcategory: "post-harvest",
    categoryName: "Specialized Ecosystems",
    name: "IGO Solar Tunnel Dryer",
    description: "Controlled environment dryer for spices, fruits and medicinal herbs.",
    features: ["Zero fuel cost", "Dust/pest free"],
    packSizes: ["100kg Capacity", "500kg Capacity"],
    pricing: { retail: 125000, wholesale: 115000, bulk: 110000 },
    tabDescription: "Preserves color and nutrition of farm produce while ensuring rapid drying for market readiness.",
    howToUse: ["Place in open sun", "Load on food-grade trays"],
    specifications: { "Body": "Polycarbonate", "Ventilation": "Solar fans" },
    relatedProducts: ["plastic-harvesting-crates"],
    unsplashKeyword: "solar dryer"
  },
  {
    id: "plastic-harvesting-crates",
    category: "specialized",
    subcategory: "post-harvest",
    categoryName: "Specialized Ecosystems",
    name: "Food-Grade Harvesting Crates",
    description: "Stackable, ventilated crates for injury-free transport of produce.",
    features: ["Heavy duty HDPE", "Ergonomic grips"],
    packSizes: ["Set of 100"],
    pricing: { retail: 280, wholesale: 240, bulk: 210 },
    tabDescription: "Standardized dimensions for efficient truck loading and cold-room storage.",
    howToUse: ["Standard farm harvest Use"],
    specifications: { "Volume": "25 KG", "Colors": "Red / Green / Blue" },
    relatedProducts: ["solar-tunnel-dryer-igo"],
    unsplashKeyword: "fruit crates"
  }
];
