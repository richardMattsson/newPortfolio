<script setup>
import ProjectsComponent from '../components/ProjectsComponent.vue';
</script>

<template>
  <h1>Mina projekt</h1>
  <article id="container-projectsView">
    <ProjectsComponent />
  </article>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgb(0, 30, 66);
$light-color: #515e7b;
$yellow-color: #ffd43b;

h1 {
  text-align: center;
}
#container-projectsView {
  display: flex;

  justify-content: center;

  width: 100%;
}

@media only screen and (min-width: 480px) {
}
@media only screen and (min-width: 768px) {
  #container-projectsView {
    display: flex;
    // border: 1px solid blue;
    justify-content: center;
    width: 100%;
    // margin-left: 80px;
  }
}
@media only screen and (min-width: 1279px) {
}
</style>
