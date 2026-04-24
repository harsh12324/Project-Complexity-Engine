const tone = {
  Easy: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  Medium: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
  Hard: 'bg-orange-500/15 text-orange-300 border-orange-400/30',
  'Very Hard': 'bg-rose-500/15 text-rose-300 border-rose-400/30'
};

function DifficultyBadge({ difficulty }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${tone[difficulty] || tone.Medium}`}>
      {difficulty}
    </span>
  );
}

export default DifficultyBadge;
