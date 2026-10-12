import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { SearchCommand } from '../common/SearchCommand';
import { ShieldCheck, Info } from 'lucide-react';

export const AppLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans text-slate-800">
      {/* Collapsible Left Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Column */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Sticky Top Navbar */}
        <TopNavbar onOpenSearch={() => setSearchOpen(true)} />

        {/* Dynamic Content Viewport */}
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <Outlet />
          </div>

          {/* Enterprise Demo Environment Disclaimer Footer */}
          <footer className="mt-12 py-4 border-t border-slate-200/80 text-center text-xs text-slate-500">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-2xs border border-slate-200">
                <ShieldCheck className="w-3 h-3 text-brand-600" />
                DEMO ENVIRONMENT
              </span>
              <span>
                All intelligence shown is synthetic and intended for research and defensive UI demonstration.
              </span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <Info className="w-3 h-3" />
                No active dark-web scraping or real credential exposure.
              </span>
            </div>
          </footer>
        </main>
      </div>

      {/* Global Command Search (Ctrl + K) */}
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};
