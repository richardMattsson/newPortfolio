<script setup>
import CVComponent from '../components/CVComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
</script>

<template>
  <!-- <NavbarComponent /> -->

  <div id="container-cv-view">
    <CVComponent />
    <!-- <img
      src="../../public/images/CV-Richard-Mattsson-2.jpg"
      alt="En bild på mitt CV"
    />
    <button>
      <a href="/PortfolioRichard/CV-Richard-Mattsson-2.pdf"
        >Länk till CV som pdf</a
      >
    </button> -->
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgb(0, 30, 66);
$light-color: #515e7b;
$yellow-color: #ffd43b;

#container-cv-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

@media only screen and (min-width: 480px) {
}
@media only screen and (min-width: 768px) {
  #container-cv-view {
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
