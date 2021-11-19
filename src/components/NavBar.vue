<!-- TEMPLATE -->
<template>
  <!-- beginning of header -->
  <header>
    <section id="navbar">
      <div class="header-logo">
        <img src="../assets/post-it-logo.png" alt="logo">
      </div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact Us</router-link>
        </li>
      </ul>
    </section>
  </header>
  <!-- end of header -->
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "NavBar"
}
</script>

<!-- STYLE -->
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
    background-color: #e9ecef;
    z-index: 1;

    .header-logo {
      height: 40px;
      flex-grow: 1;

      img {
        height: 100%;
      }
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-grow: 2;
      margin: 0;
      padding: 0;
      height: 100%;
    }

    li {
      margin: 0 15px;
    }

    a {
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      color: #0c508d;
      text-decoration: none;
      background: transparent;
      border: 1px solid #3597ef;
      border-radius: 16px;
      cursor: pointer;
      padding: 8px 24px;

      &:hover {
        color: #0c508d;
        border-color: #0c508d;
        background-color: transparent;
      }

      &.router-link-exact-active {
        color: #ffffff;
        border-color: #0c508d;
        background-color: #0c508d;
      }
    }
  }
}
</style>