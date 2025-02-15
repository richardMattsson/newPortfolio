<template>
  <div id="container">
    <img
      src="../../public/images/Richard-Mattsson-CV.jpg"
      alt="En bild på mitt CV"
    />

    <h2>
      <a
        target="_blank"
        href="/PortfolioRichard/images/Richard-Mattsson-CV-3.pdf"
        >Länk till CV som pdf</a
      >
    </h2>
  </div>
</template>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  margin-top: 30px;
  font-weight: 500;
  font-size: 1.3rem;
}
a {
  color: #dfd9d9;
}
img {
  width: 60%;
  height: 70%;
  margin-top: 80px;
  border-radius: 10px;
}
@media (max-width: 400px) {
  h2 {
    font-size: 1.1rem;
    margin-top: 30px;
  }
  img {
    width: 80%;
    min-width: 300px;
    margin-top: 40px;
  }
}
@media (max-width: 800px) {
  h2 {
    margin-top: 30px;
    font-size: 1.2rem;
  }

  img {
    width: 80%;
    height: auto;
    margin-top: 40px;
  }
}
@media (min-width: 801px) {
  h2 {
    margin-top: 30px;
    font-size: 1.2rem;
  }

  img {
    max-width: 850px;
    height: auto;
    margin-top: 40px;
  }
}
</style>
