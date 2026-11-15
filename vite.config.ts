import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { education, experience, military, profile, projects, skills } from './src/data/site.ts'

const SITE = 'https://saharhalili95.github.io/html-portfolio/'
const INTRO =
  "I write software, mostly for security and for learning. The security part comes from the C4I Corps, where I worked on networks and permissions and still do reserve duty. The learning part comes from teaching math and Python at a high school in Modi'in."
const LOOKING =
  "I have a computer science degree from HIT. I take on freelance projects, and I'm looking for my first full-time job as a developer."

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const home = (p: (typeof projects)[number]) => p.demoLink ?? (p.internalLink ? `${SITE}#${p.internalLink}` : p.link)

function staticHtml() {
  const items = projects
    .map((p) => {
      const url = home(p)
      const name = url ? `<a href="${esc(url)}">${esc(p.title)}</a>` : esc(p.title)
      const code = p.link && p.link !== url ? ` <a href="${esc(p.link)}">Source code</a>.` : ''
      return `<li><strong>${name}</strong>: ${esc(p.tagline.en)}. ${esc(p.summary.en)} Built with ${esc(p.technologies.join(', '))}.${code}</li>`
    })
    .join('')
  const jobs = experience
    .map((e) => `<li>${esc(e.role.en)}, ${esc(e.place.en)} (${esc(e.period.en)}). ${esc(e.points.map((x) => x.en).join(' '))}</li>`)
    .join('')
  const skillRows = skills.map((s) => `<li>${esc(s.label.en)}: ${esc(s.items.join(', '))}</li>`).join('')
  return `<main id="static">
<style>#static{max-width:44rem;min-height:100vh;margin:0 auto;padding:2rem 1rem;background:#10231c;color:#e9f2ec;font:16px/1.6 system-ui,sans-serif;opacity:0;animation:static-in .3s 2s forwards}#static a{color:#4ecdb2}@keyframes static-in{to{opacity:1}}</style>
<h1>${esc(profile.name.en)} (${esc(profile.name.he)})</h1>
<p>${esc(profile.title.en)}. ${esc(profile.location.en)}.</p>
<p>${esc(INTRO)}</p>
<p>${esc(LOOKING)}</p>
<h2>Projects</h2>
<ul>${items}</ul>
<h2>Experience</h2>
<ul><li>Freelance software developer: web, custom software and mobile projects.</li>${jobs}<li>${esc(military.org.en)} (${military.period}, reserves ${esc(military.reservePeriod.en)}). ${esc(military.points.map((x) => x.en).join(' '))} ${esc(military.reserve.en)}</li></ul>
<h2>Education</h2>
<p>${esc(education.degree.en)}, ${esc(education.school.en)} (${education.period}).</p>
<h2>Skills</h2>
<ul>${skillRows}</ul>
<h2>Contact</h2>
<p><a href="mailto:${profile.email}">${profile.email}</a> · <a href="${profile.linkedin}">LinkedIn</a> · <a href="${profile.github}">GitHub</a> · <a href="${SITE}${profile.cv.slice(1)}">CV (PDF)</a></p>
</main>`
}

function jsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: SITE,
    mainEntity: {
      '@type': 'Person',
      name: profile.name.en,
      alternateName: profile.name.he,
      url: SITE,
      image: `${SITE}${profile.photo.slice(1)}`,
      jobTitle: 'Software Developer',
      description: `${INTRO} ${LOOKING}`,
      email: `mailto:${profile.email}`,
      sameAs: [profile.linkedin, profile.github],
      address: { '@type': 'PostalAddress', addressLocality: "Modi'in-Maccabim-Re'ut", addressCountry: 'IL' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: education.school.en },
      knowsLanguage: ['he', 'en'],
      knowsAbout: skills.flatMap((s) => s.items),
    },
    hasPart: projects
      .filter((p) => home(p))
      .map((p) => ({
        '@type': 'SoftwareSourceCode',
        name: p.title,
        description: p.summary.en,
        url: home(p),
        ...(p.link ? { codeRepository: p.link } : {}),
        programmingLanguage: p.technologies,
      })),
  }).replace(/</g, '\\u003c')
}

function llmsTxt() {
  const lines = projects.map((p) => {
    const url = home(p)
    const code = p.link && p.link !== url ? ` Source: ${p.link}` : ''
    return `- ${url ? `[${p.title}](${url})` : p.title}: ${p.tagline.en}. ${p.summary.en} Built with ${p.technologies.join(', ')}.${code}`
  })
  return `# ${profile.name.en}

> ${profile.title.en}. ${INTRO} ${LOOKING}

## Projects

${lines.join('\n')}

## Skills

${skills.map((s) => `- ${s.label.en}: ${s.items.join(', ')}`).join('\n')}

## Links

- [Portfolio](${SITE})
- [CV (PDF)](${SITE}${profile.cv.slice(1)})
- [LinkedIn](${profile.linkedin})
- [GitHub](${profile.github})
- Email: ${profile.email}
`
}

// The app renders in the browser, so tools that don't run JavaScript would see an empty page.
function staticContent(): Plugin {
  return {
    name: 'static-content',
    transformIndexHtml: (html) => ({
      html: html.replace('<div id="root"></div>', `<div id="root">${staticHtml()}</div>`),
      tags: [
        { tag: 'link', attrs: { rel: 'canonical', href: SITE }, injectTo: 'head' },
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: jsonLd(), injectTo: 'head' },
      ],
    }),
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt() })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE}</loc></url>\n  <url><loc>${SITE}${profile.cv.slice(1)}</loc></url>\n</urlset>\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticContent()],
  base: '/html-portfolio/',
})
