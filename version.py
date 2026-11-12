"""Add/refresh ?v=<hash> on CSS/JS links in index.html so browsers reload changed files."""
import hashlib, io, os, re
ROOT = r"D:\Resume Ferdaoues Abdessalem\FerdawesAbdessalem.github.io"
os.chdir(ROOT)
p = "index.html"
s = io.open(p, encoding="utf-8").read()

def ver(name):
    return hashlib.md5(open(name, "rb").read()).hexdigest()[:8]

for name in ["style.css", "animations.css", "content.js", "main.js", "animations.js"]:
    s, n = re.subn(r'((?:href|src)=")' + re.escape(name) + r'(\?v=[0-9a-f]+)?"',
                   lambda m: f'{m.group(1)}{name}?v={ver(name)}"', s)
    print(name, n, ver(name))
io.open(p, "w", encoding="utf-8", newline="\n").write(s)
