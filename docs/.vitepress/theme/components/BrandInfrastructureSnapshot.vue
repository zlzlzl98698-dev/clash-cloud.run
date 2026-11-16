<script setup lang="ts">
import { computed, ref } from 'vue';
import { BRANDS } from '../../data/brands';

const props = defineProps<{
  brandSlug?: string;
}>();

const copied = ref(false);

const brand = computed(() => {
  if (!props.brandSlug) return BRANDS[0];
  return BRANDS.find((b) => b.slug === props.brandSlug) || BRANDS[0];
});

function copyCoupon(code: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
}

function badgeClass(status: string) {
  if (status === 'measured') return 'cc-badge-measured';
  if (status === 'vendor') return 'cc-badge-vendor';
  if (status === 'historical') return 'cc-badge-historical';
  return 'cc-badge-unverified';
}

function badgeLabel(status: string) {
  if (status === 'measured') return '✓ 实测存证 + 规格已核实';
  if (status === 'vendor') return '○ 官方公开规格已核实';
  if (status === 'historical') return '△ 历史资料补充归档';
  return '○ 待进一步独立核实';
}
</script>

<template>
  <section v-if="brand" class="cc-card" style="border-top: 4px solid var(--cc-accent); margin: 20px 0 28px; padding: 24px;" :aria-label="`${brand.name} 品牌核心参数与套餐快照`">
    <!-- Top Identity Row -->
    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; flex-wrap: wrap; padding-bottom: 18px; border-bottom: 1px solid var(--cc-border);">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img
          :src="brand.logo"
          :alt="`${brand.name} Logo`"
          width="64"
          height="64"
          loading="eager"
          style="width: 64px; height: 64px; border-radius: 14px; object-fit: contain; background: var(--cc-bg-soft); border: 1px solid var(--cc-border); padding: 4px;"
        />
        <div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span style="font-size: 22px; font-weight: 800; color: var(--cc-navy);">{{ brand.name }}</span>
            <span style="font-size: 13px; color: var(--cc-text-muted); font-family: var(--cc-font-mono);">({{ brand.enName }})</span>
            <span v-if="brand.isPrimaryFeatured" style="background: #1d4ed8; color: #fff; font-size: 11.5px; font-weight: 700; padding: 2px 8px; border-radius: 999px;">
              ★ 本站主力合作首推品牌
            </span>
            <span class="cc-badge" :class="badgeClass(brand.dataStatus)">
              {{ badgeLabel(brand.dataStatus) }}
            </span>
          </div>
          <p style="margin: 6px 0 0; font-size: 13.5px; color: var(--cc-text-secondary);">
            {{ brand.summary }}
          </p>
          <div v-if="brand.aliases && brand.aliases.length" style="font-size: 12px; color: var(--cc-text-muted); margin-top: 4px;">
            常见检索名/别名：{{ brand.aliases.join(' / ') }} | 核实日期：{{ brand.verifiedDate }}
          </div>
        </div>
      </div>

      <!-- CTA Action Box -->
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px; min-width: 220px;">
        <template v-if="brand.hasAffiliateUrl && brand.affiliateUrl">
          <a
            :href="brand.affiliateUrl"
            target="_blank"
            rel="nofollow sponsored noopener"
            class="cc-btn cc-btn-primary"
            style="width: 100%; font-size: 14.5px; padding: 11px 20px;"
          >
            前往 {{ brand.name }} 官方注册入口 ↗
          </a>
          <div style="font-size: 11px; color: var(--cc-text-muted); text-align: right;">
            商业合规披露：含推广合作链接 (sponsored)
          </div>
        </template>
        <template v-else>
          <div style="background: var(--cc-warning-bg); border: 1px solid var(--cc-warning-border); color: var(--cc-warning); padding: 8px 12px; border-radius: 6px; font-size: 12.5px; font-weight: 600;">
            ⚠️ 历史资料未提供独立推广入口
          </div>
          <a href="/brands/guangsuyun/" class="cc-btn cc-btn-outline" style="width: 100%; font-size: 12.5px; padding: 7px 12px;">
            查看主力首推替代：光速云 →
          </a>
        </template>
      </div>
    </div>

    <!-- Coupon Banner if available -->
    <div
      v-if="brand.couponCode"
      style="margin-top: 16px; padding: 12px 16px; background: var(--cc-accent-soft); border: 1px dashed var(--cc-accent); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;"
    >
      <div style="font-size: 13.5px; color: var(--cc-navy);">
        🎁 <strong>专属核实优惠码：</strong>
        <code style="font-size: 14px; font-weight: 800; color: var(--cc-accent); background: #fff; padding: 2px 8px; border-radius: 4px; border: 1px solid var(--cc-accent-border);">{{ brand.couponCode }}</code>
        <span style="margin-left: 8px; color: var(--cc-text-secondary);">{{ brand.couponNote }}</span>
      </div>
      <button
        type="button"
        @click="copyCoupon(brand.couponCode!)"
        style="background: var(--cc-navy); color: #fff; border: none; border-radius: 6px; padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer;"
      >
        {{ copied ? '✓ 已复制优惠码' : '复制优惠码' }}
      </button>
    </div>

    <!-- Key Infrastructure Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(185px, 1fr)); gap: 12px; margin-top: 18px;">
      <div style="background: var(--cc-bg-soft); padding: 12px; border-radius: 8px; border: 1px solid var(--cc-border);">
        <div style="font-size: 11.5px; color: var(--cc-text-muted);">最低月付 / 年付折算</div>
        <div style="font-size: 16px; font-weight: 800; color: var(--cc-accent); margin-top: 2px;">
          <template v-if="brand.minMonthlyPrice">¥{{ brand.minMonthlyPrice }}/月起</template>
          <template v-else-if="brand.minAnnualizedMonthlyPrice">年付折算 ¥{{ brand.minAnnualizedMonthlyPrice }}/月</template>
          <template v-else>待核实</template>
          <span v-if="brand.minAnnualizedMonthlyPrice && brand.minMonthlyPrice && brand.minAnnualizedMonthlyPrice < brand.minMonthlyPrice" style="display: block; font-size: 11.5px; color: var(--cc-success); font-weight: 600;">
            (年付折算约 ¥{{ brand.minAnnualizedMonthlyPrice }}/月)
          </span>
        </div>
      </div>

      <div style="background: var(--cc-bg-soft); padding: 12px; border-radius: 8px; border: 1px solid var(--cc-border);">
        <div style="font-size: 11.5px; color: var(--cc-text-muted);">线路架构类型</div>
        <div style="font-size: 13.5px; font-weight: 700; color: var(--cc-navy); margin-top: 3px;">{{ brand.lineType }}</div>
      </div>

      <div style="background: var(--cc-bg-soft); padding: 12px; border-radius: 8px; border: 1px solid var(--cc-border);">
        <div style="font-size: 11.5px; color: var(--cc-text-muted);">传输协议支持</div>
        <div style="font-size: 13.5px; font-weight: 700; color: var(--cc-navy); margin-top: 3px; font-family: var(--cc-font-mono);">{{ brand.protocols.join(' / ') }}</div>
      </div>

      <div style="background: var(--cc-bg-soft); padding: 12px; border-radius: 8px; border: 1px solid var(--cc-border);">
        <div style="font-size: 11.5px; color: var(--cc-text-muted);">客户端与订阅兼容性</div>
        <div style="font-size: 13px; font-weight: 700; margin-top: 3px;" :style="{ color: brand.clientSupport === 'proprietary_only' ? '#d97706' : '#059669' }">
          {{ brand.clientSupportLabel }}
        </div>
      </div>

      <div style="background: var(--cc-bg-soft); padding: 12px; border-radius: 8px; border: 1px solid var(--cc-border);">
        <div style="font-size: 11.5px; color: var(--cc-text-muted);">运营年份 & 支付方式</div>
        <div style="font-size: 13px; font-weight: 700; color: var(--cc-navy); margin-top: 3px;">
          {{ brand.foundedYear }} | {{ brand.paymentMethods.join('/') }}
        </div>
      </div>

      <div style="background: var(--cc-bg-soft); padding: 12px; border-radius: 8px; border: 1px solid var(--cc-border);">
        <div style="font-size: 11.5px; color: var(--cc-text-muted);">同源站群 / 实体归属</div>
        <div style="font-size: 12.5px; font-weight: 600; color: var(--cc-text-secondary); margin-top: 3px;">
          {{ brand.homologousGroup }}
        </div>
      </div>
    </div>

    <!-- Historical Price Clarification Alert if present -->
    <div
      v-if="brand.historicalPriceNote"
      style="margin-top: 14px; padding: 11px 14px; background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 4px; font-size: 13px; color: #92400e;"
    >
      <strong>📌 价格与口径核实说明：</strong>{{ brand.historicalPriceNote }}
    </div>

    <!-- Complete Plans Table -->
    <div style="margin-top: 20px;">
      <div style="font-size: 15px; font-weight: 700; color: var(--cc-navy); margin-bottom: 10px;">
        💳 {{ brand.name }} 官方核实套餐与计费明细表（调用统一品牌数据源）
      </div>
      <div class="cc-cmp-wrapper" style="margin: 0;">
        <table class="cc-cmp-table" style="min-width: 760px;">
          <thead>
            <tr>
              <th>套餐名称</th>
              <th>计费周期</th>
              <th>官方标价</th>
              <th>折合月均</th>
              <th>流量额度</th>
              <th style="min-width: 240px;">重置与限制说明</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in brand.plans" :key="p.name + p.billing">
              <td style="font-weight: 700; color: var(--cc-navy); white-space: nowrap;">{{ p.name }}</td>
              <td style="white-space: nowrap;">{{ p.billing }}</td>
              <td style="font-family: var(--cc-font-mono); font-weight: 700; color: var(--cc-accent); white-space: nowrap;">
                {{ p.price > 0 ? `¥${p.price}` : '历史资料待核实' }}
              </td>
              <td style="font-family: var(--cc-font-mono); white-space: nowrap; color: var(--cc-success); font-weight: 600;">
                {{ p.monthlyEquivalent ? `约 ¥${p.monthlyEquivalent}/月` : '一次性/不限时' }}
              </td>
              <td style="font-weight: 700; white-space: nowrap;">{{ p.traffic }}</td>
              <td style="font-size: 13px; color: var(--cc-text-secondary); min-width: 240px; line-height: 1.5;">
                {{ p.resetRule }}（{{ p.note }}）
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
