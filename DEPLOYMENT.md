# clash-cloud.run（clash机场）生产环境构建与 Apache 2.4 静态部署指南

## 一、技术栈与构建产物架构

- **核心框架**：VitePress 1.6.x + Vue 3.5 + TypeScript
- **全文检索**：Pagefind 1.3.x（构建后自动扫描 `docs/.vitepress/dist` 生成 `/pagefind/` 静态索引）
- **站点地图与爬虫协议**：`sitemap.xml`（构建时自动生成并规范化目录 URL）+ `robots.txt`
- **Apache 静态规则**：`docs/public/.htaccess`（构建时自动复制到 `docs/.vitepress/dist/.htaccess`）

---

## 二、本地开发、生产构建与预览命令

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务器
npm run dev

# 3. 执行完整生产静态构建 + Pagefind 全站中文搜索索引生成
npm run build

# 4. 本地预览静态构建产物
npm run preview
```

构建完成后，全部静态部署文件位于：
```text
/Users/mac/Desktop/clash-cloud.run/docs/.vitepress/dist/
├── index.html                # 首页（19大模块完整静态HTML）
├── 404.html                  # 自定义 404 错误页（供 Apache ErrorDocument 404 调用）
├── .htaccess                 # Apache 2.4 重写、缓存、安全头与 404 规则
├── robots.txt                # 搜索引擎抓取规则与 Sitemap 声明
├── sitemap.xml               # 全站 133 个有效公开页面 Sitemap（不含 404 与未发布规划页）
├── pagefind/                 # Pagefind 静态全文检索索引与 WASM 引擎
├── assets/                   # 经过 Hash 指纹化的 CSS / JS 静态包
├── images/                   # 品牌 Logo、17家 8.11 测速图与光速云三网/流媒体解锁图
├── airport/                  # ① 机场推荐一级频道及 7 个二级栏目目录
├── vpn/                      # ② VPN 与加速器一级频道及 7 个二级栏目目录
├── clash/                    # ③ Clash 客户端一级频道及 7 个二级栏目目录
├── resources/                # ④ 资源与情报一级频道及 7 个二级栏目目录
├── brands/                   # 41 家独立机场品牌数据库首页及 41 个品牌深度评测子目录
├── compare/                  # 机场横向对比与二选一决策中心
├── clients/                  # 22 款第三方代理客户端知识库
└── articles/                 # 56 个三级内容集群代表文章独立目录
```

---

## 三、Apache 2.4 虚拟主机（VirtualHost）推荐配置

在生产服务器（Ubuntu / Debian / Rocky Linux）上，确保已启用以下 Apache 模块：

```bash
sudo a2enmod rewrite headers expires deflate mime ssl http2
sudo systemctl reload apache2
```

推荐的 `/etc/apache2/sites-available/clash-cloud.run.conf` 配置：

```apache
<VirtualHost *:80>
    ServerName clash-cloud.run
    ServerAlias www.clash-cloud.run
    RewriteEngine On
    RewriteRule ^ https://clash-cloud.run%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
    ServerName clash-cloud.run
    ServerAlias www.clash-cloud.run
    DocumentRoot /var/www/clash-cloud.run/dist

    Protocols h2 http/1.1

    <Directory /var/www/clash-cloud.run/dist>
        Options -Indexes -MultiViews +FollowSymLinks
        AllowOverride All
        Require all granted
        DirectoryIndex index.html
    </Directory>

    ErrorDocument 404 /404.html

    # SSL 证书配置 (Let's Encrypt / Certbot)
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/clash-cloud.run/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/clash-cloud.run/privkey.pem

    ErrorLog ${APACHE_LOG_DIR}/clash-cloud.run-error.log
    CustomLog ${APACHE_LOG_DIR}/clash-cloud.run-access.log combined
</VirtualHost>
```

---

## 四、部署核验清单（Post-Deployment Checklist）

1. **深层 URL 直接访问与刷新测试**：
   访问 `https://clash-cloud.run/brands/guangsuyun/`、`https://clash-cloud.run/airport/recommend/`、`https://clash-cloud.run/articles/how-to-choose-main-airport-2026/`，确认返回 HTTP `200 OK` 且刷新不报 404。
2. **真实 HTTP 404 状态码验证（严禁 SPA 软 404）**：
   执行 `curl -I https://clash-cloud.run/non-existent-page-xyz` 确认返回 `HTTP/2 404` 并展示自定义 `404.html`，绝不回退到首页返回 `200 OK`。
3. **搜索与 Sitemap 验证**：
   确认 `https://clash-cloud.run/sitemap.xml`、`https://clash-cloud.run/robots.txt` 与 `https://clash-cloud.run/pagefind/pagefind.js` 均可正常加载。
