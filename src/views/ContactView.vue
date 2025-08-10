<script setup>
import { BCol, BFormInvalidFeedback, BRow } from 'bootstrap-vue-next';
import { computed, ref } from 'vue';

const text = ref('');
const email = ref('');
const textEx = ref('');
const show = ref(true);

const state = computed(() => (text.value?.length > 2 ? true : false));
const stateEmail = computed(() => email.value?.includes('@'));
</script>

<template>
  <!-- <article id="contact-article">
    <h1>FormSubmit Demo</h1>
    <form
      target="_blank"
      action="https://formsubmit.co/mattsson.richard@gmail.com"
      method="POST"
    >
      <div class="form-group">
        <div class="form-row">
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div class="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <textarea
          placeholder="Your Message"
          name="message"
          class="form-control"
          rows="10"
          required
        ></textarea>
      </div>

      <button type="submit" id="submit-button">Submit Form</button>
    </form>
  </article> -->

  <!-- <div class="container">
    <form
      target="_blank"
      action="https://formsubmit.co/your@email.com"
      method="POST"
    >
      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Full Name"
              required
            />
          </div>
          <div class="col">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea
          placeholder="Your Message"
          class="form-control"
          name="message"
          rows="10"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-lg btn-dark btn-block">
        Submit Form
      </button>
    </form>
  </div> -->

  <h1>Skicka ett meddelande till mig.</h1>
  <BForm
    v-if="show"
    target="_blank"
    action="https://formsubmit.co/mattsson.richard@gmail.com"
    method="POST"
    class="submit-form"
  >
    <BContainer fluid="sm">
      <BRow>
        <BCol cols="6">
          <BFormInput
            v-model="text"
            :state="state"
            v-model.trim="text"
            placeholder="Skriv ditt namn"
            name="name"
            class="bg-transparent text-light form-control"
          />

          <BFormInvalidFeedback id="input-live-feedback">
            Använd minst 3 tecken.
          </BFormInvalidFeedback>
        </BCol>
        <BCol cols="6">
          <BFormInput
            v-model="email"
            :state="stateEmail"
            type="email"
            placeholder="Enter your email"
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
            class="mt-3 w-100 text-light submit-button bg-transparent"
            squared
            >Submit</BButton
          >
        </BCol>
      </BRow>
    </BContainer>
  </BForm>
</template>

<style lang="scss" scoped>
// #article-container {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
h1 {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 15px;
  text-align: center;
}
#contact-article {
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 500px;
  border: 1px solid red;
}
.bv-example-row {
}
.submit-form {
}
.form-group {
  // display: flex;

  // border: 1px solid red;
}
.form-row {
  // width: 100%;
  // margin: 5px;
  // padding: 5px;
}
.form-control {
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
#submit-button:hover {
  background-color: blue;
}

@media only screen and (min-width: 480px) {
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
