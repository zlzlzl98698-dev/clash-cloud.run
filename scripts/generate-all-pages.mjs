import fs from 'node:fs';
import path from 'node:path';
import { PRIMARY_NAVS, SECONDARY_TOPICS } from './seo-matrix-data.mjs';

const ROOT = '/Users/mac/Desktop/clash-cloud.run';
const brands = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/.vitepress/data/brands.json'), 'utf8'));

function writeMd(relPath, content) {
  const fullPath = path.join(ROOT, 'docs', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}

function yamlEscape(str) {
  return String(str ?? '').replace(/"/g, '\\"');
}

function renderFaqDetails(faqs) {
  return `<div class="cc-faq-list">\n${faqs
    .map(
      (f, idx) =>
        `  <details class="cc-faq-item" open>\n    <summary>Q${idx + 1}：${f.q}</summary>\n    <p><strong>答：</strong>${f.a}</p>\n  </details>`
    )
    .join('\n')}\n</div>`;
}

// ==================== 1. HOME PAGE (docs/index.md) ====================
writeMd(
  'index.md',
  `---
title: "clash机场 — 2026 中文机场推荐、实测排行、41家品牌数据库与Clash客户端知识库"
seoTitle: "clash机场 (clash-cloud.run) — 2026 机场推荐、晚高峰实测排行、Clash教程与41家品牌评测数据库"
seoDescription: "面向中文用户的专业机场推荐与VPN评测平台：汇集41家去重独立机场品牌数据库、2026-08-11晚高峰17家实测截图、光速云万字深度评测、22款Clash/小火箭客户端教程及189个长尾问题百科。"
h1: "2026 中文机场推荐、实测排行与 41 家独立品牌评测数据库"
fullWidth: true
datePublished: "2026-08-11"
dateModified: "2026-11-16"
faqs:
  - q: "2026 年买机场应该优先看价格还是看线路架构？"
    a: "主力自用优先看线路架构（IEPL/IPLC 专线）与晚高峰节点在线率，备用或轻度查资料再看单价。如光速云年付轻量版折合仅 ¥8.25/月（¥99/年，每月69GB）即可用上 IEPL 专线，兼顾低预算与稳定性。"
  - q: "为什么有些机场买完后找不到 Clash 订阅链接？"
    a: "因为本站核实的 41 家独立品牌中，有 8 家品牌（飞猫云、无忧云、Firefly、灵猫云、SOGO云、闪跃云、全球云、隐形人）仅支持自研专属客户端，不提供通用 Clash/Shadowrocket 订阅链接。"
  - q: "导入机场订阅后节点全部显示空白或报错 unsupported proxy type 怎么办？"
    a: "这是由于客户端仍在使用已停更的原版旧 Clash 内核，无法解析 VLESS 或 Hysteria 2 协议。请升级至内置 Mihomo (Clash Meta) 内核的 Clash Verge Rev 或 FlClash。"
  - q: "光速云资料里的 59GB/月 和 69GB/月 哪个是准确的？"
    a: "以官方当前套餐表的 ¥99/年、每月 69GB 流量（折合 ¥8.25/月）为准。“年付约8元/月 59GB”为早期历史简介文案遗留。"
---

<HomePortal />
`
);

// ==================== 2. 404 PAGE (docs/404.md) ====================
writeMd(
  '404.md',
  `---
title: "404 页面未找到 — 返回 clash机场 导航与品牌评测中心"
seoTitle: "404 页面未找到 | clash机场 (clash-cloud.run)"
seoDescription: "您访问的页面路径不存在或已迁移。请通过四大主导航、41家独立机场品牌数据库或全站搜索查找所需评测与教程。"
h1: "404 — 您访问的页面不存在或已完成路由归并"
noindex: true
fullWidth: true
---

# 404 — 您访问的页面不存在或已完成路由归并

> 您请求的 URL 可能拼写有误，或属于尚未正式发布的规划储备文章（本站严格执行「未完成完整正文绝不生成空白壳页面」的 SEO 规范）。请通过以下核心入口继续浏览：

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
`
);

// ==================== 3. BRAND DATABASE HUB (docs/brands/index.md) ====================
const brandsHubFaqs = [
  {
    q: '为什么资料文件名叫《42家机场品牌清单》，但本站品牌库最终核定为 41 家独立品牌？',
    a: '经本站实体去重审计，原始清单第 8 项「Firefly」与第 41 项「萤火虫」使用完全相同的官方域名（vip02.fireflyaff.com）、完全相同的 85 折优惠码（firefly）以及完全一致的 6 档套餐体系，属于同一品牌的中英文重复录入。合并后实际独立品牌为 41 家。'
  },
  {
    q: '测速包里的「快狸 (KuaiLi)」为什么不在 41 家品牌卡片中？',
    a: '「快狸」仅存在于 2026-08-11 的 17 家测速截图包中（第14号图片），但在《42家机场品牌清单》中无任何官网、价格与套餐记录。遵循不编造套餐数据原则，我们将其作为第 17 份历史测速归档样本展示在下方的实测看板中。'
  }
];

writeMd(
  'brands/index.md',
  `---
title: "2026 机场品牌数据库：41家独立机场实测、套餐价格、协议与客户端筛选中心 | clash机场"
seoTitle: "2026 机场品牌数据库（41家独立实体核实）：价格、IEPL专线、VLESS协议与实测筛选 | clash机场"
seoDescription: "完整收录经实体去重审计后的41家独立机场品牌（合并Firefly与萤火虫），支持按月付价格、年付折算、IEPL/IPLC线路、VLESS/Hysteria2协议及Clash订阅兼容性实时筛选。"
h1: "41 家独立机场品牌数据库与实测归档筛选中心"
breadcrumbTitle: "41家机场品牌数据库"
fullWidth: true
datePublished: "2026-08-11"
dateModified: "2026-11-16"
faqs:
${brandsHubFaqs.map(f => `  - q: "${yamlEscape(f.q)}"\n    a: "${yamlEscape(f.a)}"`).join('\n')}
---

# 41 家独立机场品牌数据库与实测归档筛选中心

> **数据审计与实体去重声明**：本数据库基于《42家机场品牌清单》、《光速云品牌技术档案》及《2026-08-11 晚高峰 17 家实测资料包》建立。经严格核对域名、优惠码与套餐结构，原始列表第 8 项 **Firefly** 与第 41 项 **萤火虫** 确认为同一独立实体（已合并为 [Firefly（萤火虫）](/brands/firefly/)），因此全站核定为 **41 家真实独立机场品牌**（含第 1–28 项主力在营品牌及第 29–42 项去重后的 13 家历史补充品牌）。

<BrandDatabase />

---

## 二、2026-08-11 晚高峰 17 家机场实测归档总看板

以下面板展示 \`2026-08-11\` 批次全部 17 张自动化脚本实测截图（含 16 家在库品牌 + 1 家仅存测速图的「快狸」归档记录），点击任意品牌的「查看测速图」可直接调阅原始高清测速长图：

<NetworkPerformanceReport mode="benchmark" />

---

## 三、品牌库同源站群与客户端兼容性特别提示

1. **8 家「仅支持官方专属客户端（不提供 Clash 订阅链接）」品牌清单**：
   [飞猫云](/brands/feimao/)、[无忧链接](/brands/wuyou/)、[Firefly（萤火虫）](/brands/firefly/)、[灵猫网络](/brands/lingmao/)、[SOGO云](/brands/sogo/)、[闪跃](/brands/shanyue/)、[全球云](/brands/quanqiu/)、[隐形人](/brands/yinxingren/)。如果您需要在软路由（OpenClash）或 Apple TV 上使用，请勿选购上述 8 家，优先选择 **[光速云](/brands/guangsuyun/)**、[星岛梦](/brands/xingdaomeng/)、[一翻云](/brands/yifan/) 等 33 家支持通用订阅的品牌。
2. **同源体系与同规格矩阵披露**：
   - **一云梯（Yiyunti）关联体系**：[FlyingBird（飞鸟机场）](/brands/flyingbird/)、[龙猫云](/brands/longmaoyun/)、[微风网络](/brands/weifeng/)、[Firefly（萤火虫）](/brands/firefly/) 存在同源运营或技术体系关联。
   - **¥5.6/月（\`qwerty\` 联盟系）五家同规格矩阵**：[大佬云](/brands/dalaoyun/)、[闪电鼠](/brands/shandianshu/)、[云界线](/brands/yunjiexian/)、[榴莲云](/brands/liulianyun/)、[环球梯](/brands/huanqiuti/) 具有完全相同的 4 档套餐（¥7/60G、¥14/150G、¥28/320G、¥55/660G，8折后最低 ¥5.6/月）。
   - **实体区分提示**：[FATCAT（肥猫云）](/brands/fatcat/) 与 [飞猫云（FlyCat）](/brands/feimao/) 为两家完全不同的独立实体，切勿混淆。

---

## 四、41 家品牌数据库常见问题解答（FAQ）

${renderFaqDetails(brandsHubFaqs)}
`
);

// ==================== 4. COMPARE HUB (docs/compare/index.md) ====================
const compareHubFaqs = [
  {
    q: '光速云和星岛梦哪个更值得作为主力机场？',
    a: '两家均为 2020 年创立的顶级老牌 IEPL 专线机场。光速云胜在节点规模更大（55个实测节点覆盖12国 vs 星岛梦29个节点覆盖7国）、支持 VLESS+SS 双协议及官方客户端+通用订阅双轨模式，且 8.11 晚高峰峰值更高（502.87 MB/s vs 426.44 MB/s）；星岛梦则采用 Trojan 协议并提供 ¥96/年（60GB/月）年付档及三档不限时包。'
  },
  {
    q: '极连云和光年梯都是 18 元/月起，应该怎么选？',
    a: '两家起步价与套餐结构高度接近（均为 ¥18/月 150GB、¥30/月 300GB、¥68/月 600GB）。核心差异在于协议与实测特征：极连云采用 Shadowsocks (SS) 协议，兼容性极广；光年梯采用 VLESS 协议，在 2026-08-11 实测中峰值达 365.43 MB/s。'
  }
];

writeMd(
  'compare/index.md',
  `---
title: "2026 机场横向对比中心：光速云 vs 星岛梦 / 18元档 / 25元档 / 5.6元矩阵深度PK | clash机场"
seoTitle: "2026 机场横向对比与二选一决策中心：同价位IEPL专线机场参数实测PK | clash机场"
seoDescription: "提供同预算档位机场品牌的硬核二选一横向对比：涵盖老牌IEPL双雄（光速云 vs 星岛梦）、20元档VLESS对决（一翻云 vs 二猫云）、18元档双子星（极连云 vs 光年梯）及5.6元同规格矩阵拆解。"
h1: "2026 机场横向对比与同价位「二选一」决策中心"
breadcrumbTitle: "机场横向对比中心"
fullWidth: true
datePublished: "2026-08-11"
dateModified: "2026-11-16"
faqs:
${compareHubFaqs.map(f => `  - q: "${yamlEscape(f.q)}"\n    a: "${yamlEscape(f.a)}"`).join('\n')}
---

# 2026 机场横向对比与同价位「二选一」决策中心

> 当您把候选范围缩小到两三家价位接近的机场时，单看各自宣传页很难做出取舍。本页面直接调取本站统一品牌数据库与 \`2026-08-11\` 实测归档，为您提供 **五组高频纠结档位的同口径硬核 PK**。

---

## 第一组对决：老牌全能旗舰对比（光速云 vs 星岛梦 vs 唯兔云 vs 微风网络）

这四家均为长期稳定运营的 IEPL/IPLC 专线品牌，均支持标准 Clash 订阅，且在 2026-08-11 晚高峰实测中表现优异：

<BrandComparisonTable :slugs="['guangsuyun', 'xingdaomeng', 'weitu', 'weifeng']" />

**🎯 最终二选一建议**：
- 需要 **覆盖地区最广（12国 55+ 节点）、支持新一代 VLESS+SS 双协议、官方客户端+通用订阅双支持及 502.87 MB/s 晚高峰峰值** 的主力机场 → 首选 **[光速云](/brands/guangsuyun/)**（轻量版 ¥99/年 69GB/月，极速版 ¥25/月 168GB，永久包 ¥147/247GB）。
- 偏好 \`Trojan\` 协议或需要 ¥14.9/月起纯月付套餐 → 可选 **[唯兔云](/brands/weitu/)** 或 **[星岛梦](/brands/xingdaomeng/)**。

---

## 第二组对决：¥18/月 中坚专线双子星（极连云 vs 光年梯）

这两家在定价上高度接近（均为 ¥18/月 150G、¥30/月 300G、¥68/月 600G，以及 ¥98/年 特惠档），以下为统一数据源实时对比：

<BrandComparisonTable :slugs="['jilian', 'guangnian', 'guangsuyun']" />

---

## 第三组对决：¥20–25/月 VLESS / Hysteria 2 性能钢炮（一翻云 vs 二猫云 vs 梯子云）

如果您使用的是 **Clash Verge Rev** 或 **Shadowrocket**，偏爱最新 \`VLESS\` 或 \`Hysteria 2\` 协议的高吞吐性能，这三家是除光速云外最值得对比的选手：

<BrandComparisonTable :slugs="['yifan', 'ermao', 'tiziyun', 'guangsuyun']" />

---

## 第四组对决：通用订阅 vs 专属客户端（25元档：速界 vs SOGO云 vs 可信云）

在 ¥25/月（150GB）这一档位，**[速界](/brands/sujie/)**、**[SOGO云](/brands/sogo/)**、**[可信云](/brands/kexin/)** 套餐价格完全一致，但客户端机制截然不同：
- **如果您要用 Clash / 小火箭 / 软路由**：只能选 **[速界](/brands/sujie/)** 或 **[可信云](/brands/kexin/)**（支持 VLESS/Trojan 通用订阅）。
- **如果您只想要傻瓜式专属软件**：**[SOGO云](/brands/sogo/)** 仅提供自研客户端（不提供第三方订阅链接）。

<BrandComparisonTable :slugs="['sujie', 'kexin', 'sogo']" />

---

## 第五组对决：¥5.6/月（\`qwerty\` 联盟系）五家同规格平价矩阵对比

在《42家机场品牌清单》中，**[大佬云](/brands/dalaoyun/)**、**[闪电鼠](/brands/shandianshu/)**、**[云界线](/brands/yunjiexian/)**、**[榴莲云](/brands/liulianyun/)**、**[环球梯](/brands/huanqiuti/)** 五家品牌共享完全相同的套餐阶梯（¥7/月 60G、¥14/月 150G、¥28/月 320G、¥55/月 660G，8折优惠码后 ¥5.6/月起）。
- **如何在矩阵中挑选？** 根据本站 \`2026-08-11\` 实测抓包，同属 \`qwerty\` 联盟体系的 **[神行加速](/brands/shenxing/)**（峰值 **511.77 MB/s**，VLESS 协议）与 **[闪电鼠](/brands/shandianshu/)**（峰值 **469.51 MB/s**，VLESS 协议）拥有实测截图存证，因此在该平价矩阵中优先级最高。
- **风控提醒**：由于这五家高度同质化，**切勿同时买其中两家互作主力与备用**！

<BrandComparisonTable :slugs="['shandianshu', 'shenxing', 'dalaoyun', 'yunjiexian', 'liulianyun', 'huanqiuti']" />

<NetworkPerformanceReport mode="benchmark" />

---

## 第六组：横向对比常见问题解答（FAQ）

${renderFaqDetails(compareHubFaqs)}
`
);

// ==================== 5. CLIENTS KNOWLEDGE BASE (docs/clients/index.md) ====================
const clientsHubFaqs = [
  {
    q: '为什么现在导入很多机场订阅都要求使用 Mihomo (Clash Meta) 内核？',
    a: '因为光速云、一翻云、二猫云、光年梯、梯子云、速界等超过半数现代专线机场均已采用 VLESS 或 Hysteria 2 协议。2023年停更的原版 Clash 内核不支持这两种协议，必须使用搭载 Mihomo 内核的 Clash Verge Rev、FlClash、Clash Mi 或 CMFA 才能正常读取节点。'
  },
  {
    q: 'Mac 电脑下载 Clash Verge Rev 时应该选 x64.dmg 还是 aarch64.dmg？',
    a: '搭载 Apple M1 / M2 / M3 / M4 系列芯片的 Mac 请下载 aarch64.dmg（或 arm64）；2020 年以前的 Intel 处理器老款 Mac 请下载 x64.dmg。下错架构会导致无法启动或性能下降。'
  }
];

writeMd(
  'clients/index.md',
  `---
title: "2026 第三方代理客户端知识库：Windows/Mac/Linux/安卓/iOS/软路由 22款工具全表 | clash机场"
seoTitle: "2026 代理客户端下载与兼容性数据库：Clash Verge Rev / Mihomo / 小火箭 / v2rayN | clash机场"
seoDescription: "基于《第三方代理客户端》整理的全平台22款科学上网代理软件数据库：涵盖Windows、macOS(Intel/M芯片)、Linux、Android、iOS与OpenWrt软路由客户端内核、协议支持与官方GitHub源。"
h1: "2026 全平台第三方代理客户端数据库（22 款工具与内核兼容矩阵）"
breadcrumbTitle: "代理客户端知识库"
fullWidth: true
datePublished: "2026-08-11"
dateModified: "2026-11-16"
faqs:
${clientsHubFaqs.map(f => `  - q: "${yamlEscape(f.q)}"\n    a: "${yamlEscape(f.a)}"`).join('\n')}
---

# 2026 全平台第三方代理客户端数据库（22 款工具与内核兼容矩阵）

> **核心选型提示**：代理客户端本身不包含任何节点流量，它只是一个「本地规则分流器与加密协议拨号器」。您需要先从 **[光速云](/brands/guangsuyun/)** 等支持通用订阅的机场获取订阅链接，再导入下方对应的客户端即可使用。（注：飞猫云、无忧链接、Firefly 等 8 家仅专属客户端品牌不支持导入下方第三方软件）。

<ClientKnowledgeBase />

---

## 二、三大现代代理核心内核（Mihomo vs Xray-core vs sing-box）技术对比

| 内核名称 | 代表客户端软件 | 原生支持核心协议 | 规则分流引擎特点 | 2026 推荐指数与适用人群 |
| :--- | :--- | :--- | :--- | :--- |
| **Mihomo (原 Clash.Meta)** | Clash Verge Rev / FlClash / Clash Mi / CMFA / Stash / OpenClash | VLESS (Reality) / Hysteria 2 / Trojan / SS / VMess / TUIC / WireGuard | 兼容全套 Clash YAML 语法、支持 GeoSite/GeoIP、Fake-IP DNS 与覆写脚本 | ⭐⭐⭐⭐⭐ **中文机场生态绝对主力**，几乎 100% 通用订阅机场原生提供 Clash/Mihomo 订阅格式 |
| **Xray-core** | v2rayN / v2rayNG / Shadowrocket / PassWall2 | VLESS (XTLS-Vision / Reality) / VMess / Trojan / Shadowsocks | 路由配置灵活，对 VLESS 原生新特性支持最快 | ⭐⭐⭐⭐⭐ 适合 v2rayN 老用户、自建节点玩家与多协议混用场景 |
| **sing-box** | SFI / SFA / SFM / Hiddify / NekoBox / HomeProxy | VLESS / Hysteria 2 / ShadowTLS / TUIC / Trojan / SS | 采用新一代结构化 JSON 规则集，内置高性能原生 TUN 栈，内存占用极低 | ⭐⭐⭐⭐☆ 适合追求极致轻量与跨平台统一配置的技术型玩家 |

---

## 三、各操作系统官方安装包架构识别速查表

1. **Windows 10 / 11 (64位)**：认准文件名带有 \`x64-setup.exe\`（推荐安装版，可自动注册 TUN 虚拟网卡服务）或 \`win-x64.zip\`。若提示缺少 WebView2，请先安装微软官方 Edge WebView2 Runtime。
2. **macOS (Apple Silicon M1/M2/M3/M4)**：认准文件名带有 \`aarch64.dmg\` 或 \`arm64.dmg\`。如遇 Gatekeeper 提示“应用已损坏无法打开”，可在终端执行 \`sudo xattr -r -d com.apple.quarantine /Applications/Clash\\ Verge.app\` 解除隔离属性。
3. **macOS (Intel 旧款芯片)**：认准文件名带有 \`x64.dmg\`。
4. **Linux (Ubuntu / Debian / Fedora / Arch)**：Debian/Ubuntu 选 \`amd64.deb\`，RHEL/Fedora 选 \`x86_64.rpm\`，通用发行版可选 \`AppImage\`。
5. **Android (安卓手机/平板/电视)**：优先下载 \`arm64-v8a.apk\`（现代 64 位安卓手机通用）或 \`universal.apk\`。
6. **iOS / iPadOS (iPhone / iPad)**：由于国区 App Store 下架了代理工具，需准备一个**美区或港区 Apple ID**（切勿在手机「设置 → iCloud」中登录共享账号，只能在 **App Store 应用商店内** 登录下载），推荐下载 **Shadowrocket ($2.99)**、**Stash** 或免费的 **Karing / Clash Mi / sing-box**。

---

## 四、代理客户端常见问题解答（FAQ）

${renderFaqDetails(clientsHubFaqs)}
`
);

// ==================== 6. 4 PRIMARY NAVIGATION HUBS ====================
for (const nav of PRIMARY_NAVS) {
  const relFile = `${nav.id}/index.md`;
  const navFaqs = [
    {
      q: `「${nav.title}」频道包含哪些核心二级专题？`,
      a: `本频道下辖 7 个垂直二级专题栏目：${SECONDARY_TOPICS.filter(t => t.navId === nav.id).map(t => t.title).join('、')}，并配套 14 个三级文章集群与真实品牌评测数据库。`
    },
    {
      q: `在「${nav.title}」场景下，首选推荐哪家主力机场？`,
      a: `综合线路稳定性（IEPL+企业内网双专线）、2026-08-11 晚高峰实测表现（55节点100%在线，峰值502.87 MB/s）与客户端兼容性（支持Clash/小火箭通用订阅及官方客户端），本站首选推荐 2020 年老牌机场「光速云」（轻量版 ¥99/年 69GB/月，极速版 ¥25/月 168GB）。`
    }
  ];

  const md = `---
title: "${yamlEscape(nav.seoTitle)}"
seoTitle: "${yamlEscape(nav.seoTitle)}"
seoDescription: "${yamlEscape(nav.seoDescription)}"
h1: "${yamlEscape(nav.h1)}"
navId: "${nav.id}"
breadcrumbTitle: "${yamlEscape(nav.title)}"
datePublished: "2026-08-11"
dateModified: "2026-11-16"
faqs:
${navFaqs.map(f => `  - q: "${yamlEscape(f.q)}"\n    a: "${yamlEscape(f.a)}"`).join('\n')}
---

# ${nav.h1}

> **频道定位与核心搜索意图**：${nav.summary}
> - **核心覆盖关键词**：${[nav.primaryKeyword, ...nav.secondaryKeywords].map(k => `\`${k}\``).join('、')}
> - **内容架构深度**：本频道包含 **7 个独立二级专题栏目 → 14 个三级内容集群 → 98 篇规划 SEO 专栏（其中 14 篇核心集群代表作已全量发布）**，并实时关联 **[41 家独立机场品牌数据库](/brands/)**。

<TopicHubView navId="${nav.id}" />

---

## 三、「${nav.title}」频道编辑部选购与避坑准则

1. **核实真实付款周期，拒绝“折算价冒充月付价”**：许多机场宣传“低至 8 元/月”，实际必须一次性付满一年（如 ¥99/年）。本站在所有表格中均将「最低纯月付价」与「年付折算月均价」分列展示。
2. **先看客户端订阅兼容性再下单**：如果您使用 **Clash Verge Rev**、**FlClash**、**Shadowrocket** 或软路由 **OpenClash**，请务必确认目标品牌支持标准通用订阅（如 **[光速云](/brands/guangsuyun/)**、[星岛梦](/brands/xingdaomeng/)、[一翻云](/brands/yifan/)），避开飞猫云、无忧链接、Firefly 等 8 家仅支持闭源专属客户端的品牌。
3. **善用双批次实测证据交叉比对**：请优先选择拥有 \`2026-08-11\` 晚高峰实测截图存证且节点在线率高于 95% 的品牌。

---

## 四、「${nav.title}」频道常见问题解答（FAQ）

${renderFaqDetails(navFaqs)}
`;
  writeMd(relFile, md);
}

