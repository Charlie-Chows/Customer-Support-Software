# AGENTS.md

# PROJECT DEVELOPMENT RULES

## 1. PROJECT OVERVIEW

This is a multi-page responsive website built using:

* HTML5
* CSS3
* Vanilla JavaScript
* GSAP
* GSAP ScrollTrigger

The website contains:

* Landing pages
* About page
* Services page
* Blog page
* Contact page
* Authentication pages
* User dashboard
* Admin dashboard
* 404 page

The website should feel:

* Modern
* Premium
* Responsive
* Interactive
* Visually polished
* Smooth
* Consistent
* Fast

The website is being developed using AI-assisted coding.

Therefore, these instructions are the project's **source of truth**.

Before implementing or modifying anything, read this file and follow its rules.

---

# 1.1 PRODUCT THEME

## Industry

Customer Support Software / Customer Service SaaS

The website represents a modern customer support software platform designed to help businesses manage customer conversations, tickets, support agents, automation, analytics, and customer relationships.

The overall visual direction must communicate:

* Trust
* Reliability
* Speed
* Simplicity
* Intelligence
* Professionalism
* Human-centered customer service
* Modern SaaS technology

---

## VISUAL DIRECTION

The website should feel like a premium modern SaaS product.

Use visual inspiration from modern SaaS products such as:

* Intercom
* Zendesk
* Linear
* HubSpot
* Freshdesk

Do NOT directly copy any company's design, branding, illustrations, layout, or proprietary assets.

Use these only as general references for visual quality and product category.

---

## DESIGN CHARACTER

The design should be:

* Clean
* Modern
* Premium
* Friendly
* Professional
* Spacious
* Minimal but visually interesting
* Product-focused

Avoid making the website look:

* Generic corporate
* Old-fashioned enterprise software
* Overly colorful
* Visually cluttered
* Like a generic AI-generated SaaS template

---

## CUSTOMER SUPPORT VISUAL LANGUAGE

Where appropriate, use visual concepts related to customer support:

* Customer conversations
* Support tickets
* Chat interfaces
* Agent dashboards
* Customer profiles
* Inbox interfaces
* Notifications
* Analytics
* Automation
* AI assistance
* Knowledge bases
* Customer satisfaction
* Support teams
* Response time
* Ticket resolution
* Customer feedback

These concepts should appear naturally in the design.

Do not force customer-support imagery into every section.

---

## HERO DIRECTION

The Home page hero should immediately communicate:

1. What the customer support platform does.
2. Who it is for.
3. Why it is useful.
4. A clear CTA.

The hero should feel product-focused.

Prefer showing:

* Product dashboard
* Support inbox
* Conversation interface
* Agent workspace
* Customer support analytics
* Chat/support UI

rather than generic stock photography.

---

## IMAGERY

Prefer imagery that visually communicates:

* Customer support teams
* Customer conversations
* SaaS dashboards
* Support agents
* Chat interfaces
* Product UI
* Analytics
* Customer success

When using online images, choose high-quality, modern images that match the section's purpose.

Avoid generic corporate stock photos unless they genuinely fit the section.

Product/UI mockups are preferred where appropriate.

---

## UI DESIGN

Use modern SaaS UI patterns:

* Rounded cards
* Clean dashboards
* Subtle borders
* Soft shadows
* Clear buttons
* Status badges
* Statistics cards
* Chat bubbles
* Ticket cards
* Tables
* Charts
* Notifications
* Avatars
* Progress indicators

Do not overuse rounded cards.

Use hierarchy and whitespace to keep the interface clean.

---

## DASHBOARD DESIGN

The User and Admin dashboards must feel like real customer-support software.

### User Dashboard

Focus on:

* Personal support activity
* Tickets
* Conversations
* Customer interactions
* Personal analytics
* Notifications
* Profile/settings

### Admin Dashboard

Focus on:

* Team performance
* Support volume
* Ticket analytics
* Agent performance
* Customer satisfaction
* Response times
* Resolution rates
* User/agent management
* System-level analytics

The exact functionality should follow the supplied requirements.

---

## ANIMATION DIRECTION

Animations should communicate:

* Speed
* Smoothness
* Responsiveness
* Product quality

Use:

* Directional text reveals
* Product screenshot reveals
* Dashboard card stagger
* Subtle floating UI
* Chat/message animations
* Chart animation
* Notification animation
* Hover interactions
* ScrollTrigger-based section reveals

