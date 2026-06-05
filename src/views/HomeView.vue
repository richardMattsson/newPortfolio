<script setup>
import ContactView from "./ContactView.vue";
import ProjectSectionsComponent from "../components/ProjectSectionsComponent.vue";
import ProfileComponent from "../components/ProfileComponent.vue";

const scrollToProjects = () => {
  document
    .getElementById("projects-section")
    ?.scrollIntoView({ behavior: "smooth" })
}
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
      <!-- <a class="scroll-link" href="#projects-section">
        <span class="green-text">Scrolla vidare</span>
        <span class="scroll-arrow">↓</span>
      </a> -->
    </article>

    <section id="projects-section" class="home-section">
      <ProjectSectionsComponent />
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

html{
  scroll-behavior: smooth;
}

#home-view {
  display: flex;
  flex-direction: column;
  gap: 48px;
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
  width: 100%;
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

  .contact-section-shell {
    width: min(1080px, calc(100% - 80px));
  }
}
</style>
