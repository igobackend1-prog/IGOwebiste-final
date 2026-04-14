import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import {
  CheckCircle2,
  MessageSquare,
  Shield,
  Truck,
  Headphones,
  ArrowRight,
  ChevronRight,
  ArrowLeft,
  Minus,
  Plus,
  Info,
  Beaker,
  Zap,
  Package,
  TrendingUp,
  BadgeCheck
} from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { productDetailData, ProductDetail } from '@/data/productDetailData';
import { navLinks, navLinks as siteNavLinks } from '@/data/siteData';

const fader: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const LOCAL_FALLBACK = "/assets/compressed/product/main-page-image/farm-equipment-.jpg";

const siteNavLinks_clean = siteNavLinks.map(l => ({ ...l, label: l.label.trim() }));
const productsNav = siteNavLinks_clean.find(l => l.label === "Products")?.children || [];

// ── helpers ──────────────────────────────────────────────────────────────────

const CATEGORY_META: Record<string, { label: string; cardImage: string; desc: string }> = {
  'agri-farming': {
    label: 'Agri-Farming Solutions',
    cardImage: '/assets/compressed/product/main-page-image/agri-essentials.jpg',
    desc: 'Premium seeds, organic inputs, and advanced propagation materials for high-yield farming.'
  },
  'polyhouse-engineering': {
    label: 'Polyhouse & Engineering',
    cardImage: '/assets/compressed/product/main-page-image/farm-equipment-.jpg',
    desc: 'Turn-key polyhouse structures, advanced cladding, and precision irrigation engineering.'
  },
  'automation-control': {
    label: 'Automation & Control',
    cardImage: '/assets/compressed/product/main-page-image/crop-solutions.jpg',
    desc: 'Smart IoT controllers, precision sensors, and automated fertigation systems.'
  },
  'aquaculture': {
    label: 'Aquaculture Solutions',
    cardImage: '/assets/header/product-dropdown-icon/aquaculture-prodcut-icon-.webp',
    desc: 'Complete nutrition and equipment range for professional fish and shrimp farming.'
  },
  'livestock': {
    label: 'Livestock Solutions',
    cardImage: '/assets/header/product-dropdown-icon/live-stock-product-.webp',
    desc: 'Professional feed, healthcare, and equipment for modern livestock management.'
  },
  'digital-iot': {
    label: 'Digital & IoT Services',
    cardImage: '/assets/compressed/brands/igo-foundation.webp',
    desc: 'Data-driven farming with smart hardware nodes and integrated software dashboards.'
  },
  'specialized': {
    label: 'Post-Harvest & Specialized',
    cardImage: '/assets/compressed/product/types/solar-dryers-.webp',
    desc: 'Solar cold storage, advanced sorting, and specialized aquaculture/livestock solutions.'
  }
};

