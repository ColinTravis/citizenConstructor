<template>
  <div class="dice">
    <div class="sideSelectors">
      <button @click="changeSides(6)">Six Sides</button>
      <button @click="changeSides(10)">Ten Sides</button>
      <h1>SIDES: {{ dice.sides }}</h1>
    </div>
    <div>
      <label class="block">
        <span class="text-gray-700">Number of Dice to Roll</span>
        <input
          id="numberOfDice"
          class="form-input mt-1 block w-full"
          type="number"
          min="1"
          max="8"
          value="1"
          v-model="dice.numberOfDice"
        />
      </label>
    </div>
    <div
      class="diceResult items-center justify-center flex-col text-black"
      augmented-ui="tl-clip br-clip exe"
    >
      <h1 class="font-ethnocentric text-5xl">{{ diceResult }}</h1>
    </div>
    <button id="rollButton" @click="roll()">Roll</button>
    <button id="rollButton" @click="resetDice()">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    dice: {
      type: Object,
      default: {
        numberOfDice: 1,
        sides: 6,
      },
    },
  },
  data() {
    return {
      diceResult: null,
      isDev: process.env.NODE_ENV === 'development',
    };
  },
  methods: {
    resetDice() {
      this.diceResult = null;
    },
    roll() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let randomNumber;
      let dicePool = [];
      for (let i = 0; i < this.dice.numberOfDice; i++) {
        randomNumber = Math.floor(Math.random() * this.dice.sides) + 1;
        dicePool.push(randomNumber);
      }
      if (this.isDev) {
        console.log(
          'Rolled ',
          this.dice.numberOfDice,
          this.dice.sides,
          'sided dice giving rolls of: ',
          dicePool
        );
      }
      this.diceResult = dicePool.reduce(reducer);
      this.$emit('result', this.diceResult);
      if (this.isDev) {
        console.log('The sum of the dice is: ', this.diceResult);
      }
    },
    changeSides(numberOfSides) {
      this.resetDice();
      this.dice.sides = numberOfSides;
    },
  },
};
</script>

<style scoped>
.diceResult {
  display: flex;
  width: 110px;
  height: 110px;
  @apply m-5;
  @apply p-5;
  @apply text-center;
  --aug-border: 5px;
  --aug-inset: 5px;
  --aug-border-bg: gold;
  --aug-inset-bg: gold;
}
</style>
