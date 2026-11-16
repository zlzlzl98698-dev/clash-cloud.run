<script setup lang="ts">
import { computed, ref } from 'vue';
import { BRANDS, ARCHIVE_SPEEDTEST_ONLY } from '../../data/brands';

const props = defineProps<{
  brandSlug?: string;
  mode?: 'single' | 'benchmark';
}>();

const lightboxImg = ref<string | null>(null);
const lightboxTitle = ref<string>('');

const brand = computed(() => {
  if (!props.brandSlug) return BRANDS[0];
  return BRANDS.find((b) => b.slug === props.brandSlug) || null;
});

const benchmarkBrands = computed(() => {
  return BRANDS.filter((b) => b.speedtest20260811 !== null);
});

function openLightbox(img: string, title: string) {
  lightboxImg.value = img;
  lightboxTitle.value = title;
}

function closeLightbox() {
  lightboxImg.value = null;
}
</script>

<template>
  <!-- Mode 1: Global 17-Airport Speedtest Benchmark -->
  <section v-if="mode === 'benchmark'" class="obs-panel" aria-label="2026年8月11日17家机场实测归档看板">
    <div class="obs-header">
      <div class="obs-title-group">
        <h3>
          <span>📡 2026-08-11 晚高峰 17 家机场实测归档看板（Miaoko 测速脚本真实快照）</span>
        </h3>
        <p class="obs-subtitle">
          数据来源：17个机场测速实测资料包_2026-08-11_发布整理版_V2 | 测试线程：4 | 涵盖 16 家在库独立品牌 + 1 家历史测速归档品牌（快狸）
        </p>
      </div>
      <span class="cc-badge cc-badge-measured">✓ 真实测速截图存证</span>
    </div>

    <div class="obs-kpi-grid">
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">实测样本总数</div>
        <div class="obs-kpi-value">17 家</div>
      </div>
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">最高实测吞吐峰值</div>
        <div class="obs-kpi-value">555.02 MB/s</div>
      </div>
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">光速云晚高峰表现</div>
        <div class="obs-kpi-value">502.87 MB/s</div>
      </div>
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">实测协议覆盖</div>
        <div class="obs-kpi-value">VLESS / SS / Trojan</div>
      </div>
    </div>

    <div style="overflow-x: auto;">
      <table class="obs-table">
        <thead>
          <tr>
            <th>品牌名称</th>
            <th>实测时间 (CST)</th>
            <th>实测协议</th>
            <th>实测核心表现摘要</th>
            <th>实测原图 & 评测</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in benchmarkBrands" :key="item.slug">
            <td>
              <a :href="`/brands/${item.slug}/`" style="color: #38bdf8; font-weight: 700;">
                {{ item.name }}
              </a>
              <span v-if="item.isPrimaryFeatured" style="margin-left: 6px; font-size: 11px; background: #1d4ed8; color: #fff; padding: 1px 6px; border-radius: 4px;">主力推荐</span>
            </td>
            <td style="font-family: var(--cc-font-mono); font-size: 12px; white-space: nowrap;">
              {{ item.speedtest20260811?.testedAt }}
            </td>
            <td>
              <span style="font-family: var(--cc-font-mono); color: #10b981;">{{ item.speedtest20260811?.protocol }}</span>
            </td>
            <td>{{ item.speedtest20260811?.summary }}</td>
            <td style="white-space: nowrap;">
              <button
                type="button"
                @click="openLightbox(item.speedtest20260811!.image, `${item.name} 2026-08-11 实测截图`)"
                style="background: #1e293b; color: #38bdf8; border: 1px solid #334155; padding: 4px 10px; border-radius: 5px; cursor: pointer; font-size: 12px; margin-right: 6px;"
              >
                查看测速图
              </button>
              <a :href="`/brands/${item.slug}/`" style="color: #93c5fd; font-size: 12px;">深度评测 →</a>
            </td>
          </tr>
          <tr v-for="arch in ARCHIVE_SPEEDTEST_ONLY" :key="arch.slug">
            <td>
              <span style="color: #cbd5e1; font-weight: 600;">{{ arch.name }} ({{ arch.enName }})</span>
              <span style="margin-left: 6px; font-size: 11px; background: #334155; color: #cbd5e1; padding: 1px 6px; border-radius: 4px;">仅测速归档</span>
            </td>
            <td style="font-family: var(--cc-font-mono); font-size: 12px;">{{ arch.testedAt }}</td>
            <td style="font-family: var(--cc-font-mono); color: #f59e0b;">{{ arch.protocol }}</td>
            <td>{{ arch.summary }}（注：{{ arch.note }}）</td>
            <td>
              <button
                type="button"
                @click="openLightbox(arch.image, `${arch.name} 2026-08-11 实测截图`)"
                style="background: #1e293b; color: #38bdf8; border: 1px solid #334155; padding: 4px 10px; border-radius: 5px; cursor: pointer; font-size: 12px;"
              >
                查看测速图
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="obs-disclaimer">
      <strong>测试局限与口径声明：</strong>以上测速截图均为对应时间戳下的单次多线程脚本实测快照，实际体验受用户所在省份运营商（电信/联通/移动）、本地带宽及晚高峰国际出口拥塞程度影响。未包含在测速包中的品牌绝不伪造测速图。
    </div>
  </section>

  <!-- Mode 2: Single Brand Network Performance Report -->
  <section v-else-if="brand" class="obs-panel" :aria-label="`${brand.name} 网络性能与测速实测面板`">
    <div class="obs-header">
      <div class="obs-title-group">
        <h3>
          <span>⚡ {{ brand.name }} 网络性能与实测归档报告</span>
        </h3>
        <p class="obs-subtitle">
          线路架构：{{ brand.lineType }} | 传输协议：{{ brand.protocols.join(' / ') }} | 标称带宽峰值：{{ brand.peakBandwidth }}
        </p>
      </div>
      <div>
        <span v-if="brand.speedtest20260811 || brand.speedtest20261019" class="cc-badge cc-badge-measured">
          ✓ 已有实测记录存证
        </span>
        <span v-else class="cc-badge cc-badge-unverified">
          ○ 暂无独立测速（仅核实官方规格）
        </span>
      </div>
    </div>

    <div class="obs-kpi-grid">
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">线路架构等级</div>
        <div class="obs-kpi-value" style="font-size: 15px;">{{ brand.lineCategory }}</div>
      </div>
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">核心传输协议</div>
        <div class="obs-kpi-value" style="font-size: 15px; color: #10b981;">{{ brand.protocols.join(' / ') }}</div>
      </div>
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">节点覆盖规模</div>
        <div class="obs-kpi-value" style="font-size: 15px;">{{ brand.regionCount }} 地区 ({{ brand.nodeCountText }})</div>
      </div>
      <div class="obs-kpi-card">
        <div class="obs-kpi-label">并发设备限制</div>
        <div class="obs-kpi-value" style="font-size: 15px; color: #f59e0b;">{{ brand.deviceLimit }}</div>
      </div>
    </div>

    <!-- Batch A: 2026-08-11 Speedtest Image Evidence -->
    <div v-if="brand.speedtest20260811" style="margin-bottom: 22px;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
        <div style="font-size: 14px; font-weight: 700; color: #38bdf8;">
          📸 批次一：2026-08-11 晚高峰自动化脚本实测快照（{{ brand.speedtest20260811.testedAt }}）
        </div>
        <div style="font-size: 12px; color: #94a3b8;">
          后端：{{ brand.speedtest20260811.backend }} | 实测协议：{{ brand.speedtest20260811.protocol }}
        </div>
      </div>
      <p style="margin: 0 0 12px; font-size: 13.5px; color: #e2e8f0;">
        <strong>实测数据摘要：</strong>{{ brand.speedtest20260811.summary }}
      </p>
      <div style="background: #0f172a; border: 1px solid #1e293b; border-radius: 10px; padding: 12px;">
        <img
          :src="brand.speedtest20260811.image"
          :alt="`${brand.name} 2026-08-11 节点测速实测图`"
          width="1200"
          height="675"
          loading="lazy"
          style="width: 100%; max-height: 520px; object-fit: contain; cursor: zoom-in; border-radius: 6px;"
          @click="openLightbox(brand.speedtest20260811.image, `${brand.name} 2026-08-11 节点测速实测原图`)"
        />
        <div style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 8px;">
          🔍 点击图片可放大查看高清原始测速截图（含全部节点 HTTP 延迟、平均速度与最高速度）
        </div>
      </div>

      <!-- Extra Multi-ISP speedtest images (e.g. for Guangsuyun) -->
      <div v-if="brand.speedtest20260811.extraImages && brand.speedtest20260811.extraImages.length" style="margin-top: 16px;">
        <div style="font-size: 13.5px; font-weight: 700; color: #e2e8f0; margin-bottom: 10px;">
          📊 补充实测证据：电信 / 联通 / 移动三网多线程吞吐对比图
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
          <div
            v-for="ext in brand.speedtest20260811.extraImages"
            :key="ext.url"
            style="background: #111827; border: 1px solid #1e293b; border-radius: 8px; padding: 10px; cursor: zoom-in;"
            @click="openLightbox(ext.url, ext.title)"
          >
            <img :src="ext.url" :alt="ext.title" width="480" height="300" loading="lazy" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" />
            <div style="font-size: 12px; color: #cbd5e1; margin-top: 6px; font-weight: 600;">{{ ext.title }}</div>
            <div style="font-size: 11px; color: #64748b;">归档日期：{{ ext.date }}（点击放大）</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Batch B: 2026-10-19 Regional Node Table -->
    <div v-if="brand.speedtest20261019">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
        <div style="font-size: 14px; font-weight: 700; color: #10b981;">
          📋 批次二：{{ brand.speedtest20261019.testDate }} 分地区代表节点测速记录
        </div>
        <div style="font-size: 12px; color: #94a3b8;">
          测试环境：{{ brand.speedtest20261019.condition }}
        </div>
      </div>
      <div style="overflow-x: auto;">
        <table class="obs-table">
          <thead>
            <tr>
              <th>测试节点地区</th>
              <th>参考延迟 (RTT)</th>
              <th>下行速率 (Mbps)</th>
              <th>吞吐量可视化对比</th>
              <th>上行速率</th>
              <th>丢包率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in brand.speedtest20261019.nodes" :key="n.region">
              <td style="font-weight: 600; color: #f8fafc;">{{ n.region }}</td>
              <td style="font-family: var(--cc-font-mono);">
                <span :style="{ color: n.latency < 65 ? '#10b981' : n.latency < 150 ? '#38bdf8' : '#f59e0b' }">
                  {{ n.latency }} ms
                </span>
              </td>
              <td style="font-family: var(--cc-font-mono); font-weight: 700; color: #38bdf8;">
                {{ n.downloadMbps }} Mbps
              </td>
              <td style="min-width: 140px;">
                <div class="obs-bar-track">
                  <div
                    class="obs-bar-fill"
                    :style="{ width: `${Math.min(100, Math.round((n.downloadMbps / 950) * 100))}%` }"
                  ></div>
                </div>
              </td>
              <td style="font-family: var(--cc-font-mono); color: #94a3b8;">
                {{ n.uploadMbps ? `${n.uploadMbps} Mbps` : '未单独记录' }}
              </td>
              <td style="font-family: var(--cc-font-mono); color: #10b981;">{{ n.packetLoss }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Fallback when brand has no independent speedtest -->
    <div v-if="!brand.speedtest20260811 && !brand.speedtest20261019" style="background: #111827; border: 1px dashed #334155; border-radius: 8px; padding: 18px; text-align: center;">
      <div style="font-size: 14px; font-weight: 600; color: #f59e0b; margin-bottom: 6px;">
        ⚠️ 暂无独立测速截图归档（状态：历史资料 / 品牌官方宣称参数）
      </div>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">
        {{ brand.name }} 属于资料库第二部分历史补充品牌，原始资料未附带 2026-08-11 或 2026-10-19 独立测速数据。遵循本站「不伪造实测数据」原则，此处仅展示已核实的线路类型（{{ brand.lineType }}）与协议信息（{{ brand.protocols.join('/') }}）。
      </p>
    </div>

    <div class="obs-disclaimer">
      <strong>数据核实与时效说明：</strong>测速数据仅代表对应测试时间点与测试网络环境下的样本表现，不构成任何绝对速度承诺。建议首次选购优先使用月付套餐在本地网络实测。
    </div>
  </section>

  <!-- Lightbox Modal -->
  <div v-if="lightboxImg" class="cc-modal-backdrop" @click="closeLightbox">
    <div style="max-width: 92vw; max-height: 90vh; background: #0b1120; padding: 16px; border-radius: 12px; border: 1px solid #334155;" @click.stop>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; color: #f8fafc;">
        <strong>{{ lightboxTitle }}</strong>
        <button type="button" @click="closeLightbox" style="background: #ef4444; color: #fff; border: none; border-radius: 4px; padding: 4px 10px; cursor: pointer;">关闭 ✕</button>
      </div>
      <img :src="lightboxImg" :alt="lightboxTitle" style="max-width: 88vw; max-height: 80vh; object-fit: contain; display: block;" />
    </div>
  </div>
</template>
