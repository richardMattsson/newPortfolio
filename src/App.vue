<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
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
  // border: 1px solid red;

  width: 100%;
  // display: grid;
  // grid: 100px 80% 10% / 10% 90%;
  // grid-template-areas:
  //   'logo navbar'
  //   'main main'
  //   'footer footer';
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
  // grid-area: logo;

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

#app-navbar {
  // display: flex;
  // justify-content: center;
  // grid-area: navbar;
  // margin-right: 20px;
  // margin-top: 15px;
}
#app-main {
  // grid-area: main;
  // margin-bottom: 20px;
  flex-grow: 1;
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
  // margin-top: auto;
  /* border: 1px solid red;*/
  // grid-area: footer;
  // overflow: hidden;
  position: relative;
  width: 100%;
  bottom: 0;
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
