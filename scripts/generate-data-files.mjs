import fs from 'node:fs';
import path from 'node:path';
import { brandsPart1 } from './brands-part1.mjs';
import { brandsPart2 } from './brands-part2.mjs';

const allBrands = [...brandsPart1, ...brandsPart2];
console.log(`Total independent brands: ${allBrands.length}`);

const dataDir = path.resolve('/Users/mac/Desktop/clash-cloud.run/docs/.vitepress/data');
fs.mkdirSync(dataDir, { recursive: true });

// 1. Write brands.json
fs.writeFileSync(
  path.join(dataDir, 'brands.json'),
  JSON.stringify(allBrands, null, 2),
  'utf-8'
);

// 2. Write brands.ts
const brandsTs = `// Auto-generated unified Brand Data Center for clash-cloud.run
// Total independent brands: ${allBrands.length} (deduplicated from 42 raw entries by merging #8 Firefly & #41 萤火虫)
export interface BrandPlan {
  name: string;
  billing: string;
  price: number;
  monthlyEquivalent: number | null;
  traffic: string;
  resetRule: string;
  note: string;
}

export interface SpeedtestNode {
  region: string;
  latency: number;
  downloadMbps: number;
  uploadMbps: number | null;
  packetLoss: string;
}

export interfaceUnlockItem {
  status: 'measured_supported' | 'measured_unsupported' | 'partial' | 'vendor_claimed' | 'untested';
  label: string;
  note: string;
}

export interface BrandRecord {
  id: string;
  slug: string;
  rank: number;
  isPrimaryFeatured: boolean;
  name: string;
  enName: string;
  aliases: string[];
  logo: string;
  accentColor: string;
  officialUrl: string | null;
  affiliateUrl: string | null;
  hasAffiliateUrl: boolean;
  couponCode: string | null;
  couponNote: string;
  foundedYear: string;
  paymentMethods: string[];
  lineType: string;
  lineCategory: string;
  protocols: string[];
  clientSupport: 'both' | 'subscription' | 'proprietary_only' | 'unverified';
  clientSupportLabel: string;
  supportedClients: string[];
  deviceLimit: string;
  peakBandwidth: string;
  regions: string[];
  regionCount: number;
  nodeCountText: string;
  minMonthlyPrice: number | null;
  minAnnualizedMonthlyPrice: number | null;
  minOneTimePrice: number | null;
  summary: string;
  historicalPriceNote: string;
  plans: BrandPlan[];
  speedtest20261019: {
    testDate: string;
    condition: string;
    status: string;
    nodes: SpeedtestNode[];
  } | null;
  speedtest20260811: {
    testedAt: string;
    image: string;
    protocol: string;
    backend: string;
    summary: string;
    extraImages?: { title: string; url: string; date: string }[];
  } | null;
  unlockMatrix: Record<string, { status: string; label: string; note: string }>;
  pros: string[];
  cons: string[];
  suitableFor: string[];
  notSuitableFor: string[];
  riskNotes: string;
  homologousGroup: string;
  dataStatus: 'measured' | 'vendor' | 'historical' | 'unverified';
  sourceNote: string;
  verifiedDate: string;
  updatedAt: string;
}

export const BRANDS: BrandRecord[] = ${JSON.stringify(allBrands, null, 2)};

export function getBrandBySlug(slug: string): BrandRecord | undefined {
  return BRANDS.find((b) => b.slug === slug || b.id === slug);
}

export const ARCHIVE_SPEEDTEST_ONLY = [
  {
    id: 'kuaili',
    name: '快狸 (KuaiLi)',
    testedAt: '2026-08-11 19:52:22 CST',
    protocol: 'VLESS',
    backend: '主端 4.3.3 (696) / 喵速 4.7.0 (A11-32) / 珠海联通 9Gbps 32线程',
    image: '/images/speedtest/kuaili.png',
    logo: '/images/logos/kuaili.png',
    note: '存在于 17个机场测速实测资料包_2026-08-11_发布整理版_V2 中（旧解压目录曾误命名为幕光加速），但未列入 42家机场品牌清单.txt，仅作为实测截图档案保留，不虚构套餐价格。'
  }
];
`;

fs.writeFileSync(path.join(dataDir, 'brands.ts'), brandsTs, 'utf-8');

