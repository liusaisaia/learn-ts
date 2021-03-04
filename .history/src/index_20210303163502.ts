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

  constructor() {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
  }

  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
  }
}