Animations should remain subtle and professional.

Avoid cartoonish or excessive motion.

---

## COLOR DIRECTION

The final color palette will be provided separately.

Until the actual brand colors are provided:

* Keep the palette restrained.
* Use a strong primary brand color.
* Use neutral backgrounds.
* Use high-contrast text.
* Use subtle borders.
* Use accent colors for important states and CTAs.

Do not randomly introduce multiple unrelated colors.

Once brand colors are provided, treat them as the source of truth.

---

## TYPOGRAPHY

Typography should feel modern and SaaS-oriented.

Prioritize:

* Strong hero headline
* Clear section hierarchy
* Readable body text
* Short paragraphs
* Clear CTA text
* Good line height
* Generous whitespace

Avoid excessively decorative fonts unless explicitly requested.

---

## CONTENT STYLE

Content should sound:

* Clear
* Helpful
* Confident
* Human
* Professional

Avoid excessive technical jargon.

Prefer benefit-oriented messaging.

Example direction:

Instead of:

"Advanced omnichannel ticket orchestration infrastructure."

Prefer:

"Bring every customer conversation into one place."

Use this style as a general direction, not as mandatory copy.

---

## PRODUCT-FIRST DESIGN

When choosing between a generic illustration and a product UI visualization, prefer the product visualization when it helps communicate the product.

The website should make visitors understand the software visually.

The product should feel tangible through:

* UI mockups
* Dashboard previews
* Chat interfaces
* Ticket interfaces
* Analytics
* Interactive cards
* Support workflows

---

## FINAL VISUAL GOAL

The finished website should feel like a serious, modern customer-support SaaS company that could realistically launch and sell the product.

It should communicate:

**"This software helps our support team work faster and gives our customers a better experience."**


# 2. TECH STACK

Use only:

* HTML5
* CSS3
* Vanilla JavaScript
* GSAP
* GSAP ScrollTrigger

Do NOT introduce:

* React
* Vue
* Angular
* Next.js
* Tailwind CSS
* Bootstrap
* jQuery
* Other frontend frameworks

Do not introduce additional libraries unless explicitly requested.

Use:

* CSS for simple transitions and hover effects.
* JavaScript for interactions.
* GSAP for advanced animations.
* GSAP ScrollTrigger for scroll-based animations.

---

# 3. CURRENT PROJECT STRUCTURE

The existing project structure is:

```text
PROJECT ROOT
│
├── AGENTS.md
├── global.css
├── index.css
├── index.html
├── logo_trimmed.webp
│
├── assets/
│
├── css/
│   ├── about.css
│   ├── blog.css
│   ├── common.css
│   ├── contact.css
│   ├── login.css
│   ├── services.css
│   └── signup.css
│
├── html/
│   ├── about.html
│   ├── admin.html
│   ├── blog.html
│   ├── common.html
│   ├── contact.html
│   ├── login.html
│   ├── services.html
│   ├── signup.html
│   └── user.html
│
└── js/
    ├── about.js
    ├── blog.js
    ├── common.js
    ├── contact.js
    ├── login.js
    ├── services.js
    └── signup.js
```

Do not restructure the project unless explicitly instructed.

Do not rename existing files unnecessarily.

Do not move files simply for stylistic reasons.

---

# 4. FILE RESPONSIBILITIES

## Root

### AGENTS.md

Contains the development rules and requirements for AI-assisted development.

### global.css

Contains global styles that apply across the project.

Examples:

* CSS reset
* Global typography
* Root variables
* Global colors
* Body styles
* Global utility styles

Do not place page-specific styling here.

### index.css

Contains styling specific to:

```text
index.html
```

### index.html

Home page.

---

# 5. CSS STRUCTURE

The `css/` directory contains page-specific styles.

```text
css/
├── about.css
├── blog.css
├── common.css
├── contact.css
├── login.css
├── services.css
└── signup.css
```

## common.css

This is extremely important.

`common.css` contains styles for shared website components.

Examples:

* Header
* Navigation
* Footer
* Hamburger menu
* Common buttons
* Common containers
* Common typography
* Common utility classes
* Shared animations
* Shared responsive styles

Do not duplicate common styles inside individual page CSS files.

If a style is used by multiple pages, consider moving it to `common.css`.

