<template>
  <a
    class="anchor"
    href="https://richardmattsson.github.io/cv-code/"
    target="_blank"
    rel="noopener noreferrer"
    ><img
      class="cvimg"
      src="/images/cv-image-dark.webp"
      alt="En bild på mitt CV"
  /></a>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgb(0, 30, 66);
$light-color: #515e7b;
$yellow-color: #ffd43b;

.anchor {
  display: flex;
  justify-content: center;
}
.cvimg {
  width: 100%;
  border-radius: 10px;
  border: $dark-color 2px solid;
}
button {
  background-color: $yellow-color;
  border-radius: 10px;
  border: black 1px solid;
  width: 150px;
  padding: 8px 10px;
  box-shadow: 0 4px;
  margin-top: 20px;
  margin-bottom: 20px;
}
button:hover {
  background-color: #c2a025;
  cursor: pointer;
}
@media only screen and (max-width: 479px) {
  .cvimg {
    width: 80%;
    min-width: 200px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: $dark-color 2px solid;
  }

  button {
    background-color: $yellow-color;
    border-radius: 10px;
    border: black 1px solid;
    width: 100px;
    padding: 8px;
    box-shadow: 0 4px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 480px) {
  button {
    background-color: $yellow-color;
    border-radius: 10px;
    border: black 1px solid;
    width: 150px;
    padding: 10px;
    box-shadow: 0 4px;
    margin-top: 20px;
  }
}
@media only screen and (min-width: 768px) {
  button {
    background-color: $yellow-color;
    border-radius: 10px;
    border: black 1px solid;
    width: 250px;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px;
    box-shadow: 0 4px;
    margin-top: 20px;
  }
  .cvimg {
    max-width: 800px;
    height: auto;
    margin-top: 40px;
  }
}
@media only screen and (min-width: 1279px) {
  .cvimg {
    max-width: 850px;
    height: auto;
    margin-top: 40px;
  }
}
</style>
