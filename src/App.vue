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
    background-color: rgb(209, 213, 219);
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
