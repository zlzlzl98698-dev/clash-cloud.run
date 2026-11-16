import fs from 'node:fs';
import path from 'node:path';
import { PRIMARY_NAVS, SECONDARY_TOPICS } from './seo-matrix-data.mjs';

const ROOT = '/Users/mac/Desktop/clash-cloud.run';
const brands = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/.vitepress/data/brands.json'), 'utf8'));

// Read the 189 GEO long-tail questions from source file
const geoRawPath = '/Users/mac/Downloads/Telegram Desktop/机场长尾问题库.txt';
const geoRawText = fs.existsSync(geoRawPath) ? fs.readFileSync(geoRawPath, 'utf8') : '';

function classifyQuestion(q) {
  if (/免费/.test(q)) return { category: '免费资源与安全核验', topicPath: '/resources/free-nodes/' };
  if (/跑路|安全|隐私|泄露|靠谱|知乎|GitHub|Reddit|可信|坑|风险/.test(q)) return { category: '安全风控与跑路预警', topicPath: '/resources/scam-alert/' };
  if (/Clash|Mihomo|Meta|Verge|订阅/.test(q)) return { category: 'Clash客户端与订阅配置', topicPath: '/clash/verge-subscription/' };
  if (/Shadowrocket|小火箭|iOS|iPhone|iPad|安卓|手机|Mac|Windows|电脑|Surge|Stash|Quantumult|v2rayN|sing-box|专属客户端/.test(q)) return { category: '多平台客户端与移动端', topicPath: '/vpn/mobile/' };
  if (/连不上|超时|全红|失败|打不开|断流|慢|排查|Timeout/.test(q)) return { category: '故障排查与连接修复', topicPath: '/clash/troubleshooting/' };
  if (/价格|多少钱|月付|年付|便宜|性价比|套餐|流量|倍率|重置|退款|优惠|试用|共享|设备数/.test(q)) return { category: '套餐价格与性价比精算', topicPath: '/airport/value/' };
  if (/IEPL|IPLC|中转|直连|专线|BGP|晚高峰|稳定|延迟|测速|带宽|节点/.test(q)) return { category: '专线架构与晚高峰测速', topicPath: '/airport/stable/' };
  if (/ChatGPT|Claude|AI|Netflix|Disney|YouTube|TikTok|流媒体|解锁|地区|香港|日本|新加坡|台湾|美国/.test(q)) return { category: 'AI与流媒体解锁排行', topicPath: '/airport/ranking/' };
  if (/VPN|加速器|对比|替代|迁移/.test(q)) return { category: 'VPN与加速器对比', topicPath: '/vpn/compare/' };
  if (/新手|入门|怎么用|购买后|什么是|区别|梯子|科学上网|魔法/.test(q)) return { category: '新手入门与基础认知', topicPath: '/airport/guide/' };
  return { category: '综合推荐与选购决策', topicPath: '/airport/recommend/' };
}

function parseGeoQuestions(raw) {
  const lines = raw.split(/\r?\n/);
  const list = [];
  let idx = 1;
  for (const line of lines) {
    const trimmed = line.trim().replace(/^\d+\.\s*/, '');
    if (!trimmed) continue;
    const { category, topicPath } = classifyQuestion(trimmed);
    list.push({
      id: idx++,
      category,
      topicPath,
      question: trimmed
    });
  }
  return list;
}

const geoQuestionsList = parseGeoQuestions(geoRawText);

// Enrich PRIMARY_NAVS with topics array and consistent fields
const EN_LABELS = {
  airport: 'AIRPORT RECOMMENDATIONS',
  vpn: 'VPN & ACCELERATORS',
  clash: 'CLASH CLIENTS & MIHOMO',
  resources: 'INTEL, TOOLS & FAQ'
};

const TOPIC_BADGES = {
  'airport-recommend': '精选清单',
  'airport-ranking': '实测天梯',
  'airport-value': '单GB精算',
  'airport-stable': 'IEPL专线',
  'airport-cheap': '≤10元档',
  'airport-free-ladder': '风险核验',
  'airport-guide': '科普入门',
  'vpn-recommend': '方案对比',
  'vpn-free': '安全红线',
  'vpn-mobile': 'iOS/安卓',
  'vpn-reviews': '22款横评',
  'vpn-accelerator': '低延迟',
  'vpn-compare': '二选一PK',
  'vpn-best': '主备双持',
  'clash-recommend': '33家兼容',
  'clash-verge': '桌面首选',
  'clash-verge-download': '官方源码',
  'clash-verge-subscription': '3步导入',
  'clash-meta': 'Mihomo核',
  'clash-tutorial': '分流配置',
  'clash-troubleshooting': '6步排障',
  'resources-free-nodes': '存活审计',
  'resources-scam-alert': '8大信号',
  'resources-faq': '189问百科',
  'resources-risk-intel': '同源图谱',
  'resources-node-check': 'IP与测速',
  'resources-subscription-issues': '报错修复',
  'resources-beginner-help': '10分钟上手'
};

for (const nav of PRIMARY_NAVS) {
  nav.enLabel = EN_LABELS[nav.id] || nav.id.toUpperCase();
  nav.primaryKeywords = nav.primaryKeywords || [nav.primaryKeyword];
  nav.heroSubtitle = nav.summary;
  nav.targetAudience = nav.summary;
  nav.topics = SECONDARY_TOPICS.filter(t => t.navId === nav.id).map(t => ({
    id: t.id,
    title: t.title,
    path: t.path,
    badge: TOPIC_BADGES[t.id] || '核心专题',
    desc: t.seoDescription
  }));
}

// Build clusters flat list and 392 planned articles (7 per cluster across 56 clusters)
const CLUSTERS = [];
const PLANNED_ARTICLES = [];

