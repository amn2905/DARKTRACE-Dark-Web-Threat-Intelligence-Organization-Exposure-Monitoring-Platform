# Setup & Execution Guide
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Prerequisites

Ensure your development environment meets the following requirements:
- **Operating System:** Windows 10/11, macOS 12+, or modern Linux (Ubuntu 20.04+).
- **Node.js:** Version 18.x, 20.x, or 22.x LTS.
- **npm:** Version 9.x or 10.x (packaged with Node.js).
- **Git:** Git 2.30+ for version control.

---

## 2. Installation Steps

### Step 1: Open the Project Directory
Navigate to the root directory of DARKTRACE:
```bash
cd "c:\2025-26\Msc Cybersecurity\Projects\DARKTRACE"
```

### Step 2: Install Node Dependencies
Run `npm install` to download and link all required packages:
```bash
npm install
```

### Step 3: Start the Development Server
Launch Vite in development mode with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Step 4: Open the Platform
Open your browser and navigate to:
```
http://localhost:5173/
```

---

## 3. Production Build and Verification

### Step 1: Build the Bundle
Compile TypeScript files and generate minified production assets:
```bash
npm run build
```

### Step 2: Preview the Build Locally
Preview the production bundle locally using Vite's preview server:
```bash
npm run preview
```

### Step 3: Run Static Linting
Execute Oxlint to check for code quality and lint issues:
```bash
npm run lint
```
