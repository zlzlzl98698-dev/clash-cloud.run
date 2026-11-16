<script setup lang="ts">
import { computed } from 'vue';
import { BRANDS } from '../../data/brands';
import { PRIMARY_NAVS, PUBLISHED_ARTICLES } from '../../data/navigation';
import { CLIENTS } from '../../data/clients';

const guangsuyun = computed(() => BRANDS.find((b) => b.slug === 'guangsuyun')!);

const monthlyFeatured = computed(() =>
  ['guangsuyun', 'xingdaomeng', 'yifan', 'weitu', 'weifeng', 'ermao']
    .map((s) => BRANDS.find((b) => b.slug === s)!)
    .filter(Boolean)
);

const budgetBrands = computed(() =>
  ['guangsuyun', 'weifeng', 'feimao', 'wuyou', 'shandianshu', 'dalaoyun']
    .map((s) => BRANDS.find((b) => b.slug === s)!)
    .filter(Boolean)
);

const stableBrands = computed(() =>
  ['guangsuyun', 'xingdaomeng', 'weitu', 'jilian', 'guangnian', 'sujie']
    .map((s) => BRANDS.find((b) => b.slug === s)!)
    .filter(Boolean)
);

const aiStreamingBrands = computed(() =>
  ['guangsuyun', 'yifan', 'muguang', 'xingdaomeng', 'tiziyun', 'firefly']
    .map((s) => BRANDS.find((b) => b.slug === s)!)
    .filter(Boolean)
);

const quickCompareBrands = computed(() => BRANDS.slice(0, 12));
const latestArticles = computed(() => PUBLISHED_ARTICLES.slice(0, 12));
const topClients = computed(() => CLIENTS.slice(0, 6));

function triggerGlobalSearch() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cc-open-search'));
  }
}
</script>