// Distinct sub-angle templates that adapt specifically to each cluster's theme, keywords, and featured brands
const SUB_ANGLES = [
  {
    suffixSlug: 'parameter-audit-and-trap-prevention',
    buildTitle: (c, t, b1, b2) => `${c.primaryKeyword}避坑实操：如何核验「${c.coreTheme.slice(0, 16)}」的真实参数与隐性限制？`,
    intent: '商业调查与参数核验（避开虚假宣传与倍率陷阱）',
    priority: 'P1',
    outline: (c, t, b1, b2) => [
      `一、核心结论：为什么看${c.primaryKeyword}不能只看表面标称值？`,
      `二、${c.name}的 4 项硬核核验指标（入口架构/倍率/晚高峰/售后）`,
      `三、实测与官方资料比对：以 ${b1.name} 与 ${b2.name} 为例`,
      `四、常见宣传话术拆解与风险排查清单`
    ]
  },
  {
    suffixSlug: 'budget-tier-and-plan-selection',
    buildTitle: (c, t, b1, b2) => `围绕「${c.primaryKeyword}」怎么选套餐？月付、年付折算与按量不限时决策矩阵`,
    intent: '交易决策与套餐选购（匹配个人月度流量消耗与付款周期）',
    priority: 'P1',
    outline: (c, t, b1, b2) => [
      `一、不同流量消耗档位（<80GB / 200GB / 500GB+）在${t.title}中的最优解`,
      `二、月付试错 vs 年付折扣：${b1.name}（最低 ¥${b1.minMonthlyPrice}/月）与同类套餐账单精算`,
      `三、流量重置周期（自然月 vs 账单日）与在线设备限制核实`,
      `四、下单前优惠码核验与防跑路资金分配建议`
    ]
  },
  {
    suffixSlug: 'evening-peak-and-unlock-verification',
    buildTitle: (c, t, b1, b2) => `${c.primaryKeyword}晚高峰与流媒体/AI解锁表现：基于 2026-08-11 实测快照的深度复盘`,
    intent: '性能核查与场景验证（检验晚高峰吞吐、ChatGPT 及 Netflix 解锁能力）',
    priority: 'P1',
    outline: (c, t, b1, b2) => [
      `一、测试环境说明：2026-08-11 实测快照方法论与单次测试局限声明`,
      `二、HTTP 延迟、万兆多线程峰值与节点在线率数据交叉比对`,
      `三、ChatGPT / Claude / Netflix / Disney+ 区域分流与原生 IP 实况`,
      `四、${b1.name}、${b2.name} 等关联品牌在${t.title}场景下的表现差异`
    ]
  },
  {
    suffixSlug: 'client-compatibility-and-rule-routing',
    buildTitle: (c, t, b1, b2) => `${c.primaryKeyword}客户端兼容与分流指南：Mihomo (Clash Meta)、Shadowrocket 与专属端配置`,
    intent: '技术配置与工具落地（确保所选方案在电脑、手机与软路由上正常工作）',
    priority: 'P2',
    outline: (c, t, b1, b2) => [
      `一、协议兼容性核查：VLESS / Hysteria 2 / Trojan / Shadowsocks 对内核的要求`,
      `二、通用订阅机场 vs 仅专属客户端品牌在「${c.name}」中的取舍`,
      `三、Rule 规则分流、Fake-IP DNS 与策略组自动回退（Fallback）最佳实践`,
      `四、跨平台（Windows / macOS / iOS / Android）常见报错快速定位`
    ]
  },
  {
    suffixSlug: 'head-to-head-brand-comparison-guide',
    buildTitle: (c, t, b1, b2) => `${t.title}代表品牌深度对决：${b1.name} vs ${b2.name} 在「${c.primaryKeyword}」场景下怎么二选一？`,
    intent: '横向对比与最终转化（在两家热门候选品牌之间做出明确选择）',
    priority: 'P1',
    outline: (c, t, b1, b2) => [
      `一、一句话结论：什么人该选 ${b1.name}，什么人更适合 ${b2.name}？`,
      `二、架构与协议对比：${b1.lineType}（${b1.protocols.join('/')}）vs ${b2.lineType}（${b2.protocols.join('/')}）`,
      `三、起步门槛与单GB成本对比：¥${b1.minMonthlyPrice}/月 vs ¥${b2.minMonthlyPrice}/月`,
      `四、客户端支持、流媒体/AI解锁能力与售后保障综合评分`
    ]
  },
  {
    suffixSlug: 'risk-control-and-backup-architecture',
    buildTitle: (c, t, b1, b2) => `${c.primaryKeyword}长期稳定使用手册：防失联备份、同源站群识别与应急排障清单`,
    intent: '风险防范与运维保障（降低单点故障、订阅泄露与跑路损失）',
    priority: 'P2',
    outline: (c, t, b1, b2) => [
      `一、为什么在「${t.title}」场景下也必须建立异构双持备份意识？`,
      `二、同源站群与同规格矩阵识别：避免买到同一上游的两家马甲机场`,
      `三、订阅链接防泄露守则、备用官网书签保存与 DNS 污染应对`,
      `四、高频 FAQ 与一键故障自检流程`
    ]
  }
];

let articleGlobalIndex = 1;

