import SectionCard from '../common/SectionCard';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

function RadarChartBox({ data }) {
  return (
    <SectionCard title="Complexity Radar" subtitle="A visual distribution of the current project pressure.">
      <div className="h-80 w-full">
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.12)" />
            <PolarAngleAxis dataKey="name" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
            <Radar dataKey="value" stroke="#22d3ee" fill="#8b5cf6" fillOpacity={0.45} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

export default RadarChartBox;
