<template>
  <footer>
    <a href="http://www.linkedin.com/in/richardmattsson" target="_blank"
      ><img
        class="linkedin-logo"
        src="/images/LI-Logo.png"
        alt=""
        srcset=""
        id="linkedin-logo"
    /></a>

    <a
      id="div-github-logo"
      href="https://github.com/richardMattsson"
      target="_blank"
      ><img
        src="/images/GitHub_Logo_White.png"
        alt=""
        srcset=""
        id="github-logo-text" />
      <img
        src="/images/github-mark-white.png"
        alt=""
        srcset=""
        id="github-logo"
    /></a>
  </footer>
</template>
<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgb(0, 30, 66);
$light-color: #515e7b;
#div-github-logo {
  display: flex;
  align-items: center;
}
#linkedin-logo {
  width: 100px;
}
#github-logo {
  width: 40px;
}
#github-logo-text {
  width: 70px;
}

footer {
  background-color: $dark-color;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  bottom: 0;
  height: 100px;
  // flex: 1 1 auto;
  // margin-top: 20px;
}

@media (max-width: 400px) {
  #linkedin-logo {
    width: 70px;
  }
  #github-logo {
    width: 30px;
  }
  #github-logo-text {
    width: 55px;
  }
}
@media (max-width: 800px) {
  #linkedin-logo {
    width: 75px;
  }
  #github-logo {
    width: 35px;
  }
  #github-logo-text {
    width: 60px;
  }
}
</style>