for (const topic of SECONDARY_TOPICS) {
  const nav = PRIMARY_NAVS.find(n => n.id === topic.navId);
  const topicBrands = (topic.featuredBrands || [])
    .map(slug => brands.find(b => b.slug === slug))
    .filter(Boolean);
  const b1 = topicBrands[0] || brands[0];
  const b2 = topicBrands[1] || brands[1];
  const b3 = topicBrands[2] || brands[2];

  for (const cluster of topic.clusters) {
    const clusterEntry = {
      ...cluster,
      navId: topic.navId,
      navTitle: nav.title,
      navPath: nav.path,
      topicId: topic.id,
      topicTitle: topic.title,
      topicPath: topic.path,
      featuredBrands: topic.featuredBrands,
      repArticleUrl: `/articles/${cluster.repArticleSlug}/`,
      articleIds: []
    };

    // Article #1: Published Representative Article (P0)
    const repId = `ART-${String(articleGlobalIndex++).padStart(3, '0')}`;
    clusterEntry.articleIds.push(repId);

    const repArticle = {
      id: repId,
      clusterId: cluster.id,
      clusterName: cluster.name,
      topicId: topic.id,
      topicTitle: topic.title,
      upstreamTopicPath: topic.path,
      navId: topic.navId,
      navTitle: nav.title,
      navPath: nav.path,
      title: cluster.repArticleTitle,
      slug: cluster.repArticleSlug,
      url: `/articles/${cluster.repArticleSlug}/`,
      status: 'published',
      priority: 'P0',
      primaryKeyword: cluster.primaryKeyword,
      secondaryKeywords: cluster.secondaryKeywords,
      searchIntent: cluster.searchIntent,
      targetUser: cluster.targetUser,
      outline: [
        `一、核心结论（Answer-First）：关于「${cluster.primaryKeyword}」的直接购买与配置建议`,
        `二、判断标准与核验维度：${cluster.coreTheme}`,
        `三、41 家独立品牌数据库关联筛选与同口径参数对比表（含 ${b1.name}、${b2.name}、${b3.name}）`,
        `四、实操步骤、客户端兼容性核验与常见踩坑点排查`,
        `五、常见问题解答（GEO / AEO 结构化 FAQ）与下游品牌评测入口`
      ],
      coreQuestions: cluster.geoQuestions,
      faq: cluster.geoQuestions.map(q => ({
        q,
        a: `针对「${q}」，需结合线路架构（IEPL/IPLC 专线 vs BGP 中转）、协议内核兼容性（如 Mihomo 对 VLESS/Hysteria2 的支持）及月付试错成本综合判断。详见正文数据核验表与品牌实测档案。`
      })),
      dataReferences: [
        `docs/.vitepress/data/brands.ts（${b1.name} / ${b2.name} / ${b3.name} 套餐与线路核实记录）`,
        `docs/public/images/speedtest/speedtest-manifest.json（2026-08-11 实测快照）`,
        `docs/.vitepress/data/clients.ts（22 款全平台代理客户端兼容矩阵）`
      ],
      relatedArticles: [], // populated in second pass
      downstreamBrandSlugs: topic.featuredBrands,
      downstreamBrandPaths: topic.featuredBrands.map(s => `/brands/${s}/`),
      downstreamComparePath: '/compare/'
    };
    PLANNED_ARTICLES.push(repArticle);

    // Articles #2 to #7: 6 Planned Articles per Cluster
    for (let i = 0; i < SUB_ANGLES.length; i++) {
      const angle = SUB_ANGLES[i];
      const artId = `ART-${String(articleGlobalIndex++).padStart(3, '0')}`;
      clusterEntry.articleIds.push(artId);
      const slug = `${cluster.slug}-${angle.suffixSlug}`;
      const kw2 = cluster.secondaryKeywords[i % cluster.secondaryKeywords.length] || cluster.primaryKeyword;

      PLANNED_ARTICLES.push({
        id: artId,
        clusterId: cluster.id,
        clusterName: cluster.name,
        topicId: topic.id,
        topicTitle: topic.title,
        upstreamTopicPath: topic.path,
        navId: topic.navId,
        navTitle: nav.title,
        navPath: nav.path,
        title: angle.buildTitle(cluster, topic, b1, b2),
        slug,
        url: `/articles/${slug}/`,
        status: 'planned',
        priority: angle.priority,
        primaryKeyword: `${cluster.primaryKeyword} ${kw2}`,
        secondaryKeywords: [cluster.primaryKeyword, ...cluster.secondaryKeywords],
        searchIntent: angle.intent,
        targetUser: cluster.targetUser,
        outline: angle.outline(cluster, topic, b1, b2),
        coreQuestions: cluster.geoQuestions,
        faq: cluster.geoQuestions.map(q => ({
          q,
          a: `请参考 ${cluster.name} 集群代表作《${cluster.repArticleTitle}》及 ${b1.name}、${b2.name} 品牌深度评测页的核实数据。`
        })),
        dataReferences: [
          `docs/.vitepress/data/brands.ts（41 家独立品牌统一数据源）`,
          `品牌数据审计报告.md & 数据来源及核实记录.md`
        ],
        relatedArticles: [repArticle.url],
        downstreamBrandSlugs: topic.featuredBrands,
        downstreamBrandPaths: topic.featuredBrands.map(s => `/brands/${s}/`),
        downstreamComparePath: '/compare/'
      });
    }

    CLUSTERS.push(clusterEntry);
  }
}

// Populate relatedArticles for published articles (link sibling cluster rep article + same nav rep articles)
const publishedArticles = PLANNED_ARTICLES.filter(a => a.status === 'published');
for (const art of publishedArticles) {
  const sameTopicOthers = publishedArticles.filter(a => a.topicId === art.topicId && a.id !== art.id);
  const sameNavOthers = publishedArticles.filter(a => a.navId === art.navId && a.topicId !== art.topicId).slice(0, 3);
  art.relatedArticles = [...sameTopicOthers, ...sameNavOthers].map(a => ({
    title: a.title,
    url: a.url,
    clusterName: a.clusterName
  }));
}

// 1. Write docs/.vitepress/data/navigation.ts
const navTsContent = `// Auto-generated by scripts/build-seo-matrix.mjs — DO NOT EDIT MANUALLY
export interface NavTopicSummary {
  id: string;
  title: string;
  path: string;
  badge: string;
  desc: string;
}

export interface PrimaryNav {
  id: string;
  title: string;
  path: string;
  enLabel: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  heroSubtitle: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  searchIntent: string;
  targetAudience: string;
  topics: NavTopicSummary[];
}

export interface ClusterItem {
  id: string;
  slug: string;
  name: string;
  coreTheme: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  targetUser: string;
  geoQuestions: string[];
  repArticleSlug: string;
  repArticleTitle: string;
  repArticleUrl?: string;
}

export interface SecondaryTopic {
  id: string;
  navId: string;
  title: string;
  path: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  userNeed: string;
  featuredBrands: string[];
  clusters: ClusterItem[];
}

export interface ArticleRecord {
  id: string;
  clusterId: string;
  clusterName: string;
  topicId: string;
  topicTitle: string;
  upstreamTopicPath: string;
  navId: string;
  navTitle: string;
  navPath: string;
  title: string;
  slug: string;
  url: string;
  status: 'published' | 'planned';
  priority: 'P0' | 'P1' | 'P2';
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  targetUser: string;
  outline: string[];
  coreQuestions: string[];
  faq: { q: string; a: string }[];
  dataReferences: string[];
  relatedArticles: any[];
  downstreamBrandSlugs: string[];
  downstreamBrandPaths: string[];
  downstreamComparePath: string;
}

export const PRIMARY_NAVS: PrimaryNav[] = ${JSON.stringify(PRIMARY_NAVS, null, 2)};

export const SECONDARY_TOPICS: SecondaryTopic[] = ${JSON.stringify(SECONDARY_TOPICS, null, 2)};

export const CLUSTERS = ${JSON.stringify(CLUSTERS, null, 2)};

export const PUBLISHED_ARTICLES: ArticleRecord[] = ${JSON.stringify(publishedArticles, null, 2)};

export const ALL_PLANNED_ARTICLES: ArticleRecord[] = ${JSON.stringify(PLANNED_ARTICLES, null, 2)};

export const GEO_QUESTIONS = ${JSON.stringify(geoQuestionsList, null, 2)};
`;

