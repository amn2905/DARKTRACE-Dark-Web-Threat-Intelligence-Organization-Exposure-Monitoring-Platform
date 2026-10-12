import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { mockThreatSeverityDistribution } from '../../data/analytics';
import { PieChart as PieIcon } from 'lucide-react';

export const ThreatSeverityDonut: React.FC = () => {
  const total = mockThreatSeverityDistribution.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="enterprise-card p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-amber-50 text-amber-600">
            <PieIcon className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900">Threat Severity</h3>
        </div>
        <span className="text-2xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
          {total} Active
        </span>
      </div>

      <div className="relative h-48 my-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mockThreatSeverityDistribution}
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={74}
              paddingAngle={2}
              dataKey="count"
            >
              {mockThreatSeverityDistribution.map((entry) => (
                <Cell key={`cell-${entry.name}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.375rem',
                fontSize: '11px',
              }}
              formatter={(value, name) => [`${value} threats`, name]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xs uppercase tracking-wider text-slate-400 font-semibold">Total</span>
          <span className="text-lg font-bold font-mono text-slate-900">{total}</span>
        </div>
      </div>

      {/* Structured Legend with counts & percentages */}
      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
        {mockThreatSeverityDistribution.map((item) => (
          <div key={item.name} className="flex items-center justify-between py-0.5">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-700 font-medium">{item.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-slate-900 font-semibold">{item.count}</span>
              <span className="font-mono text-2xs text-slate-400 w-10 text-right">
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
