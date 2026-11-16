<script setup lang="ts">
import { computed } from 'vue';
import { PRIMARY_NAVS, SECONDARY_TOPICS, PUBLISHED_ARTICLES, ALL_PLANNED_ARTICLES } from '../../data/navigation';
import { BRANDS } from '../../data/brands';

const props = defineProps<{
  navId?: string;
  topicId?: string;
}>();

const primaryNav = computed(() => {
  if (!props.navId) return null;
  return PRIMARY_NAVS.find((n) => n.id === props.navId) || null;
});

const secondaryTopic = computed(() => {
  if (!props.topicId) return null;
  return SECONDARY_TOPICS.find((t) => t.id === props.topicId) || null;
});

const navTopics = computed(() => {
  if (!props.navId) return [];
  return SECONDARY_TOPICS.filter((t) => t.navId === props.navId);
});

const topicBrands = computed(() => {
  const slugs = secondaryTopic.value?.featuredBrands || ['guangsuyun', 'xingdaomeng', 'yifan', 'weitu', 'weifeng'];
  return slugs.map((s) => BRANDS.find((b) => b.slug === s)).filter(Boolean) as typeof BRANDS;
});

const topicPublishedArticles = computed(() => {
  if (props.topicId) {
    return PUBLISHED_ARTICLES.filter((a) => a.topicId === props.topicId);
  }
  if (props.navId) {
    return PUBLISHED_ARTICLES.filter((a) => a.navId === props.navId);
  }
  return [];
});

const topicPlannedRoadmap = computed(() => {
  if (!props.topicId) return [];
  return ALL_PLANNED_ARTICLES.filter((a) => a.topicId === props.topicId && a.status === 'planned');
});
</script>

