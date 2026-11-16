// Complete 4 Primary Navs -> 28 Secondary Topics -> 56 Clusters definition
export const PRIMARY_NAVS = [
  {
    id: 'airport',
    title: '机场推荐',
    path: '/airport/',
    seoTitle: '2026 机场推荐与专线节点评测总览 — 稳定/性价比/便宜机场导航 | clash机场',
    seoDescription: '围绕2026年中文用户真实网络需求，系统整理41家独立机场品牌的IEPL/IPLC专线架构、月付/年付套餐价格、2026-08-11与10-19双批次实测数据及AI/流媒体解锁表现。',
    h1: '2026 机场推荐与专线评测总入口',
    primaryKeyword: '机场推荐',
    secondaryKeywords: ['2026 机场推荐', '专线机场推荐', 'IEPL 机场', 'IPLC 机场', '科学上网机场'],
    searchIntent: '商业调查与选型决策（Commercial Investigation）',
    summary: '覆盖从零基础科学上网概念、免费梯子边界核验，到便宜机场、性价比机场、晚高峰稳定专线机场及综合天梯排行的完整决策链路。'
  },
  {
    id: 'vpn',
    title: 'VPN 与加速器',
    path: '/vpn/',
    seoTitle: '2026 VPN 推荐与加速器对比评测 — 机场订阅 vs 传统 VPN 怎么选 | clash机场',
    seoDescription: '深入对比传统商业 VPN、网络加速器与 Clash 机场订阅在传输协议（VLESS/Trojan vs WireGuard/OpenVPN）、抗封锁能力、分流精度及月均成本上的本质差异。',
    h1: 'VPN 与网络加速器评测及机场对比中心',
    primaryKeyword: 'VPN 推荐',
    secondaryKeywords: ['免费 VPN', '手机 VPN', 'VPN 软件评测', 'VPN 加速器', '加速器对比', '好用的 VPN'],
    searchIntent: '工具对比与方案迁移（Comparative & Informational）',
    summary: '帮助习惯搜索“VPN”“加速器”的用户厘清传统一体式 VPN 与现代规则分流机场（Clash/Shadowrocket + IEPL专线）的适用边界，避免买错工具。'
  },
  {
    id: 'clash',
    title: 'Clash 客户端',
    path: '/clash/',
    seoTitle: 'Clash 客户端下载与使用教程大全 — Clash Verge Rev / Mihomo (Meta) 官方指南 | clash机场',
    seoDescription: '提供 Windows、macOS、Android、iOS、Linux 与 OpenWrt 软路由全平台 Clash 客户端（Clash Verge Rev、FlClash、Clash Mi 等）官方下载、订阅导入、TUN 模式及排障指南。',
    h1: 'Clash 客户端下载、订阅导入与 Mihomo 内核知识库',
    primaryKeyword: 'Clash 推荐',
    secondaryKeywords: ['Clash Verge', 'Clash Verge 下载', 'Clash Verge 订阅', 'Clash Meta', 'Clash 使用教程', 'Clash 故障排查'],
    searchIntent: '软件获取与配置操作（Transactional & How-To）',
    summary: '针对原版 Clash 停更后的 Mihomo (Clash Meta) 生态，提供经过核实的官方 GitHub 下载源、系统架构区分、YAML 订阅导入及专属客户端兼容性说明。'
  },
  {
    id: 'resources',
    title: '资源与情报',
    path: '/resources/',
    seoTitle: '机场风险情报、跑路预警与节点检测工具库 — 免费节点核验与新手 FAQ | clash机场',
    seoDescription: '实时追踪机场跑路预警信号、同源站群关系披露、免费节点安全风险核验、节点延迟/丢包/IP纯净度检测方法及订阅导入失败排查手册。',
    h1: '机场风险情报、节点检测与新手避坑资源中心',
    primaryKeyword: '机场 FAQ',
    secondaryKeywords: ['免费节点', '跑路预警', '机场风险情报', '节点检测', '订阅问题', '新手帮助'],
    searchIntent: '风险防范与问题解决（Problem Solving & Risk Verification）',
    summary: '汇集 41 家机场品牌同源矩阵审计、跑路前兆识别、免费节点蜜罐防范、三网延迟检测标准与 189 个高频长尾问题解答。'
  }
];

