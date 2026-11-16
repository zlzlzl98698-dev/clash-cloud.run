import type { Theme } from 'vitepress';
import SiteLayout from './components/SiteLayout.vue';
import NetworkPerformanceReport from './components/NetworkPerformanceReport.vue';
import StreamingAvailabilityMatrix from './components/StreamingAvailabilityMatrix.vue';
import NetworkTopology from './components/NetworkTopology.vue';
import BrandInfrastructureSnapshot from './components/BrandInfrastructureSnapshot.vue';
import BrandDatabase from './components/BrandDatabase.vue';
import ClientKnowledgeBase from './components/ClientKnowledgeBase.vue';
import HomePortal from './components/HomePortal.vue';
import TopicHubView from './components/TopicHubView.vue';
import BrandComparisonTable from './components/BrandComparisonTable.vue';
import './style.css';

export default {
  Layout: SiteLayout,
  enhanceApp({ app }) {
    app.component('NetworkPerformanceReport', NetworkPerformanceReport);
    app.component('StreamingAvailabilityMatrix', StreamingAvailabilityMatrix);
    app.component('NetworkTopology', NetworkTopology);
    app.component('BrandInfrastructureSnapshot', BrandInfrastructureSnapshot);
    app.component('BrandDatabase', BrandDatabase);
    app.component('ClientKnowledgeBase', ClientKnowledgeBase);
    app.component('HomePortal', HomePortal);
    app.component('TopicHubView', TopicHubView);
    app.component('BrandComparisonTable', BrandComparisonTable);
  }
} satisfies Theme;
