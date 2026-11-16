<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useData, useRoute } from 'vitepress';
import { PRIMARY_NAVS, SECONDARY_TOPICS, PUBLISHED_ARTICLES } from '../../data/navigation';
import { BRANDS } from '../../data/brands';
import { CLIENTS } from '../../data/clients';

const { frontmatter, page } = useData();
const route = useRoute();

const mobileMenuOpen = ref(false);
const expandedMobileNav = ref<string | null>('airport');
const openDesktopDropdown = ref<string | null>(null);

// Search Modal State
const searchOpen = ref(false);
const searchInput = ref('');
const pagefindResults = ref<any[]>([]);
const pagefindLoaded = ref(false);
let pagefindInstance: any = null;

const currentPath = computed(() => {
  let p = route.path || '/';
  p = p.replace(/index\.html$/, '');
  if (!p.endsWith('/') && !p.endsWith('.html')) p += '/';
  return p;
});

const isHome = computed(() => currentPath.value === '/');
const isFullWidth = computed(() => isHome.value || frontmatter.value.fullWidth === true);

function isNavActive(navPath: string, navId: string) {
  if (currentPath.value.startsWith(navPath)) return true;
  if (frontmatter.value.navId === navId) return true;
  return false;
}

function isTopicActive(topicPath: string) {
  return currentPath.value === topicPath || frontmatter.value.upstreamTopicPath === topicPath;
}

function toggleMobileSection(id: string) {
  expandedMobileNav.value = expandedMobileNav.value === id ? null : id;
}

// Breadcrumb calculation
const breadcrumbs = computed(() => {
  if (isHome.value) return [];
  const items: { label: string; url?: string }[] = [{ label: '首页', url: '/' }];
  const fm = frontmatter.value || {};

  if (fm.navId) {
    const nav = PRIMARY_NAVS.find((n) => n.id === fm.navId);
    if (nav && nav.path !== currentPath.value) {
      items.push({ label: nav.title, url: nav.path });
    }
  } else if (currentPath.value.startsWith('/brands/') && currentPath.value !== '/brands/') {
    items.push({ label: '41家机场品牌数据库', url: '/brands/' });
  } else if (currentPath.value.startsWith('/articles/')) {
    if (fm.upstreamTopicPath && fm.topicTitle) {
      items.push({ label: fm.topicTitle, url: fm.upstreamTopicPath });
    }
  }

  if (fm.upstreamTopicPath && fm.topicTitle && fm.upstreamTopicPath !== currentPath.value && !currentPath.value.startsWith('/articles/')) {
    items.push({ label: fm.topicTitle, url: fm.upstreamTopicPath });
  }

  items.push({
    label: fm.breadcrumbTitle || fm.h1 || fm.title || page.value.title || '当前页面'
  });
  return items;
});

// Instant local index + Pagefind integration
const instantMatches = computed(() => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) return { brands: [], topics: [], articles: [], clients: [] };

  const matchedBrands = BRANDS.filter(
    (b) =>
      b.name.toLowerCase().includes(q) ||
      b.enName.toLowerCase().includes(q) ||
      b.aliases.some((a) => a.toLowerCase().includes(q)) ||
      b.protocols.some((p) => p.toLowerCase().includes(q)) ||
      b.lineType.toLowerCase().includes(q)
  ).slice(0, 6);

  const matchedTopics = SECONDARY_TOPICS.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.h1.toLowerCase().includes(q) ||
      t.primaryKeyword.toLowerCase().includes(q) ||
      t.secondaryKeywords.some((k) => k.toLowerCase().includes(q))
  ).slice(0, 6);

  const matchedArticles = PUBLISHED_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.primaryKeyword.toLowerCase().includes(q) ||
      a.clusterName.toLowerCase().includes(q)
  ).slice(0, 6);

  const matchedClients = CLIENTS.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.kernel.toLowerCase().includes(q) ||
      c.platforms.some((p) => p.toLowerCase().includes(q))
  ).slice(0, 4);

  return {
    brands: matchedBrands,
    topics: matchedTopics,
    articles: matchedArticles,
    clients: matchedClients
  };
});