fs.writeFileSync(path.join(ROOT, 'docs/.vitepress/data/navigation.ts'), navTsContent, 'utf8');
console.log('Generated docs/.vitepress/data/navigation.ts');

// Helper for CSV escaping
function csvCell(val) {
  const s = String(val ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

// 2. Write SEO-一级导航规划.md
let mdPrimary = `# SEO 一级导航规划（4 大核心搜索主题中心）\n\n`;
mdPrimary += `> 站点域名：\`https://clash-cloud.run\` | 品牌名称：**clash机场** | 语言：\`zh-CN\`\n`;
mdPrimary += `> 架构层级：4 个一级主导航（均可点击进入独立专题首页）→ 28 个二级栏目专题 → 56 个三级文章集群 → 392 篇规划 SEO 文章（含 56 篇已发布集群代表作）→ 41 家独立机场品牌深度评测。\n\n`;
mdPrimary += `## 一、四大主导航总览表\n\n`;
mdPrimary += `| 序号 | 一级导航名称 | 路由路径 | 英文标识 | 下辖二级栏目数 | 下辖三级集群数 | 核心主关键词 | 搜索意图定位 |\n`;
mdPrimary += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;
PRIMARY_NAVS.forEach((n, idx) => {
  mdPrimary += `| ${idx + 1} | **${n.title}** | \`${n.path}\` | ${n.enLabel} | 7 | 14 | ${n.primaryKeywords.join('、')} | ${n.searchIntent} |\n`;
});
mdPrimary += `\n---\n\n## 二、各一级导航详细 SEO 与信息架构规范\n\n`;
for (const n of PRIMARY_NAVS) {
  mdPrimary += `### ${n.title}（\`${n.path}\`）\n\n`;
  mdPrimary += `- **SEO Title**：\`${n.seoTitle}\`\n`;
  mdPrimary += `- **SEO Description**：\`${n.seoDescription}\`\n`;
  mdPrimary += `- **页面唯一 H1**：\`${n.h1}\`\n`;
  mdPrimary += `- **主关键词**：${n.primaryKeywords.join('、')}\n`;
  mdPrimary += `- **次级关键词**：${n.secondaryKeywords.join('、')}\n`;
  mdPrimary += `- **搜索意图**：${n.searchIntent}\n`;
  mdPrimary += `- **目标受众**：${n.targetAudience}\n`;
  mdPrimary += `- **下辖 7 个二级专题栏目**：\n`;
  for (const t of n.topics) {
    mdPrimary += `  1. [${t.title}](${t.path})（\`${t.path}\`）— *${t.badge}*：${t.desc}\n`;
  }
  mdPrimary += `\n`;
}
fs.writeFileSync(path.join(ROOT, 'SEO-一级导航规划.md'), mdPrimary, 'utf8');

// 3. Write SEO-二级专题规划.md
let mdSecondary = `# SEO 二级专题规划（28 个真实落地专题页）\n\n`;
mdSecondary += `> 每个一级导航严格包含 7 个二级栏目，全站共 **28 个二级专题页**。每个页面均具备唯一 SEO Title、Description、H1、用户需求分析、2 个三级文章集群、实测品牌对比表及转化入口。\n\n`;
mdSecondary += `## 一、28 个二级专题路由与核心词总表\n\n`;
mdSecondary += `| 编号 | 所属一级导航 | 二级专题名称 | URL 路径 | 主关键词 | 次级关键词 | 关联三级集群 | 重点关联品牌 |\n`;
mdSecondary += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;
SECONDARY_TOPICS.forEach((t, i) => {
  const nav = PRIMARY_NAVS.find(n => n.id === t.navId);
  mdSecondary += `| S-${String(i + 1).padStart(2, '0')} | ${nav.title} | **${t.title}** | \`${t.path}\` | ${t.primaryKeyword} | ${t.secondaryKeywords.join(' / ')} | ${t.clusters.map(c => c.id).join(', ')} | ${t.featuredBrands.join(', ')} |\n`;
});
mdSecondary += `\n---\n\n## 二、28 个二级专题详细规划档案\n\n`;
SECONDARY_TOPICS.forEach((t, i) => {
  const nav = PRIMARY_NAVS.find(n => n.id === t.navId);
  mdSecondary += `### S-${String(i + 1).padStart(2, '0')} ${t.title}（\`${t.path}\`）\n\n`;
  mdSecondary += `- **上游一级导航**：${nav.title}（\`${nav.path}\`）\n`;
  mdSecondary += `- **SEO Title**：\`${t.seoTitle}\`\n`;
  mdSecondary += `- **SEO Description**：\`${t.seoDescription}\`\n`;
  mdSecondary += `- **唯一 H1**：\`${t.h1}\`\n`;
  mdSecondary += `- **主关键词**：\`${t.primaryKeyword}\`\n`;
  mdSecondary += `- **次级关键词**：${t.secondaryKeywords.map(k => `\`${k}\``).join('、')}\n`;
  mdSecondary += `- **搜索意图**：${t.searchIntent}\n`;
  mdSecondary += `- **用户需求与痛点分析**：${t.userNeed}\n`;
  mdSecondary += `- **下辖三级文章集群**：\n`;
  for (const c of t.clusters) {
    mdSecondary += `  - **${c.id} ${c.name}**：代表作《[${c.repArticleTitle}](/articles/${c.repArticleSlug}/)》\n`;
  }
  mdSecondary += `- **关联品牌与转化入口**：${t.featuredBrands.map(s => `\`/brands/${s}/\``).join('、')} 及 \`/compare/\`\n\n`;
});
fs.writeFileSync(path.join(ROOT, 'SEO-二级专题规划.md'), mdSecondary, 'utf8');

