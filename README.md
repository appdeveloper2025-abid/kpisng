# KPI Learning Platform

A responsive, static learning website for students of Kurram Polytechnic Institute (KPI), Serai Naurang. The site contains the KPI home page and institute information, a practical local e-commerce curriculum, an AI-powered e-commerce course, DIT subject notes and practicals, DAE information, technical and vocational learning pages, and a curated resources library.

## Run the website locally

This project does not require a build step, server-side runtime, or package installation.

1. Download or clone this repository.
2. Open the `ecommerce-academy` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use a local static server such as the VS Code Live Server extension.
4. For direct browser use, open the relevant page, for example `courses/dit/index.html` or `courses/dit/subjects/web-development/index.html`.

Using a local server is recommended for a more production-like preview. No database or API keys are required for the static learning content.

## Publish with GitHub Pages

The `ecommerce-academy` folder is the website root: it contains the site's `index.html`, `assets`, and course pages.

1. Create a GitHub repository. For the simplest URL, name it `<your-github-username>.github.io`; alternatively, use any repository name for a project site.
2. Upload the **contents** of `ecommerce-academy` to the top level of that repository. Make sure `index.html` is at the repository root (not inside another `ecommerce-academy` directory).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/(root)`, then save.
6. Wait for the Pages deployment to finish. GitHub will show the public website URL in the Pages settings.

For a project repository, the URL usually has the form `https://<your-github-username>.github.io/<repository-name>/`. If using a custom domain, configure it in GitHub Pages and update the domain's DNS as GitHub instructs.

After publishing, open the site on a phone and desktop and check the home page, navigation menus, course links, search, footer contacts, images, and in-page lesson links. Relative local links are used throughout the site to support GitHub Pages project URLs.

## What's included

- Static HTML, CSS, and JavaScript; no build tooling or server configuration.
- Responsive navigation, course announcements, and course/subject search.
- DIT subject notes with extended study topics across all ten subjects, an abacus-to-fifth-generation ICT history timeline, an 83-entry common Microsoft Office shortcut reference, external learning links, and practical activities. Shortcut availability can vary by Office version, platform, and context.
- Local e-commerce and AI-powered e-commerce course pages.
- KPI information, contact information, helpful external learning links, and 2026 footer details.
- A Google-search dialog that keeps the search query and a direct Google results link together. Google does not reliably permit its live results page to be embedded in third-party sites, so live results open on Google in a separate tab.

## Contact and public channels

- **Kurram Polytechnic Institute:** +92 311 9095542
- **WhatsApp:** [Message KPI](https://wa.me/923119095542)
- **Facebook:** [Kurram Polytechnic Institute](https://www.facebook.com/kpisng/)
- **Address:** Main GT Road, opposite Freshway Bakery, Sabzi Mandi Branch, Serai Naurang, District Lakki Marwat, Pakistan
- **Learning platform contact:** Abid Mehmood · +92 302 9382306 · [abidmehmoodpk25@gmail.com](mailto:abidmehmoodpk25@gmail.com)

Only KPI WhatsApp and Facebook links currently present in the project are listed as institute social channels. Add other official social profile URLs to the shared footer/navigation code when verified.

## Project structure

```text
ecommerce-academy/
├── index.html
├── about.html
├── curriculum.html
├── resources.html
├── lesson-01.html ... lesson-08.html
├── ai-learning/
│   ├── index.html
│   └── module-01.html ... module-12.html
├── courses/
│   ├── dae/
│   ├── technical-vocational/
│   └── dit/
│       ├── index.html
│       ├── dit-course.js
│       ├── dit-course.css
│       └── subjects/
└── assets/
    ├── css/
    ├── images/
    └── js/
```

## Notes for maintainers

- Keep `index.html` in the published repository root and retain the existing relative asset paths.
- This is a static site. Dynamic accounts, payments, order processing, form submissions, and private student data require separately configured services and are not provided by this website.
- External services such as Google Search and social platforms are subject to their own availability, privacy policies, and embedding restrictions.
- Check course details, institute contact information, external resource links, and licensing permissions before publishing updates.
