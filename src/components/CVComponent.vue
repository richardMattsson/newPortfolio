<template>
  <img src="/images/CV-Richard-Mattsson-2.jpg" alt="En bild på mitt CV" />

  <button>
    <a href="/CV-Richard-Mattsson-2.pdf">Hämta</a>
  </button>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgb(0, 30, 66);
$light-color: #515e7b;
$yellow-color: #ffd43b;

a {
  color: $dark-color;
  font-weight: bold;
  font-size: 0.7rem;
  text-decoration: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
img {
  width: 60%;
  min-width: 200px;
  // height: 70%;
  margin-top: 40px;
  margin-bottom: 20px;
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
}
button:hover {
  background-color: #c2a025;
  cursor: pointer;
}
@media only screen and (max-width: 479px) {
  img {
    width: 80%;
    min-width: 200px;
    // height: 70%;
    margin-top: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: $dark-color 2px solid;
  }
}

@media only screen and (min-width: 480px) {
  button {
    background-color: $yellow-color;
    border-radius: 10px;
    border: black 1px solid;
    width: 200px;
    padding: 10px;
    box-shadow: 0 4px;
    margin-top: 20px;
  }
  a {
    font-size: 1rem;
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
  img {
    max-width: 550px;
    height: auto;
    margin-top: 40px;
  }
}
@media only screen and (min-width: 1279px) {
  img {
    max-width: 850px;
    height: auto;
    margin-top: 40px;
  }
}
</style>
