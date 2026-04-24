import { useState } from 'react';
import SectionCard from '../common/SectionCard';
import AnimatedButton from '../common/AnimatedButton';
import { askAssistant } from '../../services/api';

const starterQuestions = [
  'Why is my score high?',
  'How can I reduce complexity?',
  'What team do I need?',
  'What should stay in the MVP?'
];

function AssistantPanel({ formData }) {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const sendQuestion = async (value) => {
    const prompt = value || question;
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      const answer = await askAssistant(prompt, formData);
      setMessages((prev) => [...prev, { role: 'user', content: prompt }, { role: 'assistant', content: answer }]);
      setQuestion('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionCard title="AI Copilot" subtitle="Ask for a plain-language explanation of complexity, timeline, and MVP choices.">
      <div className="flex flex-wrap gap-2">
        {starterQuestions.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => sendQuestion(item)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4">
        {messages.length ? messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm ${message.role === 'assistant' ? 'bg-cyan-500/10 text-cyan-50' : 'ml-auto bg-violet-500/15 text-white'}`}
          >
            {message.content}
          </div>
        )) : <p className="text-sm text-slate-400">Start with one of the quick questions above or type your own.</p>}
      </div>

      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something about your project analysis"
          className="flex-1 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400/40"
        />
        <AnimatedButton onClick={() => sendQuestion()} disabled={loading} className="disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? 'Thinking...' : 'Ask Copilot'}
        </AnimatedButton>
      </div>
    </SectionCard>
  );
}

export default AssistantPanel;
