<template>
  <div class="container">
    <div class="forms-container">
      <div class="singin-singup">
        <!-- 登录 -->
        <h1>登录</h1>
        <!-- 注册 -->
        <h1>注册</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister',
  components: {},
  setup () {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;

  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .singin-singup {
      position: absolute;
      top: 50%;
      transform:  translate(-50%, -50%);
      left: 75%;
      width: 44%;
      transition: 1s 0.7s ease-out;
      display: grid;
      grid-template-columns: 1fr;
      z-index: 5;
    }
  }
}
</style>
