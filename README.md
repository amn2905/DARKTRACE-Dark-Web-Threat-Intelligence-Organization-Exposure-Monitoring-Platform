# DARKTRACE
### Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

<div align="center">

![DARKTRACE Banner](https://img.shields.io/badge/DARKTRACE-Threat_Intelligence_Platform-0284c7?style=for-the-badge&logo=shield&logoColor=white)

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3.10.1-22c55e?style=flat-square&logo=chartdotjs&logoColor=white)](https://recharts.org/)
[![Oxlint](https://img.shields.io/badge/Oxlint-Passing-10b981?style=flat-square&logo=oxc&logoColor=white)](https://oxc.rs)
[![Build Status](https://img.shields.io/badge/Build-Passing_(0_Errors)-success?style=flat-square)](https://github.com/)
[![Research License](https://img.shields.io/badge/License-Defensive_Research_Only-0f172a?style=flat-square)](#-ethical--defensive-research-use)

<p align="center">
  <b>An enterprise-grade, defensive cyber threat intelligence (CTI) dashboard designed for Security Operations Centers (SOC) and threat analysts to monitor dark-web discussions, correlate credential exposures, track Indicators of Compromise (IOCs), and evaluate organizational risk posture.</b>
</p>

[System Architecture](#-system-architecture) •
[Key Capabilities](#-key-capabilities) •
[Project Structure](#-project-structure) •
[Technology Stack](#-technology-stack) •
[Installation & Usage](#-installation--quick-start) •
[Documentation Index](#-documentation-index)

</div>

---

## 📌 Executive Summary

Organizations face unprecedented risks originating from underground hacker forums, illicit paste repositories, ransomware leak portals, and decentralized dark-web communication channels. Adversaries frequently discuss corporate vulnerabilities, trade compromised employee credentials, and stage spearphishing campaigns weeks before executing an intrusion. Traditional perimeter defenses (firewalls, internal IDS/IPS) fail to detect these external pre-attack signals.

**DARKTRACE** bridges this visibility gap by serving as a unified **Threat Intelligence & Organization Exposure Monitoring Platform**. It aggregates external threat telemetry, performs multi-variable relevance correlation against monitored corporate perimeters, extracts actionable Indicators of Compromise (IOCs), and delivers prioritized operational intelligence through an intuitive single-pane-of-glass dashboard.

> [!NOTE]
> **Implementation Scope:**
> This repository contains the Phase 1–5 production-grade client-side application built on **React 19**, **TypeScript 6**, and **Vite 8**. Telemetry streams, threat feeds, and organizational entities represent synthetic, RFC 2606 and RFC 5737 compliant datasets structured for safe academic and defensive security research.

---

## 🏗️ System Architecture

DARKTRACE employs a modular 4-layer client architecture separating interface presentation, analytical visualization, application state, and typed telemetry models:

```
+---------------------------------------------------------------------------------------+
|                                PRESENTATION LAYER (UI)                                |
|  +--------------------+  +-------------------------+  +----------------------------+  |
|  |   AppLayout / Grid |  | Master Dashboard Page   |  | Command Palette (Ctrl + K) |  |
|  +--------------------+  +-------------------------+  +----------------------------+  |
|            |                          |                             |                 |
|            v                          v                             v                 |
|  +---------------------------------------------------------------------------------+  |
|  |                     ATOMIC COMPONENT LIBRARY (src/components)                   |  |
|  |  - StatCard (KPI Visualizer)         - SeverityBadge (Color/Icon Pill)          |  |
|  |  - ConfidenceBar (Dynamic Meter)     - StatusBadge (Pulsing State Indicators)   |  |
|  |  - EmptyState / LoadingState         - ErrorState (Retry Context)               |  |
|  +---------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------+
                                           |
                                           v
+---------------------------------------------------------------------------------------+
|                            VISUALIZATION & ANALYTICS LAYER                            |
|  +-----------------------------+  +-----------------------+  +---------------------+  |
|  | ThreatActivityChart (Area)  |  | ThreatSeverity (Donut)|  | ThreatCategories    |  |
|  +-----------------------------+  +-----------------------+  +---------------------+  |
|  +-----------------------------+  +-----------------------+                           |
|  | OrganizationExposureTable   |  | RecentAlertsPanel     |                           |
|  +-----------------------------+  +-----------------------+                           |
+---------------------------------------------------------------------------------------+
                                           |
                                           v
+---------------------------------------------------------------------------------------+
|                            STATE, ROUTING & DATA SERVICES                             |
|  +-----------------------------+  +-------------------------------------------------+ |
|  | React Router DOM v7 (Routes)|  | ToastContext (Global Event Notification Engine) | |
|  +-----------------------------+  +-------------------------------------------------+ |
|  +----------------------------------------------------------------------------------+ |
|  | Synthetic Telemetry Datasets (src/data/*.ts)                                     | |
|  | - threats.ts       - organizations.ts   - actors.ts       - iocs.ts              | |
|  | - alerts.ts        - analytics.ts       - sources.ts                             | |
|  +----------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------+
                                           |
                                           v
+---------------------------------------------------------------------------------------+
|                            CORE DATA SCHEMAS & TYPES                                  |
|  +----------------------------------------------------------------------------------+ |
|  | TypeScript Strict Interfaces (src/types/index.ts)                                | |
|  | Threat | Organization | ThreatActor | IOC | Exploit | Alert | SourceFeed         | |
|  +----------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------+
```

---

## ⚡ Key Capabilities

### 1. Executive Intelligence Overview (`/dashboard`)
- **6 KPI Metric Cards:** Real-time visibility into Active Threats (1,284), Organization Mentions (327), Exposed Credentials (84), High-Risk Intel (46), Threat Actors (73), and Identified IOCs (2,846) with 7-day trend indicators.
- **Interactive Multi-Period Telemetry:** Recharts AreaChart with dual data curves (Total Detections vs. Critical Incidents) and dynamic timeframe toggling (`24H`, `7D`, `30D`, `90D`).
- **Threat Vector Ranking:** Vertical bar breakdown across 8 cyber intelligence vectors (Credential Exposure, Data Leaks, Ransomware, Exploits, Malware, Phishing, Fraud, Organization Mentions).
- **Severity Donut Breakdown:** Inner/outer radius donut chart with active threat counts and exact percentage allocations.

### 2. Organization Exposure Monitoring
- Continuous perimeter tracking across corporate entities (*ExampleBank*, *TechNova*, *FinSecure*, *CloudMatrix*, *HealthShield*, *ApexLogistics*).
- Real-time tracking of dark-web mention velocity, credential leak counts, and exposure trends (`up`, `down`, `stable`).
- Correlation based on domain matches, brand keywords, employee credential dumps, and monitored infrastructure hostnames.

### 3. Structured Indicator of Compromise (IOC) Tracking
- Full support for 7 standardized indicator formats: `DOMAIN`, `IPv4`, `URL`, `EMAIL`, `SHA256`, `SHA1`, `MD5`.
- Multi-hop relational correlation linking technical indicators directly to originating threats, targeted organizations, and attributed threat actors.

### 4. Adversary & Exploit Intelligence
- Profiling sophisticated cybercriminal groups (*Nebula Spider*, *DarkHydra Syndicate*, *Silent Lynx*, *Axiom Phantom*) tracking motivations, aliases, sophistication levels, and TTPs.
- Vulnerability tracking cross-referencing known CVEs (`CVE-2026-12345`, `CVE-2026-9812`) mentioned in underground exploit discussions.

### 5. Instant Global Command Palette (`Ctrl + K`)
- High-speed keyboard-navigable command palette with live client-side search.
- Queries across four distinct intelligence registries simultaneously (Threats, Organizations, IOCs, and Alerts) with immediate routing.

### 6. Security Alert Prioritization Queue
- Dedicated alert queue highlighting urgent threats with severity badges, detection timestamps, and one-click SOC triage access.

---

## 📁 Project Structure

The repository follows a clean, scalable enterprise directory hierarchy designed for maintainability and modular feature expansion:

```
DARKTRACE/
├── .gitignore                         # Git exclusion rules (node_modules, dist, temp files)
├── .oxlintrc.json                     # Oxlint high-speed static analysis linter rules
├── index.html                         # Application HTML5 entry point and viewport meta
├── package.json                       # Core dependencies, build scripts, project metadata
├── package-lock.json                  # Deterministic dependency lockfile
├── postcss.config.js                  # PostCSS plugins (Tailwind CSS, Autoprefixer)
├── README.md                          # Primary executive documentation (this document)
├── tailwind.config.js                 # Enterprise theme config (color tokens, shadows, fonts)
├── tsconfig.app.json                  # Strict TypeScript configuration for source application
├── tsconfig.json                      # Root TypeScript solution configuration
├── tsconfig.node.json                 # TypeScript rules for build tooling scripts
├── vite.config.ts                     # Vite bundler configuration with React plugin
├── public/                            # Static assets served at root
│   ├── favicon.svg                    # DARKTRACE brand tab icon
│   └── icons.svg                      # Scalable SVG sprite library
├── docs/                              # Comprehensive modular technical documentation
│   ├── ARCHITECTURE.md                # System layers, data flows, and lifecycle diagrams
│   ├── FEATURES.md                    # Implemented capabilities and Phase 6-15 roadmap
│   ├── THREAT_INTELLIGENCE.md         # Threat vectors, evidence modeling, and schemas
│   ├── IOC_ANALYSIS.md                # Supported indicator types, extraction, and validation
│   ├── ORGANIZATION_MONITORING.md     # Perimeter monitoring, keyword matching, exposure scores
│   ├── RISK_ASSESSMENT.md             # Qualitative risk factors, severity tiers, and formulas
│   ├── API.md                         # In-memory data services & planned RESTful API specs
│   ├── DATA_MODEL.md                  # Complete TypeScript interface specifications
│   ├── SECURITY.md                    # Defensive architecture, XSS prevention, RFC compliance
│   ├── SETUP.md                       # Environment setup, prerequisites, and execution guide
│   ├── TESTING.md                     # Type checking, static linting, and functional matrix
│   ├── TROUBLESHOOTING.md             # Resolution guides for port conflicts and build warnings
│   ├── DEVELOPER_GUIDE.md             # Instructions for extending threats, IOCs, and orgs
│   ├── FUTURE_SCOPE.md                # Multi-phase roadmap (Backend, Tor daemons, AI/NLP)
│   └── INTERNSHIP_REPORT_MAPPING.md   # Dissertation and master's report academic rubric mapping
├── DARKTRACE_DOCUMENTATION.md         # Master 30-section technical system manual
└── src/                               # Application source code
    ├── App.css                        # Application global baseline reset styles
    ├── App.tsx                        # Master router hierarchy and application layout root
    ├── index.css                      # Tailwind base, enterprise card classes, custom scrollbars
    ├── main.tsx                       # React 19 root DOM mount and bootstrap
    ├── assets/                        # Local graphical assets
    │   ├── hero.png                   # Architectural hero visual
    │   ├── react.svg                  # React framework vector logo
    │   └── vite.svg                   # Vite toolchain vector logo
    ├── components/                    # Modular component hierarchy
    │   ├── common/                    # Generic, atomic reusable UI widgets
    │   │   ├── ConfidenceBar.tsx      # 0-100% visual confidence rating progress bar
    │   │   ├── EmptyState.tsx         # Standardized fallback display for empty data views
    │   │   ├── ErrorState.tsx         # Error container with contextual retry trigger
    │   │   ├── LoadingState.tsx       # Smooth animated spinner for asynchronous views
    │   │   ├── SearchCommand.tsx      # Keyboard-driven (Ctrl+K) multi-entity search modal
    │   │   ├── SeverityBadge.tsx      # Standardized severity pill badge (Critical -> Info)
    │   │   ├── StatCard.tsx           # Metric KPI card with trend calculation and icons
    │   │   └── StatusBadge.tsx        # Incident lifecycle status pill (New, Investigating...)
    │   ├── dashboard/                 # Specialized analytical overview widgets
    │   │   ├── OrganizationExposureTable.tsx # Monitored corporate exposure rankings
    │   │   ├── RecentAlertsPanel.tsx  # Prioritized alert queue for rapid triage
    │   │   ├── RecentThreatsTable.tsx # Live telemetry stream with inline confidence & status
    │   │   ├── ThreatActivityChart.tsx# Recharts multi-period area chart (24H/7D/30D/90D)
    │   │   ├── ThreatCategoriesChart.tsx # Recharts vertical horizontal-bar vector ranking
    │   │   └── ThreatSeverityDonut.tsx# Recharts donut chart with percentage breakdown
    │   └── layout/                    # Application framing and shell
    │       ├── AppLayout.tsx          # Responsive grid frame with sidebar and header
    │       ├── Sidebar.tsx            # Collapsible navigation drawer with section groupings
    │       └── TopNavbar.tsx          # Breadcrumb trail, search trigger, and notifications popover
    ├── context/                       # Global application state providers
    │   └── ToastContext.tsx           # Global notification toast provider and hooks
    ├── data/                          # Structured synthetic intelligence telemetry
    │   ├── actors.ts                  # Adversary dossiers (aliases, origins, sophistication)
    │   ├── alerts.ts                  # Prioritized security alert queue records
    │   ├── analytics.ts               # Aggregated time-series, severity, and category counts
    │   ├── iocs.ts                    # Extracted technical indicators (IPs, Hashes, Domains)
    │   ├── organizations.ts           # Monitored organizational perimeters and exposure scores
    │   ├── sources.ts                 # Telemetry source feed registry and health status
    │   └── threats.ts                 # Ingested threat records with evidence and forensics
    ├── pages/                         # Route view containers
    │   ├── Dashboard.tsx              # Fully implemented Master Overview Dashboard
    │   └── Placeholders.tsx           # Phase 6-15 structured placeholder shells
    └── types/                         # TypeScript domain models and interfaces
        └── index.ts                   # Complete type definitions for all security entities
```

---

## 💻 Technology Stack

Every technology and library has been verified directly against `package.json` and active source code:

| Layer | Technology | Version | Purpose | Codebase Application |
|---|---|---|---|---|
| **Core Framework** | React.js | `^19.2.8` | UI Library | Component hierarchy, state hooks (`useState`, `useEffect`, `useContext`, `useRef`). |
| **DOM Engine** | React DOM | `^19.2.8` | DOM Mounting | Root client mounting in `src/main.tsx`. |
| **Language** | TypeScript | `~6.0.2` | Static Typing | Strict type safety, interfaces in `src/types/index.ts`, zero-any enforcement. |
| **Bundler & Dev Server**| Vite | `^8.3.0` | Build Toolchain | Sub-second HMR dev server and optimized Rollup production builds. |
| **Client Routing** | React Router DOM | `^7.18.4` | SPA Navigation | Declarative route matching, layout routing, dynamic route parameters (`:id`). |
| **Styling Engine** | Tailwind CSS | `^3.4.17` | Utility-first CSS | Custom security tokens, dark/navy enterprise palette, responsive breakpoints. |
| **CSS Pipeline** | PostCSS & Autoprefixer | `^8.5` / `^10.6` | CSS Processing | Vendor prefixing and modern CSS compilation. |
| **Visual Analytics** | Recharts | `^3.10.1` | Charting Engine | SVG AreaChart, BarChart, and PieChart with custom tooltips and legends. |
| **Security Icons** | Lucide React | `^1.47.0` | Vector Iconography| Enterprise icons (`ShieldAlert`, `Crosshair`, `Building2`, `KeyRound`, etc.). |
| **Static Code Linter**| Oxlint | `^1.81.0` | Rust-based Linter | High-speed static analysis configured in `.oxlintrc.json`. |

---

## 🚀 Installation & Quick Start

### 1. Prerequisites
- **Node.js:** `v18.0.0` or higher (`v20+` LTS recommended)
- **npm:** `v9.0.0` or higher
- **Git:** `v2.30+`

### 2. Clone and Setup
```bash
# 1. Clone the repository
git clone https://github.com/your-username/DARKTRACE.git

# 2. Navigate to project root
cd DARKTRACE

# 3. Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```
The application will automatically load and route to the **Threat Intelligence Overview Dashboard** (`/dashboard`).

### 4. Build for Production
To perform strict TypeScript compilation (`tsc -b`) and bundle minified assets:
```bash
npm run build
```
To preview the production bundle locally:
```bash
npm run preview
```

### 5. Static Code Quality Analysis
Run the high-speed Oxlint linter:
```bash
npm run lint
```

---

## 📊 Data Entities & Schema Summary

All entities conform strictly to TypeScript interfaces defined in [`src/types/index.ts`](file:///c:/2025-26/Msc%20Cybersecurity/Projects/DARKTRACE/src/types/index.ts):

| Entity Name | Key Attributes | Security Function |
|---|---|---|
| **`Threat`** | `id`, `title`, `category`, `organization`, `severity`, `confidence`, `riskScore`, `evidence`, `extractedIndicators`, `threatActors`, `relatedCVEs`, `riskFactors` | Encapsulates detected dark-web discussions, compromised tokens, evidence snippets, and forensic metadata. |
| **`Organization`** | `id`, `name`, `domain`, `industry`, `mentions`, `threatsCount`, `riskLevel`, `riskScore`, `credentialsExposed`, `iocAssociations`, `exposureTrend` | Models enterprise perimeters and tracks quantitative external exposure metrics. |
| **`ThreatActor`** | `id`, `name`, `aliases`, `sophistication`, `motivation`, `targetedSectors`, `associatedThreatIds`, `riskScore` | Profiles cyber adversary syndicates, operational motivations, and campaign linkages. |
| **`IOC`** | `id`, `value`, `type` (`DOMAIN` \| `IP` \| `URL` \| `EMAIL` \| `SHA256` \| `SHA1` \| `MD5`), `confidence`, `associatedThreatId`, `maliciousScore` | Atomic technical indicator enabling firewall blocking, SIEM matching, and threat correlation. |
| **`Exploit`** | `id`, `cveId`, `title`, `severity`, `technology`, `cvss`, `patchStatus`, `organizationsAffected` | Tracks vulnerability discussions, affected technologies, and remediation posture. |
| **`Alert`** | `id`, `title`, `severity`, `organization`, `riskScore`, `createdAt`, `status`, `threatId` | Prioritized operational queue item for SOC incident triage and response workflows. |

---

## 📚 Documentation Index

Complete technical documentation is organized in [`docs/`](./docs) and the master documentation file:

| Document | Purpose & Scope |
|---|---|
| 📘 **[Master System Documentation](./DARKTRACE_DOCUMENTATION.md)** | **Exhaustive 30-section technical reference manual, architecture diagrams, and full audit.** |
| 🏛️ **[System Architecture](./docs/ARCHITECTURE.md)** | Detailed multi-layer architecture, data-flow diagrams, and processing lifecycles. |
| 🚀 **[Platform Features](./docs/FEATURES.md)** | Implemented dashboard features and scheduled Phase 6–15 modular specifications. |
| 🛡️ **[Threat Intelligence Model](./docs/THREAT_INTELLIGENCE.md)** | Threat categories, evidence modeling, and incident lifecycle states (`New` $\rightarrow$ `Resolved`). |
| 🎯 **[IOC Analysis](./docs/IOC_ANALYSIS.md)** | Analysis of 7 supported indicator types, extraction techniques, and multi-hop pivoting. |
| 🏢 **[Organization Monitoring](./docs/ORGANIZATION_MONITORING.md)** | Perimeter modeling, keyword matching logic, and exposure trend indicators. |
| ⚖️ **[Risk Assessment](./docs/RISK_ASSESSMENT.md)** | Qualitative multi-factor risk model, severity tier thresholds, and algorithmic formulas. |
| 🔌 **[API Documentation](./docs/API.md)** | In-memory client services and planned RESTful API specifications for future backend. |
| 📦 **[Data Models & Schemas](./docs/DATA_MODEL.md)** | Complete TypeScript interface definitions and data structure specifications. |
| 🔒 **[Security & Privacy](./docs/SECURITY.md)** | Defensive design, XSS mitigation, RFC 2606/5737 compliance, and ethical boundaries. |
| 🛠️ **[Setup & Execution Guide](./docs/SETUP.md)** | Workstation prerequisites, step-by-step installation, and development commands. |
| 🧪 **[Testing Strategy](./docs/TESTING.md)** | Static analysis, TypeScript strict compilation, and manual functional verification matrix. |
| 🩺 **[Troubleshooting Guide](./docs/TROUBLESHOOTING.md)** | Resolution steps for port conflicts, bundle sizes, and Node.js version mismatches. |
| 👩‍💻 **[Developer & Extension Guide](./docs/DEVELOPER_GUIDE.md)** | Step-by-step developer guides for adding threats, organizations, IOCs, and new pages. |
| 🔭 **[Future Scope & Roadmap](./docs/FUTURE_SCOPE.md)** | Engineering roadmap for backend integration, live Tor crawlers, and transformer NLP. |
| 🎓 **[Internship Report Mapping](./docs/INTERNSHIP_REPORT_MAPPING.md)** | Direct mapping to standard postgraduate cybersecurity dissertation and internship rubrics. |

---

## 🛡️ Ethical & Defensive Research Use

DARKTRACE has been developed strictly for **authorized defensive threat intelligence education, security research, and organizational exposure assessment**:

- **Synthetic Testbed:** All corporate entities, domains (`.example`), and IP addresses (`198.51.100.0/24`, `203.0.113.0/24`) utilize RFC 2606 and RFC 5737 reserved blocks.
- **No Real PII:** All credential dumps and paste snippets are purely synthetic demonstration artifacts. No real user credentials or live corporate data are stored or accessed.
- **No Offensive Capabilities:** The platform provides zero exploitation, intrusion, or unauthorized scanning tooling. It is engineered entirely to facilitate defensive posture evaluation.

---

## 🎓 Academic Attribution

- **Project:** DARKTRACE – Dark Web Threat Intelligence & Organization Exposure Monitoring Platform
- **Program:** MSc Cybersecurity Dissertation & Defense Project
- **Academic Context:** Cyber Threat Intelligence (CTI), External Attack Surface Management (EASM), and Defensive Security Operations.

---
<div align="center">
  <sub>Developed for Defensive Cybersecurity Research & Academic Dissertation Presentation.</sub>
</div>
