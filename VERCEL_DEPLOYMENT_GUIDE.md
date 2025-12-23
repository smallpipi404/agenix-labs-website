# Vercel 部署指南 - Agenix Labs 网站

本指南将帮助您将 Agenix Labs 网站部署到 Vercel 平台。

## 📋 前置要求

- ✅ GitHub/GitLab/Bitbucket 账号
- ✅ Vercel 账号（可使用 GitHub 登录）
- ✅ Resend API Key（用于联系表单功能）

---

## 🚀 方法一：通过 Vercel 网页端部署（推荐）

### 步骤 1：准备 Git 仓库

确保项目已推送到 Git 仓库：

```bash
# 如果还没有初始化 Git
git init
git add .
git commit -m "Initial commit for Vercel deployment"

# 推送到远程仓库（GitHub/GitLab/Bitbucket）
git remote add origin <your-repo-url>
git push -u origin main
```

### 步骤 2：导入项目到 Vercel

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 **"Add New Project"** 或 **"Import Project"**
3. 选择您的 Git 提供商（GitHub/GitLab/Bitbucket）
4. 授权 Vercel 访问您的仓库
5. 选择 `agenix-labs-website` 项目

### 步骤 3：配置项目设置

Vercel 会自动检测到这是一个 Next.js 项目，但请确认以下设置：

**Framework Preset:** Next.js  
**Root Directory:** `./` (根目录)  
**Build Command:** `npm run build` (自动检测)  
**Output Directory:** `.next` (自动检测)  
**Install Command:** `npm install` (自动检测)  

### 步骤 4：配置环境变量

在 Vercel 项目设置中添加环境变量：

1. 在项目配置页面，找到 **"Environment Variables"** 部分
2. 添加以下环境变量：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `RESEND_API_KEY` | `re_your_actual_api_key` | 从 [Resend](https://resend.com/api-keys) 获取 |

**获取 Resend API Key：**
- 访问 [https://resend.com/api-keys](https://resend.com/api-keys)
- 注册/登录账号
- 创建新的 API Key
- 复制密钥并粘贴到 Vercel 环境变量中

### 步骤 5：部署

1. 点击 **"Deploy"** 按钮
2. 等待构建完成（通常需要 1-3 分钟）
3. 部署成功后，您会获得一个 `.vercel.app` 域名

---

## 🖥️ 方法二：通过 Vercel CLI 部署

### 步骤 1：安装 Vercel CLI

```bash
npm install -g vercel
```

### 步骤 2：登录 Vercel

```bash
vercel login
```

按照提示完成登录（支持 GitHub/GitLab/Email）。

### 步骤 3：配置环境变量

创建本地环境变量文件（不要提交到 Git）：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，添加您的 Resend API Key：

```env
RESEND_API_KEY=re_your_actual_api_key
```

### 步骤 4：首次部署

在项目根目录运行：

```bash
vercel
```

CLI 会询问以下问题：

```
? Set up and deploy "~/path/to/agenix-labs-website"? [Y/n] Y
? Which scope do you want to deploy to? <Your Account>
? Link to existing project? [y/N] N
? What's your project's name? agenix-labs-website
? In which directory is your code located? ./
```

### 步骤 5：添加环境变量到 Vercel

```bash
# 添加生产环境变量
vercel env add RESEND_API_KEY production

# 按提示输入 API Key 值
```

### 步骤 6：生产环境部署

```bash
vercel --prod
```

---

## 🔧 部署后配置

### 1. 自定义域名（可选）

在 Vercel Dashboard 中：
1. 进入项目设置
2. 点击 **"Domains"**
3. 添加您的自定义域名（如 `www.agenixlabs.co.uk`）
4. 按照提示配置 DNS 记录

### 2. 测试联系表单

部署完成后，访问网站并测试联系表单：

1. 访问您的网站
2. 找到联系表单
3. 填写测试信息并提交
4. 检查 `contact@agenixlabs.co.uk` 是否收到邮件

### 3. 监控部署状态

```bash
# 查看部署历史
vercel list

# 查看部署日志
vercel logs <deployment-url>
```

---

## 📊 Vercel 配置文件说明

项目已包含以下配置文件：

### `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["lhr1"],  // 伦敦区域（最接近英国）
  "env": {
    "RESEND_API_KEY": "@resend_api_key"
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "Content-Type"
        }
      ]
    }
  ]
}
```

### `.vercelignore`

指定 Vercel 部署时忽略的文件和目录。

---

## 🐛 常见问题排查

### 问题 1：构建失败

**错误信息：** `Build failed`

**解决方案：**
```bash
# 本地测试构建
npm run build