const SUBCATEGORY_META: Record<string, { label: string; image: string; desc: string }> = {
  // agri-inputs
  'seeds': { 
    label: 'High-Yield Seeds', 
    image: '/assets/product-images/product type new images/vegetable-seeds.png', 
    desc: 'Commercial grade hybrid and open-pollinated seeds optimized for precision farming and stable yields.' 
  },
  'media': { 
    label: 'Growing Substrates', 
    image: '/assets/compressed/product/types/organic-fertilizer-.webp', 
    desc: 'Professional-grade media including buffered cocopeat, perlite, and custom nursery mixes.' 
  },
  'nutrition': { 
    label: 'Plant Nutrition', 
    image: '/assets/product-images/product type new images/npk-fertilizer.png', 
    desc: 'Water-soluble NPKs, nano-fertilizers, and organic growth promoters for targeted feeding.' 
  },
  'protection': { 
    label: 'Plant Protection', 
    image: '/assets/product-images/product type new images/biofertilizer-azospirillum.png', 
    desc: 'Biological and organic crop protection protocols for sustainable pest and disease management.' 
  },
  'pgrs': { 
    label: 'Growth Regulators', 
    image: '/assets/compressed/product/types/amino-acid-.webp', 
    desc: 'Advanced plant growth regulators for controlled bloom, fruit setting, and stress recovery.' 
  },
  'mulching': { 
    label: 'Mulching Systems', 
    image: '/assets/compressed/product/types/mulching-s.webp', 
    desc: 'UV-stabilized silver-black mulch and weed mats to optimize moisture and eliminate competition.' 
  },
  // structure
  'frames': { 
    label: 'Structural Engineering', 
    image: '/assets/compressed/product/types/gi-pipes-.webp', 
    desc: 'Hot-dip galvanized structural components and precision engineering for protected cultivation.' 
  },
  'covering': { 
    label: 'Greenhouse Covering', 
    image: '/assets/compressed/product/types/polyhouse-sheets.webp', 
    desc: 'Multi-layer UV stabilized poly-films and specialized cladding for light and temperature management.' 
  },
  'nets': { 
    label: 'Specialized Netting', 
    image: '/assets/compressed/product/types/shade-nets-.webp', 
    desc: 'High-tenacity insect nets, shade nets, and anti-bird solutions for crop security.' 
  },
  'ventilation': { 
    label: 'Climate Control', 
    image: '/assets/compressed/product/types/aerators-.webp', 
    desc: 'Exhaust fans, cooling pads, and automated vent systems for precise internal climate management.' 
  },
  'misting': { 
    label: 'Misting & Humidity', 
    image: '/assets/compressed/product/types/waterpumpn.webp', 
    desc: 'High-pressure fogging and misting systems to maintain ideal VPD and cooling levels.' 
  },
  'plumbing': { 
    label: 'Plumbing & Filtration', 
    image: '/assets/compressed/product/types/irrigation-pipes-.webp', 
    desc: 'Industrial-grade PVC/CPVC distribution lines and advanced filtration for irrigation longevity.' 
  },
  // automation
  'dosing': { 
    label: 'Fertigation Systems', 
    image: '/assets/compressed/product/types/drip-irrigation-system-.webp', 
    desc: 'Automated fertilizer dosing and pH/EC control systems for repeatable crop performance.' 
  },
  'controllers': { 
    label: 'Smart Farm Control', 
    image: '/assets/compressed/product/types/smart-farm-surveillance.webp', 
    desc: 'Centralized IGO-Link controllers for automated farm management via IoT and mobile platforms.' 
  },
  'motors': { 
    label: 'Precision Actuators', 
    image: '/assets/compressed/product/types/spec-motors.webp', 
    desc: 'Heavy-duty actuators and motors for automated vent and shade control in complex structures.' 
  },
  'electrical': { 
    label: 'Industrial Electrical', 
    image: '/assets/compressed/product/types/electrical-s.webp', 
    desc: 'Control panels, VFDs, and power management systems designed for harsh agricultural environments.' 
  },
  // horticulture
  'vegetables': { 
    label: 'Vegetable Crops', 
    image: '/assets/product-images/product type new images/vegetable-seeds.png', 
    desc: 'Elite varieties of commercial vegetables bred for market dominance and yield stability.' 
  },
  'flowers': { 
    label: 'Commercial Flowers', 
    image: '/assets/product-images/product type new images/flower-seeds.png', 
    desc: 'High-density floriculture inputs for the cut-flower and religious-garland industries.' 
  },
  'fruits': { 
    label: 'Ornamental & Fruits', 
    image: '/assets/product-images/product type new images/fruits-plants.png', 
    desc: 'Premium fruit saplings and exotic cultivars for commercial orchards and boutique farms.' 
  },
  'herbs': { 
    label: 'Aromatic & Herbs', 
    image: '/assets/product-images/product type new images/medicinal-plant.png', 
    desc: 'Medicinal plants and culinary herbs for pharmaceutical extraction and fresh markets.' 
  },
  // digital
  'hardware': { 
    label: 'IoT Hardware Nodes', 
    image: '/assets/compressed/brands/igo-foundation.webp', 
    desc: 'Ruggedized sensor nodes and gateways for real-time field data telemetry.' 
  },
  'software': { 
    label: 'Digital Dashboards', 
    image: '/assets/compressed/product/types/igo-erp-pro.webp', 
    desc: 'Enterprise-grade agri-ERP and analytics software for farm management at scale.' 
  },
  'services': { 
    label: 'Precision Services', 
    image: '/assets/compressed/brands/valluvam.webp', 
    desc: 'Satellite monitoring, soil mapping, and digital consultancy for data-driven decisions.' 
  },
  // specialized (post-harvest)
  'post-harvest': { 
    label: 'Harvesting Tech', 
    image: '/assets/compressed/product/types/solar-dryers-.webp', 
    desc: 'Advanced tools and systems for efficient harvest, storage, and cold-chain logistics.' 
  },
  'aquaculture': { 
    label: 'Aquaculture Systems', 
    image: '/assets/header/product-dropdown-icon/aquaculture-prodcut-icon-.webp', 
    desc: 'Tier-1 nutrition and oxygenation systems for intensive fish and shrimp farming.' 
  },
  'livestock': { 
    label: 'Livestock Ecosystems', 
    image: '/assets/header/product-dropdown-icon/live-stock-product-.webp', 
    desc: 'Professional-grade feed, housing, and veterinary care products for modern livestock.' 
  },
};

