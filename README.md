# LM Method — Official Website Repository

Live website:
- https://lm-method.co.uk
- https://www.lm-method.co.uk

---

## What this repository is

This repository contains the source code for the LM Method website.

It is the single source of truth for how the website looks, behaves, and is deployed.  
All production updates originate here.

---

## How deployment works

The website is deployed automatically using Cloudflare Pages.

```text
Developer (local changes)
        ↓
GitHub (source code repository)
        ↓
Cloudflare Pages (build and deploy)
        ↓
Live website
  https://lm-method.co.uk
  https://www.lm-method.co.uk

There is no manual upload or FTP process.
All production changes must go through this repository.

Who should edit this repository

This repository should only be edited by:

A developer familiar with GitHub and modern web workflows

A contractor making agreed layout, design, or structural changes

If you are not confident with Git or web development tools, do not edit files directly.

Important rules

Do not delete this repository

Do not rename core folders or configuration files

Do not force-push or rewrite Git history

Do not commit secrets, credentials, or recovery data

Best practices:

Keep commits small and clearly described

Test changes locally before pushing

Treat this as a live production system

Breaking changes here can cause the website to fail deployment.

Branching and updates

main represents the live production website

Significant changes should ideally be reviewed before merging

Minor updates may be committed directly if agreed in advance

Non-technical content updates

Some site content (for example events or schedules) may be designed to be updated outside of this repository.

Where such workflows exist:

Do not hard-code values that are intended to be externally managed

Preserve existing data contracts

Coordinate changes before altering structures or formats

Services used (at a glance)

GitHub: source code and version control

Cloudflare Pages: hosting, builds, and deployment

IONOS: domain registration and DNS management

Each service has a distinct role. Changing or removing one can affect the site.

Access and ownership

This repository is owned by the LM Method project.

Access should be:

Granted only when necessary

Removed once work is complete

Credentials should never be committed to this repository.

Future changes and support

For:

Design revisions

New pages or features

Performance or accessibility improvements

Engage a developer experienced with GitHub and Cloudflare Pages.

If unsure, do not experiment on the live branch.

Final note

This setup is intentionally:

Simple

Reliable

Secure

Cost-effective

Treat this repository with care.
It represents the live public presence of the LM Method brand.