// 4. Write SEO-三级文章集群规划.md
let mdClusters = `# SEO 三级文章集群规划（56 个核心内容集群）\n\n`;
mdClusters += `> 全站 28 个二级专题，每个专题下设 2 个三级文章集群，合计 **56 个三级文章集群（CL-01 至 CL-56）**。每个集群规划 7 篇独立 SEO 文章（1 篇已发布核心代表作 + 6 篇细分长尾规划文章），总计 392 篇文章。\n\n`;
mdClusters += `## 一、56 个三级文章集群总览表\n\n`;
mdClusters += `| 集群ID | 集群名称 | 所属二级专题 | 主关键词 | 搜索意图 | 已发布代表文章路由 | 下辖文章数 |\n`;
mdClusters += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;
for (const c of CLUSTERS) {
  mdClusters += `| **${c.id}** | ${c.name} | ${c.topicTitle} (\`${c.topicPath}\`) | ${c.primaryKeyword} | ${c.searchIntent} | \`${c.repArticleUrl}\` | 7 (1已发布+6规划) |\n`;
}
mdClusters += `\n---\n\n## 二、各集群详细定义与上下游链路\n\n`;
for (const c of CLUSTERS) {
  mdClusters += `### ${c.id}：${c.name}\n\n`;
  mdClusters += `- **集群 Slug**：\`${c.slug}\`\n`;
  mdClusters += `- **核心主题**：${c.coreTheme}\n`;
  mdClusters += `- **主关键词**：\`${c.primaryKeyword}\`\n`;
  mdClusters += `- **次级关键词**：${c.secondaryKeywords.map(k => `\`${k}\``).join('、')}\n`;
  mdClusters += `- **搜索意图**：${c.searchIntent}\n`;
  mdClusters += `- **目标用户**：${c.targetUser}\n`;
  mdClusters += `- **上游专题**：${c.navTitle}（\`${c.navPath}\`）→ ${c.topicTitle}（\`${c.topicPath}\`）\n`;
  mdClusters += `- **下游转化页面**：${c.featuredBrands.map(s => `\`/brands/${s}/\``).join('、')}、\`/compare/\`\n`;
  mdClusters += `- **已发布核心代表文章**：《${c.repArticleTitle}》（\`${c.repArticleUrl}\`）\n`;
  mdClusters += `- **承接 GEO 长尾问题**：${c.geoQuestions.join(' / ')}\n\n`;
}
fs.writeFileSync(path.join(ROOT, 'SEO-三级文章集群规划.md'), mdClusters, 'utf8');

// 5. Write SEO-完整文章标题库.md (All 392 articles with all 14 required fields)
let mdArticles = `# SEO 完整文章标题库（56 集群 × 7 篇 = 392 篇完整规划数据库）\n\n`;
mdArticles += `> **规划范围说明**：符合建站总指令第六节「第四级：336–840 个 SEO 文章标题（每个三级集群规划 6–15 篇独立文章）」要求。\n`;
mdArticles += `> - **总规划篇数**：**392 篇**（56 个三级集群 × 每集群 7 篇）\n`;
mdArticles += `> - **当前已正式生成完整正文并纳入 Sitemap 篇数**：**56 篇（P0 级，每个集群的第 1 篇核心代表文章，100% 覆盖全部 56 个集群）**\n`;
mdArticles += `> - **待分批扩充篇数**：**336 篇（P1/P2 级，状态标记为 \`planned\`，已分配唯一 Slug 与完整 14 项元数据，绝不生成空白占位页污染 Sitemap）**\n\n`;

for (const c of CLUSTERS) {
  mdArticles += `## ${c.id} ${c.name}（上游专题：${c.topicTitle} \`${c.topicPath}\`）\n\n`;
  const clusterArts = PLANNED_ARTICLES.filter(a => a.clusterId === c.id);
  for (const a of clusterArts) {
    mdArticles += `### [${a.id}] ${a.title}\n`;
    mdArticles += `- **1. 完整文章标题**：${a.title}\n`;
    mdArticles += `- **2. 独立 URL Slug**：\`${a.slug}\`（完整路径：\`${a.url}\` | 发布状态：\`${a.status}\`）\n`;
    mdArticles += `- **3. 主关键词**：\`${a.primaryKeyword}\`\n`;
    mdArticles += `- **4. 次级关键词**：${a.secondaryKeywords.join('、')}\n`;
    mdArticles += `- **5. 搜索意图**：${a.searchIntent}\n`;
    mdArticles += `- **6. 用户画像**：${a.targetUser}\n`;
    mdArticles += `- **7. 文章大纲**：${a.outline.join(' → ')}\n`;
    mdArticles += `- **8. 核心问题**：${a.coreQuestions.join('；')}\n`;
    mdArticles += `- **9. FAQ**：${a.faq.map(f => `Q:${f.q}`).join(' | ')}\n`;
    mdArticles += `- **10. 需要引用的数据**：${a.dataReferences.join('；')}\n`;
    mdArticles += `- **11. 相关文章**：${a.relatedArticles.map(r => typeof r === 'string' ? r : r.url).join('、') || c.repArticleUrl}\n`;
    mdArticles += `- **12. 上游专题**：${a.topicTitle}（\`${a.upstreamTopicPath}\`）\n`;
    mdArticles += `- **13. 下游转化页面**：${a.downstreamBrandPaths.join('、')}、\`${a.downstreamComparePath}\`\n`;
    mdArticles += `- **14. 内容优先级**：\`${a.priority}\`（当前状态：\`${a.status === 'published' ? '已发布上线' : '已入库待发布'}\`）\n\n`;
  }
}
fs.writeFileSync(path.join(ROOT, 'SEO-完整文章标题库.md'), mdArticles, 'utf8');

