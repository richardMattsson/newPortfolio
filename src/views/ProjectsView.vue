<template>
  <div id="container-projects">
    <div v-for="card in cards" class="project-card">
      <a class="projectLinks" :href="card.projectLink" target="_blank"
        ><img class="projectImg" :src="card.imageSrc" :alt="card.altText"
      /></a>
      <p class="project-description">{{ card.description }}</p>
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
          imageSrc: '../../assets/todolistvue.png',
          altText: 'image of todolist-project',
          description: 'En Att-göra-lista gjord med Vue.js',
        },
        {
          projectLink: 'https://richardmattsson.github.io/Erica/',
          imageSrc: '../../assets/erica.png',
          altText: 'image of artist-project',
          description:
            'Min lab under CSS-kursen där jag gjorde en hemsida åt en lokal konstnär i Göteborg.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/SoccerStats/',
          imageSrc: '../../assets/soccerStat.png',
          altText: 'image of soccer-table-project',
          description:
            'Under kursen Native Javascript gjorde jag en hemsida med tabeller från de stora fotbollsligorna i Europa.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/blackjack2/',
          imageSrc: '../../assets/blackjack.png',
          altText: 'image of blackjack-project',
          description: 'Ett blackjack-spel gjord med Native JavaScript.',
        },
        {
          projectLink: 'https://richardmattsson.github.io/weatherApp/',
          imageSrc: '../../assets/weather.png',
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
  width: 80%;
  flex-wrap: wrap;
  margin-top: 30px;
}
.project-card {
  border: 3px solid black;
  background-color: #222121;
  border-radius: 10px;
  margin: 20px;
  height: 500px;
}
.projectLinks {
  text-decoration: none;
}
.projectImg {
  max-width: 300px;
  margin: 20px;
}
.project-description {
  max-width: 300px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 25px;
}
</style>