// ==================== 7. 28 SECONDARY TOPIC PAGES ====================
SECONDARY_TOPICS.forEach((topic, tIdx) => {
  const relFile = topic.path.replace(/^\//, '') + 'index.md';
  const nav = PRIMARY_NAVS.find(n => n.id === topic.navId);
  const featuredBrandObjs = topic.featuredBrands.map(s => brands.find(b => b.slug === s)).filter(Boolean);
  const b1 = featuredBrandObjs[0] || brands[0];
  const b2 = featuredBrandObjs[1] || brands[1];
  const b3 = featuredBrandObjs[2] || brands[2];

  const faqs = [
    {
      q: `针对「${topic.primaryKeyword}」，2026 年最核心的选购或操作结论是什么？`,
      a: `${topic.userNeed} 在具体品牌选型上，建议优先参考经过 2026-08-11 晚高峰实测验证的 ${b1.name}（${b1.lineType}，起步门槛 ¥${b1.minMonthlyPrice || b1.minAnnualizedMonthlyPrice}/月）与 ${b2.name}（${b2.lineType}）。`
    },
    ...topic.clusters.flatMap(c =>
      c.geoQuestions.slice(0, 2).map(q => ({
        q,
        a: `关于「${q}」，需结合 ${c.coreTheme} 进行核验。建议阅读本专题下辖代表作《${c.repArticleTitle}》获取完整实测表格与分步指南。`
      }))
    )
  ];

  const faqYaml = faqs
    .map(f => `  - q: "${yamlEscape(f.q)}"\n    a: "${yamlEscape(f.a)}"`)
    .join('\n');

  // Topic-unique H2 headings to eliminate cross-topic H2 template fingerprints
  const h2Section1Variants = [
    `一、${topic.primaryKeyword}深度调研：${topic.clusters[0].name}与${b1.name}/${b2.name}实测比对`,
    `一、2026「${topic.title}」避坑指南：如何围绕${topic.primaryKeyword}筛选${b1.lineCategory}专线？`,
    `一、从「${topic.primaryKeyword}」搜索意图看${topic.clusters[1].name}的核心判断阈值`,
    `一、${topic.title}选型方法论：${b1.name}、${b2.name}与${b3.name}的参数差异拆解`
  ];
  const h2Section2Variants = [
    `二、「${topic.primaryKeyword}」高频长尾问答（覆盖 ${topic.clusters[0].id} & ${topic.clusters[1].id}）`,
    `二、关于${topic.title}与${b1.name}配置的常见疑问解答（GEO 问答库）`,
    `二、2026 ${topic.primaryKeyword}实操 FAQ：套餐、协议与客户端排障`,
    `二、${topic.title}用户必读问答：从${topic.secondaryKeywords[0]}到晚高峰实测核验`
  ];
  const h2Section3Variants = [
    `三、${nav.title}频道关联专题矩阵与${b1.name}转化入口`,
    `三、「${topic.title}」上下游知识链路与41家品牌数据库导航`,
    `三、延伸阅读：从${topic.primaryKeyword}到全平台客户端配置闭环`,
    `三、${topic.title}同级栏目跳转与实测数据对比通道`
  ];

  const h2_1 = h2Section1Variants[tIdx % h2Section1Variants.length];
  const h2_2 = h2Section2Variants[tIdx % h2Section2Variants.length];
  const h2_3 = h2Section3Variants[tIdx % h2Section3Variants.length];

  const md = `---
title: "${yamlEscape(topic.seoTitle)}"
seoTitle: "${yamlEscape(topic.seoTitle)}"
seoDescription: "${yamlEscape(topic.seoDescription)}"
h1: "${yamlEscape(topic.h1)}"
navId: "${topic.navId}"
topicId: "${topic.id}"
breadcrumbTitle: "${yamlEscape(topic.title)}"
datePublished: "2026-08-11"
dateModified: "2026-11-16"
faqs:
${faqYaml}
---

# ${topic.h1}

> **Answer-First 专题核心导读**
> - **所属一级频道**：[${nav.title}](${nav.path}) → **${topic.title}**（\`${topic.path}\`）
> - **核心搜索词与次级词**：主词 \`${topic.primaryKeyword}\` | 关联词：${topic.secondaryKeywords.map(k => `\`${k}\``).join('、')}
> - **用户痛点与决策结论**：${topic.userNeed}
> - **本专题重点关联品牌**：${featuredBrandObjs.map(b => `[${b.name}](/brands/${b.slug}/)`).join('、')}（完整对比见下方实测表与 [41家品牌数据库](/brands/)）。

---

## ${h2_1}

在中文搜索引擎（Google / Bing）与生成式 AI 引擎中，当用户检索 **「${topic.primaryKeyword}」** 或 **「${topic.secondaryKeywords.slice(0, 2).join(' / ')}」** 时，核心诉求在于：**${topic.searchIntent}**。

结合本站对 41 家独立机场品牌的底层架构审计与 \`2026-08-11\` 晚高峰实测归档，针对 **${topic.title}** 下的两个核心子课题——**「${topic.clusters[0].coreTheme}」** 与 **「${topic.clusters[1].coreTheme}」**，我们提炼出以下实证结论：

1. **代表品牌参数锚点（${b1.name} vs ${b2.name} vs ${b3.name}）**：
   - **[${b1.name}](/brands/${b1.slug}/)**：创立于 ${b1.foundedYear}，采用 ${b1.lineType}，支持 \`${b1.protocols.join('/')}\` 协议，起步门槛为 ${b1.minMonthlyPrice ? `月付 ¥${b1.minMonthlyPrice}/月` : `年付折算 ¥${b1.minAnnualizedMonthlyPrice}/月`}${b1.minAnnualizedMonthlyPrice && b1.minMonthlyPrice ? `（年付折算 ¥${b1.minAnnualizedMonthlyPrice}/月）` : ''}。
   - **[${b2.name}](/brands/${b2.slug}/)**：创立于 ${b2.foundedYear}，采用 ${b2.lineType}，支持 \`${b2.protocols.join('/')}\` 协议，客户端支持模式为「${b2.clientSupportLabel}」。
   - **[${b3.name}](/brands/${b3.slug}/)**：创立于 ${b3.foundedYear}，覆盖全球 ${b3.regionCount} 个地区（${b3.nodeCountText}），并发限制为「${b3.deviceLimit}」。
2. **协议与客户端适配核验**：在 **${topic.primaryKeyword}** 场景中，若所选品牌采用 \`VLESS\` 或 \`Hysteria 2\` 协议（如 ${featuredBrandObjs.filter(x => x.protocols.some(p => p.includes('VLESS') || p.includes('Hysteria'))).map(x => x.name).join('、') || '光速云、一翻云'}），桌面端与安卓端请务必使用内置 **Mihomo (Clash Meta)** 内核的客户端（详见 [Clash Meta 专题](/clash/meta/)）。

<TopicHubView navId="${topic.navId}" topicId="${topic.id}" />

---

## ${h2_2}

${renderFaqDetails(faqs)}

---

## ${h2_3}

- **返回上游频道**：[${nav.title} 频道首页](${nav.path})
- **同频道平级专题推荐**：${SECONDARY_TOPICS.filter(t => t.navId === topic.navId && t.id !== topic.id).map(t => `[${t.title}](${t.path})`).join(' | ')}
- **下游核心评测与工具**：[★ 光速云万字深度评测](/brands/guangsuyun/) | [41家品牌筛选库](/brands/) | [同价位二选一对比](/compare/) | [22款客户端下载](/clients/)
`;
  writeMd(relFile, md);
});

