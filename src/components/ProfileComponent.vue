<script setup>
import profileImageUrl from "/images/ProfilbildDanmark_300.jpg";
</script>

<template>
  <article id="profile-article">
    <div class="profile-copy">
      <p class="green-text">Hej, jag heter</p>
      <h1>Richard Mattsson.</h1>
      <h2>Jag bygger saker på webben.</h2>
      <p id="description-info">
        I den här portfolion visar jag projekt jag har arbetat med inom frontend
        och fullstack. Fokus ligger på gränssnitt, funktion och att bygga
        lösningar som inte bara fungerar tekniskt utan också är enkla att
        använda.
      </p>
    </div>

    <figure align="right" class="profile-avatar">
      <img :src="profileImageUrl" alt="Portrait of Richard Mattsson" />
    </figure>
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
  display: flex;
  justify-content: center;
  margin: 0;
  width: clamp(50%, 50%, 100%);
}

.profile-avatar img {
  border-radius: 50px;
  width: 100%;
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