## Page CSS

Each page should primarily contain its own page-specific styling.

Example:

```text
about.html → about.css
blog.html → blog.css
contact.html → contact.css
login.html → login.css
services.html → services.css
signup.html → signup.css
```

Avoid putting page-specific styles into `common.css`.

---

# 6. JAVASCRIPT STRUCTURE

The `js/` directory contains page-specific JavaScript.

```text
js/
├── about.js
├── blog.js
├── common.js
├── contact.js
├── login.js
├── services.js
└── signup.js
```

## common.js

Contains shared functionality.

Examples:

* Header behavior
* Hamburger menu
* Navigation behavior
* Footer behavior
* Common animations
* Shared GSAP utilities
* Shared ScrollTrigger utilities
* Shared UI interactions

Do not duplicate shared functionality across page JS files.

## Page JavaScript

Each page should use its corresponding JS file.

Examples:

```text
about.html → about.js
blog.html → blog.js
contact.html → contact.js
login.html → login.js
services.html → services.js
signup.html → signup.js
```

---

# 7. COMMON HEADER

The header is a **global shared component**.

The header must remain consistent across all public pages unless a specific page explicitly requires a different header.

The header should be implemented/maintained through:

```text
html/common.html
css/common.css
js/common.js
```

The header should include the appropriate navigation links.

Do not create separate versions of the header for every page.

Do not copy/paste the same header implementation unnecessarily.

---

# 8. COMMON FOOTER

The footer is also a **global shared component**.

The footer must remain consistent across public pages.

Use:

```text
html/common.html
css/common.css
js/common.js
```

where appropriate.

Do not create different footer implementations for every page unless explicitly instructed.

---

# 9. HAMBURGER MENU

The website must have a responsive hamburger menu.

The hamburger menu belongs to the common/shared implementation.

Use:

```text
html/common.html
css/common.css
js/common.js
```

The hamburger menu should:

* Appear at the appropriate responsive breakpoint.
* Open smoothly.
* Close smoothly.
* Show all required navigation items.
* Close when a navigation item is selected.
* Prevent unwanted background scrolling when appropriate.
* Have an accessible button label.
* Have visible active/open states.

Use CSS/GSAP for smooth animation.

The hamburger menu should NOT be separately implemented on every page.

---

# 10. COMMON COMPONENT RULE

Before creating any component/UI pattern, check whether it already exists in the common implementation.

Common components include:

* Header
* Navigation
* Hamburger menu
* Footer
* Buttons
* Containers
* Section headings
* Common cards
* Common animation patterns

If an existing component can be reused, reuse it.

Do not duplicate it.

---

# 11. PAGE STRUCTURE

The website contains the following pages.

## Home

```text
index.html
```

10 sections.

## About

```text
html/about.html
```

8 sections.

## Services

```text
html/services.html
```

8 sections.

## Blog

```text
html/blog.html
```

8 sections.

## Contact

```text
html/contact.html
```

8 sections.

## 404

```text
404.html
```

2 main buttons.

## Login

```text
html/login.html
```

## Signup

```text
html/signup.html
```

## User Dashboard

```text
html/user.html
```

## Admin Dashboard

```text
html/admin.html
```

---

# 12. HOME PAGE

File:

```text
index.html
```

The Home page must contain exactly:

**10 major sections.**

The exact content, text, images, and layout will be provided separately.

Do not invent major sections.

Every section must:

* Be responsive.
* Follow the project's design system.
* Use appropriate animations.
* Maintain consistent spacing.
* Reuse common UI patterns.
* Avoid unnecessary duplicated markup.

---

# 13. ABOUT PAGE

File:

```text
html/about.html
```

Must contain:

**8 major sections.**

Follow the supplied design/content.

Do not add additional major sections unless explicitly instructed.

---

# 14. SERVICES PAGE

File:

```text
html/services.html
```

Must contain:

**8 major sections.**

Use reusable patterns for service cards, feature blocks, CTAs, etc.

Do not duplicate identical HTML unnecessarily.

---

# 15. BLOG PAGE

File:

```text
html/blog.html
```

Must contain:

**8 major sections.**

Use reusable blog card patterns.

Possible UI:

* Featured article
* Blog cards
* Categories
* Article previews
* Author information
* CTA
* Newsletter section

Do not build a backend/CMS unless explicitly requested.

---

