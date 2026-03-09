<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div id="app-container">
    <nav id="app-nav">
      <RouterLink to="/" id="router-logo"
        ><p id="app-logo" class="green-text">R</p></RouterLink
      >
      <NavbarComponent id="app-navbar" />
    </nav>

    <main id="app-main">
      <RouterView />
    </main>
    <footer id="app-footer">
      <FooterComponent />
    </footer>
  </div>
</template>

<style lang="scss">
$primary-dark: #0a192f;
$text-light: #c3c7d6;
$text-green: #54c4af;

#app-container {
  border: 1px solid rgb(104, 59, 228);
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app-nav {
  height: 100px;
  display: flex;
  justify-content: space-around;
}

#router-logo {
  text-decoration: none;
  height: 50px;
  width: 25px;
}
#app-logo {
  margin-top: 20px;
  font-size: 1.5rem;
  border: $text-green 1px solid;
  border-radius: 70%;
  height: 30px;
  width: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app-main {
  flex-grow: 1;
  // border: 1px solid red;
}
body {
  background-color: $primary-dark;
  color: $text-light;
}

.green-text {
  color: $text-green;
  font-family: monospace;
  font-weight: bold;
}

#app-footer {
  position: relative;
  width: 100%;
  bottom: 0;
}

@media only screen and (max-width: 400px) {
}

@media only screen and (min-width: 480px) {
}
@media only screen and (min-width: 768px) {
  #app-nav {
    height: 100px;
    display: flex;
    justify-content: space-between;
  }
  #app-logo {
    grid-area: logo;
    margin-left: 40px;
    margin-top: 20px;
    font-size: 2rem;
    border: $text-green 1px solid;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #app-main {
    margin-bottom: 10px;
  }
}
@media only screen and (min-width: 1279px) {
}
</style>
