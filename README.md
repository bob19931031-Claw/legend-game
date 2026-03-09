# 传奇页游

基于Phaser.js开发的传奇类网页游戏，专为Vercel部署优化。

## 功能特性

- 🎮 **经典传奇玩法**：打怪升级、装备系统、技能系统
- 🖥️ **纯前端实现**：HTML5 + JavaScript + Phaser.js
- 🎨 **精美界面**：复古传奇风格UI设计
- 🎯 **多种控制方式**：键盘、鼠标、触摸屏
- 📱 **响应式设计**：适配桌面和移动设备
- ⚡ **快速部署**：一键部署到Vercel

## 游戏功能

### 核心玩法
1. **角色移动**：方向键/WASD/点击移动
2. **战斗系统**：攻击怪物、获得经验、掉落物品
3. **升级系统**：经验积累、等级提升、属性成长
4. **技能系统**：治疗术、魔法攻击等技能
5. **怪物系统**：多种怪物类型，不同属性和掉落

### 界面功能
1. **角色状态面板**：实时显示HP、MP、等级、经验
2. **怪物信息面板**：显示当前目标怪物信息
3. **战斗日志**：记录所有战斗和系统信息
4. **游戏地图**：Phaser.js渲染的2D游戏世界
5. **控制面板**：技能按钮和攻击按钮

## 技术栈

- **游戏引擎**：Phaser.js 3.60.0
- **前端框架**：原生HTML/CSS/JavaScript
- **部署平台**：Vercel
- **资源加载**：Base64内嵌SVG资源

## 本地运行

```bash
# 克隆项目
git clone <repository-url>
cd legend-game

# 安装依赖（如果需要本地服务器）
npm install

# 启动本地服务器
npm start

# 或直接使用Python简单服务器
python3 -m http.server 8000
```

然后在浏览器中访问：http://localhost:8000

## 部署到Vercel

### 方法一：通过Vercel CLI
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 方法二：通过GitHub
1. 将代码推送到GitHub仓库
2. 登录Vercel并导入仓库
3. 自动部署完成

### 方法三：直接上传
1. 登录Vercel控制台
2. 选择"Import Project"
3. 拖拽项目文件夹上传

## 游戏控制

### 键盘控制
- **移动**：方向键 ↑↓←→ 或 WASD
- **攻击**：空格键
- **技能1（治疗）**：数字键 1
- **技能2（魔法）**：数字键 2

### 鼠标控制
- **移动**：点击地图任意位置
- **攻击**：点击"攻击怪物"按钮
- **技能**：点击技能按钮

### 触摸屏控制
- **移动**：点击地图任意位置
- **攻击/技能**：点击屏幕按钮

## 项目结构

```
legend-game/
├── index.html          # 主页面
├── game.js            # Phaser游戏逻辑
├── vercel.json        # Vercel部署配置
├── package.json       # 项目配置
└── README.md          # 说明文档
```

## 二次开发

### 添加新怪物
在 `game.js` 的 `createMonsters()` 函数中添加新的怪物配置：

```javascript
const monster = this.physics.add.sprite(x, y, 'monsterTexture');
monster.monsterType = '怪物名称';
monster.hp = 100;
monster.maxHp = 100;
```

### 添加新技能
在 `index.html` 的JavaScript部分添加新技能：

```javascript
function useNewSkill() {
    // 技能逻辑
    addLog('使用了新技能！', 'info');
}
```

### 修改游戏平衡
在 `index.html` 的 `gameState` 对象中调整数值：

```javascript
let gameState = {
    player: {
        attackMin: 15,  // 最小攻击力
        attackMax: 25,  // 最大攻击力
        // ... 其他属性
    }
};
```

## 注意事项

1. **资源优化**：当前使用Base64内嵌资源，实际项目中建议使用外部图片资源
2. **游戏保存**：当前版本为演示版，游戏进度不会保存
3. **多人游戏**：当前为单机版，如需多人联机需要后端支持
4. **性能优化**：怪物数量较多时可能需要优化渲染性能

## 许可证

MIT License - 可自由使用、修改和分发

## 联系

如有问题或建议，请联系项目开发者。

---
**祝您游戏愉快！** 🎮