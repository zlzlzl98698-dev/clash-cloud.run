// Auto-generated unified Brand Data Center for clash-cloud.run
// Total independent brands: 41 (deduplicated from 42 raw entries by merging #8 Firefly & #41 萤火虫)
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

export interface UnlockItem {
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

export const BRANDS: BrandRecord[] = [
  {
    "id": "guangsuyun",
    "slug": "guangsuyun",
    "rank": 1,
    "isPrimaryFeatured": true,
    "name": "光速云",
    "enName": "LightSpeed Cloud",
    "aliases": [
      "光速云机场",
      "LightSpeed",
      "GSY Cloud"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#2563eb",
    "officialUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "hasAffiliateUrl": true,
    "couponCode": "AMM",
    "couponNote": "新人优惠码 AMM；轻量版与147永久套餐不打折；极速版/定制版支持半年9折、年付8折、两年75折、三年7折",
    "foundedYear": "2020年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL专线 + 企业级内网专线（双线路架构）",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方通用订阅（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "光速云自研客户端",
      "Clash Verge Rev",
      "Clash Meta (Mihomo)",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box",
      "Stash",
      "Quantumult X"
    ],
    "deviceLimit": "不限设备同时在线（全节点×1倍率）",
    "peakBandwidth": "单节点最高 2.5Gbps（品牌资料标注）",
    "regions": [
      "香港×20",
      "台湾×5",
      "日本×10",
      "新加坡×10",
      "美国×10",
      "马来西亚×2",
      "英国",
      "法国",
      "德国",
      "土耳其",
      "泰国",
      "巴西"
    ],
    "regionCount": 12,
    "nodeCountText": "62+ 节点（覆盖12个国家与地区）",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": 8.25,
    "minOneTimePrice": 147,
    "summary": "2020年运营的老牌综合型机场，采用 IEPL 专线与企业级内网专线双架构及 VLESS 协议，兼具自研客户端与 Clash/Shadowrocket 第三方订阅支持，提供 99元/年（69GB/月）、25元/月（168GB/月）及 147元/247GB 永久不限时流量包。",
    "historicalPriceNote": "历史资料（如早期摘要）曾记录轻量版为“年付折合约8元/月、59GB/月”；经核对当期套餐表，现行轻量版为 ¥99/年、69GB/月（折合月均 ¥8.25，使用优惠码 AMM 折算约 ¥8/月），最低真实月付档为极速版 ¥25/月（168GB/月）。",
    "plans": [
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": 99,
        "monthlyEquivalent": 8.25,
        "traffic": "69GB/月",
        "resetRule": "每月重置",
        "note": "轻量入门首选，原生稳定节点，不限设备（注：早期历史资料为59GB/月，现已升级为69GB/月）"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "168GB/月",
        "resetRule": "每月重置",
        "note": "全球 IPLC/IEPL 专线，全节点×1倍率，单节点最高2.5Gbps，7×24运维"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": 34,
        "monthlyEquivalent": 34,
        "traffic": "238GB/月",
        "resetRule": "每月重置",
        "note": "中高频办公与高清流媒体主力档位"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": 68,
        "monthlyEquivalent": 68,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "大流量多设备家庭或重度视频创作档位"
      },
      {
        "name": "光速云·无界版",
        "billing": "月付",
        "price": 138,
        "monthlyEquivalent": 138,
        "traffic": "900GB/月",
        "resetRule": "每月重置",
        "note": "团队协作与高频跨境数据传输档位"
      },
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": 147,
        "monthlyEquivalent": null,
        "traffic": "247GB",
        "resetRule": "永久不过期（一次性总额）",
        "note": "一次性永久版无忧过期，不打折，适合按量备用或低频长周期用户"
      },
      {
        "name": "光速云·定制套餐",
        "billing": "月付",
        "price": 680,
        "monthlyEquivalent": 680,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "按需独立部署全IPLC专线，分配专属原生IP与独立带宽，客服一对一确认"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰抽样参考",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 22,
          "downloadMbps": 529,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 41,
          "downloadMbps": 114,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 46,
          "downloadMbps": 387,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 57,
          "downloadMbps": 135,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 143,
          "downloadMbps": 18,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 14:32:56 CST",
      "image": "/images/speedtest/guangsuyun.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "共测试 54 个节点，整体平均速度 60.95 MB/s，最高速度 100.11 MB/s；香港主力节点平均 54–75 MB/s（RTT 14–33ms，其中香港02单节点为0B已原样保留），新加坡 55–73 MB/s，日本 60–67 MB/s，美国 54–71 MB/s。",
      "extraImages": [
        {
          "title": "长沙电信 2Gbps 62节点实测与流媒体解锁图",
          "url": "/images/unlock/gsy-telecom-2g.jpg",
          "date": "2026-08-19"
        },
        {
          "title": "广西移动 2Gbps 62节点实测与流媒体解锁图",
          "url": "/images/unlock/gsy-mobile-2g.jpg",
          "date": "2026-08-19"
        },
        {
          "title": "河北联通 2Gbps 62节点实测与流媒体解锁图",
          "url": "/images/unlock/gsy-unicom-2g.jpg",
          "date": "2026-08-19"
        }
      ]
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "日/新/美/台网页端与App解锁，香港节点仅App可用（视节点而定）"
      },
      "claude": {
        "status": "measured_supported",
        "label": "实测支持",
        "note": "新加坡、日本、美国原生节点支持访问"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "新加坡、土耳其、马来西亚节点实测解锁，日/港/美部分节点受限"
      },
      "netflix": {
        "status": "measured_supported",
        "label": "实测支持",
        "note": "香港、台湾、日本、新加坡、美国全区解锁自制与非自制剧"
      },
      "disney": {
        "status": "measured_supported",
        "label": "实测支持",
        "note": "香港、日本、新加坡、美国节点实测解锁（台湾部分节点受限）"
      },
      "youtube": {
        "status": "measured_supported",
        "label": "实测支持",
        "note": "4K/8K 高码率流畅播放，支持 YouTube Premium 区域"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持美区与亚太区 HBO Max 访问"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持跨境电商与 TikTok 跨区直播场景"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持多区 Spotify 音乐流媒体解锁"
      }
    },
    "pros": [
      "2020年开业运营至今，运营周期在同类机场中相对较长",
      "IEPL专线 + 企业级内网专线双架构，香港/新加坡节点实测吞吐表现突出",
      "同时提供零门槛自研客户端与标准 Clash / Shadowrocket 第三方订阅导入",
      "套餐跨度完整：既有 ¥99/年（69GB/月）低门槛年付，也有 ¥147/247GB 永久不限时流量包与企业独享定制"
    ],
    "cons": [
      "ChatGPT 与 Gemini 并非全部节点无差别直通（如香港节点仅支持 OpenAI App），需切换到新加坡/美国/日本节点",
      "2026-10-19 抽样中美国节点非晚高峰速率为 18Mbps（2026-08-11 联通后端实测为 54–71MB/s，受运营商与时段影响明显）",
      "特殊套餐与永久流量包不支持退款，建议首次使用先通过月付极速版（¥25）验证本地网络晚高峰表现"
    ],
    "suitableFor": [
      "追求晚高峰稳定性、希望兼顾自研客户端省心体验与 Clash 规则分流的综合型用户",
      "需要 99元/年低成本主力或 147元/247GB 永久流量包作为长效备用的用户",
      "有跨境电商、TikTok 运营、Netflix/Disney+ 追剧及 Claude/ChatGPT 生产力需求的用户"
    ],
    "notSuitableFor": [
      "不愿手动切换节点、要求香港节点直接网页端裸连 ChatGPT/Gemini 的用户",
      "尚未测试本地网络就打算直接盲目购买大额长周期不退款套餐的用户"
    ],
    "riskNotes": "¥8.25/月（优惠后约¥8/月）为年付轻量版折算月均成本，并非单月售价；特殊商品不支持无理由退款，请务必先月付实测。",
    "homologousGroup": "独立运营（光速云体系）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 光速云品牌信息.txt + 2026-08-11/08-19 原始实测截图包",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "weifeng",
    "slug": "weifeng",
    "rank": 2,
    "isPrimaryFeatured": false,
    "name": "微风网络",
    "enName": "BreezeNet",
    "aliases": [
      "weifeng",
      "微风机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#0284c7",
    "officialUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "hasAffiliateUrl": true,
    "couponCode": "flat888",
    "couponNote": "优惠码 flat888（汇总表标注9折）",
    "foundedYear": "2023年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box",
      "Hiddify"
    ],
    "deviceLimit": "不限设备（按套餐规则）",
    "peakBandwidth": "IEPL 专线带宽（未标注具体峰值数字）",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美多地原生 IP 节点",
    "minMonthlyPrice": 27,
    "minAnnualizedMonthlyPrice": 11.42,
    "minOneTimePrice": 200,
    "summary": "2023年运营的入门级高性价比 IEPL 专线机场，采用 VLESS 协议与多地原生 IP 节点，提供 7×24 小时在线客服（夜间 AI 值守），适合学生党、新手与轻中度日常用户。",
    "historicalPriceNote": "基础数据行曾记载“年付约7元/月 50GB/月”，但核实当期套餐表最低年付档为「清风 (Breeze)」¥137/年（100GB/月，折合月均约 ¥11.42/月），最低月付为「乘风」¥27/月（200GB/月）。本站严格按当期核实套餐表展示。",
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": 137,
        "monthlyEquivalent": 11.42,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "入门年付主力，折合每月约11.4元"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": 27,
        "monthlyEquivalent": 27,
        "traffic": "200GB/月",
        "resetRule": "每月重置",
        "note": "标准月付档，适合日常视频与AI办公"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": 57,
        "monthlyEquivalent": 57,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "进阶大流量月付档"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": 127,
        "monthlyEquivalent": 127,
        "traffic": "1200GB/月",
        "resetRule": "每月重置",
        "note": "重度流量需求与多设备档"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": 200,
        "monthlyEquivalent": null,
        "traffic": "270GB",
        "resetRule": "一次性不限时",
        "note": "无时间限制按量消耗"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": 370,
        "monthlyEquivalent": null,
        "traffic": "570GB",
        "resetRule": "一次性不限时",
        "note": "大容量不限时流量包"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 25,
          "downloadMbps": 546,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 40,
          "downloadMbps": 115,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 43,
          "downloadMbps": 384,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 54,
          "downloadMbps": 131,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 167,
          "downloadMbps": 17,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 CST",
      "image": "/images/speedtest/weifeng.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "存有 2026-08-11 原始节点测速实测截图（weifeng.png），记录了当次测试各地区延迟与吞吐表现。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT 日常对话与办公"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude 访问"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "原生 IP 节点支持 Netflix 解锁"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+ 解锁"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube 高清播放"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok 访问"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "采用 IEPL 专线 + VLESS 协议，稳定性优于同价位纯公网中转机场",
      "2026-10-19 抽样中香港（546Mbps）与新加坡（384Mbps）表现良好",
      "提供 7×24 小时在线客服（夜间 AI 值守），对刚接触机场的新手较友好"
    ],
    "cons": [
      "入门年付 100GB/月对重度 4K 视频用户略显紧张",
      "与 Firefly、飞鸟、一云梯存在同系关系，不建议将同系品牌互作异构容灾备份",
      "历史宣传的“7元/50GB”与现行套餐表（¥137/年 100GB）存在差异"
    ],
    "suitableFor": [
      "预算在 11–27 元/月之间的学生党与轻度办公用户",
      "首次配置机场、看重在线客服响应的新手"
    ],
    "notSuitableFor": [
      "每月消耗超过 1TB 且追求极致低延时美区专线的高端商业用户"
    ],
    "riskNotes": "下单前请核对清风年付版（¥137/年）与乘风月付版（¥27/月）的周期差异；与 Firefly/飞鸟同系。",
    "homologousGroup": "一云梯 / 飞鸟 / 微风 / Firefly 同系关联",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "muguang",
    "slug": "muguang",
    "rank": 3,
    "isPrimaryFeatured": false,
    "name": "暮光加速",
    "enName": "Twilight Accelerator",
    "aliases": [
      "muguang",
      "暮光网络",
      "Twilight"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#4f46e5",
    "officialUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "hasAffiliateUrl": true,
    "couponCode": "muguang5555",
    "couponNote": "基础资料记录渠道码 muguang5555；正文提示公开活动较少，建议下单前咨询7×24客服确认当期折扣",
    "foundedYear": "2023年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "BGP 智能调度 + 专线级出口",
    "lineCategory": "BGP/专线",
    "protocols": [
      "VLESS",
      "Trojan",
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "覆盖 Windows / macOS / iOS / Android / Linux 全平台客户端",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box",
      "Hiddify"
    ],
    "deviceLimit": "支持多设备同时在线",
    "peakBandwidth": "专线级出口（未标注单节点数字）",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美核心节点",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 9.08,
    "minOneTimePrice": 219,
    "summary": "2023年运营的全平台多设备机场，主打 BGP 智能调度与专线级出口，流量档位覆盖 70GB/月（年付¥109）至 1500GB/月（至尊版¥180），适合个人跨平台与远程协作团队。",
    "historicalPriceNote": "正文中提到的“9元/月起”指【暮光·年付轻量版】¥109/年（70GB/月）折算月均 ¥9.08/月；最低真实月付为【暮光·基础版】¥20/月（120GB/月）。另外旧解压包中名为“幕光加速-节点测速实测.png”的图片经核实图内抬头实为“快狸”，本站已严格剔除该张误标图片，仅采用核实的 2026-10-19 测速表。",
    "plans": [
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": 109,
        "monthlyEquivalent": 9.08,
        "traffic": "70GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约9.08元，适合轻度长周期用户"
      },
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "120GB/月",
        "resetRule": "每月重置",
        "note": "标准月付入门档"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": 40,
        "monthlyEquivalent": 40,
        "traffic": "240GB/月",
        "resetRule": "每月重置",
        "note": "多设备日常主力档"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": 100,
        "monthlyEquivalent": 100,
        "traffic": "700GB/月",
        "resetRule": "每月重置",
        "note": "高频远程办公与4K流媒体"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": 180,
        "monthlyEquivalent": 180,
        "traffic": "1500GB/月",
        "resetRule": "每月重置",
        "note": "小型团队协作大流量包"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": 219,
        "monthlyEquivalent": null,
        "traffic": "150GB",
        "resetRule": "一次性不限时",
        "note": "按量计费不过期"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": 529,
        "monthlyEquivalent": null,
        "traffic": "400GB",
        "resetRule": "一次性不限时",
        "note": "中容量不限时包"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": 959,
        "monthlyEquivalent": null,
        "traffic": "800GB",
        "resetRule": "一次性不限时",
        "note": "高容量不限时包"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": 600,
        "monthlyEquivalent": 600,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "商业独享定制节点"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 26,
          "downloadMbps": 509,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 40,
          "downloadMbps": 107,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 43,
          "downloadMbps": 419,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 53,
          "downloadMbps": 150,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 160,
          "downloadMbps": 19,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT 访问"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude 访问"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "套餐档位极为齐全（70GB 至 1500GB 月重置 + 三档不限时 + 独享定制）",
      "支持 Windows/macOS/iOS/Android/Linux 全平台多设备同时在线",
      "2026-10-19 抽样中新加坡（419Mbps）、香港（509Mbps）、日本（150Mbps）表现均衡"
    ],
    "cons": [
      "不限时轻量包（¥219/150GB）单价偏高，性价比不如月付或年付档",
      "优惠码活动透明度一般，需联系客服确认实时折扣"
    ],
    "suitableFor": [
      "拥有多台电脑与手机、需要全平台同时在线的个人或小微团队",
      "需要 700GB–1500GB 大流量月付档的用户"
    ],
    "notSuitableFor": [
      "寻求百元以内一次性永久大流量包的用户"
    ],
    "riskNotes": "9元/月起为年付轻量版折算价；不限时流量包单价较高，建议优先选择 ¥20/月 基础版测试。",
    "homologousGroup": "varnexa 联盟域体系（与灵动云、浪网同联盟后缀）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "feimao",
    "slug": "feimao",
    "rank": 4,
    "isPrimaryFeatured": false,
    "name": "飞猫云",
    "enName": "FlyCat Cloud",
    "aliases": [
      "feimao",
      "FlyCat"
    ],
    "logo": "/images/logos/feimao.png",
    "accentColor": "#0ea5e9",
    "officialUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "affiliateUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "hasAffiliateUrl": true,
    "couponCode": "flycat888",
    "couponNote": "优惠码 flycat888（汇总表标注8折）",
    "foundedYear": "2023年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "高速中转 / 优选线路",
    "lineCategory": "中转/优选",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "仅限官方专属客户端（下载登录即用，不提供 Clash 订阅链接）",
    "supportedClients": [
      "飞猫云官方专属客户端（Windows / macOS / Android / iOS）"
    ],
    "deviceLimit": "支持多端登录（按套餐规定）",
    "peakBandwidth": "未标注单节点峰值数字",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖亚太与欧美热门地区节点",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": 7,
    "minOneTimePrice": 680,
    "summary": "2023年运营的新手友好型机场，采用官方专属客户端登录即用模式（无需配置 Clash 订阅），学生版年付 ¥84（50GB/月，折合 7元/月），适合零基础小白用户。注意与历史档案中的 FATCAT（肥猫云）区分。",
    "historicalPriceNote": "7元/月起指「飞猫·学生版」年付 ¥84（50GB/月）折算月均成本；最低月付为「飞猫·星耀版」¥25/月（150GB/月）。",
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": 84,
        "monthlyEquivalent": 7,
        "traffic": "50GB/月",
        "resetRule": "每月重置",
        "note": "折合7元/月，低门槛学生党入门"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "日常主力月付套餐"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": 45,
        "monthlyEquivalent": 45,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "进阶流媒体与多端使用"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": 85,
        "monthlyEquivalent": 85,
        "traffic": "600GB/月",
        "resetRule": "每月重置",
        "note": "高流量月付档"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": 150,
        "monthlyEquivalent": 150,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "TB级重度流量包"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": 680,
        "monthlyEquivalent": null,
        "traffic": "1000GB",
        "resetRule": "一次性不限时",
        "note": "1TB一次性不限时流量"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": 550,
        "monthlyEquivalent": 550,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "定制业务专线"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 21,
          "downloadMbps": 526,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 41,
          "downloadMbps": 116,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 45,
          "downloadMbps": 413,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 54,
          "downloadMbps": 138,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 178,
          "downloadMbps": 14,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 08:52:30 CST",
      "image": "/images/speedtest/feimao.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 08:52:30 早间批次实测截图保留（feimao.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT 访问"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude 访问"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "官方专属客户端下载登录即用，免去导入 Clash 订阅与 YAML 规则配置的繁琐步骤",
      "学生版年付 ¥84（折合 ¥7/月）入门门槛低",
      "具备 2026-08-11 实测截图与 2026-10-19 抽样双重记录"
    ],
    "cons": [
      "仅支持官方专属客户端，不支持导入 Clash Verge Rev、Shadowrocket 或软路由 OpenClash",
      "非顶级物理专线定位，对自定义分流规则有高要求的进阶玩家不适用"
    ],
    "suitableFor": [
      "不想折腾 Clash 订阅链接、希望下载 App 登录即连的纯新手",
      "预算有限的学生党日常轻度使用"
    ],
    "notSuitableFor": [
      "必须在软路由（OpenWrt）或 Clash/Surge 中使用自定义分流规则的进阶用户"
    ],
    "riskNotes": "本品牌为专属客户端机场，不支持第三方订阅导入；且注意不要与 FATCAT（肥猫云）混淆。",
    "homologousGroup": "guangs 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "dalaoyun",
    "slug": "dalaoyun",
    "rank": 5,
    "isPrimaryFeatured": false,
    "name": "大佬云",
    "enName": "DaLaoYun",
    "aliases": [
      "dalaoyun",
      "大佬云机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#3b82f6",
    "officialUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "affiliateUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "hasAffiliateUrl": true,
    "couponCode": "dly888",
    "couponNote": "优惠码 dly888；季付及以上享 7 折",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box"
    ],
    "deviceLimit": "待核实（按官网当期套餐说明）",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖（具体节点数待核实）",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 5.6,
    "minOneTimePrice": null,
    "summary": "2024年运营的 5.6元/月（60GB/月）极限平价 IEPL + VLESS 机场，支持自研客户端与第三方通用订阅导入，季付及以上 7 折，与闪电鼠、云界线、榴莲云、环球梯同属 5.6 元同规格矩阵。",
    "historicalPriceNote": "5.6元/月为年付或长周期折算月均成本（60GB/月），完整多档套餐表在原始资料中未展开，其他档位标记为待核实。",
    "plans": [
      {
        "name": "入门年付方案（折算档）",
        "billing": "年付",
        "price": 67.2,
        "monthlyEquivalent": 5.6,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "资料明确：年付折合约5.6元/月，60GB/月；季付及以上7折"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "原始资料未提供独立解锁测试"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "年付折算约 5.6 元/月（60GB/月），是全库价格门槛最低的 IEPL + VLESS 方案之一",
      "同时支持自研客户端与 Clash 等第三方客户端订阅导入",
      "推广链接格式标准正常（含 #/ 路由）"
    ],
    "cons": [
      "与闪电鼠、云界线、榴莲云、环球梯规格几乎完全相同，缺乏差异化独有卖点",
      "缺乏本站独立测速截图与流媒体解锁实测数据"
    ],
    "suitableFor": [
      "预算极其有限（月均 6 元以内）、需要 VLESS 协议与 Clash 订阅的轻度用户",
      "需要低成本备用订阅链接的用户"
    ],
    "notSuitableFor": [
      "对流媒体全解锁与晚高峰高吞吐有严苛确定性要求的主力办公用户"
    ],
    "riskNotes": "与闪电鼠、云界线、榴莲云、环球梯同属 qwerty 联盟域 5.6 元同规格矩阵，建议作为低成本备用或先小额实测。",
    "homologousGroup": "qwerty 5.6元/60GB 同规格矩阵（大佬云/闪电鼠/云界线/榴莲云/环球梯）",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "xingdaomeng",
    "slug": "xingdaomeng",
    "rank": 6,
    "isPrimaryFeatured": false,
    "name": "星岛梦",
    "enName": "StarDream",
    "aliases": [
      "xingdaomeng",
      "StarDream"
    ],
    "logo": "/images/logos/xingdaomeng.webp",
    "accentColor": "#6366f1",
    "officialUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "affiliateUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "hasAffiliateUrl": true,
    "couponCode": "nmw888",
    "couponNote": "优惠码 nmw888",
    "foundedYear": "2020年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线（1倍流量）",
    "lineCategory": "IEPL",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "Quantumult X",
      "Stash",
      "Surge"
    ],
    "deviceLimit": "不限设备使用（1倍流量）",
    "peakBandwidth": "IEPL 专线（未标注单节点峰值）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "美国",
      "新加坡",
      "韩国",
      "东南亚"
    ],
    "regionCount": 7,
    "nodeCountText": "覆盖港/台/日/美/新/韩及东南亚多地区",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": 8,
    "minOneTimePrice": 100,
    "summary": "2020年运营的老牌 IEPL 专线机场，采用 Trojan 协议，全节点 1 倍流量且不限设备数，覆盖港台日美新韩及东南亚，提供 ¥96/年（60GB/月）及 ¥100/100GB、¥300/300GB、¥600/1TB 三档永久不限时套餐。",
    "historicalPriceNote": "8元/月起指「星岛梦·贴心小包」年付 ¥96（60GB/月）折算月均成本；最低月付为「超量150G」¥25/月。",
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": 96,
        "monthlyEquivalent": 8,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合8元/月，老牌IEPL入门首选"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "标准月付主力套餐"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": 50,
        "monthlyEquivalent": 50,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "多设备家庭共享档"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": 70,
        "monthlyEquivalent": 70,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "高频流媒体与办公档"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": 130,
        "monthlyEquivalent": 130,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "小团队1TB大流量包"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": 100,
        "monthlyEquivalent": null,
        "traffic": "100GB",
        "resetRule": "永久不过期",
        "note": "百元低门槛永久流量包"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": 300,
        "monthlyEquivalent": null,
        "traffic": "300GB",
        "resetRule": "永久不过期",
        "note": "中容量永久不限时包"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": 600,
        "monthlyEquivalent": null,
        "traffic": "1000GB",
        "resetRule": "永久不过期",
        "note": "1TB大容量永久不限时包"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": 680,
        "monthlyEquivalent": 680,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "专属商业定制线路"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 27,
          "downloadMbps": 504,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 41,
          "downloadMbps": 103,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 44,
          "downloadMbps": 411,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 57,
          "downloadMbps": 136,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 177,
          "downloadMbps": 18,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 01:48:13 CST",
      "image": "/images/speedtest/xingdaomeng.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 01:48:13 凌晨批次实测截图保留（xingdaomeng.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "兼容 ChatGPT 访问"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube Premium"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok 跨区使用"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "2020年开业老牌，IEPL 专线 + Trojan 协议，1 倍流量且不限设备数",
      "除港台日新美外还覆盖韩国与东南亚节点，适合多设备家庭与小团队",
      "永久不限时套餐档位清晰（¥100/100GB、¥300/300GB、¥600/1TB）"
    ],
    "cons": [
      "2026-10-19 抽样中美国节点下载速率为 18Mbps，远距离节点适合网页与 AI 而非超大文件拉取",
      "Gemini 解锁视具体节点而定"
    ],
    "suitableFor": [
      "多设备家庭或小团队共享（不限设备+1倍倍率）",
      "需要韩国/东南亚节点或百元永久不限时流量包的用户"
    ],
    "notSuitableFor": [
      "追求美国单一节点跑满千兆带宽的用户"
    ],
    "riskNotes": "8元/月为年付贴心小包（¥96/年）折算成本；建议根据自身所在地区先测试月付档。",
    "homologousGroup": "guangs 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "ermao",
    "slug": "ermao",
    "rank": 7,
    "isPrimaryFeatured": false,
    "name": "二猫云",
    "enName": "2Mao Cloud",
    "aliases": [
      "ermao",
      "2mao",
      "二猫机场"
    ],
    "logo": "/images/logos/ermao.webp",
    "accentColor": "#f59e0b",
    "officialUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "affiliateUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "hasAffiliateUrl": true,
    "couponCode": "ermao5555",
    "couponNote": "优惠码 ermao5555",
    "foundedYear": "2023年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "全线 IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "独家定制客户端 + 第三方通用订阅",
    "supportedClients": [
      "二猫云定制客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG"
    ],
    "deviceLimit": "不限设备连接数",
    "peakBandwidth": "IEPL 专线（未标注具体数字）",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "主力覆盖港/日/美（测速表亦含台/新）",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 7.42,
    "minOneTimePrice": 99,
    "summary": "2023年运营的全线 IEPL 专线机场，采用 VLESS 协议，不限设备连接数，配备定制客户端并支持通用订阅，提供 ¥89/年（60GB/月）、¥20/月（130GB/月）及 ¥99/100GB 不限时套餐。",
    "historicalPriceNote": "介绍正文提及“节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站”，但 2026-10-19 测速表与 2026-08-11 截图中包含台湾与新加坡节点记录，建议以订阅拉取后的实时节点列表为准。",
    "plans": [
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": 89,
        "monthlyEquivalent": 7.42,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约7.42元"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "130GB/月",
        "resetRule": "每月重置",
        "note": "20元档130GB，比同价位100G/120G略多"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": 40,
        "monthlyEquivalent": 40,
        "traffic": "230GB/月",
        "resetRule": "每月重置",
        "note": "中度流媒体与办公档"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": 80,
        "monthlyEquivalent": 80,
        "traffic": "430GB/月",
        "resetRule": "每月重置",
        "note": "多设备高频使用档"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": 160,
        "monthlyEquivalent": 160,
        "traffic": "850GB/月",
        "resetRule": "每月重置",
        "note": "重度流量需求档"
      },
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": 99,
        "monthlyEquivalent": null,
        "traffic": "100GB",
        "resetRule": "一次性不限时",
        "note": "99元100GB不限时备用包"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 22,
          "downloadMbps": 481,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 41,
          "downloadMbps": 118,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 46,
          "downloadMbps": 407,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 53,
          "downloadMbps": 143,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 134,
          "downloadMbps": 17,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 10:45:27 CST",
      "image": "/images/speedtest/ermao.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 10:45:27 上午批次实测截图保留（ermao.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT 访问"
      },
      "claude": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定，官方未做绝对承诺"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "全线 IEPL 专线，账号不限设备连接数",
      "白猫套餐 ¥20/月 给到 130GB，年付小包 ¥89/年（60GB/月）与不限时 ¥99/100GB 定价亲民",
      "同时提供定制客户端与标准订阅"
    ],
    "cons": [
      "Claude 与 Gemini 解锁未做确定承诺，重度依赖 Claude 的用户需先实测",
      "大流量档（¥80/430GB、¥160/850GB）每 GB 单价高于部分同价位竞品"
    ],
    "suitableFor": [
      "看重不限设备连接数、日常以 130GB 月付或 99元不限时包为主的用户"
    ],
    "notSuitableFor": [
      "追求大流量（500GB+）极致低单价的用户"
    ],
    "riskNotes": "Claude 与 Gemini 可用性视节点而定，建议先用 ¥20 白猫月付套餐实测。",
    "homologousGroup": "guangs 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "wuyou",
    "slug": "wuyou",
    "rank": 8,
    "isPrimaryFeatured": false,
    "name": "无忧链接",
    "enName": "WorryFree Link",
    "aliases": [
      "wuyou",
      "无忧机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#10b981",
    "officialUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "hasAffiliateUrl": true,
    "couponCode": "wuyou666",
    "couponNote": "优惠码 wuyou666",
    "foundedYear": "2025年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "跨境电商专线 / 优化线路",
    "lineCategory": "专线/优化",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "2026年10月起采用官方专属客户端（下载登录即用，无需折腾订阅）",
    "supportedClients": [
      "无忧链接官方专属客户端"
    ],
    "deviceLimit": "不限设备数量（全线节点无倍率、不限速）",
    "peakBandwidth": "不限速（未标注具体峰值数字）",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美核心地区（50节点实测图）",
    "minMonthlyPrice": 19,
    "minAnnualizedMonthlyPrice": 6.58,
    "minOneTimePrice": 108,
    "summary": "2025年运营的轻度与跨境电商取向机场，全节点无倍率、不限速、不限设备，主打 TikTok 跨区直连与直播支持，MINI链接年付 ¥79（40GB/月，折合 6.58元/月），2026年10月起使用官方专属客户端。",
    "historicalPriceNote": "汇总表第927行曾写“订阅无需转换”，但详情页明确说明“2026年10月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置”。本站按最新2026年10月状态标记为专属客户端模式。",
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": 79,
        "monthlyEquivalent": 6.58,
        "traffic": "40GB/月",
        "resetRule": "每月重置",
        "note": "折合6.58元/月，超低门槛轻度/备用方案"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": 19,
        "monthlyEquivalent": 19,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "19元100GB常规月付档"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": 33,
        "monthlyEquivalent": 33,
        "traffic": "200GB/月",
        "resetRule": "每月重置",
        "note": "跨境电商与日常视频主力档"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": 77,
        "monthlyEquivalent": 77,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "大流量月付档"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": 117,
        "monthlyEquivalent": 117,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "1TB团队或高频直播档"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": 108,
        "monthlyEquivalent": null,
        "traffic": "100GB",
        "resetRule": "永久不限时",
        "note": "100GB不限时流量包"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": 298,
        "monthlyEquivalent": null,
        "traffic": "300GB",
        "resetRule": "永久不限时",
        "note": "300GB不限时流量包"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 23,
          "downloadMbps": 531,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 41,
          "downloadMbps": 107,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 42,
          "downloadMbps": 418,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 55,
          "downloadMbps": 147,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 145,
          "downloadMbps": 17,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-07-18 21:40:48 CST",
      "image": "/images/unlock/wuyou-speed-50.jpg",
      "protocol": "VLESS",
      "backend": "主端 4.3.3 (696) / 喵速 4.7.0 / 珠海联通 9Gbps 32线程",
      "summary": "存有 50 节点 VLESS 晚高峰实测图（wuyou-speed-50.jpg）与御三家流媒体全绿解锁图（wuyou-unlock-50.jpg），香港节点平均 480–554 MB/s，新加坡 117–352 MB/s，日本 60–198 MB/s。",
      "extraImages": [
        {
          "title": "无忧链接 50节点御三家（YouTube/Netflix/Disney+）解锁实测图",
          "url": "/images/unlock/wuyou-unlock-50.jpg",
          "date": "2026-07-18"
        }
      ]
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "measured_supported",
        "label": "实测支持",
        "note": "2026-07-18 50节点实测图显示美/新/台/日/港全绿解锁"
      },
      "disney": {
        "status": "measured_supported",
        "label": "实测支持",
        "note": "2026-07-18 50节点实测图显示美/新/台/日/港全绿解锁"
      },
      "youtube": {
        "status": "measured_supported",
        "label": "实测支持",
        "note": "支持 YouTube（注：2026-07-18图中香港01单节点显示送中，其余49节点正常解锁）"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "主打 TikTok 跨区直连与直播场景"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "MINI链接 ¥79/年（折合 ¥6.58/月）价格门槛极低，全节点 1 倍率且不限设备",
      "具备 2026-07-18 晚高峰 50 节点 VLESS 测速图与御三家流媒体解锁实测截图",
      "针对 TikTok 跨区直连与跨境电商运营做了专门优化，7×24客服在线"
    ],
    "cons": [
      "MINI链接每月仅 40GB 流量，仅够轻度刷网页或短视频，重度视频用户需选 ¥19/¥33 月付档",
      "2026年10月起切换为官方专属客户端模式，不适合依赖 Clash 自定义规则的用户"
    ],
    "suitableFor": [
      "跨境电商与 TikTok 跨区运营人员",
      "预算极低、需要 6.5 元/月轻度备用或喜欢专属客户端的新手"
    ],
    "notSuitableFor": [
      "需要导入软路由或第三方 Clash 客户端的高级玩家"
    ],
    "riskNotes": "MINI链接月流量为 40GB，购买前请评估月均消耗；2025年新品牌建议优先体验 ¥19 月付档。",
    "homologousGroup": "wep01 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 无忧链接.jpg/无忧链接2.jpg (2026-07-18 实测图)",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "weitu",
    "slug": "weitu",
    "rank": 9,
    "isPrimaryFeatured": false,
    "name": "唯兔云",
    "enName": "V2Yun Cloud",
    "aliases": [
      "weitu",
      "V2云",
      "v2yun"
    ],
    "logo": "/images/logos/weitu.png",
    "accentColor": "#8b5cf6",
    "officialUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "affiliateUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "hasAffiliateUrl": true,
    "couponCode": "weitu666",
    "couponNote": "优惠码 weitu666",
    "foundedYear": "2023年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IPLC 专线（三网优化 + 智能负载均衡）",
    "lineCategory": "IPLC",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "Quantumult X",
      "Stash"
    ],
    "deviceLimit": "不限设备连接（1倍流量、不限速）",
    "peakBandwidth": "IPLC 专线（未标注具体数字）",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "60+ 节点（汇总表记录）",
    "minMonthlyPrice": 14.9,
    "minAnnualizedMonthlyPrice": 6.66,
    "minOneTimePrice": 100,
    "summary": "2023年运营的 IPLC 专线机场（别名 V2云），采用 Trojan 协议，1 倍流量、不限速、不限设备连接，提供 ¥79.9/年（45GB/月）、¥14.9/月（100GB/月限时档）、¥19.9/月（150GB/月）及三档永久不限时套餐。",
    "historicalPriceNote": "¥14.9/月（100GB）标注为“节假日限时开启”，常规月付入门为「普通版」¥19.90/月（150GB/月）。",
    "plans": [
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": 79.9,
        "monthlyEquivalent": 6.66,
        "traffic": "45GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约6.66元，轻量年付"
      },
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": 120,
        "monthlyEquivalent": 10,
        "traffic": "75GB/月",
        "resetRule": "每月重置",
        "note": "折合10元/月，75GB加强专线"
      },
      {
        "name": "唯兔云·节假日限时开启",
        "billing": "月付",
        "price": 14.9,
        "monthlyEquivalent": 14.9,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "节假日限时开启特惠月付"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": 19.9,
        "monthlyEquivalent": 19.9,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "日常主力常驻月付档"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": 29.9,
        "monthlyEquivalent": 29.9,
        "traffic": "200GB/月",
        "resetRule": "每月重置",
        "note": "进阶月付档"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": 59.9,
        "monthlyEquivalent": 59.9,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "家庭或小团队大流量档"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": 119.9,
        "monthlyEquivalent": 119.9,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "1TB旗舰月付档"
      },
      {
        "name": "唯兔云·永久不限时 100G",
        "billing": "一次性付费",
        "price": 100,
        "monthlyEquivalent": null,
        "traffic": "100GB",
        "resetRule": "永久不限时",
        "note": "100GB一次性永久包"
      },
      {
        "name": "唯兔云·永久不限时 200G",
        "billing": "一次性付费",
        "price": 160,
        "monthlyEquivalent": null,
        "traffic": "200GB",
        "resetRule": "永久不限时",
        "note": "200GB一次性永久包（单价0.8元/G较划算）"
      },
      {
        "name": "唯兔云·永久不限时 500G",
        "billing": "一次性付费",
        "price": 340,
        "monthlyEquivalent": null,
        "traffic": "500GB",
        "resetRule": "永久不限时",
        "note": "500GB一次性永久包（单价0.68元/G）"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 27,
          "downloadMbps": 500,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 37,
          "downloadMbps": 100,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 44,
          "downloadMbps": 414,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 56,
          "downloadMbps": 147,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 179,
          "downloadMbps": 17,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 13:55:08 CST",
      "image": "/images/speedtest/weitu.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 13:55:08 下午批次实测截图保留（weitu.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "正文提支持Gemini，列表标注视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube Premium"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "IPLC 专线 + Trojan 协议，1 倍流量不限设备连接",
      "月付阶梯极细（¥14.9/¥19.9/¥29.9/¥59.9），且 200G（¥160）与 500G（¥340）永久包单价具有竞争力",
      "同时具备 2026-08-11 实测图与 2026-10-19 抽样数据"
    ],
    "cons": [
      "¥14.9/月档仅在节假日限时开启，平时需购买 ¥19.9/月普通版",
      "美国节点抽样速度（17Mbps）偏慢"
    ],
    "suitableFor": [
      "需要 15–20 元/月 IPLC 专线且多设备同时使用的家庭或个人",
      "寻找 ¥160/200GB 高性价比永久不限时流量包的用户"
    ],
    "notSuitableFor": [
      "重度依赖美区超大带宽下载的用户"
    ],
    "riskNotes": "节假日限时套餐并非全年常驻，下单前请以官网实时展示档位为准。",
    "homologousGroup": "guangs 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "firefly",
    "slug": "firefly",
    "rank": 10,
    "isPrimaryFeatured": false,
    "name": "Firefly（萤火虫）",
    "enName": "Firefly",
    "aliases": [
      "Firefly",
      "萤火虫",
      "飞为",
      "fireflyaff"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#eab308",
    "officialUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "hasAffiliateUrl": true,
    "couponCode": "firefly",
    "couponNote": "新用户优惠码 firefly 享 8 折（年付版不适用）；长周期季9/半85/年8折，最高约64折",
    "foundedYear": "2023年（资料称8年团队背景）",
    "paymentMethods": [
      "支付宝",
      "USDT（历史资料注无微信）"
    ],
    "lineType": "IPLC 专线接入 + 原生 IP",
    "lineCategory": "IPLC",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "2026年10月起采用官方专属客户端（下载登录即用，不提供订阅链接）",
    "supportedClients": [
      "Firefly 官方专属客户端"
    ],
    "deviceLimit": "不限客户端及设备数量（全节点不限速）",
    "peakBandwidth": "不限速（IPLC 专线）",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/新/日/美原生 IP 节点（测速含台湾）",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": 8,
    "minOneTimePrice": 100,
    "summary": "合并原清单 #8 Firefly 与 #41 萤火虫（完全同一品牌实体）：采用 IPLC 专线 + VLESS 协议与原生 IP，不限速不限设备，2026年10月起使用专属客户端登录即连，提供 ¥96/年（60GB/月）、¥25/月（150GB/月）及 ¥100/100GB 不限时套餐。",
    "historicalPriceNote": "审计发现原清单第8项「Firefly」与第二部分第13项「萤火虫」域名（vip02.fireflyaff.com）、优惠码（firefly）及全部6档套餐（年付版/Lite/Plus/Blaze/Nova/不限时）完全一致，已合并为单一独立品牌实体，并完整保留季付/半年付/两年付/三年付价格梯度。",
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": 96,
        "monthlyEquivalent": 8,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合8元/月（不适用8折优惠码）"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥67 / 半年¥127 / 年付¥240 / 两年¥420 / 三年¥540"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": 45,
        "monthlyEquivalent": 45,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥121 / 半年¥229 / 年付¥432 / 两年¥756 / 三年¥972"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": 85,
        "monthlyEquivalent": 85,
        "traffic": "600GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥229 / 半年¥433 / 年付¥816 / 两年¥1428 / 三年¥1836"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": 150,
        "monthlyEquivalent": 150,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥400 / 半年¥750 / 年付¥1360 / 两年¥2399 / 三年¥3119"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": 100,
        "monthlyEquivalent": null,
        "traffic": "100GB",
        "resetRule": "一次性不限时",
        "note": "100GB永久不限时流量包"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 27,
          "downloadMbps": 547,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 39,
          "downloadMbps": 135,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 42,
          "downloadMbps": 445,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 57,
          "downloadMbps": 147,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 143,
          "downloadMbps": 30,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT / Meta AI"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "原生 IP 稳定解锁 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "原生 IP 解锁 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "IPLC 专线 + VLESS 协议 + 原生 IP，2026-10-19 抽样中香港（547Mbps）、新加坡（445Mbps）、美国（30Mbps）均为同批前列",
      "不限设备数量，且新用户 8 折优惠码（firefly）使 Lite 月付首月折算仅 ¥20",
      "专属客户端免配置，7×24 在线客服支持"
    ],
    "cons": [
      "不提供第三方 Clash 订阅链接，仅限官方专属客户端使用",
      "历史资料提示支付方式为支付宝与 USDT（可能不支持微信支付）",
      "与微风、飞鸟、一云梯存在同系关系"
    ],
    "suitableFor": [
      "看重 IPLC 原生 IP 稳定性、喜欢直接用专属 App 登录的多设备用户",
      "高频使用 ChatGPT 办公与深夜追剧的用户"
    ],
    "notSuitableFor": [
      "需要导入 Clash / Shadowrocket / 软路由的用户"
    ],
    "riskNotes": "仅支持官方专属客户端，不提供通用订阅链接；年付版（¥96）不适用 8 折优惠码。",
    "homologousGroup": "一云梯 / 飞鸟 / 微风 / Firefly 同系关联（vip02 联盟域）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt（合并 #8 Firefly 与 #41 萤火虫）",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "yuzhou",
    "slug": "yuzhou",
    "rank": 11,
    "isPrimaryFeatured": false,
    "name": "宇宙云",
    "enName": "YuZhou Cloud",
    "aliases": [
      "yuzhou",
      "宇宙云机场"
    ],
    "logo": "/images/logos/yuzhou.webp",
    "accentColor": "#64748b",
    "officialUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "hasAffiliateUrl": true,
    "couponCode": "YUZHOU553",
    "couponNote": "历史资料称优惠码 YUZHOU553 新用户 8 折（当期有效性待核实）",
    "foundedYear": "待核实",
    "paymentMethods": [
      "待核实"
    ],
    "lineType": "三网优化 / 智能负载均衡（历史资料称 IEPL）",
    "lineCategory": "待核实",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "unverified",
    "clientSupportLabel": "待核实（不默认专属客户端或提供订阅链接）",
    "supportedClients": [
      "待核实（2026-08-11 测速图显示 VLESS 协议节点）"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "历史资料称 60+ 节点（当期覆盖待核实）",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 8,
    "minOneTimePrice": null,
    "summary": "存有 2026-08-11 21:04:24 晚高峰 VLESS 实测截图与历史起步价记录（¥96/年），但当期完整套餐价格表、月流量额度及客户端支持方式尚未补充核实，按透明原则标注为待核实状态。",
    "historicalPriceNote": "原文明确规定：“起步价 ¥96/年，月流量未能从当前资料确定；现有资料不足以列出该品牌全部套餐；上述历史起价不得直接充当当前完整套餐表。”",
    "plans": [
      {
        "name": "历史年付起价记录（待核实）",
        "billing": "年付",
        "price": 96,
        "monthlyEquivalent": 8,
        "traffic": "待核实",
        "resetRule": "待核实",
        "note": "历史资料起步价 ¥96/年，具体当期流量与月付档位待补充核实"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": {
      "testedAt": "2026-08-11 21:04:24 CST",
      "image": "/images/speedtest/yuzhou.png",
      "protocol": "VLESS",
      "backend": "主端 4.3.3 (696) / 喵速 4.7.0 (A11-32) / 珠海联通 9Gbps / 32线程",
      "summary": "存有 2026-08-11 21:04:24 晚高峰批次 VLESS 节点测速截图（yuzhou.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "待核实",
        "note": "资料明确标注待核实"
      },
      "claude": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      },
      "gemini": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      },
      "netflix": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      },
      "disney": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      },
      "youtube": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      },
      "hbomax": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      },
      "tiktok": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      },
      "spotify": {
        "status": "untested",
        "label": "待核实",
        "note": "待核实"
      }
    },
    "pros": [
      "保留有 2026-08-11 21:04 晚高峰时段 VLESS 协议原始测速截图证据",
      "历史资料记录起步价为 ¥96/年，并提供新用户 8 折码 YUZHOU553"
    ],
    "cons": [
      "当期完整套餐表、月流量额度、设备限制与客服信息缺失，处于待核实状态",
      "缺乏 2026-10-19 批次测速与流媒体解锁核实数据"
    ],
    "suitableFor": [
      "愿意自行登录官网核对当期实时套餐并参考 2026-08-11 晚高峰测速图的用户"
    ],
    "notSuitableFor": [
      "希望在购买前直接看到完整透明多档价格表的用户"
    ],
    "riskNotes": "当前资料缺口较大，购买前必须先在官网核实最新套餐流量、客户端支持方式及退款条款。",
    "homologousGroup": "wzjc 联盟域体系",
    "dataStatus": "unverified",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-19",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "u1s1",
    "slug": "u1s1",
    "rank": 12,
    "isPrimaryFeatured": false,
    "name": "U1S1",
    "enName": "U1S1 Cloud",
    "aliases": [
      "u1s1",
      "有一说一",
      "U1S1机场"
    ],
    "logo": "/images/logos/u1s1.png",
    "accentColor": "#ec4899",
    "officialUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "affiliateUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "hasAffiliateUrl": true,
    "couponCode": "akaka",
    "couponNote": "优惠码 akaka",
    "foundedYear": "2025年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IPLC 专线",
    "lineCategory": "IPLC",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box"
    ],
    "deviceLimit": "不限设备同时连接",
    "peakBandwidth": "官方宣称 2000Mbps 高速带宽，晚高峰不限速",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美核心节点",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 8,
    "minOneTimePrice": null,
    "summary": "2025年上线的 IPLC 专线机场（别名：有一说一），官方宣称 2000Mbps 带宽与晚高峰不限速，不限设备同时连接，提供 ¥96/年（60GB/月）与 ¥20/月（120GB/月）至 ¥180/月（1500GB/月）套餐。",
    "historicalPriceNote": "正文提及“还有1000GB的一次性大流量包”，但标准套餐表中列出了 5 档周期套餐（年付¥96及月付¥20/¥40/¥100/¥180），一次性大流量包以官网实时后台为准。",
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": 96,
        "monthlyEquivalent": 8,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合8元/月入门年付"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "120GB/月",
        "resetRule": "每月重置",
        "note": "20元120GB标准月付方案"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": 40,
        "monthlyEquivalent": 40,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "中高频流媒体与办公"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": 100,
        "monthlyEquivalent": 100,
        "traffic": "700GB/月",
        "resetRule": "每月重置",
        "note": "大流量多设备共享"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": 180,
        "monthlyEquivalent": 180,
        "traffic": "1500GB/月",
        "resetRule": "每月重置",
        "note": "1.5TB旗舰月付档"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 24,
          "downloadMbps": 538,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 39,
          "downloadMbps": 107,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 46,
          "downloadMbps": 414,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 57,
          "downloadMbps": 133,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 134,
          "downloadMbps": 20,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 22:33:29 CST",
      "image": "/images/speedtest/u1s1.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 22:33:29 晚高峰时段实测截图保留（u1s1.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "具备 2026-08-11 22:33 晚高峰实测截图与 2026-10-19 抽样双重验证",
      "IPLC 专线且不限设备连接数，香港（538Mbps）与新加坡（414Mbps）吞吐表现好",
      "套餐命名直观，梯度合理"
    ],
    "cons": [
      "2025年新上线品牌，长期跨年运营稳定性仍需更长周期观察",
      "公开优惠力度有限"
    ],
    "suitableFor": [
      "愿意尝试 2025 年新锐 IPLC 专线机场、先从 ¥20 月付档入手的用户"
    ],
    "notSuitableFor": [
      "只选开业 5 年以上老牌且倾向直接买大额年付的保守型用户"
    ],
    "riskNotes": "2025年新品牌建议遵循“月付尝鲜、按需续费”原则，避免一上来直接冲高价长周期套餐。",
    "homologousGroup": "guangs 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "lingmao",
    "slug": "lingmao",
    "rank": 13,
    "isPrimaryFeatured": false,
    "name": "灵猫网络",
    "enName": "CivetNet",
    "aliases": [
      "lingmao",
      "灵猫机场",
      "CivetNet"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#14b8a6",
    "officialUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "affiliateUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "hasAffiliateUrl": true,
    "couponCode": "lmao888",
    "couponNote": "基础数据记录优惠码 lmao888；基础信息亦记录优惠码 lingmao 享 8 折（年付小包不适用）",
    "foundedYear": "2025年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "中转优化线路（1倍流量）",
    "lineCategory": "中转优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "2026年10月起采用官方专属客户端（下载登录即用，不提供订阅链接）",
    "supportedClients": [
      "灵猫网络官方专属客户端"
    ],
    "deviceLimit": "不限设备使用（1倍流量、不限速）",
    "peakBandwidth": "不限速",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "美国",
      "新加坡"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/日/美/新常见地区",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": 7.08,
    "minOneTimePrice": null,
    "summary": "2025年运营的中转优化线路机场，主打 1 倍流量、不限速、不限设备，2026年10月起采用官方专属客户端登录即连，年付小包 ¥85/年（45GB/月，折合 7.08元/月），月付 Small ¥25/月（150GB/月，8折后 20元）。",
    "historicalPriceNote": "基础数据行写“19元/月 150GB/月”，套餐表显示「灵猫·月付Small」原价 ¥25/月（150GB/月，使用8折码后为 ¥20/月），「灵猫·年付Small」¥195/年（150GB/月，折合 ¥16.25/月）。汇总表另提及不限时套餐，具体以官网后台为准。",
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": 85,
        "monthlyEquivalent": 7.08,
        "traffic": "45GB/月",
        "resetRule": "每月重置",
        "note": "折合7.08元/月（不适用8折码）"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "叠加8折码 lingmao 折合约20元/月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": 45,
        "monthlyEquivalent": 45,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "大流量月付档"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": 125,
        "monthlyEquivalent": 41.67,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "季度300GB/月方案"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": 195,
        "monthlyEquivalent": 16.25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "折合16.25元/月（可叠加8折码）"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": 295,
        "monthlyEquivalent": 24.58,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "折合24.58元/月大流量年付"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 22,
          "downloadMbps": 492,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 40,
          "downloadMbps": 109,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 46,
          "downloadMbps": 409,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 57,
          "downloadMbps": 147,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 164,
          "downloadMbps": 19,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 18:45:40 CST",
      "image": "/images/speedtest/lingmao.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 18:45:40 傍晚高峰前夕实测截图保留（lingmao.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "1 倍流量、不限速、不限设备，适合家里多台手机电脑同时连接",
      "专属客户端免配置，年付小包 ¥85（折合 ¥7.08/月）门槛低",
      "具备 2026-08-11 实测图与 2026-10-19 抽样记录"
    ],
    "cons": [
      "中转优化线路定位，非物理内网专线",
      "不提供第三方 Clash 订阅链接，仅限专属客户端使用"
    ],
    "suitableFor": [
      "不需要配置 Clash、希望多台设备登录即用的家庭与轻度用户"
    ],
    "notSuitableFor": [
      "需要 Clash / Shadowrocket 订阅链接或追求顶级 IPLC 物理专线的用户"
    ],
    "riskNotes": "仅支持官方专属客户端；中转线路晚高峰表现受本地运营商影响，建议先月付测试。",
    "homologousGroup": "vip01/vip02 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "jilian",
    "slug": "jilian",
    "rank": 14,
    "isPrimaryFeatured": false,
    "name": "极连云",
    "enName": "JiLian Cloud",
    "aliases": [
      "jilian",
      "极连云机场"
    ],
    "logo": "/images/logos/jilian.png",
    "accentColor": "#2563eb",
    "officialUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "affiliateUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "hasAffiliateUrl": true,
    "couponCode": "ji8888",
    "couponNote": "优惠码 ji8888",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 支持第三方客户端订阅",
    "supportedClients": [
      "极连云自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "IEPL 专线",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美核心节点（见2026-08-11实测图）",
    "minMonthlyPrice": 18,
    "minAnnualizedMonthlyPrice": null,
    "minOneTimePrice": null,
    "summary": "2024年运营的 18元/月（100GB/月）IEPL 专线机场，支持自研客户端与第三方客户端订阅，品牌资料明确覆盖常见 AI 工具使用场景，并存有 2026-08-11 22:46 晚高峰实测截图。",
    "historicalPriceNote": "资料仅确认核心代表档位为 18元/月 100GB，其余高阶档位未在清单中展开，标记为待核实。",
    "plans": [
      {
        "name": "极连云 18元主力套餐",
        "billing": "月付",
        "price": 18,
        "monthlyEquivalent": 18,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "18元/月 100GB IEPL专线方案"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": {
      "testedAt": "2026-08-11 22:46:50 CST",
      "image": "/images/speedtest/jilian.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 22:46:50 晚高峰时段实测截图保留（jilian.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "品牌资料明确说覆盖常见 AI 工具使用场景"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "覆盖常见 AI 工具场景"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未单独说明"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "资料未单独列出流媒体明细"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "18元/月即提供 IEPL 专线 + 自研客户端与第三方订阅双支持",
      "2024年运营，比同为 18 元档的光年梯（2025年）早一年开业",
      "保留有 2026-08-11 22:46 晚高峰时段实测截图"
    ],
    "cons": [
      "同为 18 元/月，流量（100GB）比光年梯（110GB）少 10GB",
      "缺乏完整的全系套餐表与流媒体逐项测试明细"
    ],
    "suitableFor": [
      "预算卡在 18 元/月、主要使用 AI 工具与日常网页且偏好 2024 年开业品牌的用户"
    ],
    "notSuitableFor": [
      "需要超大流量或完整公开多档套餐表的用户"
    ],
    "riskNotes": "与光年梯同为 18 元档 IEPL 方案（100GB vs 110GB），建议结合 2026-08-11 晚高峰测速图按需选择。",
    "homologousGroup": "guangs 联盟域 18元档双子星（极连云 / 光年梯）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "guangnian",
    "slug": "guangnian",
    "rank": 15,
    "isPrimaryFeatured": false,
    "name": "光年梯",
    "enName": "GuangNian Ladder",
    "aliases": [
      "guangnian",
      "光年梯机场"
    ],
    "logo": "/images/logos/guangnian.png",
    "accentColor": "#0284c7",
    "officialUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "affiliateUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "hasAffiliateUrl": true,
    "couponCode": "gnt6666",
    "couponNote": "优惠码 gnt6666",
    "foundedYear": "2025年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入",
    "supportedClients": [
      "光年梯自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "IEPL 专线",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美核心节点（见2026-08-11实测图）",
    "minMonthlyPrice": 18,
    "minAnnualizedMonthlyPrice": null,
    "minOneTimePrice": null,
    "summary": "2025年运营的 18元/月（110GB/月）IEPL + VLESS 机场，支持自研客户端与第三方订阅导入，比同价位极连云多 10GB 流量，覆盖常见 AI 工具与主流流媒体场景。",
    "historicalPriceNote": "资料确认核心代表档位为 18元/月 110GB，其余档位标记为待核实。",
    "plans": [
      {
        "name": "光年梯 18元主力套餐",
        "billing": "月付",
        "price": 18,
        "monthlyEquivalent": 18,
        "traffic": "110GB/月",
        "resetRule": "每月重置",
        "note": "18元/月 110GB IEPL+VLESS方案（比极连云多10GB）"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": {
      "testedAt": "2026-08-11 14:38:04 CST",
      "image": "/images/speedtest/guangnian.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 14:38:04 下午时段实测截图保留（guangnian.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持常见 AI 工具使用场景"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持常见 AI 工具场景"
      },
      "gemini": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持常见 AI 工具场景"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "品牌资料明确说支持主流流媒体使用场景"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持主流流媒体场景"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持主流流媒体场景"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "18元/月提供 110GB 流量（比同档极连云多 10GB），采用 IEPL + VLESS",
      "同时提供自研客户端与第三方订阅导入",
      "保留有 2026-08-11 原始测速截图"
    ],
    "cons": [
      "2025年成立新品牌，长期运营稳定性有待时间检验",
      "缺乏 2026-10-19 抽样表与完整多档套餐明细"
    ],
    "suitableFor": [
      "预算 18 元/月、希望兼顾 AI 工具与主流流媒体且多拿 10GB 流量的用户"
    ],
    "notSuitableFor": [
      "只选择三年以上老牌机场的用户"
    ],
    "riskNotes": "2025年新品牌，建议按月购买体验。",
    "homologousGroup": "guangs 联盟域 18元档双子星（极连云 / 光年梯）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "yifan",
    "slug": "yifan",
    "rank": 16,
    "isPrimaryFeatured": false,
    "name": "一翻云",
    "enName": "1Fly Cloud",
    "aliases": [
      "yifan",
      "1fly",
      "一翻云机场"
    ],
    "logo": "/images/logos/yifan.webp",
    "accentColor": "#0f766e",
    "officialUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "affiliateUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "hasAffiliateUrl": true,
    "couponCode": "yfy6666",
    "couponNote": "基础数据记录优惠码 yfy6666；正文亦记录 9 折优惠码 1FLYYUN",
    "foundedYear": "2025年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "全节点 IEPL 物理专线 + 原生住宅 IP",
    "lineCategory": "IEPL",
    "protocols": [
      "Hysteria 2",
      "VLESS-Reality",
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Hysteria 2 / VLESS-Reality / SS）",
    "supportedClients": [
      "Clash Verge Rev",
      "Clash Meta (Mihomo)",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box",
      "Hiddify",
      "NekoBox"
    ],
    "deviceLimit": "不限速、不限设备数量",
    "peakBandwidth": "官方宣称单节点 2Gbps 大带宽、晚高峰 0 丢包",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/日/新/美五地原生住宅 IP",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 8.17,
    "minOneTimePrice": 100,
    "summary": "2025年运营的技术向 IEPL 专线机场，罕见同时提供 Hysteria 2、VLESS-Reality 与 Shadowsocks 三协议及原生住宅 IP，不限速不限设备，轻享版 ¥20/月 给到 150GB，另有 ¥98/年 小包与三档永久不限时包。",
    "historicalPriceNote": "无冲突；轻享版 ¥20/150GB 在 20 元档专线机场中流量给得最足（同类多为100G–120G）。",
    "plans": [
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": 98,
        "monthlyEquivalent": 8.17,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约8.17元"
      },
      {
        "name": "轻享版",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "20元给到150GB，同价位流量优势明显"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": 35,
        "monthlyEquivalent": 35,
        "traffic": "350GB/月",
        "resetRule": "每月重置",
        "note": "35元350GB高性价比中档"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": 55,
        "monthlyEquivalent": 55,
        "traffic": "600GB/月",
        "resetRule": "每月重置",
        "note": "55元600GB大流量档"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": 95,
        "monthlyEquivalent": 95,
        "traffic": "1200GB/月",
        "resetRule": "每月重置",
        "note": "95元1.2TB超大容量"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": 100,
        "monthlyEquivalent": null,
        "traffic": "100GB",
        "resetRule": "永久不过期",
        "note": "100元100GB永久包"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": 200,
        "monthlyEquivalent": null,
        "traffic": "250GB",
        "resetRule": "永久不过期",
        "note": "200元250GB永久包（0.8元/G）"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": 400,
        "monthlyEquivalent": null,
        "traffic": "500GB",
        "resetRule": "永久不过期",
        "note": "400元500GB永久包（0.8元/G）"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 23,
          "downloadMbps": 477,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 40,
          "downloadMbps": 117,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 42,
          "downloadMbps": 390,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 53,
          "downloadMbps": 136,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 180,
          "downloadMbps": 20,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 00:21:30 CST",
      "image": "/images/speedtest/yifan.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 00:21:30 凌晨批次实测截图保留（yifan.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "原生住宅 IP 支持 ChatGPT"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "同时支持 Hysteria 2、VLESS-Reality 与 Shadowsocks 三大现代协议，对 Mihomo/sing-box 玩家极友好",
      "每 GB 流量定价极具竞争力（¥20/150GB、¥35/350GB、¥95/1.2TB）",
      "不限设备数量，且提供三档永久不过期流量包"
    ],
    "cons": [
      "2025年新品牌，且官方不提供免费试用，首次体验需购买 ¥20 月付档",
      "使用 Hysteria 2 / Reality 需确保本地客户端已升级为 Mihomo (Clash Verge Rev) 或 sing-box 内核"
    ],
    "suitableFor": [
      "使用 Clash Verge Rev / sing-box / Shadowrocket、喜欢 Hysteria 2 与 VLESS-Reality 协议的进阶与高性价比用户"
    ],
    "notSuitableFor": [
      "仍在使用已停更旧版 Clash for Windows（不支持 Reality/Hysteria2）且不愿升级软件的用户"
    ],
    "riskNotes": "官方不提供试用；“晚高峰0丢包”为品牌官方宣传口号（vendor），实际网络表现请结合本地运营商实测。",
    "homologousGroup": "guangs 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "sogo",
    "slug": "sogo",
    "rank": 17,
    "isPrimaryFeatured": false,
    "name": "SOGO云",
    "enName": "SOGO Cloud",
    "aliases": [
      "sogo",
      "Sogo云",
      "SOGO机场"
    ],
    "logo": "/images/logos/sogo.webp",
    "accentColor": "#7c3aed",
    "officialUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "affiliateUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "hasAffiliateUrl": true,
    "couponCode": "SOGO10000",
    "couponNote": "详情记录 9 折优惠码 SOGO10000；汇总表另记录优惠码 sss777",
    "foundedYear": "2025/2026年（汇总表注2026新品牌）",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "全线 IEPL 专线接入 + 三网 BGP 优化",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "仅限自研专属客户端（不提供订阅链接，Clash/Shadowrocket 不可用）",
    "supportedClients": [
      "SOGO云自研客户端（支持 Windows / macOS / iOS / Android）"
    ],
    "deviceLimit": "不限速、不限设备数量",
    "peakBandwidth": "IEPL 专线 + 三网 BGP",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "韩国",
      "其他共15个国家与地区"
    ],
    "regionCount": 15,
    "nodeCountText": "覆盖 15 个国家和地区（主推库覆盖面最广之一）",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": 8.17,
    "minOneTimePrice": 120,
    "summary": "全线 IEPL 专线接入并做三网 BGP 优化的多地区机场，节点覆盖 15 个国家和地区，采用 VLESS 协议，不限速不限设备，仅通过自研专属客户端使用（不提供第三方订阅链接）。",
    "historicalPriceNote": "核心特征写“支持主流软路由”，但介绍正文明确提醒“它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了”，本站严格按正文风险提示标注为仅限自研客户端。",
    "plans": [
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": 98,
        "monthlyEquivalent": 8.17,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约8.17元"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "25元150GB标准月付"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": 45,
        "monthlyEquivalent": 45,
        "traffic": "350GB/月",
        "resetRule": "每月重置",
        "note": "进阶月付档"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": 80,
        "monthlyEquivalent": 80,
        "traffic": "550GB/月",
        "resetRule": "每月重置",
        "note": "大流量月付档"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": 150,
        "monthlyEquivalent": 150,
        "traffic": "1100GB/月",
        "resetRule": "每月重置",
        "note": "1.1TB顶配月付档"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": 120,
        "monthlyEquivalent": null,
        "traffic": "120GB",
        "resetRule": "一次性不限时",
        "note": "120GB不限时流量包"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": 220,
        "monthlyEquivalent": null,
        "traffic": "250GB",
        "resetRule": "一次性不限时",
        "note": "250GB不限时流量包"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": 450,
        "monthlyEquivalent": null,
        "traffic": "500GB",
        "resetRule": "一次性不限时",
        "note": "500GB不限时流量包"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": 850,
        "monthlyEquivalent": null,
        "traffic": "1000GB",
        "resetRule": "一次性不限时",
        "note": "1.0TB不限时流量包"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 26,
          "downloadMbps": 488,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 39,
          "downloadMbps": 118,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 43,
          "downloadMbps": 401,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 57,
          "downloadMbps": 137,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 140,
          "downloadMbps": 17,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 18:57:59 CST",
      "image": "/images/speedtest/sogo.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 18:57:59 傍晚高峰时段实测截图保留（sogo.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT"
      },
      "claude": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      }
    },
    "pros": [
      "覆盖 15 个国家和地区，跨国地区丰富度高",
      "全线 IEPL 专线 + 三网 BGP 优化，不限速不限设备",
      "具备 2026-08-11 傍晚实测图与 2026-10-19 抽样表"
    ],
    "cons": [
      "不提供第三方订阅链接，Clash 与 Shadowrocket 用户无法导入使用",
      "Claude、Gemini、HBO Max、Spotify 均为视节点而定"
    ],
    "suitableFor": [
      "需要 15 国多地区节点覆盖、且习惯直接使用官方自研客户端的用户"
    ],
    "notSuitableFor": [
      "必须使用 Clash Verge Rev 或 Shadowrocket 第三方订阅的用户"
    ],
    "riskNotes": "不提供通用订阅链接，购买前请确认接受其自研客户端模式。",
    "homologousGroup": "guangs 联盟域 25元/150GB 同规格组（SOGO云 / 可信云 / 速界）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "kexin",
    "slug": "kexin",
    "rank": 18,
    "isPrimaryFeatured": false,
    "name": "可信云",
    "enName": "KoSing Cloud",
    "aliases": [
      "kexin",
      "可信云机场",
      "KoSing"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#059669",
    "officialUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "affiliateUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "hasAffiliateUrl": true,
    "couponCode": "kkk333",
    "couponNote": "优惠码 kkk333",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "IEPL 专线",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美核心节点（见2026-08-11实测图）",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": null,
    "minOneTimePrice": null,
    "summary": "2024年运营的 25元/月（150GB/月）IEPL + VLESS 机场，支持第三方客户端订阅，最大特点是品牌资料诚实标注“AI 与流媒体目前缺乏统一实测数据”，不夸大虚假宣传。",
    "historicalPriceNote": "2026-08-11 测速截图中底部仅清晰显示时间 15:32:35 CST，完整日历日期按同批次压缩包暂记为 2026-08-11 并标注待复核。",
    "plans": [
      {
        "name": "可信云 25元标准套餐",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "25元/月 150GB IEPL+VLESS标准方案"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": {
      "testedAt": "2026-08-11 15:32:35 CST（日期由同批次推断，待复核原始记录）",
      "image": "/images/speedtest/kexin.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "存有节点测速实测截图（kexin.png），图中显示时间 15:32:35 CST。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "品牌资料诚实声明缺乏统一实测数据"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "缺乏统一实测数据"
      }
    },
    "pros": [
      "品牌资料透明度高，诚实声明“AI 与流媒体缺乏统一实测数据”，不做虚假满口承诺",
      "支持 Clash / Shadowrocket 等第三方客户端通用订阅（比 SOGO 云灵活）",
      "IEPL 专线 + VLESS 协议，2024年运营"
    ],
    "cons": [
      "缺乏完整的全档位价格表与流媒体实测矩阵",
      "25元/150GB 定价在同类 IEPL 机场中属于中规中矩"
    ],
    "suitableFor": [
      "反感夸大营销、看重品牌方诚实度且以常规网页/办公代理为主的 Clash 用户"
    ],
    "notSuitableFor": [
      "需要明确流媒体与 AI 全解锁承诺的用户（同价位可看速界或光速云）"
    ],
    "riskNotes": "AI 与流媒体解锁未做承诺，测速图完整日历日期按 2026-08-11 批次归档。",
    "homologousGroup": "guangs 联盟域 25元/150GB 同规格组（SOGO云 / 可信云 / 速界）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "sujie",
    "slug": "sujie",
    "rank": 19,
    "isPrimaryFeatured": false,
    "name": "速界",
    "enName": "SpeedWorld",
    "aliases": [
      "sujie",
      "速界机场",
      "SpeedWorld"
    ],
    "logo": "/images/logos/sujie.webp",
    "accentColor": "#3b82f6",
    "officialUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "affiliateUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "hasAffiliateUrl": true,
    "couponCode": "sss1111",
    "couponNote": "优惠码 sss1111",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入",
    "supportedClients": [
      "速界自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "IEPL 专线",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美核心节点（见2026-08-11实测图）",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": null,
    "minOneTimePrice": null,
    "summary": "2024年运营的 25元/月（150GB/月）IEPL + VLESS 机场，支持自研客户端与第三方订阅导入，在 25 元档中唯一明确强调 ChatGPT、Claude、Gemini 等 AI 工具访问场景，同时客观提示 AI 可用性受平台风控影响。",
    "historicalPriceNote": "资料确认代表套餐为 25元/月 150GB，其余档位待核实。",
    "plans": [
      {
        "name": "速界 25元 AI 主力套餐",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "25元/月 150GB IEPL+VLESS，针对 AI 工具访问优化"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": {
      "testedAt": "2026-08-11 15:39:36 CST",
      "image": "/images/speedtest/sujie.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 15:39:36 下午批次实测截图保留（sujie.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料重点支持",
        "note": "明确强调 ChatGPT 使用场景（受IP与平台规则动态影响）"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料重点支持",
        "note": "明确强调 Claude 使用场景"
      },
      "gemini": {
        "status": "vendor_claimed",
        "label": "品牌资料重点支持",
        "note": "明确强调 Gemini 使用场景"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未单独列出流媒体明细"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "25元档中唯一明确围绕 ChatGPT / Claude / Gemini 生产力场景定位的 IEPL 品牌",
      "同时支持自研客户端与 Clash 第三方订阅导入（优于仅自研客户端的 SOGO 云）",
      "客观说明 AI 可用性受平台风控动态影响，表述严谨"
    ],
    "cons": [
      "未列出流媒体逐项解锁与更多价格档位明细"
    ],
    "suitableFor": [
      "核心需求为 ChatGPT、Claude、Gemini 日常办公与代码辅助的 25 元预算用户"
    ],
    "notSuitableFor": [
      "以冷门地区流媒体解锁为唯一目标的用户"
    ],
    "riskNotes": "AI 平台风控规则动态变化，任何机场均无法承诺单个 IP 永久不被风控，使用时建议配合干净浏览器环境。",
    "homologousGroup": "guangs 联盟域 25元/150GB 同规格组（SOGO云 / 可信云 / 速界）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "shanyue",
    "slug": "shanyue",
    "rank": 20,
    "isPrimaryFeatured": false,
    "name": "闪跃",
    "enName": "FlashLeap",
    "aliases": [
      "shanyue",
      "FlashLeap",
      "闪跃机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#0284c7",
    "officialUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "hasAffiliateUrl": true,
    "couponCode": "shanyue",
    "couponNote": "优惠码 shanyue 享 8 折（仅限闪动/飞跃/瞬移/跃迁月付档，年付版不适用）",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "纯 IPLC 专线 + 骨干网接入 + 原生 IP",
    "lineCategory": "IPLC",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "仅限官方专属客户端（下载登录即用，不提供订阅链接）",
    "supportedClients": [
      "闪跃官方专属客户端"
    ],
    "deviceLimit": "多设备支持（按套餐规定）",
    "peakBandwidth": "纯 IPLC 专线骨干网接入",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "覆盖港/台/新/日/美原生 IP 节点",
    "minMonthlyPrice": 24,
    "minAnnualizedMonthlyPrice": 8,
    "minOneTimePrice": null,
    "summary": "定位偏高端的纯 IPLC 专线机场，依托骨干网接入与原生 IP 主打晚高峰低延迟稳定连接，支持专属客户端登录即用（不提供订阅链接），提供 ¥96/年（60GB/月）及 ¥24–¥134/月 四档月付套餐（月付享8折）。",
    "historicalPriceNote": "8元/月起指「闪跃年付版」¥96/年（60GB/月）折算月均成本；最低月付「闪动」原价 ¥24/月（150GB/月），使用 8 折码 shanyue 后为 ¥19.2/月。",
    "plans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": 96,
        "monthlyEquivalent": 8,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合8元/月（不适用8折码）"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": 24,
        "monthlyEquivalent": 24,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "可用8折码 shanyue（折后¥19.2）"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": 44,
        "monthlyEquivalent": 44,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "可用8折码 shanyue（折后¥35.2）"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": 84,
        "monthlyEquivalent": 84,
        "traffic": "600GB/月",
        "resetRule": "每月重置",
        "note": "可用8折码 shanyue（折后¥67.2）"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": 134,
        "monthlyEquivalent": 134,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "可用8折码 shanyue（折后¥107.2）"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 23,
          "downloadMbps": 548,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 38,
          "downloadMbps": 110,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 44,
          "downloadMbps": 383,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 53,
          "downloadMbps": 144,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 143,
          "downloadMbps": 18,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "正文提支持Gemini，列表标注视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "原生 IP 全解锁 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "原生 IP 解锁 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "原生 IP 解锁 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "纯 IPLC 专线接入，2026-10-19 抽样中香港节点达 548Mbps（延迟 23ms）",
      "月付四档套餐全部支持 8 折码 shanyue（150GB 月付折后仅 ¥19.2）",
      "专属客户端一键登录即连"
    ],
    "cons": [
      "仅限官方专属客户端，不提供 Clash / Shadowrocket 订阅链接",
      "无一次性永久不限时流量包档位"
    ],
    "suitableFor": [
      "长期高频使用 AI 工具或深夜追剧、看重纯 IPLC 稳定性且习惯用专属客户端的用户"
    ],
    "notSuitableFor": [
      "需要导入第三方 Clash 客户端或软路由的用户"
    ],
    "riskNotes": "不提供第三方订阅链接；年付版（¥96）不参与 8 折优惠码活动。",
    "homologousGroup": "vip02 联盟域体系（与 Firefly 同联盟域前缀）",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "quanqiu",
    "slug": "quanqiu",
    "rank": 21,
    "isPrimaryFeatured": false,
    "name": "全球云",
    "enName": "GlobalCloud",
    "aliases": [
      "quanqiu",
      "全球云机场",
      "GlobalCloud"
    ],
    "logo": "/images/logos/quanqiu.png",
    "accentColor": "#1d4ed8",
    "officialUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "affiliateUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "hasAffiliateUrl": true,
    "couponCode": "qq88",
    "couponNote": "基础信息记录 8 折优惠码 qq88；汇总表另记录优惠码 qqy7777",
    "foundedYear": "2025/2026年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IPLC/IEPL 专线中转 + BGP 智能优化",
    "lineCategory": "IPLC/IEPL",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "仅限官方专属客户端（下载登录即用，不提供订阅链接）",
    "supportedClients": [
      "全球云官方专属客户端"
    ],
    "deviceLimit": "多设备支持",
    "peakBandwidth": "官方宣称 2Gbps+ 带宽资源",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国",
      "全球多地区"
    ],
    "regionCount": 10,
    "nodeCountText": "官方宣称覆盖全球 60+ 节点",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 8.25,
    "minOneTimePrice": 100,
    "summary": "采用 Trojan 与 Shadowsocks 双协议及 IPLC/IEPL 专线中转的 60+ 节点机场，提供 2Gbps+ 带宽资源，使用官方专属客户端（不提供订阅链接），涵盖 ¥99/年（59GB/月）、¥20–¥180/月 及三档不限时流量包。",
    "historicalPriceNote": "注意全球云的「轻量版」年付 ¥99 为 59GB/月（与光速云早期历史口径数字相同，但全球云现行套餐表仍标注为 59GB/月）。",
    "plans": [
      {
        "name": "轻量版",
        "billing": "年付",
        "price": 99,
        "monthlyEquivalent": 8.25,
        "traffic": "59GB/月",
        "resetRule": "每月重置",
        "note": "折合8.25元/月，59GB/月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "120GB/月",
        "resetRule": "每月重置",
        "note": "20元120GB入门月付"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": 40,
        "monthlyEquivalent": 40,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "40元300GB主力月付"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": 100,
        "monthlyEquivalent": 100,
        "traffic": "700GB/月",
        "resetRule": "每月重置",
        "note": "大流量月付方案"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": 180,
        "monthlyEquivalent": 180,
        "traffic": "1500GB/月",
        "resetRule": "每月重置",
        "note": "团队商业1.5TB方案"
      },
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": 100,
        "monthlyEquivalent": null,
        "traffic": "100GB",
        "resetRule": "一次性不限时",
        "note": "100元100GB不限时包"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": 360,
        "monthlyEquivalent": null,
        "traffic": "400GB",
        "resetRule": "一次性不限时",
        "note": "360元400GB不限时包"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": 700,
        "monthlyEquivalent": null,
        "traffic": "800GB",
        "resetRule": "一次性不限时",
        "note": "700元800GB不限时包"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": 680,
        "monthlyEquivalent": 680,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "独享私人专线"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-10-19",
      "condition": "原文标注，非晚高峰",
      "status": "measured",
      "nodes": [
        {
          "region": "香港",
          "latency": 25,
          "downloadMbps": 489,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 37,
          "downloadMbps": 117,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 45,
          "downloadMbps": 430,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "日本",
          "latency": 55,
          "downloadMbps": 133,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 138,
          "downloadMbps": 18,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": {
      "testedAt": "2026-08-11 15:50:43 CST",
      "image": "/images/speedtest/quanqiu.png",
      "protocol": "Shadowsocks",
      "backend": "MAI-TEST-BOT 2.0.0-dev / 珠海联通 5Gbps / 32线程",
      "summary": "2026-08-11 15:50:43 下午批次实测截图保留（quanqiu.png）。"
    },
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 ChatGPT"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Claude"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 HBO Max"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 TikTok"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 Spotify"
      }
    },
    "pros": [
      "60+ 全球节点覆盖，提供月付、年付、不限时流量包与独享专线全产品线",
      "具备 2026-08-11 实测图与 2026-10-19 抽样双重验证（新加坡达 430Mbps）",
      "提供 8 折优惠码 qq88"
    ],
    "cons": [
      "仅支持官方专属客户端，不提供 Clash / Shadowrocket 订阅链接",
      "轻量版年付 ¥99 为 59GB/月（略低于光速云的 69GB/月）"
    ],
    "suitableFor": [
      "看重 60+ 节点覆盖与专属客户端免配置体验的用户"
    ],
    "notSuitableFor": [
      "需要第三方 Clash 订阅链接的用户"
    ],
    "riskNotes": "仅支持专属客户端，不支持导入 Clash 等第三方软件。",
    "homologousGroup": "guangs 联盟域体系",
    "dataStatus": "measured",
    "sourceNote": "42家机场品牌清单.txt + 2026-08-11 测速截图",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "shandianshu",
    "slug": "shandianshu",
    "rank": 22,
    "isPrimaryFeatured": false,
    "name": "闪电鼠",
    "enName": "ShanDianShu",
    "aliases": [
      "shandianshu",
      "闪电鼠机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#eab308",
    "officialUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "affiliateUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "hasAffiliateUrl": true,
    "couponCode": "sd88",
    "couponNote": "优惠码 sd88；季付及以上 7 折",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入（Clash / Shadowrocket / v2rayN）",
    "supportedClients": [
      "自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 5.6,
    "minOneTimePrice": null,
    "summary": "2024年运营的 5.6元/月（60GB/月）极限平价 IEPL + VLESS 机场，支持自研客户端与第三方订阅导入，季付及以上享 7 折，推广链接路由格式完整正常。",
    "historicalPriceNote": "5.6元/月为年付折算月均成本（60GB/月），与大佬云、云界线、榴莲云、环球梯并列为极限平价方案。",
    "plans": [
      {
        "name": "极限平价年付方案",
        "billing": "年付",
        "price": 67.2,
        "monthlyEquivalent": 5.6,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "年付折合约5.6元/月，60GB/月；季付及以上7折"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "5.6 元/月（60GB/月）为资料库中最低价格区间之一",
      "明确采用 IEPL + VLESS 协议，且同时支持自研客户端与第三方订阅导入",
      "推广链接格式完整（比云界线、环球梯更规范，比榴莲云协议更明确）"
    ],
    "cons": [
      "与大佬云、云界线、榴莲云、环球梯同质化严重",
      "缺乏独立测速截图与解锁测试数据"
    ],
    "suitableFor": [
      "预算极低（约 5.6 元/月）、需要明确 VLESS 协议与 Clash 订阅的轻度用户"
    ],
    "notSuitableFor": [
      "重度视频或高可靠性企业办公用户"
    ],
    "riskNotes": "属于 qwerty 5.6 元同规格矩阵，建议作为低成本备用或先小额验证。",
    "homologousGroup": "qwerty 5.6元/60GB 同规格矩阵（大佬云/闪电鼠/云界线/榴莲云/环球梯）",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "yunjiexian",
    "slug": "yunjiexian",
    "rank": 23,
    "isPrimaryFeatured": false,
    "name": "云界线",
    "enName": "YunJieXian",
    "aliases": [
      "yunjiexian",
      "云界线机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#64748b",
    "officialUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "affiliateUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "hasAffiliateUrl": true,
    "couponCode": "yjx888",
    "couponNote": "优惠码 yjx888；季付及以上 7 折",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入",
    "supportedClients": [
      "自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 5.6,
    "minOneTimePrice": null,
    "summary": "2024年运营的 5.6元/月（60GB/月）IEPL + VLESS 机场，支持自研客户端与第三方订阅导入；注意其联盟链接格式缺少 # 号，访问时需留意路由跳转。",
    "historicalPriceNote": "5.6元/月为年付折算月均价；原文明确提示“联盟链接格式与其他品牌不同（缺少 #）”。",
    "plans": [
      {
        "name": "入门年付方案（折算档）",
        "billing": "年付",
        "price": 67.2,
        "monthlyEquivalent": 5.6,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "年付折合约5.6元/月，60GB/月；季付及以上7折"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "5.6 元/月（60GB/月）低价 IEPL + VLESS 方案",
      "支持自研客户端与第三方订阅导入"
    ],
    "cons": [
      "原始联盟链接缺少 `#` 路由符（`/?code=HBaZ91c6`），部分前端面板可能无法自动识别邀请码",
      "与闪电鼠、大佬云规格高度雷同，无独立实测数据"
    ],
    "suitableFor": [
      "仅将此品牌作为 5.6 元档备选参考的用户（同规格优先建议选链接正常的闪电鼠或大佬云）"
    ],
    "notSuitableFor": [
      "追求省心售后与完备实测证据的用户"
    ],
    "riskNotes": "推广链接格式与其他同系品牌略有不同（缺少 #），注册前建议先确认页面打开正常。",
    "homologousGroup": "qwerty 5.6元/60GB 同规格矩阵（大佬云/闪电鼠/云界线/榴莲云/环球梯）",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "liulianyun",
    "slug": "liulianyun",
    "rank": 24,
    "isPrimaryFeatured": false,
    "name": "榴莲云",
    "enName": "LiuLianYun",
    "aliases": [
      "liulianyun",
      "榴莲云机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#84cc16",
    "officialUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "affiliateUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "hasAffiliateUrl": true,
    "couponCode": "ll88",
    "couponNote": "优惠码 ll88；季付及以上 7 折",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "待核实（协议未明确）"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入",
    "supportedClients": [
      "自研客户端",
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 5.6,
    "minOneTimePrice": null,
    "summary": "2024年运营的 5.6元/月（60GB/月）IEPL 专线机场，支持自研客户端与第三方订阅导入，但它是 5.6 元档矩阵中唯一未明确标注具体传输协议类型的品牌。",
    "historicalPriceNote": "原文明确说明：“榴莲云是 5.6 元档中唯一未明确标注协议类型的品牌。”",
    "plans": [
      {
        "name": "入门年付方案（折算档）",
        "billing": "年付",
        "price": 67.2,
        "monthlyEquivalent": 5.6,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "年付折合约5.6元/月，60GB/月；季付及以上7折"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "5.6 元/月（60GB/月）超低门槛 IEPL 方案",
      "支持自研客户端与第三方订阅导入"
    ],
    "cons": [
      "协议类型未在品牌资料中明确提供",
      "无独立实测与流媒体解锁数据"
    ],
    "suitableFor": [
      "只看重最低预算且不在意底层协议细节的用户"
    ],
    "notSuitableFor": [
      "明确指定必须使用 VLESS 协议的用户（建议改选闪电鼠或大佬云）"
    ],
    "riskNotes": "协议类型待核实，若明确需要 VLESS 协议请优先考虑同价位的闪电鼠或大佬云。",
    "homologousGroup": "qwerty 5.6元/60GB 同规格矩阵（大佬云/闪电鼠/云界线/榴莲云/环球梯）",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "shenxing",
    "slug": "shenxing",
    "rank": 25,
    "isPrimaryFeatured": false,
    "name": "神行加速",
    "enName": "ShenXing Accelerator",
    "aliases": [
      "shenxing",
      "神行机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#0284c7",
    "officialUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "affiliateUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "hasAffiliateUrl": true,
    "couponCode": "xs0077",
    "couponNote": "优惠码 xs0077；新用户享 7 折",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入",
    "supportedClients": [
      "自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 14,
    "minOneTimePrice": null,
    "summary": "2024年运营的 14元/月（120GB/月，年付折算）IEPL + VLESS 机场，支持自研客户端与第三方订阅导入，新用户享 7 折，定位介于 5.6 元小流量档与 20 元主力档之间。",
    "historicalPriceNote": "14元/月为年付折算月均价（120GB/月，是 5.6 元档 60GB 的两倍）。",
    "plans": [
      {
        "name": "神行年付中量方案",
        "billing": "年付",
        "price": 168,
        "monthlyEquivalent": 14,
        "traffic": "120GB/月",
        "resetRule": "每月重置",
        "note": "年付折合约14元/月，120GB/月；新用户7折"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "提供 120GB/月 流量，是同联盟域 5.6 元档（60GB）的两倍，解决了 60GB 不够用的痛点",
      "新用户可享 7 折优惠（xs0077），且支持自研客户端与第三方订阅"
    ],
    "cons": [
      "按每 GB 折算成本看，两份 5.6 元档（11.2元/120GB）比 14 元/120GB 略便宜",
      "缺乏独立实测截图与流媒体测试记录"
    ],
    "suitableFor": [
      "倾向单个账号年付且每月流量需求稳定在 100–120GB 之间的用户"
    ],
    "notSuitableFor": [
      "追求极致单 G 性价比或需要月付灵活测试的用户"
    ],
    "riskNotes": "14元/月为年付折算价，下单前请核对新用户 7 折码 xs0077 折后总价。",
    "homologousGroup": "qwerty 联盟域体系",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "huanqiuti",
    "slug": "huanqiuti",
    "rank": 26,
    "isPrimaryFeatured": false,
    "name": "环球梯",
    "enName": "HuanQiuTi",
    "aliases": [
      "huanqiuti",
      "环球梯机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#64748b",
    "officialUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "affiliateUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "hasAffiliateUrl": true,
    "couponCode": "HQ66",
    "couponNote": "优惠码 HQ66；季付及以上 7 折",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端 + 第三方订阅导入",
    "supportedClients": [
      "自研客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 5.6,
    "minOneTimePrice": null,
    "summary": "2024年运营的 5.6元/月（60GB/月）IEPL + VLESS 机场，支持自研客户端与第三方订阅导入；与云界线相同，其联盟链接格式缺少 # 号，注册前需确认链接正常打开。",
    "historicalPriceNote": "原文明确说明：“和云界线一样，它的推广链接格式与其他品牌略有不同，注册前建议确认链接可正常打开。”",
    "plans": [
      {
        "name": "入门年付方案（折算档）",
        "billing": "年付",
        "price": 67.2,
        "monthlyEquivalent": 5.6,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "年付折合约5.6元/月，60GB/月；季付及以上7折"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "5.6 元/月（60GB/月）低价 IEPL + VLESS 规格",
      "支持自研客户端与第三方订阅导入"
    ],
    "cons": [
      "推广链接缺少 `#` 路由符（`/?code=9I4KRNPH`），存在链接格式异常提醒",
      "与闪电鼠、大佬云完全同质化，无独立实测数据"
    ],
    "suitableFor": [
      "了解 qwerty 5.6 元矩阵、仅作备选对比的用户"
    ],
    "notSuitableFor": [
      "寻求独立实测保障与主力稳定线路的用户"
    ],
    "riskNotes": "链接缺少 # 符号，同规格建议优先查看链接格式正常的闪电鼠或大佬云。",
    "homologousGroup": "qwerty 5.6元/60GB 同规格矩阵（大佬云/闪电鼠/云界线/榴莲云/环球梯）",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "yinxingren",
    "slug": "yinxingren",
    "rank": 27,
    "isPrimaryFeatured": false,
    "name": "隐形人",
    "enName": "Invisible Cloud",
    "aliases": [
      "yinxingren",
      "隐形人机场",
      "Invisible"
    ],
    "logo": "/images/logos/yinxingren.png",
    "accentColor": "#334155",
    "officialUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "affiliateUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "hasAffiliateUrl": true,
    "couponCode": "moon80",
    "couponNote": "基础信息记录 8 折优惠码 moon80；基础数据行另记录优惠码 yxr888",
    "foundedYear": "2024年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "企业级 IPLC 专线直连",
    "lineCategory": "IPLC",
    "protocols": [
      "待核实（原文未标注协议）"
    ],
    "clientSupport": "proprietary_only",
    "clientSupportLabel": "仅限自带专属客户端（不提供订阅链接，Clash/Shadowrocket 不可用）",
    "supportedClients": [
      "隐形人官方自带客户端"
    ],
    "deviceLimit": "多设备同时在线（具体数量依套餐而定）",
    "peakBandwidth": "品牌资料宣称晚高峰零卡顿、1小时修复承诺",
    "regions": [
      "香港",
      "日本",
      "美国",
      "新加坡",
      "台湾"
    ],
    "regionCount": 5,
    "nodeCountText": "汇总表称 60+ 节点详细清单（覆盖港/日/美/新/台）",
    "minMonthlyPrice": 24,
    "minAnnualizedMonthlyPrice": 9.08,
    "minOneTimePrice": 229,
    "summary": "2024年运营的企业级 IPLC 专线机场，仅提供自带客户端（不支持 Clash 等第三方订阅），涵盖年付 ¥109（80GB/月）、月付 ¥24（144GB/月）至 ¥185（1.6TB/月）及一次性流量包，但暂无本站可核实的实测速度数值。",
    "historicalPriceNote": "基础数据行写“24元/月 100GB/月”，套餐表核实「白银纪元」为 ¥24/月（144GB/月），年付「星耀风暴」为 ¥109/年（80GB/月，折合 ¥9.08/月）。2026-10-19 测速表各地区均为空值（—）。",
    "plans": [
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": 109,
        "monthlyEquivalent": 9.08,
        "traffic": "80GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约9.08元"
      },
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": 24,
        "monthlyEquivalent": 24,
        "traffic": "144GB/月",
        "resetRule": "每月重置",
        "note": "可用8折码 moon80（折后¥19.2）"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": 48,
        "monthlyEquivalent": 48,
        "traffic": "360GB/月",
        "resetRule": "每月重置",
        "note": "进阶月付套餐"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": 105,
        "monthlyEquivalent": 105,
        "traffic": "750GB/月",
        "resetRule": "每月重置",
        "note": "高流量月付套餐"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": 185,
        "monthlyEquivalent": 185,
        "traffic": "1600GB/月",
        "resetRule": "每月重置",
        "note": "1.6TB旗舰月付套餐"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": 229,
        "monthlyEquivalent": null,
        "traffic": "160GB",
        "resetRule": "一次性不限时",
        "note": "229元160GB不限时包"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": 549,
        "monthlyEquivalent": null,
        "traffic": "420GB",
        "resetRule": "一次性不限时",
        "note": "549元420GB不限时包"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": 1199,
        "monthlyEquivalent": null,
        "traffic": "1000GB",
        "resetRule": "一次性不限时",
        "note": "1199元1.0TB不限时包"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": 680,
        "monthlyEquivalent": 680,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "商业定制专线"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "官方标注支持 ChatGPT"
      },
      "claude": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "gemini": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "官方标注支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "官方标注支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "官方标注支持 YouTube"
      },
      "hbomax": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "官方标注支持 HBO Max"
      },
      "tiktok": {
        "status": "partial",
        "label": "部分节点支持",
        "note": "视节点而定"
      },
      "spotify": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "官方标注支持 Spotify"
      }
    },
    "pros": [
      "套餐档位丰富（80GB 年付至 1.6TB 月付），并提供 8 折优惠码 moon80",
      "自带客户端一键连接，品牌资料宣称提供 1 小时故障修复响应机制（vendor）"
    ],
    "cons": [
      "不提供第三方订阅链接，Clash / Shadowrocket 用户无法使用（不如同规格梯子云灵活）",
      "2026-10-19 与 2026-08-11 均无实测速度数据，且一次性流量包定价偏高（¥229/160GB）"
    ],
    "suitableFor": [
      "习惯使用专属客户端、愿意使用 8 折码体验白银纪元月付档的用户"
    ],
    "notSuitableFor": [
      "需要使用 Clash 订阅或要求必须查看独立测速图才下单的用户（建议看梯子云或光速云）"
    ],
    "riskNotes": "「1小时修复承诺」「晚高峰零卡顿」均为品牌方资料声明（dataStatus: vendor）；不支持第三方客户端订阅。",
    "homologousGroup": "invisibleaff / varnexa 关联体系",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "tiziyun",
    "slug": "tiziyun",
    "rank": 28,
    "isPrimaryFeatured": false,
    "name": "梯子云",
    "enName": "LadderCloud",
    "aliases": [
      "tiziyun",
      "LadderCloud",
      "梯子云机场"
    ],
    "logo": "/images/logos/tiziyun.png",
    "accentColor": "#2563eb",
    "officialUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "affiliateUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "hasAffiliateUrl": true,
    "couponCode": "tiziyun",
    "couponNote": "优惠码 tiziyun",
    "foundedYear": "2025年",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IEPL 专线（含高峰冗余带宽）",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研全平台客户端（小白一键登录）+ 通用第三方订阅双支持",
    "supportedClients": [
      "梯子云自研全平台客户端",
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box"
    ],
    "deviceLimit": "多设备支持",
    "peakBandwidth": "品牌资料宣称 2Gbps+ 独立带宽（含 500Mbps 级高峰冗余）",
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "regionCount": 5,
    "nodeCountText": "品牌资料宣称 60+ 节点",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 7.4,
    "minOneTimePrice": null,
    "summary": "2025年运营的 IEPL + VLESS 机场，最大特色是同时支持“零门槛一键登录自研全平台客户端”与“Clash 通用订阅导入”，年付折算约 7.4元/月（60GB/月），品牌资料宣称配备 60+ 节点与 2Gbps+ 带宽。",
    "historicalPriceNote": "资料确认入门年付折算约 7.4元/月（60GB/月），其余月付档位待从官网后台进一步核实。",
    "plans": [
      {
        "name": "梯子云入门年付方案",
        "billing": "年付",
        "price": 88.8,
        "monthlyEquivalent": 7.4,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "年付折合约7.4元/月，60GB/月"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "品牌资料宣称支持 ChatGPT 等高频 AI 工具"
      },
      "claude": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "品牌资料宣称支持 Claude"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "品牌资料宣称支持 Netflix"
      },
      "disney": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "品牌资料宣称支持 Disney+"
      },
      "youtube": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "支持 YouTube"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "品牌资料支持",
        "note": "品牌资料宣称支持 TikTok"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "兼顾“小白自研客户端一键登录”与“进阶玩家通用订阅导入”，比仅限自带客户端的隐形人更灵活",
      "IEPL 专线 + VLESS 协议，入门年付折算约 7.4 元/月（60GB/月）"
    ],
    "cons": [
      "缺乏本站独立测速截图与完整多档位价格表",
      "2025年新品牌，长期表现需持续观察"
    ],
    "suitableFor": [
      "希望手机用专属 App 一键登录、电脑同时导入 Clash Verge Rev 的双栖用户"
    ],
    "notSuitableFor": [
      "要求必须有历史测速截图佐证才购买的用户"
    ],
    "riskNotes": "「2Gbps+独立带宽」「完美解锁」均为品牌资料显示（dataStatus: vendor），实际体验请以实测为准。",
    "homologousGroup": "ladderaff / varnexa 关联体系",
    "dataStatus": "vendor",
    "sourceNote": "42家机场品牌清单.txt",
    "verifiedDate": "2026-10-29",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "wgetcloud",
    "slug": "wgetcloud",
    "rank": 29,
    "isPrimaryFeatured": false,
    "name": "WgetCloud",
    "enName": "WgetCloud",
    "aliases": [
      "wgetcloud",
      "全球加速"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#0f172a",
    "officialUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "affiliateUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "hasAffiliateUrl": true,
    "couponCode": null,
    "couponNote": "历史记录未列公开优惠码（当期活动待核实）",
    "foundedYear": "历史老牌（2026-08-24归档记录）",
    "paymentMethods": [
      "待核实"
    ],
    "lineType": "精品专线服务",
    "lineCategory": "专线",
    "protocols": [
      "Trojan"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Clash / Shadowrocket / Trojan）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "Surge",
      "Stash"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "2026-05-02 历史实测五地区平均下载均超 400Mbps (50MB/s+)",
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国",
      "韩国",
      "马来西亚",
      "泰国",
      "菲律宾",
      "印尼",
      "印度",
      "澳大利亚",
      "加拿大",
      "巴西",
      "英国"
    ],
    "regionCount": 15,
    "nodeCountText": "2026-05-02 历史测速覆盖 59 个节点、15 个地区",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 99,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-24归档，排位后置）：采用 Trojan 协议，无单独月付档，季付 ¥297 起（230GB/月，折合 99元/月）；保留有 2026-05-02 的 59 节点全非零历史测速记录，当前实时价格与运营状态需在官网重新核对。",
    "historicalPriceNote": "所有套餐与测速均来自 2026-05-02 / 2026-08-24 历史项目记录，不代表 2026-10-19 新测或实时速度。",
    "plans": [
      {
        "name": "基础专线服务（历史记录）",
        "billing": "季付",
        "price": 297,
        "monthlyEquivalent": 99,
        "traffic": "230GB/月",
        "resetRule": "每月重置",
        "note": "季付¥297（折合99元/月），旧数据为准请官网核对"
      },
      {
        "name": "优质专线服务（历史记录）",
        "billing": "季付",
        "price": 327,
        "monthlyEquivalent": 109,
        "traffic": "250GB/月",
        "resetRule": "每月重置",
        "note": "季付¥327（折合109元/月）"
      },
      {
        "name": "精品专线服务（历史记录）",
        "billing": "季付",
        "price": 357,
        "monthlyEquivalent": 119,
        "traffic": "270GB/月",
        "resetRule": "每月重置",
        "note": "季付¥357（折合119元/月）"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-05-02（历史地区统计值）",
      "condition": "历史59节点多地区均值记录，非实时测速",
      "status": "historical",
      "nodes": [
        {
          "region": "日本",
          "latency": 69.4,
          "downloadMbps": 462.04,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "美国",
          "latency": 170.2,
          "downloadMbps": 440.04,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "香港",
          "latency": 25.9,
          "downloadMbps": 431.24,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "新加坡",
          "latency": 55.6,
          "downloadMbps": 422.97,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "台湾",
          "latency": 41.3,
          "downloadMbps": 407.66,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "印度",
          "latency": 95,
          "downloadMbps": 341.92,
          "uploadMbps": null,
          "packetLoss": "0%"
        },
        {
          "region": "印尼",
          "latency": 88,
          "downloadMbps": 318.64,
          "uploadMbps": null,
          "packetLoss": "0%"
        }
      ]
    },
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-05-02 历史测试：部分节点可用"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "历史记录未单列"
      },
      "gemini": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-05-02 历史测试：部分节点可用"
      },
      "netflix": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-05-02 历史测试：部分节点可用"
      },
      "disney": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-05-02 历史测试：部分节点可用"
      },
      "youtube": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-05-02 历史测试：部分节点可用"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "2026-05-02 历史测速中 59 个节点全部非零，日/美/港/新/台五地平均下载均超 400Mbps（50MB/s+）",
      "覆盖 15 个国家和地区（含印、印尼、澳、加、巴、英等）"
    ],
    "cons": [
      "无直接月付档位，季付 ¥297 起步门槛高（折合 ¥99/月）",
      "套餐与测速均为 2026-05 / 2026-08 历史归档记录，当期价格与可用性待核实"
    ],
    "suitableFor": [
      "预算充足（月均百元级）、了解其历史口碑且愿意在官网复核当期套餐的高端用户"
    ],
    "notSuitableFor": [
      "追求高性价比或需要先买 20 元单月套餐测试的用户（优先推荐光速云或一翻云）"
    ],
    "riskNotes": "本页数据为 2026-05-02 历史测速与 2026-08-24 归档记录，下单前务必在官网核实最新价格与在线状态。",
    "homologousGroup": "独立历史档案品牌",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（第二部分历史档案）",
    "verifiedDate": "2026-08-24",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "baiyueguang",
    "slug": "baiyueguang",
    "rank": 30,
    "isPrimaryFeatured": false,
    "name": "白月光",
    "enName": "BaiYueGuang",
    "aliases": [
      "baiyueguang",
      "Sibker",
      "白月光机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#475569",
    "officialUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "affiliateUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "hasAffiliateUrl": true,
    "couponCode": null,
    "couponNote": "历史记录未列公开优惠码（待核实）",
    "foundedYear": "历史档案（2026-08-24记录）",
    "paymentMethods": [
      "待核实"
    ],
    "lineType": "多地区网络代理服务",
    "lineCategory": "待核实",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Shadowsocks / Clash）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "2026-07-17 历史测速香港平均 114.94Mbps (14.37MB/s)",
    "regions": [
      "香港",
      "美国",
      "日本",
      "台湾",
      "新加坡",
      "加拿大",
      "韩国",
      "越南",
      "柬埔寨",
      "马来西亚",
      "泰国",
      "印度",
      "孟加拉",
      "尼泊尔",
      "菲律宾"
    ],
    "regionCount": 15,
    "nodeCountText": "2026-07-17 历史测速覆盖 108 个节点、涉及 79 个地区名目",
    "minMonthlyPrice": null,
    "minAnnualizedMonthlyPrice": 22,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-24归档）：采用 Shadowsocks 协议，季付入门档 ¥66（100GB/月，折合 22元/月），2026-07-17 历史测速覆盖 108 个节点（涉及 79 个冷门与热门地区名目），当期状态需重新核对。",
    "historicalPriceNote": "数据来自 2026-07-17 历史测速与 2026-08-24 归档记录；注意ENTITY_REGISTRY曾误将其链接写为WgetCloud链接，本站已按原文第1020行修正为 sibker.com 保存入口。",
    "plans": [
      {
        "name": "小包（历史记录）",
        "billing": "季付",
        "price": 66,
        "monthlyEquivalent": 22,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "季付¥66（折合22元/月）"
      },
      {
        "name": "中包（历史记录）",
        "billing": "季付",
        "price": 126,
        "monthlyEquivalent": 42,
        "traffic": "250GB/月",
        "resetRule": "每月重置",
        "note": "季付¥126（折合42元/月）"
      },
      {
        "name": "大包（历史记录）",
        "billing": "季付",
        "price": 156,
        "monthlyEquivalent": 52,
        "traffic": "400GB/月",
        "resetRule": "每月重置",
        "note": "季付¥156（折合52元/月）"
      },
      {
        "name": "超大包（历史记录）",
        "billing": "季付",
        "price": 216,
        "monthlyEquivalent": 72,
        "traffic": "750GB/月",
        "resetRule": "每月重置",
        "note": "季付¥216（折合72元/月）"
      },
      {
        "name": "不差钱（历史记录）",
        "billing": "季付",
        "price": 231,
        "monthlyEquivalent": 77,
        "traffic": "900GB/月",
        "resetRule": "每月重置",
        "note": "季付¥231（折合77元/月）"
      },
      {
        "name": "旗舰包（历史记录）",
        "billing": "年付",
        "price": 2500,
        "monthlyEquivalent": 208.33,
        "traffic": "2500GB/月",
        "resetRule": "每月重置",
        "note": "年付¥2500（每月2500GB）"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-07-17（历史地区统计值）",
      "condition": "历史108节点多地区均值记录，非实时测速",
      "status": "historical",
      "nodes": [
        {
          "region": "香港",
          "latency": 160.7,
          "downloadMbps": 114.94,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "新加坡",
          "latency": 186.8,
          "downloadMbps": 85.22,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "日本",
          "latency": 202.4,
          "downloadMbps": 77.65,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "美国",
          "latency": 302.6,
          "downloadMbps": 70.53,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "加拿大",
          "latency": 344,
          "downloadMbps": 62,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "韩国",
          "latency": 358,
          "downloadMbps": 31.28,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "台湾",
          "latency": 999,
          "downloadMbps": 0.03,
          "uploadMbps": null,
          "packetLoss": "异常"
        }
      ]
    },
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-07-17 历史测试：部分节点可用"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未记录"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未记录"
      },
      "netflix": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-07-17 历史测试：部分节点可用"
      },
      "disney": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-07-17 历史测试：部分节点可用"
      },
      "youtube": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-07-17 历史测试：部分节点可用"
      },
      "hbomax": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-07-17 历史测试：部分节点可用"
      },
      "tiktok": {
        "status": "partial",
        "label": "历史部分可用",
        "note": "2026-07-17 历史测试：部分节点可用"
      },
      "spotify": {
        "status": "measured_unsupported",
        "label": "历史测试失败",
        "note": "2026-07-17 该次测试失败"
      }
    },
    "pros": [
      "2026-07-17 历史测速涉及 79 个国家/地区名目（含越南、柬埔寨、孟加拉、尼泊尔等小众地区）",
      "季付 ¥66（100GB/月）总支出门槛适中"
    ],
    "cons": [
      "无单月付套餐，且 2026-07-17 历史测速中 TLS RTT 普遍偏高（香港 160.7ms、台湾节点几乎无速度）",
      "数据均为历史归档，保存入口不保证当前有效"
    ],
    "suitableFor": [
      "需要查询东南亚/南亚小众地区历史节点档案的用户"
    ],
    "notSuitableFor": [
      "追求低延迟高速专线或实时已核实套餐的用户"
    ],
    "riskNotes": "历史档案记录（2026-08-24），台湾节点在当次历史测试中表现异常（0.03Mbps），请谨慎核实。",
    "homologousGroup": "独立历史档案品牌",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（第二部分历史档案）",
    "verifiedDate": "2026-08-24",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "flyingbird",
    "slug": "flyingbird",
    "rank": 31,
    "isPrimaryFeatured": false,
    "name": "FlyingBird（飞鸟机场）",
    "enName": "FlyingBird",
    "aliases": [
      "flyingbird",
      "飞鸟机场",
      "飞鸟云"
    ],
    "logo": "/images/logos/flyingbird.webp",
    "accentColor": "#0284c7",
    "officialUrl": null,
    "affiliateUrl": null,
    "hasAffiliateUrl": false,
    "couponCode": "theo / year85",
    "couponNote": "历史资料记录：theo（9折，每用户一次）/ year85（年付85折）；季9/半85/年8折（当期有效性待核实）",
    "foundedYear": "老牌衍生（2026-08-09历史记录）",
    "paymentMethods": [
      "支付宝",
      "USDT（历史资料注无微信）"
    ],
    "lineType": "全专线 IPLC（无倍率不限速）",
    "lineCategory": "IPLC",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Shadowsocks / Clash）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "Surge"
    ],
    "deviceLimit": "不限速、无倍率",
    "peakBandwidth": "全专线 IPLC（无近30日测速）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖（当期明细待核实）",
    "minMonthlyPrice": 15,
    "minAnnualizedMonthlyPrice": 12,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-09记录）：一云梯/飞鸟同源站群的核心品牌之一，主打 Shadowsocks + 全专线 IPLC、无倍率不限速，历史套餐涵盖青铜（¥15/月 100G）至钻石（¥150/月 1000G）；当前资料未提供独立品牌入口与实测数据。",
    "historicalPriceNote": "原文明确标注：“未提供独立品牌入口；此表展开了历史资料已列出的各种付费周期，并非实时优惠价。”本站绝不将其他品牌链接伪装成飞鸟入口。",
    "plans": [
      {
        "name": "青铜套餐（历史记录）",
        "billing": "月付",
        "price": 15,
        "monthlyEquivalent": 15,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥41 / 半年¥77 / 年付¥144（折合12元/月）"
      },
      {
        "name": "白银套餐（历史记录）",
        "billing": "月付",
        "price": 30,
        "monthlyEquivalent": 30,
        "traffic": "200GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥81 / 半年¥153 / 年付¥288"
      },
      {
        "name": "黄金套餐（历史记录）",
        "billing": "月付",
        "price": 75,
        "monthlyEquivalent": 75,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥203 / 半年¥383 / 年付¥720"
      },
      {
        "name": "钻石套餐（历史记录）",
        "billing": "月付",
        "price": 150,
        "monthlyEquivalent": 150,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥405 / 半年¥765 / 年付¥1440"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未提供独立逐项测试结果"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "历史套餐周期梯度完整（青铜 ¥15/100G 至钻石 ¥150/1000G），IPLC 无倍率定位清晰",
      "同源关系明确（与龙猫云、微风、Firefly 同属一云梯/飞鸟站群体系）"
    ],
    "cons": [
      "当前资料未提供可核实的独立官网入口与近 30 日实测速度",
      "历史记录不支持微信支付（仅支付宝/USDT）"
    ],
    "suitableFor": [
      "查询飞鸟/一云梯同源站群历史价格体系与关系图谱的用户"
    ],
    "notSuitableFor": [
      "需要立即注册且要求实测数据验证的用户（可对比同系已核实的微风网络、Firefly 或主推品牌光速云）"
    ],
    "riskNotes": "当前未提供独立品牌入口，谨防搜索引擎上的山寨仿冒钓鱼域名。",
    "homologousGroup": "一云梯 / 飞鸟同源站群（FlyingBird / 龙猫云 / 微风 / Firefly）",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "cyberguard",
    "slug": "cyberguard",
    "rank": 32,
    "isPrimaryFeatured": false,
    "name": "CyberGuard",
    "enName": "CyberGuard",
    "aliases": [
      "cyberguard"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#1e293b",
    "officialUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "affiliateUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "hasAffiliateUrl": true,
    "couponCode": null,
    "couponNote": "历史资料未列公开优惠码（待核实）",
    "foundedYear": "历史档案（2026-08-23记录）",
    "paymentMethods": [
      "待核实"
    ],
    "lineType": "多地区网络代理服务",
    "lineCategory": "待核实",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Trojan / VLESS）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "2025-06-21 历史测速日本平均 488.83Mbps",
    "regions": [
      "日本",
      "美国",
      "澳大利亚",
      "韩国",
      "德国",
      "法国",
      "阿联酋",
      "英国",
      "印度",
      "台湾",
      "香港",
      "新加坡"
    ],
    "regionCount": 12,
    "nodeCountText": "2025-06-21 历史测速覆盖 12 个地区、29 个节点",
    "minMonthlyPrice": 32,
    "minAnnualizedMonthlyPrice": 15.83,
    "minOneTimePrice": 79,
    "summary": "历史资料库品牌（2026-08-23归档）：采用 Trojan/VLESS 协议，半年付 ¥95（150GB/月，折合 15.83元/月），标准月付 ¥32（350GB/月），另有 ¥79/220GB 与 ¥188/840GB 两档不限时流量包；测速数据为 2025-06-21 旧批次。",
    "historicalPriceNote": "测速记录日期为 2025-06-21（距今较远），且韩国节点延迟显示 6000ms 异常值，仅供参考。",
    "plans": [
      {
        "name": "150G｜轻量套餐（历史记录）",
        "billing": "半年付",
        "price": 95,
        "monthlyEquivalent": 15.83,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "半年付¥95（折合15.83元/月）"
      },
      {
        "name": "350G｜标准套餐（历史记录）",
        "billing": "月付",
        "price": 32,
        "monthlyEquivalent": 32,
        "traffic": "350GB/月",
        "resetRule": "每月重置",
        "note": "最低真实月付¥32/350GB"
      },
      {
        "name": "650G｜高速套餐（历史记录）",
        "billing": "月付",
        "price": 55,
        "monthlyEquivalent": 55,
        "traffic": "650GB/月",
        "resetRule": "每月重置",
        "note": "月付¥55/650GB"
      },
      {
        "name": "2050G｜企业套餐（历史记录）",
        "billing": "月付",
        "price": 200,
        "monthlyEquivalent": 200,
        "traffic": "2050GB/月",
        "resetRule": "每月重置",
        "note": "2TB企业级月付"
      },
      {
        "name": "220G流量包｜不限时（历史记录）",
        "billing": "一次性付费",
        "price": 79,
        "monthlyEquivalent": null,
        "traffic": "220GB",
        "resetRule": "一次性（具体有效期待核实）",
        "note": "79元220GB一次性包"
      },
      {
        "name": "840G流量包｜不限时（历史记录）",
        "billing": "一次性付费",
        "price": 188,
        "monthlyEquivalent": null,
        "traffic": "840GB",
        "resetRule": "一次性（具体有效期待核实）",
        "note": "188元840GB一次性包"
      }
    ],
    "speedtest20261019": {
      "testDate": "2025-06-21（历史地区统计值）",
      "condition": "2025年6月旧资料统计值，非近期测试",
      "status": "historical",
      "nodes": [
        {
          "region": "日本",
          "latency": 123.8,
          "downloadMbps": 488.83,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "韩国",
          "latency": 6000,
          "downloadMbps": 552.8,
          "uploadMbps": null,
          "packetLoss": "延迟异常"
        },
        {
          "region": "阿联酋",
          "latency": 345,
          "downloadMbps": 342.76,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "澳大利亚",
          "latency": 277,
          "downloadMbps": 279.64,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "美国",
          "latency": 614,
          "downloadMbps": 245.6,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "法国",
          "latency": 384,
          "downloadMbps": 204.08,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "德国",
          "latency": 390.5,
          "downloadMbps": 159.96,
          "uploadMbps": null,
          "packetLoss": "—"
        }
      ]
    },
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2025-06-21 历史测试可用，不保证现时状态"
      },
      "claude": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2025-06-21 历史测试可用"
      },
      "gemini": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2025-06-21 历史测试可用"
      },
      "netflix": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2025-06-21 历史测试可用"
      },
      "disney": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2025-06-21 历史测试可用"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未单列"
      },
      "hbomax": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2025-06-21 历史测试可用"
      },
      "tiktok": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2025-06-21 历史测试可用"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "历史套餐中 ¥32/350GB 月付及 ¥79/220GB、¥188/840GB 一次性流量包单价较低",
      "节点曾覆盖阿联酋、澳大利亚、德、法等欧洲与中东地区"
    ],
    "cons": [
      "测速数据停留在 2025-06-21（超过1年未更新），当时延迟偏高（美国614ms、韩国6000ms）",
      "不限时流量包具体有效期与当前运营状态均待核实"
    ],
    "suitableFor": [
      "查询欧洲/阿联酋历史节点档案并在官网核实最新状态后尝试的用户"
    ],
    "notSuitableFor": [
      "需要近期（2026年8–10月）已核实低延迟专线的用户"
    ],
    "riskNotes": "实测记录为 2025-06-21 历史档案，与当前网络环境不可直接比较。",
    "homologousGroup": "独立历史档案品牌",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（第二部分历史档案）",
    "verifiedDate": "2026-08-23",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "longmaoyun",
    "slug": "longmaoyun",
    "rank": 33,
    "isPrimaryFeatured": false,
    "name": "龙猫云",
    "enName": "Totoro Cloud",
    "aliases": [
      "longmaoyun",
      "Totoro",
      "龙猫机场"
    ],
    "logo": "/images/logos/longmaoyun.webp",
    "accentColor": "#059669",
    "officialUrl": null,
    "affiliateUrl": null,
    "hasAffiliateUrl": false,
    "couponCode": null,
    "couponNote": "无公开优惠码；历史周期折扣：季9/半85/年8/2年7/3年6折，最高约48折",
    "foundedYear": "老牌站群（2026-08-09历史记录）",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "SS + IPLC 全专线",
    "lineCategory": "IPLC",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Shadowsocks / Clash）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "Surge"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "历史资料记载最高 2000Mbps（未独立实测）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖（当期明细待核实）",
    "minMonthlyPrice": 15,
    "minAnnualizedMonthlyPrice": 12,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-09记录）：已被核实为一云梯/飞鸟同源站群成员，定位 Shadowsocks + IPLC 全专线，历史套餐 VIP1（¥15/月 100G）至 VIP4（¥120/月 1000G）；当前未提供独立品牌入口与实测数据。",
    "historicalPriceNote": "VIP1–VIP2 定价与飞鸟机场青铜/白银完全一致，VIP3（¥60/400G）与 VIP4（¥120/1000G）略有差异；无独立推广入口。",
    "plans": [
      {
        "name": "VIP1（历史记录）",
        "billing": "月付",
        "price": 15,
        "monthlyEquivalent": 15,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥41 / 半年¥77 / 年付¥144（折合12元/月）"
      },
      {
        "name": "VIP2（历史记录）",
        "billing": "月付",
        "price": 30,
        "monthlyEquivalent": 30,
        "traffic": "200GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥81 / 半年¥153 / 年付¥288"
      },
      {
        "name": "VIP3（历史记录）",
        "billing": "月付",
        "price": 60,
        "monthlyEquivalent": 60,
        "traffic": "400GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥162 / 半年¥306 / 年付¥576"
      },
      {
        "name": "VIP4（历史记录）",
        "billing": "月付",
        "price": 120,
        "monthlyEquivalent": 120,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥324 / 半年¥697 / 年付¥1152"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未提供独立逐项测试结果"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "比同源的飞鸟机场多了微信支付支持（历史资料记录）",
      "VIP4（¥120/1000G）比飞鸟钻石（¥150/1000G）略便宜"
    ],
    "cons": [
      "未提供独立品牌入口与近 30 日实测数据",
      "与飞鸟、一云梯同源，节点架构高度重叠"
    ],
    "suitableFor": [
      "查询龙猫云历史价格档案与一云梯/飞鸟站群关系的用户"
    ],
    "notSuitableFor": [
      "需要现成核实入口与实测数据的用户"
    ],
    "riskNotes": "当前未提供独立品牌入口；同源站群品牌请勿重复购买作为备用。",
    "homologousGroup": "一云梯 / 飞鸟同源站群（FlyingBird / 龙猫云 / 微风 / Firefly）",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "fatcat",
    "slug": "fatcat",
    "rank": 34,
    "isPrimaryFeatured": false,
    "name": "FATCAT（肥猫云）",
    "enName": "FATCAT Cloud",
    "aliases": [
      "fatcat",
      "肥猫云",
      "肥猫机场"
    ],
    "logo": "/images/logos/fatcat.webp",
    "accentColor": "#d97706",
    "officialUrl": null,
    "affiliateUrl": null,
    "hasAffiliateUrl": false,
    "couponCode": null,
    "couponNote": "无公开优惠码；历史周期折扣：季9/半85/年8/2年7/3年6折",
    "foundedYear": "历史档案（2026-08-09记录）",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "企业级 IEPL / IPLC 内网专线",
    "lineCategory": "IEPL/IPLC",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（历史档案）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖（当期明细待核实）",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 8,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-09记录）：中文名「肥猫云」（注意与第4名「飞猫云 feimao」为不同实体），定位企业级 IEPL/IPLC 内网专线，历史套餐含年付加强版 ¥96（60G/月）及月付 ¥20–¥180 四档；当前无独立入口与实测数据。",
    "historicalPriceNote": "请严格区分「FATCAT（肥猫云）」与 #4「飞猫云（FlyCat）」：飞猫云为专属客户端模式且有 2026-08-11 实测图，FATCAT 为历史档案且无独立入口。",
    "plans": [
      {
        "name": "年付加强版（历史记录）",
        "billing": "年付",
        "price": 96,
        "monthlyEquivalent": 8,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合8元/月"
      },
      {
        "name": "基础套餐（历史记录）",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "120GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥54 / 半年¥102 / 年付¥192"
      },
      {
        "name": "标准套餐（历史记录）",
        "billing": "月付",
        "price": 40,
        "monthlyEquivalent": 40,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥108 / 半年¥204 / 年付¥384"
      },
      {
        "name": "旗舰套餐（历史记录）",
        "billing": "月付",
        "price": 100,
        "monthlyEquivalent": 100,
        "traffic": "700GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥270 / 半年¥510 / 年付¥960"
      },
      {
        "name": "企业套餐（历史记录）",
        "billing": "月付",
        "price": 180,
        "monthlyEquivalent": 180,
        "traffic": "1500GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥486 / 半年¥918 / 年付¥1728"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未提供独立逐项测试结果"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "历史套餐阶梯标准（¥96/年 60G、¥20/月 120G、¥40/月 300G、¥100/月 700G、¥180/月 1500G）",
      "支持支付宝、微信与 USDT"
    ],
    "cons": [
      "无独立品牌入口与近 30 日测速、解锁实测数据",
      "极易与「飞猫云」混淆"
    ],
    "suitableFor": [
      "查询肥猫云（FATCAT）历史套餐档案与做品牌消歧核对的用户"
    ],
    "notSuitableFor": [
      "需要现成注册链接与实测报告的用户（同套餐结构可看 U1S1 或光速云）"
    ],
    "riskNotes": "当前未提供独立品牌入口；注意与「飞猫云」区分。",
    "homologousGroup": "历史档案品牌",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "tntcloud",
    "slug": "tntcloud",
    "rank": 35,
    "isPrimaryFeatured": false,
    "name": "TNTCloud（原 3A 加速器）",
    "enName": "TNTCloud / AAA Speed",
    "aliases": [
      "tntcloud",
      "3A加速器",
      "AAA Speed",
      "TNT机场"
    ],
    "logo": "/images/logos/tntcloud.webp",
    "accentColor": "#dc2626",
    "officialUrl": null,
    "affiliateUrl": null,
    "hasAffiliateUrl": false,
    "couponCode": "TNT85",
    "couponNote": "历史资料记录：TNT85（85折，限量包不支持）；季9/半85/年8/2年7/3年6折",
    "foundedYear": "老牌分站（2026-08-09历史记录）",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "IPLC 内网专线",
    "lineCategory": "IPLC",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（历史档案）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "历史资料记载 2000Mbps（未独立实测）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规主力地区覆盖（支持跨境电商/TikTok直播定制）",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 8.17,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-09记录）：曾用名「3A 加速器 / AAA Speed」，定位 IPLC 内网专线，特色为提供 ¥30/季（60G/月，折合 10元/月）的季付轻量包及跨境电商/TikTok 直播定制；当前未提供独立入口与实测数据。",
    "historicalPriceNote": "轻量包支持季付 ¥30、半年付 ¥56、年付 ¥98（60G/月），在历史档案中属于少见支持 30 元低门槛季付的品牌。",
    "plans": [
      {
        "name": "轻量包（历史记录）",
        "billing": "季付",
        "price": 30,
        "monthlyEquivalent": 10,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥30 / 半年¥56 / 年付¥98（折合8.17元/月）"
      },
      {
        "name": "VIP1（历史记录）",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "110GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥54 / 半年¥102 / 年付¥192"
      },
      {
        "name": "VIP2（历史记录）",
        "billing": "月付",
        "price": 40,
        "monthlyEquivalent": 40,
        "traffic": "220GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥108 / 半年¥204 / 年付¥336"
      },
      {
        "name": "VIP3（历史记录）",
        "billing": "月付",
        "price": 80,
        "monthlyEquivalent": 80,
        "traffic": "460GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥216 / 半年¥408 / 年付¥768"
      },
      {
        "name": "VIP4（历史记录）",
        "billing": "月付",
        "price": 160,
        "monthlyEquivalent": 160,
        "traffic": "1100GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥432 / 半年¥816 / 年付¥1536"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未提供独立逐项测试结果"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "vendor_claimed",
        "label": "历史资料提及",
        "note": "历史资料提及支持跨境电商/TikTok直播定制"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "历史资料保留了完整的「3A 加速器 / AAA Speed」曾用名沿革记录",
      "轻量包提供 ¥30/季（60G/月）低门槛季付选项"
    ],
    "cons": [
      "当前未提供独立品牌入口与近 30 日实测速度",
      "缺乏独立流媒体与 AI 解锁实测报告"
    ],
    "suitableFor": [
      "查询原 3A 加速器（AAA Speed）改名后档案与历史价格表的用户"
    ],
    "notSuitableFor": [
      "需要现成已核实入口与实测数据的用户"
    ],
    "riskNotes": "当前未提供独立品牌入口，历史资料仅供参考。",
    "homologousGroup": "老牌分站团队历史档案",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "qingyunti",
    "slug": "qingyunti",
    "rank": 36,
    "isPrimaryFeatured": false,
    "name": "青云梯（原 V4Speed）",
    "enName": "QingYunTi / V4Speed",
    "aliases": [
      "qingyunti",
      "V4Speed",
      "青云梯机场"
    ],
    "logo": "/images/logos/qingyunti.webp",
    "accentColor": "#0284c7",
    "officialUrl": null,
    "affiliateUrl": null,
    "hasAffiliateUrl": false,
    "couponCode": "qyt85 / qyt80",
    "couponNote": "历史资料记录：qyt85（85折）/ qyt80（8折），年付小包不支持；季9/半85/年8/2年7/3年6折",
    "foundedYear": "运营6年以上（2026-08-09历史记录）",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "SS + 企业级 IPLC + 三网优化 + 智能负载均衡",
    "lineCategory": "IPLC",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（Shadowsocks / Clash）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "Surge",
      "Quantumult X"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "历史资料记载最高 6Gbps（未独立实测）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "韩国",
      "欧洲等10+地区"
    ],
    "regionCount": 10,
    "nodeCountText": "历史资料记载 10+ 地区、80+ 节点（未独立实测）",
    "minMonthlyPrice": 25,
    "minAnnualizedMonthlyPrice": 8,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-09记录）：运营 6 年以上的老牌机场（曾用名 V4Speed），采用 Shadowsocks + 企业级 IPLC，历史记载覆盖 10+ 地区 80+ 节点，提供 ¥96/年（60G/月）及 VIP1–VIP4（¥25–¥150/月）；当前未提供独立入口与实测数据。",
    "historicalPriceNote": "青云梯的套餐价格表（¥96/年 60G、¥25/150G、¥45/300G、¥85/600G、¥150/1000G）与 Firefly 的周期档价格完全一致，但青云梯采用 SS 协议且无独立推广入口。",
    "plans": [
      {
        "name": "年付小包（历史记录）",
        "billing": "年付",
        "price": 96,
        "monthlyEquivalent": 8,
        "traffic": "60GB/月",
        "resetRule": "每月重置",
        "note": "折合8元/月（不支持优惠码）"
      },
      {
        "name": "VIP1（历史记录）",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "150GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥67 / 半年¥127 / 年付¥240"
      },
      {
        "name": "VIP2（历史记录）",
        "billing": "月付",
        "price": 45,
        "monthlyEquivalent": 45,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥121 / 半年¥229 / 年付¥432"
      },
      {
        "name": "VIP3（历史记录）",
        "billing": "月付",
        "price": 85,
        "monthlyEquivalent": 85,
        "traffic": "600GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥229 / 半年¥433 / 年付¥816"
      },
      {
        "name": "VIP4（历史记录）",
        "billing": "月付",
        "price": 150,
        "monthlyEquivalent": 150,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥400 / 半年¥750 / 年付¥1360"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未提供独立逐项测试结果"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "运营 6 年以上老牌背景（曾用名 V4Speed），历史资料完整",
      "企业级 IPLC + 三网优化定位，套餐结构清晰"
    ],
    "cons": [
      "当前资料未提供独立官网入口与近 30 日实测速度",
      "未提供独立 AI 与流媒体逐项实测证明"
    ],
    "suitableFor": [
      "查询老牌青云梯（V4Speed）历史价格与资料档案的用户"
    ],
    "notSuitableFor": [
      "需要立即可用入口与最新实测报告的用户（2020年老牌已核实替代可看光速云或星岛梦）"
    ],
    "riskNotes": "当前未提供独立品牌入口，检索时请注意防范仿冒站点。",
    "homologousGroup": "历史老牌档案",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "shanshuiyun",
    "slug": "shanshuiyun",
    "rank": 37,
    "isPrimaryFeatured": false,
    "name": "山水云",
    "enName": "ShanShui Cloud",
    "aliases": [
      "shanshuiyun",
      "山水云机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#0d9488",
    "officialUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "affiliateUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "hasAffiliateUrl": true,
    "couponCode": null,
    "couponNote": "历史记录未列公开优惠码（待核实）",
    "foundedYear": "历史档案（2026-08-24记录）",
    "paymentMethods": [
      "待核实"
    ],
    "lineType": "多地区网络代理服务",
    "lineCategory": "待核实",
    "protocols": [
      "待核实（原文标注协议尚未核实）"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用客户端订阅（具体协议待核实）",
    "supportedClients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "2026-06-29 历史测速美国平均 180.29Mbps (22.54MB/s)",
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾",
      "越南",
      "泰国",
      "英国",
      "印度尼西亚",
      "法国",
      "德国",
      "加拿大"
    ],
    "regionCount": 12,
    "nodeCountText": "2026-06-29 历史测速覆盖 27 个节点、12 个地区",
    "minMonthlyPrice": 15,
    "minAnnualizedMonthlyPrice": 7.33,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-24归档）：64G 轻量年付 ¥88（折合 7.33元/月），月付「琴/棋/书」三档为 ¥15（100GB）、¥25（200GB）、¥50（500GB）；保留有 2026-06-29 的 12 地区历史测速记录，协议与当期状态待核实。",
    "historicalPriceNote": "注意 ENTITY_REGISTRY 曾误将其链接指向光速云，本站已按原文第 1365 行恢复其历史保存入口 sldm1.ssyylf.com 并标注历史状态。",
    "plans": [
      {
        "name": "64G/轻量套餐（历史记录）",
        "billing": "年付",
        "price": 88,
        "monthlyEquivalent": 7.33,
        "traffic": "64GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约7.33元"
      },
      {
        "name": "128G/轻量套餐（历史记录）",
        "billing": "半年付",
        "price": 88,
        "monthlyEquivalent": 14.67,
        "traffic": "128GB/月",
        "resetRule": "每月重置",
        "note": "半年付¥88（128GB/月）"
      },
      {
        "name": "256G/轻量套餐（历史记录）",
        "billing": "季付",
        "price": 75,
        "monthlyEquivalent": 25,
        "traffic": "256GB/月",
        "resetRule": "每月重置",
        "note": "季付¥75（256GB/月）"
      },
      {
        "name": "100G/月-琴（历史记录）",
        "billing": "月付",
        "price": 15,
        "monthlyEquivalent": 15,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "最低真实月付¥15/100GB"
      },
      {
        "name": "200G/月-棋（历史记录）",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "200GB/月",
        "resetRule": "每月重置",
        "note": "月付¥25/200GB"
      },
      {
        "name": "500G/月-书（历史记录）",
        "billing": "月付",
        "price": 50,
        "monthlyEquivalent": 50,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "月付¥50/500GB"
      }
    ],
    "speedtest20261019": {
      "testDate": "2026-06-29（历史地区统计值）",
      "condition": "2026年6月历史27节点统计值，非实时速度",
      "status": "historical",
      "nodes": [
        {
          "region": "美国",
          "latency": 349.3,
          "downloadMbps": 180.29,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "日本",
          "latency": 229.8,
          "downloadMbps": 160.51,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "香港",
          "latency": 151.4,
          "downloadMbps": 152.86,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "新加坡",
          "latency": 179.8,
          "downloadMbps": 142.98,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "越南",
          "latency": 232,
          "downloadMbps": 87.68,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "泰国",
          "latency": 217,
          "downloadMbps": 82,
          "uploadMbps": null,
          "packetLoss": "—"
        },
        {
          "region": "英国",
          "latency": 328,
          "downloadMbps": 65.2,
          "uploadMbps": null,
          "packetLoss": "—"
        }
      ]
    },
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2026-06-29 该次历史测试可用"
      },
      "claude": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2026-06-29 该次历史测试可用"
      },
      "gemini": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2026-06-29 该次历史测试可用"
      },
      "netflix": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2026-06-29 该次历史测试可用"
      },
      "disney": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2026-06-29 该次历史测试可用"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未单列"
      },
      "hbomax": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2026-06-29 该次历史测试可用"
      },
      "tiktok": {
        "status": "partial",
        "label": "历史测试可用",
        "note": "2026-06-29 该次历史测试可用"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "历史月付梯度清晰（琴¥15/100G、棋¥25/200G、书¥50/500G），门槛较低",
      "2026-06-29 历史测速覆盖美、日、港、新及越、泰、英、法、德等 12 个地区"
    ],
    "cons": [
      "底层传输协议尚未核实，且 2026-06-29 测速中香港延迟（151.4ms）偏高",
      "27 个测试节点中有 5 个节点在当次测试未取得非零速度"
    ],
    "suitableFor": [
      "参考 15 元/100G 月付历史档案并愿意在官网核实当期协议与状态的用户"
    ],
    "notSuitableFor": [
      "对香港超低延迟（<30ms）有严苛要求的专线用户"
    ],
    "riskNotes": "协议未核实，测速为 2026-06-29 历史统计值，下单前请重新核实官网。",
    "homologousGroup": "独立历史档案品牌",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（第二部分历史档案）",
    "verifiedDate": "2026-08-24",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "lingdongyun",
    "slug": "lingdongyun",
    "rank": 38,
    "isPrimaryFeatured": false,
    "name": "灵动云",
    "enName": "LingDong Cloud",
    "aliases": [
      "lingdongyun",
      "灵动云机场"
    ],
    "logo": "/images/logos/lingdongyun.png",
    "accentColor": "#3b82f6",
    "officialUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "hasAffiliateUrl": true,
    "couponCode": null,
    "couponNote": "优惠码尚未核实",
    "foundedYear": "2025年（2026-08-09历史记录）",
    "paymentMethods": [
      "支付宝",
      "USDT（微信需联系客服）"
    ],
    "lineType": "IEPL 专线（截图标注）",
    "lineCategory": "IEPL",
    "protocols": [
      "VLESS",
      "Trojan（站点文案混提，实测为VLESS）"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（VLESS / Clash）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN",
      "v2rayNG",
      "sing-box"
    ],
    "deviceLimit": "不限速、不限设备",
    "peakBandwidth": "2026-07-20/21 珠海联通9Gbps实测：20–80MB/s（够用级）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "2026-07-20 实测覆盖 60 个节点",
    "minMonthlyPrice": 20,
    "minAnnualizedMonthlyPrice": 8.25,
    "minOneTimePrice": 199,
    "summary": "历史资料库品牌（2026-08-09记录）：2025年开业的 IEPL/VLESS 专线机场，不限速不限设备，涵盖穿云年付 ¥99（70G/月）、拂风月付 ¥20（100G/月）至凌霄 ¥180（1.5T/月）及三档一次性流量包；2026-07-20 实测 OpenAI 各地区基本全解锁，但部分流媒体存在送中或识别偏移。",
    "historicalPriceNote": "至尊私人定制（¥620/月）在原始截图中流量被遮挡，如实标注为“截图遮挡（待核实）”。",
    "plans": [
      {
        "name": "灵动·穿云（历史记录）",
        "billing": "年付",
        "price": 99,
        "monthlyEquivalent": 8.25,
        "traffic": "70GB/月",
        "resetRule": "每月重置",
        "note": "折合8.25元/月"
      },
      {
        "name": "灵动·拂风（历史记录）",
        "billing": "月付",
        "price": 20,
        "monthlyEquivalent": 20,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥57 / 半年¥108 / 年付¥204 / 两年¥384 / 三年¥540"
      },
      {
        "name": "灵动·驭浪（历史记录）",
        "billing": "月付",
        "price": 50,
        "monthlyEquivalent": 50,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥142.5 / 半年¥270 / 年付¥510 / 两年¥960 / 三年¥1350"
      },
      {
        "name": "灵动·破晓（历史记录）",
        "billing": "月付",
        "price": 100,
        "monthlyEquivalent": 100,
        "traffic": "700GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥285 / 半年¥540 / 年付¥1020"
      },
      {
        "name": "灵动·凌霄（历史记录）",
        "billing": "月付",
        "price": 180,
        "monthlyEquivalent": 180,
        "traffic": "1500GB/月",
        "resetRule": "每月重置",
        "note": "1.5TB大流量档"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "billing": "一次性付费",
        "price": 199,
        "monthlyEquivalent": null,
        "traffic": "150GB",
        "resetRule": "一次性总额",
        "note": "199元150GB一次性包"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "billing": "一次性付费",
        "price": 499,
        "monthlyEquivalent": null,
        "traffic": "400GB",
        "resetRule": "一次性总额",
        "note": "499元400GB一次性包"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "billing": "一次性付费",
        "price": 899,
        "monthlyEquivalent": null,
        "traffic": "800GB",
        "resetRule": "一次性总额",
        "note": "899元800GB一次性包"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billing": "月付",
        "price": 620,
        "monthlyEquivalent": 620,
        "traffic": "截图遮挡（待核实）",
        "resetRule": "每月重置",
        "note": "原截图流量字段遮挡"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "measured_supported",
        "label": "历史实测亮点",
        "note": "2026-07-20 60节点实测：OpenAI 各地区基本全解锁"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未单列"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未单列"
      },
      "netflix": {
        "status": "partial",
        "label": "部分节点异常",
        "note": "2026-07-20 实测：台湾落地识别偏欧洲（ES），美国01整节点失败"
      },
      "disney": {
        "status": "partial",
        "label": "部分节点异常",
        "note": "2026-07-20 实测：台湾落地识别为西班牙（ES）"
      },
      "youtube": {
        "status": "partial",
        "label": "部分节点送中",
        "note": "2026-07-20 实测：新加坡/台湾节点出现 YouTube 送中现象"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "measured_unsupported",
        "label": "历史实测多失败",
        "note": "2026-07-20 实测：TikTok 多节点失败"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "2026-07-20/21 实测中 OpenAI / ChatGPT 各地区基本全解锁，适合纯 AI 办公需求",
      "VLESS 协议 + 不限速不限设备，速度在 20–80MB/s（160–640Mbps）够用区间"
    ],
    "cons": [
      "2026-07-20 实测暴露出流媒体短板：TikTok 多失败、新/台 YouTube 送中、台湾 NF/D+ 识别为西班牙（ES）",
      "HTTPS 延迟偏高，且一次性流量包（¥199/150G）单价偏贵"
    ],
    "suitableFor": [
      "以 OpenAI / ChatGPT 跨区访问为核心诉求、不介意流媒体区域偏移的用户"
    ],
    "notSuitableFor": [
      "需要运营 TikTok 或对台湾/新加坡原生流媒体分区有严格要求的用户"
    ],
    "riskNotes": "2026-07-20 实测记录显示 TikTok 多失败且部分节点 YouTube 送中，流媒体用户请谨慎选择。",
    "homologousGroup": "varnexa 联盟域体系（与暮光加速、浪网同联盟后缀）",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录 + 2026-07-20 实测摘要）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "langwang",
    "slug": "langwang",
    "rank": 39,
    "isPrimaryFeatured": false,
    "name": "浪网",
    "enName": "WaveNet",
    "aliases": [
      "langwang",
      "WaveNet",
      "浪网机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#0369a1",
    "officialUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "hasAffiliateUrl": true,
    "couponCode": null,
    "couponNote": "优惠码尚未核实",
    "foundedYear": "历史档案（2026-08-09记录）",
    "paymentMethods": [
      "待核实"
    ],
    "lineType": "IEPL 专线（截图标注）",
    "lineCategory": "IEPL",
    "protocols": [
      "待核实（原资料未确认具体协议）"
    ],
    "clientSupport": "unverified",
    "clientSupportLabel": "待核实（客户端与退款规则尚缺）",
    "supportedClients": [
      "待核实"
    ],
    "deviceLimit": "截图遮挡（待核实）",
    "peakBandwidth": "待核实（原资料标注未实测）",
    "regions": [
      "待核实"
    ],
    "regionCount": 0,
    "nodeCountText": "节点地区与数量待核实",
    "minMonthlyPrice": 30,
    "minAnnualizedMonthlyPrice": 9.92,
    "minOneTimePrice": 239,
    "summary": "历史资料库品牌（2026-08-09记录）：截图标注 IEPL 专线，提供年付标准 ¥119（80G/月）、入门 ¥30/月（150G）、进阶 ¥70/月（450G）、高端 ¥120/月（800G）、商业 ¥200/月（2000G）及一次性流量包；但设备限制、节点地区、具体协议及实测数据均缺失。",
    "historicalPriceNote": "原文明确说明：“原资料标注未实测；尚缺字段：设备限制、节点地区、具体协议、支付方式、客户端、试用/退款规则、速度与解锁实测。”",
    "plans": [
      {
        "name": "浪网 年付标准（历史记录）",
        "billing": "年付",
        "price": 119,
        "monthlyEquivalent": 9.92,
        "traffic": "80GB/月",
        "resetRule": "每月重置",
        "note": "折合每月约9.92元"
      },
      {
        "name": "浪网 入门（历史记录）",
        "billing": "月付",
        "price": 30,
        "monthlyEquivalent": 30,
        "traffic": "150GB/月（截150G）",
        "resetRule": "每月重置",
        "note": "支持季付¥85.5 / 半年¥162 / 年付¥306 / 两年¥576 / 三年¥810"
      },
      {
        "name": "浪网 进阶（历史记录）",
        "billing": "月付",
        "price": 70,
        "monthlyEquivalent": 70,
        "traffic": "450GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥199.5 / 半年¥378 / 年付¥714"
      },
      {
        "name": "浪网 高端（历史记录）",
        "billing": "月付",
        "price": 120,
        "monthlyEquivalent": 120,
        "traffic": "800GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥342 / 半年¥648 / 年付¥1224"
      },
      {
        "name": "浪网 商业（历史记录）",
        "billing": "月付",
        "price": 200,
        "monthlyEquivalent": 200,
        "traffic": "2000GB/月",
        "resetRule": "每月重置",
        "note": "支持季付¥570 / 半年¥1080 / 年付¥2040"
      },
      {
        "name": "浪网 小流量包",
        "billing": "一次性付费",
        "price": 239,
        "monthlyEquivalent": null,
        "traffic": "180GB",
        "resetRule": "一次性总额",
        "note": "239元180GB一次性包"
      },
      {
        "name": "浪网 标准流量包",
        "billing": "一次性付费",
        "price": 569,
        "monthlyEquivalent": null,
        "traffic": "450GB",
        "resetRule": "一次性总额",
        "note": "569元450GB一次性包"
      },
      {
        "name": "浪网 精英流量包",
        "billing": "一次性付费",
        "price": 1099,
        "monthlyEquivalent": null,
        "traffic": "900GB",
        "resetRule": "一次性总额",
        "note": "1099元900GB一次性包"
      },
      {
        "name": "浪网 定制线路包",
        "billing": "月付",
        "price": 640,
        "monthlyEquivalent": 640,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "定制线路包"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "原资料未实测"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "入门到商业 2000G 多周期价格表记录完整",
      "标注 IEPL 专线定位"
    ],
    "cons": [
      "关键技术参数（节点地区、具体协议、客户端支持、设备限制）在原截图中缺失或遮挡",
      "定价偏高（入门月付 ¥30/150G、年付 ¥119/80G），且无任何实测数据支撑"
    ],
    "suitableFor": [
      "仅作为 varnexa 同系品牌价格体系对照参考的用户"
    ],
    "notSuitableFor": [
      "寻求资料透明、已完成测速与解锁验证的用户"
    ],
    "riskNotes": "资料缺口较大且未经本站实测，不建议在未核实清楚前盲目付费。",
    "homologousGroup": "varnexa 联盟域体系（与暮光加速、灵动云同联盟后缀）",
    "dataStatus": "unverified",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "edgenova",
    "slug": "edgenova",
    "rank": 40,
    "isPrimaryFeatured": false,
    "name": "EdgeNova（边缘节点）",
    "enName": "EdgeNova",
    "aliases": [
      "edgenova",
      "边缘节点"
    ],
    "logo": "/images/logos/edgenova.webp",
    "accentColor": "#4f46e5",
    "officialUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "hasAffiliateUrl": true,
    "couponCode": "TH888",
    "couponNote": "历史资料记录 8 折优惠码 TH888（当期有效性待核实）",
    "foundedYear": "历史档案（2026-08-09记录）",
    "paymentMethods": [
      "支付宝",
      "微信",
      "USDT"
    ],
    "lineType": "高速直连 / IPLC（多线路自动分配）",
    "lineCategory": "IPLC/直连",
    "protocols": [
      "待核实"
    ],
    "clientSupport": "subscription",
    "clientSupportLabel": "支持通用第三方客户端订阅（历史档案）",
    "supportedClients": [
      "Clash Verge Rev",
      "FlClash",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实（无逐地区测速数据）",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "常规地区覆盖（当期明细待核实）",
    "minMonthlyPrice": 15,
    "minAnnualizedMonthlyPrice": 9,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-09记录）：中文名「边缘节点」，定位高速直连/IPLC 多线路自动分配，提供限时月付 ¥15（72G/月）、限时年付 ¥108（45G/月）及极界·标准至极限四档常规套餐，含 8 折码 TH888；暂无逐地区实测数据。",
    "historicalPriceNote": "注意 ENTITY_REGISTRY 曾遗漏其原链接，本站已按原文第 1541 行恢复其保存入口 work.edgenovaaff.cc。",
    "plans": [
      {
        "name": "限时月付（历史记录）",
        "billing": "月付",
        "price": 15,
        "monthlyEquivalent": 15,
        "traffic": "72GB/月",
        "resetRule": "每月重置",
        "note": "15元72GB低门槛月付"
      },
      {
        "name": "限时年付（历史记录）",
        "billing": "年付",
        "price": 108,
        "monthlyEquivalent": 9,
        "traffic": "45GB/月",
        "resetRule": "每月重置",
        "note": "折合9元/月（45GB/月）"
      },
      {
        "name": "极界·标准（历史记录）",
        "billing": "月付",
        "price": 25,
        "monthlyEquivalent": 25,
        "traffic": "120GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥70 / 半年¥130 / 年付¥270"
      },
      {
        "name": "极界·进阶（历史记录）",
        "billing": "月付",
        "price": 50,
        "monthlyEquivalent": 50,
        "traffic": "250GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥145 / 半年¥280 / 年付¥570"
      },
      {
        "name": "极界·高级（历史记录）",
        "billing": "月付",
        "price": 100,
        "monthlyEquivalent": 100,
        "traffic": "500GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥290 / 半年¥580 / 年付¥1100"
      },
      {
        "name": "极界·极限（历史记录）",
        "billing": "月付",
        "price": 200,
        "monthlyEquivalent": 200,
        "traffic": "1000GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥580 / 半年¥1150 / 年付¥2300"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未提供独立逐项测试结果"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "设有 ¥15/月（72G）低门槛月付档与 8 折码 TH888（折后 ¥12）",
      "支持支付宝、微信与 USDT 全支付方式"
    ],
    "cons": [
      "线路为“高速直连 / IPLC 混配”，并非全节点纯物理专线",
      "年付档价格高于月付×10（如极界·标准月付25×12=300，年付270仅9折），且无实测数据"
    ],
    "suitableFor": [
      "查询 EdgeNova（边缘节点）历史档案或仅考虑 ¥15 限时月付小额尝试的用户"
    ],
    "notSuitableFor": [
      "追求纯 IEPL/IPLC 专线及完备实测报告的用户"
    ],
    "riskNotes": "历史资料记录（2026-08-09），未提供可比的逐地区测速与解锁实测结果。",
    "homologousGroup": "work.* 联盟域体系",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  },
  {
    "id": "sslar",
    "slug": "sslar",
    "rank": 41,
    "isPrimaryFeatured": false,
    "name": "SSLAR",
    "enName": "SSLAR Enterprise",
    "aliases": [
      "sslar",
      "SSLAR机场"
    ],
    "logo": "/images/logos/guangsuyun.png",
    "accentColor": "#334155",
    "officialUrl": null,
    "affiliateUrl": null,
    "hasAffiliateUrl": false,
    "couponCode": "ko3eTt0w",
    "couponNote": "历史资料记录 8 折优惠码 ko3eTt0w；季9/半85/年8折，最高约64折",
    "foundedYear": "历史档案（2026-08-09记录）",
    "paymentMethods": [
      "支付宝",
      "微信（历史资料未列USDT）"
    ],
    "lineType": "企业级 IEPL + 多线 BGP（Eons/Akari/DigitalOcean 机房）",
    "lineCategory": "IEPL",
    "protocols": [
      "Shadowsocks",
      "VLESS（协议自适应）"
    ],
    "clientSupport": "both",
    "clientSupportLabel": "自研客户端（Win/mac/安卓）+ 通用多协议兼容",
    "supportedClients": [
      "SSLAR 自研客户端（Win/macOS/Android）",
      "Clash Verge Rev",
      "Shadowrocket",
      "v2rayN"
    ],
    "deviceLimit": "待核实",
    "peakBandwidth": "待核实",
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "regionCount": 5,
    "nodeCountText": "Eons / Akari / DigitalOcean 等机房落地（历史记录）",
    "minMonthlyPrice": 17,
    "minAnnualizedMonthlyPrice": 13.58,
    "minOneTimePrice": null,
    "summary": "历史资料库品牌（2026-08-09记录）：定位企业级 IEPL + 多线 BGP 与 SS/VLESS 协议自适应，支持远程桌面协助，历史套餐 Basic ¥17/月（100G）、Standard ¥28/月（200G）、Premium ¥36/月（300G）；当前未提供独立品牌入口与实测数据。",
    "historicalPriceNote": "300G 月付仅 ¥36（叠加 8 折码后约 ¥28.8），在历史资料中属于中大流量定价较实在的品牌，但目前无独立入口。",
    "plans": [
      {
        "name": "Basic（历史记录）",
        "billing": "月付",
        "price": 17,
        "monthlyEquivalent": 17,
        "traffic": "100GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥46 / 半年¥87 / 年付¥163（折合13.58元/月）"
      },
      {
        "name": "Standard（历史记录）",
        "billing": "月付",
        "price": 28,
        "monthlyEquivalent": 28,
        "traffic": "200GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥76 / 半年¥143 / 年付¥268"
      },
      {
        "name": "Premium（历史记录）",
        "billing": "月付",
        "price": 36,
        "monthlyEquivalent": 36,
        "traffic": "300GB/月",
        "resetRule": "每月重置",
        "note": "历史周期：季付¥97 / 半年¥183 / 年付¥345（300G仅36元/月）"
      }
    ],
    "speedtest20261019": null,
    "speedtest20260811": null,
    "unlockMatrix": {
      "chatgpt": {
        "status": "untested",
        "label": "暂未测试",
        "note": "未提供独立逐项测试结果"
      },
      "claude": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "gemini": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "netflix": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "disney": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "youtube": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "hbomax": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "tiktok": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      },
      "spotify": {
        "status": "untested",
        "label": "暂未测试",
        "note": "暂未测试"
      }
    },
    "pros": [
      "历史资料明确标注上游落地机房（Eons / Akari / DigitalOcean）且提供远程桌面协助",
      "Premium 档 ¥36/月 给到 300GB，配合 8 折码性价比突出"
    ],
    "cons": [
      "当前资料未提供独立品牌入口与近 30 日实测速度",
      "无 iOS 专属客户端，且历史资料未列 USDT 支付"
    ],
    "suitableFor": [
      "查询 SSLAR 历史机房配置与价格体系的用户"
    ],
    "notSuitableFor": [
      "需要现成注册链接与实测报告的用户（300G 同价位已核实替代可看一翻云舒享版 ¥35/350G 或光速云）"
    ],
    "riskNotes": "当前未提供独立品牌入口，请勿轻信非官方渠道链接。",
    "homologousGroup": "独立历史档案品牌",
    "dataStatus": "historical",
    "sourceNote": "42家机场品牌清单.txt（2026-08-09 历史记录）",
    "verifiedDate": "2026-08-09",
    "updatedAt": "2026-11-16"
  }
];

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
