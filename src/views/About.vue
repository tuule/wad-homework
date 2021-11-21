<template>
  <main>
    <section id="content">
      <!-- beginning of content -->
      <div id="content-flow">
        <AboutUsInfo />
      </div>
    </section>
  </main>
</template>

<script>

import AboutUsInfo from "../components/AboutUsInfo";

export default {
  name: "About",
  components: {
    AboutUsInfo,
  }
};
</script>

<style scoped>
main {
  margin-top: 110px;
}

.about {
  text-align: center;
}
</style>