export const SECONDARY_TOPICS = [
  // ==================== 1. /airport/ (7 topics) ====================
  {
    id: 'airport-recommend',
    navId: 'airport',
    title: '机场推荐',
    path: '/airport/recommend/',
    h1: '2026 机场推荐：按预算、线路与客户端兼容性精选指南',
    seoTitle: '2026 机场推荐：实测稳定 IEPL/IPLC 专线机场与新手选购清单 | clash机场',
    seoDescription: '基于41家独立机场数据库与双批次测速证据，按主力综合、低预算年付、AI办公与专属客户端四大场景提供2026机场推荐清单，含光速云、星岛梦、一翻云等真实套餐对比。',
    primaryKeyword: '机场推荐',
    secondaryKeywords: ['机场推荐 2026', '2026 机场推荐', '好用机场推荐', '靠谱机场推荐', '老牌机场推荐'],
    searchIntent: '直接购买决策：寻找经过实测验证、价格透明且不跑路的可靠机场服务',
    userNeed: '用户面对几十家名称相似的机场不知如何下手，需要明确看到真实月付价、年付折算价、是否支持 Clash 订阅以及晚高峰实测证据。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'yifan', 'weitu', 'weifeng', 'feimao'],
    clusters: [
      {
        id: 'CL-01',
        slug: 'comprehensive-selection',
        name: '综合主力机场选型与决策标准',
        coreTheme: '如何从线路架构（IEPL/IPLC）、开业年限与实测吞吐筛选主力机场',
        primaryKeyword: '2026 机场推荐',
        secondaryKeywords: ['靠谱机场推荐', '老牌机场推荐', '主力机场怎么选'],
        searchIntent: '建立科学的机场评估标准并锁定 2–3 家主力候选',
        targetUser: '准备购买或更换主力机场的长期用户',
        geoQuestions: ['机场推荐应该看哪些因素？', '2026 年还有稳定机场推荐吗？', '机场评测应该看速度还是稳定性？'],
        repArticleSlug: 'how-to-choose-main-airport-2026',
        repArticleTitle: '2026 机场推荐核心指南：从 IEPL 专线、倍率陷阱到实测数据的 7 维选型法'
      },
      {
        id: 'CL-02',
        slug: 'scenario-based-matching',
        name: '按使用场景（AI办公/流媒体/多设备）匹配机场',
        coreTheme: '针对 ChatGPT/Claude、Netflix 4K 及家庭多端共享的差异化机场匹配',
        primaryKeyword: '好用机场推荐',
        secondaryKeywords: ['ChatGPT 机场推荐', '流媒体解锁机场', '不限设备机场推荐'],
        searchIntent: '根据自身特定业务场景找到解锁率与连接数匹配的机场',
        targetUser: '跨境办公人员、AI 重度用户、流媒体追剧党',
        geoQuestions: ['ChatGPT 机场推荐怎么选？', '流媒体解锁机场怎么选？', '机场限制设备数量吗？'],
        repArticleSlug: 'ai-and-streaming-airport-selection',
        repArticleTitle: 'AI 办公与 4K 流媒体机场推荐：ChatGPT、Claude 与 Netflix 原生解锁实测分析'
      }
    ]
  },
  {
    id: 'airport-ranking',
    navId: 'airport',
    title: '机场排行',
    path: '/airport/ranking/',
    h1: '2026 机场排行榜与客观分档评估（拒绝虚假天梯榜）',
    seoTitle: '2026 机场排行榜：41家独立机场按专线架构与实测数据分档解析 | clash机场',
    seoDescription: '拆解传统“机场天梯榜”的商业排名误区，基于2026-08-11与2026-10-19真实测速数据、开业时长及客户端兼容性，对41家独立机场进行多维度客观分档。',
    primaryKeyword: '机场排行',
    secondaryKeywords: ['机场排行榜', '2026 机场排行榜', '机场天梯榜', '2026 机场天梯榜', '2026 最优质机场排行榜'],
    searchIntent: '横向对比多家机场在速度、稳定性、价格维度的客观梯队位置',
    userNeed: '用户常搜“机场天梯榜”，但网上多数天梯图缺乏测试日期与后端说明；用户需要看清测试条件、同源站群关系与真实档位。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'weitu', 'firefly', 'yifan', 'u1s1'],
    clusters: [
      {
        id: 'CL-03',
        slug: 'tier-list-methodology',
        name: '机场天梯榜科学评估体系与误区拆解',
        coreTheme: '为什么单次测速不能直接做绝对排名？如何正确解读机场分档',
        primaryKeyword: '机场排行榜',
        secondaryKeywords: ['机场天梯榜', '2026 机场天梯榜', '机场推荐榜单'],
        searchIntent: '理解机场榜单背后的测试变量（运营商、时段、线程数）',
        targetUser: '喜欢参考天梯图但担心被广告榜误导的理性用户',
        geoQuestions: ['机场排行榜靠谱吗？', '机场天梯榜靠谱吗？', '2026 机场天梯榜怎么排名？'],
        repArticleSlug: 'airport-tier-list-methodology-2026',
        repArticleTitle: '2026 机场天梯榜真相拆解：为什么不同测速图结果差异巨大？附客观分档矩阵'
      },
      {
        id: 'CL-04',
        slug: 'multi-dimension-benchmark',
        name: '16家实测机场延迟、吞吐与多地区覆盖横评',
        coreTheme: '基于 2026-08-11 与 2026-10-19 批次数据的五地节点横向对比',
        primaryKeyword: '2026 机场排行榜',
        secondaryKeywords: ['高速机场推荐', '低延迟机场推荐', '机场速度排名'],
        searchIntent: '查看港、台、新、日、美五地实测延迟与下载速率对比表',
        targetUser: '关注具体 Mbps/MB/s 吞吐指标与 RTT 延迟的参数党',
        geoQuestions: ['机场推荐榜单应该看哪些维度？', '机场延迟低就一定快吗？', '机场速度快就一定稳定吗？'],
        repArticleSlug: '16-airports-speedtest-benchmark-analysis',
        repArticleTitle: '16 家机场节点实测横评报告：香港/新加坡/日本/美国延迟与吞吐数据深度对比'
      }
    ]
  },
  {
    id: 'airport-value',
    navId: 'airport',
    title: '性价比机场',
    path: '/airport/value/',
    h1: '2026 高性价比机场推荐：每 GB 流量成本与专线品质平衡点',
    seoTitle: '2026 性价比机场推荐：15–25元档 IEPL/IPLC 专线每 GB 成本精算 | clash机场',
    seoDescription: '不是越便宜越有性价比！深度核算41家机场的每GB真实单价、流量倍率、年付折算价与永久流量包成本，精选光速云、一翻云、唯兔云等高性价比专线方案。',
    primaryKeyword: '性价比机场',
    secondaryKeywords: ['高性价比机场推荐', '按量计费机场', '不限时机场推荐', '月付机场推荐', '流量包机场推荐'],
    searchIntent: '在合理预算（月均 8–25 元）内获得真 IEPL/IPLC 专线与充足 1 倍率流量',
    userNeed: '避免买到虽然便宜但节点高倍率（2x/5x）或晚高峰断流的中转盘，找到价格与专线品质的最佳甜点位。',
    featuredBrands: ['guangsuyun', 'yifan', 'weitu', 'ermao', 'jilian', 'guangnian'],
    clusters: [
      {
        id: 'CL-05',
        slug: 'unit-traffic-cost-analysis',
        name: '每 GB 流量成本精算与倍率识别',
        coreTheme: '如何计算真实每 GB 单价并识别节点流量倍率猫腻',
        primaryKeyword: '高性价比机场推荐',
        secondaryKeywords: ['机场流量倍率', '100G流量够用吗', '性价比机场怎么选'],
        searchIntent: '算清月付、年付及不同倍率下的真实流量开销',
        targetUser: '注重资金使用效率、日常月耗 60GB–300GB 的主流用户',
        geoQuestions: ['高性价比机场怎么判断？', '机场节点倍率是什么意思？', '机场套餐里的 100G 够用吗？'],
        repArticleSlug: 'cost-per-gb-and-multiplier-guide',
        repArticleTitle: '高性价比机场精算指南：每 GB 成本对比、1 倍率专线优势与 100GB 流量消耗实测'
      },
      {
        id: 'CL-06',
        slug: 'onetime-vs-subscription-plans',
        name: '永久不限时流量包 vs 周期月付/年付对比',
        coreTheme: '一次性不限时流量包（如光速云147元/247GB、星岛梦/唯兔云100元/100GB）与月付的取舍',
        primaryKeyword: '不限时机场推荐',
        secondaryKeywords: ['按量计费机场', '流量包机场推荐', '永久流量包机场'],
        searchIntent: '寻找不按月清零、适合轻度或作为第二备用机场的永久流量包',
        targetUser: '流量使用不规律、需要主力+不限时冷备双持的用户',
        geoQuestions: ['不限时机场是什么意思？', '不限时机场和月付机场哪个好？', '按量计费机场适合哪些人？'],
        repArticleSlug: 'permanent-traffic-pack-vs-monthly-plan',
        repArticleTitle: '2026 不限时流量包机场横评：光速云 147元/247GB 等 8 家永久套餐单价与风险分析'
      }
    ]
  },
  {
    id: 'airport-stable',
    navId: 'airport',
    title: '稳定机场',
    path: '/airport/stable/',
    h1: '2026 稳定机场推荐：IEPL/IPLC 内网专线与晚高峰抗拥塞解析',
    seoTitle: '2026 稳定机场推荐：晚高峰不卡顿的 IEPL/IPLC 专线机场评测 | clash机场',
    seoDescription: '深入解析为什么普通直连与公网中转在晚高峰（20:00–23:00）容易丢包断流，对比 IEPL、IPLC 与 BGP 专线架构，推荐经过三网实测验证的稳定机场。',
    primaryKeyword: '稳定机场',
    secondaryKeywords: ['稳定机场推荐', '专线机场推荐', 'IEPL 机场推荐', 'IPLC 机场推荐', '晚高峰稳定机场'],
    searchIntent: '解决晚高峰卡顿、视频缓冲、AI 对话中断痛点，寻找高可用专线服务',
    userNeed: '用户愿意为稳定性支付合理溢价，需要弄懂 IEPL/IPLC 真假区分、三网（电信/联通/移动）入口差异及主备容灾搭配。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'firefly', 'shanyue', 'weitu', 'muguang'],
    clusters: [
      {
        id: 'CL-07',
        slug: 'iepl-iplc-line-architecture',
        name: 'IEPL / IPLC 物理专线与 BGP 中转架构深度解析',
        coreTheme: '过境物理专线如何绕过公网国际出口拥塞与 QoS 限速',
        primaryKeyword: '专线机场推荐',
        secondaryKeywords: ['IEPL 机场推荐', 'IPLC 机场推荐', 'BGP 机场推荐'],
        searchIntent: '理解专线技术原理并筛选真 IEPL/IPLC 机场',
        targetUser: '对网络延迟、抖动与丢包敏感的远程办公及技术用户',
        geoQuestions: ['专线机场是什么意思？', 'IPLC 和 IEPL 有什么区别？', '专线机场和中转机场哪个好？'],
        repArticleSlug: 'iepl-vs-iplc-vs-bgp-architecture',
        repArticleTitle: 'IEPL 与 IPLC 专线机场深度科普：和普通公网中转有什么区别？晚高峰为何更稳？'
      },
      {
        id: 'CL-08',
        slug: 'peak-hour-stability-strategy',
        name: '晚高峰稳定性保障与多运营商（电信/移动/联通）适配',
        coreTheme: '不同宽带运营商在晚高峰的表现差异及异构主备机场搭配方案',
        primaryKeyword: '晚高峰稳定机场',
        secondaryKeywords: ['稳定机场推荐', '电信稳定机场', '移动联通机场选择'],
        searchIntent: '解决特定宽带晚间限速与单机场偶发故障的容灾问题',
        targetUser: '视频会议、外贸直播、跨国协作等不能断网的重度用户',
        geoQuestions: ['稳定机场推荐看什么？', '机场晚高峰卡顿正常吗？', '机场为什么白天快晚上慢？'],
        repArticleSlug: 'peak-hour-stability-and-isp-guide',
        repArticleTitle: '晚高峰稳定机场选购指南：电信/联通/移动三网实测差异与异构双机场容灾方案'
      }
    ]
  },
  {
    id: 'airport-cheap',
    navId: 'airport',
    title: '便宜机场',
    path: '/airport/cheap/',
    h1: '2026 便宜机场推荐：5.6元–10元/月低价套餐盘点与风险边界',
    seoTitle: '2026 便宜机场推荐：月均 5.6元–10元低价机场真实套餐与避坑指南 | clash机场',
    seoDescription: '全面盘点年付折算 5.6元/月（大佬云、闪电鼠等）、6.58元/月（无忧链接）、7元/月（飞猫云）及 8.25元/月（光速云轻量版）等便宜机场，严格区分年付折算价与真实月付价。',
    primaryKeyword: '便宜机场',
    secondaryKeywords: ['便宜机场推荐', '低价机场推荐', '学生党机场推荐', '小流量机场推荐', '年付便宜机场'],
    searchIntent: '寻找月均支出 10 元以内的低门槛可用机场，同时了解低价套餐的限制',
    userNeed: '预算有限但不想踩进“一元跑路盘”；需要清楚知道哪些“8元/月”其实是年付折算价，哪些提供低价单月体验。',
    featuredBrands: ['guangsuyun', 'feimao', 'wuyou', 'lingmao', 'shandianshu', 'dalaoyun'],
    clusters: [
      {
        id: 'CL-09',
        slug: 'under-10-yuan-plans',
        name: '月均 10 元以内低价机场套餐真实核验',
        coreTheme: '5.6元–10元/月档位的真实计费方式（年付小包 vs 月付）与流量限制对比',
        primaryKeyword: '便宜机场推荐',
        secondaryKeywords: ['10元以下机场', '学生党机场推荐', '小流量机场推荐'],
        searchIntent: '对比百元以内包年小流量套餐的真实规格与可用性',
        targetUser: '学生党、轻度查资料用户、寻找低成本备胎节点的用户',
        geoQuestions: ['便宜机场靠谱吗？', '便宜机场推荐看哪些指标？', '小流量用户适合买什么机场？'],
        repArticleSlug: 'under-10-yuan-cheap-airports-audit',
        repArticleTitle: '2026 便宜机场实测盘点：月均 5.6 元至 10 元档（光速云/飞猫云/无忧链接/闪电鼠）真相核查'
      },
      {
        id: 'CL-10',
        slug: 'cheap-airport-risks-and-limits',
        name: '超低价机场的隐藏限制、同质化矩阵与防跑路原则',
        coreTheme: '解析 5.6 元同规格矩阵（qwerty系）与年付折算价陷阱，指导安全试错',
        primaryKeyword: '低价机场推荐',
        secondaryKeywords: ['便宜稳定机场', '一元机场风险', '年付机场风险'],
        searchIntent: '识别超低价营销套路，避免大额年付打水漂',
        targetUser: '对价格高度敏感但担心服务商跑路的谨慎型用户',
        geoQuestions: ['低价机场有什么风险？', '机场买月付还是年付？', '年付机场值得买吗？'],
        repArticleSlug: 'cheap-airport-traps-and-annual-plan-risks',
        repArticleTitle: '低价便宜机场避坑指南：年付折算价与真实月付价的区别，为什么不建议盲冲超低价年付？'
      }
    ]
  },
  {
    id: 'airport-free-ladder',
    navId: 'airport',
    title: '免费梯子',
    path: '/airport/free-ladder/',
    h1: '2026 免费梯子与试用机场核验：安全边界、限制与低成本替代',
    seoTitle: '2026 免费梯子真相核验：免费代理软件 vs 免费机场节点风险与平替方案 | clash机场',
    seoDescription: '严格区分“免费开源代理客户端”与“免费节点服务”，揭示免费梯子常见的流量嗅探、广告注入与限速问题，提供真实核验状态及月均6–8元的安全平替方案。',
    primaryKeyword: '免费梯子',
    secondaryKeywords: ['免费试用机场', '机场试用', '一元试用机场', '免费科学上网'],
    searchIntent: '寻找零成本或极低成本的上网方案，同时确认是否存在隐私安全隐患',
    userNeed: '许多新手分不清客户端免费（如 Clash Verge Rev 免费）与节点服务收费；需要明确告知当前41家品牌试用政策核验结果（不编造虚假免费额度）。',
    featuredBrands: ['wuyou', 'feimao', 'shandianshu', 'guangsuyun'],
    clusters: [
      {
        id: 'CL-11',
        slug: 'free-ladder-truth-and-security',
        name: '免费梯子的运作模式、隐私边界与安全审计',
        coreTheme: '为什么免费代理客户端不等于免费节点？免费梯子的商业变现与安全隐患',
        primaryKeyword: '免费梯子',
        secondaryKeywords: ['免费科学上网', '免费梯子安全吗', '免费代理软件'],
        searchIntent: '评估免费梯子工具的安全性与可用边界',
        targetUser: '刚接触跨区上网、试图寻找免费软件的新手',
        geoQuestions: ['免费试用机场安全吗？', '机场和梯子是一回事吗？', '为什么很多人把机场叫做梯子？'],
        repArticleSlug: 'free-ladder-security-and-client-distinction',
        repArticleTitle: '免费梯子安全吗？彻底分清「免费开源客户端」与「免费节点服务」的隐私边界'
      },
      {
        id: 'CL-12',
        slug: 'airport-trial-verification',
        name: '机场免费试用核验标准与低门槛平替方案',
        coreTheme: '41家机场试用政策实情核查（不虚构试用额度）及如何用单月小包完成低成本验货',
        primaryKeyword: '免费试用机场',
        secondaryKeywords: ['机场试用', '一元试用机场', '低成本备用机场'],
        searchIntent: '在正式长期投入前，用最低成本验证机场在本地宽带的实际速度',
        targetUser: '想先测试后决定去留的务实用户',
        geoQuestions: ['一元试用机场值得买吗？', '机场试用应该测试什么？', '机场购买前要注意什么？'],
        repArticleSlug: 'airport-trial-verification-and-low-cost-test',
        repArticleTitle: '2026 机场试用政策核验与测速清单：没有免费试用时，如何低成本验证节点质量？'
      }
    ]
  },
  {
    id: 'airport-guide',
    navId: 'airport',
    title: '科学上网',
    path: '/airport/guide/',
    h1: '2026 科学上网完整指南：从核心概念、协议演进到全设备配置流程',
    seoTitle: '2026 科学上网入门指南：机场、梯子、VPN、节点与订阅链接完整科普 | clash机场',
    seoDescription: '专为中文用户编写的科学上网体系化百科：详解什么是机场、VLESS/Trojan/Hysteria2 协议差异、入口与落地节点原理，以及电脑手机首次连接全流程。',
    primaryKeyword: '科学上网',
    secondaryKeywords: ['科学上网工具', '魔法上网工具', '翻墙梯子推荐', '科学上网机场推荐'],
    searchIntent: '系统学习科学上网底层逻辑与标准操作步骤（Informational -> Commercial）',
    userNeed: '零基础或半知半解的用户需要一份不堆砌黑话、逻辑清晰的完整知识图谱，搞懂“买机场 → 下客户端 → 导订阅 → 选节点”四步闭环。',
    featuredBrands: ['guangsuyun', 'feimao', 'tiziyun', 'weifeng'],
    clusters: [
      {
        id: 'CL-13',
        slug: 'fundamentals-and-terminology',
        name: '科学上网核心概念与技术术语百科',
        coreTheme: '系统拆解机场、梯子、订阅链接、节点倍率、原生 IP、入口与落地等核心概念',
        primaryKeyword: '科学上网',
        secondaryKeywords: ['科学上网工具', '魔法上网工具', '机场是什么'],
        searchIntent: '扫清术语障碍，建立对现代代理网络架构的清晰认知',
        targetUser: '零基础入门者及希望系统了解网络原理的用户',
        geoQuestions: ['机场是什么？', '科学上网工具是什么意思？', '机场节点是什么意思？'],
        repArticleSlug: 'scientific-internet-access-complete-glossary',
        repArticleTitle: '2026 科学上网完全入门百科：一文读懂机场、订阅、协议、倍率与原生 IP'
      },
      {
        id: 'CL-14',
        slug: 'protocol-and-region-selection',
        name: '代理协议演进（VLESS/Trojan/Hysteria2）与节点地区选择策略',
        coreTheme: '不同协议的抗封锁与吞吐特性，以及港/台/日/新/美节点在各业务场景下的最优匹配',
        primaryKeyword: '科学上网机场推荐',
        secondaryKeywords: ['香港节点', '日本节点', '新加坡节点', 'VLESS 协议'],
        searchIntent: '学会根据具体应用选择正确的节点地区与传输协议',
        targetUser: '已经连上机场但想优化延迟、解锁率与速度的进阶用户',
        geoQuestions: ['机场节点地区怎么选？', '香港节点适合什么场景？', '新加坡节点适合什么场景？'],
        repArticleSlug: 'node-region-and-protocol-selection-guide',
        repArticleTitle: '香港、日本、新加坡、美国节点怎么选？不同地区延迟与 AI/流媒体适用场景全解'
      }
    ]
  },

  // ==================== 2. /vpn/ (7 topics) ====================
  {
    id: 'vpn-recommend',
    navId: 'vpn',
    title: 'VPN 推荐',
    path: '/vpn/recommend/',
    h1: '2026 VPN 推荐与机场订阅深度对比：中文网络环境下到底该选哪种？',
    seoTitle: '2026 VPN 推荐：传统 VPN 与 Clash 专线机场实测对比及选购建议 | clash机场',
    seoDescription: '针对中国大陆网络环境，客观对比传统国际 VPN 与 IEPL/IPLC 专线机场在连接成功率、晚高峰速度、智能分流及价格上的差距，提供2026高可用方案推荐。',
    primaryKeyword: 'VPN 推荐',
    secondaryKeywords: ['2026 VPN 推荐', '电脑 VPN 推荐', '中国能用的 VPN', 'VPN 和机场哪个好'],
    searchIntent: '寻找在当前网络环境下真正能连上、速度快且不影响国内网站访问的工具',
    userNeed: '大量用户习惯性搜索“VPN 推荐”，但传统国外 VPN 协议特征明显极易断连，且全局接管导致国内微信/网银变慢；需要引导其认识专属客户端机场与 Clash 分流机场。',
    featuredBrands: ['guangsuyun', 'feimao', 'firefly', 'tiziyun', 'weifeng'],
    clusters: [
      {
        id: 'CL-15',
        slug: 'vpn-vs-airport-architecture',
        name: '传统 VPN 与现代专线机场（Airport）架构大对比',
        coreTheme: '从 OSI 网络层、协议抗封锁能力、规则分流（Rule-based）与价格维度对比 VPN 与机场',
        primaryKeyword: 'VPN 推荐',
        secondaryKeywords: ['机场和 VPN 有什么区别', 'VPN 和代理区别', '中国好用 VPN'],
        searchIntent: '搞清楚为什么资深用户普遍从传统 VPN 转向 IEPL 专线机场',
        targetUser: '正在搜索 VPN 推荐、曾被传统 VPN 断连困扰的用户',
        geoQuestions: ['机场和 VPN 有什么区别？', '机场和代理有什么区别？', '自建节点和买机场哪个好？'],
        repArticleSlug: 'vpn-vs-airport-in-depth-comparison',
        repArticleTitle: '2026 VPN 推荐必读：传统 VPN 与 Clash 专线机场有什么区别？7 大核心维度实测对比'
      },
      {
        id: 'CL-16',
        slug: 'one-click-vpn-style-airports',
        name: '拥有 VPN 级一键登录体验的专属客户端机场盘点',
        coreTheme: '为喜欢传统 VPN“下载登录点连接”极简体验的用户推荐专属客户端机场',
        primaryKeyword: '好用的 VPN 替代',
        secondaryKeywords: ['一键连接机场', '专属客户端机场', '免配置梯子'],
        searchIntent: '想要专线机场的速度与稳定性，但想要传统 VPN 的零配置界面',
        targetUser: '怕麻烦、不想研究 Clash 配置文件的普通用户',
        geoQuestions: ['机场适合新手使用吗？', '新手怎么选择机场？', '机场一般怎么使用？'],
        repArticleSlug: 'one-click-client-airports-for-vpn-users',
        repArticleTitle: '不想折腾订阅配置？盘点 8 家自带专属客户端、像 VPN 一样登录即用的专线机场'
      }
    ]
  },
  {
    id: 'vpn-free',
    navId: 'vpn',
    title: '免费 VPN',
    path: '/vpn/free/',
    h1: '2026 免费 VPN 安全审计：数据变现风险、协议限制与可靠替代方案',
    seoTitle: '2026 免费 VPN 测评与风险揭秘：为什么免费 VPN 频繁断连且存在隐私隐患？ | clash机场',
    seoDescription: '深入剖析市面上所谓“永久免费 VPN”的带宽来源、住宅 IP 共享风险（带宽被用作商业爬虫出口）及 DNS 泄漏问题，提供安全透明的开源工具与低价专线替代。',
    primaryKeyword: '免费 VPN',
    secondaryKeywords: ['免费 VPN 推荐', '电脑免费 VPN', '手机免费 VPN', '安全免费 VPN'],
    searchIntent: '寻找免费 VPN 工具并评估其安全性与可用性',
    userNeed: '直面用户对“免费 VPN”的真实担忧：为什么免费 VPN 越用越慢、甚至导致账号被封？如何用每月一杯奶茶钱换取干净的原生专线 IP？',
    featuredBrands: ['wuyou', 'feimao', 'shandianshu', 'guangsuyun'],
    clusters: [
      {
        id: 'CL-17',
        slug: 'free-vpn-privacy-and-ip-risk',
        name: '免费 VPN 隐私风险、IP 污染与账号风控解析',
        coreTheme: '使用万人骑免费 VPN 节点为何会导致 ChatGPT 封号、Google 频繁弹出验证码',
        primaryKeyword: '免费 VPN',
        secondaryKeywords: ['免费 VPN 风险', '免费 VPN 安全吗', 'IP 欺诈分'],
        searchIntent: '了解免费 VPN 背后的商业模式与账号安全代价',
        targetUser: '使用免费 VPN 遇到频繁验证、账号受限或担心隐私泄露的用户',
        geoQuestions: ['机场为什么有些节点不能用 AI 工具？', '机场共享账号安全吗？', '机场账号被封是什么原因？'],
        repArticleSlug: 'free-vpn-privacy-risks-and-ip-reputation',
        repArticleTitle: '2026 免费 VPN 深度安全审计：万人共享 IP 如何触发 ChatGPT 与社交账号风控？'
      },
      {
        id: 'CL-18',
        slug: 'free-open-source-clients-vs-paid-nodes',
        name: '免费开源代理软件 + 超低价专线的组合替代方案',
        coreTheme: '利用免费开源客户端（Hiddify / Clash Verge Rev / v2rayNG）配合年付百元内专线实现高性价比替代',
        primaryKeyword: '免费 VPN 替代方案',
        secondaryKeywords: ['开源 VPN 软件', '便宜替代机场', '低成本科学上网'],
        searchIntent: '找到既不花冤枉钱、又保证代码开源透明的合规组合方案',
        targetUser: '预算极低但重视设备安全的学生与个人用户',
        geoQuestions: ['科学上网客户端为什么还需要订阅服务？', '低价机场有什么风险？', '月付机场适合哪些用户？'],
        repArticleSlug: 'open-source-client-plus-budget-line-solution',
        repArticleTitle: '告别高危免费 VPN：如何用免费开源客户端 + 月均 6–8 元 IEPL 专线构建安全网络？'
      }
    ]
  },
  {
    id: 'vpn-mobile',
    navId: 'vpn',
    title: '手机 VPN',
    path: '/vpn/mobile/',
    h1: '2026 手机 VPN 与移动端代理指南：iOS (iPhone) 与 Android 全方案解析',
    seoTitle: '2026 手机 VPN 推荐：iPhone 小火箭 (Shadowrocket) 与安卓 FlClash/v2rayNG 完整指南 | clash机场',
    seoDescription: '针对 iPhone/iPad 与安卓手机（华为/小米/三星/OPPO）移动网络特点，详解手机 VPN 权限机制、后台保活防断连、蜂窝数据耗电优化及最佳移动端机场配置。',
    primaryKeyword: '手机 VPN',
    secondaryKeywords: ['安卓 VPN', 'iPhone VPN', '苹果手机梯子', '安卓手机梯子', '手机梯子推荐'],
    searchIntent: '解决手机端跨区上网、App 安装、后台断连与移动蜂窝网络兼容问题',
    userNeed: '移动端用户面临两大核心门槛：iOS 用户不知道如何获取非国区 App Store 代理工具，安卓用户常遇到杀后台断连与 Google Play 假冒软件警告。',
    featuredBrands: ['guangsuyun', 'feimao', 'wuyou', 'tiziyun', 'weitu'],
    clusters: [
      {
        id: 'CL-19',
        slug: 'ios-iphone-proxy-solutions',
        name: 'iPhone / iPad (iOS) 代理客户端选型与按需连接优化',
        coreTheme: 'Shadowrocket、Stash、Quantumult X、Sing-box 与 Streisand 的功能对比及 iOS 耗电优化',
        primaryKeyword: 'iPhone VPN',
        secondaryKeywords: ['Shadowrocket 机场推荐', '小火箭机场推荐', '苹果手机梯子'],
        searchIntent: '在 iPhone/iPad 上选择最合适的代理 App 并匹配高兼容机场',
        targetUser: '使用 iPhone / iPad 的苹果生态用户',
        geoQuestions: ['iPhone 用什么机场客户端？', 'Shadowrocket 机场推荐怎么选？', '小火箭机场推荐怎么选？'],
        repArticleSlug: 'ios-iphone-shadowrocket-stash-selection-guide',
        repArticleTitle: '2026 iPhone / iPad 手机代理全指南：Shadowrocket、Stash、圈 X 与免费替代 App 对比'
      },
      {
        id: 'CL-20',
        slug: 'android-proxy-and-battery-keepalive',
        name: 'Android 安卓手机代理配置、杀后台防断连与安全下载',
        coreTheme: 'v2rayNG、FlClash、Hiddify 在国产安卓系统上的电池优化豁免与 NekoBox 安全预警',
        primaryKeyword: '安卓 VPN',
        secondaryKeywords: ['v2rayNG 机场推荐', '安卓手机梯子', 'FlClash 安卓教程'],
        searchIntent: '解决安卓手机锁屏断网、Wi-Fi 切 5G 断流及安全下载官方 APK',
        targetUser: '使用小米、华为、vivo、OPPO、三星等 Android 手机的用户',
        geoQuestions: ['安卓手机用什么机场客户端？', '机场是否支持 v2rayNG？', '机场是否支持 Hiddify？'],
        repArticleSlug: 'android-v2rayng-flclash-keepalive-guide',
        repArticleTitle: '2026 安卓手机代理软件推荐：v2rayNG、FlClash 与 Hiddify 评测及后台防断连设置'
      }
    ]
  },
  {
    id: 'vpn-reviews',
    navId: 'vpn',
    title: 'VPN 软件评测',
    path: '/vpn/reviews/',
    h1: '2026 VPN 软件与代理客户端深度评测：内核性能、内存占用与协议兼容对比',
    seoTitle: '2026 VPN 软件评测：Mihomo、Xray、sing-box 三大代理内核与客户端横向测评 | clash机场',
    seoDescription: '从底层代理内核（Mihomo vs Xray vs sing-box）出发，深度评测桌面与移动端 24 款主流代理软件的吞吐性能、TUN 模式开销、分流配置复杂度与维护状态。',
    primaryKeyword: 'VPN 软件评测',
    secondaryKeywords: ['代理软件评测', '梯子软件推荐', '科学上网软件推荐', '客户端对比'],
    searchIntent: '横向评估各款代理软件的优缺点、系统资源占用与适用人群',
    userNeed: '用户面对 Clash Verge Rev、v2rayN、FlClash、Hiddify、Karing、Surge 等众多软件名称，需要客观的技术横评来决定装哪一款。',
    featuredBrands: ['guangsuyun', 'yifan', 'xingdaomeng', 'tiziyun'],
    clusters: [
      {
        id: 'CL-21',
        slug: 'proxy-kernel-comparison',
        name: '三大现代代理内核（Mihomo / Xray / sing-box）技术横评',
        coreTheme: '对比 Mihomo (Clash Meta)、Xray-core 与 sing-box 在协议支持、规则引擎与性能上的差异',
        primaryKeyword: 'VPN 软件评测',
        secondaryKeywords: ['Mihomo 客户端', 'sing-box 机场推荐', 'Xray 客户端'],
        searchIntent: '理解客户端底层内核差异，为自己的设备和协议选择最佳软件',
        targetUser: '希望了解软件底层技术与性能表现的中高阶用户',
        geoQuestions: ['机场是否支持 Mihomo？', '机场是否支持 sing-box？', '机场订阅和代理软件是什么关系？'],
        repArticleSlug: 'mihomo-vs-xray-vs-singbox-kernel-review',
        repArticleTitle: '2026 代理软件内核深度评测：Mihomo (Clash Meta)、Xray 与 sing-box 怎么选？'
      },
      {
        id: 'CL-22',
        slug: 'desktop-and-router-client-reviews',
        name: 'Windows / macOS / Linux / OpenWrt 跨平台客户端实测对比',
        coreTheme: '桌面端与软路由插件（OpenClash / PassWall2 / Nikki / HomeProxy）的安装门槛与维护活跃度评测',
        primaryKeyword: '科学上网软件推荐',
        secondaryKeywords: ['电脑梯子推荐', 'Mac 代理软件', 'OpenWrt 软路由插件'],
        searchIntent: '为电脑、Mac（Intel/M芯片）或家庭软路由挑选持续维护的稳定客户端',
        targetUser: '桌面办公用户、Mac 用户及家庭软路由折腾玩家',
        geoQuestions: ['Windows 电脑怎么用机场？', 'Mac 电脑怎么用机场？', '机场是否支持 Surge？'],
        repArticleSlug: 'cross-platform-proxy-clients-comprehensive-review',
        repArticleTitle: '2026 全平台代理软件横评：Windows、macOS、Linux 与 OpenWrt 软路由 22 款工具盘点'
      }
    ]
  },
  {
    id: 'vpn-accelerator',
    navId: 'vpn',
    title: 'VPN 加速器',
    path: '/vpn/accelerator/',
    h1: '2026 VPN 加速器专题：跨国办公、流媒体秒开与低延迟网络加速方案',
    seoTitle: '2026 VPN 加速器推荐：IEPL 低延迟专线加速 TikTok 直播、远程办公与流媒体 | clash机场',
    seoDescription: '详解“VPN 加速器”在跨境电商、TikTok 直播、Zoom 视频会议、GitHub 代码拉取及外服低延迟连接中的技术要求，区分游戏加速器与全能专线机场。',
    primaryKeyword: 'VPN 加速器',
    secondaryKeywords: ['网络加速器', '外网加速器', 'TikTok 加速器', '跨境电商加速器'],
    searchIntent: '解决跨国网络高延迟、丢包、直播卡顿与代码仓库克隆缓慢问题',
    userNeed: '明确区分专攻 UDP 游戏包转发的“网游加速器”与提供全协议跨区访问的“IEPL/IPLC 专线机场”，指导外贸、程序员与直播用户选对低延迟方案。',
    featuredBrands: ['guangsuyun', 'muguang', 'wuyou', 'shanyue', 'yifan'],
    clusters: [
      {
        id: 'CL-23',
        slug: 'cross-border-business-and-tiktok',
        name: '跨境电商、TikTok 跨区直播与外贸远程办公加速方案',
        coreTheme: 'TikTok 跨区直连、外贸社媒运营与跨国视频会议对原生 IP、低抖动与独享定制专线的要求',
        primaryKeyword: 'VPN 加速器',
        secondaryKeywords: ['TikTok 机场推荐', '原生 IP 机场推荐', '跨境电商机场'],
        searchIntent: '为商业运营与跨国办公匹配低延迟、高纯净度 IP 的加速线路',
        targetUser: '跨境电商卖家、TikTok 运营团队、外贸从业者与远程开发者',
        geoQuestions: ['机场适合跨境电商吗？', '机场适合外贸用户吗？', 'TikTok 机场推荐看什么？'],
        repArticleSlug: 'cross-border-ecommerce-and-tiktok-acceleration',
        repArticleTitle: '跨境电商与 TikTok 直播网络加速指南：原生 IP、IEPL 专线与独享定制方案怎么选？'
      },
      {
        id: 'CL-24',
        slug: 'developer-and-game-latency-optimization',
        name: '程序员开发加速（GitHub/Docker）与游戏低延迟 UDP 转发解析',
        coreTheme: '如何看懂 FullCone NAT / UDP 类型，以及机场在 GitHub 终端代理与游戏加速中的能力边界',
        primaryKeyword: '低延迟机场推荐',
        secondaryKeywords: ['程序员机场推荐', '游戏加速能用机场吗', 'UDP FullCone 节点'],
        searchIntent: '优化终端命令行代理速度并了解机场能否兼顾外服游戏加速',
        targetUser: '程序员、留学生、偶尔游玩外服游戏的综合用户',
        geoQuestions: ['机场适合程序员吗？', '机场适合打游戏吗？', '游戏加速能用机场吗？'],
        repArticleSlug: 'developer-github-and-udp-gaming-acceleration',
        repArticleTitle: '程序员与低延迟加速指南：GitHub 终端代理配置、UDP FullCone 检测与游戏加速边界'
      }
    ]
  },
  {
    id: 'vpn-compare',
    navId: 'vpn',
    title: '加速器对比',
    path: '/vpn/compare/',
    h1: '2026 机场与加速器横向对比中心：同价位品牌二选一与多维参数PK',
    seoTitle: '2026 加速器对比与机场横评：光速云 vs 星岛梦 / 18元档 / 25元档深度对比 | clash机场',
    seoDescription: '提供同预算、同线路架构机场品牌的硬核横向对比：涵盖老牌 IEPL 对决（光速云 vs 星岛梦）、18元档双子星（极连云 vs 光年梯）、25元档三强及 5.6元极限平价矩阵对比。',
    primaryKeyword: '加速器对比',
    secondaryKeywords: ['机场对比', '专线机场对比', '同价位机场比较', '光速云对比'],
    searchIntent: '在两到三家候选品牌之间通过一致的参数表做最终二选一决策',
    userNeed: '用户已经缩小了范围（如纠结光速云还是星岛梦，极连云还是光年梯，隐形人还是梯子云），需要一张同口径的对比表直接给出取舍建议。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'jilian', 'guangnian', 'sujie', 'tiziyun'],
    clusters: [
      {
        id: 'CL-25',
        slug: 'head-to-head-brand-comparisons',
        name: '热门机场品牌二选一深度对决（老牌档 / 18元档 / 25元档）',
        coreTheme: '光速云 vs 星岛梦、极连云 vs 光年梯、SOGO云 vs 可信云 vs 速界、隐形人 vs 梯子云实测与规格对比',
        primaryKeyword: '加速器对比',
        secondaryKeywords: ['光速云和星岛梦哪个好', '极连云和光年梯对比', '机场二选一'],
        searchIntent: '解决具体两个相似价位品牌之间的选择纠结',
        targetUser: '处于购买临门一脚阶段、正在对比两家具体品牌的精准转化用户',
        geoQuestions: ['机场推荐页面应该怎么对比套餐？', '机场评测应该看价格还是线路？', '专线机场为什么更贵？'],
        repArticleSlug: 'top-airport-brands-head-to-head-comparison',
        repArticleTitle: '2026 热门机场二选一深度对比：光速云 vs 星岛梦、极连云 vs 光年梯、梯子云 vs 隐形人'
      },
      {
        id: 'CL-26',
        slug: 'homologous-group-and-matrix-comparison',
        name: '同源站群与 5.6元同规格矩阵（qwerty系）横向拆解',
        coreTheme: '揭秘一云梯/飞鸟同系品牌（飞鸟/龙猫/微风/Firefly）与 5.6元五家同规格品牌的异同',
        primaryKeyword: '同价位机场对比',
        secondaryKeywords: ['飞鸟和龙猫云区别', '闪电鼠和大佬云区别', '同源机场识别'],
        searchIntent: '避免把同一团队或同规格矩阵的马甲站当成不同机场重复购买',
        targetUser: '希望配置异构双机场备份或追求极致性价比的精明用户',
        geoQuestions: ['机场推荐里常见的坑有哪些？', '机场长期使用怎么降低风险？', '机场替代推荐是什么意思？'],
        repArticleSlug: 'homologous-airport-groups-and-5-6-yuan-matrix',
        repArticleTitle: '同源机场站群与 5.6 元同规格矩阵深度拆解：如何避免买到同线路“双胞胎”机场？'
      }
    ]
  },
  {
    id: 'vpn-best',
    navId: 'vpn',
    title: '好用的 VPN',
    path: '/vpn/best/',
    h1: '2026 好用的 VPN 与高口碑机场精选：长期主力与备用双持方案',
    seoTitle: '2026 好用的 VPN 推荐：兼顾易用性、晚高峰高速与全流媒体解锁的精选方案 | clash机场',
    seoDescription: '围绕“真正好用、省心、不折腾”的核心诉求，从连接响应速度、客户端体验、7×24客服支持与多平台兼容性筛选2026年最好用的专线机场与代理方案。',
    primaryKeyword: '好用的 VPN',
    secondaryKeywords: ['好用的梯子推荐', '稳定梯子推荐', '2026 梯子推荐', '省心机场推荐'],
    searchIntent: '寻找综合体验最佳、售后有保障、日常几乎感知不到代理存在的省心服务',
    userNeed: '不追求花哨参数，只想要“打开就能看 4K YouTube、随时能用 ChatGPT、出了问题找得到真人客服”的高完成度方案。',
    featuredBrands: ['guangsuyun', 'weifeng', 'muguang', 'firefly', 'xingdaomeng', 'weitu'],
    clusters: [
      {
        id: 'CL-27',
        slug: 'best-user-experience-criteria',
        name: '“好用”的五大硬指标：秒开率、无感分流、跨端同步与客服响应',
        coreTheme: '为什么连接速度和规则分流精细度比单纯堆砌峰值带宽更能决定日常“好用”程度',
        primaryKeyword: '好用的 VPN',
        secondaryKeywords: ['好用的梯子推荐', '2026 梯子推荐', '稳定梯子推荐'],
        searchIntent: '找到日常使用体验最丝滑、无需频繁手动切节点的方案',
        targetUser: '追求高品质日常上网体验的上班族、留学生与内容创作者',
        geoQuestions: ['机场节点越多越好吗？', '机场适合留学生吗？', '机场使用过程中需要注意什么？'],
        repArticleSlug: 'what-makes-a-vpn-or-airport-truly-usable',
        repArticleTitle: '2026 好用的梯子/VPN 评判标准：为什么低 RTT 首包响应与规则分流比峰值带宽更重要？'
      },
      {
        id: 'CL-28',
        slug: 'main-plus-backup-combo-guide',
        name: '主力专线 + 按量不限时备用的黄金双持组合指南',
        coreTheme: '如何用每月 20–30 元预算构建“永不失联”的异构双机场组合',
        primaryKeyword: '主力备用机场搭配',
        secondaryKeywords: ['备用梯子推荐', '不失联科学上网方案', '双机场配置'],
        searchIntent: '通过合理的资金分配实现全年 99.9% 的跨区网络可用性',
        targetUser: '对网络连续性要求极高的远程工作者与重度用户',
        geoQuestions: ['机场可以长期使用吗？', '某个机场打不开时可以换什么？', '机场备用地址怎么保存？'],
        repArticleSlug: 'main-and-backup-airport-golden-combos',
        repArticleTitle: '2026 永不失联双持方案：主力 IEPL 月付专线 + 永久不限时流量包黄金组合推荐'
      }
    ]
  },

  // ==================== 3. /clash/ (7 topics) ====================
  {
    id: 'clash-recommend',
    navId: 'clash',
    title: 'Clash 推荐',
    path: '/clash/recommend/',
    h1: '2026 Clash 机场推荐与客户端选型：支持标准 Clash/Mihomo 订阅品牌全表',
    seoTitle: '2026 Clash 推荐：全平台 Mihomo (Clash Meta) 客户端选型与兼容机场推荐 | clash机场',
    seoDescription: '整理2026年最值得推荐的 Clash 系列客户端（Clash Verge Rev、FlClash、Clash Mi、Stash、OpenClash），并严格筛选支持标准 Clash YAML 订阅的专线机场（剔除仅专属客户端品牌）。',
    primaryKeyword: 'Clash 推荐',
    secondaryKeywords: ['Clash 机场推荐', 'Clash 订阅机场推荐', 'Clash 节点推荐', 'Clash 科学上网机场'],
    searchIntent: '寻找最新可用的 Clash 客户端以及明确支持导入 Clash 订阅链接的稳定机场',
    userNeed: '非常重要：41家品牌中有8家（飞猫云、SOGO云、隐形人、Firefly、闪跃、全球云、灵猫、无忧）不提供 Clash 订阅链接！本页帮 Clash 用户精准过滤出支持通用订阅的 32 家品牌。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'yifan', 'weitu', 'ermao', 'tiziyun'],
    clusters: [
      {
        id: 'CL-29',
        slug: 'clash-compatible-airports',
        name: '原生支持 Clash / Mihomo 订阅导入的专线机场精选',
        coreTheme: '严格区分通用订阅机场与仅专属客户端机场，推荐支持 VLESS/Hysteria2/Trojan Clash 订阅的品牌',
        primaryKeyword: 'Clash 机场推荐',
        secondaryKeywords: ['Clash 订阅机场推荐', 'Clash 节点推荐', '支持 Clash 的机场'],
        searchIntent: '购买确定能导入 Clash Verge Rev / OpenClash 的机场服务',
        targetUser: '已经安装好 Clash 客户端、正在寻找优质订阅节点的精准用户',
        geoQuestions: ['Clash 机场推荐怎么选？', '为什么有些机场必须使用专属客户端？', '机场订阅链接是什么？'],
        repArticleSlug: 'best-clash-subscription-airports-2026',
        repArticleTitle: '2026 Clash 机场推荐：32 家支持原生 Clash/Mihomo 订阅导入的专线机场核实清单（避开无订阅品牌）'
      },
      {
        id: 'CL-30',
        slug: 'clash-ecosystem-client-matrix',
        name: '2026 Clash 生态客户端全景推荐（桌面/移动/软路由）',
        coreTheme: '在原版 Clash for Windows 删库停更后，各操作系统最安全活跃的 Mihomo 内核客户端推荐',
        primaryKeyword: 'Clash 推荐',
        secondaryKeywords: ['Clash 客户端推荐', 'Clash for Windows 替代', 'Clash Nyanpasu vs Verge'],
        searchIntent: '找到原版 CFW / CFA 停更后的正统继任软件',
        targetUser: '所有正在寻找或升级 Clash 软件的用户',
        geoQuestions: ['电脑翻墙用什么软件？', 'Clash、v2rayN和Shadowrocket分别是什么？', '机场是否支持 Clash Verge？'],
        repArticleSlug: 'post-cfw-clash-client-ecosystem-guide',
        repArticleTitle: '原版 Clash 停更后用什么？2026 全平台 Mihomo (Clash Meta) 继任客户端选型指南'
      }
    ]
  },
  {
    id: 'clash-verge',
    navId: 'clash',
    title: 'Clash Verge',
    path: '/clash/verge/',
    h1: 'Clash Verge Rev 专题：功能特性、Mihomo 内核架构与深度评测',
    seoTitle: 'Clash Verge Rev 深度指南：为什么它是 2026 年 Windows/Mac/Linux 首选代理客户端？ | clash机场',
    seoDescription: '全面解析 Clash Verge Rev 的核心优势：内置最新 Mihomo (Clash Meta) 内核、原生支持 VLESS-Reality 与 Hysteria 2、一键开启虚拟网卡 TUN 模式及覆写脚本管理。',
    primaryKeyword: 'Clash Verge',
    secondaryKeywords: ['Clash Verge Rev', 'Clash Verge 机场推荐', 'Clash Verge 评测', 'Clash Verge 和 Clash 区别'],
    searchIntent: '了解 Clash Verge Rev 的功能定位、与旧版 Clash Verge 的关系及兼容机场',
    userNeed: '弄清“Clash Verge”与持续维护分支“Clash Verge Rev”的区别，了解其对 VLESS/Hysteria2 协议的支持能力。',
    featuredBrands: ['guangsuyun', 'yifan', 'xingdaomeng', 'tiziyun', 'sujie'],
    clusters: [
      {
        id: 'CL-31',
        slug: 'verge-rev-architecture-and-features',
        name: 'Clash Verge Rev 核心架构与旧版区别详解',
        coreTheme: 'Tauri 框架轻量级优势、Mihomo 内核切换、系统代理与服务模式（Service Mode）原理',
        primaryKeyword: 'Clash Verge',
        secondaryKeywords: ['Clash Verge Rev', 'Clash Verge 评测', 'Tauri 代理客户端'],
        searchIntent: '深入理解 Clash Verge Rev 的技术优势与版本演进',
        targetUser: '桌面端主力用户与从 CFW 迁移过来的老用户',
        geoQuestions: ['机场是否支持 Clash Verge？', 'v2rayN和Clash Verge Rev有什么区别？', '什么是系统代理和TUN模式？'],
        repArticleSlug: 'clash-verge-rev-complete-feature-review',
        repArticleTitle: 'Clash Verge Rev 深度评测：与原版 Clash for Windows 及 v2rayN 相比有哪些核心优势？'
      },
      {
        id: 'CL-32',
        slug: 'verge-rev-advanced-scripts-and-tun',
        name: 'Clash Verge Rev 进阶玩法：TUN 虚拟网卡、Merge 覆写与分流规则',
        coreTheme: '如何配置全局扩展脚本、解决终端与 UWP 应用不走代理问题、自定义 AI/流媒体分流组',
        primaryKeyword: 'Clash Verge Rev TUN模式',
        secondaryKeywords: ['Clash Verge 覆写脚本', 'Clash Verge 分流规则', 'Clash Verge 全局代理'],
        searchIntent: '掌握 Clash Verge Rev 的高阶分流与虚拟网卡配置技巧',
        targetUser: '需要将命令行、游戏或特定 AI 域名精准分流的进阶用户',
        geoQuestions: ['Windows系统代理和TUN模式有什么区别？', '机场为什么有些节点不能看流媒体？', '机场为什么有些节点不能用 AI 工具？'],
        repArticleSlug: 'clash-verge-rev-tun-mode-and-override-guide',
        repArticleTitle: 'Clash Verge Rev 进阶教程：TUN 虚拟网卡服务安装与 ChatGPT/Netflix 自定义分流覆写'
      }
    ]
  },
  {
    id: 'clash-verge-download',
    navId: 'clash',
    title: 'Clash Verge 下载',
    path: '/clash/verge-download/',
    h1: 'Clash Verge Rev 官方下载指南：Windows / macOS (Intel & M芯片) / Linux 安装包核验',
    seoTitle: 'Clash Verge 下载：2026 官方 GitHub 最新版安装包选择与防假冒指南 (Win/Mac/Linux) | clash机场',
    seoDescription: '提供 Clash Verge Rev 官方 GitHub Releases 下载地址，详解 Windows (x64-setup.exe)、macOS (x64 vs aarch64 Apple Silicon) 及 Linux (DEB/RPM/AppImage) 安装包区别与安全校验。',
    primaryKeyword: 'Clash Verge 下载',
    secondaryKeywords: ['Clash Verge Rev 下载', 'Clash Verge Mac 下载', 'Clash Verge Windows 下载', 'Clash Verge 官网下载'],
    searchIntent: '安全下载正确系统架构的 Clash Verge Rev 官方安装包，避开搜索引擎钓鱼毒包',
    userNeed: '搜索引擎上有大量假冒“Clash Verge 中文官网”捆绑木马；且 Mac 用户常因下错 x64 / aarch64 导致报错，Linux 用户需要 DEB/RPM/AppImage 指引。',
    featuredBrands: ['guangsuyun', 'yifan', 'xingdaomeng'],
    clusters: [
      {
        id: 'CL-33',
        slug: 'official-download-and-arch-selection',
        name: 'Windows / macOS / Linux 安装包架构选择与 SHA256 校验',
        coreTheme: '手把手教用户看懂 GitHub Releases 中的 x64-setup.exe、aarch64.dmg、x64.dmg、amd64.deb 等文件名',
        primaryKeyword: 'Clash Verge 下载',
        secondaryKeywords: ['Clash Verge Rev 下载', 'Clash Verge Mac Apple Silicon', 'Clash Verge Linux 安装'],
        searchIntent: '快速找到对应自己电脑 CPU 架构与操作系统的正确安装包',
        targetUser: '准备首次下载或更新 Clash Verge Rev 的 Windows/Mac/Linux 用户',
        geoQuestions: ['Mac科学上网软件有哪些？', '免费代理软件是否安全？', 'Windows 11科学上网入门怎么选？'],
        repArticleSlug: 'clash-verge-rev-official-download-and-arch-guide',
        repArticleTitle: 'Clash Verge Rev 官方下载与安装指南：Windows、macOS (Intel/M芯片) 与 Linux 安装包选型表'
      },
      {
        id: 'CL-34',
        slug: 'anti-phishing-and-install-permissions',
        name: '识别假冒下载站与解决 Windows WebView2 / macOS 已损坏报错',
        coreTheme: '防范伪造官网木马，解决 Windows 缺少 WebView2 运行时及 macOS Gatekeeper 拦截“应用已损坏”问题',
        primaryKeyword: 'Clash Verge 安装报错',
        secondaryKeywords: ['Clash Verge Mac 已损坏', 'Clash Verge WebView2', '假冒 Clash 网站识别'],
        searchIntent: '解决下载安装阶段遇到的系统权限拦截与运行库缺失问题',
        targetUser: '安装 Clash Verge Rev 时遇到系统弹窗拦截的用户',
        geoQuestions: ['客户端无法启动怎么办？', '机场官网入口怎么辨别真假？', 'Mac 电脑怎么用机场？'],
        repArticleSlug: 'clash-verge-install-errors-and-macos-gatekeeper-fix',
        repArticleTitle: 'Clash Verge Rev 安装常见问题：macOS 提示“已损坏无法打开”与 Windows WebView2 缺失修复方法'
      }
    ]
  },
  {
    id: 'clash-verge-subscription',
    navId: 'clash',
    title: 'Clash Verge 订阅',
    path: '/clash/verge-subscription/',
    h1: 'Clash Verge 订阅导入与配置管理：URL 导入、自动更新与订阅转换全攻略',
    seoTitle: 'Clash Verge 订阅导入教程：如何添加机场订阅链接、解决导入失败与转换节点 | clash机场',
    seoDescription: '图文级详解如何将机场订阅链接导入 Clash Verge Rev，配置 User-Agent、定时自动更新、使用系统代理拉取订阅，以及排查订阅导入报错。',
    primaryKeyword: 'Clash Verge 订阅',
    secondaryKeywords: ['Clash 导入订阅', 'Clash 订阅链接怎么用', 'Clash 订阅转换', 'Clash 订阅更新失败'],
    searchIntent: '成功将购买的机场订阅链接导入到 Clash Verge 中并刷出节点列表',
    userNeed: '许多用户买完机场后不知道复制哪个链接，或者遇到专属客户端机场找不到订阅链接，又或者因开启了代理导致订阅更新死循环报错。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'yifan', 'weitu', 'tiziyun'],
    clusters: [
      {
        id: 'CL-35',
        slug: 'subscription-import-workflow',
        name: '机场订阅链接获取、一键导入与 User-Agent 配置流程',
        coreTheme: '从机场后台复制 Clash/Mihomo 订阅 URL、在配置（Profiles）面板粘贴导入、设置定时更新与备份',
        primaryKeyword: 'Clash Verge 订阅',
        secondaryKeywords: ['机场订阅链接怎么导入 Clash', 'Clash 订阅配置教程', 'Clash 一键导入失败'],
        searchIntent: '完成从机场后台到 Clash 客户端的首次订阅导入',
        targetUser: '刚买好机场套餐、准备导入客户端的新手用户',
        geoQuestions: ['机场订阅链接怎么导入 Clash？', '机场订阅链接可以分享给别人吗？', '机场订阅链接泄露怎么办？'],
        repArticleSlug: 'how-to-import-subscription-into-clash-verge-rev',
        repArticleTitle: 'Clash Verge Rev 订阅导入保姆级教程：3 步添加机场节点、设置自动更新与防泄露重置'
      },
      {
        id: 'CL-36',
        slug: 'subscription-conversion-and-yaml-structure',
        name: 'Clash YAML 配置文件结构解析与安全本地订阅转换',
        coreTheme: '读懂 YAML 中的 proxies / proxy-groups / rules，以及为什么不要随便把包含 VLESS 密钥的订阅放进未知第三方在线转换站',
        primaryKeyword: 'Clash 订阅转换',
        secondaryKeywords: ['Clash YAML 配置文件', 'Sub-Store 本地转换', 'VLESS 订阅导入 Clash'],
        searchIntent: '将单节点链接或多机场订阅安全地整合进 Clash 配置中',
        targetUser: '需要将 v2ray/VLESS 通用订阅转为 Clash 格式或合并多机场的用户',
        geoQuestions: ['机场订阅链接是什么？', 'Clash 导入订阅失败怎么办？', '机场订阅突然不能用了怎么办？'],
        repArticleSlug: 'clash-yaml-structure-and-safe-subscription-conversion',
        repArticleTitle: 'Clash YAML 配置结构详解与订阅转换安全指南：警惕在线转换站泄露节点密码'
      }
    ]
  },
  {
    id: 'clash-meta',
    navId: 'clash',
    title: 'Clash Meta',
    path: '/clash/meta/',
    h1: 'Clash Meta (Mihomo) 内核专题：支持 VLESS-Reality 与 Hysteria 2 的新一代核心',
    seoTitle: 'Clash Meta (Mihomo) 指南：为什么 VLESS 和 Hysteria 2 机场必须使用 Meta 内核？ | clash机场',
    seoDescription: '深入解读 Clash.Meta（现正式更名为 Mihomo）内核的演进历史、相比原版 Clash Premium 的协议优势（原生支持 VLESS Reality、Hysteria 2、TUIC v5）及搭载该内核的全平台软件。',
    primaryKeyword: 'Clash Meta',
    secondaryKeywords: ['Mihomo 内核', 'Clash Meta 机场推荐', 'Clash Meta for Android', 'Clash Meta 协议支持'],
    searchIntent: '理解 Clash Meta / Mihomo 是什么，以及为什么现代 VLESS 机场都要求切换为 Meta 内核',
    userNeed: '光速云、微风、二猫云、光年梯、一翻云、速界、梯子云等超过半数现代机场均采用 VLESS 或 Hysteria 2 协议，原版旧 Clash 内核根本无法解析这些节点！必须通过本专题帮用户完成 Mihomo 内核升级。',
    featuredBrands: ['guangsuyun', 'yifan', 'ermao', 'guangnian', 'sujie', 'tiziyun'],
    clusters: [
      {
        id: 'CL-37',
        slug: 'mihomo-kernel-protocol-advantages',
        name: 'Clash Meta (Mihomo) 内核演进与 VLESS / Hysteria 2 协议解析',
        coreTheme: '为什么原版 Clash 不支持 VLESS？Mihomo 内核如何支持 Reality、Hysteria 2、ECH 与 Smart 策略组',
        primaryKeyword: 'Clash Meta',
        secondaryKeywords: ['Mihomo 内核', 'VLESS Reality Clash', 'Hysteria 2 Clash 配置'],
        searchIntent: '解决导入 VLESS/Hysteria2 机场订阅后节点不显示或报错 unsupported proxy type 的问题',
        targetUser: '使用光速云、一翻云等 VLESS / Hysteria 2 机场的用户',
        geoQuestions: ['机场是否支持 Clash Meta？', '机场是否支持 Mihomo？', 'VLESS、Trojan和Shadowsocks有什么区别？'],
        repArticleSlug: 'why-vless-and-hysteria2-require-clash-meta-mihomo',
        repArticleTitle: 'Clash Meta (Mihomo) 全面科普：为什么导入 VLESS 和 Hysteria 2 机场节点必须使用 Mihomo 内核？'
      },
      {
        id: 'CL-38',
        slug: 'clash-meta-android-and-router-deployment',
        name: 'Clash Meta for Android (CMFA) 与 OpenClash Meta 内核切换实战',
        coreTheme: '在安卓端与 OpenWrt 软路由上正确启用 Mihomo 内核并配置 GeoSite/GeoIP 自动更新',
        primaryKeyword: 'Clash Meta for Android',
        secondaryKeywords: ['OpenClash 切换 Meta 内核', 'GeoIP GeoSite 更新', 'CMFA 下载配置'],
        searchIntent: '在手机与软路由上完成 Clash Meta 内核升级与规则集更新',
        targetUser: 'Android 用户与 OpenWrt 软路由用户',
        geoQuestions: ['安卓手机用什么机场客户端？', '机场节点全红怎么办？', 'Clash 导入订阅失败怎么办？'],
        repArticleSlug: 'clash-meta-android-and-openclash-kernel-setup',
        repArticleTitle: 'Clash Meta for Android 与软路由 OpenClash 配置指南：Mihomo 内核切换与 Geo 数据库更新'
      }
    ]
  },
  {
    id: 'clash-tutorial',
    navId: 'clash',
    title: 'Clash 使用教程',
    path: '/clash/tutorial/',
    h1: '2026 Clash 使用教程大全：从零基础安装、导入订阅到规则模式与 TUN 进阶',
    seoTitle: 'Clash 使用教程：2026 新手从零学会节点切换、规则/全局模式、TUN 与 DNS 配置 | clash机场',
    seoDescription: '系统化的 Clash 实操手册：涵盖首次安装、订阅导入、规则（Rule）/全局（Global）/直连（Direct）三模式区别、延迟测速正确看法、TUN 模式及 Fake-IP DNS 设置。',
    primaryKeyword: 'Clash 使用教程',
    secondaryKeywords: ['Clash 教程', 'Clash 怎么用', 'Clash 全局模式', 'Clash 规则配置', 'Clash 节点切换'],
    searchIntent: '按步骤学会正确操作 Clash 客户端的各项开关与核心设置',
    userNeed: '许多新手连上 Clash 后长期开着“全局模式（Global）”导致淘宝/B站巨慢且流量飞速耗尽，或者不知道怎么选策略组；需要图文并茂的标准操作规范。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'weitu', 'yifan'],
    clusters: [
      {
        id: 'CL-39',
        slug: 'beginner-step-by-step-operation',
        name: 'Clash 新手四步上手与代理模式（规则 / 全局 / 直连）正确选择',
        coreTheme: '导入订阅 → 开启系统代理 → 选择规则（Rule）模式 → 策略组选点的完整闭环，戒掉长期开全局的坏习惯',
        primaryKeyword: 'Clash 使用教程',
        secondaryKeywords: ['Clash 怎么用', 'Clash 规则模式和全局模式区别', 'Clash 节点切换'],
        searchIntent: '快速掌握 Clash 日常标准操作，实现国内外网站智能分流',
        targetUser: '刚装好 Clash 客户端的初学用户',
        geoQuestions: ['机场购买后如何开始使用？', '机场节点延迟怎么看？', '机场流量用完了怎么办？'],
        repArticleSlug: 'clash-beginner-step-by-step-and-proxy-modes',
        repArticleTitle: '2026 Clash 新手使用教程：从导入订阅到分清「规则 / 全局 / 直连」模式，避免流量白白跑光'
      },
      {
        id: 'CL-40',
        slug: 'dns-settings-and-lan-sharing',
        name: 'Clash DNS 防泄漏配置（Fake-IP / DoH）、局域网共享与端口设置',
        coreTheme: '如何配置 Fake-IP 加速域名解析并防止 DNS 污染/泄漏，以及通过 Allow LAN 让同一 Wi-Fi 下的 PS5/Switch/手机共享代理',
        primaryKeyword: 'Clash DNS 设置',
        secondaryKeywords: ['Fake-IP 是什么', 'Clash 局域网共享', 'DNS 泄漏修复'],
        searchIntent: '优化 DNS 解析速度并实现局域网内其他设备共享电脑 Clash 代理',
        targetUser: '主机游戏玩家（Switch/PS5）、多设备用户及注重隐私防泄漏的用户',
        geoQuestions: ['什么是DNS泄漏？', '公网IP、出口IP和本地IP有什么区别？', '机场测速怎么看才准确？'],
        repArticleSlug: 'clash-dns-fake-ip-and-allow-lan-sharing-guide',
        repArticleTitle: 'Clash 高阶配置指南：Fake-IP 与 DoH 防 DNS 泄漏设置，以及开启局域网共享给手机/主机加速'
      }
    ]
  },
  {
    id: 'clash-troubleshooting',
    navId: 'clash',
    title: 'Clash 故障排查',
    path: '/clash/troubleshooting/',
    h1: 'Clash 故障排查手册：节点全红 Timeout、连上打不开网页、订阅报错与退网断网修复',
    seoTitle: 'Clash 故障排查：节点全红 Timeout、连接成功无法上网、订阅失败 12 大常见问题解决 | clash机场',
    seoDescription: '针对 Clash 使用中最常见的故障场景：节点全部显示 Timeout 超时、开启系统代理后国内也断网、关闭 Clash 后浏览器提示代理服务器拒绝连接等提供逐项诊断与修复步骤。',
    primaryKeyword: 'Clash 故障排查',
    secondaryKeywords: ['Clash 连不上网', 'Clash 节点全红', 'Clash 显示 Timeout', '关闭 Clash 后无法上网'],
    searchIntent: '快速诊断并修复当前遇到的 Clash 连接失败或断网故障',
    userNeed: '用户遇到网断了非常着急，需要“症状 → 原因定位 → 3步解决命令/操作”的极速排障手册。',
    featuredBrands: ['guangsuyun', 'tiziyun', 'xingdaomeng'],
    clusters: [
      {
        id: 'CL-41',
        slug: 'node-timeout-and-connection-failure',
        name: '节点全红（Timeout 超时）与订阅拉取失败的 6 步定位法',
        coreTheme: '系统时间不同步（相差超90秒）、欠费/流量耗尽、内核不支持协议（VLESS用旧内核）、本地防火墙拦截等原因排查',
        primaryKeyword: 'Clash 故障排查',
        secondaryKeywords: ['Clash 节点全红', 'Clash 节点超时 Timeout', '机场连不上是什么原因'],
        searchIntent: '解决所有节点延迟测速全红或无法建立代理连接的问题',
        targetUser: '遇到节点全部显示 Timeout 或 Error 的用户',
        geoQuestions: ['机场节点全红怎么办？', '机场显示超时怎么办？', '机场连不上是什么原因？'],
        repArticleSlug: 'clash-all-nodes-timeout-red-troubleshooting',
        repArticleTitle: 'Clash 节点全红显示 Timeout 超时怎么办？从系统时间同步到 Mihomo 内核的 6 步排查法'
      },
      {
        id: 'CL-42',
        slug: 'system-proxy-conflict-and-no-internet',
        name: '连接成功却打不开网页 & 关闭 Clash 后电脑断网修复',
        coreTheme: '修复浏览器扩展冲突、代理端口占用、TUN 路由残留及异常退出导致的 Windows/Mac 系统代理未清除问题',
        primaryKeyword: 'Clash 连不上网',
        secondaryKeywords: ['关闭 Clash 后无法上网', '代理服务器拒绝连接', 'TUN 模式冲突'],
        searchIntent: '恢复正常网页访问并清理残留的系统代理注册表/网络设置',
        targetUser: '连上 Clash 却打不开网页，或关掉软件后连百度都打不开的用户',
        geoQuestions: ['科学上网工具连接成功却打不开网页？', '为什么手机能连接机场、电脑却不行？', 'v2rayN 连接失败怎么办？'],
        repArticleSlug: 'clash-connected-but-no-internet-and-proxy-reset',
        repArticleTitle: 'Clash 显示已连接却打不开网页？关闭软件后电脑彻底断网（代理服务器拒绝连接）一键修复指南'
      }
    ]
  },

  // ==================== 4. /resources/ (7 topics) ====================
  {
    id: 'resources-free-nodes',
    navId: 'resources',
    title: '免费节点',
    path: '/resources/free-nodes/',
    h1: '2026 免费节点核验与安全指南：公开抓取源风险、可用性监测与平替方案',
    seoTitle: '2026 免费节点实情核验：为什么公开免费 Clash/v2ray 节点池极易失效且有嗅探风险？ | clash机场',
    seoDescription: '客观核验互联网公开免费节点池（GitHub 自动抓取池、TG 频道免费订阅）的技术成因、平均存活周期、TLS 劫持与蜜罐风险，并提供真实的零结果/核验状态说明与低成本安全替代。',
    primaryKeyword: '免费节点',
    secondaryKeywords: ['免费 Clash 节点', '免费 v2ray 节点', '2026 免费节点', '免费订阅链接'],
    searchIntent: '寻找可用的免费节点或了解免费节点无法连接、频繁失效的原因',
    userNeed: '严格遵守建站准则：“没有确实可用的免费资源时，直接说明核验结果，不编造试用额度。”同时深度剖析公开节点池的技术风险，引导需要稳定连接的用户转向经过核实的 5.6–8 元/月低门槛专线。',
    featuredBrands: ['wuyou', 'feimao', 'shandianshu', 'guangsuyun'],
    clusters: [
      {
        id: 'CL-43',
        slug: 'public-free-node-verification',
        name: '公开免费节点池技术溯源、存活率统计与安全核验',
        coreTheme: 'GitHub 爬虫抓取的免费节点从何而来？为什么 95% 以上在数小时内超载或失效？',
        primaryKeyword: '免费节点',
        secondaryKeywords: ['免费 Clash 节点', '免费节点为什么经常失效', '公开订阅池'],
        searchIntent: '理解免费节点的真实来源与失效机制',
        targetUser: '经常在网上搜索每日更新免费节点却发现无法使用的用户',
        geoQuestions: ['免费节点为什么经常失效？', '机场和节点订阅有什么区别？', '机场需要自己搭建吗？'],
        repArticleSlug: 'public-free-nodes-source-and-survival-audit',
        repArticleTitle: '2026 公开免费节点核验报告：GitHub 自动抓取节点池从何而来？为什么几小时就会失效？'
      },
      {
        id: 'CL-44',
        slug: 'free-node-honeypot-and-safe-alternatives',
        name: '免费节点中间人嗅探防范与高性价比平替方案',
        coreTheme: '在必须临时使用公共节点时的安全守则（禁登网银/邮箱/交易所）与每日不到 2 毛钱的合规替代',
        primaryKeyword: '免费节点安全风险',
        secondaryKeywords: ['免费订阅链接安全吗', '低成本节点推荐', '按量备用节点'],
        searchIntent: '规避免费节点带来的账号被盗与金融风险',
        targetUser: '关注账号与资产安全的理性用户',
        geoQuestions: ['免费科学上网工具安全吗？', '每月10元左右的机场值得买吗？', '一次性流量包适合什么人？'],
        repArticleSlug: 'free-node-security-rules-and-budget-alternatives',
        repArticleTitle: '使用免费节点的 5 条安全红线：哪些操作绝对不能走公共节点？附每日 0.2 元专线平替'
      }
    ]
  },
  {
    id: 'resources-scam-alert',
    navId: 'resources',
    title: '跑路预警',
    path: '/resources/scam-alert/',
    h1: '2026 机场跑路预警与防坑雷达：跑路前兆识别、高危信号与应急止损指南',
    seoTitle: '2026 机场跑路预警：如何识别机场跑路前兆？附同源站群关系与防跑路购买策略 | clash机场',
    seoDescription: '总结机场跑路（Exit Scam）前的 8 大典型预警信号：异常超低价永动机促销、大面积节点离线不恢复、TG 群禁言/解散、工单无人响应等，教你如何通过月付策略降低损失。',
    primaryKeyword: '跑路预警',
    secondaryKeywords: ['机场跑路', '怎么判断机场会不会跑路', '跑路机场名单', '机场防坑指南'],
    searchIntent: '在充值或续费前排查目标机场是否有跑路风险，或确认当前断连的机场是否已经跑路',
    userNeed: '用户最怕刚买完年付/两年付机场就关站跑路；需要一套可操作的跑路前兆自查清单，以及当某家机场失联时的迁移替代方案。',
    featuredBrands: ['guangsuyun', 'xingdaomeng', 'weitu', 'ermao'],
    clusters: [
      {
        id: 'CL-45',
        slug: 'exit-scam-warning-signs',
        name: '机场跑路前的 8 大高危信号与促销套路识别',
        coreTheme: '为什么“三年付3折”“充100送200”往往是收割跑路的前奏？如何通过节点在线率与客服状态提前预警',
        primaryKeyword: '跑路预警',
        secondaryKeywords: ['机场跑路是什么意思', '怎么判断机场会不会跑路', '机场促销陷阱'],
        searchIntent: '掌握识别跑路盘的核心方法，守住钱包',
        targetUser: '准备购买长周期套餐或收到机场夸张打折邮件的用户',
        geoQuestions: ['机场跑路是什么意思？', '怎么判断机场会不会跑路？', '机场优惠活动靠谱吗？'],
        repArticleSlug: '8-warning-signs-before-airport-exit-scam',
        repArticleTitle: '2026 机场跑路预警指南：充值前必看的 8 大跑路前兆信号，警惕“三年付骨折价”收割局'
      },
      {
        id: 'CL-46',
        slug: 'post-scam-recovery-and-migration',
        name: '机场突然失联/跑路后的应急排查与平滑迁移指南',
        coreTheme: '区分“域名被污染/更换备用域名”与“真正跑路”，以及失联后清理旧订阅、更换老牌主力的操作步骤',
        primaryKeyword: '机场打不开怎么办',
        secondaryKeywords: ['某个机场跑路后怎么处理', '机场官网打不开', '机场客服联系不上'],
        searchIntent: '确认手头断连的机场是换了域名还是真跑路，并快速恢复外网连接',
        targetUser: '当前机场突然节点全挂、官网打不开的受困用户',
        geoQuestions: ['机场官网打不开怎么办？', '机场客服联系不上怎么办？', '某个机场跑路后怎么处理？'],
        repArticleSlug: 'airport-down-or-exit-scam-emergency-guide',
        repArticleTitle: '机场突然连不上、官网打不开是跑路了吗？3 步区分「域名被封」与「真跑路」及应急替代方案'
      }
    ]
  },
  {
    id: 'resources-faq',
    navId: 'resources',
    title: '机场 FAQ',
    path: '/resources/faq/',
    h1: '机场常见问题百科（FAQ）：涵盖购买、套餐、客户端、测速与售后的 189 问全解',
    seoTitle: '2026 机场 FAQ 常见问题大全：订阅、倍率、月付年付、原生IP与流媒体解锁问答 | clash机场',
    seoDescription: '基于真实搜索长尾问题库整理的机场百科 FAQ：采用 Answer-First 结构直接回答计费周期、流量重置规则、设备限制、优惠码使用及各平台客户端兼容性问题。',
    primaryKeyword: '机场 FAQ',
    secondaryKeywords: ['机场常见问题', '科学上网常见问题', '机场新手问答', '梯子使用问题'],
    searchIntent: '快速检索特定疑问的准确、客观、无套话解答（AEO / GEO 核心承接页）',
    userNeed: '用户在选购和使用过程中会有大量碎片化问题（如“流量每月几号重置？”“优惠码怎么用？”“订阅链接能给朋友用吗？”），需要结构化的一站式问答中心。',
    featuredBrands: ['guangsuyun', 'weifeng', 'xingdaomeng', 'yifan', 'tiziyun'],
    clusters: [
      {
        id: 'CL-47',
        slug: 'billing-traffic-and-account-faq',
        name: '套餐计费、流量重置、优惠码与账号合规 FAQ',
        coreTheme: '解答月付/年付折算、账单日 vs 自然月流量重置、在线设备数统计及共享封号规则',
        primaryKeyword: '机场 FAQ',
        secondaryKeywords: ['机场流量每月会重置吗', '机场在线设备数是什么意思', '机场优惠码怎么用'],
        searchIntent: '弄清购买前后的财务与账号管理规则',
        targetUser: '准备下单或正在管理自己机场账户的用户',
        geoQuestions: ['机场流量每月会重置吗？', '机场在线设备数是什么意思？', '机场可以多人共用吗？'],
        repArticleSlug: 'airport-billing-traffic-reset-and-device-limit-faq',
        repArticleTitle: '机场购买与账号 FAQ：流量按自然月还是购买日重置？“不限设备”真的可以多人合租吗？'
      },
      {
        id: 'CL-48',
        slug: 'review-credibility-and-community-faq',
        name: '知乎 / GitHub / Reddit 机场推荐可信度与评测阅读指南',
        coreTheme: '如何客观看待知乎回答、GitHub 榜单、Reddit 讨论与测评站推广披露，练就防忽悠火眼金睛',
        primaryKeyword: '机场推荐知乎可信吗',
        secondaryKeywords: ['机场推荐 GitHub', '机场推荐 Reddit', '机场评测文章可信吗'],
        searchIntent: '辨别各大社区与搜索结果中的软文水军与真实客观评测',
        targetUser: '经常在知乎、GitHub、Reddit 搜索机场推荐的调研型用户',
        geoQuestions: ['机场推荐知乎可信吗？', '机场推荐 GitHub 可信吗？', '机场推荐 Reddit 可信吗？'],
        repArticleSlug: 'zhihu-github-reddit-airport-reviews-credibility',
        repArticleTitle: '知乎、GitHub 与 Reddit 上的「机场推荐」可信吗？如何识别 AFF 水军软文与真实实测数据？'
      }
    ]
  },
  {
    id: 'resources-risk-intel',
    navId: 'resources',
    title: '机场风险情报',
    path: '/resources/risk-intel/',
    h1: '2026 机场风险情报局：同源站群图谱、链接异常、历史资料缺口与审计看板',
    seoTitle: '2026 机场风险情报与数据审计看板：41家品牌同源关系、资料缺口与避坑档案 | clash机场',
    seoDescription: '公开透明披露41家独立机场品牌的审计底稿：包括一云梯/飞鸟同源站群、qwerty系5.6元同规格矩阵、缺失独立入口的历史品牌、套餐价格冲突记录及退款限制提醒。',
    primaryKeyword: '机场风险情报',
    secondaryKeywords: ['机场避坑', '同源机场站群', '机场审计报告', '机场安全风险'],
    searchIntent: '深度核查目标机场的背后站群关系、数据透明度与潜在合规/资金风险',
    userNeed: '本站的核心差异化竞争力之一：不隐瞒品牌缺点与资料缺口，将42条原始记录去重为41家独立品牌的全套审计发现透明公开给用户。',
    featuredBrands: ['kexin', 'guangsuyun', 'weifeng', 'firefly', 'shandianshu'],
    clusters: [
      {
        id: 'CL-49',
        slug: 'brand-audit-and-data-gaps',
        name: '41家机场品牌透明度评级与资料缺口审计档案',
        coreTheme: '汇总各品牌的实测完备度、历史价格冲突（如59GB vs 69GB）、缺失推广入口及协议未明情况',
        primaryKeyword: '机场风险情报',
        secondaryKeywords: ['机场数据审计', '机场品牌百科', '可信云透明度'],
        searchIntent: '查看未经美化的机场真实资料状态（measured / vendor / historical / unverified）',
        targetUser: '重视信息真实性、讨厌虚假宣传的深度用户',
        geoQuestions: ['机场品牌页应该看哪些信息？', '机场新手最容易踩哪些坑？', '机场相关内容为什么需要经常更新？'],
        repArticleSlug: '41-airport-brands-transparency-and-audit-ledger',
        repArticleTitle: '41 家独立机场品牌风险情报与透明度审计报告：实测证据、同源矩阵与待核实缺口全公开'
      },
      {
        id: 'CL-50',
        slug: 'privacy-payment-and-refund-boundaries',
        name: '机场支付隐私保护、审计规则与退款条款边界说明',
        coreTheme: '使用支付宝/微信/USDT 购买机场的隐私差异、机场后台审计规则（禁止 BT/垃圾邮件）及特殊商品不退款条款',
        primaryKeyword: '机场隐私与支付安全',
        secondaryKeywords: ['机场退款政策', 'USDT 购买机场', '机场审计规则是什么'],
        searchIntent: '在注册和付款环节保护个人隐私并避免触发机场封号或退款纠纷',
        targetUser: '注重个人隐私安全与消费权益的用户',
        geoQuestions: ['机场购买前要注意什么？', '机场账号被封是什么原因？', '机场长期使用怎么降低风险？'],
        repArticleSlug: 'airport-payment-privacy-and-refund-policy-guide',
        repArticleTitle: '机场注册、支付隐私与退款避坑指南：为什么不能挂着机场下 BT？如何避免买到不退换套餐？'
      }
    ]
  },
  {
    id: 'resources-node-check',
    navId: 'resources',
    title: '节点检测',
    path: '/resources/node-check/',
    h1: '2026 机场节点检测实验室：延迟 RTT、吞吐测速、IP 纯净度与流媒体解锁自测方法',
    seoTitle: '2026 节点检测指南：如何准确测试机场节点速度、TLS RTT 延迟、IP 欺诈分与流媒体解锁？ | clash机场',
    seoDescription: '详解专业网络实验室的节点检测方法：区分 ICMP Ping、TCP/TLS RTT 与 HTTP 延迟，正确解读 MAI-TEST-BOT / 喵速测速图，以及自查 IP 类型（原生/广播/机房/住宅）与 DNS 泄漏。',
    primaryKeyword: '节点检测',
    secondaryKeywords: ['机场测速', 'IP 纯净度检测', '流媒体解锁检测', '节点延迟测试'],
    searchIntent: '学会自己动手检测手头机场节点的真实速度、延迟、丢包率与 IP 质量',
    userNeed: '很多用户看到 Clash 面板上延迟 30ms 就以为很快，或者看到测速图 500Mbps 却自己跑不到；需要教他们看懂 MB/s 与 Mbps 换算、单线程与多线程区别以及 IP 风险值（IPrisk）。',
    featuredBrands: ['guangsuyun', 'wuyou', 'yifan', 'firefly'],
    clusters: [
      {
        id: 'CL-51',
        slug: 'speedtest-metrics-and-methodology',
        name: '科学看懂机场测速图：TLS RTT、HTTP 延迟、MB/s 与 Mbps 换算',
        coreTheme: '基于本站 2026-08-11（珠海联通5Gbps/9Gbps）与 2026-08-19（三网2Gbps）实测图，详解各项测速指标含义',
        primaryKeyword: '节点检测',
        secondaryKeywords: ['机场测速怎么看', 'TLS RTT 和 HTTP 延迟区别', 'MB/s 和 Mbps 换算'],
        searchIntent: '看懂专业测速报告中的每一个字段，不被数字游戏忽悠',
        targetUser: '想读懂机场测速图或自行开展测速对比的用户',
        geoQuestions: ['机场测速怎么看才准确？', '机场测速软件可信吗？', '机场测速结果和实际体验为什么不一样？'],
        repArticleSlug: 'how-to-read-airport-speedtest-charts-accurately',
        repArticleTitle: '如何科学看懂机场测速图？详解 TLS RTT、HTTP 延迟、MB/s 与 Mbps 换算及单/多线程差异'
      },
      {
        id: 'CL-52',
        slug: 'ip-purity-and-nat-type-check',
        name: '原生 IP / 住宅 IP 鉴定、IP 欺诈分（Scamalytics）与 UDP NAT 类型检测',
        coreTheme: '如何检测节点是机房商宽 IP 还是家庭住宅 IP、查询 ASN 属性与 IPrisk 风险分，以及 FullCone NAT 对游戏/语音的意义',
        primaryKeyword: '机场原生 IP 检测',
        secondaryKeywords: ['原生 IP 是什么意思', '住宅 IP 机场', 'UDP FullCone 检测'],
        searchIntent: '检测节点 IP 纯净度以解决 ChatGPT 降智、TikTok 零播放或流媒体锁区问题',
        targetUser: 'AI 重度用户、跨境电商卖家与流媒体发烧友',
        geoQuestions: ['机场原生 IP 是什么意思？', '原生 IP 机场有什么用？', '机场住宅 IP 是什么意思？'],
        repArticleSlug: 'native-ip-fraud-score-and-udp-nat-check-guide',
        repArticleTitle: '节点 IP 纯净度与原生 IP 检测教程：如何查询 ASN、IPrisk 欺诈分与 UDP FullCone 状态？'
      }
    ]
  },
  {
    id: 'resources-subscription-issues',
    navId: 'resources',
    title: '订阅问题',
    path: '/resources/subscription-issues/',
    h1: '机场订阅问题排障中心：订阅链接失效、更新报错、节点不显示与泄露重置',
    seoTitle: '2026 机场订阅问题汇总：订阅链接更新失败、导入报错、节点刷不出来的原因与修复 | clash机场',
    seoDescription: '专门解决机场订阅环节的疑难杂症：包括订阅链接打不开/更新超时、导入后只显示剩余流量不显示节点、专属客户端机场找不到订阅链接、换设备后订阅失效等问题。',
    primaryKeyword: '订阅问题',
    secondaryKeywords: ['机场订阅链接失效', '订阅更新失败', 'Clash 订阅报错', '找不到订阅链接'],
    searchIntent: '解决订阅链接无法拉取、更新报错或节点列表为空的故障',
    userNeed: '订阅链接是连接机场后台与本地客户端的唯一桥梁，一旦更新失败用户就无法获取新节点；需要分场景给出立竿见影的修复方案。',
    featuredBrands: ['guangsuyun', 'tiziyun', 'xingdaomeng', 'weitu'],
    clusters: [
      {
        id: 'CL-53',
        slug: 'subscription-update-failure-fixes',
        name: '订阅链接更新失败、超时与 User-Agent / 代理回环排查',
        coreTheme: '关闭系统代理再更新订阅、切换 Clash Meta 内核、更换机场备用订阅域名及检查套餐到期状态',
        primaryKeyword: '订阅问题',
        secondaryKeywords: ['机场订阅链接失效怎么办', '机场订阅更新失败', 'Shadowrocket 导入订阅失败'],
        searchIntent: '立即修复订阅无法下载或更新报错的问题',
        targetUser: '点击“更新订阅”时报错 Network Error / Timeout / Status 403 的用户',
        geoQuestions: ['机场订阅链接失效怎么办？', 'Shadowrocket 导入订阅失败怎么办？', '机场换域名怎么办？'],
        repArticleSlug: 'airport-subscription-update-failure-complete-fixes',
        repArticleTitle: '机场订阅链接失效、更新失败怎么办？排查代理回环、内核不兼容与域名更换的 7 种方法'
      },
      {
        id: 'CL-54',
        slug: 'proprietary-client-vs-universal-sub',
        name: '为什么有些机场后台找不到订阅链接？（专属客户端 vs 通用订阅详解）',
        coreTheme: '梳理飞猫云、SOGO云、隐形人、Firefly、闪跃、全球云、灵猫、无忧等 8 家专属客户端机场的使用方式，避免用户白忙活找订阅 URL',
        primaryKeyword: '机场找不到订阅链接',
        secondaryKeywords: ['专属客户端机场怎么用', '不提供订阅链接的机场', '自研客户端和通用订阅区别'],
        searchIntent: '搞清楚为什么部分机场后台只有软件下载没有 Clash 订阅按钮，以及如何正确使用它们',
        targetUser: '买了专属客户端机场却试图导入 Clash/小火箭的用户',
        geoQuestions: ['为什么有些机场必须使用专属客户端？', '机场订阅链接怎么导入 v2rayN？', '机场订阅链接怎么导入 Stash？'],
        repArticleSlug: 'why-some-airports-have-no-clash-subscription-url',
        repArticleTitle: '为什么机场后台找不到 Clash 订阅链接？盘点 8 家仅限专属客户端的机场及双支持替代方案'
      }
    ]
  },
  {
    id: 'resources-beginner-help',
    navId: 'resources',
    title: '新手帮助',
    path: '/resources/beginner-help/',
    h1: '2026 机场新手帮助中心：零基础第一次买机场、装软件与防踩坑保姆级指南',
    seoTitle: '2026 机场新手帮助：第一次买机场从注册、选套餐、下客户端到连上外网全流程 | clash机场',
    seoDescription: '专为完全没有经验的新手打造的保姆级入门路线图：10分钟搞懂买什么套餐最稳妥、不同电脑手机装什么软件、连上后怎么验证成功，以及新手最容易踩的 10 个大坑。',
    primaryKeyword: '新手帮助',
    secondaryKeywords: ['新手怎么选择机场', '第一次买机场', '科学上网新手教程', '新手机场推荐'],
    searchIntent: '获得零门槛、手把手的入门指引，順利完成第一次安全连接',
    userNeed: '新手最怕看几千字晦涩的协议代码；他们需要清晰的三步决策树：“你是想要一键登录免配置，还是想用 Clash/小火箭？”然后直接给出经过验证的答案。',
    featuredBrands: ['guangsuyun', 'feimao', 'tiziyun', 'weifeng', 'wuyou'],
    clusters: [
      {
        id: 'CL-55',
        slug: 'first-time-buyer-onboarding',
        name: '零基础第一次购买与连接机场 10 分钟快速上手流程',
        coreTheme: '从注册账号、使用优惠码买单月或小包、选择自研客户端/Clash 到首次打开 Google/ChatGPT 的标准路径',
        primaryKeyword: '新手帮助',
        secondaryKeywords: ['新手怎么选择机场', '第一次买机场注意什么', '机场购买后如何开始使用'],
        searchIntent: '按部就班完成人生第一次机场购买与连接',
        targetUser: '从未用过机场的纯小白用户',
        geoQuestions: ['新手怎么选择机场？', '机场购买后如何开始使用？', '机场套餐名字怎么看？'],
        repArticleSlug: 'first-time-airport-buyer-10-minute-onboarding',
        repArticleTitle: '2026 零基础新手第一次买机场保姆级教程：从挑选套餐、使用优惠码到连上外网仅需 10 分钟'
      },
      {
        id: 'CL-56',
        slug: 'top-10-beginner-mistakes',
        name: '机场新手最容易踩的 10 个误区与安全习惯养成',
        coreTheme: '解析盲买三年付、混淆年付折算价与月付价、长开全局模式耗光流量、把订阅发到公开网站等新手高频失误',
        primaryKeyword: '机场新手避坑',
        secondaryKeywords: ['机场新手最容易踩哪些坑', '机场使用注意事项', '科学上网新手误区'],
        searchIntent: '提前规避新手常见错误，省钱省流量省时间',
        targetUser: '刚入门不久、希望少走弯路的新手用户',
        geoQuestions: ['机场新手最容易踩哪些坑？', '机场推荐里常见的坑有哪些？', '机场使用过程中需要注意什么？'],
        repArticleSlug: 'top-10-mistakes-airport-beginners-must-avoid',
        repArticleTitle: '机场新手必读：最容易踩的 10 个高频大坑（年付折算价误解、全局模式跑光流量、下错客户端）'
      }
    ]
  }
];