const hasAnySearchResult = computed(() => {
  const m = instantMatches.value;
  return (
    m.brands.length > 0 ||
    m.topics.length > 0 ||
    m.articles.length > 0 ||
    m.clients.length > 0 ||
    pagefindResults.value.length > 0
  );
});

async function loadPagefind() {
  if (pagefindInstance || typeof window === 'undefined') return;
  try {
    const pfPath = '/pagefind/pagefind.js';
    pagefindInstance = await import(/* @vite-ignore */ pfPath);
    if (pagefindInstance?.init) {
      await pagefindInstance.init();
    }
    pagefindLoaded.value = true;
  } catch {
    // Fallback to built-in instant index during dev or if pagefind asset not yet requested
    pagefindLoaded.value = false;
  }
}

watch(searchInput, async (val) => {
  const q = val.trim();
  if (!q) {
    pagefindResults.value = [];
    return;
  }
  await loadPagefind();
  if (pagefindInstance?.search) {
    try {
      const res = await pagefindInstance.search(q);
      if (res?.results?.length) {
        const topData = await Promise.all(res.results.slice(0, 6).map((r: any) => r.data()));
        pagefindResults.value = topData;
      } else {
        pagefindResults.value = [];
      }
    } catch {
      pagefindResults.value = [];
    }
  }
});

function openSearchModal() {
  searchOpen.value = true;
  loadPagefind();
}

function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearchModal();
  } else if (e.key === 'Escape') {
    searchOpen.value = false;
    mobileMenuOpen.value = false;
    openDesktopDropdown.value = null;
  }
}

watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
    searchOpen.value = false;
    openDesktopDropdown.value = null;
  }
);

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('cc-open-search', openSearchModal);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('cc-open-search', openSearchModal);
});
</script>