// 6. Write SEO-关键词映射表.csv
const kwRows = [
  ['层级', '页面ID/Slug', '页面标题', 'URL路径', '主关键词', '次级关键词', '搜索意图', '优先级', '状态']
];
kwRows.push(['首页', 'home', 'clash机场 全景评测门户与品牌数据库', '/', '机场推荐', '科学上网,Clash 推荐,机场排行,性价比机场,VPN 推荐', '综合导航与快速商业转化', 'P0', 'published']);
for (const n of PRIMARY_NAVS) {
  kwRows.push(['一级导航', n.id, n.title, n.path, n.primaryKeywords[0], n.secondaryKeywords.join('|'), n.searchIntent, 'P0', 'published']);
}
for (const t of SECONDARY_TOPICS) {
  kwRows.push(['二级专题', t.id, t.title, t.path, t.primaryKeyword, t.secondaryKeywords.join('|'), t.searchIntent, 'P0', 'published']);
}
for (const b of brands) {
  kwRows.push(['品牌评测', b.slug, `${b.name} 深度评测`, `/brands/${b.slug}/`, `${b.name}评测`, `${b.name}怎么样|${b.name}官网|${b.name}优惠码|${b.name}价格`, '品牌调查与注册转化', b.isPrimaryFeatured ? 'P0' : 'P1', 'published']);
}
for (const a of PLANNED_ARTICLES) {
  kwRows.push(['三级集群文章', a.id, a.title, a.url, a.primaryKeyword, a.secondaryKeywords.join('|'), a.searchIntent, a.priority, a.status]);
}
fs.writeFileSync(
  path.join(ROOT, 'SEO-关键词映射表.csv'),
  kwRows.map(r => r.map(csvCell).join(',')).join('\n') + '\n',
  'utf8'
);

// 7. Write GEO-实体关系映射表.csv
const geoEntityRows = [
  ['实体ID', '实体名称', '实体类型', '关联协议/内核', '关联线路架构', '最低月付/折算', '客户端订阅兼容性', '流媒体与AI支持', '同源/矩阵关联', '规范实体URL', '核实状态']
];
for (const b of brands) {
  const minPriceStr = b.minMonthlyPrice ? `月付¥${b.minMonthlyPrice}/月` : (b.minAnnualizedMonthlyPrice ? `年付折算¥${b.minAnnualizedMonthlyPrice}/月` : '历史资料待核实');
  geoEntityRows.push([
    `BRAND-${String(b.rank).padStart(2, '0')}`,
    b.name,
    '机场品牌 (Proxy Service Provider)',
    b.protocols.join(' / '),
    b.lineType,
    minPriceStr,
    b.clientSupportLabel,
    `AI:${b.unlockMatrix?.chatgpt?.label || '待核实'} | Netflix:${b.unlockMatrix?.netflix?.label || '待核实'} | Disney+:${b.unlockMatrix?.disney?.label || '待核实'}`,
    b.homologousGroup || '独立实体',
    `/brands/${b.slug}/`,
    b.dataStatus
  ]);
}
const clientSummaryEntities = [
  ['CLIENT-01', 'Clash Verge Rev', '代理客户端 (Desktop GUI)', 'Mihomo (Clash Meta) 内核', '支持系统代理 / TUN虚拟网卡', '开源免费', '支持 Windows / macOS / Linux', '支持分流规则覆写', 'Clash Meta 生态核心桌面端', '/clash/verge/', 'official_verified'],
  ['CLIENT-02', 'Mihomo (原 Clash.Meta)', '代理核心内核 (Proxy Core)', 'VLESS-Reality / Hysteria2 / Trojan / SS / VMess / TUIC', '内核级规则与 Smart 策略组', '开源免费', '跨平台核心组件', '支持 Fake-IP / DoH / GeoSite', 'Clash Verge Rev / FlClash / CMFA / OpenClash 核心', '/clash/meta/', 'official_verified'],
  ['CLIENT-03', 'Shadowrocket (小火箭)', '代理客户端 (iOS App)', 'VLESS / Hysteria2 / Trojan / SS / VMess', 'iOS Network Extension', 'App Store 付费 ($2.99)', 'iOS / iPadOS 通用订阅导入', '支持策略组分流', 'Apple 移动端最广泛客户端', '/vpn/mobile/', 'official_verified'],
  ['CLIENT-04', 'v2rayN', '代理客户端 (Desktop GUI)', 'Xray-core / sing-box / Mihomo', '系统代理 / TUN 模式', '开源免费', 'Windows / Linux / macOS', '支持路由规则集', '桌面端多内核管理客户端', '/clients/', 'official_verified'],
  ['CLIENT-05', 'sing-box', '通用代理平台 (Core & Client)', 'VLESS / Hysteria2 / ShadowTLS / Trojan / TUIC', 'TUN 原生路由引擎', '开源免费', 'Windows / macOS / Linux / Android / iOS', '支持 JSON 规则集', '新一代全平台核心', '/clients/', 'official_verified']
];
for (const ce of clientSummaryEntities) {
  geoEntityRows.push(ce);
}
fs.writeFileSync(
  path.join(ROOT, 'GEO-实体关系映射表.csv'),
  geoEntityRows.map(r => r.map(csvCell).join(',')).join('\n') + '\n',
  'utf8'
);

// 8. Write GEO-长尾问题库.csv (All 189 questions from source file mapped to topics & articles)
const categoryToTopicPath = {
  '基础认知类问题': '/airport/guide/',
  '推荐与选择类问题': '/airport/recommend/',
  '价格与套餐类问题': '/airport/value/',
  '速度与稳定性问题': '/airport/stable/',
  '客户端与配置问题': '/clash/verge-subscription/',
  '地区与解锁问题': '/airport/ranking/',
  '安全与风险问题': '/resources/scam-alert/',
  '品牌与评测问题': '/vpn/compare/',
  '替代与迁移问题': '/resources/scam-alert/',
  '新手高频问题': '/resources/beginner-help/',
  '高转化购买意图问题': '/airport/recommend/',
  '对比与榜单类问题': '/airport/ranking/',
  '故障排查类问题': '/clash/troubleshooting/',
  '进阶技术问题': '/clash/meta/',
  '长期使用与复购问题': '/vpn/best/',
  '科学上网与代理工具通用长尾问题': '/vpn/recommend/',
  '客户端软件高搜索问题': '/clash/verge/',
  '网络故障与连接排查问题': '/resources/node-check/',
  '安全隐私与使用习惯问题': '/resources/free-nodes/'
};

