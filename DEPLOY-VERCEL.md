# 🚀 Vercel部署指南

## 方法一：自动部署（推荐）

### 步骤：
1. **访问Vercel控制台**：https://vercel.com/new
2. **登录GitHub账号**
3. **导入仓库**：搜索 `bob19931031-Claw/legend-game`
4. **点击导入**：Vercel会自动检测配置并部署
5. **等待部署完成**：约1-2分钟
6. **访问游戏**：使用Vercel提供的域名

### 预期结果：
- 部署完成后获得类似 `https://legend-game.vercel.app` 的链接
- 自动配置HTTPS和全球CDN
- 支持自动更新（每次GitHub推送自动重新部署）

## 方法二：使用Vercel CLI

```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署到Vercel
cd legend-game
vercel
vercel --prod
```

## 方法三：GitHub Pages备用方案

如果Vercel部署有问题，可以使用GitHub Pages：

1. **访问仓库设置**：https://github.com/bob19931031-Claw/legend-game/settings/pages
2. **选择分支**：`main`
3. **选择文件夹**：`/` (根目录)
4. **点击保存**：等待几分钟部署
5. **访问游戏**：https://bob19931031-claw.github.io/legend-game/play-now.html

## 📍 直接访问链接

### Vercel部署后：
```
主游戏：https://[你的项目名].vercel.app/play-now.html
简化版：https://[你的项目名].vercel.app/demo.html
完整版：https://[你的项目名].vercel.app/legend-final.html
```

### GitHub Pages：
```
https://bob19931031-claw.github.io/legend-game/play-now.html
```

## ✅ 验证部署成功

1. **检查Vercel项目**：https://vercel.com/bob1031
2. **查看部署日志**：Vercel控制台 → 项目 → Deployments
3. **测试游戏链接**：点击提供的链接，确保不黑屏

## 🛠️ 故障排除

### 问题1：Vercel找不到仓库
- 确保GitHub仓库是公开的
- 检查仓库名称：`bob19931031-Claw/legend-game`
- 确认有访问权限

### 问题2：部署失败
- 检查 `vercel.json` 配置
- 查看部署日志中的错误信息
- 确保所有文件已提交到GitHub

### 问题3：游戏黑屏
- 检查浏览器控制台（F12）错误
- 确保Phaser.js CDN可访问
- 验证HTML文件结构完整

## 📞 技术支持

如果部署遇到问题：
1. 截图错误信息
2. 检查GitHub仓库状态
3. 查看Vercel部署日志
4. 尝试GitHub Pages作为备用

---

**游戏已准备就绪，只需在Vercel上点击几下即可部署完成！**