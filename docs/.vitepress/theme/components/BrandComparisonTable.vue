<script setup lang="ts">
import { computed } from 'vue';
import { BRANDS, type BrandRecord } from '../../data/brands';

const props = defineProps<{
  slugs?: string[];
  limit?: number;
}>();

const rows = computed<BrandRecord[]>(() => {
  if (props.slugs && props.slugs.length > 0) {
    const list = props.slugs
      .map((s) => BRANDS.find((b) => b.slug === s))
      .filter(Boolean) as BrandRecord[];
    return props.limit ? list.slice(0, props.limit) : list;
  }
  return BRANDS.slice(0, props.limit || 12);
});

function extractPeakMetric(b: BrandRecord): string {
  if (b.speedtest20260811?.summary) {
    const m = b.speedtest20260811.summary.match(/(\d+(?:\.\d+)?\s*MB\/s)/i);
    if (m) return `⚡ 8.11实测峰值 ${m[1]}`;
    return '✓ 2026-08-11 实测存证';
  }
  if (b.speedtest20261019?.nodes?.length) {
    const maxMbps = Math.max(...b.speedtest20261019.nodes.map((n) => n.downloadMbps));
    return `✓ 分区峰值 ${maxMbps} Mbps`;
  }
  return '○ 官方/历史规格归档';
}

function conciseSummary(b: BrandRecord): string {
  if (b.speedtest20260811?.summary) {
    return b.speedtest20260811.summary;
  }
  if (b.speedtest20261019?.nodes?.length) {
    const regions = b.speedtest20261019.nodes.map((n) => `${n.region}(${n.latency}ms)`).join(' / ');
    return `测试节点：${regions}`;
  }
  return `${b.lineType}，覆盖 ${b.regions.slice(0, 4).join('/')} 等 ${b.regionCount} 地区`;
}
</script>

