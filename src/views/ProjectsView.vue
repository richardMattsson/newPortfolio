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

h1 {
  text-align: center;
}
#container-projectsView {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
