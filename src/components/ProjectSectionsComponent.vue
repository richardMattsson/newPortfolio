<script setup>
import { useRouter } from "vue-router";
import projects from "../data/projects";

const router = useRouter();

const openProjectDetail = (slug) => {
  router.push(`/projects/${slug}`);
};
</script>

<template>
  <section
    v-for="(project, index) in projects"
    :key="project.title"
    class="project-section"
    role="link"
    tabindex="0"
    @click="openProjectDetail(project.slug)"
    @keydown.enter="openProjectDetail(project.slug)"
    @keydown.space.prevent="openProjectDetail(project.slug)"
  >
    <div class="project-copy">
      <div class="project-copy-main">
        <p class="project-index">0{{ index + 1 }}</p>
        <p class="project-eyebrow">{{ project.eyebrow }}</p>
        <h3>{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
      </div>

      <!-- <div class="project-copy-meta">
        <p class="project-tech">{{ project.tech }}</p>

        <div class="project-actions">
          <a
            :href="project.projectLink"
            target="_blank"
            rel="noreferrer"
            @click.stop
            >Se projekt</a
          >
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            rel="noreferrer"
            @click.stop
          >
            Github
          </a>
        </div>
      </div> -->
    </div>

    <div class="project-main">
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

      <!-- <div class="project-side">
        <div class="project-notes">
          <div class="project-note">
            <p class="project-label">Fokus</p>
            <p>{{ project.focus }}</p>
          </div>
          <div class="project-note">
            <p class="project-label">Byggt</p>
            <p>{{ project.build }}</p>
          </div>
          <div class="project-note">
            <p class="project-label">Nästa steg</p>
            <p>{{ project.nextStep }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
$panel-border: rgba(84, 196, 175, 0.18);
$text-light: #c3c7d6;
$text-muted: rgba(204, 214, 246, 0.72);
$accent: #54c4af;

.section-intro {
  margin: 0 auto 32px;
  max-width: 1080px;
}

.section-intro h2 {
  width: min(680px, 100%);
  margin: 12px 0 0;
  color: $text-light;
  font-size: 1.9rem;
  line-height: 1.2;
}

.project-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: 24px;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  border: 1px solid $panel-border;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(17, 34, 64, 0.92),
    rgba(10, 25, 47, 0.92)
  );
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.project-section:hover,
.project-section:focus-visible {
  border-color: rgba(84, 196, 175, 0.45);
  transform: translateY(-2px);
  outline: none;
}

.project-copy {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.project-copy-main {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.project-copy-meta {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 4px;
}

.project-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.project-visuals {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.project-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-index,
.project-eyebrow {
  margin: 0;
}

.project-eyebrow {
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.9rem;
}

.project-copy h3 {
  margin: 12px 0;
  font-size: 2rem;
  color: #ffffff;
}

.project-description,
.project-tech {
  margin: 0;
  color: $text-muted;
  line-height: 1.75;
}

.project-tech {
  margin: 0;
  color: $accent;
}

.project-notes {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-note {
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.03);
}

.project-note p {
  margin: 0;
  color: $text-muted;
  line-height: 1.65;
}

.project-note .project-label {
  margin-bottom: 8px;
  color: $accent;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
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
  max-height: 250px;
  max-width: 360px;
  justify-self: center;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
}

@media only screen and (min-width: 640px) {
  .project-section {
    grid-template-columns: minmax(0, 1fr) minmax(180px, 240px);
    align-items: center;
    gap: 24px;
  }

  .project-media {
    max-width: none;
  }
}

@media only screen and (min-width: 1279px) {
  .section-intro h2 {
    font-size: 2.5rem;
  }
}
</style>
