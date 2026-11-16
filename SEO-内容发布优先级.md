# SEO 内容发布优先级与分批上线策略

> **核心原则**：绝不生成空白壳页面或仅含标题的伪文章污染 `sitemap.xml`。只有完成真实正文、结构化表格与 FAQ 的页面才构建上线并进入 Sitemap。

## 一、三大优先级梯队划分

| 优先级 | 页面/内容范围 | 规划数量 | 当前已发布数量 | 完成率 | 纳入 Sitemap 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0（核心基石层）** | 首页(1) + 一级导航(4) + 二级专题(28) + 品牌库与横向对比与客户端库(3) + 光速云万字旗舰评测(1) + 其余40家独立品牌评测(40) + 56个集群代表作文章(56) | **133 页** | **133 页** | **100%** | ✅ 全部正式上线并纳入 `sitemap.xml` |
| **P1（高商业价值扩展层）** | 每个三级集群下的参数核验篇、套餐精算篇、晚高峰实测篇、品牌二选一PK篇（56 × 4） | **224 篇** | 规划入库 | 持续迭代 | ⏸ 状态 `planned`，未写完正文前不生成空 HTML |
| **P2（长尾流量巩固层）** | 每个三级集群下的客户端分流篇、防失联风控篇（56 × 2） | **112 篇** | 规划入库 | 持续迭代 | ⏸ 状态 `planned`，未写完正文前不生成空 HTML |

## 二、P0 已发布 56 篇集群代表文章清单（100% 覆盖 56 个集群）

