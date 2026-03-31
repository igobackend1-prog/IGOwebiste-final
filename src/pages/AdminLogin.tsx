import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
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
  const [isSuccess, setIsSuccess] = useState(false);
  
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
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500); 
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-[#0F2414] font-sans flex flex-col items-center justify-center">
      <SEO title="Admin Login" description="IGO Agritech Farms admin login." noIndex />

      {/* Hero Background Image with open animation */}
      <AnimatePresence>
        {!isSuccess && (
          <motion.div
            initial={{ scale: 1.15, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/assets/background page for agri starup and about .webp"
              alt="Admin Login Background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2414] via-[#0F2414]/80 to-[#1A3A22]/40" />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Ripple Effect */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 50, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute z-50 w-32 h-32 bg-[#3D7A45] rounded-full flex items-center justify-center"
            style={{ top: "calc(50% - 64px)", left: "calc(50% - 64px)" }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute z-50 flex flex-col items-center justify-center text-white w-full h-full pointer-events-none"
          >
            <CheckCircle2 className="w-24 h-24 mb-4 text-white" strokeWidth={1.5} />
            <h2 className="text-3xl font-extrabold tracking-[0.2em] drop-shadow-lg">ACCESS GRANTED</h2>
            <p className="text-white/80 mt-2 font-medium tracking-widest uppercase text-sm">Entering Secure Portal...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
        {/* Main Login Display */}
        <AnimatePresence>
          {!isSuccess && (
             <motion.div
             initial={{ opacity: 0, y: -40 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -40, scale: 0.9 }}
             transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
             className="w-full flex-col items-center flex mt-10 md:mt-0"
           >
             <div className="mb-8 flex flex-col items-center">
               <motion.div 
                 initial={{ rotate: -180, scale: 0 }}
                 animate={{ rotate: 0, scale: 1 }}
                 transition={{ duration: 1, delay: 0.5, type: "spring" }}
                 className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md mb-4 shadow-[0_0_40px_rgba(111,200,122,0.4)]"
               >
                   <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10">
                   <circle cx="16" cy="12" r="3" fill="#ffffff"/>
                   <path d="M16 15 L16 26" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                   <path d="M8 8 C8 4 12 2 16 4 C20 2 24 4 24 8" stroke="#A2CFA8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                   <path d="M5 14 C3 10 6 6 10 7" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                   <path d="M27 14 C29 10 26 6 22 7" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                   </svg>
               </motion.div>
               <h1 className="text-4xl md:text-5xl font-black text-white tracking-[0.15em] drop-shadow-2xl">IGO ADMIN</h1>
               <p className="text-[#A2CFA8] mt-2 font-semibold tracking-[0.2em] text-sm uppercase drop-shadow">Secure Systems Portal</p>
             </div>

             <form
               onSubmit={handleSubmit}
               className="w-full max-w-md bg-[#0b1c0e]/60 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10 relative overflow-hidden"
             >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#6FC87A] opacity-10 blur-[80px] pointer-events-none" />

               <div className="space-y-5 relative z-10">
                 <div className="space-y-1.5">
                   <label className="text-xs text-white/50 font-bold uppercase tracking-widest pl-1">User ID</label>
                   <input
                     type="email"
                     placeholder="admin@igogroups.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-base placeholder:text-white/20 focus:outline-none focus:border-[#6FC87A]/80 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(111,200,122,0.15)] transition-all"
                   />
                 </div>

                 <div className="space-y-1.5">
                   <label className="text-xs text-white/50 font-bold uppercase tracking-widest pl-1">Password</label>
                   <div className="relative">
                     <input
                       type={showPw ? "text" : "password"}
                       placeholder="••••••••••••"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                       className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-12 text-white text-base placeholder:text-white/20 focus:outline-none focus:border-[#6FC87A]/80 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(111,200,122,0.15)] transition-all"
                     />
                     <button
                       type="button"
                       onClick={() => setShowPw(!showPw)}
                       className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/80 transition-colors p-2"
                     >
                       {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                     </button>
                   </div>
                 </div>

                 <button
                   type="submit"
                   disabled={loading}
                   className="w-full mt-6 relative group overflow-hidden bg-gradient-to-r from-[#2F5E36] to-[#4A8F53] disabled:opacity-70 text-white font-extrabold tracking-[0.15em] uppercase rounded-2xl py-4 transition-all hover:shadow-[0_0_35px_rgba(74,143,83,0.6)] hover:-translate-y-0.5"
                 >
                   <span className="relative z-10 flex items-center justify-center gap-3">
                     {loading ? (
                       <span className="animate-pulse">AUTHENTICATING...</span>
                     ) : (
                       <>
                         SECURE LOGIN
                         <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 opacity-90 group-hover:translate-x-1.5 transition-transform duration-300">
                           <path d="M10 2C8 2 6 3.5 5.5 5.5C4 5.8 3 7 3 8.5C3 10.2 4.3 11.5 6 11.5H14C15.7 11.5 17 10.2 17 8.5C17 7 16 5.8 14.5 5.5C14 3.5 12 2 10 2Z"/>
                           <path d="M7 14 L10 17 L13 14" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"/>
                           <path d="M10 11.5 L10 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                         </svg>
                       </>
                     )}
                   </span>
                   <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10" />
                 </button>
               </div>

               {error && (
                 <motion.div
                   initial={{ opacity: 0, height: 0, y: -10 }}
                   animate={{ opacity: 1, height: "auto", y: 0 }}
                   className="mt-6"
                 >
                   <p className="text-red-300 text-sm font-medium tracking-wide text-center bg-red-500/10 rounded-xl py-3 px-4 border border-red-500/30">
                     {error}
                   </p>
                 </motion.div>
               )}
             </form>
           </motion.div>
          )}
        </AnimatePresence>

        {/* Modules Grid */}
        <AnimatePresence>
          {!isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.3 }}
              className="mt-10 md:mt-16 w-full max-w-4xl pb-10"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {modules.map((mod, i) => (
                  <motion.button
                    key={mod.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.08), type: "spring", bounce: 0.4 }}
                    onClick={() => navigate(`/admin/dashboard?section=${mod.section}`)}
                    className={`relative ${mod.bg} rounded-3xl aspect-[1.1] md:aspect-square flex flex-col items-center justify-center gap-3 overflow-hidden shadow-2xl border border-white/15 group cursor-pointer`}
                  >
                    {mod.bgImage && (
                      <img src={mod.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                    )}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                        {mod.icon}
                      </div>
                      <span className="text-white text-[11px] font-extrabold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center px-1">
                        {mod.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {!isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-6 flex items-center justify-center gap-3 z-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#6FC87A]/50 shadow-[0_0_10px_rgba(111,200,122,0.8)]" />
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">IGO Agritech Farms &copy; {new Date().getFullYear()}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6FC87A]/50 shadow-[0_0_10px_rgba(111,200,122,0.8)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminLogin;
