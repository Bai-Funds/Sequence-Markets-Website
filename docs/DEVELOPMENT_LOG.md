### Team Update — Deprecate Zilong Bai profile (2025-11-27)

- Changes:
  - Disabled the Zilong Bai profile via the existing feature flag so the card no longer renders but remains easy to re-enable later.
  - Updated the team grid to use four columns on desktop so the remaining four profiles fill the same section width cleanly.
- Files modified:
  - `src/components/FoundersInSearch.tsx`
- Notes:
  - Verified `vite.config.ts` still uses `target: 'es2020'` to avoid GitHub Pages MIME issues.
- Current status:
  - Team section shows four profiles with a balanced layout; ready for deploy when desired.

---

### XTX-Style Design Polish & Sensitive Info Cleanup — 2025-11-25

- Changes:
  - Removed all sensitive info: specific exchange names, datacenter locations, firm validations
  - Replaced with generic references: "major Canadian exchanges", "institutional asset managers"
  - Polished entire site to match XTX Markets aesthetic:
    - Font sizes: 11px uppercase tracking for labels, large bold headlines
    - Spacing: Consistent py-28/py-36 section padding, 0.4em letter-spacing
    - Colors: Pure black bg, white text, neutral-500/600 for secondary
    - Borders: Thin neutral-800 dividers, neutral-700 accent borders
    - Buttons: Border-only style with hover fill transition
  - Email confirmed as team@baifunds.com throughout
  - Team section shows generic backgrounds: Exchanges, Asset Managers, Banks, Research
  - All nav buttons working with smooth scroll
- Files modified:
  - src/components/Hero.tsx
  - src/components/Header.tsx
  - src/components/About.tsx
  - src/components/Manifesto.tsx
  - src/components/Gap.tsx
  - src/components/TechnologyPlatform.tsx
  - src/components/FoundersInSearch.tsx
  - src/components/Community.tsx
  - src/components/Footer.tsx
- Result:
  - Clean, cohesive XTX-style design
  - No sensitive firm names, datacenter locations, or specific validation claims
  - Professional, minimal aesthetic throughout

---

### Repo Sync — 2025-09-23 12:13:43Z (UTC)

- Actions:
  - Fetched all remotes and hard reset local `main` to `origin/main`.
  - Removed untracked files/directories via `git clean -fdx` for a pristine working tree.
  - Verified `vite.config.ts` build `target: 'es2020'` per deployment rule.
- Files modified:
  - None committed; local `node_modules/` removed by clean.
- Issues encountered:
  - None.
- Current status:
  - Local workspace exactly matches `origin/main`.
- Next steps:
  - Reinstall dependencies and run dev server if continuing work: `npm i && npm run dev`.

- Hotfix: Remove legacy SPA redirect loop

### UI Update — Make feature cards fully opaque (2025-09-23)

- Changes:
  - Replaced translucent backgrounds (`/10`, `/20`) with solid brand fills for icon containers.
  - Removed `hover:bg-muted/20` from feature cards; set card surface to `bg-card` for opaque base.
  - Used white inner badge circles for contrast against solid brand squares.
- Files modified:
  - `src/components/Manifesto.tsx`
  - `src/components/Gap.tsx`
  - `src/components/Community.tsx`
- Result:
  - No bleed-through from background animation; cards are completely opaque.

### Layering Fix — Move pulse layer behind content (2025-09-23)

- Change:
  - Updated `.pulse-layer` z-index from 50 to 1 in `src/index.css` to ensure it renders behind all content and opaque cards.
- Result:
  - Eliminates background line bleed-through over feature cards while keeping animation visible.

### Layering Adjustment — Pulse above section bg but below cards (2025-09-23)

- Changes:
  - Set `.pulse-layer` to `z-index: 15` to sit above section backgrounds.
  - Removed `z-10` from Manifesto section/container to avoid covering pulse.
  - Elevated cards/tiles with `relative z-20` to ensure they sit above the pulse layer.
- Files modified:
  - `src/index.css`
  - `src/components/Manifesto.tsx`
  - `src/components/Gap.tsx`
  - `src/components/Community.tsx`
- Result:
  - Pulse lines render above background but do not bleed over cards.

### Performance Tweak — Limit concurrent background lines to 6 (2025-09-23)

- Change:
  - Reduced `maxConcurrentLines` from 10 to 6 in `src/components/BackgroundChart.tsx`.
- Result:
  - Lower visual density and GPU usage while keeping the effect visible.

