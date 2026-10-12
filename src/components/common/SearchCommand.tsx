import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  ShieldAlert, 
  Building2, 
  Crosshair, 
  Bell, 
  ArrowRight,
  Command
} from 'lucide-react';
import { mockThreats } from '../../data/threats';
import { mockOrganizations } from '../../data/organizations';
import { mockIOCs } from '../../data/iocs';
import { mockAlerts } from '../../data/alerts';

interface SearchCommandProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchCommand: React.FC<SearchCommandProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // triggered by caller toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const filteredThreats = mockThreats.filter(t => 
    !normalized || 
    t.title.toLowerCase().includes(normalized) || 
    t.category.toLowerCase().includes(normalized) ||
    t.organization.toLowerCase().includes(normalized) ||
    t.id.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const filteredOrgs = mockOrganizations.filter(o =>
    !normalized ||
    o.name.toLowerCase().includes(normalized) ||
    o.domain.toLowerCase().includes(normalized) ||
    o.industry.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const filteredIOCs = mockIOCs.filter(i =>
    !normalized ||
    i.value.toLowerCase().includes(normalized) ||
    i.type.toLowerCase().includes(normalized) ||
    i.organization.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const filteredAlerts = mockAlerts.filter(a =>
    !normalized ||
    a.title.toLowerCase().includes(normalized) ||
    a.organization.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const totalResults = filteredThreats.length + filteredOrgs.length + filteredIOCs.length + filteredAlerts.length;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-panel border border-slate-200 overflow-hidden z-10 animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-label="Global Search Command Palette"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-slate-200 bg-white">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="w-full py-3.5 text-sm bg-transparent border-0 outline-none text-slate-800 placeholder-slate-400 focus:ring-0 font-sans"
            placeholder="Search threats, IOCs, organizations... (e.g. 'credential')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button 
              type="button" 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-2xs font-mono font-medium text-slate-400 bg-slate-100 rounded border border-slate-200 ml-2">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {totalResults === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching by category (credential, ransomware), organization name, or IOC type.</p>
            </div>
          ) : (
            <>
              {/* Category: Threats */}
              {filteredThreats.length > 0 && (
                <div>
                  <div className="px-2 pb-1.5 text-2xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-brand-600" />
                    Threats
                  </div>
                  <div className="space-y-1">
                    {filteredThreats.map((threat) => (
                      <div
                        key={threat.id}
                        onClick={() => handleSelect(`/threat-intelligence/${threat.id}`)}
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono text-2xs font-semibold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">
                            {threat.id}
                          </span>
                          <span className="text-xs font-medium text-slate-800 truncate">
                            {threat.title}
                          </span>
                          <span className="text-2xs text-slate-400 truncate">
                            &bull; {threat.organization}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-2xs text-slate-400">{threat.category}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category: Organizations */}
              {filteredOrgs.length > 0 && (
                <div>
                  <div className="px-2 pb-1.5 text-2xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                    Organizations
                  </div>
                  <div className="space-y-1">
                    {filteredOrgs.map((org) => (
                      <div
                        key={org.id}
                        onClick={() => handleSelect(`/organizations/${org.id}`)}
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-xs font-semibold text-slate-800">
                            {org.name}
                          </span>
                          <span className="text-2xs font-mono text-slate-400">
                            {org.domain}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-2xs font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                            Risk {org.riskScore}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category: IOCs */}
              {filteredIOCs.length > 0 && (
                <div>
                  <div className="px-2 pb-1.5 text-2xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Crosshair className="w-3.5 h-3.5 text-emerald-600" />
                    IOCs (Indicators of Compromise)
                  </div>
                  <div className="space-y-1">
                    {filteredIOCs.map((ioc) => (
                      <div
                        key={ioc.id}
                        onClick={() => handleSelect('/iocs')}
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-2xs font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                            {ioc.type}
                          </span>
                          <span className="text-xs font-mono text-slate-800 truncate">
                            {ioc.value}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-2xs text-slate-400">{ioc.organization}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category: Alerts */}
              {filteredAlerts.length > 0 && (
                <div>
                  <div className="px-2 pb-1.5 text-2xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-rose-600" />
                    Security Alerts
                  </div>
                  <div className="space-y-1">
                    {filteredAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        onClick={() => handleSelect('/alerts')}
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-xs font-medium text-slate-800 truncate">
                            {alert.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-2xs text-slate-500">{alert.organization}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-2xs text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="font-mono bg-white px-1 py-0.5 border rounded">↑</kbd> <kbd className="font-mono bg-white px-1 py-0.5 border rounded">↓</kbd> to navigate</span>
            <span><kbd className="font-mono bg-white px-1 py-0.5 border rounded">Enter</kbd> to select</span>
            <span><kbd className="font-mono bg-white px-1 py-0.5 border rounded">Esc</kbd> to close</span>
          </div>
          <span className="flex items-center gap-1 font-mono">
            <Command className="w-3 h-3" /> DARKTRACE Global Index
          </span>
        </div>
      </div>
    </div>
  );
};
