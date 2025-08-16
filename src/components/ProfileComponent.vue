<template>
  <article id="profile-article">
    <p class="green-text">Hej, jag heter</p>
    <h1>Richard Mattsson.</h1>
    <h2>Jag bygger saker på webben.</h2>
    <p id="description-info">
      Jag studerar JavaScript-utveckling på IT-högskolan. Med denna portfolio
      vill jag experimentera och utvecklas inom webbutveckling samt visa några
      av mina pågående projekt. Denna portfolio är t ex byggd med verktyg som
      HTML, CSS, SASS, JavaScript, Vue.js och Vite.
    </p>
    <!-- <figure>
    <img src="../../public/images/ProfilbildDanmark.JPG" alt="" />
  </figure> -->
  </article>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgba(0, 30, 66, 0.85);
$light-color: #515e7b;

$primary-dark: #0a192f;
$text-light: #c3c7d6;

$text-green: #54c4af;

#profile-article {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 15px;
}
h2 {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 20px;
  color: #ccd6f6a4;
  width: 80%;
}
#description-info {
  font-size: 1rem;
  color: #ccd6f6a4;
  width: 80%;
  line-height: 25px;
}

@media only screen and (min-width: 480px) {
}
@media only screen and (min-width: 768px) {
  h1 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 15px;
  }
  h2 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 30px;
    color: #ccd6f6a4;
  }
  #description-info {
    color: #ccd6f6a4;
    width: 500px;
  }
}
@media only screen and (min-width: 1279px) {
}
</style>
