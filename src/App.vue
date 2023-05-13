<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
}
body {
    // background-color: rgb(209, 213, 219);
    background: linear-gradient(to top left,#ffe29f,#ffa99f,#ff719a);
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
    align-items: center;
}
#app {
  height: 100vh;
  width: 100%;
}
</style>
