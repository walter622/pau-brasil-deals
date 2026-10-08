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

## Application architecture
- Keep the Black Pau Brasil campaign as one continuous index page; the supplied conversion blocks form one campaign, not separate navigable pages.
- Centralize the campaign destination and campaign data in a browser-safe module so every campaign CTA uses the same destination.
- Use original furniture photos hosted through Lovable Assets; never substitute generated products for the real catalogue.
- Drive the countdown from the event start in the São Paulo timezone and show explicit ongoing/ended states to avoid misleading urgency.
- Render the category-name ticker as duplicated CSS-animated groups with the duplicate hidden from assistive technology and a static wrapped layout for reduced-motion preferences, so the strip loops accessibly without another carousel dependency.