# 检查是否有 TypeScript 错误
npm run lint
```

### 问题 2：环境变量未生效

**错误信息：** `RESEND_API_KEY is not configured`

**解决方案：**
1. 在 Vercel Dashboard 检查环境变量是否正确设置
2. 确保变量名完全匹配（区分大小写）
3. 重新部署项目：`vercel --prod`

### 问题 3：API 路由 404

**错误信息：** `404 - /api/contact not found`

**解决方案：**
- 确保 `app/api/contact/route.ts` 文件存在
- 检查 Next.js 版本是否为 14.x（使用 App Router）

### 问题 4：邮件发送失败

**错误信息：** `Failed to send email`

**解决方案：**
1. 验证 Resend API Key 是否有效
2. 检查 Resend 账号状态（是否需要验证邮箱）
3. 查看 Vercel 函数日志：Dashboard → Functions → Logs

---

## 📈 性能优化建议

### 1. 启用 Edge Functions（可选）

在 `vercel.json` 中添加：

```json
{
  "functions": {
    "app/api/contact/route.ts": {
      "runtime": "edge"
    }
  }
}
```

### 2. 配置缓存策略

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=86400"
        }
      ]
    }
  ]
}
```

### 3. 图片优化

确保使用 Next.js Image 组件：

```tsx
import Image from 'next/image';

<Image 
  src="/logo.png" 
  alt="Agenix Labs" 
  width={200} 
  height={50}
  priority
/>
```

---

## 🔄 持续部署

Vercel 会自动监听 Git 仓库的变化：

- **推送到主分支** → 自动部署到生产环境
- **推送到其他分支** → 自动创建预览部署
- **Pull Request** → 自动创建预览链接

### 禁用自动部署（可选）

在 `vercel.json` 中添加：

```json
{
  "github": {
    "silent": true,
    "autoAlias": false
  }
}
```

---

## 📞 获取帮助

- **Vercel 文档：** [https://vercel.com/docs](https://vercel.com/docs)
- **Next.js 文档：** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Resend 文档：** [https://resend.com/docs](https://resend.com/docs)
- **Vercel 支持：** [https://vercel.com/support](https://vercel.com/support)

---

## ✅ 部署检查清单

在部署前，请确认：

- [ ] 代码已推送到 Git 仓库
- [ ] `package.json` 中的构建脚本正确
- [ ] 已获取 Resend API Key
- [ ] 环境变量已在 Vercel 中配置
- [ ] 本地构建测试通过（`npm run build`）
- [ ] 联系表单功能已测试

部署后，请验证：

- [ ] 网站可以正常访问
- [ ] 所有页面加载正常
- [ ] 联系表单可以成功提交
- [ ] 邮件可以正常接收
- [ ] 移动端显示正常
- [ ] 性能评分良好（可使用 Lighthouse）

---

## 🎉 部署完成！

恭喜！您的 Agenix Labs 网站已成功部署到 Vercel。

**下一步：**
1. 配置自定义域名
2. 设置 SSL 证书（Vercel 自动提供）
3. 配置 Analytics（可选）
4. 设置 Monitoring 和 Alerts

祝您使用愉快！🚀
