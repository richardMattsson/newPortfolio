<template>
  <div id="container-projects">
    <div v-for="card in cards" class="project-card">
      <a class="projectLinks" :href="card.projectLink"
        ><img class="projectImg" :src="card.imageSrc" :alt="card.altText"
      /></a>
      <p class="project-description">{{ card.description }}</p>
      <button>
        <a class="buttonLinks" :href="card.projectLink">Visa</a>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          projectLink: 'https://richardmattsson.github.io/library/',
          imageSrc: '/images/harrypotterbild.png',
          altText: 'image of library app',
          description:
            'Ett bibliotek där du kan skapa konto och spara dina favoritböcker och ge betyg. Byggt med React.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/hesafredrik/',
          imageSrc: '/images/hesafredrik.png',
          altText: 'image of app about crisis preparedness',
          description:
            'Ett gruppprojekt inom Vue.js och Vite. En app med förberedelser inför en eventuell kris.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/police-events/',
          imageSrc: '/images/polisen-logo.jpg',
          altText: 'logo for swedish police',
          description:
            'Ett Vue.js projekt där det går att hämta information från polisens databas.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/blackjack2/',
          imageSrc: '/images/blackjack.png',
          altText: 'image of blackjack-project',
          description: 'Ett blackjack-spel gjord med Native JavaScript.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/SoccerStats/',
          imageSrc: '/images/soccerStat.png',
          altText: 'image of soccer-table-project',
          description:
            'Under kursen Native Javascript gjorde jag en hemsida med tabeller från de stora fotbollsligorna i Europa.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/weatherApp/',
          imageSrc: '/images/weather.png',
          altText: 'image of a weather-app',
          description: 'En väderapp gjord med Vue.js',
        },
        {
          projectLink: 'https://richardmattsson.github.io/Todo-List/',
          imageSrc: '/images/todolistvue.png',
          altText: 'image of todolist-project',
          description: 'En Att-göra-lista gjord med Vue.js',
        },
        {
          projectLink: 'https://richardmattsson.github.io/paintings-website/',
          imageSrc: '/images/erica.png',
          altText: 'image of artist-project',
          description:
            'Min lab under CSS-kursen där jag gjorde en hemsida åt en lokal konstnär i Göteborg.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgb(0, 30, 66);
$light-color: #515e7b;
$text-light: #c3c7d6;
$text-font: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
  'Lucida Sans', Arial, sans-serif;

$yellow-color: #ffd43b;

#container-projects {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  /* flex-wrap: wrap; */
  // margin-top: 80px;
  /* border: 1px solid blue; */
}
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  border: 2px solid $light-color;
  //   background-color: #222121;
  background-color: $dark-color;
  border: black 1px solid;
  box-shadow: 5px 10px black;
  border-radius: 20px;
  margin: 20px;
  padding: 10px;
  gap: 15px;
  /* height: 400px; */
  /* max-width: 205px; */
  /* width: 80%; */
}
.projectLinks {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $dark-color;
  text-decoration: none;
  margin-top: 10px;
  max-width: 90%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
.buttonLinks {
  text-decoration: none;
  font-family: $text-font;
  color: $dark-color;
}
button {
  background-color: $yellow-color;
  border-radius: 10px;
  border: black 1px solid;
  width: 100px;
  padding: 5px;
  box-shadow: 0 4px;
  margin-bottom: 15px;
}
button:hover {
  background-color: #c2a025;
  cursor: pointer;
}
.projectImg {
  max-width: 80%;
  border-radius: 10px;
  margin-top: 10px;
  /* margin: 20px; */
}
.project-description {
  font-family: $text-font;
  color: $text-light;
  max-width: 300px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 25px;
}
// @media (max-width: 400px) {
//   #container-projects {
//     margin-top: 40px;
//   }
//   .project-card {
//     width: 250px;
//     height: 450px;
//     min-width: 200px;
//   }
// }
// @media (min-width: 800px) {
//   #container-projects {
//     width: 100%;

//   }
//   .project-card {
//     width: 300px;
//   }
// }
// @media (min-width: 1400px) {
//   #container-projects {
//     width: 60%;
//   }
// }
@media only screen and (min-width: 480px) {
  .project-card {
    min-height: 400px;
    max-width: 400px;
  }
}
@media only screen and (min-width: 768px) {
  .project-card {
  }
  #container-projects {
    width: 70%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
}
@media only screen and (min-width: 1279px) {
}
</style>
