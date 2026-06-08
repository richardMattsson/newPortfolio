<script setup>
import ContactView from "./ContactView.vue";
import ProjectSectionsComponent from "../components/ProjectSectionsComponent.vue";
import ProfileComponent from "../components/ProfileComponent.vue";

const scrollToProjects = () => {
  document
    .getElementById("projects-section")
    ?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div id="home-view">
    <article id="container">
      <div id="profileText">
        <ProfileComponent />
      </div>
      <button class="scroll-link" @click="scrollToProjects">
        <span class="green-text">Scrolla vidare</span>
        <span class="scroll-arrow">↓</span>
      </button>
    </article>

    <section id="projects-section" class="home-section">
      <ProjectSectionsComponent />
    </section>

    <section class="quote-section" aria-label="Personligt citat">
      <p>
        "Letar du efter en utvecklare som är engagerad, nyfiken och
        lösningsorienterad? Jag är alltid intresserad av nya projekt och
        samarbeten."
      </p>
    </section>

    <section class="home-section contact-section-shell">
      <ContactView id="contact-section" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
$panel-dark: rgba(17, 34, 64, 0.9);
$panel-border: rgba(84, 196, 175, 0.18);
$text-light: #c3c7d6;
$accent: #54c4af;

html {
  scroll-behavior: smooth;
}

#home-view {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 72px;
}

#container {
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: min(1080px, calc(100% - 40px));
  margin: 0 auto;
}

#profileText {
  margin-top: 0;
  margin-bottom: 0;
}

.home-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 32px;
  width: 100%;
  padding: 48px 20px;
}

.quote-section {
  width: min(900px, calc(100% - 40px));
  margin: 0 auto;
  padding: 48px 0;
  text-align: center;
}

.quote-section p {
  margin: 0;
  color: $text-light;
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-style: italic;
  font-weight: 500;
  line-height: 1.25;
}

.contact-section-shell {
  width: min(1080px, calc(100% - 40px));
  margin: 0 auto;
  padding-top: 8px;
}

.scroll-link {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: $text-light;
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.82rem;
  background-color: transparent;
  border: none;
}

.scroll-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid $panel-border;
  border-radius: 999px;
  color: $accent;
}

@media only screen and (min-width: 768px) {
  #home-view {
    gap: 64px;
    padding-bottom: 96px;
  }

  #container {
    width: min(1080px, calc(100% - 80px));
  }

  .home-section {
    gap: 40px;
    padding-inline: 40px;
  }

  .quote-section {
    width: min(900px, calc(100% - 80px));
    padding: 64px 0;
  }

  .contact-section-shell {
    width: min(1080px, calc(100% - 80px));
  }
}

@media only screen and (min-width: 1280px) {
  #projects-section {
    grid-template-columns: repeat(2, minmax(0, 600px));
  }
}
</style>
