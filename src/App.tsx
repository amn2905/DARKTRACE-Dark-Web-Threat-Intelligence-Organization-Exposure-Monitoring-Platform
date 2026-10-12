import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import {
  ThreatIntelligencePage,
  ThreatDetailPage,
  OrganizationsPage,
  OrganizationDetailPage,
  ThreatActorsPage,
  ThreatActorDetailPage,
  IOCIntelligencePage,
  ExploitIntelligencePage,
  AlertsPage,
  ThreatGraphPage,
  AnalyticsPage,
  ReportsPage,
  SourcesPage,
  MonitoringPage,
  SettingsPage,
  HelpPage,
} from './pages/Placeholders';

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="threat-intelligence" element={<ThreatIntelligencePage />} />
            <Route path="threat-intelligence/:id" element={<ThreatDetailPage />} />
            <Route path="organizations" element={<OrganizationsPage />} />
            <Route path="organizations/:id" element={<OrganizationDetailPage />} />
            <Route path="threat-actors" element={<ThreatActorsPage />} />
            <Route path="threat-actors/:id" element={<ThreatActorDetailPage />} />
            <Route path="iocs" element={<IOCIntelligencePage />} />
            <Route path="exploits" element={<ExploitIntelligencePage />} />
            <Route path="alerts" element={<AlertsPage />} />
            <Route path="threat-graph" element={<ThreatGraphPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="sources" element={<SourcesPage />} />
            <Route path="monitoring" element={<MonitoringPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
