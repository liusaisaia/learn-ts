import './style/index.less';

// 定义食物
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {

    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}
// const food = new Food;
// food.change();

class ScorePanel {
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 设置限制等级
  maxLevel: number;

  constructor(maxLevel: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
  }

  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
  }

  // 升级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}