### Content Update — Team role titles (2025-09-23)

- Changes:
  - Updated roles in `src/components/FoundersInSearch.tsx` to concise, technical titles:
    - Peter: Head of Investment Research
    - Muhammad: Head of Systems Engineering
    - Josephina: Head of Research Partnerships & Operations
    - Frank: Head of Capital Markets & Execution
- Result:
  - Titles are precise, investor-facing, and aligned with responsibilities.

- Changes:
  - Deleted spa-github-pages redirect script from `index.html` to prevent recursive `/dist` URL query loops.
  - Using manifest-based loader for production and Vite entry for dev.
- Files modified:
  - `index.html`

### Deployment — 2025-09-22

- Built with Vite (target es2020 per deployment rule) and pushed to `main`.
- Dev improvements:
  - Gated production redirect in `index.html` to avoid dev blank screen.
  - Added Vite dev entry script for local mount.
- UI changes included in this deploy:
  - Card background opacity increases; Core Systems cards fully opaque.
  - Team cards: single-open expansion, restored grid layout.
- Files touched in this deploy:
  - `index.html`
  - `src/components/FoundersInSearch.tsx`
  - `src/components/TechnologyPlatform.tsx`
  - `src/index.css`
- Issues:
  - Local blank screen due to redirect—resolved via environment gating and dev entry.
- Next:
  - Verify GitHub Pages serves updated assets without MIME issues.
  - Visual QA production.

- Make Core Systems cards fully opaque

- Changes:
  - Set global `.group.border.rounded-lg` background to fully opaque `bg-card`.
  - Updated Core Systems cards to use `bg-card` (no alpha) with solid hover.
- Files modified:
  - `src/index.css`
  - `src/components/TechnologyPlatform.tsx`

- Fix team card expansion to be per-card, not global

- Changes:
  - Replaced single `expandedCard` state with a `Set<number>` `expandedCards` to track multiple open cards independently.
  - Updated toggle logic and UI conditions accordingly.
- Files modified:
  - `src/components/FoundersInSearch.tsx`

- Adjust font sizing and contrast in Technology & Infrastructure → Core Systems cards

- Changes:
  - Increased title to `text-xl md:text-2xl`, body to `text-base md:text-lg` for readability.
  - Set base fill to `bg-card/90` with `hover:bg-card` for solid background and better contrast.
  - Kept borders consistent with `border border-border`.
- Files modified:
  - `src/components/TechnologyPlatform.tsx`

## 2025-09-22 — Improve card background opacity for readability

- Changes:
  - Increased default opacity for outlined cards so background within borders is less transparent and text is more readable.
  - Removed translucency on `.card-interactive` hover that previously reduced contrast.
- Technical details:
  - Edited `src/index.css`:
    - Removed `hover:bg-muted/20` from `.card-interactive`.
    - Added base fill for outlined group cards: `.group.border.rounded-lg { background-color: hsl(var(--card) / 0.9); }` and solid on hover.
- Files modified:
  - `src/index.css`
- Issues encountered:
  - None; Tailwind linter warnings (`@apply`, `@tailwind`) are expected and unchanged.
- Status:
  - Readability of card content increased without altering overall design language.
- Next steps:
  - Visual QA across light/dark modes and sections with busy backgrounds; tweak alpha if needed.
  - If any cards still lack contrast, consider adding `backdrop-blur` or stronger `bg-card` in those contexts.

## 2025-09-22

