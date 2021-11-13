<template>
  <div class="reset-button">
    <button type="button" name="reset">RESET LIKES</button>
  </div>
</template>

<script>
export default {
  name: "ResetButton"
}
</script>

<style scoped>
.reset-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(90% - 10px);
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px #b5b4b4;
  margin: 14px auto 0 auto;
  height: 45px;
  padding: 5px;
}

.reset-button > button {
  color: #ffffff;
  background-color: #adb5bd;
  font-size: 11px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  height: 40px;
  width: 110px;

}

.reset-button > button:hover {
  background-color: #0c508d;
}
</style>