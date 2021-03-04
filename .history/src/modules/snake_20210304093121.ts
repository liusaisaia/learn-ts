class Snake{
  // 表示蛇的元素
  head:HTMLElement;

  constructor() {
    this.head = document.querySelector('#snake > div')! as HTMLElement;
  }
}