const geoCsvRows = [
  ['问题编号', '问题分类', 'GEO长尾问题', '搜索意图分类', '承接二级专题URL', '承接代表文章URL', '关联转化页面URL', 'Answer-First标准摘要方向']
];
for (const item of geoQuestionsList) {
  const topicPath = item.topicPath || categoryToTopicPath[item.category] || '/resources/faq/';
  const matchedTopic = SECONDARY_TOPICS.find(t => t.path === topicPath) || SECONDARY_TOPICS[0];
  const repSlug = matchedTopic.clusters[0].repArticleSlug;
  geoCsvRows.push([
    `GEO-${String(item.id).padStart(3, '0')}`,
    item.category,
    item.question,
    item.category.includes('购买') || item.category.includes('推荐') || item.category.includes('价格') ? '商业转化意图 (Transactional/Commercial)' : '信息与排障意图 (Informational)',
    topicPath,
    `/articles/${repSlug}/`,
    '/brands/guangsuyun/ | /compare/',
    `首段直接给出「${item.question}」的明确结论与判断阈值，附带 41 家品牌核实数据或客户端排障步骤。`
  ]);
}
fs.writeFileSync(
  path.join(ROOT, 'GEO-长尾问题库.csv'),
  geoCsvRows.map(r => r.map(csvCell).join(',')).join('\n') + '\n',
  'utf8'
);

// 9. Write SEO-内部链接矩阵.csv
const linkRows = [
  ['源页面类型', '源页面URL', '源页面标题', '上游父级链接', '平级交叉链接', '下游子级/文章链接', '下游品牌评测链接', '商业转化锚文本规范']
];
linkRows.push([
  '网站首页',
  '/',
  'clash机场 全景评测门户',
  '无 (根节点)',
  '/airport/ | /vpn/ | /clash/ | /resources/',
  '/brands/ | /compare/ | /clients/',
  '/brands/guangsuyun/ | /brands/xingdaomeng/ | /brands/weifeng/',
  '查看光速云深度评测 / 前往41家品牌数据库对比'
]);
for (const n of PRIMARY_NAVS) {
  linkRows.push([
    '一级导航专题页',
    n.path,
    n.title,
    '/',
    PRIMARY_NAVS.filter(x => x.id !== n.id).map(x => x.path).join(' | '),
    n.topics.map(t => t.path).join(' | '),
    '/brands/guangsuyun/ | /brands/',
    `${n.title}全部7个二级专题与评测对比`
  ]);
}
for (const t of SECONDARY_TOPICS) {
  const nav = PRIMARY_NAVS.find(n => n.id === t.navId);
  const siblings = SECONDARY_TOPICS.filter(x => x.navId === t.navId && x.id !== t.id).slice(0, 3).map(x => x.path);
  linkRows.push([
    '二级栏目专题页',
    t.path,
    t.title,
    `https://clash-cloud.run/ -> ${nav.path}`,
    siblings.join(' | '),
    t.clusters.map(c => `/articles/${c.repArticleSlug}/`).join(' | '),
    t.featuredBrands.map(s => `/brands/${s}/`).join(' | '),
    `查看${t.title}入选品牌深度评测与套餐对比`
  ]);
}
for (const a of publishedArticles) {
  linkRows.push([
    '三级集群代表文章',
    a.url,
    a.title,
    `/ -> ${a.navPath} -> ${a.upstreamTopicPath}`,
    a.relatedArticles.map(r => r.url).join(' | '),
    a.downstreamComparePath,
    a.downstreamBrandPaths.join(' | '),
    `阅读关联品牌深度评测与查看官方最新套餐`
  ]);
}
for (const b of brands) {
  linkRows.push([
    '品牌深度评测页',
    `/brands/${b.slug}/`,
    `${b.name} 深度评测`,
    `/ -> /brands/`,
    b.homologousGroup ? `/resources/risk-intel/` : `/compare/`,
    `/clash/verge-subscription/ | /clients/`,
    `/brands/guangsuyun/ | /compare/`,
    b.hasAffiliateUrl ? `前往 ${b.name} 官方注册页 (rel="nofollow sponsored noopener")` : `查看已核实品牌替代方案`
  ]);
}
fs.writeFileSync(
  path.join(ROOT, 'SEO-内部链接矩阵.csv'),
  linkRows.map(r => r.map(csvCell).join(',')).join('\n') + '\n',
  'utf8'
);

// 10. Write SEO-内容发布优先级.md
let mdPriority = `# SEO 内容发布优先级与分批上线策略\n\n`;
mdPriority += `> **核心原则**：绝不生成空白壳页面或仅含标题的伪文章污染 \`sitemap.xml\`。只有完成真实正文、结构化表格与 FAQ 的页面才构建上线并进入 Sitemap。\n\n`;
mdPriority += `## 一、三大优先级梯队划分\n\n`;
mdPriority += `| 优先级 | 页面/内容范围 | 规划数量 | 当前已发布数量 | 完成率 | 纳入 Sitemap 状态 |\n`;
mdPriority += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
mdPriority += `| **P0（核心基石层）** | 首页(1) + 一级导航(4) + 二级专题(28) + 品牌库与横向对比与客户端库(3) + 光速云万字旗舰评测(1) + 其余40家独立品牌评测(40) + 56个集群代表作文章(56) | **133 页** | **133 页** | **100%** | ✅ 全部正式上线并纳入 \`sitemap.xml\` |\n`;
mdPriority += `| **P1（高商业价值扩展层）** | 每个三级集群下的参数核验篇、套餐精算篇、晚高峰实测篇、品牌二选一PK篇（56 × 4） | **224 篇** | 规划入库 | 持续迭代 | ⏸ 状态 \`planned\`，未写完正文前不生成空 HTML |\n`;
mdPriority += `| **P2（长尾流量巩固层）** | 每个三级集群下的客户端分流篇、防失联风控篇（56 × 2） | **112 篇** | 规划入库 | 持续迭代 | ⏸ 状态 \`planned\`，未写完正文前不生成空 HTML |\n\n`;
mdPriority += `## 二、P0 已发布 56 篇集群代表文章清单（100% 覆盖 56 个集群）\n\n`;
mdPriority += `| 序号 | 文章ID | 所属集群 | 上游二级专题 | 文章标题 | 真实访问路径 |\n`;
mdPriority += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
publishedArticles.forEach((a, idx) => {
  mdPriority += `| ${idx + 1} | ${a.id} | ${a.clusterId} ${a.clusterName} | ${a.topicTitle} (\`${a.upstreamTopicPath}\`) | **${a.title}** | \`${a.url}\` |\n`;
});
fs.writeFileSync(path.join(ROOT, 'SEO-内容发布优先级.md'), mdPriority, 'utf8');