# 16. CONTACT PAGE

File:

```text
html/contact.html
```

Must contain:

**8 major sections.**

Possible sections include:

* Contact information
* Contact form
* Location
* FAQ
* Social links
* CTA
* Supporting information

Contact form should have basic frontend validation.

No backend is required unless explicitly instructed.

---

# 17. 404 PAGE

The 404 page must contain:

* Error/404 message
* Supporting text
* Back to Home button
* Go Back button

## Back to Home

Redirect to:

```text
index.html
```

## Go Back

Use:

```javascript
history.back();
```

If there is no usable browser history, redirect to:

```text
index.html
```

The page should have polished animation and responsive design.

---

# 18. LOGIN PAGE

File:

```text
html/login.html
```

The Login page must contain:

* Logo
* Email
* Password
* Role selector
* Login button
* Forgot Password
* Two social login buttons
* Create Account

---

# 19. LOGIN ROLE DROPDOWN

The role selector must be a custom dropdown.

Do NOT use the default:

```html
<select>
```

Use HTML elements such as:

```html
<button>
<div>
<span>
```

Available roles:

```text
User
Admin
```

The dropdown must:

* Open/close correctly.
* Show the selected role.
* Close when clicking outside.
* Have hover states.
* Have active states.
* Be responsive.
* Be keyboard accessible where practical.

---

# 20. LOGIN BEHAVIOR

Basic validation is required.

Validate:

* Email is not empty.
* Email format is valid.
* Password is not empty.
* Role is selected.

After successful validation:

### User

Redirect to:

```text
html/user.html
```

### Admin

Redirect to:

```text
html/admin.html
```

No real backend authentication is required.

Use frontend/local state where required.

---

# 21. USERNAME DISPLAY

When a user logs in, the dashboard should display:

```text
Hello Sujith
```

if the email is:

```text
sujith@gmail.com
```

The username should be derived from the email before:

```text
@
```

Examples:

```text
sujith@gmail.com
→ Hello Sujith
```

```text
john.doe@gmail.com
→ Hello John Doe
```

Store the required login information using an appropriate frontend mechanism such as:

```text
localStorage
```

if required to preserve the information between pages.

---

# 22. LOGIN REDIRECTS

### Forgot Password

Redirect to:

```text
404.html
```

### Social Login Button 1

Redirect to:

```text
404.html
```

### Social Login Button 2

Redirect to:

```text
404.html
```

### Create Account

Redirect to:

```text
html/signup.html
```

---

# 23. SIGNUP PAGE

File:

```text
html/signup.html
```

Must contain:

* Logo / brand name
* Email
* Password
* Confirm Password
* Role selector
* Sign Up button

Use the same custom role dropdown pattern as Login.

Validation:

* Required fields
* Email format
* Password requirement
* Confirm password
* Password matching
* Role selection

After successful signup:

```text
html/login.html
```

No backend account creation is required unless explicitly requested.

---

# 24. USER DASHBOARD

File:

```text
html/user.html
```

The User Dashboard must be visually unique.

It must contain:

* Sidebar
* Header/dashboard top area
* Main content
* 4–5 sidebar items
* Logout button at bottom

Example:

```text
Dashboard
Profile
Activity
Reports
Settings

----------------
Logout
```

These are examples and may be changed based on the supplied requirements.

---

# 25. ADMIN DASHBOARD

File:

```text
html/admin.html
```

The Admin Dashboard must NOT simply be a copy of the User Dashboard.

It must have a distinctly different:

* Layout
* Visual hierarchy
* Data presentation
* Navigation feel
* Dashboard design
* Chart/statistics treatment

It must contain:

* Sidebar
* Header/dashboard top area
* Main content
* 4–5 sidebar items
* Logout button at bottom

Example:

```text
Overview
Users
Analytics
Content
Settings

----------------
Logout
```

---

# 26. DASHBOARD SIDEBAR

Each dashboard has one sidebar.

Sidebar items should switch the corresponding dashboard content/view.

Each sidebar view should contain approximately:

**4–5 meaningful sections/components.**

The exact structure should be based on the supplied dashboard requirements.

The active sidebar item must be visually obvious.

Use smooth transitions when switching dashboard views.

Avoid unnecessary page reloads.

---

# 27. USER VS ADMIN DESIGN

The User and Admin dashboards must feel like two different products.

Do not:

