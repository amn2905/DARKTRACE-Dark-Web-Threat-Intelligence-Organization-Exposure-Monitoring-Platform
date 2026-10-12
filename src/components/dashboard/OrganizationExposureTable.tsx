import React from 'react';
import { Link } from 'react-router-dom';
import { mockOrganizations } from '../../data/organizations';
import { Building2, ArrowUpRight, ArrowDownRight, Minus, ArrowRight } from 'lucide-react';

export const OrganizationExposureTable: React.FC = () => {
  return (
    <div className="enterprise-card p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-emerald-50 text-emerald-600">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Organization Exposure</h3>
              <p className="text-2xs text-slate-500">Monitored corporate exposure rankings</p>
            </div>
          </div>
          <Link
            to="/organizations"
            className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1"
          >
            All Orgs <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-2xs uppercase tracking-wider text-slate-400 font-semibold">
                <th className="pb-2">Organization</th>
                <th className="pb-2 text-right">Mentions</th>
                <th className="pb-2 text-center">Risk</th>
                <th className="pb-2 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockOrganizations.slice(0, 4).map((org) => {
                const getRiskBadge = (level: string) => {
                  switch (level) {
                    case 'Critical':
                      return 'bg-red-50 text-red-700 border-red-200';
                    case 'High':
                      return 'bg-orange-50 text-orange-700 border-orange-200';
                    case 'Medium':
                      return 'bg-amber-50 text-amber-700 border-amber-200';
                    default:
                      return 'bg-slate-100 text-slate-600 border-slate-200';
                  }
                };

                return (
                  <tr
                    key={org.id}
                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  >
                    <td className="py-2.5 font-medium text-slate-900">
                      <Link to={`/organizations/${org.id}`} className="hover:text-brand-600 block">
                        <div className="font-semibold text-slate-800">{org.name}</div>
                        <div className="text-2xs font-mono text-slate-400">{org.domain}</div>
                      </Link>
                    </td>

                    <td className="py-2.5 text-right font-mono font-semibold text-slate-700">
                      {org.mentions}
                    </td>

                    <td className="py-2.5 text-center">
                      <span className={`px-2 py-0.5 rounded text-2xs font-semibold border ${getRiskBadge(org.riskLevel)}`}>
                        {org.riskLevel}
                      </span>
                    </td>

                    <td className="py-2.5 text-right">
                      {org.exposureTrend === 'up' && (
                        <span className="inline-flex items-center text-rose-600 font-bold" title="Trending Up">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      )}
                      {org.exposureTrend === 'down' && (
                        <span className="inline-flex items-center text-emerald-600 font-bold" title="Trending Down">
                          <ArrowDownRight className="w-4 h-4" />
                        </span>
                      )}
                      {org.exposureTrend === 'stable' && (
                        <span className="inline-flex items-center text-slate-400 font-bold" title="Stable">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 text-2xs text-slate-400 flex items-center justify-between">
        <span>6 Organizations configured</span>
        <span className="text-brand-600 font-medium cursor-pointer hover:underline">
          Manage scope
        </span>
      </div>
    </div>
  );
};
