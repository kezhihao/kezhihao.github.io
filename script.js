class TerminalEffect { // 定义TerminalEffect类
    constructor() { // 构造函数
        this.terminal = document.getElementById('terminalContent'); // 获取终端内容的DOM元素
        this.commands = [ // 定义命令数组
            'INITIALIZING SYSTEM...', // 初始化系统
            'LOADING BIRTHDAY MODULE...', // 加载生日模块
            'CONNECTING TO HAPPINESS SERVER...', // 连接到幸福服务器
            'GENERATING BIRTHDAY WISHES...', // 生成生日祝福
            '[SUCCESS] CONNECTION ESTABLISHED', // 连接成功
            '',
            'class BirthdayWish {', // 定义生日祝福类
            '    constructor() {', // 构造函数
            '        this.birthday = new Date();', // 初始化生日为当前日期
            '        this.recipient = "婷玉";', // 设置接收者为婷玉
            '        this.wishes = [];', // 初始化祝福数组
            '    }',
            '',
            '    generateWishes() {', // 生成祝福的方法
            '        this.wishes.push("玉酱生日快乐！");', // 添加祝福
            '        this.wishes.push("玉玉永远开心！");', // 添加祝福
            '        this.wishes.push("婷玉梦想成真！");', // 添加祝福
            '        this.wishes.push("前程似锦！");', // 添加祝福
            '    }',
            '}',
            '',
            '[EXECUTING] sending wishes...', // 执行发送祝福
            '[SUCCESS] wishes delivered ❤️', // 祝福发送成功
            '',
            '> Happy Birthday, Tingyu! 🎂',
            this.calculateDaysSince() // 计算天数
        ];
        this.currentLine = 0; // 当前行索引
        this.typeWriter(); // 开始打字效果
    }

    calculateDaysSince() {
        
        const startDate = new Date('2022-07-27T08:20:00');
        const now = new Date();
        const diffTime = Math.abs(now - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
        const diffMinutes = Math.floor((diffTime / (1000 * 60)) % 60);
        const diffSeconds = Math.floor((diffTime / 1000) % 60);
        return `和婷玉相遇 ${diffDays} 天 ${diffHours} 小时 ${diffMinutes} 分钟 ${diffSeconds} 秒`;
    }

    typeWriter() { // 打字效果的方法
        if (this.currentLine < this.commands.length) { // 如果还有命令未显示
            const line = document.createElement('div'); // 创建新的div元素
            line.textContent = this.commands[this.currentLine]; // 设置div内容为当前命令
            line.style.color = this.getLineColor(this.commands[this.currentLine]); // 设置文本颜色
            this.terminal.appendChild(line); // 将div添加到终端
            this.currentLine++; // 移动到下一行
            this.terminal.scrollTop = this.terminal.scrollHeight; // 滚动终端到最新内容
            setTimeout(() => this.typeWriter(), 100); // 100毫秒后继续打字
        }
    }

    getLineColor(line) { // 获取行颜色的方法
        if (line.includes('[SUCCESS]')) return '#00ff00'; // 成功信息为绿色
        if (line.includes('[EXECUTING]')) return '#ffff00'; // 执行信息为黄色
        if (line.includes('class')) return '#00ffff'; // 类定义为青色
        if (line.includes('constructor')) return '#ff00ff'; // 构造函数为紫色
        return '#0f0'; // 默认绿色
    }
}

class MatrixRain { // 定义MatrixRain类
    constructor() { // 构造函数
        this.canvas = document.createElement('canvas'); // 创建canvas元素
        document.body.appendChild(this.canvas); // 将canvas添加到文档主体
        this.ctx = this.canvas.getContext('2d'); // 获取canvas的2D上下文
        this.characters = '婷玉玉酱玉玉生日快乐HAPPY BIRTHDAY!❤️🎂✨'; // 定义字符集
        this.fontSize = 16; // 字体大小
        this.columns = 0; // 列数
        this.drops = []; // 存储每列的下落位置
        
        this.resize(); // 调整canvas大小
        window.addEventListener('resize', () => this.resize()); // 监听窗口大小变化
        this.animate(); // 开始动画
    }

    resize() { // 调整canvas大小的方法
        this.canvas.width = window.innerWidth; // 设置canvas宽度为窗口宽度
        this.canvas.height = window.innerHeight; // 设置canvas高度为窗口高度
        this.columns = Math.floor(this.canvas.width / this.fontSize); // 计算列数
        this.drops = Array(this.columns).fill(1); // 初始化每列的下落位置
    }

    animate() { // 动画方法
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // 设置背景颜色
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); // 填充背景

        this.ctx.fillStyle = '#0f0'; // 设置字符颜色为绿色
        this.ctx.font = `${this.fontSize}px monospace`; // 设置字体样式

        for (let i = 0; i < this.drops.length; i++) { // 遍历每列
            const char = this.characters[Math.floor(Math.random() * this.characters.length)]; // 随机选择字符
            this.ctx.fillText(char, i * this.fontSize, this.drops[i] * this.fontSize); // 绘制字符
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) { // 如果字符超出canvas高度
                this.drops[i] = 0; // 重置下落位置
            }
            this.drops[i]++; // 增加下落位置
        }
        requestAnimationFrame(() => this.animate()); // 请求下一帧动画
    }
}