const SUBCATEGORY_DETAILS: Record<string, string[]> = {
  "Seeds & Planting Material": ["Hybrid vegetable seeds with 99% germination", "Tissue-cultured fruit saplings for rapid growth", "Professional-grade flower seeds for commercial use"],
  "Soil, Media & Substrates": ["Premium coco-peat for nursery use", "Vermicompost and organic potting soil", "Specialized growing bags for hydroponics"],
  "Fertilizers & Nutrients": ["Water-soluble NPK fertilizers (19:19:19, etc.)", "Organic growth promoters and bio-stimulants", "Chelated micronutrient blends for precision feeding"],
  "Plant Protection & PGRs": ["Biological and organic pest control inputs", "Fungicides and disease management protocols", "Growth regulators for flower and fruit setting"],
  "Mulching & Ground Covers": ["UV-stabilized silver-black plastic mulch", "Biodegradable weed mats for open fields", "Ground covers for nursery and landscape use"],
  "Structures & Frames": ["Hot-dip galvanized GI structures for durability", "Naturally ventilated and climate-controlled designs", "Custom engineering for extreme wind and rain areas"],
  "Covering & Nets": ["UV-coated polyhouse films (200-micron+)", "Aluminet and Shade nets for temperature control", "Anti-insect and bird nets for crop safety"],
  "Ventilation & Cooling": ["Industrial exhaust fans and cooling pad systems", "Automated roof vents and side rolling mechanisms", "Axial fans for uniform air distribution"],
  "Fogging & Misting": ["High-pressure fogging for humidity control", "Low-flow misting for seedling hardening", "Precision nozzles with anti-leak valves"],
  "Pipes, Valves & Filters": ["CPVC, UPVC, and HDPE pipes for all applications", "Screen and disc filters for irrigation longevity", "Pressure-reducing and air-release valves"],
  "Irrigation & Fertigation": ["Online and inline drip irrigation systems", "Venturi and automated fertigation machines", "Micro-sprinklers for canopy and landscape cooling"],
  "Controllers & Timers": ["IoT-connected farm management controllers", "Simple timer-based solenoid valve control", "Mobile app integration for remote operation"],
  "Sensors & Monitoring": ["Soil moisture, pH, and EC telemetry nodes", "Real-time temperature and humidity tracking", "WSN (Wireless Sensor Networks) for large farms"],
  "Actuators & Valves": ["Electric and hydraulic solenoid valves", "Motorized actuators for roof/vent system control", "Proportional fertigation dosing pumps"],
  "Fish Farming Products": ["Premium floating and sinking fish feed", "Industrial paddle wheel and air-tube aerators", "Water quality testing and probiotic supplements"],
  "Shrimp Farming Products": ["HDPE pond liners and biosecurity nets", "Vannamei-specific feed and nutrient blends", "Mineral mixtures for shell health and growth"],
  "Goat & Sheep Products": ["Concentrated grow pellets for stall-fed goats", "Mineral licks and vitamin supplements", "Automatic nipple waterers and feeding troughs"],
  "Poultry Farming Products": ["Automated feeding and drinking lines", "Tunnel ventilation and climate control for sheds", "Chilled water systems for heat stress management"],
  "Dairy Farming Products": ["High-fat cattle feed and Bypass protein pellets", "Milking machines and cooling tank solutions", "Rubber mats and automatic grooming brushes"],
  "Hardware Nodes": ["LoRaWAN and GSM based farm telemetry hardware", "Solar-powered sensor pods and gateways", "Heavy-duty environmental sensors"],
  "Software & Dashboards": ["Cloud-based farm management dashboards", "Predictive pest and disease alerts", "Yield monitoring and inventory management tools"],
  "Advanced Digital Services": ["Satellite-based crop monitoring and mapping", "AI-driven soil health analysis", "Blockchain-based farm-to-fork traceability"],
  "Harvesting & Packing": ["Precision harvesting tools and secateurs", "Automated grading and sorting conveyor lines", "Hygienic packing and crate solutions"],
  "Cold Chain & Storage": ["Solar-powered cold storage units", "Refrigerated transport and van solutions", "Insulated storage bins for long shelf life"],
  "Processing & Value Add": ["Solar crop dryers and dehydrators", "Pulpers, grinders, and oil extraction units", "Value-addition consulting and brand building"],
  "Logistics Solutions": ["Farm-to-market fleet management", "Temperature-controlled distribution networks", "Last-mile delivery and export assistance"],
};

