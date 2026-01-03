🌿 LM Method — Official Website Repository

Live website:
🔗 https://lm-method.co.uk

🔗 https://www.lm-method.co.uk

📌 What this repository is

This repository contains the source code for the LM Method website.

It is the single source of truth for how the website looks, behaves, and is deployed.
All production updates originate here.

🚀 How deployment works

The website is deployed automatically using Cloudflare Pages.

Deployment flow:

Developer changes
        ↓
     GitHub
        ↓
 Cloudflare Pages
        ↓
   Live Website

/docs/website-workflow.png

A developer makes changes locally

Changes are committed and pushed to GitHub

Cloudflare Pages:

Detects the update

Builds the site

Deploys it live automatically

⚠️ There is no manual upload or FTP process.

🧠 Who should edit this repository

This repository should only be edited by:

A developer familiar with GitHub and modern web workflows

A contractor making agreed layout, design, or structural changes

If you are not confident with Git or web development tools, do not edit files directly.

Non-technical content updates (for example events or schedules) are handled through a separate, simplified workflow where available.

🛑 Important rules (please read)

❌ Do not delete this repository
❌ Do not rename core folders or config files
❌ Do not force-push or rewrite Git history
❌ Do not commit secrets or passwords

✅ Keep commits small and clearly described
✅ Test changes locally before pushing
✅ Treat this as a live production system

Breaking changes here can cause the website to fail deployment.

🌿 Branching and updates

main → live production website

Significant changes should ideally be reviewed before merging

Minor updates may be committed directly if agreed in advance

🧩 Services used (at a glance)
Service	Purpose
GitHub	Source code and version control
Cloudflare Pages	Hosting, builds, and deployment
IONOS	Domain registration and DNS management

Each service has a distinct role. Changing or removing one can affect the site.

🔐 Access and ownership

This repository is owned by LM Method

Access should be:

Granted only when necessary

Removed once work is complete

🚫 Credentials should never be committed to this repository.

🛠 Future changes and support

For:

Design revisions

New pages or features

Performance or accessibility improvements

Engage a developer experienced with GitHub + Cloudflare Pages.

If unsure, do not experiment on the live branch.

✨ Final note

This setup is intentionally:

Simple

Reliable

Secure

Cost-effective

Treat this repository with care.
It represents the live public presence of the LM Method brand.
