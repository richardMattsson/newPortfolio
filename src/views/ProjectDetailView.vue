<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import projects from "../data/projects";

const route = useRoute();

const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);
</script>

<template>
  <article v-if="project" class="project-detail">
    <RouterLink class="back-link" to="/projects"
      >Tillbaka till projekt</RouterLink
    >

    <header class="project-hero">
      <div class="project-hero-copy">
        <p class="project-eyebrow">{{ project.eyebrow }}</p>
        <h1>{{ project.title }}</h1>
        <p class="project-description">{{ project.description }}</p>

        <div class="project-actions">
          <a :href="project.projectLink" target="_blank" rel="noreferrer">
            Se projekt
          </a>
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <div class="project-visuals">
        <img
          v-if="project.align === 'horizontal'"
          class="project-media"
          :src="project.imageSrc"
          :alt="project.altText"
        />
        <img
          v-else
          class="project-media-vertical"
          :src="project.imageSrc"
          :alt="project.altText"
        />
      </div>
    </header>

    <section class="project-info" aria-label="Projektinformation">
      <div class="project-info-block">
        <p class="project-label">Fokus</p>
        <p>{{ project.focus }}</p>
      </div>
      <div class="project-info-block">
        <p class="project-label">Byggt</p>
        <p>{{ project.build }}</p>
      </div>
      <div class="project-info-block">
        <p class="project-label">Nästa steg</p>
        <p>{{ project.nextStep }}</p>
      </div>
      <div class="project-info-block">
        <p class="project-label">Teknik</p>
        <p>{{ project.tech }}</p>
      </div>
    </section>
  </article>

  <article v-else class="project-detail project-not-found">
    <h1>Projektet hittades inte.</h1>
    <RouterLink class="back-link" to="/projects"
      >Tillbaka till projekt</RouterLink
    >
  </article>
</template>

<style lang="scss" scoped>
$panel-border: rgba(84, 196, 175, 0.18);
$text-light: #c3c7d6;
$text-muted: rgba(204, 214, 246, 0.72);
$accent: #54c4af;

.project-detail {
  width: min(1080px, calc(100% - 40px));
  margin: 0 auto;
  padding: 32px 0 80px;
}

.back-link {
  display: inline-flex;
  margin-bottom: 24px;
  color: $accent;
  font-family: monospace;
  font-weight: 700;
  text-decoration: none;
}

.project-hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: center;
}

.project-hero-copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-eyebrow,
.project-label {
  margin: 0;
  color: $accent;
  font-family: monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.82rem;
}

h1 {
  margin: 0;
  color: #ffffff;
  font-size: clamp(2.4rem, 8vw, 4rem);
  line-height: 1;
}

.project-description {
  margin: 0;
  color: $text-light;
  font-size: 1.15rem;
  line-height: 1.7;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-actions a {
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid $panel-border;
  text-decoration: none;
  color: $text-light;
  background-color: rgba(84, 196, 175, 0.08);
}

.project-visuals {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-media {
  width: 100%;
  max-height: 200px;
  max-width: 360px;
  justify-self: center;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
}

.project-media-vertical {
  max-height: 300px;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
}

.project-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 40px;
}

.project-info-block {
  padding: 20px;
  border: 1px solid $panel-border;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.03);
}

.project-info-block p {
  margin: 0;
  color: $text-muted;
  line-height: 1.75;
}

.project-info-block .project-label {
  margin-bottom: 8px;
  color: $accent;
}

.project-not-found {
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .project-detail {
    width: min(1080px, calc(100% - 80px));
    padding-top: 56px;
  }

  .project-hero {
    grid-template-columns: minmax(0, 1fr) minmax(250px, 0.75fr);
    gap: 48px;
  }

  .project-info {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
