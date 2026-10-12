import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { mockThreats } from '../../data/threats';
import { SeverityBadge } from '../common/SeverityBadge';
import { ConfidenceBar } from '../common/ConfidenceBar';
import { StatusBadge } from '../common/StatusBadge';
import { ShieldAlert, ArrowRight, ExternalLink } from 'lucide-react';

export const RecentThreatsTable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="enterprise-card overflow-hidden">
      {/* Header */}
      <div className="p-5 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded bg-rose-50 text-rose-600">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Recent Threats</h3>
            <p className="text-2xs text-slate-500">Live intelligence telemetry stream from monitored vectors</p>
          </div>
        </div>

        <Link
          to="/threat-intelligence"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="enterprise-table-th">Threat</th>
              <th className="enterprise-table-th">Category</th>
              <th className="enterprise-table-th">Organization</th>
              <th className="enterprise-table-th">Source</th>
              <th className="enterprise-table-th">Severity</th>
              <th className="enterprise-table-th">Confidence</th>
              <th className="enterprise-table-th">Detected</th>
              <th className="enterprise-table-th">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockThreats.slice(0, 5).map((threat) => (
              <tr
                key={threat.id}
                onClick={() => navigate(`/threat-intelligence/${threat.id}`)}
                className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
              >
                {/* Threat Title & ID */}
                <td className="enterprise-table-td">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-2xs font-semibold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded border border-brand-100">
                      {threat.id}
                    </span>
                    <span className="font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                      {threat.title}
                    </span>
                  </div>
                </td>

                {/* Category */}
                <td className="enterprise-table-td">
                  <span className="text-slate-600 font-medium">{threat.category}</span>
                </td>

                {/* Organization */}
                <td className="enterprise-table-td">
                  <span className="font-medium text-slate-800">{threat.organization}</span>
                </td>

                {/* Source */}
                <td className="enterprise-table-td">
                  <span className="text-2xs text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
                    {threat.source}
                  </span>
                </td>

                {/* Severity */}
                <td className="enterprise-table-td">
                  <SeverityBadge severity={threat.severity} size="sm" />
                </td>

                {/* Confidence */}
                <td className="enterprise-table-td">
                  <ConfidenceBar confidence={threat.confidence} />
                </td>

                {/* Detected */}
                <td className="enterprise-table-td whitespace-nowrap text-slate-500 text-2xs">
                  {threat.detectedAt}
                </td>

                {/* Status */}
                <td className="enterprise-table-td">
                  <StatusBadge status={threat.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-3 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between text-2xs text-slate-500">
        <span>Showing 5 most recent threats out of 1,284 total</span>
        <button
          type="button"
          onClick={() => navigate('/threat-intelligence')}
          className="text-brand-600 font-medium hover:underline flex items-center gap-1"
        >
          Explore full threat intelligence table <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
