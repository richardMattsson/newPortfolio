<script>
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  components: { NavbarComponent, FooterComponent },
};
</script>

<template>
  <NavbarComponent />

  <main>
    <RouterView />
  </main>

  <FooterComponent />
</template>
<style scoped>
main {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
