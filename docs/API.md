# API & Service Architecture
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Current Architecture: In-Memory Client Data Layer

> [!IMPORTANT]
> **Definitive Architectural Statement:**
> DARKTRACE is currently implemented strictly as a **client-side Single Page Application (SPA)** with zero remote REST or GraphQL endpoints. There is **no backend server** (Node.js/Express, Python/FastAPI, etc.) executing in this repository. All threat telemetry, organization profiles, and indicator datasets are bundled into static client TypeScript files (`src/data/*.ts`).

### 1.1 In-Memory Data Access Pattern
Components access data synchronously via ES module imports:

```typescript
// Direct static module import
import { mockThreats } from '../data/threats';
import { mockOrganizations } from '../data/organizations';
import { mockAlerts } from '../data/alerts';
import { mockIOCs } from '../data/iocs';
import { mockThreatActivity } from '../data/analytics';
```

---

## 2. Target RESTful API Specification (Future Scope)

When the backend service is integrated, the following RESTful API contract is specified to match the existing TypeScript interfaces:

### 2.1 Threat Endpoints
- **`GET /api/v1/threats`**
  - *Query Parameters:* `category`, `organizationId`, `severity`, `status`, `limit`, `offset`
  - *Response:* Paginated array of `Threat` objects.
- **`GET /api/v1/threats/:id`**
  - *Response:* Full `Threat` object including evidence, extracted indicators, and timeline.

### 2.2 Organization Endpoints
- **`GET /api/v1/organizations`**
  - *Response:* Array of `Organization` exposure objects with trend metrics.
- **`GET /api/v1/organizations/:id`**
  - *Response:* Detailed organizational exposure record with targeted actors and exploit references.

### 2.3 Indicator of Compromise (IOC) Endpoints
- **`GET /api/v1/iocs`**
  - *Query Parameters:* `type` (`DOMAIN`, `IP`, `URL`, `EMAIL`, `SHA256`, `SHA1`, `MD5`), `value`, `threatId`
  - *Response:* Array of matching `IOC` indicator records.

### 2.4 Alert Management Endpoints
- **`GET /api/v1/alerts`**
  - *Response:* Array of active `Alert` items sorted by recency and severity.
- **`PATCH /api/v1/alerts/:id/status`**
  - *Request Body:* `{ "status": "Investigating" | "Resolved" | "False Positive" }`
  - *Response:* Updated `Alert` record.
