<template>
  <div id="container-projects">
    <div v-for="card in cards" class="project-card">
      <a class="projectLinks" :href="card.projectLink" target="_blank"
        ><img class="projectImg" :src="card.imageSrc" :alt="card.altText"
      /></a>
      <p class="project-description">{{ card.description }}</p>
      <a
        class="projectLinks project-description"
        :href="card.projectLink"
        target="_blank"
        >Länk</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          projectLink: 'https://richardmattsson.github.io/Todo-List/',
          imageSrc: '../../PortfolioRichard/public/images/todolistvue.png',
          altText: 'image of todolist-project',
          description: 'En Att-göra-lista gjord med Vue.js',
        },
        {
          projectLink: 'https://richardmattsson.github.io/Erica/',
          imageSrc: '../../PortfolioRichard/public/images/erica.png',
          altText: 'image of artist-project',
          description:
            'Min lab under CSS-kursen där jag gjorde en hemsida åt en lokal konstnär i Göteborg.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/SoccerStats/',
          imageSrc: '../../PortfolioRichard/public/images/soccerStat.png',
          altText: 'image of soccer-table-project',
          description:
            'Under kursen Native Javascript gjorde jag en hemsida med tabeller från de stora fotbollsligorna i Europa.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/blackjack2/',
          imageSrc: '../../PortfolioRichard/public/images/blackjack.png',
          altText: 'image of blackjack-project',
          description: 'Ett blackjack-spel gjord med Native JavaScript.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/weatherApp/',
          imageSrc: '../../PortfolioRichard/public/images/weather.png',
          altText: 'image of a weather-app',
          description: 'En väderapp gjord med Vue.js',
        },
      ],
    };
  },
};
</script>
<style scoped>
#container-projects {
  display: flex;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
  /* border: 1px solid blue; */
}
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  background-color: #222121;
  border-radius: 10px;
  margin: 20px;
  height: 450px;
  max-width: 350px;
}
.projectLinks {
  color: #d8d0d0;
  /* text-decoration: none; */
  margin-top: 10px;
  max-width: 90%;
}
.projectImg {
  max-width: 100%;
  border-radius: 10px;
  /* margin: 20px; */
}
.project-description {
  color: #d8d0d0;
  max-width: 300px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 25px;
}
@media (max-width: 400px) {
  #container-projects {
    margin-top: 40px;
  }
  .project-card {
    width: 250px;
    height: 400px;
    min-width: 200px;
  }
}
@media (min-width: 800px) {
  #container-projects {
    width: 100%;
    margin-top: 60px;
  }
  .project-card {
    width: 300px;
  }
}
@media (min-width: 1400px) {
  #container-projects {
    width: 60%;
  }
}
</style>