// ── Individual product images (mapped to product ID) ─────────────────────────
const PRODUCT_IMAGES: Record<string, string> = {
  // Agri Essentials
  'vegetable-seeds':               '/assets/product-images/product type new images/vegetable-seeds.png',
  'fruit-plants':                  '/assets/product-images/product type new images/fruits-plants.png',
  'flower-seeds':                  '/assets/product-images/product type new images/flower-seeds.png',
  'medicinal-plants':              '/assets/product-images/product type new images/medicinal-plant.png',
  // Crop Solutions
  'npk':                           '/assets/product-images/product type new images/npk-fertilizer.png',
  'organic':                       '/assets/product-images/product type new images/organic-compost-vermicompost.png',
  'bio':                           '/assets/product-images/product type new images/biofertilizer-azospirillum.png', 
  'liquid-fertilizers':            '/assets/product-images/product type new images/liquid-fertilizer.png',
  'micronutrients':                '/assets/product-images/product type new images/fine-powder-micronutrients.png',
  'insecticides':                  '/assets/compressed/product/types/insecticide-.webp',
  'fungicides':                    '/assets/compressed/product/types/fungicides-.webp',
  'herbicides':                    '/assets/compressed/product/types/herbisides-.webp',
  'biological':                    '/assets/compressed/product/types/bio-bestiscide-.webp',
  'seaweed':                       '/assets/compressed/product/types/amino-acid-.webp', // Placeholder
  'liquid':                        '/assets/compressed/product/types/luquide-fertilizers-.webp', // Placeholder
  // Animal Solutions
  'fish-feed':                     '/assets/compressed/product/types/fish-feed-.webp',
  'aerators':                      '/assets/compressed/product/types/aerators-.webp',
  'biofloc-tanks':                 '/assets/compressed/product/types/biofloc-tank-.webp',
  'pond-liners':                   '/assets/compressed/product/types/pond-liner-.webp',
  'water-testing-kits':            '/assets/compressed/product/types/wter-testing-kits-.webp',
  'fish-medicines':                '/assets/compressed/product/types/fish-medicins-.webp',
  'goat-feed':                     '/assets/compressed/product/types/goat-feed-s.webp',
  'cattle-feed':                   '/assets/compressed/product/types/cattle-feeds-.webp',
  'mineral-mixtures':              '/assets/compressed/product/types/mineral-mixtures-.webp',
  'livestock-medicines':           '/assets/compressed/product/types/live-stock-medicines-.webp',
  'livestock-equipment':           '/assets/compressed/product/types/live-stock-equipmemts-.webp',
  // Farm Equipment
  'polyhouse-sheets':              '/assets/compressed/product/types/polyhouse-sheets.webp',
  'shade-nets':                    '/assets/compressed/product/types/shade-nets-.webp',
  'insect-nets':                   '/assets/compressed/product/types/insect-net-.webp',
  'gi-pipes':                      '/assets/compressed/product/types/gi-pipes-.webp',
  'nft-channels':                  '/assets/compressed/product/types/nft-channels-.webp',
  'net-pots':                      '/assets/compressed/product/types/net-pots-.webp',
  'hydroponic-nutrients':          '/assets/compressed/product/types/hydroponic-nutrients-.webp',
  'grow-lights':                   '/assets/compressed/product/types/grow-lights.webp',
  'water-pumps':                   '/assets/compressed/product/types/waterpumpn.webp',
  'drip-irrigation-systems':       '/assets/compressed/product/types/drip-irrigation-system-.webp',
  'sprinklers':                    '/assets/compressed/product/types/sprinklers-.webp',
  'irrigation-pipes':              '/assets/compressed/product/types/irrigation-pipes-.webp',
  'solar-dryers':                  '/assets/compressed/product/types/solar-dryers-.webp',
  'solar-pumps':                   '/assets/compressed/product/types/solar-pumps-.webp',
  'solar-fencing-systems':         '/assets/compressed/product/types/solar-fencing-system-.webp',
  // Digital & IoT
  'soil-nutrient-scanner':         '/assets/compressed/product/types/wter-testing-kits-.webp', // Best match fallback
  'smart-farm-surveillance':       '/assets/compressed/product/types/smart-farm-surveillance.webp',
  'igo-erp-pro':                  '/assets/compressed/brands/igo-foundation.webp',
  // Post-Harvest
  'vacuum-packer-pro':             '/assets/compressed/product/types/solar-dryers-.webp', // Placeholder
  'cold-chain-iot':                '/assets/compressed/product/types/wter-testing-kits-.webp', // Placeholder
  'hybrid-seed-master-kit':        '/assets/compressed/product/types/vegetable-seed-.webp',
};

