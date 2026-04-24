import { BarChart3, ClipboardList, GitCompareArrows, History, Sparkles } from 'lucide-react';
import { classNames } from '../../utils/helpers';

const tabs = [
  { key: 'input', label: 'Input Lab', icon: ClipboardList },
  { key: 'dashboard', label: 'Analysis Dashboard', icon: BarChart3 },
  { key: 'compare', label: 'Compare Projects', icon: GitCompareArrows },
  { key: 'action', label: 'Action Plan', icon: Sparkles },
  { key: 'history', label: 'History', icon: History }
];

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur lg:w-72">
      <div className="mb-6 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-4">
        <h1 className="mt-2 text-2xl font-bold text-white">Project Complexity Intelligence Engine</h1>
        <p className="mt-2 text-sm text-slate-300">Expert-system analysis for planning, scope, and execution risk.</p>
      </div>

      <nav className="space-y-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const selected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={classNames(
                'flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                selected
                  ? 'border-violet-400/40 bg-violet-500/15 text-white'
                  : 'border-white/5 bg-white/0 text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white'
              )}
            >
              <span className="rounded-xl bg-white/5 p-2">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
