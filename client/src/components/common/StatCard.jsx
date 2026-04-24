import { motion } from 'framer-motion';

function StatCard({ label, value, hint }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-glow"
    >
      <p className="text-sm text-slate-300">{label}</p>
      <div className="mt-3 text-3xl font-bold tracking-tight text-white">{value}</div>
      {hint ? <p className="mt-2 text-sm text-slate-400">{hint}</p> : null}
    </motion.div>
  );
}

export default StatCard;