<template>
  <div class="cc-home-portal">
    <!-- 1. 核心价值主张与定位说明 + 2. 全站搜索入口 -->
    <section
      style="background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 52px 20px 48px; border-bottom: 1px solid #334155;"
      aria-label="核心价值主张与全站检索"
    >
      <div style="max-width: var(--cc-max-width); margin: 0 auto;">
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
          <span style="background: rgba(56, 189, 248, 0.16); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 3px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;">
            ✓ 41 家去重独立机场品牌数据库
          </span>
          <span style="background: rgba(16, 185, 129, 0.16); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.35); padding: 3px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;">
            ✓ 2026-08-11 晚高峰 17 家实测截图存证
          </span>
          <span style="background: rgba(245, 158, 11, 0.16); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.35); padding: 3px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;">
            ✓ 22 款全平台代理客户端兼容核验
          </span>
        </div>

        <h1 style="font-size: 34px; line-height: 1.25; font-weight: 800; margin: 0 0 14px; color: #ffffff; letter-spacing: -0.02em;">
          2026 中文机场推荐、实测排行与 41 家独立品牌评测数据库
        </h1>
        <p style="font-size: 16px; line-height: 1.7; color: #cbd5e1; max-width: 920px; margin: 0 0 24px;">
          <strong>clash机场（clash-cloud.run）</strong> 定位为中文机场与 VPN 专业评测媒体 + 品牌参数数据库 + Clash 客户端知识库。我们拒绝编造虚假测速与跑分，所有套餐价格、年付折算、IEPL/IPLC 线路架构、VLESS/Hysteria2 协议支持及「仅专属客户端 vs 通用 Clash 订阅」状态均来自统一核实数据源。
        </p>

        <!-- Module 2: Full-site Search Trigger & Quick Actions -->
        <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 24px;">
          <button
            type="button"
            @click="triggerGlobalSearch"
            style="flex: 1; min-width: 280px; max-width: 540px; display: flex; align-items: center; justify-content: space-between; padding: 13px 18px; background: rgba(255, 255, 255, 0.1); border: 1px solid #475569; border-radius: 10px; color: #e2e8f0; font-size: 14px; cursor: pointer; text-align: left;"
          >
            <span>🔍 搜索 41 家机场品牌、Clash Verge 教程、协议或故障代码...</span>
            <kbd style="background: #0f172a; color: #94a3b8; padding: 2px 8px; border-radius: 4px; font-size: 12px; border: 1px solid #334155;">⌘K / 点击搜索</kbd>
          </button>
          <a href="/brands/guangsuyun/" class="cc-btn cc-btn-primary" style="padding: 13px 22px; font-size: 14.5px;">
            ★ 查看首推旗舰：光速云万字评测 →
          </a>
          <a href="/brands/" class="cc-btn" style="background: #1e293b; color: #f8fafc !important; border: 1px solid #475569; padding: 13px 20px;">
            进入 41 家品牌筛选库
          </a>
          <a href="/compare/" class="cc-btn" style="background: #1e293b; color: #38bdf8 !important; border: 1px solid #334155; padding: 13px 18px;">
            同价位品牌二选一对比
          </a>
        </div>

        <!-- Key Stats Strip -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; padding-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <div>
            <div style="font-size: 22px; font-weight: 800; color: #38bdf8; font-family: var(--cc-font-mono);">41 家</div>
            <div style="font-size: 12.5px; color: #94a3b8;">独立去重品牌（合并 Firefly 与萤火虫）</div>
          </div>
          <div>
            <div style="font-size: 22px; font-weight: 800; color: #10b981; font-family: var(--cc-font-mono);">33 家 / 8 家</div>
            <div style="font-size: 12.5px; color: #94a3b8;">支持通用 Clash 订阅 vs 仅限专属客户端</div>
          </div>
          <div>
            <div style="font-size: 22px; font-weight: 800; color: #fbbf24; font-family: var(--cc-font-mono);">4 × 7 = 28</div>
            <div style="font-size: 12.5px; color: #94a3b8;">四大核心导航 × 28 个二级栏目专题</div>
          </div>
          <div>
            <div style="font-size: 22px; font-weight: 800; color: #c084fc; font-family: var(--cc-font-mono);">56 集群 / 392 篇</div>
            <div style="font-size: 12.5px; color: #94a3b8;">三级内容集群与 SEO/GEO 知识矩阵</div>
          </div>
        </div>
      </div>
    </section>

    <div class="cc-container">
      <!-- 3. 四大主题快速入口 -->
      <section style="margin-bottom: 48px;" aria-label="四大主题快速入口">
        <div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; margin-bottom: 18px;">
          <div>
            <h2 style="margin: 0; font-size: 24px; color: var(--cc-navy);">一、四大核心主题导航（28 个二级专题矩阵）</h2>
            <p style="margin: 4px 0 0; font-size: 14px; color: var(--cc-text-muted);">
              每个一级导航均可点击进入独立专题门户，下辖 7 个垂直细分二级栏目与 14 个三级文章集群
            </p>
          </div>
        </div>

        <div class="cc-grid-2">
          <div v-for="nav in PRIMARY_NAVS" :key="nav.id" class="cc-card" style="border-top: 3px solid var(--cc-accent);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <div>
                <span style="font-size: 11px; font-family: var(--cc-font-mono); color: var(--cc-accent); font-weight: 700;">{{ nav.enLabel }}</span>
                <h3 style="margin: 2px 0 0; font-size: 19px;">
                  <a :href="nav.path" style="color: var(--cc-navy);">{{ nav.title }} 专题总入口 →</a>
                </h3>
              </div>
              <a :href="nav.path" class="cc-btn cc-btn-outline" style="padding: 5px 12px; font-size: 12.5px;">进入频道</a>
            </div>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary); margin: 0 0 14px;">
              {{ nav.summary }}
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <a
                v-for="t in nav.topics"
                :key="t.id"
                :href="t.path"
                style="padding: 5px 11px; background: var(--cc-bg-soft); border: 1px solid var(--cc-border); border-radius: 6px; font-size: 13px; font-weight: 600; color: var(--cc-text);"
              >
                {{ t.title }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 5 & 4. 第一主推品牌光速云展示区 + 本月推荐机场精选 -->
      <section style="margin-bottom: 48px;" aria-label="第一主推品牌光速云展示区">
        <div
          class="cc-card"
          style="border: 2px solid #2563eb; background: linear-gradient(135deg, #eff6ff 0%, #ffffff 45%); padding: 28px;"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; flex-wrap: wrap; margin-bottom: 18px;">
            <div style="display: flex; align-items: center; gap: 16px;">
              <img :src="guangsuyun.logo" alt="光速云 Logo" width="68" height="68" loading="eager" style="width: 68px; height: 68px; border-radius: 14px; background: #fff; padding: 4px; border: 1px solid var(--cc-accent-border);" />
              <div>
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <span style="background: #1d4ed8; color: #fff; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 999px;">
                    ★ 本站第一主推品牌（商业合作披露）
                  </span>
                  <span class="cc-badge cc-badge-measured">✓ 2026-08-11 & 三网实测截图存证</span>
                </div>
                <h2 style="margin: 8px 0 4px; font-size: 25px; color: var(--cc-navy);">
                  <a href="/brands/guangsuyun/" style="color: var(--cc-navy);">光速云（LightSpeed Cloud）— 2020年老牌 IEPL + 企业级内网双专线机场</a>
                </h2>
                <p style="margin: 0; font-size: 14px; color: var(--cc-text-secondary);">
                  全站通用支持 <strong>VLESS + Shadowsocks</strong> 协议 | 兼容 <strong>Clash Verge Rev / Shadowrocket / v2rayN</strong> 及官方一键客户端 | 覆盖全球 12 大地区 55+ 专线节点
                </p>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px; min-width: 240px;">
              <a
                :href="guangsuyun.affiliateUrl!"
                target="_blank"
                rel="nofollow sponsored noopener"
                class="cc-btn cc-btn-primary"
                style="padding: 12px 20px; font-size: 15px;"
              >
                前往光速云官方注册（优惠码 AMM）↗
              </a>
              <a href="/brands/guangsuyun/" class="cc-btn cc-btn-outline" style="padding: 9px 16px; font-size: 13.5px;">
                阅读光速云 10,000 字深度实测报告 →
              </a>
            </div>
          </div>

          <!-- Highlight Metrics & Historical Price Clarification -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px; margin-bottom: 18px;">
            <div style="background: #fff; border: 1px solid var(--cc-accent-border); border-radius: 8px; padding: 12px;">
              <div style="font-size: 12px; color: var(--cc-text-muted);">轻量版年付（低门槛主力）</div>
              <div style="font-size: 18px; font-weight: 800; color: var(--cc-accent);">¥99/年 · 69GB/月</div>
              <div style="font-size: 11.5px; color: var(--cc-text-secondary);">折合仅 <strong>¥8.25/月</strong>（注：历史摘要曾标59GB，现核实为69GB/月）</div>
            </div>
            <div style="background: #fff; border: 1px solid var(--cc-accent-border); border-radius: 8px; padding: 12px;">
              <div style="font-size: 12px; color: var(--cc-text-muted);">极速版 / 集群版 / 定制版（月付起）</div>
              <div style="font-size: 18px; font-weight: 800; color: var(--cc-navy);">¥25 / ¥65 / ¥680 每月</div>
              <div style="font-size: 11.5px; color: var(--cc-text-secondary);">分别含 168GB / 380GB / 500GB，支持半年9折、年付8折</div>
            </div>
            <div style="background: #fff; border: 1px solid var(--cc-accent-border); border-radius: 8px; padding: 12px;">
              <div style="font-size: 12px; color: var(--cc-text-muted);">按量不限时永久流量包</div>
              <div style="font-size: 18px; font-weight: 800; color: var(--cc-success);">¥147 一次性 · 247GB</div>
              <div style="font-size: 11.5px; color: var(--cc-text-secondary);">无到期时间限制，流量用完即止，极佳备用/低频方案</div>
            </div>
            <div style="background: #fff; border: 1px solid var(--cc-accent-border); border-radius: 8px; padding: 12px;">
              <div style="font-size: 12px; color: var(--cc-text-muted);">2026-08-11 23:25 晚高峰实测</div>
              <div style="font-size: 18px; font-weight: 800; color: #059669;">55/55 节点 100% 在线</div>
              <div style="font-size: 11.5px; color: var(--cc-text-secondary);">台湾/新加坡/日本峰值达 <strong>502.87 MB/s</strong>，全解锁 ChatGPT/Netflix</div>
            </div>
          </div>

          <div style="font-size: 12.5px; color: var(--cc-text-muted); background: rgba(255,255,255,0.8); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--cc-border);">
            <strong>编辑部客观说明：</strong>光速云为本站商业合作首推品牌。从 2026-08-11 晚高峰实测数据看，其节点在线率（55/55）与多地区稳定性处于第一梯队；若单看脚本瞬时极限峰值，一翻云（555.02 MB/s）与神行加速（511.77 MB/s）亦有突出表现，读者可结合自身预算与协议偏好在下方矩阵中自由对比。
          </div>
        </div>
      </section>

      <!-- 4. 本月推荐机场精选 -->
      <section style="margin-bottom: 48px;" aria-label="本月推荐机场精选">
        <div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; margin-bottom: 16px;">
          <div>
            <h2 style="margin: 0; font-size: 24px; color: var(--cc-navy);">二、本月推荐机场精选（6 家主力梯队实测核验）</h2>
            <p style="margin: 4px 0 0; font-size: 14px; color: var(--cc-text-muted);">
              综合考量 IEPL/IPLC 专线比例、2026-08-11 实测在线率、Clash 订阅兼容性与月付/年付性价比
            </p>
          </div>
          <a href="/airport/recommend/" style="font-weight: 600; font-size: 14px;">进入「机场推荐」完整专题 →</a>
        </div>

        <div class="cc-grid-3">
          <div v-for="b in monthlyFeatured" :key="b.slug" class="cc-card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img :src="b.logo" :alt="b.name" width="40" height="40" loading="lazy" style="width: 40px; height: 40px; border-radius: 8px; object-fit: contain; border: 1px solid var(--cc-border);" />
                  <div>
                    <a :href="`/brands/${b.slug}/`" style="font-size: 16.5px; font-weight: 800; color: var(--cc-navy);">{{ b.name }}</a>
                    <div style="font-size: 11.5px; color: var(--cc-text-muted);">{{ b.lineType }}</div>
                  </div>
                </div>
                <span class="cc-badge cc-badge-measured" style="font-size: 11px;">✓ 已核实</span>
              </div>
              <p style="font-size: 13px; color: var(--cc-text-secondary); margin: 0 0 12px;">{{ b.summary }}</p>
              <div style="font-size: 12.5px; color: var(--cc-text-muted); margin-bottom: 14px;">
                <div>• <strong>起步门槛：</strong>月付 ¥{{ b.minMonthlyPrice }}/月<span v-if="b.minAnnualizedMonthlyPrice && b.minAnnualizedMonthlyPrice < (b.minMonthlyPrice || 999)">（年付折合 ¥{{ b.minAnnualizedMonthlyPrice }}/月）</span></div>
                <div>• <strong>协议与终端：</strong>{{ b.protocols.join('/') }} · {{ b.clientSupportLabel }}</div>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <a :href="`/brands/${b.slug}/`" class="cc-btn cc-btn-outline" style="flex: 1; padding: 7px 10px; font-size: 12.5px;">评测详情</a>
              <a
                v-if="b.hasAffiliateUrl && b.affiliateUrl"
                :href="b.affiliateUrl"
                target="_blank"
                rel="nofollow sponsored noopener"
                class="cc-btn cc-btn-primary"
                style="flex: 1; padding: 7px 10px; font-size: 12.5px;"
              >
                官方入口 ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 6, 7, 8: 三大细分场景推荐（预算型 / 稳定专线 / AI与流媒体） -->
      <section style="margin-bottom: 48px;" aria-label="细分场景机场推荐">
        <h2 style="margin: 0 0 18px; font-size: 24px; color: var(--cc-navy);">
          三、按核心场景精准匹配：预算平价 / 晚高峰稳定专线 / AI 与流媒体解锁
        </h2>
        <div class="cc-grid-3">
          <!-- 6. 预算型机场推荐 -->
          <div class="cc-card" style="border-top: 3px solid #10b981;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <h3 style="margin: 0; font-size: 18px; color: var(--cc-navy);">💰 预算型与低门槛推荐</h3>
              <a href="/airport/cheap/" style="font-size: 12.5px; font-weight: 600;">便宜机场专题 →</a>
            </div>
            <p style="font-size: 13px; color: var(--cc-text-secondary); margin: 0 0 12px;">
              适合学生党、轻度查阅资料或作为第二备用源。重点核实「年付折算月均 ≤ ¥10」与「¥5.6/月起步」品牌：
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
              <li v-for="b in budgetBrands" :key="b.slug" style="padding: 8px 10px; background: var(--cc-bg-soft); border-radius: 6px; border: 1px solid var(--cc-border); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <a :href="`/brands/${b.slug}/`" style="font-weight: 700; color: var(--cc-navy); font-size: 14px;">{{ b.name }}</a>
                  <div style="font-size: 11.5px; color: var(--cc-text-muted);">{{ b.protocols.join('/') }} · {{ b.clientSupport === 'proprietary_only' ? '仅专属客户端' : '支持Clash订阅' }}</div>
                </div>
                <span style="font-family: var(--cc-font-mono); font-size: 12.5px; font-weight: 700; color: var(--cc-success);">
                  ¥{{ b.minAnnualizedMonthlyPrice ?? b.minMonthlyPrice }}/月起
                </span>
              </li>
            </ul>
          </div>

          <!-- 7. 稳定专线机场推荐 -->
          <div class="cc-card" style="border-top: 3px solid #2563eb;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <h3 style="margin: 0; font-size: 18px; color: var(--cc-navy);">🛡️ 晚高峰稳定专线推荐</h3>
              <a href="/airport/stable/" style="font-size: 12.5px; font-weight: 600;">稳定机场专题 →</a>
            </div>
            <p style="font-size: 13px; color: var(--cc-text-secondary); margin: 0 0 12px;">
              适合远程办公、外贸视频会议与主力全天候挂机。采用 IEPL/IPLC 内网专线，规避国际出口晚高峰拥塞：
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
              <li v-for="b in stableBrands" :key="b.slug" style="padding: 8px 10px; background: var(--cc-bg-soft); border-radius: 6px; border: 1px solid var(--cc-border); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <a :href="`/brands/${b.slug}/`" style="font-weight: 700; color: var(--cc-navy); font-size: 14px;">{{ b.name }}</a>
                  <div style="font-size: 11.5px; color: var(--cc-text-muted);">{{ b.lineCategory }} · {{ b.foundedYear }}</div>
                </div>
                <span style="font-family: var(--cc-font-mono); font-size: 12.5px; font-weight: 700; color: var(--cc-accent);">
                  月付 ¥{{ b.minMonthlyPrice }}
                </span>
              </li>
            </ul>
          </div>

          <!-- 8. AI 与流媒体友好机场推荐 -->
          <div class="cc-card" style="border-top: 3px solid #8b5cf6;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <h3 style="margin: 0; font-size: 18px; color: var(--cc-navy);">🤖 AI 与 4K 流媒体推荐</h3>
              <a href="/airport/ranking/" style="font-size: 12.5px; font-weight: 600;">解锁排行专题 →</a>
            </div>
            <p style="font-size: 13px; color: var(--cc-text-secondary); margin: 0 0 12px;">
              针对 ChatGPT / Claude 高频调用与 Netflix / Disney+ / TikTok 跨区解锁优化落地原生/DNS解锁节点：
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
              <li v-for="b in aiStreamingBrands" :key="b.slug" style="padding: 8px 10px; background: var(--cc-bg-soft); border-radius: 6px; border: 1px solid var(--cc-border); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <a :href="`/brands/${b.slug}/`" style="font-weight: 700; color: var(--cc-navy); font-size: 14px;">{{ b.name }}</a>
                  <div style="font-size: 11.5px; color: var(--cc-text-muted);">覆盖 {{ b.regionCount }} 地区 · {{ b.unlockMatrix?.chatgpt?.label }}</div>
                </div>
                <a :href="`/brands/${b.slug}/`" style="font-size: 12px; font-weight: 600;">查看矩阵 →</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 9. 品牌快速筛选与对比表 -->
      <section style="margin-bottom: 48px;" aria-label="品牌快速筛选与对比表">
        <div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; margin-bottom: 14px;">
          <div>
            <h2 style="margin: 0; font-size: 24px; color: var(--cc-navy);">四、主力机场核心参数同口径横向对比表（Top 12 代表样本）</h2>
            <p style="margin: 4px 0 0; font-size: 14px; color: var(--cc-text-muted);">
              所有价格与协议均调用自 <code>docs/.vitepress/data/brands.ts</code> 统一品牌数据中心，杜绝前后矛盾
            </p>
          </div>
          <div style="display: flex; gap: 12px;">
            <a href="/brands/" style="font-weight: 600; font-size: 14px;">查看全部 41 家品牌库 →</a>
            <a href="/compare/" style="font-weight: 600; font-size: 14px;">进入二选一对比中心 →</a>
          </div>
        </div>

        <BrandComparisonTable :limit="12" />
      </section>

      <!-- 10. VPN 与机场对比指南 + 11. Clash 客户端快速教程入口 -->
      <section style="margin-bottom: 48px;" aria-label="VPN对比与Clash客户端教程">
        <div class="cc-grid-2">
          <!-- 10. VPN 与机场对比指南 -->
          <div class="cc-card">
            <span style="font-size: 12px; font-weight: 700; color: var(--cc-accent);">核心认知科普</span>
            <h2 style="margin: 4px 0 12px; font-size: 21px; color: var(--cc-navy);">
              五、传统商业 VPN 与现代专线机场（Clash 订阅）有什么本质区别？
            </h2>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary); margin: 0 0 14px;">
              许多习惯搜索「VPN 推荐」「好用的 VPN」的用户常误购欧美传统 VPN（如 ExpressVPN、NordVPN），结果在中国大陆网络环境下频繁断连且微信、B站无法正常直连。
            </p>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 14px;">
              <thead>
                <tr style="background: var(--cc-bg-soft);">
                  <th style="padding: 8px; border: 1px solid var(--cc-border);">对比维度</th>
                  <th style="padding: 8px; border: 1px solid var(--cc-border);">现代专线机场 (Clash/小火箭)</th>
                  <th style="padding: 8px; border: 1px solid var(--cc-border);">传统海外商业 VPN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); font-weight: 600;">传输协议</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); color: var(--cc-success);">VLESS / Hysteria 2 / Trojan / SS</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border);">OpenVPN / WireGuard / IKEv2 (特征明显)</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); font-weight: 600;">过境架构</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); color: var(--cc-success);">国内 BGP 入口 + IEPL/IPLC 专线</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border);">海外公网直连，晚高峰易丢包阻断</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); font-weight: 600;">国内外分流</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); color: var(--cc-success);">支持精细 Rule 规则分流（国内直连）</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border);">多为全局接管网卡，国内应用减速</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); font-weight: 600;">月均成本</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border); color: var(--cc-success);">¥5.6 – ¥25/月（支持月付试错）</td>
                  <td style="padding: 8px; border: 1px solid var(--cc-border);">$8 – $12.95/月（约 ¥60–90/月）</td>
                </tr>
              </tbody>
            </table>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="/vpn/recommend/" class="cc-btn cc-btn-outline" style="font-size: 13px; padding: 7px 14px;">阅读 VPN 推荐与转型指南 →</a>
              <a href="/articles/vpn-vs-airport-in-depth-comparison/" class="cc-btn cc-btn-outline" style="font-size: 13px; padding: 7px 14px;">深度技术拆解文章 →</a>
            </div>
          </div>

          <!-- 11. Clash 客户端快速教程入口 -->
          <div class="cc-card">
            <span style="font-size: 12px; font-weight: 700; color: var(--cc-accent);">全平台工具与内核指南</span>
            <h2 style="margin: 4px 0 12px; font-size: 21px; color: var(--cc-navy);">
              六、Clash 客户端下载与 Mihomo (Clash Meta) 快速上手入口
            </h2>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary); margin: 0 0 14px;">
              由于光速云、一翻云、二猫云等主流机场均已升级至 <strong>VLESS</strong> 或 <strong>Hysteria 2</strong> 协议，请务必使用内置 <strong>Mihomo (原 Clash.Meta)</strong> 内核的客户端，避免旧版 CFW 无法读取节点。
            </p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 14px;">
              <div v-for="c in topClients" :key="c.id" style="padding: 9px 11px; background: var(--cc-bg-soft); border: 1px solid var(--cc-border); border-radius: 6px;">
                <div style="font-weight: 700; font-size: 13.5px; color: var(--cc-navy);">{{ c.name }}</div>
                <div style="font-size: 11.5px; color: var(--cc-text-muted);">{{ c.platforms.join('/') }} · {{ c.kernel }}</div>
              </div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <a href="/clash/verge-download/" class="cc-btn cc-btn-primary" style="font-size: 13px; padding: 7px 14px;">Clash Verge Rev 下载指南</a>
              <a href="/clash/verge-subscription/" class="cc-btn cc-btn-outline" style="font-size: 13px; padding: 7px 14px;">订阅导入教程</a>
              <a href="/clients/" class="cc-btn cc-btn-outline" style="font-size: 13px; padding: 7px 14px;">全部 22 款客户端数据库 →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 12. 免费梯子与免费节点风险说明 + 13. 跑路预警与防坑提示 -->
      <section style="margin-bottom: 48px;" aria-label="免费节点风险与跑路预警">
        <div class="cc-grid-2">
          <!-- 12. 免费梯子与免费节点风险说明 -->
          <div class="cc-card" style="border-left: 4px solid var(--cc-warning);">
            <h2 style="margin: 0 0 10px; font-size: 20px; color: var(--cc-navy);">
              七、免费梯子与公开免费节点风险核验说明
            </h2>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary); margin: 0 0 12px;">
              经本站对 41 家在库品牌及公开抓取源的实情核验：<strong>目前没有任何一家商业专线机场提供无限期免付费套餐</strong>（仅无忧云、飞猫云、闪电鼠等提供 ¥5.6–¥12/月或 ¥19/100GB 一次性超低门槛方案）。
            </p>
            <ul style="font-size: 13px; color: var(--cc-text-secondary); margin: 0 0 14px; padding-left: 18px;">
              <li><strong>存活率极低：</strong>GitHub 爬虫抓取的公开免费节点平均存活周期不足 4 小时，晚高峰丢包率超 80%。</li>
              <li><strong>中间人嗅探与蜜罐：</strong>不明来源的免费节点可记录 DNS 请求、劫持未加密流量或植入伪造证书。</li>
              <li><strong>安全红线：</strong>严禁在免费节点或破解版 VPN 下登录网银、PayPal、加密货币交易所及工作主邮箱。</li>
            </ul>
            <div style="display: flex; gap: 10px;">
              <a href="/airport/free-ladder/" style="font-size: 13px; font-weight: 600;">免费梯子真相专题 →</a>
              <a href="/resources/free-nodes/" style="font-size: 13px; font-weight: 600;">免费节点核验报告 →</a>
            </div>
          </div>

          <!-- 13. 跑路预警与防坑提示 -->
          <div class="cc-card" style="border-left: 4px solid var(--cc-danger);">
            <h2 style="margin: 0 0 10px; font-size: 20px; color: var(--cc-navy);">
              八、2026 机场跑路预警信号与同源站群避坑提示
            </h2>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary); margin: 0 0 12px;">
              机场行业存在明显的生命周期波动与「同源多品牌（站群）」现象。本站通过底层面板、优惠码规则与套餐结构审计，帮您识别核心风险：
            </p>
            <ul style="font-size: 13px; color: var(--cc-text-secondary); margin: 0 0 14px; padding-left: 18px;">
              <li><strong>警惕收割促销：</strong>凡是推出「三年付 3 折」「永久无限流量买断」的新晋小机场，跑路概率极高。</li>
              <li><strong>识别同源矩阵：</strong>如飞鸟机场、龙猫云、微风、Firefly 同属一云梯（Yiyunti）体系；大佬云、闪电鼠、云界线、榴莲云、环球梯共享 <code>qwerty</code> 5.6元同规格矩阵，切勿将同源品牌互作主备。</li>
              <li><strong>坚持月付试错：</strong>除光速云 ¥99/年等长期验证的老牌特惠档外，新接触任何品牌均建议先买 1 个月实测。</li>
            </ul>
            <div style="display: flex; gap: 10px;">
              <a href="/resources/scam-alert/" style="font-size: 13px; font-weight: 600;">跑路预警雷达 →</a>
              <a href="/resources/risk-intel/" style="font-size: 13px; font-weight: 600;">41家品牌同源风险情报 →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 14. 最新评测与热门文章 -->
      <section style="margin-bottom: 48px;" aria-label="最新评测与热门文章">
        <div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; margin-bottom: 16px;">
          <div>
            <h2 style="margin: 0; font-size: 24px; color: var(--cc-navy);">九、最新深度评测与三级集群代表文章（Answer-First 专栏）</h2>
            <p style="margin: 4px 0 0; font-size: 14px; color: var(--cc-text-muted);">
              全站 56 个三级内容集群均已配备真实完整的深度代表作，以下为近期高频检索专栏
            </p>
          </div>
        </div>

        <div class="cc-grid-3">
          <article v-for="art in latestArticles" :key="art.id" class="cc-card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px;">
                <a :href="art.upstreamTopicPath" style="font-size: 11.5px; font-weight: 700; color: var(--cc-accent); background: var(--cc-accent-soft); padding: 2px 8px; border-radius: 4px;">
                  {{ art.topicTitle }}
                </a>
                <span style="font-size: 11px; color: var(--cc-text-muted); font-family: var(--cc-font-mono);">{{ art.clusterId }}</span>
              </div>
              <h3 style="margin: 0 0 8px; font-size: 16px; line-height: 1.45;">
                <a :href="art.url" style="color: var(--cc-navy);">{{ art.title }}</a>
              </h3>
              <p style="font-size: 12.5px; color: var(--cc-text-secondary); margin: 0 0 12px;">
                核心关键词：<code>{{ art.primaryKeyword }}</code> | 面向：{{ art.targetUser }}
              </p>
            </div>
            <a :href="art.url" style="font-size: 13px; font-weight: 600; color: var(--cc-accent);">阅读全文与对比数据 →</a>
          </article>
        </div>
      </section>

      <!-- 15. 常见问题解答 (FAQ) -->
      <section style="margin-bottom: 48px;" aria-label="常见问题解答">
        <div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; margin-bottom: 16px;">
          <h2 style="margin: 0; font-size: 24px; color: var(--cc-navy);">十、新手与选购高频问题解答（GEO / AEO 核心问答）</h2>
          <a href="/resources/faq/" style="font-size: 14px; font-weight: 600;">查看全部 189 问百科 →</a>
        </div>
        <div class="cc-faq-list">
          <details class="cc-faq-item" open>
            <summary>Q1：2026 年买机场应该优先看价格还是看线路架构？</summary>
            <p>
              <strong>直接结论：</strong>主力自用优先看<strong>线路架构（IEPL/IPLC 专线）与晚高峰节点在线率</strong>，备用或轻度查资料再看单价。直连或普通公网中转机场在每天 20:00–23:30 国际出口拥塞时极易断流；而如<a href="/brands/guangsuyun/">光速云</a>年付轻量版折合仅 ¥8.25/月（¥99/年，每月69GB）即可用上 IEPL 专线，兼顾了低预算与专线稳定性。
            </p>
          </details>
          <details class="cc-faq-item" open>
            <summary>Q2：为什么有些机场买完后找不到 Clash 订阅链接？</summary>
            <p>
              <strong>直接结论：</strong>因为本站核实的 41 家独立品牌中，有 <strong>8 家品牌（飞猫云、无忧云、Firefly、灵猫云、SOGO云、闪跃云、全球云、隐形人）仅支持自研专属客户端</strong>，不提供通用 Clash/Shadowrocket 订阅链接。如果您习惯使用 Clash Verge Rev 或软路由 OpenClash，请务必在<a href="/clash/recommend/">「Clash 推荐」</a>或品牌库中勾选「支持 Clash 订阅」过滤。
            </p>
          </details>
          <details class="cc-faq-item" open>
            <summary>Q3：导入机场订阅后节点全部显示空白或报错 unsupported proxy type 怎么办？</summary>
            <p>
              <strong>直接结论：</strong>这是由于您的客户端仍在使用已停更的原版旧 Clash 内核，无法解析 <strong>VLESS</strong> 或 <strong>Hysteria 2</strong> 协议。请前往<a href="/clash/verge-download/">「Clash Verge 下载」</a>升级至内置 <strong>Mihomo (Clash Meta)</strong> 内核的 Clash Verge Rev 或 FlClash 即可瞬间恢复正常。
            </p>
          </details>
          <details class="cc-faq-item" open>
            <summary>Q4：光速云资料里的 59GB/月 和 69GB/月 哪个是准确的？</summary>
            <p>
              <strong>直接结论：</strong>以官方当前套餐表的 <strong>¥99/年、每月 69GB 流量（折合 ¥8.25/月）</strong> 为准。“年付约8元/月 59GB”为早期历史简介文案遗留，我们在<a href="/brands/guangsuyun/">光速云深度评测页</a>与<a href="/resources/risk-intel/">数据审计看板</a>中均已做透明公开说明。
            </p>
          </details>
        </div>
      </section>

      <!-- 16, 17, 18, 19: 评测方法说明 + 更新时间说明 + 推广披露说明 + 合规声明 -->
      <section aria-label="评测方法论与商业合规声明">
        <div class="cc-card" style="background: var(--cc-bg-soft); border: 1px solid var(--cc-border-strong);">
          <h2 style="margin: 0 0 16px; font-size: 20px; color: var(--cc-navy);">
            十一、评测方法论、数据核实时间、联盟推广披露与合规声明
          </h2>
          <div class="cc-grid-2" style="gap: 16px;">
            <div>
              <h3 style="margin: 0 0 6px; font-size: 15px; color: var(--cc-navy);">🔬 16. 评测方法与证据分级说明</h3>
              <p style="margin: 0 0 12px; font-size: 13px; color: var(--cc-text-secondary);">
                本站采用双批次实测证据与官方台账交叉核验机制：（1）<strong>批次一（2026-08-11 晚高峰实测包）</strong>：基于 Miaoko 4线程自动化脚本对 17 家机场进行真实节点连通率、HTTP 延迟与峰值吞吐截图存证；（2）<strong>批次二（2026-10-19 分区测速与套餐核实）</strong>：核对 28 家主力在营品牌的套餐价格、重置规则、优惠码与客户端支持情况。对于第 29–42 项（去重后 13 家）历史补充品牌，严格标记为「历史资料 / 待独立测试」，绝不伪造测速曲线。
              </p>

              <h3 style="margin: 0 0 6px; font-size: 15px; color: var(--cc-navy);">🕒 17. 数据更新时间与核验台账</h3>
              <p style="margin: 0; font-size: 13px; color: var(--cc-text-secondary);">
                • 品牌套餐与优惠码最近全量核实日期：<code>2026-10-19</code>（站点构建同步时间：<code>2026-11-16</code>）<br />
                • 17 家晚高峰测速原图生成日期：<code>2026-08-11 19:33 – 23:25 CST</code><br />
                • 光速云三网测速与流媒体解锁截图归档日期：<code>2026-06-15</code>
              </p>
            </div>

            <div>
              <h3 style="margin: 0 0 6px; font-size: 15px; color: var(--cc-navy);">💼 18. 推广与联盟链接披露说明（Affiliate Disclosure）</h3>
              <p style="margin: 0 0 12px; font-size: 13px; color: var(--cc-text-secondary);">
                为维持站点服务器与持续测速投入，本站部分品牌注册按钮包含推广合作链接（Affiliate Links，HTML 均严格标记 <code>rel="nofollow sponsored noopener"</code>）。当您通过这些链接注册购买时，本站可能会获得一定比例的引荐佣金，但<strong>不会增加您的任何购买成本</strong>（配合本站核实优惠码还可享受折扣）。光速云为本站第一商业主推品牌，但所有品牌的客观价格、协议限制与实测峰值均如实呈现。
              </p>

              <h3 style="margin: 0 0 6px; font-size: 15px; color: var(--cc-navy);">⚖️ 19. 法律法规与合规使用声明</h3>
              <p style="margin: 0; font-size: 13px; color: var(--cc-text-secondary);">
                本站仅提供网络传输协议技术科普、跨国企业办公网络加速方案对比及开源代理客户端配置教程，不直接提供、销售或运营任何代理节点服务。请全体读者严格遵守所在国家与地区的法律法规，仅将相关网络工具用于合法的跨境电商、学术科研、软件开发与海外资讯查阅用途。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
