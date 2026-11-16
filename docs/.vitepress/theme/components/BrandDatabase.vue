<script setup lang="ts">
import { computed, ref } from 'vue';
import { BRANDS } from '../../data/brands';

const searchQuery = ref('');
const priceFilter = ref('all');
const lineFilter = ref('all');
const protocolFilter = ref('all');
const clientFilter = ref('all');
const evidenceFilter = ref('all');
const sortBy = ref('rank');

const filteredBrands = computed(() => {
  let list = [...BRANDS];

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase();
    list = list.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.enName.toLowerCase().includes(q) ||
        b.aliases.some((a) => a.toLowerCase().includes(q)) ||
        b.lineType.toLowerCase().includes(q) ||
        b.protocols.some((p) => p.toLowerCase().includes(q)) ||
        b.regions.some((r) => r.toLowerCase().includes(q))
    );
  }

  if (priceFilter.value !== 'all') {
    list = list.filter((b) => {
      const effectiveMonthly = b.minAnnualizedMonthlyPrice ?? b.minMonthlyPrice;
      if (priceFilter.value === 'under10') return effectiveMonthly !== null && effectiveMonthly <= 10;
      if (priceFilter.value === '10to20') return effectiveMonthly !== null && effectiveMonthly > 10 && effectiveMonthly <= 20;
      if (priceFilter.value === 'over20') return effectiveMonthly !== null && effectiveMonthly > 20;
      if (priceFilter.value === 'onetime') return b.minOneTimePrice !== null;
      return true;
    });
  }

  if (lineFilter.value !== 'all') {
    list = list.filter((b) => b.lineCategory === lineFilter.value);
  }

  if (protocolFilter.value !== 'all') {
    list = list.filter((b) =>
      b.protocols.some((p) => p.toLowerCase().includes(protocolFilter.value.toLowerCase()))
    );
  }

  if (clientFilter.value === 'clash_supported') {
    list = list.filter((b) => b.clientSupport === 'both' || b.clientSupport === 'subscription');
  } else if (clientFilter.value === 'proprietary_only') {
    list = list.filter((b) => b.clientSupport === 'proprietary_only');
  }

  if (evidenceFilter.value === 'measured_only') {
    list = list.filter((b) => b.speedtest20260811 !== null || b.speedtest20261019 !== null);
  } else if (evidenceFilter.value === 'part1_only') {
    list = list.filter((b) => b.rank <= 28);
  }

  if (sortBy.value === 'price_asc') {
    list.sort((a, b) => {
      const pa = a.minAnnualizedMonthlyPrice ?? a.minMonthlyPrice ?? 999;
      const pb = b.minAnnualizedMonthlyPrice ?? b.minMonthlyPrice ?? 999;
      return pa - pb;
    });
  } else if (sortBy.value === 'regions_desc') {
    list.sort((a, b) => b.regionCount - a.regionCount);
  } else {
    list.sort((a, b) => a.rank - b.rank);
  }

  return list;
});

function resetFilters() {
  searchQuery.value = '';
  priceFilter.value = 'all';
  lineFilter.value = 'all';
  protocolFilter.value = 'all';
  clientFilter.value = 'all';
  evidenceFilter.value = 'all';
  sortBy.value = 'rank';
}
</script>