```text
Copy User Dashboard
↓
Change title
↓
Call it Admin Dashboard
```

Instead create meaningful design differences.

Examples:

### User

Focus on:

* Personal activity
* Personal statistics
* Profile
* Tasks
* Personal reports

### Admin

Focus on:

* Users
* Analytics
* System statistics
* Content management
* Overall performance

These are examples only and should follow the supplied requirements.

---

# 28. LOGOUT

Logout must:

1. Clear frontend login/session information.
2. Redirect to:

```text
index.html
```

This must work from both:

```text
user.html
admin.html
```

---

# 29. CHARTS & GRAPHS

Dashboards should contain sleek graphs/charts.

Use:

* HTML/CSS
* SVG
* Canvas
* GSAP

Do not add a chart library unless explicitly requested.

Possible charts:

* Line chart
* Bar chart
* Donut chart
* Progress chart
* Statistics cards

Charts should have:

* Smooth entrance animations
* Responsive layout
* Clear labels
* Good spacing
* Hover interactions where appropriate
* Modern visual styling

---

# 30. ONLINE IMAGES / ASSETS

Images may be pulled from the internet.

When an image is required and no local image is provided:

* Use a suitable online image.
* Choose high-quality images relevant to the section.
* Prefer stable direct image URLs.
* Use appropriate image dimensions/aspect ratios.
* Do not use random unrelated images.
* Do not use visibly watermarked images.
* Do not use copyrighted brand assets unless provided or explicitly authorized.
* Prefer free/publicly usable image sources where possible.

Use descriptive `alt` text.

Do not download or duplicate online images into the project unless explicitly requested.

The existing:

```text
logo_trimmed.webp
```

should be reused wherever the project requires the existing logo.

Do not replace the logo with an online image unless explicitly instructed.

---

# 31. IMAGE OPTIMIZATION

Large online images should not unnecessarily slow down the website.

Use:

* Appropriate image dimensions
* `loading="lazy"` for below-the-fold images where appropriate
* `width` and `height` attributes when practical
* Modern image formats when local assets are used

Hero images can use eager loading when appropriate because they are above the fold.

---

# 32. IMAGE ALT TEXT

Images must have meaningful alt text.

Example:

```html
<img
    src="..."
    alt="Team collaborating in a modern office"
/>
```

Decorative images should use:

```html
alt=""
```

when appropriate.

Do not use meaningless alt text such as:

```text
image
photo
picture
img1
```

---

# 33. ANIMATION SYSTEM

Animation is a major part of the design.

Animations should feel:

* Premium
* Smooth
* Modern
* Interactive
* Intentional

Do not animate every element.

Animation should improve the visual hierarchy.

---

# 34. TEXT ANIMATIONS

Text should enter from different directions depending on the section.

Possible directions:

```text
Left → Center
Right → Center
Top → Center
Bottom → Center
```

For example:

```text
Heading
↓
from top

Description
←
from left

CTA
↑
from bottom

Supporting text
→
from right
```

Do not use the same entrance animation for every section.

Choose directions based on the layout.

Recommended text effects:

* Fade + slide
* Line reveal
* Word reveal
* Mask reveal
* Fade + blur
* Scale + fade

Use word/character animation mainly for hero headings.

---

# 35. IMAGE ANIMATIONS

Images can use:

### Entrance

* Slide from left
* Slide from right
* Slide from top
* Slide from bottom
* Fade + scale
* Mask reveal
* Subtle zoom

### Hover

* Jumpy hover
* Slight scale
* Slight lift
* Subtle rotation
* Border animation
* Shadow transition
* Overlay reveal

Do not combine every animation effect on every image.

---

# 36. JUMPY HOVER EFFECT

Selected images/cards can have a subtle jump effect.

Example:

```text
Hover
↓
translateY(-4px)
↓
small bounce
↓
return
```

Keep it subtle.

---

# 37. FLOATING ANIMATION

Selected decorative elements/images can continuously float.

Example:

```text
Y: 0 → -10px → 0

Duration:
3–6 seconds

Ease:
ease-in-out
```

Do not apply continuous floating to:

* Important text
* Main navigation
* Primary forms
* Important buttons

---

# 38. HOVER BORDER ANIMATION

Selected cards and interactive images can have animated borders.

Possible effects:

* Border reveal
* Gradient movement
* Border glow
* Outline sweep
* Border color transition

