#!/usr/bin/env python3
"""Static site builder for the Task Healthcare website.

Usage:  python3 build.py

Sources (edit these, never the generated HTML):
  src/partials/*.html   shared fragments, included with {{> name}}
  src/pages/*.html      one file per page; first line is  <!--meta {json} -->
  src/data/services.json + src/templates/service.html   the six care-type pages

Output: index.html, 404.html and <slug>/index.html at the project root, plus sitemap.xml.
Links and assets use root-absolute paths (/assets/..., /about/), so preview through
a local server (python3 -m http.server 4321), not file://.
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
SITE_URL = "https://taskhealthcare.co.uk"
NAV_KEYS = ["home", "services", "about", "training", "careers", "reviews", "contact"]

partials = {p.stem: p.read_text() for p in (SRC / "partials").glob("*.html")}


def include(text):
    # Partials may include other partials; resolve until stable.
    for _ in range(5):
        new = re.sub(r"\{\{>\s*([\w-]+)\s*\}\}", lambda m: partials[m.group(1)], text)
        if new == text:
            break
        text = new
    return text


def fill(text, ctx):
    return re.sub(r"\{\{\s*([\w.]+)\s*\}\}", lambda m: str(ctx.get(m.group(1), m.group(0))), text)


def render(body, meta):
    ctx = {
        "title": meta["title"],
        "description": meta["description"],
        "canonical": SITE_URL + "/" + meta["out"].replace("index.html", ""),
        "body_class": meta.get("body_class", ""),
    }
    for key in NAV_KEYS:
        ctx[f"nav_{key}"] = 'aria-current="page"' if meta.get("nav") == key else ""
    page = include("{{> head}}\n{{> header}}\n<main id=\"main\">\n" + body + "\n</main>\n{{> footer}}")
    page = fill(page, ctx)
    leftover = re.findall(r"\{\{[^}]*\}\}", page)
    if leftover:
        raise SystemExit(f"Unfilled placeholders in {meta['out']}: {sorted(set(leftover))}")
    return page


def write(out, content):
    path = ROOT / out
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)
    return out


def read_page(path):
    raw = path.read_text()
    m = re.match(r"<!--meta\s+(\{.*?\})\s*-->\n", raw, re.S)
    if not m:
        raise SystemExit(f"{path} is missing its <!--meta {{...}} --> header")
    return json.loads(m.group(1)), raw[m.end():]


# ---------------------------------------------------------------- service pages
def esc(s):
    return html.escape(s, quote=False)


def img(name, alt="", sizes="(min-width:1024px) 50vw, 100vw", eager=False, cls=""):
    loading = 'fetchpriority="high"' if eager else 'loading="lazy" decoding="async"'
    c = f' class="{cls}"' if cls else ""
    return (f'<img{c} src="/assets/{name}-800.webp" srcset="/assets/{name}-800.webp 800w, '
            f'/assets/{name}-1600.webp 1600w" sizes="{sizes}" alt="{esc(alt)}" width="800" height="533" {loading}>')


def service_pages(built):
    services = json.loads((SRC / "data" / "services.json").read_text())
    tpl = (SRC / "templates" / "service.html").read_text()
    for s in services:
        features = "\n".join(
            f'<li class="reveal"><span class="feat__n">{i:02d}</span><div><h3>{esc(f[0])}</h3><p>{esc(f[1])}</p></div></li>'
            for i, f in enumerate(s["features"], 1))
        related = "\n".join(
            f'<a class="tile reveal" href="/{o["slug"]}/">{img(o["card_image"], sizes="(min-width:1024px) 20vw, 50vw")}'
            f'<div class="tile__body"><h3>{esc(o["name"])}</h3><p>{esc(o["card"])}</p></div></a>'
            for o in services if o["slug"] != s["slug"])
        ctx = {
            "s_name": esc(s["name"]),
            "s_title_html": s["title_html"],
            "s_tagline": esc(s["tagline"]),
            "s_intro": esc(s["intro"]),
            "s_lede": esc(s["lede"]),
            "s_features_title": esc(s["features_title"]),
            "s_features": features,
            "s_outro": esc(s["outro"]),
            "s_hero_img": img(s["hero_image"], s["hero_alt"], "(min-width:1024px) 45vw, 100vw", eager=True),
            "s_side_img": img(s["side_image"], s["side_alt"], "(min-width:1024px) 40vw, 100vw"),
            "s_quote": esc(s["quote"]["text"]),
            "s_quote_by": esc(s["quote"]["by"]),
            "s_related": related,
            "s_care": s["name"].lower().replace(" care", "").replace(" ", "%20"),
        }
        body = fill(tpl, ctx)
        meta = {"title": f'{s["name"]} in Redbridge & London | Task Healthcare',
                "description": s["meta"], "nav": "services", "out": f'{s["slug"]}/index.html'}
        built.append(write(meta["out"], render(body, meta)))


def main():
    built = []
    for path in sorted((SRC / "pages").glob("*.html")):
        meta, body = read_page(path)
        built.append(write(meta["out"], render(body, meta)))
    service_pages(built)

    urls = [u for u in built if u != "404.html"]
    sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    sitemap += [f"  <url><loc>{SITE_URL}/{u.replace('index.html', '')}</loc></url>" for u in sorted(urls)]
    sitemap.append("</urlset>")
    write("sitemap.xml", "\n".join(sitemap) + "\n")
    print(f"Built {len(built)} pages:\n  " + "\n  ".join(sorted(built)))


if __name__ == "__main__":
    main()
