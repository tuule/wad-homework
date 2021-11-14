<template>
  <!-- beginning of header -->
  <header>
    <section id="navbar">
      <div class="header-logo">
        <img src="../assets/post-it-logo.png" alt="logo">
      </div>
      <div class="items">
        <div class="item-box">
          <router-link to="/">Home</router-link>
        </div>
        <div class="item-box">
          <router-link to="/about">About</router-link>
        </div>
        <div class="item-box">
          <router-link to="/contact">Contact Us</router-link>
        </div>
      </div>
    </section>
  </header>
  <!-- end of header -->
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100%;
  top: 0;

  #navbar {
    height: 40px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    background-color: #ece6e6;
    z-index: 1;

    .header-logo {
      height: 40px;
      flex-grow: 1;

      img {
        height: 100%;
      }
    }

    .items {
      flex-grow: 2;
      display: flex;
      justify-content: center;
      align-items: center;

      .item-box {
        background-color: #ffffff;
        border: 1px solid #0c508d;
        border-radius: 16px;
        padding: 8px 20px;
        margin: 0 15px;
      }

    }

    a {
      font-size: 16px;
      font-weight: bold;
      color: #3597ef;
      text-decoration: none;

      &.router-link-exact-active {
        color: #0c508d;
      }

      &:hover {
        color: #e3cd63;
      }
    }
  }
}

</style>