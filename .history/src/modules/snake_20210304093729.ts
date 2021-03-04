class Snake{
  // 表示蛇的元素
  head:HTMLElement;
  // 蛇身
  bodies: HTMLCollection;

  constructor() {
    this.head = document.querySelector('#snake > div')! as HTMLElement;
    this.bodies = document.getElementById('#snake')!.getElementsByTagName('div');
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
    this.head.style.left = value + 'px';
  }

  set Y(value: number) {
    this.head.style.top = value + 'px';
  }
}
