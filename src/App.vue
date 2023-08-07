<script setup></script>
<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/main.css";
#app {
  max-width: 2000px;
  max-height: 1000px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}
header,
footer {

  color: white;
  height: 10%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
main {
  width: 100%;
  height: 100%;
}
</style>
