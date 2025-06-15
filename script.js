class PersonQuiz {
    constructor() {
        // 圖片資料庫
        this.images = [
            { filename: '小火龍.jpg', name: '小火龍' },
            { filename: '宋慧喬.jpg', name: '宋慧喬' },
            { filename: '孫燕姿.jpg', name: '孫燕姿' }
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

