import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const DIST = '/Users/mac/Desktop/clash-cloud.run/docs/.vitepress/dist';
const PORT = Number(process.env.PORT || 4173);

const MIME_MAP = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
  '.pf_meta': 'application/octet-stream',
  '.pf_index': 'application/octet-stream',
  '.pf_fragment': 'application/octet-stream',
  '.pagefind': 'application/octet-stream'
};

function findFallbackHashedAsset(reqPathname) {
  if (!reqPathname.startsWith('/assets/')) return null;
  const dir = path.join(DIST, path.dirname(reqPathname));
  if (!fs.existsSync(dir)) return null;
  const base = path.basename(reqPathname);
  // e.g. style.Daa6HRfO.css -> prefix "style.", ext ".css"
  const parts = base.split('.');
  if (parts.length < 3) return null;
  const ext = '.' + parts[parts.length - 1];
  const prefix = parts.slice(0, parts.length - 2).join('.') + '.';
  const candidates = fs.readdirSync(dir).filter(f => f.startsWith(prefix) && f.endsWith(ext));
  if (candidates.length > 0) {
    return path.join(dir, candidates[0]);
  }
  return null;
}

const server = http.createServer((req, res) => {
  try {
    const urlObj = new URL(req.url || '/', `http://localhost:${PORT}`);
    let pathname = decodeURIComponent(urlObj.pathname);

    // Prevent path traversal
    const safeRel = path.normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '');
    let filePath = path.join(DIST, safeRel);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!fs.existsSync(filePath) && !path.extname(filePath)) {
      if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      } else if (fs.existsSync(`${filePath}.html`)) {
        filePath = `${filePath}.html`;
      }
    }

    if (!fs.existsSync(filePath)) {
      const fallback = findFallbackHashedAsset(pathname);
      if (fallback && fs.existsSync(fallback)) {
        filePath = fallback;
      }
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      const notFoundPage = path.join(DIST, '404.html');
      res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store'
      });
      if (fs.existsSync(notFoundPage)) {
        res.end(fs.readFileSync(notFoundPage));
      } else {
        res.end('404 Not Found');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_MAP[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    });
    res.end(fs.readFileSync(filePath));
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Preview server running at http://localhost:${PORT}/ (zero-cache live disk mode)`);
});
