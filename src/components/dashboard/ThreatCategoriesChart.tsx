import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { mockThreatCategoriesDistribution } from '../../data/analytics';
import { Layers } from 'lucide-react';

export const ThreatCategoriesChart: React.FC = () => {
  const sortedData = [...mockThreatCategoriesDistribution].sort((a, b) => b.count - a.count);

  return (
    <div className="enterprise-card p-5">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-indigo-50 text-indigo-600">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Threat Categories</h3>
            <p className="text-2xs text-slate-500">Distribution by classified intelligence type</p>
          </div>
        </div>
        <span className="text-2xs text-slate-400 font-medium">Top 8 Vectors</span>
      </div>

      <div className="mt-3 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
          >
            <XAxis type="number" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <YAxis
              type="category"
              dataKey="category"
              tick={{ fontSize: 11, fill: '#334155' }}
              axisLine={false}
              tickLine={false}
              width={120}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.375rem',
                fontSize: '11px',
              }}
              formatter={(value) => [`${value} incidents`, 'Count']}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {sortedData.map((entry, index) => {
                const colors = [
                  '#0369a1', // Credential Exposure
                  '#0284c7', // Data Leak
                  '#dc2626', // Ransomware
                  '#ea580c', // Exploit
                  '#ca8a04', // Malware
                  '#475569', // Phishing
                  '#64748b', // Fraud
                  '#94a3b8', // Organization Mention
                ];
                return <Cell key={`bar-${entry.category}`} fill={colors[index % colors.length]} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
