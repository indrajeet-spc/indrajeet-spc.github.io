@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Serif+4:wght@500;600;700&display=swap');

:root {
    --navy: #0b2742;
    --blue: #145da0;
    --sky: #eaf3fb;
    --ink: #1d2935;
    --muted: #5e6b78;
    --line: #d9e2ea;
    --paper: #ffffff;
    --soft: #f5f8fb;
    --accent: #d99b2b;
}

/* ==============================
   GLOBAL
   ============================== */

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    color: var(--ink);
    background: var(--paper);
    font-family: "Inter", Arial, sans-serif;
    line-height: 1.7;
}

h1,
h2,
h3 {
    font-family: "Source Serif 4", Georgia, serif;
    line-height: 1.2;
}

a {
    color: var(--blue);
}

img {
    max-width: 100%;
}


/* ==============================
   COMMON CONTAINER
   ============================== */

.container {
    width: min(1080px, calc(100% - 40px));
    margin: auto;
}


/* ==============================
   MAIN HEADER
   ============================== */

.site-header {
    background: linear-gradient(135deg, #0b2742, #124e7b);
    color: white;
    padding: 64px 0;
}

.header-inner {
    width: min(1080px, calc(100% - 40px));
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 50px;
}

.header-text {
    max-width: 760px;
}

.eyebrow,
.kicker {
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    font-weight: 800;
    margin: 0 0 10px;
    color: var(--accent);
}

.header-text h1 {
    font-size: clamp(2.5rem, 6vw, 4.4rem);
    margin: 0 0 8px;
}

.designation {
    font-size: 1.35rem;
    margin: 0;
    font-weight: 600;
}

.institution {
    margin: 12px 0 0;
    color: #dcebf7;
}


/* ==============================
   PROFILE PHOTO
   ============================== */

.profile-photo {
    width: 185px;
    height: 185px;

    border-radius: 50%;
    object-fit: cover;

    border: 5px solid white;

    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}


/* ==============================
   HEADER BUTTONS
   ============================== */

.header-actions {
    display: flex;
    gap: 10px;
    margin-top: 25px;
}


/* ==============================
   BUTTONS
   ============================== */

.button {
    display: inline-block;

    padding: 10px 18px;

    border-radius: 6px;

    text-decoration: none;

    background: var(--blue);
    color: white;

    font-weight: 700;
}

.button:hover {
    opacity: 0.9;
}

.button.light {
    background: white;
    color: var(--navy);
}

.button.outline-light {
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: transparent;
    color: white;
}

.button.dark {
    background: var(--navy);
}


/* ==============================
   NAVIGATION
   ============================== */

.navbar {
    position: sticky;
    top: 0;
    z-index: 20;

    background: white;

    border-bottom: 1px solid var(--line);

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.nav-inner {
    width: min(1080px, calc(100% - 40px));
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 62px;
}


/* Logo */

.brand {
    font-weight: 800;
    text-decoration: none;

    color: white;
    background: var(--navy);

    width: 38px;
    height: 38px;

    border-radius: 50%;

    display: grid;
    place-items: center;
}


/* Navigation links */

.nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.nav-links a {
    padding: 19px 10px;

    text-decoration: none;

    color: var(--ink);

    font-size: 0.88rem;
    font-weight: 600;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--blue);
}


/* ==============================
   PAGE HEADER
   ============================== */

.page-header {
    background: var(--navy);
    color: white;

    padding: 55px 0;
}

.page-header .kicker {
    color: #e8b34c;
}

.page-header h1 {
    margin: 0;

    font-size: 2.8rem;
}

.page-header p:not(.kicker) {
    margin-bottom: 0;
    color: #dce8f2;
}


/* ==============================
   HOME HERO
   ============================== */

.hero-strip {
    background: var(--soft);

    border-bottom: 1px solid var(--line);

    padding: 55px 0;
}

.hero-strip h2 {
    font-size: clamp(2rem, 4vw, 3.1rem);

    max-width: 820px;

    margin: 0 0 10px;
}

.hero-strip p:not(.kicker) {
    color: var(--muted);

    font-size: 1.05rem;
}


/* ==============================
   SECTIONS
   ============================== */

.section {
    padding: 70px 0;
}

.section-heading {
    margin-bottom: 28px;
}

.section-heading h2 {
    margin: 0;
    font-size: 2.4rem;
}


/* ==============================
   TWO COLUMN
   ============================== */

.two-column {
    display: grid;

    grid-template-columns: 1.5fr 1fr;

    gap: 45px;
}


/* ==============================
   CARDS
   ============================== */

.info-card,
.card,
.research-card,
.notice,
.resource,
.publication {
    border: 1px solid var(--line);

    border-radius: 10px;

    background: white;
}

.info-card {
    padding: 24px;
}

.info-card h3 {
    margin-top: 0;
}


/* Card grid */

.card-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
}