- Updated animated nodes to follow geometric grid globally and removed them from Hero to keep the video layer clean and unobstructed.
- Fixed scroll offset across `Index.tsx`, `Header.tsx`, and `Footer.tsx` to 120px to eliminate the video sliver when navigating to sections (e.g., "Our Approach").
- Normalized spacing util classes: reduced `section-spacing` and `content-spacing` for better balance; adjusted Hero internal spacing.
- Standardized typography scale (reduced h1–h3, paragraphs, and taglines) for institutional readability.
- Refined Team section layout: tightened stats spacing, compact card layout, consistent text sizes.
- Increased the About section logo size within "Key Metrics" (container to `w-28 h-28`, logo `w-20`).
- Verified Vite build target remains `es2020` for GitHub Pages MIME compatibility.
 - Converted section background layers (geometric patterns + nodes) to fixed-position so they remain stationary during scroll across all sections; disabled pointer events to avoid interaction issues.
 - Replaced geometric backgrounds and nodes with a fixed far-background SVG chart (`BackgroundChart.tsx`) that renders a randomized upward-biased line with a glowing pulse. Applied to all sections except Hero. Removed prior floating nodes CSS.
 - Restored visibility of randomized line animation by raising `.background-layer` stacking context (z-index from -10 to 0) while keeping `pointer-events: none` to avoid blocking interactions.
 - Added fixed `.pulse-layer` to render glowing heads above content; ensured hidden over Hero only.
 - Converted single line to multiple independently seeded lines with slower motion; smoothed volatility and reduced step rate; pulses now visibly lead the lines across sections including `#what-we-do`.
 - Replaced dot heads with neon leading segment; applied `mix-blend-mode: screen` and glow to ensure visibility on white sections without overpowering dark ones; ensured Hero sits above pulses (no overlay on video).
 - Added fade-out on completion and staggered spawning so new lines begin before previous complete; biased endpoints to land mid-to-top right for visually pleasing terminations.
 - Removed endpoint targeting; lines now wander randomly with upward bias, still fading out at completion and spawning successors before completion for continuous flow.
 - Slowed fade-out (opacity decays gently) and applied opacity to both trail and neon head so the entire line visibly fades.
 - Increased max concurrent lines to 10 with sequential, randomized cooldown spawns (no bursts); each line fades independently.
 - Header improvements: dynamic anchor offsets use actual header height; header z-index raised above pulse layer to keep logo/nav visible; section headings no longer hidden under header.
 - Switched brand palette to grayscale: updated CSS variables for primary/accent to neutral grays; adjusted animated line colors to grayscale neon/white; components inherit new scheme via Tailwind tokens.
- Deployed latest changes to GitHub Pages (main). Verified `vite.config.ts` target is `es2020` to avoid MIME issues. Expect propagation within a few minutes.
 - Refined anchor scrolling: both header nav and global links now subtract actual header height (with minimal extra spacing) to reduce excessive top gap when navigating to sections.
 - Increased global rounding: bumped `--radius` to 1rem and rounded cards/glass panels site-wide for softer edges.

