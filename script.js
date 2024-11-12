class TerminalEffect {
    constructor() {
        this.terminal = document.getElementById('terminalContent');
        this.commands = [
            'INITIALIZING SYSTEM...',
            'LOADING BIRTHDAY MODULE...',
            'CONNECTING TO HAPPINESS SERVER...',
            'GENERATING BIRTHDAY WISHES...',
            '[SUCCESS] CONNECTION ESTABLISHED',
            '',
            'class BirthdayWish {',
            '    constructor() {',
            '        this.birthday = new Date();',
            '        this.recipient = "婷玉";',
            '        this.wishes = [];',
            '    }',
            '',
            '    generateWishes() {',
            '        this.wishes.push("生日快乐！");',
            '        this.wishes.push("永远开心！");',
            '        this.wishes.push("梦想成真！");',
            '        this.wishes.push("前程似锦！");',
            '    }',
            '}',
            '',
            '[EXECUTING] sending wishes...',
            '[SUCCESS] wishes delivered ❤️',
            '',
            '> Happy Birthday, Tingyu! 🎂'
        ];
        this.currentLine = 0;
        this.typeWriter();
    }

    typeWriter() {
        if (this.currentLine < this.commands.length) {
            const line = document.createElement('div');
            line.textContent = this.commands[this.currentLine];
            line.style.color = this.getLineColor(this.commands[this.currentLine]);
            this.terminal.appendChild(line);
            this.currentLine++;
            this.terminal.scrollTop = this.terminal.scrollHeight;
            setTimeout(() => this.typeWriter(), 100);
        }
    }

    getLineColor(line) {
        if (line.includes('[SUCCESS]')) return '#00ff00';
        if (line.includes('[EXECUTING]')) return '#ffff00';
        if (line.includes('class')) return '#00ffff';
        if (line.includes('constructor')) return '#ff00ff';
        return '#0f0';
    }
}

class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.characters = '婷玉生日快乐HAPPY BIRTHDAY!❤️🎂✨';
        this.fontSize = window.innerWidth <= 768 ? 12 : 16;
        this.columns = 0;
        this.drops = [];
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.fontSize = window.innerWidth <= 768 ? 12 : 16;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#0f0';
        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.drops.length; i++) {
            const char = this.characters[Math.floor(Math.random() * this.characters.length)];
            this.ctx.fillText(char, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        requestAnimationFrame(() => this.animate());
    }
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    new MatrixRain();
    new TerminalEffect();
});