<template>
  <!-- Mode A: Primary Navigation Hub View -->
  <section v-if="primaryNav && !secondaryTopic" style="margin: 24px 0;">
    <div style="margin-bottom: 32px;">
      <h2 style="margin: 0 0 14px; font-size: 22px; color: var(--cc-navy);">
        📂 {{ primaryNav.title }}：7 大二级专题栏目矩阵
      </h2>
      <div class="cc-grid-2">
        <div
          v-for="(t, idx) in navTopics"
          :key="t.id"
          class="cc-card"
          style="border-left: 4px solid var(--cc-accent); display: flex; flex-direction: column; justify-content: space-between;"
        >
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 12px; font-weight: 700; color: var(--cc-accent); background: var(--cc-accent-soft); padding: 2px 8px; border-radius: 4px;">
                栏目 0{{ idx + 1 }} · 主词：{{ t.primaryKeyword }}
              </span>
              <span style="font-size: 12px; color: var(--cc-text-muted);">下辖 2 个三级集群</span>
            </div>
            <h3 style="margin: 0 0 8px; font-size: 18px;">
              <a :href="t.path" style="color: var(--cc-navy);">{{ t.title }} — {{ t.h1 }}</a>
            </h3>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary); margin: 0 0 12px;">
              {{ t.seoDescription }}
            </p>
            <div style="font-size: 12.5px; color: var(--cc-text-muted); margin-bottom: 12px;">
              <div><strong>核心解决痛点：</strong>{{ t.userNeed }}</div>
              <div style="margin-top: 6px;">
                <strong>代表作入口：</strong>
                <span v-for="c in t.clusters" :key="c.id" style="display: block; margin-top: 3px;">
                  • <a :href="`/articles/${c.repArticleSlug}/`">{{ c.repArticleTitle }}</a>
                </span>
              </div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid var(--cc-border);">
            <span style="font-size: 12px; color: var(--cc-text-muted);">次级词：{{ t.secondaryKeywords.slice(0, 3).join(' / ') }}</span>
            <a :href="t.path" class="cc-btn cc-btn-primary" style="padding: 6px 14px; font-size: 12.5px;">进入专题页 →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- All 14 Cluster Representative Articles under this Primary Nav -->
    <div style="margin-bottom: 32px;">
      <h2 style="margin: 0 0 14px; font-size: 22px; color: var(--cc-navy);">
        📚 {{ primaryNav.title }}频道下辖 14 个三级内容集群代表作全览
      </h2>
      <div class="cc-grid-2">
        <article v-for="art in topicPublishedArticles" :key="art.id" class="cc-card">
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px;">
            <a :href="art.upstreamTopicPath" style="font-weight: 700; color: var(--cc-accent);">{{ art.topicTitle }}</a>
            <span style="color: var(--cc-text-muted); font-family: var(--cc-font-mono);">{{ art.clusterId }} · {{ art.clusterName }}</span>
          </div>
          <h3 style="margin: 0 0 8px; font-size: 16px;">
            <a :href="art.url" style="color: var(--cc-navy);">{{ art.title }}</a>
          </h3>
          <p style="margin: 0 0 10px; font-size: 13px; color: var(--cc-text-secondary);">
            搜索意图：{{ art.searchIntent }}
          </p>
          <a :href="art.url" style="font-size: 13px; font-weight: 600;">阅读完整评测与配置步骤 →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- Mode B: Secondary Topic Hub View -->
  <section v-else-if="secondaryTopic" style="margin: 24px 0;">
    <!-- Level-3 Clusters & Representative Articles -->
    <div style="margin-bottom: 32px;">
      <h2 style="margin: 0 0 14px; font-size: 22px; color: var(--cc-navy);">
        🧭 专题核心集群：{{ secondaryTopic.clusters.map((c) => c.name).join(' 与 ') }}
      </h2>
      <div class="cc-grid-2">
        <div
          v-for="c in secondaryTopic.clusters"
          :key="c.id"
          class="cc-card"
          style="border-top: 3px solid var(--cc-accent); display: flex; flex-direction: column; justify-content: space-between;"
        >
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <span style="background: var(--cc-accent-soft); color: var(--cc-accent); font-weight: 700; font-size: 12px; padding: 2px 8px; border-radius: 4px;">
                三级集群 {{ c.id }}
              </span>
              <span class="cc-badge cc-badge-measured" style="font-size: 11px;">✓ 集群代表作已发布</span>
            </div>
            <h3 style="margin: 0 0 8px; font-size: 18px; color: var(--cc-navy);">
              {{ c.name }}
            </h3>
            <p style="font-size: 13.5px; color: var(--cc-text-secondary); margin: 0 0 10px;">
              <strong>核心议题：</strong>{{ c.coreTheme }}
            </p>
            <div style="font-size: 12.5px; color: var(--cc-text-muted); margin-bottom: 14px; background: var(--cc-bg-soft); padding: 10px; border-radius: 6px;">
              <div><strong>主关键词：</strong><code>{{ c.primaryKeyword }}</code>（次级词：{{ c.secondaryKeywords.join(' / ') }}）</div>
              <div style="margin-top: 4px;"><strong>目标读者：</strong>{{ c.targetUser }}</div>
              <div style="margin-top: 4px;"><strong>覆盖长尾问题：</strong>{{ c.geoQuestions.join(' ') }}</div>
            </div>
          </div>

          <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px;">
            <div style="font-size: 11.5px; font-weight: 700; color: var(--cc-accent); margin-bottom: 4px;">
              📖 集群核心代表文章（点击阅读完整正文）：
            </div>
            <a :href="`/articles/${c.repArticleSlug}/`" style="font-size: 15px; font-weight: 800; color: var(--cc-navy); display: block; margin-bottom: 8px;">
              《{{ c.repArticleTitle }}》
            </a>
            <a :href="`/articles/${c.repArticleSlug}/`" class="cc-btn cc-btn-primary" style="padding: 6px 14px; font-size: 12.5px;">
              立即阅读代表文章 →
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Associated Brands Comparison Table -->
    <div style="margin-bottom: 32px;">
      <div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; margin-bottom: 12px;">
        <h2 style="margin: 0; font-size: 22px; color: var(--cc-navy);">
          🏆 {{ secondaryTopic.primaryKeyword }}实测入围品牌对比（{{ topicBrands.slice(0, 3).map((b) => b.name).join(' / ') }}）
        </h2>
        <a href="/brands/" style="font-size: 13.5px; font-weight: 600;">查看全部 41 家品牌数据库 →</a>
      </div>

      <BrandComparisonTable :slugs="secondaryTopic.featuredBrands" />
    </div>

    <!-- Cluster Planned Articles Roadmap (Transparency without blank pages) -->
    <div v-if="topicPlannedRoadmap.length" class="cc-card" style="background: var(--cc-bg-soft);">
      <h3 style="margin: 0 0 8px; font-size: 16px; color: var(--cc-navy);">
        📋 本专题下辖三级集群内容规划储备清单（共 {{ topicPlannedRoadmap.length }} 篇细分课题，分批上线不生成空白壳页）
      </h3>
      <p style="font-size: 12.5px; color: var(--cc-text-muted); margin: 0 0 12px;">
        遵循本站 SEO 质量控制准则，未完成万字核验的规划文章仅在此作为选题透明度公示，不伪装成已发布页面加入 Sitemap：
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 8px;">
        <div
          v-for="p in topicPlannedRoadmap"
          :key="p.id"
          style="background: #fff; border: 1px dashed var(--cc-border-strong); border-radius: 6px; padding: 8px 12px; font-size: 12.5px;"
        >
          <div style="display: flex; justify-content: space-between; color: var(--cc-text-muted); font-size: 11px; margin-bottom: 2px;">
            <span>[{{ p.id }} · {{ p.clusterId }}]</span>
            <span>优先级 {{ p.priority }} · 规划入库</span>
          </div>
          <div style="font-weight: 600; color: var(--cc-text-secondary);">{{ p.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
