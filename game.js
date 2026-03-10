// 传奇页游 - Phaser.js 游戏逻辑
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.player = null;
        this.monsters = [];
        this.cursors = null;
        this.map = null;
        this.graphics = null;
        this.isMoving = false;
    }

    preload() {
        // 加载游戏资源
        // 注意：这里使用占位符，实际项目中需要真实的图片资源
        this.load.image('player', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjNEI5OEUzIi8+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTIiIHI9IjQiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeD0iMTIiIHk9IjE4IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPg==');
        
        this.load.image('monster1', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjY0QjNCIi8+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTIiIHI9IjYiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeD0iMTAiIHk9IjIwIiB3aWR0aD0iMTIiIGhlaWdodD0iNiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4=');
        
        this.load.image('monster2', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjODg4ODg4Ii8+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTAiIHI9IjUiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeD0iMTIiIHk9IjE4IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPg==');
        
        this.load.image('grass', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNzhFMDhGIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjgiIGZpbGw9IiM2Q0NBNjMiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxjaXJjbGUgY3g9IjQ0IiBjeT0iNDAiIHI9IjYiIGZpbGw9IiM2Q0NBNjMiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==');
        
        this.load.image('tree', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjAiIHk9IjMwIiB3aWR0aD0iOCIgaGVpZ2h0PSIxOCIgZmlsbD0iIzhENDUxQyIvPgo8Y2lyY2xlIGN4PSIyNCIgY3k9IjIwIiByPSIxNCIgZmlsbD0iIzI2QTQ1MyIvPgo8L3N2Zz4=');
        
        this.load.image('rock', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiM3ODc4NzgiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgZmlsbD0iI0E2QTVBNSIvPgo8Y2lyY2xlIGN4PSIyMiIgY3k9IjEwIiByPSIzIiBmaWxsPSIjQTZBNUE1Ii8+Cjwvc3ZnPg==');
    }

    create() {
        // 创建地图
        this.createMap();
        
        // 创建玩家
        this.player = this.physics.add.sprite(400, 300, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1.5);
        
        // 创建怪物
        this.createMonsters();
        
        // 设置摄像机
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(1.5);
        
        // 键盘控制
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // 鼠标/触摸控制
        this.input.on('pointerdown', (pointer) => {
            this.moveToPosition(pointer.worldX, pointer.worldY);
        });
        
        // 暴露给全局
        window.gameScene = this;
        
        // 添加游戏提示
        this.add.text(10, 10, '传奇页游 - 测试版', {
            fontSize: '24px',
            fill: '#f6b93b',
            fontFamily: 'Microsoft YaHei',
            stroke: '#000',
            strokeThickness: 4
        }).setScrollFactor(0);
        
        this.add.text(10, 50, '控制方式：\n方向键/WASD：移动\n空格：攻击\n1：治疗术\n2：魔法攻击\n点击地图：移动至位置', {
            fontSize: '16px',
            fill: '#78e08f',
            fontFamily: 'Microsoft YaHei',
            stroke: '#000',
            strokeThickness: 2
        }).setScrollFactor(0);
        
        // 游戏状态显示
        this.createHUD();
    }

    createMap() {
        // 创建草地背景
        for (let x = 0; x < 20; x++) {
            for (let y = 0; y < 15; y++) {
                const tile = this.add.image(x * 64, y * 64, 'grass');
                tile.setOrigin(0);
            }
        }
        
        // 添加一些障碍物和装饰
        const obstacles = [
            { x: 300, y: 200, type: 'tree' },
            { x: 500, y: 400, type: 'tree' },
            { x: 200, y: 500, type: 'tree' },
            { x: 600, y: 300, type: 'tree' },
            { x: 350, y: 350, type: 'rock' },
            { x: 450, y: 250, type: 'rock' },
            { x: 550, y: 450, type: 'rock' }
        ];
        
        obstacles.forEach(obs => {
            const obstacle = this.physics.add.image(obs.x, obs.y, obs.type);
            obstacle.setImmovable(true);
            obstacle.setScale(obs.type === 'tree' ? 1.2 : 0.8);
            this.physics.add.collider(this.player, obstacle);
        });
    }

    createMonsters() {
        const monsterPositions = [
            { x: 200, y: 200, type: 'monster1' },
            { x: 600, y: 300, type: 'monster1' },
            { x: 400, y: 500, type: 'monster2' },
            { x: 300, y: 400, type: 'monster2' },
            { x: 500, y: 200, type: 'monster1' }
        ];
        
        monsterPositions.forEach(pos => {
            const monster = this.physics.add.sprite(pos.x, pos.y, pos.type);
            monster.setScale(1.5);
            monster.monsterType = pos.type === 'monster1' ? '野猪' : '骷髅兵';
            monster.hp = pos.type === 'monster1' ? 50 : 80;
            monster.maxHp = monster.hp;
            
            // 怪物随机移动
            this.time.addEvent({
                delay: Phaser.Math.Between(2000, 5000),
                callback: () => {
                    if (monster.active) {
                        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
                        monster.setVelocity(
                            Math.cos(angle) * 50,
                            Math.sin(angle) * 50
                        );
                        
                        this.time.delayedCall(1000, () => {
                            if (monster.active) {
                                monster.setVelocity(0, 0);
                            }
                        });
                    }
                },
                loop: true
            });
            
            this.monsters.push(monster);
            this.physics.add.collider(this.player, monster, this.onPlayerMonsterCollision, null, this);
        });
    }

    createHUD() {
        // 玩家血条
        this.playerHpBar = this.add.graphics();
        this.updateHpBar();
        
        // 玩家信息文本
        this.playerInfoText = this.add.text(10, 100, '', {
            fontSize: '16px',
            fill: '#ffffff',
            fontFamily: 'Microsoft YaHei',
            stroke: '#000',
            strokeThickness: 2
        }).setScrollFactor(0);
        
        // 更新玩家信息
        this.updatePlayerInfo();
    }

    updateHpBar() {
        this.playerHpBar.clear();
        
        // 血条背景
        this.playerHpBar.fillStyle(0x000000, 0.5);
        this.playerHpBar.fillRect(this.player.x - 25, this.player.y - 40, 50, 8);
        
        // 当前血量
        const hpPercent = window.gameState.player.hp / window.gameState.player.maxHp;
        this.playerHpBar.fillStyle(0xff0000, 1);
        this.playerHpBar.fillRect(this.player.x - 25, this.player.y - 40, 50 * hpPercent, 8);
        
        // 血条边框
        this.playerHpBar.lineStyle(2, 0x000000, 1);
        this.playerHpBar.strokeRect(this.player.x - 25, this.player.y - 40, 50, 8);
    }

    updatePlayerInfo() {
        const state = window.gameState.player;
        this.playerInfoText.setText(
            `Lv.${state.level}  HP:${state.hp}/${state.maxHp}\n` +
            `MP:${state.mp}/${state.maxMp}  EXP:${state.exp}/${state.maxExp}`
        );
        
        // 定位在玩家上方
        this.playerInfoText.setPosition(
            this.player.x - this.playerInfoText.width / 2,
            this.player.y - 60
        );
    }

    update() {
        // 键盘控制
        const speed = 200;
        this.player.setVelocity(0);
        
        if (this.cursors.left.isDown || this.input.keyboard.checkDown(this.input.keyboard.addKey('A'))) {
            this.player.setVelocityX(-speed);
            this.isMoving = true;
        } else if (this.cursors.right.isDown || this.input.keyboard.checkDown(this.input.keyboard.addKey('D'))) {
            this.player.setVelocityX(speed);
            this.isMoving = true;
        }
        
        if (this.cursors.up.isDown || this.input.keyboard.checkDown(this.input.keyboard.addKey('W'))) {
            this.player.setVelocityY(-speed);
            this.isMoving = true;
        } else if (this.cursors.down.isDown || this.input.keyboard.checkDown(this.input.keyboard.addKey('S'))) {
            this.player.setVelocityY(speed);
            this.isMoving = true;
        }
        
        // 更新HUD位置
        if (this.playerHpBar) {
            this.updateHpBar();
            this.updatePlayerInfo();
        }
        
        // 空格键攻击
        if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
            this.attackNearbyMonster();
        }
    }

    moveToPosition(x, y) {
        const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, x, y);
        const duration = distance / 100 * 1000; // 100像素/秒
        
        this.tweens.add({
            targets: this.player,
            x: x,
            y: y,
            duration: duration,
            ease: 'Power2'
        });
        
        if (window.addLog) {
            window.addLog(`移动至位置 (${Math.round(x)}, ${Math.round(y)})`, 'info');
        }
    }

    movePlayer(direction) {
        const distance = 50;
        let targetX = this.player.x;
        let targetY = this.player.y;
        
        switch(direction) {
            case 'up':
                targetY -= distance;
                break;
            case 'down':
                targetY += distance;
                break;
            case 'left':
                targetX -= distance;
                break;
            case 'right':
                targetX += distance;
                break;
        }
        
        // 确保不超出边界
        targetX = Phaser.Math.Clamp(targetX, 32, 1280 - 32);
        targetY = Phaser.Math.Clamp(targetY, 32, 960 - 32);
        
        this.moveToPosition(targetX, targetY);
    }

    onPlayerMonsterCollision(player, monster) {
        // 玩家碰到怪物时减速
        player.setVelocity(0);
        
        if (window.addLog) {
            window.addLog(`碰到了${monster.monsterType}！`, 'combat');
        }
    }

    attackNearbyMonster() {
        let closestMonster = null;
        let closestDistance = 100; // 攻击范围
        
        this.monsters.forEach(monster => {
            if (monster.active && monster.hp > 0) {
                const distance = Phaser.Math.Distance.Between(
                    this.player.x, this.player.y,
                    monster.x, monster.y
                );
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestMonster = monster;
                }
            }
        });
        
        if (closestMonster) {
            // 触发攻击
            if (window.attack) {
                window.attack();
            }
            
            // 显示攻击效果
            this.showAttackEffect(closestMonster);
            
            // 怪物受伤反应
            closestMonster.setTint(0xff0000);
            this.time.delayedCall(200, () => {
                closestMonster.clearTint();
            });
            
            // 更新怪物血量显示
            this.updateMonsterHpBar(closestMonster);
        } else {
            if (window.addLog) {
                window.addLog('附近没有可攻击的怪物！', 'info');
            }
        }
    }

    showAttackEffect(target) {
        // 创建攻击特效
        const effect = this.add.graphics();
        effect.lineStyle(4, 0xff0000, 1);
        effect.strokeCircle(target.x, target.y, 20);
        
        // 渐隐效果
        this.tweens.add({
            targets: effect,
            alpha: 0,
            scale: 1.5,
            duration: 300,
            onComplete: () => {
                effect.destroy();
            }
        });
    }

    updateMonsterHpBar(monster) {
        // 移除旧的HP条
        if (monster.hpBar) {
            monster.hpBar.destroy();
        }
        
        // 创建新的HP条
        const hpBar = this.add.graphics();
        const hpPercent = monster.hp / monster.maxHp;
        
        // HP条背景
        hpBar.fillStyle(0x000000, 0.5);
        hpBar.fillRect(monster.x - 25, monster.y - 40, 50, 6);
        
        // 当前血量
        hpBar.fillStyle(0xff0000, 1);
        hpBar.fillRect(monster.x - 25, monster.y - 40, 50 * hpPercent, 6);
        
        // HP条边框
        hpBar.lineStyle(1, 0x000000, 1);
        hpBar.strokeRect(monster.x - 25, monster.y - 40, 50, 6);
        
        monster.hpBar = hpBar;
        
        // 3秒后移除HP条
        this.time.delayedCall(3000, () => {
            if (monster.hpBar) {
                monster.hpBar.destroy();
                monster.hpBar = null;
            }
        });
    }
}

// 游戏配置
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: GameScene,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

// 启动游戏
window.addEventListener('load', () => {
    console.log('开始初始化Phaser游戏...');
    console.log('Phaser版本:', Phaser.VERSION);
    console.log('游戏容器:', document.getElementById('game'));
    
    try {
        const game = new Phaser.Game(config);
        console.log('Phaser游戏实例创建成功');
        
        // 游戏加载完成后的回调
        game.events.on('ready', () => {
            console.log('传奇页游加载完成！');
            if (window.addLog) {
                window.addLog('游戏世界已加载，开始冒险吧！', 'info');
            }
        });
        
        // 错误处理
        game.events.on('error', (error) => {
            console.error('Phaser游戏错误:', error);
            if (window.addLog) {
                window.addLog('游戏加载出错: ' + error.message, 'combat');
            }
        });
        
    } catch (error) {
        console.error('游戏初始化失败:', error);
        console.error('错误堆栈:', error.stack);
        if (window.addLog) {
            window.addLog('游戏初始化失败，请检查控制台', 'combat');
        }
    }
});