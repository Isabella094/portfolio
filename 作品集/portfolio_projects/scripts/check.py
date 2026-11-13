from pathlib import Path
from html.parser import HTMLParser
root=Path(__file__).resolve().parents[1]
class Links(HTMLParser):
 def handle_starttag(self,tag,attrs):
  for key,value in attrs:
   if key in ('src','href') and value and not value.startswith(('#','http','data:')):
    assert (self.path.parent/value.split('#', 1)[0].split('?', 1)[0]).exists(), f'Missing: {self.path}: {value}'
for f in root.rglob('*.html'):
 parser=Links();parser.path=f;parser.feed(f.read_text())
print('PASS: every static HTML link and resource exists')
