# Troubleshooting Guide
## DARKTRACE: Dark Web Threat Intelligence & Organization Exposure Monitoring Platform

---

## 1. Common Setup and Runtime Issues

### Issue 1: Port 5173 Already in Use
- **Symptom:** Terminal displays `Port 5173 is in use, trying another one...` or exits with `EADDRINUSE`.
- **Root Cause:** A previous Vite process or another local web application is bound to port 5173.
- **Resolution:**
  - Option A: Allow Vite to automatically bind to the next available port (`http://localhost:5174/`).
  - Option B: Manually specify an alternative port:
    ```bash
    npx vite --port 3000
    ```
  - Option C: Terminate the competing process using PowerShell:
    ```powershell
    Get-Process node | Stop-Process -Force
    ```

### Issue 2: Oxlint Fast Refresh Warnings
- **Symptom:** Running `npm run lint` flags a warning: `react(only-export-components): Fast refresh only works when a file only exports components`.
- **Root Cause:** `src/context/ToastContext.tsx` exports both the `ToastProvider` component and the `useToast` custom hook from the same file.
- **Resolution:** This is a non-breaking linter warning that does not affect application runtime or production builds. To resolve it in a future refactor, move `useToast` into its own file (`src/context/useToast.ts`).

### Issue 3: Large Production Bundle Warning
- **Symptom:** Running `npm run build` outputs: `(!) Some chunks are larger than 500 kB after minification: dist/assets/index-*.js`.
- **Root Cause:** Core libraries (React 19, React Router v7, Recharts, Lucide React) are bundled into a single JavaScript file.
- **Resolution:** The build completes successfully with zero errors. To optimize production chunking, configure code splitting using `dynamic import()` for placeholder routes or update `vite.config.ts`:
  ```typescript
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
        },
      },
    },
  }
  ```

### Issue 4: Node.js Version Incompatibility
- **Symptom:** Build fails with `ERR_MODULE_NOT_FOUND` or syntax errors during module resolution.
- **Root Cause:** An older version of Node.js (< 18.0) is installed.
- **Resolution:** Update your local Node.js runtime to version 20.x or 22.x LTS.
