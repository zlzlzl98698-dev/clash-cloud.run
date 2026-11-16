import { defineConfig, type HeadConfig } from 'vitepress';

const SITE_URL = 'https://clash-cloud.run';
const SITE_NAME = 'clash机场';

// 四大搜索引擎站长平台验证代码配置中心（填入真实验证码或通过环境变量注入后即直接输出至静态 HTML <head>，为空时不输出伪造标签）
const SITE_VERIFICATION_CODES = {
  google: process.env.GOOGLE_SITE_VERIFICATION || '',
  bing: process.env.BING_SITE_VERIFICATION || '',
  shenma: process.env.SHENMA_SITE_VERIFICATION || '',
  baidu: process.env.BAIDU_SITE_VERIFICATION || ''
};

function normalizeUrlPath(relativePath: string): string {
  if (!relativePath || relativePath === 'index.md') return '/';
  if (relativePath === '404.md') return '/404.html';
  let p = '/' + relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '.html');
  if (!p.endsWith('/') && !p.endsWith('.html')) {
    p += '/';
  }
  return p;
}

const BREADCRUMB_NAME_MAP: Record<string, string> = {
  airport: '机场推荐',
  recommend: '精选推荐',
  ranking: '机场排行',
  value: '性价比机场',
  stable: '稳定机场',
  cheap: '便宜机场',
  'free-ladder': '免费梯子',
  guide: '科学上网',
  vpn: 'VPN 与加速器',
  free: '免费 VPN',
  mobile: '手机 VPN',
  reviews: 'VPN 软件评测',
  accelerator: 'VPN 加速器',
  compare: '横向对比',
  best: '好用的 VPN',
  clash: 'Clash 客户端',
  verge: 'Clash Verge',
  'verge-download': 'Clash Verge 下载',
  'verge-subscription': 'Clash Verge 订阅',
  meta: 'Clash Meta (Mihomo)',
  tutorial: 'Clash 使用教程',
  troubleshooting: 'Clash 故障排查',
  resources: '资源与情报',
  'free-nodes': '免费节点',
  'scam-alert': '跑路预警',
  faq: '机场 FAQ',
  'risk-intel': '机场风险情报',
  'node-check': '节点检测',
  'subscription-issues': '订阅问题',
  'beginner-help': '新手帮助',
  brands: '41家机场品牌数据库',
  clients: '代理客户端知识库',
  articles: '深度评测与技术专栏'
};

