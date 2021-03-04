import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  // 创建一个属性存储方向
  direction: string = '';

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // 初始化游戏
  init() {
    // 绑定键盘事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
  }

  // 键盘按下响应式件
  keydownHandler(event:KeyboardEvent) {
    this.direction = event.key;
  }

  // 移动函数
  run (){
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
        case 'UP':
          break;
      case 'ArrowDown':
        case 'Down':
          break;
      case 'ArrowLeft':
        case 'Left':
          break;
      case 'ArrowRight':
        case 'Right':
          break;
    }
  }
}

export default GameControl;