Files modified:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/FoundersInSearch.tsx`
- `src/components/Manifesto.tsx`
- `src/components/TechnologyPlatform.tsx`
- `src/components/Community.tsx`
- `src/pages/Index.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/index.css`

Issues addressed:
- Floating nodes appearing over video; moved off Hero.
- Section scroll landing offset showing video sliver; increased offset.
- Excessive spacing and oversized type leading to cramped/uneven layout.

Status:
- Local dev server running on http://localhost:8080/ with HMR.

Next steps:
- Fine-tune node path randomness along grid; consider multi-path variants.
- QA on multiple screen sizes; adjust offsets for mobile header height if needed.
- Prepare for deploy; confirm assets and favicon behavior post-build.
# BAI Website Development Log

## Project Overview
**Project Name**: BAI Funds (Bai Awan Investments) Website (baifunds.com)  
**Technology Stack**: React + TypeScript + Vite + Tailwind CSS  
**Hosting**: GitHub Pages with custom domain  
**Repository**: bai-peter/BAI-Website  

## Project Goals
- Create a professional, institutional-grade website for BAI Funds (Bai Awan Investments)
- Establish strong SEO presence for BAI Funds keywords
- Implement modern, responsive design with smooth animations
- Deploy successfully on GitHub Pages with custom domain
- Optimize for search engines and user experience

## Development Sessions

### Session 7: Comprehensive Content Alignment with Research Portfolio System (2025-01-19)
**Date**: 2025-01-19  
**Duration**: 45 minutes  
**Status**: ✅ COMPLETED

#### What We Accomplished
- Conducted comprehensive analysis of entire website content against actual research portfolio system
- Identified and fixed major misalignments across all components
- Ensured professional, investor-ready content that accurately reflects multi-agent AI research capabilities
- Updated all messaging to be consistent with actual technical implementation

#### Technical Changes Made
- Modified `src/components/Hero.tsx` to:
  - Change main headline from "Structure Breeds Signal" to "Multi-Agent AI Research"
  - Update tagline to accurately describe specialized AI agents working in coordinated teams
  - Align messaging with actual research portfolio system capabilities

- Modified `src/components/FoundersInSearch.tsx` to:
  - Update Peter's description to highlight his role as architect of multi-agent AI research system
  - Update Muhammad's description to emphasize his leadership in technical implementation
  - Update Josephina's description to highlight her role in industry research and sector analysis
  - Update Frank's description to emphasize his role in capital and partnerships strategy
  - Update team section description to reflect multi-agent AI research focus

- Modified `src/components/Gap.tsx` to:
  - Replace behavioral finance strategies with multi-agent AI research approach
  - Update investment strategies to reflect systematic signal integration and adaptive learning
  - Replace fake infrastructure claims with accurate cloud-native architecture details
  - Align all content with actual technical implementation

- Previously updated `src/components/About.tsx`, `src/components/Manifesto.tsx`, and `src/components/TechnologyPlatform.tsx` in Session 6

#### Content Alignment Analysis
- ✅ **Hero Section**: Now accurately describes multi-agent AI research approach
- ✅ **Team Descriptions**: All team members now reflect their actual roles in AI research system
- ✅ **Investment Strategies**: Updated to reflect systematic signal integration and adaptive learning
- ✅ **Technical Infrastructure**: Replaced fake claims with accurate cloud-native architecture
- ✅ **Overall Messaging**: Consistent multi-agent AI research theme across all components

#### Current Project Status
- ✅ All website content now accurately reflects actual research portfolio system
- ✅ Professional, investor-ready messaging throughout
- ✅ No fake or overstated claims remaining
- ✅ Content aligned with technical implementation details
- ✅ Vite config verified with es2020 target to prevent MIME errors

#### Next Steps
- Monitor deployment and site functionality
- Gather feedback from potential investors and partners
- Consider additional content refinements based on market response
- Plan future enhancements aligned with multi-agent AI research focus

---

### Session 6: Content Strategy Pivot to Multi-Agent AI (2025-01-19)
**Date**: 2025-01-19  
**Duration**: 15 minutes  
**Status**: ✅ COMPLETED

#### What We Accomplished
- Updated website content focus from behavioral finance to multi-agent AI research
- Refined messaging to emphasize systematic alpha through AI agents
- Updated all core components to reflect new positioning

#### Technical Changes Made
- Modified `src/components/About.tsx` to:
  - Change mission from "behavioral insights" to "multi-agent AI research systems"
  - Update philosophy points to emphasize AI agent specialization
  - Revise capabilities to highlight systematic analysis from macro to stock level

- Modified `src/components/Manifesto.tsx` to:
  - Update main heading to "Systematic Alpha Through Multi-Agent AI Research"
  - Change BAI Tech description to "Multi-Agent AI Platform"
  - Revise core principles from behavioral to specialized/adaptive approach

- Modified `src/components/TechnologyPlatform.tsx` to:
  - Replace behavioral modeling with multi-agent AI research system
  - Update capabilities to focus on specialized AI agents and systematic research
  - Revise infrastructure details to reflect modern tech stack (React/TypeScript, Node.js, PostgreSQL)

#### Current Project Status
- ✅ Content successfully updated across all components
- ✅ Changes committed and pushed to GitHub Pages
- ✅ Website reflects new multi-agent AI positioning
- ✅ Vite config verified with es2020 target to prevent MIME errors

#### Next Steps
- Monitor deployment and site functionality
- Consider additional content refinements based on new positioning
- Plan future enhancements aligned with AI research focus

---

### Session 5: Team Section Expansion (2025-09-19)
**Date**: 2025-09-19  
**Duration**: 30 minutes  
**Status**: ✅ COMPLETED

#### What We Accomplished
- Expanded `Our Team` section to include four members
- Added updated roles, biographies, and LinkedIn links

#### Technical Changes Made
- Modified `src/components/FoundersInSearch.tsx` to:
  - Add members: Peter Bai (Founder & Managing Partner), Muhammad Awan (Head of Systems Engineering), Josephina Kim (Head of Industry Research), Frank Zou (Head of Capital & Partnerships)
  - Update roles and detailed bios per guidance
  - Add LinkedIn links for each member
  - Widen grid container to accommodate layout

#### Current Project Status
- ✅ Team section reflects accurate roles and profiles
- ✅ Content consistent with company positioning

#### Next Steps
- Replace placeholder emblem with individual headshots when available
- Optionally add social icons and hover states for improved UX

---

### Session 1: Initial Setup & Foundation (2025-01-07)
**Date**: 2025-01-07  
**Duration**: Multiple hours  
**Status**: ✅ COMPLETED

#### What We Accomplished
- **Project Structure**: Established React + TypeScript + Vite + Tailwind CSS foundation
- **Core Components**: Created main website sections (Header, Hero, Manifesto, Technology Platform, About, Community, Footer)
- **Animations**: Implemented custom FadeIn component with Intersection Observer for scroll-triggered animations
- **Styling**: Applied professional, institutional design aesthetic with dark theme
- **Routing**: Set up React Router with proper SPA configuration for GitHub Pages

#### Technical Changes Made
- **Files Created**:
  - `src/components/Header.tsx` - Navigation with smooth scrolling
  - `src/components/Hero.tsx` - Hero section with video background
  - `src/components/Manifesto.tsx` - Company philosophy and mission
  - `src/components/TechnologyPlatform.tsx` - BAI Tech platform showcase
  - `src/components/About.tsx` - Company information and team
  - `src/components/Community.tsx` - Community engagement section
  - `src/components/Footer.tsx` - Site footer with links
  - `src/components/Gap.tsx` - Investment approach and strategy
  - `src/components/FoundersInSearch.tsx` - Team and leadership
  - `src/components/animations/FadeIn.tsx` - Custom animation component
  - `src/pages/Index.tsx` - Main page component
  - `src/pages/NotFound.tsx` - 404 error page

- **Configuration Files**:
  - `vite.config.ts` - Build configuration
  - `tailwind.config.ts` - Styling configuration
  - `tsconfig.json` - TypeScript configuration
  - `package.json` - Dependencies and scripts

#### Issues Encountered & Resolved
- **GitHub Pages Asset Loading**: Initial deployment had asset path issues due to incorrect Vite configuration
- **Solution**: Implemented proper asset handling and cache busting techniques

#### Current Project Status
- ✅ Core website structure complete
- ✅ All main components implemented
- ✅ Responsive design implemented
- ✅ Smooth animations working
- ✅ GitHub Pages deployment functional

#### Next Steps
- SEO optimization
- Favicon implementation
- Performance optimization
- Content refinement

---

### Session 2: SEO Optimization & Favicon Implementation (2025-01-07)
**Date**: 2025-01-07  
**Duration**: Multiple hours  
**Status**: ✅ COMPLETED

#### What We Accomplished
- **SEO Enhancement**: Added comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Favicon Implementation**: Added BAI Emblem as browser tab icon
- **Search Engine Setup**: Configured Google Search Console and submitted sitemap
- **Performance Optimization**: Implemented cache busting and asset optimization

#### Technical Changes Made
- **Files Modified**:
  - `index.html` - Added comprehensive SEO meta tags, favicon links, and structured data
  - `public/robots.txt` - Created for search engine crawling
  - `public/sitemap.xml` - Created for search engine discovery

- **SEO Features Added**:
  - Primary meta tags (title, description, keywords)
  - Open Graph tags for social media sharing
  - Twitter Card meta tags
  - Structured data (JSON-LD) for rich snippets
  - Canonical URL
  - Theme color and mobile optimization

- **Favicon Implementation**:
  - Multiple favicon formats (PNG, ICO)
  - Various sizes for different devices
  - Apple touch icon support
  - JavaScript fallback for forced loading

#### Issues Encountered & Resolved
- **Sitemap Issues**: Initial sitemap submission failed with "Couldn't fetch" errors
- **Solution**: Moved sitemap to root directory, then removed completely to resolve site loading issues

- **Favicon Not Displaying**: Persistent issues with favicon visibility
- **Solution**: Implemented comprehensive favicon solution with multiple formats and JavaScript fallback

- **Site Breaking**: Moving sitemap to root caused MIME type errors
- **Solution**: Removed problematic sitemap files to restore site functionality

#### Current Project Status
- ✅ SEO optimization complete
- ✅ Favicon implementation complete
- ✅ Google Search Console configured
- ✅ Site functionality restored after sitemap issues
- ✅ Comprehensive meta tags implemented

#### Next Steps
- Monitor SEO performance
- Content updates as needed
- Performance monitoring
- User experience improvements

---

### Session 3: Project Cleanup & Development Logging (2025-01-07)
**Date**: 2025-01-07  
**Duration**: 1 hour  
**Status**: ✅ COMPLETED

#### What We Accomplished
- **Project Cleanup**: Removed all unused files and components
- **Development Logging**: Created comprehensive development log system
- **Code Optimization**: Streamlined project structure

#### Technical Changes Made
- **Files Deleted**:
  - `src/components/Connecting.tsx` - Unused component
  - `src/components/InvestmentApproach.tsx` - Unused component
  - `src/components/ui-custom/Button.tsx` - Unused custom button
  - `public/redirect.js` - Functionality embedded in index.html
  - `public/test.html` - Temporary test file
  - `cursor_build_a_website_like_citadels_fo.md` - Large unused documentation
  - `src/components/ui-custom/` - Empty directory removed

- **Files Created**:
  - `DEVELOPMENT_LOG.md` - Comprehensive development tracking

#### Current Project Status
- ✅ Project cleaned of unused files
- ✅ Development logging system established
- ✅ Streamlined codebase
- ✅ All functionality preserved

#### Next Steps
- Continue development logging for future sessions
- Monitor site performance and SEO
- Plan future enhancements

---

## Technical Architecture

### Frontend Framework
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling and responsive design

### Component Structure
- **Main Components**: Header, Hero, Manifesto, Technology Platform, About, Community, Footer
- **Utility Components**: FadeIn animations, UI components from shadcn/ui
- **Pages**: Index (main), NotFound (404)

### Styling & Design
- **Design System**: Professional, institutional aesthetic
- **Color Scheme**: Dark theme with light accents
- **Typography**: Inter font family
- **Animations**: Scroll-triggered fade-in effects

### Build & Deployment
- **Build Tool**: Vite with TypeScript compilation
- **Hosting**: GitHub Pages
- **Domain**: baifunds.com (custom domain)
- **Deployment**: Automated via GitHub Actions

## SEO Implementation

### Meta Tags
- **Title**: "BAI - Behavioral Alpha Investments | AI-Powered Trading Against Human Behavioral Errors"
- **Description**: Comprehensive description of BAI's AI-powered trading approach
- **Keywords**: BAI, Behavioral Alpha Investments, BAI funds, behavioral finance, AI trading

### Social Media
- **Open Graph**: Facebook, LinkedIn sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Images**: og-image.png for social media previews

### Search Engine
- **Google Search Console**: Configured and verified
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD for rich snippets

## Known Issues & Limitations

### Resolved Issues
- ✅ GitHub Pages asset loading (fixed with proper Vite config)
- ✅ Sitemap MIME type errors (resolved by removing problematic files)
- ✅ Favicon display issues (resolved with comprehensive implementation)

### Current Status
- **Site Functionality**: ✅ Fully operational
- **SEO Implementation**: ✅ Complete
- **Favicon**: ✅ Working across browsers
- **Performance**: ✅ Optimized

## Future Development Goals

### Short Term (Next 2-4 weeks)
- Monitor SEO performance metrics
- Gather user feedback and analytics
- Content updates and refinements

### Medium Term (Next 2-3 months)
- Performance optimization and monitoring
- A/B testing for conversion optimization
- Enhanced analytics and tracking

### Long Term (Next 6-12 months)
- Content management system implementation
- Advanced user interaction features
- Multi-language support if needed

## Development Notes

### Best Practices Implemented
- **Component Architecture**: Modular, reusable components
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized animations and asset loading
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: Proper semantic HTML and ARIA labels

### Technical Decisions
- **Vite over Create React App**: Faster development and build times
- **Tailwind CSS**: Utility-first approach for rapid development
- **GitHub Pages**: Free hosting with custom domain support
- **SPA Routing**: Single page application with React Router

### Maintenance Considerations
- **Regular Updates**: Keep dependencies updated
- **Performance Monitoring**: Track Core Web Vitals
- **SEO Monitoring**: Regular Google Search Console review
- **Backup Strategy**: GitHub repository serves as backup

---

**Last Updated**: 2025-01-19  
**Next Review**: 2025-01-26  
**Status**: 🚀 ACTIVE DEVELOPMENT 

### Session — 2025-09-23

- Summary:
  - Fixed background line bleed-through comprehensively. Kept cards opaque, removed section-wide masks, and finally placed the pulse layer behind all content for guaranteed occlusion.
  - Standardized feature cards to fully opaque across sections (Manifesto, Gap, TechnologyPlatform, Community, Team).
  - Introduced and later removed `.occlude-pulse` after testing; settled on simpler layering with opaque cards and pulse at lowest z.
  - Tightened footer spacing.
  - Limited concurrent background lines from 10 → 6.
  - Updated team roles to concise one-liners and enhanced bios with role responsibilities.

- Layering & Visuals:
  - Set `.pulse-layer` z-index to 0 (behind all content) in `src/index.css`.
  - Removed `.occlude-pulse` utility and all usages from grids/panels.
  - Kept per-card opacity via explicit `backgroundColor: hsl(var(--card))` and card classes.

- Opaque Feature Cards:
  - Manifesto: replaced translucent backgrounds; grid cards use solid brand icon squares; feature tiles `bg-card`.
  - Gap: strategies and infra tiles opaque; removed hover translucency.
  - TechnologyPlatform: capability cards and Core Systems tiles opaque; removed group translucency.
  - Community: contact card opaque.
  - Team: each card individually opaque; equalized heights; truncated long names/roles.

- Animated Background:
  - BackgroundChart: `mixBlendMode: normal`; maxConcurrentLines = 6.

- Content Updates:
  - Team titles: Head of Investments; Head of Systems Engineering; Head of Partnerships; Head of Capital Markets.
  - Team bios: appended clear responsibility sentences; preserved existing facts and tone.

- Spacing:
  - Footer: `py-8 md:py-12`, inner `pt-4 md:pt-6`.

- Files modified:
  - `src/index.css`
  - `src/components/Manifesto.tsx`
  - `src/components/Gap.tsx`
  - `src/components/TechnologyPlatform.tsx`
  - `src/components/Community.tsx`
  - `src/components/FoundersInSearch.tsx`
  - `src/components/BackgroundChart.tsx`
  - `src/components/Footer.tsx`
  - `src/components/About.tsx`

- Issues resolved:
  - Background line bleed-through over cards; fixed via layering and opacity.
  - Inconsistent card heights; fixed with layout tweaks and truncation.

- Team modal & logos:
  - Reworked team cards to open details in a centered modal (no downward expansion). Kept card name/title sizes unchanged.
  - Modal background set to white for clean logo rendering.
  - Added degree line under role; stacked school logos under portrait.
  - Mapped logos: Peter → Ivey; Muhammad → Waterloo; Josephina → Waterloo + Laurier; Frank → Huron. Normalized logo widths to match portrait (w-36, auto height).
  - Tightened modal typography spacing for name/role/degree; left-aligned descriptions; names/titles centered on cards.

- Metrics updates:
  - About → Key Metrics: Founded 2025, Trade win rate 93.3%, Avg return/trade +5.30%, Avg holding period 4 days.
  - Team → Metrics tiles: $13B+ AUM experience, 10 sectors worked (collective), 4 research publications (YTD), 3 universities represented.

- Deployment notes:
  - `vite.config.ts` target verified as 'es2020'.
  - Safe to deploy to GitHub Pages.

### Session — 2025-09-23 (Mobile QA and fixes)

- What we accomplished:
  - Ran dual dev instances for side‑by‑side desktop/mobile QA; stabilized on a single dev server at `http://localhost:5173/` due to Windows shell piping issues.
  - Verified Vite dev HMR availability via `/@vite/client` and resolved initial 404 by restarting server cleanly.
  - Implemented core mobile fixes across hero, header, grids, and typography.