// ==================== 8. 40 REMAINING BRAND DEEP REVIEW PAGES ====================
brands.forEach((b, bIdx) => {
  if (b.slug === 'guangsuyun') return; // Handled by dedicated 10,000+ char review file

  const relFile = `brands/${b.slug}/index.md`;
  const minPriceDisplay = b.minMonthlyPrice
    ? `最低月付 ¥${b.minMonthlyPrice}/月`
    : b.minAnnualizedMonthlyPrice
    ? `年付折算约 ¥${b.minAnnualizedMonthlyPrice}/月`
    : '历史资料价格待核实';

  // Pick 2 peer brands dynamically around this brand's rank so every brand has a distinct peer set!
  const candidatePeers = brands.filter(x => x.slug !== b.slug && x.slug !== 'guangsuyun');
  const peer1 = candidatePeers[bIdx % candidatePeers.length];
  const peer2 = candidatePeers[(bIdx + 3) % candidatePeers.length];
  const peers = [peer1, peer2];
  const brandOgImage = b.speedtest20260811 ? b.speedtest20260811.image : b.logo;

  const brandFaqs = [
    {
      q: `${b.name}（${b.enName}）怎么样？属于什么线路级别的机场？`,
      a: `${b.name} 创立于 ${b.foundedYear}，采用「${b.lineType}」架构，核心承载协议为 ${b.protocols.join(' / ')}，覆盖全球 ${b.regionCount} 个国家与地区（${b.nodeCountText}）。${b.summary}`
    },
    {
      q: `${b.name} 最低多少钱一个月？有优惠码吗？`,
      a: `${b.name} 的起步价格为：${minPriceDisplay}。${b.couponCode ? `官方核实可用优惠码为「${b.couponCode}」（${b.couponNote}）。` : '当前资料暂未记录常态化通用优惠码，请以官网结算页活动为准。'}`
    },
    {
      q: `${b.name} 支持 Clash Verge Rev 和 Shadowrocket（小火箭）订阅导入吗？`,
      a: b.clientSupport === 'proprietary_only'
        ? `不支持！经本站严格核实，${b.name} 属于「仅支持官方自研专属客户端」的 8 家品牌之一，后台不提供通用 Clash 或 Shadowrocket 订阅链接。如果您需要使用第三方 Clash 客户端或软路由，请改选本站首推的「光速云」或「星岛梦」。`
        : `支持。${b.name} 提供标准订阅链接（${b.clientSupportLabel}），支持导入 ${b.supportedClients.join('、')}。${b.protocols.includes('VLESS') || b.protocols.some(p => p.includes('Hysteria')) ? '由于节点包含 VLESS/Hysteria2 协议，请务必使用内置 Mihomo (Clash Meta) 内核的现代客户端。' : ''}`
    },
    {
      q: `${b.name} 有 2026 年的真实测速截图吗？晚高峰稳定吗？`,
      a: b.speedtest20260811
        ? `有。在 2026-08-11 的自动化脚本实测中，${b.name} 的实测表现为：${b.speedtest20260811.summary}。本页下方完整嵌入了该批次的高清原始测速长图供读者核验。`
        : b.speedtest20261019
        ? `有 2026-10-19 分地区节点测速记录（覆盖香港、日本、新加坡、美国等核心节点延迟与吞吐表现），详见本页下方深色网测面板。`
        : `${b.name} 属于《42家机场品牌清单》第二部分历史补充品牌，原始资料包中未包含其独立测速截图。遵循本站「绝不伪造实测数据」原则，本页仅如实展示其历史档案与线路参数。`
    },
    {
      q: `如果 ${b.name} 官网打不开或套餐不符合需求，最佳替代品牌是谁？`,
      a: `首选替代为本站主力首推品牌「光速云（LightSpeed Cloud）」：2020年老牌 IEPL+企业内网双专线，提供 ¥99/年（69GB/月）轻量版、¥25/月（168GB）极速版与 ¥147/247GB 永久不限时包，2026-08-11 晚高峰 55 节点 100% 在线（峰值 502.87 MB/s），且同时支持官方客户端与 Clash 通用订阅。`
    }
  ];

  const faqYaml = brandFaqs
    .map(f => `  - q: "${yamlEscape(f.q)}"\n    a: "${yamlEscape(f.a)}"`)
    .join('\n');

  const md = `---
title: "2026 ${yamlEscape(b.name)} (${yamlEscape(b.enName)}) 深度评测：套餐价格、${yamlEscape(b.lineCategory)}线路实测与优缺点档案 | clash机场"
seoTitle: "2026 ${yamlEscape(b.name)}评测：${yamlEscape(minPriceDisplay)}、${yamlEscape(b.lineType)}实测与优惠码核实 | clash机场"
seoDescription: "全面核实${yamlEscape(b.name)}（${yamlEscape(b.enName)}）运营背景、${yamlEscape(b.lineType)}架构、${yamlEscape(b.protocols.join('/'))}协议、完整套餐价格表、客户端兼容性及2026实测数据，附光速云等同类品牌横向对比。"
h1: "${yamlEscape(b.name)}（${yamlEscape(b.enName)}）2026 深度评测：套餐价格、线路架构与实测数据核验档案"
breadcrumbTitle: "${yamlEscape(b.name)}评测"
ogImage: "${brandOgImage}"
datePublished: "2026-08-11"
dateModified: "2026-11-16"
faqs:
${faqYaml}
---

# ${b.name}（${b.enName}）2026 深度评测：套餐价格、线路架构与实测数据核验档案

> **Answer-First 核心评测结论（快速决策摘要）**
> - **品牌定位与分组**：**${b.name}（${b.enName}）** 创立于 **${b.foundedYear}**，在本站 41 家独立机场数据库中位列第 **#${b.rank}** 号档案（${b.rank <= 28 ? '第一部分：主力在营核实品牌' : '第二部分：历史补充归档品牌'}）。
> - **线路与协议底盘**：采用 **${b.lineType}**，节点承载协议为 **\`${b.protocols.join(' / ')}\`**，覆盖全球 **${b.regionCount} 个地区（${b.nodeCountText}）**，并发设备限制为 **${b.deviceLimit}**。
> - **价格与优惠码核实**：**${minPriceDisplay}**。${b.couponCode ? `官方核实优惠码：\`${b.couponCode}\`（${b.couponNote}）。` : '暂无常态化优惠码记录。'}
> - **客户端兼容性重要提示**：**${b.clientSupportLabel}**。${b.clientSupport === 'proprietary_only' ? '⚠️ 注意：该品牌仅支持自研专属客户端，不提供第三方 Clash / Shadowrocket 订阅链接！' : `支持导入 ${b.supportedClients.slice(0, 5).join('、')} 等主流客户端。`}
> - **实测证据状态**：${b.speedtest20260811 ? `✅ 已归档 2026-08-11 自动化脚本实测原图（${b.speedtest20260811.summary}）` : b.speedtest20261019 ? '✅ 已归档 2026-10-19 分区节点延迟与吞吐记录' : '⚪ 暂无独立测速截图（仅展示历史核实规格，不伪造跑分）'}。

<!-- 组件 4：品牌核心参数与套餐快照 -->
<BrandInfrastructureSnapshot brandSlug="${b.slug}" />

---

## 一、${b.name}（${b.enName}）运营背景与#${b.rank}号档案核实

**${b.name}**（英文标识：**${b.enName}**${b.aliases.length ? `，常见检索别名：${b.aliases.join('、')}` : ''}）${b.summary}

根据本站对《41家独立机场品牌审计台账》及实测资料包的交叉核对，${b.name} 的基础运营信息如下：

| 核验项目 | ${b.name} 档案记录内容 | 状态说明 |
| :--- | :--- | :--- |
| **品牌名称 / Slug** | ${b.name} (\`/brands/${b.slug}/\`) | ✅ 独立品牌实体编号 #${b.rank} |
| **创立年份** | ${b.foundedYear} | ${b.dataStatus === 'historical' ? '△ 历史资料记录' : '🟢 官方资料核实'} |
| **支付方式** | ${b.paymentMethods.join(' / ')} | ✅ 支持国内主流便捷支付 |
| **同源站群审计** | **${b.homologousGroup}** | 🔍 详见[机场风险情报局](/resources/risk-intel/) |
| **注册推广入口** | ${b.hasAffiliateUrl ? `[前往 ${b.name} 官方注册页 ↗](${b.affiliateUrl}){target="_blank" rel="nofollow sponsored noopener"}` : '⚠️ 历史资料未提供独立推广入口（建议参考下方主力替代品牌）'} | ${b.hasAffiliateUrl ? '✅ 已核实链接 (sponsored)' : '⚪ 无推广链接'} |
| **数据来源与核实日** | ${b.sourceNote} | 最近核实：\`${b.verifiedDate}\` |

---

## 二、${b.name} 线路架构（${b.lineCategory}）与 ${b.protocols.join('/')} 协议拓扑解析

<!-- 组件 3：线路拓扑与架构图组件 -->
<NetworkTopology brandSlug="${b.slug}" />

### 2.1 ${b.name} 传输链路特征分析
- **过境通道类型（${b.lineType}）**：${b.lineCategory === 'IEPL' ? '采用内网以太网专线（IEPL）过境，数据在国内多线 BGP 入口封装后直接通过运营商物理内网传输至境外落地，不经过公网国际出口，因此在晚高峰（20:00–23:30）具备极强的抗拥塞与低抖动能力。' : b.lineCategory === 'IPLC' ? '采用国际私有租赁线路（IPLC）点对点过境，兼顾低延迟与高稳定性。' : '采用国内多线 BGP 入口配合专线/公网中转架构，在保障日常可用性的同时控制了套餐成本。'}
- **协议栈解析（\`${b.protocols.join(' / ')}\`）**：${b.protocols.includes('VLESS') ? '核心采用新一代无状态轻量级协议 \`VLESS\`，握手开销低于传统 VMess，抗封锁能力出色。请注意：在 Clash 客户端中使用 VLESS 必须切换至 **Mihomo (Clash Meta)** 内核。' : b.protocols.some(p => p.includes('Hysteria')) ? '包含基于 QUIC/UDP 暴力拥塞控制的 \`Hysteria 2\` 协议，在弱网或高丢包环境下仍能跑满高带宽。' : b.protocols.includes('Trojan') ? '采用伪装成标准 HTTPS TLS 流量的 \`Trojan\` 协议，特征隐蔽性强。' : '采用经典成熟的 AEAD 加密 \`Shadowsocks (SS)\` 协议，对老旧路由器、电视盒子及各类移动终端兼容性极佳，CPU 算力消耗极低。'}
- **全球节点分布（共 ${b.regionCount} 个地区）**：覆盖 **${b.regions.join('、')}**（${b.nodeCountText}），标称峰值带宽为 **${b.peakBandwidth}**。

---

## 三、${b.name} 套餐价格精算（${minPriceDisplay}）与流量性价比

${b.historicalPriceNote ? `> **📌 价格与促销口径说明**：${b.historicalPriceNote}\n` : ''}

我们在上方的品牌快照卡中已完整列出 ${b.name} 的全部 ${b.plans.length} 档官方套餐表。从资金效率与单 GB 成本角度来看：
1. **入门试错成本**：${b.minMonthlyPrice ? `${b.name} 支持最低 **¥${b.minMonthlyPrice}/月** 的纯月付档位，非常适合新用户首次花小钱验证本地宽带（电信/联通/移动）在晚高峰的实际连接表现。` : `${b.name} 的主力引流档集中在年付特惠（折算约 ¥${b.minAnnualizedMonthlyPrice || '待核实'}/月），下单前请确认自身长期使用需求。`}
2. **年付折算与长周期折扣**：${b.couponCode ? `配合官方核实优惠码 \`${b.couponCode}\`（${b.couponNote}），折算后的单 GB 成本在同类 ${b.lineCategory} 机场中具备良好竞争力。` : '建议首次购买坚持“先月付、后年付”的风控原则。'}
3. **流量重置与设备限制**：设备并发策略为 **${b.deviceLimit}**。日常使用请务必在客户端中开启 **Rule（规则分流）模式**，避免国内视频与下载消耗宝贵的跨境专线流量。

---

## 四、${b.name} 客户端与订阅兼容性（${b.clientSupportLabel}）

${b.clientSupport === 'proprietary_only' ? `
> **⚠️ 重要兼容性预警：${b.name} 仅支持官方专属客户端，不提供 Clash / 小火箭订阅链接！**
> 经本站实测核对，${b.name} 属于全站 8 家「纯专属客户端机场」之一。
> - **优点**：适合完全不想折腾订阅链接、不想学习 YAML 规则的新手，下载官方 Windows / Mac / Android 客户端后输入账号密码即可一键连接。
> - **缺点**：**无法导入 Clash Verge Rev、FlClash、Shadowrocket、Stash、Quantumult X 或 OpenWrt 软路由（OpenClash / PassWall2）**。如果您有多设备自定义分流或软路由需求，请直接转向支持双轨模式的 **[光速云（LightSpeed Cloud）](/brands/guangsuyun/)**。
` : `
${b.name} 支持标准订阅导出，兼容以下主流代理软件：
- **Windows / macOS / Linux 桌面端**：推荐使用 **[Clash Verge Rev](/clash/verge/)**、**FlClash** 或 **v2rayN**（[前往客户端知识库下载](/clients/)）。
- **iOS / iPadOS 苹果移动端**：推荐使用 **Shadowrocket（小火箭）**、**Stash**、**Quantumult X** 或 **Clash Mi**。
- **Android 安卓移动端**：推荐使用 **FlClash**、**Clash Meta for Android (CMFA)** 或 **v2rayNG**。
- **OpenWrt 软路由**：支持导入 **OpenClash（需启用 Meta 内核）**、**PassWall2** 或 **Nikki**。
`}

---

## 五、${b.name} 流媒体（Netflix/Disney+）与 ChatGPT 解锁矩阵

<!-- 组件 2：流媒体与 AI 解锁矩阵组件 -->
<StreamingAvailabilityMatrix brandSlug="${b.slug}" />

---

## 六、${b.name} 网络性能与 ${b.speedtest20260811 ? '2026-08-11 晚高峰实测图' : '2026 测速归档'}

<!-- 组件 1：深色科技网测面板 -->
<NetworkPerformanceReport brandSlug="${b.slug}" />

---

## 七、${b.name} 核心优缺点、适合人群与同源风险审计

<div class="cc-grid-2" style="margin: 18px 0;">
  <div class="cc-card" style="border-left: 4px solid var(--cc-success);">
    <h3 style="margin-top: 0; color: var(--cc-navy);">✅ ${b.name} 核心优势</h3>
    <ul>
      ${b.pros.map(p => `<li>${p}</li>`).join('\n      ')}
    </ul>
    <h3 style="color: var(--cc-navy);">👤 适合人群</h3>
    <ul>
      ${b.suitableFor.map(s => `<li>${s}</li>`).join('\n      ')}
    </ul>
  </div>

  <div class="cc-card" style="border-left: 4px solid var(--cc-warning);">
    <h3 style="margin-top: 0; color: var(--cc-navy);">⚠️ ${b.name} 已知限制</h3>
    <ul>
      ${b.cons.map(c => `<li>${c}</li>`).join('\n      ')}
    </ul>
    <h3 style="color: var(--cc-navy);">🚫 不适合人群</h3>
    <ul>
      ${b.notSuitableFor.map(n => `<li>${n}</li>`).join('\n      ')}
    </ul>
  </div>
</div>

> **🚨 风险提示与审计备注**：${b.riskNotes}（同源归属：**${b.homologousGroup}**）。

---

## 八、横向对比：${b.name} vs 光速云 vs ${peers.map(p => p.name).join(' vs ')}

<BrandComparisonTable :slugs='${JSON.stringify([b.slug, 'guangsuyun', ...peers.map(p => p.slug)])}' />

---

## 九、${b.name} 常见问题解答（GEO / AEO FAQ）

${renderFaqDetails(brandFaqs)}

---

## 十、${b.name} 数据来源、核实日期与转化通道

- **数据来源**：${b.sourceNote}
- **核实日期**：\`${b.verifiedDate}\` | **最后更新**：\`${b.updatedAt}\`
- **上下游内链导航**：[返回 41 家品牌数据库](/brands/) | [查看光速云万字评测](/brands/guangsuyun/) | [进入机场横向对比中心](/compare/) | [Clash 订阅导入教程](/clash/verge-subscription/)
`;
  writeMd(relFile, md);
});

console.log('Generated Home, 404, Brands DB, Compare Hub, Clients Hub, 4 Primary Navs, 28 Secondary Topics, and 40 Brand Reviews (with <details> FAQ & diversified H2s)!');
