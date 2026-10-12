# Feature Specification & Functional Capabilities
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Executive Summary of Features

DARKTRACE implements an interactive cyber threat intelligence dashboard and investigative interface designed to reduce the time required for security analysts to detect, understand, and triage external organizational exposure.

---

## 2. Core Implemented Features (Phase 1–5 Base)

### 2.1 Executive Overview Dashboard (`/dashboard`)
The primary operational cockpit provides high-level metrics, analytical charts, exposure rankings, and recent incidents:
- **Six Primary KPI Stat Cards:**
  - *Active Threats:* 1,284 total active detections (+12.4% over previous period).
  - *Organization Mentions:* 327 recorded mentions (+8.7% over previous period).
  - *Exposed Credentials:* 84 discovered corporate credential dumps (+5.2% over previous period).
  - *High-Risk Intelligence:* 46 critical incidents (+14.1% over previous period).
  - *Threat Actors:* 73 monitored adversary groups (+3.8% over previous period).
  - *IOCs Identified:* 2,846 technical indicators (+18.6% discovery velocity).
- **Time-Filtered Threat Activity Visualizer:**
  - Responsive AreaChart powered by Recharts with dual data series (Total Threats vs. Critical Severity).
  - Dynamic timeframe filters for `24H`, `7D`, `30D`, and `90D`.
- **Threat Severity Donut Breakdown:**
  - Donut chart displaying proportions across 5 severity tiers (Critical: 12.6%, High: 35.2%, Medium: 35.8%, Low: 12.9%, Informational: 3.5%).
  - Integrated center count displaying total active threats (1,284).
- **Threat Vector Ranking:**
  - Ranked vertical bar chart categorizing incidents across 8 core threat vectors (Credential Exposure, Data Leaks, Ransomware, Exploits, Malware, Phishing, Fraud, and Organization Mentions).
- **Organization Exposure Table:**
  - Renders top monitored corporate perimeters (*ExampleBank*, *TechNova*, *FinSecure*, *CloudMatrix*).
  - Tracks raw dark-web mention counts, risk badges, and directional exposure trend arrows (`up`, `down`, `stable`).
- **Recent Ingested Threats Stream:**
  - Table displaying the latest 5 threat telemetry items with threat IDs, categories, target organizations, telemetry sources, severity badges, confidence progress bars, relative detection times, and lifecycle statuses.
  - Row click triggers navigation to individual threat detail workspaces.
- **Prioritized Recent Alerts Panel:**
  - Displays urgent security alerts with severity classifications, timestamps, summaries, and a direct button to the alert triage queue.
- **Telemetry Synchronization Action:**
  - "Refresh Intelligence" header button that simulates live feed synchronization, triggers spinning icon animations, and displays an animated toast notification.

### 2.2 Global Command Palette (`Ctrl + K`)
- Integrated multi-entity instant search modal.
- Invoked globally via keyboard shortcut (`Ctrl+K` or `Cmd+K`) or via the top navigation search bar.
- Filters across four distinct intelligence registries simultaneously:
  - Ingested Threats (matching title, category, target organization, or threat ID)
  - Monitored Organizations (matching name, domain, or industry sector)
  - Indicators of Compromise (matching indicator value, indicator type, or organization)
  - Security Alerts (matching alert title or target organization)
- Fully accessible with keyboard navigation (`Escape` closes modal, selection triggers immediate navigation).

### 2.3 Modular Design System & Atomic UI Library
- **`SeverityBadge`:** Dynamic color-coded pill badge with specialized iconography for 5 severity levels.
- **`ConfidenceBar`:** Visual 0–100% confidence level indicator with tiered threshold colors.
- **`StatusBadge`:** Threat lifecycle indicator with animated pulsing status indicators.
- **`StatCard`:** KPI display card supporting cybersecurity-specific positive/negative color semantic mapping.
- **`ToastContext`:** System-wide feedback provider dispatching temporary banner notifications.

---

## 3. Phase 6–15 Feature Modules (Planned Implementations)

The application defines complete route configurations and placeholder views (`src/pages/Placeholders.tsx`) for the following upcoming modules:

| Module Name | Route | Scheduled Phase | Description |
|---|---|---|---|
| **Threat Intelligence** | `/threat-intelligence` | Phase 6 | Complete filterable table of all 1,284 ingested threats with export tools. |
| **Threat Detail** | `/threat-intelligence/:id` | Phase 6 | Deep forensic workspace with raw evidence snippets and correlation trees. |
| **Monitored Organizations** | `/organizations` | Phase 7 | Management interface for corporate perimeters, domains, and keywords. |
| **Organization Profile** | `/organizations/:id` | Phase 7 | Deep exposure view showing credential leak tallies and targeting actors. |
| **Threat Actors** | `/threat-actors` | Phase 8 | Threat actor directory detailing motivations, sophistication, and origins. |
| **Threat Actor Detail** | `/threat-actors/:id` | Phase 8 | Comprehensive actor dossier with TTP timelines and targeted sectors. |
| **IOC Intelligence** | `/iocs` | Phase 9 | Searchable indicator repository supporting IP, Hash, URL, and Domain queries. |
| **Exploit Intelligence** | `/exploits` | Phase 10 | Vulnerability tracker detailing CVEs, underground chatter, and patch status. |
| **Security Alerts** | `/alerts` | Phase 11 | SOC alert triage interface supporting status transitions and containment steps. |
| **Threat Relationship Graph**| `/threat-graph` | Phase 12 | Interactive multi-node entity correlation graph. |
| **Analytics & Telemetry** | `/analytics` | Phase 13 | Comprehensive trend visualization, category metrics, and growth indicators. |
| **Intelligence Reports** | `/reports` | Phase 14 | Automated report generation engine for executive briefings and audits. |
| **Intelligence Sources** | `/sources` | Phase 15 | Registry of ingested feeds, reliability scores, and uptime metrics. |
| **Live Monitoring** | `/monitoring` | Phase 15 | Real-time streaming sensor feed for incoming dark-web chatter. |
| **Settings & Preferences**| `/settings` | Phase 15 | Analyst profile settings, alert thresholds, and monitoring rules. |
| **Help & Documentation** | `/help` | Phase 15 | In-app user manuals and MITRE ATT&CK matrix references. |
