<script setup lang="ts">
import { computed, ref } from 'vue';
import { BRANDS } from '../../data/brands';

const props = defineProps<{
  brandSlug?: string;
}>();

const lightboxImg = ref<string | null>(null);
const lightboxTitle = ref<string>('');

const brand = computed(() => {
  if (!props.brandSlug) return BRANDS[0];
  return BRANDS.find((b) => b.slug === props.brandSlug) || BRANDS[0];
});

const services = [
  { key: 'chatgpt', name: 'ChatGPT / OpenAI', category: 'AI 生产力工具', icon: '🤖' },
  { key: 'claude', name: 'Claude 3.5 / Anthropic', category: 'AI 生产力工具', icon: '🧠' },
  { key: 'gemini', name: 'Google Gemini', category: 'AI 生产力工具', icon: '✨' },
  { key: 'netflix', name: 'Netflix (非自制剧/4K)', category: '国际流媒体', icon: '🎬' },
  { key: 'disney', name: 'Disney+ 跨区流媒体', category: '国际流媒体', icon: '🏰' },
  { key: 'youtube', name: 'YouTube 4K/8K HDR', category: '国际流媒体', icon: '▶️' },
  { key: 'tiktok', name: 'TikTok 跨区访问', category: '社媒与短视频', icon: '📱' }
];

const guangsuyunUnlockImages = [
  { title: 'Netflix 解锁与 ChatGPT 访问实测截图', url: '/images/unlock/netflix-unlock.jpg', date: '2026-06-15' },
  { title: 'Disney+ 流媒体跨区解锁实测截图', url: '/images/unlock/disney-unlock.jpg', date: '2026-06-15' },
  { title: 'YouTube 高清视频流播放实测截图', url: '/images/unlock/youtube-unlock.jpg', date: '2026-06-15' },
  { title: 'TikTok 跨区内容访问实测截图', url: '/images/unlock/tiktok-unlock.jpg', date: '2026-06-15' }
];

function statusStyle(status?: string) {
  switch (status) {
    case 'measured_supported':
      return { bg: 'rgba(16, 185, 129, 0.16)', color: '#34d399', border: '#059669' };
    case 'partial':
      return { bg: 'rgba(56, 189, 248, 0.16)', color: '#38bdf8', border: '#0284c7' };
    case 'vendor_claimed':
      return { bg: 'rgba(245, 158, 11, 0.16)', color: '#fbbf24', border: '#d97706' };
    case 'measured_unsupported':
      return { bg: 'rgba(244, 63, 94, 0.16)', color: '#fb7185', border: '#e11d48' };
    default:
      return { bg: 'rgba(148, 163, 184, 0.14)', color: '#94a3b8', border: '#475569' };
  }
}
</script>

<template>
  <section v-if="brand" class="obs-panel" :aria-label="`${brand.name} AI 与流媒体解锁核验矩阵`">
    <div class="obs-header">
      <div class="obs-title-group">
        <h3>
          <span>🔓 {{ brand.name }} 流媒体与 AI 生产力解锁核验矩阵</span>
        </h3>
        <p class="obs-subtitle">
          严格区分「实测支持」「部分节点支持」「官方宣称支持」与「暂无独立测试」，拒绝全绿虚假标注
        </p>
      </div>
      <span class="cc-badge" :class="brand.dataStatus === 'measured' ? 'cc-badge-measured' : 'cc-badge-vendor'">
        {{ brand.dataStatus === 'measured' ? '✓ 含解锁验证记录' : '○ 官方资料与节点核实' }}
      </span>
    </div>

    <div style="overflow-x: auto;">
      <table class="obs-table">
        <thead>
          <tr>
            <th>目标服务 / 平台</th>
            <th>所属分类</th>
            <th>核验状态标签</th>
            <th>推荐解锁地区与分流说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="svc in services" :key="svc.key">
            <td style="font-weight: 700; color: #f8fafc; white-space: nowrap;">
              <span style="margin-right: 6px;">{{ svc.icon }}</span>{{ svc.name }}
            </td>
            <td style="color: #94a3b8; white-space: nowrap;">{{ svc.category }}</td>
            <td style="white-space: nowrap;">
              <span
                :style="{
                  display: 'inline-block',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: '600',
                  background: statusStyle(brand.unlockMatrix?.[svc.key]?.status).bg,
                  color: statusStyle(brand.unlockMatrix?.[svc.key]?.status).color,
                  border: `1px solid ${statusStyle(brand.unlockMatrix?.[svc.key]?.status).border}`
                }"
              >
                {{ brand.unlockMatrix?.[svc.key]?.label || '暂无独立测试' }}
              </span>
            </td>
            <td style="color: #cbd5e1; font-size: 13px;">
              {{ brand.unlockMatrix?.[svc.key]?.note || '需视当前落地 IP 纯净度及客户端分流规则而定' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Real Unlock Screenshots for Guangsuyun -->
    <div v-if="brand.slug === 'guangsuyun'" style="margin-top: 18px;">
      <div style="font-size: 13.5px; font-weight: 700; color: #38bdf8; margin-bottom: 10px;">
        📸 光速云流媒体与 AI 解锁实测截图存证（点击可放大核验）
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px;">
        <div
          v-for="shot in guangsuyunUnlockImages"
          :key="shot.url"
          style="background: #111827; border: 1px solid #1e293b; border-radius: 8px; padding: 10px; cursor: zoom-in;"
          @click="lightboxImg = shot.url; lightboxTitle = shot.title"
        >
          <img :src="shot.url" :alt="shot.title" width="480" height="300" loading="lazy" style="width: 100%; height: 135px; object-fit: cover; border-radius: 4px;" />
          <div style="font-size: 12px; color: #e2e8f0; margin-top: 6px; font-weight: 600;">{{ shot.title }}</div>
          <div style="font-size: 11px; color: #64748b;">存证日期：{{ shot.date }}</div>
        </div>
      </div>
    </div>

    <div class="obs-disclaimer">
      <strong>解锁动态性说明：</strong>ChatGPT、Claude、Netflix 与 TikTok 会定期更新机房 IP 段风控库。即使支持全解锁的专线机场，也建议在 Clash Verge Rev / Shadowrocket 中启用 AI 与流媒体专属分流策略组，优先走台湾、新加坡、日本、美国原生或 DNS 解锁落地节点。
    </div>

    <div v-if="lightboxImg" class="cc-modal-backdrop" @click="lightboxImg = null">
      <div style="max-width: 90vw; max-height: 88vh; background: #0b1120; padding: 16px; border-radius: 12px; border: 1px solid #334155;" @click.stop>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; color: #f8fafc;">
          <strong>{{ lightboxTitle }}</strong>
          <button type="button" @click="lightboxImg = null" style="background: #ef4444; color: #fff; border: none; border-radius: 4px; padding: 4px 10px; cursor: pointer;">关闭 ✕</button>
        </div>
        <img :src="lightboxImg" :alt="lightboxTitle" style="max-width: 86vw; max-height: 78vh; object-fit: contain; display: block;" />
      </div>
    </div>
  </section>
</template>
