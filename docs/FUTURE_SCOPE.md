# Future Scope & Development Roadmap
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Architectural Evolution

The current implementation establishes the user interface, data contracts, and client-side visualization foundation. The platform roadmap plans transitions through four major evolutionary milestones:

```
[Phase 1-5 (Current)] ===> [Phase 6-10 (Full Views)] ===> [Phase 11-15 (Backend & Feeds)] ===> [Phase 16+ (AI & SIEM)]
 - Overview Dashboard       - Core Module Pages           - Python FastAPI Backend       - Transformer NLP (NER)
 - Recharts Visualizations  - Org Exposure Perimeters      - PostgreSQL / OpenSearch      - STIX / TAXII v2.1 Feeds
 - Global Search (Ctrl+K)   - Threat Actor Profiles        - Live Tor Ingestion Workers   - Splunk / Sentinel SIEM
 - Synthetic Type Schemas   - Searchable IOC Registry      - JWT & RBAC Authentication    - SOAR Playbook Webhooks
```

---

## 2. Planned Functional Enhancements

### 2.1 Backend API & Persistence Layer (Phases 11–13)
- **High-Performance REST/GraphQL API:** Implement a Python (FastAPI) or Node.js backend.
- **Relational & Search Storage:** Deploy PostgreSQL for entity relationships and OpenSearch/Elasticsearch for fast indicator indexing.
- **Role-Based Access Control (RBAC):** Integrate OAuth2 / OIDC authentication with roles for Tier-1 SOC analysts, Threat Researchers, and SOC Managers.

### 2.2 Automated Ingestion & Live Feeds (Phases 14–15)
- **Controlled Dark-Web Scrapers:** Deploy containerized worker daemons to pull from public OSINT feeds, paste mirrors, and authorized threat sharing repositories.
- **STIX / TAXII 2.1 Standards Support:** Ingest and export cyber threat intelligence using standardized OASIS STIX/TAXII protocols.

### 2.3 Machine Learning & NLP Enrichment (Phase 16+)
- **Automated Entity Extraction (NER):** Fine-tune transformer models (e.g., SecBERT) to extract software names, CVEs, IP addresses, and brand terms from unstructured text chatter.
- **Sentiment & Threat Intent Scoring:** Classify underground forum chatter based on actionable attack intent versus casual discussion.

### 2.4 Enterprise SOC Integrations (Phase 17+)
- **SIEM Forwarding:** Push high-confidence indicators to SIEM platforms (Splunk, Microsoft Sentinel, IBM QRadar).
- **SOAR Automation:** Trigger automated playbooks (e.g., automated firewall blocks or credential resets) via webhook integrations.