Use selectively.

---

# 39. GSAP SCROLLTRIGGER

Use:

```text
GSAP
+
ScrollTrigger
```

for advanced scroll animations.

Possible animations:

* Section reveals
* Directional text entrance
* Image entrance
* Staggered cards
* Parallax
* Image scale
* Layered movement
* Horizontal movement
* Pinned sections where appropriate

Do not use ScrollTrigger on every element.

---

# 40. STAGGER ANIMATION

For multiple related elements:

```text
Item 1 → 0ms
Item 2 → 100ms
Item 3 → 200ms
Item 4 → 300ms
```

Recommended stagger:

```text
50–150ms
```

Keep sequences fast and smooth.

---

# 41. ANIMATION TIMING

Recommended starting values:

```text
Micro interaction:
150–300ms

Hover:
200–400ms

Standard entrance:
500–800ms

Hero:
600–1200ms

Stagger:
50–150ms

Floating:
3–6 seconds
```

Adjust based on the design.

---

# 42. ANIMATION EASING

Preferred GSAP eases:

```text
power2.out
power3.out
power4.out
```

For playful effects:

```text
back.out
```

Use elastic/bouncy effects sparingly.

---

# 43. HERO ANIMATION

The Home page hero should receive strong animation treatment.

Example:

```text
Navbar
↓
fade in

Small label
↓
fade/slide

Hero heading
↓
line/word reveal

Description
↓
slide from left

CTA
↓
slide from bottom

Hero image
↓
slide from right + fade + scale

Decorative images
↓
floating animation
```

Keep the sequence coordinated.

---

# 44. SECTION ANIMATION VARIATION

Avoid:

```text
Every section:
fade-up everything
```

Prefer variation:

```text
Section 1:
Text ←
Image →

Section 2:
Heading ↓
Cards ↑

Section 3:
Image ←
Text →

Section 4:
Cards stagger ↑

Section 5:
Image →
Text ←

Section 6:
Scale + fade

Section 7:
Staggered cards

Section 8:
Image ←
Text →

Section 9:
CTA scale + fade

Section 10:
Final reveal
```

This is a visual guideline, not a rigid requirement.

Choose animations based on the actual design.

---

# 45. RESPONSIVE DESIGN

Every page must work on:

* Desktop
* Tablet
* Mobile

Check:

* Header
* Hamburger menu
* Navigation
* Typography
* Images
* Cards
* Buttons
* Forms
* Grids
* Dashboards
* Sidebars
* Charts
* Animations

No horizontal overflow.

---

# 46. MOBILE HAMBURGER

On mobile:

* Hide desktop navigation.
* Show hamburger button.
* Open navigation smoothly.
* Close navigation smoothly.
* Ensure links are easy to tap.
* Prevent accidental overflow.
* Close menu after navigation where appropriate.

---

# 47. ACCESSIBILITY

Use semantic HTML.

Use:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Interactive elements must be keyboard accessible.

Forms must have labels.

Buttons must have understandable text.

Images need appropriate alt text.

Custom dropdowns should support keyboard interaction where practical.

Respect reduced motion.

---

# 48. REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

* Reduce/remove non-essential animations.
* Disable excessive parallax.
* Disable continuous floating where appropriate.
* Keep important transitions minimal.

The website must remain fully usable.

---

# 49. PERFORMANCE

Prefer animating:

```text
transform
opacity
```

Avoid unnecessary animation of:

```text
width
height
top
left
```

Avoid excessive simultaneous GSAP animations.

Avoid unnecessary ScrollTriggers.

Clean up GSAP/ScrollTrigger instances when appropriate.

Optimize images.

Do not sacrifice performance for animation.

---

# 50. COMMON ANIMATION UTILITIES

Reuse animation patterns whenever possible.

Preferred patterns:

```text
fadeIn
fadeUp
fadeDown
slideFromLeft
slideFromRight
slideFromTop
slideFromBottom
scaleIn
staggerIn
imageReveal
floating
hoverLift
hoverBorder
parallax
```

If a reusable animation already exists in:

```text
js/common.js
```

reuse it instead of creating another duplicate implementation.

---

# 51. NAVIGATION RULES

Verify every internal link.

Expected examples:

```text
Home
→ index.html

About
→ html/about.html

Services
→ html/services.html

Blog
→ html/blog.html

Contact
→ html/contact.html

Login
→ html/login.html

Signup
→ html/signup.html
```

