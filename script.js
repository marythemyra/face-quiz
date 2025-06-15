class PersonQuiz {
    constructor() {
        // 圖片資料庫
        this.images = [
    { filename: '小火龍.jpg', name: '小火龍' },
    { filename: '宋慧喬.jpg', name: '宋慧喬' },
    { filename: '孫燕姿.jpg', name: '孫燕姿' },
    { filename: 'Angelina Jolie.jpg', name: 'Angelina Jolie' },
    { filename: 'BTS.jpg', name: 'BTS' },
    { filename: 'C朗拿度.jpg', name: 'C朗拿度' },
    { filename: 'Danie Radcliffe.jpg', name: 'Danie Radcliffe' },
    { filename: 'Donald Trump.jpg', name: 'Donald Trump' },
    { filename: 'EXO.jpg', name: 'EXO' },
    { filename: 'Elsa.jpg', name: 'Elsa' },
    { filename: 'Kobe Bryant.jpg', name: 'Kobe Bryant' },
    { filename: 'Leonardo Dicaprio.jpg', name: 'Leonardo Dicaprio' },
    { filename: 'Rain.jpg', name: 'Rain' },
    { filename: 'Snoopy.jpg', name: 'Snoopy' },
    { filename: 'Super Junior.jpg', name: 'Super Junior' },
    { filename: 'Taylor Swift.jpg', name: 'Taylor Swift' },
    { filename: 'Tom Cruise.jpg', name: 'Tom Cruise' },
    { filename: '三井壽.png', name: '三井壽' },
    { filename: '中條彩未.jpg', name: '中條彩未' },
    { filename: '佘詩曼.jpg', name: '佘詩曼' },
    { filename: '劉在石.jpeg', name: '劉在石' },
    { filename: '劉玉翠.jpg', name: '劉玉翠' },
    { filename: '吳若希.jpg', name: '吳若希' },
    { filename: '周杰倫.jpg', name: '周杰倫' },
    { filename: '奇異種子.png', name: '奇異種子' },
    { filename: '姜虎東.jpg', name: '姜虎東' },
    { filename: '孔劉.jpg', name: '孔劉' },
    { filename: '尹光.jpg', name: '尹光' },
    { filename: '崔智友.jpg', name: '崔智友' },
    { filename: '希拉里.jpg', name: '希拉里' },
    { filename: '張學友.jpg', name: '張學友' },
    { filename: '張敬軒.jpg', name: '張敬軒' },
    { filename: '悟空.jpg', name: '悟空' },
    { filename: '拿破崙.jpg', name: '拿破崙' },
    { filename: '新垣結衣.jpg', name: '新垣結衣' },
    { filename: '木村拓哉.jpg', name: '木村拓哉' },
    { filename: '李佳芯.jpg', name: '李佳芯' },
    { filename: '李小狼.jpg', name: '李小狼' },
    { filename: '李慧詩.jpg', name: '李慧詩' },
    { filename: '李英愛.jpeg', name: '李英愛' },
    { filename: '杜拉格斯.jpg', name: '杜拉格斯' },
    { filename: '林峯.jpg', name: '林峯' },
    { filename: '梁啟超.jpg', name: '梁啟超' },
    { filename: '楊怡.jpg', name: '楊怡' },
    { filename: '歐陽震華.jpg', name: '歐陽震華' },
    { filename: '汪明荃.jpg', name: '汪明荃' },
    { filename: '沈殿霞.jpg', name: '沈殿霞' },
    { filename: '流川楓.jpg', name: '流川楓' },
    { filename: '牛頓.jpg', name: '牛頓' },
    { filename: '石原聰美.jpg', name: '石原聰美' },
    { filename: '福山雅治.jpg', name: '福山雅治' },
    { filename: '秦沛.jpg', name: '秦沛' },
    { filename: '章子怡.jpg', name: '章子怡' },
    { filename: '笛子魔童.jpg', name: '笛子魔童' },
    { filename: '羅蘭.jpg', name: '羅蘭' },
    { filename: '美斯.jpg', name: '美斯' },
    { filename: '習近平.jpg', name: '習近平' },
    { filename: '苑瓊丹.jpg', name: '苑瓊丹' },
    { filename: '莫扎特.jpg', name: '莫扎特' },
    { filename: '菊梓喬.jpg', name: '菊梓喬' },
    { filename: '蘭茜.jpg', name: '蘭茜' },
    { filename: '蠟筆小新.jpg', name: '蠟筆小新' },
    { filename: '貝多芬.jpg', name: '貝多芬' },
    { filename: '邵音音.jpg', name: '邵音音' },
    { filename: '郭富城.jpg', name: '郭富城' },
    { filename: '鄭則仕.jpg', name: '鄭則仕' },
    { filename: '鄭少秋.jpg', name: '鄭少秋' },
    { filename: '金正恩.png', name: '金正恩' },
    { filename: '金秀賢.png', name: '金秀賢' },
    { filename: '鍾嘉欣.jpg', name: '鍾嘉欣' },
    { filename: '馬浚偉.jpg', name: '馬浚偉' },
    { filename: '黃偉文.jpg', name: '黃偉文' },
    { filename: '黃又南.jpg', name: '黃又南' },
    { filename: '黎明.jpeg', name: '黎明' },
    { filename: '龜仙人.jpg', name: '龜仙人' }
];

        
        // 遊戲狀態
        this.availableImages = [...this.images]; // 可用圖片列表
        this.currentImage = null;
        
        // DOM 元素
        this.homepage = document.getElementById('homepage');
        this.namePage = document.getElementById('namePage');
        this.gamePage = document.getElementById('gamePage');
        this.nameDisplay = document.getElementById('nameDisplay');
        this.gameImage = document.getElementById('gameImage');
        
        // 按鈕
        this.startBtn = document.getElementById('startBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.homeIcon = document.getElementById('homeIcon');
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.nextBtn.addEventListener('click', () => this.nextImage());
        this.homeIcon.addEventListener('click', () => this.goHome());
    }
    
    // 顯示指定頁面
    showPage(pageToShow) {
        // 隱藏所有頁面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // 顯示指定頁面
        setTimeout(() => {
            pageToShow.classList.add('active');
        }, 100);
    }
    
    // 開始遊戲
    startGame() {
        // 重置可用圖片列表
        this.availableImages = [...this.images];
        this.selectRandomImage();
    }
    
    // 隨機選擇圖片
    selectRandomImage() {
        if (this.availableImages.length === 0) {
            // 如果沒有可用圖片，回到首頁
            alert('所有圖片都已顯示完畢！');
            this.goHome();
            return;
        }
        
        // 隨機選擇一張圖片
        const randomIndex = Math.floor(Math.random() * this.availableImages.length);
        this.currentImage = this.availableImages[randomIndex];
        
        // 從可用列表中移除已選擇的圖片
        this.availableImages.splice(randomIndex, 1);
        
        // 顯示名稱
        this.showNameFirst();
    }
    
    // 先顯示名稱一秒
    showNameFirst() {
        this.nameDisplay.textContent = this.currentImage.name;
        this.showPage(this.namePage);
        
        // 一秒後顯示圖片
        setTimeout(() => {
            this.showImagePage();
        }, 1000);
    }
    
    // 顯示圖片頁面
    showImagePage() {
        this.gameImage.src = `images/${this.currentImage.filename}`;
        this.gameImage.alt = this.currentImage.name;
        this.showPage(this.gamePage);
    }
    
    // 下一張圖片
    nextImage() {
        this.selectRandomImage();
    }
    
    // 回到首頁
    goHome() {
        this.showPage(this.homepage);
        // 重置遊戲狀態
        this.availableImages = [...this.images];
        this.currentImage = null;
    }
}

// 當頁面載入完成後初始化遊戲
document.addEventListener('DOMContentLoaded', () => {
    new PersonQuiz();
});

