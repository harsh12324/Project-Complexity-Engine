import SectionCard from '../common/SectionCard';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function TimelineChart({ data }) {
  return (
    <SectionCard title="Timeline Comparison" subtitle="How your available timeline compares to expert-system estimates.">
      <div className="h-80 w-full">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis dataKey="name" stroke="#cbd5e1" tickLine={false} axisLine={false} />
            <YAxis stroke="#cbd5e1" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16 }} />
            <Bar dataKey="days" radius={[10, 10, 0, 0]} fill="#22d3ee" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

export default TimelineChart;
