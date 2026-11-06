<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions
- The portfolio is a single long-scroll page at `/` with hash-anchor navigation (#work, #services, #about, #contact) — this matches the reference design the user chose; do not split it into separate routes unless asked.
- Scroll animations use a lightweight custom system (`.reveal` CSS + `useReveal` IntersectionObserver hook in src/hooks/use-reveal.ts), no animation library — keep bundle small.