- Technical changes:
  - `src/components/Hero.tsx`:
    - Replace `h-screen` with safe viewport unit `h-[100svh]` for mobile browsers.
    - Add `hero-hide-background` marker on hero section to ensure background layers stay hidden over the video.
    - Add `poster` and `preload="metadata"` to video for better mobile performance and fallback.
  - `src/index.css`:
    - Add `overflow-x-hidden` on `body` to prevent horizontal scroll on small screens.
  - `src/components/Header.tsx`:
    - Lock background scroll when mobile menu is open by toggling `overflow-hidden` on `<body>`.
  - `src/components/FoundersInSearch.tsx`:
    - Make grid 1‑col on xs, 2‑col on sm; reduce avatar sizes on small screens; adjust gaps and padding.
  - `src/components/About.tsx`:
    - Tighten metrics grid gaps on mobile and scale down numeric display sizes.
  - `src/components/TechnologyPlatform.tsx`:
    - Add responsive padding, reduce icon size on mobile, and scale headings/body for readability.
  - `src/components/Gap.tsx`:
    - Reduce padding/gaps for infra grid on small screens; responsive headings.
- Files modified:
  - `src/components/Hero.tsx`
  - `src/components/Header.tsx`
  - `src/components/FoundersInSearch.tsx`
  - `src/components/About.tsx`
  - `src/components/TechnologyPlatform.tsx`
  - `src/components/Gap.tsx`
  - `src/index.css`