const CategoryView: React.FC<{ category: string; subcategory?: string }> = ({ category, subcategory }) => {
  const navigate = useNavigate();
  const categoryMeta = CATEGORY_META[category];
  const subMeta = subcategory ? SUBCATEGORY_META[subcategory] : null;
  const activeMeta = {
    label: subMeta?.label || categoryMeta?.label || category,
    image: subMeta?.image || categoryMeta?.cardImage || LOCAL_FALLBACK,
    desc: subMeta?.desc || categoryMeta?.desc || ""
  };

  const catItem = productsNav.find(c => c.href === `/products/${category}`);
  const subcategoryNode = subcategory ? catItem?.children?.find((s: any) => s.href === `/products/${category}/${subcategory}`) : null;
  const displayChildren = subcategory ? (subcategoryNode as any)?.children : (catItem as any)?.children;
  const products = subcategory ? productDetailData.filter(p => p.category === category && p.subcategory === subcategory) : [];

  if (!categoryMeta || !catItem) return <Navigate to="/products" />;

  const catBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.igoagritechfarms.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.igoagritechfarms.com/products" },
      { "@type": "ListItem", "position": 3, "name": categoryMeta.label, "item": `https://www.igoagritechfarms.com/products/${category}` },
      ...(subcategory ? [{ "@type": "ListItem" as const, "position": 4, "name": activeMeta.label, "item": `https://www.igoagritechfarms.com/products/${category}/${subcategory}` }] : [])
    ]
  };

  return (
    <div className="bg-white min-h-screen selection:bg-agri-green-50 selection:text-agri-green-800">
      <SEO
        title={`${activeMeta.label} Products`}
        description={`${activeMeta.desc} Buy premium agri-solutions from IGO Agritech Farms.`}
        keywords={`${activeMeta.label}, ${category}, agricultural products India`}
        url={`/products/${category}${subcategory ? '/' + subcategory : ''}`}
        image={activeMeta.image}
        jsonLd={catBreadcrumb}
      />

      {/* Premium Hero — Card Style */}
      <section className="bg-white pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumb — Minimal & Premium */}
          <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-black/30 mb-16 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
               Home
            </Link>
            <div className="w-6 h-px bg-black/10" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            {subcategory && (
              <>
                <div className="w-6 h-px bg-black/10" />
                <Link to={`/products/${category}`} className="hover:text-primary transition-colors">{categoryMeta.label}</Link>
              </>
            )}
            <div className="w-6 h-px bg-black/10" />
            <span className="text-agri-gold-600">
              {activeMeta.label}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-20">
            {/* LEFT — Image Card */}
            <div className="lg:w-[45%]">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl border border-black/5 group"
              >
                <OptimizedImage
                  src={activeMeta.image}
                  alt={activeMeta.label}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                  <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-agri-green-800 shadow-xl border border-black/5 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-agri-gold-500 animate-pulse" /> IGO {subcategory ? "Sub-Category" : "Primary Catalog"}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Info Side */}
            <div className="lg:w-[55%] lg:pt-4">
              <motion.div
                initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              >
                <motion.div variants={fader} className="flex items-center gap-3 text-agri-gold-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                  <div className="w-10 h-px bg-agri-gold-500/40" />
                  {subcategory ? "Technical Catalog" : "Institutional Division"}
                </motion.div>
                
                <motion.h1 variants={fader} className="text-5xl md:text-8xl font-serif text-agri-green-800 mb-8 tracking-tight leading-[0.95]">
                  {activeMeta.label}
                </motion.h1>

                <motion.p variants={fader} className="text-xl text-black/60 font-light leading-relaxed mb-10 border-l-4 border-agri-gold-500/20 pl-6 italic">
                  {activeMeta.desc} Precision engineered for performance, scale, and maximum agricultural yield.
                </motion.p>

                {/* Status Card / Counts */}
                <motion.div variants={fader} className="bg-agri-earth-15 p-8 rounded-[2rem] border border-black/5 mb-8 shadow-inner inline-flex items-center gap-8">
                  <div className="flex items-center gap-5">
                    <div className="text-5xl font-serif text-agri-green-800 leading-none">
                      {subcategory ? products.length : (catItem as any).children?.length || 0}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-black/40 leading-tight">
                      {subcategory ? "Validated\nProducts" : "Specialized\nCategories"}
                    </div>
                  </div>
                  <div className="w-px h-12 bg-black/5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-agri-gold-600 uppercase tracking-widest mb-1">Status</span>
                    <span className="text-xs font-black text-agri-green-800 uppercase tracking-widest">Active Division</span>
                  </div>
                </motion.div>

                {/* Category Action Link (Mobile view usually) */}
                <motion.div variants={fader}>
                  <Link to="/products" className="inline-flex items-center gap-3 text-agri-gold-500 font-bold text-[10px] uppercase tracking-[0.3em] group/back transition-all">
                    View Entire Collection
                    <ArrowRight className="w-4 h-4 group-hover/back:translate-x-1 transition-transform" /> 
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling category pills — Sticky navigation */}
      <div className="bg-white border-b border-black/5 sticky top-[72px] z-30">
        <div className="container mx-auto px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {productsNav.map((c: any) => {
            const active = c.href === `/products/${category}`;
            return (
              <Link
                key={c.href}
                to={c.href}
                className={`shrink-0 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-all ${active
                  ? "bg-agri-green-800 text-white border-agri-green-800 shadow-lg shadow-agri-green-800/10"
                  : "bg-white text-black/50 border-black/10 hover:border-agri-green-800 hover:text-agri-green-800"
                  }`}
              >
                {c.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Grid: Sub-categories or Products */}
      <section className="py-20 container mx-auto px-6 content-defer">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {(!subcategory && displayChildren && displayChildren.length > 0) ? (
            /* Sub-category Cards — Premium Overlay Style */
            displayChildren.map((child: any, i: number) => {
              const img = PRODUCT_IMAGES[child.href.split('/').pop() || ''] || activeMeta.image;
              const details = SUBCATEGORY_DETAILS[child.label] || [];
              return (
                <motion.div
                  key={child.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={child.href}
                    className="group relative block aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 bg-slate-50 border border-black/5"
                  >
                    <OptimizedImage
                      src={img}
                      alt={child.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Hover Decoration */}
                    <div className="absolute inset-0 border-[0.5px] border-white/0 group-hover:border-white/20 m-6 rounded-[1.5rem] transition-all duration-700" />

                    <div className="relative p-10 z-10 w-full h-full flex flex-col justify-end">
                      <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <span className="px-4 py-1.5 rounded-full bg-agri-gold-500 text-[10px] text-white font-black uppercase tracking-widest shadow-xl">
                          Explore Catalog
                        </span>
                      </div>
                      <h3 className="text-4xl font-serif text-white mb-6 leading-[0.9] tracking-tight group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                         {child.label}
                      </h3>
                      
                      <div className="space-y-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-150">
                        {details.slice(0, 3).map((d: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-agri-gold-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(196,160,82,0.8)]" />
                            <p className="text-white/60 text-[11px] font-medium leading-tight tracking-tight uppercase">{d}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex items-center gap-3 text-agri-gold-500 font-black text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                         View Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            /* Product Cards for Leaf levels — More Spacing and Refined UI */
            products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  to={`/products/${category}/${subcategory ? subcategory + '/' : ''}${product.id}`}
                  className="group flex flex-col bg-white rounded-[1.75rem] overflow-hidden border border-black/[0.06] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-agri-earth-50">
                    <OptimizedImage
                      src={PRODUCT_IMAGES[product.id] || activeMeta.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      fallbackSrc={activeMeta.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-agri-green-800 shadow-sm border border-black/5">
                        {subcategoryNode?.label || activeMeta.label}
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-agri-gold-500 font-bold text-[9px] uppercase tracking-widest mb-3">
                      <TrendingUp className="w-3 h-3" /> Professional Input
                    </div>
                    <h3 className="text-xl font-serif text-agri-green-800 mb-2 leading-snug group-hover:text-agri-gold-500 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-black/40 leading-relaxed line-clamp-2 mb-6 flex-1 italic font-light">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-black/[0.06]">
                      <div>
                        <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Commercial Price</span>
                        <span className="text-xl font-black text-agri-green-800">₹{product.pricing.retail.toLocaleString()}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-agri-earth-50 group-hover:bg-agri-green-800 flex items-center justify-center transition-colors shadow-sm">
                        <ArrowRight className="w-5 h-5 text-agri-green-800 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA strip — Matching Project style */}
      <section className="py-24 bg-agri-green-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">Need volume pricing for your {activeMeta.label}?</h2>
            <p className="text-white/60 text-lg font-light">Connect with our institutional sales desk for GST billing, formal quotes, and logistics scheduling across India.</p>
          </div>
          <Link
            to="/contact?subject=Institutional%20Sales"
            className="group shrink-0 inline-flex items-center gap-3 px-10 py-5 bg-white text-agri-green-800 text-[11px] font-bold rounded-full hover:bg-agri-gold-500 hover:text-white transition-all uppercase tracking-widest shadow-2xl"
          >
            Institutional Sales Desk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const DetailView: React.FC<{ product: ProductDetail; category: string }> = ({ product, category }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'description' | 'howToUse' | 'specifications'>('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedPackSize, setSelectedPackSize] = useState(product.packSizes[0]);
  const [selectedPriceTier, setSelectedPriceTier] = useState<'retail' | 'wholesale' | 'bulk'>('retail');
  const meta = CATEGORY_META[category];

  const productImg = PRODUCT_IMAGES[product.id] || meta?.cardImage || LOCAL_FALLBACK;
  const [imgUrl, setImgUrl] = useState(productImg);
  const [imgFallbackStage, setImgFallbackStage] = useState(0);

  useEffect(() => {
    setImgUrl(PRODUCT_IMAGES[product.id] || meta?.cardImage || LOCAL_FALLBACK);
    setImgFallbackStage(0);
  }, [product.id, category]);

  const onImageError = () => {
    if (imgFallbackStage === 0) {
      setImgUrl(meta?.cardImage || LOCAL_FALLBACK);
      setImgFallbackStage(1);
    } else if (imgFallbackStage === 1) {
      setImgUrl(LOCAL_FALLBACK);
      setImgFallbackStage(2);
    }
  };

  const handleEnquire = (subject?: string) => {
    const s = subject || `Enquiry: ${product.name}`;
    navigate(`/contact?subject=${encodeURIComponent(s)}`);
  };

  const priceTiers = [
    { id: 'retail' as const, label: 'Retail Price', value: product.pricing.retail },
    { id: 'wholesale' as const, label: 'Wholesale (Min 50)', value: product.pricing.wholesale },
    { id: 'bulk' as const, label: 'Bulk Institutional', value: product.pricing.bulk }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": imgUrl.startsWith("/") ? `https://www.igoagritechfarms.com${imgUrl}` : imgUrl,
    "brand": { "@type": "Brand", "name": "IGO Agritech Farms" },
    "category": product.categoryName,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product.pricing.retail,
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "IGO Agritech Farms" }
    }
  };

  const productBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.igoagritechfarms.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.igoagritechfarms.com/products" },
      { "@type": "ListItem", "position": 3, "name": meta?.label || category, "item": `https://www.igoagritechfarms.com/products/${category}` },
      { "@type": "ListItem", "position": 4, "name": product.name, "item": `https://www.igoagritechfarms.com/products/${category}/${product.id}` }
    ]
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 selection:bg-agri-green-50 selection:text-agri-green-800">
      <SEO
        title={product.name}
        description={`Buy ${product.name} from IGO Agritech Farms. ${product.description.slice(0, 100)} Starting from ₹${product.pricing.retail.toLocaleString()}. Pan-India delivery.`}
        keywords={`${product.name}, ${product.categoryName}, buy ${product.categoryName.toLowerCase()}, IGO Agritech Farms, agricultural products`}
        url={`/products/${category}/${product.id}`}
        image={imgUrl.startsWith("/") ? imgUrl : undefined}
        jsonLd={{ "@context": "https://schema.org", "@graph": [productBreadcrumb, productSchema] }}
      />
      <div className="container mx-auto px-6">

        {/* Breadcrumb */}
        {/* Breadcrumb — Minimal & Premium */}
        <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-black/30 mb-16 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
             Home
          </Link>
          <div className="w-6 h-px bg-black/10" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <div className="w-6 h-px bg-black/10" />
          <Link to={`/products/${category}`} className="hover:text-primary transition-colors">
            {meta?.label || category}
          </Link>
          <div className="w-6 h-px bg-black/10" />
          <span className="text-agri-gold-600 truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-20">

          {/* LEFT — Image + Trust Badges */}
          <div className="lg:w-[45%]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl border border-black/5 group"
            >
              <OptimizedImage
                src={imgUrl}
                alt={product.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={onImageError}
                fallbackSrc={meta?.cardImage || LOCAL_FALLBACK}
              />
              <div className="absolute top-8 left-8">
                <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-agri-green-800 shadow-xl border border-black/5 flex items-center gap-2">
                  <BadgeCheck className="w-3.5 h-3.5 text-agri-gold-600" /> Premium Institutional Grade
                </div>
              </div>
            </motion.div>

            {/* Trust badges — Refined */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: Shield, label: 'Quality Assured' },
                { icon: Headphones, label: 'Expert Support' },
                { icon: Truck, label: 'Pan India Express' }
              ].map((badge, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex flex-col items-center text-center p-5 rounded-3xl bg-slate-50 border border-black/[0.03] hover:border-agri-gold-500/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 border border-black/[0.02]">
                    <badge.icon className="w-5 h-5 text-agri-gold-500" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-black/50 leading-tight">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Info */}
          <div className="lg:w-[55%] lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 text-agri-gold-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                <div className="w-10 h-px bg-agri-gold-500/40" />
                {product.categoryName}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-agri-green-800 mb-6 tracking-tight leading-[0.95]">
                {product.name}
              </h1>
              <p className="text-xl text-black/60 font-light leading-relaxed mb-10 border-l-4 border-agri-gold-500/20 pl-6 italic">
                {product.description}
              </p>

              {/* Price Card */}
              <div className="bg-agri-earth-15 p-8 rounded-[2rem] border border-black/5 mb-12 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-8">
                  <div>
                    <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] block mb-2">Institutional Pricing</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-agri-green-800">₹{selectedPackSize === product.packSizes[0] ? product.pricing[selectedPriceTier].toLocaleString() : (product.pricing[selectedPriceTier] * 1.5).toLocaleString()}</span>
                      <span className="text-black/30 text-sm font-medium">/ unit</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {priceTiers.map(tier => (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedPriceTier(tier.id)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                          selectedPriceTier === tier.id 
                            ? 'bg-agri-green-800 text-white border-agri-green-800 shadow-lg' 
                            : 'bg-white text-black/40 border-black/5 hover:border-agri-green-800 hover:text-agri-green-800'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tabs Section — More Spacing */}
              <div className="mt-12">
                <div className="flex border-b border-black/5 mb-10 overflow-x-auto no-scrollbar">
                  {[
                    { id: 'description', label: 'Overview' },
                    { id: 'specifications', label: 'Technical Details' },
                    { id: 'howToUse', label: 'Usage Protocol' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all relative ${
                        activeTab === tab.id ? 'text-agri-green-800' : 'text-black/30 hover:text-black/60'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-agri-gold-500" />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[250px] leading-relaxed"
                  >
                    {activeTab === 'description' && (
                      <div className="text-lg text-black/70 font-light space-y-6">
                        <p>{product.tabDescription}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                          {product.features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-black/[0.03]">
                              <CheckCircle2 className="w-5 h-5 text-agri-gold-500 mt-0.5 shrink-0" />
                              <span className="text-sm font-medium text-black/70">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'specifications' && (
                      <div className="grid gap-3">
                        {Object.entries(product.specifications).map(([key, val], i) => (
                          <div key={i} className="flex justify-between items-center p-5 rounded-2xl bg-slate-50/50 border border-black/[0.02] hover:bg-white transition-colors">
                            <span className="text-sm font-bold text-black/40 uppercase tracking-widest">{key}</span>
                            <span className="text-sm font-black text-agri-green-800">{val}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'howToUse' && (
                      <div className="space-y-4">
                        {product.howToUse.map((step, i) => (
                          <div key={i} className="flex items-start gap-5 p-6 rounded-[1.5rem] bg-agri-earth-15 border border-black/5">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-black text-agri-green-800 shadow-sm border border-black/5 shrink-0">
                              {i + 1}
                            </div>
                            <span className="text-base text-black/70 font-medium pt-1">{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-5 mt-16 pt-12 border-t border-black/5">
                <button
                  onClick={() => handleEnquire()}
                  className="flex-1 px-10 py-5 bg-agri-green-800 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#2a5a45] transition-all shadow-xl shadow-agri-green-800/20 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Enquire Institutional Rate
                </button>
                <Link
                  to="/agri-startup-platform"
                  className="flex-1 px-10 py-5 bg-white border-2 border-agri-green-800 text-agri-green-800 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-agri-green-50 transition-all flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" /> Startup Feasibility Report
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {product.relatedProducts.length > 0 && (
          <div className="mt-32 content-defer">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs font-black text-agri-gold-500 tracking-[0.3em] uppercase mb-3 block">Complementary</span>
                <h2 className="text-3xl font-black text-agri-green-800">Related Products</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.relatedProducts.map((relatedId) => {
                const related = productDetailData.find(p => p.id === relatedId);
                if (!related) return null;
                const relatedMeta = CATEGORY_META[related.category];
                return (
                  <Link
                    key={related.id}
                    to={`/products/${related.category}/${related.id}`}
                    className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                      <OptimizedImage
                        src={PRODUCT_IMAGES[related.id] || relatedMeta?.cardImage || LOCAL_FALLBACK}
                        alt={related.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        fallbackSrc={relatedMeta?.cardImage || LOCAL_FALLBACK}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-agri-green-800 shadow-sm">
                        {related.categoryName}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-sm font-black text-agri-green-800 mb-2 group-hover:text-agri-gold-500 transition-colors line-clamp-1">
                        {related.name}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs font-bold text-gray-400">From ₹{related.pricing.retail.toLocaleString()}</span>
                        <div className="flex items-center text-agri-gold-500 text-xs font-black uppercase tracking-widest gap-1">
                          View <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Smart Router — 2-mode detection ──────────────────────────────────────────

const ProductRouter: React.FC = () => {
  const { category, subcategory, productSlug } = useParams<{ category: string; subcategory?: string; productSlug?: string }>();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [category, subcategory, productSlug]);

  // Priority detection:
  // 1. productSlug exists -> definitely a product (/products/cat/sub/slug)
  // 2. subcategory exists AND is a product ID -> product (/products/cat/slug)
  const actualProductSlug = productSlug || subcategory;
  const product = productDetailData.find(p => p.id === actualProductSlug && p.category === category);

  if (product) {
    return <DetailView product={product} category={category || ''} />;
  }

  // Otherwise, it's a listing view
  return <CategoryView category={category || ''} subcategory={subcategory} />;
};

export default ProductRouter;

