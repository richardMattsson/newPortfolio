<script setup>
import { BCol, BFormInvalidFeedback, BRow } from "bootstrap-vue-next";
import { computed, ref } from "vue";

const text = ref("");
const email = ref("");
const textEx = ref("");
const show = ref(true);
</script>

<template>
  <h1>Kontakta mig</h1>
  <BForm
    v-if="show"
    target="_blank"
    action="https://formsubmit.co/mattsson.richard@gmail.com"
    method="POST"
    class="submit-form"
  >
    <BContainer fluid="sm">
      <BRow class="g-3">
        <BCol cols="12">
          <BFormInput
            v-model="text"
            :state="state"
            v-model.trim="text"
            placeholder="Namn"
            name="name"
            class="bg-transparent text-light"
          />
        </BCol>
        <BCol cols="12">
          <BFormInput
            v-model="email"
            :state="stateEmail"
            type="email"
            placeholder="Mail"
            name="email"
            class="bg-transparent text-light form-control"
          />
          <BFormInvalidFeedback> Skriv en giltig email</BFormInvalidFeedback>
        </BCol>
        <BCol cols="12">
          <BFormTextarea
            v-model="textEx"
            placeholder="Skriv ditt meddelande..."
            name="message"
            rows="8"
            class="bg-transparent text-light form-control"
          />
        </BCol>
        <BCol cols="12">
          <BButton
            type="submit"
            variant="outline-light"
            class="w-100 text-light submit-button"
            rounded
            >Skicka</BButton
          >
        </BCol>
      </BRow>
    </BContainer>
  </BForm>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
}
#contact-article {
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 500px;
  border: 1px solid red;
}
.form-control::-webkit-input-placeholder {
  color: white;
}
.form-control:-moz-placeholder {
  color: white;
}
.form-control::-moz-placeholder {
  color: white;
}
.form-control:-ms-input-placeholder {
  color: white;
}

$primary-color: #183153;

.submit-button:hover {
  background-color: $primary-color;
}

@media only screen and (min-width: 480px) {
  /* .submit-button {
    text-align: start;
  } */
}
@media only screen and (min-width: 768px) {
  .submit-form {
    // width: 50%;
    margin: 0 25%;
  }
}
@media only screen and (min-width: 1279px) {
}
</style>
