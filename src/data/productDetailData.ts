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
  
  // SEEDS (Sub: seeds)
  {
    id: "vegetable-seeds-precision",
    category: "agri-inputs",
    subcategory: "seeds",
    categoryName: "Agri-Inputs",
    name: "Precision Vegetable Seeds",
    description: "High-yield hybrid seeds optimized for polyhouse and protected cultivation.",
    features: ["98% Germination", "Disease resistant", "High vigor", "Uniform growth"],
    packSizes: ["10g", "50g", "100g"],
    pricing: { retail: 120, wholesale: 90, bulk: 75 },
    tabDescription: "Our precision vegetable seeds are bred for high performance in controlled environments, ensuring maximum yields for commercial growers.",
    howToUse: ["Sow in pro-trays", "Maintain moisture", "Transplant after 25 days"],
    specifications: { "Purity": "99%", "Type": "Hybrid" },
    relatedProducts: ["fruit-seeds", "flower-seeds"],
    unsplashKeyword: "vegetable seeds"
  },
  {
    id: "fruit-seeds-exotic",
    category: "agri-inputs",
    subcategory: "seeds",
    categoryName: "Agri-Inputs",
    name: "Exotic Fruit Seeds",
    description: "Premium seeds for high-value exotic fruits like Dragon fruit, Papaya, and Passion fruit.",
    features: ["Certified quality", "Fast establishing", "High fruit brix level"],
    packSizes: ["packs of 50 seeds"],
    pricing: { retail: 500, wholesale: 400, bulk: 350 },
    tabDescription: "Sourced from world-class breeders, these seeds are the starting point for premium fruit production.",
    howToUse: ["Pre-soak if required", "Seed in nursery", "Grafting support available"],
    specifications: { "Variety": "Elite", "Origin": "Global Selection" },
    relatedProducts: ["vegetable-seeds-precision"],
    unsplashKeyword: "fruit seeds"
  },
  {
    id: "flower-seeds-pro",
    category: "agri-inputs",
    subcategory: "seeds",
    categoryName: "Agri-Inputs",
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
    category: "agri-inputs",
    subcategory: "seeds",
    categoryName: "Agri-Inputs",
    name: "Medicinal & Aromatic Seeds",
    description: "High-value seeds for Ayurvedic and pharmaceutical crop production.",
    features: ["Verified species", "High active ingredient content"],
    packSizes: ["100g bags"],
    pricing: { retail: 450, wholesale: 380, bulk: 320 },
    tabDescription: "Carefully selected varieties that meet pharmaceutical grade extraction standards.",
    howToUse: ["Climate specific sowing", "Organic inputs only recommended"],
    specifications: { "Alkaloid content": "High", "Type": "Open Pollinated" },
    relatedProducts: ["herbs-seeds"],
    unsplashKeyword: "herbs"
  },
  {
    id: "herbs-seeds",
    category: "agri-inputs",
    subcategory: "seeds",
    categoryName: "Agri-Inputs",
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
