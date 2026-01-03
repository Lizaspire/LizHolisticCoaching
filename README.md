# LM Method Official Website Repository

Live website:
- https://lm-method.co.uk
- https://www.lm-method.co.uk

---

## What this repository is

This repository contains the source code for the LM Method website. It is the single source of truth for production changes and deployment.

---

## Deployment overview

This site is deployed automatically via Cloudflare Pages.

**Update path (high level):**  
Developer changes → GitHub → Cloudflare Pages → Live website


<summary><strong>Show the deployment flow diagram</strong></summary>

```text
### Developer (local changes)
   ↓
GitHub (repository)
   ↓
Cloudflare Pages (build + deploy)
   ↓
Live website
</details>
Working rules for developers
Who should edit this repository

Developers familiar with GitHub and modern web workflows

Contractors making agreed layout, design, or structural changes

If you are not confident with Git or web development tools, do not edit files directly.

Non-negotiables

Do not delete this repository

Do not rename core folders or configuration files without a clear reason

Do not force-push or rewrite Git history

Do not commit secrets, credentials, or recovery data

Good practice

Keep commits small and clearly described

Test changes locally before pushing

Treat main as production

Branching

main is production

Prefer a branch (and a pull request) for anything beyond a trivial change

Use direct commits to main only for small, agreed fixes

Non-technical content updates

Some content (for example events or schedules) may be managed outside this repository.

If an external content workflow exists:

Do not hard-code values that are meant to be externally managed

Preserve existing data contracts

Coordinate before altering formats, schemas, or file structures

Services used
Service	Role
GitHub	Source code and version control
Cloudflare Pages	Build and deploy hosting
IONOS	Domain registration and DNS management

Each service has a distinct role. Changing or removing one can affect the site.

Access and ownership

This repository is owned by the LM Method project. Access should be granted only when needed and removed once work is complete.

Support and future changes

For design revisions, new pages/features, or performance and accessibility improvements, use a developer experienced with GitHub and Cloudflare Pages. Avoid experimenting directly on main.

Notes

This setup is intentionally simple, reliable, secure, and cost-effective. Handle with care as it represents the public LM Method website.
