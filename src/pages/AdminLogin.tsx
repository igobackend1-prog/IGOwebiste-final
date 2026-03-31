import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import SEO from "@/components/SEO";

// Module tiles shown below the login bar
const modules = [
  {
    label: "Blog Manager",
    bg: "bg-[#6B9E4F]",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="4" fill="white" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <ellipse key={i} cx="20" cy="20" rx="3" ry="7"
            transform={`rotate(${deg} 20 20) translate(0 -11)`}
            fill="white" opacity="0.9" />
        ))}
      </svg>
    ),
    section: "blog",
  },
  {
    label: "Projects",
    bg: "bg-[#5C3317]",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6 C14 6 10 11 10 17 C10 24 20 34 20 34 C20 34 30 24 30 17 C30 11 26 6 20 6Z" fill="white" opacity="0.9"/>
        <circle cx="20" cy="17" r="4" fill="#5C3317"/>
      </svg>
    ),
    section: "projects",
  },
  {
    label: "Products",
    bg: "bg-[#C4956A]",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 8 L20 32 M16 12 L20 8 L24 12 M14 17 L20 13 L26 17 M13 22 L20 18 L27 22 M12 27 L20 23 L28 27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    section: "products",
  },
  {
    label: "Enquiries",
    bg: "bg-[#2D5A27]",
    bgImage: "/assets/background page for agri starup and about .webp",
    icon: null,
    section: "leads",
  },
  {
    label: "Services",
    bg: "bg-[#3D2B1A]",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="18" width="28" height="3" rx="1.5" fill="white" opacity="0.3"/>
        <path d="M20 34 C14 28 8 22 8 16 C8 10.5 13.5 6 20 6 C26.5 6 32 10.5 32 16 C32 22 26 28 20 34Z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M20 34 C14 28 8 22 8 16 C8 10.5 13.5 6 20 6" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="16" r="3" fill="white" opacity="0.8"/>
      </svg>
    ),
    section: "services",
  },
  {
    label: "Analytics",
    bg: "bg-[#C8922A]",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        {/* Honeycomb pattern */}
        {[
          [20,10],[13,14],[27,14],[10,20],[20,20],[30,20],[13,26],[27,26],[20,30]
        ].map(([cx,cy],i) => (
          <polygon key={i}
            points={`${cx},${cy-5} ${cx+4.3},${cy-2.5} ${cx+4.3},${cy+2.5} ${cx},${cy+5} ${cx-4.3},${cy+2.5} ${cx-4.3},${cy-2.5}`}
            fill="none" stroke="white" strokeWidth="1.2" opacity="0.85"
          />
        ))}
        <text x="20" y="23" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">🐝</text>
      </svg>
    ),
    section: "analytics",
  },
];

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative" style={{ backgroundColor: "#0F2414" }}>
      <SEO title="Admin Login" description="IGO Agritech Farms admin login." noIndex />

      {/* ── Top nature photo zone ── */}
      <div className="relative h-[45vh] overflow-hidden">
        <img
          src="/assets/background page for agri starup and about .webp"
          alt="Nature background"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#1A3A22]/80" />
      </div>

      {/* ── Bottom green textured zone ── */}
      <div
        className="relative min-h-[55vh]"
        style={{
          backgroundColor: "#1A3A22",
          backgroundImage: `url('/assets/background page for agri starup and about .webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* Subtle leaf pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(ellipse at 20% 50%, #4A7C5920 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #2D5A2720 0%, transparent 60%)"
          }}
        />
      </div>

      {/* ── Floating login bar — straddles both zones ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
        style={{ top: "calc(45vh - 40px)" }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 bg-[#1F4A2A]/90 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10"
        >
          {/* Logo icon */}
          <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
              <circle cx="16" cy="12" r="3" fill="#6FC87A"/>
              <path d="M16 15 L16 26" stroke="#6FC87A" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 8 C8 4 12 2 16 4 C20 2 24 4 24 8" stroke="#C8D87A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M5 14 C3 10 6 6 10 7" stroke="#6FC87A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M27 14 C29 10 26 6 22 7" stroke="#6FC87A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          {/* User ID */}
          <input
            type="email"
            placeholder="User ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#6FC87A]/60 focus:bg-white/15 transition"
          />

          {/* Password */}
          <div className="relative flex-1">
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 pr-10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#6FC87A]/60 focus:bg-white/15 transition"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition"
            >
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-[#3D7A45] hover:bg-[#4A8F53] disabled:opacity-60 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-green-900/30"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 opacity-80">
              <path d="M10 2C8 2 6 3.5 5.5 5.5C4 5.8 3 7 3 8.5C3 10.2 4.3 11.5 6 11.5H14C15.7 11.5 17 10.2 17 8.5C17 7 16 5.8 14.5 5.5C14 3.5 12 2 10 2Z"/>
              <path d="M7 14 L10 17 L13 14" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"/>
              <path d="M10 11.5 L10 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {loading ? "..." : "LOGIN"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-xs text-center mt-3 bg-red-900/20 rounded-xl py-2 px-4 border border-red-500/20"
          >
            {error}
          </motion.p>
        )}
      </motion.div>

      {/* ── Module tiles grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
        style={{ top: "calc(45vh + 72px)" }}
      >
        <div className="grid grid-cols-3 gap-3 mt-4">
          {modules.map((mod, i) => (
            <motion.button
              key={mod.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              onClick={() => navigate(`/admin/dashboard?section=${mod.section}`)}
              className={`relative ${mod.bg} rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-white/10`}
            >
              {mod.bgImage && (
                <img src={mod.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              )}
              <div className="relative z-10 flex flex-col items-center gap-1.5">
                {mod.icon}
                <span className="text-white text-[10px] font-bold uppercase tracking-wider drop-shadow">
                  {mod.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Brand footer */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-4">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">IGO Agritech Farms — Admin</span>
          <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
