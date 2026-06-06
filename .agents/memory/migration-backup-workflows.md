---
name: .migration-backup stale workflows
description: Why the .migration-backup/* workflows always show as failed and must be ignored
---

The repo contains a `.migration-backup/` folder duplicating `artifacts/*`
(tattvashila web, api-server, mockup-sandbox). It registers three extra
workflows that ALWAYS show "failed".

**Rule:** Ignore the `.migration-backup/...` workflows entirely. Do not restart,
edit, or debug them. Only the three real `artifacts/*` workflows matter, and
they run fine.

**Why:** They are stale leftovers from a multi-artifact migration. Their failure
is expected and unrelated to current code health. Treating them as real wastes
time and can mislead debugging.

**How to apply:** When reading `<system_log_status>`, filter to paths starting
with `artifacts/` (not `.migration-backup/artifacts/`).
