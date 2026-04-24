import AnimatedButton from './AnimatedButton';

const headingMap = {
  input: 'Configure your project inputs',
  dashboard: 'Review the analysis results',
  compare: 'Compare two project scenarios',
  action: 'Act on the generated plan',
  history: 'Review past analyses'
};

function Topbar({ onAnalyze, loading, result, activeTab }) {
  return (
    <header className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-cyan-300">Expert System Workspace</p>
          <h2 className="text-2xl font-bold text-white">{headingMap[activeTab] || headingMap.input}</h2>
          <p className="mt-1 text-sm text-slate-300">
            {result
              ? `Latest score: ${result.score}/100 · Difficulty: ${result.difficulty} · Mode: ${result.analysisMode}`
              : 'Run the analyzer after entering project details.'}
          </p>
        </div>
        <AnimatedButton onClick={onAnalyze} disabled={loading} className="disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? 'Analyzing...' : 'Analyze Main Project'}
        </AnimatedButton>
      </div>
    </header>
  );
}

export default Topbar;
