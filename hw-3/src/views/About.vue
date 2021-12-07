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
