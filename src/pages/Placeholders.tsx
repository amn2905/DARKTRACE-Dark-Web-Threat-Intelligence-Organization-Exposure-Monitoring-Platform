import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, FileText, Database, Bug, Network, BarChart3, Bell, Users, Building2, Crosshair, Settings, Radio, HelpCircle } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  phaseNumber: number;
}

export const PagePlaceholder: React.FC<PlaceholderProps> = ({ title, subtitle, icon: Icon, phaseNumber }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-50 text-brand-600 rounded-lg">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h1>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
        </div>

        <span className="text-2xs font-mono font-medium text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">
          Scheduled for Phase {phaseNumber}
        </span>
      </div>

      <div className="enterprise-card p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
          <Icon className="w-6 h-6 text-slate-500" />
        </div>
        <h3 className="text-sm font-semibold text-slate-800 mb-1">{title} Module Active</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
          Application shell and routing are validated. This view will be expanded in the upcoming implementation phase according to the project specifications.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-md transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Return to Overview Dashboard
        </Link>
      </div>
    </div>
  );
};

export const ThreatIntelligencePage = () => (
  <PagePlaceholder
    title="Threat Intelligence"
    subtitle="Investigate and correlate collected threat intelligence."
    icon={ShieldAlert}
    phaseNumber={6}
  />
);

export const ThreatDetailPage = () => {
  const { id } = useParams();
  return (
    <PagePlaceholder
      title={`Threat Detail: ${id || 'THR-8902'}`}
      subtitle="Threat investigation workspace, risk assessment, and intelligence correlation."
      icon={ShieldAlert}
      phaseNumber={6}
    />
  );
};

export const OrganizationsPage = () => (
  <PagePlaceholder
    title="Monitored Organizations"
    subtitle="Manage enterprise organizational perimeters and exposure scores."
    icon={Building2}
    phaseNumber={7}
  />
);

export const OrganizationDetailPage = () => {
  const { id } = useParams();
  return (
    <PagePlaceholder
      title={`Organization Profile: ${id || 'ExampleBank'}`}
      subtitle="Overall exposure risk, credential leak telemetry, and targeted threat actors."
      icon={Building2}
      phaseNumber={7}
    />
  );
};

export const ThreatActorsPage = () => (
  <PagePlaceholder
    title="Threat Actors"
    subtitle="Profiles, threat group aliases, targeted sectors, and attack campaigns."
    icon={Users}
    phaseNumber={8}
  />
);

export const ThreatActorDetailPage = () => {
  const { id } = useParams();
  return (
    <PagePlaceholder
      title={`Actor Intelligence: ${id || 'act-1'}`}
      subtitle="Actor overview, TTP timeline, confidence assessment, and related IOCs."
      icon={Users}
      phaseNumber={8}
    />
  );
};

export const IOCIntelligencePage = () => (
  <PagePlaceholder
    title="IOC Intelligence"
    subtitle="Synthetic indicator repository (Domains, IPs, URLs, Hashes, and Emails)."
    icon={Crosshair}
    phaseNumber={9}
  />
);

export const ExploitIntelligencePage = () => (
  <PagePlaceholder
    title="Exploit Intelligence"
    subtitle="CVE tracker, vulnerability discussion chatter, and impacted technologies."
    icon={Bug}
    phaseNumber={10}
  />
);

export const AlertsPage = () => (
  <PagePlaceholder
    title="Security Alerts"
    subtitle="Prioritized alert queue and triage workflow with simulated state actions."
    icon={Bell}
    phaseNumber={11}
  />
);

export const ThreatGraphPage = () => (
  <PagePlaceholder
    title="Threat Relationship Graph"
    subtitle="Interactive multi-node entity correlation between actors, threats, orgs, and IOCs."
    icon={Network}
    phaseNumber={12}
  />
);

export const AnalyticsPage = () => (
  <PagePlaceholder
    title="Analytics & Telemetry"
    subtitle="Comprehensive trend visualization, category metrics, and growth indicators."
    icon={BarChart3}
    phaseNumber={13}
  />
);

export const ReportsPage = () => (
  <PagePlaceholder
    title="Intelligence Reports"
    subtitle="Executive threat briefings, org exposure audits, and scheduled exports."
    icon={FileText}
    phaseNumber={14}
  />
);

export const SourcesPage = () => (
  <PagePlaceholder
    title="Intelligence Sources"
    subtitle="Telemetry feed registry, collection health, and reliability metrics."
    icon={Database}
    phaseNumber={15}
  />
);

export const MonitoringPage = () => (
  <PagePlaceholder
    title="Live Monitoring"
    subtitle="Real-time telemetry sensor ingestion feed and event stream."
    icon={Radio}
    phaseNumber={15}
  />
);

export const SettingsPage = () => (
  <PagePlaceholder
    title="Settings & Preferences"
    subtitle="Analyst profiles, notification thresholds, and dark web monitoring rules."
    icon={Settings}
    phaseNumber={15}
  />
);

export const HelpPage = () => (
  <PagePlaceholder
    title="Help & Documentation"
    subtitle="Platform user guides, MITRE ATT&CK mapping, and API specifications."
    icon={HelpCircle}
    phaseNumber={15}
  />
);