<template>
  <div class="cc-site-wrapper">
    <!-- Top Utility Bar -->
    <div class="cc-topbar">
      <div class="cc-topbar-inner">
        <div class="cc-topbar-badges">
          <span class="cc-topbar-pill">
            <span class="cc-topbar-dot"></span>
            clash机场 (clash-cloud.run) · 中文机场评测与品牌数据库
          </span>
          <span>已核实独立品牌：<strong>41 家</strong></span>
          <span>实测快照批次：<code>2026-08-11</code> &amp; <code>2026-10-19</code></span>
        </div>
        <div class="cc-topbar-links">
          <a href="/brands/guangsuyun/">★ 首推：光速云万字评测</a>
          <a href="/brands/">41家品牌数据库</a>
          <a href="/compare/">同价位横向对比</a>
          <a href="/clients/">22款客户端下载库</a>
        </div>
      </div>
    </div>

    <!-- Main Sticky Header with 4 Primary Navs & 28 Secondary Topics -->
    <header class="cc-header">
      <div class="cc-header-inner">
        <a href="/" class="cc-brand-logo" aria-label="clash机场 首页">
          <span class="cc-brand-mark">CC</span>
          <span>
            clash机场
            <span class="cc-brand-sub">clash-cloud.run · 评测与品牌库</span>
          </span>
        </a>

        <!-- Desktop 4 Primary Navs -->
        <nav class="cc-nav-desktop" aria-label="主导航">
          <div
            v-for="nav in PRIMARY_NAVS"
            :key="nav.id"
            class="cc-nav-item"
            @mouseenter="openDesktopDropdown = nav.id"
            @mouseleave="openDesktopDropdown = null"
          >
            <a
              :href="nav.path"
              class="cc-nav-trigger"
              :class="{ 'is-active': isNavActive(nav.path, nav.id) }"
              :aria-expanded="openDesktopDropdown === nav.id"
            >
              <span>{{ nav.title }}</span>
              <span class="cc-nav-caret">▼</span>
            </a>

            <div class="cc-dropdown" :class="{ 'is-open': openDesktopDropdown === nav.id }">
              <div class="cc-dropdown-header">
                <a :href="nav.path">
                  <span>进入「{{ nav.title }}」频道总览</span>
                  <span>→</span>
                </a>
              </div>
              <ul class="cc-dropdown-list">
                <li v-for="t in nav.topics" :key="t.id">
                  <a
                    :href="t.path"
                    class="cc-dropdown-link"
                    :class="{ 'is-active': isTopicActive(t.path) }"
                  >
                    <span>{{ t.title }}</span>
                    <span class="cc-dropdown-badge">{{ t.badge }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <!-- Header Right Actions -->
        <div class="cc-header-actions">
          <button type="button" class="cc-search-btn" @click="openSearchModal" aria-label="打开全站搜索">
            <span>🔍 搜索品牌/教程</span>
            <kbd class="cc-search-kbd">⌘K</kbd>
          </button>

          <a href="/brands/" class="cc-cta-header">
            41家品牌库
          </a>

          <button
            type="button"
            class="cc-mobile-toggle"
            @click="mobileMenuOpen = !mobileMenuOpen"
            :aria-expanded="mobileMenuOpen"
            aria-label="展开移动端导航菜单"
          >
            {{ mobileMenuOpen ? '✕' : '☰ 导航' }}
          </button>
        </div>
      </div>

      <!-- Mobile Accordion Drawer -->
      <div
        v-if="mobileMenuOpen"
        style="background: #ffffff; border-top: 1px solid var(--cc-border); padding: 14px 20px 24px; max-height: 82vh; overflow-y: auto;"
      >
        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <a href="/brands/guangsuyun/" class="cc-btn cc-btn-primary" style="flex: 1; font-size: 13px; padding: 8px;">★ 光速云评测</a>
          <a href="/brands/" class="cc-btn cc-btn-outline" style="flex: 1; font-size: 13px; padding: 8px;">41家品牌库</a>
          <a href="/compare/" class="cc-btn cc-btn-outline" style="flex: 1; font-size: 13px; padding: 8px;">品牌对比</a>
        </div>

        <div
          v-for="nav in PRIMARY_NAVS"
          :key="nav.id"
          style="border-bottom: 1px solid var(--cc-border); padding: 10px 0;"
        >
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <a :href="nav.path" style="font-size: 16px; font-weight: 800; color: var(--cc-navy);">
              {{ nav.title }}（频道首页）
            </a>
            <button
              type="button"
              @click="toggleMobileSection(nav.id)"
              style="background: var(--cc-bg-soft); border: 1px solid var(--cc-border); border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer;"
            >
              {{ expandedMobileNav === nav.id ? '收起 ▲' : '展开7个栏目 ▼' }}
            </button>
          </div>
          <div v-if="expandedMobileNav === nav.id" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 10px;">
            <a
              v-for="t in nav.topics"
              :key="t.id"
              :href="t.path"
              style="padding: 8px 10px; background: var(--cc-bg-soft); border-radius: 6px; font-size: 13.5px; font-weight: 600; color: var(--cc-text-secondary);"
            >
              {{ t.title }}
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Breadcrumb Bar on Inner Pages -->
    <nav v-if="!isHome && breadcrumbs.length" class="cc-breadcrumb-bar" aria-label="面包屑导航">
      <div class="cc-breadcrumb-inner">
        <ol class="cc-breadcrumb-list">
          <li v-for="(item, idx) in breadcrumbs" :key="idx" style="display: inline-flex; align-items: center; gap: 6px;">
            <a v-if="item.url && idx < breadcrumbs.length - 1" :href="item.url">{{ item.label }}</a>
            <span v-else class="cc-breadcrumb-current">{{ item.label }}</span>
            <span v-if="idx < breadcrumbs.length - 1" class="cc-breadcrumb-sep">/</span>
          </li>
        </ol>
        <div style="font-size: 12px; color: var(--cc-text-muted);">
          数据核验基准：<code>2026-10-19</code> | <a href="/resources/risk-intel/">数据审计说明</a>
        </div>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="cc-main" data-pagefind-body>
      <!-- 404 Not Found Static & Client View -->
      <div v-if="page.isNotFound" class="cc-container cc-prose" data-pagefind-ignore>
        <h1>404 — 您访问的页面不存在或已完成路由归并</h1>
        <blockquote>
          您请求的 URL 可能拼写有误，或属于尚未正式发布的规划储备文章（本站严格执行「未完成完整正文绝不生成空白壳页面」的 SEO 规范）。请通过以下核心入口继续浏览：
        </blockquote>
        <div class="cc-grid-3" style="margin: 28px 0;">
          <div class="cc-card" style="border-top: 3px solid #2563eb;">
            <h2 style="margin-top: 0; font-size: 18px;">🏢 机场品牌数据库与评测</h2>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary);">检索 41 家去重独立机场品牌的套餐价格、IEPL/IPLC 线路与 2026-08-11 晚高峰实测截图。</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <a href="/brands/guangsuyun/" class="cc-btn cc-btn-primary">★ 首推：光速云万字深度评测</a>
              <a href="/brands/" class="cc-btn cc-btn-outline">进入 41 家品牌筛选数据库 →</a>
              <a href="/compare/" class="cc-btn cc-btn-outline">同价位品牌二选一对比 →</a>
            </div>
          </div>

          <div class="cc-card" style="border-top: 3px solid #10b981;">
            <h2 style="margin-top: 0; font-size: 18px;">🧭 四大主题频道总入口</h2>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary);">覆盖 28 个二级专题栏目与 56 个三级内容集群代表文章。</p>
            <ul style="padding-left: 18px; font-size: 14px; margin-bottom: 12px;">
              <li><a href="/airport/">① 机场推荐（排行 / 性价比 / 稳定 / 便宜）</a></li>
              <li><a href="/vpn/">② VPN 与加速器（免费 / 手机 / 软件评测）</a></li>
              <li><a href="/clash/">③ Clash 客户端（Verge下载 / 订阅 / Meta）</a></li>
              <li><a href="/resources/">④ 资源与情报（跑路预警 / FAQ / 节点检测）</a></li>
            </ul>
          </div>

          <div class="cc-card" style="border-top: 3px solid #f59e0b;">
            <h2 style="margin-top: 0; font-size: 18px;">🛠️ 热门客户端与排障手册</h2>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary);">解决订阅导入失败、节点全红 Timeout 与 Mihomo 内核升级问题。</p>
            <ul style="padding-left: 18px; font-size: 14px; margin-bottom: 12px;">
              <li><a href="/clash/verge-download/">Clash Verge Rev 官方下载指南</a></li>
              <li><a href="/clash/verge-subscription/">Clash 订阅导入保姆级教程</a></li>
              <li><a href="/clash/troubleshooting/">节点全红 Timeout 6 步排查法</a></li>
              <li><a href="/clients/">22 款全平台代理客户端知识库</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Full-width layout for Home -->
      <div v-else-if="isHome">
        <Content />
      </div>

      <!-- Full-width container for Database / Compare / Clients -->
      <div v-else-if="isFullWidth" class="cc-container cc-prose">
        <Content />
      </div>

      <!-- Standard 2-Column Editorial Layout with Right Conversion & Navigation Aside -->
      <div v-else class="cc-doc-layout">
        <article class="cc-doc-main cc-prose">
          <Content />
        </article>

        <aside class="cc-doc-aside" aria-label="侧边栏导航与主力推荐">
          <!-- Primary Featured Brand Card -->
          <div class="cc-aside-card" style="border-top: 3px solid #2563eb; background: linear-gradient(180deg, #eff6ff 0%, #ffffff 45%);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <span style="background: #1d4ed8; color: #fff; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 999px;">
                ★ 本站首推主力品牌
              </span>
              <span style="font-size: 11px; color: var(--cc-text-muted);">赞助披露</span>
            </div>
            <h3 style="margin: 0 0 6px; font-size: 16.5px;">
              <a href="/brands/guangsuyun/" style="color: var(--cc-navy);">光速云（LightSpeed Cloud）</a>
            </h3>
            <p style="font-size: 12.5px; color: var(--cc-text-secondary); margin: 0 0 10px;">
              2020年老牌 IEPL + 企业级内网双专线。2026-08-11 晚高峰 55 节点 100% 在线，峰值达 502.87 MB/s。
            </p>
            <div style="font-size: 12px; background: #fff; border: 1px solid var(--cc-border); border-radius: 6px; padding: 8px; margin-bottom: 10px;">
              <div>• <strong>轻量版：</strong>¥99/年 · 69GB/月 (折合¥8.25/月)</div>
              <div>• <strong>极速版：</strong>¥25/月 · 168GB/月</div>
              <div>• <strong>不限时：</strong>¥147 一次性 · 247GB</div>
              <div>• <strong>专属优惠码：</strong><code>AMM</code></div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
              <a
                href="https://sahude.gsyvipaff.com/#/?code=keqgvT5Y"
                target="_blank"
                rel="nofollow sponsored noopener"
                class="cc-btn cc-btn-primary"
                style="font-size: 13px; padding: 8px;"
              >
                前往光速云官方注册 ↗
              </a>
              <a href="/brands/guangsuyun/" class="cc-btn cc-btn-outline" style="font-size: 12.5px; padding: 6px;">
                查看万字深度实测档案 →
              </a>
            </div>
          </div>

          <!-- Quick Tools & Database Card -->
          <div class="cc-aside-card">
            <h3>🧭 核心数据库与对比工具</h3>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px;">
              <li><a href="/brands/">📊 41 家独立机场品牌筛选库</a></li>
              <li><a href="/compare/">⚖️ 同价位机场横向对比中心</a></li>
              <li><a href="/airport/ranking/">🏆 2026-08-11 17家晚高峰实测榜</a></li>
              <li><a href="/clients/">💻 22 款全平台代理客户端下载</a></li>
              <li><a href="/clash/verge-subscription/">🔗 Clash Verge Rev 订阅导入教程</a></li>
              <li><a href="/resources/scam-alert/">🚨 机场跑路预警与同源矩阵识别</a></li>
            </ul>
          </div>

          <!-- 4 Primary Channels Quick Jump -->
          <div class="cc-aside-card">
            <h3>📂 四大专题频道入口</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <a
                v-for="nav in PRIMARY_NAVS"
                :key="nav.id"
                :href="nav.path"
                style="padding: 8px; background: #fff; border: 1px solid var(--cc-border); border-radius: 6px; font-size: 13px; font-weight: 600; text-align: center; color: var(--cc-navy);"
              >
                {{ nav.title }}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <!-- Full-Site Footer with all 4 Primary Navs & 28 Secondary Topics -->
    <footer class="cc-footer">
      <div class="cc-footer-inner">
        <div class="cc-footer-grid">
          <div class="cc-footer-col">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="cc-brand-mark">CC</span>
              <strong style="color: #fff; font-size: 17px;">clash机场 (clash-cloud.run)</strong>
            </div>
            <p style="font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
              中文机场与 VPN 专业评测媒体 + 41家去重独立品牌数据库 + Clash 客户端知识库。坚持实测存证、参数同源、客观披露。
            </p>
            <div style="font-size: 12px; display: flex; flex-direction: column; gap: 4px;">
              <a href="/brands/" style="color: #38bdf8;">→ 41家独立机场品牌数据库</a>
              <a href="/brands/guangsuyun/" style="color: #38bdf8;">→ 光速云万字深度评测报告</a>
              <a href="/compare/" style="color: #38bdf8;">→ 机场同价位横向对比中心</a>
              <a href="/clients/" style="color: #38bdf8;">→ 22款代理客户端下载库</a>
            </div>
          </div>

          <div v-for="nav in PRIMARY_NAVS" :key="nav.id" class="cc-footer-col">
            <h4>
              <a :href="nav.path" style="color: #ffffff;">{{ nav.title }}</a>
            </h4>
            <ul>
              <li v-for="t in nav.topics" :key="t.id">
                <a :href="t.path">{{ t.title }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="cc-footer-bottom">
          <div>
            <strong>推广与联盟链接披露（Affiliate Disclosure）：</strong>本站部分品牌注册入口包含推广链接（均标注 <code>rel="nofollow sponsored noopener"</code>）。通过此类链接注册不会增加您的购买费用，所得佣金用于维持服务器及周期性脚本实测。光速云为本站商业合作首推品牌，所有实测截图与历史价格差异均公开透明展示。
          </div>
          <div>
            <strong>合规声明与数据准则：</strong>本站仅提供网络加速技术研究、跨国企业办公通信架构对比与开源软件教程，不提供或销售任何代理服务。请严格遵守所在地法律法规合法合规使用网络工具。
          </div>
          <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding-top: 8px; border-top: 1px solid #1e293b; color: #94a3b8;">
            <span>© 2026 clash机场 (https://clash-cloud.run) · 保留所有权利</span>
            <span>Sitemap: <a href="/sitemap.xml" style="color: #93c5fd;">/sitemap.xml</a> | Robots: <a href="/robots.txt" style="color: #93c5fd;">/robots.txt</a></span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Full-Site Search Modal (Pagefind + Instant Database Index) -->
    <div v-if="searchOpen" class="cc-modal-backdrop" @click="searchOpen = false">
      <div class="cc-search-modal" @click.stop>
        <div style="padding: 16px; border-bottom: 1px solid var(--cc-border); display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 18px;">🔍</span>
          <input
            v-model="searchInput"
            type="search"
            autofocus
            placeholder="输入品牌名（如：光速云、星岛梦）、协议（VLESS、Hysteria2）或问题（节点全红、订阅导入）..."
            style="flex: 1; border: none; outline: none; font-size: 15px; color: var(--cc-navy);"
          />
          <button
            type="button"
            @click="searchOpen = false"
            style="background: var(--cc-bg-muted); border: none; border-radius: 6px; padding: 5px 10px; font-size: 12px; cursor: pointer;"
          >
            ESC 关闭
          </button>
        </div>

        <div style="max-height: 68vh; overflow-y: auto; padding: 16px;">
          <!-- Default Quick Suggestions when input is empty -->
          <div v-if="!searchInput.trim()">
            <div style="font-size: 12px; font-weight: 700; color: var(--cc-text-muted); margin-bottom: 8px;">🔥 热门搜索词与高频入口</div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
              <button
                v-for="kw in ['光速云', 'VLESS', 'Hysteria 2', 'Clash Verge', '便宜机场', '晚高峰', '节点全红', '专属客户端']"
                :key="kw"
                type="button"
                @click="searchInput = kw"
                style="background: var(--cc-bg-soft); border: 1px solid var(--cc-border); border-radius: 999px; padding: 4px 12px; font-size: 12.5px; cursor: pointer; color: var(--cc-navy);"
              >
                {{ kw }}
              </button>
            </div>
            <div style="font-size: 12px; color: var(--cc-text-muted);">
              支持全站 Pagefind 静态全文检索 + 41 家机场品牌 / 28 个专题 / 56 篇代表作实时匹配。
            </div>
          </div>

          <!-- Search Results -->
          <div v-else>
            <!-- Zero Results Fallback -->
            <div v-if="!hasAnySearchResult" style="text-align: center; padding: 24px;">
              <div style="font-size: 15px; font-weight: 700; color: var(--cc-navy); margin-bottom: 6px;">
                未找到与「{{ searchInput }}」直接匹配的条目
              </div>
              <p style="font-size: 13px; color: var(--cc-text-muted); margin-bottom: 14px;">
                您可以尝试搜索品牌简称（如“光速云”“飞鸟”）、协议名称（“VLESS”“Trojan”）或直接浏览下方核心库：
              </p>
              <div style="display: flex; justify-content: center; gap: 10px;">
                <a href="/brands/" class="cc-btn cc-btn-primary" style="font-size: 12.5px; padding: 6px 14px;">浏览 41 家品牌库</a>
                <a href="/resources/faq/" class="cc-btn cc-btn-outline" style="font-size: 12.5px; padding: 6px 14px;">查看 189 问 FAQ</a>
              </div>
            </div>

            <!-- Brand Matches -->
            <div v-if="instantMatches.brands.length" style="margin-bottom: 16px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--cc-accent); margin-bottom: 6px;">🏢 匹配机场品牌 ({{ instantMatches.brands.length }})</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <a
                  v-for="b in instantMatches.brands"
                  :key="b.slug"
                  :href="`/brands/${b.slug}/`"
                  style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--cc-bg-soft); border-radius: 6px; border: 1px solid var(--cc-border);"
                >
                  <div>
                    <strong style="color: var(--cc-navy);">{{ b.name }} ({{ b.enName }})</strong>
                    <span style="margin-left: 8px; font-size: 12px; color: var(--cc-text-muted);">{{ b.lineType }} · {{ b.protocols.join('/') }}</span>
                  </div>
                  <span style="font-size: 12px; font-weight: 700; color: var(--cc-accent);">¥{{ b.minAnnualizedMonthlyPrice ?? b.minMonthlyPrice }}/月起 →</span>
                </a>
              </div>
            </div>

            <!-- Topic Matches -->
            <div v-if="instantMatches.topics.length" style="margin-bottom: 16px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--cc-accent); margin-bottom: 6px;">📂 匹配专题栏目 ({{ instantMatches.topics.length }})</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <a
                  v-for="t in instantMatches.topics"
                  :key="t.id"
                  :href="t.path"
                  style="display: block; padding: 8px 12px; background: var(--cc-bg-soft); border-radius: 6px; border: 1px solid var(--cc-border);"
                >
                  <div style="font-weight: 700; color: var(--cc-navy); font-size: 13.5px;">{{ t.title }} — {{ t.h1 }}</div>
                  <div style="font-size: 12px; color: var(--cc-text-muted);">{{ t.seoDescription }}</div>
                </a>
              </div>
            </div>

            <!-- Article Matches -->
            <div v-if="instantMatches.articles.length" style="margin-bottom: 16px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--cc-accent); margin-bottom: 6px;">📖 匹配深度文章 ({{ instantMatches.articles.length }})</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <a
                  v-for="a in instantMatches.articles"
                  :key="a.id"
                  :href="a.url"
                  style="display: block; padding: 8px 12px; background: var(--cc-bg-soft); border-radius: 6px; border: 1px solid var(--cc-border);"
                >
                  <div style="font-weight: 700; color: var(--cc-navy); font-size: 13.5px;">{{ a.title }}</div>
                  <div style="font-size: 12px; color: var(--cc-text-muted);">所属专题：{{ a.topicTitle }} · 关键词：{{ a.primaryKeyword }}</div>
                </a>
              </div>
            </div>

            <!-- Pagefind Full-Text Matches -->
            <div v-if="pagefindResults.length">
              <div style="font-size: 12px; font-weight: 700; color: var(--cc-success); margin-bottom: 6px;">📄 Pagefind 全文索引命中 ({{ pagefindResults.length }})</div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <a
                  v-for="(pf, i) in pagefindResults"
                  :key="i"
                  :href="pf.url"
                  style="display: block; padding: 8px 12px; background: #f0fdf4; border-radius: 6px; border: 1px solid #bbf7d0;"
                >
                  <div style="font-weight: 700; color: var(--cc-navy); font-size: 13.5px;">{{ pf.meta?.title || pf.url }}</div>
                  <div style="font-size: 12px; color: var(--cc-text-secondary);" v-html="pf.excerpt"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