<template>
  <div class="cc-cmp-wrapper">
    <table class="cc-cmp-table">
      <thead>
        <tr>
          <th style="min-width: 165px;">品牌名称与规模</th>
          <th style="min-width: 155px;">起步价格与周期</th>
          <th style="min-width: 150px;">线路架构与协议</th>
          <th style="min-width: 145px;">客户端订阅兼容</th>
          <th style="min-width: 215px;">2026 实测表现摘要</th>
          <th style="min-width: 145px; text-align: right;">优惠码 &amp; 入口</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in rows" :key="b.slug" :class="{ 'is-featured-row': b.isPrimaryFeatured }">
          <!-- Col 1: Brand Identity -->
          <td class="cc-cmp-cell-brand">
            <div style="display: flex; align-items: center; gap: 10px;">
              <img
                :src="b.logo"
                :alt="b.name"
                width="34"
                height="34"
                loading="lazy"
                style="width: 34px; height: 34px; border-radius: 8px; object-fit: contain; border: 1px solid var(--cc-border); background: #fff; padding: 2px; flex-shrink: 0;"
              />
              <div>
                <div style="display: flex; align-items: center; gap: 5px; white-space: nowrap;">
                  <a :href="`/brands/${b.slug}/`" style="font-weight: 800; font-size: 14.5px; color: var(--cc-navy);">
                    {{ b.name }}
                  </a>
                  <span
                    v-if="b.isPrimaryFeatured"
                    style="background: #2563eb; color: #fff; font-size: 10.5px; font-weight: 700; padding: 1px 6px; border-radius: 4px; line-height: 1.4;"
                  >
                    ★首推
                  </span>
                </div>
                <div style="font-size: 11.5px; color: var(--cc-text-muted); white-space: nowrap; margin-top: 2px;">
                  {{ b.foundedYear }} · {{ b.regionCount }}地区
                </div>
              </div>
            </div>
          </td>

          <!-- Col 2: Pricing -->
          <td style="white-space: nowrap;">
            <div style="font-family: var(--cc-font-mono); font-weight: 800; font-size: 14px; color: var(--cc-accent);">
              <template v-if="b.minMonthlyPrice">月付 ¥{{ b.minMonthlyPrice }}/月</template>
              <template v-else-if="b.minAnnualizedMonthlyPrice">年付折合 ¥{{ b.minAnnualizedMonthlyPrice }}/月</template>
              <template v-else>价格待核实</template>
            </div>
            <div
              v-if="b.minAnnualizedMonthlyPrice && b.minMonthlyPrice && b.minAnnualizedMonthlyPrice < b.minMonthlyPrice"
              style="font-size: 11.5px; color: var(--cc-success); font-weight: 600; margin-top: 2px;"
            >
              年付折合 ¥{{ b.minAnnualizedMonthlyPrice }}/月
            </div>
            <div v-if="b.minOneTimePrice" style="font-size: 11px; color: var(--cc-text-muted); margin-top: 1px;">
              不限时包 ¥{{ b.minOneTimePrice }}起
            </div>
          </td>

          <!-- Col 3: Line & Protocols -->
          <td>
            <div style="margin-bottom: 4px; white-space: nowrap;">
              <span
                style="background: var(--cc-bg-muted); color: var(--cc-navy); font-size: 11.5px; font-weight: 700; padding: 2px 7px; border-radius: 4px;"
              >
                {{ b.lineCategory }} 专线/中转
              </span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span
                v-for="p in b.protocols"
                :key="p"
                style="font-family: var(--cc-font-mono); font-size: 11px; background: var(--cc-accent-soft); color: var(--cc-blue-dark); padding: 1px 6px; border-radius: 4px; white-space: nowrap;"
              >
                {{ p }}
              </span>
            </div>
          </td>

          <!-- Col 4: Client Support -->
          <td style="white-space: nowrap;">
            <div v-if="b.clientSupport === 'proprietary_only'">
              <span
                style="display: inline-block; background: var(--cc-warning-bg); color: var(--cc-warning); border: 1px solid var(--cc-warning-border); font-size: 11.5px; font-weight: 700; padding: 2px 8px; border-radius: 4px;"
              >
                ⚠️ 仅专属客户端
              </span>
              <div style="font-size: 11px; color: var(--cc-text-muted); margin-top: 2px;">无 Clash 订阅链接</div>
            </div>
            <div v-else-if="b.clientSupport === 'both'">
              <span
                style="display: inline-block; background: var(--cc-success-bg); color: var(--cc-success); border: 1px solid var(--cc-success-border); font-size: 11.5px; font-weight: 700; padding: 2px 8px; border-radius: 4px;"
              >
                ✓ 通用订阅 + 客户端
              </span>
              <div style="font-size: 11px; color: var(--cc-text-muted); margin-top: 2px;">支持 Clash / 小火箭</div>
            </div>
            <div v-else>
              <span
                style="display: inline-block; background: var(--cc-success-bg); color: var(--cc-success); border: 1px solid var(--cc-success-border); font-size: 11.5px; font-weight: 700; padding: 2px 8px; border-radius: 4px;"
              >
                ✓ 支持通用订阅
              </span>
              <div style="font-size: 11px; color: var(--cc-text-muted); margin-top: 2px;">支持 Clash / 小火箭</div>
            </div>
          </td>

          <!-- Col 5: Speedtest Summary -->
          <td style="min-width: 215px; max-width: 270px;">
            <div
              style="font-size: 12px; font-weight: 700; margin-bottom: 3px; white-space: nowrap;"
              :style="{ color: b.speedtest20260811 ? 'var(--cc-success)' : 'var(--cc-text-secondary)' }"
            >
              {{ extractPeakMetric(b) }}
            </div>
            <div
              class="cc-cmp-summary-clamp"
              :title="conciseSummary(b)"
              style="font-size: 12px; color: var(--cc-text-secondary); line-height: 1.45;"
            >
              {{ conciseSummary(b) }}
            </div>
          </td>

          <!-- Col 6: Coupon & Actions -->
          <td style="white-space: nowrap; text-align: right;">
            <div style="font-size: 11.5px; color: var(--cc-text-muted); margin-bottom: 5px;">
              优惠码:
              <code style="font-size: 11.5px; font-weight: 700; color: var(--cc-accent);">{{ b.couponCode || '无' }}</code>
            </div>
            <div style="display: inline-flex; gap: 6px; justify-content: flex-end;">
              <a
                :href="`/brands/${b.slug}/`"
                style="padding: 4px 9px; border: 1px solid var(--cc-border-strong); border-radius: 5px; font-size: 12px; font-weight: 600; color: var(--cc-navy); background: #fff;"
              >
                评测
              </a>
              <a
                v-if="b.hasAffiliateUrl && b.affiliateUrl"
                :href="b.affiliateUrl"
                target="_blank"
                rel="nofollow sponsored noopener"
                style="padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: 700; color: #fff !important; background: var(--cc-accent);"
              >
                官网 ↗
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