export default defineConfig({
  lang: 'zh-CN',
  title: SITE_NAME,
  titleTemplate: false,
  description: '面向中文用户的机场推荐、实测排行、41家独立机场品牌数据库、Clash Verge Rev (Mihomo) 教程与网络排障门户。',
  cleanUrls: false,
  lastUpdated: false,
  appearance: false, // Force branded clean white theme (with dark network observatory components inside)

  transformPageData(pageData) {
    const fm = pageData.frontmatter || {};
    if (fm.seoTitle) {
      pageData.title = fm.seoTitle;
    }
    if (fm.seoDescription) {
      pageData.description = fm.seoDescription;
    }
  },

  async buildEnd(siteConfig) {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const notFoundPath = path.join(siteConfig.outDir, '404.html');
    if (fs.existsSync(notFoundPath)) {
      let html = fs.readFileSync(notFoundPath, 'utf8');
      const static404Body = `<div id="app"><div class="cc-site-wrapper"><header class="cc-header"><div class="cc-header-inner"><a href="/" class="cc-brand-logo"><span class="cc-brand-mark">CC</span><span>clash机场 <span class="cc-brand-sub">clash-cloud.run · 评测与品牌库</span></span></a><nav class="cc-nav-desktop"><a href="/airport/" class="cc-nav-trigger">机场推荐</a><a href="/vpn/" class="cc-nav-trigger">VPN 与加速器</a><a href="/clash/" class="cc-nav-trigger">Clash 客户端</a><a href="/resources/" class="cc-nav-trigger">资源与情报</a></nav></div></header><main class="cc-main"><div class="cc-container cc-prose"><h1>404 — 您访问的页面不存在或已完成路由归并</h1><p>您请求的 URL 可能拼写有误，或属于尚未正式发布的规划储备文章。请通过以下核心入口继续浏览：</p><div class="cc-grid-3"><div class="cc-card"><h2>机场品牌数据库与评测</h2><p><a href="/brands/guangsuyun/">★ 首推：光速云万字深度评测</a> | <a href="/brands/">41家品牌数据库</a> | <a href="/compare/">同价位品牌对比</a></p></div><div class="cc-card"><h2>四大主题频道总入口</h2><p><a href="/airport/">机场推荐</a> | <a href="/vpn/">VPN 与加速器</a> | <a href="/clash/">Clash 客户端</a> | <a href="/resources/">资源与情报</a></p></div><div class="cc-card"><h2>热门客户端与排障手册</h2><p><a href="/clash/verge-download/">Clash Verge 下载</a> | <a href="/clash/verge-subscription/">订阅导入教程</a> | <a href="/clients/">22款客户端知识库</a></p></div></div></div></main></div></div>`;
      html = html.replace('<div id="app"></div>', static404Body);
      fs.writeFileSync(notFoundPath, html, 'utf8');
    }
  },

  sitemap: {
    hostname: SITE_URL,
    transformItems(items) {
      return items
        .filter((item) => {
          if (item.url.includes('404')) return false;
          return true;
        })
        .map((item) => {
          let url = item.url.replace(/(^|\/)index\.html$/, '$1');
          if (!url.startsWith('/')) url = '/' + url;
          return {
            ...item,
            url
          };
        });
    }
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('data/brands')) return 'data-brands';
            if (id.includes('data/navigation')) return 'data-navigation';
            if (id.includes('data/clients')) return 'data-clients';
          }
        }
      }
    }
  },

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-transform' }],
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-siteapp' }],
    ...(SITE_VERIFICATION_CODES.google
      ? ([['meta', { name: 'google-site-verification', content: SITE_VERIFICATION_CODES.google }]] as HeadConfig[])
      : []),
    ...(SITE_VERIFICATION_CODES.bing
      ? ([['meta', { name: 'msvalidate.01', content: SITE_VERIFICATION_CODES.bing }]] as HeadConfig[])
      : []),
    ...(SITE_VERIFICATION_CODES.shenma
      ? ([['meta', { name: 'shenma-site-verification', content: SITE_VERIFICATION_CODES.shenma }]] as HeadConfig[])
      : []),
    ...(SITE_VERIFICATION_CODES.baidu
      ? ([['meta', { name: 'baidu-site-verification', content: SITE_VERIFICATION_CODES.baidu }]] as HeadConfig[])
      : []),
    ['link', { rel: 'icon', type: 'image/png', href: '/images/logos/guangsuyun.png' }]
  ],

  transformHead({ pageData }) {
    const head: HeadConfig[] = [];
    const fm = pageData.frontmatter || {};
    const urlPath = normalizeUrlPath(pageData.relativePath);
    const canonicalUrl = `${SITE_URL}${urlPath}`;
    const pageTitle = fm.seoTitle || fm.title || `${SITE_NAME} — 中文机场推荐与品牌评测数据库`;
    const pageDesc = fm.seoDescription || fm.description || '基于41家独立机场品牌数据库与双批次测速证据的中文机场推荐、VPN评测与Clash客户端知识库。';
    const ogImage = fm.ogImage ? `${SITE_URL}${fm.ogImage}` : `${SITE_URL}/images/speedtest/guangsuyun.png`;
    const pubDate = fm.datePublished || '2026-08-11';
    const modDate = fm.dateModified || '2026-11-16';
    const authorName = fm.author || `${SITE_NAME}评测中心`;

    if (fm.noindex) {
      head.push(['meta', { name: 'robots', content: 'noindex, nofollow' }]);
    } else {
      head.push(['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }]);
    }

    // Author & Self-referencing canonical
    head.push(['meta', { name: 'author', content: authorName }]);
    head.push(['link', { rel: 'canonical', href: canonicalUrl }]);

    // Open Graph
    head.push(['meta', { property: 'og:locale', content: 'zh_CN' }]);
    head.push(['meta', { property: 'og:site_name', content: SITE_NAME }]);
    head.push(['meta', { property: 'og:type', content: urlPath === '/' ? 'website' : 'article' }]);
    head.push(['meta', { property: 'og:title', content: pageTitle }]);
    head.push(['meta', { property: 'og:description', content: pageDesc }]);
    head.push(['meta', { property: 'og:url', content: canonicalUrl }]);
    head.push(['meta', { property: 'og:image', content: ogImage }]);

    if (urlPath !== '/' && urlPath !== '/404.html') {
      head.push(['meta', { property: 'article:published_time', content: `${pubDate}T08:00:00+08:00` }]);
      head.push(['meta', { property: 'article:modified_time', content: `${modDate}T12:00:00+08:00` }]);
      head.push(['meta', { property: 'article:author', content: authorName }]);
      if (fm.topicTitle || fm.breadcrumbTitle) {
        head.push(['meta', { property: 'article:section', content: String(fm.topicTitle || fm.breadcrumbTitle) }]);
      }
    }

    // Twitter Card
    head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }]);
    head.push(['meta', { name: 'twitter:title', content: pageTitle }]);
    head.push(['meta', { name: 'twitter:description', content: pageDesc }]);
    head.push(['meta', { name: 'twitter:image', content: ogImage }]);

    // Build JSON-LD Graph
    const graph: any[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logos/guangsuyun.png`
        },
        description: '中文机场与 VPN 专业评测媒体 + 41家独立品牌数据库 + Clash 客户端知识库'
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: 'zh-CN',
        publisher: { '@id': `${SITE_URL}/#organization` }
      }
    ];

    // BreadcrumbList Schema
    const segments = urlPath.split('/').filter(Boolean);
    const breadcrumbItems: any[] = [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: `${SITE_URL}/`
      }
    ];
    let accum = '';
    segments.forEach((seg, idx) => {
      accum += `/${seg}`;
      const isLast = idx === segments.length - 1;
      const itemUrl = seg.endsWith('.html') ? `${SITE_URL}${accum}` : `${SITE_URL}${accum}/`;
      const label = isLast
        ? (fm.breadcrumbTitle || fm.h1 || fm.title || BREADCRUMB_NAME_MAP[seg] || seg)
        : (BREADCRUMB_NAME_MAP[seg] || seg);
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: idx + 2,
        name: String(label).replace(/\s*\|\s*clash机场.*$/, ''),
        item: itemUrl
      });
    });

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems
    });

    // Page-level WebPage / Article / CollectionPage schema
    if (urlPath.startsWith('/brands/') && urlPath !== '/brands/') {
      graph.push({
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: fm.h1 || pageTitle,
        description: pageDesc,
        inLanguage: 'zh-CN',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      });
      graph.push({
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: fm.h1 || pageTitle,
        description: pageDesc,
        inLanguage: 'zh-CN',
        mainEntityOfPage: canonicalUrl,
        datePublished: pubDate,
        dateModified: modDate,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` }
      });
    } else if (urlPath.startsWith('/articles/')) {
      graph.push({
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: fm.h1 || pageTitle,
        description: pageDesc,
        inLanguage: 'zh-CN',
        mainEntityOfPage: canonicalUrl,
        datePublished: pubDate,
        dateModified: modDate,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` }
      });
    } else if (urlPath !== '/' && urlPath !== '/404.html') {
      graph.push({
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collection`,
        name: fm.h1 || pageTitle,
        description: pageDesc,
        url: canonicalUrl,
        inLanguage: 'zh-CN',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      });
    }

    // Conditional FAQPage Schema — ONLY when page frontmatter explicitly provides visible FAQs
    if (Array.isArray(fm.faqs) && fm.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: fm.faqs.map((f: { q: string; a: string }) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        }))
      });
    }

    head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    ]);

    return head;
  }
});
