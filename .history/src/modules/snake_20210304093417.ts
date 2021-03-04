class Snake{
  // 表示蛇的元素
  head:HTMLElement;
  // 蛇身
  bodies: HTMLCollection;

  constructor() {
    this.head = document.querySelector('#snake > div')! as HTMLElement;
    this.bodies = document.getElementById('#snake')!.getElementsByTagName('div');
  }
}
