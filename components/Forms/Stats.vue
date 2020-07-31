<template>
  <!-- -------------- -->
  <!-- Stats -->
  <!-- -------------- -->
  <accordion title="Character Stats">
    <div class="block">
        <p>Available Points: {{availCharPoints}}</p>
      <span class="text-gray-700">Stats</span>
      <div v-for="(stat, statValue) in stats" :key="statValue" class="mt-2">
        <label class="inline-flex items-center">
          <span class="ml-2">NAME: {{ stat.name }}</span>
          <input
            type="number"
            class="form-input text-red-600"
            name="stat-assignment"
            v-model="stat.points"
          />
          <button @click="increasePoints(stat)" class="text-xl mr-3 rounded border-black border">+</button>
          <button @click="decreasePoints(stat)" class="text-xl rounded border-black border">-</button>
        </label>
      </div>
    </div>
  </accordion>
</template>

<script>
import { mapMultiRowFields, mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapMultiRowFields(['character.stats']),
    ...mapFields(['character.availCharPoints'])
  },
  methods: {
      increasePoints(stat){
        stat.points++
        this.availCharPoints--
      },
      decreasePoints(stat){
        stat.points--
        this.availCharPoints++
      }
  }
};
</script>

<style></style>
