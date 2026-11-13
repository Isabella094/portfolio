"""Generate separate static pages from assets/projects.js. Python standard library only."""
from pathlib import Path
import json,re,html
root=Path(__file__).resolve().parents[1]
text=(root/'assets/projects.js').read_text()
projects=json.loads(text.split('window.PROJECTS =',1)[1].strip().removesuffix(';'))
ids=[p['id'] for p in projects]
assert len(ids)==len(set(ids)), 'Duplicate project IDs'
for p in projects:
 assert re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',p['id']), 'Use lowercase ASCII slugs'
def page(project=None):
 base='../' if project else ''
 title=html.escape(project['title']['zh'] if project else '作品集')
 attr=f' data-project="{project["id"]}"' if project else ''
 return f'''<!doctype html>
<html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="{title}｜AI、機器學習與互動專題作品集"><meta name="color-scheme" content="light"><title>{title} | PROJECTS</title><link rel="icon" href="{base}assets/favicon.png" type="image/png"><link rel="stylesheet" href="{base}assets/style.css?v=navy1"><script defer src="{base}assets/projects.js"></script><script defer src="{base}assets/app.js"></script></head>
<body{attr}><a class="skip" href="#main">跳至作品內容</a><header><a class="brand" href="{base}index.html" aria-label="Projects home"><i aria-hidden="true"></i>PORTFOLIO / 作品集</a><div class="languages" role="group" aria-label="Language / 語言"><button type="button" data-lang="zh" aria-pressed="true" lang="zh-Hant">繁中</button><button type="button" data-lang="en" aria-pressed="false" lang="en">EN</button></div></header><main id="main"><noscript>請啟用 JavaScript 以瀏覽專題作品。Please enable JavaScript to view projects.</noscript></main><footer></footer></body></html>'''
(root/'index.html').write_text(page())
(root/'projects').mkdir(exist_ok=True)
for project in projects:
 detail_path = root / 'projects' / f'{project["id"]}.html'
 detail_path.write_text(page(project))
print(f'Generated index + {len(projects)} detail pages')