- Issues encountered:
  - Windows PowerShell `| cat` caused errors; avoided piping and ran Vite directly.
  - Initial 404s from dev server due to process lifecycle; resolved with clean foreground/background starts.
- Current status:
  - Dev server running at `http://localhost:5173/` with HMR; mobile emulation works via Chrome device toolbar.
  - Sections render without horizontal overflow; hero fills safe viewport on iOS/Android.
- Next steps:
  - Full click‑through QA of mobile menu links and anchor offsets across breakpoints.
  - Verify GitHub Pages deploy still uses `target: 'es2020'` (vite.config.ts already compliant).

### Deployment — 2025-09-23 (Mobile polish)

- Changes included:
  - Mobile hero height fix (100svh), overflow-x prevention.
  - Header mobile menu: solid slide-over with overlay, logo, single close.
  - Team modal: restored stable sizing with scrollable content; explicit Learn More/Close text.
  - Grid/spacing tweaks across `FoundersInSearch`, `About`, `TechnologyPlatform`, `Gap`.
- Files modified:
  - `src/components/Hero.tsx`, `src/index.css`, `src/components/Header.tsx`, `src/components/FoundersInSearch.tsx`, `src/components/About.tsx`, `src/components/TechnologyPlatform.tsx`, `src/components/Gap.tsx`.
