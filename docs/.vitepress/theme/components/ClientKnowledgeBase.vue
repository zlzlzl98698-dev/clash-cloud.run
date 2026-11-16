<script setup lang="ts">
import { computed, ref } from 'vue';
import { CLIENTS } from '../../data/clients';

const selectedPlatform = ref('all');
const selectedKernel = ref('all');

const platforms = ['all', 'Windows', 'macOS', 'Linux', 'Android', 'iOS / iPadOS', 'OpenWrt'];

const filteredClients = computed(() => {
  return CLIENTS.filter((c) => {
    const matchPlat =
      selectedPlatform.value === 'all' ||
      c.platforms.some((p) => p.toLowerCase().includes(selectedPlatform.value.toLowerCase()));
    const matchKern =
      selectedKernel.value === 'all' ||
      c.kernel.toLowerCase().includes(selectedKernel.value.toLowerCase());
    return matchPlat && matchKern;
  });
});
</script>

<template>
  <section aria-label="22款全平台代理客户端知识库">
    <div class="cc-card" style="background: var(--cc-bg-soft); margin-bottom: 24px;">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
        <strong style="font-size: 16px; color: var(--cc-navy);">
          💻 按操作系统与核心内核筛选第三方代理客户端（共 {{ filteredClients.length }} / {{ CLIENTS.length }} 款）
        </strong>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <select
            v-model="selectedKernel"
            style="padding: 6px 10px; border: 1px solid var(--cc-border-strong); border-radius: 6px; font-size: 13px; background: #fff;"
          >
            <option value="all">全部代理内核</option>
            <option value="Mihomo">Mihomo (Clash Meta) 内核</option>
            <option value="Xray">Xray-core 内核</option>
            <option value="sing-box">sing-box 内核</option>
          </select>
        </div>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <button
          v-for="plat in platforms"
          :key="plat"
          type="button"
          @click="selectedPlatform = plat"
          :style="{
            padding: '7px 14px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            border: selectedPlatform === plat ? '1px solid var(--cc-accent)' : '1px solid var(--cc-border-strong)',
            background: selectedPlatform === plat ? 'var(--cc-accent)' : '#ffffff',
            color: selectedPlatform === plat ? '#ffffff' : 'var(--cc-text-secondary)'
          }"
        >
          {{ plat === 'all' ? '全部平台 (22)' : plat }}
        </button>
      </div>
    </div>

    <div class="cc-grid-2">
      <article v-for="c in filteredClients" :key="c.id" class="cc-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 10px;">
            <div>
              <h3 style="margin: 0; font-size: 18px; color: var(--cc-navy);">{{ c.name }}</h3>
              <div style="font-size: 12px; color: var(--cc-text-muted); margin-top: 2px;">
                内核：<code style="font-size: 11.5px;">{{ c.kernel }}</code> | 授权：{{ c.pricing }}
              </div>
            </div>
            <span class="cc-badge cc-badge-measured" style="font-size: 11.5px; white-space: nowrap;">
              {{ c.status }}
            </span>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px;">
            <span
              v-for="p in c.platforms"
              :key="p"
              style="background: var(--cc-accent-soft); color: var(--cc-accent); font-size: 11.5px; font-weight: 600; padding: 2px 8px; border-radius: 4px;"
            >
              {{ p }}
            </span>
            <span
              v-for="proto in c.protocols.slice(0, 5)"
              :key="proto"
              style="background: var(--cc-bg-muted); color: var(--cc-text-secondary); font-family: var(--cc-font-mono); font-size: 11px; padding: 2px 7px; border-radius: 4px;"
            >
              {{ proto }}
            </span>
          </div>

          <ul style="margin: 0 0 12px; padding-left: 18px; font-size: 13.5px; color: var(--cc-text-secondary);">
            <li v-for="feat in c.features" :key="feat">{{ feat }}</li>
          </ul>

          <div
            v-if="c.warning"
            style="padding: 8px 12px; background: var(--cc-warning-bg); border-left: 3px solid var(--cc-warning); border-radius: 4px; font-size: 12px; color: #92400e; margin-bottom: 12px;"
          >
            <strong>⚠️ 注意事项：</strong>{{ c.warning }}
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; border-top: 1px solid var(--cc-border); padding-top: 12px; margin-top: auto;">
          <span style="font-size: 12px; color: var(--cc-text-muted);">官方来源：{{ c.sourceLabel }}</span>
          <a
            :href="c.officialSource"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="cc-btn cc-btn-outline"
            style="padding: 6px 12px; font-size: 12.5px;"
          >
            前往官方发布页 ↗
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
