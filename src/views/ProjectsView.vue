<script setup>
import ProjectSectionsComponent from "../components/ProjectSectionsComponent.vue";
</script>

<template>
  <article id="container-projectsView">
    <ProjectSectionsComponent />
  </article>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgb(0, 30, 66);
$light-color: #515e7b;
$yellow-color: #ffd43b;

#container-projectsView {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-content: center;
  gap: 32px;
  width: min(1280px, calc(100% - 40px));
  margin: 0 auto;
  padding: 40px 0 80px;
}

@media only screen and (min-width: 768px) {
  #container-projectsView {
    width: min(1280px, calc(100% - 80px));
    gap: 40px;
  }
}

@media only screen and (min-width: 1280px) {
  #container-projectsView {
    grid-template-columns: repeat(2, minmax(0, 600px));
    align-items: stretch;
  }
}
</style>