// 11. Write SEO-品牌评测规划.md
let mdBrandPlan = `# SEO 品牌评测规划（41 家独立机场品牌深度评测矩阵）\n\n`;
mdBrandPlan += `> 经过对 \`42家机场品牌清单.txt\` 的严格去重审计，第 8 项 \`Firefly\` 与第 41 项 \`萤火虫\` 为完全相同的同一品牌（同域名 \`vip02.fireflyaff.com\`、同优惠码 \`firefly\`、同6档套餐），合并后全站共计 **41 家独立品牌**。\n`;
mdBrandPlan += `> 此外，\`17个机场测速实测资料包\` 中的 \`快狸 (KuaiLi)\` 仅存实测图而无品牌清单资料，归入实测档案库并在对比与测速中心展示，不伪造独立品牌套餐。\n\n`;
mdBrandPlan += `## 一、第一主推品牌专项规范：光速云（\`/brands/guangsuyun/\`）\n\n`;
mdBrandPlan += `- **定位**：全站商业推广优先级 #1（明确标注推广合作与赞助属性，不伪装成无条件客观速度第一）\n`;
mdBrandPlan += `- **内容体量**：10,000+ 中文字符万字级深度档案（18 大标准章节全覆盖）\n`;
mdBrandPlan += `- **核心实测与核验资产**：\n`;
mdBrandPlan += `  1. 2026-08-11 23:25 晚高峰实测图（\`/images/speedtest/guangsuyun.png\`，55 节点 100% 在线，台湾/新加坡/日本 502.87 MB/s 峰值）\n`;
mdBrandPlan += `  2. 电信 / 联通 / 移动三网多线程测速截图（\`/images/unlock/telecom-speedtest.jpg\`、\`unicom-speedtest.jpg\`、\`mobile-speedtest.jpg\`）\n`;
mdBrandPlan += `  3. Netflix / Disney+ / YouTube / TikTok / ChatGPT 解锁实测截图（\`/images/unlock/*.jpg\`）\n`;
mdBrandPlan += `  4. **历史价格冲突公开纠偏**：专门说明摘要中“年付约8元/月 59GB”与当前详细套餐表“轻量版 ¥99/年 69GB/月（折合 ¥8.25/月，叠加 \`AMM\` 9折码后约 ¥7.43/月）”及“极速版 ¥25/月 168GB”的核实结论。\n\n`;
mdBrandPlan += `## 二、41 家独立品牌评测路由与数据完整度分级表\n\n`;
mdBrandPlan += `| 序号 | 品牌名称 | 路由路径 | 分组来源 | 最低月付/折算 | 线路类型 | 协议支持 | 2026-08-11实测图 | 注册入口状态 |\n`;
mdBrandPlan += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;
brands.forEach((b, idx) => {
  const minPriceStr = b.minMonthlyPrice ? `月付¥${b.minMonthlyPrice}/月` : (b.minAnnualizedMonthlyPrice ? `年付折算¥${b.minAnnualizedMonthlyPrice}/月` : '历史资料待核实');
  mdBrandPlan += `| ${idx + 1} | **${b.name}** | \`/brands/${b.slug}/\` | ${b.rank <= 28 ? '第一部分(主力)' : '第二部分(历史补充)'} | ${minPriceStr} | ${b.lineType} | ${b.protocols.join('/')} | ${b.speedtest20260811 ? `✅ 2026-08-11实测` : (b.speedtest20261019 ? `✅ 2026-10-19记录` : '⚪ 暂无独立测试')} | ${b.hasAffiliateUrl ? '✅ 已核实推广入口' : '⚠️ 历史资料未提供入口'} |\n`;
});
fs.writeFileSync(path.join(ROOT, 'SEO-品牌评测规划.md'), mdBrandPlan, 'utf8');

// 12. Write SEO-URL 路由规划.csv
const urlRows = [
  ['路由编号', '页面类型', 'URL路径', '源文件路径', '页面名称/H1摘要', '纳入Sitemap', 'Canonical策略', '状态']
];
let routeIdx = 1;
const addRoute = (type, urlPath, filePath, title, inSitemap, status) => {
  urlRows.push([
    `URL-${String(routeIdx++).padStart(3, '0')}`,
    type,
    urlPath,
    filePath,
    title,
    inSitemap ? 'YES' : 'NO',
    `https://clash-cloud.run${urlPath}`,
    status
  ]);
};

addRoute('首页', '/', 'docs/index.md', 'clash机场：中文机场推荐、实测排行、Clash教程与41家品牌数据库', true, 'published');
addRoute('品牌数据库首页', '/brands/', 'docs/brands/index.md', '41家独立机场品牌数据库与多维筛选中心', true, 'published');
addRoute('品牌横向对比中心', '/compare/', 'docs/compare/index.md', '2026 机场横向对比与同价位二选一决策中心', true, 'published');
addRoute('客户端知识库', '/clients/', 'docs/clients/index.md', '第三方代理客户端数据库：Windows/macOS/Linux/Android/iOS/OpenWrt 22款工具矩阵', true, 'published');
addRoute('404错误页', '/404.html', 'docs/404.md', '404 页面未找到（含四大导航与热门评测引导）', false, 'published');

for (const n of PRIMARY_NAVS) {
  addRoute('一级主导航专题页', n.path, `docs${n.path}index.md`, n.h1, true, 'published');
}
for (const t of SECONDARY_TOPICS) {
  addRoute('二级栏目专题页', t.path, `docs${t.path}index.md`, t.h1, true, 'published');
}
for (const b of brands) {
  addRoute('品牌深度评测页', `/brands/${b.slug}/`, `docs/brands/${b.slug}/index.md`, `${b.name} 深度评测`, true, 'published');
}
for (const a of PLANNED_ARTICLES) {
  addRoute(
    a.status === 'published' ? '已发布集群代表文章' : '规划入库文章(待发布)',
    a.url,
    `docs${a.url}index.md`,
    a.title,
    a.status === 'published',
    a.status
  );
}

fs.writeFileSync(
  path.join(ROOT, 'SEO-URL 路由规划.csv'),
  urlRows.map(r => r.map(csvCell).join(',')).join('\n') + '\n',
  'utf8'
);

console.log(`Generated all 11 SEO/GEO planning deliverables! Total planned articles: ${PLANNED_ARTICLES.length}, Published: ${publishedArticles.length}, GEO Questions: ${geoQuestionsList.length}`);
