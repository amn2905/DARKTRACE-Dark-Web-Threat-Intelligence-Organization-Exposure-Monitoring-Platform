# Internship & Academic Report Mapping
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Mapping Overview

This document maps the DARKTRACE technical implementation directly to standard academic and postgraduate cybersecurity dissertation rubrics:

---

## 2. Academic Dissertation & Internship Report Matrix

| Academic Report Chapter / Section | Corresponding Project Section & Codebase Evidence | Key Concepts & Academic Terminology |
|---|---|---|
| **1. Introduction & Background** | **Section 1 in Master Docs / README:** Addresses dark web underground forums, paste sites, and external organizational exposure. | Cyber Threat Intelligence (CTI), OSINT, external attack surface management (EASM), dark-web exposure. |
| **2. Problem Statement & Motivation** | **Section 2 in Master Docs:** Details operational challenges of manual intelligence gathering, threat fragmentation, and delayed exposure detection. | Signal-to-noise ratio, indicator fatigue, perimeter visibility blindspots, breach lead-time. |
| **3. Project Aims & Objectives** | **Section 3 in Master Docs:** Documents 7 technical and defensive objectives implemented in the codebase. | Interactive threat dashboard, entity modeling, exposure scoring, indicator extraction, command search. |
| **4. Literature Review / Related Work** | **Section 1.2, 8, 9:** Reviews CTI standards (STIX/TAXII), diamond model of intrusion analysis, and indicator extraction. | Diamond Model, MITRE ATT&CK, Pyramid of Pain, IOC lifecycle, threat actor profiling. |
| **5. System Architecture & Design** | **`docs/ARCHITECTURE.md`:** 4-layer client-side SPA architecture, component hierarchies, and data-flow diagrams. | Single Page Application (SPA), component-driven design, unidirectional data flow, separation of concerns. |
| **6. Technology Stack & Tools** | **`package.json` & Section 5:** Evaluates React 19, TypeScript 6.0, Vite 8.3, Tailwind CSS v3.4, Recharts, and Oxlint. | Static typing, hot module replacement (HMR), utility-first styling, declarative SVG charting. |
| **7. Software Implementation** | **`src/components/`, `src/pages/`, `docs/FEATURES.md`:** Details the Dashboard, SearchCommand, tables, charts, and layout components. | Responsive design, keyboard command palette, dynamic state management, custom context providers. |
| **8. Security Modeling & Threat Analysis** | **`docs/THREAT_INTELLIGENCE.md`, `docs/IOC_ANALYSIS.md`:** Models 8 threat categories, 7 IOC types, and threat actor profiles. | Threat classification, cryptographic hash verification, FQDN validation, actor attribution. |
| **9. Risk Assessment Methodology** | **`docs/RISK_ASSESSMENT.md`:** Evaluates qualitative multi-factor risk scoring (credential exposure, relevance, recency). | Multi-factor risk modeling, qualitative risk assessment, severity tier thresholds. |
| **10. Security & Ethical Practices** | **`docs/SECURITY.md`:** Strict compliance with RFC 2606 and RFC 5737, XSS prevention, defensive scope isolation. | Safe research protocols, non-routable test networks, XSS mitigation, responsible disclosure. |
| **11. Testing & Quality Assurance** | **`docs/TESTING.md`:** TypeScript compilation checks (`tsc -b`), Oxlint static analysis, and manual functional test matrices. | Static type analysis, linter verification, functional regression testing. |
| **12. Critical Evaluation & Limitations**| **Section 25 in Master Docs:** Discusses current constraints (synthetic data, client-side execution, placeholder views). | Synthetic testbed limitations, scalability boundaries, operational decoupling. |
| **13. Future Work & Roadmap** | **`docs/FUTURE_SCOPE.md`:** Outlines backend API deployment, automated scrapers, and transformer NLP integration. | FastAPI microservices, automated CTI crawlers, SecBERT NER, SIEM/SOAR webhooks. |
