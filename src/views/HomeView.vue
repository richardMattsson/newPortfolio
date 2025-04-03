<script setup>
import CVComponent from '../components/CVComponent.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
import ProjectsComponent from '../components/ProjectsComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<template>
  <article id="container">
    <!-- <p id="logo" class="green-text">R</p> -->

    <!-- <NavbarComponent id="navbar" /> -->

    <ProfileComponent id="profileText" />
    <!-- <ProjectsComponent /> -->
    <!-- <CVComponent /> -->
    <!-- <FooterComponent id="footer" /> -->
  </article>
</template>

<style scoped>
/* #logo {
  grid-area: logo;
  margin-left: 20px;
  margin-top: 20px;
}
#navbar {
  grid-area: navbar;
  margin-left: 20%;
} */
#profileText {
  grid-area: profileText;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  /* border: 1px solid red; */
}
body {
  /* min-height: 100vh;
  display: flex;
  flex-direction: column; */
}
#container {
  /* border: 1px solid red; */
  /* width: 100%;
  display: grid;
  grid: 10% 70% 20% / 10% 90%;
  grid-template-areas:
    'logo navbar'
    'profileText profileText'
    'footer footer';
  height: 100vh; */
  /* flex-grow: 1; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1000px;
  margin-top: 50px;
  margin-bottom: 50px;

  align-items: center;

  max-width: 1000px; */
}
#footer {
  margin-top: auto;
  /* border: 1px solid red;*/
  /* grid-area: footer; */
}
@media only screen and (min-width: 480px) {
}
@media only screen and (min-width: 768px) {
  #profileText {
    grid-area: profileText;
    margin-left: 80px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    /* flex-grow: 1; */
    /* border: 1px solid red; */
  }
}
@media only screen and (min-width: 1279px) {
}
</style>
