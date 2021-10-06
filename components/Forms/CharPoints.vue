<template>
  <!-- --------------- -->
  <!-- Character Points -->
  <!-- --------------- -->
  <accordion title="Character Points">
    <label class="block">
      <span class="text-gray-700">Points</span>
      <h1>{{availCharPoints}}</h1>
        <input
          class="form-input mt-1 block w-full"
          type="number"
          v-model="availCharPoints"
          disabled
        />
      <div class="mt-12 border-t-4 border-black">
        <Dice
          :dice="{ sides: 10, numberOfDice: 9, allowedRolls: 1 }"
          :debug="false"
          @result="updatePoints = $event"
        />
      </div>
    </label>
  </accordion>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapFields(['character.charPoints', 'character.availCharPoints']),
    updatePoints: {
     set(newValue){
       this.charPoints = newValue
       this.availCharPoints = newValue
     }
    }
  },
};
</script>

<style></style>
