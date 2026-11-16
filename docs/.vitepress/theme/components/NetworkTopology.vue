<script setup lang="ts">
import { computed } from 'vue';
import { BRANDS } from '../../data/brands';

const props = defineProps<{
  brandSlug?: string;
}>();

const brand = computed(() => {
  if (!props.brandSlug) return BRANDS[0];
  return BRANDS.find((b) => b.slug === props.brandSlug) || BRANDS[0];
});
</script>

<template>
  <section v-if="brand" class="obs-panel" :aria-label="`${brand.name} 线路传输拓扑架构示意图`">
    <div class="obs-header">
      <div class="obs-title-group">
        <h3>
          <span>🌐 {{ brand.name }} 跨国传输链路与客户端分流拓扑</span>
        </h3>
        <p class="obs-subtitle">
          架构类型：{{ brand.lineType }} | 协议栈：{{ brand.protocols.join(' / ') }} | 客户端模式：{{ brand.clientSupportLabel }}
        </p>
      </div>
      <span class="cc-badge cc-badge-schematic">
        ◈ 架构示意图（非实时链路监控）
      </span>
    </div>

    <!-- 4-Stage Visual Topology Flow -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; align-items: stretch;">
      <!-- Stage 1 -->
      <div style="background: #111827; border: 1px solid #1e293b; border-top: 3px solid #38bdf8; border-radius: 10px; padding: 15px;">
        <div style="font-size: 11px; color: #38bdf8; font-family: var(--cc-font-mono); font-weight: 700; margin-bottom: 6px;">
          STAGE 01 / 终端接入与规则分流
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">
          本地客户端层
        </div>
        <p style="font-size: 12.5px; color: #cbd5e1; margin: 0 0 10px;">
          支持终端：{{ brand.supportedClients.slice(0, 5).join(' / ') }}
        </p>
        <div style="font-size: 11.5px; color: #94a3b8; background: #0b1120; padding: 8px; border-radius: 6px;">
          <div>• 国内域名/IP：<code>DIRECT</code> 本地直连</div>
          <div>• 海外目标流量：进入加密隧道</div>
          <div>• DNS 防污染：Fake-IP / DoH 远程解析</div>
        </div>
      </div>

      <!-- Stage 2 -->
      <div style="background: #111827; border: 1px solid #1e293b; border-top: 3px solid #10b981; border-radius: 10px; padding: 15px;">
        <div style="font-size: 11px; color: #10b981; font-family: var(--cc-font-mono); font-weight: 700; margin-bottom: 6px;">
          STAGE 02 / 国内入口与加密握手
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">
          国内多线 BGP 接入点
        </div>
        <p style="font-size: 12.5px; color: #cbd5e1; margin: 0 0 10px;">
          承载协议：<strong>{{ brand.protocols.join(' / ') }}</strong>
        </p>
        <div style="font-size: 11.5px; color: #94a3b8; background: #0b1120; padding: 8px; border-radius: 6px;">
          <div>• 电信/联通/移动三网就近接入国内入口</div>
          <div>• 规避跨国公网首跳丢包与 QoS 限速</div>
          <div>• 并发设备策略：{{ brand.deviceLimit }}</div>
        </div>
      </div>

      <!-- Stage 3 -->
      <div style="background: #111827; border: 1px solid #1e293b; border-top: 3px solid #f59e0b; border-radius: 10px; padding: 15px;">
        <div style="font-size: 11px; color: #f59e0b; font-family: var(--cc-font-mono); font-weight: 700; margin-bottom: 6px;">
          STAGE 03 / 跨境骨干传输通道
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">
          {{ brand.lineCategory }} 跨境传输层
        </div>
        <p style="font-size: 12.5px; color: #cbd5e1; margin: 0 0 10px;">
          架构定位：{{ brand.lineType }}
        </p>
        <div style="font-size: 11.5px; color: #94a3b8; background: #0b1120; padding: 8px; border-radius: 6px;">
          <div>• 标称带宽上限：{{ brand.peakBandwidth }}</div>
          <div>• 广港/沪日/沪美内网或高优专线中继</div>
          <div>• 降低晚高峰（20:00–23:30）抖动率</div>
        </div>
      </div>

      <!-- Stage 4 -->
      <div style="background: #111827; border: 1px solid #1e293b; border-top: 3px solid #a855f7; border-radius: 10px; padding: 15px;">
        <div style="font-size: 11px; color: #c084fc; font-family: var(--cc-font-mono); font-weight: 700; margin-bottom: 6px;">
          STAGE 04 / 海外落地与业务解锁
        </div>
        <div style="font-size: 15px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">
          全球 {{ brand.regionCount }} 地区落地出口
        </div>
        <p style="font-size: 12.5px; color: #cbd5e1; margin: 0 0 10px;">
          核心地区：{{ brand.regions.slice(0, 6).join(' / ') }}
        </p>
        <div style="font-size: 11.5px; color: #94a3b8; background: #0b1120; padding: 8px; border-radius: 6px;">
          <div>• AI 节点：台/新/日/美纯净 IP 访问 ChatGPT</div>
          <div>• 流媒体：Netflix / Disney+ / YouTube 4K</div>
          <div>• 开发科研：GitHub / Docker / 学术数据库</div>
        </div>
      </div>
    </div>

    <div class="obs-disclaimer">
      <strong>架构图合规说明：</strong>本图展示的是 {{ brand.name }} 基于官方公开线路规格（{{ brand.lineType }}）与协议栈（{{ brand.protocols.join('/') }}）归纳的逻辑传输拓扑示意图，用于帮助读者理解数据流向与客户端分流原理，并非实时网络探针监控大屏。
    </div>
  </section>
</template>
