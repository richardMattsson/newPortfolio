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
  display: flex;
  justify-content: center;
}
</style>
