<!-- TEMPLATE -->
<template>
  <div class="contact-us">
    <div class="contact-text">
      <h1>How can we help?</h1>
      <hr>
      <p>Use this form to send us a message and we'll get back to you as soon as possible.</p>
    </div>
    <form ref="submitForm" @submit.prevent="submitForm">
      <div class="form-item">
        <label for="name">Your name</label>
        <input type="text" id="name" v-model="name"/>
      </div>
      <div class="form-item">
        <label for="email">Your e-mail</label>
        <input type="email" id="email" v-model="email"/>
      </div>
      <div class="form-item">
        <label for="subject">Subject</label>
        <input type="text" id="subject" v-model="subject"/>
      </div>
      <div class="form-item">
        <label for="message">Message</label>
        <textarea rows="7" id="message" v-model="message"></textarea>
      </div>
      <p class="error" v-if="!formIsValid">Please fill out all fields</p>
      <div class="actions">
        <button type="submit" name="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      formIsValid: true
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.name === "" || this.email === "" || !this.email.includes("@") || this.subject === "" || this.message === "") {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch("contactUs", {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      });
      this.$refs.submitForm.reset();
    }
  }
}
</script>

<!-- STYLE -->
<style scoped>
.contact-us {
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px #b5b4b4;
  margin: 0 auto 20px auto;
}

.contact-text {
  padding: 15px;
}

.contact-text h1 {
  font-size: 26px;
}

.contact-text p {
  font-size: 20px;
}

hr {
  border: 1px solid #b1a7a6;
}

form {
  padding: 15px;
}

.form-item {
  margin-bottom: 30px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
  font-size: 20px;
  color: #0c508d;
}

input, textarea {
  display: block;
  width: calc(100% - 15px);
  border: 1px solid #b5b4b4;
  padding: 3px 6px;
  border-radius: 9px;
}

input:focus, textarea:focus {
  background-color: #f5f4f4;
  outline: none;
  border-color: #3597ef;
}

.error {
  color: crimson;
  font-weight: bold;
}

button {
  color: #ffffff;
  background-color: #b1a7a6;
  font-size: 20px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  height: 40px;
  width: 110px;
}

button:hover {
  background-color: #0c508d;
}
</style>