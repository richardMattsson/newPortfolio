<template>
  <nav>
    <ul>
      <li class="nav-text">
        <RouterLink to="/"><span class="green-text">01.</span> Hem</RouterLink>
      </li>
      <li class="nav-text">
        <RouterLink to="/projects"
          ><span class="green-text">02.</span> Projekt</RouterLink
        >
      </li>
      <li class="nav-text">
        <RouterLink to="/cv"><span class="green-text">03.</span> CV</RouterLink>
      </li>
      <li class="nav-text">
        <RouterLink to="/contact"
          ><span class="green-text">04.</span> Contact</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgba(0, 30, 66, 0.85);
$light-color: #515e7b;

nav {
  display: flex;
  justify-content: flex-end;
}
.nav-text {
  display: flex;
  font-size: 0.9rem;
}
ul {
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
}

li {
  // float: left;

  // background-color: $dark-color;
  // width: 100%;
  // height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  // border: 2px solid $primary-color;
}
// li:last-child {

// }

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

// li:hover {
//   background-color: rgba(81, 94, 123, 0.85);
//   cursor: pointer;
// }
@media only screen and (min-width: 480px) {
}
@media only screen and (min-width: 768px) {
  nav {
    margin-right: 40px;
  }
  .nav-text {
    display: flex;
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 1279px) {
}
</style>
