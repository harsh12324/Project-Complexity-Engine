function ScoreGauge({ score }) {
  const safeScore = Math.max(0, Math.min(100, Number(score || 0)));
  const angle = (safeScore / 100) * 180;

  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="relative h-40 w-72 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-36 rounded-t-full border-[18px] border-slate-800 border-b-0" />
        <div
          className="absolute left-1/2 bottom-0 h-1.5 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          style={{ width: '7rem', transform: `rotate(${angle - 180}deg)` }}
        />
        <div className="absolute inset-x-0 bottom-8 text-center">
          <div className="text-5xl font-black text-white">{safeScore}</div>
          <div className="text-sm text-slate-300">Complexity Score</div>
        </div>
      </div>
    </div>
  );
}

export default ScoreGauge;
