import SectionCard from '../common/SectionCard';

function HistoryList({ items, onLoad, onClear }) {
  return (
    <SectionCard
      title="Saved Analysis History"
      subtitle="Recent analyses saved in your browser."
      action={
        items.length ? (
          <button
            type="button"
            onClick={onClear}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Clear History
          </button>
        ) : null
      }
    >
      <div className="grid gap-3">
        {items.length ? items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onLoad(item)}
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-left transition hover:border-violet-400/30 hover:bg-violet-500/10"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-semibold text-white">{item.formData.projectName || 'Untitled Project'}</p>
                <p className="mt-1 text-sm text-slate-300">{item.result.difficulty} · {item.result.analysisMode} · {item.result.score}/100</p>
              </div>
              <div className="text-sm text-slate-400">{new Date(item.createdAt).toLocaleString()}</div>
            </div>
          </button>
        )) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            No saved analyses yet. Run the analyzer to populate history.
          </div>
        )}
      </div>
    </SectionCard>
  );
}

export default HistoryList;
