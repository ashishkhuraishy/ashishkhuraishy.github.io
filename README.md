# ashishkhuraishy.github.io

Personal site + blog of Ashish Khuraishy. Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages on every push to `main`.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `bun install`     | Install dependencies                      |
| `bun run dev`     | Start dev server at `localhost:4321`      |
| `bun run build`   | Build the production site to `./dist/`    |
| `bun run preview` | Preview the production build locally      |

## Project structure

```text
src/
├── components/        # one file per section of the homepage
│   ├── Header.astro       # sticky status bar (uptime ticker)
│   ├── Hero.astro
│   ├── TraceDiagram.astro # animated request-trace SVG
│   ├── About.astro
│   ├── Experience.astro   # "deployment history" timeline
│   ├── Stack.astro        # go.mod-style skills block
│   ├── Projects.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   ├── SectionHead.astro  # shared "Title + GET /path" heading
│   └── BaseHead.astro     # meta tags, fonts, global.css
├── content/blog/      # blog posts (markdown / mdx)
├── layouts/
│   └── BlogPost.astro
├── pages/
│   ├── index.astro
│   ├── blog/
│   └── rss.xml.js
├── styles/
│   └── global.css     # Tailwind + design tokens (@theme)
└── consts.ts          # name, email, socials, site metadata
```

## Editing

- **Personal info / links** — `src/consts.ts`
- **Colors / fonts / theme** — `@theme` block in `src/styles/global.css`
- **Section content** (experience entries, projects, facts) — data arrays at the top of each component in `src/components/`
- **Write a blog post** — add a `.md` file to `src/content/blog/` with `title`, `description`, `pubDate` frontmatter

`design-reference.html` is the original single-file design this site was converted from; safe to delete.

## Deploying

`.github/workflows/deploy.yml` builds with bun and publishes to GitHub Pages. One-time setup: in the GitHub repo, set **Settings → Pages → Source** to **GitHub Actions**.
