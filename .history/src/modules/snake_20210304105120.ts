class Snake{
  // 表示蛇的元素
  head:HTMLElement;
  // 蛇身
  bodies: HTMLCollection;
  // 蛇容器
  element:HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')! as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇头坐标
  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头坐标
  set X(value: number) {
    if (this.X === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("撞墙了")
    }
    this.head.style.left = value + 'px';
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("撞墙了")
    }
    this.head.style.top = value + 'px';
  }

  // 增加身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend','<div></div>');
  }
}


export default Snake;
