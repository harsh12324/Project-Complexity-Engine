import SectionCard from '../common/SectionCard';
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function BreakdownChart({ data }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value
  }));

  return (
    <SectionCard title="Category Contribution" subtitle="See where the complexity score is coming from.">
      <div className="h-80 w-full">
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis dataKey="name" stroke="#cbd5e1" tickLine={false} axisLine={false} />
            <YAxis stroke="#cbd5e1" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16 }} />
            <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="url(#barGradient)" />
            <defs>
              <linearGradient id="barGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

export default BreakdownChart;
