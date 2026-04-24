import { useEffect, useRef, useState } from 'react';
import Sidebar from './components/common/Sidebar';
import Topbar from './components/common/Topbar';
import AnimatedButton from './components/common/AnimatedButton';
import InputLab from './pages/InputLab';
import AnalysisDashboard from './pages/AnalysisDashboard';
import ActionPlan from './pages/ActionPlan';
import SectionCard from './components/common/SectionCard';
import CompareProjects from './pages/CompareProjects';
import HistoryPage from './pages/HistoryPage';
import { defaultFormData } from './utils/defaultFormData';
import { updateField } from './utils/helpers';
import { analyzeProject, fetchTemplates } from './services/api';

const HISTORY_KEY = 'pcie-analysis-history-v2';

function cloneTemplateValues(values) {
  return JSON.parse(JSON.stringify(values));
}

function App() {
  const [activeTab, setActiveTab] = useState('input');
  const [formData, setFormData] = useState(defaultFormData);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);

  const [compareFormA, setCompareFormA] = useState({ ...defaultFormData, projectName: 'Project A' });
  const [compareFormB, setCompareFormB] = useState({ ...defaultFormData, projectName: 'Project B', analysisMode: 'MVP', domain: 'AI Project', hasAI: true, hasRealtime: true, dataComplexity: 'High' });
  const compareResultARef = useRef(null);
  const compareResultBRef = useRef(null);
  const [compareResultA, setCompareResultA] = useState(null);
  const [compareResultB, setCompareResultB] = useState(null);

  useEffect(() => {
    fetchTemplates()
      .then((data) => setTemplates(data))
      .catch(() => setTemplates([]));

    try {
      const saved = window.localStorage.getItem(HISTORY_KEY);
      if (saved) {
        setHistoryItems(JSON.parse(saved));
      }
    } catch {
      setHistoryItems([]);
    }
  }, []);

  const persistHistory = (nextItems) => {
    setHistoryItems(nextItems);
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(nextItems));
  };

  const setField = (key, value) => updateField(setFormData, key, value);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const response = await analyzeProject(formData);
      setResult(response);
      setActiveTab('dashboard');

      const entry = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        createdAt: new Date().toISOString(),
        formData,
        result: response
      };
      persistHistory([entry, ...historyItems].slice(0, 12));
    } catch (error) {
      console.error(error);
      alert('Analysis failed. Make sure the backend server is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadTemplate = (template) => {
    setFormData(cloneTemplateValues(template.values));
    setResult(null);
    setActiveTab('input');
  };

  const handleLoadHistory = (entry) => {
    setFormData(entry.formData);
    setResult(entry.result);
    setActiveTab('dashboard');
  };

  const clearHistory = () => {
    persistHistory([]);
  };

  const compareResultAModel = { current: compareResultARef.current, value: compareResultA, setValue: (value) => { compareResultARef.current = value; setCompareResultA(value); } };
  const compareResultBModel = { current: compareResultBRef.current, value: compareResultB, setValue: (value) => { compareResultBRef.current = value; setCompareResultB(value); } };

  return (
    <div className="min-h-screen p-4 lg:p-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <main>
            <Topbar result={result} activeTab={activeTab} />

            <div className="mb-5">
              <SectionCard
                title="Starter Templates"
                subtitle="Use a ready-made project profile to quickly test your analysis flow."
                action={
                  <AnimatedButton onClick={() => { setFormData(defaultFormData); setResult(null); setActiveTab('input'); }}>
                    Reset Form
                  </AnimatedButton>
                }
              >
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      type="button"
                      onClick={() => handleLoadTemplate(template)}
                      className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-left transition hover:border-violet-400/40 hover:bg-violet-500/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-base font-semibold text-white">{template.name}</p>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">{template.values.analysisMode}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{template.values.description}</p>
                    </button>
                  ))}
                </div>
              </SectionCard>
            </div>

            {activeTab === 'input' && ( <InputLab formData={formData} setField={setField} onAnalyze={handleAnalyze} loading={loading} /> )}
            {activeTab === 'dashboard' && <AnalysisDashboard result={result} formData={formData} />}
            {activeTab === 'compare' && (
              <CompareProjects
                formA={compareFormA}
                setFormA={setCompareFormA}
                formB={compareFormB}
                setFormB={setCompareFormB}
                resultA={compareResultAModel}
                resultB={compareResultBModel}
                onLoadTemplateA={(template) => setCompareFormA(cloneTemplateValues(template.values))}
                onLoadTemplateB={(template) => setCompareFormB(cloneTemplateValues(template.values))}
                templates={templates}
              />
            )}
            {activeTab === 'action' && <ActionPlan result={result} formData={formData} />}
            {activeTab === 'history' && <HistoryPage historyItems={historyItems} onLoadHistory={handleLoadHistory} onClearHistory={clearHistory} />}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
