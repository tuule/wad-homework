<!-- TEMPLATE -->
<template>
  <div class="like-button">
    <button type="button" name="thumbs-up"></button>
    <div class="numberOfLikes">{{likes}}</div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "LikeButton",
  props: [
      'likes'
  ]
}
</script>

<!-- STYLE -->
<style scoped>
.like-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding-left: 15px;
  padding-bottom: 15px;
}

.like-button > button {
  background-image: url("../assets/like-btn.png");
  background-color: #0c508d;
  background-repeat: no-repeat;
  background-position: 8px 7px;
  background-size: 25px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  width: 40px;
}

.like-button > button:hover {
  background-color: #03325c;
}

.numberOfLikes {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  background-color: #1285ec;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin-left: 7px;
}
</style>