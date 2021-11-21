<!-- TEMPLATE -->
<template>
  <div class="aboutUs-start">
    <p>
      Here you can find information about us
    </p>
  </div>
  <div class="aboutUs-info">
      <p>
          Our team members are:
      </p>
      <p class="names">
          Tuule, Teele and Tanel
      </p>
  </div>
    <form ref="submitForm" @submit.prevent="submitForm">
      <div class="aboutUs-info" style="width: 50%">
        <label for="name">Type in the name you wish to inquire additional information about</label>
        <input type="text" id="name" v-model="name" />
      </div>
    </form>
  <div class="aboutUs-FullName" v-if="NameTyped">
      <p class="names" v-if="nameTuule">
          Her full name is Tuule Tani
      </p>
      <p class="names" v-if="nameTeele">
          Her full name is Teele Tani
      </p>
      <p class="names" v-if="nameTanel">
          His full name is Tanel Tamm
      </p>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "AboutUsInfo",
data() {
    return {
    
      name: "",
      NameTyped: false,
      nameTuule: false,
      nameTeele: false,
      nameTanel: false

    };
  },
  methods: {
    submitForm() {

        this.NameTyped = false;

        this.nameTuule = false;
        this.nameTeele = false;
        this.nameTanel = false;

        if(
            this.name === "Tuule" ||
            this.name === "Teele" ||
            this.name === "Tanel"
        ){
            this.NameTyped = true;

            if(this.name === "Tuule"){
                this.nameTuule = true;
            }

            if(this.name === "Teele"){
                this.nameTeele = true
            }

            if(this.name === "Tanel"){
                this.nameTanel = true
            }
        }
      
    },
  },
};
</script>

<!-- STYLE -->
<style scoped>
.aboutUs-start {
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #5f9dc9;
  border-radius: 5px;
  box-shadow: 0 0 10px #b5d9fa;
  margin: 0 auto 20px auto;
}

.aboutUs-start p {
  text-align: center;
  vertical-align: middle;
  font-size: 60px;
  padding: 5px;
}

.aboutUs-info {
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: #5f9dc9;
  border-radius: 5px;
  box-shadow: 0 0 10px #b5d9fa;
  margin: 0 auto 20px auto;
}

.aboutUs-info p {
  text-align: center;
  vertical-align: middle;
  font-size: 24px;
  padding: 10px;
}

.aboutUs-info label{
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  padding: 15px;
}

.aboutUs-info input{
  align-self: center;
  width: 30%;
  padding: 10px;
  margin-bottom: 20px;
}

p.names {
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  padding: 10px;
}

.aboutUs-FullName {
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #5f9dc9;
  border-radius: 5px;
  box-shadow: 0 0 10px #b5d9fa;
  margin: 0 auto 20px auto;
}
</style>
