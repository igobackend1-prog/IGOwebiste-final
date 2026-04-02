import { motion } from "framer-motion";
import { Leaf, Sprout, Tractor, Droplets, Sun, TreePine, Mountain, Flower2, Home, Landmark } from "lucide-react";

const icons = [
  { component: Leaf, x: "8%", y: "15%", size: "w-12 h-12", delay: 0, duration: 12 },
  { component: Tractor, x: "85%", y: "25%", size: "w-10 h-10", delay: 2, duration: 14 },
  { component: TreePine, x: "20%", y: "70%", size: "w-16 h-16", delay: 1, duration: 10 },
  { component: Sprout, x: "75%", y: "60%", size: "w-8 h-8", delay: 3, duration: 13 },
  { component: Landmark, x: "50%", y: "80%", size: "w-12 h-12", delay: 4, duration: 11 },
  { component: Flower2, x: "90%", y: "75%", size: "w-6 h-6", delay: 1.5, duration: 15 },
  { component: Droplets, x: "15%", y: "45%", size: "w-8 h-8", delay: 2.5, duration: 9 },
  { component: Sprout, x: "65%", y: "10%", size: "w-10 h-10", delay: 0.5, duration: 12 },
  { component: Home, x: "40%", y: "35%", size: "w-8 h-8", delay: 3.5, duration: 14 },
  { component: Sun, x: "55%", y: "90%", size: "w-10 h-10", delay: 1, duration: 10 },
];

const FloatingBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {icons.map((icon, i) => {
      const IconComponent = icon.component;
      return (
        <motion.div
          key={i}
          className="absolute opacity-[0.04] select-none text-agri-green-900"
          style={{ left: icon.x, top: icon.y }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconComponent className={icon.size} strokeWidth={1} />
        </motion.div>
      );
    })}
    {/* Subtle gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
  </div>
);

export default FloatingBackground;
