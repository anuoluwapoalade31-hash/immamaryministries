# IMMAMARY MINISTRIES INTERNATIONAL — Static Website

A responsive, single-page static website for IMMAMARY MINISTRIES INTERNATIONAL and its three arms:

1. **Education:** Global Kingdom Harvest Institute
2. **Venture:** IMMAMARY VENTURES
3. **Missions:** Missions and Community Transformation

## Files

- `index.html` — website content and page structure
- `styles.css` — responsive styling and visual design
- `script.js` — mobile navigation, expandable founder profile, contact form behaviour
- `assets/founders-emmanuel-mary-alade.jpg` — founders' photograph supplied for this project

## Preview locally

No Node.js, React, build tools or package installation are required.

1. Extract the ZIP file.
2. Open the `immamary-static-site` folder.
3. Double-click `index.html` to open it in a browser.

For a local web server, open a terminal in this folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository (for example, `immamary-ministries`).
2. Upload the contents of this folder to the repository root. `index.html`, `styles.css`, `script.js`, and the `assets` folder should be at the top level.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the URL shown in Settings → Pages.

## Interactive features

- Responsive mobile navigation
- Navigation links to each website section and ministry arm
- Expandable full founder biography
- Contact form that prepares an email addressed to `Immamaryngo@gmail.com`
- Automatic copyright year

## Important limitations

This is intentionally a **static website**. It has no database, administrator dashboard, user accounts, online application storage, payment processing or server-side form handling. The contact form opens the visitor's default email application; it does not submit or store data on a server. Online registration, admin editing and stored enquiries would require a backend or a separate form service.

The hero image is loaded from Unsplash and Google Fonts are loaded from Google Fonts, so those two visual elements require an internet connection. The supplied founders' photograph is stored locally in `assets/`.

## Before public launch

- Confirm all public-facing wording and organizational details.
- Add the official organization logo and approved project photographs when available.
- Add a separate biography for Mary Odunola Alade if she is to have a formal leadership profile.
- Add privacy information if collecting personal information through any future external forms.