- Deployment status:
  - `vite.config.ts` target confirmed `'es2020'`.
  - Pushing to `main` to trigger GitHub Pages deploy.

### Update — 2025-09-23 (Team profiles, footer anchors, and dev-only testing)

- Changes (dev and prod-safe UI polish):
  - Team section: larger portraits, two-line clamp on name/role, founders listed first.
  - Role titles shortened and normalized to hedge-fund style.
  - Education lines normalized with short forms (Ivey/Western, Waterloo, Laurier, UC Davis, USTC).
  - Metrics updated: Universities Represented → 5; Sectors Worked (Collective) → 10.
  - Footer anchors now use the same precise header-offset scrolling as top navigation.
  - Modal logos sized to match portrait width across breakpoints.
- Dev-only (not visible in production):
  - Added Zilong Bai test profile with UC Davis and USTC logos; profile currently hidden from render.
  - Local-only copy adjustments for advisory language.
- Notes:
  - No changes to `vite.config.ts` target; remains 'es2020'.
  - Ready to deploy; cache-busting handled by Vite asset hashes.

---

### Session — 2025-11-25 (Brand asset refresh for Sequence Markets pivot)
**Date**: 2025-11-25  
**Timestamp**: 2025-11-25T17:07:01Z  
**Status**: ✅ COMPLETED

