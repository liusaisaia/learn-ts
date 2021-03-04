import './style/index.less';

// 定义食物
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;
  constructor() {
    this.element = document.querySelector('.food')!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }
}
