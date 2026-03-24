import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, RotateCcw, Clock } from "lucide-react";
import {
  HistoryEntry, OfferPoster, getHistory, getOffers, saveOffers, addHistory, generateId, exportHistoryCSV,
} from "@/data/offersData";

const ACTION_STYLE: Record<string, { color: string; label: string }> = {
  published:    { color: "text-emerald-400 bg-emerald-500/15",  label: "Published" },
  updated:      { color: "text-blue-400 bg-blue-500/15",        label: "Updated" },
  deleted:      { color: "text-red-400 bg-red-500/15",          label: "Deleted" },
  activated:    { color: "text-emerald-400 bg-emerald-500/15",  label: "Activated" },
  deactivated:  { color: "text-orange-400 bg-orange-500/15",    label: "Deactivated" },
  reordered:    { color: "text-purple-400 bg-purple-500/15",    label: "Reordered" },
};

const HistoryTab = ({ refreshKey }: { refreshKey: number }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [restored, setRestored] = useState<string | null>(null);

  useEffect(() => { setHistory(getHistory()); }, [refreshKey]);

  const restore = (entry: HistoryEntry) => {
    if (!entry.snapshot) return;
    const offers = getOffers();
    const exists = offers.find(o => o.id === entry.posterId);
    const snap   = entry.snapshot as OfferPoster;

    if (exists) {
      saveOffers(offers.map(o => o.id === entry.posterId
        ? { ...snap, updatedAt: new Date().toISOString() }
        : o
      ));
    } else {
      saveOffers([...offers, {
        ...snap,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }]);
    }
    addHistory({
      action: "published",
      posterTitle: snap.title,
      posterId: snap.id,
      changeNote: `Restored from backup (history entry ${entry.id})`,
      snapshot: snap,
    });
    setHistory(getHistory());
    setRestored(entry.id);
    setTimeout(() => setRestored(null), 2500);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-white">Update History</h2>
          <p className="text-white/40 text-xs mt-0.5">{history.length} records · last 150 kept</p>
        </div>
        <button
          onClick={exportHistoryCSV}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-white/12 text-white/70 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/12 transition-all"
        >
          <Download className="w-3.5 h-3.5" /> Export CSV
        </button>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-16 text-white/30">
          <Clock className="w-8 h-8 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No history yet. Actions you take will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((entry, i) => {
            const style   = ACTION_STYLE[entry.action] || ACTION_STYLE.updated;
            const canRestore = !!entry.snapshot;
            const isRestored = restored === entry.id;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-4 flex gap-4 items-start"
              >
                {/* Timeline dot */}
                <div className="shrink-0 mt-0.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black uppercase ${style.color}`}>
                    {style.label.slice(0, 2)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${style.color}`}>
                      {style.label}
                    </span>
                    <span className="text-white font-semibold text-sm truncate">
                      "{entry.posterTitle}"
                    </span>
                  </div>
                  {entry.changeNote && (
                    <p className="text-white/40 text-xs mb-1">{entry.changeNote}</p>
                  )}
                  <div className="flex items-center gap-2 text-[10px] text-white/25">
                    <Clock className="w-3 h-3" />
                    {new Date(entry.timestamp).toLocaleString("en-IN", {
                      day: "2-digit", month: "short", year: "numeric",
                      hour: "2-digit", minute: "2-digit",
                    })}
                  </div>
                </div>

                {/* Restore button */}
                {canRestore && (
                  <button
                    onClick={() => restore(entry)}
                    className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                      isRestored
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-white/6 border border-white/10 text-white/40 hover:border-primary/40 hover:text-[#6FD898]"
                    }`}
                    title="Restore this poster from backup"
                  >
                    <RotateCcw className="w-3 h-3" />
                    {isRestored ? "Restored!" : "Restore"}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HistoryTab;
