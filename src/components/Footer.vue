<template>
  <footer>
    <ul>
      <li>Post-it Meta <sup>&copy;</sup></li>
      <li>
        <router-link to="/contact">Contact Us</router-link>
      </li>
    </ul>
    <div class="icons">
      <a href="#"><img src="../assets/icon-news.png" alt="logo" id="first"></a>
      <a href="#"><img src="../assets/icon-settings.png" alt="logo"></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  height: 60px;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  background-color: #e9ecef;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  height: 100%;
}

ul li {
  font-size: 18px;
  padding: 2px 0;
}

ul li a {
  text-decoration: none;
  font-weight: bold;
  color: #000000;
}

ul li a:hover {
  color: #3597ef;
}

.icons {
  height: 40px;
  padding: 10px 0;
}

.icons img {
  height: 100%;
  padding-right: 15px;
}
</style>