Dashboard links:

```text
User
→ html/user.html

Admin
→ html/admin.html
```

Adjust paths according to the actual browser-relative structure.

Do not assume a path is correct without checking the existing project structure.

---

# 52. BASIC FORM VALIDATION

All forms should have basic frontend validation.

Validate:

* Required values
* Email format
* Password
* Confirm password
* Role
* Appropriate field constraints

Show clear validation messages.

Do not submit invalid forms.

---

# 53. NO BACKEND ASSUMPTION

This project currently focuses on frontend implementation.

Do not create:

* Backend servers
* Databases
* APIs
* Authentication servers
* CMS systems

unless explicitly instructed.

For authentication demonstrations, frontend/local state is sufficient.

---

# 54. CODE QUALITY

Use:

* Meaningful variable names
* Meaningful function names
* Small reusable functions
* Clear HTML structure
* Organized CSS
* Modular JavaScript

Avoid:

* Huge functions
* Duplicate code
* Unused variables
* Unused CSS
* Unnecessary abstractions
* Random libraries
* Inline JavaScript
* Excessive inline styles

---

# 55. BEFORE CREATING NEW CODE

Before creating a new:

* CSS class
* JavaScript function
* animation
* component
* utility

search the existing project first.

If an existing implementation can be reused or extended cleanly, reuse it.

Do not create duplicate functionality.

---

# 56. BEFORE MODIFYING COMMON FILES

Be especially careful when modifying:

```text
html/common.html
css/common.css
js/common.js
```

These files affect multiple pages.

Before modifying them:

1. Understand what pages depend on them.
2. Preserve existing functionality.
3. Make the smallest appropriate change.
4. Check all public pages after modification.

Do not introduce page-specific logic into common files unless it genuinely belongs there.

---

# 57. DEBUGGING CHECKLIST

Before considering any task complete, check:

* No console errors
* No broken links
* No missing images
* No missing CSS
* No missing JS
* Header works
* Footer works
* Hamburger works
* Navigation works
* Forms validate
* Login redirects work
* Signup redirects work
* Dashboard navigation works
* Logout works
* Animations work
* ScrollTrigger works
* No horizontal overflow
* Mobile layout works
* Tablet layout works
* Desktop layout works

---

# 58. AI DEVELOPMENT WORKFLOW

Before every task:

## Step 1 — Read

Read:

```text
AGENTS.md
```

## Step 2 — Inspect

Inspect the relevant:

* HTML
* CSS
* JS
* Common files
* Existing assets
* Existing animations

## Step 3 — Understand

Determine:

* Which page is affected.
* Which sections are affected.
* Which existing code can be reused.
* Whether common files are involved.
* Whether new code is actually required.

## Step 4 — Plan

Create a concise implementation plan before modifying files.

## Step 5 — Implement

Implement only what was requested.

Follow:

* Existing architecture
* Existing styles
* Existing components
* Animation system
* Responsive rules

## Step 6 — Verify

Compare implementation against requirements.

Check:

* Functionality
* Visual consistency
* Responsiveness
* Accessibility
* Animations
* Navigation
* Console

## Step 7 — Final Review

Make sure no major requirement was missed.

Do not modify unrelated pages.

---

# 59. SOURCE OF TRUTH

When requirements conflict, follow this priority:

```text
1. Explicit user requirements
2. Supplied design/Figma/reference
3. AGENTS.md
4. Existing project structure
5. Existing reusable components
6. Reasonable implementation decisions
```

If a requirement is unclear but has a minor implementation impact, use the simplest solution consistent with the project.

If ambiguity could significantly change the design, architecture, or functionality, ask for clarification.

Do not invent major requirements.

---

# 60. FINAL QUALITY STANDARD

The final website should NOT look like a generic AI-generated template.

It should feel:

* Professionally designed
* Cohesive
* Modern
* Responsive
* Smooth
* Interactive
* Fast
* Consistent

Animations should enhance the experience rather than distract from the content.

The website should remain visually strong even when animations are disabled.

Every page should follow the same overall design language while allowing individual pages and dashboards to have their own visual identity.

The goal is:

**A polished, responsive, animated multi-page website built with clean HTML, CSS, JavaScript, GSAP, and GSAP ScrollTrigger.**
