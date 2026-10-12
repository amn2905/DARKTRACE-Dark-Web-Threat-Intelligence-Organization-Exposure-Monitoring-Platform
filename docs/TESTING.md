# Testing & Verification Strategy
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Automated Testing Suite Status

> [!NOTE]
> **Repository Testing Reality:**
> An automated unit or integration testing framework (such as Vitest, Jest, Cypress, or Playwright) is **not currently configured** in this repository. There are no test runner scripts in `package.json`.

---

## 2. Implemented Code Validation Methods

Code reliability, interface conformance, and runtime stability are currently validated through:

### 2.1 TypeScript Strict Type Verification
The project uses strict type checking configured via `tsconfig.app.json`:
```bash
npm run build
```
This triggers `tsc -b && vite build`. All domain types, component props, and event handlers are validated before bundling.

### 2.2 Oxlint High-Speed Static Analysis
Static analysis is executed using Oxlint:
```bash
npm run lint
```
Oxlint scans all source files for React hook compliance, syntax errors, and export issues.

---

## 3. Manual Functional Verification Matrix

| Test Scenario | Verification Procedure | Expected Outcome | Actual Result |
|---|---|---|---|
| **Overview Dashboard Render** | Navigate to `/dashboard` | 6 KPI stat cards, AreaChart, PieChart, BarChart, and 2 tables render without errors. | **Pass** |
| **Timeframe Filter Toggle** | Click `24H`, `7D`, `30D`, `90D` buttons on Threat Activity chart | Chart data updates smoothly to match the selected timeframe. | **Pass** |
| **Global Search Modal** | Press `Ctrl+K` or click the search input | Modal opens immediately with focused text input. | **Pass** |
| **Multi-Entity Filtering** | Type "ExampleBank" into the search modal | Correctly returns filtered threats, organizations, IOCs, and alerts. | **Pass** |
| **Keyboard Escape Action** | Press `Escape` while search modal is open | Modal closes immediately and returns focus to previous element. | **Pass** |
| **Threat Table Navigation** | Click on any threat row in Recent Threats table | Routes to `/threat-intelligence/:id` with appropriate placeholder. | **Pass** |
| **Telemetry Sync Simulation**| Click "Refresh Intelligence" button | Icon spins, button disables temporarily, and success toast displays. | **Pass** |
| **Sidebar Collapse Toggle** | Click collapse arrow button on sidebar | Sidebar shrinks to compact icon mode (`w-18`); re-click expands to `w-64`. | **Pass** |
