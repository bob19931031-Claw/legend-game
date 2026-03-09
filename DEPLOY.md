# 传奇页游 - Vercel部署指南

## 快速部署

### 方法一：Vercel网页部署（推荐）
1. **压缩项目文件**：将整个 `legend-game` 文件夹压缩为ZIP
2. **登录Vercel**：访问 https://vercel.com
3. **创建新项目**：点击"New Project" → "Import" → "Drag & Drop"
4. **上传ZIP文件**：拖拽ZIP文件到上传区域
5. **配置项目**：
   - 项目名称：`legend-game`（可自定义）
   - 框架预设：选择"Other"
6. **点击部署**：等待1-2分钟完成部署
7. **获取链接**：部署成功后获得 `https://legend-game.vercel.app`

### 方法二：GitHub + Vercel自动部署
1. **创建GitHub仓库**：
   ```bash
   git init
   git add .
   git commit -m "初始提交：传奇页游"
   git branch -M main
   git remote add origin https://github.com/你的用户名/legend-game.git
   git push -u origin main
   ```

2. **Vercel连接GitHub**：
   - 登录Vercel → "New Project"
   - 选择"Import Git Repository"
   - 授权GitHub账户
   - 选择 `legend-game` 仓库
   - 点击"Deploy"

3. **自动更新**：以后每次推送到GitHub，Vercel会自动重新部署

### 方法三：Vercel CLI命令行部署
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 进入项目目录
cd legend-game

# 部署
vercel

# 生产环境部署
vercel --prod
```

## 部署配置说明

### `vercel.json` 配置文件
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "."
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 环境变量
无需特殊环境变量，纯静态项目。

## 测试部署

部署完成后，访问你的Vercel链接测试：

1. **基本功能测试**：
   - 页面加载是否正常
   - 游戏画面是否显示
   - 控制按钮是否工作

2. **游戏功能测试**：
   - 角色移动（键盘/鼠标）
   - 攻击怪物
   - 技能使用
   - 升级系统

3. **设备兼容性**：
   - 桌面浏览器
   - 移动设备
   - 不同屏幕尺寸

## 常见问题

### 1. 部署失败
- **错误**：Build failed
- **解决**：检查 `package.json` 中的构建脚本，确保 `vercel-build` 脚本存在

### 2. 页面空白
- **错误**：页面加载但显示空白
- **解决**：检查浏览器控制台错误，可能是Phaser.js加载失败

### 3. 资源404
- **错误**：图片或脚本加载失败
- **解决**：确保所有资源路径正确，Vercel正确配置了路由

### 4. 游戏性能问题
- **解决**：减少同时显示的怪物数量，优化资源加载

## 自定义域名

如需使用自定义域名：

1. 在Vercel项目设置中选择"Domains"
2. 添加你的域名（如 `game.yourdomain.com`）
3. 按照提示配置DNS记录
4. 等待DNS生效（通常几分钟到几小时）

## 监控和日志

- **访问统计**：Vercel控制台 → Analytics
- **错误日志**：Vercel控制台 → Logs
- **性能监控**：Vercel控制台 → Speed Insights

## 更新部署

### 手动更新
```bash
# 修改代码后
git add .
git commit -m "更新说明"
git push origin main
# Vercel会自动重新部署
```

### 回滚版本
在Vercel控制台 → Deployments，选择之前的版本点击"Redeploy"

## 技术支持

如有部署问题：
1. 检查Vercel部署日志
2. 查看浏览器控制台错误
3. 确保项目结构完整
4. 验证网络连接

---
**部署成功后，将游戏链接分享给朋友一起玩吧！** 🎮