class Firework { // 定义Firework类
    constructor() { // 构造函数
        this.canvas = document.createElement('canvas'); // 创建canvas元素
        this.canvas.style.cssText = 'position:fixed;top:0;left:0;z-index:0;pointer-events:none;'; // 设置canvas样式
        document.body.appendChild(this.canvas); // 将canvas添加到文档主体
        this.ctx = this.canvas.getContext('2d'); // 获取canvas的2D上下文
        this.resize(); // 调整canvas大小
        this.fireworks = []; // 存储烟花
        this.particles = []; // 存储粒子
        this.text = "祝婷玉玉酱玉玉生日快乐！"; // 定义烟花文本
        
        window.addEventListener('resize', () => this.resize()); // 监听窗口大小变化
        this.animate(); // 开始动画
        this.autoLaunch(); // 自动发射烟花
    }

    resize() { // 调整canvas大小的方法
        this.canvas.width = window.innerWidth; // 设置canvas宽度为窗口宽度
        this.canvas.height = window.innerHeight; // 设置canvas高度为窗口高度
    }

    launchFirework() { // 发射烟花的方法
        const startX = Math.random() * this.canvas.width; // 随机起始x坐标
        const endX = Math.random() * this.canvas.width; // 随机目标x坐标
        const endY = Math.random() * (this.canvas.height * 0.5); // 随机目标y坐标
        
        this.fireworks.push({ // 添加新的烟花对象
            x: startX, // 起始x坐标
            y: this.canvas.height, // 起始y坐标
            targetX: endX, // 目标x坐标
            targetY: endY, // 目标y坐标
            speed: 3, // 速度
            char: this.text[Math.floor(Math.random() * this.text.length)], // 随机选择字符
            color: `hsl(${Math.random() * 360}, 100%, 50%)`, // 随机颜色
            angle: Math.atan2(endY - this.canvas.height, endX - startX), // 计算角度
            exploded: false // 是否已爆炸
        });
    }

    createExplosion(x, y) { // 创建爆炸效果的方法
        const particleCount = 50; // 粒子数量
        const angleStep = (Math.PI * 2) / particleCount; // 计算角度步长

        for (let i = 0; i < particleCount; i++) { // 创建粒子
            this.particles.push({
                x: x, // 粒子x坐标
                y: y, // 粒子y坐标
                char: this.text[i % this.text.length], // 随机选择字符
                color: `hsl(${Math.random() * 360}, 100%, 50%)`, // 随机颜色
                speed: Math.random() * 2 + 1, // 随机速度
                angle: i * angleStep, // 计算角度
                alpha: 1, // 初始透明度
                life: 100 // 初始生命值
            });
        }
    }

    animate() { // 动画方法
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // 清空canvas

        this.fireworks.forEach((fw, index) => { // 遍历每个烟花
            if (!fw.exploded) { // 如果烟花未爆炸
                fw.x += Math.cos(fw.angle) * fw.speed; // 更新烟花x坐标
                fw.y += Math.sin(fw.angle) * fw.speed; // 更新烟花y坐标

                this.ctx.fillStyle = fw.color; // 设置烟花颜色
                this.ctx.font = '20px Arial'; // 设置字体样式
                this.ctx.fillText(fw.char, fw.x, fw.y); // 绘制烟花字符

                const distance = Math.hypot(fw.targetX - fw.x, fw.targetY - fw.y); // 计算烟花与目标的距离
                if (distance < 5) { // 如果距离小于5
                    this.createExplosion(fw.x, fw.y); // 创建爆炸效果
                    this.fireworks.splice(index, 1); // 从烟花数组中移除该烟花
                }
            }
        });

        this.particles.forEach((p, index) => { // 遍历每个粒子
            p.x += Math.cos(p.angle) * p.speed; // 更新粒子x坐标
            p.y += Math.sin(p.angle) * p.speed; // 更新粒子y坐标
            p.alpha *= 0.98; // 逐渐减小粒子透明度
            p.life--; // 减少粒子生命值

            this.ctx.fillStyle = `rgba(255, 50, 50, ${p.alpha})`; // 设置粒子颜色
            this.ctx.font = '12px Arial'; // 设置字体样式
            this.ctx.fillText(p.char, p.x, p.y); // 绘制粒子字符

            if (p.life <= 0) { // 如果粒子生命值小于等于0
                this.particles.splice(index, 1); // 从粒子数组中移除该粒子
            }
        });

        requestAnimationFrame(() => this.animate()); // 请求下一帧动画
    }

    autoLaunch() { // 自动发射烟花的方法
        if (Math.random() < 0.03) { // 以3%的概率发射烟花
            this.launchFirework(); // 发射烟花
        }
        setTimeout(() => this.autoLaunch(), 100); // 每100毫秒调用一次autoLaunch
    }
}

// 初始化
window.addEventListener('DOMContentLoaded', () => { // 当DOM内容加载完成时
    new MatrixRain(); // 创建MatrixRain实例
    new TerminalEffect(); // 创建TerminalEffect实例
    new Firework(); // 创建Firework实例
});