#### What We Accomplished
- Swapped all visible branding (header, footer, About metrics badge) to the new Sequence Markets wordmark.
- Added high-resolution favicon variants (16px, 32px PNGs + regenerated ICO) sourced from the new identity.
- Archived every legacy BAI emblem/wordmark inside `public/assets/deprecated/` for historical reference.

#### Technical Changes Made
- Added `public/assets/logo-light.png`, `public/favicon-16x16.png`, `public/favicon-32x32.png`, and regenerated `public/favicon.ico`.
- Moved `public/assets/850bdd41-….png`, `public/assets/BAI Emblem.png`, and the prior `public/favicon.ico` into `public/assets/deprecated/`.
- Updated `<head>` icon links, structured data logo URL, and favicon cache-busting script inside `index.html`.
- Pointed `Header.tsx`, `Footer.tsx`, and `About.tsx` image references at the new `/assets/logo-light.png` asset.

#### Files Modified
- `index.html`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/About.tsx`
- `public/assets/logo-light.png`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/favicon.ico`
- `public/assets/deprecated/850bdd41-…png`
- `public/assets/deprecated/BAI Emblem.png`
- `public/assets/deprecated/favicon.ico`

#### Issues Encountered & Resolved
- Initial `git push` via HTTPS failed (missing credentials); switched the remote to SSH and retried successfully.
- Verified `vite.config.ts` still targets `'es2020'` to avoid GitHub Pages MIME regressions—no change required.

#### Current Project Status
- ✅ Sequence Markets logo & favicons fully wired through the site.
- ✅ Prior BAI visuals retained for historical/audit purposes only.
- ✅ Icon stack ready for upcoming copy/imagery refresh work.

#### Next Steps
- Refresh site copy, hero assets, and SEO metadata to match the Sequence Markets positioning.
- Regenerate `og-image.png` with the new branding before the next deployment.
- Continue documenting all pivot-related changes in this log.