// 3. Write clients.ts from 第三方代理客户端.txt
const clientsData = [
  {
    id: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    kernel: 'Mihomo (Clash Meta)',
    platforms: ['Windows', 'macOS', 'Linux'],
    category: '通用订阅客户端',
    status: '活跃维护（主力推荐）',
    pricing: '免费开源 (GPL-3.0)',
    officialSource: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS (Reality)', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2', 'TUIC', 'WireGuard'],
    features: ['内置 Mihomo 内核', '支持订阅管理与覆写脚本', '原生 TUN 虚拟网卡模式', '支持 macOS Intel (x64) 与 Apple Silicon (aarch64) 架构', '支持 Linux DEB/RPM/AppImage'],
    warning: '下载 macOS 版本时请区分 Intel 芯片（x64）与 M1/M2/M3/M4 Apple Silicon 芯片（aarch64）；不支持仅限专属客户端的机场（如飞猫云、SOGO云、隐形人等）。'
  },
  {
    id: 'flclash',
    name: 'FlClash',
    kernel: 'Mihomo (Clash Meta)',
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    category: '通用订阅客户端',
    status: '活跃维护（跨平台推荐）',
    pricing: '免费开源 (GPL-3.0)',
    officialSource: 'https://github.com/chen08209/FlClash/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS (Reality)', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2', 'TUIC'],
    features: ['基于 Flutter + Mihomo 内核', '桌面端与 Android 界面高度统一', '规则分流简洁直观', '支持多平台配置同步'],
    warning: '适合希望在 Windows、macOS、Linux 与 Android 手机上使用完全相同操作界面的用户。'
  },
  {
    id: 'v2rayn',
    name: 'v2rayN',
    kernel: 'Xray / sing-box / Mihomo 多核心',
    platforms: ['Windows', 'macOS', 'Linux'],
    category: '通用订阅客户端',
    status: '活跃维护（多协议全能）',
    pricing: '免费开源 (GPL-3.0)',
    officialSource: 'https://github.com/2dust/v2rayN/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS (Xray/Reality)', 'VMess', 'Shadowsocks', 'Trojan', 'Hysteria 2', 'TUIC', 'Socks'],
    features: ['支持切换 Xray、sing-box 等多种底层核心', '直观的节点批量测速与真连接延迟检测', '现已扩展支持 Windows、macOS 与 Linux 桌面'],
    warning: 'Windows 用户建议下载含 Core 的 SelfContained 独立压缩包（v2rayN-windows-64-SelfContained.zip）。'
  },
  {
    id: 'clash-nyanpasu',
    name: 'Clash Nyanpasu',
    kernel: 'Mihomo / Clash Premium / Rust 多内核',
    platforms: ['Windows', 'macOS', 'Linux'],
    category: '通用订阅客户端',
    status: '正常维护',
    pricing: '免费开源',
    officialSource: 'https://github.com/libnyanpasu/clash-nyanpasu/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2'],
    features: ['现代化图形界面', '支持配置增强（Merge / Script）', '支持多内核切换'],
    warning: '适合熟悉 Clash 配置覆写与自定义规则链的进阶桌面用户。'
  },
  {
    id: 'hiddify',
    name: 'Hiddify',
    kernel: 'sing-box 核心',
    platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    category: '通用订阅客户端',
    status: '活跃维护（新手友好）',
    pricing: '免费开源',
    officialSource: 'https://github.com/hiddify/hiddify-app/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Hysteria 2', 'TUIC', 'Shadowsocks', 'WireGuard'],
    features: ['全平台覆盖（含桌面与移动端）', '一键连接与自动节点选择', '兼容多种订阅格式与远程配置'],
    warning: 'iOS 版本需非国区 App Store 账号下载。'
  },
  {
    id: 'karing',
    name: 'Karing',
    kernel: 'sing-box 核心',
    platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    category: '通用订阅客户端',
    status: '活跃维护（新手向）',
    pricing: '免费（iOS 端在非国区 App Store 提供）',
    officialSource: 'https://github.com/KaringX/karing/releases',
    sourceLabel: 'GitHub / App Store',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2'],
    features: ['基于 sing-box 系内核', '支持同时导入多个机场订阅并聚合管理', '面向新手的引导式配置方式'],
    warning: '非常适合同时持有主力机场与备用机场、需要多订阅合并切换的用户。'
  },
  {
    id: 'clash-mi',
    name: 'Clash Mi',
    kernel: 'Mihomo 内核',
    platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    category: '通用订阅客户端',
    status: '正常维护',
    pricing: '免费 / App Store',
    officialSource: 'https://github.com/KaringX/clashmi/releases',
    sourceLabel: 'GitHub / App Store',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'Hysteria 2'],
    features: ['纯粹的 Mihomo 内核图形界面', '原生支持 Clash YAML 配置文件', '跨平台轻量级体验'],
    warning: '请确保导入的机场提供标准 Clash/Mihomo YAML 订阅格式。'
  },
  {
    id: 'mihomo-party',
    name: 'Mihomo Party',
    kernel: 'Mihomo 内核',
    platforms: ['Windows', 'macOS', 'Linux'],
    category: '通用订阅客户端',
    status: '维护状态需关注（历史/迁移场景）',
    pricing: '免费开源',
    officialSource: 'https://github.com/mihomo-party-org/mihomo-party',
    sourceLabel: 'GitHub 仓库',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'Hysteria 2'],
    features: ['Mihomo 配置与分流管理', '支持 Sub-Store 集成与覆写'],
    warning: '重要提示：根据项目资料核实，Mihomo Party 应单独关注项目维护状态，不宜未经核实就作为持续更新的首选客户端，新装用户优先推荐 Clash Verge Rev 或 FlClash。'
  },
  {
    id: 'v2rayng',
    name: 'v2rayNG',
    kernel: 'Xray 核心',
    platforms: ['Android'],
    category: '通用订阅客户端',
    status: '活跃维护（安卓首选之一）',
    pricing: '免费开源',
    officialSource: 'https://github.com/2dust/v2rayNG/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS (Reality)', 'VMess', 'Shadowsocks', 'Trojan', 'Socks'],
    features: ['Android 平台经典老牌 Xray 客户端', '支持订阅分组导入、二维码扫描与剪贴板节点导入', '支持分应用代理（Per-App Proxy）'],
    warning: '下载 APK 时请优先选择 arm64-v8a（现代主流安卓手机架构）或 universal 通用包。'
  },
  {
    id: 'clash-meta-for-android',
    name: 'Clash Meta for Android (CMFA)',
    kernel: 'Mihomo (Clash Meta)',
    platforms: ['Android'],
    category: '通用订阅客户端',
    status: '归档/维护放缓（建议配合 FlClash 选型）',
    pricing: '免费开源',
    officialSource: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2'],
    features: ['替代早已停更的原版 CFA (Clash for Android)', '完整支持 Mihomo YAML 分流规则与策略组'],
    warning: '切勿下载网上残留的原版 Clash for Android（不支持 VLESS/Hysteria2），安卓用户可选择 CMFA 或持续活跃更新的 FlClash。'
  },
  {
    id: 'nekobox-android',
    name: 'NekoBox for Android',
    kernel: 'sing-box 核心',
    platforms: ['Android'],
    category: '通用订阅客户端',
    status: '维护资源有限（安全预警）',
    pricing: '免费开源',
    officialSource: 'https://github.com/MatsuriDayo/NekoBoxForAndroid/releases',
    sourceLabel: 'GitHub 官方仓库',
    protocols: ['VLESS', 'VMess', 'Shadowsocks', 'Trojan', 'Hysteria 2', 'TUIC'],
    features: ['基于 sing-box 的模块化安卓客户端', '适合有一定网络基础的进阶用户'],
    warning: '安全警告：NekoBox 官方项目已明确提示维护资源有限，且特别警告【切勿使用 Google Play 上同名但已被第三方控制的修改版本】，仅可从 GitHub 官方仓库校验下载。'
  },
  {
    id: 'sing-box',
    name: 'sing-box (SFA / SFI / SFM)',
    kernel: 'sing-box 官方内核',
    platforms: ['Android', 'iOS', 'macOS', 'Linux'],
    category: '通用订阅客户端',
    status: '活跃维护（官方客户端）',
    pricing: '完全免费开源',
    officialSource: 'https://sing-box.sagernet.org/zh/clients/',
    sourceLabel: 'sing-box 官方文档与 App Store',
    protocols: ['VLESS', 'VMess', 'Shadowsocks', 'Trojan', 'Hysteria 2', 'TUIC', 'ShadowTLS'],
    features: ['通用代理平台官方出品（Android 端 SFA、iOS 端 SFI、macOS 端 SFM）', 'iOS 端在非国区 App Store 免费提供', '原生支持 sing-box JSON 配置文件'],
    warning: '需要使用 sing-box 格式订阅或通过订阅转换导入，纯 Clash YAML 需确认机场是否提供兼容参数。'
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket（小火箭）',
    kernel: '自研多协议代理引擎',
    platforms: ['iOS', 'iPadOS'],
    category: '通用订阅客户端',
    status: '活跃维护（iOS 标杆）',
    pricing: '付费应用（美区 App Store 约 $2.99）',
    officialSource: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
    sourceLabel: 'Apple App Store (美区/非国区)',
    protocols: ['VLESS (Reality)', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2', 'TUIC', 'WireGuard'],
    features: ['iPhone / iPad 装机量最大的规则代理工具', '协议兼容性极强，几乎支持所有通用订阅机场', '支持模块、HTTPS 解密、流量统计与按需连接'],
    warning: '国区 App Store 已下架，必须使用美区/港区等海外 Apple ID 登录 App Store 购买；切勿在网页端搜索所谓“小火箭安卓版/电脑版”（均为假冒病毒软件）。'
  },
  {
    id: 'stash',
    name: 'Stash',
    kernel: 'Clash 兼容规则引擎',
    platforms: ['iOS', 'iPadOS', 'macOS', 'tvOS'],
    category: '通用订阅客户端',
    status: '活跃维护',
    pricing: '付费应用（App Store）',
    officialSource: 'https://stash.ws/',
    sourceLabel: 'Stash 官网 / App Store',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2', 'TUIC'],
    features: ['iOS 端原生支持 Clash YAML 风格配置与策略组', '支持覆写（Override）、脚本与 MitM', '无需订阅转换即可直接使用 Clash 订阅'],
    warning: '售价以用户所属海外 App Store 地区为准。'
  },
  {
    id: 'quantumult-x',
    name: 'Quantumult X（圈 X）',
    kernel: '自研高性能分流引擎',
    platforms: ['iOS', 'iPadOS', 'tvOS'],
    category: '通用订阅客户端',
    status: '正常维护',
    pricing: '付费应用（美区 App Store 约 $7.99）',
    officialSource: 'https://apps.apple.com/us/app/quantumult-x/id1443988620',
    sourceLabel: 'Apple App Store',
    protocols: ['Shadowsocks', 'Trojan', 'VMess', 'VLESS (部分特性需核对版本)'],
    features: ['强大的请求重写（Rewrite）、Task 脚本与分流策略', '精细的 DNS 自定义与策略组图标定制'],
    warning: '购买机场前请确认机场节点协议与圈 X 当前版本的兼容性（如部分新式 Reality/Hysteria2 节点在 Shadowrocket 或 Stash 中支持更完整）。'
  },
  {
    id: 'surge',
    name: 'Surge 5 / Surge Mac',
    kernel: '自研企业级网络调试引擎',
    platforms: ['iOS', 'macOS', 'tvOS'],
    category: '通用订阅客户端',
    status: '活跃维护（专业网络调试）',
    pricing: '免费基础版 + 付费高级内购/授权',
    officialSource: 'https://nssurge.com/',
    sourceLabel: 'Surge 官方网站',
    protocols: ['Shadowsocks', 'Trojan', 'VMess', ' Snell', 'Hysteria 2', 'TUIC', 'WireGuard'],
    features: ['专业级网络抓包、流量分析与规则控制', '增强模式（Enhanced Mode / VIF）稳定性极高', '支持 Ponte 私有设备内网穿透'],
    warning: '授权费用较高（面向网络工程师与高端苹果生态用户），购买机场前需确认是否支持其使用的协议（如部分纯 VLESS 机场需确认兼容性）。'
  },
  {
    id: 'streisand',
    name: 'Streisand',
    kernel: '多协议代理核心',
    platforms: ['iOS', 'iPadOS'],
    category: '通用订阅客户端',
    status: '正常维护',
    pricing: 'App Store 免费下载',
    officialSource: 'https://apps.apple.com/us/app/streisand/id6450534064',
    sourceLabel: 'Apple App Store',
    protocols: ['VLESS (Reality)', 'VMess', 'Trojan', 'Hysteria 2', 'Shadowsocks'],
    features: ['外区 App Store 免费上架', '原生支持 VLESS-Reality 与 Hysteria 2 订阅导入'],
    warning: '适合拥有外区 Apple ID 但不想付费购买 Shadowrocket 的 iOS 用户。'
  },
  {
    id: 'v2raya',
    name: 'v2rayA',
    kernel: 'Xray / v2ray 核心',
    platforms: ['Linux', 'OpenWrt'],
    category: '通用订阅客户端',
    status: '活跃维护（Linux 服务器/网关首选）',
    pricing: '免费开源',
    officialSource: 'https://github.com/v2rayA/v2rayA/releases',
    sourceLabel: 'GitHub 官方 Releases',
    protocols: ['VLESS', 'VMess', 'Shadowsocks', 'Trojan', 'Tuic'],
    features: ['提供 Web 浏览器控制界面（默认 2017 端口）', '支持全局透明代理（tproxy / redirect）', '极适合无桌面 GUI 的 Linux 主机、NAS 或软路由网关'],
    warning: '在 Linux 服务器开启透明代理时请注意防火墙规则与 SSH 端口放行。'
  },
  {
    id: 'openclash',
    name: 'OpenClash',
    kernel: 'Mihomo (Clash Meta) 内核',
    platforms: ['OpenWrt'],
    category: '软路由透明代理插件',
    status: '活跃维护（软路由主流）',
    pricing: '免费开源',
    officialSource: 'https://github.com/vernesong/OpenClash/releases',
    sourceLabel: 'GitHub 官方仓库',
    protocols: ['VLESS (Reality)', 'Shadowsocks', 'Trojan', 'VMess', 'Hysteria 2'],
    features: ['OpenWrt 软路由最成熟的 Clash 图形化透明代理插件', '支持 Fake-IP 与 Redir-Host 模式、SmartDNS 联动、覆写配置'],
    warning: '安装前必须确认路由器 OpenWrt 版本、CPU 架构（x86_64 / aarch64）及防火墙包管理器（iptables vs nftables/fw4）。'
  },
  {
    id: 'passwall2',
    name: 'PassWall2',
    kernel: 'Xray / sing-box 多核心',
    platforms: ['OpenWrt'],
    category: '软路由透明代理插件',
    status: '活跃维护',
    pricing: '免费开源',
    officialSource: 'https://github.com/xiaorouji/openwrt-passwall2/releases',
    sourceLabel: 'GitHub 官方仓库',
    protocols: ['VLESS', 'VMess', 'Shadowsocks', 'Trojan', 'Hysteria 2', 'Sing-box 分流'],
    features: ['基于 Xray/sing-box 原生分流逻辑', '相比 Clash 系插件内存占用更低，支持按设备访问控制'],
    warning: '请确保存储空间充足以容纳 sing-box 与 Xray 二进制核心。'
  },
  {
    id: 'nikki',
    name: 'Nikki (OpenWrt)',
    kernel: 'Mihomo 内核',
    platforms: ['OpenWrt'],
    category: '软路由透明代理插件',
    status: '活跃维护（新式 fw4 原生）',
    pricing: '免费开源',
    officialSource: 'https://github.com/nikkinikki-org/OpenWrt-nikki/releases',
    sourceLabel: 'GitHub 官方仓库',
    protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'Hysteria 2'],
    features: ['轻量级 Mihomo 透明代理与策略管理插件', '原生适配新版 OpenWrt nftables (fw4) 架构'],
    warning: '重要系统要求：根据项目资料核实，Nikki 项目明确要求 OpenWrt 24.10 及以上版本，旧版 OpenWrt 请使用 OpenClash 或 PassWall2。'
  },
  {
    id: 'homeproxy',
    name: 'HomeProxy',
    kernel: 'sing-box 内核',
    platforms: ['OpenWrt'],
    category: '软路由透明代理插件',
    status: '活跃维护（ImmortalWrt 官方集成）',
    pricing: '免费开源',
    officialSource: 'https://github.com/immortalwrt/homeproxy',
    sourceLabel: 'GitHub 官方仓库',
    protocols: ['VLESS', 'VMess', 'Shadowsocks', 'Trojan', 'Hysteria 2', 'TUIC'],
    features: ['基于 sing-box 的现代 OpenWrt 路由代理管理插件', '资源占用极低，原生集成于 ImmortalWrt'],
    warning: '同样需要较新的 OpenWrt/ImmortalWrt (fw4) 内核环境支持。'
  }
];

const clientsTs = `// Auto-generated Third-Party Client Knowledge Base from 第三方代理客户端.txt
export interface ClientItem {
  id: string;
  name: string;
  kernel: string;
  platforms: string[];
  category: string;
  status: string;
  pricing: string;
  officialSource: string;
  sourceLabel: string;
  protocols: string[];
  features: string[];
  warning: string;
}

export const CLIENTS: ClientItem[] = ${JSON.stringify(clientsData, null, 2)};
`;

fs.writeFileSync(path.join(dataDir, 'clients.ts'), clientsTs, 'utf-8');
console.log('Successfully generated brands.json, brands.ts, and clients.ts');
