<template>
  <!-- --------------- -->
  <!-- Character Points -->
  <!-- --------------- -->
  <accordion title="Character Points">
    <label class="block">
      <span class="text-gray-700">Points</span>
      <div class="mt-12 border-t-4 border-black">
        <Dice
          :dice="{ sides: 10, numberOfDice: 9 }"
          @result="charPoints = $event"
        />
      </div>
      <input
        class="form-input mt-1 block w-full"
        type="number"
        v-model="charPoints"
      />
    </label>
  </accordion>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapFields(['character.charPoints']),
  },
};
</script>

<style></style>
