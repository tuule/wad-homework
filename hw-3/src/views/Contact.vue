<!-- TEMPLATE -->
<template>
  <main>
    <section id="content">
      <!-- beginning of content -->
      <div id="content-flow">
        <ContactForm/>
        <ContactInfo/>
      </div>
    </section>
  </main>
</template>

<!-- SCRIPT -->
<script>
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo"

export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactInfo
  }
}
</script>

<!-- STYLE -->
<style scoped>
main {
  margin-top: 70px;
}

#content {
  display: flex;
  flex-direction: column;
  width: 65%;
  min-height: calc(100vh - 70px);
  margin: auto;
  background-color: #ffffff;
}

#content #content-flow {
  padding: 40px 0 20px 0;
}
</style>