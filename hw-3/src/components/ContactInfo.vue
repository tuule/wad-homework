<!-- TEMPLATE -->
<template>
  <div class="contact-info">
    <p>If you prefer, you can also email us at
      <span style="font-weight: bold; color: #3597ef">info@postit.com</span> or call us at
      <span style="font-weight: bold; color: #3597ef">+44(0)5555 979797</span>.</p>
  </div>

</template>

<!-- SCRIPT -->
<script>
export default {
  name: "ContactInfo"
}
</script>

<!-- STYLE -->
<style scoped>
.contact-info {
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px #b5b4b4;
  margin: 0 auto 20px auto;
}

.contact-info p {
  font-size: 20px;
  padding: 15px;
}
</style>