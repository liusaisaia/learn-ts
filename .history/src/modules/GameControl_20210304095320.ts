import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
  }

  // 初始化游戏
  init() {
    // 绑定键盘事件
    document.addEventListener('keydown', )
  }

  // 键盘按下响应式件
  keydownHandler(event:KeyboardEvent) {
    console.log(event.key);

  }
}

export default GameControl;
