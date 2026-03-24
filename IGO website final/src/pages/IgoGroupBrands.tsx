import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

// ─── Brand Data ───────────────────────────────────────────────────────────────

interface Brand {
  name: string;
  category: string;
  desc: string;
  upcoming?: boolean;
  catColor: string;   // badge text colour
  cardBg: string;     // card background
}

const BRANDS: Brand[] = [
  // Core Business
  {
    name: "IGO Agritech Farms",
    category: "Core Business",
    desc: "India's leading Agri Engineering & Consulting brand. Polyhouse, hydroponics, vertical farming, precision farming, goat farming, mushroom farming. Pan-India. MSME Award 2024.",
    catColor: "#2E7D32",
    cardBg: "#E8F5E9",
  },
  // Distribution
  {
    name: "IGO Agri Mart",
    category: "Distribution",
    desc: "Farm inputs and distribution network. Connecting quality agricultural inputs directly to farmers across India.",
    catColor: "#1565C0",
    cardBg: "#E3F2FD",
  },
  {
    name: "Farmers Factory",
    category: "Distribution",
    desc: "Farm to shop distribution brand. Bringing fresh farm produce directly to retail stores and consumers across India.",
    catColor: "#1565C0",
    cardBg: "#E3F2FD",
  },
  // Retail
  {
    name: "IGO Mart",
    category: "Retail",
    desc: "Supermarket chain offering quality products at accessible prices. Part of IGO Group's consumer retail vision.",
    catColor: "#AD1457",
    cardBg: "#FCE4EC",
  },
  {
    name: "Valluvam",
    category: "Retail",
    desc: "Branded grocery staples brand. Quality everyday essentials under the trusted IGO Group umbrella.",
    catColor: "#AD1457",
    cardBg: "#FCE4EC",
  },
  {
    name: "Protein Cuts",
    category: "Retail",
    desc: "Premium meat, fish, and eggs retail brand. Farm-fresh protein products delivered with quality assurance.",
    catColor: "#AD1457",
    cardBg: "#FCE4EC",
  },
  // F&B
  {
    name: "Palm Cafe",
    category: "F&B",
    desc: "Farm to place F&B brand. Healthy food concept from IGO's own farm produce. Creating 5,000 jobs for non-graduate youth.",
    catColor: "#E65100",
    cardBg: "#FFF3E0",
  },
  // Fintech
  {
    name: "IGO Fintech",
    category: "Fintech",
    desc: "Micro finance unit providing financial access and support to farmers and agricultural entrepreneurs across India.",
    catColor: "#4527A0",
    cardBg: "#EDE7F6",
  },
  // Agri
  {
    name: "IGO Nursery",
    category: "Agri",
    desc: "Premium nursery and landscaping solutions. Supplying quality plants, seeds, and horticultural products.",
    catColor: "#1B5E20",
    cardBg: "#F1F8E9",
  },
  // Trade
  {
    name: "IGO Exports & Imports",
    category: "Trade",
    desc: "International trade division connecting Indian agricultural products to global markets and bringing world-class inputs to India.",
    catColor: "#00695C",
    cardBg: "#E0F2F1",
  },
  // Real Estate
  {
    name: "IGO Farmlands Estates",
    category: "Real Estate",
    desc: "Agricultural land and property development. Creating investment opportunities in farmland across India.",
    catColor: "#558B2F",
    cardBg: "#F9FBE7",
  },
  // Foundation
  {
    name: "IGO Tech Farming Scientist Foundation",
    category: "Foundation",
    desc: "Research and education foundation advancing agri-science and technology for the next generation of tech farming scientists.",
    catColor: "#37474F",
    cardBg: "#ECEFF1",
  },
  // Investment
  {
    name: "IGO Wealth Management",
    category: "Investment",
    desc: "JV investment project providing wealth management and financial planning services to IGO Group stakeholders.",
    catColor: "#FF6F00",
    cardBg: "#FFF8E1",
  },
  // Franchise
  {
    name: "IGO Group Franchise FICO",
    category: "Franchise",
    desc: "Franchise operations division. Expanding IGO Group brands across India through a structured franchise model.",
    catColor: "#BF360C",
    cardBg: "#FBE9E7",
  },
  // Programme
  {
    name: "IGO Farm Gate Buy-Back",
    category: "Programme",
    desc: "Guaranteed buy-back programme for farmers. Empowering agricultural entrepreneurs with assured market access.",
    catColor: "#33691E",
    cardBg: "#F1F8E9",
  },
  // Agri Input
  {
    name: "IGO Crop Care",
    category: "Agri Input",
    desc: "Agricultural input products division. Quality crop care solutions for optimum yield and sustainable farming practices.",
    catColor: "#2E7D32",
    cardBg: "#E8F5E9",
  },
  // Upcoming
  {
    name: "IGO Organic Pharma",
    category: "Upcoming",
    desc: "Future division developing organic pharmaceutical products from IGO's farm network. Bridging agriculture and health.",
    catColor: "#9E9E9E",
    cardBg: "#F5F5F5",
    upcoming: true,
  },
  {
    name: "IGO Cosmetics",
    category: "Upcoming",
    desc: "Future personal care brand using natural farm-sourced ingredients. Farm to skin — the next frontier for IGO Group.",
    catColor: "#9E9E9E",
    cardBg: "#F5F5F5",
    upcoming: true,
  },
];

