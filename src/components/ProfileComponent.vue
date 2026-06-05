<script setup>
import profileImageUrl from '/images/ProfilbildDanmark.JPG?url';
</script>

<template>
  <article id="profile-article">
    <div class="profile-copy">
      <p class="green-text">Hej, jag heter</p>
      <h1>Richard Mattsson.</h1>
      <h2>Jag bygger saker på webben.</h2>
      <p id="description-info">
        I den här portfolion visar jag projekt jag har arbetat med inom frontend och fullstack. Fokus ligger på gränssnitt, funktion och att bygga lösningar som inte bara fungerar tekniskt utan också är enkla att använda.
      </p>
    </div>

    <!-- <figure class="profile-avatar">
      <img :src="profileImageUrl" alt="Portrait of Richard Mattsson" />
    </figure> -->
  </article>
</template>

<style lang="scss" scoped>
$primary-color: #183153;
$dark-color: rgba(0, 30, 66, 0.85);
$light-color: #515e7b;

$primary-dark: #0a192f;
$text-light: #c3c7d6;

$text-green: #54c4af;

#profile-article {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 32px;
}

.profile-copy {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.profile-avatar {
  position: relative;
  width: min(280px, 15vw);
  aspect-ratio: 1;
  margin: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(84, 196, 175, 0.5);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
  isolation: isolate;
}

.profile-avatar::before {
  content: "";
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(84, 196, 175, 0.22), rgba(84, 196, 175, 0));
  z-index: -2;
}

.profile-avatar::after {
  content: "";
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  z-index: 1;
  pointer-events: none;
}

.profile-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 15px;
}
h2 {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 20px;
  color: #ccd6f6a4;
  width: 80%;
}
#description-info {
  font-size: 1rem;
  color: #ccd6f6a4;
  width: min(100%, 560px);
  line-height: 25px;
}

@media only screen and (min-width: 640px) {
  #profile-article {
    grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
    gap: 40px;
  }

  .profile-avatar {
    width: min(320px, 32vw);
  }

  h2 {
    width: min(100%, 520px);
  }
}
@media only screen and (min-width: 768px) {
  .profile-copy {
    flex: 1;
  }

  .profile-avatar {
    width: min(280px, 34vw);
    flex-shrink: 0;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 15px;
  }
  h2 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 30px;
    color: #ccd6f6a4;
    width: min(100%, 560px);
  }
  #description-info {
    color: #ccd6f6a4;
    width: min(100%, 560px);
  }
}
@media only screen and (min-width: 1279px) {
  #profile-article {
    grid-template-columns: minmax(0, 1fr) 380px;
    gap: 56px;
  }

  .profile-avatar {
    width: 280px;
  }
}
</style>
