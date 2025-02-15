<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/cv">CV</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 1;
  top: 10px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  /* border: 1px solid black; */
}

li {
  float: left;
  background-color: rgba(55, 64, 71, 0.85);
  width: 100%;
  height: 60px;
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 5px solid #333;
}
li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover {
  background-color: rgba(67, 77, 85, 0.85);
  cursor: pointer;
}
</style>
