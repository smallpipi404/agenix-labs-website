# Vercel 部署指南

## 部署前准备

### 1. GitHub 认证问题解决

当前遇到 Git 推送权限问题：
```
remote: Permission to smallpipi404/agenix-labs-website.git denied to purrpawboutique.
```

**解决方案选择其一：**

#### 方案 A：使用正确的 GitHub 账号认证
```bash
# 清除当前 Git 凭证
git credential-osxkeychain erase
host=github.com
protocol=https

# 重新推送，会提示输入 smallpipi404 账号的凭证
git push -u origin main
```

#### 方案 B：使用个人访问令牌 (Personal Access Token)
1. 登录 GitHub 账号 `smallpipi404`
2. 前往 Settings → Developer settings → Personal access tokens → Tokens (classic)
3. 生成新令牌，勾选 `repo` 权限
4. 使用令牌推送：
```bash
git remote set-url origin https://smallpipi404:[YOUR_TOKEN]@github.com/smallpipi404/agenix-labs-website.git
git push -u origin main
```

#### 方案 C：使用 SSH 密钥
```bash
# 将远程仓库地址改为 SSH
git remote set-url origin git@github.com:smallpipi404/agenix-labs-website.git
git push -u origin main
```

---

## Vercel 部署步骤

### 方式 1：从 GitHub 导入（推荐）

**前提：** 代码已成功推送到 GitHub 仓库

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号 `smallpipi404` 登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择 GitHub 仓库 `smallpipi404/agenix-labs-website`
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Next.js (自动检测)
   - **Root Directory**: `./` (默认)
   - **Build Command**: `npm run build` (自动填充)
   - **Output Directory**: `.next` (自动填充)

4. **配置环境变量**
   - 展开 "Environment Variables" 部分
   - 添加以下变量：
     ```
     Key: RESEND_API_KEY
     Value: [您的 Resend API 密钥]
     ```
   - 选择环境：Production, Preview, Development (全选)

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）
   - 部署成功后会获得一个 `.vercel.app` 域名

---

### 方式 2：使用 Vercel CLI（备选）

**如果 GitHub 推送遇到问题，可以直接从本地部署**

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   # 在项目根目录执行
   vercel
   ```

4. **首次部署配置**
   - Set up and deploy? **Y**
   - Which scope? 选择您的账号
   - Link to existing project? **N**
   - What's your project's name? `agenix-labs-website`
   - In which directory is your code located? `./`
   - Want to override the settings? **N**

5. **添加环境变量**
   ```bash
   vercel env add RESEND_API_KEY
   ```
   - 选择环境：Production, Preview, Development
   - 输入您的 Resend API 密钥

6. **生产环境部署**
   ```bash
   vercel --prod
   ```

---

## 部署后验证

### 1. 检查网站功能
- 访问部署的 URL
- 测试首页加载
- 测试联系表单提交

### 2. 查看部署日志
- 在 Vercel Dashboard 中查看 "Deployments" 标签
- 检查构建日志和运行时日志

### 3. 配置自定义域名（可选）
- 在项目设置中点击 "Domains"
- 添加您的自定义域名
- 按照提示配置 DNS 记录

---

## 常见问题

### 构建失败
- 检查 `package.json` 中的依赖是否完整
- 查看构建日志中的错误信息
- 确保 Node.js 版本兼容（推荐 18.x 或 20.x）

### 邮件发送失败
- 确认 `RESEND_API_KEY` 环境变量已正确设置
- 检查 Resend 账号的配额和状态
- 查看 Vercel 的 Functions 日志

### 环境变量未生效
- 重新部署项目以应用新的环境变量
- 确保变量名称完全匹配（区分大小写）

---

## 项目信息

- **仓库**: https://github.com/smallpipi404/agenix-labs-website
- **框架**: Next.js 15.1.6
- **Node.js**: 18.x 或更高版本
- **包管理器**: npm

## 需要的环境变量

| 变量名 | 说明 | 必需 |
|--------|------|------|
| RESEND_API_KEY | Resend 邮件服务 API 密钥 | 是 |

---

**部署成功后，您的网站将自动获得：**
- ✅ HTTPS 加密
- ✅ 全球 CDN 加速
- ✅ 自动构建和部署
- ✅ 预览环境（每个 PR）
- ✅ 性能监控和分析
