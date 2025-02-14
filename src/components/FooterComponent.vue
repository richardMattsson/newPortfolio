<template>
  <footer>
    <a href="http://www.linkedin.com/in/richardmattsson" target="_blank"
      ><img
        class="linkedin-logo"
        src="../../assets/LI-Logo.png"
        alt=""
        srcset=""
        id="linkedin-logo"
    /></a>

    <a
      id="div-github-logo"
      href="https://github.com/richardMattsson"
      target="_blank"
      ><img
        src="../../assets/GitHub_Logo_White.png"
        alt=""
        srcset=""
        id="github-logo-text" />
      <img
        src="../../assets/github-mark-white.png"
        alt=""
        srcset=""
        id="github-logo"
    /></a>
  </footer>
</template>
<style scoped>
img {
  width: 100px;
}
#linkedin-logo {
  width: 125px;
}
#div-github-logo {
  display: flex;
  align-items: center;
}
#github-logo {
  width: 60px;
}
#github-logo-text {
  width: 100px;
}

footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  bottom: 10px;
  margin-top: 40px;
}
</style>
