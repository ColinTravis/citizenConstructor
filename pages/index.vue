<template>
  <div class="container">
    <div>
      <h1 class="title font-krona">citizenRegistration</h1>
      <!-- <div class="demo" augmented-ui="tl-clip br-clip exe">Test</div> -->
      <accordion title="Intro Stuff">
        <label class="block">
          <span class="text-gray-700">Handle</span>
          <input class="form-input mt-1 block w-full" v-model="handle" />
        </label>
        <label class="block">
          <span class="text-gray-700">Age</span>
          <input
            class="form-input mt-1 block w-full"
            type="number"
            placeholder="20"
            v-model="age"
          />
            <!-- v-model="character.age" -->
        </label>
      </accordion>
      <accordion title="Role"></accordion>
      <div class="wrapper-test text-white mt-12">
        <h1>QuestionIndex:</h1>
        <!-- <p>{{ questionIndex }}</p> -->
        <h1>Questions:</h1>
        <!-- <p>{{ questions }}</p> -->
      </div>
      <div class="mt-12 border-t-4 border-black">
        <Dice :dice="{ sides: 10, numberOfDice: 9 }" />
      </div>
      <div class="mt-12 border-t-4 border-black">
        <Dice :dice="{ sides: 3, numberOfDice: 3 }" />
      </div>

      <div>
        <Slideup @close="modalVisible = false" />
        <!-- <button @click="testAlert">Fill PDF</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
// import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapFields(['character.handle','character.age'])
    // ...mapState(['questions', 'questionIndex', 'character']),
  },
  data() {
    return {
      modalVisible: true,
    };
  },
  methods: {
    triggerModal(value) {
      this.modalVisible = value;
    },
  },
  mounted() {},
};
</script>

<style>
div.demo {
  display: inline-block;
  width: 110px;
  height: 110px;
  margin: 10px;
  --aug-border: 5px;
  --aug-inset: 5px;
  padding: 10px; /* mind the gap */
  text-align: center;
  --aug-border-bg: gold;
  --aug-inset-bg: gold;
}
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