| 序号 | 文章ID | 所属集群 | 上游二级专题 | 文章标题 | 真实访问路径 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ART-001 | CL-01 综合主力机场选型与决策标准 | 机场推荐 (`/airport/recommend/`) | **2026 机场推荐核心指南：从 IEPL 专线、倍率陷阱到实测数据的 7 维选型法** | `/articles/how-to-choose-main-airport-2026/` |
| 2 | ART-008 | CL-02 按使用场景（AI办公/流媒体/多设备）匹配机场 | 机场推荐 (`/airport/recommend/`) | **AI 办公与 4K 流媒体机场推荐：ChatGPT、Claude 与 Netflix 原生解锁实测分析** | `/articles/ai-and-streaming-airport-selection/` |
| 3 | ART-015 | CL-03 机场天梯榜科学评估体系与误区拆解 | 机场排行 (`/airport/ranking/`) | **2026 机场天梯榜真相拆解：为什么不同测速图结果差异巨大？附客观分档矩阵** | `/articles/airport-tier-list-methodology-2026/` |
| 4 | ART-022 | CL-04 16家实测机场延迟、吞吐与多地区覆盖横评 | 机场排行 (`/airport/ranking/`) | **16 家机场节点实测横评报告：香港/新加坡/日本/美国延迟与吞吐数据深度对比** | `/articles/16-airports-speedtest-benchmark-analysis/` |
| 5 | ART-029 | CL-05 每 GB 流量成本精算与倍率识别 | 性价比机场 (`/airport/value/`) | **高性价比机场精算指南：每 GB 成本对比、1 倍率专线优势与 100GB 流量消耗实测** | `/articles/cost-per-gb-and-multiplier-guide/` |
| 6 | ART-036 | CL-06 永久不限时流量包 vs 周期月付/年付对比 | 性价比机场 (`/airport/value/`) | **2026 不限时流量包机场横评：光速云 147元/247GB 等 8 家永久套餐单价与风险分析** | `/articles/permanent-traffic-pack-vs-monthly-plan/` |
| 7 | ART-043 | CL-07 IEPL / IPLC 物理专线与 BGP 中转架构深度解析 | 稳定机场 (`/airport/stable/`) | **IEPL 与 IPLC 专线机场深度科普：和普通公网中转有什么区别？晚高峰为何更稳？** | `/articles/iepl-vs-iplc-vs-bgp-architecture/` |
| 8 | ART-050 | CL-08 晚高峰稳定性保障与多运营商（电信/移动/联通）适配 | 稳定机场 (`/airport/stable/`) | **晚高峰稳定机场选购指南：电信/联通/移动三网实测差异与异构双机场容灾方案** | `/articles/peak-hour-stability-and-isp-guide/` |
| 9 | ART-057 | CL-09 月均 10 元以内低价机场套餐真实核验 | 便宜机场 (`/airport/cheap/`) | **2026 便宜机场实测盘点：月均 5.6 元至 10 元档（光速云/飞猫云/无忧链接/闪电鼠）真相核查** | `/articles/under-10-yuan-cheap-airports-audit/` |
| 10 | ART-064 | CL-10 超低价机场的隐藏限制、同质化矩阵与防跑路原则 | 便宜机场 (`/airport/cheap/`) | **低价便宜机场避坑指南：年付折算价与真实月付价的区别，为什么不建议盲冲超低价年付？** | `/articles/cheap-airport-traps-and-annual-plan-risks/` |
| 11 | ART-071 | CL-11 免费梯子的运作模式、隐私边界与安全审计 | 免费梯子 (`/airport/free-ladder/`) | **免费梯子安全吗？彻底分清「免费开源客户端」与「免费节点服务」的隐私边界** | `/articles/free-ladder-security-and-client-distinction/` |
| 12 | ART-078 | CL-12 机场免费试用核验标准与低门槛平替方案 | 免费梯子 (`/airport/free-ladder/`) | **2026 机场试用政策核验与测速清单：没有免费试用时，如何低成本验证节点质量？** | `/articles/airport-trial-verification-and-low-cost-test/` |
| 13 | ART-085 | CL-13 科学上网核心概念与技术术语百科 | 科学上网 (`/airport/guide/`) | **2026 科学上网完全入门百科：一文读懂机场、订阅、协议、倍率与原生 IP** | `/articles/scientific-internet-access-complete-glossary/` |
| 14 | ART-092 | CL-14 代理协议演进（VLESS/Trojan/Hysteria2）与节点地区选择策略 | 科学上网 (`/airport/guide/`) | **香港、日本、新加坡、美国节点怎么选？不同地区延迟与 AI/流媒体适用场景全解** | `/articles/node-region-and-protocol-selection-guide/` |
| 15 | ART-099 | CL-15 传统 VPN 与现代专线机场（Airport）架构大对比 | VPN 推荐 (`/vpn/recommend/`) | **2026 VPN 推荐必读：传统 VPN 与 Clash 专线机场有什么区别？7 大核心维度实测对比** | `/articles/vpn-vs-airport-in-depth-comparison/` |
| 16 | ART-106 | CL-16 拥有 VPN 级一键登录体验的专属客户端机场盘点 | VPN 推荐 (`/vpn/recommend/`) | **不想折腾订阅配置？盘点 8 家自带专属客户端、像 VPN 一样登录即用的专线机场** | `/articles/one-click-client-airports-for-vpn-users/` |
| 17 | ART-113 | CL-17 免费 VPN 隐私风险、IP 污染与账号风控解析 | 免费 VPN (`/vpn/free/`) | **2026 免费 VPN 深度安全审计：万人共享 IP 如何触发 ChatGPT 与社交账号风控？** | `/articles/free-vpn-privacy-risks-and-ip-reputation/` |
| 18 | ART-120 | CL-18 免费开源代理软件 + 超低价专线的组合替代方案 | 免费 VPN (`/vpn/free/`) | **告别高危免费 VPN：如何用免费开源客户端 + 月均 6–8 元 IEPL 专线构建安全网络？** | `/articles/open-source-client-plus-budget-line-solution/` |
| 19 | ART-127 | CL-19 iPhone / iPad (iOS) 代理客户端选型与按需连接优化 | 手机 VPN (`/vpn/mobile/`) | **2026 iPhone / iPad 手机代理全指南：Shadowrocket、Stash、圈 X 与免费替代 App 对比** | `/articles/ios-iphone-shadowrocket-stash-selection-guide/` |
| 20 | ART-134 | CL-20 Android 安卓手机代理配置、杀后台防断连与安全下载 | 手机 VPN (`/vpn/mobile/`) | **2026 安卓手机代理软件推荐：v2rayNG、FlClash 与 Hiddify 评测及后台防断连设置** | `/articles/android-v2rayng-flclash-keepalive-guide/` |
| 21 | ART-141 | CL-21 三大现代代理内核（Mihomo / Xray / sing-box）技术横评 | VPN 软件评测 (`/vpn/reviews/`) | **2026 代理软件内核深度评测：Mihomo (Clash Meta)、Xray 与 sing-box 怎么选？** | `/articles/mihomo-vs-xray-vs-singbox-kernel-review/` |
| 22 | ART-148 | CL-22 Windows / macOS / Linux / OpenWrt 跨平台客户端实测对比 | VPN 软件评测 (`/vpn/reviews/`) | **2026 全平台代理软件横评：Windows、macOS、Linux 与 OpenWrt 软路由 22 款工具盘点** | `/articles/cross-platform-proxy-clients-comprehensive-review/` |
| 23 | ART-155 | CL-23 跨境电商、TikTok 跨区直播与外贸远程办公加速方案 | VPN 加速器 (`/vpn/accelerator/`) | **跨境电商与 TikTok 直播网络加速指南：原生 IP、IEPL 专线与独享定制方案怎么选？** | `/articles/cross-border-ecommerce-and-tiktok-acceleration/` |
| 24 | ART-162 | CL-24 程序员开发加速（GitHub/Docker）与游戏低延迟 UDP 转发解析 | VPN 加速器 (`/vpn/accelerator/`) | **程序员与低延迟加速指南：GitHub 终端代理配置、UDP FullCone 检测与游戏加速边界** | `/articles/developer-github-and-udp-gaming-acceleration/` |
| 25 | ART-169 | CL-25 热门机场品牌二选一深度对决（老牌档 / 18元档 / 25元档） | 加速器对比 (`/vpn/compare/`) | **2026 热门机场二选一深度对比：光速云 vs 星岛梦、极连云 vs 光年梯、梯子云 vs 隐形人** | `/articles/top-airport-brands-head-to-head-comparison/` |
| 26 | ART-176 | CL-26 同源站群与 5.6元同规格矩阵（qwerty系）横向拆解 | 加速器对比 (`/vpn/compare/`) | **同源机场站群与 5.6 元同规格矩阵深度拆解：如何避免买到同线路“双胞胎”机场？** | `/articles/homologous-airport-groups-and-5-6-yuan-matrix/` |
| 27 | ART-183 | CL-27 “好用”的五大硬指标：秒开率、无感分流、跨端同步与客服响应 | 好用的 VPN (`/vpn/best/`) | **2026 好用的梯子/VPN 评判标准：为什么低 RTT 首包响应与规则分流比峰值带宽更重要？** | `/articles/what-makes-a-vpn-or-airport-truly-usable/` |
| 28 | ART-190 | CL-28 主力专线 + 按量不限时备用的黄金双持组合指南 | 好用的 VPN (`/vpn/best/`) | **2026 永不失联双持方案：主力 IEPL 月付专线 + 永久不限时流量包黄金组合推荐** | `/articles/main-and-backup-airport-golden-combos/` |
| 29 | ART-197 | CL-29 原生支持 Clash / Mihomo 订阅导入的专线机场精选 | Clash 推荐 (`/clash/recommend/`) | **2026 Clash 机场推荐：32 家支持原生 Clash/Mihomo 订阅导入的专线机场核实清单（避开无订阅品牌）** | `/articles/best-clash-subscription-airports-2026/` |
| 30 | ART-204 | CL-30 2026 Clash 生态客户端全景推荐（桌面/移动/软路由） | Clash 推荐 (`/clash/recommend/`) | **原版 Clash 停更后用什么？2026 全平台 Mihomo (Clash Meta) 继任客户端选型指南** | `/articles/post-cfw-clash-client-ecosystem-guide/` |
| 31 | ART-211 | CL-31 Clash Verge Rev 核心架构与旧版区别详解 | Clash Verge (`/clash/verge/`) | **Clash Verge Rev 深度评测：与原版 Clash for Windows 及 v2rayN 相比有哪些核心优势？** | `/articles/clash-verge-rev-complete-feature-review/` |
| 32 | ART-218 | CL-32 Clash Verge Rev 进阶玩法：TUN 虚拟网卡、Merge 覆写与分流规则 | Clash Verge (`/clash/verge/`) | **Clash Verge Rev 进阶教程：TUN 虚拟网卡服务安装与 ChatGPT/Netflix 自定义分流覆写** | `/articles/clash-verge-rev-tun-mode-and-override-guide/` |
| 33 | ART-225 | CL-33 Windows / macOS / Linux 安装包架构选择与 SHA256 校验 | Clash Verge 下载 (`/clash/verge-download/`) | **Clash Verge Rev 官方下载与安装指南：Windows、macOS (Intel/M芯片) 与 Linux 安装包选型表** | `/articles/clash-verge-rev-official-download-and-arch-guide/` |
| 34 | ART-232 | CL-34 识别假冒下载站与解决 Windows WebView2 / macOS 已损坏报错 | Clash Verge 下载 (`/clash/verge-download/`) | **Clash Verge Rev 安装常见问题：macOS 提示“已损坏无法打开”与 Windows WebView2 缺失修复方法** | `/articles/clash-verge-install-errors-and-macos-gatekeeper-fix/` |
| 35 | ART-239 | CL-35 机场订阅链接获取、一键导入与 User-Agent 配置流程 | Clash Verge 订阅 (`/clash/verge-subscription/`) | **Clash Verge Rev 订阅导入保姆级教程：3 步添加机场节点、设置自动更新与防泄露重置** | `/articles/how-to-import-subscription-into-clash-verge-rev/` |
| 36 | ART-246 | CL-36 Clash YAML 配置文件结构解析与安全本地订阅转换 | Clash Verge 订阅 (`/clash/verge-subscription/`) | **Clash YAML 配置结构详解与订阅转换安全指南：警惕在线转换站泄露节点密码** | `/articles/clash-yaml-structure-and-safe-subscription-conversion/` |
| 37 | ART-253 | CL-37 Clash Meta (Mihomo) 内核演进与 VLESS / Hysteria 2 协议解析 | Clash Meta (`/clash/meta/`) | **Clash Meta (Mihomo) 全面科普：为什么导入 VLESS 和 Hysteria 2 机场节点必须使用 Mihomo 内核？** | `/articles/why-vless-and-hysteria2-require-clash-meta-mihomo/` |
| 38 | ART-260 | CL-38 Clash Meta for Android (CMFA) 与 OpenClash Meta 内核切换实战 | Clash Meta (`/clash/meta/`) | **Clash Meta for Android 与软路由 OpenClash 配置指南：Mihomo 内核切换与 Geo 数据库更新** | `/articles/clash-meta-android-and-openclash-kernel-setup/` |
| 39 | ART-267 | CL-39 Clash 新手四步上手与代理模式（规则 / 全局 / 直连）正确选择 | Clash 使用教程 (`/clash/tutorial/`) | **2026 Clash 新手使用教程：从导入订阅到分清「规则 / 全局 / 直连」模式，避免流量白白跑光** | `/articles/clash-beginner-step-by-step-and-proxy-modes/` |
| 40 | ART-274 | CL-40 Clash DNS 防泄漏配置（Fake-IP / DoH）、局域网共享与端口设置 | Clash 使用教程 (`/clash/tutorial/`) | **Clash 高阶配置指南：Fake-IP 与 DoH 防 DNS 泄漏设置，以及开启局域网共享给手机/主机加速** | `/articles/clash-dns-fake-ip-and-allow-lan-sharing-guide/` |
| 41 | ART-281 | CL-41 节点全红（Timeout 超时）与订阅拉取失败的 6 步定位法 | Clash 故障排查 (`/clash/troubleshooting/`) | **Clash 节点全红显示 Timeout 超时怎么办？从系统时间同步到 Mihomo 内核的 6 步排查法** | `/articles/clash-all-nodes-timeout-red-troubleshooting/` |
| 42 | ART-288 | CL-42 连接成功却打不开网页 & 关闭 Clash 后电脑断网修复 | Clash 故障排查 (`/clash/troubleshooting/`) | **Clash 显示已连接却打不开网页？关闭软件后电脑彻底断网（代理服务器拒绝连接）一键修复指南** | `/articles/clash-connected-but-no-internet-and-proxy-reset/` |
| 43 | ART-295 | CL-43 公开免费节点池技术溯源、存活率统计与安全核验 | 免费节点 (`/resources/free-nodes/`) | **2026 公开免费节点核验报告：GitHub 自动抓取节点池从何而来？为什么几小时就会失效？** | `/articles/public-free-nodes-source-and-survival-audit/` |
| 44 | ART-302 | CL-44 免费节点中间人嗅探防范与高性价比平替方案 | 免费节点 (`/resources/free-nodes/`) | **使用免费节点的 5 条安全红线：哪些操作绝对不能走公共节点？附每日 0.2 元专线平替** | `/articles/free-node-security-rules-and-budget-alternatives/` |
| 45 | ART-309 | CL-45 机场跑路前的 8 大高危信号与促销套路识别 | 跑路预警 (`/resources/scam-alert/`) | **2026 机场跑路预警指南：充值前必看的 8 大跑路前兆信号，警惕“三年付骨折价”收割局** | `/articles/8-warning-signs-before-airport-exit-scam/` |
| 46 | ART-316 | CL-46 机场突然失联/跑路后的应急排查与平滑迁移指南 | 跑路预警 (`/resources/scam-alert/`) | **机场突然连不上、官网打不开是跑路了吗？3 步区分「域名被封」与「真跑路」及应急替代方案** | `/articles/airport-down-or-exit-scam-emergency-guide/` |
| 47 | ART-323 | CL-47 套餐计费、流量重置、优惠码与账号合规 FAQ | 机场 FAQ (`/resources/faq/`) | **机场购买与账号 FAQ：流量按自然月还是购买日重置？“不限设备”真的可以多人合租吗？** | `/articles/airport-billing-traffic-reset-and-device-limit-faq/` |
| 48 | ART-330 | CL-48 知乎 / GitHub / Reddit 机场推荐可信度与评测阅读指南 | 机场 FAQ (`/resources/faq/`) | **知乎、GitHub 与 Reddit 上的「机场推荐」可信吗？如何识别 AFF 水军软文与真实实测数据？** | `/articles/zhihu-github-reddit-airport-reviews-credibility/` |
| 49 | ART-337 | CL-49 41家机场品牌透明度评级与资料缺口审计档案 | 机场风险情报 (`/resources/risk-intel/`) | **41 家独立机场品牌风险情报与透明度审计报告：实测证据、同源矩阵与待核实缺口全公开** | `/articles/41-airport-brands-transparency-and-audit-ledger/` |
| 50 | ART-344 | CL-50 机场支付隐私保护、审计规则与退款条款边界说明 | 机场风险情报 (`/resources/risk-intel/`) | **机场注册、支付隐私与退款避坑指南：为什么不能挂着机场下 BT？如何避免买到不退换套餐？** | `/articles/airport-payment-privacy-and-refund-policy-guide/` |
| 51 | ART-351 | CL-51 科学看懂机场测速图：TLS RTT、HTTP 延迟、MB/s 与 Mbps 换算 | 节点检测 (`/resources/node-check/`) | **如何科学看懂机场测速图？详解 TLS RTT、HTTP 延迟、MB/s 与 Mbps 换算及单/多线程差异** | `/articles/how-to-read-airport-speedtest-charts-accurately/` |
| 52 | ART-358 | CL-52 原生 IP / 住宅 IP 鉴定、IP 欺诈分（Scamalytics）与 UDP NAT 类型检测 | 节点检测 (`/resources/node-check/`) | **节点 IP 纯净度与原生 IP 检测教程：如何查询 ASN、IPrisk 欺诈分与 UDP FullCone 状态？** | `/articles/native-ip-fraud-score-and-udp-nat-check-guide/` |
| 53 | ART-365 | CL-53 订阅链接更新失败、超时与 User-Agent / 代理回环排查 | 订阅问题 (`/resources/subscription-issues/`) | **机场订阅链接失效、更新失败怎么办？排查代理回环、内核不兼容与域名更换的 7 种方法** | `/articles/airport-subscription-update-failure-complete-fixes/` |
| 54 | ART-372 | CL-54 为什么有些机场后台找不到订阅链接？（专属客户端 vs 通用订阅详解） | 订阅问题 (`/resources/subscription-issues/`) | **为什么机场后台找不到 Clash 订阅链接？盘点 8 家仅限专属客户端的机场及双支持替代方案** | `/articles/why-some-airports-have-no-clash-subscription-url/` |
| 55 | ART-379 | CL-55 零基础第一次购买与连接机场 10 分钟快速上手流程 | 新手帮助 (`/resources/beginner-help/`) | **2026 零基础新手第一次买机场保姆级教程：从挑选套餐、使用优惠码到连上外网仅需 10 分钟** | `/articles/first-time-airport-buyer-10-minute-onboarding/` |
| 56 | ART-386 | CL-56 机场新手最容易踩的 10 个误区与安全习惯养成 | 新手帮助 (`/resources/beginner-help/`) | **机场新手必读：最容易踩的 10 个高频大坑（年付折算价误解、全局模式跑光流量、下错客户端）** | `/articles/top-10-mistakes-airport-beginners-must-avoid/` |
