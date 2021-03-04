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

    this.run();
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
          Y -= 10;
          break;
      case 'ArrowDown':
        case 'Down':
          Y += 10;
          break;
      case 'ArrowLeft':
        case 'Left':
          X -= 10;
          break;
      case 'ArrowRight':
        case 'Right':
          X += 10;
          break;
    }

    this.snake.X = X;
    this.snake.Y = Y;
  }
}

export default GameControl;
