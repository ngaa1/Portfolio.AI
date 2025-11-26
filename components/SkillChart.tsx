
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SkillData } from '../types';

interface SkillChartProps {
  data: SkillData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 p-3 rounded shadow-lg">
        <p className="text-brand-800 font-bold text-sm">{payload[0].payload.subject}</p>
        <p className="text-slate-600 text-xs">Proficiency: <span className="font-mono font-bold">{payload[0].value}%</span></p>
      </div>
    );
  }
  return null;
};

const SkillChart: React.FC<SkillChartProps> = ({ data }) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#475569', fontSize: 12, fontWeight: 500 }} 
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#1d4ed8"
            strokeWidth={3}
            fill="#3b82f6"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;
