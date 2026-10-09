@AGENTS.md

# Claude Code specifics
- Follow the Hard rules in AGENTS.md: never commit or push unless explicitly asked, and never change the production database.
- Follow the Documentation rules in AGENTS.md on every task. Update docs/ai/ before saying you're done.
- Preview with the Browser pane: `preview_start` with name "site" (`.claude/launch.json`, port 4321). Check both a 375px mobile width and a 1440px desktop width.
- The Browser pane pauses CSS transitions and requestAnimationFrame while it's in the background, so screenshots can catch animations half-finished. To inspect layout, add `.is-in` to every `.reveal` element via JS and disable transitions first.
- Before finishing, run `npm run typecheck` and `npm run build`. Use `npm run format` for Prettier.
- npm in the sandbox: `~/.npm` isn't writable, so prefix npm/npx with `npm_config_cache=$TMPDIR/npm-cache`.
- Don't use `next/font/google`: the sandbox blocks the build-time font fetch. The fonts are self-hosted in `app/fonts/`.