<template>
  <section aria-label="41家独立机场品牌交互筛选数据库">
    <!-- Filter Control Panel -->
    <div class="cc-card" style="background: var(--cc-bg-soft); margin-bottom: 24px;">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 14px;">
        <div>
          <strong style="font-size: 16px; color: var(--cc-navy);">🔍 多维数据库检索与过滤中心（共 41 家去重独立实体）</strong>
          <span style="margin-left: 10px; font-size: 12.5px; color: var(--cc-text-muted);">
            当前匹配：<strong style="color: var(--cc-accent);">{{ filteredBrands.length }}</strong> / 41 家品牌
          </span>
        </div>
        <button
          type="button"
          @click="resetFilters"
          style="background: #fff; border: 1px solid var(--cc-border-strong); padding: 5px 12px; border-radius: 6px; font-size: 12.5px; cursor: pointer; color: var(--cc-text-secondary);"
        >
          重置全部筛选
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)); gap: 12px;">
        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: var(--cc-text-secondary); margin-bottom: 4px;">搜索名称 / 协议 / 地区</label>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="例如：光速云 / VLESS / 台湾..."
            style="width: 100%; padding: 8px 10px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 13px;"
          />
        </div>

        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: var(--cc-text-secondary); margin-bottom: 4px;">预算区间（含年付折算）</label>
          <select v-model="priceFilter" style="width: 100%; padding: 8px 10px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 13px; background: #fff;">
            <option value="all">全部价格档位</option>
            <option value="under10">≤ ¥10/月（极致平价/年付折算）</option>
            <option value="10to20">¥10 – ¥20/月（主力性价比档）</option>
            <option value="over20">> ¥20/月（旗舰专线档）</option>
            <option value="onetime">提供按量不限时流量包</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: var(--cc-text-secondary); margin-bottom: 4px;">线路架构类型</label>
          <select v-model="lineFilter" style="width: 100%; padding: 8px 10px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 13px; background: #fff;">
            <option value="all">全部线路类型</option>
            <option value="IEPL">IEPL 内网专线</option>
            <option value="IPLC">IPLC 国际专线</option>
            <option value="BGP_RELAY">BGP 专线中转 / 混合</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: var(--cc-text-secondary); margin-bottom: 4px;">节点传输协议</label>
          <select v-model="protocolFilter" style="width: 100%; padding: 8px 10px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 13px; background: #fff;">
            <option value="all">全部协议</option>
            <option value="VLESS">VLESS (Mihomo/Xray)</option>
            <option value="Hysteria">Hysteria 2</option>
            <option value="Trojan">Trojan</option>
            <option value="Shadowsocks">Shadowsocks (SS)</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: var(--cc-text-secondary); margin-bottom: 4px;">客户端订阅兼容性</label>
          <select v-model="clientFilter" style="width: 100%; padding: 8px 10px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 13px; background: #fff;">
            <option value="all">全部客户端类型</option>
            <option value="clash_supported">✓ 支持 Clash / 小火箭通用订阅 (33家)</option>
            <option value="proprietary_only">⚠ 仅限官方专属客户端 (8家)</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 12px; font-weight: 600; color: var(--cc-text-secondary); margin-bottom: 4px;">实测证据 & 排序</label>
          <div style="display: flex; gap: 6px;">
            <select v-model="evidenceFilter" style="flex: 1; padding: 8px 6px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 12.5px; background: #fff;">
              <option value="all">全部41家</option>
              <option value="measured_only">含实测记录</option>
              <option value="part1_only">主力在营(28家)</option>
            </select>
            <select v-model="sortBy" style="flex: 1; padding: 8px 6px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 12.5px; background: #fff;">
              <option value="rank">综合排序</option>
              <option value="price_asc">月均价由低到高</option>
              <option value="regions_desc">地区数由多到少</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Zero Result Notice -->
    <div v-if="filteredBrands.length === 0" class="cc-card" style="text-align: center; padding: 36px;">
      <div style="font-size: 17px; font-weight: 700; color: var(--cc-navy); margin-bottom: 8px;">
        未找到同时满足当前筛选组合的品牌
      </div>
      <p style="font-size: 14px; color: var(--cc-text-muted); margin-bottom: 16px;">
        建议放宽协议或价格区间筛选，或直接点击下方按钮恢复显示全部 41 家独立机场品牌。
      </p>
      <button type="button" @click="resetFilters" class="cc-btn cc-btn-primary">恢复显示全部 41 家品牌</button>
    </div>

    <!-- Brand Cards Grid -->
    <div class="cc-grid-3">
      <article
        v-for="b in filteredBrands"
        :key="b.slug"
        class="cc-card"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: b.isPrimaryFeatured ? '4px solid #2563eb' : '1px solid var(--cc-border)',
          background: b.isPrimaryFeatured ? 'linear-gradient(180deg, #eff6ff 0%, #ffffff 32%)' : '#ffffff'
        }"
      >
        <div>
          <!-- Card Header -->
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <img :src="b.logo" :alt="b.name" width="44" height="44" loading="lazy" style="width: 44px; height: 44px; border-radius: 10px; object-fit: contain; border: 1px solid var(--cc-border); background: #fff; padding: 3px;" />
              <div>
                <a :href="`/brands/${b.slug}/`" style="font-size: 17px; font-weight: 800; color: var(--cc-navy);">
                  {{ b.name }}
                </a>
                <div style="font-size: 11.5px; color: var(--cc-text-muted);">{{ b.enName }} · {{ b.foundedYear }}</div>
              </div>
            </div>
            <span v-if="b.isPrimaryFeatured" style="background: #1d4ed8; color: #fff; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 999px;">
              ★ 首推主力
            </span>
            <span v-else-if="b.speedtest20260811" class="cc-badge cc-badge-measured" style="font-size: 11px;">
              ✓ 8.11实测
            </span>
            <span v-else-if="b.dataStatus === 'historical'" class="cc-badge cc-badge-historical" style="font-size: 11px;">
              历史归档
            </span>
          </div>

          <!-- Pricing & Spec Pills -->
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px;">
            <span style="background: var(--cc-accent-soft); color: var(--cc-accent); font-weight: 700; font-size: 12px; padding: 2px 8px; border-radius: 4px;">
              <template v-if="b.minMonthlyPrice">月付 ¥{{ b.minMonthlyPrice }} 起</template>
              <template v-else-if="b.minAnnualizedMonthlyPrice">年付折合 ¥{{ b.minAnnualizedMonthlyPrice }}/月</template>
              <template v-else>价格待核实</template>
            </span>
            <span v-if="b.minAnnualizedMonthlyPrice && b.minMonthlyPrice && b.minAnnualizedMonthlyPrice < b.minMonthlyPrice" style="background: var(--cc-success-bg); color: var(--cc-success); font-weight: 600; font-size: 12px; padding: 2px 8px; border-radius: 4px;">
              年付折合 ¥{{ b.minAnnualizedMonthlyPrice }}/月
            </span>
            <span style="background: var(--cc-bg-muted); color: var(--cc-text-secondary); font-size: 12px; padding: 2px 8px; border-radius: 4px;">
              {{ b.lineCategory }}
            </span>
            <span style="background: var(--cc-bg-muted); color: var(--cc-navy); font-family: var(--cc-font-mono); font-size: 11.5px; padding: 2px 8px; border-radius: 4px;">
              {{ b.protocols.join('/') }}
            </span>
          </div>

          <p style="font-size: 13px; color: var(--cc-text-secondary); margin: 0 0 12px; line-height: 1.55;">
            {{ b.summary }}
          </p>

          <div style="font-size: 12px; color: var(--cc-text-muted); border-top: 1px dashed var(--cc-border); padding-top: 10px; margin-bottom: 14px; display: flex; flex-direction: column; gap: 4px;">
            <div><strong>客户端支持：</strong>{{ b.clientSupportLabel }}</div>
            <div><strong>覆盖地区：</strong>{{ b.regions.slice(0, 6).join(' / ') }} (共{{ b.regionCount }}区)</div>
            <div v-if="b.couponCode"><strong>核实优惠码：</strong><code>{{ b.couponCode }}</code></div>
          </div>
        </div>

        <!-- Card Actions -->
        <div style="display: flex; gap: 8px; margin-top: auto;">
          <a :href="`/brands/${b.slug}/`" class="cc-btn cc-btn-outline" style="flex: 1; padding: 8px 10px; font-size: 13px;">
            深度评测档案
          </a>
          <a
            v-if="b.hasAffiliateUrl && b.affiliateUrl"
            :href="b.affiliateUrl"
            target="_blank"
            rel="nofollow sponsored noopener"
            class="cc-btn cc-btn-primary"
            style="flex: 1; padding: 8px 10px; font-size: 13px;"
          >
            官方注册 ↗
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
