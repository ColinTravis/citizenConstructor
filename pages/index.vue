<template>
  <div class="container">
    <div>
      <h1 class="title font-krona">citizenRegistration</h1>

      <Form />
      <div v-if="isDev" class="wrapper-test text-white mt-12">
        <h1>QuestionIndex:</h1>
        <!-- <p>{{ questionIndex }}</p> -->
        <h1>Questions:</h1>
        <!-- <p>{{ questions }}</p> -->
      </div>
      <div class="mt-12 border-t-4 border-black">
        <Dice :dice="{ sides: 10, numberOfDice: 9, allowedRolls: 9 }" />
      </div>
      <div class="mt-12 border-t-4 border-black">
        <Dice :dice="{ sides: 3, numberOfDice: 3, allowedRolls: 2 }" />
      </div>

      <div>
        <Slideup @close="modalVisible = false" />
        <!-- <button @click="testAlert">Fill PDF</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { mapFields } from 'vuex-map-fields';
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
    // ...mapFields(['character.handle', 'character.age']),
    ...mapState(['character', 'skills', 'roles']),
  },
  data() {
    return {
      modalVisible: true,
      isDev: process.env.NODE_ENV === 'development',
    };
  },
  methods: {
    triggerModal(value) {
      this.modalVisible = value;
    },
  },
};
</script>

<style>
.wrapper-test {
  background: linear-gradient(to bottom right, rgba(3, 2, 3, 0.7), transparent),
    repeating-radial-gradient(
      rgba(250, 234, 6, 0.938),
      rgba(250, 234, 6, 0.938) 1px,
      transparent 2px,
      transparent 50px
    ),
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 24px,
      rgb(255, 0, 0) 25px,
      transparent 26px,
      transparent 100px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 24px,
      rgba(255, 0, 0, 0.25) 25px,
      transparent 26px,
      transparent 100px
    ),
    #3e1fee;
  background-size: auto auto, 50px 50px, 100px 100px, 100px 100px, auto auto;
}
</style>