// Count active brands (non-upcoming)
const ACTIVE_COUNT = BRANDS.filter(b => !b.upcoming).length;

// ─── Component ────────────────────────────────────────────────────────────────

const IgoGroupBrands = () => (
  <div className="bg-white min-h-screen">

    {/* ── HERO ── */}
    <section className="relative pt-36 pb-24 overflow-hidden bg-[#0C1A14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(197,160,63,0.10),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(26,66,49,0.6),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/agri-startup-platform"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Platform
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="flex items-center gap-4 mb-7">
            <div className="h-px w-8 bg-[#C5A03F]/60" />
            <span className="text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.35em]">IGO Group</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[0.95] tracking-tight mb-6">
            Our Brands
          </h1>
          <p className="text-white/55 text-xl font-light leading-relaxed max-w-xl">
            {ACTIVE_COUNT} brands. One vision — building India's most trusted agri-business ecosystem from farm to consumer.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 grid grid-cols-3 max-w-xl divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden"
        >
          {[
            { value: `${ACTIVE_COUNT}`, label: "Active Brands" },
            { value: "10+",             label: "Business Sectors" },
            { value: "Pan-India",       label: "Operational Reach" },
          ].map(s => (
            <div key={s.label} className="px-6 py-5 text-center">
              <p className="text-2xl font-serif text-[#C5A03F] mb-0.5">{s.value}</p>
              <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── BRAND GRID ── */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.35em] mb-3">All Brands</p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">The IGO Group Ecosystem</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-5xl">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.07 }}
              className="rounded-2xl border border-black/6 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ backgroundColor: brand.cardBg }}
            >
              <div className="p-7">
                {/* Category badge */}
                <span
                  className="text-[10px] font-black uppercase tracking-[0.25em] mb-5 block"
                  style={{ color: brand.catColor }}
                >
                  {brand.category}
                </span>

                {/* Brand name */}
                <h3 className={`text-xl font-bold mb-3 leading-snug ${brand.upcoming ? "text-black/40" : "text-[#1A1A1A]"}`}>
                  {brand.name}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${brand.upcoming ? "text-black/35" : "text-black/55"}`}>
                  {brand.desc}
                </p>

                {brand.upcoming && (
                  <span className="inline-block mt-4 text-[9px] font-black uppercase tracking-[0.3em] text-black/30 border border-black/15 rounded-full px-3 py-1">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── BOTTOM CTA ── */}
    <section className="py-24 bg-[#0D1F15] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1A4231]/70 blur-[130px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="h-px w-10 bg-[#C5A03F]/50" />
            <span className="text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.4em]">Join the Group</span>
            <div className="h-px w-10 bg-[#C5A03F]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-5 leading-tight">
            Grow with the<br />
            <span className="italic text-[#C5A03F]">IGO Ecosystem.</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-lg mx-auto mb-10">
            Whether you're an entrepreneur, investor, or farmer — there's a place for you within the IGO Group.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/startup-enquiry"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#C5A03F] text-white text-[10px] font-bold rounded-full uppercase tracking-widest hover:bg-white hover:text-[#1A4231] transition-all shadow-2xl shadow-[#C5A03F]/25 group"
            >
              Partner With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/agri-startup-platform"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white/10 border border-white/20 text-white text-[10px] font-bold rounded-full uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              ← Back to Platform
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

  </div>
);

export default IgoGroupBrands;