.card {
    padding: 26px;
}

.card-number {
    font-size: 0.75rem;

    font-weight: 800;

    letter-spacing: 0.12em;

    color: var(--blue);
}

.card h3 {
    font-size: 1.45rem;
}

.card p,
.research-card p {
    color: var(--muted);
}

.text-link {
    font-weight: 700;

    text-decoration: none;
}


/* ==============================
   RESEARCH
   ============================== */

.research-band {
    background: var(--soft);

    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
}

.research-card {
    padding: 26px;
}

.research-card h2 {
    margin-top: 0;
}


/* ==============================
   CONTACT
   ============================== */

.contact-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 20px;
}


/* ==============================
   MARKDOWN CONTENT
   ============================== */

.prose {
    max-width: 900px;
}

.prose h2 {
    margin-top: 40px;
}

.prose h3 {
    margin-top: 30px;
}

.prose li {
    margin: 7px 0;
}

.prose img {
    max-width: 100%;
}

.prose table {
    width: 100%;

    border-collapse: collapse;

    margin: 25px 0;
}

.prose th,
.prose td {
    border: 1px solid var(--line);

    padding: 12px 15px;

    text-align: left;
}

.prose th {
    background: var(--soft);

    font-weight: 700;
}

.prose blockquote {
    margin: 25px 0;

    padding: 15px 20px;

    background: #fffaf0;

    border-left: 4px solid var(--accent);

    color: var(--muted);
}


/* ==============================
   NOTICE
   ============================== */

.notice {
    padding: 18px;

    margin-top: 30px;

    background: #fffaf0;

    border-color: #ead9ad;
}


/* ==============================
   RESOURCES
   ============================== */

.resource-list {
    display: grid;

    gap: 15px;
}

.resource {
    padding: 20px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;
}

.resource h3 {
    margin: 0;
}

.resource p {
    margin: 4px 0;

    color: var(--muted);
}


/* ==============================
   PUBLICATIONS
   ============================== */

.publication {
    display: flex;

    gap: 20px;

    padding: 22px;

    margin: 15px 0;
}

.publication > span {
    font-weight: 800;

    color: var(--blue);
}

.publication h3 {
    margin: 0;
}

.publication p {
    color: var(--muted);
}


/* ==============================
   HORIZONTAL RULE
   ============================== */

hr {
    border: 0;

    border-top: 1px solid var(--line);

    margin: 40px 0;
}


/* ==============================
   FOOTER
   ============================== */

footer {
    background: var(--navy);

    color: #dce8f2;

    padding: 24px 0;
}

.footer-inner {
    display: flex;

    justify-content: space-between;

    gap: 20px;

    font-size: 0.85rem;
}


/* ==============================
   CODE
   ============================== */

code {
    background: #eef2f5;

    padding: 2px 6px;

    border-radius: 4px;

    font-size: 0.9em;
}

pre {
    background: #f4f6f8;

    padding: 18px;

    border-radius: 8px;

    overflow-x: auto;
}


/* ==============================
   MOBILE — TABLETS
   ============================== */

@media (max-width: 800px) {

    .header-inner {
        flex-direction: column-reverse;

        text-align: center;
    }

    .header-actions {
        justify-content: center;
    }

    .nav-inner {
        align-items: flex-start;

        padding: 10px 0;
    }

    .nav-links {
        justify-content: center;
    }

    .nav-links a {
        padding: 8px;
    }

    .two-column,
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .card-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 50px 0;
    }

}


/* ==============================
   MOBILE — PHONES
   ============================== */

@media (max-width: 500px) {

    .container,
    .header-inner,
    .nav-inner {
        width: min(100% - 28px, 1080px);
    }

    .site-header {
        padding: 42px 0;
    }

    .profile-photo {
        width: 150px;
        height: 150px;
    }

    .header-text h1 {
        font-size: 2.35rem;
    }

    .nav-inner {
        display: block;
    }

    .brand {
        margin: 0 auto 8px;
    }

    .resource {
        align-items: flex-start;

        flex-direction: column;
    }

    .page-header h1 {
        font-size: 2.2rem;
    }

    .footer-inner {
        flex-direction: column;

        text-align: center;
    }

}
