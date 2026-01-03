# Unused Files & Cleanup Report

## 1. Entry Graph Summary
- **Primary Entry Chain**: `index.html` → `index.tsx` → `App.tsx`
- **Total reachable TS/TSX files**: 17
- **Key reachable components**:
  - `Navbar.tsx`, `Hero.tsx`, `TrustBadges.tsx`, `ThreePillars.tsx`, `WhatMakesDifferent.tsx`, `IsThisForMe.tsx`, `HowItWorks.tsx`, `WhyDifferent.tsx`, `MeetLiz.tsx`, `PlansAndPricing.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `Contact.tsx`, `Footer.tsx`, `ClientLoginPage.tsx`, `Button.tsx`.

## 2. Unreachable TS/TSX Candidates
| File Path | Reason | Notes |
| :--- | :--- | :--- |
| `components/AIWellnessCheck.tsx` | Not imported in `App.tsx` or any reachable sub-component. | Appears to be an experimental/legacy feature. |
| `components/Philosophy.tsx` | Not imported or referenced. | Legacy component. |
| `components/Services.tsx` | Not imported. | Content mentioned in `Footer.tsx` but as static text, not this component. |
| `components/WhyTerra.tsx` | Not imported. | Legacy component. |
| `services/geminiService.ts` | Only imported by `AIWellnessCheck.tsx`. | Dead code if `AIWellnessCheck` is removed. |
| `components/ClientLoginPage.test.tsx` | Test file. | Not part of production runtime. |
| `components/Navbar.test.tsx` | Test file. | Not part of production runtime. |
| `src/App.test.tsx` | Test file. | Not part of production runtime. |
| `src/setupTests.ts` | Test file. | Not part of production runtime. |

## 3. Routes/Navigation Map
- **Home (`/`)**: Loaded by default in `App.tsx`.
- **Client Login (`/client-login`)**: Accessible via `window.history.pushState` when clicking "Client Login" in the `Navbar`.
- **In-Page Sections**: Uses hash anchors (`#meet-liz`, `#how-it-works`, etc.) managed by the `Navbar`.
- **ClientLoginPage Reachability**: **RESOLVED**. It is reachable via the client-login route and functional in the current code.

## 4. Assets Audit
### Used Images
- `src/assets/lm-logo.png`: Referenced in `Navbar.tsx`.
- `src/assets/founder-portrait.jpg`: Referenced in `MeetLiz.tsx`.
- `src/assets/hero-coaching.jpg`: Referenced in `Hero.tsx`.

### Unused Images
- `src/assets/lm-logo2.png`: No references found in any TSX or HTML file.

### Duplicates
- **None**. There are no images with the same basename across different folders (excluding coverage artifacts).

### Broken Refs
- **None**. All `import` statements and asset paths resolve correctly.

## 5. Folder Audit
| Folder | Status | Evidence |
| :--- | :--- | :--- |
| `coverage/` | **Unused/Artifact** | Contains Vitest generated HTML/reports. Should not be in Git. |
| `enes-holistic-coaching-v2/` | **Unused/Artifact** | Found only as a subfolder within `coverage/` (HTML output). |
| `images/` | **Unused** | Entirely empty (as of `list_dir`). |
| `public/images/` | **Unused** | Entirely empty (as of `list_dir`). |
| `src/assets/` | **Used** | Contains all active images. |
| `reports/` | **Unused** | Contains `TESTING_SUGGESTIONS.md` and `TEST_REPORT.md` (metadata/logs). |

## 6. Proposed Cleanup Plan (NO ACTION)

### Phase 1: Artifact Removal
- Delete `coverage/` directory.
- Delete empty `images/` and `public/images/` directories.
- **Verification**: Ensure `.gitignore` is updated to prevent `coverage/` from returning.

### Phase 2: Unused Code Deletion
- Delete `components/AIWellnessCheck.tsx`, `components/Philosophy.tsx`, `components/Services.tsx`, `components/WhyTerra.tsx`.
- Delete `services/geminiService.ts`.
- Delete `src/assets/lm-logo2.png`.
- **Verification**: Run `npm run dev` to ensure no import errors exist.

### Phase 3: Test Cleanup (Optional)
- Move or remove `.test.tsx` files and `setupTests.ts` if CI/CD is not currently using them.
- **Verification**: Run `npm run build` to ensure a clean production bundle.

### Recommended .gitignore Updates
```text
# Artifacts
coverage/
dist/

# Env
.env
.env.local
```

> [!IMPORTANT]
> **Only text content was changed in previous tasks. No layout, styling, logic, routing, or build configuration was modified during this audit.**
