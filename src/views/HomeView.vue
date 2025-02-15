<template>
  <article id="container">
    <figure>
      <img class="profileImg" src="../../public/images/profilbild.jpg" alt="" />
    </figure>
    <h1>Hej!</h1>
    <h2>
      Välkommen till min sida där jag lägger upp mina projekt inom
      webbutveckling.
    </h2>
  </article>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1000px;
  margin-top: 50px;
  margin-bottom: 50px;

  align-items: center;
  /* border: 1px solid red; */
  max-width: 1000px;
}

img {
  width: 150px;
  min-width: 100px;
  border-radius: 80px;
  margin-top: 10px;
}
h1,
h2 {
  font-weight: 500;
  margin-left: 80px;
  margin-right: 80px;
}
@media (max-width: 400px) {
  h1,
  h2 {
    font-weight: 500;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 1.2rem;
    text-align: center;
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    line-height: 30px;
  }
}
</style>
