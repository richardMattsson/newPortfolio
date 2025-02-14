<template>
  <div id="container">
    <article>
      <figure>
        <img class="profileImg" src="../../assets/profilbild.jpg" alt="" />
      </figure>
      <h1>Hej!</h1>
      <h2>
        Välkommen till min sida där jag lägger upp mina projekt inom
        webbutveckling.
      </h2>
    </article>
  </div>
</template>
<style scoped>
img {
  width: 100px;
  border-radius: 60px;
}
#container,
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
}
header {
  text-align: center;
}
h1,
h2 {
  font-weight: 500;
  margin-left: 80px;
  margin-right: 80px;
}
</style>
